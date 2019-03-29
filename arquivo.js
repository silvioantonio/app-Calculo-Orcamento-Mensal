class Pessoa{
    constructor(nome){
        this.setNome(nome);
    }
    setNome(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
}

class Descricao{

    qtdDeLitrosPorViagem(){
        this.qtd_litros_gastos = this.getDistanciaEntreLocais().value * 1000 / this.getKilometroPorLitro();
        return this.qtd_litros_gastos.toPrecision(4);
    }

    valorDaViagem(){
        this.valor_gasto_por_viagem = this.getValorLitroCombustivel() / 1000 * this.qtdDeLitrosPorViagem();
        return parseFloat(this.valor_gasto_por_viagem).toPrecision(4);
    }

    mediaDeKilometrosPorMes(){ 
        this.resultado = this.getDistanciaEntreLocais().value * this.getQtdDiasAlmoco();
        return parseFloat(this.resultado).toPrecision(4);
    }

    valorTotalEmCombustivel(){
        this.x =  this.valorDaViagem() * this.getQtdDiasAlmoco();
        return parseFloat(this.x).toPrecision(4);
    }

    combustivelGastoProMes(){ 
        this.y = this.qtdDeLitrosPorViagem() * this.getQtdDiasAlmoco() / 1000;
        return parseFloat(this.y).toPrecision(4);
    }

    valorMensalDoAlmoço(){
        this.z =  this.getValorUnidade() * this.getQtdDiasAlmoco(); 
        return parseFloat(this.z).toPrecision(4);
    }

    almocoEGasolinaMes(){
        this.c = parseFloat(this.valorTotalEmCombustivel())+parseFloat(this.valorMensalDoAlmoço());
        return this.c.toPrecision(4);
    }

    valorTotalSaque(){
        this.v = (this.almocoEGasolinaMes() * 100) / (100 - this.getPercentuaDeSaque());
        return this.v.toPrecision(4);
    }

    setKilometroPorLitro(kilometro_por_litro){ this.kilometro_por_litro = kilometro_por_litro; }

    getKilometroPorLitro(){ return this.kilometro_por_litro; }

    setDistanciaEntreLocais(distancia_entre_locais){ this.distancia_entre_locais = distancia_entre_locais; }

    getDistanciaEntreLocais(){ return distancia_entre_locais; }

    setValoLitroCombustivel(valor_litro_combustivel){ this.valor_litro_combustivel = valor_litro_combustivel; }

    getValorLitroCombustivel(){ return this.valor_litro_combustivel; }

    setPercentualDeSaque(percentual_de_saque){ this.percentual_de_saque = percentual_de_saque; }

    getPercentuaDeSaque(){ return this.percentual_de_saque; }

    setQtdDiasAlmoco(qtd_dias_almoco){ this.qtd_dias_almoco = qtd_dias_almoco; }

    getQtdDiasAlmoco(){ return this.qtd_dias_almoco; }

    setQtdAlmocoSabados(qtd_almoco_sabados){ this.qtd_almoco_sabados = qtd_almoco_sabados; }

    getQtdAlmocoSabados(){ return this.qtd_almoco_sabados; }

    setValorUnidadeSabados(valor_unidade_sabados){ this.valor_unidade_sabados = valor_unidade_sabados; }
    
    getValorUnidadeSabados(){ return this.valor_unidade_sabados; }
    
    setValorUnidade(valor_unidade){ this.valor_unidade = valor_unidade; }
    
    getValorUnidade(){ return this.valor_unidade; }

}

function remover(){
	var tabela=document.getElementsByTagName("table")[0];
	if(tabela)
		tabela.parentNode.removeChild(tabela);
}

let descricao = new Descricao();

function start(){

    remover()
    
    let nome = document.getElementById('nome');
    let kilometro_por_litro = document.getElementById('km_por_litro').value;
    let distancia_entre_locais = document.getElementById('distancia_entre_locais').value;
    let valor_litro_combustivel = document.getElementById('valor_litro_combustivel').value;
    let percentual_de_saque = document.getElementById('percentual_de_saque').value;
    let qtd_dias_almoco = document.getElementById('qtd_dias_almoco').value;
    let qtd_almoco_sabados = document.getElementById('qtd_almoco_sabados').value;
    let valor_unidade_sabados = document.getElementById('valor_unidade_sabados').value;
    var valor_unidade = document.getElementById('valor_unidade').value;

    let pessoa = new Pessoa(nome.value);

    descricao.setKilometroPorLitro(parseFloat(kilometro_por_litro));
    descricao.setDistanciaEntreLocais(parseFloat(distancia_entre_locais));
    descricao.setValoLitroCombustivel(parseFloat(valor_litro_combustivel));
    descricao.setPercentualDeSaque(parseFloat(percentual_de_saque));
    descricao.setQtdDiasAlmoco(parseFloat(qtd_dias_almoco));
    descricao.setQtdAlmocoSabados(parseFloat(qtd_almoco_sabados));
    descricao.setValorUnidadeSabados(parseFloat(valor_unidade_sabados));
    descricao.setValorUnidade(parseFloat(valor_unidade));



    let resultado = document.getElementById('resultado');
    let tabela = document.createElement('table');
    let linha = document.createElement('tr');
    tabela.appendChild(linha);

    linha.appendChild(criarCelula('th','Qtd litros por viagem(ml)'));
    linha.appendChild(criarCelula('th','Valor gasto por viagem(R$)'));
    linha.appendChild(criarCelula('th','Media de Kilometros Por Mes'));
    linha.appendChild(criarCelula('th','Valor total da viagem por mes(R$)'));
    linha.appendChild(criarCelula('th','combustivel Gasto por Mes(L)'));
    linha.appendChild(criarCelula('th','qtd de almoco sabados'));
    linha.appendChild(criarCelula('th','valor mensal do almoço(R$)'));
    linha.appendChild(criarCelula('th','valor do % de saque(R$)'));
    linha.appendChild(criarCelula('th','valor do almoço + gasolina(R$)'));
    linha.appendChild(criarCelula('th','valor total(fora sabados)(R$)'));

    tabela.appendChild(criarLinha('td',descricao));

    resultado.appendChild(tabela);
}

function criarLinha(tipo,obj){
    let linha = document.createElement('tr');
    linha.appendChild(criarCelula(tipo, obj.qtdDeLitrosPorViagem()));
    linha.appendChild(criarCelula(tipo, obj.valorDaViagem()));
    linha.appendChild(criarCelula(tipo, obj.mediaDeKilometrosPorMes()));
    linha.appendChild(criarCelula(tipo, obj.valorTotalEmCombustivel()));
    linha.appendChild(criarCelula(tipo, obj.combustivelGastoProMes()));
    linha.appendChild(criarCelula(tipo, obj.getQtdAlmocoSabados()));
    linha.appendChild(criarCelula(tipo, obj.valorMensalDoAlmoço()));
    linha.appendChild(criarCelula(tipo, obj.valorTotalSaque() * obj.getPercentuaDeSaque() / 100));
    linha.appendChild(criarCelula(tipo, obj.almocoEGasolinaMes()));
    linha.appendChild(criarCelula(tipo, obj.valorTotalSaque()));
    return linha;
}

function criarCelula(tipo, texto){
    let celula = document.createElement(tipo);
    celula.appendChild(document.createTextNode(texto));

    return celula;
}
