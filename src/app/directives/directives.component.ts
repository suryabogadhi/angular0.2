import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showStatus = false;
  sStatus = true;
  constructor() { }

  ngOnInit() {
  }
  togglePara(){
    this.showStatus = !this.showStatus;
    this.sStatus = !this.sStatus;
    console.log(this.showStatus);
  }
  getStatuss(){
    return this.sStatus;
  }
  getStatus(){
    return this.sStatus === true?'show':'hide';
  }
  getColor(){
    return '#00f';
  }
}
