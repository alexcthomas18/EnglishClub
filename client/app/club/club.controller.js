'use strict';

angular.module('englishClubApp')
  .controller('ClubCtrl', function ($scope,$stateParams) {
  	$scope.stateParams = $stateParams;
    $scope.message = 'Hello';
  });
