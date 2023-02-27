'use strict';

angular.module('myOrders').component('myOrders', {
    templateUrl: 'my-orders/my-orders.template.html',
    controller: ['User', '$rootScope',
        function MyOrdersController(User, $rootScope) {
            const self = this;
            this.orders = User.get($rootScope.token).myOrders();

            this.selectedOrderStatus = 'CREATED';

            self.changeDisplay = function (status) {
                self.selectedOrderStatus = status;
            };

            self.filterByStatus = function (order) {
                return order.orderStatus === self.selectedOrderStatus;
            };

            self.orderPayment = function (orderId) {
                console.log("pay");
            };

            self.printTickets = function (orderId) {
                console.log("print");
            };
        }
    ]
});
