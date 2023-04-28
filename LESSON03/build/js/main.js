"use strict";
//Array
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
let test = [];
//Tuple
let myTuple = ['Dave', 12, true];
let mixed = ['John', 1, false];
let myObj = {
    prop1: 'Meow',
    prop2: 'Rain'
};
myObj.prop1 = 'Dave';
myObj.prop2 = 'Grey';
/*
上面接口这种用法和下面这种type写法都是可以的
type GuitarList = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}
*/
let evh = {
    name: 'MeowRain',
    active: true,
    albums: [1984, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'III', 'IV']
};
const greetGuitarist = (guitarist) => {
    var _a;
    const dialog = document.getElementById('dialog');
    if (dialog) {
        dialog.innerText = `Hello, ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!\nThere are your albums ${guitarist.albums}`;
    }
    console.log(guitarist.name, guitarist.albums);
};
greetGuitarist(evh);
greetGuitarist(jp);
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["E"] = 4] = "E";
    Grade[Grade["F"] = 5] = "F";
    Grade[Grade["G"] = 6] = "G";
})(Grade || (Grade = {}));
console.log(Grade.A, Grade.B, Grade.C, Grade.D); //0 1 2 3
/*

*/
var Num;
(function (Num) {
    Num[Num["A"] = 3] = "A";
    Num[Num["B"] = 4] = "B";
    Num[Num["C"] = 5] = "C";
    Num[Num["D"] = 6] = "D";
    Num[Num["E"] = 7] = "E";
    Num[Num["F"] = 8] = "F";
    Num[Num["G"] = 9] = "G";
})(Num || (Num = {}));
console.log(Num.A, Num.B, Num.C, Num.D); //3 4 5 6
