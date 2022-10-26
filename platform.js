class Platform {
    ctx;
    x;
    y;
    width;
    height;
    constructor(ctx) {
        this.ctx = ctx;
        this.width = PLATFORM_WIDTH;
        this.height = PLATFORM_HEIGHT;
        this.x = 100;
        this.y = 200;
    }

    init(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        this.ctx.fillStyle = PLATFORM_COLOR;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        //this.ctx.fillRect(platforms[1].x, platforms[1].y, platforms[1].width, platforms[1].height);
    }
}