'use strict';

describe('Controller: ClubCtrl', function () {

  // load the controller's module
  beforeEach(module('englishClubApp'));

  var ClubCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClubCtrl = $controller('ClubCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
