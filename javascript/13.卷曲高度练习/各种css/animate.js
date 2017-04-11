/**
 * Created by yoyo on 2016-08-22.
 */
function animate(tag, obj, fn) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var flag = true;
        for (var key in obj) {
            if (key == "opacity") {
                var leader = getStyle(tag, key) * 100;
                //step = ( target - leader ) / 10
                var target = obj[key] * 100;
                var step = (target - leader) / 10;
                step = leader > target ? Math.floor(step) : Math.ceil(step);
                //leader = leader +  step
                leader = leader + step;
                tag.style[key] = leader / 100;
            } else if (key == "zIndex") {
                tag.style[key] = obj[key];
            } else {
                var leader = parseInt(getStyle(tag, key)) || 0;
                var target = obj[key];
                var step = (target - leader) / 10;
                step = leader > target ? Math.floor(step) : Math.ceil(step);
                leader = leader + step;
                tag.style[key] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(tag.timer);
            if (typeof fn == "function") {
                fn();
            }
            //fn && fn();
        }
    }, 18);
}

function getStyle(tag, attr) {
    return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];
}