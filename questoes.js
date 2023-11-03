const questions = [
    {
        question: "Qual nota não é mais impressa na Casa da Moeda?", 
        choices: ["R$1,00", "R$2,00", "R$5,00", "R$10,00"] ,
        correctAnswer: "R$1,00"
    },
    {
        question: "Em qual Cidade é fabridado o Papel para o Real?", 
        choices: ["Rio de Janeiro", "Salto", "Salvador", "Sete Lagoas"],
        correctAnswer: "Salto"
    },
    {
        question: "Em que ano surgiu a Casa da Moeda?", 
        choices: ["1500", "1764", "1694", "1964"],
        correctAnswer: "1694"
    },
    {
        question: "O dinheiro é um meio de troca?", 
        choices: ["Não", "Era", "Ás vezes", "Sim"],
        correctAnswer: "Sim"
    },
    {
        question: "De quantas moedas de R$0,50 centavos preciso para ter R$2,50?", 
    choices: ["6 Moedas", "5 Moedas", "4 Moedas" ,"Nenuma das Opções"],
        correctAnswer: "5"
    },
    {
        question: "Se eu tenho 4 Maçãs que custa R$1,75 cada. Qual será o valor total?", 
    choices: ["R$7,00 Reais", "R$5,25 Reais", "R$6,75 Reais" ,"8 Reais"],
        correctAnswer: "R$7,00"
    },
    {
        question: "Fui ao Supermercado e peguei 3 (três) caixas de bombons, cada caixa custa R$9,99 e eu entreguei R$50,00 reais ao caixa. Quanto que terei de troco?", 
    choices: ["R$30,00 Reais", "R$10,52 Reais", "R$20,00 Reais" ,"R$19,90 Reais"],
        correctAnswer: "R$20,00"
    }
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    choicesElement.innerHTML = "";

    q.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", function() {
            checkAnswer(choice);
        });
        choicesElement.appendChild(button);
    });
}

function checkAnswer(choice) {
    const q = questions[currentQuestion];
    if (choice === q.correctAnswer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "";
    choicesElement.innerHTML = "";
    resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    resultElement.className = "resultado";
    nextButton.style.display = "none";

}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    resultElement.textContent = "";
    restartButton.style.display = "none";
    trueButton.style.display = "block";
    falseButton.style.display = "block";
    nextButton.style.display = "block";
}

loadQuestion();
restartButton.addEventListener("click", restartQuiz);