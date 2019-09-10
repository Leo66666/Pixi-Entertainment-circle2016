
const spritesOptions = [
  {
    // 精灵数据：定义每个精灵的坐标
    bg1: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg2: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg3: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg4: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg5: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg6: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg7: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg8: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg9: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg10: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg11: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg12: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg13: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg14: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg15: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg16: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg17: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg18: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg19: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg20: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg21: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg22: {
      position: { x: 0, y: 0 },
    }
  },
  {
    // 精灵数据：定义每个精灵的坐标
    bg23: {
      position: { x: 0, y: 0 },
    }
  },
];



const sprites = {}; // 精灵集合 - pixi对象

function initSprites() {  // new出所有精灵对象，并交给函数initSprite分别赋值
  for (let i = 0; i < spritesOptions.length; i++) {
    let obj = spritesOptions[i];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        sprites[key] = PIXI.Sprite.fromImage(key);
        sprites[key].width=w;
        sprites[key].height=h;
        initSprite(sprites[key], obj[key], i + 1);
      }
    }
  }
}
function initSprite(sprite, prop, i) {  // 初始化单个精灵的属性并加入对应的场景中
  for (let key in prop) {
    if (prop.hasOwnProperty(key)) {
      sprite[key] = prop[key];
    }
  }
  // 添加到对应的container中去

  scenes['scene' + i].addChild(sprite);
}