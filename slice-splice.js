// use of slice - slice doesn't change main array

const age = [20, 24, 25, 21, 23, 22, 18, 19];

const remove = age.slice(2, 5);

console.log("the main array is", age);

console.log("removed using slice : ", remove);
console.log("after slice the array is", age);

// use of splice - splice change main array and can add value between them

const remove2 = age.splice(3, 4, 90, 95, 99, 100, 80, 70);

console.log("removed using splice : ", remove2);
console.log("after adding new item: ", age);