'use strict';

angular.module('cinemaDetail').component('cinemaDetail', {
    templateUrl: 'cinema-detail/cinema-detail.template.html',
    controller: ['$routeParams', 'Cinema', 'User', '$rootScope', '$scope', '$location', '$window',
        function CinemaDetailController($routeParams, Cinema, User, $rootScope, $scope, $location) {
            var self = this;
            self.cinema = Cinema.getById({cinemaId: $routeParams.cinemaId}, function (cinema) {
                self.setEventsMatrix(
                    $rootScope.groupBy(cinema.events, event => event.movie.id)
                        .map(eventsListOneMovie => $rootScope.groupBy(eventsListOneMovie, event => event.movieRoom.id))
                );
            });

            $rootScope.groupBy = function groupBy(list, keyGetter) {
                const map = new Map();
                list.forEach((item) => {
                    const key = keyGetter(item);
                    const collection = map.get(key);
                    if (!collection) {
                        map.set(key, [item]);
                    } else {
                        collection.push(item);
                    }
                });
                return Array.from(map.values());
            };

            self.setEventsMatrix = function setEventsMatrix(eventsMatrix) {
                self.eventMatrix = eventsMatrix;
            };

            $scope.buyTicket = function (eventId) {
                $location.url("/buy-tickets/layout/" + eventId);
            };

            self.formatDate = function (date) {
                return date.format("DD-MM-YYYY, h:mm a");
            };
        }
    ]
});
