"use strict";

function RSSWindow(_instance) {

    Window.call(this, "RSS", _instance);
    var that = this;
    this.windowId = "Window"+_instance;    
    this.responseObject = 0;    // contain newxt question
    this.answerObject = 0;      // Answer on a question
    this.currentErr = 0;
    this.currentQ = 0;
    this.nextURL = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt");        

    
    this.start = function(){
        var that = this;
        console.log(that);
        var windowInstance = document.getElementById(this.windowId);
//        var rssInstance = document.createElement("div");
//        rssInstance.setAttribute("id", this.windowId);
//        windowInstance.appendChild(this.rssInstance);        

        
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            if ((xhr.readyState === 4) && (xhr.status === 200)) {
               console.log(xhr.responseText); 
//                that.responseObject = JSON.parse(xhr.responseText);
                var newMessage = document.createElement("div");
                newMessage.setAttribute()
                newMessage.classList.add("rssText");
                newMessage.value = xhr.responseText;
                console.log(windowInstance);
                console.log(newMessage.value);
                
                windowInstance.appendChild(newMessage);

//                that.rssInstance.appendChild(newMessage);     
           
            }
        };
        
        xhr.open("GET", that.nextURL, true);
        xhr.send(null);

 

/*        
        var aArea = document.getElementById("questionOutput");  
        aArea.value = "Klicka på 'Hämta fråga!";
        var qArea = document.getElementById("answerInput");  
        qArea.value = "Skriv ditt svar här";        
        var rArea = document.getElementById("resultOutput");  
        rArea.innerHTML = "";   
        var tArea = document.getElementById("totalResult");  
        tArea.innerHTML = "";   
*/        


    };    
}
           
RSSWindow.prototype = new Window();

