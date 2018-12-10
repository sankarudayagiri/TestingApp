import { Component, OnInit } from '@angular/core';

import * as interact from 'interactjs';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  someValue:any="sankar";
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.someValue="narayana";
    },2000);    
  }

}
