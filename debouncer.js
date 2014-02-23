(function($win) {
    "use strict";

    $win.debouncer = function(callback) {
        var __isFunction = typeof callback === "function";

        if (window.lastResizeInterval != null) {
            window.clearInterval(window.lastResizeInterval);
        }

        window.lastResizeInterval = window.setTimeout(function() {
            if (__isFunction) {
                callback();
            }
        }, 200);
    };
})(window);
