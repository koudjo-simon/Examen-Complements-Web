import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Foods } from 'src/app/shared/model/food';
import { CommandLine } from 'src/app/shared/model/command-line';
import { CommandService } from '../../services/command.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  
  public selectedFoods: Foods[] = [];
  public totalPrice: number = 0;
  public commandLines: CommandLine[] = [];

  constructor(private cartService: CartService, private cmdService: CommandService){}
  
  ngOnInit(): void {
    this.cartService.getCartFoods().subscribe({
      next: (foods) => {
        this.selectedFoods = foods;

        // Transformation des foods en ligne de commande
        this.selectedFoods.forEach((food) => {
          const existingCommandLine = this.commandLines.find((cl) => cl.food.id === food.id);
          if (existingCommandLine) {
            existingCommandLine.quantity += 1;
            existingCommandLine.totalPrice += food.price;
          }else {
            const newCommandeLine : CommandLine = {
              food,
              quantity: 1,
              totalPrice: food.price
            };
            this.commandLines.push(newCommandeLine);
          }
        });

        // Ajout des lignes de commandes à la liste dans commandService
        this.cmdService.setCommandLines(this.commandLines);
        // Calcul du prix total des achats
        this.commandLines.forEach((cmdLine) => {
          this.totalPrice += cmdLine.totalPrice;
        })
      },
      error: (err) => console.log(err)
    })
  }

  handleDeleteFood(f: CommandLine){
    let conf = confirm("Are you sure to delete this food ?"); 
    if (conf == false) return;
    this.cartService.deleteFoodById(f.food.id).subscribe({
      next: (data) => {
        let index = this.commandLines.indexOf(f);
        this.selectedFoods.splice(index, 1);
      }
    })
  }

  command(){
    
  }

}
