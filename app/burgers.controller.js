import { uniq, clone } from 'lodash';
import uuid from 'uuid/v4';

export class BurgersController {
  constructor (BurgerService) {
    this.burgers = [];

    BurgerService.getBurgers()
    .then(burgers => this.burgers = burgers);

    this.col = 'name';
    this.desc = false;

    this.newburger = this._initBurger();
  }

  getToppings () {

    return uniq(this.burgers
    .reduce((acc, {toppings}) => [...acc, ...toppings], []));

    /* <=>
    .reduce((acc, burger) => {
      let toppings = burger.toppings
      return acc.concat(toppings)
    }, [])
    */
  }

  sortBy (col) {
    if (this.col !== col) this.desc = false;
    else this.desc = !this.desc;
    this.col = col;
  }

  applySort (burger) {
    if (this.col === 'name') return burger.name;
    if (this.col === 'toppings') return burger.toppings.length;
  }

  save (form) {
    if (form.$invalid) return;

    if (!this.newburger.id) {
      // creation burger
      this.newburger.id = uuid();
      this.burgers.push(clone(this.newburger));
    } else {
      // modification burger
      let idx = this.burgers.findIndex(b => b.id === this.newburger.id);
      if (idx !== -1) {
        this.burgers[idx] = clone(this.newburger);
      }
    }

    this.newburger = this._initBurger();

    // reset form state
    form.$setUntouched();
  }

  editBurger (burger) {
    this.newburger = clone(burger);
  }

  _initBurger () {
    return {
      id: null,
      name: '',
      toppings: [],
      creator: ''
  };
  }
}
