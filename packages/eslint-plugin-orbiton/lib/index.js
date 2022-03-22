/**
 * @fileoverview Eslint for orbiton
 * @author Beingana Jim Junior
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rules = require("./rules/index")


module.exports = {
  configs: {
    recommended: {
      rules: {
        "orbiton/imports": "error",
        "orbiton/components": "error"
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true
        }
      },
    },
  },
  rules
}

