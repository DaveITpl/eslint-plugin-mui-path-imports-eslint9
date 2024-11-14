/**
 * @fileoverview Enforce top-level imports for MUI components
 */
"use strict";

/**
 * @type {import('./rules/mui-path-imports')}
 */
const muiTopLevelImportsRule = require("./rules/mui-path-imports");

/**
 * @type {import('eslint').FlatConfig}
 */
const flatConfig = {
    plugins: {
        "mui-path-imports": {
            rules: {
                "mui-top-level-imports": muiTopLevelImportsRule,
            },
        },
    },
    rules: {
        "mui-path-imports/mui-top-level-imports": "error",
    },
};

module.exports = {
    rules: {
        "mui-top-level-imports": muiTopLevelImportsRule,
    },
    configs: {
        recommended: flatConfig,
    },
};
