import { Component, OnInit } from '@angular/core';
import { PractserviceService } from '../practservice.service';

@Component({
  selector: 'app-practserveout',
  templateUrl: './practserveout.component.html',
  styleUrls: ['./practserveout.component.css']
})
export class PractserveoutComponent implements OnInit {
  studentDetails = [];

  constructor(private outputpracticeout:PractserviceService, ) { }

  ngOnInit() {
    this.studentDetails = this.outputpracticeout.studentDetails;
  }


  removestudent(ids){
    this.outputpracticeout.removestudentidentity(ids);

  }

}
