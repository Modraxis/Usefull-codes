//You can put it any where in your mod
game.modding.tick = function (t) {
    this.game.tick(t);
    if (this.context.tick != null) {
        this.context.tick(this.game);
    }
};