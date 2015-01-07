"use strict";
define(["Window"], function(Window){
var ImageGallery = function(_instance) {
    var that = this;
    var Projekt = require("projekt");    
    Window.call(this,"css/pics/pictures.png", "ImageGallery", _instance);
    this.initiateWindow();
    this.responseObjects;    
    this.nextURL = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";        

    this.start = function(){
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            if ((xhr.readyState === 4) && (xhr.status === 200)) {
                that.responseObjects = JSON.parse(xhr.responseText);
                that.addThumbs(that.responseObjects, that.instanceId);  
                var loadIcon = document.getElementById("loadIcon"+that.instanceId);
                loadIcon.style.visibility = 'hidden';
            }
        };
       
        xhr.open("GET", this.nextURL, true);
        xhr.send(null);
    };  
    
    this.addThumbs = function(_thumbObjArray, _instance){
        var windowInstanceMain = document.getElementById(that.windowMainId);
        var maxThumbWidth = 0;
        var maxThumbHeight = 0;
        var index = 0;        
        // Decide biggest thumb pictures width and height
        for (index; index < _thumbObjArray.length; index+=1) {
            if (_thumbObjArray[index].thumbWidth > maxThumbWidth)
                maxThumbWidth = _thumbObjArray[index].thumbWidth;
            if (_thumbObjArray[index].thumbHeight > maxThumbHeight)
                maxThumbHeight = _thumbObjArray[index].thumbHeight;
        }

/*  
        WindowMain                              <div>
            thumbGallery                        <div>
                thumbCell                       <div>
                    thumbWrapper                <div>
                        thumbLink               <a>
                            thumbImg            <img>
                thumbCell                       <div>
                    thumbWrapper                <div>
                        thumbLink               <a>
                            thumbImg            <img>
*/  // Node tree illustration

        // Create a thumbGallery div and place in WindowMain
        var thumbGallery = document.createElement("div");
        thumbGallery.classList.add("imgGallery");
        windowInstanceMain.appendChild(thumbGallery);

        // Create all thumb pictures in the gallery
        for (index=0; index < _thumbObjArray.length; index+=1) {
            
            var thumbCell = document.createElement("div");
            thumbCell.classList.add("thumbCell");
            thumbCell.style.height = (maxThumbHeight+2)+"px";
            thumbCell.style.width = (maxThumbWidth+2)+"px";
            
            var thumbWrapper = document.createElement("div");            
            thumbWrapper.classList.add("thumbWrapper");
            thumbWrapper.style.width = _thumbObjArray[index].thumbWidth+"px";              
            
            var thumbLink = document.createElement("a");
            thumbLink.classList.add("thumbPicLink");
            thumbLink.href = "#";
    
            var thumbImg = document.createElement("img");
            thumbImg.classList.add("thumbPicImg");
            thumbImg.setAttribute("title","thumbPicImg");
            thumbImg.setAttribute("ThumbId", index);                
            thumbImg.src =_thumbObjArray[index].thumbURL;
          
            thumbGallery.appendChild(thumbCell);
            thumbCell.appendChild(thumbWrapper);
            thumbWrapper.appendChild(thumbLink);
            thumbLink.appendChild(thumbImg);
        
            // Set click event on all thumb images, display a larger picture if clicked

      

              
//            thumbImg.addEventListener("click", this.showLargePic);
            document.onmousedown=that.showLargePic;             
            this.showLargePic = function(e){
                var index;
                if (e.target.getAttribute("title") === "thumbPicImg"){
                    index = e.target.getAttribute("ThumbId");                    
                    if (e.button === 2){  // right mouse
                        var content = document.getElementById("content");  
                        content.style.backgroundImage = 'url(' + _thumbObjArray[index].URL + ')'; 
                    }
                    else
                    {
                        // Set new actual style parameters for this Window instance
                        var windowInstance = new ImageGallery(++Projekt.instanceId);  
                        var imageWindow = document.getElementById("Window"+Projekt.instanceId);                    
                        var imageWindowMain = document.getElementById("WindowMain"+Projekt.instanceId);                    
                        imageWindow.style.height = (_thumbObjArray[index].height+52)+"px";
                        imageWindow.style.width = (_thumbObjArray[index].width+8)+"px";
                        imageWindowMain.style.height = (_thumbObjArray[index].height+6)+"px";
                        imageWindowMain.style.width = (_thumbObjArray[index].width+8)+"px";
                        var loadIcon = document.getElementById("loadIcon"+Projekt.instanceId);
                        loadIcon.style.visibility = 'hidden';
                    
                        var imageLink = document.createElement("a");
                        imageLink.classList.add("imageLink");
                        imageLink.href = "#";
                
                        var image = document.createElement("img");
                        image.classList.add("image");
                        image.setAttribute("title","image");
                        image.src = _thumbObjArray[index].URL;
          
                        imageWindowMain.appendChild(imageLink);
                        imageLink.appendChild(image);  
          
                        // recalculate position since these pictures can be larger than default Window
                        windowInstance.calculateWindowPosition(windowInstance.instanceId);
                    }
                }
            };  
        };    
    };   
};
       

return ImageGallery;
ImageGallery.prototype = new Window.Window();
});

