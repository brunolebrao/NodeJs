const fs = require('fs')

console.log('INICIO');

console.log(fs.readdirSync('./')); //síncrona

fs.readdir('./', function(err,lista){ //Assíncrona
    if(err) {
        console.log('erro', err);
    } else {
        console.log(lista)
    }
})

console.log('FIM');