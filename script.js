
function createChildren(v, h) {

    array = [];

    array.push([h + 1, v + 2]);
    array.push([h + 2, v + 1]);
    array.push([h + 2, v - 1]);
    array.push([h + 1, v - 2]);
    array.push([h - 1, v - 2]);
    array.push([h - 2, v -1]);
    array.push([h -2, v + 1]);
    array.push([h - 1, v + 2]);

    console.log(array);

    for (let i = array.length - 1; i >= 0; i--) {
        if ((array[i][0] < 0) || (array[i][1] < 0)) {
            array.splice(i, 1);
        }
        else if ((array[i][0] > 7) || (array[i][1] > 7)) {
            array.splice(i, 1);
        }
    }

    console.log(array);
}

createChildren(1, 1);