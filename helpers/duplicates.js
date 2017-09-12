module.exports = function findDuplicates(input) {
    return input.reduce(function(prev, curr) {
        prev[curr] ? prev[curr] += 1 : prev[curr] = 1
        return prev
    },{})
} 