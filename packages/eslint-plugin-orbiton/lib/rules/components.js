/**
 * @fileoverview Rule to disallow unnecessary semicolons
 * @author Nicholas C. Zakas
 */

"use strict";

const { getElementType } = require('../utils/getElementType');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */

module.exports = {
  meta: {
    type: "problem",
    fixable: "code"
  },
  create: function (context) {
    return {
      "JSXElement": function (node) {
        const openingElement = node.openingElement
        const nodeName = node.openingElement.name.name
        const elType = getElementType(nodeName)
        if (elType === "component") {
          const componentDeclared = context.markVariableAsUsed(nodeName)
          if (componentDeclared === false) {
            context.report({
              node: openingElement,
              message: "'{{ identifier }}' is not defined.",
              data: {
                identifier: nodeName
              }
            })
          }
        }
      },
      "JSXNamespacedName": function (node) {
        const namespaceName = node.name.name
        const nameDefined = context.markVariableAsUsed(namespaceName)
        if (nameDefined === false) {
          context.report({
            node,
            message: "'{{ identifier }}' is not defined.",
            data: {
              identifier: namespaceName
            }
          })
        }
      }
    }
  }
}