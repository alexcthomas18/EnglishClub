'use strict';

angular.module('englishClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
      	url: '/:country/:city?lat&lng',
        templateUrl: 'app/search/search.html',
        controller: 'SearchCtrl'
      });
  });
