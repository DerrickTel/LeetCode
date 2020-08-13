/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  // 解决时间, 奇数就直接return
  if( s.length % 2 === 1 ){ 
    return false 
  }

  var map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ])

  var list = []

  s.split('').forEach(item => {
    // 找得到说明是左边的括号
    if(map.get(item)){
      list.push(item)
    } else {
      if(
        // 长度是0的时候是右边的括号就直接错了
        !list.length 
        // 找不到对应的括号就直接false
        || map.get(list[list.length - 1]) !== item
      ){
        return false
      }
      list.pop()
    }
  })
  return !list.length
};
