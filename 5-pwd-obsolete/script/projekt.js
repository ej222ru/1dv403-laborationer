"use strict";

var Projekt = {
    instanceId: 0,
    zIndex: 1,
    xl: 0,
    yt: 0,
    newStartPositions: 0,
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
        document.getElementById("linkRssIcon").addEventListener("click", Projekt.createRSSFeed);
        
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
    
    
        var removeWindow = document.getElementById("content");
        removeWindow.onclick = function(e){
            var Window = null; 
            if (e.target.getAttribute("title") === "Window")
                Window = e.target;
            if (e.target.parentNode.getAttribute("title") === "Window")
                Window = e.target.parentNode;
            if (e.target.parentNode.parentNode.getAttribute("title") === "Window")
                Window = e.target.parentNode.parentNode;
                

            if (Window){            
                document.getElementById(Window.getAttribute("id")).style.zIndex = ++Projekt.zIndex;            
            }
            if (e.target.parentNode.getAttribute("title") === "Close"){            
                var node = e.target.parentNode.parentNode.parentNode;  
                node.parentNode.removeChild (node);
            };
        }; 
        
    },    
    
    createImageGallery: function(){
        var myImageGallery = new ImageGallery(++Projekt.instanceId);
        myImageGallery.start();
    },
    createRSSFeed: function(){
        var myRSS = new RSSWindow(++Projekt.instanceId);
        myRSS.start();
    },
    createMemoryGame: function(){
         var myMemory = new Memory(4,4,++Projekt.instanceId);
          myMemory.start();
    }    
};



window.addEventListener("load", Projekt.init);

