require.config({
    baseUrl: "./",
    paths: {
        jquery: "../../bower_components/jquery/dist/jquery.min",
        QUnit: "../../bower_components/qunit/qunit/qunit"
    },
    shim: {
        "QUnit": {
            deps: ['jquery'],
            "exports": "QUnit",
            init: function() {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

require([
    'jquery',
    'QUnit',
    'core'
], function($, QUnit, core) {
    'use strict';
    $(document).ready(function() {
        core.run();
        QUnit.load();
        QUnit.start();
    });
});