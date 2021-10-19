import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/board/card/card.component';
import { TaskItemComponent } from './components/board/card/task-item/task-item.component';
import { AddTaskComponent } from './components/board/card/add-task/add-task.component';
import { BoardComponent } from './components/board/board.component';
import { AddCardComponent } from './components/board/add-card/add-card.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  { path: '', component: BoardComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    TaskItemComponent,
    AddTaskComponent,
    BoardComponent,
    AddCardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
