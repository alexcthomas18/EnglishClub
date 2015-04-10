'use strict';

angular.module('englishClubApp')
  .controller('SubmitListingCtrl', function ($scope,$stateParams) {
    $scope.message = 'is this wrking';
    $scope.stateParams = $stateParams;
    $scope.listing = {
    	title:"title",
    	subtitle: "subtitle",
    	description: "description",
    	classes: [
        {
      		day:"",
      		start_time:"",
      		end_time: "",
      		curriculum: ""
      	}
      ]
    }

    $scope.addTimeSlot = function() {
      console.log("addSlot");
      $scope.listing.classes.push({
          day:"",
          start_time:"",
          end_time: "",
          curriculum: ""
        });
    };

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
