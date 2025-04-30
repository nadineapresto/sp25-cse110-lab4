// Question 18
/* Original Code: Prints the time only once when program is executed
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
*/

// Modified Code: Prints the time every second
function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
};

// Call 'printTime' function every second
const intervalId = setInterval(printTime, 1000);