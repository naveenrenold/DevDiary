import { Component, OnInit } from '@angular/core';
import { ComponentModel } from '../models/component1';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  a=new ComponentModel();
  b:any;
  c:any;
  constructor()
  {

  }
ngOnInit(){
  fetch('http://localhost:5226/api/Commands').then((resp)=>{this.b=resp},(failed)=>{this.c=failed});
console.log(`b=${this.b} \n and c=${this.c}`)
}


}
