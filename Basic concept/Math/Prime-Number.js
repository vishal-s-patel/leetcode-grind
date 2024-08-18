function IsPrime(n){
    let count=0;
    for (let i = 1; i < Math.sqrt(n); i++) {
        if (n%i ==0) {
            count++
        }
        if (count>1) {
            return false;
        }
    }
    return true;
}
  let n = 13;
let prime = IsPrime(n);
console.log(prime);