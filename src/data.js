class GameBlock {
  constructor(lett, num) {
    this.location = [lett, num];
    this.up = null;
    this.right = null;
    this.down = null;
    this.left = null;
  }
}

class GameBoard {
  constructor() {
    this.board = this.#buildBoard();
  }

  #buildBoard() {
    let boardArr = ["a", "b", "c", "d", "e", "f", "g", "h"];
    
    return;
  }
}

export default GameBoard;

/* 
PSUDEO CODE



*/
