

const questions = {
    general: [
        { q: "If all cats are animals and some animals are dogs, which statement is true?", options: ["All cats are dogs", "Some cats are dogs", "All dogs are cats", "No cats are dogs"], answer: "No cats are dogs" },
        { q: "Find the next number in the series: 2, 4, 8, 16, ?", options: ["18", "20", "32", "24"], answer: "32" },
        { q: "If Monday is 1, Tuesday is 2, ..., what number is Friday?", options: ["4", "5", "6", "7"], answer: "5" },
        { q: "Which shape comes next in the pattern: ◼, ▲, ◼, ▲, ?", options: ["◼", "▲", "●", "■▲"], answer: "◼" },
        { q: "If all roses are flowers and all flowers fade, which is true?", options: ["All roses fade", "Some roses fade", "Roses don’t fade", "Cannot say"], answer: "All roses fade" },
        { q: "Which number does not belong: 2, 3, 6, 7, 14, 15?", options: ["3", "7", "6", "15"], answer: "7" },
        { q: "Complete the analogy: Finger is to Hand as Leaf is to ?", options: ["Tree", "Branch", "Root", "Flower"], answer: "Tree" },
        { q: "If 5 workers can finish a job in 10 days, how many days will 10 workers take?", options: ["5", "10", "15", "20"], answer: "5" }
    ],
    math: [
    { q: "Solve for x: 2x + 7 = 21", options: ["5", "7", "9", "12"], answer: "7" },
    { q: "Find the next number in the series: 2, 6, 12, 20, 30, ?", options: ["40", "42", "44", "36"], answer: "42" },
    { q: "If a + b = 15 and a − b = 3, find the values of a and b.", options: ["a=9, b=6", "a=10, b=5", "a=8, b=7", "a=7, b=8"], answer: "a=9, b=6" },
    { q: "The area of a circle is 154 cm². Find the radius (use π = 3.14).", options: ["7 cm", "7.5 cm", "14 cm", "21 cm"], answer: "7 cm" },
    { q: "Simplify: 5 × (2 + 3)² − 4 × 3", options: ["105", "109", "115", "125"], answer: "105" },
    { q: "If 4x − 5 = 3x + 2, find x.", options: ["5", "6", "7", "8"], answer: "7" },
    { q: "Find the missing number: 1, 4, 9, 16, 25, ?", options: ["30", "36", "35", "40"], answer: "36" },
    { q: "The perimeter of a rectangle is 48 cm. If the length is 14 cm, find the width.", options: ["10 cm", "12 cm", "11 cm", "13 cm"], answer: "10 cm" }
],

Java: [ { q: "What is the correct way to print 'Hello World' in Java?", options: ["System.out.println('Hello World');", "console.log('Hello World');", "print('Hello World');", "echo 'Hello World';"], answer: "System.out.println('Hello World');" }, 
        { q: "Which keyword is used to declare a class in Java?", options: ["class", "Class", "define", "struct"], answer: "class" }, 
        { q: "What is the default value of an int variable in Java?", options: ["0", "null", "undefined", "1"], answer: "0" }, 
        { q: "How do you create an object of a class named 'Car' in Java?", options: ["Car myCar = new Car();", "Car myCar = Car();", "new Car myCar;", "Car myCar;"], answer: "Car myCar = new Car();" }, 
        { q: "Which loop is used to iterate over an array in Java?", options: ["for-each loop", "while loop", "do-while loop", "switch loop"], answer: "for-each loop" }, 
        { q: "What does the 'public' access modifier allow?", options: ["Access from any class", "Access only within the same package", "Access only within the same class", "No access"], answer: "Access from any class" },
         { q: "How do you declare a method that returns an integer in Java?", options: ["public int myMethod() {}", "public void myMethod() {}", "int myMethod() {}", "method int myMethod() {}"], answer: "public int myMethod() {}" }, 
        { q: "What is the purpose of the 'extends' keyword in Java?", options: ["To inherit from a superclass", "To implement an interface", "To create a new class", "To define a variable"], answer: "To inherit from a superclass" }
     ],

science: [
    { 
        q: "What is the chemical symbol for sodium?", 
        options: ["Na", "S", "So", "N"], 
        answer: "Na" 
    },
    { 
        q: "Which planet is known as the 'Red Planet'?", 
        options: ["Earth", "Mars", "Jupiter", "Venus"], 
        answer: "Mars" 
    },
    { 
        q: "Which organ in the human body produces insulin?", 
        options: ["Liver", "Pancreas", "Kidney", "Heart"], 
        answer: "Pancreas" 
    },
    { 
        q: "What is the speed of light in vacuum?", 
        options: ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^5 km/s", "3 × 10^7 m/s"], 
        answer: "3 × 10^8 m/s" 
    },
    { 
        q: "Which gas is most abundant in Earth's atmosphere?", 
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], 
        answer: "Nitrogen" 
    },
    { 
        q: "Water boils at what temperature at standard pressure?", 
        options: ["90°C", "95°C", "100°C", "105°C"], 
        answer: "100°C" 
    },
    { 
        q: "Which part of the cell contains genetic material?", 
        options: ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"], 
        answer: "Nucleus" 
    },
    { 
        q: "What is the main gas produced during photosynthesis?", 
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], 
        answer: "Oxygen" 
    }
],

  literature: [
        { 
            q: "Who wrote 'Pride and Prejudice'?", 
            options: ["Charlotte Bronte", "Jane Austen", "Emily Dickinson", "Mary Shelley"], 
            answer: "Jane Austen" 
        },
        { 
            q: "Which literary device is used in: 'The wind whispered through the trees'?", 
            options: ["Simile", "Personification", "Metaphor", "Alliteration"], 
            answer: "Personification" 
        },
        { 
            q: "Find the odd one out: Hamlet, Macbeth, Othello, Frankenstein", 
            options: ["Hamlet", "Macbeth", "Othello", "Frankenstein"], 
            answer: "Frankenstein" 
        },
        { 
            q: "Complete the analogy: Poet is to Poetry as Novelist is to ?", 
            options: ["Novel", "Story", "Fiction", "Writing"], 
            answer: "Novel" 
        },
        { 
            q: "Which author created the character 'Sherlock Holmes'?", 
            options: ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe", "Mark Twain"], 
            answer: "Arthur Conan Doyle" 
        },
        { 
            q: "Identify the rhyme scheme in: 'Twinkle, twinkle, little star, How I wonder what you are'", 
            options: ["AABB", "ABAB", "AAAA", "ABBA"], 
            answer: "AABB" 
        },
        { 
            q: "Which is an example of a metaphor?", 
            options: ["He runs like the wind", "Time is a thief", "She is as brave as a lion", "The stars danced in the sky"], 
            answer: "Time is a thief" 
        },
        { 
            q: "Who wrote the play 'Death of a Salesman'?", 
            options: ["Tennessee Williams", "Arthur Miller", "George Bernard Shaw", "Eugene O'Neill"], 
            answer: "Arthur Miller" 
        }
    ]
};

