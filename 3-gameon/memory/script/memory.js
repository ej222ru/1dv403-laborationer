"use strict";

var MemoryGame = {
    pictures : [],
    clicks: 0,
    flipped: 0,
    turnBackAtTimeoutNode1: 0,
    turnBackAtTimeoutNode2: 0,

    flippedCardsTimeout: function(){
        if (MemoryGame.flipped === 2){
            MemoryGame.turnBackAtTimeoutNode1.setAttribute("src", "memory/pics/0.png"); 
            MemoryGame.turnBackAtTimeoutNode2.setAttribute("src", "memory/pics/0.png"); 
            MemoryGame.flipped = 0;
        }
    },
    turnCard: function(e, index){
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
                if (this.pictures[index] === this.pictures[this.turnBackAtTimeoutNode1.getAttribute("data-cardID")]){
                    this.flipped = 0;
                }
                else{
                    // start 1 sec timer, flip back turned cards at timeout
                    setTimeout(MemoryGame.flippedCardsTimeout, 1000);
                }
            }
        }        
    },
    
    
    
    renderMemoryTable: function(rows, cols){
        

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
    },
    init:function(){
        
        var rows = 4;
        var columns = 4;
        
        MemoryGame.pictures = RandomGenerator.getPictureArray(rows, columns);
        console.log(MemoryGame.pictures);
        
        var node = document.getElementById("container");
        node.onclick = function(e){
            var index;
            if (e.target.parentNode.getAttribute("title") === "Card"){
                index = e.target.parentNode.parentNode.getAttribute("data-cardID");
                if (MemoryGame.flipped < 2){
                    MemoryGame.turnCard(e, index);
                }
            }
        };          
        
        MemoryGame.renderMemoryTable(rows, columns);

    }
}

window.addEventListener("load", MemoryGame.init);