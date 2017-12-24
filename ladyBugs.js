
var findElements = function(character, arrayA){
    var count = 0;
    for(var i = 0; i < arrayA.length; i++){
        
        if(character === arrayA[i]){
            count++;
        }
    }
    
    var CountObject =   { name : character, count : count};

    return CountObject;
}


var main = function main(b){ 
        var yesNo = true;
        var n = b.length //parseInt(readLine());
        //var b = readLine();
        var countEmpty = 0;
        var CharAnalyis = [];
        for(var source=0; source<n; source++){
           
            CharAnalyis[source] = findElements(b[source], b.split(''));
            //console.log(CharAnalyis[source].name);
        }
     
       var CharUnique = [];
       
       for(var i=0; i<n; i++){
           if(CharUnique.includes(CharAnalyis[i])){
               
               continue;
               //CharUnique.push(CharAnalyis[i]);
           }else {
               CharUnique[i] =CharAnalyis[i];
           }
       }

}

    

    main("RBY_YBR"); 
 
    

    
    
    