"use strict";
define(["projekt", "start"], function(projekt, start){
    var Window = function(_iconURL, _name, _instance) {
        var Projekt         = require("projekt");
        this.instanceId     = _instance;
        this.windowId       = "Window"+_instance;   
        this.windowMainId   = "WindowMain"+_instance;  
    
        this.calculateWindowPosition    = function(_instance) {
            
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
        
        this.startNewPosition           = function(newWindow){
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
        
        this.getObjectPosition          = function (object) {
    
            return {
              xl : object.offsetLeft,
              xr : object.offsetLeft + object.offsetWidth,
              yt : object.offsetTop,
              yb : object.offsetTop + object.offsetHeight
            };
        };   
        
        // Creata nodes in the DOM. By encapsulating they dont run at load  
        this.initiateWindow             = function(){  
    
            var windowInst = document.createElement("div"), 
                topLabel = document.createElement("div"),       
                icon = document.createElement("img"),          
                name = document.createElement("div"),        
                remLink = document.createElement("a"),
                remPic = document.createElement("img"),    
                windowMain = document.createElement("div"), 
                bottomLabel = document.createElement("div"),         
                loadIcon = document.createElement("img"),         
                bottomLabelText = document.createElement("div"); 
            
            windowInst.setAttribute("id", this.windowId);
            windowInst.classList.add("Window");    
            windowInst.setAttribute("title", "Window");
            windowInst.style.zIndex = Projekt.zIndex;    
            document.getElementById("content").appendChild(windowInst);
    
            topLabel.classList.add("topLabel");    
        
            icon.classList.add("labelIcon");
            icon.setAttribute("src", _iconURL);    
    
            name.classList.add("appName");    
            name.innerHTML = _name;
    
            remPic.classList.add("imgClose");
            remPic.setAttribute("src", "css/pics/remove_16.png");    
            remLink.setAttribute("title", "Close");
            remLink.setAttribute("href", "#");
    
            windowMain.classList.add("windowMain");    
            windowMain.setAttribute("title", "Main");
            windowMain.setAttribute("id", this.windowMainId);
    
            bottomLabel.classList.add("bottomLabel");    
            bottomLabel.setAttribute("title", "Status");
    
            loadIcon.classList.add("loadIcon");
            loadIcon.setAttribute("id","loadIcon"+_instance);    
            loadIcon.setAttribute("src", "css/pics/ajax-loader.gif");
    
            bottomLabelText.setAttribute("id","bottomLabelText"+_instance);   
            bottomLabelText.setAttribute("title", "StatusText"); 
            bottomLabelText.style.color = "White";
            bottomLabelText.innerHTML = "Laddar, vänta...";
            bottomLabel.appendChild(bottomLabelText);  
    
            windowInst.appendChild(topLabel);
            topLabel.appendChild(icon);     
            topLabel.appendChild(name);     
            topLabel.appendChild(remLink);     
            remLink.appendChild(remPic);    
            windowInst.appendChild(windowMain);
            bottomLabel.appendChild(loadIcon);     
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
