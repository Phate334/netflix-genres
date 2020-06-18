var searchApp = angular.module('netflixCodesSearch', []);

searchApp.controller('genreList', function SearchListController($scope, $http) {
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    $http.get("netflix-codes-tw.json").then(function (response) {
        $scope.genreData = response.data;
        $scope.genreData.rows = shuffle($scope.genreData.rows)
    });

});
