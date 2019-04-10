'use strict';

// ++++++++++++++++++++DATA++++++++++++++++++++\\

//      App Data


//      Global Variables
var allProducts = [];

var previousArray = [];

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
function newCheckProductArray(product){
  previousArray = previousArray.slice(-6, previousArray.length);
  while(previousArray.includes(product)){
    console.log('previous array contains ', product);
    product = Math.floor(Math.random() * allProducts.length);
  }
  return product;
}

function updateChartArrays() {
  for(var i = 0; i < allProducts.length; i++){
    products[i] = allProducts[i].name;
    productVotes[i] = allProducts[i].votes;
  }
}

function showRandom(imageId){
  var randomImg = Math.floor(Math.random() * allProducts.length);
  // checkProductArray(randomImg);
  // previousArray.push(randomImg);
  console.log('randimg before check', randomImg);
  var checkedImg = newCheckProductArray(randomImg);
  console.log('randimg after check', checkedImg);
  previousArray.push(checkedImg);
  allProducts[checkedImg].views++;
  imageId.src = allProducts[checkedImg].filepath;
  imageId.alt = allProducts[checkedImg].name;
  imageId.title = allProducts[checkedImg].name;
  return allProducts[checkedImg];
}

//  Core Functionality

function renderList(){
  var liEl = document.createElement('li');
  for(var i = 0; i < allProducts.length; i++){
    liEl = document.createElement('li');
    liEl.textContent = `${allProducts[i].votes} votes for ${allProducts[i].name}`;
    voteTally.appendChild(liEl);
  }
}

function showTotalVotes(){
  document.getElementById('votesRemaining').textContent = `Votes Remaining: ${totalVotes}`;
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
    showTotalVotes();
    console.log('total votes = ', totalVotes);
    showRandom(product1);
    showRandom(product2);
    showRandom(product3);
  } else {
    productContainer.removeEventListener('click', handleSectionClick);
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
showTotalVotes();
showRandom(product1);
showRandom(product2);
showRandom(product3);




//      Event listeners
productContainer.addEventListener('click', handleSectionClick);

document.getElementById('generateChart').addEventListener('click', function(){
  if(voteTally > 0){
    alert('You have ' + totalVotes + ' votes left.')
  } else {
    drawChart();
    console.log('chart is drawn');
  }
});

document.getElementById('generateList').addEventListener('click', function() {
  if(voteTally > 0){
    alert('You have ' + totalVotes + ' votes left.')
  } else {
    renderList();
  }
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
      'rgba(255, 99, 132, 0.5)',
      'rgba(245, 99, 132, 0.5)',
      'rgba(235, 99, 132, 0.5)',
      'rgba(225, 99, 132, 0.5)',
      'rgba(215, 99, 132, 0.5)',
      'rgba(205, 99, 132, 0.5)',
      'rgba(195, 99, 132, 0.5)',
      'rgba(185, 99, 132, 0.5)',
      'rgba(175, 99, 132, 0.5)',
      'rgba(165, 99, 132, 0.5)',
      'rgba(155, 99, 132, 0.5)',
      'rgba(145, 99, 132, 0.5)',
      'rgba(135, 99, 132, 0.5)',
      'rgba(125, 99, 132, 0.5)',
      'rgba(115, 99, 132, 0.5)',
      'rgba(105, 99, 132, 0.5)',
      'rgba(95, 99, 132, 0.5)',
      'rgba(85, 99, 132, 0.5)',
      'rgba(75, 99, 132, 0.5)',
      'rgba(65, 99, 132, 0.5)'
    ],
    borderColor: [
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
      'black',
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
            max: 10,
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
