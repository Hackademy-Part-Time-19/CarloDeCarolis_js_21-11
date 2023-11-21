
/*- Dato questo array

let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },
    
    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]

Ordinare questa lista prima secondo il campo nome e poi secondo il campo prezzo


- Filtrare da questa lista gli elementi con prezzo > 250: due versioni una con l’utilizzo di una funzione normale e scritta da voi, poi utilizzando il metodo filter.

*/


let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },
    
    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]

//Ordine lista per nome
let orderListName = listaProdotti.sort((a,b) => a.nome.localeCompare(b.nome));

console.log("Lista ordinata per nome");
console.log(orderListName);

//Ordine lista per prezzo
let orderListPrice = listaProdotti.sort((a,b) => a.prezzo - b.prezzo);

console.log("Lista ordinata per prezzo");
console.log(orderListPrice);

//Filtrare dalla lista gli elementi con prezzo > 250 senza metodo filter e con l'utilizzo di una funzione

function filterProductsByPrice(products, price) {
    let filterPriceList = [];
    
    for (let i = 0; i < products.length; i++) {
        if (products[i].prezzo > price) {
            filterPriceList.push(products[i]);
        }
    }
    
    return filterPriceList;
}

let filteredList = filterProductsByPrice(listaProdotti, 250);

console.log("Lista filtrata con prezzo > 250 senza usare il metodo filter e con l'utilizzo di una funzione");
console.log(filteredList);


//Filtrare dalla lista gli elementi con prezzo > 250 con l'uso di filter

let listFilterPrice = listaProdotti.filter((list) => list.prezzo > 250) 

console.log("Lista filtrata con prezzo > 250 usando metodo filter");
console.log(listFilterPrice);


//- Stampare i valori https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999

//stampare SOLO valori dei parametri dopo il ?

let url = "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999"

let urlSplittata = url.split("?")

let urlParametri = urlSplittata[1].split("&")

console.log("Stampati i valori");

urlParametri.forEach(element => { 
    let urlValoreParametri = element.split("=")
    console.log(urlValoreParametri[1]);
});



/*Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, False se non lo è.
Primo step: eliminare gli spazi e i segni di punteggiatura:
suggerimento: puoi eliminare spazi di punteggiatura usando = str.replace(/\W/g, "")

esempio:
input: "i topi non avevano nipoti"
output: true*/


function palindroma(str) {
    // Rimuovere spazi e segni di punteggiatura dalla stringa
    const cleanedStr = str.replace(/\W/g, "").toLowerCase();

    // Invertire la stringa pulita e confrontarla con l'originale
    const reversedStr = cleanedStr.split("").reverse().join("");

    // Verificare se la stringa pulita è uguale alla sua inversione
    return cleanedStr === reversedStr;
}
let str1 = "i topi non avevano nipoti";
console.log(palindroma(str1));

let str2 = "Carlo è tornato a casa tardi";
console.log(palindroma(str2));

