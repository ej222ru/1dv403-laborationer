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
        remPic.setAttribute("src", "css/pics/remove_16.png");
        remLink.setAttribute("id", "imgClose");
        remLink.setAttribute("alt", "Close");
        remLink.setAttribute("href", "#");
        remLink.appendChild(remPic);    
        text.appendChild(remLink);    

 
        
        text.innerHTML += MessageBoard.messages[index].getHTMLText();
        messageArea.appendChild(text);


/*
        var remPic = document.createElement("p");
        remPic.setAttribute("id", "imgClose");
        text.appendChild(remPic);
*/


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
        

    },
    
    removeMessage: function(){
/*        document.getElementById("messageArea").innerHTML = "";
        for (var i=0; i<MessageBoard.messages.length;i++){
            MessageBoard.renderMessage(i);
        };
*/        
    },
    
    init:function(){

        var myButton = document.getElementById("sendButton");
        myButton.addEventListener("click", function(e){
            var f = this.parentNode;
            var text = f.message.value;
            var newMsg = new Message(text,new Date());
            f.message.value = "";
 //           console.log("Antal meddelanden: " + MessageBoard.messages.length);
            MessageBoard.messages.push(newMsg);
//            console.log("Antal meddelanden: " + MessageBoard.messages.length);
    
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
//        imgClose.alt="Close",
/*        imgClose.onclick = function(){
            MessageBoard.removeMessage(index);
        },        
*/

    }
}; 

window.addEventListener("load", MessageBoard.init);

