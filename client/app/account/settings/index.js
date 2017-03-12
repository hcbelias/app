'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('app3App.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
