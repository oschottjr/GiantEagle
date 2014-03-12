'use strict'

/* routing */
four51.app.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	var concatProductView = function(routeParams){
			return 'partials/productviews/'+ routeParams.view +'.html';
		}
		var concatSpecFormView = function(routeParams){
			return 'partials/SpecForms/' + routeParams.productInteropID + '.html';
		}

		$routeProvider.
			when('/listOrders', { templateUrl: 'partials/listOrders.html', controller: 'ListOrdersCtrl' }).
			when('/orderdetails/:orderid', {templateUrl: 'partials/orderDetails.html', controller: 'OrderDetailsCtrl'}).
            when('/catalog', { templateUrl: 'partials/categoryView.html', controller: 'CategoryCtrl' }).
            when('/catalog/:categoryInteropID', { templateUrl: 'partials/categoryView.html', controller: 'CategoryCtrl' }).
            when('/product/:view/:productInteropID', {templateUrl: concatProductView, controller: 'ProductCtrl'}).
            when('/product/:view/:productInteropID/:variantInteropID', {templateUrl: concatProductView, controller: 'ProductCtrl'}).
			when('/product/:view/:productInteropID/:variantInteropID/edit', {templateUrl: concatSpecFormView, controller: 'SpecFormCtrl'}).
			when('/order', { templateUrl: 'partials/orderSearchView.html', controller: 'OrderSearchCtrl' }).
			when('/order/:id', { templateUrl: 'partials/reporting/orderHistoryView.html', controller: 'OrderViewCtrl' }).
			when('/favoriteorders', { templateUrl: 'partials/favoriteOrderListView.html', controller: 'FavoriteOrderCtrl' }).
			when('/order/:orderid/:lineitemindex/', { templateUrl: 'partials/reporting/lineItemHistoryView.html', controller: 'LineItemViewCtrl' }).
			when('/message', { templateUrl: 'partials/messageListView.html', controller: 'MessageListCtrl' }).
			when('/message/:id', { templateUrl: 'partials/messageView.html', controller: 'MessageViewCtrl' }).
            when('/admin', { templateUrl: 'partials/userView.html', controller: 'UserEditCtrl' }).
            when('/addresses', { templateUrl: 'partials/addressListView.html', controller: 'AddressListCtrl' }).
            when('/address', { templateUrl: 'partials/addressView.html', controller: 'AddressViewCtrl' }).
            when('/address/:id', { templateUrl: 'partials/addressView.html', controller: 'AddressViewCtrl' }).
            when('/cart', { templateUrl: 'partials/cartView.html', controller: 'CartViewCtrl'}).
            when('/checkout', { templateUrl: 'partials/checkOutView.html', controller: 'CheckOutViewCtrl' }).
			when('/cart/:view/:lineItemIndex', { templateUrl: concatProductView, controller: 'LineItemEditCtrl'}).
			when('/login', { templateUrl: 'partials/controls/login.html', controller: 'LoginCtrl' }).
			when('/search', { templateUrl: 'partials/searchView.html', controller: 'ProductSearchCtrl' }).
            when('/search/:searchTerm', { templateUrl: 'partials/searchView.html', controller: 'ProductSearchCtrl' }).
            when('/security', { templateUrl: 'partials/security.html', controller: 'SecurityCtrl' }).
            when('/conditions', { templateUrl: 'partials/conditions.html', controller: 'ConditionsCtrl' }).
			otherwise({redirectTo: '/catalog'});
	});