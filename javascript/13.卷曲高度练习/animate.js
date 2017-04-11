/**
 * Created by yoyo on 2017-02-16.
 */
function animate(tag, obj, fn) {

  clearInterval(tag.timer);
  tag.timer = setInterval(function () {
    var flag = true;//假设当前这一次定时器代码执行可以设置清除（每个样式都到达了指定位置）
    //先遍历obj
    for (var k in obj) {
      //由于obj中有一些属性可能是zIndex或者opacity，这时需要单独处理
      if (k == "opacity") {
        //将透明度当前值和目标值都设置为扩大后的倍数，设置时除以相应倍数即可
        var target = obj[k] * 100;
        var leader = getStyle(tag, k) * 100 || 0;
        var step = (target - leader) / 10;
        //给step设置取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        //透明度的设置需要去掉单位
        tag.style[k] = leader / 100;
        
      } else if (k == "zIndex") {
        //zIndex不需要渐变，直接设置即可
        tag.style.zIndex = obj[k];
        
      } else {
        var target = obj[k];
        var leader = parseInt(getStyle(tag, k)) || 0;
        var step = (target - leader) / 10;
        //给step设置取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        
        leader = leader + step;
        tag.style[k] = leader + "px";
      }
      
      //提取出每种条件都需要的代码
      if (leader != target) {
        flag = false;
      }
    }
    
    if (flag) {
      clearInterval(tag.timer);
      fn && fn();
    }
    
  }, 20);
}

function getStyle(tag, attr) {
  if (tag.currentStyle) {
    return tag.currentStyle[attr];
  } else {
    return getComputedStyle(tag, null)[attr];
  }
}