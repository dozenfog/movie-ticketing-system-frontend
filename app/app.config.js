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
        }).when('/buy-tickets/layout/:eventId', {
            template: '<ticket-picker></ticket-picker>'
        }).when('/my-tickets/order/:orderId', {
            template: '<ticket-printer></ticket-printer>'
        }).when('/me/edit', {
            template: '<edit-page></edit-page>'
        }).when('/admin/users', {
            template: '<admin-user></admin-user>'
        })
            .otherwise('/login');
    }
]).run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on("$locationChangeStart", function (event, next) {
        const urls = ["/account", "/me", "/buy-tickets/layout/", "/my-tickets/order/", "admin"];
        urls.forEach(url => {
            if (next.toString().includes(url) && !$rootScope.token) {
                $location.url("/login");
            }
        });
    });
}]);
