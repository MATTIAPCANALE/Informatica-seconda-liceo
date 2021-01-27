let nnotas
let nota
let notastotales=[]
let y=0
let z=0
do {
  nnotas=parseFloat(prompt("Ingrese su numero de notas"))}
   while (nnotas<=0 || isNaN(nnotas)|| Number.isInteger(nnotas)==false);
let notas
do {
 nota=parseFloat(prompt("Ingrese sus notas"))
 y=y+1
 if (nota>10 || nota<0 || isNaN(nota) ) {
  y=y-1} 
  else{y=y+0 ;
    notastotales.push(nota)  }
} while (y<nnotas);
let sumanotas=0
while (z<nnotas) {
  sumanotas=sumanotas+notastotales[z]
  z=z+1
}
alert(`Su promedio es: ${sumanotas/nnotas}`)
