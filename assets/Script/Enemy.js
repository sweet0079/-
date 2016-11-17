cc.Class({
    extends: cc.Component,

    properties: {
        targetX: {
            default: -450,
            tooltip: "怪物移动的X轴目标"
        },
        speed: {
            default: 100,
            tooltip: "怪物移动的速度"
        },
        Path: {
            default: 200,
            tooltip: "怪物移动的另一种路径的X轴坐标比targetX大的值"
        },
    },
    onLoad: function () {
        this.path = 0;
       // if (cc.random0To1() * 3 > 2) {
            this.node.y = cc.random0To1() * 220-180;//-180到40
            this.node.x = 690;
        //}
        // else {
        //     this.node.x = cc.random0To1() * (690 + this.targetX) - this.targetX;
        //     if (cc.random0To1() * 2 > 1) {
        //         this.node.y = -410;
        //     }
        //     else {
        //         this.node.y = 410;
        //     }
        //     if (cc.random0To1() * 2 > 1) {
        //         this.path = 1;
        //         this.targetX += this.Path;
        //     }
        // }
        var X = this.node.x - this.targetX;
        var Y = Math.abs(this.node.y);
        this.dis = Math.sqrt(X * X + Y * Y);
        this.time = this.dis / this.speed;
        if (this.path == 0) {
            this.action = cc.moveTo(this.time, this.targetX, 0);
            this.node.runAction(this.action);
        } else {
            var seq = cc.sequence(cc.moveTo(this.time, this.targetX, 0), cc.moveBy(this.Path / this.speed, -this.Path, 0));
            this.node.runAction(seq);
        }
    },
});
