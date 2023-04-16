'use strict';

angular.module('admin-stats.user').component('adminUser', {
    templateUrl: 'admin-stats/user/user.template.html',
    controller: ['$rootScope', '$scope', '$location', 'Admin',
        function AdminUserController($rootScope, $scope, $location, Admin) {
            const self = this;
            self.users = Admin.get($rootScope.token).getAllUsers();
            self.usersWithInfoOpened = new Map(self.users.map(user => [user.id, false]));

            $scope.changeUserInfoDisplay = function (userId) {
                self.usersWithInfoOpened.set(userId, !self.usersWithInfoOpened.get(userId));
            };

            $scope.getUserInfo = function (userId) {
                return Admin.get($rootScope.token).getUserById({userId: userId});
            };

        }
    ]
});