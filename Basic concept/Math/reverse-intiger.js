https://leetcode.com/problems/reverse-integer/description/

var reverse = function(x) {
    let max = Math.pow(2,31);
 let min = Math.pow(2,31)*-1;
 let reverse_num =0;
 let neg = false;
 if(x<0) { 
     x = -1 * x;
     neg = true;
     };
 while(x>0){
     let rem = Math.floor(x%10);
     reverse_num = reverse_num *10 + rem;
     x = Math.floor(x/10)
 }
  if(reverse_num < min || reverse_num > max){
     return 0
 }
 if(neg) return -1*reverse_num;
 return reverse_num;
};

let test_rev = reverse(123);
console.log(test_rev);

//-------------------------------------------------------------------------------------

var reverse1 = function(x) {
    let reverse_num =0;
    let neg = false;
    if(x<0) { 
        x = -1 * x;
        neg = true;
        };
    while(x>0){
        let rem = Math.floor(x%10);
        reverse_num = reverse_num *10 + rem;
        x = Math.floor(x/10)
    }
    if(neg) return -1*reverse_num;
    return reverse_num;
   };
   
   test_rev = reverse1(1234222999999);
   console.log(test_rev);