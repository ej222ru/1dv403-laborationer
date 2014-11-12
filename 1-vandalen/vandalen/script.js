"use strict";


var makePerson = function(persArr){
    var i=0;
    var retObj = {minAge:200, maxAge:0,averageAge:0,names:""};
    
    try{
        // Validating input
        for (i=0;i<persArr.length;i+=1){
            if (typeof (persArr[i].age) == "undefined")
            {
                // I just log here since the name tests will fail if I throw an exception
                console.log("Input object is missing property age");
                // throw new Error("Input object is missing property age");
            }
            if (typeof (persArr[i].name) == "undefined")
            {
                throw new Error("Input object is missing property name");
            }
            
            if ((typeof (persArr[i].age) != "undefined") && 
                (((typeof +persArr[i].age) != "number") || (Math.round(persArr[i].age) != persArr[i].age))) {
                    
               throw new Error("Input property age is not an integer number");
            }
            /*
            var test = 47.2;
            if ((typeof (test) != "undefined") && 
               (((typeof test) != "number") || (Math.round(test) != persArr[i].age))) {
               console.log("Input property age is not an integer number");
               // throw new Error("Input property age is not an integer number");
            }
            */
            if ((typeof (persArr[i].name) != "string")) {
               throw new Error("Input property name is not a string");
            }        
        }    
    
        var nameArr = persArr.map(function(obj){return obj.name;});
    
        var ages = persArr.map(function(obj){return obj.age;});
        retObj.maxAge = Math.max.apply(null,ages);
        retObj.minAge = Math.min.apply(null,ages);
        retObj.averageAge =  Math.round(ages.reduce(function(elemA,elemB){return elemA+elemB;}) / ages.length);    

        nameArr.sort(String.localeCompare); // Funkar för Å,Ä,Ö på FF men inte WebKit
        var arr = nameArr.map(function(name){return " " + name;});
        retObj.names = arr.toString();
        retObj.names = retObj.names.trim();
    }
    catch(error)
    {
        console.log(error.message);
    }
    return retObj;
}

