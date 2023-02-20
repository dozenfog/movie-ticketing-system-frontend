'use strict';

angular.module('signup').component('signup', {
    templateUrl: 'signup/signup.template.html',
    controller: ['User', '$scope', '$location',
        function SignupController(User, $scope, $location) {
            $scope.submitSignupForm = function () {
                User.signup({
                    firstName: $scope.firstName, lastName: $scope.lastName, userName: $scope.userName,
                    email: $scope.email, phone: $scope.phone, password: $scope.password, address: $scope.address,
                    cityId: $scope.cityId, birthDate: $scope.birthDate, userCategoryId: $scope.userCategoryId, role: 1
                }, function success() {
                    User.setAuthenticated(true);
                    $location.path('#!/login');
                });
            };
        }
    ]
});
