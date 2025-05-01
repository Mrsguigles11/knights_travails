function getChildren(square) {
    array = [];
    const h = square[0];
    const v = square[1];
  
    array.push([h + 1, v + 2]);
    array.push([h + 2, v + 1]);
    array.push([h + 2, v - 1]);
    array.push([h + 1, v - 2]);
    array.push([h - 1, v - 2]);
    array.push([h - 2, v - 1]);
    array.push([h - 2, v + 1]);
    array.push([h - 1, v + 2]);
  
    for (let i = array.length - 1; i >= 0; i--) {
      if (
        array[i][0] < 0 ||
        array[i][1] < 0 ||
        array[i][0] > 7 ||
        array[i][1] > 7
      ) {
        array.splice(i, 1);
      }
    }
  
    return array;
  }
  
  function knightMoves(start, end) {
    let que = [[start, start]];
    let visited = new Set();
  
    while (que.length !== 0) {
      const current = que.shift();
      let [currentSquare, ...path] = current;
      if (visited.has(currentSquare)) {
        continue;
      }
      visited.add(currentSquare);
  
      if (currentSquare[0] === end[0] && currentSquare[1] === end[1]) {
        return path;
      }
      const children = getChildren(currentSquare);
  
      for (const child of children) {
        que.push([child, ...path, child]);
      }
    }
  }
  