'use strict';

angular.module('englishClubApp')
  .controller('SubmitListingCtrl', function ($scope,$stateParams,$http) {
    
    $scope.message = 'is this wrking';
    $scope.stateParams = $stateParams;
    $scope.listing = {
    	title:"",
    	subtitle: "",
      location: "",
    	description: "",
    	classes: [
        {
      		day:"",
      		start_time:"",
      		end_time: "",
      		curriculum: ""
      	}
      ]
    }

    var options = {
        types: [],
        componentRestrictions: {}
    };
    $scope.gPlace = new google.maps.places.Autocomplete(document.getElementById("googleGetLocation"), options);
    google.maps.event.addListener($scope.gPlace, 'place_changed', function() {
      var place = $scope.gPlace.getPlace();
      if (!place.geometry || !place.address_components) {
        return;
      }
      $scope.listing.location = place.formatted_address;
      $scope.listing.lat = place.geometry.location.lat();
      $scope.listing.lng = place.geometry.location.lng();
      for(var i = 0; i < place.address_components.length; i += 1) {
              
         var addressObj = place.address_components[i];

         for(var j = 0; j < addressObj.types.length; j += 1) {

          //COUNTRY
         if (addressObj.types[j] === 'country') {
            $scope.listing.country = encodeURIComponent(addressObj.long_name.toLowerCase().trim());
            console.log(addressObj.types[j]); // confirm that this is 'country'
            console.log($scope.listing.country); // confirm that this is the country name
         }

          //CITY
          if (addressObj.types[j] === 'locality') {
            $scope.listing.city = encodeURIComponent(addressObj.long_name.toLowerCase().trim());
            console.log(addressObj.types[j]); // confirm that this is 'country'
            console.log($scope.listing.city); // confirm that this is the country name
         }
       }
     }
    });


    $scope.addTimeSlot = function() {
      console.log("addSlot");
      $scope.listing.classes.push({
          day:"",
          start_time:"",
          end_time: "",
          curriculum: ""
        });
    };

    $scope.removeTimeSlot = function(index) {
      $scope.listing.classes.splice(index,1);
    }


    $scope.submitListing = function(form) {

      $scope.submitted = true;

      if(form.valid) {
        
        $http.post('/api/listings', $scope.listing).
        success(function(data, status, headers, config) {
          console.log(data);
          // this callback will be called asynchronously
          // when the response is available
        }).
        error(function(data, status, headers, config) {
          console.log(data);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
      }
    }

    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 1;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      $scope.ismeridian = ! $scope.ismeridian;
    };

  
  });
