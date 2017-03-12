'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('app3App.util', [])
  .factory('Util', UtilService)
  .name;
