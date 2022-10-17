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
  readonly IGNORED_POINT_TYPES = new Set(['pad']);
  readonly IGNORED_POINT_NAMES = new Set(['ID', 'L']);

  @Input() group!: Group;
  @Input() model!: any;

  constructor() { }

  ngOnInit(): void {
    console.log("group", this.group);
    console.log("model", this.model);
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
