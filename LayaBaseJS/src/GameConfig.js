/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import Streendyz from "./Streendyz"

export default class GameConfig {
    static init() {
        //注册Script或者Runtime引用
        let reg = Laya.ClassUtils.regClass;
		reg("Streendyz.js",Streendyz);
    }
}
GameConfig.width = 1200;
GameConfig.height = 800;
GameConfig.scaleMode ="noscale";
GameConfig.screenMode = "horizontal";
GameConfig.alignV = "top";
GameConfig.alignH = "left";
GameConfig.startScene = "SceneOneDyz.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();
