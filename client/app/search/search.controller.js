'use strict';

angular.module('englishClubApp')
  .controller('SearchCtrl', function ($scope,$stateParams) {
    $scope.message = 'Hello';
    $scope.stateParams = $stateParams;
  });
