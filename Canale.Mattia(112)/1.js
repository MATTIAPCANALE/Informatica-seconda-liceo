let ancho;
let alto;
do {
  ancho = parseFloat(prompt("Inserte el ancho"));
} while (isNaN(ancho) || ancho < 1);

do {
  alto = parseFloat(prompt("Inserte el alto"));
} while (isNaN(alto) || alto < 1);

let nLinea = 0;
while (nLinea<= alto){
    let linea = " ";
    let nColumna = 0;
    while(nColumna <= ancho)
    {
        if (nLinea==0 || nLinea==alto){
            linea = linea + "*"
        }
        else if (nColumna == 0 || nColumna==ancho){
linea = linea + "*"
        } else{
            linea=linea+" "
        }
        nColumna = nColumna +1
    }
    console.log(linea);
    nLinea = nLinea +1;
}
