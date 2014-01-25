'use strict';

describe('Controller: FindADoctorController', function () {

    // load the controller's module
    beforeEach(module('angularApp'));

    var FindADoctorController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        FindADoctorController = $controller('FindADoctorController', {
            $scope: scope
        });
    }));
});
