    Assignment Date - Tue June 16/22 - Thursday  6am June 23/22
Table of contents

Lab 6
Lab cw1
Lab cw2
Lab cw3
Assigining player choice
Onclick cells
lab cw1
Resizable div
Lab cw2
Slide show
Lab cw4
Tik Tac Toe

      (1) Grid layout

      The game grid is represented in the array Grid.cells as follows:

      [0] [1] [2]
      [3] [4] [5]
      [6] [7] [8]


      (2) Strategy of makeComputerMove()

      The computer first  looks for almost completed rows, columns, and
      diagonals, where there are two fields occupied either by the human
      player or by the computer itself. If the computer can win by
      completing a sequence, it does so; if it can block the player from
      winning with the next move, it does that. If none of that applies,
      it plays the center field if that's free, otherwise it selects a
      random free field. This is not a 100 % certain strategy, but the
      gameplay experience is fairly decent.
Assigining player choice
// Ask player if they want to play as X or O. X goes first.
function assignRoles() {
    askUser("Do you want to go first?");
    document.getElementById("yesBtn").addEventListener("click", makePlayerX);
    document.getElementById("noBtn").addEventListener("click", makePlayerO);
}

function makePlayerX() {
    player = x;
    computer = o;
    whoseTurn = player;
    playerText = xText;
    computerText = oText;
    document.getElementById("userFeedback").style.display = "none";
    document.getElementById("yesBtn").removeEventListener("click", makePlayerX);
    document.getElementById("noBtn").removeEventListener("click", makePlayerO);
}

function makePlayerO() {
    player = o;
    computer = x;
    whoseTurn = computer;
    playerText = oText;
    computerText = xText;
    setTimeout(makeComputerMove, 400);
    document.getElementById("userFeedback").style.display = "none";
    document.getElementById("yesBtn").removeEventListener("click", makePlayerX);
    document.getElementById("noBtn").removeEventListener("click", makePlayerO);
}
Onclick cells
// executed when player clicks one of the table cells
function cellClicked(id) {
    // The last character of the id corresponds to the numeric index in Grid.cells:
    var idName = id.toString();
    var cell = parseInt(idName[idName.length - 1]);
    if (myGrid.cells[cell] > 0 || whoseTurn !== player || gameOver) {
        // cell is already occupied or something else is wrong
        return false;
    }
    moves += 1;
    document.getElementById(id).innerHTML = playerText;
    // randomize orientation (for looks only)
    var rand = Math.random();
    if (rand < 0.3) {
        document.getElementById(id).style.transform = "rotate(180deg)";
    } else if (rand > 0.6) {
        document.getElementById(id).style.transform = "rotate(90deg)";
    }
    document.getElementById(id).style.cursor = "default";
    myGrid.cells[cell] = player;
    // Test if we have a winner:
    if (moves >= 5) {
        winner = checkWin();
    }
    if (winner === 0) {
        whoseTurn = computer;
        makeComputerMove();
    }
    return true;
}
Lab 6.4
Sortable list