var searchApp = angular.module('searchApp',[]);



searchApp.controller("SearchCtrl", function ($scope, $http) {
    $scope.loading = false;
    $scope.getData = function (searchField) {
      $scope.loading = true;
      $http.jsonp("http://www.flickr.com/services/feeds/photos_public.gne?tags="+searchField+"&format=json&jsoncallback=JSON_CALLBACK").
        success(function (data) {
          $scope.images = data.items;
          $scope.loading = false;
        }).
        error(function (data) {
          $scope.images = "Request failed";
          $scope.loading = false;
        });
    }
});