'use strict';

angular.module('signup').component('signup', {
    templateUrl: 'signup/signup.template.html',
    controller: ['User', '$scope', '$location', '$rootScope',
        function SignupController(User, $scope, $location, $rootScope) {
            this.cities = User.get($rootScope.token).getAllCities();
            this.userCategories = User.get($rootScope.token).getAllUserCategories();

            $scope.submitSignupForm = function () {
                User.get().signup({
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    userName: $scope.userName,
                    email: $scope.email,
                    phone: $scope.phone,
                    password: $scope.password,
                    address: $scope.address,
                    cityId: $scope.userCitySelect,
                    birthDate: $scope.birthDate,
                    userCategoryId: $scope.userCategorySelect,
                    role: 1
                }, function success() {
                    $location.url('/login');
                });
            };
        }
    ]
});
