import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:
  `
  <div class="row">
  <div  *ngFor='let currentMeal of childMealList'>
        <div class="col s12 m5">
          <div class="card-panel teal">
            <span class="white-text"> <h4>{{currentMeal.name}}</h4>
            <div>{{currentMeal.description}}</div>
            <div>cal: {{currentMeal.calories}}</div>
            <hr>
            <button class="btn" (click)='editMeal(currentMeal)'> Edit This Meal</button>
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

  editMeal(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
