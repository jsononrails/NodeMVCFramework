
/*
Holder - 2.2 - client side image placeholders
(c) 2012-2013 Ivan Malopinsky / http://imsky.co
Provided under the MIT License.
Commercial use requires attribution.
*/
var Holder = Holder || {};
(function (app, win) {
    var preempted = false,
    fallback = false,
    canvas = document.createElement('canvas');
    var dpr = 1, bsr = 1;
    var resizable_images = [];
    if (!canvas.getContext) {
        fallback = true;
    } else {
        if (canvas.toDataURL("image/png")
        .indexOf("data:image/png") < 0) {
            //Android doesn't support data URI
            fallback = true;
        } else {
            var ctx = canvas.getContext("2d");
        }
    }
    if(!fallback){
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
    }
    var ratio = dpr / bsr;
    var settings = {
        domain: "holder.js",
        images: "img",
        bgnodes: ".holderjs",
        themes: {
            "gray": {
                background: "#eee",
                foreground: "#aaa",
                size: 12
            },
            "social": {
                background: "#3a5a97",
                foreground: "#fff",
                size: 12
            },
            "industrial": {
                background: "#434A52",
                foreground: "#C2F200",
                size: 12
            },
            "sky": {
                background: "#0D8FDB",
                foreground: "#fff",
                size: 12
            },
            "vine": {
                background: "#39DBAC",
                foreground: "#1E292C",
                size: 12
            },
            "lava": {
                background: "#F8591A",
                foreground: "#1C2846",
                size: 12
            }
        },
        stylesheet: ""
    };
    app.flags = {
        dimensions: {
            regex: /^(\d+)x(\d+)$/,
            output: function (val) {
                var exec = this.regex.exec(val);
                return {
                    width: +exec[1],
                    height: +exec[2]
                }
            }
        },
        fluid: {
            regex: /^([0-9%]+)x([0-9%]+)$/,
            output: function (val) {
                var exec = this.regex.exec(val);
                return {
                    width: exec[1],
                    height: exec[2]
                }
            }
        },
        colors: {
            regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,
            output: function (val) {
                var exec = this.regex.exec(val);
                return {
                    size: settings.themes.gray.size,
                    foreground: "#" + exec[2],
                    background: "#" + exec[1]
