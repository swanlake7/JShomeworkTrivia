$(document).ready(function () {
    $("#questionPg").hide();
    $("#end").hide();
    var vals = [
        {
            question: "which is not a canine breed?",
            answerChoice: ["cattle dog", "corndog", "shepherd dog", "bulldog"],
            theA: "corndog",
            img: '<img id="pix" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ftheheritagecook.com%2Fwp-content%2Fuploads%2F2011%2F06%2FCorn-Dogs-on-Red-Paper-iStock.jpg&f=1&nofb=1" >'
        },

        {
            question: "This animal eats fruits and lives inside trees?",
            answerChoice: ["great horned owls", "sumatran rhinos", "japanese flying dwarf squirrel", "saiga antelopes"],
            theA: "japanese flying dwarf squirrel",
            img: '<img id="pix" src="https://i.chzbgr.com/full/7854938880/h5BC9D64C/" >'
        },

        {
            question: "In Moby Dick, the main character is: ",
            answerChoice: ["sperm whale", "narwhal", "great white", "killer whale"],
            theA: "sperm whale",
            img: '<img id="pix"  src="https://images-na.ssl-images-amazon.com/images/I/51-3tPs3VdL.jpg" >'
        },

        {
            question: "what is another name for flying foxes?",
            answerChoice: ["cats", "fruit flies", "hamsters", "fruit bats"],
            theA: "fruit bats",
            img: '<img id="pix" src="https://i.imgur.com/OzBeJL1.jpg" >'
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










