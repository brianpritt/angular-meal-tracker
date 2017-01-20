import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:
  `
  <select class="drop-down input-field col s6 m6" (change)="onChange($event.target.value)">
    <option value="allMeals" selected="selected">All Meals</option>
    <option value="lowCalories">Low Calorie Meals</option>
    <option value="highCalories">High Calorie Meals</option>
  </select>
  <div class="row">
  <div  *ngFor='let currentMeal of childMealList | calories:filterByCalories'>
        <div class="col s12 m3">
          <div class="card-panel deep-purple darken-3 z-depth-5 hoverable" >
            <span class="white-text"> <h4 class="center-align">{{currentMeal.name}}</h4>
            <div>{{currentMeal.description}}</div>
            <div>cal: {{currentMeal.calories}}</div>
            <hr>
            <button class="edit-btn btn indigo darken-1" (click)='editMeal(currentMeal)'> Edit This Meal</button>
            </span>
          </div>
        </div>
      </div>
    </div>

  `
})
export class MealListComponent{
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "allMeals";

  onChange(fromSelect){
    this.filterByCalories = fromSelect
  }
  editMeal(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
