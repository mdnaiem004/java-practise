// values method
// Create a Set
const letters7 = new Set(["a","b","c"]);

// Create an Iterator
const myIterator = letters7.values();

// List all Elements
let text9 = "";
for (const x of myIterator) {
  text9 += x + "<br>";
}

document.getElementById("value").innerHTML = text9;






// has
const letters3 = new Set(["a","b","c"]);

// Does the Set contain "d"?
answer = letters3.has("d");
document.getElementById("news").innerHTML = "The answer is " + answer;// add method
// Create a new Set
const letters1 = new Set(["a","b","c"]);

// Add a new Element
letters1.add("d");
letters1.add("e");

// Display set.size
document.getElementById("demo8").innerHTML = "The set has " + letters1.size + " values.";




// iterables

// Create aa Array
const letters = ["a","b","c"];

// List all Elements
let text5 = "";
for (const x of letters) {
  text5 += x + "<br>";
}

document.getElementById("demo7").innerHTML = text5;


// add a string
const a = 16 + "Volvo";
function showAdd(){
    document.getElementById("astring").innerHTML =a;
}
// do while lop
let text2 = ""
let i2 = 0;

do {
  text2 += "<br>The number is " + i2;
  i2++;
}
while (i2 < 10);  

document.getElementById("demo3").innerHTML = text2;




// while loop
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo6").innerHTML = text;



// show the iso dATE
const d = new Date("2015-03-25");
function showIso(){
    document.getElementById("iso").innerHTML =d;
}

// found the array
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits1.includes("Mango");

// found the position

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

document.getElementById("demo").innerHTML = "Apple is found in position " + position;

// Create and a Variable:
let car = "Fiat";
function showvariable(){
    document.getElementById("demo").innerHTML = "Car: " +  car;
}



// show  addition result
var x=5;
var y=4;
var z=x+y;
function showResult(){
    document.getElementById('result').innerHTML=""+z;
}

// showtotal
const price1 =2;
const price2 =3;
let total=price1+price2;
function showtotal(){
    document.getElementById('total').innerHTML=total;
}
// show pi
const pi=3.14;
let person="jhon Doe"



//showimg
function showImg(){
    document.getElementById('siii').src="images/web.jpg";
}
//showimg
function showImg(){
    document.getElementById('siii').src="images/naiem.jpg";
}





//bulb on/off
function bulbon(){
    document.getElementById('img').src="images/pic_bulbon.gif";
}
function bulboff(){
    document.getElementById('img').src="images/pic_bulboff.gif";
}







//show text








function showText(){
    document.getElementById('st').innerHTML="Hello there";
}
//show date
function showDate(){
    document.getElementById('sd').innerHTML=Date();
}
// change text 
function changeText(){
    document.getElementById('ct').innerHTML="Hello world";
}



// change the color of the text 
function changeColor(){
    document.getElementById('cc').style.color="red";
}



const div= document.getElementById("myDiv");
div.addEventListener("contextmenu", (e)=>{e.preventDefault()});

// show your name when clicking a button
function showName(){
    document.getElementById("output").innerHTML="mdAlamin";
}
// show a random number between 1 and 100
function showRandomNumber(){
    document.getElementById("output").innerText=Math.floor(Math.random()*100)+1;
}
// change the background color of the page
function changeBgColor(){
    document.body.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
}
// Show the sum of two numbers
function sumNumbers() {
    let a = 5, b = 10;
    document.getElementById("output").innerText = `Sum: ${a + b}`;
}

// multiply two numbers
function multiplyNumbers(){
    let a=4, b=3;
    document.getElementById("output").innerText=`Product:${a*b}`;
}
// swap two numbers
function swapNumbers(){
    let a=5, b=10;
    [a, b]=[b,a];
    document.getElementById("output").innerText=`Swapped:a=${a}, b=${b}`;
}
// show a short quote
function showQuote(){
    let quotes=["Belive in yourself!", "Never give up!", "practice more learn more!","Stay positive!"];
    document.getElementById("output").innerText=quotes[Math.floor(Math.random()*quotes.length)];
}
// reverse the text of a paragraph when clicking a button
function reverseText() {
    let para = document.getElementById("reversePara");
    para.innerText = para.innerText.split("").reverse().join("");
}

// change the font size of a paragraph when clicking a button
function changeFontSize() {
    let para = document.getElementById("fontPara");
    para.style.fontSize = (para.style.fontSize === "20px") ? "14px" : "20px";
}

// make the text bold when clicking a button
function makeBold() {
    let para = document.getElementById("boldPara");
    para.style.fontWeight = (para.style.fontWeight === "bold") ? "normal" : "bold";
}
