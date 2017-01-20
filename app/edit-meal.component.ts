import { Component, Output, Input, EventEmitter} from '@angular/core';
import{ Meal } from './meal.model';

@Component({
  selector: "edit-meal",
  template:
  `
  <div class="container">
  <div *ngIf="childSelectedMeal">
    <h3>Edit Meal</h3>
    <label>Meal: </label>
    <input [(ngModel)]="childSelectedMeal.name">
    <label>Calories: </label>
    <input [(ngModel)]="childSelectedMeal.calories">
    <label>Description: </label>
    <input [(ngModel)]="childSelectedMeal.description">
    <button class="btn hoverable purple darken-4" (click)="doneEditing()">Update</button>
  </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneEditingSender = new EventEmitter();

  doneEditing(){
    this.doneEditingSender.emit();
  }
}
