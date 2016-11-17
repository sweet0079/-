if (typeof gametype == "undefined") {
    var gametype = {};
    gametype.pause = 0;
    gametype.running = 1;
};

if (typeof playertype == "undefined") {
    var playertype = {};
    playertype.wait = 0;
    playertype.attack = 1;
    playertype.defense = 2;
};

module.exports = {
    Gametype: function () {
        return gametype;
    },
    Playertype: function () {
        return playertype;
    },
};