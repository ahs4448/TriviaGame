var questions = [{
    question: "What did Doctor Emmett Brown steal to power his time machine?",
    choices: ["Titanium", "Plutonium", "Liquid Nitrogen", "Alfredo Sauce"],
    answer: 2
}, {
    question: "Whom did he steal this from?",
    choices: ["Lybians", "Russians", "Germans", "Iranians"],
    answer: 1
}];

var userAnswer = [];
var correct;
var incorrect;

$(document).ready(function() {

    $("#startGame").on("click", function(event) {
        $("#startGame").hide();
        $("#time").html("<h2>00.00</h2>");
        $("#questions").html("<h2>QUESTIONS GO HERE</h2>");
        countdown(1);
    });

    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes

        function tick() {
            //This script expects an element with an ID = "counter". You can change that to what ever you want. 
            var counter = document.getElementById("counter");
            var current_minutes = mins - 1
            seconds--;
            counter.innerHTML = "<h1>" + current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds) + "</h1>";
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {
                if (mins > 1) {
                    countdown(mins - 1);
                }
            }
        }
        tick();
    };






});
