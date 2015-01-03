"use strict";

function Window(_name, _instance) {
    var that = this;
    var windowInst = document.createElement("div"); 
    windowInst.setAttribute("id", "Window"+_instance);
    windowInst.classList.add("Window");    
    windowInst.setAttribute("title", "Window");
    document.getElementById("content").appendChild(windowInst);

    var topLabel = document.createElement("div"); 
    topLabel.classList.add("topLabel");    
    document.getElementById("Window"+_instance).appendChild(topLabel);

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
    
    
    var bottomLabel = document.createElement("div"); 
    bottomLabel.classList.add("bottomLabel");    
    bottomLabel.setAttribute("title", "Status");
    document.getElementById("Window"+_instance).appendChild(bottomLabel);

    calculateWindowPosition(_instance);


    function calculateWindowPosition(_instance) {
        
        var posContent = getObjectPosition(document.getElementById("content"));
        var newWindow = document.getElementById("Window"+_instance);        
        newWindow.style.left = posContent.xl + (Projekt.newStartPositions * 200)+(++Projekt.xl)*20 + 'px';
        console.log(Projekt.yt);
        console.log(Projekt.xt);
        console.log(newWindow.style.left);        
        newWindow.style.top = posContent.yt + (++Projekt.yt*20) + 'px';          

        var posWindow = getObjectPosition(newWindow);
        if ((posWindow.xl < posContent.xl) ||
            (posWindow.xr > posContent.xr) || 
            (posWindow.yt < posContent.yt) ||
            (posWindow.yb > posContent.yb)){
            
                startNewPosition(document.getElementById("Window"+_instance));
        }        
        
    }
    
    function startNewPosition(newWindow) {
        Projekt.newStartPositions +=1;
        Projekt.yt = 0;
        Projekt.xl = 0;
        
        
        var posContent = getObjectPosition(document.getElementById("content"));
      
        newWindow.style.left = (posContent.xl + (Projekt.newStartPositions * 200) + 20) + 'px';
        newWindow.style.top = (posContent.yt + (++Projekt.yt*20)) + 'px';    

        var posWindow = getObjectPosition(newWindow);        
        if ((posWindow.xl < posContent.xl) ||
            (posWindow.xr > posContent.xr) || 
            (posWindow.yt < posContent.yt) ||
            (posWindow.yb > posContent.yb)){
                
                Projekt.newStartPositions = 0;                
                newWindow.style.left = (posContent.xl + (Projekt.newStartPositions * 200) + 60) + 'px';    
                newWindow.style.top = (posContent.yt + (++Projekt.yt*30)) + 'px';    
        }        
    }  
    
    function getObjectPosition(object) {

        return {
          xl : object.offsetLeft,
          xr : object.offsetLeft + object.offsetWidth,
          yt : object.offsetTop,
          yb : object.offsetTop + object.offsetHeight
        };
    }    
}

