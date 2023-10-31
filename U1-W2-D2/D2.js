/* ESERCIZIO 1
  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 // due variabili da confrontare (if esle if else) console
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var num1 = 10;
var num2 = 20;

if(num1 > num2) {
  console.log("10 è più grande di 20");
} else {
  console.log("20 è più grande di 10");
};

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  // una variabile not equal -> !==
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 7;
let num4 = 3;

if (num3 != num4) {
  console.log("not equal");
};

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  // divisibile -> resto %
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var num = 50;
if (num%5 == 0) {
  console.log("divisibile per 5");
} else {
  console.log("non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
  // if (serie di condizioni if -> la verifica  === )
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var a = 6;
var b = 2;

if (a + b === 8) {
  console.log("8");
} else {
  console.log("la loro somma non è uguale a 8");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  // dichiaro 3 variabili: totale spesa, costo, pagamento = totale -> if se un valore < una certa soglia aggiungo le spese 
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCart = 30;
const ship = 10;

if (totalShoppingCart >= 50) {
  var totaleFinale = totalShoppingCart;
} else {
  var totaleFinale = totalShoppingCart + ship;
}
console.log("importo dovuto:" + totaleFinale);
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
  // simile a quello di sopra (sconto * 0.8)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const sconto = 0.8;

if (totalShoppingCart * sconto >= 50) {
  var totaleFinale = (totalShoppingCart * sconto);
} else {
  var totaleFinale = (totalShoppingCart * sconto) + ship;
}
console.log("importo dovuto:" + totaleFinale);
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  // annido una serie di if -> controllo tutte le varie condizioni e con la console stampo la condizione (quando è true)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = 4;
var y = 6;
var z = 8;

if (x > y) {
  console.log("4 è maggoiore di 6");
} else if (y > z) {
  console.log("6 è maggiore di 8");
} else {
  console.log("8, 6, 4");
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  // typeof -> if else
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  // modulo di 2 (%2) -> if else
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var num10 = 10;
if (num10%2 == 0) {
  console.log("numero pari");
} else {
  console.log("numero dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
  // siamo dentro a un oggetto -> aggiungo qualcosa (una proprietà) all'oggetto
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}


/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  // posso cancellare da un oggetto
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  // metodo array (pop)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
document.getElementById("demo").innerHTML

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  // metodo array -> inserire qualcosa nell'array
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myArray = [];
myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  // selezionare il 9° elemento e assegnare un nuovo valore
*/

/* SCRIVI QUI LA TUA RISPOSTA */

