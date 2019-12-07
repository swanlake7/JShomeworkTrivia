$(document).ready(function () {
    $("#questionPg").hide();
    $("#end").hide();
    var vals = [
        {
            question: "which is not a canine breed?",
            answerChoice: ["cattle dog", "corndog", "shepherd dog", "bulldog"],
            theA: "corndog",
            img: '<img id="pix" src="C:\\Users\\Pearl\\Desktop\\corndog.jpeg" >'
        },

        {
            question: "This animal eats fruits and lives inside trees?",
            answerChoice: ["great horned owls", "sumatran rhinos", "japanese flying dwarf squirrel", "saiga antelopes"],
            theA: "japanese flying dwarf squirrel",
            img: '<img id="pix" src="C:\\Users\\Pearl\\Desktop\\warf.jpeg" >'
        },

        {
            question: "In Moby Dick, the main character is: ",
            answerChoice: ["sperm whale", "narwhal", "great white", "killer whale"],
            theA: "sperm whale",
            img: '<img id="pix"  src="C:\\Users\\Pearl\\Desktop\\moby.jpeg" >'
        },

        {
            question: "what is another name for flying foxes?",
            answerChoice: ["cats", "fruit flies", "hamsters", "fruit bats"],
            theA: "fruit bats",
            img: '<img id="pix" src="C:\\Users\\Pearl\\Desktop\\batty.jpeg" >'
        },]


    let questionNumber = -1;
    let timeLeft = 20;
    let unanswered = 0;
    let correct = 0;
    let incorrect = 0;

    $("#startButt").on("click", function () {
        $("#startButt").hide();
        $("#questionPg").show();
        setInterval(timer, 1000);
        displayQ();
    })

    function timer() {
        $("#timer").text(timeLeft);
        timeLeft--;
        if (timeLeft == 5) {
            showans();
            unanswered++;
            console.log("unanswered");
        }
        if (timeLeft == -1) {
            if (questionNumber == 3) {
                console.log("THE END OF QUESTIONS");
                $("#answerPg").hide();
                $("#questionPg").hide();
                $("#timer").hide();
                $("#correct").html("correct: " + correct);
                $("#incorrect").html("incorrect: " + incorrect);
                $("#unanswered").html("unanswered: " + unanswered);
                $("#restartButt").html("Restart Game!");
                // clearInterval(timer);
                $("#end").show();
            } else {
                $("#answerPg").hide();
                timeLeft = 20;
                displayQ();
            }
        }
    }

    var showans = function () {
        $('#pics').html('');
        $('#pics').append(vals[questionNumber].img);

        $("#questionPg").hide();
        $("#answerPg").show();
        $("#correctA").html("Correct Answer is: " + vals[questionNumber].theA);
    }
    function displayQ() {
        questionNumber++;
        $("#questionPg").show();
        $("#question").html(vals[questionNumber].question);
        for (let i = 0; i < vals[0].answerChoice.length; i++) {
            $("#choice" + i).html(vals[questionNumber].answerChoice[i]);
        }
    }

    $(".answerList").on("click", function () {
        timeLeft = 5;
        showans();
        var userans = $(this).text();
        var correctans = vals[questionNumber].theA;

        if (userans == correctans) {
            console.log("correct");
            correct++;
        } else {
            console.log("incorrect");
            incorrect++;
        }
        // showans();

    });


    $("#restartButt").on("click", function () {

        $("#restartButt").hide();
        $("#questionPg").show();
        $("#end").hide();
        $("#timer").show();
        setInterval(timer, 1000);
        questionNumber = -1;
        timeLeft = 20;
        displayQ();
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    });

});










