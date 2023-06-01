import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Foods } from '../shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cardFoodsList: Foods[] = [];

  constructor() {
    
  }

  public addToCart(food: Foods): void {
    this.cardFoodsList.push(food);
  }

  public getCartFoods(): Observable<Foods[]>{
    if (this.cardFoodsList.length > 0) {
      return of(this.cardFoodsList);
    }else {
      return throwError(() => new Error("Food untifined in the cart list."));
    }
  }

  public getTotalPrice(): Observable<number>{
    let price: number = 0;
    this.cardFoodsList.forEach(element => {
      price += element.price;
    });
    return of(price);
  }

  public deleteFoodById(id: number): Observable<boolean>{
    this.cardFoodsList = this.cardFoodsList.filter(f => f.id == id);
    return of(true);
  }

  public cardContainAddFoods(){
    return this.cardFoodsList.length > 0;
  }

}
