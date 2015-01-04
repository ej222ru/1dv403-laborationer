"use strict";

function Window(_iconURL, _name, _instance) {
    this.instanceId = _instance;
    this.windowId = "Window"+_instance;   
    this.windowMainId = "WindowMain"+_instance;  
    
    this.calculateWindowPosition = function(_instance) {
        
        var posContent = this.getObjectPosition(document.getElementById("content"));
        var newWindow = document.getElementById(that.windowId);        
        newWindow.style.left = posContent.xl + (Projekt.newStartPositions * 300)+(++Projekt.xl)*20 + 'px';
        console.log(Projekt.yt);
        console.log(Projekt.xt);
        console.log(newWindow.style.left);        
        newWindow.style.top = posContent.yt + (++Projekt.yt*20) + 'px';          

        var posWindow = this.getObjectPosition(newWindow);
        if ((posWindow.xl < posContent.xl) ||
            (posWindow.xr > posContent.xr) || 
            (posWindow.yt < posContent.yt) ||
            (posWindow.yb > posContent.yb)){
            
                this.startNewPosition(document.getElementById(that.windowId));
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
      
    var that = this;
    var windowInst = document.createElement("div"); 
    windowInst.setAttribute("id", this.windowId);
    windowInst.classList.add("Window");    
    windowInst.setAttribute("title", "Window");
    windowInst.style.zIndex = ++Projekt.zIndex;    
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
    
    
    windowInst.appendChild(bottomLabel);

    this.calculateWindowPosition(this.instanceId);    
    
}

