import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-some-thing',
  templateUrl: './some-thing.component.html',
  styleUrls: ['./some-thing.component.css']
})
export class SomeThingComponent implements OnInit {
  public emp:any;
  constructor(private _employeeFucn:EmployeeService) { }

  ngOnInit(): void {
    this.emp=this._employeeFucn.getfucn("Goutham");
  }

}
