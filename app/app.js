"use strict";

var app = angular.module("Mushrooms", ['ngRoute', 'angular-toArrayFilter']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "../partials/main.html",
        controller: "MushroomCtrl"
    })
    .otherwise('/');
});