let selectedCategory = "general";
let username = "Guest";
let userAnswers = [];
let currentQuestion = 0;

// Get URL parameters
const params = new URLSearchParams(window.location.search);
username = params.get("username") || "Guest";
selectedCategory = params.get("category") || "general";
userAnswers = new Array(questions[selectedCategory].length).fill(null);

// Set greeting
document.getElementById("greeting").innerText = `Quiz Application`;

let totalTime = 150;
let timerInterval;

function startTimer() {
    const timerDisplay = document.getElementById("timer");

    timerInterval = setInterval(() => {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        timerDisplay.innerHTML = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        totalTime--;

        if (totalTime < 0) {
            clearInterval(timerInterval);
            alert("Time Over! Submitting Quiz...");
            submitQuiz();
        }
    }, 1000);
}
function showQuestion() {
    const container = document.getElementById("questions-container");
    container.innerHTML = "";

    const q = questions[selectedCategory][currentQuestion];

    const optionsHtml = q.options.map((option, i) => {
        const optionId = `q${currentQuestion}_option${i}`;
        const checked = userAnswers[currentQuestion] === option ? "checked" : "";
        return `
            <div>
                <input type="radio" id="${optionId}" name="q${currentQuestion}" value="${option}" ${checked} onchange="saveAnswer()">
                <label for="${optionId}">${option}</label>
            </div>
        `;
    }).join("");

    container.innerHTML = `
        <div class="question-block">
            <h3>Q${currentQuestion + 1}: ${q.q}</h3>
            ${optionsHtml}
            <div style="margin-top:10px;">
                <button onclick="previousQuestion()" ${currentQuestion === 0 ? "disabled" : ""}>Previous</button>
                <button onclick="nextQuestion()">${currentQuestion === questions[selectedCategory].length - 1 ? "Submit" : "Next"}</button>
            </div>
        </div>
    `;
}


// Automatically save selected answer
function saveAnswer() {
    const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selected) {
        userAnswers[currentQuestion] = selected.value;
    }
}

// Go to next question
function nextQuestion() {
    if (currentQuestion < questions[selectedCategory].length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        submitQuiz();
    }
}

// Go to previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// Submit quiz
function submitQuiz() {
    let score = 0;
    let resultHtml = `<h2> Your Quiz Score</h2>`;

    questions[selectedCategory].forEach((q, index) => {
        const userAns = userAnswers[index] || "No answer selected";
        const correctAns = q.answer;
        if (userAns === correctAns) score++;

        resultHtml += `
            <div>
                <strong>Q${index + 1}:</strong> ${q.q}<br>
                <strong>Your answer:</strong> ${userAns}<br>
                <strong>Correct answer:</strong> ${correctAns}
            </div>
            <hr>
        `;
    });

    resultHtml += `<h3>Score: ${score} / ${questions[selectedCategory].length}</h3>`;

    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("result").innerHTML = resultHtml;
}

// Restart quiz
function restartQuiz() {
    window.location.href = "index.html";
}

// Initialize the first question
showQuestion();
startTimer();