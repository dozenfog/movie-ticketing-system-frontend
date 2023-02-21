'use strict';

angular.module('ticketPicker').component('ticketPicker', {
    templateUrl: 'ticket-picker/ticket-picker.template.html',
    controller: ['User', '$scope', '$location', '$rootScope',
        function TicketPickerController(User, $scope, $location, $rootScope) {
            var self = this;
            self.orders = User.get($rootScope.token).myOrders();

            $scope.submitTickets = function () {
                User.get($rootScope.token).addTickets({
                        orderId: self.orders[self.orders.length - 1].id,
                    }, [parseInt($scope.ticketNum)],
                    function success() {
                        $location.url('/orders/me');
                    });
            };
        }
    ]
});
