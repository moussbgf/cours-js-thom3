export class TabsController {

    constructor() {
        console.log('TabsController  !');

        this.tabs = [{
                title: 'User',
                content: 'Contenu un'
            },
            {
                title: 'Application',
                content: 'APPLICATION'
            },
            {
                title: 'Un',
                content: 'Contenu un'
            },
            {
                title: 'Deux',
                content: 'Contenu deux'
            },
            {
                title: 'Trois',
                content: 'Contenu trois'
            }
        ];

        this.tab = 0;

    }

    changeTab(tab) {
        this.tab = tab;
    }

    navigateTab (direction) {
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

}
