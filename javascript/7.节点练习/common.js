/**
 * Created by yoyo on 2017-02-07.
 */
/**
 * 这个函数的作用，用于兼容文字内容的设置操作
 * @param tag 需要一个获取后的标签
 * @param text 需要设置的内容
 */
function setText(tag, text) {
  //使用不全等和不相等都可以
  if (tag.innerText != undefined) {
    //说明可以使用innerText属性
    tag.innerText = text;
  } else {
    //说明不支持innerText，使用textContent
    tag.textContent = text;
  }
}
/**
 * 获取标签的纯文本内容的兼容函数
 * @param tag 需要一个获取后的标签
 * @returns {*} 返回值为标签的内容
 */
function getText(tag) {
  //能力检测：判断浏览器支持那个功能
  if (tag.innerText != undefined) {
    return tag.innerText;
  } else {
    return tag.textContent;
  }
}

/**
 * 获取标签的指定样式值
 * @param tag 要进行获取样式的标签
 * @param attr 要获取的样式属性名
 * @returns {*} 返回值为获取到的样式值
 */
function getStyle(tag, attr) {
  if (tag.currentStyle) {
    //如果进入if，说明标签支持currentStyle
    return tag.currentStyle[attr]
  } else {
    //进入else说明不支持currentStyle
    return getComputedStyle(tag, null)[attr];
  }
}


/**
 * 根据类名获取元素
 * @param cls 传入要获取的类名，字符串形式
 * @returns {*} 返回一个数组，数组中保存的是获取到的标签
 */
function getByClass(cls) {
  //1 先检测当前浏览器是否支持getElementsByClassName
  if (document.getElementsByClassName) {
    //检测的时候不要书写调用语句,不要加括号
    //进入if，说明浏览器支持这个功能
    return document.getElementsByClassName(cls);
  } else {
    //进入else说明不支持，我们需要自己实现根据类名获取元素的功能
    //1 获取页面中的标签
    var resultArr = [];//用于保存最终的获取结果
    var tags = document.body.getElementsByTagName("*");//获取body中的所有标签
    
    //2 依次检测每个标签的类名属性className
    for (var i = 0; i < tags.length; i++) {
      //3 当我们获取到某个标签的类名时，还需要将这个类名按照空格分隔，再去检测返回的数组中的每个部分
      var clsName = tags[i].className;
      var clsArr = clsName.split(" ");//数组中保存的是tags[i]这个标签的类名组成部分
      //4 遍历clsArr
      for (var j = 0; j < clsArr.length; j++) {
        //5 检测clsArr中是否有需要的类名部分
        if (clsArr[j] == cls) {
          //6 获取clsArr[j]这个部分类名所属于的标签
          resultArr[resultArr.length] = tags[i];
          break;//如果找到了需要的类名，后续的其他部分就不需要查看了
        }
      }
    }
    return resultArr;
  }
}

/**
 * 根据id名获取元素
 * @param id 传入id名，字符串形式
 * @returns {Element} 返回获取后的标签
 */
function getId(id) {
  return document.getElementById(id);
}