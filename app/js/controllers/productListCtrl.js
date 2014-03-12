four51.app.controller('ProductListCtrl', function ($routeParams,$rootScope, $scope, Product) {
    $scope.loadSearch = function(){

        if($scope.category && $scope.category.products){
            $scope.Products = $scope.category.products;
            return;
        }

        if($scope.category) {
            Product.search($scope.categoryInteropID, null, null, function(data) {
                $scope.category.products = $scope.Products = data;
            });
        }
    }
});