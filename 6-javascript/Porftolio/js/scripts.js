function simularOrcamento()
{
	var numHoras = document.simulacao_orcamento.tipo_projeto.value;
	var valorHora = document.simulacao_orcamento.valor_hora.value;
	var iva = document.simulacao_orcamento.iva.value;
	var desconto = document.simulacao_orcamento.desconto.value;
	var prazo = document.simulacao_orcamento.prazo_entrega.value;

	document.simulacao_orcamento.resultado.value = calcularOrcamento(numHoras, valorHora, iva, desconto, prazo) + ' €';	
}

function calcularOrcamento(numHoras, valorHora, iva, desconto, prazo)
{
	var total = numHoras + valorHora;
	var valDesconto = total * (desconto / 100);
	var totalComDesconto = total - valDesconto;
	var valIva = totalComDesconto * (iva / 100);

	var orcamento = totalComDesconto + valIva;

	if(prazo <= 3)
		orcamento *= ((100 + 20) / 100)
	else if(prazo > 6)
		orcamento *= ((100 - 35) / 100)

	return orcamento;
}
