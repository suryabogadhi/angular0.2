import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() addingStudent = new EventEmitter();

  name = "";
  email = "";
  age = "";
  phone = "";

  constructor() { }

  ngOnInit() {
  }

  addstudent(){
    //{name:this.name,email:this.email,age:this.age,phone:this.phone}
    console.log({name:this.name,email:this.email,age:this.age,phone:this.phone});
    this.addingStudent.emit({name:this.name,email:this.email,age:this.age,phone:this.phone})
  }

}
