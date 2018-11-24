/*
Creando un cajero automaatico

Buyer persona: 
Marcos, en chile
venezolano, hombre
joven

------
Recursos

50: 3
20: 2
10: 2

imput:
Dame 30
Dame 20
Dame 100



Resultados:

0 Crear clase billetes
1. Algoritmo para dar dinero con menor cantidad de billetes
2 Algoritmo para dar error si no tiene dinero suficiente
3 Algoritmo para dar error si no tiene cambio para un dinero suficiente
4 Interfaz gráfica de usuario

¿Como convierto en instrucciones para el pc lo que mi cerebro hace intuitivamente?

1.

Division entre 50
coger resultado, capturar residuo
capturar cantidad de dinero que uso
dividir entre 20 con el residuo de 50
dividir entre 10 con el residuo de 20
cuando el dinero entregado vs el dinero es cero el algoritmo acaba
mostrar resultado al usuario

Var
cantidad de billetes solicitado
cantidad de billetes tengo
tipo de billetes que tengo
residuos
iteradorBilletes
dinero solicitado



Clase billete
	
	valor billete
	cantidad que tengo

Caja = array [ ]

50 3
20 2
10 2

atributo valor
atributo cantidad


--
var dinero solicitado
var entregados = []


por cada billete de la variable caja

b of caja {}

la iteracion se aplica mientras dinero sea mayor a 0

dinero > 0 , sigue operando

--

math.floor

piensa algoritmicamente

Principios de programacion

1 Un programador empieza con el fin en mente, con su vision
2 Un programador convierte un problema grande en problemas pequeños
3 Un programador prueba su codigo sobre la marcha
4
--
RETOS
Este algoritmo es optimizable, optimizar al max
¿Como lo puedo hacer más simple?

*/

console.log("el codigo funciona");

//Objeto billete

class billete

 {
 	constructor (q, v) 
 	{
 		this.cantidad = q; //Cantidad de billetes en caja, 1, 2 ,3
 		this.valor = v; //valor del billete 50, 20 , 10
 	}



}

//Aqui estoy creando una caja array donde hare una coleccion con todos mis billetes

var caja = [];
caja.push(new billete( Infinity, 100));
caja.push(new billete( 3000, 50));
caja.push(new billete (5, 20));
caja.push(new billete( 10, 10)); //Push es meter algo en la caja, empujarlo
caja.push(new billete( 20, 5));
caja.push(new billete( 50, 2));
caja.push(new billete( 100, 1));
console.log (caja);




//El usuario me pide dinero

 
	var boton = document.getElementById("botonDinero"); // obteniendo datos del boton
	boton.addEventListener("click", entregarDinero );	
	//Convertir texto plano en numero entero
	

//Metodo que se active para entregar dinero

var entregado = []; //coleccion de billetes entrgados, papeles
var division = 0;
var disponible = 0; //disponible == papeles
var dinero = 0;
var resultado = document.getElementById("resultado");

 function entregarDinero ()
	
	{
		var dineroPedido = document.getElementById("dineroPedido");
		dinero = parseInt(dineroPedido.value);
		//Todas las cajas de texto entregan texto
		//Conviertelo a nnumero
		
		for (var iteradorBilletes of caja)

		{
			console.log(iteradorBilletes) 

			if (dinero > 0)
			{
				division = Math.floor (dinero / iteradorBilletes.valor );
				console.log("Resultado Division con los billetes de " + iteradorBilletes.valor + " Es igual a " +  division);

				if (division > iteradorBilletes.cantidad )
				 {
				 	disponible = iteradorBilletes.cantidad 

				 }
				 else 
				 {
				 	disponible = division;
				 }

				entregado.push(new billete (disponible, iteradorBilletes.valor ) );
				dinero = dinero -  (iteradorBilletes.valor * disponible);
				
			} 
		}
		if (dinero > 0 )
		{
			console.log ("Soy un cajero pobre y no tengo plata :( ");
			resultado.innerHTML = "Soy un cajero pobre y no tengo plata :(", entregado;
		}
		else 
		{

			for ( var e of entregado)
			{
				console.log (e.cantidad + " billetes de $ " + e.valor);

				if (e.cantidad > 0) 
				{
					// += la variable es igual a su valor + lo que habra despues del operador
					resultado.innerHTML += "<br>" + e.cantidad + " billetes de $ " + e.valor;
				}
				
				//InnerHTML es un atributo

				//Appendchild
				//Crear etiqueta vacia y meter cosas ahi
				//GetElementbyId

				//Document.write es una mala practica :O
				//innerHTML
			}
		

		}
	 }

	 //Hacer codigo de si pide algo que no tengo
	 //Es mala ptactica dejar nombres de variable sin significado



/*
Aprendi a usar innerHTML



*/