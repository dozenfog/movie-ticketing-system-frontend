'use strict';

angular.module('login').component('login', {
    templateUrl: 'login/login.template.html',
    controller: ['User', '$scope', '$location', '$rootScope',
        function LoginController(User, $scope, $location, $rootScope) {
            $scope.submitLoginForm = function () {
                User.get().login({username: $scope.username, password: $scope.password},
                    function success(data, headers) {
                        $rootScope.token = headers('authorization');
                        $location.url('/me');
                    });
            };
        }
    ]
});
