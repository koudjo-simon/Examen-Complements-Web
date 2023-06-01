import { NgModule, destroyPlatform } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module-client/home/home.component';
import { CartComponent } from './module-client/cart/cart.component';
import { FoodDetailComponent } from './module-client/food-detail/food-detail.component';
import { CommandComponent } from './module-client/command/command.component';
import { ClientComponent } from './module-client/client/client.component';

const routes: Routes = [
  {path: "", redirectTo: "client/food", pathMatch: "full"},
  /* {path: "**", redirectTo: "food", pathMatch: "full"} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}