'use strict';

angular.module('englishClubApp')
  .controller('SearchCtrl', function ($scope,$stateParams,$http) {
    $scope.message = 'Hello';
    $scope.stateParams = $stateParams;
    $scope.examples = [1,2,3,4,5,6,7,8];
    $http.get('/api/listings').
      success(function(data, status, headers, config) {
        $scope.clubs = data;
        google.maps.event.addDomListener(window, 'load', initialize());
        console.log(data)
      }).
      error(function(data, status, headers, config) {
        console.log(data);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

    console.log($stateParams.lat);
    console.log($stateParams.lng);

  function initialize() {
    	console.log($stateParams);
    	console.log("hello");
	  var mapProp = {
	    center:new google.maps.LatLng($stateParams.lat,$stateParams.lng),
	    zoom:12,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var markers = [];

    for(var i=0;i<$scope.clubs.length;i++) {
      markers[i] = new google.maps.Marker({
        position: new google.maps.LatLng($scope.clubs[i].lat,$scope.clubs[i].lng),
        map: map,
      });
    }

	}

	


  });
