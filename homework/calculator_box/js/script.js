

var a10=document.querySelector("#a10");
var a20=document.querySelector("#a20");
var a30=document.querySelector("#a30");
var n10=document.querySelector("#n10");
var n20=document.querySelector("#n20");
var n30=document.querySelector("#n30");
var red=document.querySelector("#red");
var blue=document.querySelector("#blue");
var out=document.querySelector("#out");


function changeCenter() {

//1.Imput 
 var plusTen=document.querySelector("#a10").innerHTML; plusTen=10;
 var plusTwenty=document.querySelector("#a20").innerHTML;
 var out=document.querySelector("#out").innerHTML; out=0; plusTWenty=20;

  // 2. change cero value // manipulating
 var ceroPlusTen = out + plusTen;
 var ceroPLusTwenty=document.querySelector("#a20").innerHTML;

// 3. Output 
document.querySelector("#out").innerHTML=ceroPlusTen;
document.querySelector("#out").innerHTML=ceroPlusTwenty;

}

a10.onclick=changeCenter
a20.onclick=changeCenter

console.log ()