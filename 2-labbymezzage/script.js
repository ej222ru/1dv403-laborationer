"use strict";

var MessageBoard = {
    

    messages : [],
    
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
            e.preventDefault();             
        });
    }
}; 

window.addEventListener("load", MessageBoard.init);

