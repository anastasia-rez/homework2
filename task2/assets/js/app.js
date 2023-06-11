const rounds_qt = 5;

let log = [];

function gen(){
    let result = Math.random();
    result = Math.floor(result * (100 - 10)) + 10;  
    return result;

}

for(let i = 1;  i <= rounds_qt; i++){

    let a = gen();
    let b = gen();

    let answer = a * b;


    let user_answer = +prompt(`Вопрос (${i}/${rounds_qt}): ${a} x ${b} = ?`);


    log.push({
        a: a,
        b: b,
        answer: answer,
        user_answer: user_answer
    });

}

let correct = log.filter(item => (item.answer == item.user_answer) );

let wrong = log.filter(item => (item.answer !== item.user_answer) );




alert(`Правильных ответов: ${correct.length} из ${rounds_qt}`);



for(let item of correct){
    console.log(`Правильные ответы: Пример ${item.a} * ${item.b} = ${item.user_answer}`);
}


for(let item of wrong){
    console.log(`Неправильные ответы: Пример ${item.a} * ${item.b} = ? Ваш ответ: ${item.user_answer}, правильный ответ: ${item.answer} `);
}