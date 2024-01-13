// একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

function smallNumber(number) {
    let small = number[0];
    for (let i = 0; i < number.length; i++) {

        if (small > number[i]) {
            small = number[i];
        }
    }
    return small;
}
const numbers = [10, 15, 100, 1, 2000];
const result = smallNumber(numbers);
console.log(result);