/*Inspiration:
Piet Mondrian."Broadway Boogie Woogie".1942-43.

Mondrian was fascinated by modern city’s architecture and 
American jazz after his moving to New York. In his opinion 
dynamic rhythm was the core factor for both jazz "Broadway 
Boogie Woogie" and his last artwork titled the same way as 
this jazz.This paninting suggests the city’s grid, movement 
of traffic, blinking electric lights and the rhythm of jazz.

Concept: 
Representing "Broadway Boogie Woogie" in a dynamic and vivid 
way beyond Mondrian’s expression.Combining artist’s painting 
with American jazz seamlessly and synchronously to elaborate
Mondrain's inspiration.*/

/* Declare baseRectHorizontal object*/
var baseRectHorizontal;
/* Declare baseRectVertical object*/
var baseRectVertical;
/* Declare largeRectControl object*/
var largeRectControl;
/*
   Constants used in the program
*/
var CANVAS_WIDTH = 570;
var CANVAS_HEIGHT = 500;
/* 
   Array of BASE_BAR_COLOR 
   Reference from W3 Schools https://www.w3schools.com/js/js_arrays.asp
*/
var BASE_BAR_COLOR = [234, 209, 40];
var NUMBER_OF_DOTS = 10;
var RED_COLOR = [180, 57, 44];
var BLUE_COLOR = [70, 106, 190];
var GREY_COLOR = [240, 240, 240];
var sound;
/* 
  Preload sound file.
  Reference from Session4 on Kadenze
*/

function preload() {
    sound = loadSound("Broadway-Boogie-Woogie.mp3");
}

function setup() {
    sound.setVolume(0.5);
    sound.loop();
    /*Please note: interval between looped songs lasts for 36'*/

    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    
    /*
       Below is Object creation logic. 
       Reference from P5 Objects https://p5js.org/examples/objects-objects.html
    */
    /* Create horizontal rectangle controller object*/
    baseRectHorizontal = new BaseRectHorizontal();
    /* Create vertical rectangle controller object*/
    baseRectVertical = new BaseRectVertical();
    /* Create large blocks of rectangles controller object*/
    largeRectControl = new LargeRectControl();
}

function draw() {
    background(243, 243, 241);
    /* Call display method of delared objects*/
    baseRectHorizontal.display();
    baseRectVertical.display();
    largeRectControl.display();
    frameRate(6);
}

/* 
  BaseRecHorizontal Object
  This initialized 8 horizontal bars
*/
function BaseRectHorizontal() {
    this.x = 0;
    this.y = 0;
    this.w = CANVAS_WIDTH;
    this.h = 15;
    
    /* Array contains Y co-ordinators of horizontal bars */ 
    this.horizonPos = [10, 70, 180, 240, 290, 350, 420, 460];

    this.display = function() {
        /* Create 8 horizontal bars*/
        for (var i = 0; i < this.horizonPos.length; i++) {
            fill(BASE_BAR_COLOR);
            noStroke();
            /* Draw horizontal rect */
            rect(this.x, this.horizonPos[i], this.w, this.h);
            /* Create 10 little rect on this bar */
            for (var j = 0; j < NUMBER_OF_DOTS; j++) {
                var dotRect1 = new DotRectHori(this.x, this.horizonPos[i]);
                /* Call move method */
                dotRect1.move();
                /* Call display method */
                dotRect1.display();
            }
        }
    }
}

/* 
  BaseRectVertical Object
  This initialized 8 vertical bars
*/
function BaseRectVertical() {
    this.x = 0;
    this.y = 0;
    this.w = 15;
    this.h = CANVAS_HEIGHT;
    /* Array contains X co-ordinators of vertical bars */ 
    this.verticalPos = [30, 60, 150, 180, 340, 500, 530];

    this.display = function() {
        /* Display 8 vertical bar*/
        for (var i = 0; i < 8; i++) {
            fill(BASE_BAR_COLOR);
            noStroke();
            /* Draw vertical rect */
            rect(this.verticalPos[i], this.y, this.w, this.h);
            /* Create 10 little rect on this bar */
            for (var j = 0; j < NUMBER_OF_DOTS; j++) {
                var dotRect1 = new DotRectverti(this.verticalPos[i], this.y);
                dotRect1.move();
                dotRect1.display();
            }
        }
    }
}

