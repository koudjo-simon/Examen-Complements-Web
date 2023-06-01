import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from '../search/search.component';
import { CartComponent } from './cart/cart.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { CommandComponent } from './command/command.component';
import { ClientComponent } from './client/client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleClientRoutingModule } from './module-client-routing.module';
import { CommandSuccessComponent } from './command-success/command-success.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CartComponent,
    FoodDetailComponent,
    CommandComponent,
    ClientComponent,
    CommandSuccessComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleClientRoutingModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ModuleClientModule { }