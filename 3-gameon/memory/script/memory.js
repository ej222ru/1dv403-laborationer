"use strict";

var MemoryGame = {
    pictures : [],
    
    turnCard: function(index){
        var count = document.getElementById("msgCount");
        console.log(index);
    },
    
    
    
    renderMemeoryTable: function(rows, cols){
        

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
                memoryTableCell.setAttribute("data-cardID", i*cols+j+1);        

                picLink = document.createElement("a");
                memoryPic = document.createElement("img");
                memoryPic.classList.add("imgCard");                
                memoryPic.setAttribute("src", "memory/pics/0.png");
                
                memoryTableCell.appendChild(picLink); 
                picLink.appendChild(memoryPic); 
                
                picLink.setAttribute("title", "Card");
                picLink.setAttribute("href", "#");               

                memoryTableRow.appendChild(memoryTableCell); 
            }
        }
    },
    init:function(){
        
        var rows = 4;
        var columns = 4;
        
        MemoryGame.pictures = RandomGenerator.getPictureArray(rows, columns);
        console.log(MemoryGame.pictures);
        
        var card = document.getElementById("container");
        card.onclick = function(e){
            var index;
            if (e.target.parentNode.getAttribute("title") === "Card"){
                index = e.target.parentNode.parentNode.getAttribute("data-cardID");
                MemoryGame.turnCard(index);
            }
        };          
        
        var test = MemoryGame.renderMemeoryTable(rows, columns);

    }
}

window.addEventListener("load", MemoryGame.init);