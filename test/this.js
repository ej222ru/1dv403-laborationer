"use strict";
function students(_name) {
    this.name = _name;
    var that = this;
    
    console.log(" 1. this.name: ", this.name);
    console.log(" 1. that.name: ", that.name);
    var test = function (){
        console.log(this);
        console.log(" 2. that.name: ", that.name);
        
    }
    test();
    function test2(){
        console.log(this);
         console.log(" 3. that.name: ", that.name);
         test();
        
    }   
    test2();
}

window.onload = function (){
    alert("hej");
    var student1 = new students("kalle");
    var student2 = new students("otto");
//    student1.test2();
};
