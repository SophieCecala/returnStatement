// task 1
function func1(num){
    return num * num * num;
}

alert(func1(3));

// task 2
function func2(num) {
    return num * num;
}

let result2 = func2(3) + func2(4);
alert(result2);

// task 3
function sqrt3(num) {
    return Math.sqrt(num);
}

function round3(num) {
    return num.toFixed(3);
}

let root = sqrt3(7);
let result3 = round3(root);
alert(result3);

// task 4&5
function sqrt4(num) {
    return Math.sqrt(num);
}

function sum4(num1, num2, num3) {
    return num1 + num2 + num3;
}

function round4(num) {
    return num.toFixed(3);
}

let root1 = sqrt4(2);
let root2 = sqrt4(3);
let root3 = sqrt4(4);
let sum = sum4(root1, root2, root3);
let result4 = round4(sum);
alert(result4);

