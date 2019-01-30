import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RoboComponent} from './robo.component'
import { ProductComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductFilter } from 'src/app/products/products-filter.pipe';
import { StarComponent } from 'src/app/shared/star.component';


@NgModule({
  declarations: [
    AppComponent,
    RoboComponent,
    ProductComponent,
    ProductFilter,
    StarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
