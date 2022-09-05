
let entrada = parseInt(prompt("Ingrese un numero para conocer su factorial!!"));

while (isNaN(entrada)) {
  alert("Tiene que ingresar solo numeros!!");
  entrada = parseInt(prompt("Tiene que ingresar un numero para conocer su factorial!!"));
}
const factorial = (entrada) => {
  let factorial = 1;
  for (let i = entrada; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
};

let mensaje = `El factorial de ${entrada} es = ${factorial(entrada)}`;

alert(mensaje);

let respuesta = prompt(
  "¿Desea conocer el factorial de otro numero? Ingrese S para seguir").toLowerCase();

while (respuesta === "s") {
  entrada = parseInt(
    prompt("Ingrese el numero que desea conocer el factorial"));
  while (isNaN(entrada)) {
    alert("Tiene que ingresar solo numeros!!");
    entrada = parseInt(
      prompt("Tiene que ingresar un numero para conocer su factorial!!"));
  }
  mensaje = `El factorial de ${entrada} es = ${factorial(entrada)}`;
  alert(mensaje);
  respuesta = prompt("¿Desea conocer el factorial de otro numero? Ingrese S para seguir").toLowerCase();
}
