//Выполнение первого задания 
let text = "Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была речка"; //создал строку
console.log(text);

let changed = text.split(',');  //сделал массив
for ( let i of changed ){
  i = i.charAt(0).toUpperCase() + i.substr(1); //Заглавие
}
//console.log(changed);


let finish = changed.join('.');  //вернул строку
//console.log(finish);

var str = finish;
var newstr = str.replace(/было/i, 'Было'); //сделал слово с большой буквы
var strSecond = newstr;
var newstrSecond = strSecond.replace(/лучшим/i, 'Лучшим'); //сделал слово с большой буквы
console.log(newstrSecond);

/*
//тчетные попытки на которые можно не обращать внимания

let newText = finish.split('');
console.log(newText);

console.log(finish[27]);
 let uppText = finish[27].toUpperCase();
 console.log(uppText);

let changedText = Array.prototype.join.call(text, ",");
let finish = array.prototype.map.call(text, function(v){
  return finish.toUpperCase() + ".";
});
console.log(changedText);
console.log(finish);*/

// выполнение второго задания 

let secondEx = "Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже";
console.log(secondEx);
let secondExChanged = secondEx.split(' '); //привел строку к массиву
//console.log(secondExChanged);
let three = secondExChanged.splice(0, 6, 'На');  //перебор массива 
//console.log(secondExChanged);
let four = secondExChanged.splice(3, 1, 'пришли:');  //перебор массива 
//console.log(secondExChanged);
let five = secondExChanged.splice(4, 1, 'Антон, Дима, Женя,');  //перебор массива 
//console.log(secondExChanged);
let six = secondExChanged.splice(6, 2);  //перебор массива 
//console.log(secondExChanged);
let seven = secondExChanged.join(' ');  //привел к строке
console.log(seven);

// Выполнение третьего задания

for (i = 1; i <= 100; i++){
  if(i%3 === 0 && i%5 === 0){
    console.log('FizzBuzz');
  }else if(i%5 === 0 ){
    console.log('Buzz');
  }else if(i%3 === 0){
    console.log('Fizz');
  }else{
    console.log(i);
  }
}
 // метод includes
let mass = [1, "pet", "ivan"];
console.log(mass.includes(1));
let massTwo = ["FirstName", "LastName"]
if (massTwo.includes ("FirstName")){
    console.log("you are right");
}else{
    console.log("sorry");
}

// метод indexOf
let arrayTwo = ["ivan", "Lena", "sergei"];
console.log (arrayTwo.indexOf("Lena"));
console.log(arrayTwo.indexOf("ivan"));

//метод concat
let firstArray = ['first name', 'last name',];
let secondArray = ['age', 'gender'];
let thirthArray = firstArray.concat(secondArray);
console.log(thirthArray);


