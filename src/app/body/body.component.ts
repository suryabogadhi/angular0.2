import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  string1 = "This is a paragaraph";

  constructor() { }

  ngOnInit() {
  }

  buttonClicked(){
    this.string1 = "good";
    console.log("This button is clicked!");
  }

  onDataEntered(event: Event){
    this.string1 = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
  }

}
