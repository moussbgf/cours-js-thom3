//angular
import angular from 'angular';
import css from 'bootstrap/dist/css/bootstrap.css';

// Création du module app (application) 1ere methode
//let app = angular.module('app', []);
// app.run(function () {
//     console.log('RUN ANGULAR');
// });

// Création du module app (application) 2eme methode
angular.module('app', [])

.config(function () {
    console.log('CONFIG ANGULAR');
})

.run(function () {
    console.log('RUN ANGULAR');
});
