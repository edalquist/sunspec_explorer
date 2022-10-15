import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sunspec_explorer';
  constructor(private http: HttpClient) { }

  deviceList: { id: number }[] = [];

  ngOnInit() {
    this.http.get<{ id: number }[]>('/assets/modbus-data/devices.json').subscribe(data => {
      this.deviceList = data;
    });
  }
}
