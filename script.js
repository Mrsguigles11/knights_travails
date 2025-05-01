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

function knightMoves(start, target) {

  //initiate route with starting square
  let route = [];
  route.push(start);
  const targetChildren = getChildren(target);

  const checkChildren = (square) => {

    //get children of square and check for target or targets child
    const children = getChildren(square);

    for (const child of children) {
      if (child[0] === target[0] && child[1] === target[1]) {
        route.push(target);
        return;
      }
      for (const targetChild of targetChildren) {
        if (child[0] == targetChild[0] && child[1] == targetChild[1]) {
          route.push(targetChild);
          route.push(target);
          return;
        }
      }
    }

    //if not found find nearest square to target and run function again
    let currentDifference = 14;
    let nextSquare;

    for (const child of children) {
      const difference = (Math.abs(child[0] - target[0])) + (Math.abs(child[1] - target[1]));
      if (difference < currentDifference) {
        currentDifference = difference;
        nextSquare = child;
      }
    }

    route.push(nextSquare);
    checkChildren(nextSquare);
  };

  checkChildren(start);

  return route;
}

console.log(knightMoves([0,0], [7,7]));