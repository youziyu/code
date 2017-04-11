/**
 * Created by yoyo on 2017-01-04.
 */
function getPageX(e) {
  if (e.pageX) {
    return e.pageX;
  } else {
    return e.clientX + myScroll().left;
  }
}

function getPageY(e) {
  if (e.pageY) {
    return e.pageY;
  } else {
    return e.clientY + myScroll().top;
  }
}

function myScroll() {
  return {
    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
  };
}