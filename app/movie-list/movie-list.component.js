'use strict';

angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controller: ['Movie',
      function MovieListController(Movie) {
        this.movies = Movie.query();
        this.orderProp = 'name';
      }
    ]
  });
