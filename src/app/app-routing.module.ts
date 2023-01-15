import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CaloricRequirementComponent } from './caloric-requirement/caloric-requirement.component';
import { CalorieCounterComponent } from './calorie-counter/calorie-counter.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path: '', 
    component: CaloricRequirementComponent
  },
  {
    path: 'calculator',
    component: CalorieCounterComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
