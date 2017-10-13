import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})
export class InterfacesComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{

  sampleString = "This is from:";

  constructor() {
    console.log(this.sampleString+" Constructor");
  }

  ngOnInit() {
    console.log(this.sampleString+" ngoninit");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(this.sampleString+" ngonchanges"+ changes);
  }

  ngDoCheck(){
    console.log(this.sampleString+" ngdocheck");
  }

  ngAfterContentChecked(){
    console.log(this.sampleString+" ngaftercontentchecked");
  }

  ngAfterContentInit(){
    console.log(this.sampleString+" ngaftercontetninit");
  }

  ngAfterViewChecked(){
    console.log(this.sampleString+" ngafterviewchecked");
  }

  ngAfterViewInit(){
    console.log(this.sampleString+" ngafterviewinit");
  }

  ngOnDestroy(){
    console.log(this.sampleString+" ngondestroy");
  }



}
