const createBoard = (rows, columns) => {
  //rows-> quantidade de linhas que quero usar
  //columns-> quantidade de colunas que quero usar
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return Array(columns)
        .fill(0)
        .map((_, columns) => {
          return {
            row,
            columns,
            opened: false,
            flagged: false,
            mined: false,
            exploned: false,
            nearMines: 0,
          };
        });
    });
};
//Array(15).fill(0) -> array de 15 elementos com o valor 0
//Array(15).fill(0).map((_,i)=>i+1) //_ ignora o elemento

const spreadMines = (board, minesAmount) => {
  const rows = board.length;
  const columns = board[0].length;
  let minesPlanted = 0;
  while (minesPlanted < minesAmount) {
    const rowSel = parseInt(Math.random() * rows, 10);
    const columnSel = parseInt(Math.random() * columns, 10);

    if (!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true;
      minesPlanted++;
    }
  }
};
const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
};
export {createMinedBoard};
