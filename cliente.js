class cliente
{
	constructor (n, s)
	{
		this.nombre = n;
		this.saldoEnCajas = s;
	}

	entregarDinero ()
	{
		alert("que pasaaa");
	}
}

pedro = new cliente ("Pedro", 500);
console.log ("El es " + pedro.nombre)
