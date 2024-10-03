import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    {
        rules: {
            "no-var": "error",
            "semi": "error",
            "indent": "error",
            "no-multi-spaces": "error",
            "space-in-parens": "error",
            "no-multiple-empty-lines": "error",
            "prefer-const": "error",
            "no-use-before-define": "error"
        }
    }
];