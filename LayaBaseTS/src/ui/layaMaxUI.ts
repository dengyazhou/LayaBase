/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui {
    export class SceneOnedyzUI extends Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("SceneOnedyz");
        }
    }
    REG("ui.SceneOnedyzUI",SceneOnedyzUI);
}