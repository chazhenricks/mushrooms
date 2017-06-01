"use strict";
                             // $q - angular promise
app.factory("MushroomFactory", function($q, $http){

    var getMushrooms = ()=> {
        let items = [];
        return $q((resolve, reject)=>{
            $http.get('https://mushrooms-4059f.firebaseio.com/.json')
            .then((mushroomObject)=>{
                let mushroomCollection = mushroomObject.data;
                console.log("mushroomCollection", mushroomCollection);
                resolve(mushroomCollection.mushrooms);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };
    return {getMushrooms};
});
