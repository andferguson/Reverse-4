
const AI = {
  makeMove(strength, board) {
    if(strength === 0) {
      let index = Math.floor(Math.random() * 7);
    return index;
    }
    else if(strength === 1) {
      return 1;
    }
    else {
      return 1;
    }
  }
};

export default AI;
