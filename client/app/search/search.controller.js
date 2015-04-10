'use strict';

angular.module('englishClubApp')
  .controller('SearchCtrl', function ($scope,$stateParams) {
    $scope.message = 'Hello';
    $scope.stateParams = $stateParams;
    $scope.examples = [1,2,3,4,5,6,7,8];

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
	  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
	}

	google.maps.event.addDomListener(window, 'load', initialize());


  });
