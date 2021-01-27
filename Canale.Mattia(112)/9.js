let a;
do {
    a = parseFloat(prompt("Inserte el número de asteríscos"));
} while (isNaN(a) || a < 1);



let nLinea = 0;
while (nLinea < a) {
    let linea = "";
    let nColumna = nLinea
    
    while (nColumna < a-1) {
       
        linea = linea + " ";
        nColumna=nColumna+1;

    }
    nColumna=0
    while (nColumna <= nLinea){
        if(nLinea==a-1||nColumna==0||nColumna==nLinea){
            linea = linea + "*";
        }
        else{
           linea = linea + " ";

        }
        nColumna=nColumna+1
       
    }
    
    linea=linea+" ";   
    console.log(linea);
    nLinea = nLinea + 1;
 }
