"use strict";
exports.__esModule = true;
exports.Bullet = exports.Player = void 0;
//------ class Player
var Player = /** @class */ (function () {
    function Player() {
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
    Player.prototype.movePlayer = function (pressKey) {
        if (pressKey === void 0) { pressKey = ""; }
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
    };
    return Player;
}());
exports.Player = Player;
//------ class Bullet
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
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    return Bullet;
}());
exports.Bullet = Bullet;
