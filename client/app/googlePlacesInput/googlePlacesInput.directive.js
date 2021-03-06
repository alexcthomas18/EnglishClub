'use strict';

angular.module('englishClubApp')
  .directive('googlePlacesInput', function ($state) {
    /*jshint camelcase: false */
  	/*global google */
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
            var place = scope.gPlace.getPlace();
            if (!place.geometry || !place.address_components) {
    		      return;
    		    }
            var location = place.formatted_address;
            var lat = place.geometry.location.lat();
            var lng = place.geometry.location.lng();
            
            var country;
            var city;
            
            for(var i = 0; i < place.address_components.length; i += 1) {
              
			  var addressObj = place.address_components[i];

			  for(var j = 0; j < addressObj.types.length; j += 1) {

			  	//COUNTRY
			    if (addressObj.types[j] === 'country') {
			    	country = encodeURIComponent(addressObj.long_name.toLowerCase().trim());
				    // console.log(addressObj.types[j]); // confirm that this is 'country'
				    // console.log(country); // confirm that this is the country name
			    }

			    //CITY
			    if (addressObj.types[j] === 'locality') {
			    	city = encodeURIComponent(addressObj.long_name.toLowerCase().trim());
				    // console.log(addressObj.types[j]); // confirm that this is 'country'
				    // console.log(city); // confirm that this is the country name
			    }
			  }
			}

      if(attrs.redirect === 'false') {
        scope.getNewLocation(location,lat,lng,country,city);
      } else {
        $state.go('search',{country:country,city:city,lat:lat,lng:lng});
      }

        });
      }
    };
  });