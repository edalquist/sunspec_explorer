import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModBusDevice } from '../modbus-types';

@Component({
  selector: 'app-sunspec-device',
  templateUrl: './sunspec-device.component.html',
  styleUrls: ['./sunspec-device.component.css']
})
export class SunspecDeviceComponent implements OnInit {

  @Input() deviceId: number = 0;

  device!: ModBusDevice;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.deviceId);

    this.http.get<ModBusDevice>('/assets/modbus-data/' + this.deviceId + '.json').subscribe(data => {
      console.log(data);
      this.device = data;
    });
  }

}
