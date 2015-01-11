"use strict";

var MemoryGame = {
    rows : 4,
    columns : 4,    
    pictures : [],
    done: 0,
    clicks: 0,
    flipped: 0,
    turnBackAtTimeoutNode1: 0,
    turnBackAtTimeoutNode2: 0,

    flippedCardsTimeout: function(){
   //     if (MemoryGame.flipped === 2){
            MemoryGame.turnBackAtTimeoutNode1.setAttribute("src", "memory/pics/0.png"); 
            MemoryGame.turnBackAtTimeoutNode2.setAttribute("src", "memory/pics/0.png"); 
            MemoryGame.flipped = 0;
//        }
    },
    turnCard: function(e, index){
        var secondSameIndex = false;
        var target;
        if ( e.target.getAttribute("title") == "imgCard")
            target = e.target;
        if ( e.target.getAttribute("title") == "Card")
            target = e.target.childNodes[0];   
                    
        if (this.flipped === 0){
            this.turnBackAtTimeoutNode1 = target;
        }
        else if (this.flipped === 1){
            if (this.turnBackAtTimeoutNode1 !== target){
                this.turnBackAtTimeoutNode2 = target;
            }
            else{
                secondSameIndex = true;
            }
        }

        if (!secondSameIndex){       
            if (this.flipped < 2){
                this.flipped +=1;
//                e.target.setAttribute("data-cardID", index);
                var str = "memory/pics/" + this.pictures[index] + ".png";

                target.setAttribute("src", str);  
            };
     
            if (this.flipped === 2){
                this.clicks += 1;
                if (this.pictures[index] === this.pictures[this.turnBackAtTimeoutNode1.parentNode.getAttribute("data-cardID")]){
                    this.flipped = 0;
                    this.done += 1;
                }
                else{
                    // start 1 sec timer, flip back turned cards at timeout
                    setTimeout(MemoryGame.flippedCardsTimeout, 1000);
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
                picLink = document.createElement("a");
                picLink.setAttribute("title", "Card");
                picLink.setAttribute("href", "#");               
                picLink.setAttribute("data-cardID", i*cols+j);        




                memoryPic = document.createElement("img");
                memoryPic.setAttribute("title", "imgCard");                
                memoryPic.classList.add("imgCard");                
                memoryPic.setAttribute("src", "memory/pics/0.png");
//                memoryPic.classList.add("card");
                
                picLink.appendChild(memoryPic); 
                memoryTableCell.appendChild(picLink); 
                

                memoryTableRow.appendChild(memoryTableCell); 
                
            // funkar detta 
            
                picLink.onclick = function(e){
            // varför finns den i currentTarget
            // this verkar funka också
                    var index = e.currentTarget.getAttribute("data-cardID");
                    if (MemoryGame.flipped < 2){
                        MemoryGame.turnCard(e, index);
                    }    
                };
            
                picLink.onkeypress = function(e){
                    if (!e) var e = window.event;
                    if ((e.keyCode == 13) && !e.shiftKey){  
                        var index;
                        if (e.target.parentNode.getAttribute("title") === "Card"){
                            index = e.target.currentTarget.getAttribute("data-cardID");
                            if (MemoryGame.flipped < 2){
                                MemoryGame.turnCard(e, index);
                            }
                        }
                    }
                };




    
    
            }
        }
    },
    init:function(){
        

        
        MemoryGame.pictures = RandomGenerator.getPictureArray(MemoryGame.rows, MemoryGame.columns);
        console.log(MemoryGame.pictures);
        
        var checkKey = document.getElementById("container");
        checkKey.onkeypress = function(e){
            if (!e) var e = window.event;
            if ((e.keyCode == 13) && !e.shiftKey){  
                var index;
                if (e.target.parentNode.getAttribute("title") === "Card"){
                    index = e.target.parentNode.parentNode.getAttribute("data-cardID");
                    if (MemoryGame.flipped < 2){
                        MemoryGame.turnCard(e, index);
                    }
                }
            }
        };

/*                
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
*/

        MemoryGame.renderMemoryTable(MemoryGame.rows, MemoryGame.columns);

    }
}

window.addEventListener("load", MemoryGame.init);