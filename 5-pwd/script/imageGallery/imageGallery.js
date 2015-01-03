"use strict";

function ImageGallery(_instance) {
    var that = this;
    
    Window.call(this, "ImageGallery", _instance);
    this.instanceId = _instance;
    this.responseObjects;    
    this.windowId = "Window"+_instance;    
    this.nextURL = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";        
    this.thumbURL = 0;
    this.thumbHeight = 0;
    this.thumbWidth = 0;
    this.pictureHeight = 0;
    this.pictureWidth = 0;
 
    
    this.start = function(){
        var windowInstance = document.getElementById(this.windowId);

        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            if ((xhr.readyState === 4) && (xhr.status === 200)) {
                console.log(xhr.responseText);   
                that.responseObjects = JSON.parse(xhr.responseText);
                that.addThumbs(that.responseObjects, that.instanceId);  

            }
        };
        
        xhr.open("GET", this.nextURL, true);
        xhr.send(null);
        
        


    };            
    this.addThumbs = function(_thumbObjArray, _instance){
        var windowInstance = document.getElementById(that.windowId);
        
        console.log(_thumbObjArray[0].thumbURL);
        var newThumb = document.createElement("div");
        newThumb.classList.add("imgGallery");
        windowInstance.appendChild(newThumb);
        
        var newThumbLink = document.createElement("a");
        newThumbLink.classList.add("thumbPicLink");
        newThumbLink.setAttribute("href", "#");

        newThumb.appendChild(newThumbLink);

        var newThumbImg = document.createElement("img");
        newThumbImg.classList.add("thumbPicImg");
        newThumbImg.setAttribute("src", _thumbObjArray[0].thumbURL);
        
        newThumbLink.appendChild(newThumbImg);

      
    };        
}
       
ImageGallery.prototype = new Window();

