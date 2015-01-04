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
        var index = 0;
        console.log(_thumbObjArray[0].thumbURL);
        
/*        
        _thumbObjArray[index].thumbURL
        _thumbObjArray[index].thumbWidth
        _thumbObjArray[index].thumbHeight
        _thumbObjArray[index].URL
        _thumbObjArray[index].Width
        _thumbObjArray[index].Height
*/

        
            var newThumb = document.createElement("div");
            newThumb.classList.add("imgGallery");
            newThumb.setAttribute("title", "thumbPicImg");        
            newThumb.setAttribute("ThumbId", index);        
            windowInstance.appendChild(newThumb);
            
            var newThumbLink = document.createElement("a");
            newThumbLink.classList.add("thumbPicLink");
            newThumbLink.setAttribute("href", "#");
    
            newThumb.appendChild(newThumbLink);
    
            var newThumbImg = document.createElement("img");
            newThumbImg.classList.add("thumbPicImg");
            newThumbImg.setAttribute("title","thumbPicImg");
            newThumbImg.setAttribute("src", _thumbObjArray[index].thumbURL);
            
            newThumbLink.appendChild(newThumbImg);
    
            newThumbImg.onclick = function(e){
     //        newThumbLink.onclick = function(e){
                var index;
                if (e.target.getAttribute("title") === "thumbPicImg"){
                    index = e.target.parentNode.parentNode.getAttribute("ThumbId");


                    var windowInstance = new ImageGallery(++Projekt.instanceId);  
                    var imageWindow = document.getElementById("Window"+Projekt.instanceId);                    
//                    var imageWindow = document.createElement("div"); 
                    imageWindow.setAttribute("id", "PicWindow"+index);
//                    imageWindow.classList.add("FullSizePicture");    
//                    imageWindow.setAttribute("title", "PicWindow");
                    imageWindow.style.height = (_thumbObjArray[index].height+80)+"px";
                    imageWindow.style.width = (_thumbObjArray[index].width+8)+"px";
//                    imageWindow.style.zIndex = ++Projekt.zIndex;     
/*                    
                    var topLabel = document.createElement("div"); 
                    topLabel.classList.add("topLabel");    
 
                    var remLink = document.createElement("a");
                    var remPic = document.createElement("img");    
                    remPic.classList.add("imgClose");
                    remPic.setAttribute("src", "css/pics/remove_16.png");    
                    remLink.setAttribute("title", "Close");
                    remLink.setAttribute("href", "#");
                    remLink.appendChild(remPic);    
                    topLabel.appendChild(remLink);                     
                    imageWindow.appendChild(topLabel);                  
*/                    
                    
                    var imageLink = document.createElement("a");
                    imageLink.classList.add("imageLink");
                    imageLink.setAttribute("href", "#");
                    imageWindow.appendChild(imageLink);
            
                    var image = document.createElement("img");
                    image.classList.add("image");
                    image.setAttribute("title","image");
                    image.setAttribute("src", _thumbObjArray[index].URL);
                    imageLink.appendChild(image);                    
                    
                    
                    document.getElementById("content").appendChild(imageWindow);
    
                }
            };  
        };    
       
};
       
ImageGallery.prototype = new Window();

