//Array
let stringArr: string[] = ['one', 'hey', 'Dave']
let guitars: (string | number)[] = ['Strat', 'Les Paul', 5150]
let mixedData: (string | number | boolean)[] = ['EVH', 1984, true]
let test = []

//Tuple
let myTuple: [string, number, boolean] = ['Dave', 12, true];
let mixed = ['John', 1, false];

//Objects
type props = {
    prop1: string,
    prop2: string
}
let myObj: props = {
    prop1: 'Meow',
    prop2: 'Rain'
};
myObj.prop1 = 'Dave';
myObj.prop2 = 'Grey'

interface GuitarList {
    name: string,
    active?: boolean,// ?表示可选属性
    albums: (string | number)[]
}
/* 
上面接口这种用法和下面这种type写法都是可以的
type GuitarList = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}
*/
let evh: GuitarList = {
    name: 'MeowRain',
    active: true,
    albums: [1984, 'OU812']
}
let jp: GuitarList = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'III', 'IV']
}
const greetGuitarist = (guitarist: GuitarList): void => {
    const dialog: (HTMLElement | null) = document.getElementById('dialog');
    if (dialog) {
        dialog.innerText = `Hello, ${guitarist.name?.toUpperCase()}!\nThere are your albums ${guitarist.albums}`;
    }
    console.log(guitarist.name, guitarist.albums)
}
greetGuitarist(evh)
greetGuitarist(jp);

//Enums

enum Grade {
    A, B, C, D, E, F, G
}
console.log(Grade.A, Grade.B, Grade.C, Grade.D);//0 1 2 3

/*

*/
enum Num {
    A=3, B, C, D, E, F, G
}
console.log(Num.A, Num.B, Num.C, Num.D);//3 4 5 6