'use strict';

describe('Service: listings', function () {

  // load the service's module
  beforeEach(module('englishClubApp'));

  // instantiate service
  var listings;
  beforeEach(inject(function (_listings_) {
    listings = _listings_;
  }));

  it('should do something', function () {
    expect(!!listings).toBe(true);
  });

});
