import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvComponent} from "./cv/cv/cv.component";
import {TodoComponent} from "./todo/todo/todo.component";
import {ColorComponent} from "./component/color/color.component";
import {MiniWordComponent} from "./directives/mini-word/mini-word.component";
import {FirstComponent} from "./component/first/first.component";
import {SayHelloComponent} from "./component/say-hello/say-hello.component";
import {DetailCvComponent} from "./cv/detail-cv/detail-cv.component";
import {SecondComponent} from "./component/second/second.component";
import {Nf404Component} from "./component/nf404/nf404.component";
// cv
const routes: Routes = [
  { path: '', component: FirstComponent},
  { path: 'cv', component: CvComponent},
  { path: 'cv/:id', component: DetailCvComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'color', component: ColorComponent},
  { path: 'word', component: MiniWordComponent},
  { path: ':id', component: SecondComponent},
  { path: 'hello/:name/:firstname', component: SayHelloComponent},
  { path: '**', component: Nf404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
