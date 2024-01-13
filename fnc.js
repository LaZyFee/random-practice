// write a function called foo() which prints "foo" and a functon called bar() which prints "bar". call funtion bar() in the foo() funtion after printing. what will be th output?
// now call the foo()to see the output.


function foo() {
    console.log("foo");
    bar();
}
function bar() {
    console.log("bar");
}


foo();