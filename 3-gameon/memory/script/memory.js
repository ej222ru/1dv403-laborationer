"use strict";

var MemoryGame = {
    pictures : [],
    
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

                picLink = document.createElement("a"),
                memoryPic = document.createElement("img"),            
                memoryTableCell.appendChild(picLink); 
                picLink.appendChild(memoryPic); 
                
               memoryPic.setAttribute("src", "../pics/1.png");
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
        
        
        
        var test = MemoryGame.renderMemeoryTable(rows, columns);

    }
}

window.addEventListener("load", MemoryGame.init);