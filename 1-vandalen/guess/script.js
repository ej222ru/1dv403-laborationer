"use strict";

window.onload = function(){

    var secret = Math.floor(Math.random() * (max - min) + 1) + min;
	
    // I denna funktion ska du skriva koden för att hantera "spelet"
    var guess = function(number){
        console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
        console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.

        var retArr = [];
       
        try {

            retArr[0] = [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
            retArr[1] = [false, "Det hemliga talet är högre!"]
            retArr[2] = [false, "Det hemliga talet är lägre!"]
            retArr[3] = [false, "Talet är utanför intervallet 0 - 100"]
            retArr[4] = [false, "Inget giltigt tal!"]

            if (isNan(number))
                throw new Error(retArr[4, 1]);
            else if ((number < 1) || (number > 100))
                return retArr[3];
            else if (number === secret)
                return retArr[0];
            else if (number < secret)
                return retArr[1];
            else if (number > secret)
                return retArr[2];
        }
        catch (error)
        {
            console.log(error.message);
            return  retArr[4];
        }
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};