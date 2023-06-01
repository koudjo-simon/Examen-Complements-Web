import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { Foods } from '../../shared/model/food';
import { CartService } from '../../services/cart.service';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  private _foodFilter: string = '';
  public filteredFoods: Foods[] = [];
  private selectedFoods: Foods[] = [];


  constructor(private fs: FoodService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private sharedService: SharedService,
    private router: Router){ }

  ngOnInit(): void{
    this.route.params.subscribe(params => {
        this.fs.getAll().subscribe({
          next: data => {
            this.foods = data;
          },
          error: err => console.log(err)
        });
        this.filteredFoods = this.foods;
    })
  }

  public get foodFilter(): string {
    return this._foodFilter;
  }

  public set foodFilter(filter: string){
    this._foodFilter = filter;
    this.filteredFoods = this.foodFilter ? this.filterFoods(this.foodFilter) : this.foods;
  }

  private filterFoods(criteria: string): Foods[] {
    criteria = criteria.toLowerCase();
    const result = this.foods.filter(
      (food: Foods) => food.name.toLowerCase().indexOf(criteria) != -1
    );
    return result;
  }

  public addToPanier(food: Foods): void{
    this.selectedFoods.push(food);
    this.cartService.addToCart(food);
    this.sharedService.setFoodCount(this.selectedFoods.length);
  }

  public goToFoodDetail(id: number){
    this.router.navigateByUrl("client/food/"+id);
  }

}
