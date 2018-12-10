import { Component, OnInit } from '@angular/core';
import { Directive,Input,Output,ElementRef,Renderer} from '@angular/core';


@Directive({
  selector: '[appWidHieRen]',
  host:{
    '(click)':"show()"
  }

})
export class WidHieRenDirective {

  constructor(private el:ElementRef) { }
  show(){
    console.log(this.el.nativeElement);

    console.log('height---' + this.el.nativeElement.offsetHeight);  //<<<===here
    console.log('width---' + this.el.nativeElement.offsetWidth);    //<<<===here
  }


}
