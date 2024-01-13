// একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

function smallNumber(a, b, c) {
    return Math.min(a, b, c)
}
const result = smallNumber(5, 6, 2);
console.log(result);