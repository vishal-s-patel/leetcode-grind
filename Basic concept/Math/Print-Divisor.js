function Divisor(n){
    let arr =[];
    for (let i = 1; i <=n; i++) {
        if(n%i == 0){
            arr.push(i);
        }
        
    }
    return arr;
}

let n = 114;
 let test = Divisor(n);
 console.log(test);


 // optimise code 
function Divisor1(n){
    let arr =[];
    for (let i = 1; i <=Math.sqrt(n); i++) {
        if(n%i == 0){
            let div = Math.floor(n/i);
            arr.push(i);
            if(i != div)
            arr.push(div);
        }
        
    }
    return arr;
}

n = 114;
test = Divisor(n);
 console.log(test);
