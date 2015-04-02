'use strict';

angular.module('englishClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('club', {
        url: '/:country/:city/:club?lat&lon',
        templateUrl: 'app/club/club.html',
        controller: 'ClubCtrl'
      });
  });
