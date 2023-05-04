/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

    let hamburger = 1;
    let fries = 4;
    
    if (hamburger>=1 && fries>=4){
        console.log('Ми поїли')
    } else {
        console.log('Ми йдемо в інше кафе')
    }

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/

let price = 1000;

if (price>=1000 && price<=1900){
    console.log(true)  
} else {
    console.log(false)   
}

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

    let goodsPrice = 1000;

    if (goodsPrice<1000 && goodsPrice>1900){
        console.log(true)  
    } else {
        console.log(false) 
    }



    let productPrice = 1000;

    if (productPrice>=1000 && productPrice<=1900) {
        console.log(!true)  
    } else {
        console.log(!false) 
    }


/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

let timeOfYear = 3;

if (timeOfYear == 1){
    console.log("Зима")
} else if (timeOfYear == 2){
    console.log("Весна")
} else if (timeOfYear == 3){
    console.log("Літо")
} else if (timeOfYear == 4){
    console.log("Осінь")
};

/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/


    let a = 5;
    let b = 2;
    let c = 8;
    
    if (a > b) {
      if (b > c) {
        console.log(b);
      } else if (a > c) {
        console.log(c);
      } else {
        console.log(a);
      }
    } else {
      if (a > c) {
        console.log(a);
      } else if (b > c) {
        console.log(c);
      } else {
        console.log(b);
      }
    }

/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/

let dayOfWeek = 4;

switch(dayOfWeek){
    case 1: 
        console.log("Понеділок");
        break;
    case 2: 
        console.log("Вівторок");
        break;
    case 3: 
        console.log("Середа");
        break;
    case 4: 
        console.log("Четвер");
        break;  
    case 5: 
        console.log("П'ятниця");
        break; 
    case 6: 
        console.log("Субота");
        break; 
    case 7: 
        console.log("Неділя");
        break; 
}

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

    let symbol;
    let numberOne;
    let numberTwo;

    switch(symbol){
        case "+": 
            console.log(numberOne + numberTwo);
            break;
        case "-": 
            console.log(numberOne - numberTwo);
            break;
        case "*": 
            console.log(numberOne * numberTwo);
            break;
        case "/": 
            console.log(numberOne / numberTwo);
            break;  
    }

/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/

let string = "владислав";

let noVovels = string.replace(/[аеєиіїоуюя]/gi, "");

console.log(noVovels);

/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/