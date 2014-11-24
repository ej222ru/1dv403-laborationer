"use strict";

var MessageBoard = {
    

    messages : [],
  

    init:function(){
//        NodeList.protoype.forEach = Array.prototype.forEach;
           function sendMessage(){
                var inMsg = msgBox.childNodes[0].nodeValue;
                console.log(inMsg);
                return;
            } 
        var div = document.getElementById("messageInput");
        if (div.nodeType === 1){
   //         alert(div.firstChild.nodeValue);
   //            alert(div.childNodes[0].nodeValue); 
            
        };

        var msgBox = document.querySelector("#messageInput");
        console.log(msgBox.childNodes.length);
        if (msgBox.nodeType === 1){
//            var nodeName = msgBox.childNodes[0].nodeName;
//            console.log(nodeName)
//
//            console.log(msgBox.firstChild.nodeValue);
//            console.log(msgBox.childNodes[0].nodeValue);
//            msgBox.childNodes[0].nodeValue = "Hallå!!!";
//            console.log(msgBox.childNodes[0].nodeValue);       
            
            
            var myButton = document.getElementById("message-box");
            var that = this;
            myButton.addEventListener("click", function(e){

                console.log(this);
                var te = this.message.value;
                console.log(te);
                var MI = this.querySelector("#messageInput");
                if (MI.firstChild.nodeType === 3){
                    console.log(MI.lastChild.nodeValue);
                    console.log(MI.firstChild.value);
                    var inp = ny.message.value;
                    console.log(inp);
                    
                    
                }
                var MImsg = MI.childNodes[0].nodeValue;
  //              console.log(MImsg);
                   
                 
                var msgBox2 = document.querySelector("#messageInput");                
                var inMsg = msgBox2.childNodes[0].nodeValue;
//                var myMsg = document.getElementById("message-box");
//                console.log(myMsg.firstChild.nodeValue);
//              console.log(myMsg.lastChild.nodeValue);                
 //               console.log(inMsg);
  //               e.preventDefault();               
               // return;
            }); 
//            var that = this;
/*            myButton.onclick =  function(){
                var inMsg = msgBox.childNodes[0].nodeValue;
                var myMsg = that.document.getElementById("message-box");
                console.log(myMsg.firstChild.nodeValue);
              console.log(myMsg.lastChild.nodeValue);                
                console.log(inMsg);
                
                return;
            } 
*/
/*            var text = msgBox.childNodes;
            msgBox.forEach(function(node){
                alert(node.nodeType);               
            });
*/                
/*            text.forEach(function(node){
                alert(node.nodeValue);                
            });
*/

        };

        
        
        
        var mess1 = new Message("Min text 1",new Date());
        var mess2 = new Message("Min text 2",new Date());
        var mess3 = new Message("Min text 3",new Date());
    
        MessageBoard.messages.push(mess1);
        MessageBoard.messages.push(mess2);
        MessageBoard.messages.push(mess3);
        
        for (var i=0;i<MessageBoard.messages.length; i+=1)
        {
 //           alert(MessageBoard.messages[i] );

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

// window.addEventListener("load", MessageBoard.init);

