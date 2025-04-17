const robo1 = document.getElementById('robo1');
const robo2 = document.getElementById('robo2');
const modal = document.getElementById('modalVencedor');
const botaoModal = document.getElementById('botaoProximoRound');
const modalText = document.getElementById('modalTexto');

let robo1Vida;
let robo2Vida;
let colisao1;
let colisao2;

const alturaArena = 680;
const larguraArena = 650;
const tamanhoRobo = 50;

resetGame(1);

document.addEventListener('keydown', (event) => {
    moverRobo(event.key);
});

botaoModal.addEventListener("click", function () {
    resetGame(1);
});

function moverRobo(key) {
    const velocidade = 20;
    if (modal.style.display === "block") {
        return;
    }

    // Inicializar valores padrão se não existirem
    if (!robo1.style.top) robo1.style.top = "50px";
    if (!robo1.style.left) robo1.style.left = "50px";
    if (!robo2.style.top) robo2.style.top = "580px";
    if (!robo2.style.left) robo2.style.left = "550px";

    switch (key) {
        case 'w':
            robo1.style.top = `${Math.max(0, parseInt(robo1.style.top) - velocidade)}px`;
            break;
        case 's':
            robo1.style.top = `${Math.min(alturaArena - tamanhoRobo, parseInt(robo1.style.top) + velocidade)}px`;
            break;
        case 'a':
            robo1.style.left = `${Math.max(0, parseInt(robo1.style.left) - velocidade)}px`;
            break;
        case 'd':
            robo1.style.left = `${Math.min(larguraArena - tamanhoRobo, parseInt(robo1.style.left) + velocidade)}px`;
            break;
        case 'ArrowUp':
            robo2.style.top = `${Math.max(0, parseInt(robo2.style.top) - velocidade)}px`;
            break;
        case 'ArrowDown':
            robo2.style.top = `${Math.min(alturaArena - tamanhoRobo, parseInt(robo2.style.top) + velocidade)}px`;
            break;
        case 'ArrowLeft':
            robo2.style.left = `${Math.max(0, parseInt(robo2.style.left) - velocidade)}px`;
            break;
        case 'ArrowRight':
            robo2.style.left = `${Math.min(larguraArena - tamanhoRobo, parseInt(robo2.style.left) + velocidade)}px`;
            break;
    }
    checarColisao(key);
}

function checarColisao(key) {
    const robo1Rect = robo1.getBoundingClientRect();
    const robo2Rect = robo2.getBoundingClientRect();

    if (verificaColisao(robo1Rect, robo2Rect)) {
        const dano1 = Math.floor(Math.random() * 21);
        const dano2 = Math.floor(Math.random() * 21);
        robo1Vida = Math.max(0, robo1Vida - dano1);
        robo2Vida = Math.max(0, robo2Vida - dano2);

        if (key === "a" || key === "d" || key === "w" || key === "s") {
            colisao1++;
        } else {
            colisao2++;
        }

        updateUI();
        resetGame();

        if (robo1Vida === 0 || robo2Vida === 0 || colisao1 >= 5 || colisao2 >= 5) {
            setTimeout(() => {
                declararVencedor();
            }, 200);
        }
    }
}

function verificaColisao(rect1, rect2) {
    return !(rect1.right < rect2.left ||
             rect1.left > rect2.right ||
             rect1.bottom < rect2.top ||
             rect1.top > rect2.bottom);
}

function updateUI() {
    document.getElementById('vida1').innerText = `Vida: ${robo1Vida}`;
    document.getElementById('vida2').innerText = `Vida: ${robo2Vida}`;
    document.getElementById('colisoesRobo').innerHTML = `Colisões <br> ${colisao1} | ${colisao2}`;
}

function declararVencedor() {
    const vencedor = robo1Vida > robo2Vida ? 'Sentinela' : robo2Vida > robo1Vida ? 'PixelsBot' : 'Empate';
    modal.style.display = "block";
    if (vencedor !== "Empate") {
        modalText.innerHTML = `O vencedor é:<br> ${vencedor}`;
    } else {
        modalText.innerHTML = `Deu empate!`;
    }
}

function resetGame(ResetAll) {
    robo1.style.top = "50px";
    robo1.style.left = "50px";
    robo2.style.top = "580px";
    robo2.style.left = "550px";

    if (ResetAll === 1) {
        modal.style.display = "none";
        colisao1 = 0;
        colisao2 = 0;
        robo1Vida = 100;
        robo2Vida = 100;
    }
    updateUI();
}