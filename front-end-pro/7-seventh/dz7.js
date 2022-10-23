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
        question: 'Якої області бачення не вистачає?\nглобальна, блок кода, модуль',
        answer: 'функція',
    },
    {
        question: 'Чи буде метод forEach() викликати функцію callback для видалених елементів масиву?',
        answer: false,
    },
    {
        question: 'У циклах for...of аварійний вихід здійснюється через break, throw та...?',
        answer: 'return',
    },
    {
        question: 'Чи повертає isNaN(null) значення false?',
        answer: true,
    },
    {
        question: 'Яке значення повертає Number(null)',
        answer: '0',
    },
]

let userAnswer
let correctAnswer = 0

printResult(cycle(questionsHard), questionsHard.length)

function cycle(questionsHard){
    for (i = 0; i < questionsHard.length; i++) {
        userAnswer = printQuestion(questionsHard[i])
        if (comparisonAnsers(userAnswer, questionsHard[i].answer)) {
            correctAnswer++
        }
    }
    return correctAnswer
}

function printQuestion(quest) {
    if (typeof quest.answer !== "boolean") {
        return prompt(quest.question)
    }
    else {
        return confirm(quest.question)
    }
}

function comparisonAnsers(userAnswer, answer) {
    return userAnswer === answer
}

function percent(correctAnswer) {
    return 100 * correctAnswer / questionsHard.length
}

function printResult(corr, all) {
    alert('Надано ' + corr + ' правильних відповідей з ' + all +
        '\n зароблено ' + corr * 10 + ' балів, що складеє ' +
        percent(corr) + '%')
}