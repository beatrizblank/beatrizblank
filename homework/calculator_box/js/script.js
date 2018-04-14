

var a10=document.querySelector("#a10");
var a20=document.querySelector("#a20");
var a30=document.querySelector("#a30");
var n10=document.querySelector("#n10");
var n20=document.querySelector("#n20");
var n30=document.querySelector("#n30");
var red=document.querySelector("#red");
var blue=document.querySelector("#blue");
var out=document.querySelector("#out");


function changePlusTen() {

//1.Imput 
 var out=document.querySelector("#out").innerHTML; out=0; 
 var plusTen=document.querySelector("#a10").innerHTML; plusTen=10;
  // 2. change cero value // manipulating
 var ceroPlusTen = out + plusTen;
// 3. Output 
document.querySelector("#out").innerHTML=ceroPlusTen;

}

a10.onclick=changePlusTen

function changePlusTwenty() {

	var out=document.querySelector("#out").innerHTML; out=0; 
    var plusTwenty=document.querySelector("#a20").innerHTML; plusTWenty=20;

var ceroPLusTwenty = out + plusTWenty;

document.querySelector("#out").innerHTML=ceroPLusTwenty;

}

a20.onclick=changePlusTwenty

function changePlusThirty() {
	
	var out=document.querySelector("#out").innerHTML; out=0; 
    var plusThirty=document.querySelector("#a30").innerHTML; plusThirty=30;


var ceroPLusThirty = out + plusThirty;

document.querySelector("#out").innerHTML=ceroPLusThirty;

}

a30.onclick=changePlusThirty

function changeMinusTen() {

//1.Imput 
 var out=document.querySelector("#out").innerHTML; out=0; 
 var minusTen=document.querySelector("#n10").innerHTML; minusTen= -10;
  // 2. change cero value // manipulating
 var ceroMinusTen = out + minusTen;
// 3. Output 
document.querySelector("#out").innerHTML=ceroMinusTen;

}

n10.onclick=changeMinusTen

function changeMinusTwenty() {

	var out=document.querySelector("#out").innerHTML; out=0; 
    var minusTwenty=document.querySelector("#n20").innerHTML; minusTWenty= - 20;

var ceroMinusTwenty = out + minusTWenty;

document.querySelector("#out").innerHTML=ceroMinusTwenty;

}

n20.onclick=changeMinusTwenty


function changeMinusThirty() {
	
	var out=document.querySelector("#out").innerHTML; out=0; 
    var minusThirty=document.querySelector("#n30").innerHTML; minusThirty= - 30;


var ceroMinusThirty = out + minusThirty;

document.querySelector("#out").innerHTML=ceroMinusThirty;

}

n30.onclick=changeMinusThirty

function changeBackgroundRed() {

	var out=document.querySelector("#out").innerHTML;
	var red=document.querySelector("#red").innerHTML;

	var redBackground = red;

    document.querySelector("#out").style.background=redBackground;


}

red.onclick=changeBackgroundRed

function changeBackgroundBlue()
{
	var out=document.querySelector("#out").innerHTML;
	var blue=document.querySelector("#blue").innerHTML;

	var blueBackground = blue;

document.querySelector("#out").style.background=blueBackground;

}

blue.onclick=changeBackgroundBlue


function backToNormal() {

	var out=document.querySelector("#out").innerHTML.style;

	var normal =  out

	document.querySelector("#out") = normal;
    
}

out.onclick=backToNormal





