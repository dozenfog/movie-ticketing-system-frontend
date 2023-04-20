'use strict';

angular.module('admin-stats.user-orders').component('adminUserOrders', {
    templateUrl: 'admin-stats/user-orders/user-orders.template.html',
    controller: ['$rootScope', '$scope', '$location', 'Admin',
        function AdminUserOrdersController($rootScope, $scope, $location, Admin) {
            const self = this;
            const urlParts = $location.$$path.split("/");
            self.userId = urlParts[urlParts.length - 1];

            self.userOrders = Admin.get($rootScope.token).getOrdersByUserId({userId: self.userId});

            this.selectedOrderStatus = 'CREATED';

            self.changeDisplay = function (status) {
                self.selectedOrderStatus = status;
            };

            self.filterByStatus = function (order) {
                return order.orderStatus === self.selectedOrderStatus;
            };

            self.printTickets = function (orderId) {
                $location.url("/tickets/order/" + orderId);
            };
        }
    ]
});