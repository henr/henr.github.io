cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-hot-code-push-plugin/www/chcp.js",
        "id": "cordova-hot-code-push-plugin.chcp",
        "pluginId": "cordova-hot-code-push-plugin",
        "clobbers": [
            "chcp"
        ]
    },
//    {
//        "file": "plugins/cordova-hot-code-push-local-dev-addon/www/chcpLocalDev.js",
//        "id": "cordova-hot-code-push-local-dev-addon.chcpLocalDev",
//        "pluginId": "cordova-hot-code-push-local-dev-addon",
//        "clobbers": [
//            "chcpLocalDev"
//        ]
//    }

    {
        "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
        "id": "org.apache.cordova.console.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/logger.js",
        "id": "org.apache.cordova.console.logger",
        "clobbers": [
            "cordova.logger"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.console": "0.2.7"
}
// BOTTOM OF METADATA
});