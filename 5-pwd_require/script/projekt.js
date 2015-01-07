"use strict";

define(["Window", "memory", "random", "rss", "imageGallery"], function(Window, memory, random, rss, imageGallery){
    
var Projekt = {
    zIndex : 1,         // to ensure last window is set in focus and clicked window are set in focus
    instanceId : 0,     
    xl : 0,              // upp left corner of last created window
    yt : 0,              // upp left corner of last created window
    newStartPositions : 0,
    
    init : function(){
        // create clickable icons in the bottom bar
        this.imageGallerIcon();        
        this.rssIcon();        
        this.memoryIcon();        
    },
    
    rssIcon : function(){
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
    imageGallerIcon : function(){
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
    memoryIcon : function(){
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
    createImageGallery : function(){
        var myImageGallery = new imageGallery(++Projekt.instanceId);
        myImageGallery.start();
    },
    createRSSFeed : function(){
        var myRSS = new rss(++Projekt.instanceId);
        myRSS.start();
    },
    createMemoryGame : function(){
         var myMemory = new memory(4,4,++Projekt.instanceId);
          myMemory.start();
    }    
};



return Projekt;
});