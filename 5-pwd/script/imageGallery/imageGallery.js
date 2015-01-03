"use strict";

function ImageGallery(_instance) {

    Window.call(this, "ImageGallery", _instance);
    var that = this;
    
    this.start = function(){
        that = this;
/*        
        var BoardCollection = document.getElementById(this.game);
        var GameInstance = document.createElement("div");
        GameInstance.setAttribute("id", this.game);  // ordning 
        BoardCollection.appendChild(GameInstance);
        
        this.pictures = RandomGenerator.getPictureArray(this.rows, this.columns);
        console.log(this.pictures);

        var node = document.getElementById(this.game);
        node.onclick = function(e){
            var index;
            if (e.target.parentNode.getAttribute("title") === "Card"){
                index = e.target.parentNode.parentNode.getAttribute("data-cardID");

                if ((that.flipped < 2) && (e.target.getAttribute("src") === "script/memory/pics/0.png"))
                {
                    that.turnCard(e, index);
                }
            }
        };   
        this.renderMemoryTable(this.rows, this.columns, this.game);
*/        
    };    
}
       
ImageGallery.prototype = new Window();

