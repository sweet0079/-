cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            default: 250,
            tooltip: "怪物移动的速度"
        },
    },

    // use this for initialization
    onLoad: function () {

    },
    update: function (dt) {
        this.node.x+=this.speed*dt;
        if(this.node.x>(640+this.node.width/2))
        {
            this.node.destroy();
        }
    },
});
