cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        this.DIS = function () { this.node.destroy(); };
        this.scheduleOnce( this.DIS,1);
    },

});
