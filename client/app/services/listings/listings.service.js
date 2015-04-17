'use strict';

angular.module('englishClubApp')
  .service('Listings', function ($http,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	var listings = [];
    var unListings = [];
    var topFour = [];

    return {
    	listingsSet: function() {
    		return listings > 0;
    	},
    	unListingsSet: function() {
    		return unListings > 0;
    	},
    	getListings: function() {

    	},
    	getUnListings: function() {

    	},
    	getTopFour: function(callback) {
    		var cb = callback || angular.noop;
	        var deferred = $q.defer();

	        $http.get('/api/listings?sort=-clicks&limit=4&approved=1').
	        success(function(data) {
	        	topFour = data;
		        deferred.resolve(this.topFour);
		        return cb();
	        }).
	        error(function(err) {
	          deferred.reject(err);
	          return cb(err);
	        }.bind(this));

	        return deferred.promise;
    	},
    	topFour: function() {
    		return topFour;
    	}
    };
  });
