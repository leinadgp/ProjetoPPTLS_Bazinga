const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "papper",
    SCISSORS: "scissors",
    LIZARD: "lizard",
    SPOCK: "spock"
}

let scoreSheldon = 0;
let scorePlayer = 0;

    const cxResult = document.querySelector(".container-result");
    const cxSheldon = document.querySelector(".container-sheldon");
    const cxPlayer = document.querySelector(".container-player");
    const btnStart = document.querySelector(".btn-star");
    const btnStartBody = document.querySelector(".btn-star-body");

// Regras do jogo, visibility controlada
const btnRules = document.querySelector(".btn-game-rules");
let containerRules = document.querySelector(".rules");
let isVisible = false;

btnRules.addEventListener('click', function () {
    const screenWidth = window.innerWidth;
    let hiddenRight, visibleRight;

    if (screenWidth <= 800) {
        hiddenRight = "-100%";   // Esconde completamente no mobile
        visibleRight = "35%";     // Aparece com margem de 5% no mobile
    } else {
        hiddenRight = "-755px";  // Desktop valor
        visibleRight = "75px";   // Desktop valor
    }

    if (isVisible) {
        containerRules.style.right = hiddenRight;
        containerRules.style.visibility = "hidden";
        setTimeout(() => {
            containerRules.style.display = "none";
        }, 2000);
    } else {
        containerRules.style.display = "block";
        setTimeout(() => {
            containerRules.style.right = visibleRight;
            containerRules.style.visibility = "visible";
        }, 10);
    }
    isVisible = !isVisible;
});

