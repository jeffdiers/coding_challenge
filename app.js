/*
* i3logix Code Challenge
* 
* Please refer to the README.md for challenge questions and complete your challenge below.
* 
* Steps:
*
* 1. Write your challenge code below.
* 2. Export a higher order function that will accept arguments for testing
*/


// export your function for testing
const findDuplicates = require('./helpers/duplicates')
const renameCard = require('./helpers/rename')
const lowHigh = require('./helpers/lowHigh')

module.exports = function rankHand(hand) {

    const sorted_hand = hand.slice().sort()
    let ranks = []
    let suits = []
    for(i = 0; i < sorted_hand.length; i++) {
        let last = sorted_hand[i].length - 1
        ranks.push(sorted_hand[i].slice(0, last))
        suits.push(sorted_hand[i][last])
    }
    
    const duplicate_ranks = findDuplicates(ranks)
    const duplicate_suits = findDuplicates(suits)

    let two_kind = 0
    let three_kind = 0
    let four_kind = 0
    let duplicate_rank 
    let high_card

    let low_high = lowHigh(ranks)

    let possible_straight = low_high.high_card_value - low_high.low_card_value === 4 ? true : false
    let flush = false

    for(suit in duplicate_suits) {
        if(duplicate_suits[suit] === 5) {
            flush = true
        }
    }

    for(rank in duplicate_ranks) {
        if(duplicate_ranks[rank] === 2) {
            two_kind++
            duplicate_rank = rank
        } else if(duplicate_ranks[rank] === 3) {
            three_kind++
            duplicate_rank = rank
        } else if(duplicate_ranks[rank] === 4) {
            four_kind++
            duplicate_rank = rank
        }
    }

    duplicate_rank = renameCard(duplicate_rank)
    high_card = renameCard(low_high.high_card_rank)

    if(two_kind === 1 && three_kind === 0) {
        return `Pair of ${duplicate_rank}s`
    } else if(two_kind === 2) {
        return "Two Pair"
    } else if(three_kind === 1 && two_kind === 0) {
        return "Three of a Kind"
    } else if(four_kind === 1) {
        return "Four of a Kind"
    } else if(three_kind === 1 && two_kind === 1) {
        return "Full House"
    } else if(flush && possible_straight && low_high.high_card_rank === 'A') {
        return "Royal Flush"
    } else if(flush && possible_straight) {
        return "Straight Flush"
    } else if(low_high.high_card_rank === 'A' && ranks[3] === '5' && flush) {
        return "Straight Flush"
    } else if(flush) {
        return high_card + " High Flush"
    } else if(possible_straight) {
        return high_card + " High Straight"
    } else if(low_high.high_card_rank === 'A' && ranks[3] === '5') {
        return "5 High Straight"
    } else {
        return high_card + " High"
    }
    
}