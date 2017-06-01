"use strict";

app.controller("MushroomCtrl", function($scope,$location, MushroomFactory){

    MushroomFactory.getMushrooms()
    .then(function(itemCollection){
        $scope.mushrooms = itemCollection;
        console.log("mushroom", $scope.mushrooms);
    });

    $scope.RadioChange = function (value) {
            if(value === "poisonous"){
                $location.path("/poisonous");
            }else if(value === "non-poisonous"){
                $location.path("/non-poisonous");
            }
        };
});
