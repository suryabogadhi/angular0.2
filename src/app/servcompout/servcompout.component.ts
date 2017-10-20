import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-servcompout',
  templateUrl: './servcompout.component.html'
})
export class ServcompoutComponent implements OnInit {
  myData = [];
  constructor(private outServ: ServiceService) { }

  ngOnInit() {
    this.myData = this.outServ.dataList;
  }

}
