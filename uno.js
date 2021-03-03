
function mostrar()
{
	/*Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/

let producto;
let precio;
let unidades;
let inflamable;
let marca;
let seguir = "s";
let prom;
let contalc = 0;
let contiac = 0;
let contquat = 0;

do{
	producto = prompt("Ingrese el producto(ALCOHOL, IAC o  QUAT").toUpperCase();
	while(producto != "ALCOHOL" && producto != "IAC" && producto != "QUAT"){
		producto = prompt("Dato no válido. Ingrese el producto(ALCOHOL, IAC o  QUAT ").toUpperCase();
	}

	precio = parseInt(prompt("Ingrese un precio entre 100 y 300:"));
	while(!(precio >= 100 && precio<= 300)){
		precio = parseInt(prompt("Dato no válido. ingrese un precio entre 100 y 300:"));
	}


	unidades = parseInt(prompt("Ingrese la cantidad de unidades(cantidad válida entre 0 y 1000):"));
	while(!(unidades >= 0 && unidades<=1000)){
		unidades = parseInt(prompt("Dato no válido. Ingrese la cantidad de unidades(cantidad válida entre 0 y 1000): "));

	}

	inflamable = prompt("Ingrese el tipo de inflamable que es su producto('ignífugo', 'combustible', 'explosivo'):");
	

	marca = prompt("Ingrese la marca del producto:");


	if(producto == "ALCOHOL"){
		contalc++;
	}
	else if(producto == "IAC"){
		contiac++;
	}
	else{ 
		contquat++;
	}

	prom = 










	seguir = prompt("Desea seguir ingresando productos?  s/n");

}while(seguir == "s" )





}
