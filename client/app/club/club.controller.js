'use strict';

angular.module('englishClubApp')
  .controller('ClubCtrl', function ($scope,$stateParams,$http) {
  	$scope.listing = {};
    


    var url = '/api/listings?city='+$stateParams.city;
    url += '&country='+$stateParams.country;
    url += '&lat='+$stateParams.lat;
    url += '&lng='+$stateParams.lng;
    url += '&approved=1&limit=1';

    $http.get(url).success(function(data) {
      $scope.listing = data[0];
    });

  });
