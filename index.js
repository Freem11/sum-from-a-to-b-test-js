
function sum(fromN, toN) {

  if (fromN === toN) {
    return fromN
}

let newFrom = fromN + 1
return fromN + sum(newFrom, toN);

}

module.exports = sum;
