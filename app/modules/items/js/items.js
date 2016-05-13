angular.module('module_items', [])

.controller('controller_items', ['$http', '$scope', '$filter', function($http, $scope, $filter) {
    $http.get('api/items').success(function(result) {
        $scope.items = result;
    }).error(function(e) {

    });
    $scope.itemsSelected = function(arg) {
        $scope.items.forEach(function(item, count) {
            item.selected = arg.selected;
        });
    };
    $scope.itemSelected = function() {
        $scope.modifier = Boolean(($filter("filter")($scope.items, { selected: true })).length);
    };
    $scope.save = function(s) {
        $http.post('api/items').success(function(result) {
            $scope.items.push(result);
        }).error(function(e) {

        });
    };
}]);
