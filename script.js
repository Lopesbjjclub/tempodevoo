

const apiKey = 'AIzaSyDW-J8prQrqobTyuprJNSu-jYHWuNVgCcg'; // Insira sua chave API do Google Maps aqui

// Base de dados de aeroportos (exemplo simplificado - você pode expandir isso)
const airports = {
    'SBBV': { name: 'Aeroporto Internacional de Boa Vista', lat: 2.8469, lng: -60.6922 },
    'SBCR': { name: 'Aeroporto de Corumbá', lat: -19.0119, lng: -57.6714 },
    'SBMN': { name: 'Aeroporto de Manaus - Ponta Pelada', lat: -3.1460, lng: -59.9863 },
    'SBCO': { name: 'Aeroporto de CANOAS', lat: -29.9457, lng: -51.1940 },
    'SBPA': { name: 'Aeroporto Internacional de Porto Alegre', lat: -29.9939, lng: -51.1714 },
    'SBAN': { name: 'BASE AÉREA DE ANÁPOLIS', lat: -16.2286, lng: -48.9653 },
    'SBNT': { name: 'Aeroporto Internacional de Natal', lat: -5.91142, lng: -35.2477 },
    'SBBR': { name: 'Aeroporto Internacional de Brasília', lat: -15.8697, lng: -47.9208 },
    'SBSP': { name: 'Aeroporto de Congonhas', lat: -23.6261, lng: -46.6564 },
    'SBGR': { name: 'Aeroporto Internacional de Guarulhos', lat: -23.4356, lng: -46.4731 },
    'SBRJ': { name: 'Aeroporto Santos Dumont', lat: -22.9116, lng: -43.1631 },
    'SBGL': { name: 'Aeroporto Internacional do Galeão', lat: -22.8089, lng: -43.2436 },
    'SBCT': { name: 'Aeroporto Internacional de Curitiba', lat: -25.5285, lng: -49.1758 },
    'SBFZ': { name: 'Aeroporto Internacional de Fortaleza', lat: -3.7763, lng: -38.5326 },
    'SBLO': { name: 'Aeroporto de Londrina', lat: -23.3336, lng: -51.1300 },
    'SBCF': { name: 'Aeroporto Internacional de Confins', lat: -19.6338, lng: -43.9719 },
    'SBSV': { name: 'Aeroporto Internacional de Salvador', lat: -12.9086, lng: -38.3225 },
    'SBTE': { name: 'Aeroporto de Teresina', lat: -5.0599, lng: -42.8235 },
    'SBJP': { name: 'Aeroporto Internacional de João Pessoa', lat: -7.1458, lng: -34.9511 },
    'SBIL': { name: 'Aeroporto de Ilhéus', lat: -14.8159, lng: -39.0333 },
    'SBSJ': { name: 'Aeroporto de São José dos Campos', lat: -23.2292, lng: -45.8615 },
    'SBBE': { name: 'Aeroporto Internacional de Belém', lat: -1.3793, lng: -48.4763 },
    'SBSN': { name: 'Aeroporto de Santarém', lat: -2.4228, lng: -54.7928 },
    'SBPB': { name: 'Aeroporto de Parnaíba', lat: -2.8934, lng: -41.7320 },
    'SBMQ': { name: 'Aeroporto Internacional de Macapá', lat: 0.0506, lng: -51.0722 },
    'SBSL': { name: 'Aeroporto Internacional de São Luís', lat: -2.5864, lng: -44.2361 },
    'SBMA': { name: 'Aeroporto de Marabá', lat: -5.3686, lng: -49.1380 },
    'SBCG': { name: 'Aeroporto Internacional de Campo Grande', lat: -20.4687, lng: -54.6725 },
    'SBGO': { name: 'Aeroporto Internacional de Goiânia', lat: -16.6319, lng: -49.2223 },
    'SBMG': { name: 'Aeroporto Regional de Maringá', lat: -23.4794, lng: -52.0122 },
    'SBPL': { name: 'Aeroporto de Petrolina', lat: -9.3624, lng: -40.5691 },
    'SBPS': { name: 'Aeroporto de Porto Seguro', lat: -16.4386, lng: -39.0809 },
    'SBFI': { name: 'Aeroporto Internacional de Foz do Iguaçu', lat: -25.5983, lng: -54.4872 },
    'SBJU': { name: 'Aeroporto de Juazeiro do Norte', lat: -7.2189, lng: -39.2701 },
    'SBKG': { name: 'Aeroporto de Campina Grande', lat: -7.2699, lng: -35.8964 },
    'SBUL': { name: 'Aeroporto de Uberlândia', lat: -18.8836, lng: -48.2253 },
    'SBGV': { name: 'Aeroporto de Governador Valadares', lat: -18.8952, lng: -41.9822 },
    'SBME': { name: 'Aeroporto de Macaé', lat: -22.3430, lng: -41.7665 },
    'SBCX': { name: 'Aeroporto de Caxias do Sul', lat: -29.1967, lng: -51.1887 },
    'SBVC': { name: 'Aeroporto de Vitória da Conquista', lat: -14.8628, lng: -40.8631 },
    'SBHT': { name: 'Aeroporto de Altamira', lat: -3.2539, lng: -52.2541 },
    'SBIZ': { name: 'Aeroporto de Imperatriz', lat: -5.5313, lng: -47.4582 },
    'SBJR': { name: 'Aeroporto de Jacarepaguá', lat: -22.9870, lng: -43.3713 },
    'SBCZ': { name: 'Aeroporto Internacional de Cruzeiro do Sul', lat: -7.5999, lng: -72.7695 },
    'SBEG': { name: 'Aeroporto Internacional Eduardo Gomes (Manaus)', lat: -3.0386, lng: -60.0497 },
    'SBLP': { name: 'Aeroporto de Bom Jesus da Lapa', lat: -13.2620, lng: -43.4081 },
    'SBPB': { name: 'Aeroporto Internacional de Parnaíba', lat: -2.8934, lng: -41.7320 },
    'SBCH': { name: 'Aeroporto de Chapecó', lat: -27.1342, lng: -52.6566 },
    'SBMQ': { name: 'Aeroporto Internacional de Macapá', lat: 0.0506, lng: -51.0722 },
    'SBTT': { name: 'Aeroporto de Tabatinga', lat: -4.2535, lng: -69.9383 },
    'SBAT': { name: 'Aeroporto de Alta Floresta', lat: -9.8666, lng: -56.1044 },
    'SBRF': { name: 'Aeroporto Internacional do Recife', lat: -8.1264, lng: -34.9236 },
    'SBMO': { name: 'Aeroporto Internacional de Maceió', lat: -9.5108, lng: -35.7915 },
    'SBFL': { name: 'Aeroporto Internacional de Florianópolis', lat: -27.6703, lng: -48.5478 },
    'SBGP': { name: 'Aeroporto de Viracopos (Campinas)', lat: -23.0074, lng: -47.1345 },
    'SBMN': { name: 'Aeroporto de MANAUS', lat: -3.1418, lng: -59.9863 },
    'SBSC': { name: 'BASE AÉREA DE SANTA CRUZ', lat: -22.9320, lng: -43.7195 }

};

    


