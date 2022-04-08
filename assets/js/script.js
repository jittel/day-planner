// TODO: use moment to show current hour and change colors based on past/present/future

// setting the current time to check against time on the table
var currentTime = moment().format("HH");
console.log(currentTime)

// compare currentTime to time on table
var textArea = $("textarea")
var tableTime = "";
for (let i = 0; i < textArea.length; i++) {
    const element = textArea[i];
    console.log(element.getAttribute("id"));
    tableTime = element.getAttribute("id");

    // TODO: change class of table row depending on comparison
    if (currentTime > tableTime) {
        // add past class to these
        $(`#${tableTime}`).addClass("past")
    } else if (currentTime == tableTime) {
        // add present class to this
        $(`#${tableTime}`).addClass("present")
    } else if (currentTime < tableTime) {
        // add future class to these
        $(`#${tableTime}`).addClass("future")
    } else {
        // say it's broken or something idk
    }
}

var text = "";
// TODO: save typed stuff to local storage
$(".saveBtn").on("click", function (event){
    // console.log(event.target.previousElementSibling.id)
    text = $(`#${event.target.previousElementSibling.id}`).val();
    localStorage.setItem(event.target.id, text);
    console.log("success", text)
});

// TODO: shows the things in local storage on screen
$(document).ready(function() {
    for (let i = 09; i < 17; i++) {
        var innerText = $(`#${i}`)
        innerText.text(localStorage.getItem(`save${i}`))
    }
})
