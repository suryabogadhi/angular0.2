import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  string1 = 'angular app';
  item = 'this is surya prakash';
  angularLogo = 'http://suryaa.me/assets/images/bg/bg.jpg';

  getmsz(){
     this.item = 'angular item';
     console.log('hai');

  }

  onDataEntered(event: Event){
    this.string1 = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
  }

  
}
