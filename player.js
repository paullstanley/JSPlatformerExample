class Player {
    ctx;
    x;
    y;
    x_v;
    y_v;
    jump;
    height;
    width;
    constructor(ctx) {
        this.ctx = ctx;
        this.x = PLAYER_STARTING_POS["x"];
        this.y = PLAYER_STARTING_POS["y"];
        this.x_v = 0;
        this.y_v = 0;
        this.jump = true;
        this.height = PLAYER_HEIGHT;
        this.width = PLAYER_WIDTH;
    }

    draw() {
        this.ctx.fillStyle = "#F08080";
        this.ctx.fillRect((player.x) - 20, (player.y) - 20, PLAYER_WIDTH, PLAYER_HEIGHT);
    }

    move() {
        this.y += this.y_v;
        this.x += this.x_v;
    }

    jumpUp() {
        if(this.jump == false) {
            this.x_v *= FRICTION;
        } else {
            // If the player is in the air then apply the effect of gravity
            this.y_v += GRAVITY;
        }
        this.jump = true;
    }
}