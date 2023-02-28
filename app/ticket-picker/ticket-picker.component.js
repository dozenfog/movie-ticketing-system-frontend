'use strict';

angular.module('ticketPicker').component('ticketPicker', {
    templateUrl: 'ticket-picker/ticket-picker.template.html',
    controller: ['Order', 'Event', 'Ticket', '$scope', '$location', '$rootScope',
        function TicketPickerController(Order, Event, Ticket, $scope, $location, $rootScope) {
            const self = this;
            const urlParts = $location.$$path.split("/");
            self.eventId = urlParts[urlParts.length - 1];
            Event.get().findEventById({eventId: self.eventId}, function success(event) {
                self.boughtTicketsIds = event.boughtTicketIds;
                self.seats = $rootScope.groupBy(event.movieRoom.seats, seat => seat.rowNumber);
            });
            self.chosenSeatsIds = [];

            $scope.addOrRemoveSeat = function (seatId) {
                const index = self.chosenSeatsIds.indexOf(seatId);
                if (index > -1) {
                    self.chosenSeatsIds.splice(index, 1);
                } else {
                    self.chosenSeatsIds.push(seatId);
                }
            };

            $scope.submitTickets = function () {
                Order.get($rootScope.token).myOrders({}, function success(orders) {
                    self.lastOrder = orders.find(order => order.orderStatus === "CREATED" && order.event.id == self.eventId);
                    if (!self.lastOrder) {
                        Order.get($rootScope.token).addOrder({
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
                Ticket.get($rootScope.token).addTickets({
                        orderId: orderId,
                    }, self.chosenSeatsIds,
                    function success() {
                        $location.url('/orders/me');
                    });
            };
        }
    ]
});
