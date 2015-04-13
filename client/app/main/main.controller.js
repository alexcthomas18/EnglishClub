'use strict';

angular.module('englishClubApp')
  .controller('MainCtrl', function ($scope, $http, socket, Listings) {
    $scope.awesomeThings = [];
    $scope.showHowWorks = false;

    // console.log(Listings.topFour());

    $scope.clubs = [];
    $http.get('/api/listings?sort=-clicks&limit=4&approved=1').success(function(data) {
      $scope.clubs = data;
    });

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  })

  .animation('.slide', function() {
    var NG_HIDE_CLASS = 'ng-hide';
    return {
        beforeAddClass: function(element, className, done) {
            if(className === NG_HIDE_CLASS) {
                element.slideUp(done); 
            }
        },
        removeClass: function(element, className, done) {
            if(className === NG_HIDE_CLASS) {
                element.hide().slideDown(done);
            }
        }
    }
});
