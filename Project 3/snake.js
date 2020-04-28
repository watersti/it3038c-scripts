//These sets of variables are used to set the play area
var canvas;
var ctx;

//These variables are used to set the dynamic components of the game
var head;
var apple;
var ball;

//These variables setup the consumables of the game
var dots;
var apple_x;
var apple_y;

//These variables help the movement to work and whether you are in game or not
var leftDirection = false;
var rightDirection = true;
var upDirection = false;
var downDirection = false;
var inGame = true;    

//these variables set the sizes for the fruits, snake, canvas, the max random position for the apple, and game speed
const DOT_SIZE = 10;
const ALL_DOTS = 1600;
const MAX_RAND = 29;
const DELAY = 140;
const C_HEIGHT = 400;
const C_WIDTH = 400;    

//Used to store the arrow keys values and for better readability of movement
const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

//used to store the x and y coordinates for all joints of the snake
var x = new Array(ALL_DOTS);
var y = new Array(ALL_DOTS);   

//This function gethers the canvas dimensions and calls the other functions for the game to work correctly
function init() {
    
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

    loadImages();
    createSnake();
    locateApple();
    setTimeout("gameCycle()", DELAY);
}    

//This function loads the images needed for the game
function loadImages() {
    
    head = new Image();
    head.src = 'head.png';    
    
    ball = new Image();
    ball.src = 'dot.png'; 
    
    apple = new Image();
    apple.src = 'apple.png'; 
}

//This function is used to create the snake
function createSnake() {

    dots = 3;

    for (var z = 0; z < dots; z++) {
        x[z] = 50 - z * 10;
        y[z] = 50;
    }
}

//This function is used to see if the snake has gotten to the apple location and if so will spawn a new apple somewhere
function checkApple() {

    if ((x[0] == apple_x) && (y[0] == apple_y)) {

        dots++;
        locateApple();
    }
}    

// This functions makes the snake "move" along the canvas 
function doDrawing() {
    
    ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);
    
    if (inGame) {

        ctx.drawImage(apple, apple_x, apple_y);

        for (var z = 0; z < dots; z++) {
            
            if (z == 0) {
                ctx.drawImage(head, x[z], y[z]);
            } else {
                ctx.drawImage(ball, x[z], y[z]);
            }
        }    
    } else {

        gameOver();
    }        
}

//This function displays the game over message when you lose
function gameOver() {
    
    ctx.fillStyle = 'white';
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
    ctx.font = 'normal bold 18px serif';
    
    ctx.fillText('Game over', C_WIDTH/2, C_HEIGHT/2);
}

//This function determines how the snake will move
function move() {

    for (var z = dots; z > 0; z--) {
    
        x[z] = x[(z - 1)];
        y[z] = y[(z - 1)];
    }

    if (leftDirection) {
    
        x[0] -= DOT_SIZE;
    }

    if (rightDirection) {
    
        x[0] += DOT_SIZE;
    }

    if (upDirection) {
    
        y[0] -= DOT_SIZE;
    }

    if (downDirection) {
    
        y[0] += DOT_SIZE;
    }
}    

//This function checks to see if there is a collision
function checkCollision() {

    for (var z = dots; z > 0; z--) {

        if ((z > 4) && (x[0] == x[z]) && (y[0] == y[z])) {
            inGame = false;
        }
    }

    if (y[0] >= C_HEIGHT) {
    
        inGame = false;
    }

    if (y[0] < 0) {
    
       inGame = false;
    }

    if (x[0] >= C_WIDTH) {
    
      inGame = false;
    }

    if (x[0] < 0) {
    
      inGame = false;
    }
}

//This function is used to determine where the next apple will be moved to
function locateApple() {

    var r = Math.floor(Math.random() * MAX_RAND);
    apple_x = r * DOT_SIZE;

    r = Math.floor(Math.random() * MAX_RAND);
    apple_y = r * DOT_SIZE;
}    

//This function runs the game and loops through until inGame=false
function gameCycle() {
    
    if (inGame) {

        checkApple();
        checkCollision();
        move();
        doDrawing();
        setTimeout("gameCycle()", DELAY);
    }
}

//This function is used to make sure that the user can't pree the direction it is coming from
onkeydown = function(e) {
    
    var key = e.keyCode;
    
    if ((key == LEFT_KEY) && (!rightDirection)) {
        
        leftDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == RIGHT_KEY) && (!leftDirection)) {
        
        rightDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == UP_KEY) && (!downDirection)) {
        
        upDirection = true;
        rightDirection = false;
        leftDirection = false;
    }

    if ((key == DOWN_KEY) && (!upDirection)) {
        
        downDirection = true;
        rightDirection = false;
        leftDirection = false;
    }        
};    