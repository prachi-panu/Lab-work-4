// Quiz Questions Array
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "mars"
    },
    {
        question: "Who is known as the father of computers?",
        answer: "charles babbage"
    },
    {
        question: "What is the largest mammal on Earth?",
        answer: "blue whale"
    },
    {
        question: "In which language is the word 'console.log' used?",
        answer: "javascript"
    }
];

// Function to Run the Quiz
function runQuiz() {
    let score = 0; // Score Initialization

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        // Handle cancel (null) to avoid errors
        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        // Normalize the Input
        userAnswer = userAnswer.toLowerCase().trim();

        // Check the Answer
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Wrong ❌\nCorrect Answer: " + quizQuestions[i].answer);
        }
    }

    // Display Final Score
    alert("Quiz Completed!\nYour Score: " + score + " / " + quizQuestions.length);
}
