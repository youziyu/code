// 1.视频总时间的显示

// 2.视频的播放与暂停 按钮图标的变换
// 3.当前时间的显示
// 4.进度条的显示
// 5.跳跃播放
// 6.全屏播放

var oVideo = document.querySelector('video');
var totalTime = document.querySelector('.total-time');
var playBtn = document.querySelector('.play-btn');
var current=document.querySelector('.current-time');
var progressBar=document.querySelector('.progress-bar');
var progress=document.querySelector('.progress');
var fullscreen=document.querySelector('.fullscreen');


// 1.视频总时间的显示
// 步骤:
// 1.获取元素 video元素   total-time元素
// 2.判断视频可以播放
oVideo.oncanplay = function () {
  // 3.拿到视频的总时间 duration视频的总时间 1570.32s 00:26:10
  console.log(oVideo.duration);
  // 4.把获取到的视频总时间处理成h m s  
  var h = Math.floor(oVideo.duration / 3600);
  // console.log(h);
  var m = Math.floor(oVideo.duration / 60 - h * 60);
  // console.log(m);
  var s = Math.floor(oVideo.duration % 60);
  // console.log(s);
  // 5.把处理好的数字判断是否是两位数，如果是两位数显示自己如果不是在前面加0
  h = h > 9 ? h : '0' + h;
  m = m > 9 ? m : '0' + m;
  s = s > 9 ? s : '0' + s;
  // 6.显示处理好的结果
  totalTime.innerHTML = h + ':' + m + ':' + s;
}


// 2.视频的播放与暂停 按钮图标的变换
// 步骤:
// 1.获取play-btn按钮 并添加点击事件
var flag=true;
playBtn.onclick = function () {
  // 2.判断视频是播放状态还是暂停状态  看能不能获取视频的播放状态
  // oVideo.paused 属性  视频暂停
  if (oVideo.paused) {
    // 3.如果是暂停状态 那就让其播放
    oVideo.play();
  // 5.按钮图标的变化
    this.classList.toggle('fa-pause');
  } else {
    // 4.如果是播放状态 那就让其暂停
    oVideo.pause();
     // 5.按钮图标的变化
     this.classList.toggle('fa-pause');
  }

  
  // if(flag==true){
  //   oVideo.play();
  //   flag=false;
  // }else{
  //   oVideo.pause();
  //    flag=true;
  // }

}



// 3.当前时间的显示
// 步骤:
// 1.获取元素 current-time
// 2.不断报告当前视频的播放进度
oVideo.ontimeupdate=function(){
// 3.获取视频的当前播放时间video.currentTime  
console.log(oVideo.currentTime);
// 4.把获取到的视频当前时间处理成h m s  
 var h = Math.floor(oVideo.currentTime / 3600);
  // console.log(h);
  var m = Math.floor(oVideo.currentTime / 60 - h * 60);
  // console.log(m);
  var s = Math.floor(oVideo.currentTime % 60);
// 5.判断是否是两位数，如果不是，变成两位数
  h = h > 9 ? h : '0' + h;
  m = m > 9 ? m : '0' + m;
  s = s > 9 ? s : '0' + s;
// 6.显示到current-time元素中
current.innerHTML = h + ':' + m + ':' + s;


// 4.进度条的显示
// 步骤:
    // 1.获取progress-bar元素
    // 2.计算progressbar的宽度=当前时间/总时间*100+'%'
    progressBar.style.width=oVideo.currentTime/oVideo.duration*100+"%";
}


// 5.跳跃播放
// 步骤:
  // 1.获取progress
  // 2.获取点击的位置的X轴的坐标
  progress.onclick=function(e){
  // 3.获取progress的总宽度  window.getcomputedstyle 450px
  var offset=e.offsetX;
  // console.log(offset);
  var progressWidth=window.getComputedStyle(progress,null).width;
  // console.log(progressWidth);
  // 4.把获取到的progress的宽度变成数字
  progressWidth=parseInt(progressWidth);
  // 5.跳跃播放  =视频的当前播放进度=点击的位置/progress的总宽度*视频的总时间
  oVideo.currentTime=offset/progressWidth*oVideo.duration;
  }


// 6.全屏播放
// 步骤 
  // 1.获取元素 
  // 2.点击事件
  fullscreen.onclick=function(){
  // 3.调用全屏方法
  oVideo.webkitRequestFullscreen();
  // toggleFullScreen();
  }



function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}