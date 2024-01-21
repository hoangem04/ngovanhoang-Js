'use strict';
const restaurant = {
    name: 'Ngô Văn Hoàng',
    location: 'Hữu văn , Chương mỹ , Hà nội',
    category: ['italy', 'canada', 'america', 'japan'],
    starterMenu: ['abc', 'cde', 'jqk', 'qka'],
    mainMenu: ['piza', 'pasta', 'ristto'],

    order: function (starterIndex, mainIdex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIdex]];
    },

};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, second] = restaurant.category;
console.log(first, second);

const temp = first;
first = second;
second = temp;

console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

console.log(restaurant.order(2, 0));
const [bread, sugar] = restaurant.order(2, 1);
console.log(bread, sugar);

const arrdouble = [5, 6, [3, 4]];
const [i, , [j, k]] = arrdouble;
console.log(i, j, k);