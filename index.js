var rect = require('./rectangle.js');

function solveRect(l, b) {

    console.log("solving for rectangle with l = " + l + " breadth = " + b);

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR:" + err.message);
        } else {
            console.log("The Area of the rectangle is: " + rectangle.area());
            console.log("The Perimeter of the rectangle is: " + rectangle.perimeter());
        }
    })
    console.log("The statement is executed after a 2 second delay");

}

solveRect(2, 4);
solveRect(5, 6);
solveRect(-1, 20);
solveRect(2, 3);