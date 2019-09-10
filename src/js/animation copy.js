const animationsOptions = {  // 精灵动画集合
  bg1: [
    {
      delay: 0,
      duration: 0.005,
      to: {
        x: 1378 / scale,
        y: 105 / scale,
        width: 375 / scale,
        height: 600 / scale,
      }
    },
    {
      delay: 0.2,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg2: [
    {
      delay: 0,
      duration: 0.005,
      from: {
        width: w * 1875 / 371,
        height: h * 1875 / 371,
        x: -1381 / 1875 * w * scale * (w / 371),
        y: -106 / 3015 * h * scale * (w / 371),
      },
      to: {
        width: w,
        height: h
      }
    },
    {
      delay: 0.2,
      duration: 0.005,
      to: {
        width: 154 / 1875 * w,
        height: 246 / 3015 * h,
        x: 788 / 1875 * w ,
        y: 1193 / 3015 * h ,
      }
    },
  ],
  bg3: [
    {
      delay: 0.2,
      duration: 0.005,
      from: {
        width: w * 1875 / 156,
        height: h * 1875 / 156,
        x: -788 / 1875 * w * scale * (w / 156),
        y: -1191 / 3015 * h * scale * (w / 156),
      },
      to: {
        width: w,
        height: h,
        x:0
      }
    }
  ]
}

function initAnimation() {
  // delay=0.1 表示滚动到10%开始播放动画
  // duration=0.1 表示运动时间占滚动的百分比
  for (let key in animationsOptions) {
    if (animationsOptions.hasOwnProperty(key)) {
      let obj = animationsOptions[key];
      for (let i = 0; i < obj.length; i++) {
        let act;
        let target;
        if (obj[i].prop) {
          target = sprites[key][obj[i].prop];
        } else {
          target = sprites[key];
        }
        if (obj[i].from & obj[i].to) {
          act = TweenMax.fromTo(target, obj[i].duration, obj[i].from, obj[i].to);
        } else if (obj[i].from) {
          act = TweenMax.from(target, obj[i].duration, obj[i].from);
        } else if (obj[i].to) {
          act = TweenMax.to(target, obj[i].duration, obj[i].to);
        }
        let tm = new TimelineMax({ delay: obj[i].delay });
        tm.add(act, 0);
        tm.play();
        timeline.add(tm, 0);
      }
    }
  }
  // 特殊动画特殊处理
  let act = TweenMax.to(scenes.scene2, 0.3, { x: 2400 });
  let tm = new TimelineMax({ delay: 0.25 });
  tm.add(act, 0);
  timeline.add(tm, 0);
}


function initAnimation(){
  for (let key in animationsOptions) {
    if (animationsOptions.hasOwnProperty(key)) {
      let obj = animationsOptions[key];
      let target = scenes[key].position;
      if(obj.from & obj.to){
        act = TweenMax.fromTo(target,obj.duration,obj.from,obj.to);
      } else if (obj.from) {
        act = TweenMax.from(target,obj.duration,obj.from);
      }else if (obj.to) {
        act = TweenMax.to(target,obj.duration,obj.to);
      }
      let tm = new TimelineMax({delay:obj.delay});
      tm.add(act,0);
      tm.play();
      timeline.add(tm,0);
    }
  }
}
