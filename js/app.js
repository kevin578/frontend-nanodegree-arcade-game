// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 75;
    this.height = 60;
};




// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks


Enemy.prototype.update = function(dt) {
    
    this.x += this.speed * dt;
    if (this.x > 500){
        this.x = 0;
    }
    
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var player = function(x,y){
    this.sprite = 'images/char-boy.png'; 
    this.x = x;
    this.y = y;

};



player.prototype.update = function(dt){
};

player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


player.prototype.handleInput = function(key) {
        if (key == 'left'){
            this.x += -10;
        }
        if (key == 'right'){
            this.x += 10;
        }
        if (key == 'up'){
            this.y += -10;
        }
        if (key == 'down'){
            this.y += 10;
        }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemy1 = new Enemy(100,145,50);
var enemey2 = new Enemy(100,225,100);
var enemey3 = new Enemy(100, 65, 150);
allEnemies = [enemy1, enemey2, enemey3];
var player = new player(200,400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});
