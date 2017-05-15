import template from './gravatar.component.html';
import './gravatar.component.css';

import md5 from 'md5';

//console.log(md5('1466366197-risitas10.png'));

class controller {
    constructor ($timeout) {
        this.displayGravatar = true;
    }

    $onInit () {
        this.md5 = md5(this.email);
        //console.log('$onInit email', this.email)
    }

    toggleGravatar () {
        this.displayGravatar = !this.displayGravatar;
    }

    talk () {
        console.log(this.text);
        this.onTalk({
            $event: this.text
    });
}

}





export let GravatarComponent = {
    template,
    controller,
    bindings: {
        email: '<',
        onTalk: '&'
    }
};
