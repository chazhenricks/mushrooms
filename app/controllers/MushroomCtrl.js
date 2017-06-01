"use strict";

app.controller("MushroomCtrl", function($scope,$location, MushroomFactory){

    MushroomFactory.getMushrooms()
    .then(function(itemCollection){
        $scope.mushrooms = itemCollection;
        console.log("mushroom", $scope.mushrooms);
    });

    $scope.RadioChange = function (s) {
            if(s === "poisonous"){
                $location.path("/poisonous");
            }else if(s === "non-poisonous"){
                $location.path("/non-poisonous");
            }
        };
});
