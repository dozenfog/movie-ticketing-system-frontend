'use strict';

angular.module('myPage').component('myPage', {
    templateUrl: 'my-page/my-page.template.html',
    controller: ['User', '$rootScope',
        function MyPageController(User, $rootScope) {
            const self = this;
            self.info = User.get($rootScope.token).myPage();

            self.getWeatherImage = function getWeatherImage(cloudiness) {
                return cloudiness === 0 ?
                    "https://cdn-icons-png.flaticon.com/512/2280/2280705.png" :
                    cloudiness === 100 ?
                        "https://cdn-icons-png.flaticon.com/512/6316/6316087.png" :
                        "https://cdn-icons-png.flaticon.com/512/1146/1146869.png";
            };
        }
    ]
});
