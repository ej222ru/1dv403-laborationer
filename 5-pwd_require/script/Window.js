"use strict";
define(["projekt", "start"], function(projekt, start){
var Window = function(_iconURL, _name, _instance) {
    var Projekt = require("projekt");
    this.instanceId = _instance;

    this.windowId = "Window"+_instance;   
    this.windowMainId = "WindowMain"+_instance;  

    this.calculateWindowPosition = function(_instance) {
        
        var posContent = this.getObjectPosition(document.getElementById("content"));
        var newWindow = document.getElementById(this.windowId);        
        newWindow.style.left = posContent.xl + (Projekt.newStartPositions * 300)+(++Projekt.xl)*20 + 'px';
        newWindow.style.top = posContent.yt + (++Projekt.yt*20) + 'px';          

        var posWindow = this.getObjectPosition(newWindow);
        if ((posWindow.xl < posContent.xl) ||
            (posWindow.xr > posContent.xr) || 
            (posWindow.yt < posContent.yt) ||
            (posWindow.yb > posContent.yb)){
            
            this.startNewPosition(document.getElementById(this.windowId));
        }        
    };
    
    this.startNewPosition = function(newWindow){
        Projekt.newStartPositions +=1;
        Projekt.yt = 0;
        Projekt.xl = 0;
        
        
        var posContent = this.getObjectPosition(document.getElementById("content"));
      
        newWindow.style.left = (posContent.xl + (Projekt.newStartPositions * 300) + 20) + 'px';
        newWindow.style.top = (posContent.yt + (++Projekt.yt*20)) + 'px';    

        var posWindow = this.getObjectPosition(newWindow);        
        if ((posWindow.xl < posContent.xl) ||
            (posWindow.xr > posContent.xr) || 
            (posWindow.yt < posContent.yt) ||
            (posWindow.yb > posContent.yb)){
                
                Projekt.newStartPositions = 0;                
                newWindow.style.left = (posContent.xl + (Projekt.newStartPositions * 300) + 60) + 'px';    
                newWindow.style.top = (posContent.yt + (++Projekt.yt*30)) + 'px';    
        }        
    }; 
    
    this.getObjectPosition = function (object) {

        return {
          xl : object.offsetLeft,
          xr : object.offsetLeft + object.offsetWidth,
          yt : object.offsetTop,
          yb : object.offsetTop + object.offsetHeight
        };
    };    
    // Creata nodes in the DOM. By encapsulating they dont run at load  
    this.initiateWindow = function(){  

        var windowInst = document.createElement("div"); 
        windowInst.setAttribute("id", this.windowId);
        windowInst.classList.add("Window");    
        windowInst.setAttribute("title", "Window");
        windowInst.style.zIndex = Projekt.zIndex;    
        document.getElementById("content").appendChild(windowInst);
    
        var topLabel = document.createElement("div"); 
        topLabel.classList.add("topLabel");    
        windowInst.appendChild(topLabel);
    
        var icon = document.createElement("img");    
        icon.classList.add("labelIcon");
        icon.setAttribute("src", _iconURL);    
        topLabel.appendChild(icon);     
        
        var name = document.createElement("div");
        name.classList.add("appName");    
        name.innerHTML = _name;
        topLabel.appendChild(name);     
    
        var remLink = document.createElement("a");
        var remPic = document.createElement("img");    
        remPic.classList.add("imgClose");
        remPic.setAttribute("src", "css/pics/remove_16.png");    
        remLink.setAttribute("title", "Close");
        remLink.setAttribute("href", "#");
        remLink.appendChild(remPic);    
        topLabel.appendChild(remLink);     
        
        var windowMain = document.createElement("div"); 
        windowMain.classList.add("windowMain");    
        windowMain.setAttribute("title", "Main");
        windowMain.setAttribute("id", this.windowMainId);
        windowInst.appendChild(windowMain);
    
        
        var bottomLabel = document.createElement("div"); 
        bottomLabel.classList.add("bottomLabel");    
        bottomLabel.setAttribute("title", "Status");
    
        var loadIcon = document.createElement("img");    
        loadIcon.classList.add("loadIcon");
        loadIcon.setAttribute("id","loadIcon"+_instance);    
        loadIcon.setAttribute("src", "css/pics/ajax-loader.gif");
        bottomLabel.appendChild(loadIcon);     
        var bottomLabelText = document.createElement("div"); 
        bottomLabelText.setAttribute("id","bottomLabelText"+_instance);   
        bottomLabelText.setAttribute("title", "StatusText"); 
        bottomLabelText.style.color = "White";
        bottomLabelText.innerHTML = "Laddar, vänta...";
        bottomLabel.appendChild(bottomLabelText);  
        windowInst.appendChild(bottomLabel);
        
        this.calculateWindowPosition(this.instanceId); 
      
        this.focusOrRemoveWindow = function(e){
            // focus Window
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
            // remove Window 
            if (e.target.parentNode.getAttribute("title") === "Close"){            
                var node = e.target.parentNode.parentNode.parentNode;  
                node.parentNode.removeChild (node);
            };
        }; 
        windowInst.addEventListener("click", this.focusOrRemoveWindow);          
    };
};
return Window;
});
