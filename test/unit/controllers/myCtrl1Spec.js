'use strict';

describe('Controller: My Controller 1', function(){
  var scope, controller;

  // Load the myApp module
  beforeEach(module('myApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('MyCtrl1', { $scope: scope });
  }));

  it('should ....', inject(function() {
    //spec body
  }));
});
