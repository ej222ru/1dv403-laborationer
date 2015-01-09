"use strict";
define(["Window","random"], function(Window, random){
    var Memory = function(_rows, _columns, _instance) {
        var that = this;
        
        Window.call(this, "css/pics/memoryIcon.png", "MemoryGame", _instance);
        this.initiateWindow();                  // Create common window nodes in the DOM

        this.rows       = _rows;
        this.columns    = _columns;  
        this.pictures   = [];
        this.done       = 0;                    // keeps track of found pairs
        this.clicks     = 0;                    // keeps track of attempts
        this.flipped    = 0;                    // "open flippes cards" i.e. 0,1 or 2
        this.turnBackAtTimeoutNode1 = 0;        // first flipped card to "hide" after timeout
        this.turnBackAtTimeoutNode2 = 0;        // second flipped card to "hide" after timeout
    
        
        this.turnCard = function(e, index){
            // After timeout two unmatching cards, show backside again
            this.flippedCardsTimeout = function (){
                    that.turnBackAtTimeoutNode1.src = "script/memory/pics/0.png"; 
                    that.turnBackAtTimeoutNode2.src = "script/memory/pics/0.png"; 
                    that.flipped = 0;
            };        
    
            var secondSameIndex = false;
            if (this.flipped === 0){
                this.turnBackAtTimeoutNode1 = e.target;
            }
            else if (this.flipped === 1){
                if (this.turnBackAtTimeoutNode1 !== e.target){
                    this.turnBackAtTimeoutNode2 = e.target;
                }
                else{
                    secondSameIndex = true;
                }
            }
    
            // comapare the two flipped cards if they are same
            if (!secondSameIndex){       
                if (this.flipped < 2){
                    this.flipped +=1;
                    e.target.parentNode.parentNode.parentNode.getAttribute("data-cardID");
                    e.target.setAttribute("data-cardID", index);
                    e.target.src = "script/memory/pics/" + this.pictures[index] + ".png";          
                };
         
                if (this.flipped === 2){
                    this.clicks += 1;
                    if (this.pictures[index] === this.pictures[this.turnBackAtTimeoutNode1.getAttribute("data-cardID")]){
                        this.flipped = 0;
                        this.done += 1;
                    }
                    else{
                        // start 1 sec timer, flip back turned cards at timeout
                        setTimeout(this.flippedCardsTimeout, 1000);
                    }
                }
            }      
    
            // Are we done finding all?
            if (this.done === this.rows * this.columns / 2 ){
                var content = document.getElementById(this.windowMainId),
                    result  = document.createElement("div"),
                    text    = document.createElement("p");
                    
                text.innerHTML      = "Du klarade det på " + this.clicks + " försök!";
                text.style.color    = "white";
    
                content.appendChild(result); 
                result.appendChild(text); 
            }
        };
    
        
        this.renderMemoryTable = function(rows, cols, windowMainId){
            var i = 0;
            var j = 0;
    
    /*  
            WindowMain                              <div>
                MemoryTable                         <table>
                    MemoryTableBody                 <tbody>
                        MemoryTableRow              <tr>
                            memoryTableCell         <td>               
                                memoryPicWrapper    <div>
                                    picLink         <a>
                                        memoryPic   <img>
                            memoryTableCell         <td>               
                                memoryPicWrapper    <div>
                                    picLink         <a>
                                        memoryPic   <img>
                        MemoryTableRow              <tr>
                            memoryTableCell         <td>               
                                memoryPicWrapper    <div>
                                    picLink         <a>
                                        memoryPic   <img>
                            memoryTableCell         <td>               
                                memoryPicWrapper    <div>
                                    picLink         <a>
                                        memoryPic   <img>
    
    */  // Node tree illustration
    
            var gameInstance    = document.getElementById(windowMainId),
                memoryTable     = document.createElement("table"),
                memoryTableBody =  document.createElement("tbody"),
                memoryTableRow,
                memoryTableCell,
                memoryPicWrapper,
                memoryPic,
                picLink;
                memoryTable.classList.add("memoryTable");
    
            gameInstance.appendChild(memoryTable);             
            memoryTable.appendChild(memoryTableBody);
            
            // Create table rows
            for (i=0;i<rows;i+=1){
                memoryTableRow = document.createElement("tr");                    
                memoryTableBody.appendChild(memoryTableRow); 
                // Fill a table row
                for (j=0;j<cols;j+=1){
                    memoryTableCell = document.createElement("td");
                    memoryTableCell.setAttribute("data-cardID", i*cols+j);        
    
                    memoryPicWrapper = document.createElement("div");
                    memoryPicWrapper.classList.add("memoryPicWrapper");                  
                    
                    picLink = document.createElement("a");
                    picLink.setAttribute("title", "Card");
                    picLink.href = "#";               
    
                    memoryPic = document.createElement("img");
                    memoryPic.classList.add("imgCard");                
                    memoryPic.src = "script/memory/pics/0.png";
     
                    memoryTableRow.appendChild(memoryTableCell); 
                    memoryTableCell.appendChild(memoryPicWrapper); 
                    memoryPicWrapper.appendChild(picLink); 
                    picLink.appendChild(memoryPic);                
    
                    this.createEvent = function(node, index){
                        node.onclick = function(e){
                            that.turnCard(e, index);
                            return false;
                        };  
                    }
                    this.createEvent(picLink, i*cols+j);                  
                }
            }
        };
      
        this.start = function(){
            that = this;
    
            this.pictures = RandomGenerator.getPictureArray(this.rows, this.columns);
     
            this.renderMemoryTable(this.rows, this.columns, this.windowMainId);
            
            var loadIcon = document.getElementById("loadIcon"+this.instanceId);
            loadIcon.style.visibility = 'hidden';       
            document.getElementById("bottomLabelText"+this.instanceId).innerHTML = "";
        };
    };
    
    return Memory;
    Memory.prototype = new Window.Window();
});
