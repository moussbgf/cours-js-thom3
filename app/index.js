import angular from 'angular';
import RouteModule from 'angular-route';
import 'bootstrap/dist/css/bootstrap.css';

import { BurgersController } from './burgers.controller';
import { BurgerController } from './burger.controller';
import { ApplicationInfoController } from './application-info.controller';
import { TabsController } from './tabs.controller';
import { ReverseFilter } from './reverse.filter';
import { BurgerService } from './burger.service';
import { ToppingService } from './topping.service';
import { GameController } from './game.controller';
import { UserController } from './user.controller';
import { route } from './app.route';

// Création du module app (application)
angular.module('app', [
    RouteModule // 'ngRoute'
])

.controller('BurgersController', BurgersController)
.controller('BurgerController', BurgerController)
.controller('ApplicationInfoController', ApplicationInfoController)
.controller('TabsController', TabsController)
.controller('GameController', GameController)
.controller('UserController', UserController)

.filter('reverse', ReverseFilter)

.service('BurgerService', BurgerService)
.service('ToppingService', ToppingService)

.config(route);

// .config(function () {
//     console.log('CONFIG ANGULAR');
// })

// .run(function () {
//     console.log('RUN ANGULAR');
// })
