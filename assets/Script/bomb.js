cc.Class({
    extends: cc.Component,

    properties: {
        baozha: {
            default:null,
            type: cc.Prefab,
        },
    },

    // use this for initialization
    onLoad: function () {
    },
    onAnimCompleted: function () {
        var New = cc.instantiate(this.baozha);
        this.node.parent.addChild(New);
        this.node.destroy();
    },
});
