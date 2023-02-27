'use strict';

angular.module('core.order').factory('Order', ['$resource',
    function ($resource) {
        return {
            get: function (token) {
                return $resource('', {}, {
                    myOrders: {
                        url: 'http://localhost:8080/orders',
                        method: 'GET',
                        isArray: true,
                        headers: {
                            'Authorization': token
                        }
                    },
                    addOrder: {
                        url: 'http://localhost:8080/orders',
                        method: 'POST',
                        isArray: false,
                        headers: {
                            'Authorization': token
                        },
                        params: {
                            creationDateTime: '@creationDateTime',
                            userId: '@userId',
                            eventId: '@eventId'
                        }
                    },
                    payForOrder: {
                        url: 'http://localhost:8080/orders/:orderId/payment',
                        method: 'PUT',
                        isArray: false,
                        headers: {
                            'Authorization': token,
                        },
                        params: {
                            orderId: '@orderId',
                        }
                    }
                });
            }
        };
    }
]);
