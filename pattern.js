
/*
 *  *  *  * 
 *  *  *  * 
 *  *  *  * 
 *  *  *  * 
*/
let row = 4;
let column = 4;
let pattern = [];
for(let i =0;i<row; i++){
    let pattern_sub = [];
    let sub_str = '';
    for(let j =0;j<column; j++){
        sub_str = sub_str+' * ';
        pattern_sub.push(' * ');
    }
    console.log(sub_str);
    pattern.push(pattern_sub);
}
console.log(' array based pattern');
console.log(pattern);
