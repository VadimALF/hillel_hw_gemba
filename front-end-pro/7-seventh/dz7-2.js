'use strikt'
let mathFunction = 1
const questionsLite = [
    {
        question: 'Путин хуйло?',
        answer: true,
    },
    {
        question: 'Ти взмозі відрізнити ОК від Cancel',
        answer: true,
    },
    {
        question: 'А ну натисни Cancel',
        answer: false,
    },
    {
        question: 'Яка цифра розташована між 2 та 4?',
        answer: '3',
    },
    {
        question: 'Який колір нашого прапору?',
        answer: 'жовто-блакитний',
    },
    {
        question: 'Що похилося у лузі?',
        answer: 'калина',
    },
    {
        question: 'Вчорашній борщ краще?',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
]

const questionsHard = [
    {
        question: 'Скажи будь ласка, хто хуйло?',
        answer: 'Путін',
    },
    {
        question: 'Чи є true строковим типом даних?',
        answer: false,
    },
    {
        question: 'Чого не вистачає: undefined, boolean, number, string, bigint, object?',
        answer: 'null',
    },
    {
        question: 'Що тут зайве: 0\n-0\nundefined\nobject\nfalse\nnull\nNaN?',
        answer: 'object',
    },
    {
        question: 'Який тип даних ти зараз введеш у цій формі?',
        answer: 'string',
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
]

const questionsMath = [
    {
        question: 'А нумо, який факториал ',
        answer: random(7),
        function: factorial(5),
    },
    {
        question: 'Яким буде квадратний корінь з ',
        answer: Math.pow(random(20), 2),
        function: Math.sqrt(mathFunction),
    },
    {
        question: 'Скільки буде, якщо навпіл розділити ',
        answer: random(30) * 2,
        function: mathFunction/2,
    },
    {
        question: 'Спробуй розділити на три число ',
        answer: random(30) * 3,
        function: mathFunction/3,
    },
    {
        question: 'Порахуй площу квадрата найбільша сторона якого дорівнює ',
        answer: random(20),
        function: mathFunction*mathFunction,
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
    {
        question: '',
        answer: '',
    },
]



let startOne =  confirm('Ну що, почнемо?')
let startTwo = true
let sumTrue = 0
let sumFalce = 0
let numberAnswer = 0
let numberOfCarentAnswer = 0    
    
startOne ? variableOne() : startTwo =
    confirm(' Що таке?\n Ми сьогодні не в гуморі?')
    //     ? 
    // confirm('Тоді тобі треба негайно забити голову якимось лайном, наприклад' +
    //     'математика - важкий тест.\nНехай мозок попрацює, а емоції відпочинуть.' +
    //     'даєшь згоду?') : alert ('random lll')
    
console.log(startTwo)

function random(max) {
    return Math.floor(Math.random(max) * max)
}

function variableOne() {
   // numberAnswer++
    switch (random(3)) {
        case 0: return questMath(numberAnswer)
        case 1: return questMath(numberAnswer+1)
        case 2: return questMath(numberAnswer+2)
        case 3: return questMath(numberAnswer+3)
    }
}

function questionOne() {
    confirm('Вітаю, ти потрапив в легкий квест з математиці.' + 
        '\nБажаєш продовжити?') === true ? prompt('Поділіть будь ласка число ' +
            (random(30) * 2) + ' на два') : questionTwo()
}

function questionTwo() {
    let x = random(20)
    confirm('От дітько, треба було погоджуватися на легкий.\nТут буде набагато важче.' +
        'Може краще передумати?') ? questionOne() :
        prompt('Ну що ж, добре. Яким буде квадратний корінь з ' +
            (x*x) + '?')
    console.log(x)
}

function questMath(id) {
    mathFunction = questionsMath[id].answer
    alert(questionsMath[id].function + '\n mathFunction = ' + mathFunction)
    const right = questionsMath[id].function
    const userAnswer =  prompt(questionsMath[id].question + mathFunction)
    alert (userAnswer + '\n' + mathFunction + '\n' + right)
}

function printQuestion(quest) {
    
    if (typeof quest.answer === "boolean") {
        return prompt(quest.question + quest.answer)
    }
    else {
        return confirm(quest.question)
    }
}

function factorial(i) {
  return (i === 0) ? 1 : i * factorial(--i)
}
