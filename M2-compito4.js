// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

/*
const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [150, 90, 315]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = paul //cambia il valore qui per provare se il tuo algoritmo funziona!

let utenti = [];
utenti.push(marco,paul,amy);

let carrello;
let checkout;

// iterando tutti gli utenti 

for (let i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador){
    carrello = prices[i]*0.7;
  } else { carrello = prices[i];
  };

  if(carrello > 100) {
    checkout = carrello;
    console.log("Questo è il totale a pagamento: " + checkout+ " "  + "Goodbye " + utenti[i].name + " " + utenti[i].lastName + "!" );
  } else {
    checkout = carrello + shippingCost;
    console.log("Questo è il totale a pagamento: " + checkout+ " "  + "Goodbye " + utenti[i].name + " " + utenti[i].lastName + "!" );
  }
}


// Se volessimo non iterare tutti i utenti e fare la stessa cosa per ogni utente (definito tramite hard coding). 

marco.price = prices[0];
paul.price = prices[1];
amy.price = prices[2];


if (utenteCheEffettuaLAcquisto.isAmbassador){
  carrello = utenteCheEffettuaLAcquisto.price*0.7;
} else { carrello = utenteCheEffettuaLAcquisto.price;
};

if(carrello > 100) {
  checkout = carrello;
  console.log("Questo è il totale a pagamento: " + checkout + " "  + "Goodbye " + utenteCheEffettuaLAcquisto.name + " " + utenteCheEffettuaLAcquisto.lastName + "!" );
} else {
  checkout = carrello + shippingCost;
  console.log("Questo è il totale a pagamento: " + checkout + " "  + "Goodbye " + utenteCheEffettuaLAcquisto.name + " " + utenteCheEffettuaLAcquisto.lastName + "!" );
}

// Chi è e chi non è un ambassador

for ( let i = 0; i<utenti.length; i++) {
  if (utenti[i].isAmbassador) {
    console.log (utenti[i].name + " " + utenti[i].lastName + " è un Ambassador" );
  } 
    else {
      console.log (utenti[i].name + " " + utenti[i].lastName + " non è un Ambassador" )
    };
}

// Solo ambassador

let soloAmbassador = [];

for (let i = 0; i < utenti.length; i++){
    if ( utenti[i].isAmbassador) {
      soloAmbassador.push(utenti[i]);
    } 
}
//console.log(soloAmbassador);

*/


// ORDINARE UN ARRAY CON 5 ELEMENTI ALEATORI ( NELLA CONDIZIONE IF BASTA CAMBIARE DAL MAGGIORE AL MINORE PER OTTENERE ORDINE ASCENDENTE O DISCENDENTE)

// let randomArr = [];

// for(let i = 0; i < 5; i++) {
//   randomArr.push(Math.floor(Math.random()*100));
// }

// let num;

// for ( let i = 0; i < randomArr.length -1; i++) {

//   for (let j = i; j < randomArr.length ; j++) {
//     if(randomArr[i]>randomArr[j+1]){
//       num = randomArr[j+1];
//       randomArr[j+1]=randomArr[i];
//       randomArr[i]=num;
//     }
//   }
// }

// console.log(randomArr);



// INVERSIONE  DI  UN  ARRAY

// let array = [4,89,1,3];
// let newArray = [];
// let j = array.length -1;


// for (let i = array.length -1; i> -1; i--) {
//   newArray.push(array[i]);
// }
// console.log(newArray);



//  TERZO ARRAY CON LA SOMA DI OGNI ELEMENTO DI DUE ARRRAY GIA ESISTENTI

// let array1 = [5,2,8];
// let array2 = [9,3,6];
// let arrayFinal = [];

// for ( let i = 0; i < array1.length; i++) {
//   sum = array1[i] + array2[i];
//   arrayFinal.push(sum);
// }

// console.log(arrayFinal);




// TOMBOLA!!


/*
let arrTen = [];


for(let i = 0; i < 10; i++) {
  let num = Math.floor((Math.random()*90) +1);
    arrTen.push(num); 
}

console.log(arrTen);

let arrTen2 = [42,65,80,55,22,8,9,12,34,7];

let countArr = 0;

for( let i = 0; i < arrTen.length; i++){
  for( let j = 0; j < arrTen2.length; j++)
    if ( arrTen[i] === arrTen2[j]){
      countArr++;
      console.log(arrTen[i]);
      //console.log(countArr);
    }
}

switch (countArr) {

  case 1: console.log(" one match! ");
    break;
  case 2: console.log(" Ambo ");
    break;
  case 3: console.log(" Terna ");
    break;
  case 4: console.log(" Quaterna ");
    break;
  case 5: console.log(" Cinquina ");
    break;
  case 10: console.log(" Tombola! ");
    break;
  default:console.log(" no match! ");
    break;
}
*/