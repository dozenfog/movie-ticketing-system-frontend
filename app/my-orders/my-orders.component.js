'use strict';

angular.module('myOrders').component('myOrders', {
    templateUrl: 'my-orders/my-orders.template.html',
    controller: ['Order', 'Ticket', '$rootScope', '$location', '$route', '$scope',
        function MyOrdersController(Order, Ticket, $rootScope, $location, $route, $scope) {
            const self = this;
            this.orders = Order.get($rootScope.token).myOrders();

            this.selectedOrderStatus = 'CREATED';

            self.changeDisplay = function (status) {
                self.selectedOrderStatus = status;
            };

            self.filterByStatus = function (order) {
                return order.orderStatus === self.selectedOrderStatus;
            };

            $scope.orderPayment = function (orderId) {
                Order.get($rootScope.token).payForOrder({
                    orderId: orderId
                }, function success() {
                    $route.reload();
                });
            };

            $scope.orderCancellation = function (orderId) {
                Order.get($rootScope.token).cancelOrder({
                    orderId: orderId
                }, function success() {
                    $route.reload();
                });
            };

            self.printTickets = function (orderId) {
                $location.url("/tickets/order/" + orderId);
            };
        }
    ]
});
