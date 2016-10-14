function Carro(matricula, marca, velocidade)
{
	this.matricula = matricula;
	this.marca = marca;
	this.velocidade = velocidade;

	this.travar = function()
	{
		this.velocidade = 0;
	};

	this.acelerar = function()
	{
		this.velocidade += 10;
	};	

	this.mostrar = function()
	{
		document.write('<p>');
		document.write('<br>Marca -> ' + this.marca);	
		document.write('<br>Matrícula -> ' + this.matricula);	
		document.write('<br>Velocidade -> ' + this.velocidade);	
		document.write('</p>');
	};		
}