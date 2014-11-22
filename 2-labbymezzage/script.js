"use strict";

var MessageBoard = {
    
    messages : [],
    
    init:function(){
        
        var mess1 = new Message("Min text 1",new Date());
        var mess2 = new Message("Min text 2",new Date());
        var mess3 = new Message("Min text 3",new Date());
    
        MessageBoard.messages.push(mess1);
        MessageBoard.messages.push(mess2);
        MessageBoard.messages.push(mess3);
        
        for (var i=0;i<MessageBoard.messages.length; i+=1)
        {
            alert(MessageBoard.messages[i] );

        }
    /*    
        alert(mess);
        alert(mess.getText());
        mess.setText("Ny text \n hej å hå \n vad nurå");
        alert(mess);
        alert(mess.getDate());
        alert(mess.getHTMLText());
    */
    
        
        
    }
}; 

window.onload = MessageBoard.init;

