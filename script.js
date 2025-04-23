
function getChildren(square) {

    array = [];
    const h = square[0];
    const v = square[1];

    array.push([h + 1, v + 2]);
    array.push([h + 2, v + 1]);
    array.push([h + 2, v - 1]);
    array.push([h + 1, v - 2]);
    array.push([h - 1, v - 2]);
    array.push([h - 2, v -1]);
    array.push([h -2, v + 1]);
    array.push([h - 1, v + 2]);

    for (let i = array.length - 1; i >= 0; i--) {
        if ((array[i][0] < 0) || (array[i][1] < 0)) {
            array.splice(i, 1);
        }
        else if ((array[i][0] > 7) || (array[i][1] > 7)) {
            array.splice(i, 1);
        }
    }

    return array;
}

function knightMoves(start, target) {
    let route = [];
    route.push(start);
    const targetChildren = getChildren(target);

    const checkChildren = (square) => {
        const children = getChildren(square);

        for (const child of children) {
            if (child[0] === target[0] && child[1] === target[1]) {
                console.log("yeh baby");
                route.push(target);
                return
            }
            for (const targetChild of targetChildren) {
                if (child[0] == targetChild[0] && child[1] == targetChild[1]) {
                    route.push(targetChild);
                    route.push(target);
                    return
                }
            }
        }
    }

    checkChildren(start);
    console.log(route);
}

// console.log(getChildren([0, 0]));
knightMoves([0, 0], [3, 3]);