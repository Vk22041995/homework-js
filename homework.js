/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

    function cafe (hamburger, fries) {
        if (hamburger>=1 && fries>=4){
            return('Ми поїли')
        } else {
            return('Ми йдемо в інше кафе')
        }  
    }

    console.log(cafe(1, 4));

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/

function priceCalculate (price) {
    if (price>=1000 && price<=1900){
        return(true)  
    } else {
        return(false)   
    }
}

console.log(priceCalculate(1000));


/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

    function pricePositive (priceValue) {
        if (priceValue<1000 && priceValue>1900){
            return(true)  
        } else {
            return(false) 
        }
    }
    
    console.log(pricePositive(1000));


    function priceNegative (productPrice) {
        if (productPrice>=1000 && productPrice<=1900) {
            return(!true)  
        } else {
            return(!false) 
        } 
    }
    
    console.log(priceNegative(900));


/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

const seasons = (timeOfYear) => {
    if (timeOfYear == 1){
        return("Зима")
    } else if (timeOfYear == 2){
        return("Весна")
    } else if (timeOfYear == 3){
        return("Літо")
    } else if (timeOfYear == 4){
        return("Осінь")
    };
} 

console.log(seasons(3));


/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

    function mediumNumber (a, b, c) {
        if (a > b) {
            if (b > c) {
              return(b);
            } else if (a > c) {
              return(c);
            } else {
              return(a);
            }
          } else {
            if (a > c) {
              return(a);
            } else if (b > c) {
              return(c);
            } else {
              return(b);
            }
          }
    }

    console.log(mediumNumber(3, 17, 9));


/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/

function daily (dayOfWeek) {
    switch(dayOfWeek){
        case 1: 
            return("Понеділок");
            break;
        case 2: 
            return("Вівторок");
            break;
        case 3: 
            return("Середа");
            break;
        case 4: 
            return("Четвер");
            break;  
        case 5: 
            return("П'ятниця");
            break; 
        case 6: 
            return("Субота");
            break; 
        case 7: 
            return("Неділя");
            break; 
    }
}

console.log(daily(3));


/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

function calculator (numberOne, symbol, numberTwo) {
        switch(symbol){
            case "+": 
                return(numberOne + numberTwo);
                break;
            case "-": 
                return(numberOne - numberTwo);
                break;
            case "*": 
                return(numberOne * numberTwo);
                break;
            case "/": 
                return(numberOne / numberTwo);
                break;  
        }
    }

    console.log(calculator(5, "*", 7));



/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/

function raplaceVowels (string) {
    let noVovels = string.replace(/[аеєиіїоуюя]/gi, "");
    return(noVovels);
}

console.log(raplaceVowels("владислав"));