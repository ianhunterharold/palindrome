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

// WORSE SOLUTION FOR MY ANSWER while loop performed worse with runtime and memory used 
const justLetters = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

let start = 0;
let end = justLetters.length - 1;

while (start <= end) {
    console.log(justLetters[start],'START')
    console.log(justLetters[end],'END')
    if (justLetters[start] !== justLetters[end]) {
       
        return false
    }
    start++;
    end--;
}
return true

// crap solution but another solution