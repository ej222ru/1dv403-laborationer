"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
		var year = date.substr(0,4);
		var month = date.substr(5,2);
		var day = date.substr(8,2);
		var hyphen1 = date.substr(4,1);
		var hyphen2 = date.substr(7,1);
		if (isNaN(year) || isNaN(month) || isNaN(day) || (hyphen1 !== '-') || (hyphen2 !== '-'))
		{
			throw new Error("Du måste mata in ´datum på formatet YYYY-MM-DD!");
		} 
		var bNextBirtday = new Date(date);  

		var dateTest = bNextBirtday instanceof Date;
		if ((!dateTest) ||  isNaN( bNextBirtday.getTime()))
		{
			throw new Error("Du måste mata in giltigt datum!");
		}
		var today = new Date();
		bNextBirtday.setFullYear(today.getFullYear());

		var timeDiff = bNextBirtday.getTime() - today.getTime();
		
		var Days = Math.ceil(timeDiff / (1000*60*60*24));
		if (Days < 0){

			bNextBirtday.setFullYear(today.getFullYear()+1);
			timeDiff = bNextBirtday.getTime() - today.getTime();
			Days = Math.ceil(timeDiff / (1000*60*60*24));
			var nextLeapYearTest = today.getFullYear()+1 + "-02-29";
			var leapYearDate = new Date(nextLeapYearTest);
			var testLeapYear = ((leapYearDate instanceof Date) &&  !isNaN( leapYearDate.getTime()));
			if (testLeapYear){
				Days +=1;
			}
				
		}
		return Days;
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};