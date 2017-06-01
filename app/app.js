"use strict";

var app = angular.module("Mushrooms", ['ngRoute', 'angular-toArrayFilter']);

app.config(function($routeProvider){
    $routeProvider
    .when('/poisonous', {
        templateUrl: "partials/poisounous.html"
    })
    .when("/non-poisonous" ,{
        templateUrl: "partials/non-poisounous.html"
    })
    .otherwise('/');
});



