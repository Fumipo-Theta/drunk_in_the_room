import shuffle from "./naiveShuffle.js"

const randomTake = takeNum => array => {
    return shuffle(array).slice(0, takeNum)
}

class Matrix {
    constructor(array2d) {

    }
}


const smartShuffle = (groupNum) => array => {
    const index = array.map((_, i) => i)
    const l = array.length
    const maxPopulation = parseInt((l + 1) / groupNum)

    const excludeColumns = randomTake(groupNum - 1)(index)
}