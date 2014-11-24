"use strict";

var MessageBoard = {
    

    messages : [],

    renderMessages: function(){
        document.getElementById("messageArea").innerHTML = "";
        for (var i=0; i<MessageBoard.messages.length;i++){
            MessageBoard.renderMessage(i);
        }
    },

    renderMessage: function(index){
        var messageArea = document.getElementById("messageArea");
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[index].getHTMLText();
        messageArea.appendChild(text);
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
            }
            MessageBoard.renderMessages();
 //             MessageBoard.renderMessage(MessageBoard.messages.length-1);
              e.preventDefault();             
        });
    }
}; 

window.addEventListener("load", MessageBoard.init);

