const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.height = DISPLAY_HEIGHT;
ctx.canvas.width = DISPLAY_WIDTH;

// Player attributes
let player = new Player(ctx);
// The platforms
let platforms = [];

// Status of the arrow keys
let keys = {
    right: false,
    left: false,
    up: false,
};

// Function to render the canvas
function renderCanvas() {
    ctx.fillStyle = DISPLAY_BG_COLOR;
    ctx.fillRect(0, 0, DISPLAY_HEIGHT, DISPLAY_WIDTH);
}

// Function to create platforms
function createPlat() {
    for(i = 0; i < NUM_OF_PLATFORMS; i++) {
        let platform = new Platform(ctx);
        platform.init(100 * i, 200 + (30 * i)); 
        platforms.push(platform);
    }
}

// Function that is called when an arrow key is pressed
function keyDown(e) {
    // 37 is the code for the left arrow
    if(e.keyCode == 37) {
        keys.left = true;
    }
    // 38 is the code for the up arrow
    if(e.keyCode == 38) {
        if(player.jump == false) {
            player.y_v = -10;
        }
    }
    if(e.keyCode == 32) {
        if(player.jump == false) {
            player.y_v = -10;
        }
    }
    // 39 is the code for the right arrow 
    if(e.keyCode == 39) {
        keys.right = true;
    }
}

// Function that is called when the key is released
function keyUp(e) {
    if(e.keyCode == 37) {
        keys.left = false;
    }
    if(e.keyCode == 38) {
        if(player.y_v < -2) {
            player.y_v = -3;
        }
    }
    if(e.keyCode == 32) {
        if(player.y_v < -2) {
            player.y_v = -3;
        }
    }
    if(e.keyCode == 39) {
        keys.right = false;
    }
}

// Rendering the elements
function loop() {
    // If the player is not jumping apply the effect of friction
   player.jumpUp();
    // If left key is pressed, move left
    if(keys.left) {
        player.x_v = -2.5;
    }
    // If right key is pressed, move right
    if(keys.right) {
        player.x_v = 2.5;
    }
    player.move();

    // Checking for collision
    let i = -1;
    if(platforms[0].x < player.x && player.x < platforms[0].x + platforms[0].width && platforms[0].y < player.y && player.y < platforms[0].y + platforms[0].height) {
        i = 0;
    }
    if(platforms[1].x < player.x && player.x < platforms[1].x + platforms[1].width && platforms[1].y < player.y && player.y < platforms[1].y + platforms[1].height) {
        i = 1;
    }
    if(i > -1) {
        player.jump = false;
        player.y = platforms[i].y;
    }
    // Rendering the canvas, the player, and the platforms
    renderCanvas();
    player.draw();
    for(i = 0; i < platforms.length; i++) {
        platforms[i].draw();
    }
}
createPlat();
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

// Calling loop every 22 millisecond to update the frame
setInterval(loop, FRAME_RATE);
