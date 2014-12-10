'use strict'
function students(_name) {
    this.name = _name;
    var that = this;
    
    console.log(" 1. this.name: ", this.name);
    console.log(" 1. that.name: ", that.name);
    var test = function (){
   //     console.log(" 2. this.name: ", this.name);
        console.log(" 2. that.name: ", that.name);
        
    }
    test();
}

window.onload = function (){
    alert("hej");
    var student1 = new students("kalle");
};
