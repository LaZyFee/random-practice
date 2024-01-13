// কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। 

function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two numbers.";
    }

    let firstLargest = arr[0];
    let secondLargest = arr[1];

    if (firstLargest < secondLargest) {
        [firstLargest, secondLargest] = [secondLargest, firstLargest];
    }

    for (let i = 2; i < arr.length; i++) {
        const num = arr[i];

        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        } else if (num > secondLargest && num !== firstLargest) {
            secondLargest = num;
        }
    }

    return secondLargest;
}

const numbers = [5, 8, 2, 10, 7];
const result = findSecondLargest(numbers);
console.log(result);
