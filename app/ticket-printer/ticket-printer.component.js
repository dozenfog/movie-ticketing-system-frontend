'use strict';

angular.module('ticketPrinter').component('ticketPrinter', {
    templateUrl: 'ticket-printer/ticket-printer.template.html',
    controller: ['Order', 'Event', 'Ticket', '$scope', '$location', '$rootScope', '$route',
        function TicketPrinterController(Order, Event, Ticket, $scope, $location, $rootScope, $route) {
            const self = this;
            const urlParts = $location.$$path.split("/");
            self.orderId = urlParts[urlParts.length - 1];

            self.tickets = Ticket.get($rootScope.token).getTicketsByOrderId({
                orderId: self.orderId,
            });

            $scope.removeTicket = function (ticketId) {
                Ticket.get($rootScope.token).removeTicket({
                    ticketId: ticketId
                }, function success() {
                    $route.reload();
                });
            };
        }
    ]
});
