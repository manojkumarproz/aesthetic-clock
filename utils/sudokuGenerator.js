// Create empty 9x9
export const createEmptyBoard = () =>
  Array(9).fill(0).map(() => Array(9).fill(0));

// Check safe placement
const isSafe = (board, row, col, num) => {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num) return false;
  }

  const startRow = row - (row % 3);
  const startCol = col - (col % 3);

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (board[startRow + i][startCol + j] === num) return false;

  return true;
};

// Backtracking solver
const fillBoard = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const nums = [1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5);

        for (let num of nums) {
          if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (fillBoard(board)) return true;
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

// Remove cells for difficulty
const removeCells = (board, count) => {
  while (count > 0) {
    const r = Math.floor(Math.random() * 9);
    const c = Math.floor(Math.random() * 9);

    if (board[r][c] !== 0) {
      board[r][c] = 0;
      count--;
    }
  }
};

export const generateSudoku = (level) => {
  const board = createEmptyBoard();
  fillBoard(board);

  let removeCount = 30;

  if (level > 5) removeCount = 40;
  if (level > 10) removeCount = 50;
  if (level > 20) removeCount = 55;

  const puzzle = board.map(r => [...r]);
  removeCells(puzzle, removeCount);

  return {
    solution: board,
    puzzle,
  };
};
