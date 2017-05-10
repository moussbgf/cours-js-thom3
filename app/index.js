//angular
import angular from 'angular';
import css from 'bootstrap/dist/css/bootstrap.css';

import {
    UserController
} from './user.controller';
import {
    ApplicationInfoController
} from './application-info.controller';
import {
    TabsController
} from './tabs.controller';

import { Reverse } from './reverse';

angular.module('app', [])

    .controller('UserController', UserController)
    .controller('ApplicationInfoController', ApplicationInfoController)
    .controller('TabsController', TabsController)

    .filter('reverse', Reverse)

;
