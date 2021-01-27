function promedio2(notas2){
  let contbucle=0;
  let elementos=0;
  do{
      elementos=notas2[contbucle]+elementos;
      contbucle=contbucle+1;
  }
  while(contbucle<notas2.length)
  return(elementos/notas2.length)
  }
  
  function carraypalabras(arraypalabras){
      let repeticionesbucle=0;
      let concatenado= "";
      do{
          concatenando=concatenado.concat(arraypalabras[repeticionesbucle])
          repeticionesbucle=repeticionesbucle+1;
      }while(repeticionesbucle<arraypalabras.length)
      return(concatenando)
  }
  