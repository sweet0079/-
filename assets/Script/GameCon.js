var DEFINE = require("DEFINE");

cc.Class({
    extends: cc.Component,

    properties: {
        BG01: cc.Sprite,
        BG02: cc.Sprite,
        enemyprefab: cc.Prefab,
        EnemyNode: cc.Node,
    },

    onLoad: function () {

        cc.director.getCollisionManager().enabled = true;

        this.Gametype = DEFINE.Gametype().running;
        this.BGMoveSpeed = 500;
        this.Level = 1;

        this.EnemyCreateCon();
    },

    update: function (dt) {
        if (this.Gametype === DEFINE.Gametype().running) {

            var BG01NEXT = this.BG01.node.x - this.BGMoveSpeed * dt;
            var BG02NEXT = this.BG02.node.x - this.BGMoveSpeed * dt;
            if (BG01NEXT < -1280) {
                BG01NEXT = 1280;
                BG02NEXT = 0;
            } else if (BG02NEXT < -1280) {
                BG01NEXT = 0;
                BG02NEXT = 1280;
            };
            this.BG01.node.x = BG01NEXT;
            this.BG02.node.x = BG02NEXT;

        };
    },

    EnemyCreateCon: function () {
        this.schedule(function () {
            if(this.Gametype === DEFINE.Gametype().running){
                switch (this.Level) {
                    case 1:
                        this.NEWEnemy(1);
                        break;
                
                    default:
                        break;
                }
            };
        }, 2, cc.macro.REPEAT_FOREVER, 0);
    },

    NEWEnemy: function (Level) {
        switch (Level) {
            case 1:
                var newenemy = cc.instantiate(this.enemyprefab);
                this.EnemyNode.addChild(newenemy);
                break;
        
            default:
                break;
        }
    },

});
