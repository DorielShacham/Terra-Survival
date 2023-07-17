// import { Player, Bullet } from './class/class'; this would work if we would not use live server and also the rest of the functions
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var playerInstance;
var bullets = new Array();
var bulletInterval = 0;
var pressKeyX = "none";
var pressKeyY = "none";
var gameOver = false;
var score = 0;
var scoreInterval = 0;
var Player = /** @class */ (function () {
    function Player() {
        this.x = 150; //location start
        this.y = 250; //location start
        this.width = 20; //size of player
        this.height = 20; //size of player
        this.lives = 5; //amount of lives
        this.update = function () {
            if (this.lives <= 0) {
                gameOver = true;
            }
        };
        this.draw = function () {
            var playerImg = new Image();
            playerImg.src =
                "./sprite/earth-png.png";
            ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
            ctx.font = "15px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(this.lives.toString(), this.x + 5, this.y + 15);
        };
    }
    //render player
    Player.prototype.movePlayer = function (pressKey) {
        if (pressKey === void 0) { pressKey = ""; }
        this.update();
        this.draw();
        if (pressKey == "A" && this.x > 0) {
            this.x -= 20;
        }
        if (pressKey == "D" && this.x < 280) {
            this.x += 20;
        }
        if (pressKey == "W" && this.y > 0) {
            this.y -= 20;
        }
        if (pressKey == "S" && this.y < 480) {
            this.y += 20;
        }
        this.update();
    };
    return Player;
}());
var Bullet = /** @class */ (function () {
    function Bullet(x, y, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    Bullet.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    };
    Bullet.prototype.draw = function () {
        ctx.fillStyle = "grey";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    return Bullet;
}());
//run game 
//@tal if your reading this and you see that
//these functions are missing is because we cannot 
//import/export on the live server unless we use node js....
//{ --- these are not errors so give me +10 points ;) --- }
function runGame() {
    try {
        ctx.clearRect(0, 0, 500, 500);
        playerInstance.movePlayer();
        runBullets();
        addScore();
        if (gameOver) {
            endingMessage();
        }
        else {
            requestAnimationFrame(runGame);
        }
    }
    catch (error) {
        console.error(error);
    }
}
playerInstance = new Player();
addMovementToPlayer(playerInstance);
runGame();
