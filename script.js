"use strict";

let tC = 0;
let tF = 0;

tC = Number(prompt("Введите температуру в градусах по Цельсию:"));
tF = (9 / 5) * tC + 32;
alert("Температура в градусах по Фаренгейту: " + String(tF));

let admin;
let userName;

userName = "Vasilii";
admin = userName;
console.log(admin);

let result = 10 + 10 + "10";
console.log(result);

result= 10 + "10" + 10;
console.log(result);

result = 10 + 10 + +"10";
console.log(result);

result = 10 / -"";
console.log(result);

result = 10 / +"2,5";
console.log(result);

