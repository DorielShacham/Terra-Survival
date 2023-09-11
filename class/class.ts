//------ class Player
export class Player {
  x: number;
  y: number;
  width: number;
  height: number;
  lives: number;
  update: () => void;
  draw: () => void;

  constructor() {
    this.x = 150; //location start
    this.y = 250; //location start
    this.width = 20; //size of player
    this.height = 20; //size of player
    this.lives = 3; //amount of lives
    this.update = function () {
      if (this.lives <= 0) {
        gameOver = true;
      }
    };

    this.draw = function () {
      ctx.fillStyle = "lime";
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.font = "15px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(this.lives.toString(), this.x + 5, this.y + 15);
    };
  }

  //render player
  movePlayer(pressKey: string = "") {
    this.update();
    this.draw();
    if (pressKey == "A" && this.x > 0) {
      this.x -= 10;
    }
    if (pressKey == "D" && this.x < 280) {
      this.x += 10;
    }
    if (pressKey == "W" && this.y > 0) {
      this.y -= 10;
    }
    if (pressKey == "S" && this.y < 480) {
      this.y += 10;
    }
    this.update();
  }
}

//------ class Bullet
export class Bullet {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  width: number;
  height: number;
  constructor(x: number, y: number, speedX: number, speedY: number) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
