import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-localref',
  templateUrl: './localref.component.html',
  styleUrls: ['./localref.component.css']
})
export class LocalrefComponent implements OnInit {
  @Output() addingStudent = new EventEmitter();
  @ViewChild('userEmail') uemail: ElementRef;

  age = "";
  phone = "";

  constructor() { }

  ngOnInit() {
  }

  addstudent(recValue: HTMLInputElement){
    console.log(this.uemail.nativeElement.value);
    //{name:this.name,email:this.email,age:this.age,phone:this.phone}
    //console.log({name:this.name,email:this.email,age:this.age,phone:this.phone});
    this.addingStudent.emit({
      name:recValue.value,
      email:this.uemail.nativeElement.value,
      age:this.age,
      phone:this.phone
    });
  }

}

