import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
  getfucn(arg:string){
    return("I`m A Employeee Service "+arg);
  }
  constructor() { }
}
