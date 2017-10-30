import { Component, OnInit } from '@angular/core';
import { PractserviceService } from '../practservice.service';

@Component({
  selector: 'app-practservein',
  templateUrl: './practservein.component.html',
  styleUrls: ['./practservein.component.css']
})
  export class PractserveinComponent implements OnInit {

  constructor(private inputpracticein:PractserviceService) { }
 
  studentDetails = [];

  name = "";
  email = "";
  age = null;
  phone = null;
  
  ngOnInit() {
  }

  addstudent(){

    console.log('hai');
   // this.studentDetails.push({name:this.name,email:this.email,age:this.age,phone:this.phone})
    this.inputpracticein.addDataList({name:this.name,email:this.email,age:this.age,phone:this.phone});
    console.log({name:this.name,email:this.email,age:this.age,phone:this.phone});

  }


}
