"use strict";

var MessageBoard = {
    

    messages : [],

    renderMessages: function(){
        document.getElementById("messageArea").innerHTML = "";
        for (var i=0; i<MessageBoard.messages.length;i++){
            MessageBoard.renderMessage(i);
        };
    },

    renderMessage: function(index){
        var messageArea = document.getElementById("messageArea"),
            text = document.createElement("div"),
            remLink = document.createElement("a"),
            remPic = document.createElement("img"),
            timeLink = document.createElement("a"),
            timePic = document.createElement("img"),
            time = document.createElement("div");
        
        text.setAttribute("data-messageID", index);        

        remPic.classList.add("imgClose");
        remPic.setAttribute("src", "css/pics/remove_16.png");

        timePic.classList.add("imgTime");
        timePic.setAttribute("src", "css/pics/time_16.png");
                
        remLink.setAttribute("title", "Close");
        remLink.setAttribute("href", "#");
        remLink.appendChild(remPic);    
        text.appendChild(remLink); 

        timeLink.setAttribute("title", "Time");
        timeLink.setAttribute("href", "#");
        timeLink.appendChild(timePic);    
        text.appendChild(timeLink); 
        
        text.innerHTML += MessageBoard.messages[index].getHTMLText();


        time.classList.add("msgTime");        
        var date = MessageBoard.messages[index].getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (hours < 10){
            hours = "0"+ hours;
        }
        if (minutes < 10){
            minutes = "0"+ minutes;
        }
        if (seconds < 10){
            seconds = "0"+ seconds;
        }
        time.innerHTML = hours + ":" + minutes + ":" + seconds;
        text.appendChild(time);

        messageArea.appendChild(text);      
    },
    
    removeMessage: function(index){
        var count;
        if (window.confirm("Vill du verkligen radera meddelandet?")) { 
            MessageBoard.messages.splice(index, 1);
            MessageBoard.renderMessages();
            count = document.getElementById("msgCount");
            count.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;        
        }
    },
    alertTime: function(index){
        var date = MessageBoard.messages[index].getDate();
        var monthNames = [ "Januari", "Februari", "Mars", "April", "Maj", "Juni",
            "Juli", "Augusti", "September", "Oktober", "November", "December" ];
    
        var text = "Inlägget skapades den " + date.getDate() + " " +  monthNames[date.getMonth()] + " " + date.getFullYear() + " klockan " + date.toLocaleTimeString(); 
        alert(text);
        
    },    
    alertButton : function(e){
            var f = this.parentNode;
            var text = f.message.value;
            var newMsg = new Message(text,new Date());
            f.message.value = "";
            MessageBoard.messages.push(newMsg);

            MessageBoard.renderMessages();
            var count = document.getElementById("msgCount");
            count.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
 //             MessageBoard.renderMessage(MessageBoard.messages.length-1);
              e.preventDefault();             
        },
        
    init:function(){
        document.getElementById("messageInput").value = "";
        var myButton = document.getElementById("sendButton");
        myButton.addEventListener("click", MessageBoard.alertButton);
 
        var remove = document.getElementById("messageArea");
        remove.onclick = function(e){
            var index;
            if (e.target.parentNode.getAttribute("title") === "Close"){
                index = e.target.parentNode.parentNode.getAttribute("data-messageID");
                MessageBoard.removeMessage(index);
            }
            if (e.target.parentNode.getAttribute("title") === "Time"){
                index = e.target.parentNode.parentNode.getAttribute("data-messageID");
                MessageBoard.alertTime(index);
            }           
        };  
        var checkKey = document.getElementById("messageInput");
        checkKey.onkeypress = function(e){

            if (!e) var e = window.event;
            if ((e.keyCode == 13) && !e.shiftKey){
                
                var f = this.parentNode.parentNode.parentNode;
                var text = f.message.value;
                var newMsg = new Message(text,new Date());
                f.message.value = "";
                MessageBoard.messages.push(newMsg);
    
                for (var i=0;i<MessageBoard.messages.length; i+=1)
                {
                   console.log(MessageBoard.messages[i].toString() );
                };
                MessageBoard.renderMessages();
                var count = document.getElementById("msgCount");
                count.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
     //             MessageBoard.renderMessage(MessageBoard.messages.length-1);
                e.preventDefault();                  
            };
        };
    }
}; 

window.addEventListener("load", MessageBoard.init);

