let a;
do {
    a = parseFloat(prompt("Ingrese el número de asteriscos"));
} while (isNaN(a) || a < 1);



let nLinea = 0;
    while (nLinea < a) {
    let linea = "";
    let nColumna = 0;
    while(nColumna<a-nLinea){
        nColumna=nColumna+1;
        linea = linea + " ";

    }
    nColumna = 0;
    while (nColumna < a) {
        if(nLinea==0||nLinea==a-1||nColumna==0||nColumna==a-1){
            linea = linea + "*";
        }
        else{
        linea=linea+" ";
    }    
        nColumna=nColumna+1;
        
    }
    linea=linea+" ";   
    console.log(linea);
    nLinea = nLinea + 1;
    }
