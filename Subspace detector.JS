const Subspace_allow = true; // Set to true if you want to allow subspace users, otherwise set to false

function Subspace_Detector(ship) {
    if (Subspace_allow) {
        if (!ship.custom.cheater) {
            game.modding.terminal.echo(`[[g;#AA00FF;]Subspace alert:]\n[[g;#ff0000;][[g;#F9D800;]${ship.name}] has been caught using Subspace.\n[[g;#F9D800;]${ship.name}] has not been kicked as Subspace is allowed by map host.]`);
            ship.custom.cheater = true; // Mark the subspace user as cheater
        }
    } else {
        ship.set({ type: 101, vx: 0, vy: 0, idle: true, collider: false });
        ship.gameover({
            "You have been caught using Subspace": " ",
            "If you want to play, come without Subspace": " "
        });
        game.modding.terminal.echo(`[[g;#AA00FF;]Subspace alert:]\n[[g;#ff0000;][[g;#F9D800;]${ship.name}] has been caught using Subspace.\n[[g;#F9D800;]${ship.name}] has been kicked as Subspace is not allowed by map host.]`);
    }
}

this.event = function (event) {
    const ship = event.ship;
    switch (event.name) {
        case "ui_component_clicked":
            if (event.id === "using_subspace") {
                Subspace_Detector(ship);
            }
            break;
    }
};
