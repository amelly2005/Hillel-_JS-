/**
 * @param {string[]} strs
 * @return {string}
 */

function longestCommonPrefix(strs) {
    let inputWord = ""
    for (let i = 0; i < strs[0].length; i++) {
        if (strs.every(str => str[i] === strs[0][i])) inputWord += strs[0][i];
        else break;
    }
    return inputWord
}
console.log(longestCommonPrefix[""])
    

 