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
        
        remPic.setAttribute("id", "imgClose");
        remPic.setAttribute("src", "css/pics/remove_16.png");
        
//        remLink.setAttribute("class", "Close");
        remLink.setAttribute("alt", "Close");
        remLink.setAttribute("href", "#");
        remLink.appendChild(remPic);    
        text.appendChild(remLink); 

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
            console.log(e.target.parentNode.nodeValue);
            console.log(e.target.parentNode.parentNode.lastChild);   
            console.log(e.target.parentNode.parentNode.lastChild.firstChild);   
            console.log(e.target.parentNode.parentNode.lastChild.firstChild.nodeValue);   
                                
        
            var index = e.target.parentNode.parentNode.lastChild.firstChild.nodeValue;
            
            MessageBoard.removeMessage(index);
        };  
    }
}; 

window.addEventListener("load", MessageBoard.init);

