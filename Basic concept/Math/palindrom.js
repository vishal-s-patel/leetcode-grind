// https://leetcode.com/problems/palindrome-number/description/

var isPalindrome = function(x) {
    if(x<0) return false;
    let original = x;
    let reverse = 0;
    while(x>0){
        let rem = Math.floor(x%10);
        reverse = reverse *10 + rem;
        x = Math.floor(x/10);
    }
    if(reverse == original) return true;

    return false;
};
