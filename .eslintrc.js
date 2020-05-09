'use strict';

module.exports = {
    extends: 'eslint:recommended',
    env: {
        node: true
    },
    rules: {
        'brace-style': [2, 'stroustrup', {allowSingleLine: true}],
        'no-console': 0,
        strict: [2],
        indent: [2, 4]
    },
    overrides: [
        {
            files: 'tests/**',
            env: {
                mocha: true
            },
            globals: {
                expect: true
            }
        }
    ]
};
