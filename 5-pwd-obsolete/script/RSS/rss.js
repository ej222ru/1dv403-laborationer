"use strict";

function RSSWindow(_instance) {

    Window.call(this,"css/pics/feed.png",  "RSS", _instance);
    this.initiateWindow();
    var that = this;
    this.nextURL = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt");        

    
    this.start = function(){
        var windowMainInstance = document.getElementById(this.windowMainId);

        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            if ((xhr.readyState === 4) && (xhr.status === 200)) {
                var newMessage = document.createElement("div");
                newMessage.classList.add("rssText");
                windowMainInstance.innerHTML += xhr.responseText;  
                var loadIcon = document.getElementById("loadIcon"+that.instanceId);
                loadIcon.style.visibility = 'hidden';
            }
        };
        
        xhr.open("GET", this.nextURL, true);
        xhr.send(null);
    };    
}
           
RSSWindow.prototype = new Window();

