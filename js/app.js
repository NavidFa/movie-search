var app = angular.module("movieSearch", ['ngRoute','angularSpinner']);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'search'
        })
        .when('/results/:title', {
            templateUrl: 'partials/moviesList.html',
            controller: 'results'
        })
        .when('/details/:id', {
            templateUrl: 'partials/moviedetails.html',
            controller: 'details'
        })

});
