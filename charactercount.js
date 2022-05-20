// Counting the number of letters in a word
function characterCount(string) {
    let table = {}
    for (let character of string.replace(/\W/g, "").toLowerCase()) {        // /\W/g is a regular expression used in removing spaces in sentences.
        table[character] = table[character] + 1 || 1                        // || means or while && means and.
    }
    return table
}
// console.log(characterCount("IMmeDiatEly"))    // Its always good to include .toLowerCase() or .toUpperCase so that the result can be harmoniZed, .toLowerCase is                                                    more preferable