// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    coinCollect: cc.AudioClip = null;

    isHit: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    }

    onBeginContact(contact, selfCollider, otherCollider) {
        if (selfCollider.tag === 1 && otherCollider.tag === 0 && !selfCollider.isHit) {
            selfCollider.isHit = true;
            cc.tween(this.node).by(0.1, {y: 20}).by(0.1, {y: -20}).start();
            this.node.children[0].active = true;
            cc.tween(this.node.children[0]).by(0.2, {y:50}).call(() => this.node.children[0].destroy()).start();
            cc.audioEngine.playEffect(this.coinCollect, false);
        }
    }

    start () {

    }

    // update (dt) {}
}
