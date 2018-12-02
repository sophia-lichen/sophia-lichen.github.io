/*
The inspiration of my artwork set is from Sanctum series (a series of etchings) 
by Damien Hirst who is an internationally renowned contemporary artist. 

Many of his works revolve around the central theme of death.Viewers of Hirst’s 
work are forced to confront their own fears surrounding mortality.The artworks 
from Sanctum series use dead butterflies as well. 

However, in my series I made the butteerflies alive and vibrant as opposed to 
the past lives. Damien Hirst revealed the limited life span to inspire viewers 
realising their fear for life end. On the contrary I depict the current lives 
to represent the vitality of life and encourage viewers to enjoy every moment.

[For the reference of the original version of Sanctum series please see the PDF
file included in the folder.]
The link of Sanctum serise http://paragonpress.co.uk/works/sanctum
*/

/*
Note: 
1. Please move your mouse horizontally to activate the butterflies of each work. 
2. Plseae click your monse to skip to the next artwork from the series.
*/

/* Declare butterfly object*/
var butterfly;
/*Define the amount of butterflies at each layer as 8*/
var total = 8;
/*Define the initial rotating angle as 0*/
var angle = 0;
/*Adjust the rotating rate of each butterfly*/
var speed = 0.008;

/*Contain colours for the 1st interactive artwork--Dome*/
var dome_1 = [242, 162, 104];
var dome_stripe = [214, 85, 32];
var dome_2_U = [149, 159, 171];
var dome_2_L = [131, 87, 112];
var dome_3 = [127, 86, 100];
var dome_4 = [17, 42, 104];
var dome_5 = [31, 83, 131];
var dome_6 = [90, 96, 134];
var dome_7 = [75, 52, 108];

/*Contain colours for the 2nd interactive artwork--Minaret*/
var minaret_1 = [0, 149, 134];
var minaret_stripe = [195, 190, 11];
var minaret_2_U = [115, 114, 148];
var minaret_2_L = [157, 60, 107];
var minaret_3 = [107, 77, 122];
var minaret_4 = [171, 96, 108];
var minaret_5 = [173, 194, 195];
var minaret_6 = [8, 140, 180];
var minaret_7 = [49, 61, 115];

/*Contain colours for the 3rd interactive artwork--Spire*/
var spire_1 = [175, 34, 92];
var spire_stripe = [171, 212, 74];
var spire_2_U = [46, 72, 145];
var spire_2_L = [156, 74, 199];
var spire_3 = [74, 127, 178];
var spire_4 = [202, 186, 83];
var spire_5 = [150, 182, 102];
var spire_6 = [50, 115, 190];
var spire_7 = [34, 63, 120];

/*Contain colours for the 4th interactive artwork--Altar*/
var altar_1 = [215, 211, 206];
var altar_stripe = [46, 117, 91];
var altar_2_U = [172, 161, 150];
var altar_2_L = [160, 57, 58];
var altar_3 = [188, 127, 57];
var altar_4 = [0, 96, 94];
var altar_5 = [185, 162, 90];
var altar_6 = [122, 91, 122];
var altar_7 = [130, 45, 55];

/*Contain colours for the 5th interactive artwork--Belfry*/
var belfry_1 = [203, 180, 180];
var belfry_stripe = [110, 66, 96];
var belfry_2_U = [161, 74, 32];
var belfry_2_L = [95, 94, 132];
var belfry_3 = [37, 88, 133];
var belfry_4 = [135, 62, 51];
var belfry_5 = [161, 135, 68];
var belfry_6 = [29, 36, 96];
var belfry_7 = [102, 61, 36];

/*Contain colours for the 6th interactive artwork--Chancel*/
var chancel_1 = [46, 54, 135];
var chancel_stripe = [197, 136, 143];
var chancel_2_U = [142, 119, 119];
var chancel_2_L = [142, 58, 48];
var chancel_3 = [130, 101, 66];
var chancel_4 = [195, 144, 59];
var chancel_5 = [184, 99, 45];
var chancel_6 = [172, 161, 150];
var chancel_7 = [161, 137, 67];

/*Define images and text variables for artworks*/
var img_dome;
var img_minaret;
var img_spire;
var img_altar;
var img_belfry;
var img_chancel;
var image_to_display;
var artwork_text;
var artwork_text_x = -380
var artwork_text_y = -360;
var artwork_x = 250;
var artwork_y = -400;

/* 
1=Dome
2=Minaret
3=Spire
4=Altar
5=Belfry
6=Chancel
*/

