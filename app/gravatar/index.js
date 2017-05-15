import angular from 'angular';

import { GravatarComponent } from './gravatar.component';
import { GameComponent } from './game.component';



export default angular.module('DtaGravatarModule', [])

.component('dtaGravatar', GravatarComponent)
.component('dtaGame', GameComponent)

.name;
