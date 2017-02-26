var questionsArray = [
    "What did Doctor Emmett Brown steal to power his time machine?",
    "Whom did he steal this from?"
];
var answersArray = [
    ["Titanium", "Plutonium", "Liquid Nitrogen", "Alfredo Sauce"],
    ["Lybians", "Russians", "Germans", "Iranians"]
];
var correctArray = [
    "B. Plutonium",
    "A. Lybians"
];
var correctNum = 0;
var incorrectNum = 0;
var notAnsweredNum = 0;
var counter = 0;
var timerCounter = 30;

$(document).ready(function() {

    $("#startGame").on("click", function(event) {
        $("#startGame").hide();
        $("#time").html("<h2>00.00</h2>");
        $("#trivia").html("<h2>QUESTIONS GO HERE</h2>");
        generateHTML();
        clock();
    });

    function clock() {
        var time = setInterval(thirty, 1000);

        function thirty() {
            if (timerCounter === 0) {
                clearInterval(time);
                lossTimout();
            }
            if (timerCounter > 0) {
                timerCounter--;
            }
            $("#time").html(timerCounter);
        }
    };

    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionsArray[counter] + "</p><p class='first-answer answer'>A. " + answersArray[counter][0] + "</p><p class='answer'>B. " + answersArray[counter][1] + "</p><p class='answer'>C. " + answersArray[counter][2] + "</p><p class='answer'>D. " + answersArray[counter][3] + "</p>";
        $("#trivia").html(gameHTML);
    };

    $("body").on("click", ".answer", function(event) {
        //answeredQuestion = true;
        selectedAnswer = $(this).text();
        console.log(selectedAnswer);
        console.log(correctArray[counter]);
        if (selectedAnswer === correctArray[counter]) {
            alert("correct");

            //clearInterval(theClock);
            //generateWin();
        } else {
            alert("wrong answer!");
            //clearInterval(theClock);
            //generateLoss();
        }
    });






});
