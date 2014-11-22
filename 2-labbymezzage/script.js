"use strict";

var myMessage = {
    init:function(){
        var mess = new Message("Min text",new Date());
        alert(mess);
        alert(mess.getText());
        mess.setText("Ny text \n hej å hå \n vad nurå");
        alert(mess);
        alert(mess.getDate());
        alert(mess.getHTMLText());
        
        
        
    }
}; 

window.onload = myMessage.init;

