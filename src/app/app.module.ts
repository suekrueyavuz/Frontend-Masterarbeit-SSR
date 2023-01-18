import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import {MenubarModule} from 'primeng/menubar';
import {KeyFilterModule} from 'primeng/keyfilter';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputNumberModule} from 'primeng/inputnumber';

import { AppComponent } from './app.component';
import { CalorieCounterComponent } from './calorie-counter/calorie-counter.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AutocompleteComponent } from './calorie-counter/autocomplete/autocomplete.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { QuizComponent } from './quiz/quiz.component';
import { CaloricRequirementComponent } from './caloric-requirement/caloric-requirement.component';
import { CaloricRequirementResultComponent } from './caloric-requirement/caloric-requirement-result/caloric-requirement-result.component';
import { BmiCalculatorComponent } from './caloric-requirement/bmi-calculator/bmi-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    CalorieCounterComponent,
    AutocompleteComponent,
    HeaderComponent,
    QuizComponent,
    CaloricRequirementComponent,
    CaloricRequirementResultComponent,
    BmiCalculatorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    ChartModule,
    AppRoutingModule,
    MenubarModule,
    KeyFilterModule,
    RadioButtonModule,
    CardModule,
    DropdownModule,
    TabMenuModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
