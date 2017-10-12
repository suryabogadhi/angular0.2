import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentList = [
    {name:"surya",email:"surya@gmail.com",age:24,phone:9908035150},
    {name:"Prakash",email:"prakash@gmail.com",age:23,phone:8908035150},
    {name:"Raj",email:"raj@gmail.com",age:23,phone:7908035150}
  ];

  mainFuncAddStudent(data){
    this.studentList.push(data);
  }
}
