'use strict';

// ++++++++++++++++++++DATA++++++++++++++++++++\\

//      App Data


//      Global Variables
var allProducts = [];

var previous = [];

var previous1;
var previous2;
var previous3;

var product1 = document.getElementById('product1');
var product2 = document.getElementById('product2');
var product3 = document.getElementById('product3');

//      DOM Variables


//      Constructor Functions
function ProductImage(name){
  // console.log(name, ' is created');
  this.filepath = `img/${name}.jpg`;
  this.name = name;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
  // console.log(name, ' is pushed to allProducts array');
}

// ++++++++++++++++++++Define Behaviors/Actions++++++++++++++++++++\\

//      Function Declarations

//  Helper Functions



//  Core Functionality
function showRandomProduct1(){
  console.log('showRandomProduct called');
  var randomImg1 = Math.floor(Math.random() * allProducts.length);
  console.log(randomImg1);
  while(randomImg1 === previous1 || randomImg1 === previous2 || randomImg1 === previous3){
    randomImg1 = Math.floor(Math.random() * allProducts.length);
    console.log('duplicate found');
    console.log('new randimage is ', randomImg1);
  }
  previous1 = randomImg1;
  allProducts[randomImg1].views++;
  product1.src = allProducts[randomImg1].filepath;
  product1.alt = allProducts[randomImg1].name;
  product1.title = allProducts[randomImg1].name;
}

function showRandomProduct2(){
  console.log('showRandomProduct called');
  var randomImg2 = Math.floor(Math.random() * allProducts.length);
  console.log(randomImg2);
  while(randomImg2 === previous1 || randomImg2 === previous2 || randomImg2 === previous3){
    randomImg2 = Math.floor(Math.random() * allProducts.length);
    console.log('duplicate found');
    console.log('new randimage is ', randomImg2);
  }
  previous2 = randomImg2;
  allProducts[randomImg2].views++;
  product2.src = allProducts[randomImg2].filepath;
  product2.alt = allProducts[randomImg2].name;
  product2.title = allProducts[randomImg2].name;
}

function showRandomProduct3(){
  console.log('showRandomProduct called');
  var randomImg3 = Math.floor(Math.random() * allProducts.length);
  console.log(randomImg3);
  while(randomImg3 === previous1 || randomImg3 === previous2 || randomImg3 === previous3){
    randomImg3 = Math.floor(Math.random() * allProducts.length);
    console.log('duplicate found');
    console.log('new randimage is ', randomImg3);
  }
  previous1 = randomImg3;
  allProducts[randomImg3].views++;
  product3.src = allProducts[randomImg3].filepath;
  product3.alt = allProducts[randomImg3].name;
  product3.title = allProducts[randomImg3].name;
}
//  Event Handlers


// ++++++++++++++++++++Executable Code++++++++++++++++++++\\
new ProductImage('bag');
new ProductImage('banana');
new ProductImage('bathroom');
new ProductImage('boots');
new ProductImage('breakfast');
new ProductImage('bubblegum');
new ProductImage('chair');
new ProductImage('cthulhu');
new ProductImage('dog-duck');
new ProductImage('dragon');
new ProductImage('pen');
new ProductImage('pet-sweep');
new ProductImage('scissors');
new ProductImage('shark');
new ProductImage('sweep');
new ProductImage('tauntaun');
new ProductImage('unicorn');
new ProductImage('usb');
new ProductImage('water-can');
new ProductImage('wine-glass');


//      Functions Calls
showRandomProduct1();
showRandomProduct2();
showRandomProduct3();

//      Event listeners
