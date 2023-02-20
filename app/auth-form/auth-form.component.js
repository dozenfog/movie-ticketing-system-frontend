'use strict';

angular.module('authForm').component('authForm', {
    controller: ['$rootScope', '$location', 'User',
        function AuthController($rootScope, $location, User) {
        $rootScope.$on('locationChangeStart', function () {
            if (!User.isAuthenticated()) {
                $location.path('#!/login');
            } else {
                $location.path('#!/me');
            }
        });
    }]
});
