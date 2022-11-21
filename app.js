console.log('Привет');
if (5>4) {
    console.log("5 больше 4");
}

let age="";
age= +age;

if (!isNaN(age)) {
    console.log('Введите корректные данные')
}
else {
    const gender='Муж';
if (age>18) {
    console.log("Вам больше 18");
}
else if (age<18) {
    console.log("Вам меньше 18");
} 
else {
    console.log("Вам 18");
} 

if(gender.toLocaleLowerCase()==='муж') {
    console.log('Вам налево');
}
if(gender.toLocaleLowerCase()==='жен') {
    console.log('Вам направо');
}
}

const isAdmin = false;

const typeUserString = isAdmin ? 'Администратор' : 'Пользователь';

console.log ('Добро пожаловать: ${typeUserString}');




