function exibirCalculo(formulaSelecionada) {
    let areaCalculoList = document.querySelectorAll('.area-calculo');
    areaCalculoList.forEach(areaCalculo => {
        areaCalculo.style.display = 'none';
    });

    let calculoSelecionado = document.getElementById(formulaSelecionada);
    calculoSelecionado.style.display = 'block';
}

function calcularShannon() {
    let larguraBanda = parseFloat(document.getElementById('larguraBanda').value);
    let sinalRuido = parseFloat(document.getElementById('sinalRuido').value);
    let capMaxCanal = larguraBanda * Math.log2(1 + sinalRuido);

    document.getElementById('resultadoShannon').innerHTML = `Capacidade Máxima de Canal: ${capMaxCanal.toFixed(2)} bps`;
}

function calcularNyquist() {
    let larguraBandaSinal = parseFloat(document.getElementById('larguraBandaSinal').value);
    let modulacao = parseFloat(document.getElementById('modulacao').value);
    let taxaNyquist = 2 * larguraBandaSinal * modulacao;
    
    document.getElementById('resultadoNyquist').innerHTML = `Taxa de Nyquist: ${taxaNyquist.toFixed(2)} bps`;
}

function calcularEIRP() {
    let potenciaTransmissao = parseFloat(document.getElementById('potenciaTransmissaoEIRP').value);
    let ganhoAntena = parseFloat(document.getElementById('ganhoAntena').value);
    let perdaCabo = parseFloat(document.getElementById('perdaCabo').value);
    let eirp = potenciaTransmissao + ganhoAntena - perdaCabo;
    
    document.getElementById('resultadoEirp').innerHTML = `EIRP: ${eirp.toFixed(2)} dBm`;
}

function calcularFSLP() {
    let distancia = parseFloat(document.getElementById('distancia').value);
    let frequencia = parseFloat(document.getElementById('frequenciaFslp').value);
    let fslp = 32.4 + 20 * Math.log10(distancia) + 20 * Math.log10(frequencia);
    
    document.getElementById('resultadoFslp').innerHTML = `FSLP: ${fslp.toFixed(2)} dB`;
}

function calcularRSL() {
    let potenciaTransmissao = parseFloat(document.getElementById('potenciaTransmissaoRSL').value);
    let ganhoAntenaTrans = parseFloat(document.getElementById('ganhoAntenaTrans').value);
    let perdaCaboTX = parseFloat(document.getElementById('perdaCaboTX').value);
    let perdaEspacoLivre = parseFloat(document.getElementById('perdaEspacoLivre').value);
    let ganhoAntenaRecep = parseFloat(document.getElementById('ganhoAntenaRecep').value);
    let perdaCaboRX = parseFloat(document.getElementById('perdaCaboRX').value);
    let rsl = potenciaTransmissao + ganhoAntenaTrans - perdaCaboTX - perdaEspacoLivre + ganhoAntenaRecep - perdaCaboRX;

    document.getElementById('resultadoRsl').innerHTML = `RSL: ${rsl.toFixed(2)} dBm`;
}

function calcularFresnelZone() {
    let distanciaTransmissor = parseFloat(document.getElementById('distanciaTransmissor').value);
    let distanciaRecebedor = parseFloat(document.getElementById('distanciaRecebedor').value);
    let distanciaEnlace = parseFloat(document.getElementById('distanciaEnlace').value);
    let frequencia = parseFloat(document.getElementById('frequenciaFresnel').value);
    let raioZonaFresnel = 550 * Math.sqrt((distanciaTransmissor * distanciaRecebedor) / (distanciaEnlace * frequencia));
    
    document.getElementById('resultadoZonaFresnel').innerHTML = `Raio da Zona de Fresnel: ${raioZonaFresnel.toFixed(2)} m`;
}

function converterMWparadBm() {
    let valorMW = parseFloat(document.getElementById('valorMW').value);
    let valordBm = 10 * Math.log10(valorMW);

    document.getElementById('resultadoMWparadBm').innerHTML = `Potência em dBm: ${valordBm.toFixed(2)} dBm`;
}

function converterdBmparaMW() {
    let valordBm = parseFloat(document.getElementById('valordBm').value);
    let valorMW = Math.pow(10, valordBm / 10);
    
    document.getElementById('resultadodBmparaMW').innerHTML = `Potência em mW: ${valorMW.toFixed(2)} mW`;
}