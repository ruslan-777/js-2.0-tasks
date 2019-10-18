let a = 7;
let b = 9;
console.log(a * b);

let c = 7;
let d = 9;
console.log(c / d);

let e = 3;
let f = 5;
console.log(e + f);

let e1 = '3';
let f1 = '5';
console.log(e1 + f1); // Конкатенация. К 'строкам' математические действия невозможны

let e2 = 3;
let f2 = 0;
console.log(e2 / f2);

let e3 = 3;
let f3 = 'Hello';
console.log(e3 + f3);

let e4 = 3;
let f4 = 'Hello';
console.log(e4 * f4);

let input1 = document.querySelector('.input1');
let button1 = document.querySelector('.button1');
button1.onclick = function () {
    console.log(input1.value);
}

let input2 = document.querySelector('.input2');
let button2 = document.querySelector('.button2');
let div2 = document.querySelector('.div2');
button2.onclick = function () {
    let b = input2.value;
    div2.innerHTML = b;
    input2.value = '';
}

let input3 = document.querySelector('.input3');
let button3 = document.querySelector('.button3');
let div3 = document.querySelector('.div3');
button3.onclick = function () {
    let b = input3.value;
    let c = 10;
    div3.innerHTML = b * c;
}

let input4 = document.querySelector('.input4');
let button4 = document.querySelector('.button4');
let div4 = document.querySelector('.div4');
button4.onclick = function () {
    let b = +input4.value;
    let c = 10;
    div4.innerHTML = b + c;
}

let input5 = document.querySelector('.input5');
let input6 = document.querySelector('.input6');
let button5 = document.querySelector('.button5');
button5.onclick = function () {
    let b = input5.value;
    let c = input6.value;
    console.log('Hello', b, c)
}

let input7 = document.querySelector('.input7');
let input8 = document.querySelector('.input8');
let button6 = document.querySelector('.button6');
let div5 = document.querySelector('.div5');
button6.onclick = function () {
    let b = +input7.value;
    let c = +input8.value;
    div5.innerHTML = (b + c);
}

let input9 = document.querySelector('.input9');
input9.value = 'Hello';

let y = document.querySelector('.input10');
y.style.border = '2px solid red';

let input11 = document.querySelector('.input11');
let input12 = document.querySelector('.input12');
let button7 = document.querySelector('.button7');
let div6 = document.querySelector('.div6');
button7.onclick = function () {
    let b = input11.value;
    let c = input12.value;
    div6.innerHTML = (b + c);
}

let input13 = document.querySelector('.input13');
let button8 = document.querySelector('.button8');
button8.onclick = function () {
    let t = input13.value;
    t = parseInt(t);
    console.log(t);
}

let input14 = document.querySelector('.input14'); //
let button9 = document.querySelector('.button9');
button9.onclick = function () {
    let t = input14.value;
    t = parseFloat(t);
    console.log(t);
}

let input15 = document.querySelector('.input15');
let input16 = document.querySelector('.input16');
let button10 = document.querySelector('.button10');
let div7 = document.querySelector('.div7');
button10.onclick = function () {
    let b = input15.value;
    b = parseInt(b);
    let c = input16.value;
    c = parseInt(c);
    div7.innerHTML = (b + c);
}


