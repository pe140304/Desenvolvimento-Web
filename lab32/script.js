const questions = [
    {
        question: "Quem e o artilheiro da NEO QUIMICA ARENA?",
        answers: ["Jo", "Paolo Guerrero", "Angel Romero", "Jadson"],
        correctAnswer: 2
    },
    {
        question: "Quantos titulos nacionais o Corinthians tem?",
        answers: ["8", "7", "6", "3"],
        correctAnswer: 1
    },
    {
        question: "Quantos titulos estaduais o Corinthians tem",
        answers: [
            "29","31","28","30"
        ],
        correctAnswer: 3
    },
    {
        question: "Quem e o jogador com mais jogos na historia do Corinthians",
        answers: ["Wladimir", "Cassio", "Marcelinho Carioca", "Ronaldo Giovaneli"],
        correctAnswer: 0
    },
    
    
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;