/*Define the initial state as 1 (the artwork of Dome)*/
var state = 1;

function setup() {
  createCanvas(850, 850);
  /*Declare an instance of butterfly object*/
  butterfly = new Butterfly();
  /*Set the features of sound*/
  sound.setVolume(0.5);
  sound.loop();
}

function draw() {
  background(0);
  noStroke();
  translate(width / 2, height / 2);
  line(0,-height/2,0,height/2)
  /* Call initState to assign state related data */
  butterfly.initState();
  /* Call image method of delared butterfly object*/
  butterfly.images();
  /* Call inscribe method of delared butterfly object*/
  butterfly.inscribe();
  /* Call rotate method of delared butterfly object*/
  butterfly.rotate();
}

/*Declare mousePressed function to skip to the next artwork of the series*/
function mousePressed() {
  /*Define the number of artworks as 6 and in turn the click of mouse as 5*/
  if (state > 5) {
    state = 0;
  }
  state++;
}

/*Declare preload function to load the pictures of each artwork from the series*/
function preload() {
  img_dome = loadImage("images/dome.jpg");
  img_minaret = loadImage("images/minaret.jpg");
  img_spire = loadImage("images/spire.jpg");
  img_altar = loadImage("images/altar.jpg");
  img_belfry = loadImage("images/belfy.jpg");
  img_chancel = loadImage("images/chancel.jpg");
  sound = loadSound("Butterfly Waltz.mp3");
}

