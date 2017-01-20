import { Component, Output, Input, EventEmitter} from '@angular/core';
import{ Meal } from './meal.model';

@Component({
  selector: "new-meal",
  template:
  `
  <div class="container">
    <div *ngIf="childNewMeal">
      <h3>Add New Meal</h3>
      <label>Meal: </label>
      <input #newMeal>
      <label>Description</label>
      <input #newDescription>
      <label>Calories</label>
      <input #newCalories>
      <button class="btn" (click)="submitForm(newMeal.value, newDescription.value, newCalories.value); doneAdding()">Add</button>
    </div>
  </div>

  `
})
export class NewMealComponent{
  @Input() childNewMeal: Meal;
  @Output() newMealSender = new EventEmitter();
  @Output() newAddSender = new EventEmitter();

  submitForm(name: string, description: string, calories: number){
    var newMeal: Meal = new Meal(name, description, calories);
    this.newMealSender.emit(newMeal);
  }
  doneAdding(){
    this.newAddSender.emit();
  }
}
