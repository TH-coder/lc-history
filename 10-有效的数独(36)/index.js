var isValidSudoku = function (board) {
    let flag = true;
    //判断水平方向
    for (let i = 0; i < board.length; i++) {
        const across = [];
        const arr = board[i];
        arr.forEach((item) => {
            if (!Number.isNaN(parseInt(item))) {
                across.push(item)
            }
        });
        if (across.length !== [...new Set(across)].length) {
            flag = false;
            return flag;
        }
    }
    //判断垂直方向
    for (let i = 0; i < 9; i++) {
        const vertical = [];
        board.forEach((item) => {
            if (!Number.isNaN(parseInt(item[i]))) {
                vertical.push(item[i])
            }
        });
        if (vertical.length !== [...new Set(vertical)].length) {
            flag = false;
            return flag;
        }
    }
    //九宫格方向
    const ninePoint = [[0, 3, 0, 3], [3, 6, 0, 3], [6, 9, 0, 3], [0, 3, 3, 6], [3, 6, 3, 6], [6, 9, 3, 6], [0, 3, 6, 9], [3, 6, 6, 9], [6, 9, 6, 9]];
    ninePoint.forEach((item) => {
        const nineBoard = [];
        for (let i = item[0]; i < item[1]; i++) {
            for (let j = item[2]; j < item[3]; j++) {
                if (!Number.isNaN(parseInt(board[i][j]))) {
                    nineBoard.push(board[i][j])
                }
            }
        }
        if (nineBoard.length !== [...new Set(nineBoard)].length) {
            flag = false;
            return flag;
        }
    });

    return flag
};