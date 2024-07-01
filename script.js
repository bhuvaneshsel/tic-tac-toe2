const gameBoard = (function() {
    const rows = 3;
    const columns = 3;
    let board = [["","",""],["","",""],["","",""]];
    

    const getBoard = () => board;

    const checkCellAvailability = (row, column) => {
        if (getBoard()[+row][+column] === "") {
            return true;
        }
        else {
            return false;
        }
    }

    

    return {
        getBoard, checkCellAvailability
    }

})();


const players = function(playerOneName = "Player One", playerTwoName = "Player Two")  {
    let playerOneTurn = true;

    const getPlayerTurn = () => playerOneTurn;

    const setPlayerTurn = (value) => {
        playerOneTurn = value;
    }

    const playerOne = {
        playerOneName,
        value: "X"
    }

    const playerTwo = {
        playerTwoName,
        value: "O",
    }

    return {
        playerOne, playerTwo, getPlayerTurn, setPlayerTurn
    };
}();

const displayController = function()  {

    let playGame = false;
    const container = document.querySelector(".container");
    const playButton = document.querySelector(".play");
    const resetButton = document.querySelector(".reset"); 

    playButton.addEventListener("click", (e) => {
        playGame = true;
    })

    container.addEventListener("click", (e) => {
        const row = e.target.classList[0].split("-")[1];
        const column = e.target.classList[1].split("-")[1];
        console.log(gameBoard.checkCellAvailability(row,column));
        console.log(players.getPlayerTurn());
        console.log(playGame);
        if (gameBoard.checkCellAvailability(row, column) && playGame) {
            if (players.getPlayerTurn() === true) {
                gameBoard.getBoard()[row][column] = "X";
                console.log(e.target);
                e.target.textContent = "X"
            }
            else {
                gameBoard.getBoard()[row][column] = "O";
                e.target.textContent = "O"; 
            }
            players.setPlayerTurn(!players.getPlayerTurn());
            console.log(gameFlow.checkForWin());

            
        }
    })


}();


const gameFlow = function() {

    let board = gameBoard.getBoard();

    const checkForWin = () => {
        if (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X" ||
            board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X" ||
            board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X" ||
            board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X" ||
            board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X" ||
            board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X" ||
            board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X" ||
            board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X"
        )
            {
                alert("Player One Wins!");
                reset();

            }
            if (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O" ||
                board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O" ||
                board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O" ||
                board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O" ||
                board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O" ||
                board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O" ||
                board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O" ||
                board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O"
            )
                {
                    alert("Player Two Wins!");
                    reset();
                }
    }
    
    const reset = () => {
        board = [["","",""],["","",""],["","",""]];

    }
    return {checkForWin};
}();

