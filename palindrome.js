/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length === 1) {
        return true
    }
    const justLetters = s.replace(/[^a-zA-Z0-9]/g, "");
    const forward = justLetters.toLowerCase();
    const reversed = justLetters.split('').reverse().join('').toLowerCase();
   
    if(forward === reversed){
        return true
    } else{ 
        return false
    }
};
