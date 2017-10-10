import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  inputElement = [
    { person:'surya' },
    { person:'Sumanth'}
  ];

  personDetails = {
                    name:"",
                    age:"",
                    branch:""
  };
  string1 = '';
  item = 'this is surya prakash';
  angularLogo = 'http://suryaa.me/assets/images/bg/bg.jpg';

  name="";
  age="";
  branch="";

  constructor() { }

  ngOnInit() {
  }


  getmsz(){
     this.item = 'angular item';
     console.log('hai');

  }

  onDataEntered1(event: Event){
    //this.inputElement.push({person:(<HTMLInputElement>event.target).value});
    this.name = (<HTMLInputElement>event.target).value;
  }
  onDataEntered2(event: Event){
    //this.inputElement.push({person:(<HTMLInputElement>event.target).value});
    this.age = (<HTMLInputElement>event.target).value;
  }
  onDataEntered3(event: Event){
    //this.inputElement.push({person:(<HTMLInputElement>event.target).value});
    this.branch = (<HTMLInputElement>event.target).value;
  }
  showInfo(){
    // this.personDetails.name = this.name;
    // this.personDetails.age = this.age;
    // this.personDetails.branch = this.branch;
    // console.log(this.personDetails);
  }

}
