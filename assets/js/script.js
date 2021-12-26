var userText9 = document.querySelector("#user-text-9");
var userSaveBtn9 = document.querySelector("#user-save-Btn9");
var userText9 = document.querySelector("#user-text-10");
var userSaveBtn9 = document.querySelector("#user-save-Btn-10");
var userText9 = document.querySelector("#user-text-11");
var userSaveBtn9 = document.querySelector("#user-save-Btn-11");
var userText9 = document.querySelector("#user-text-12");
var userSaveBtn9 = document.querySelector("#user-save-Btn-12");
var userText9 = document.querySelector("#user-text-13");
var userSaveBtn9 = document.querySelector("#user-save-Btn-13");
var userText9 = document.querySelector("#user-text-14");
var userSaveBtn9 = document.querySelector("#user-save-Btn-14");
var userText9 = document.querySelector("#user-text-15");
var userSaveBtn9 = document.querySelector("#user-save-Btn-15");
var userText9 = document.querySelector("#user-text-16");
var userSaveBtn9 = document.querySelector("#user-save-Btn-16");
var userText9 = document.querySelector("#user-text-17");
var userSaveBtn9 = document.querySelector("#user-save-Btn-17");
var currentDate = moment().format("MMM Do YYYY, h:mm:ss a");


// displays current date
var currentDateDisplay = function () {
    document.getElementById("currentDay").innerText = currentDate;
}
currentDateDisplay();

// // list
// $(".list-group").on("click", "textarea", function () {
//     console.log(this);
// });



// have the function execute when the DOM is loaded
$(document).ready(function () {
    changeColor();
    //   saveText();
});

var changeColor = function () {
    //have the color change depending on the Current time 
    var currentTime = moment().hours();
    // if the current time is eagual to true OR fals then put in the console.
    if (currentTime === "true") {
        console.log("This is current time")
    } else (
        console.log("this is NOT the current time")
    )

    $("user-text").each(function () {
        var checkTime = parseInt($(this).attr("class"));
        console.log(checkTime);

        if (currentTime > checkTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else (currentTime < checkTime); {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("pass");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    })
};


