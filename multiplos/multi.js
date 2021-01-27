let i=3
let suma= 0
while (i<=10000) {
    if (i%3==0) {
       suma=suma+i ;
       i=i+1 
    } else {
        i=i+1
    }
}
console.log(`Total suma:${suma}`)
let h=5
let suma5=0
while (h<=10000) {
    if (h%5==0) {
       suma5=suma5+h ;
       h=h+1 
    } else {
        h=h+1
    }
}
console.log(`Total suma multiplos de 5:${suma5}`)
let tre=3
let cinque=5
somma=0
while(tre*cinque <=10000) {
if (tre*cinque%3==0 && cinque*tre%5==0) {
   somma=somma+tre*cinque
  cinque=cinque+1
} else {
    cinque=cinque+1
}
}
console.log(`Total suma multiplos de 5 y 3:${somma}`)

let sommagigante=suma+suma5-somma*2
console.log(`Total suma múltiplos de 5 o 3 pero no de ambos:${sommagigante}`)
