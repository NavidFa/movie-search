app.controller('search', function($scope, $http, $location, $routeParams) {
    $scope.search = function() {
        $location.path('/results/' + $scope.title)
    }
})

app.controller('results', function($scope, $http, $location, $routeParams) {
    $scope.response = false;
    $scope.title = '';
    $http.get("http://www.omdbapi.com/?s=" + $routeParams.title)
        .then(function(results) {
            console.log(results.data.Search);
            $scope.response = results.data.Error
            $scope.movies = results.data.Search;
            $scope.movieByid = function(id) {
                $location.path('/details/' + id)
            }
        })

});
app.controller("details", function($scope, $http, $location, $routeParams,usSpinnerService) {
    $http.get("http://www.omdbapi.com/?i=" + $routeParams.id)
        .then(function(movie) {
          console.log(movie);
            $scope.title = movie.data.Title
            $scope.Poster = movie.data.Poster
            $scope.actors = movie.data.Actors
            $scope.director= movie.data.Director
            $scope.rated = movie.data.Rated
            $scope.runtime = movie.data.Runtime
            $scope.year = movie.data.Year
            usSpinnerService.spin('spinner-1');
        })
});
