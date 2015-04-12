'use strict';

angular.module('englishClubApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    $scope.approved=[];
    function getApproved() {
      $http.get('/api/listings/approved').
      success(function(data, status, headers, config) {
        $scope.approved = data;
      }).
      error(function(data, status, headers, config) {
      });
    }
    getApproved();

    $scope.needsApproval=[];
    function getNeedsApproval() {
      $http.get('/api/listings/needsApproval').
      success(function(data, status, headers, config) {
        $scope.needsApproval = data;
      }).
      error(function(data, status, headers, config) {
      });
    }
    getNeedsApproval();
      

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.approveClub = function(club) {
      club.approved = 1;
      //club.classes[0].day = "blurpity blurp";
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
  
    $scope.rejectClub = function(club) {
      alert(1)
    }
});


