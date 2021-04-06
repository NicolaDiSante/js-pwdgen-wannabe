var yourName = prompt('Qual è il tuo nome?');
var yourSurname = prompt('Qual è il tuo cognome?');
var favouriteColour = prompt('Qual è il tuo colore preferito?');
var risultato;

risultato = yourName + yourSurname + favouriteColour + 21; 

document.getElementById('msgInfo').innerHTML = risultato;

console.log(risultato);


