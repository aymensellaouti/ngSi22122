import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvComponent} from "./cv/cv/cv.component";
import {TodoComponent} from "./todo/todo/todo.component";
import {ColorComponent} from "./component/color/color.component";
import {MiniWordComponent} from "./directives/mini-word/mini-word.component";
import {FirstComponent} from "./component/first/first.component";
import {SayHelloComponent} from "./component/say-hello/say-hello.component";
// /hello
const routes: Routes = [
  { path: '', component: FirstComponent},
  { path: 'cv', component: CvComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'color', component: ColorComponent},
  { path: 'word', component: MiniWordComponent},
  { path: 'hello/:name/:firstname', component: SayHelloComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
