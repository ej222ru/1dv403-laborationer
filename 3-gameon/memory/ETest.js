"use strict";

function Memory(_rows, _columns, _game) {

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
    //        if (this.flipped === 2){
                that.turnBackAtTimeoutNode1.setAttribute("src", "memory/pics/0.png"); 
                that.turnBackAtTimeoutNode2.setAttribute("src", "memory/pics/0.png"); 
                that.flipped = 0;
    //        }
         
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
                e.target.parentNode.parentNode.getAttribute("data-cardID");
                e.target.setAttribute("data-cardID", index);
                var str = "memory/pics/" + this.pictures[index] + ".png";
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
            var container = document.getElementById("container");
            var result = document.createElement("div");
            var text = document.createElement("p");
            text.innerHTML = "Du klarade det på " + this.clicks + " försök!";
            result.appendChild(text); 
            container.appendChild(result); 
        }
    };
    
    
    
    this.renderMemoryTable = function(rows, cols){
        

        var i = 0;
        var j = 0;
        
        var container = document.getElementById("container"),
            memoryBoard = document.createElement("div"),
            memoryTable = document.createElement("table"),
            memoryTableBody =  document.createElement("tbody"),
            memoryTableRow,
            memoryTableCell,
            memoryPic,
            picLink;
            memoryBoard.classList.add("memoryBoard");
            memoryTable.classList.add("memoryTable");
            
        container.appendChild(memoryBoard); 
        memoryBoard.appendChild(memoryTable); 
        memoryTable.appendChild(memoryTableBody); 
        for (i=0;i<rows;i+=1){
            memoryTableRow = document.createElement("tr");                    
            memoryTableBody.appendChild(memoryTableRow); 
            for (j=0;j<cols;j+=1){
                memoryTableCell = document.createElement("td");
                memoryTableCell.setAttribute("data-cardID", i*cols+j);        


                picLink = document.createElement("a");
                picLink.setAttribute("title", "Card");
                picLink.setAttribute("href", "#");               


                memoryPic = document.createElement("img");
                memoryPic.classList.add("imgCard");                
                memoryPic.setAttribute("src", "memory/pics/0.png");
                memoryPic.classList.add("card");
                
                memoryTableCell.appendChild(picLink); 
                picLink.appendChild(memoryPic); 
                

                memoryTableRow.appendChild(memoryTableCell); 
            }
        }
    };
  
    this.start = function(){
        var BoardCollection = document.getElementById("");
        var GameInstance = document.createElement("div");
        GameInstance.setAttribute("Board");  // ordning 
        BoardCollection = div.appendChild(GameInstance);
        
        this.pictures = RandomGenerator.getPictureArray(rows, columns);
        console.log(this.pictures);
        var node = document.getElementById("container");
        node.onclick = function(e){
            var index;
            if (e.target.parentNode.getAttribute("title") === "Card"){
                index = e.target.parentNode.parentNode.getAttribute("data-cardID");
                console.log(e.target.parentNode.parentNode);
                console.log(e.target.parentNode.parentNode.parentNode);
                console.log(e.target.parentNode.parentNode.parentNode.parentNode);
                console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode);
                console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
                console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
               if (that.flipped < 2){
                    that.turnCard(e, index);
                }
  
                if (this.flipped < 2){
                    this.turnCard(e, index);
                }
            }
        };   
        this.renderMemoryTable(that.rows, that.columns);
    }
}

       
        

    };

var MemoryGame = {
    init: function(){
      var mem1 = new Memory(3,3,"game1");
//      var mem2 = new Memory(2,2,"game2");
      var that = this;
      mem1.start();
//      mem2.start();

    

    }      
}
window.addEventListener("load", MemoryGame.init);