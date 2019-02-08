import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { Router } from '@angular/router'
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import {Http} from '@angular/http';

//import * as $ from 'jquery';

@Component({
  selector: 'window-width',
  templateUrl: './window-width.component.html',
  styleUrls: ['./window-width.component.css']
})
export class WindowWidthComponent implements OnInit {
  screenHeight: any;
  screenWidth: any;
  pVal: any=100;
  pWidth: any="100px";
  pHeight: any="200px";
  renWidth: any="100px";
  renHeight: any='100px';
  someValue:any;
  anyValue: any;
  someData:any;
  anyValue2:number=0;
  someWidth:any='100';
  constructor(public router:Router, private http:HttpClient) { 
    this.onResize();
    console.log(this.renHeight);
    console.log(this.renWidth);
  }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res) => {
      console.log(res);
      this.someData=res;
    })
    //console.log("hello");
    // $(document).ready(function(){
    //   $('[data-toggle="tooltip"]').tooltip();   
    //   $('#btn1').click(function(){
    //     alert("hello world");
    //   });
    // });

    this.someValue=false? 100: 200;
    setTimeout(() =>{
      this.someValue=400;
    },200);

    console.log(this.anyValue==undefined);
    
  }
  @HostListener('window:resize', ['$event'])
  //debugger;  
  onResize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
  }
  clickIt(){
    this.pVal=this.pVal+10;
    this.renHeight=this.pVal+'%';
    this.renWidth=this.pVal+'%';
    this.anyValue2++;
    console.log(this.anyValue2);
    console.log(this.pVal);
    console.log(this.renHeight);
    console.log(this.renWidth);
  }
  refresh() {
    this.router.navigate(['new']);
    //this.ngOnInit();  
   }

  


}
