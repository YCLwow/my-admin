/*
 * @Author: liuyichen 
 * @Date: 2020-06-29 13:34:14 
 * @Last Modified by: liuyichen
 * @Last Modified time: 2020-07-04 15:19:46
 */

/**
* @param {string} str
* @returns {Boolean}
*/
// 去除空格,判断是否在该数组中出现过，无则不放
export function validUsername(str) {
  const valid_map = ['admin', 'editor', 'actest']
  return valid_map.indexOf(str.trim()) >= 0
}
