"use strict";


var makePerson = function(persArr){

    var i=0;
    var retObj = {minAge:200, maxAge:0,averageAge:0,names:""};
    var nameArr = persArr.map(function(obj){return obj.name;});

    var ages = persArr.map(function(obj){return obj.age;});
    retObj.maxAge = Math.max.apply(null,ages);
    retObj.minAge = Math.min.apply(null,ages);
    retObj.averageAge =  Math.round(ages.reduce(function(elemA,elemB){return elemA+elemB;}) / ages.length);    
    console.log(retObj.maxAge);
    console.log(retObj.minAge);
    console.log(retObj.averageAge);

    nameArr.sort(String.localeCompare); // Funkar för Å,Ä,Ö på FF men inte WebKit
    var arr = nameArr.map(function(name){return " " + name;});
    retObj.names = arr.toString();
    retObj.names = retObj.names.trim();

    return retObj;
}

