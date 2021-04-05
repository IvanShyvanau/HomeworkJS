
let text = "Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была речка"; //создал строку
console.log(text);


let changed = text.split(',');  //сделал массив
for ( let i of changed ){
  i = i.charAt(0).toUpperCase() + i.substr(1);
}
//console.log(changed);


let finish = changed.join('.');  //вернул строку
//console.log(finish);

var str = finish;
var newstr = str.replace(/было/i, 'Было');
var strSecond = newstr;
var newstrSecond = strSecond.replace(/лучшим/i, 'Лучшим');
console.log(newstrSecond);

/*
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


let secondEx = "Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже";
console.log(secondEx);
let secondExChanged = secondEx.split(' ');
//console.log(secondExChanged);
let three = secondExChanged.splice(0, 6, 'На');
//console.log(secondExChanged);
let four = secondExChanged.splice(3, 1, 'пришли:');
//console.log(secondExChanged);
let five = secondExChanged.splice(4, 1, 'Антон, Дима, Женя,');
//console.log(secondExChanged);
let six = secondExChanged.splice(6, 2);
//console.log(secondExChanged);
let seven = secondExChanged.join(' ');
console.log(seven);


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