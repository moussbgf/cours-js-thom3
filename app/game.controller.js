export class GameController {
    constructor(ToppingService) {

        console.log("BurgersController !");

        this.ToppingService = ToppingService;

        this.ToppingService.getToppings()
            .then(toppings => this.toppings = toppings);

        this.ToppingService.getRandomRecipe()
            .then(recipe => {
                console.log(recipe);
            });
    }

}
