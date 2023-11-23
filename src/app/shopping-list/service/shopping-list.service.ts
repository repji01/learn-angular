import {Ingredient} from "../../shared/Ingredient.module";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    if (!this.ingredientInList(ingredient)) this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[] | undefined) {
    // @ts-ignore
    for(let ingredient of  ingredients){
      if (!this.ingredientInList(ingredient)) this.ingredients.push(ingredient);
    }
    //this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  clearIngredients(){
    this.ingredients = [];
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  private ingredientInList(newIngredient:Ingredient):boolean{
    let ingExists = false;
    for(let ingredient of  this.ingredients){
      if (ingredient.name == newIngredient.name){
        ingredient.amount += newIngredient.amount;
        ingExists = true;
      }
    }
    return ingExists;
  }
}