// Função de verificação do resultado

    function checkResult(resultPlayer, resultSheldon) {

    let messagePlayer = ""
    let messageSheldon = ""
    let messageResult = ""
    //caso vitoria do Player
    // Vitoria Player pedra contra tesoura
    if (resultPlayer === GAME_OPTIONS.ROCK && resultSheldon === GAME_OPTIONS.SCISSORS) {
        messagePlayer = " Minha pedra quebra sua tesoura, Sheldon!"
        messageSheldon = "A lógica da tesoura foi obliterada por uma simples rocha... intrigante."
        scorePlayer++
        messageResult = `   Pedra Ganha de Tesoura<br/><br/>
                            Parabens você Ganhou`

    }
    // Vitoria Player pedra contra tesoura
    if (resultPlayer === GAME_OPTIONS.ROCK && resultSheldon === GAME_OPTIONS.LIZARD) {
        messagePlayer = "Pedra esmaga lagarto!"
        messageSheldon = "Isso foi uma jogada inesperada. Vou ter que revisar minha estratégia!"
        scorePlayer++
        messageResult = `   Pedra esmaga Lagarto<br/><br/>
                            Parabens você Ganhou`

    }
    // Vitoria Player papel contra pedra
    if (resultPlayer === GAME_OPTIONS.PAPER && resultSheldon === GAME_OPTIONS.ROCK) {
        messagePlayer = "Papel embrulha pedra!"
        messageSheldon = "Impressionante, mas você sabe que isso não é mais do que uma questão de probabilidades, certo?"
        scorePlayer++
        messageResult = `   Papel embrula Pedra<br/><br/>
                            Parabens você Ganhou`

    }
    // Vitoria Player papel contra spock
    if (resultPlayer === GAME_OPTIONS.PAPER && resultSheldon === GAME_OPTIONS.SPOCK) {
        messagePlayer = " Papel refuta Spock!"
        messageSheldon = " Impressionante! Isso é um erro de cálculo da minha parte. Vamos tentar novamente!"
        scorePlayer++
        messageResult = `   Papel Refuta Spock<br/><br/>
                            Parabens você Ganhou`

    }
    // Vitoria Player tesoura contra lagarto
    if (resultPlayer === GAME_OPTIONS.SCISSORS && resultSheldon === GAME_OPTIONS.LIZARD) {
        messagePlayer = " Tesoura corta papel!"
        messageSheldon = "A violência gráfica foi inesperada. Ponto para você."
        scorePlayer++
        messageResult = `   Tesoura decapita lagarto<br/><br/>
                            Parabens você Ganhou`

    }
    // Vitoria Player tesoura contra papel
    if (resultPlayer === GAME_OPTIONS.SCISSORS && resultSheldon === GAME_OPTIONS.PAPER) {
        messagePlayer = " Tesoura decapita lagarto!"
        messageSheldon = "Cortante... literalmente. Isso exige uma análise de probabilidade mais precisa."
        scorePlayer++
        messageResult = `   Tesoura corta o papel<br/><br/>
                            Parabens você Ganhou`

    }
    // Vitoria Player lagarto contra papel
    if (resultPlayer === GAME_OPTIONS.LIZARD && resultSheldon === GAME_OPTIONS.PAPER) {
        messagePlayer = "Lagarto come papel!"
        messageSheldon = "Espero que ele tenha uma digestão simbólica eficiente."
        scorePlayer++
        messageResult = `   Lagarto come o papel<br/><br/>
                            Parabens você Ganhou`

    }
    // Vitoria Player lagarto contra spock
    if (resultPlayer === GAME_OPTIONS.LIZARD && resultSheldon === GAME_OPTIONS.SPOCK) {
        messagePlayer = "Meu lagarto vaporiza seu Spock, Sheldon!"
        messageSheldon = "Isso viola todas as normas da ciência... mas está nas regras."
        scorePlayer++
        messageResult = `   Lagarto Envena o Spock<br/><br/>
                            Parabens você Ganhou`

    }
    // Vitoria Player spock contra rock
    if (resultPlayer === GAME_OPTIONS.SPOCK && resultSheldon === GAME_OPTIONS.ROCK) {
        messagePlayer = " Spock vaporiza pedra!"
        messageSheldon = "Isso é... fascinante. Preciso atualizar meu modelo preditivo."
        scorePlayer++
        messageResult = `   Spock vaporiza pedra<br/><br/>
                            Parabens você Ganhou`

    }
    // Vitoria Player spock contra scissors
    if (resultPlayer === GAME_OPTIONS.SPOCK && resultSheldon === GAME_OPTIONS.SCISSORS) {
        messagePlayer = " Spock quebra tesoura!"
        messageSheldon = "Ah, lógica superior contra lâminas inferiores. Touché."
        scorePlayer++
        messageResult = `   Spock quebra tesoura<br/><br/>
                            Parabens você Ganhou`
    }

    //caso vitoria do Sheldon

    // Vitoria Sheldon pedra contra tesoura
    if (resultSheldon === GAME_OPTIONS.ROCK && resultPlayer === GAME_OPTIONS.SCISSORS) {
        messageSheldon = "Pedra quebra tesoura! A lógica sempre vence, e você deveria saber disso!"
        messagePlayer = "Ah não! Como você conseguiu me vencer, Sheldon?"
        scoreSheldon++
        messageResult = `   Pedra quebra tesoura<br/><br/>
                            Que pena você Perdeu`
    }
    if (resultSheldon === GAME_OPTIONS.ROCK && resultPlayer === GAME_OPTIONS.LIZARD) {
        messageSheldon = "Pedra esmaga lagarto. Assim como minha lógica esmaga sua esperança"
        messagePlayer = "Droga, fui superado pelo QI dele... de novo."
        scoreSheldon++
        messageResult = `   Pedra esmaga lagarto<br/><br/>
                            Que pena você Perdeu`
    }
    // Vitoria Sheldon papel contra pedra
    if (resultSheldon === GAME_OPTIONS.PAPER && resultPlayer === GAME_OPTIONS.ROCK) {
        messageSheldon = "Uma vitória elegante com apenas uma folha."
        messagePlayer = "Ok, ok. Ele ganhou. Mas quem tem vida social aqui sou eu!"
        scoreSheldon++
        messageResult = `   Papel embrula Spock<br/><br/>
                            Que pena você Perdeu`
    }
    // Vitoria Sheldon papel contra spock
    if (resultSheldon === GAME_OPTIONS.PAPER && resultPlayer === GAME_OPTIONS.SPOCK) {
        messageSheldon = "Papel refuta Spock! Isso é apenas uma demonstração da superioridade da razão. Melhor sorte na próxima vez!"
        messagePlayer = " Me pergunto se o Spock ficaria decepcionado comigo..."
        scoreSheldon++
        messageResult = `   Papel refuta Spock<br/><br/>
                            Que pena você Perdeu`
    }
    // Vitoria Sheldon tesoura contra lagarto
    if (resultSheldon === GAME_OPTIONS.SCISSORS && resultPlayer === GAME_OPTIONS.LIZARD) {
        messageSheldon = "Tesoura corta a cabeça do lagarto! Biologia nunca fui tão afiado."
        messagePlayer = " Derrotado por uma jogada que nem faz sentido... clássico."
        scoreSheldon++
        messageResult = `   Tesoura decapita lagarto<br/><br/>
                            Que pena você Perdeu`
    }
    // Vitoria Sheldon tesoura contra papel
    if (resultSheldon === GAME_OPTIONS.SCISSORS && resultPlayer === GAME_OPTIONS.PAPER) {
        messageSheldon = "Exatamente como previsto em 83,7% dos cenários."
        messagePlayer = " Isso não está nos planos. Preciso recalcular minha estratégia."
        scoreSheldon++
        messageResult = `   Tesoura  corta papel<br/><br/>
                            Que pena você Perdeu`
    }
    // Vitoria Sheldon lagarto contra papel
    if (resultSheldon === GAME_OPTIONS.LIZARD && resultPlayer === GAME_OPTIONS.PAPER) {
        messageSheldon = "Lagarto come papel. Espero que não fosse reciclável."
        messagePlayer = " Ah não... fui derrotado pelo poder da lógica!"
        scoreSheldon++
        messageResult = `   Lagarto come  papel<br/><br/>
                            Que pena você Perdeu`
    }
    // Vitoria Sheldon lagarto contra spock
    if (resultSheldon === GAME_OPTIONS.LIZARD && resultPlayer === GAME_OPTIONS.SPOCK) {
        messageSheldon = "Lagarto envenena Spock. Não se preocupe, é só metafórico... ou não."
        messagePlayer = "Essa vitória do Sheldon foi pura sorte. Só pode."
        scoreSheldon++
        messageResult = `   Lagarto Envenena Spock<br/><br/>
                            Que pena você Perdeu`
    }
    // Vitoria Sheldon spock contra rock
    if (resultSheldon === GAME_OPTIONS.SPOCK && resultPlayer === GAME_OPTIONS.ROCK) {
        messageSheldon = " E você achava que era só um símbolo nerd..."
        messagePlayer = " Tudo bem... talvez eu devesse ter jogado Lagarto."
        scoreSheldon++
        messageResult = `   Spock vaporiza pedra<br/><br/>
                            Que pena você Perdeu`
    }
    // Vitoria Sheldon spock contra scissors
    if (resultSheldon === GAME_OPTIONS.SPOCK && resultPlayer === GAME_OPTIONS.SCISSORS) {
        messageSheldon = "Spock vaporiza tesoura! A lógica é imbatível, e você deveria saber que a razão sempre vence!"
        messagePlayer = "O universo conspira contra minhas escolhas."
        scoreSheldon++
        messageResult = `   Spock quebra tesoura<br/><br/>
                            Que pena você Perdeu`
    }

    if (resultPlayer === resultSheldon) {
        messagePlayer = "Parece que estamos em um empate, Sheldon. Você não é tão esperto quanto pensa!"
        messageSheldon = "Empate? Isso é estatisticamente irrelevante. Vamos jogar novamente!"
        messageResult = "Deu empate"
    }

    return {
        player: messagePlayer,
        sheldon: messageSheldon,
        result: messageResult
    };
}



