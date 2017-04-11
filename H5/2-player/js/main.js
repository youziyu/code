// 获取元素
var oVideo=document.querySelector('video');
var totalTime=document.querySelector('.total-time');
var playBtn=document.querySelector('.play-btn');
var current=document.querySelector('.current-time');
var progress=document.querySelector('.progress');
var progressBar=document.querySelector('.progress-bar');
var fullscreen=document.querySelector(".fullscreen");
// 1.总时间的显示
oVideo.oncanplay=function(){
    var h,m,s
    h=Math.floor(oVideo.duration/3600);
    m=Math.floor(oVideo.duration/60);
    s=Math.floor(oVideo.duration%60);

    h=h>9?h:'0'+h;
    m=m>9?m:'0'+m;
    s=s>9?s:'0'+s;
    totalTime.innerHTML=h+':'+m+':'+s;
}
// 2.播放与暂停
playBtn.onclick=function(){
    if(oVideo.paused){
        oVideo.play();
        this.classList.toggle('fa-pause');
    }else{
        oVideo.pause();
        this.classList.toggle('fa-pause');
    }
}
// 3.当前时间的显示
oVideo.ontimeupdate=function(){
     var h,m,s
    h=Math.floor(oVideo.currentTime/3600);
    m=Math.floor(oVideo.currentTime/60);
    s=Math.floor(oVideo.currentTime%60);

    h=h>9?h:'0'+h;
    m=m>9?m:'0'+m;
    s=s>9?s:'0'+s;
    current.innerHTML=h+':'+m+':'+s;

    progressBar.style.width=oVideo.currentTime/oVideo.duration*100+'%';

}
// 跳跃播放
progress.onclick=function(e){
    // console.log(e.offsetX);
    var progressWidth=parseInt(window.getComputedStyle(progress,null).width);
    // console.log(progressWidth);
    oVideo.currentTime=(e.offsetX/progressWidth)*oVideo.duration;
}
// 全屏播放
fullscreen.onclick=function(){
    oVideo.webkitRequestFullscreen();
}
