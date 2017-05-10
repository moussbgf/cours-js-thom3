export class ApplicationInfoController  {

    constructor() {
        console.log('ApplicationInfoController  !');
        this.name = 'Burger';
        this.version = 'version 1.0';
        this.show = false;

        this.users = [{
                name: 'John',
                email: 'test@ici'
            },
            {
                name: 'lzkejflkez',
                email: 'sdfsd@ici'
            },
            {
                name: 'frezfezf',
                email: 'tedgfdgdst@ici'
            },
            {
                name: 'regergre',
                email: 'ouliu@ici'
            }
        ];

    }

    showVersion() {
        console.log(this.show);

        this.show = !this.show;

        console.log(this.show);
    }

}
