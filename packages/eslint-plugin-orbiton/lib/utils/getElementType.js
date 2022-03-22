

module.exports.getElementType = function (node) {
  /** @type string */
  const isComponentRegex = /^[A-Z]/;
  if (isComponentRegex.test(node)) {
    return "component"
  }
  return "element"
}