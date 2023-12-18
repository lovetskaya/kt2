/*alert('Ловецкая Полина');
let name, admin
name = "Ловецкая Полина"
admin = name
alert(admin)
let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
let num3 = prompt("Введите третье число");
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
let sum = num1 + num2 + num3;
alert("Сумма чисел равна " + sum);
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
if (year == 2015) {
	alert( "Правильно!" );
	alert( "Вы такой умный!" );
}else {
    alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
   }

   let name1 = prompt("Какое ваше имя?");
   alert(`Привет, ${name1}`);
  
   let number = prompt('Введите число');
   if (number > 0) {
    message = '1';
   } else if (number < 0) {
    message = '-1';
   } else if (number == 0) {
    message = '0';
   } else {
    message = 'Это строка!';
   }
   alert( message );
 
let result = (a + b < 100) ? 'Мало':
(a + b > 100) ?'Много':
alert( result );

let message = (login == 'Студент') ? 'Привет' :
          (login == 'Преподаватель') ? 'Здравствуйте' :
          (login == '') ? 'Нет логина' : '';




let a = parseInt(prompt("Введите первое число"))
let b = parseInt(prompt("Введите второе число"))
let sign = prompt("Введите операцию") 
if(sign=="+")  {
    sign=a+b;
}
else if (sign=="/"&& b!=0) {
    sign=a/b;
}
else if (sign=="*") {
    sign=a*b;
}
else if (sign=="-") {
sign=a-b;
}
else {
    alert("Ошибка");
}
    alert(sign)

     /*       let price = prompt("Число");
    
            let range = prompt ("Месяц,День,Неделя");
    
            if (range == "Месяц","День","Неделя" && price>=0){
    
                alert(price+"P B "+range)
    
            } else {
    
                alert("Not correct")
    
            }
    
     


    
            let temp = prompt("temp")
    
            let weather = prompt("weather")
    
            let activity
    
            if (temp>=25 && weather == "clear") {
    
                activity="golf";
    
            }else if(temp>=10 && temp<=24 || weather=="cloudy") {
    
                activity="bowling"
    
            }else{
    
                activity="hiking"
    
            }
    
    alert(activity)
    
    


     


            let a = prompt(2)
    
            let b = prompt(6)
    
            let sign = prompt("*")
    
            if (sign=="+"){
    
                sign=a+b
    
            }else if(sign=="-"){
    
                sign=a-b
    
            }else if(sign=="/" && b!=0){
    
                sign=a/b
    
            }else if(sign=="*"){
    
                sign=a*b
    
            }else{
    
                alert("НЕЛЬЗЯ")
    
            }
    
            alert(sign)
    
    


    
            let word = prompt()
    
            word = word.length
    
            if(Math.sqrt(word)%2==0){
    
                alert(1)
    
            }else{
    
                alert(0)
    
            }
        }
    }
}

           
    
  */

/*
//Задание 1

function checkElem(num){
  if(num%7===0){
      console.log (true)}
  else {console.log (false)}}
  checkElem(13);



//Задача 2

let array = [1,2,3,4];

let arr = [ ] ;

let n = prompt("Напишите степень умножения")

function changeElem(array, n){

var index;

for (index = 0; index < array.length; ++index) {

arr[index] = Math.pow(array[index], n);

}

return alert(arr);

}

let result = changeElem(array,3)

alert(result)

// alert(array); проверка что исходный массив не изменился




//Задача 3

function sumElems(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      let number = Number(array[i]);
      if (!isNaN(number)) {
        sum += number;
      }
    }
    return sum;
  }
  
  let array = ['10','Строка','5g','15','05'];
  let result = sumElems(array);
  alert(result);



//Задача 4
let arr1 = [];
function reverseIndex(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        arr1.push(array[i]);
    }
    return arr1;
  }
  
  let array = [1, 2, 3, 4, 5];
  console.log(reverseIndex(array)); 


//Задача 5
function checkElem(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return true;
      }
    }
    return false;
  }
  let array = [1, 2, 3, 4];
  let result = checkElem(array, (elem) => elem == 3);
  console.log(result);*/



  function logString() {
    let result = "";
    for (let i = 0; i < a.length; i++) {
      result += a[i] + " ";
    }
    console.log(result);
  }
  
  let userInput = prompt("Введите любое количество аргументов");
  let aArray = userInput.split(",");
  logString(...aArray);
