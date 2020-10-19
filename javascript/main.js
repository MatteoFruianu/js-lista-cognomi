// Chiedere all'utente il cognome
// inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova




var cognome = prompt("inserire il proprio cognome");

var firstCapital = cognome.slice(0,1);

var first = firstCapital.toUpperCase();

var restOf = cognome.slice(1, cognome.length);

var rest = restOf.toLowerCase();

var cognomeUtente = first + rest;

var cognomi = ["Messner", "Pantani", "Baggio", "Totti", "Bonatti"];

cognomi.push(cognomeUtente);

cognomi.sort();




for ( var i = 0; i < cognomi.length; i++) {

    var humanIndex = (cognomi.indexOf(cognomi[i])) + 1;
    console.log(humanIndex + ": " + cognomi[i]);  
}














