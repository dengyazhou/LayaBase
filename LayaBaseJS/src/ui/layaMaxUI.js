/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var View=Laya.View;
var Dialog=Laya.Dialog;
var Scene=Laya.Scene;
var REG = Laya.ClassUtils.regClass;
export class SceneOneDyzUI extends Scene {
	constructor(){ 
		super();
	}
	createChildren() {
		super.createChildren();
		this.loadScene("SceneOneDyz");
	}
}
REG("ui.SceneOneDyzUI",SceneOneDyzUI);