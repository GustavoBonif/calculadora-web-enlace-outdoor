function showCalculator(calculatorId) {
    // Esconder todos os calculadores
    const calculators = document.querySelectorAll('.calculator-container');
    calculators.forEach(calculator => {
        calculator.style.display = 'none';
    });

    // Exibir o calculador específico
    const selectedCalculator = document.getElementById(calculatorId);
    selectedCalculator.style.display = 'block';
}

function calculateShannon() {
    // Obter valores dos campos de entrada
    const bandwidth = parseFloat(document.getElementById('bandwidth').value);
    const snr = parseFloat(document.getElementById('snr').value);

    // Calcular a capacidade máxima do canal usando a fórmula de Shannon
    const capacity = bandwidth * Math.log2(1 + Math.pow(10, snr / 10));

    // Exibir o resultado
    document.getElementById('shannonResult').innerHTML = `Capacidade Máxima de Canal: ${capacity.toFixed(2)} bps`;
}

function calculateNyquist() {
    // Obter valores dos campos de entrada
    const signalBandwidth = parseFloat(document.getElementById('signalBandwidth').value);
    const modulation = parseFloat(document.getElementById('modulation').value);

    // Calcular a taxa de Nyquist usando a fórmula de Nyquist
    const nyquistRate = 2 * signalBandwidth * modulation;

    // Exibir o resultado
    document.getElementById('nyquistResult').innerHTML = `Taxa de Nyquist: ${nyquistRate.toFixed(2)} bps`;
}

function convertMWtodBm() {
    // Obter o valor do campo de entrada
    const powerMW = parseFloat(document.getElementById('powerMW').value);

    // Calcular a potência em dBm usando a fórmula de conversão
    const powerdBm = 10 * Math.log10(powerMW);

    // Exibir o resultado
    document.getElementById('conversionMWdBmResult').innerHTML = `Potência em dBm: ${powerdBm.toFixed(2)} dBm`;
}

function convertdBmtoMW() {
    // Obter o valor do campo de entrada
    const powerdBm = parseFloat(document.getElementById('powerdBm').value);

    // Calcular a potência em mW usando a fórmula de conversão
    const powerMW = Math.pow(10, powerdBm / 10);

    // Exibir o resultado
    document.getElementById('conversiondBmMWResult').innerHTML = `Potência em mW: ${powerMW.toFixed(2)} mW`;
}

function calculateEIRP() {
    // Obter valores dos campos de entrada
    const transmissionPower = parseFloat(document.getElementById('transmissionPower').value);
    const antennaGain = parseFloat(document.getElementById('antennaGain').value);
    const cableLoss = parseFloat(document.getElementById('cableLoss').value);

    // Calcular EIRP usando a fórmula
    const eirp = transmissionPower + antennaGain - cableLoss;

    // Exibir o resultado
    document.getElementById('eirpResult').innerHTML = `EIRP: ${eirp.toFixed(2)} dBm`;
}

function calculateFSLP() {
    // Obter valores dos campos de entrada
    const distance = parseFloat(document.getElementById('distance').value);
    const frequency = parseFloat(document.getElementById('frequency').value);

    // Calcular FSLP usando a fórmula
    const fslp = 32.4 + 20 * Math.log10(distance) + 20 * Math.log10(frequency);

    // Exibir o resultado
    document.getElementById('fslpResult').innerHTML = `FSLP: ${fslp.toFixed(2)} dB`;
}

function calculateRSL() {
    // Obter valores dos campos de entrada
    const transmissionPowerRSL = parseFloat(document.getElementById('transmissionPowerRSL').value);
    const antennaGainTX = parseFloat(document.getElementById('antennaGainTX').value);
    const cableLossTX = parseFloat(document.getElementById('cableLossTX').value);
    const freeSpaceLossPath = parseFloat(document.getElementById('freeSpaceLossPath').value);
    const antennaGainRX = parseFloat(document.getElementById('antennaGainRX').value);
    const cableLossRX = parseFloat(document.getElementById('cableLossRX').value);

    // Calcular RSL usando a fórmula
    const rsl = transmissionPowerRSL + antennaGainTX - cableLossTX - freeSpaceLossPath + antennaGainRX - cableLossRX;

    // Exibir o resultado
    document.getElementById('rslResult').innerHTML = `RSL: ${rsl.toFixed(2)} dBm`;
}

function calculateFresnelZone() {
        // Obter valores dos campos de entrada
        const transmitterDistance = parseFloat(document.getElementById('transmitterDistance').value);
        const receiverDistance = parseFloat(document.getElementById('receiverDistance').value);
        const frequencyFresnel = parseFloat(document.getElementById('frequencyFresnel').value);
        const linkDistance = parseFloat(document.getElementById('linkDistance').value);

        // Calcular o raio da zona de Fresnel usando a fórmula
        const fresnelZoneRadius = 550 * Math.sqrt((transmitterDistance * receiverDistance) / (linkDistance * frequencyFresnel));

        // Exibir o resultado
        document.getElementById('fresnelZoneResult').innerHTML = `Raio da Zona de Fresnel: ${fresnelZoneRadius.toFixed(2)} m`;
    }

