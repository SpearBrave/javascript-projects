/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
  
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
    for (let a=0 ; a<=20 ;a++){
      console.log(a,"\n");
     }
     
     for (let b= 3;  b< 29 ;b = b + 2 ) {
        
           console.log( b,"\n")
     }
     
     for (let c=12;c >-14; c=c-2){
       console.log(c,"\n");
     }
     
     for (d=50; d >20 ; d--){
     
       if ( d % 3 === 0 ) {
         console.log(d,"\n");
       
       }
     }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     /*Exercise #2: 
     Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
     
     
     Construct ``for`` loops to accomplish the following tasks:
       a. Print each element of the array to a new line.
       b. Print each character of the string - in reverse order - to a new line. */ 
     let str = ('LaunchCode');
     let arr= [1, 5, 'LC101', 'blue', 42];
     
     for (let i = 0; i<arr.length;i++){
     
         console.log(arr[i] );
       
     }
     let rev= []
      rev= str.split('').reverse().join('');
     for (let i = 0; i<str.length;i++){
        
           console.log(rev[i]);
       
       
       
     
     
     }
     
     
     
     
     /*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
       a. One array contains the even numbers, and the other holds the odds.
       b. Print the arrays to confirm the results. */
     
       let set = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] ;
       let odd= [];
       let even= [];
       let i = 0 ;
         for ( i=0 ;i<set.length ;i++){
           if ( set[i]%2===0 ){
     
             even.push(set[i]);
           }else{
             odd.push(set[i]);
           }
             
         }
     console.log(even);
             console.log(odd);