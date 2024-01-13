// write a funcstion called make_avg() which will take an three integers and return the average of those values.


function average(marks1, marks2, marks3) {
    var sum = marks1 + marks2 + marks3;
    var avgOfSum = sum / 3;
    console.log("marks average is ", avgOfSum)
}
average(10, 20, 30);



function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;

}
var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log("total singara : ", singaras);



function make_avg(num1, num2, num3) {
    var total = num1 + num2 + num3;
    var average = total / 3;
    return average;

}
const n1 = 10;
const n2 = 20;
const n3 = 40;
var avg = make_avg(n1, n2, n3);
console.log("Total average is", avg);