// Função para calcular a distância entre dois pontos usando a fórmula de Haversine
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Função para estimar o tempo de voo com base na distância
function estimateFlightDuration(distance) {
    // Velocidade média de cruzeiro em km/h (assumindo 800 km/h)
    const cruisingSpeed = 800;
    
    // Adicionar tempo para decolagem e pouso (30 minutos)
    const takeoffLandingTime = 0.5;
    
    // Calcular tempo de voo em horas
    const flightTime = (distance / cruisingSpeed) + takeoffLandingTime;
    
    // Converter para minutos
    return Math.round(flightTime * 60);
}

// Função para mostrar sugestões de aeroportos
function showAirportSuggestions(input, suggestionsDiv) {
    const value = input.value.toUpperCase();
    const suggestions = Object.entries(airports)
        .filter(([code, airport]) => 
            code.includes(value) || airport.name.toUpperCase().includes(value)
        );

    suggestionsDiv.innerHTML = '';
    suggestionsDiv.style.display = suggestions.length ? 'block' : 'none';

    suggestions.forEach(([code, airport]) => {
        const div = document.createElement('div');
        div.className = 'airport-suggestion';
        div.textContent = `${code} - ${airport.name}`;
        div.onclick = () => {
            input.value = code;
            suggestionsDiv.style.display = 'none';
            updateFlightInfo();
        };
        suggestionsDiv.appendChild(div);
    });
}

