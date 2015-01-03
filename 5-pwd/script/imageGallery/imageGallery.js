"use strict";

function ImageGallery(_instance) {

    Window.call(this, "ImageGallery", _instance);
    this.responseObject = 0;    
    this.windowId = "Window"+_instance;    
    this.nextURL = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt");        
    this.thumbURL = 0;
    this.thumbHeight = 0;
    this.thumbHeight = 0;
    this.thumbHeight = 0;
    
    
    this.start = function(){
        var windowInstance = document.getElementById(this.windowId);

        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            if ((xhr.readyState === 4) && (xhr.status === 200)) {
                this.responseObject = JSON.parse(xhr.responseText);
                console.log(this.responseObject);
/*                
                var newMessage = document.createElement("div");
                newMessage.classList.add("rssText");
                windowInstance.innerHTML += xhr.responseText;     
*/                
            }
        };
        
        xhr.open("GET", this.nextURL, true);
        xhr.send(null);
    };            
        
        
/*        
        var BoardCollection = document.getElementById(this.game);
        var GameInstance = document.createElement("div");
        GameInstance.setAttribute("id", this.game);  // ordning 
        BoardCollection.appendChild(GameInstance);
        
        this.pictures = RandomGenerator.getPictureArray(this.rows, this.columns);
        console.log(this.pictures);

        var node = document.getElementById(this.game);
        node.onclick = function(e){
            var index;
            if (e.target.parentNode.getAttribute("title") === "Card"){
                index = e.target.parentNode.parentNode.getAttribute("data-cardID");

                if ((that.flipped < 2) && (e.target.getAttribute("src") === "script/memory/pics/0.png"))
                {
                    that.turnCard(e, index);
                }
            }
        };   
        this.renderMemoryTable(this.rows, this.columns, this.game);
*/        
    };    
}
       
ImageGallery.prototype = new Window();

