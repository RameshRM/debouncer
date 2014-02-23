(function($win) {
    "use strict";
    var lastResizeInterval = null;

    var __isFunction = function(fnDef) {
        return typeof fnDef === "function";
    }

    $win.debouncer = function(callback) {
        var callbackIsFunction = __isFunction(callback);

        if (lastResizeInterval != null) {
            window.clearInterval(lastResizeInterval);
        }

        lastResizeInterval = window.setTimeout(function() {
            if (callbackIsFunction) {
                callback();
            }
        }, 200);
    };
})(window);