// Configurar event listeners para os campos de aeroporto
document.addEventListener('DOMContentLoaded', () => {
    const origemInput = document.getElementById('origem');
    const destinoInput = document.getElementById('destino');
    const origemSuggestions = document.getElementById('origem-suggestions');
    const destinoSuggestions = document.getElementById('destino-suggestions');

    origemInput.addEventListener('input', () => {
        showAirportSuggestions(origemInput, origemSuggestions);
    });

    destinoInput.addEventListener('input', () => {
        showAirportSuggestions(destinoInput, destinoSuggestions);
    });

    // Fechar sugestões quando clicar fora
    document.addEventListener('click', (e) => {
        if (!origemInput.contains(e.target) && !origemSuggestions.contains(e.target)) {
            origemSuggestions.style.display = 'none';
        }
        if (!destinoInput.contains(e.target) && !destinoSuggestions.contains(e.target)) {
            destinoSuggestions.style.display = 'none';
        }
    });
});

async function getTimezoneOffset(airport) {
    const { lat, lng } = airports[airport.toUpperCase()] || { lat: 0, lng: 0 };
    const timestamp = Math.floor(new Date().getTime() / 1000);

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp}&key=${apiKey}`
        );
        const data = await response.json();

        if (data.status !== 'OK') {
            throw new Error('Não foi possível obter informações de fuso horário');
        }

        return data.rawOffset + data.dstOffset;
    } catch (error) {
        console.error('Erro ao obter dados de fuso horário:', error);
        throw error;
    }
}

function updateFlightInfo() {
    const origem = document.getElementById('origem').value.toUpperCase();
    const destino = document.getElementById('destino').value.toUpperCase();

    if (airports[origem] && airports[destino]) {
        const distance = calculateDistance(
            airports[origem].lat, airports[origem].lng,
            airports[destino].lat, airports[destino].lng
        );

        const duration = estimateFlightDuration(distance);
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;

        document.getElementById('distance').textContent = `${Math.round(distance)} km`;
        document.getElementById('duration').textContent = `${hours}h ${minutes}m`;
        document.getElementById('flight-info').style.display = 'flex';
    }
}

function formatarHorario(data) {
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC'
    });
}

function formatarData(data) {
    return data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'UTC'
    });
}







const aircrafts = {
    "A-29": { speed: 520, capacity: 1500 }, // A-29 Super Tucano
    "T-27": { speed: 457, capacity: 1000 }, // T-27 Tucano
    "T-25": { speed: 280, capacity: 500 }, // T-25 Universal
    "VC-1A": { speed: 828, capacity: 19000 }, // VC-1A (Airbus A319)
    "VC-2": { speed: 850, capacity: 13000 }, // VC-2 (Embraer 190)
    "P-95": { speed: 370, capacity: 2500 }, // P-95 Bandeirante Patrulha
    "C-97": { speed: 520, capacity: 5700 }, // C-97 Brasília
    "VC-35": { speed: 850, capacity: 2500 }, // VC-35 (Gulfstream IV)
    "VC-99": { speed: 833, capacity: 5000 }, // VC-99 (Embraer ERJ-145)
    "U-100": { speed: 830, capacity: 2700 }, // U-100 (Hawker 800)
    "C-98": { speed: 340, capacity: 1400 }, // C-98 (Cessna 208 Caravan)
    "C-105A": { speed: 480, capacity: 9250 }, // C-105A (CASA C-295)
    "KC-390": { speed: 870, capacity: 26000 }, // KC-390 Millennium
    "KC-30": { speed: 860, capacity: 45000 }, // KC-30 (Airbus A330 MRTT)
    "H-4B": { speed: 280, capacity: 1200 }, // H-4B (Sikorsky UH-60 Black Hawk)
    "VH-35": { speed: 220, capacity: 680 }, // VH-35 (Bell 206 JetRanger)
    "VH-36": { speed: 254, capacity: 1455 }, // VH-36 (Eurocopter EC135)
    "H-50": { speed: 220, capacity: 680 }, // H-50 (Bell 206B JetRanger III)
    "H-60L": { speed: 280, capacity: 1200 } // H-60L (Sikorsky UH-60L Black Hawk)
};

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Função para estimar o tempo de voo com base na distância e na velocidade da aeronave
function estimateFlightDuration(distance, aircraftSpeed) {
    // Adicionar tempo para decolagem e pouso (30 minutos)
    const takeoffLandingTime = 0.5;
    
    // Calcular tempo de voo em horas
    const flightTime = (distance / aircraftSpeed) + takeoffLandingTime;
    
    // Converter para minutos
    return Math.round(flightTime * 60);
}

// Função para atualizar as informações de voo
function updateFlightInfo() {
    const origem = document.getElementById('origem').value.toUpperCase();
    const destino = document.getElementById('destino').value.toUpperCase();
    const aeronave = document.getElementById('aeronave').value;

    if (airports[origem] && airports[destino] && aircrafts[aeronave]) {
        const distance = calculateDistance(
            airports[origem].lat, airports[origem].lng,
            airports[destino].lat, airports[destino].lng
        );

        const duration = estimateFlightDuration(distance, aircrafts[aeronave].speed);
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;

        document.getElementById('distance').textContent = `${Math.round(distance)} km`;
        document.getElementById('duration').textContent = `${hours}h ${minutes}m`;
        document.getElementById('aircraft-info').style.display = 'flex';
        document.getElementById('capacity').textContent = `Capacidade: ${aircrafts[aeronave].capacity} kg`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const aeronaveSelect = document.getElementById('aeronave');
    aeronaveSelect.addEventListener('change', updateFlightInfo);
});


async function calcularHorario() {
    const resultado = document.getElementById('resultado');
    const horaZulu = document.getElementById('hora-zulu');
    const horaLocal = document.getElementById('hora-local');
    
    try {
        const origem = document.getElementById('origem').value.toUpperCase();
        const destino = document.getElementById('destino').value.toUpperCase();
        const decolagem = document.getElementById('decolagem').value;

        if (!origem || !destino || !decolagem) {
            throw new Error('Por favor, preencha todos os campos.');
        }

        if (!airports[origem] || !airports[destino]) {
            throw new Error('Aeroporto não encontrado na base de dados.');
        }

        console.log('Calculando horário...');
        
        // Calcular distância e duração
        const distance = calculateDistance(
            airports[origem].lat, airports[origem].lng,
            airports[destino].lat, airports[destino].lng
        );
        console.log('Distância calculada:', distance);

        const durationMinutes = estimateFlightDuration(distance, 800); // Velocidade média
        console.log('Duração do voo:', durationMinutes);

        // Converter horário de decolagem
        const decolagemDate = new Date(decolagem);
        console.log('Data de decolagem:', decolagemDate);

        // Obter offsets dos fusos horários
        const origemOffset = await getTimezoneOffset(origem);
        const destinoOffset = await getTimezoneOffset(destino);

        console.log('Offset de origem:', origemOffset, 'Offset de destino:', destinoOffset);

        // Calcular horário de chegada em UTC (Zulu)
        const horarioZulu = new Date(decolagemDate.getTime() + (durationMinutes * 60000));
        console.log('Horário Zulu:', horarioZulu);

        // Calcular horário local de chegada
        const horarioLocal = new Date(horarioZulu.getTime() + destinoOffset * 1000);
        console.log('Horário Local:', horarioLocal);

        // Mostrar resultados
        resultado.classList.remove('hidden');
        horaZulu.innerHTML = `
            <strong>Horário Zulu (UTC):</strong><br>
            ${formatarData(horarioZulu)} ${formatarHorario(horarioZulu)}Z
        `;
        horaLocal.innerHTML = `
            <strong>Horário Local de Chegada:</strong><br>
            ${formatarData(horarioLocal)} ${formatarHorario(horarioLocal)}
        `;
    } catch (error) {
        resultado.classList.remove('hidden');
        horaZulu.innerHTML = `<span style="color: var(--error-color);">${error.message}</span>`;
        horaLocal.innerHTML = '';
        console.error(error);
    }
}
