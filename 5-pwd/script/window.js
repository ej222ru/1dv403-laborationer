var Projekt = {
    init: function(){
        
        var appArea = document.getElementById("appArea");
        
        var memoryIcon = document.createElement("div");
        memoryIcon.setAttribute("id", "memoryIcon");
        memoryIcon.classList.add("appIcon");
        appArea.appendChild(memoryIcon); 
  
        var linkMemoryIcon = document.createElement("a");
        linkMemoryIcon.setAttribute("href", "#");
        memoryIcon.appendChild(linkMemoryIcon);        

        var memoryIconImage = document.createElement("img");
        memoryIconImage.setAttribute("src", "script/memory/8.png");
        linkMemoryIcon.appendChild(memoryIconImage);

    }      
};
window.addEventListener("load", Projekt.init);

