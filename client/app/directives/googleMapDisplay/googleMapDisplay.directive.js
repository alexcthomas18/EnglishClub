'use strict';

angular.module('englishClubApp')
  .directive('googleMapDisplay', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the googleMapDisplay directive');

        function initialize() {
		      
		    var mapProp = {
		      center:new google.maps.LatLng(attrs.lat,attrs.lng),
		      zoom:12,
		      mapTypeId:google.maps.MapTypeId.ROADMAP
		    };
		    var map = new google.maps.Map(element[0], mapProp);

		    var marker = new google.maps.Marker({
			    position: new google.maps.LatLng(attrs.lat,attrs.lng),
			    map: map,
		    });
		}

        google.maps.event.addDomListener(window, 'load', initialize());
      }
    };
  });