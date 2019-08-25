module.exports = {
    "parser": 'babel-eslint',
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true,
    },
    "extends": ['eslint:recommended', 'plugin:react/recommended'],
    "plugins": [
        "react"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        'semi': [1, 'never'],
        'quotes': [1, "single", { "avoidEscape": true }],
        'no-console': ["warn"],
        'no-unused-vars': ["warn"],

        // React
        'react/prop-types': ['off'],
        'react/no-unescaped-entities': ['off'],
        'react/style-prop-object': ['warn']
    }
}