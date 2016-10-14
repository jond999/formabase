function Emprestimo()
{
	// Atributos necessários ao cálculo da prestação
	this.valor
	this.taxaJuro;
	this.prazo;
	this.nomeUtilizador;

	// Dados calculados
	this.valorJuros;
	this.valorTotal;
	this.numMeses;
	this.prestacao;

	// Leitura dos dados introduzidos no formulário
	this.lerDados = function()
	{
		this.nomeUtilizador = document.simulacao_emprestimo.nome_completo.value;
		this.valor = parseInt(document.simulacao_emprestimo.valor_emprestimo.value);
		this.taxaJuro = parseFloat(document.simulacao_emprestimo.taxa_juro.value);
		this.prazo = parseInt(document.simulacao_emprestimo.prazo_anos.value);
	};

	// Cálculo da prestação do empréstimo
	this.calcularPrestacao = function()
	{
		this.valorJuros = (this.taxaJuro / 100) * this.valor;
		this.valorTotal = this.valorJuros + this.valor;
		this.numMeses = this.prazo * 12;
		this.prestacao = this.valorTotal / this.numMeses;
	};	

	// Criação do relatório do Empréstimo
	this.gerarRelatorio = function()
	{
		this.calcularPrestacao();

		var relatorio = 'Nome do Cliente: ' + this.nomeUtilizador + '\n' +
						'Valor inicial do empréstimo: ' + this.valor + '\n' +
						'Valor dos juros: ' + this.valorJuros + '\n' +
						'Valor total do empréstimo: ' + this.valorTotal + '\n' +
						'Número de prestações: ' + this.numMeses + '\n' +
						'Prestação mensal: ' + this.prestacao;

		return relatorio;
	};		

	// Métodos executados automaticamente na criação de um objeto 
	this.lerDados();
}