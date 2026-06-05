// Variabel
let select = document.getElementById('select-input');
let quiz = document.getElementById('quiz-content');
let button = document.querySelectorAll('.square');
let skor = document.getElementById('skor');
const numberVariant = [];
const choices = [];
let randomNumber1 = '';
let randomNumber2 = '';
let result = '';
let status = true;
let level = 10;
let nilai = 0;

// Setting Level
select.addEventListener('change', function switchLevel() {
    if (select.value == '2') {
        level = 20;
    } else if (select.value == '3') {
        level = 50;
    } else if (select.value == '1') {
        level = 10;
    }
    numberVariant.length = 0;
    nilai = 0;
    skor.textContent = `Skor: ${nilai}`
    createRandomNumber();
})

// Makes random number
function createRandomNumber() {
    // Sistem Loop 
    for (let i = 1;i <= level;i++) {
    numberVariant.push(i);
}
    // Random question
    {
    let randomIndex = Math.floor(Math.random() * numberVariant.length);
    randomNumber1 = numberVariant[randomIndex];
};

{
    let randomIndex = Math.floor(Math.random() * numberVariant.length);
    randomNumber2 = numberVariant[randomIndex];
};
    // 4 Differents answer
    result = randomNumber1 * randomNumber2;
    choices.push(
        result + 1,
        result -1,
        result +2,
        result
    )

    choices.sort(() => Math.random() - 0.5);

    // Declare question
    quiz.innerHTML = `${randomNumber1} X ${randomNumber2}`;
    button.forEach((box, index) => {box.textContent = choices[index]});

    choices.length = 0;
    numberVariant.length = 0;
}

// Reset State
function resetState(answer) {
    answer.classList.remove('square-correct');
    answer.classList.remove('square-wrong');
}

// Function answer
function toAnswer(answer) {
    let input = Number(answer.textContent);

    // Check answer
    if (input == result) {
        status = true;
        answer.classList.add('square-correct')

    } else {
        status = false
        answer.classList.add('square-wrong');
    }

    // Give a score
    if (status) {
        nilai += 1;
        skor.textContent = `Skor: ${nilai}`;
    } else {
        nilai -= 1;
        skor.textContent = `Skor: ${nilai}`;
    }


    // Give transition
    setTimeout(() => {
        resetState(answer)
        createRandomNumber()
    }, 500)

;
}

createRandomNumber();
