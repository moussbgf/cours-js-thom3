import {
    uniq
} from 'lodash';

export class BurgerController {

    constructor(BurgerService, ToppingService, $routeParams, $location) {

        this.BurgerService = BurgerService;
        this.ToppingService = ToppingService;

        this.ToppingService.getToppings()
            .then(toppings => this.toppings = toppings);

        this.BurgerService.getBurger($routeParams.id)
            .then(burger => this.burger = burger);

        this.$location = $location;
    }

    save(form) {
        if (form.$invalid) return;

        this.BurgerService.save(this.burger)
            .then(() => this.$location.path("/burgers"));
    }

}
