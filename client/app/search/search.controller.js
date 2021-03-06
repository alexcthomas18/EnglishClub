'use strict';

angular.module('englishClubApp')
.controller('SearchCtrl', function ($scope,$stateParams,$http) {
  /* jshint undef: true, unused: false */
  /*global google */
  $scope.message = 'Hello';
  $scope.stateParams = $stateParams;
  $scope.examples = [1,2,3,4,5,6,7,8];
  $http.get('/api/listings?approved=1').
  success(function(data, status, headers, config) {
    $scope.clubs = data;
    google.maps.event.addDomListener(window, 'load', initialize());
  }).error(function(data, status, headers, config) {
    console.log(data);
  });

  function initialize() {
    
    var mapProp = {
      center:new google.maps.LatLng($stateParams.lat,$stateParams.lng),
      zoom:12,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);

    for(var i=0;i<$scope.clubs.length;i++) {
      $scope.clubs[i].mapMarker = new google.maps.Marker({
        position: new google.maps.LatLng($scope.clubs[i].lat,$scope.clubs[i].lng),
        map: map,
        title: $scope.clubs[i].title,
      });

      var content = '<h3>'+$scope.clubs[i].title+'</h3>';
      content += '<p>'+$scope.clubs[i].subtitle+'</p>';
      
      for(var j=0;j<$scope.clubs[i].classes.length;j++) {
        content += '<p><strong>'+$scope.clubs[i].classes[j].day+'s</strong> ';
        content += $scope.clubs[i].classes[j].startTimeStr+' - ';
        content += $scope.clubs[i].classes[j].endTimeStr+'</p>';
      }

      // $scope.clubs[i].classes.forEach(function(class){
      //   // content += "<p><strong>"+class.day+"</strong></p>";
      // });

      $scope.clubs[i].infowindow = new google.maps.InfoWindow({
          content: content,
      });

      google.maps.event.addListener($scope.clubs[i].mapMarker, 'click', infoWindowClick($scope.clubs[i].mapMarker, $scope.clubs[i].infowindow, map));
    }
  }

  function infoWindowClick(marker,infowindow, map) {
    return function() {
      infowindow.open(map, marker);
    };
  }

  $scope.startBounce = function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  };
  $scope.stopBounce = function(marker) {
    marker.setAnimation(null);
  };

});
