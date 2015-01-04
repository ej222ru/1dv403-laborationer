"use strict";

function ImageGallery(_instance) {
    var that = this;
    
    Window.call(this,"css/pics/pictures.png", "ImageGallery", _instance);
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
        var windowInstanceMain = document.getElementById("WindowMain"+that.instanceId);
        var maxThumbWidth = 0;
        var maxThumbHeight = 0;
        var index = 0;        
        for (index; index < _thumbObjArray.length; index+=1) {
            if (_thumbObjArray[index].thumbWidth > maxThumbWidth)
                maxThumbWidth = _thumbObjArray[index].thumbWidth;
            if (_thumbObjArray[index].thumbHeight > maxThumbHeight)
                maxThumbHeight = _thumbObjArray[index].thumbHeight;
        }
/*        
        _thumbObjArray[index].thumbURL
        _thumbObjArray[index].thumbWidth
        _thumbObjArray[index].thumbHeight
        _thumbObjArray[index].URL
        _thumbObjArray[index].Width
        _thumbObjArray[index].Height
*/
        var thumbGallery = document.createElement("div");
        thumbGallery.classList.add("imgGallery");
    
        windowInstanceMain.appendChild(thumbGallery);


        for (index=0; index < _thumbObjArray.length; index+=1) {
            
            var thumbCell = document.createElement("div");
            thumbCell.classList.add("thumbCell");
            thumbCell.style.height = (maxThumbHeight+2)+"px";
            thumbCell.style.width = (maxThumbWidth+2)+"px";
            
            thumbGallery.appendChild(thumbCell);
            
            var thumbWrapper = document.createElement("div");            
            thumbWrapper.classList.add("thumbWrapper");
            thumbWrapper.style.width = _thumbObjArray[index].thumbWidth+"px";              
            thumbCell.appendChild(thumbWrapper);
            
            var thumbLink = document.createElement("a");
            thumbLink.classList.add("thumbPicLink");
            thumbLink.setAttribute("href", "#");
    
//            windowInstance.appendChild(newThumbLink);
            thumbWrapper.appendChild(thumbLink);
    
            var thumbImg = document.createElement("img");
            thumbImg.classList.add("thumbPicImg");
            thumbImg.setAttribute("title","thumbPicImg");
            thumbImg.setAttribute("ThumbId", index);                
            thumbImg.setAttribute("src", _thumbObjArray[index].thumbURL);
          
 
            
            thumbLink.appendChild(thumbImg);
        
            thumbImg.onclick = function(e){
                var index;
                if (e.target.getAttribute("title") === "thumbPicImg"){
                    index = e.target.getAttribute("ThumbId");


                    var windowInstance = new ImageGallery(++Projekt.instanceId);  
                    var imageWindow = document.getElementById("Window"+Projekt.instanceId);                    
                    var imageWindowMain = document.getElementById("WindowMain"+Projekt.instanceId);                    
                    imageWindow.style.height = (_thumbObjArray[index].height+52)+"px";
                    imageWindow.style.width = (_thumbObjArray[index].width+8)+"px";
               
                    var imageLink = document.createElement("a");
                    imageLink.classList.add("imageLink");
                    imageLink.setAttribute("href", "#");
                    imageWindowMain.appendChild(imageLink);
            
                    var image = document.createElement("img");
                    image.classList.add("image");
                    image.setAttribute("title","image");
                    image.setAttribute("src", _thumbObjArray[index].URL);
                    imageLink.appendChild(image);                    
                }
            };  
        };    
    };   
};
       
ImageGallery.prototype = new Window();

