// there is a variable called signal. its value can be green, yellow or red & we will get different activities as output depending on the variable.

function performActivity(signal) {
    switch (signal) {
        case 'green':
            return 'Go for a walk.';
        case 'yellow':
            return 'Slow down and prepare to stop.';
        case 'red':
            return 'Stop and wait.';
        default:
            return 'Invalid signal. Please provide a valid signal (green, yellow, or red).';
    }
}

// Example usage:
const signal = 'red';
const activity = performActivity(signal);
console.log(activity);

if (signal == "green") {
    console.log("Safe to go");
}
else if (signal == "yellow") {
    console.log("slow down");
}
else {
    console.log("Stop");
}