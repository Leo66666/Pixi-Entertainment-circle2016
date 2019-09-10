let anSpeed = 0.5;
let anDuration = 0.5
const animationsOptions = {  // 精灵动画集合
  bg1: [
    {
      delay: 0,
      duration: 0.2 + anSpeed,
      to: {
        x: 1378 / scale,
        y: 120 / scale,
        width: w * 375 / 1875,
        height: h * 600 / 3015,
      }
    },
    {
      delay: 0.2 + anSpeed,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg2: [
    {
      delay: 0,
      duration: 0.2 + anSpeed,
      from: {
        width: w * 1875 / 371,
        height: h * 1875 / 371,
        x: -1381 / 1875 * w * scale * (w / 370),
        y: -115 / 3015 * h * scale * (w / 370),
      },
      to: {
        width: w,
        height: h
      }
    },
    {
      delay: 0.2 + anSpeed,
      duration: 0.2 + anSpeed,
      to: {
        width: 154 / 1875 * w,
        height: 246 / 3015 * h,
        x: 788 / 1875 * w,
        y: 1193 / 3015 * h,
      }
    },
    {
      delay: (0.2 + anSpeed) * 2,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg3: [
    {
      delay: 0.2 + anSpeed,
      duration: 0.2 + anSpeed,
      from: {
        width: w * 1875 / 156,
        height: h * 1875 / 156,
        x: -788 / 1875 * w * scale * (w / 156),
        y: -1191 / 3015 * h * scale * (w / 156),
      },
      to: {
        width: w,
        height: h,
        x: 0,
        y: 0
      }
    },
    {
      delay: (0.2 + anSpeed) * 2,
      duration: 0.2 + anSpeed,
      to: {
        width: 300 / 1875 * w,
        height: 410 / 3015 * h,
        x: 850 / 1875 * w,
        y: 420 / 3015 * h,
      }
    },
    {
      delay: (0.2 + anSpeed) * 3,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg4: [
    {
      delay: (0.2 + anSpeed) * 2,
      duration: 0.2 + anSpeed,
      from: {
        width: w * 1875 / 300,
        height: h * 1875 / 300 * 1.07,
        x: -855 / 1875 * w * scale * (w / 300),
        y: -432 / 3015 * h * scale * (w / 300) * 1.035,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.2 + anSpeed) * 3,
      duration: 0.2 + anSpeed,
      to: {
        width: 264 / 1875 * w,
        height: 380 / 3015 * h,
        x: 375 / 1875 * w,
        y: 838 / 3015 * h,
      }
    },
    {
      delay: (0.2 + anSpeed) * 4,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg5: [
    {
      delay: (0.2 + anSpeed) * 3,
      duration: 0.2 + anSpeed,
      from: {
        // 264和380上文的对应
        width: w * 1875 / 264,
        height: h * 3015 / 380,
        x: -385 / 1875 * w * scale * (w / 264),
        y: -842 / 3015 * 3015 / 380 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.2 + anSpeed) * 4,
      duration: 0.2 + anSpeed,
      to: {
        width: 187 / 1875 * w,
        height: 300 / 3015 * h,
        x: 359 / 1875 * w,
        y: 1228 / 3015 * h,
      }
    },
    {
      delay: (0.2 + anSpeed) * 5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg6: [
    {
      delay: (0.2 + anSpeed) * 4,
      duration: 0.2 + anSpeed,
      from: {
        // 264和380上文的对应
        width: w * 1875 / 187,
        height: h * 3015 / 300,
        x: -359 / 1875 * w * scale * (w / 187),
        y: -1228 / 3015 * 3015 / 300 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.2 + anSpeed) * 5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg7: [
    {
      delay: (0.2 + anSpeed) * 5,
      duration: 0.001,
      to: {
        // 264和380上文的对应
        width: w * 1875 / 787,
        height: h * 3015 / 1265,
        y: -848 / 3015 * 3015 / 1265 * h,
        x: -129 / 1875 * w * scale * (w / 787),
      }
    },
    {
      delay: (0.201 + anSpeed) * 5,
      duration: (0.201 + anSpeed) / 2,
      to: {
        x: -1000 / 1875 * w * scale * (w / 787),
      }
    },
    {
      delay: (0.201 + anSpeed) * 5.5,
      duration: 0.201 + anSpeed,
      from: {
        width: w * 1875 / 787,
        height: h * 3015 / 1265,
        x: -1000 / 1875 * w * scale * (w / 787),
        y: -848 / 3015 * 3015 / 1265 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0,
        y: 0,
      }

    },
    {
      delay: (0.201 + anSpeed) * 6.5,
      duration: 0.201 + anSpeed,
      to: {
        width: 276 / 1875 * w,
        height: 444 / 3015 * h,
        x: 795 / 1875 * w,
        y: 784 / 3015 * h,
      }
    },
    {
      delay: (0.2 + anSpeed) * 7.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg8: [
    {
      delay: (0.201 + anSpeed) * 6.5,
      duration: 0.201 + anSpeed,
      from: {
        // 264和380上文的对应
        width: w * 1875 / 276,
        height: h * 3015 / 444,
        x: -795 / 1875 * w * scale * (w / 276),
        y: -784 / 3015 * 3015 / 444 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 7.5,
      duration: 0.201 + anSpeed,
      to: {
        width: 937 / 1875 * w,
        height: 1509 / 3015 * h,
        x: 427 / 1875 * w,
        y: 454 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 8.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg9: [
    {
      delay: (0.201 + anSpeed) * 7.5,
      duration: 0.201 + anSpeed,
      from: {
        // 264和380上文的对应
        width: w * 1875 / 937,
        height: h * 3015 / 1509,
        x: -427 / 1875 * w * scale * (w / 937),
        y: -454 / 3015 * 3015 / 1509 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 8.5,
      duration: 0.201 + anSpeed,
      to: {
        width: 292 / 1875 * w,
        height: 468 / 3015 * h,
        x: 1275 / 1875 * w,
        y: 664 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 9.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg10: [
    {
      delay: (0.201 + anSpeed) * 8.5,
      duration: 0.201 + anSpeed,
      from: {
        // 264和380上文的对应
        width: w * 1875 / 292,
        height: h * 3015 / 468,
        x: -1275 / 1875 * w * scale * (w / 292),
        y: -664 / 3015 * 3015 / 468 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 9.5,
      duration: 0.201 + anSpeed,
      to: {
        width: 771 / 1875 * w,
        height: 1239 / 3015 * h,
        x: 984 / 1875 * w,
        y: 562 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 10.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg11: [
    {
      delay: (0.201 + anSpeed) * 9.5,
      duration: 0.201 + anSpeed,
      from: {
        // 264和380上文的对应
        width: w * 1875 / 771,
        height: h * 3015 / 1239,
        x: -984 / 1875 * w * scale * (w / 771),
        y: -562 / 3015 * 3015 / 1239 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 10.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: 237 / 1875 * w,
        height: 382 / 3015 * h,
        x: 1206 / 1875 * w,
        y: 2310 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 11.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg12: [
    {
      delay: (0.201 + anSpeed) * 10.5,
      duration: 0.201 + anSpeed,
      from: {
        // 上下呼应
        width: w * 1875 / 237,
        height: h * 3015 / 382,
        x: -1206 / 1875 * w * scale * (w / 237),
        y: -2310 / 3015 * 3015 / 382 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 11.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: 667 / 1875 * w,
        height: 1074 / 3015 * h,
        x: 895 / 1875 * w,
        y: 1609 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 12.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg13: [
    {
      delay: (0.201 + anSpeed) * 11.5,
      duration: 0.201 + anSpeed,
      from: {
        // 上下呼应
        width: w * 1875 / 667,
        height: h * 3015 / 1074,
        x: -895 / 1875 * w * scale * (w / 667),
        y: -1609 / 3015 * 3015 / 1074 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 12.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: 246 / 1875 * w,
        height: 396 / 3015 * h,
        x: 284 / 1875 * w,
        y: 46 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 13.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg14: [
    {
      delay: (0.201 + anSpeed) * 12.5,
      duration: 0.201 + anSpeed,
      from: {
        // 上下呼应
        width: w * 1875 / 246,
        height: h * 3015 / 396,
        x: -284 / 1875 * w * scale * (w / 246),
        y: -46 / 3015 * 3015 / 396 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 13.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: 947 / 1875 * w,
        height: 1520 / 3015 * h,
        x: 257 / 1875 * w,
        y: 21 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 14.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg15: [
    {
      delay: (0.201 + anSpeed) * 13.5,
      duration: 0.201 + anSpeed,
      from: {
        // 上下呼应
        width: w * 1875 / 947,
        height: h * 3015 / 1520,
        x: -257 / 1875 * w * scale * (w / 947),
        y: -21 / 3015 * 3015 / 1520 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 14.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: 439 / 1875 * w,
        height: 707 / 3015 * h,
        x: 1058 / 1875 * w,
        y: 188 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 15.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg16: [
    {
      delay: (0.201 + anSpeed) * 14.5,
      duration: 0.201 + anSpeed,
      from: {
        // 上下呼应
        width: w * 1875 / 439,
        height: h * 3015 / 707,
        x: -1058 / 1875 * w * scale * (w / 439),
        y: -188 / 3015 * 3015 / 707 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 15.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: 786 / 1875 * w,
        height: 1246 / 3015 * h,
        x: 1034 / 1875 * w,
        y: 684 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 16.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg17: [
    {
      delay: (0.201 + anSpeed) * 15.5,
      duration: 0.201 + anSpeed,
      from: {
        // 上下呼应
        width: w * 1875 / 786,
        height: h * 3015 / 1246,
        x: -1034 / 1875 * w * scale * (w / 786),
        y: -684 / 3015 * 3015 / 1246 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 16.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: 414 / 1875 * w,
        height: 665 / 3015 * h,
        x: 228 / 1875 * w,
        y: 2212 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 17.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg18: [
    {
      delay: (0.201 + anSpeed) * 16.5,
      duration: 0.201 + anSpeed,
      from: {
        // 上下呼应
        width: w * 1875 / 414,
        height: h * 3015 / 665,
        x: -228 / 1875 * w * scale * (w / 414),
        y: -2212 / 3015 * 3015 / 665 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 17.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: 787 / 1875 * w,
        height: 1253 / 3015 * h,
        x: 353 / 1875 * w,
        y: 1653 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 18.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg19: [
    {
      delay: (0.201 + anSpeed) * 17.5,
      duration: 0.201 + anSpeed,
      from: {
        // 上下呼应
        width: w * 1875 / 787,
        height: h * 3015 / 1253,
        x: -353 / 1875 * w * scale * (w / 787),
        y: -1653 / 3015 * 3015 / 1253 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 18.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: 290 / 1875 * w,
        height: 465 / 3015 * h,
        x: 1494 / 1875 * w,
        y: 525 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 19.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg20: [
    {
      delay: (0.201 + anSpeed) * 18.5,
      duration: 0.201 + anSpeed,
      from: {
        // 上下呼应
        width: w * 1875 / 290,
        height: h * 3015 / 465,
        x: -1494 / 1875 * w * scale * (w / 290),
        y: -525 / 3015 * 3015 / 465 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 19.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: 783 / 1875 * w,
        height: 1255 / 3015 * h,
        x: 1019 / 1875 * w,
        y: 482 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 20.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg21: [
    {
      delay: (0.201 + anSpeed) * 19.5,
      duration: 0.201 + anSpeed,
      from: {
        // 上下呼应
        width: w * 1875 / 783,
        height: h * 3015 / 1255,
        x: -1019 / 1875 * w * scale * (w / 783),
        y: -482 / 3015 * 3015 / 1255 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 20.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: 102 / 1875 * w,
        height: 102 / 3015 * h,
        x: 1157 / 1875 * w,
        y: 2311 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 21.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg22: [
    {
      delay: (0.201 + anSpeed) * 20.5,
      duration: 0.201 + anSpeed,
      from: {
        // 上下呼应
        width: w * 1875 / 102,
        height: h * 3015 / 102,
        x: -1157 / 1875 * w * scale * (w / 102),
        y: -2311 / 3015 * 3015 / 102 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 21.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: 470 / 1875 * w,
        height: 754 / 3015 * h,
        x: 1000 / 1875 * w,
        y: 2033 / 3015 * h,
      }
    },
    {
      delay: (0.201 + anSpeed) * 22.5,
      duration: 0.001,
      to: { alpha: 0 }
    },
  ],
  bg23: [
    {
      delay: (0.201 + anSpeed) * 21.5,
      duration: 0.201 + anSpeed,
      from: {
        // 上下呼应
        width: w * 1875 / 470,
        height: h * 3015 / 754,
        x: -1000 / 1875 * w * scale * (w / 470),
        y: -2033 / 3015 * 3015 / 754 * h,
      },
      to: {
        width: w,
        height: h,
        x: 0
      }
    },
    {
      delay: (0.201 + anSpeed) * 22.5,
      duration: 0.201 + anSpeed,
      to: {
        // 上下呼应
        width: w,
        height: h,
        x: 0,
        y: 0,
      }
    },
  ],
}

function initAnimation() {
  for (let key in animationsOptions) {
    if (animationsOptions.hasOwnProperty(key)) {
      let obj = animationsOptions[key];

      let time;
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
}


