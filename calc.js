let a = ''; // first number
let b = ''; // second number
let sigh = ''; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// экран
const out = document.querySelector('.calc-screen p');

function clearAll () {
a = ''; // first number
b = ''; // second number
sigh = ''; // знак операции
finish = false;
out.textContent = 0; // вывод 0 на экран
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // нажата кнопка
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent;

    // если нажата кнопка 0-9 или точка
    if (digit.includes(key)) {
        if (b === '' && sigh === '') {
        a +=key; // если переменная b и знак равны пустой строке, то будет наполняться переменная а
        
        out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b +=key;
            out.textContent = b;
        }
        console.log(a, b , sigh);
        return;
    }

    // если нажат знак
    if (action.includes(key)) {
        sigh = key;
        out.textContent = sigh; // вывод на экран
        console.log(a, b , sigh);
        return;
    }

    // нажата равно
    if (key === '=') {
        if (b ==='') b = a;
        switch (sigh) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sigh = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b , sigh);
    }

}