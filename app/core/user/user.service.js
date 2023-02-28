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
                    getAllCities: {
                        url: 'http://localhost:8080/users/cities',
                        method: 'GET',
                        isArray: true,
                        headers: {
                            'Authorization': token
                        }
                    },
                    getAllUserCategories: {
                        url: 'http://localhost:8080/users/user-categories',
                        method: 'GET',
                        isArray: true,
                        headers: {
                            'Authorization': token
                        }
                    }
                });
            }
        };
    }
]);
