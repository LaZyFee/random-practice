// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

function leapYear(year) {
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
}

const yearToCheck = 2023;
const isLeap = leapYear(yearToCheck);
console.log(isLeap);