'use strict';

angular.module('englishClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('/submit_listing', {
      	url: '/submit_listing',
        templateUrl: 'app/submit_listing/submit_listing.html',
        controller: 'SubmitListingCtrl'
      });
  });
