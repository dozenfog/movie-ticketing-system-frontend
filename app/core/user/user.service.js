'use strict';

angular.module('core.user').factory('User', ['$resource',
    function ($resource) {
        return {
            get: function (token) {
                return $resource('', {}, {
                    login: {
                        url: 'http://localhost:8080/users/login',
                        params: {username: '@username', password: '@password'},
                        method: 'POST',
                        isArray: false
                    },
                    signup: {
                        url: 'http://localhost:8080/users/signup',
                        params: {
                            firstName: '@firstName',
                            lastName: '@lastName',
                            userName: '@userName',
                            email: '@email',
                            phone: '@phone',
                            password: '@password',
                            address: '@address',
                            cityId: '@cityId',
                            birthDate: '@birthDate',
                            userCategoryId: '@userCategoryId',
                            role: '@role'
                        },
                        method: 'POST',
                        isArray: false
                    },
                    myPage: {
                        url: 'http://localhost:8080/users/me',
                        method: 'GET',
                        isArray: false,
                        headers: {
                            'Authorization': token
                        }
                    },
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
                    },
                    addTickets: {
                        url: 'http://localhost:8080/tickets/order/:orderId',
                        method: 'POST',
                        isArray: true,
                        headers: {
                            'Authorization': token,
                        },
                        params: {
                            tickets: '@tickets',
                            //orderId: '@orderId',
                        }
                    },
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
