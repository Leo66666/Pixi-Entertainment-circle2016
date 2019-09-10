let timeline = new TimelineMax({
    paused: true
});
let alloyTouch;
function initTouch(vertical, val) {

    const min = (w < h) ? w : h;
    const max = (w > h) ? w : h;
    let scrollDis = app.stage.width - max - max;
    let is_end = false;
    alloyTouch = new AlloyTouch({
        touch: "body",//反馈触摸的dom
        min: -1000000, //不必需,运动属性的最小值
        maxSpeed: 1,
        max: 5, //不必需,滚动属性的最大值
        bindSelf: false,
        initialValue: 0,
        change: function (value) {
            // app.stage.position[val] = value - max;
            // let progress = -value / scrollDis;

            // if (progress >= 15.78 && is_end == false) {
            //     document.querySelector('.container-end').style.display = 'block'
            //     is_end = true;
            // }

            // progress = progress < 0 ? 0 : progress;
            // timeline.seek(progress);
        }
    })

    let value = 0;
    let timer;
    alert(321312)
    document.body.addEventListener('touchstart', function () {
        timer=setInterval(function () {
            value -= 15;
            let progress = -value / scrollDis;
            if (value <= -scrollDis*15.78 && is_end == false) {
                document.querySelector('.container-end').style.display = 'block'
                is_end = true;
                timer
            }
            progress = progress < 0 ? 0 : progress;
            timeline.seek(progress);
        }, 1000 / 60)
    }) 
    document.body.addEventListener('touchend', function () {
        clearInterval(timer)
    })

}




function wxShare(url, img, callback) {
    var shareTxt = $('title').text();
    var shareesac = $("[name='description']").attr("content");
    var shareurl = url;
    var sharephoto = img;
    $.ajax({
        url: "http://mp.i.dayoo.com/activityinterface/wechat/share",
        dataType: 'jsonp',
        success: function success(response) {
            if (typeof response.timestamp != 'undefined' && typeof response.nonceStr != 'undefined' && typeof response.signature != 'undefined') {
                wx.config({
                    debug: false,
                    appId: response.appId,
                    timestamp: response.timestamp,
                    nonceStr: response.nonceStr,
                    signature: response.signature,
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo']
                });
                wx.ready(function () {
                    wx.onMenuShareTimeline({
                        title: shareTxt,
                        link: shareurl,
                        imgUrl: sharephoto,
                        success: function success() {
                            if (callback) {
                                callback();
                            }
                        }
                    });
                    wx.onMenuShareAppMessage({
                        title: shareTxt,
                        desc: shareesac,
                        link: shareurl,
                        imgUrl: sharephoto,
                        success: function success() {
                            if (callback) {
                                callback();
                            }
                        }
                    });
                    wx.onMenuShareQQ({
                        title: shareTxt,
                        desc: shareesac,
                        link: shareurl,
                        imgUrl: sharephoto
                    });
                    wx.onMenuShareWeibo({
                        title: shareTxt,
                        desc: shareesac,
                        link: shareurl,
                        imgUrl: sharephoto
                    });
                });
            }
        }
    });
}

var img = 'src/images/share.png';
var url = '${article. currentColUrl}';


wxShare(url, img)