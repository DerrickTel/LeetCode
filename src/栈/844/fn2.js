/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    
  var list1 = []
  var list2 = []
  S.split('').forEach(v => {
      if(v === '#') {
          list1.pop()
      }else {
          list1.push(v)
      }
  })
  T.split('').forEach(v => {
      if(v === '#') {
          list2.pop()
      }else {
          list2.push(v)
      }
  })
  if(list1.length !== list2.length) {
      return false
  }
  for(var i = 0; i < list1.length; i++) {
    if(list1[i] !== list2[i]) {
      return false
    }
  }
  return true
};

backspaceCompare("xywrrmp",
"xywrrmu#p")