"use strict";

function Window(_instance) {
    
    var windowInst = document.createElement("div"); 
    windowInst.setAttribute("id", _instance)
    windowInst.classList.add("Window");    
    document.getElementById("container").appendChild(windowInst);

    var topLabel = document.createElement("div"); 
    topLabel.classList.add("topLabel");    
    document.getElementById(_instance).appendChild(topLabel);
    
    var bottomLabel = document.createElement("div"); 
    bottomLabel.classList.add("bottomLabel");    
    document.getElementById(_instance).appendChild(bottomLabel);
    
}

Window.prototype.getId = function(){
    var Id;
    return ++Id;
};

var Projekt = {
    instanceId: 0,
    rssIcon: function(){
        var appArea = document.getElementById("appArea");
        
        var rssIcon = document.createElement("div");
        rssIcon.setAttribute("id", "rssIcon");
        rssIcon.classList.add("appIcon");
        appArea.appendChild(rssIcon); 
  
        var linkRssIcon = document.createElement("a");
        linkRssIcon.setAttribute("href", "#");
        linkRssIcon.setAttribute("id", "linkRssIcon");
        rssIcon.appendChild(linkRssIcon);  
        
        var rssIconImage = document.createElement("img");
        rssIconImage.setAttribute("src", "css/pics/feed.png");
        linkRssIcon.appendChild(rssIconImage);
        document.getElementById("linkRssIcon").addEventListener("click", Projekt.createRssFeed);
        
    },   
    imageGallerIcon: function(){
        var appArea = document.getElementById("appArea");
        
        var imageGalleriIcon = document.createElement("div");
        imageGalleriIcon.setAttribute("id", "imageGalleriIcon");
        imageGalleriIcon.classList.add("appIcon");
        appArea.appendChild(imageGalleriIcon); 
  
        var linkImageGalleriIcon = document.createElement("a");
        linkImageGalleriIcon.setAttribute("href", "#");
        linkImageGalleriIcon.setAttribute("id", "linkImageGalleriIcon");
        imageGalleriIcon.appendChild(linkImageGalleriIcon);  
        
        var imageGalleriIconImage = document.createElement("img");
        imageGalleriIconImage.setAttribute("src", "css/pics/pictures.png");
        linkImageGalleriIcon.appendChild(imageGalleriIconImage);
        document.getElementById("linkImageGalleriIcon").addEventListener("click", Projekt.createImageGallery);
        
    },    
    memoryIcon: function(){
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
        memoryIconImage.setAttribute("src", "css/pics/memoryIcon.png");
        linkMemoryIcon.appendChild(memoryIconImage);
        document.getElementById("linkMemoryIcon").addEventListener("click", Projekt.createMemoryGame);
        
    },
    init: function(){
        Projekt.imageGallerIcon();        
        Projekt.rssIcon();        
        Projekt.memoryIcon();        

        
    },    
    
    createImageGallery: function(){
//         var mem = new Memory(4,4,++Projekt.instanceId);
//          mem.start();
    },
    createRssFeed: function(){
//         var mem = new Memory(4,4,++Projekt.instanceId);
//          mem.start();
    },
    createMemoryGame: function(){
         var mem = new Memory(4,4,++Projekt.instanceId);
          mem.start();
    }    
};



window.addEventListener("load", Projekt.init);

