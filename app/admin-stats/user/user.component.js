'use strict';

angular.module('admin-stats.user').component('adminUser', {
    templateUrl: 'admin-stats/user/user.template.html',
    controller: ['$rootScope', '$scope', '$location', 'Admin', '$route',
        function AdminUserController($rootScope, $scope, $location, Admin, $route) {
            const self = this;
            self.users = Admin.get($rootScope.token).getAllUsers();
            self.usersWithInfoOpened = new Map(self.users.map(user => [user.id, false]));

            $scope.changeUserInfoDisplay = function (userId) {
                self.usersWithInfoOpened.set(userId, !self.usersWithInfoOpened.get(userId));
            };

            $scope.getUserInfo = function (userId) {
                return Admin.get($rootScope.token).getUserById({userId: userId});
            };

            $scope.deleteUser = function (userId) {
                Admin.get($rootScope.token).deleteUserById({
                        userId: userId
                    },
                    function success() {
                        $route.reload();
                    });
            };

        }
    ]
});