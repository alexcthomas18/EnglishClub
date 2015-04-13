'use strict';

angular.module('englishClubApp')
  .controller('AdminCtrl', function ($scope, $http, $modal, Auth, User) {

    //USED FOR UPDATES
    $scope.listing = {};

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    //DELETE USER
    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    //APPROVED CLUBS
    $scope.approved=[];
    function getApproved() {
      $http.get('/api/listings?approved=1').
      success(function(data, status, headers, config) {
        $scope.approved = data;
      }).
      error(function(data, status, headers, config) {
      });
    }
    getApproved();

    //CLUBS THAT NEED APPROVAL
    $scope.needsApproval=[];
    function getNeedsApproval() {
      $http.get('/api/listings?approved=0').
      success(function(data, status, headers, config) {
        $scope.needsApproval = data;
      }).
      error(function(data, status, headers, config) {
      });
    }
    getNeedsApproval();

    //CLUB TIME
    $scope.getClubTime = function(t) {

      var date = new Date(t);
      var hours = date.getHours();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours > 12 ? hours - 12 : hours;
      var minutes = "0" + date.getMinutes();

      return hours + ':' + minutes.substr(minutes.length-2)+ampm;
    }

    //APPROVE CLUB
    $scope.approveClub = function(club) {
      club.approved = 1;
      $scope.updateClub(club);
    }

    //UPDATE CLUB
    $scope.updateClub = function(club) {
      console.log('/api/listings/'+club._id);
      console.log(club);
      $http.put('/api/listings/'+club._id, club).
      success(function(data, status, headers, config) {
        console.log(data);
        getApproved();
        getNeedsApproval();
      }).
      error(function(data, status, headers, config) {
      });
    }

    //DELETE CLUB
    $scope.deleteClub = function(club) {
      console.log('/api/listings/'+club._id);
      console.log(club);
      $http.delete('/api/listings/'+club._id, club).
      success(function(data, status, headers, config) {
        console.log(data);
        getApproved();
        getNeedsApproval();
      }).
      error(function(data, status, headers, config) {
      });
    }

    //LOAD/POPULATE EDIT BOX
    $scope.loadUpdateBox = function(club) {
      $scope.modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        size: 'lg',
        scope: $scope
      });
      $scope.modalInstance.result.then(function () {
        // alert('Modal success at:' + new Date());
        $scope.listing = {};
        $scope.submitted = false;
      }, function () {
        // alert('Modal dismissed at: ' + new Date());
        $scope.listing = {};
        $scope.submitted = false;
      });
      $scope.listing = angular.copy(club);
    }


    $scope.getNewLocation = function(loc,lat,lng,cntry,city) {
      $scope.listing.location = loc;
      $scope.listing.lat = lat;
      $scope.listing.lng = lng;
      $scope.listing.country = cntry;
      $scope.listing.city = city;
    }

    //UPDATE LISTING FROM UPDATE BOX(DUPLICATE)
    $scope.saveClubEdit = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        console.log("before update:");
        console.log($scope.listing);

        $http.put('/api/listings/'+$scope.listing._id, $scope.listing).
        success(function(data, status, headers, config) {
          console.log(data);
          $scope.modalInstance.close();
          getApproved();
          getNeedsApproval();
        }).
        error(function(data, status, headers, config) {
          alert("error");
          console.log(data);
        });
      }
      
    };
    $scope.cancelClubEdit = function() {
      $scope.modalInstance.close();
    }

    //TIME PICKER STUFF
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