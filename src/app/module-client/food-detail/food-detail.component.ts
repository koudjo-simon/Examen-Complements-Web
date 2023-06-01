import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from '../../shared/model/food';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit{

  foodId!: number;
  food!: Foods;

  constructor(private route: ActivatedRoute, 
    private foodService: FoodService,
    private router: Router){
    this.foodId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.foodService.getFoodById(this.foodId).subscribe({
      next: data => {
        this.food = data;
      },
      error: err => console.log(err)
    });
  }

  returnToTheFoodList(){
    this.router.navigateByUrl("client/food");
  }

}
