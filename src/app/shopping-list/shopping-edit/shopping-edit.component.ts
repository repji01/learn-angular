import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../service/shopping-list.service";
import {Ingredient} from "../../shared/Ingredient.module";
import {Recipe} from "../../recipes/recipe.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('nameInput',{static: true}) nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput',{static: true}) amountInput: ElementRef | undefined;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {

  }

  onAddItem(){
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amountInput?.nativeElement.value;
    console.log('ssss');
    this.shoppingListService.addIngredient(new Ingredient(ingName, ingAmount));
  }

  onclearItems(){
    this.shoppingListService.clearIngredients();
  }
}
