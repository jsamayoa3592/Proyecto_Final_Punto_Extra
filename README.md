# Proyecto Final - Puntos Extra

Este proyecto consiste en un programa en JavaScript que realiza la cotización de un seguro.

El programa parte de un precio base y calcula el total a pagar sumando diferentes recargos según la información proporcionada por el usuario.

## Funcionamiento del programa

1. El programa solicita el nombre del usuario.
2. Si el usuario escribe "Salir", el programa termina.
3. Solicita la edad del asegurado.
4. Si es menor de edad, no se permite realizar la cotización.
5. Solicita la cantidad de hijos.
6. Solicita el salario mensual.
7. Solicita la cantidad de propiedades.
8. Calcula los recargos correspondientes.
9. Muestra el total a pagar.
10. Permite realizar nuevas cotizaciones hasta que se escriba "Salir".

## Recargos incluidos

- Recargo por edad del asegurado.
- Recargo por hijos.
- Recargo del 35% del precio base por cada propiedad.
- Recargo del 5% sobre el salario del asegurado.

## Aspectos considerados

- Solo pueden cotizar personas mayores de 18 años.
- Los recargos se acumulan y se suman al precio base.
- El programa permite realizar múltiples cotizaciones.

## Posibles mejoras

- Validar mejor los datos ingresados por el usuario.
- Evitar que se ingresen números negativos.
- Mejorar la presentación del resultado final.
- Implementar una interfaz gráfica en lugar de usar prompt y alert.
