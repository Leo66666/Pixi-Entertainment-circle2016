

let w = window.innerWidth;
let h = window.innerHeight;
let scale = 1875 / window.innerWidth;

let app = new PIXI.Application({
  width: w,         // default: 800
  height: h,        // default: 600
  antialias: true,    // default: false
  resolution: 1 ,      // default: 1,
  forceCanvas: true,
});
document.body.appendChild(app.view);


// 加载元素
const loader = new PIXI.loaders.Loader();

loader
  .add("bg1", "src/images/1.jpg")
  .add("bg2", "src/images/2.jpg")
  .add("bg3", "src/images/3.jpg")
  .add("bg4", "src/images/4.jpg")
  .add("bg5", "src/images/5.jpg")
  .add("bg6", "src/images/6.jpg")
  .add("bg7", "src/images/7.jpg")
  .add("bg8", "src/images/8.jpg")
  .add("bg9", "src/images/9.jpg")
  .add("bg10", "src/images/10.jpg")
  .add("bg11", "src/images/11.jpg")
  .add("bg12", "src/images/12.jpg")
  .add("bg13", "src/images/13.jpg")
  .add("bg14", "src/images/14.jpg")
  .add("bg15", "src/images/15.jpg")
  .add("bg16", "src/images/16.jpg")
  .add("bg17", "src/images/17.jpg")
  .add("bg18", "src/images/18.jpg")
  .add("bg19", "src/images/19.jpg")
  .add("bg20", "src/images/20.jpg")
  .add("bg21", "src/images/21.jpg")
  .add("bg22", "src/images/22.jpg")
  .add("bg23", "src/images/23.jpg")


//加载进度
loader.on("progress", function (target, resource) {
  console.log(target,resource)
  document.getElementById('percent').innerText = parseInt(target.progress) + "%";
});

loader.onComplete.add((target, resource)=>{
  document.getElementById('percent').style.display = "none";

  initScenes(); // 初始化场景
  initSprites();  // 初始化精灵
  initAnimation();

  initTouch(true);
})
loader.load();