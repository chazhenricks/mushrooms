"use strict";

var app = angular.module("Mushrooms", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "partials/mushroom-list.html",
        controller: "MushroomCtrl"
    })
    .otherwise('/');
});
