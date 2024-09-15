function conta_numeri(){

    let numero = prompt('Scegli il tuo numero')
    
    if (numero.length == 1){
        console.log('1 cifra');
        
    } else if (numero.length == 2){
        console.log('2 cifre');
        
    } else if (numero.length == 3){
        console.log('3 cifre');
    
    } else if (numero.length == 4){
        console.log('4 cifre');

    } else {
        console.log('numero troppo grande');
        
    }
}

conta_numeri()