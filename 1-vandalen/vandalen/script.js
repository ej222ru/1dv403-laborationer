"use strict";


var makePerson = function(persArr){

    var i=0;
    var retObj = {minAge:200, maxAge:0,averageAge:0,names:""};
    var nameArr = [];

    for (i=0;i<persArr.length;i+=1){

        if (retObj.minAge > persArr[i].age)
        {
            retObj.minAge = persArr[i].age;
        }
        if (retObj.maxAge < persArr[i].age)
        {
            retObj.maxAge = persArr[i].age;
        }
        retObj.averageAge += persArr[i].age;
        nameArr[i] = persArr[i].name;
    }

    retObj.averageAge = Math.round(retObj.averageAge / persArr.length);
   
    nameArr.sort(String.localeCompare); // Funkar för Å,Ä,Ö på FF men inte WebKit
    var arr = nameArr.map(function(name){return " " + name;});
    retObj.names = arr.toString();
    retObj.names = retObj.names.trim();

    return retObj;
}

