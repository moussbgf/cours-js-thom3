import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';

import { BurgersController } from './burgers.controller';
import { ApplicationInfoController } from './application-info.controller';
import { TabsController } from './tabs.controller';
import { ReverseFilter } from './reverse.filter';
import { BurgerService } from './burger.service';

// Création du module app (application)
angular.module('app', [])

.controller('BurgersController', BurgersController)
.controller('ApplicationInfoController', ApplicationInfoController)
.controller('TabsController', TabsController)

.filter('reverse', ReverseFilter)

.service('BurgerService', BurgerService);

// .config(function () {
//     console.log('CONFIG ANGULAR');
// })

// .run(function () {
//     console.log('RUN ANGULAR');
// })
