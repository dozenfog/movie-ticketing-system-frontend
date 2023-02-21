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
]).run(['$rootScope', '$location', 'User', function ($rootScope, $location, User) {
    $rootScope.$on("$locationChangeStart", function (event, next) {
        if (next.toString().endsWith("/account")) {
            if (User.isAuthenticated()) {
                $location.url("/me");
            } else {
                $location.url("/login");
            }
        }
    });
}]);
