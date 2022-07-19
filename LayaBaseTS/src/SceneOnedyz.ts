import Car from "./Car";
import { ui } from "./ui/layaMaxUI";

export default class Scene extends ui.SceneOnedyzUI {
    constructor() {
        super();
        console.log("hello TS");

        let car:Car = new Car();
        console.log(car);

        let spr:Laya.Sprite = new Laya.Sprite()
        this.addChild(spr);
        spr.graphics.drawRect(100,100,50,50,"#ffa1dd");

        Laya.timer.loop(20,this,this.frameWorkRun);
    }

    public frameWorkRun():void {
        console.log("===>>>>");
    }
}