/**
 * @fileoverview Rule to disallow unnecessary semicolons
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */

module.exports = {
  meta: {
    type: "problem",
    docs: {
      recommended: true
    },
    fixable: "code"
  },
  create: function (context) {
    return {
      "JSXElement": function (node) {
        const OrbitonExists = context.markVariableAsUsed("Orbiton")
        if (OrbitonExists === false) {
          context.report({
            node,
            message: "Orbiton is not Defined. You can fix this problem by specifying runtime as automatic in you babel plugin or SWC plugin configuration",
          })
        }
      },
      "JSXFragment": function (node) {
        const FragmentExists = context.markVariableAsUsed("Fragment")
        if (FragmentExists === false) {
          context.report({
            node,
            message: "Fragment is not defined.",
          })
        }
      }
    }
  }
}