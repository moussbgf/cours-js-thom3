export class TabsController {

    constructor() {
        console.log('TabsController  !');

        this.tabs = [{
                title: 'User',
                template: 'user'
            },
            {
                title: 'Application',
                template: 'application'
            },
            {
                title: 'Burgers',
                template: 'burgers'
            },
             {
                title: 'Play',
                template: 'game'
            },
        ];

        this.tab = 0;

    }

    changeTab(tab) {
        this.tab = tab;
    }

    navigateTab(direction) {
        // this.tab = (this.tab + direction) % this.tabs.length
        if (this.tab === 0 && direction === -1) {
            this.tab = this.tabs.length - 1;
            return;
        }
        if (this.tab === this.tabs.length - 1 && direction === 1) {
            this.tab = 0;
            return;
        }
        this.tab += direction;
    }

    getTemplate(tab) {
        return `views/${tab.template}.html`;
    }

}
