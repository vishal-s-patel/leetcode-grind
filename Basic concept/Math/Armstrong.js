//https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1


function armstrongNumber(n) {
    // code here
    let original = n;
     let count =0;
    while(n>0){
        n = Math.floor(n/10);
        count++;
    }
    let sum =0;
    n = original;
    while(n>0){
        let rem = Math.floor(n%10);
        sum = sum + Math.pow(rem,count);
        n = Math.floor(n/10);
    }
    if(sum == original) return true;
    return false;
}

let is_armstrong = armstrongNumber(153);
console.log(is_armstrong);