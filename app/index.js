//angular
import angular from 'angular';
import css from 'bootstrap/dist/css/bootstrap.css';

import { UserController } from './user.controller';
import { ApplicationInfoController  } from './application-info.controller';
import { TabsController  } from './tabs.controller';

// Création du module app (application) 1ere methode
//let app = angular.module('app', []);
// app.run(function () {
//     console.log('RUN ANGULAR');
// });

// Création du module app (application) 2eme methode
angular.module('app', [])

.controller('UserController', UserController)
.controller('ApplicationInfoController', ApplicationInfoController)
.controller('TabsController', TabsController)
// .config(function () {
//     console.log('CONFIG ANGULAR');
// })
//
// .run(function () {
//     console.log('RUN ANGULAR');
// })
;