/* 
  DotRectHori Object
  This initialized rect which move horizontally 
  x is x coordinator
  y is y coordinator
*/
function DotRectHori(x, y) {
    this.x = x;
    this.y = y;
    this.w = random(15, 20);
    this.h = 15;
    /* Contains red, blue, grey color to draw */
    this.colorPlette = [RED_COLOR, BLUE_COLOR, GREY_COLOR];
    /* Randomly pick one color
       Reference from: P5 random https://p5js.org/reference/#/p5/random */
    this.color = random(this.colorPlette);
    this.moveX = random(30, CANVAS_WIDTH);

    /* Method to randomly get a new x position,
       This is where we draw the x coordinator of the small rect */
    this.move = function() {
        this.x = this.moveX;
    }

    /* 
       Draw the small rect 
       Reference from P5 Objects https://p5js.org/examples/objects-objects.html
    */
    this.display = function() {
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
    }
}

/* 
  DotRectHori Object
  This initialized rect which move vertically 
  x is x coordinator
  y is y coordinator
*/
function DotRectverti(x, y) {
    this.x = x;
    this.y = y;
    this.w = 15;
    this.h = random(15, 20);
    /* Contains red, blue, grey color to draw */
    this.colorPlette = [RED_COLOR, BLUE_COLOR, GREY_COLOR];
    /* Randomly pick one color
       Reference from: P5 random https://p5js.org/reference/#/p5/random */
    this.color = random(this.colorPlette);
    this.moveY = random(30, CANVAS_HEIGHT);

    /* Method to randomly get a new y position,
       This is where we draw the y coordinator of the small rect */
    this.move = function() {
        this.y = this.moveY;
    }
    
    /* 
       Draw the small rect 
       Reference from P5 Objects https://p5js.org/examples/objects-objects.html
    */
    this.display = function() {
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
    }
}

/* 
  LargeRectControl Object
  Used to create 5 large LargeRectObj 
*/
function LargeRectControl() {
  
    /* Array contains collection of coordinator of objects
       x: x coordinator 
       y: y coordinator
    */
    this.positions = [
        {
            x: 100,
            y: 25
        },
        {
            x: 400,
            y: 85
        },
        {
            x: 235,
            y: 255
        },
        {
            x: 75,
            y: 325
        },
        {
            x: 450,
            y: 365
        }
    ];

    /* Create and display 5 large rect object */
    this.display = function() {
        for (var j = 0; j < 5; j++) {
            var largeRect = new LargeRectObj(this.positions[j]);
            largeRect.display();
        }
    }
}

/* 
  LargeRectControl Object
  Used to create 5 large LargeRectObj 
*/
function LargeRectObj(pos) {
    this.x = pos.x;
    this.y = pos.y;
    this.w = 50;
    this.h = 32;
    /* Contains red, blue, grey color to draw */
    this.colorPlette = [RED_COLOR, BLUE_COLOR, GREY_COLOR];
    
    this.color1 = random(this.colorPlette);
    this.color2 = random(this.colorPlette);
    this.color3 = random(this.colorPlette);
    this.color4 = random(this.colorPlette);
    
    /*
      Draw the 4 small rect 
    */
    this.display = function() {
        fill(this.color1);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
        fill(this.color2);
        rect(this.x, this.y + this.h, this.w, this.h);
        fill(this.color2);
        rect(this.x, this.y + 2 * this.h, this.w, this.h);
        fill(this.color3);
        rect(this.x, this.y + 2 * this.h, this.w, this.h);
        fill(this.color4);
        rect(this.x + 10, this.y + 2 * this.h, this.w * 0.6, this.h * 0.6);
    }
}