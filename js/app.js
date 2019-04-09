'use strict';

// ++++++++++++++++++++DATA++++++++++++++++++++\\

//      App Data


//      Global Variables
var allProducts = [];

var previousArray = [];

var previous1;
var previous2;
var previous3;

var totalVotes = 25;

var products = [];
var productVotes = [];
var chartDrawn = false;
var myChart;


//      DOM Variables
var productContainer = document.getElementById('productContainer');

var product1 = document.getElementById('product1');
var product2 = document.getElementById('product2');
var product3 = document.getElementById('product3');

var voteTally = document.getElementById('voteTally');

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
function checkProductArray(product){
  for(var i = 0; i < previousArray.length; i++){
    if(product === previousArray[i]){
      // console.log('checking previousArray');
      product = Math.floor(Math.random() * allProducts.length);
    }
  }
  return product;
}

function updateChartArrays() {
  for(var i = 0; i < allProducts.length; i++){
    products[i] = allProducts[i].name;
    productVotes[i] = allProducts[i].votes;
  }
}


//  Core Functionality
function showRandomProduct1(){
  // console.log('showRandomProduct called');
  var randomImg1 = Math.floor(Math.random() * allProducts.length);
  // console.log(randomImg1);
  checkProductArray(randomImg1);
  while(randomImg1 === previous1 || randomImg1 === previous2 || randomImg1 === previous3){
    randomImg1 = Math.floor(Math.random() * allProducts.length);
    // console.log('duplicate found');
    // console.log('new randimage is ', randomImg1);
  }
  previous1 = randomImg1;
  previousArray[0] = randomImg1;
  allProducts[randomImg1].views++;
  product1.src = allProducts[randomImg1].filepath;
  product1.alt = allProducts[randomImg1].name;
  product1.title = allProducts[randomImg1].name;
  // var product1Vote = allProducts[randomImg1].votes; //new line testing debug of votes not counting
  // if(event.target === product1){
  //   allProducts[randomImg1].votes++;
  // }
  return allProducts[randomImg1];
}

function showRandomProduct2(){
  // console.log('showRandomProduct called');
  var randomImg2 = Math.floor(Math.random() * allProducts.length);
  // console.log(randomImg2);
  checkProductArray(randomImg2);
  while(randomImg2 === previous1 || randomImg2 === previous2 || randomImg2 === previous3){
    randomImg2 = Math.floor(Math.random() * allProducts.length);
    // console.log('duplicate found');
    // console.log('new randimage is ', randomImg2);
  }
  previous2 = randomImg2;
  previousArray[1] = randomImg2;
  allProducts[randomImg2].views++;
  product2.src = allProducts[randomImg2].filepath;
  product2.alt = allProducts[randomImg2].name;
  product2.title = allProducts[randomImg2].name;
  // allProducts[randomImg2].votes; //new line testing debug of votes not counting
  // if(event.target === product2){
  //   allProducts[randomImg2].votes++;
  // }

}

function showRandomProduct3(){
  // console.log('showRandomProduct called');
  var randomImg3 = Math.floor(Math.random() * allProducts.length);
  // console.log(randomImg3);
  checkProductArray(randomImg3);
  while(randomImg3 === previous1 || randomImg3 === previous2 || randomImg3 === previous3){
    randomImg3 = Math.floor(Math.random() * allProducts.length);
    // console.log('duplicate found');
    // console.log('new randimage is ', randomImg3);
  }
  previous1 = randomImg3;
  previousArray[2] = randomImg3;
  allProducts[randomImg3].views++;
  product3.src = allProducts[randomImg3].filepath;
  product3.alt = allProducts[randomImg3].name;
  product3.title = allProducts[randomImg3].name;
  // allProducts[randomImg3].votes; //new line testing debug of votes not counting
  // if(event.target === product3){
  //   allProducts[randomImg3].votes++;
  // }

}

function renderList(){
  var liEl = document.createElement('li');
  for(var i = 0; i < allProducts.length; i++){
    liEl = document.createElement('li');
    liEl.textContent = `${allProducts[i].votes} votes for ${allProducts[i].name}`;
    voteTally.appendChild(liEl);
  }
}

//  Event Handlers
function handleSectionClick(event){
  if(totalVotes > 0){ //changed totalVotes to decrement starting at 25
    for(var i = 0; i < allProducts.length; i++){
      if(event.target.title === allProducts[i].name){
        allProducts[i].votes++;
        updateChartArrays();
      }
    }
    totalVotes--;
    showRandomProduct1();
    showRandomProduct2();
    showRandomProduct3();
  } else {
    productContainer.removeEventListener('click', handleSectionClick);
    // renderList();
  }

}

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
document.getElementById('votesRemaining').textContent = `Votes Remaining: ${totalVotes}`;


//      Event listeners
productContainer.addEventListener('click', handleSectionClick);

document.getElementById('generateChart').addEventListener('click', function(){
  drawChart();
  console.log('chart is drawn');
});

document.getElementById('generateList').addEventListener('click', function() {
  renderList();
});

document.getElementById('voteTally').addEventListener('click', function() {
  document.getElementById('voteTally').hidden = true;
});



//          Chartjs
var data = {
  labels: products,
  datasets: [{
    label: 'Products',
    data: productVotes,
    backgroundColor: [
      'blue',
      'orange',
      'yellow',
      'green',
      'red'
    ],
    borderColor: [
      'black'
    ],
    borderWidth: 1
  }]
};

function drawChart(){
  var ctx = document.getElementById('votesChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      },
      scales: {
        yAxes: [{
          ticks: {
            max: 25,
            min: 0,
            stepSize: 1.0,
            beginAtZero: true
          }
        }]
      }
    }
  });
  chartDrawn = true;
}
