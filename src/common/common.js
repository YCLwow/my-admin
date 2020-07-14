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
 * 防抖 点击后延迟执行
 * @param {Function} fun - 执行函数
 * @param {Number} time - 延时时间
 * @param {Boolean} immediate -是否需要立即执行
 */
export function debounce(fn, wait, immediate) {
  let timer
  return function () {
    if (timer) clearTimeout(timer);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait)
      if (callNow) {
        fn.apply(this, arguments)
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait);
    }
  }
}
  /**
* 节流 X秒内只执行一次(点击后立马执行,X秒时间额外的点击不生效)
* @param {Function} fun - 执行函数
* @param {Number} time - 延时时间
*/
