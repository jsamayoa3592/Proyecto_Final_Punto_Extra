var precio_base = 2000

var edad_18 = 0.1
var edad_25 = 0.2
var edad_50 = 0.3

var hijos_recargo = 0.2

var continuar = true

while(continuar){

var recargo = 0
var recargo_total = 0
var precio_final = 0

var nombre = prompt("Ingrese su nombre o escriba Salir para terminar")

if(nombre.toLowerCase() == "salir"){
  alert("Gracias por usar el sistema")
  break
}

var edad = prompt("¿Cuantos años tiene?")
var edad_numero = parseInt(edad)

if(edad_numero < 18){
  alert("Solo mayores de edad pueden cotizar")
  continue
}

var hijos = prompt("¿Cuántos hijos tiene?")
var cantidad_hijos = parseInt(hijos)

var salario = parseFloat(prompt("Ingrese su salario mensual"))
var propiedades = parseInt(prompt("¿Cuántas propiedades tiene?"))

if(edad_numero >=18 && edad_numero <25){
  recargo_total += precio_base * edad_18
}
else if(edad_numero >=25 && edad_numero <50){
  recargo_total += precio_base * edad_25
}
else{
  recargo_total += precio_base * edad_50
}

recargo_total += precio_base * hijos_recargo * cantidad_hijos
recargo_total += precio_base * 0.35 * propiedades
recargo_total += salario * 0.05

precio_final = precio_base + recargo_total

alert("Para el asegurado " + nombre)
alert("El total a pagar es: Q" + precio_final)

}
