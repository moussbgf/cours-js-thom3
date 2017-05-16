import './game.component.css';
import template from './game.component.html';

class controller {
    constructor (ToppingService, $location) {
        this.ToppingService = ToppingService;
        this.$location = $location;
        this.score = 0;
    }

    $onInit () {
        this.restart();
        this.ToppingService.getToppings()
        .then(toppings => this.toppings = toppings);
    }

    selectTopping (topping) {
        this.burger = [...this.burger, topping.name];
        switch (this.ToppingService.checkRecipe(this.burger, this.recipe)) {
            case 'VALID' :
                this.restart();
                break;
            case 'INVALID' :
                this.gameover();
                break;
        }
    }

    restart () {
        this.burger = [];
        this.recipe = [];
        this.running = true;
        this.ToppingService.getRandomRecipe()
        .then(recipe => this.recipe = recipe);
    }

    gameover () {
        this.running = false;
        //this.$location.path('/');
    }

    updateScore (score) {
        this.score += score;
    }
}

export let GameComponent = {
    template,
    controller,
    bindings: {}
};
