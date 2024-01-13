// একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা।

function triangleArea(a, b, c) {
    const s = (a + b + c) / 2;

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return area;
}
const result = triangleArea(5, 6, 7);
console.log(result);
