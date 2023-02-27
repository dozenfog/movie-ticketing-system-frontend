'use strict';

angular.module('core.ticket').factory('Ticket', ['$resource',
    function ($resource) {
        return {
            get: function (token) {
                return $resource('', {}, {
                    addTickets: {
                        url: 'http://localhost:8080/tickets/order/:orderId',
                        method: 'POST',
                        isArray: true,
                        headers: {
                            'Authorization': token,
                        },
                        params: {
                            tickets: '@tickets',
                        }
                    },
                    getTicketsByOrderId: {
                        url: 'http://localhost:8080/tickets/order/:orderId',
                        method: 'GET',
                        isArray: true,
                        headers: {
                            'Authorization': token,
                        }
                    }
                });
            }
        };
    }
]);
