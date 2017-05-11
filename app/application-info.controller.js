export class ApplicationInfoController {
    constructor(BurgerService) {
        this.info = {
            name: 'Burger',
            version: '1.0.0',
            date: new Date(2012, 10, 10)
        };

        console.log(this.info.name);

        this.showVersion = false;
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

    toggleVersion() {
        this.showVersion = !this.showVersion;
    }
}
