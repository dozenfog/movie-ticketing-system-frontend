'use strict';

angular.module('myOrders').component('myOrders', {
    templateUrl: 'my-orders/my-orders.template.html',
    controller: ['Order', 'Ticket', '$rootScope', '$location', '$route',
        function MyOrdersController(Order, Ticket, $rootScope, $location, $route) {
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
                Order.get($rootScope.token).payForOrder({
                    orderId: orderId
                }, function success() {
                    $route.reload();
                });
            };

            self.printTickets = function (orderId) {
                $location.url("/my-tickets/order/" + orderId);
            };
        }
    ]
});
