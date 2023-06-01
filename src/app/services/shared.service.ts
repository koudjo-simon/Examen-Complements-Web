import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private numberOfFood: number = 0;

  constructor() { }

  setFoodCount(number: number){
    this.numberOfFood = number;
  }
  getFoodCount(): Observable<number>{
    return of(this.numberOfFood);
  }

}
