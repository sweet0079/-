var DEFINE = require("DEFINE");

cc.Class({
    extends: cc.Component,

    properties: {
        attackbox: cc.Node,
        shoot: cc.Prefab,
        bomb: cc.Prefab,
        canvas: cc.Node,
    },

    onLoad: function () {
        this.HP = 2;
        //
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        //cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUP, this);
        //
        this.playertype = DEFINE.Playertype().wait;
    },
    destroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        //cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUP, this);
    },

    onKeyDown: function (event) {
        switch (event.keyCode) {
            case 39:
                //attack
                if (this.playertype === DEFINE.Playertype().wait) {
                    this.playertype = DEFINE.Playertype().attack;
                    this.attackbox.active = true;
                    this.scheduleOnce(function () {
                        this.playertype = DEFINE.Playertype().wait;
                        this.attackbox.active = false;
                    }, 2);
                };
                break;
            case 37:

                break;
            case 38:
                if (this.playertype === DEFINE.Playertype().wait) {
                    var Bomb = cc.instantiate(this.bomb);
                    this.canvas.addChild(Bomb);
                    this.playertype = DEFINE.Playertype().attack;
                    this.scheduleOnce(function () {
                        this.playertype = DEFINE.Playertype().wait;
                    }, 1)
                };
                break;
            case 40:
                if (this.playertype === DEFINE.Playertype().wait) {
                    var arrow = cc.instantiate(this.shoot);
                    this.canvas.addChild(arrow);
                    this.playertype = DEFINE.Playertype().attack;
                    this.scheduleOnce(function () {
                        this.playertype = DEFINE.Playertype().wait;
                    }, 1)
                };
                break;
        };
    },

    onCollisionEnter: function (other, self) {
        this.HP--;
        if (this.HP <= 0) {
            this.node.destroy();
        };
    },

    // update: function (dt) {

    // },
});
