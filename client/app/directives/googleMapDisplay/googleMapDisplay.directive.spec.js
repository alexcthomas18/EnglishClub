'use strict';

describe('Directive: googleMapDisplay', function () {

  // load the directive's module
  beforeEach(module('englishClubApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<google-map-display></google-map-display>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the googleMapDisplay directive');
  }));
});