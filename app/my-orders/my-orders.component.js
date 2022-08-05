'use strict';

angular.module('myOrders').component('myOrders', {
    templateUrl: 'my-orders/my-orders.template.html',
    controller: ['User', '$rootScope',
        function MyOrdersController(User, $rootScope) {
            this.orders = User.get($rootScope.token).myOrders();
        }
    ]
});
