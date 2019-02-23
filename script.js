/* Para começar, vamos atribuir algumas constantes de pegar os elementos pelo ID e class */


let userScore = 0;
let computerScore = 0;
const userScore_ponto = document.getElementById("usuarioponto");
const computerScore_ponto = document.getElementById("computadorponto");
const scoreBoard_div = document.querySelector(".pontuacao");
const result_div = document.querySelector("p.result");
const pedra_div = document.getElementById("r");
const papel_div = document.getElementById("p");
const tesoura_div = document.getElementById("s");





/* Avisos para quando abrir a página */

alert("Olá!");
alert("Esse é um jogo em que você testa a sua sorte!");
alert("Você vai escolher entre pedra, papel e tesoura e o PC irá escolher outro");
alert("A máquina não foi programada para saber antecipado qual você escolheu.");
alert("Que a sorte esteja com você ^^");



/* Vamos começar a programar de fato */

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNum = (Math.floor(Math.random() * 3));
    return choices[randomNum];

}

/* Converter */

function converterPalavra(letra) {
    if (letra === "r") return "Pedra";
    if (letra === "p") return "Papel";
    if (letra === "s") return "Tesoura";


}

//console.log(getComputerChoice());


function win(userChoice, computerChoice) {

    console.log(userChoice);
    console.log(computerChoice);

    userScore++;
    userScore_ponto.innerHTML = userScore;
    result_div.innerHTML = converterPalavra(userChoice) + " ganha de " + converterPalavra(computerChoice) + ". Você venceu!"

}
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_ponto.innerHTML = computerScore;
    result_div.innerHTML = converterPalavra(userChoice) + " perde de " + converterPalavra(computerChoice) + ". Você perdeu!"


}
function draw(userChoice, computerChoice) {
    console.log("DRAW");
    result_div.innerHTML = "Ambos digitaram " + converterPalavra(userChoice) + " , deu empate.";
}


function game(userChoice) {
    const computerChoice = getComputerChoice();


    /* Um monte de IF para validar a vitória */



    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }










}



game();




function main() {

    pedra_div.addEventListener('click', function () {
        game("r");

    });

    papel_div.addEventListener('click', function () {
        game("p");

    });

    tesoura_div.addEventListener('click', function () {
        game("s");






    });
}

main();






