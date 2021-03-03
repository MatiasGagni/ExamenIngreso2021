function mostrar()
{
	/*Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/


let nombre;
let estadocivil;
let edad;
let tempcorporal
let sexo;
let seguir = "s" 
let precio = 600
let contviu;
let nomMin;
let edadMin;
let preciototal;
let contpasajeros;
let porcentaje;
let contmayores;
let contmenores;
let preciodesc = 0;


do{

	nombre = prompt("Ingrese su nombre:");

	estadocivil = prompt("Ingrese su estado civil('soltero', 'casado' o 'viudo')").toLowerCase();

	edad = parseInt(prompt("Ingrese la edad:"));
	while(!(edad>= 18)){
		edad = parseInt(prompt("Usted no puede viajar. Reinngrese su edad si es un adulto:"));
	}

	tempcorporal = parseInt(prompt("Ingrese su temperatura corporal:"));
	while(!(tempcorporal>= 0)){
		tempcorporal = parseInt(prompt("Dato no válido. Ingrese su temperatura corporal:"));
		
	}
	sexo = prompt("Ingrese su sexo (femenino(f)/masculino(m)):");
	while( sexo != "f" && sexo != "m"){
		sexo = prompt("Dato no válido. Ingrese su sexo (femenino(f)/masculino(m)): ");
	}

	if( estadocivil == "viudo" && edad>= 60){
		contviu++;
	}

	if(sexo == "f" && estadocivil == "sotero"){
		if(edad<edadMin){
			edadMin = edad;
			nomMin = nombre;
		}
	}
	
	if(edad>+18){
		contpasajeros++;
	}
	preciototal = precio * contpasajeros;

	if(edad>= 60){
		contmayores++;

	}else{
		contmenores++;
		
	}

	porcentaje = contmayores/100*contpasajeros;

	if(porcentaje>50){
		preciodesc = preciototal * 0.25;


	}


















	seguir = prompt("Desea seguir ingresando personas?  s/n");
}while (seguir == "s");

console.log("La cantidad de personas viudas de más de 60 años es:" + contviu + "<br>" )
console.log("El nombre de la mujer soltera más joven es:" + nomMin +"y tiene" + edadMin + "años" + "<br>" )
console.log("El precio del viaje total sin descuento es:" + preciototal + "<br>" )
if(preciodesc != 0){
console.log("El precio final con descuento es de:" + preciodesc + "<br>" )
}







}
