'use strict';

angular.module('cinemaList').component('cinemaList', {
    templateUrl: 'cinema-list/cinema-list.template.html',
    controller: ['Cinema',
        function CinemaListController(Cinema) {
            this.cinemas = Cinema.query();
        }
    ]
});
