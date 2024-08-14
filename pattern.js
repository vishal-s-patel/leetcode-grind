
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

// -------------------------------------    2nd pattern -----------------------------------------

/*
 * 
 *  * 
 *  *  * 
 *  *  *  * 
*/
let row = 4;
let pattern = [];
for(let i =1;i<=row; i++){
    let pattern_sub = [];
    let sub_str = '';
    for(let j =0;j<i; j++){
        sub_str = sub_str+' * ';
        pattern_sub.push(' * ');
    }
    console.log(sub_str);
    pattern.push(pattern_sub);
}
console.log(' array based pattern');
console.log(pattern);

// -------------------------------------------------- 3rd pattern -------------------------
/*
1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5
*/

let row = 5;
let pattern = [];
for(let i =1;i<=row; i++){
    let pattern_sub = [];
    let sub_str = '';
    for(let j =1;j<=i; j++){
        sub_str = sub_str+' '+ j;
        pattern_sub.push(j);
    }
    console.log(sub_str);
    pattern.push(pattern_sub);
}
console.log(' array based pattern');
console.log(pattern);

// -------------------------------------------------- 4th Pattern ----------------------------------------------

/*
 1
 2 2
 3 3 3
 4 4 4 4
 5 5 5 5 5
*/
let row = 5;
let pattern = [];
for(let i =1;i<=row; i++){
    let pattern_sub = [];
    let sub_str = '';
    for(let j =1;j<=i; j++){
        sub_str = sub_str+' '+ i;
        pattern_sub.push(i);
    }
    console.log(sub_str);
    pattern.push(pattern_sub);
}
console.log(' array based pattern');
console.log(pattern);

// --------------------------------------------------- 5th pattern ------------------------------------------------------------------
/*
 *  *  *  *  * 
 *  *  *  * 
 *  *  * 
 *  * 
 *
*/

let row = 5;
let column = 5;
let pattern = [];
for(let i =1;i<=row; i++){
    let pattern_sub = [];
    let sub_str = '';
    for(let j =0;j<=column -i; j++){
        sub_str = sub_str+' * ';
        pattern_sub.push(' * ');
    }
    console.log(sub_str);
    pattern.push(pattern_sub);
}
console.log(' array based pattern');
console.log(pattern);


// ----------------------------------------------------- 6th pattern ----------------------------------------------------------------------------------
/*
 1 2 3 4 5
 1 2 3 4
 1 2 3
 1 2
 1
*/

let row = 5;
let column = 5;
let pattern = [];
for(let i =0;i<=row; i++){
    let pattern_sub = [];
    let sub_str = '';
    for(let j =1;j<=column -i; j++){
        sub_str = sub_str+' '+j;
        pattern_sub.push( j );
    }
    console.log(sub_str);
    pattern.push(pattern_sub);
}
console.log(' array based pattern');
console.log(pattern);
