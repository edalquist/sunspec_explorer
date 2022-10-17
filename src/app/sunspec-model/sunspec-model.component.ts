import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModBusDevice, ModBusModel } from '../modbus-types';
import { Schema, Point } from '../sunspec-types';

@Component({
  selector: 'app-sunspec-model',
  templateUrl: './sunspec-model.component.html',
  styleUrls: ['./sunspec-model.component.css']
})
export class SunspecModelComponent implements OnInit {
  @Input() model!: ModBusModel;
  schema?: Schema;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Schema>('/assets/sunspec-models/json/model_' + this.model.ID + '.json').subscribe(data => {
      this.schema = data;
    });
  }
}
