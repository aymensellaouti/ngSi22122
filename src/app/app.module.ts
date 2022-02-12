import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ColorComponent } from './component/color/color.component';
import {FormsModule} from "@angular/forms";
import { TwoComponent } from './component/two/two.component';
import { CardComponent } from './component/card/card.component';
import { SommeComponent } from './component/somme/somme.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    SommeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
