'use strict';

angular.module('ticketPrinter').component('ticketPrinter', {
    templateUrl: 'ticket-printer/ticket-printer.template.html',
    controller: ['Order', 'Event', 'Ticket', '$scope', '$location', '$rootScope',
        function TicketPrinterController(Order, Event, Ticket, $scope, $location, $rootScope) {
            const self = this;
            const urlParts = $location.$$path.split("/");
            self.orderId = urlParts[urlParts.length - 1];

            self.tickets = Ticket.get($rootScope.token).getTicketsByOrderId({
                orderId: self.orderId,
            });
        }
    ]
});
