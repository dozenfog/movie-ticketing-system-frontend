'use strict';

angular.module('core.cinema').factory('Cinema', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8080/movie-theaters', {}, {
            getById: {
                url: 'http://localhost:8080/movie-theaters/:cinemaId',
                params: {cinemaId: '@cinemaId'},
                method: 'GET',
                isArray: false
            }
        });
    }
]);
