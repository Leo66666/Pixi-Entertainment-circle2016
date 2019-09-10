
const scenes = {};  // 场景集合 - pixi对象

function initScenes(){ // 初始化场景
  for (let i = 23; i >=1 ; i--) {
    var name="scene"+i;
    scenes[name] = new PIXI.Container({
      width:750,
      height:1206
    });
    scenes[name].x = 0;
    app.stage.addChild(scenes[name]);
  }
}