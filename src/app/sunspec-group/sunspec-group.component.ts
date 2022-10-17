import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModBusDevice, ModBusModel } from '../modbus-types';
import { Schema, Point, Group } from '../sunspec-types';

@Component({
  selector: 'app-sunspec-group',
  templateUrl: './sunspec-group.component.html',
  styleUrls: ['./sunspec-group.component.css']
})
export class SunspecGroupComponent implements OnInit {
  readonly IGNORED_POINT_TYPES = new Set(['pad', 'sunssf']);
  readonly IGNORED_POINT_NAMES = new Set(['ID', 'L']);

  @Input() group!: Group;
  @Input() model!: any;
  @Input() parentGroup?: Group;
  pointsByName: { [id: string]: Point; } = {};
  parentPointsByName: { [id: string]: Point; } = {};

  constructor() { }

  ngOnInit(): void {
    const points = this.group.points || [];
    this.pointsByName = Object.assign({}, ...points.map((x) => ({ [x.name]: x })));
    this.parentPointsByName = Object.assign({}, ...(this.parentGroup?.points || []).map((x) => ({ [x.name]: x })));
  }

  getValue(point: Point): any {
    let value = this.model[point.name];
    if (point.sf) {
      let sf;
      if (typeof (point.sf) === 'string') {
        // TODO probably want a central service API for the SunSpec model data
        let sfPoint = this.pointsByName[point.sf];
        if (!sfPoint) {
          sfPoint = this.parentPointsByName[point.sf];
        }

        if (sfPoint) {
          sf = this.model[sfPoint.name];
        } else {
          sf = 0;
          console.log("!!! Did not find " + point.sf + " on ", this.group);
        }
      } else {
        sf = point.sf;
      }

      if (sf && sf != 0) {
        value = value * Math.pow(10, sf)
      }
    }

    if (point.symbols) {
      if (typeof (value) === 'number' && (point.type === "bitfield16" || point.type === "bitfield32")) {
        let bitNames = "";
        for (let i = 0; i < point.symbols.length; i++) {
          const s = point.symbols[i];
          if (typeof (s.value) === 'number') {
            if ((value & (1 << s.value)) != 0) {
              if (bitNames.length > 0) {
                bitNames += ", ";
              }
              bitNames += s.name;
            }
          }
        }
        return bitNames;
      }

      for (let i = 0; i < point.symbols.length; i++) {
        const s = point.symbols[i];
        if (s.value === value) {
          return s.name;
        }
      }
    }
    return value;
  }

  // TODO add toggle to show unset points
  shouldShowPoint(point: Point): boolean {
    if (this.IGNORED_POINT_TYPES.has(point.type)) {
      return false;
    }
    if (this.IGNORED_POINT_NAMES.has(point.name)) {
      return false;
    }
    const value = this.model[point.name];
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    return value != undefined;
  }
}
