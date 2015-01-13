"use strict";
define(["Window"], function(Window){
    var RSSWindow = function (_instance) {
        var that = this;
        
        Window.call(this,"css/pics/feed.png",  "RSS", _instance);
        this.initiateWindow();              // Create common window nodes in the DOM

        this.nextURL    = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt");        
        this.xhr        = new XMLHttpRequest();
    
        this.getTime    = function (){   
            var date = new Date(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                seconds = date.getSeconds();
                
            if (hours < 10){
                hours = "0"+ hours;
            }
            if (minutes < 10){
                minutes = "0"+ minutes;
            }
            if (seconds < 10){
                seconds = "0"+ seconds;
            }
            return hours + ":" + minutes + ":" + seconds;
         
        }
    
        // After timeout two unmatching cards, show backside again
        this.updateRSS  = function (){
            that.xhr.open("GET", that.nextURL, true);
            that.xhr.send(null);
        }; 
            
        this.start      = function(){
    
            this.xhr.onreadystatechange = function(){
                if ((that.xhr.readyState === 4) && (that.xhr.status === 200)) {
                    var windowMainInstance = document.getElementById(that.windowMainId);
                    windowMainInstance.innerHTML = that.xhr.responseText;  
                    var loadIcon = document.getElementById("loadIcon"+that.instanceId);
                    loadIcon.style.visibility = 'hidden';
                    document.getElementById("bottomLabelText"+that.instanceId).innerHTML = "  Senast uppdaterad " + that.getTime();                
                    setTimeout(that.updateRSS, 10000);                   
                }
            };
            
            this.updateRSS();
            // start 10 sec timer to update
            setTimeout(this.updateRSS, 10000);
            
        };    
    }
               
    return RSSWindow;
    RSSWindow.prototype = new Window.Window();

});
