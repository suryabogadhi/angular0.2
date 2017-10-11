import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.css']
})  
export class Body1Component implements OnInit {

  students = [
    {name:"sumanth",age:50},
    {name:"surya",age:51},
    {name:"teja",age:52}
  ];

  //myCount = Array(1000).fill(0).map((x,a)=>a);

  name = "";
  age  = null;
  st = false;
  status = "No data inserted!"
  //age: number  = null;

  constructor() { }

  ngOnInit() {
  }

  anchorClicked(event: Event){
    console.log(event);
  }

  addName(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
  }
  addAge(event: Event){
    this.age = (<HTMLInputElement>event.target).value;
  }

  insertInfo(){
      this.students.push({name:this.name,age:this.age});
      this.status = "New data inserted name: "+this.name+" and age is "+this.age;
      this.name= "";
      this.age = null;
      this.st = true;
      console.log(this.students);
  }

}
