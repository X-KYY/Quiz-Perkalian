// Variabel
let select = document.getElementById('select-input');
let quiz = document.getElementById('quiz-content');
let output = document.getElementById('output-interactive');
let button = document.getElementById('button-interactive');
let skor = document.getElementById('skor');
const numberVariant = [];
let randomNumber1 = '';
let randomNumber2 = '';
let result = '';
let status = true;
let level = 10;
let nilai = 0;


// Makes random number
function createRandomNumber() {

    // Sistem Loop 
    for (let i = 1;i <= level;i++) {
    numberVariant.push(i);
}
    {
    let randomIndex = Math.floor(Math.random() * numberVariant.length);
    randomNumber1 = numberVariant[randomIndex];
};

{
    let randomIndex = Math.floor(Math.random() * numberVariant.length);
    randomNumber2 = numberVariant[randomIndex];
};
    quiz.innerHTML = `${randomNumber1} X ${randomNumber2}`
}

// Select level
select.addEventListener('change', function level() {
    if (select.value == '1') {
        level = 10;
    } else if (select.value == '2') {
        level = 20
    } else if (select.value == '3') {
        level = 50;
    }
})

// Event if an enter clicked
document.getElementById('input-interactive').addEventListener('keydown', function enter(board) {
    if (board.key === 'Enter') {
        board.preventDefault();
        button.click();
    }
});

// Select level
    select.addEventListener('change', function changeLevel() {
        numberVariant.length = 0;
        if (select.value == '1') {
            level = 10;
        } else if (select.value == '2') {
            level = 20
        } else {
            level = 50;
        }
        console.log(level)
        createRandomNumber();
    })


// Function to answer
function answer() {
    let input = document.getElementById('input-interactive');
    result = randomNumber1 * randomNumber2;
    if (input.value == '') {
        return;
    }

    // Pengkondisian status
    if (Number(input.value) === result) {
        output.textContent = 'BENAR';
        output.classList.remove('output-interactive-false')
        output.classList.add('output-interactive-true')
        status = true;
    } else {
        output.textContent = 'SALAH';
        output.classList.remove('output-interactive-true')
        output.classList.add('output-interactive-false')
        status = false;
    }

    // Pemberian nilai skor
    function count() {
        if (status == true) {
            nilai += 1;
            skor.innerHTML = `Skor: ${nilai}`
    } else if (status == false) {
            nilai -= 1;
            skor.innerHTML = `Skor: ${nilai}`
            if (nilai == -10) {alert("OOn")}
    }
    }

    console.log(result)
    createRandomNumber();
    count();
    input.value = '';
}

createRandomNumber();