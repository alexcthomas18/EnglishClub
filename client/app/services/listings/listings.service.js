'use strict';

angular.module('englishClubApp')
  .service('listings', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var newListings = {};
    // return {
    // 	approved: function() {

    // 	},
    // 	needApproval: function() {
    // 		var cb = callback || angular.noop;
	   //      var deferred = $q.defer();

	   //      $http.get('/api/listings').
	   //      success(function(data) {
	          
	   //        newListings = data;
	   //        deferred.resolve(data);
	   //        return cb();
	   //      }).
	   //      error(function(err) {
	   //        this.logout();
	   //        deferred.reject(err);
	   //        return cb(err);
	   //      }.bind(this));

	   //      return deferred.promise;
    // 	}
    // }
  });
