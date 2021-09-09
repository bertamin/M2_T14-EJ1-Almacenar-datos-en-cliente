function calcular(param){
  if(isNaN(param)){
    alert('Lo que has introducido no es un número');
    calcular(param);
  }else{
      if(param < 0 || param > 99999999){
      return "";
    }else{ 
      var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F',  'P', 'D','X', 'B', 'N', 'J', 'Z', 'S','Q', 'V', 'H', 'L', 'C', 'K', 'E'];
      var resto = param % 23;
      var letra = letras[resto];
      return letra;
    }
  }
}

let calcularDni = true;
while(calcularDni){
  var n = prompt('Introduce el DNI del quieres calcular la letra');
  var letra = calcular(n);
  alert(letra)
  calcularDni = confirm('¿Quieres seguir haciendo estos calculos?');
}