// Função que faz a escolha aleatória do Sheldon
function resultSheldon() {
    const optionsSheldon = ["rock", "papper", "scissors", "lizard", "spock"];
    const numeroAleatorio = Math.floor(Math.random() * 5);
    return optionsSheldon[numeroAleatorio];
}

// Função para iniciar o jogo
function startGame(option) {
    const options = document.querySelector(".container-options");
    const imgSheldonFigure = document.querySelector(".img-sheldon");
    const imgPlayerFigure = document.querySelector(".img-player");
    const resultSheldonn = resultSheldon();

    const animateFigures = () => {
        options.style.pointerEvents = "none"; // Desabilita a interação com as opções enquanto anima

        setTimeout(() => {
            imgPlayerFigure.src = `./images/player2-rock.png`;
            imgSheldonFigure.src = `./images/sheldon-rock.jpeg`; // Sheldon inicia com a imagem inicial
        }, 500);

        setTimeout(() => {
            imgPlayerFigure.src = `./images/player2-rock2.png`;
            imgSheldonFigure.src = `./images/sheldon-rock2.png`; // Sheldon alterna
        }, 1000);

        setTimeout(() => {
            imgPlayerFigure.src = `./images/player2-rock.png`;
            imgSheldonFigure.src = `./images/sheldon-rock.jpeg`; // Sheldon volta para a inicial
        }, 1500);

        setTimeout(() => {
            imgPlayerFigure.src = `./images/player2-rock2.png`;
            imgSheldonFigure.src = `./images/sheldon-rock2.png`; // Sheldon alterna novamente
        }, 2000);

        // Depois da animação, define a jogada final
        setTimeout(() => {
            imgPlayerFigure.src = `./images/player2-${option}.png`;
            imgSheldonFigure.src = `./images/sheldon-${resultSheldonn}.jpeg`; // Sheldon mostra sua jogada final
        }, 2500);

        // Exibe os resultados após a animação
        setTimeout(() => {
            displayResults(option, resultSheldonn);
        }, 3000);
    };

    animateFigures(); // Chama a animação

    // Função para exibir os resultados após a animação
    const displayResults = (option, resultSheldonn) => {
        const message = checkResult(option, resultSheldonn);
        console.log(message);
        
        let scoreboardSheldon = document.getElementById("scoreboard-sheldon");
        let scoreboardPlayer = document.getElementById("scoreboard-player");
        let result = document.getElementById("print-resultado");
        let msgSheldon = document.getElementById("message-sheldon");
        let msgPlayer = document.getElementById("message-player");

        // Atualiza pontuação e mensagens
        scoreboardPlayer.innerHTML = scorePlayer;
        scoreboardSheldon.innerHTML = scoreSheldon;
        result.innerHTML = message.result;
        msgSheldon.innerHTML = message.sheldon;
        msgPlayer.style.display = "block";
        msgSheldon.style.display = "block";
        msgPlayer.innerHTML = message.player;
        
        let temporizador = document.getElementById("print-temporizador")
        // Temporizador para a próxima rodada
        for (let i = 5; i > 0; i--) {
            setTimeout(() => {
                temporizador.innerHTML = `PROXIMA PARTIDA EM <br/><span id="temporizadorr"> ${i}</span>`;
            }, (5 - i) * 1000); // A cada segundo
        }

        setTimeout(() => {
            temporizador.innerHTML = "ESCOLHA SUA OPÇÃO";
        }, 5000);

        // Restaura a interface após a animação
        setTimeout(() => {
            temporizador.innerHTML = "";
            msgPlayer.style.display = "none";
            msgSheldon.style.display = "none";
            result.innerHTML = "";
            msgSheldon.innerHTML = "";
            msgPlayer.innerHTML = "";
            cxResult.style.display = "block";
            options.style.pointerEvents = "all"; // Reativa as opções após a animação
        }, 5000); // 9.5 segundos, após a animação e o temporizador
        setTimeout(() => {
            temporizador.innerHTML = "ESCOLHA SUA OPÇÃO";
        }, 5200);
    };
}

// Função para iniciar a transição do jogo
function teste() {
    

    // Primeiro, adiciona a classe "fade-in" mas sem mostrar ainda
    cxResult.classList.add("fade-in");
    cxResult.style.display = "block";
    cxSheldon.classList.add("fade-in");
    cxSheldon.style.display = "flex";
    cxPlayer.classList.add("fade-in");
    cxPlayer.style.display = "flex";
    btnStartBody.style.cursor = "auto";

    btnStart.style.display = "none";

    // Depois de um pequeno tempo, adiciona a classe "show" para iniciar o efeito
    setTimeout(() => {
        cxResult.classList.add("show");
        cxSheldon.classList.add("show");
        cxPlayer.classList.add("show");
    }, 50); // tempo curto só para forçar o CSS a reconhecer a transição
}
