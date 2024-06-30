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