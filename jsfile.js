var a,b,c,d,e,f, t;
var sp="";
//a=b=c=d=e=f=0;
function func2(){
 clearInterval(t);
 clearInterval(t2);
}

function func3(){

t = setInterval(function(){ func1() }, 50);

t2 = setInterval(function(){ setColor() }, 1000);
 

}

function func1(){

    a= Math.floor(Math.random()*9 + 1) ;
    b= Math.floor(Math.random()*9 + 1) ;
    c= Math.floor(Math.random()*9 + 1) ;
    d= Math.floor(Math.random()*9 + 1) ;
    e= Math.floor(Math.random()*9 + 1) ;
    f= Math.floor(Math.random()*9 + 1) ;

document.getElementById('a').innerHTML = a + sp + b + sp + c + sp + d + sp + e + sp + f;
}

function setColor() {
    var x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == "rgb(230, 230, 220)" ? "rgb(200,200,190)" : "rgb(230, 230, 220)";
  }
   
//   function stopColor() {
//     clearInterval(myVar);
//   }