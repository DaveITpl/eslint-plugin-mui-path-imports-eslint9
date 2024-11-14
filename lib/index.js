/**
 * @fileoverview Enforce top-level imports for MUI components
 */
"use strict";

import muiTopLevelImportsRule from "./rules/mui-path-imports";

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

export default {
    rules: {
        "mui-top-level-imports": muiTopLevelImportsRule,
    },
    configs: {
        recommended: flatConfig,
    },
}