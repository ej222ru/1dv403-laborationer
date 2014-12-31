"use strict";


function QaA() {
    var that = this;
    this.responseObject = 0;    // contain newxt question
    this.answerObject = 0;      // Answer on a question
    this.replyObject = 0;       // reply on answer. was the answer correct or not
    this.currentErr = 0;
    this.currentQ = 0;
    this.nextURL = "http://vhost3.lnu.se:20080/question/1";

    this.getQButtonClicked = function() {
        var aArea = document.getElementById("answerInput");  
        aArea.value = "";
        var aArea = document.getElementById("resultOutput");  
        aArea.innerHTML = "";

        var getQButton = document.getElementById("getQButton");  
        getQButton.style.color = "transparent";      
        getQButton.style.background = "transparent";  
        
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            if ((xhr.readyState === 4) && (xhr.status === 200)) {
                console.log(xhr.responseText); 
                that.responseObject = JSON.parse(xhr.responseText);
                var qArea = document.getElementById("questionOutput");
                qArea.value = that.responseObject.question;
                that.currentQ += 1;
                var getAButton = document.getElementById("sendAButton");  
                getAButton.style.color = "black";      
                getAButton.style.background = "green";  
                var aArea = document.getElementById("answerInput");
                aArea.focus();
                
           
            }
        };
        
        xhr.open("GET", that.nextURL, true);
        xhr.send(null);

        return false;
        
    };


    this.sendAButtonClicked = function(){
        var aArea = document.getElementById("answerInput");    
        var rArea = document.getElementById("resultOutput");    
        var totalResult = document.getElementById("totalResult");    
  
        
        var answerObject = {
            "answer" :aArea.value
        };        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200) {
           
                    that.replyObject = JSON.parse(xhr.responseText);
 //                   console.log(that.replyObject); 
                    that.nextURL = that.replyObject.nextURL;
                
                    var resultRow = document.createElement("div");
                    resultRow.classList.add("correct");
                    resultRow.innerHTML = "Du svarade rätt!" + "<br />";
                    if (that.nextURL !== undefined){
                        resultRow.innerHTML += "Klicka på 'Hämta fråga' för nästa fråga";
                    }
                    rArea.innerHTML = "";
                    rArea.appendChild(resultRow);
                    var totalRow = document.createElement("div");
                    var totAnsw = that.currentErr + 1; 
                    totalRow.innerHTML = "Fråga " + that.currentQ + " krävde " + totAnsw + " försök" + "<br />";
                    totalResult.appendChild(totalRow); 

                    that.currentErr = 0; 
                    var getAButton = document.getElementById("sendAButton");  
                    getAButton.style.background = "transparent";                      
                    getAButton.style.color = "transparent";                      
                    var getQButton = document.getElementById("getQButton");  
                    getQButton.style.background = "green";      
                    getQButton.style.color = "black";      

                }
                if (xhr.status === 400) {
           
                    that.replyObject = JSON.parse(xhr.responseText);
 //                   console.log(that.replyObject); 
//                    that.nextURL = that.replyObject.nextURL;
                    that.currentErr += 1;
                    var resultRow = document.createElement("div");
                    resultRow.classList.add("incorrect");
                    resultRow.innerHTML = "Du svarade fel!" + "<br />" + "Du har svarat fel **   " + that.currentErr + "   ** gånger på denna fråga" + "<br />" + "Ge ett nytt svar";
                    rArea.innerHTML = "";
                    rArea.appendChild(resultRow);
                    var aArea = document.getElementById("answerInput");
                    aArea.focus();

                    aArea.value = "";
                }
  
                    
                if (that.nextURL === undefined){
                    var tArea = document.getElementById("totalResult");  
                    tArea.style.color = "black";
                    
                    var getQButton = document.getElementById("getQButton");  
                    getQButton.style.background = "transparent";      
                    getQButton.style.color = "transparent";                          
                }                        
            }
        };

        if (that.nextURL !== "undefined"){
            xhr.open("POST", that.responseObject.nextURL,true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(answerObject));    
        }
        return false;    
    };
    
    this.start = function(){
         document.getElementById("getQButton").addEventListener("click", this.getQButtonClicked);
        document.getElementById("sendAButton").addEventListener("click", this.sendAButtonClicked);
        var aArea = document.getElementById("questionOutput");  
        aArea.value = "Klicka på 'Hämta fråga!";
        var qArea = document.getElementById("answerInput");  
        qArea.value = "Skriv ditt svar här";        
        var rArea = document.getElementById("resultOutput");  
        rArea.innerHTML = "";   
        var tArea = document.getElementById("totalResult");  
        tArea.innerHTML = "";   
        
        var getAButton = document.getElementById("sendAButton");  
        getAButton.style.color = "transparent";      
        getAButton.style.background = "transparent";  
        var getQButton = document.getElementById("getQButton");  
        getQButton.style.background = "green";            
    };
}

var myQaA = {
    init: function(){
      var QaA1 = new QaA();
 //     var that = this;
      QaA1.start();
      

    }      
};
window.addEventListener("load", myQaA.init);