let peso; 
do {
 peso = parseFloat(prompt("Ingrese su peso en kg")); 
} while (isNaN(peso) || peso <= 0);
let estatura;  
do {
estatura = parseFloat(prompt("Ingrese su estatura en m")); 
} while (isNaN(estatura) || estatura <= 0);

alert(`Su índice de masa corporal es: ${peso/(estatura*estatura)}`)

let imc= parseFloat(`${peso/(estatura*estatura)}`)
if (imc<18.5) {
    alert(`Underweight`)
}    

if          ( 25<=imc&&imc<30) 
{alert(`Overweight`)  }   
    if ( imc>=30) {
        alert(`Obese`
        )  }
     if ( 18.5<=imc && imc<25) {
        alert(`Normal`) }

    
     
        


        

    
        
    
       

    

     
