cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {

    },

    onCollisionEnter: function (other, self) {
        other.node.destroy();
        cc.log("88888888888888888888888888888888");
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
