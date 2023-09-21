// Deep dive into closure

// function x() {
//     var a=5;
//     function y(){
//         console.log(a);
//         }
//         a=100;          //Corner case
//         return y;
// }
// var z = x();
// console.log(z);
// z();

// function z() {
//     var b = 1080;
//     function x(){
//         var a = 2800;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();




//SetTimeout()

// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
//     console.log("Hello")
// }
// x();


// function x(){
//     for(var i =1; i <= 5;  i++ ){
//     setTimeout(function (){
//         console.log(i);
//     }, i* 1000);
// }

// }
// x();




// function x(){
//     for(let i =1; i <= 5;  i++ ){
//     setTimeout(function (){
//         console.log(i);
//     }, i* 1000);
// }

// }
// x();

// How can we use var instead of let to get the same result

// function x(){
//     for(var i = 1; i <= 5; i++){
//         function close(i) {
//             setTimeout(function (){
//                 console.log(i);
//             }, i*1000);
            
    
//         }close(i);
//     }
// }
// x();



// function counter(){
//     var count = 0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = counter()
// counter1();
// counter1();
// counter1();

// var counter2 = counter()
// counter2();
// counter2();


