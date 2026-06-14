const questions = [
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["3", "4", "5"],
    answer: "4"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    category: "History",
    question: "Who was the first president of the USA?",
    choices: ["Abraham Lincoln", "George Washington", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Tech",
    question: "What language runs in a web browser?",
    choices: ["Python", "JavaScript", "C++"],
    answer: "JavaScript"
  }
];

function getRandomQuestion(questions) {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
}

function getRandomComputerChoice(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
