export class UserController {


    constructor() {

        console.log('UserController !');
        this.firstname = 'John';
        this.lastname = 'Doe';
    }

    getName() {
        return this.firstname + ' ' + this.lastname.toUpperCase();
    }

}
