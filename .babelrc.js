// / const config = require('./app/config')

module.exports = {
  "presets": [
    "next/babel"
  ],
  "plugins": [
    ["babel-plugin-root-import"],
    // ["transform-remove-console"],
    [ "inline-react-svg" ],

    ["styled-components", { "ssr": true, "displayName": true, "preprocess": false } ],

    // Module resolver
    ["module-resolver", {
      "root": ["./app"],
      "alias": {
        "@containers": "./app/containers",
        "@components": "./app/components",
        "@configs": "./app/configs",
        "@actions": "./app/store/Actions",
        "@types": "./app/store/types",
        "@libs":"./app/libs"
      }
    }]
  ],
  "env": {
    "development": {
      "plugins": ["inline-dotenv", "dynamic-import-node"],
      "presets": [["next/babel", { "preset-env": { "modules": "commonjs" } }]]
    },
    "production": {
      "plugins": [["transform-inline-environment-variables"],["transform-remove-console"]]
    },
    "test": {
      "presets": [["next/babel", { "preset-env": { "modules": "commonjs" } }]]
    }
  }
}
