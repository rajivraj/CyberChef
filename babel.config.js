module.exports = function(api) {
    api.cache.forever();

    return {
        "presets": [
            ["@babel/preset-env", {
                "targets": {
                    "chrome": 40,
                    "firefox": 35,
                    "edge": 14,
                    "node": "6.5"
                },
                "modules": false,
                "useBuiltIns": "entry"
            }]
        ],
        "plugins": [
            ["babel-plugin-transform-builtin-extend", {
                "globals": ["Error"]
            }]
        ]
    };
};
