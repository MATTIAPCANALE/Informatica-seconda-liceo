function areacirculo(r)
 {     return r*r* Math.PI
 }

function palabrasenconsole(pn1,pn2) {
                if  ( pn1.length>pn2.length) {
                    console.log(`Es más largo:${pn1}`)
                } else { if (pn1.length==pn2.length) {
                    console.log(`Equals`) 
                } else {
                    console.log(`Es más largo${pn2}`)
                } 
                     }
            } 



 function esferita(re) {
     return 4/3*Math.PI*re*re*re
    }
    function nmayor(n1,n2) {
      if (n1>n2) {
          return n1
      } else {
          if (n1==n2) {
            return "equals"  
          } else {
            return n2  
          }
      }
    }
    function laspalabras(p1,p2) {
        if  ( p1.length>p2.length) {
            return p1
        } else { if (p1.length==p2.length) {
            return "equals"
        } else {
            return p2  
        } 
             }
            
               
    
        

    }
    function fibo(n){   
   if (n==1) {
     return (1)
   } else {
    let n1=0
    let n2=1
   let nfibo=1
   let total=0
while (nfibo<n && n>=2) {
   total=n1+n2
  n2=n1+n2
  n1=n2-n1
  nfibo=nfibo+1   
   }   
   return total   
   }
   
   
 
    
      
  }    
    

