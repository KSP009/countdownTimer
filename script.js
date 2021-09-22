// let counter =document.getElementById('counter');
// let start =document.getElementById('start');
// start.addEventListener('click', function(){
//     document.getElementById('start').innerHTML="";
//     setTimeout(function(){
//         counter.innerHTML=10;
//         setTimeout(function(){
//             counter.innerHTML=9
//             setTimeout(function(){
//                 counter.innerHTML=8
//                 setTimeout(function(){
//                     counter.innerHTML=7
//                     setTimeout(function(){
//                         counter.innerHTML=6
//                         setTimeout(function(){
//                             counter.innerHTML=5
//                             setTimeout(function(){
//                                 counter.innerHTML=4
//                                 setTimeout(function(){
//                                     counter.innerHTML=3
//                                     setTimeout(function(){
//                                         counter.innerHTML=2
//                                         setTimeout(function(){
//                                             counter.innerHTML=1
//                                             setTimeout(function(){
//                                                 counter.innerHTML=0
//                                                 setTimeout(function(){
//                                                     counter.innerHTML='Happy Independence day'
//                                                 },1000)
//                                             },1000)
//                                         },1000)
//                                     },1000)
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
    
// })
let counter =document.getElementById('counter');
let start =document.getElementById('start');
start.addEventListener('click', function(){
    document.getElementById('start').innerHTML="";
    function f10(callback){
        setTimeout(()=>{
            counter.innerHTML =10;
            callback();
        },1000)
    }
    function f9(callback){
        setTimeout(()=>{
            counter.innerHTML =9;
            callback();
        },1000)
    }
    function f8(callback){
        setTimeout(()=>{
            counter.innerHTML =8;
            callback();
        },1000)
    }
    function f7(callback){
        setTimeout(()=>{
            counter.innerHTML =7;
            callback();
        },1000)
    }
    function f6(callback){
        setTimeout(()=>{
            counter.innerHTML =6;
            callback();
        },1000)
    }
    function f5(callback){
        setTimeout(()=>{
            counter.innerHTML =5;
            callback();
        },1000)
    }
    function f4(callback){
        setTimeout(()=>{
            counter.innerHTML =4;
            callback();
        },1000)
    }
    function f3(callback){
        setTimeout(()=>{
            counter.innerHTML =3;
            callback();
        },1000)
    }
    function f2(callback){
        setTimeout(()=>{
            counter.innerHTML =2;
            callback();
        },1000)
    }
    function f1(callback){
        setTimeout(()=>{
            counter.innerHTML =1;
            callback();
        },1000)
    }
    function fi(callback){
        setTimeout(()=>{
            counter.innerHTML ='Happy independence day';
            callback();
        },1000)
    }
    f10(()=>{
        f9(()=>{
            f8(()=>{
                f7(()=>{
                    f6(()=>{
                        f5(()=>{
                            f4(()=>{
                                f3(()=>{
                                    f2(()=>{
                                        f1(()=>{
                                            fi(()=>{

                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})