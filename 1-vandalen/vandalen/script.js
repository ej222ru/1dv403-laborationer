"use strict";


var makePerson = function(persArr){

    var i=0;
    var retObj = {minAge:200, maxAge:0,averageAge:0,names:""};
    var nameArr = [];
  //  var nameArr2 = ["John Häggerud", "Johan Leitet", "Mats Loock"];
    for (i=0;i<persArr.length;i+=1){
        var ageDate = new Date(persArr[i].born.substr(0,4),persArr[i].born.substr(5,2),persArr[i].born.substr(8,2));
        var today = new Date();
        var age = today.getFullYear() - ageDate.getFullYear();
       
        if (retObj.minAge > age)
        {
            retObj.minAge = age;
        }
        if (retObj.maxAge < age)
        {
            retObj.maxAge = age;
        }
        retObj.averageAge += age;
        nameArr[i] = persArr[i].name;
    }
    retObj.averageAge = Math.round(retObj.averageAge / persArr.length);
   
    nameArr.sort(String.localeCompare); // Funkar för Å,Ä,Ö på FF men inte WebKit
    var arr = nameArr.map(function(name){return " " + name;});
    retObj.names = arr.toString();
    retObj.names = retObj.names.trim();

//    alert(retObj.names[0]); 
    return retObj;
}

