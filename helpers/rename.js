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