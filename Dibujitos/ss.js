let ancho; 
do { ancho = parseFloat(prompt("Ingrese su ancho")); 
} while (isNaN(ancho) || ancho < 0);
let alto;  
do { alto = parseFloat(prompt("Ingrese su alto")); 
} while (isNaN(alto) || alto < 0);
let linea
let nLinea =0;
while (nLinea<alto) {
   let linea= ""
   let nColumna = 0
   while (nColumna<ancho) {
       if (nLinea==nColumna) {
           linea= linea + " "
       } else {
        linea= linea + "*"   
       }
       nColumna= nColumna+1
   }
   console.log(linea);
   nLinea= nLinea+1
}

while (nLinea<alto) {
   let linea= ""
   let nColumna = 0
   while (nColumna<ancho) {
       if (nLinea==nColumna) {
           linea= linea + "    "
       } else {
        linea= linea + "* *"  
       }
       nColumna= nColumna+1
   }
   console.log(linea);
   nLinea= nLinea+1
}
