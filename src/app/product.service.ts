import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  func(){
    return ("I am from Product Service")
  }
  constructor() { }
}
