let lado5;
do{
    lado5 = parseFloat(prompt("Ingrese la cantidad que desee de asteriscos"));} 
while (isNaN(lado5) || lado5 < 4)
let contadorstars=0
let contadorspaces=0
let line=""
let ladoprogresivo=1

while(contadorstars<1){
 line=line+"*"
 contadorstars=contadorstars+1}
 console.log(line)
 while(contadorstars<2) {
line=line+"*"
contadorstars=contadorstars+1
}
console.log(line)
line="*"
while(ladoprogresivo<lado5-2){
line="*"
while(contadorspaces<ladoprogresivo){
line=line+" "
contadorspaces=contadorspaces+1}
line=line+"*"
console.log(line)
ladoprogresivo=ladoprogresivo+1
contadorspaces=0
}
line=""
contadorstars=0
while(contadorstars<lado5){
linea=linea+"*"
contadorstars=contadorstars+1
}
console.log(line)