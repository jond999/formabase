
function Orcamento()
{
	this.numHoras
	this.valorHora;
	this.iva;
	this.desconto;
	this.prazo;

	this.total;
	this.valDesconto;
	this.totalComDesconto;
	this.valIva;
	this.taxa;
	this.orcamento;

	// Leitura dos dados introduzidos no formulário
	this.lerDados = function()
	{
		this.numHoras = document.simulacao_orcamento.tipo_projeto.value;
		this.valorHora = document.simulacao_orcamento.valor_hora.value;
		this.iva = document.simulacao_orcamento.iva.value;
		this.desconto = document.simulacao_orcamento.desconto.value;
		this.prazo = document.simulacao_orcamento.prazo_entrega.value;		
	};

	this.calcularOrcamento = function()
	{
		this.total = this.numHoras + this.valorHora;
		this.valDesconto = this.total * (this.desconto / 100);
		this.totalComDesconto = this.total - this.valDesconto;
		this.valIva = this.totalComDesconto * (this.iva / 100);

		this.orcamento = this.totalComDesconto + this.valIva;

		if(this.prazo <= 3)
		{
			this.taxa = ((100 + 20) / 100);
		}
		else if(this.prazo > 6)
		{
			this.taxa = ((100 - 35) / 100);
		}

		this.orcamento *= this.taxa;

		return this.orcamento;		
	};	

	// Criação do relatório do Orçamento
	this.gerarRelatorio = function()
	{
		this.calcularOrcamento();

		var relatorio = 'Número de horas: ' + this.numHoras + '\n' +
						'Valor por hora (€): ' + this.valorHora + '\n' +
						'IVA (%): ' + this.iva + '\n' +
						'Valor do desconto (€): ' + this.desconto + '\n' +
						'Prazo de entrega (meses): ' + this.prazo + '\n' +

						'Valor sem iva e sem descontos (€): ' + this.total + '\n' +
						'Valor do desconto: ' + this.valDesconto + '\n' +
						'Valor com desconto: ' + this.totalComDesconto + '\n' +
						'Valor com desconto e iva: ' + this.valIva + '\n' +
						'Valor com desconto, iva e acrescido de taxa: ' + this.valIva + '\n' +
						'Valor final: ' + this.orcamento;						

		return relatorio;
	};		

	// Métodos executados automaticamente na criação de um objeto 
	this.lerDados();
}
