import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import localeFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';
import { ModuleClientModule } from './module-client/module-client.module';

registerLocaleData(localeFr, 'fr')

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModuleClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
