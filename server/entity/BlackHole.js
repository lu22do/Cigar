var Cell = require('./Cell');

function BlackHole() {
    Cell.apply(this, Array.prototype.slice.call(arguments));

    this.cellType = 4;
    this.color = {r: 20, g: 0, b: 30};    
    this.spiked = 1;
}

BlackHole.prototype = new Cell();

BlackHole.prototype.calcMove = null; // Only for player controlled movement

BlackHole.prototype.feed = function(feeder,gameServer) {
};

// Main Functions

BlackHole.prototype.getEatingRange = function() {
    return this.getSize() * .4; // 0 for ejected cells
};

BlackHole.prototype.onConsume = function(consumer, gameServer) {

};

BlackHole.prototype.onAdd = function(gameServer) {
    gameServer.nodeBlackHole = this;
};

BlackHole.prototype.onRemove = function(gameServer) {
    var index = gameServer.nodesBlackHole.indexOf(this);
    if (index != -1) {
        gameServer.nodesBlackHole.splice(index, 1);
    } else {
        console.log("[Warning] Tried to remove a non existing blackhole!");
    }
};

module.exports = BlackHole;


