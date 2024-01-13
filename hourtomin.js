// Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes. 
// মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।


function convert(hour) {
    return hour * 60;

}
var value = 4;
var result = convert(value);
console.log("convertred result is: ", result, "min");


