function startGame() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

function checkAnswers() {
    const answers = [
        { id: 'q1', correct: 6 },    // 3 camisetas * 2 pantalones = 6
        { id: 'q2', correct: 7 },    // 4 pasteles + 3 galletas = 7
        { id: 'q3', correct: 12 },   // 4 caminos * 3 caminos = 12
        { id: 'q4', correct: 8 },    // 5 helados + 3 jugos = 8
        { id: 'q5', correct: 12 },   // 2 entradas * 3 platos * 2 postres = 12
        { id: 'q6', correct: 8 },    // 2^3 personas en la tercera generación = 8
        { id: 'q7', correct: 10 },   // 4 libros + 6 libros = 10
        { id: 'q8', correct: 24 },   // 2 camisetas * 3 pantalones * 4 zapatos = 24
        { id: 'q9', correct: 15 },   // 3 bebidas * 5 snacks = 15
        { id: 'q10', correct: 24 },  // 6 maneras * 4 maneras = 24
        { id: 'q11', correct: 9 },   // 4 ensaladas + 5 sopas = 9
        { id: 'q12', correct: 12 }   // 3 modelos * 4 colores = 12
    ];

    let score = 0;

    answers.forEach((question) => {
        const userAnswer = parseFloat(document.getElementById(question.id).value);
        if (userAnswer === question.correct) {
            score++;
        }
    });

    document.getElementById('result').textContent = `Tu puntuación es: ${score}/12`;
}
