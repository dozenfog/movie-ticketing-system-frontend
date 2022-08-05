'use strict';

angular.module('movieDetail').component('movieDetail', {
    templateUrl: 'movie-detail/movie-detail.template.html',
    controller: ['$routeParams', 'Movie',
        function MovieDetailController($routeParams, Movie) {
            var self = this;
            self.movie = Movie.getById({movieId: $routeParams.movieId}, function (movie) {
                self.setImage(movie.movieImages[0].url);
            });

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});
