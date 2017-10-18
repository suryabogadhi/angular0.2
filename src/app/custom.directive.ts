import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit{
  @Input('suryacolor') myCColor: string;
  @Input('suryafontcolor') sfcolor: string;
  @HostBinding('style.background') myBg = "#521df4";
  @HostBinding('style.color') myColor = "#000";
  @HostBinding('class.customclass') cClass = false;

  constructor(private myElement: ElementRef, private myRenderer: Renderer2) {
    //this.myElement.nativeElement.style.background = "#ccc";
    //this.myElement.nativeElement.style.color = "#00F";
    // this.myRenderer.setStyle(this.myElement.nativeElement,'background','#0F0');
    // this.myRenderer.setStyle(this.myElement.nativeElement,'color','#333');
    // this.myRenderer.addClass(this.myElement.nativeElement,'myclass')
    // console.log(this.myRenderer);
  }

  ngOnInit(){
    this.myBg = this.myCColor;
    this.myColor = this.sfcolor;
  }

  @HostListener('click') setBack(){
    // this.myElement.nativeElement.style.background = "#ccc";
    // this.myElement.nativeElement.style.color = "#00F";
    // this.myRenderer.setStyle(this.myElement.nativeElement,'background','#0F0');
    // this.myRenderer.setStyle(this.myElement.nativeElement,'color','#333');
    // this.myRenderer.addClass(this.myElement.nativeElement,'myclass')
    this.myBg = "#0F0";
    this.myColor = "#333";
    this.cClass = true;
    //console.log(this.myCColor);
  }

  @HostListener('mouseleave') remBack(){
    this.myBg = "#000";
    this.myColor = "#FFF";
    this.cClass = false;
    // this.myRenderer.setStyle(this.myElement.nativeElement,'background','#000');
    // this.myRenderer.setStyle(this.myElement.nativeElement,'color','#FFF');
    // this.myRenderer.addClass(this.myElement.nativeElement,'myclass')
    // console.log(this.myRenderer);
  }

}
