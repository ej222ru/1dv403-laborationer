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
        var messageArea = document.getElementById("messageArea");
        var text = document.createElement("p");
        var remLink = document.createElement("a");
        var remPic = document.createElement("img");
        var timeLink = document.createElement("a");
        var timePic = document.createElement("img");
        
        remPic.setAttribute("id", "imgClose");   // Varför funkar inte class ?? hur många element med id=imgClose kan man skapa?
        remPic.setAttribute("src", "css/pics/remove_16.png");

        timePic.setAttribute("id", "imgClose");
        timePic.setAttribute("src", "css/pics/time_16.png");
                
//        remLink.setAttribute("class", "Close");
        remLink.setAttribute("alt", "Close");
        remLink.setAttribute("href", "#");
        remLink.appendChild(remPic);    
        text.appendChild(remLink); 

        timeLink.setAttribute("alt", "Time");
        timeLink.setAttribute("href", "#");
        timeLink.appendChild(timePic);    
        text.appendChild(timeLink); 
        
        text.innerHTML += MessageBoard.messages[index].getHTMLText();
        messageArea.appendChild(text);


        var time = document.createElement("p");
        time.setAttribute("id", "msgTime");
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
      
        var messageID = document.createElement("p");
        messageID.setAttribute("id", "messageID");        
        messageID.innerHTML = index;
        text.appendChild(messageID);        

    },
    
    removeMessage: function(index){
        MessageBoard.messages.splice(index, 1);
        MessageBoard.renderMessages();
        var count = document.getElementById("msgCount");
        count.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;        
    },
    alertTime: function(index){
        var date = MessageBoard.messages[index].getDate();
        var monthNames = [ "Januari", "Februari", "Mars", "April", "Maj", "Juni",
            "Juli", "Augusti", "September", "Oktober", "November", "December" ];
    
        var text = "Inlägget skapades den " + date.getDate() + " " +  monthNames[date.getMonth()] + " " + date.getFullYear() + " klockan " + date.toLocaleTimeString(); 
        alert(text);
        
    },    
    init:function(){

        var myButton = document.getElementById("sendButton");
        myButton.addEventListener("click", function(e){
            var f = this.parentNode;
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
        });
//        var remove = document.getElementById("messageArea");
/*        var remove = document.getElementsByClassName("imgClose");
          remove.onclick = function(){
            var index = this;
            MessageBoard.removeMessage(index);
        };       
        var remove2 = document.getElementsByClassName("Close");
          remove2.onclick = function(){
            var index = this;
            MessageBoard.removeMessage(index);
        };       
        var remove3 = document.getElementsByClassName("msgTag");
          remove3.onclick = function(){
            var index = this;
            MessageBoard.removeMessage(index);
        };       
*/        var remove4 = document.getElementById("messageArea");
          remove4.onclick = function(e){
            console.log(e.target);
            console.log(e.currentTarget);
            console.log(e.target.parentNode);
            console.log(e.target.parentNode.parentNode.lastChild);  

                        
            console.log(e.target.parentNode.parentNode.lastChild.firstChild);   
            console.log(e.target.parentNode.parentNode.lastChild.firstChild.nodeValue);   
                                
            if (e.target.parentNode.getAttribute("alt") === "Close"){
                var index = e.target.parentNode.parentNode.lastChild.firstChild.nodeValue;
                MessageBoard.removeMessage(index);
            }
            if (e.target.parentNode.getAttribute("alt") === "Time"){
                var index = e.target.parentNode.parentNode.lastChild.firstChild.nodeValue;
                MessageBoard.alertTime(index);
            }           
        };  
    }
}; 

window.addEventListener("load", MessageBoard.init);

