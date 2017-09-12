module.exports = function lowHigh(input) {
    let straight_object = {
        high_card_value: null,
        low_card_value: null,
        high_card_rank: null
    }

    let new_array = []
    for(i = 0; i < input.length; i++) {
        if(input[i] === 'A') {
            new_array.push(14)
        } else if(input[i] === 'K') {
            new_array.push(13)
        } else if(input[i] === 'Q') {
            new_array.push(12)
        } else if(input[i] === 'J') {
            new_array.push(11)
        } else {
            new_array.push(parseInt(input[i]))
        }
    }
    
    straight_object.high_card_value = Math.max(...new_array)
    straight_object.low_card_value = Math.min(...new_array)
    straight_object.high_card_rank = input[new_array.indexOf(Math.max(...new_array))]

    return straight_object
}