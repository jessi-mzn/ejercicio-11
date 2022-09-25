
 let p = prompt ("Escriba hola mundo");
 let n = prompt("¿Cuantas veces queres repetirla?");
function loop(palabra, numero)
{
  if(numero <= 1)
  {
    return palabra
  }
  else
  {
  return loop(palabra, numero-1) + " " + palabra + " "
  }
    
  
  
  
    
}
document.write(loop(p, n));
console.log(loop(p, n));