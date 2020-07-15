/**
 * 下载文件
 * @param {String} response - 后端返回的二进制数据。
 * @param {String} name - 下载文件的名字/重命名（考虑到兼容性问题，最好加上后缀名）
 */
export function downloadFile(response, name) {
  // 获取二进制数据转成blob类型
  const blob = new Blob([response.res], { type: xhr.getResponseHeader('Content-Type') })
  // const url = URL.createObjectURL(blob);
  // blob类型转url地址
  const url = URL.createObjectURL(blob)
  // 创建a链接
  const a = document.createElement('a')
  // 隐藏a链接
  a.style.display = 'none'
  // 地址赋值
  a.href = url
  // 文件名
  a.download = name;
  // 页面添加a链接
  document.body.appendChild(a)
  // 点击a链接下载
  a.click()
  // 页面移除a链接
  document.body.removeChild(a)
  // 释放，防止占用内存
  URL.revokeObjectURL(url)

}
/**
 * 防抖 点击后延迟执行(也可立即执行)
 * @param {Function} fun - 执行函数
 * @param {Number} time - 延时时间
 * @param {Boolean} immediate -是否需要立即执行
 */
export function debounce(fn, wait, immediate) {
  // 外部函数无法销毁(因为内部函数被返回出去，且一直调用外部函数中的变量),返回出去的内部函数又可以访问外部函数的变量，形成闭包
  let timer
  let nowTimer
  let callNow = immediate
  return function () {
    if (timer) clearTimeout(timer);
    if (nowTimer) clearTimeout(nowTimer)
    if (callNow) {
      // 需要立即执行
      fn.apply(this, arguments)
      callNow = false
      nowTimer = setTimeout(() => {
        callNow = true
      }, wait)
    } else {
      timer = setTimeout(() => {
        callNow = immediate
        fn.apply(this, arguments)
      }, wait);
    }
  }
}
/**
* 节流 X秒内只执行一次(点击后立马执行,X秒时间额外的点击不生效)
* @param {Function} fun - 执行函数
* @param {Number} time - 定时时间
*/
export function throttle(fn, wait) {
  let canRun = true
  return function () {
    if (!canRun) return
    canRun = false;
    setInterval(() => {
      fn()
      canRun = true;
    }, wait)
  }
}
