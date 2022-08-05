'use strict';

angular.module('cinemaDetail').component('cinemaDetail', {
    templateUrl: 'cinema-detail/cinema-detail.template.html',
    controller: ['$routeParams', 'Cinema', 'User', '$rootScope', '$scope', '$location', '$window',
        function CinemaDetailController($routeParams, Cinema, User, $rootScope, $scope, $location, $window) {
            var self = this;
            this.cinema = Cinema.getById({cinemaId: $routeParams.cinemaId}, function (cinema) {
                self.setEventsMatrix(
                    self.groupBy(cinema.events, event => event.movie.id)
                        .map(eventsListOneMovie => self.groupBy(eventsListOneMovie, event => event.movieRoom.id))
                );
            });

            self.groupBy = function groupBy(list, keyGetter) {
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
                self.user = User.get($rootScope.token).myPage({}, function success(user) {
                    User.get($rootScope.token).addOrder({
                            creationDateTime: new Date(),
                            userId: user.id,
                            eventId: eventId
                        },
                        function successOrder(order) {
                            $window.location.href = '#!/tickets/pick/' + order.id;
                        });
                });
            };
        }
    ]
});
