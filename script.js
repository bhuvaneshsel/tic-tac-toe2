const gameBoard = () => {
    const rows = 3;
    const columns = 3;
    const board = [];
    for (i = 0; i < rows; i++) {
        for (j =0; i < columns; j++) {
            board[i][j] = cell();
        }
    }

    const getBoard = () => board;

    const checkCellAvailability = (row, column) => {
        if (getBoard()[row][column] === "-") {
            return true;
        }
        else {
            return false;
        }
    }

    const cell = () => {
        let value = "-";

        const markBoard = (player) => {
            value = player;
        }

        const getValue = () => value;
        return {
            getValue, markBoard
        };
    }

    return {
        getBoard, checkCellAvailability, cell
    }
}

function players(playerOneName = "Player One", playerTwoName = "Player Two") {
    const playerOne = {
        playerOneName,
        value: "X"
    }

    const playerTwo = {
        playerTwoName,
        value: "O",
    }

    return {
        playerOne, playerTwo
    };
}

const displayController = () => {
    const container = document.querySelector(".container");
    const 

    container.addEventListener("click", (e) => {
        const row = e.target.classList[0].split("-")[1];
        const column = e.target.classList[1].split("-")[1];
        if (gameBoard.checkCellAvailability(row, column)) {
        }
    })
}

displayController();

const gameFlow = () => {

}