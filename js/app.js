'use strict';

// ++++++++++++++++++++DATA++++++++++++++++++++\\

//      App Data


//      Global Variables
var allProducts = [];

//      DOM Variables


//      Constructor Functions
function productImage(name){
  console.log(name, ' is created');
  this.filepath = `img/${name}.jpg`;
  this.name = name;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
  console.log(name, ' is pushed to allProducts array');
}

// ++++++++++++++++++++Define Behaviors/Actions++++++++++++++++++++\\

//      Function Declarations

//  Helper Functions

//  Core Functionality

//  Event Handlers


// ++++++++++++++++++++Executable Code++++++++++++++++++++\\

//      Functions Calls

//      Event listeners
