import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private foods: Foods[] = [
    {
      id: 1,
      name: "pizza pepperoni",
      price: 5,
      favorite: true,
      star: 3.5,
      tags: ["FastFood", "Pizza", "Lunch"],
      imageUrl: "./assets/images/food-1.jpg",
      cookTime: "10-12",
      origins: ["Italy"]
    },
    {
      id: 2,
      name: "Hamburger",
      price: 5,
      favorite: false,
      star: 3.5,
      tags: ["FastFood", "Hamburger"],
      imageUrl: "./assets/images/food-2.jpg",
      cookTime: "10-45",
      origins: ["Germany", "US"]
    },
    {
      id: 3,
      name: "fresed patate",
      price: 20,
      favorite: true,
      star: 4.7,
      tags: ["SlowFood", "Lunch"],
      imageUrl: "./assets/images/food-3.jpg",
      cookTime: "20-30",
      origins: ["Persia", "Middle east", "China"]
    },
    {
      id: 4,
      name: "Hamburger",
      price: 12,
      favorite: true,
      star: 4.5,
      tags: ["FastFood", "Hamburger"],
      imageUrl: "./assets/images/food-4.jpg",
      cookTime: "10-15",
      origins: ["Germany", "US"]
    },
    {
      id: 5,
      name: "Vegetables pizza",
      price: 20,
      favorite: false,
      star: 4.0,
      tags: ["FastFood", "Pizza"],
      imageUrl: "./assets/images/food-5.jpg",
      cookTime: "40-50",
      origins: ["Italy"]
    },
    {
      id: 6,
      name: "Spaghetti",
      price: 20,
      favorite: true,
      star: 4.0,
      tags: ["LowFood", "Spaghetti"],
      imageUrl: "./assets/images/food-6.jpg",
      cookTime: "40-50",
      origins: ["Italy"]
    },
    {
      id: 7,
      name: "Spaghetti",
      price: 10,
      favorite: false,
      star: 4.5,
      tags: ["FastFood", "Pizza", "Lunch"],
      imageUrl: "./assets/images/food-7.jpg",
      cookTime: "10-12",
      origins: ["Italy"]
    },
    {
      id: 8,
      name: "pizza pepperoni",
      price: 10,
      favorite: false,
      star: 4.5,
      tags: ["FastFood", "Pizza", "Lunch"],
      imageUrl: "./assets/images/food-8.jpg",
      cookTime: "10-12",
      origins: ["Italy"]
    },
    {
      id: 9,
      name: "ABCD",
      price: 50,
      favorite: true,
      star: 3.5,
      tags: ["FastFood", "Pizza", "Lunch"],
      imageUrl: "./assets/images/food-1.jpg",
      cookTime: "10-12",
      origins: ["Italy"]
    },
  ];

  constructor() { }

  public getAll():Observable<Foods[]>{
    return of(this.foods);
  }

  public getFoodById(id: number): Observable<Foods>{
    let fd = this.foods.find(f => f.id == id);
    if (fd == undefined) return throwError(() => new Error("Foods undefined"));
    return of(fd);
  }

  public deleteProductById(id: number): Observable<boolean>{
    this.foods = this.foods.filter(p => p.id != id);
    return of(true);
  }

  public editFoodById(food: Foods): Observable<Foods>{
    this.foods = this.foods.map(f => (f.id == food.id) ? food : f);
    return of(food);
  }

}
