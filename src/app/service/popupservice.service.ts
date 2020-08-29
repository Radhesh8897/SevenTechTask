import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class PopupserviceService {
  cartchild2Subject= new Subject<any>();

  constructor() { }
  cartchildDataChanges(value){
    this.cartchild2Subject.next(value);
    console.log("service value",value)
  }
}
