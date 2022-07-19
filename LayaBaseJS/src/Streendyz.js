import Car from "./Car";
import { SceneOneDyzUI } from "./ui/layaMaxUI";

export default class Streen extends SceneOneDyzUI {
    constructor(){
        super();
        console.log("hello Laya js");
        console.log("你好 世界");

        let car = new Car();
        console.log(car);

        let spr = new Laya.Sprite();
        this.addChild(spr);
        spr.graphics.drawRect(100,100,50,50,"#dd1f22");
    };

}