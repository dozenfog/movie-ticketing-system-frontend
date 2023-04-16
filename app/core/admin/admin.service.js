'use strict';

angular.module('core.admin').factory('Admin', ['$resource',
    function ($resource) {
        return {
            get: function (token) {
                return $resource('', {}, {
                    getAllUsers: {
                        url: 'http://localhost:8080/admin/users',
                        method: 'GET',
                        isArray: true,
                        headers: {
                            'Authorization': token
                        }
                    },
                    getUserById: {
                        url: 'http://localhost:8080/admin/users/:userId',
                        params: {userId: '@userId'},
                        method: 'GET',
                        isArray: false,
                        headers: {
                            'Authorization': token
                        }
                    },
                    updateUserById: {
                        url: 'http://localhost:8080/admin/users/:userId',
                        params: {
                            userId: '@userId',
                            firstName: '@firstName',
                            lastName: '@lastName',
                            email: '@email',
                            phone: '@phone',
                            password: '@password',
                            address: '@address',
                            cityId: '@cityId'
                        },
                        method: 'PUT',
                        isArray: false,
                        headers: {
                            'Authorization': token
                        }
                    },
                    deleteUserById: {
                        url: 'http://localhost:8080/admin/users/:userId',
                        method: 'DELETE',
                        isArray: false,
                        headers: {
                            'Authorization': token
                        }
                    },
                    getTopActiveByMovieRoomTickets: {
                        url: 'http://localhost:8080/admin/users/top/:cinemaId',
                        params: {
                            cinemaId: '@cinemaId',
                            startDate: '@startDate',
                            endDate: '@endDate'
                        },
                        isArray: false,
                        headers: {
                            'Authorization': token
                        }
                    }
                });
            }
        };
    }
]);
