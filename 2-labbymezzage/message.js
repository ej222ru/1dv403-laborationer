"use strict";


function Message(message, date){

    this.getText = function(){
       return message;
    }
   
    this.setText = function(_text){
        message = _text;         
    }
    
    this.getDate = function(){
       return date;
    }
   
    this.setDate = function(_date){
        date = _date;         
    }    
   
}

Message.prototype.toString = function(){
    return this.getText() + " (" + this.getDate() + ")";
}
Message.prototype.getHTMLText= function(){
    var t = this.getText();
    return t.replace(/[\n\r]/g,"<br />");
//    return t.split('\n').join("<br/>");
}
Message.prototype.getDateText= function(){
    return  this.getDate() + " (" + this.getText() + ")";
}