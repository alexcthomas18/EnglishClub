'use strict';

angular.module('englishClubApp')
  .controller('ClubCtrl', function ($scope,$stateParams) {
  	$scope.stateParams = $stateParams;
    $scope.message = 'Hello';

    $scope.persons = [
    	{
    		name:"Alex",
    	},
    	{
    		name:"Paul"
    	}
    ]

    $scope.listing = {
        title:"title",
        subtitle:"subtitle",
        classes: [
            {
                starttime:"sesh1"
            },
            {
                starttime:"sesh1"
            },

        ]
      }

      $scope.addSesh = function(){
      	$scope.listing.classes.push({starttime:'Im New!'})
      }

  });
