'use strict';

angular.module('core.event').factory('Event', ['$resource',
    function ($resource) {
        return {
            get: function (token) {
                return $resource('', {}, {
                    findEventById: {
                        url: 'http://localhost:8080/events/:eventId',
                        method: 'GET',
                        isArray: false,
                        params: {
                            orderId: '@eventId',
                        }
                    }
                });
            }
        };
    }
]);
