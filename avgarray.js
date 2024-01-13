// একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে।

function arrayAverage(arr) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        sum += value;
    }
    avg = sum / arr.length;
    return avg;
}
const values = [5, 6, 3, 2, 4, 78, 91, 55, 14];
const result = arrayAverage(values);
console.log(result);