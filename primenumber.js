// কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;

}
const result = isPrime(12);
console.log(result);