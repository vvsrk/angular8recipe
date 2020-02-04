export interface Ingredient {
  ingredient: string;
  measure: string;
}
export interface Instruction {
  instruction: string;
  photo: string;
}

export class Recipe {
  public id: number;
  public title: string;
  public description: string;
  public ingredients: Ingredient[];
  public instructions: Instruction[];
  public coverPhoto: string;
  public feedForMany: number;
  public preparationTime: number;
  public keywords: string[];

  constructor(id: number, title: string, desc: string, ingredientsList: Ingredient[], instr: Instruction[], photo: string,
              forHowMany: number, prepTime: number, keywords: string[]) {
    this.id = id;
    this.title = title;
    this.description = desc;
    this.ingredients = ingredientsList;
    this.instructions = instr;
    this.coverPhoto = photo;
    this.feedForMany = forHowMany;
    this.preparationTime = prepTime;
    this.keywords = keywords;
  }


  public static createBlank(): Recipe {
    return new Recipe(-1, '', '', null, null, '', 5, 20, null);
  }

  public static recipeFromJSON(obj: any): Recipe {
    return new Recipe(obj.id, obj.title, obj.description, obj.ingredients, obj.instructions, obj.cover_photo,
      obj.feeds_this_many, obj.preparation_time, obj.keywords);
  }

}
