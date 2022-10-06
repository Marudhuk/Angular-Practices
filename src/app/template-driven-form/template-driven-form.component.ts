import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }
  

  country:Country[]=[
  new Country ("1",  "India"),
  new Country ("2",  "Denmark"),
  new Country ("3",  "USA")
  ]
 
  hero=new Hero("Marudhu","k","marudhu2001@gmail.com")
  ngOnInit(): void {
   
    }

  
  onSubmit(templateForm:any){
    console.log(templateForm)
    
  }
}

export class Country{
  id:string;
  name:string;
  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}


 