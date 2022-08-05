'use strict';

angular.module('myPage').component('myPage', {
    templateUrl: 'my-page/my-page.template.html',
    controller: ['User', '$rootScope',
        function MyPageController(User, $rootScope) {
            this.info = User.get($rootScope.token).myPage();
        }
    ]
});
