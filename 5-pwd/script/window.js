"use strict";

function Window(_instance) {
    
    var windowInst = document.createElement("div"); 
    windowInst.setAttribute("id", _instance)
    windowInst.classList.add("Window");    
    document.getElementById("container").appendChild(windowInst);
    
    
}

Window.prototype.getId = function(){
    var Id;
    return ++Id;
};

var Projekt = {
    instanceId: 0,
    init: function(){
        
        var appArea = document.getElementById("appArea");
        
        var memoryIcon = document.createElement("div");
        memoryIcon.setAttribute("id", "memoryIcon");
        memoryIcon.classList.add("appIcon");
        appArea.appendChild(memoryIcon); 
  
        var linkMemoryIcon = document.createElement("a");
        linkMemoryIcon.setAttribute("href", "#");
        linkMemoryIcon.setAttribute("id", "linkMemoryIcon");
        memoryIcon.appendChild(linkMemoryIcon);  
        

        var memoryIconImage = document.createElement("img");
        memoryIconImage.setAttribute("src", "css/pics/iconMemory48.png");
        linkMemoryIcon.appendChild(memoryIconImage);
        
        document.getElementById("linkMemoryIcon").addEventListener("click", Projekt.createMemoryGame);
    },    
    
    createMemoryGame: function(){
         var mem = new Memory(4,4,++Projekt.instanceId);
    
//            var mem = new Memory(4,4,1);
          mem.start();
    }
};



window.addEventListener("load", Projekt.init);

