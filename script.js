//1

for (let i = 0; i < 11; i++) {
    if (i===0)   
    {
        console.log(`${i} - это ноль`);
    } else if (i%2!==0)
    {
        console.log(`${i} - это нечётное число`);
    } else {
        console.log(`${i} - это чётное число`);
    }
}

//2

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.filter(num => (num<4)||(num>5)));

//3

const arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = Math.floor(Math.random()*10);
}
console.log(arr);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
}
console.log(sum);

let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if(arr[i]<min){
        min = arr[i];
    }
}
console.log(min);

let isThree = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        isThree = true;
        break;
    }
}
if (isThree) console.log('There is a 3'); else console.log('There is no 3');

//*

for (let i = 0; i < 20; i++) {
   console.log('x'.repeat(i));
}

//---

const newArray = [];
for (let i = 0; i < 10; i++) {
    newArray[i] = Math.floor(Math.random()*10);
}
console.log(newArray);

for (let i = 0; i < newArray.length; i++) {
    if (newArray[i]%2 === 0){
        console.log(newArray[i]*newArray[i]);
    } else if (newArray[i]%3 === 0){
        console.log(newArray[i]*newArray[i]*newArray[i]);
    }
}

//---
const anotherArr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
console.log(anotherArr);
let countThree = 0;
for (let i = 0; i < anotherArr.length; i++) {
    if (anotherArr[i] ===3) {
        countThree++;
    }
}
console.log(countThree);

//---
const theNewestArray = [1, 2, 3, 4, 5];
const removedElements = theNewestArray.map(num => num);
removedElements.splice(1,2);
console.log(removedElements);