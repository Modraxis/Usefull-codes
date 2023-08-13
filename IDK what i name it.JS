//You can put it any where in your mod
/*
It can remove 
(Tick CPU time: average 0 ms ; max 0 ms
Data sent: 0 bytes per second)
this type of line from the modding terminal
*/
game.modding.tick = function (t) {
    this.game.tick(t);
    if (this.context.tick != null) {
        this.context.tick(this.game);
    }
};
