// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//This is what makes the button work
$("#btnSubmit").click(function () {
    let hours = $("#numHours").val();

    // Check if the input is a valid integer
    if (!/^\d+$/.test(hours))
// / → Defines a regular expression in JavaScript.
// ^ → Ensures the match starts at the beginning of the string.
// \d + → Matches one or more digits(0 - 9).
//  $ → Ensures the match ends at the end of the string.
// The .test() method checks if hours matches the regex.
// ! inverts the result.
        { alert("Please enter a valid whole number for hours.");
        return;
    }

    let price = parseInt(hours) * 5;
    alert("I'm not very good at what I do, so I won't charge you much. That's why it's a hobby. Final price: $" + price);
});

//• A box for the user to enter the number of hours they need from you * 
//• Validation to make sure they actually entered a positive number * 
//• An non - editable box that shows how much you charge per hour * 
//• A button that allows the user to calculate the total * 
//• An output box that shows the total * 
//• Navigation back to the home page * 