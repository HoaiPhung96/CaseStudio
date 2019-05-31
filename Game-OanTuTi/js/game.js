var player = {
    move: "?",
    score: 0
};

var systemAI = {
    moves: ["Búa", "Bao", "Kéo"],
    move: "?",
    score: 0
};

var systemAIPt = document.getElementsByClassName("systemAIPt");
var gameOverBox = document.getElementById("gameOverBox");

function getPlayerMove(move) {
    player.move = move;
    getSystemAIMove();
    displayMoves();
    resolveTurn();
    checkForWin();
}

function getSystemAIMove() {
    systemAI.move = systemAI.moves[Math.floor(Math.random() * 3)];
}

function displayMoves() {
    switch (player.move) {
        case "Búa":
            document.getElementById("playerMove").innerHTML = "<i class='fa fa-hand-rock-o'></i>";
            break;
        case "Bao":
            document.getElementById("playerMove").innerHTML = "<i class='fa fa-hand-paper-o'></i>";
            break;
        default:
            document.getElementById("playerMove").innerHTML = "<i class='fa fa-hand-scissors-o fa-flip-horizontal'></i>";
            break;
    }

    switch (systemAI.move) {
        case "Búa":
            document.getElementById("systemAIMove").innerHTML = "<i class='fa fa-hand-rock-o'></i>";
            break;
        case "Bao":
            document.getElementById("systemAIMove").innerHTML = "<i class='fa fa-hand-paper-o'></i>";
            break;
        default:
            document.getElementById("systemAIMove").innerHTML = "<i class='fa fa-hand-scissors-o'></i>";
            break;
    }
}

function resolveTurn() {
    if (player.move === systemAI.move) {
        document.getElementById("playByPlay").innerHTML = ("Cả hai người chơi đã chọn " + player.move + ".");
        document.getElementById("turnScore").innerHTML = "Vòng này là một trận hòa";
    } else {
        switch (player.move) {
            case "Búa":
                if (systemAI.move === "Bao") {
                    document.getElementById("playByPlay").innerHTML = "Bao thắng búa.";
                    incSystemAIScore();
                } else {
                    document.getElementById("playByPlay").innerHTML = "Búa thắng kéo.";
                    incPlayerScore();
                }
                break;

            case "Bao":
                if (systemAI.move === "Kéo") {
                    document.getElementById("playByPlay").innerHTML = "Kéo thắng bao.";
                    incSystemAIScore();
                } else {
                    document.getElementById("playByPlay").innerHTML = "Bao thắng búa.";
                    incPlayerScore();
                }
                break;

            default:
                if (systemAI.move === "Búa") {
                    document.getElementById("playByPlay").innerHTML = "Búa thắng kéo.";
                    incSystemAIScore();
                } else {
                    document.getElementById("playByPlay").innerHTML = "Kéo thắng bao.";
                    incPlayerScore();
                }
        }
    }
}

function incPlayerScore() {
    document.getElementById("turnScore").innerHTML = "Bạn thắng vòng này.";
    document.getElementsByClassName("playerPt")[player.score].setAttribute("style", "background-color: royalblue;");
    player.score++;
}

function incSystemAIScore() {
    document.getElementById("turnScore").innerHTML = "Bạn thua vòng này.";
    systemAIPt[systemAI.score].setAttribute("style", "background-color: red;");
    systemAI.score++;
}

function checkForWin() {
    if (player.score === 3) {
        gameOverBox.setAttribute(
            "style",
            "display: block; background-color: lightgreen; border-color: darkgreen;"
        );
        document.getElementById("gameOverHead").innerHTML = "Xin chúc mừng!";
        document.getElementById("gameOverMsg").innerHTML = "Bạn đã thắng trò chơi!";
    } else if (systemAI.score === 3) {
        gameOverBox.setAttribute(
            "style",
            "display: block; background-color: rgb(256,164,164); border-color: rgb(128,0,0);"
        );
        document.getElementById("gameOverHead").innerHTML = "Xin chúc mừng!";
        document.getElementById("gameOverMsg").innerHTML = "Chúc may mắn lần sau!";
    }
}

function playAgain() {
    gameOverBox.setAttribute("style", "display: none;");
    document.getElementById("playByPlay").innerHTML = "Chơi lại?";
    document.getElementById("turnScore").innerHTML = "Vui lòng chọn trước.";
    for (var i = 0; i < 3; i++) {
        document.getElementsByClassName("playerPt")[i].setAttribute("style", "background-color: #ccc;");
        systemAIPt[i].setAttribute("style", "background-color: #ccc;");
    }
    document.getElementById("playerMove").innerHTML = ("<i class='fa fa-smile-o'></i>");
    document.getElementById("systemAIMove").innerHTML = ("<i class='fa fa-smile-o'></i>");
    player.score = 0;
    systemAI.score = 0;
}

$('body').toggleClass('day-background');

$('#cb1').on('click', function() {
    $('body').toggleClass('day-background');
});