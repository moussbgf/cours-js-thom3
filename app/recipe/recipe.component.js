import template from './recipe.component.html';

class controller {

    constructor ($timeout) {
        this.$timeout = $timeout;
    }

    $onChanges (changes) {
        if (changes.toppings && changes.toppings.currentValue) {
            // on retourne le tableau (cloné) avant de l'afficher
            this.toppings = angular.copy(this.toppings).reverse();
            // reset timer
            // on peut aussi utiliser un bijet time avec value = time
            // this.time = { value: 15 };
             this.time = 0;
             this.$timeout(() => this.time = 15, 0);
        }
    }

    end () {
        this.onTimeout();
        console.log('end');
    }

    start (remain) {
        //this.time = 0 // ugly
        console.log(remain);
    }

}

export let RecipeComponent = {
    controller,
    template,
    bindings: {
        toppings: '<',
        onTimeout: '&'
    }
};
