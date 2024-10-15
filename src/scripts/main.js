const dataDoAniversario = new Date("Sep 3, 2025 19:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const timer = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteOAniversario = timeStampDoAniversario - timeStampAtual;

    const minutosEmMs = 1000 * 60;
    const horasEmMs = minutosEmMs * 60
    const diasEmMs = horasEmMs * 24;

    const diasAteOAniversario = Math.floor(tempoAteOAniversario / diasEmMs);
    const horasAteOAniversario = Math.floor((tempoAteOAniversario % diasEmMs) / horasEmMs);
    const minutosAteOAniversario = Math.floor((tempoAteOAniversario % horasEmMs) / minutosEmMs);
    const segundosAteOAniversario = Math.floor((tempoAteOAniversario % minutosEmMs) / 1000);

    document.getElementById('counter').innerHTML = `
        Faltam 
        <span class="counter-highlight">${diasAteOAniversario}</span> dias, 
        <span class="counter-highlight">${horasAteOAniversario}</span> horas, 
        <span class="counter-highlight">${minutosAteOAniversario}</span> minutos e 
        <span class="counter-highlight">${segundosAteOAniversario}</span> segundos para o meu ANIVERSÁRIO
    `;

    if (tempoAteOAniversario < 0) {
        clearInterval(timer);
        document.getElementById('counter').innerHTML = 'já foi!';
    }
}, 1000);