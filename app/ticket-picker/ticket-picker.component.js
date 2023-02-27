'use strict';

angular.module('ticketPicker').component('ticketPicker', {
    templateUrl: 'ticket-picker/ticket-picker.template.html',
    controller: ['User', '$scope', '$location', '$rootScope',
        function TicketPickerController(User, $scope, $location, $rootScope) {
            var self = this;
            const urlParts = $location.$$path.split("/");
            self.eventId = urlParts[urlParts.length - 1];
            self.event = User.get().findEventById({eventId: self.eventId});

            $scope.submitTickets = function () {
                User.get($rootScope.token).myOrders({}, function success(orders) {
                    self.lastOrder = orders.find(order => order.orderStatus === "CREATED" && order.event.id == self.eventId);
                    if (!self.lastOrder) {
                        User.get($rootScope.token).addOrder({
                                creationDateTime: new Date(),
                                userId: $rootScope.userId,
                                eventId: self.eventId
                            },
                            function successOrder(order) {
                                self.addTicketsToOrder(order.id);
                            });
                    } else {
                        self.addTicketsToOrder(self.lastOrder.id);
                    }
                });
            };

            self.addTicketsToOrder = function (orderId) {
                User.get($rootScope.token).addTickets({
                        orderId: orderId,
                    }, [parseInt($scope.ticketNum)],
                    function success() {
                        $location.url('/orders/me');
                    });
            };
        }
    ]
});
