'use strict';

angular.module('movieTicketsApp').config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider.when('/movie-theaters', {
            template: '<cinema-list></cinema-list>'
        }).when('/movie-theaters/:cinemaId', {
            template: '<cinema-detail></cinema-detail>'
        }).when('/movies', {
            template: '<movie-list></movie-list>'
        }).when('/movies/:movieId', {
            template: '<movie-detail></movie-detail>'
        }).when('/account', {
            template: '<auth-form></auth-form>'
        }).when('/login', {
            template: '<login></login>'
        }).when('/signup', {
            template: '<signup></signup>'
        }).when('/me', {
            template: '<my-page></my-page>'
        }).when('/orders/me', {
            template: '<my-orders></my-orders>'
        }).when('/tickets/pick/:orderId', {
            template: '<ticket-picker></ticket-picker>'
        }).otherwise('/movies');
    }
]);
