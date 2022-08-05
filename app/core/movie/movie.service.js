'use strict';

angular.module('core.movie').factory('Movie', ['$resource',
    function ($resource) {
        return $resource('http://localhost:8080/movies', {}, {
            getById: {
                url: 'http://localhost:8080/movies/:movieId',
                params: {movieId: '@movieId'},
                method: 'GET',
                isArray: false
            }
        });
    }
]);
