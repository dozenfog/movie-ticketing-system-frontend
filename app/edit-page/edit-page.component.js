'use strict';

angular.module('editPage').component('editPage', {
    templateUrl: 'edit-page/edit-page.template.html',
    controller: ['User', '$scope', '$location', '$rootScope',
        function EditPageController(User, $scope, $location, $rootScope) {
            const self = this;

            self.cities = User.get($rootScope.token).getAllCities();
            self.oldUserInfo = User.get($rootScope.token).myPage({}, function success(oldUserInfo) {
                $scope.firstName = oldUserInfo.firstName;
                $scope.lastName = oldUserInfo.lastName;
                $scope.email = oldUserInfo.email;
                $scope.phone = oldUserInfo.phone;
                $scope.address = oldUserInfo.address;
            });

            $scope.submitEditPageForm = function () {
                User.get($rootScope.token).editPage({
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    email: $scope.email,
                    phone: $scope.phone,
                    password: $scope.password,
                    address: $scope.address,
                    cityId: $scope.userCitySelect
                }, function success() {
                    $location.url('/me');
                });
            };
        }
    ]
});
