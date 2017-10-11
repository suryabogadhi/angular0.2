import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.css']
})

export class Body2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = "";
  email = "";
  age = null;
  phone = null;
  status = "Add Your Details";
  sts = false;

  studentList = [
    {name:"surya",email:"surya@gmail.com",age:24,phone:9908035150},
    {name:"Prakash",email:"prakash@gmail.com",age:23,phone:8908035150},
    {name:"Raj",email:"raj@gmail.com",age:23,phone:7908035150}
  ];

  addName(event:Event){
    this.name = (<HTMLInputElement>event.target).value;
    console.log(this.name);
  }

  addEmail(event:Event){
    this.email = (<HTMLInputElement>event.target).value;
    console.log(this.email);
  
  }

  addAge(event:Event){
    this.age = (<HTMLInputElement>event.target).value;
    console.log(this.age);
  
  }

  addPhone(event:Event){
    this.phone = (<HTMLInputElement>event.target).value;
    console.log(this.phone);

  }

  addstudent(){
    console.log('hai');
    this.studentList.push({name:this.name,email:this.email,age:this.age,phone:this.phone},)
    this.status = "Hello "+this.name+" your data is added";
    this.name  = "";
    this.email = ""; 
    this.age   = null;
    this.phone   = null;
    this.sts   = true;
    //console.log(this.students);

  }

}
