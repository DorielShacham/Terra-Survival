"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.contructor = function (x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 4;
    };
    Player.prototype.draw = function (ctx) {
        ctx.strokesStyle = 'yellow';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }; //shows the Player location and size
    return Player;
}());
exports.Player = Player;
