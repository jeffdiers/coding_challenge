module.exports = function findDuplicates(input) {
    return input.reduce(function(prev, curr) {
        prev[curr] ? prev[curr] += 1 : prev[curr] = 1
        return prev
    },{})
} 

module.exports = function renameCards(input) {
    if(input === 'A') {
        return 'Ace'
    } else if(input === 'Q') {
        return 'Queen'
    } else if(input === 'K') {
        return 'King'
    } else if(input === 'J') {
        return 'Jack'
    } else {
        return input
    }
}