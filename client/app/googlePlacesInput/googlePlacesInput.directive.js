'use strict';

angular.module('englishClubApp')
  .directive('googlePlacesInput', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        var options = {
            types: [],
            componentRestrictions: {}
        };
        scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

        google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
            //alert(element.val());
            var place = scope.gPlace.getPlace();
            if (!place.geometry) {
		      return;
		    }
            console.log(place)
            var lat = place.geometry.location.lat();
            var lng = place.geometry.location.lng();
            var country;
            var city;
            console.log(lat);
            console.log(lng);
            for(var i = 0; i < place.address_components.length; i += 1) {
			  var addressObj = place.address_components[i];
			  for(var j = 0; j < addressObj.types.length; j += 1) {

			  	//COUNTRY
			    if (addressObj.types[j] === 'country') {
			    	country = addressObj.long_name.toLowerCase();
				    console.log(addressObj.types[j]); // confirm that this is 'country'
				    console.log(country); // confirm that this is the country name
			    }
			  }
			}
        });
      }
    };
  });