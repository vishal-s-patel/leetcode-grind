function countDigit(n){
    let count =0;
    while(n>0){
        n = Math.floor(n/10);
        count++;
    }
    return count;
}
let n =89876;
let count = countDigit(n);
console.log(count);



// https://www.geeksforgeeks.org/problems/count-digits5716/1

function evenlyDivides(N)
{
    //your code here
    let count =0;
    let original = N;
    while(N>0){
        let rem = Math.floor(N%10);
        if(Math.floor(original%rem) == 0) count++;
        N = Math.floor(N/10);
    }
    return count;
}

n =2446;
count = evenlyDivides(n);
console.log(count);
