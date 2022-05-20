
// Function for writing an anagram (testing if two different sentences are the same)
function anagram(string1, string2) {
    let countA = characterCount(string1)
    let countB = characterCount(string2)

    // !== means not equal to, while === means equal to both in type and value, == means equal to only in value.
    if (Object.keys(countA).length !== Object.keys(countB).length) {
        return false
    }

    for (let character in countA) {
        console.log(countA[character])
        if (countA[character] !== countB[character]) {
            return false
        }
    }
    return true
    console.log(typeof countA)
    console.log(typeof countB)
}

console.log(anagram("He is learning", "heislearning"))