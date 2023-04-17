'use strict';

angular.module('admin-stats.user-edit').component('adminUserEdit', {
    templateUrl: 'admin-stats/user-edit/user-edit.template.html',
    controller: ['$rootScope', '$scope', '$location', 'Admin', '$route', 'User',
        function AdminUserEditController($rootScope, $scope, $location, Admin, $route, User) {
            const self = this;
            const urlParts = $location.$$path.split("/");
            self.userId = urlParts[urlParts.length - 1];

            self.cities = User.get($rootScope.token).getAllCities();
            self.oldUserInfo = Admin.get($rootScope.token).getUserById({userId: self.userId},
                function success(oldUserInfo) {
                    $scope.firstName = oldUserInfo.firstName;
                    $scope.lastName = oldUserInfo.lastName;
                    $scope.email = oldUserInfo.email;
                    $scope.phone = oldUserInfo.phone;
                    $scope.address = oldUserInfo.address;
                });

            $scope.submitAdminEditPageForm = function () {
                Admin.get($rootScope.token).updateUserById({
                    userId: self.userId,
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    email: $scope.email,
                    phone: $scope.phone,
                    password: $scope.password,
                    address: $scope.address,
                    cityId: $scope.userCitySelect
                }, function success() {
                    $location.url('/admin/users');
                });
            };
        }
    ]
});