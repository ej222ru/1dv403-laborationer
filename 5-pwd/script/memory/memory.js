"use strict";

function Memory(_rows, _columns, _instance) {

    Window.call(this, "css/pics/memoryIcon.png", "MemoryGame", _instance);
    var that = this;
    this.rows = _rows;
    this.columns = _columns;  
    this.pictures = [];
    this.done = 0;
    this.clicks =  0;
    this.flipped =  0;
    this.turnBackAtTimeoutNode1 = 0;
    this.turnBackAtTimeoutNode2 = 0;

    
    this.turnCard = function(e, index){
        
        this.flippedCardsTimeout = function (){
                that.turnBackAtTimeoutNode1.setAttribute("src", "script/memory/pics/0.png"); 
                that.turnBackAtTimeoutNode2.setAttribute("src", "script/memory/pics/0.png"); 
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

        if (!secondSameIndex){       
            if (this.flipped < 2){
                this.flipped +=1;
                e.target.parentNode.parentNode.parentNode.getAttribute("data-cardID");
                e.target.setAttribute("data-cardID", index);
                var str = "script/memory/pics/" + this.pictures[index] + ".png";
                e.target.setAttribute("src", str);          
            };
     
            if (this.flipped === 2){
                this.clicks += 1;
                if (this.pictures[index] === this.pictures[this.turnBackAtTimeoutNode1.getAttribute("data-cardID")]){
                    this.flipped = 0;
                    this.done += 1;
                }
                else{
                    // start 1 sec timer, flip back turned cards at timeout
                    var that = this;
                    setTimeout(this.flippedCardsTimeout, 1000);
                }
            }
        }      
        if (this.done === this.rows * this.columns / 2 ){
            var content = document.getElementById(this.windowMainId);
            var result = document.createElement("div");
            var text = document.createElement("p");
            text.innerHTML = "Du klarade det på " + this.clicks + " försök!";
            text.style.color = white;
            result.appendChild(text); 
            content.appendChild(result); 
        }
    };
    
    
    
    this.renderMemoryTable = function(rows, cols, id){
        

        var i = 0;
        var j = 0;
        
        var gameInstance = document.getElementById(id),
            memoryTable = document.createElement("table"),
            memoryTableBody =  document.createElement("tbody"),
            memoryTableRow,
            memoryTableCell,
            memoryPicWrapper,
            memoryPic,
            picLink;
            memoryTable.classList.add("memoryTable");

        gameInstance.appendChild(memoryTable);             
        memoryTable.appendChild(memoryTableBody); 
        for (i=0;i<rows;i+=1){
            memoryTableRow = document.createElement("tr");                    
            memoryTableBody.appendChild(memoryTableRow); 
            for (j=0;j<cols;j+=1){
                memoryTableCell = document.createElement("td");
                memoryTableCell.setAttribute("data-cardID", i*cols+j);        

                
                memoryPicWrapper = document.createElement("div");
                memoryPicWrapper.classList.add("memoryPicWrapper");                  
                memoryTableCell.appendChild(memoryPicWrapper); 
                
                picLink = document.createElement("a");
                picLink.setAttribute("title", "Card");
                picLink.setAttribute("href", "#");               

                memoryPic = document.createElement("img");
                memoryPic.classList.add("imgCard");                
                memoryPic.setAttribute("src", "script/memory/pics/0.png");
                picLink.appendChild(memoryPic);                

                memoryPicWrapper.appendChild(picLink); 
                memoryTableRow.appendChild(memoryTableCell); 
            }
        }
    };
  
    this.start = function(){
        that = this;
        var windowInstance = document.getElementById(this.windowId);
        var windowInstanceMain = document.getElementById(this.windowMainId);
        
//        var gameInstance = document.createElement("div");
//        gameInstance.setAttribute("id", this.game);
//        windowInstance.appendChild(gameInstance);
        
        this.pictures = RandomGenerator.getPictureArray(this.rows, this.columns);
console.log(this.pictures); 

        var node = document.getElementById(this.windowId);
        node.onclick = function(e){
            var index;
            if (e.target.parentNode.getAttribute("title") === "Card"){
                index = e.target.parentNode.parentNode.parentNode.getAttribute("data-cardID");

                if ((that.flipped < 2) && (e.target.getAttribute("src") === "script/memory/pics/0.png"))
                {
                    that.turnCard(e, index);
                }
            }
        };   
        this.renderMemoryTable(this.rows, this.columns, this.windowMainId);
        var loadIcon = document.getElementById("loadIcon"+this.instanceId);
        loadIcon.parentNode.removeChild(loadIcon);        
    }
}

       
Memory.prototype = new Window();

