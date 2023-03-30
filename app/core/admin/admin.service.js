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
                    }
                });
            }
        };
    }
]);
