'use strict';

angular.module('myOrders').component('myOrders', {
    templateUrl: 'my-orders/my-orders.template.html',
    controller: ['Order', 'Ticket', '$rootScope', '$location',
        function MyOrdersController(Order, Ticket, $rootScope, $location) {
            const self = this;
            this.orders = Order.get($rootScope.token).myOrders();

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
                $location.url("/my-tickets/order/" + orderId);
            };
        }
    ]
});
