'use strict';

describe('service', function() {
  // Load the myApp module
  beforeEach(module('myApp'));

  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
