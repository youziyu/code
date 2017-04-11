/**
 * Created by HUCC on 2016/11/14.
 */
//增加一个回调函数,当动画执行完成，之后，去调用fn
function animate(element, json, fn) {
    if (element.timer) {
        clearInterval(element.timer);
    }

    element.timer = setInterval(function () {

        //每次调用funciton的时候，假设全部都到了终点
        var flag = true;

        for(var k in json) {
            var attr = k;
            var target = json[k];


            var leader = getStyle(element, attr);
            leader = parseInt(leader) || 0;

            var step = (target - leader) / 10;
            if (step > 0) {
                step = Math.ceil(step);
            } else {
                step = Math.floor(step);
            }

            leader = leader + step;
            element.style[attr] = leader + "px";

            if (leader != target) {
                flag = false;
            }
        }


        //说明假设是成立的，说明所有的都到了重点
        if(flag){
            clearInterval(element.timer);
//                if(fn){
//                    fn();
//                }

            //不明觉厉
            fn && fn();

        }

    }, 15);
}


//获取元素计算后的样式
function getStyle(element, attr) {
    //能力检测
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        return element.currentStyle[attr];
    }
}