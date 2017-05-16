// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document.body) {
  let result = [];
  // for each node in document.body.childNodes
    // result = result.concat(getElementsByClassName(childNode));
  // check if className is in Element.classList
    // push it to the array
  // return result
  if (node.classList !== undefined) {
    if (node.classList.contains(className)) {
      result.push(node);
    }
  }

  _.each(node.childNodes, function(childNode) {
    result = result.concat(getElementsByClassName(className, childNode));
  });
  


  return result;
};
