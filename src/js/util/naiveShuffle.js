/**
 * 
 * @param {Array<T>} array 
 * @returns Array<T>
 */
export default function naiveShuffle(array) {
    const l = array.length
    const randomPair = [...(Array(l).fill(0).map((_, i) => [Math.random(), array[i]]).sort((a, b) => a[0] - b[0]))]
    return randomPair.map(([_, second]) => second)
}