/*Below is Object creation logic*/
function Butterfly() {
  this.color = [];
  this.colorPlette = [];

  /*The center butterfly rotates around itself slowly*/
  this.rotate = function () {
    push()
    rotate(angle * 0.2);
    this.center_butterfly();
    angle += speed;
    pop();

    /*The outer butterflies rotates around the canvas center a bit more quickly*/
    /*Reference for this rotate method was from Kadenze Session 6:"Move and choreograph shapes"*/
    var l0 = map(mouseX, 0, width, -8, 300 - width / 2);
    rotate(angle);
    for (var i = 0; i < total; i++) {
      push();
      rotate(i * TWO_PI / 8);
      translate(0, l0);
      this.outer_butterfly();
      pop();
    }
    angle += speed;
  }

  /*Define the colors, image and text for each artwork from the series*/
  this.initState = function () {
    if (state == 1) {
      this.colorPlette = [dome_1, dome_stripe, dome_2_U, dome_2_L, dome_3, dome_4, dome_5, dome_6, dome_7];
      image_to_display = img_dome;
      artwork_text = "Dome";
    } else if (state == 2) {
      this.colorPlette = [minaret_1, minaret_stripe, minaret_2_U, minaret_2_L, minaret_3, minaret_4, minaret_5, minaret_6, minaret_7];
      image_to_display = img_minaret;
      artwork_text = "Minaret";
    } else if (state == 3) {
      this.colorPlette = [spire_1, spire_stripe, spire_2_U, spire_2_L, spire_3, spire_4, spire_5, spire_6, spire_7];
      image_to_display = img_spire;
      artwork_text = "Spire";
    } else if (state == 4) {
      this.colorPlette = [altar_1, altar_stripe, altar_2_U, altar_2_L, altar_3, altar_4, altar_5, altar_6, altar_7];
      image_to_display = img_altar;
      artwork_text = "Altar";
    } else if (state == 5) {
      this.colorPlette = [belfry_1, belfry_stripe, belfry_2_U, belfry_2_L, belfry_3, belfry_4, belfry_5, belfry_6, belfry_7];
      image_to_display = img_belfry;
      artwork_text = "Belfry";
    } else if (state == 6) {
      this.colorPlette = [chancel_1, chancel_stripe, chancel_2_U, chancel_2_L, chancel_3, chancel_4, chancel_5, chancel_6, chancel_7];
      image_to_display = img_chancel;
      artwork_text = "Chancel";
    }
    this.color = this.colorPlette;
  }

  /*Declare the images method to load the pictures of each artwork of the series*/
  this.images = function () {
    imageMode(CORNER);
    var aspect = img_dome.width / img_dome.height;
    var imageHeight = 180;
    var imageWidth = 180 * aspect;
    image(image_to_display, artwork_x, artwork_y, imageWidth, imageHeight);
  }

  /*Declare the inscribe method to write down the information of each artwork from the series*/
  this.inscribe = function () {
    fill(255, 200);
    noStroke();
    textFont("Arial");
    textAlign(LEFT);
    textSize(30);

    text(artwork_text, artwork_text_x, artwork_text_y);

    /*Write down the author and date for each artwork of the series*/
    textSize(12);
    text("by Sophia, 2017", -380, -325);
    text("by Damien Hirst, 2009", 280, -190)
    /*Write down the brief description for the series of artworks*/
    textSize(14);
    text(state + " of 6 interactive artworks", 230, 350);
    /*Write down the number of artworks from the series*/
    textSize(16);
    //text("Click -> " + "[" + state + "/" + "6]", -50, -380);
  }

  /*Draw the center butterfly*/
  this.center_butterfly = function () {
    /*center_butterfly_left_wing*/
    fill(this.color[0]);
    push();
    rotate(QUARTER_PI);
    arc(0, 0, 100, 60, QUARTER_PI * 3, PI, PIE);
    arc(0, 0, 60, 60, HALF_PI / 4 * 3, QUARTER_PI * 3, PIE);
    pop();

    /*center_butterfly_right_wing*/
    push();
    rotate(QUARTER_PI * 7);
    arc(0, 0, 100, 60, 0, QUARTER_PI, PIE);
    arc(0, 0, 60, 60, QUARTER_PI, HALF_PI / 4 * 5, PIE);
    pop();

    /*center_butterfly_left_stripe*/
    stroke(this.color[1]);
    strokeWeight(4);
    noFill();
    push();
    rotate(QUARTER_PI);
    arc(0, 0, 70, 70, QUARTER_PI * 3.08, PI * 0.98);
    arc(0, 0, 48, 48, HALF_PI / 4 * 3.2, QUARTER_PI * 2.9);
    pop();

    /*center_butterfly_right_stripe*/
    push();
    rotate(QUARTER_PI * 7);
    arc(0, 0, 70, 70, QUARTER_PI * 0.08, QUARTER_PI * 0.92);
    arc(0, 0, 48, 48, QUARTER_PI * 1.1, HALF_PI / 4 * 4.8);
    pop();
  }

  /*Draw the outer butterfly*/
  this.outer_butterfly = function () {
    /*outer_butterfly_1*/
    fill(this.color[2]);
    push();
    translate(- 41, - 100);
    rotate(QUARTER_PI / 2 * 2.8);
    arc(0, 0, 120, 70, PI, QUARTER_PI * 7, PIE);
    pop();

    push();
    translate(41, - 100);
    rotate(QUARTER_PI / 2 * 1.2);
    arc(0, 0, 70, 120, QUARTER_PI * 3, HALF_PI * 3, PIE);
    pop();

    fill(this.color[3]);
    push();
    translate(0, - 80);
    arc(0, 0, 70, 70, HALF_PI / 4 * 5, QUARTER_PI / 2 * 9, PIE);
    arc(0, 0, 70, 70, -QUARTER_PI / 2, QUARTER_PI / 2 * 3, PIE);
    pop();

    /*outer_butterfly_2*/
    fill(this.color[4]);
    arc(- 1, - 130, 220, 120, PI + QUARTER_PI * 0.8, PI + HALF_PI, PIE);
    arc(1, - 130, 220, 120, PI + HALF_PI, HALF_PI * 3 + QUARTER_PI * 1.2, PIE);

    /*outer_butterfly_3*/
    fill(this.color[5]);
    arc(- 1, - 192, 80, 100, PI, PI + HALF_PI, PIE);
    arc(1, - 192, 80, 100, PI + HALF_PI, TWO_PI, PIE);

    /*outer_butterfly_4*/
    fill(this.color[6]);
    push();
    translate(80, - 180);
    rotate(PI / 8);
    arc(-1, 3, 240, 140, PI + QUARTER_PI / 2, PI + HALF_PI, PIE);
    arc(1, 3, 240, 140, PI + HALF_PI, TWO_PI - QUARTER_PI / 2, PIE);
    pop();

    /*outer_butterfly_5*/
    fill(this.color[7]);
    push();
    translate(80, - 180);
    rotate(PI / 8);
    arc(-1, -70, 120, 90, PI, PI + HALF_PI, PIE);
    arc(+1, -70, 120, 90, PI + HALF_PI, TWO_PI, PIE);
    pop();

    /*outer_butterfly_6*/
    fill(this.color[8]);
    arc(- 1, - 258, 240, 120, PI + QUARTER_PI / 2, PI + HALF_PI, PIE);
    arc(1, - 258, 240, 120, PI + HALF_PI, TWO_PI - QUARTER_PI / 2, PIE);
  }
}
