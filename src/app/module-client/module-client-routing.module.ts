import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { CartComponent } from './cart/cart.component';
import { CommandComponent } from './command/command.component';
import { CommandSuccessComponent } from './command-success/command-success.component';
import { CommandGuard } from './client-guards/command.guard';
import { CartGuard } from './client-guards/cart.guard';



@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "client", component: ClientComponent, children: [
        {path: "food", component: HomeComponent},
        {path: "food/:id", component: FoodDetailComponent},
        {path: "cart", component: CartComponent, canActivate: [CartGuard]},
        {path: "command", component: CommandComponent, canActivate: [CartGuard]},
        {path: "command_success", component: CommandSuccessComponent, canActivate: [CommandGuard]}
      ]},
    ])
  ],
  exports: [
    RouterModule
  ],
})
export class ModuleClientRoutingModule { }
