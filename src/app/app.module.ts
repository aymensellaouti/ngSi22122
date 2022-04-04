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
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { BtcToUsdPipe } from './pipes/btc-to-usd.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './component/router-simulator/router-simulator.component';
import { SayHelloComponent } from './component/say-hello/say-hello.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { Nf404Component } from './component/nf404/nf404.component';
import { TestFormComponent } from './component/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { ObservableTestComponent } from './component/observable-test/observable-test.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    SommeComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    BtcToUsdPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    SayHelloComponent,
    DetailCvComponent,
    Nf404Component,
    TestFormComponent,
    LoginComponent,
    ObservableTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
