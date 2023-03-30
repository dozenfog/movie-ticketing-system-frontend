'use strict';

angular.module('admin-stats.user').component('adminUser', {
    templateUrl: 'admin-stats/user/user.template.html',
    controller: ['$rootScope', '$scope', '$location', 'Admin',
        function AdminUserController($rootScope, $scope, $location, Admin) {
            this.users = Admin.get($rootScope.token).getAllUsers();

            $scope.getUserDetails = function (userId) {
                console.log("user details: " + userId);
            };
        }
    ]
});