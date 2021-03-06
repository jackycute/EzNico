var SpwebViewCommonParameter;
! function (a) {
    "use strict";
    var b = function () {
        function a() {
            this.device = document.getElementById("jsDevice").value, this.operating_system = document.getElementById("jsOperatingSystem").value
        }
        return a
    }();
    a.DeviceParameterContainer = b
}(SpwebViewCommonParameter || (SpwebViewCommonParameter = {}));
var SpwebConstants;
! function (a) {
    "use strict";

    function b(a) {
        return c[a] + " status=" + a
    }
    a.CommentConstants = {
        aheadSpan: 100,
        duration: 300,
        visibleSpan: 400,
        position: {
            center: "naka",
            top: "ue",
            bottom: "shita"
        },
        pc: {
            font: {
                big: 39,
                medium: 24,
                small: 15
            },
            canvasHeight: 384
        },
        color: {
            red: [255, 0, 0],
            pink: [255, 128, 128],
            orange: [255, 192, 0],
            yellow: [255, 255, 0],
            green: [0, 255, 0],
            cyan: [0, 255, 255],
            blue: [0, 0, 255],
            purple: [192, 0, 255],
            white: [255, 255, 255]
        },
        premiumColor: {
            white2: [204, 204, 153],
            niconicowhite: [204, 204, 153],
            red2: [204, 0, 51],
            truered: [204, 0, 51],
            pink2: [255, 51, 204],
            orange2: [255, 102, 0],
            passionorange: [255, 102, 0],
            yellow2: [153, 153, 0],
            madyellow: [153, 153, 0],
            green2: [0, 204, 102],
            elementalgreen: [0, 204, 102],
            cyan2: [0, 204, 204],
            blue2: [51, 153, 255],
            marineblue: [51, 153, 255],
            purple2: [102, 51, 204],
            nobleviolet: [102, 51, 204],
            black2: [102, 102, 102]
        },
        default_canvas: {
            height: 180,
            width: 320
        }
    }, a.CounterApiConstants = {
        VIEW_WATCH_FLASH: "view/watch_flash",
        VIEW_WATCH_HTML5: "view/watch_html5",
        CLICK_PLAY_ONE_MORE_TIME: "click/play/one_more_time",
        CLICK_PLAY_IAPP: "click/play_iapp",
        CLICK_PLAY_ANDROID_APP: "click/play_android_app",
        CLICK_PLAY_WEB_IOS: "click/play_web_ios",
        CLICK_PLAY_WEB_ANDROID: "click/play_web_android",
        CLICK_DL_IAPP_YES: "click/dl_iapp/yes",
        CLICK_DL_IAPP_NO: "click/dl_iapp/no",
        CLICK_SHARE_LINE: "click/share_line",
        CLICK_SHARE_FACEBOOK: "click/share_facebook",
        CLICK_SHARE_TWITTER: "click/share_twitter",
        CLICK_SHARE_MAIL: "click/share_mail",
        CLICK_ADDFAV_IAPP: "click/addfav_iapp",
        CLICK_HQ_OPTION_TO_LOW: "click/hq_option/to_low",
        CLICK_HQ_OPTION_TO_HIGH: "click/hq_option/to_high",
        CLICK_OPEN_COMMANDPALETTE: "click/open_commandpalette",
        CLICK_COMMENT_TAB: "click/open_commenttab",
        CLICK_COMMENT_POST_BASE: "click/comment/post",
        CLICK_FORCE_LANDSCAPE: "click/force_landscape",
        SHOW_HQ_OPTION_PREMIUM: "show/hq_option/premium_link",
        ERROR_ORIENTATION_CALCOVER: "error/orientation_calcover/",
        ERROR_GETFLV: "error/getflv",
        ERROR_VIDEO_ERROR: "error/video_error",
        EVENT_WATCH_HTML5_VIDEOEND_REPEAT: "event/watch/html5/reach_end_time/repeat",
        EVENT_WATCH_HTML5_VIDEOEND_NOREPEAT: "event/watch/html5/reach_end_time/norepeat",
        START_WATCH_TAB_INDEX_MEMORY: "tmp/start_watch_tab_index_memory",
        OPEN_VIDEO_INFO_TAB: "tmp/open_video_info_tab"
    }, a.TagApiTplTypeConstants = {
        WATCH_PAGE: "watch"
    }, a.GyokuonApiTplTypeConstants = {
        TAB: "tab",
        PLAYER: "player"
    }, a.DeviceConstants = {
        OperatingSystem: {
            ANDROID: "Android",
            IOS: "iOS"
        },
        Device: {
            IPHONE: "iPhone",
            IPAD: "iPad",
            IPOD: "iPod"
        }
    }, a.CustomDomEventConstants = {
        SHOW_ELEMENT: "showElement"
    }, a.StatusCodeConstants = {
        GETFLV_ERROR: 1,
        NO_VIDEO_QUALITY_AVAILABLE: 2,
        VIDEO_QUALITY_EXHAUSTED_BY_VIDEO_ERROR: 3,
        WATCH_API_ERROR_DEFAULT: 4,
        WATCH_API_ERROR_404: 5,
        WATCH_API_ERROR_500: 6,
        WATCH_API_ERROR_CONTINUE: 7,
        PLAY_BY_QUALITY_ERROR: 8
    };
    var c = function () {
        var b = {};
        return b[a.StatusCodeConstants.GETFLV_ERROR] = "動画の取得に失敗しました。", b[a.StatusCodeConstants.NO_VIDEO_QUALITY_AVAILABLE] = "この動画は再生できません。", b[a.StatusCodeConstants.VIDEO_QUALITY_EXHAUSTED_BY_VIDEO_ERROR] = "この動画は再生できません。", b[a.StatusCodeConstants.WATCH_API_ERROR_DEFAULT] = "動画を視聴することができません", b[a.StatusCodeConstants.WATCH_API_ERROR_404] = "動画情報を取得することができません", b[a.StatusCodeConstants.WATCH_API_ERROR_500] = "エラーが発生しました。しばらく待ってからページをリロードしてください。", b[a.StatusCodeConstants.WATCH_API_ERROR_CONTINUE] = "エラーが発生しました。ページをリロードしてください。", b[a.StatusCodeConstants.PLAY_BY_QUALITY_ERROR] = "画質の切り替えに失敗しました。ページを再読み込みします。", b
    }();
    a.makeMessage = b
}(SpwebConstants || (SpwebConstants = {}));
var SpwebUtil;
! function (a) {
    "use strict";
    var b = SpwebViewCommonParameter.DeviceParameterContainer,
        c = SpwebConstants.DeviceConstants,
        d = SpwebConstants.CommentConstants;
    ! function (a) {
        function b(a) {
            for (var b = {}, c = a.split("&"), d = 0, e = c.length; e > d; d++) {
                var f = c[d].split("=");
                b[decodeURIComponent(f[0])] = decodeURIComponent(f[1])
            }
            return b
        }

        function c(a) {
            var b = [];
            for (var c in a) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
            return b.join("&")
        }

        function d(a) {
            var b = Math.floor(a / 60),
                c = b.toString(),
                d = Math.floor(a % 60),
                e = d.toString();
            return 10 > b && (c = "0" + b), 10 > d && (e = "0" + d), c + ":" + e
        }

        function e(a) {
            var b = a.split(":");
            return 60 * Number(b[0]) + Number(b[1])
        }

        function f(a) {
            try {
                return JSON.parse(a)
            } catch (b) {
                return null
            }
        }

        function g(a) {
            for (var b = 0, c = a.length, d = []; c > b; b++) d.push(a[b]);
            return d
        }
        a.queryToObject = b, a.objectToQuery = c, a.timeToString = d, a.stringToTime = e, a.parseJSON = f, a.nodeListToNodeArray = g
    }(a.Util || (a.Util = {}));
    a.Util;
    ! function (a) {
        function d() {
            return i().operating_system === c.OperatingSystem.IOS
        }

        function e() {
            return i().operating_system === c.OperatingSystem.ANDROID
        }

        function f() {
            return i().device === c.Device.IPHONE
        }

        function g() {
            return i().device === c.Device.IPAD
        }

        function h() {
            return i().device === c.Device.IPOD
        }

        function i() {
            return j || (j = new b), j
        }
        var j;
        a.is_iOS = d, a.isAndroid = e, a.is_iPhone = f, a.is_iPad = g, a.is_iPod = h, a.getDeviceParameters = i
    }(a.DeviceJudgement || (a.DeviceJudgement = {}));
    a.DeviceJudgement;
    ! function (a) {
        function b(a, b) {
            return d.pc.font[a] * b / d.pc.canvasHeight
        }
        a.calculateFontSize = b
    }(a.CommentUtil || (a.CommentUtil = {}));
    a.CommentUtil
}(SpwebUtil || (SpwebUtil = {}));
var SpwebViewCommonScreen;
! function (a) {
    "use strict";
    var b = SpwebUtil.DeviceJudgement,
        c = function () {
            function a(a, b) {
                this.portrait_judgement = new g(b), this.portrait_screen_layout = (new e).create(a, b, this.portrait_judgement)
            }
            return a.prototype.create = function (a) {
                var b, c, e;
                return e = this.portrait_judgement.isPortrait(a), e ? (b = this.portrait_screen_layout.height, c = this.portrait_screen_layout.width) : (b = this.portrait_screen_layout.width, c = this.portrait_screen_layout.height), new d(b, c, e)
            }, a
        }();
    a.ScreenLayoutFactory = c;
    var d = function () {
        function a(a, b, c) {
            this._height = a, this._width = b, this.is_portrait = c
        }
        return a.prototype.isPortrait = function () {
            return this.is_portrait
        }, a.prototype.isLandscape = function () {
            return !this.is_portrait
        }, a.prototype.height = function () {
            return this._height
        }, a.prototype.width = function () {
            return this._width
        }, a.prototype.getOrientation = function () {
            return this.is_portrait ? "portrait" : "landscape"
        }, a
    }();
    a.ScreenLayout = d;
    var e = function () {
            function a() {}
            return a.prototype.create = function (b, c, d) {
                var e = new f(b);
                return a.needDevicePixelRatio(e, c, d) && (e.height = e.height / c.devicePixelRatio, e.width = e.width / c.devicePixelRatio), e
            }, a.needDevicePixelRatio = function (a, b, c) {
                var d;
                return d = c.isPortrait(b) ? a.width : a.height, b.innerWidth !== d
            }, a
        }(),
        f = function () {
            function a(a) {
                this.height = Math.max(a.height, a.width), this.width = Math.min(a.height, a.width)
            }
            return a
        }(),
        g = function () {
            function a(b) {
                this.is_portrait_default = a.isPortraitDefault(b)
            }
            return a.prototype.isPortrait = function (b) {
                return a.isDefaultOrientaion(b) ? this.is_portrait_default : !this.is_portrait_default
            }, a.isDefaultOrientaion = function (a) {
                return Math.abs(a.orientation) % 180 === 0
            }, a.isPortraitDefault = function (c) {
                return b.is_iOS() ? !0 : a.isLandscapeDefaultDevice(b.getDeviceParameters().device) ? !1 : !0
            }, a.isLandscapeDefaultDevice = function (a) {
                return this.landscape_default_devices.indexOf(a) >= 0
            }, a.landscape_default_devices = ["MZ604", "SO-03E", "A01SH", "ME301T"], a
        }()
}(SpwebViewCommonScreen || (SpwebViewCommonScreen = {}));
var __extends = this.__extends || function (a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    },
    SpwebViewModelCommonWindow;
! function (a) {
    "use strict";
    var b = SpwebViewCommonScreen.ScreenLayoutFactory;
    ! function (a) {
        function b(a, b) {
            void 0 === b.orientation && (b.orientation = b.outerHeight > b.outerWidth ? 0 : 90), f = new g(a, b)
        }

        function d(a, b) {
            if (!f) throw new Error("not initialized WindowEventHandler.");
            f.listen(a, b)
        }

        function e() {
            return f.getScreenLayout()
        }
        var f = null;
        a.initialize = b, a.listen = d, a.getScreenLayout = e;
        var g = function () {
            function a(a, b) {
                this.listener = c.create(a, b), this.window = b
            }
            return a.prototype.listen = function (a, b) {
                "orientationchange" === a ? this.listener.push(b) : this.window.addEventListener(a, b)
            }, a.prototype.getScreenLayout = function () {
                return this.listener.getScreenLayout()
            }, a
        }()
    }(a.WindowEventHandler || (a.WindowEventHandler = {})); {
        var c;
        a.WindowEventHandler
    }! function (a) {
        function b(a, b) {
            return "undefined" == typeof b.onorientationchange ? new e(a, b) : new d(a, b)
        }
        a.create = b
    }(c || (c = {}));
    var d = function () {
            function a(a, c) {
                var d = this;
                this.screen = a, this.window = c, this.orientationchange_listener = [], this.screen_layout_factory = new b(this.screen, this.window), this.screen_layout = this.screen_layout_factory.create(this.window), this.last_orientation = this.window.orientation, this.window.addEventListener(this.getListeningWindowEventName(), function () {
                    d.dispatchOrientationchange()
                }), jQuery(function () {
                    d.dispatchOrientationchange()
                })
            }
            return a.prototype.push = function (a) {
                this.orientationchange_listener.push(a)
            }, a.prototype.getScreenLayout = function () {
                return this.screen_layout
            }, a.prototype.dispatchOrientationchange = function () {
                var a = 0,
                    b = this.orientationchange_listener.length;
                for (this.screen_layout = this.screen_layout_factory.create(this.window); b > a; a++) this.orientationchange_listener[a].call(this.window, this.screen_layout)
            }, a.prototype.getListeningWindowEventName = function () {
                return "orientationchange"
            }, a
        }(),
        e = function (a) {
            function b() {
                a.apply(this, arguments)
            }
            return __extends(b, a), b.prototype.dispatchOrientationchange = function () {
                this.last_orientation !== this.window.orientation && (a.prototype.dispatchOrientationchange.call(this), this.last_orientation = this.window.orientation)
            }, b.prototype.getListeningWindowEventName = function () {
                return "resize"
            }, b
        }(d)
}(SpwebViewModelCommonWindow || (SpwebViewModelCommonWindow = {}));
var SpwebEvent;
! function (a) {
    "use strict";
    var b = function () {
        function a() {
            this.event_listener_map = {}
        }
        return a.prototype.event = function (a) {
            return this.event_listener_map[a] || (this.event_listener_map[a] = new c), this.event_listener_map[a]
        }, a
    }();
    a.EventHandlerBase = b;
    var c = function () {
        function a() {
            this.listeners = []
        }
        return a.prototype.listen = function (a) {
            this.listeners.push(a)
        }, a.prototype.dispatch = function (a) {
            this.listeners.forEach(function (b) {
                b(a)
            })
        }, a
    }()
}(SpwebEvent || (SpwebEvent = {}));
var SpwebModelVideoQuality;
! function (a) {
    "use strict";
    ! function (a) {
        a[a.HIGH = 4] = "HIGH", a[a.MIDDLE = 2] = "MIDDLE", a[a.LOW = 1] = "LOW"
    }(a.VideoQualityType || (a.VideoQualityType = {}));
    a.VideoQualityType
}(SpwebModelVideoQuality || (SpwebModelVideoQuality = {}));
var SpwebViewModelWatchHtml5Event;
! function (a) {
    "use strict";
    var b = SpwebEvent.EventHandlerBase,
        c = function (a) {
            function b() {
                var b = this;
                a.call(this), this.current_time = 0, this.event("videoTimeupdate").listen(function (a) {
                    b.current_time = a
                })
            }
            return __extends(b, a), b.prototype.getCurrentTime = function () {
                return this.current_time
            }, b
        }(b);
    a.Html5PlayerEventHandler = new c
}(SpwebViewModelWatchHtml5Event || (SpwebViewModelWatchHtml5Event = {}));
var SpwebModelMylist;
! function (a) {
    "use strict";
    var b = function () {
        function a(a, b, c) {
            this.item_id = a, this.item_type = b, this.description = c
        }
        return a
    }();
    a.DeflistImpl = b;
    var c = function () {
        function a(a, b, c, d) {
            this.mylistgroup_id = a, this.item_id = b, this.item_type = c, this.description = d
        }
        return a
    }();
    a.MylistImpl = c,
        function (a) {
            a[a.VIDEO = 0] = "VIDEO"
        }(a.MylistItemType || (a.MylistItemType = {}));
    var d = (a.MylistItemType, function () {
        function a(a, b, c, d, e, f) {
            this.id = a, this.name = b, this.description = c, this.is_public = d, this.default_sort = e, this.icon_id = f
        }
        return a
    }());
    a.MylistgroupImpl = d,
        function (a) {
            a[a.CREATE_TIME_ASC = 0] = "CREATE_TIME_ASC", a[a.CREATE_TIME_DESC = 1] = "CREATE_TIME_DESC", a[a.DESCRIPTION_ASC = 2] = "DESCRIPTION_ASC", a[a.DESCRIPTION_DESC = 3] = "DESCRIPTION_DESC", a[a.TITLE_ASC = 4] = "TITLE_ASC", a[a.TITLE_DESC = 5] = "TITLE_DESC", a[a.FIRST_RETRIEVE_DESC = 6] = "FIRST_RETRIEVE_DESC", a[a.FIRST_RETRIEVE_ASC = 7] = "FIRST_RETRIEVE_ASC", a[a.VIEW_COUNTER_DESC = 8] = "VIEW_COUNTER_DESC", a[a.VIEW_COUNTER_ASC = 9] = "VIEW_COUNTER_ASC", a[a.NEW_COMMENT_DESC = 10] = "NEW_COMMENT_DESC", a[a.NEW_COMMENT_ASC = 11] = "NEW_COMMENT_ASC", a[a.COMMENT_COUNTER_DESC = 12] = "COMMENT_COUNTER_DESC", a[a.COMMENT_COUNTER_ASC = 13] = "COMMENT_COUNTER_ASC", a[a.MYLIST_COUNTER_DESC = 14] = "MYLIST_COUNTER_DESC", a[a.MYLIST_COUNTER_ASC = 15] = "MYLIST_COUNTER_ASC", a[a.VIDEO_LENGTH_DESC = 16] = "VIDEO_LENGTH_DESC", a[a.VIDEO_LENGTH_ASC = 17] = "VIDEO_LENGTH_ASC"
        }(a.MylistgroupDefaultSort || (a.MylistgroupDefaultSort = {}));
    a.MylistgroupDefaultSort;
    ! function (a) {
        a[a.COLOR_0 = 0] = "COLOR_0", a[a.COLOR_1 = 1] = "COLOR_1", a[a.COLOR_2 = 2] = "COLOR_2", a[a.COLOR_3 = 3] = "COLOR_3", a[a.COLOR_4 = 4] = "COLOR_4", a[a.COLOR_5 = 5] = "COLOR_5", a[a.COLOR_6 = 6] = "COLOR_6", a[a.COLOR_7 = 7] = "COLOR_7", a[a.COLOR_8 = 8] = "COLOR_8", a[a.COLOR_9 = 9] = "COLOR_9"
    }(a.MylistgroupIconId || (a.MylistgroupIconId = {}));
    a.MylistgroupIconId
}(SpwebModelMylist || (SpwebModelMylist = {}));
var SpwebApiSpweb;
! function (a) {
    var b = SpwebUtil.Util,
        c = SpwebConstants.CounterApiConstants,
        d = function () {
            function a(a, b) {
                this.spweb_url = a, this.csrf_token = b
            }
            return a.prototype.add = function (a, b, c) {
                var d = this;
                jQuery.ajax({
                    cache: !1,
                    url: this.spweb_url + "api/fav/add",
                    type: "POST",
                    data: {
                        item_id: a.item_id,
                        item_type: a.item_type,
                        token: this.csrf_token
                    },
                    dataType: "json",
                    success: function (a) {
                        d.isSuccess(a) ? b() : c(a.error_code)
                    },
                    error: function () {
                        c("ERROR")
                    }
                })
            }, a.prototype.del = function (a, b, c) {
                var d = this;
                jQuery.ajax({
                    cache: !1,
                    url: this.spweb_url + "api/fav/delete",
                    type: "POST",
                    data: {
                        item_id: a.item_id,
                        item_type: a.item_type,
                        token: this.csrf_token
                    },
                    dataType: "json",
                    success: function (a) {
                        d.isSuccess(a) ? b() : c(a.error_code)
                    },
                    error: function () {
                        c("ERROR")
                    }
                })
            }, a.prototype.exist = function (a, b, c) {
                var d = this;
                jQuery.ajax({
                    cache: !1,
                    url: this.spweb_url + "api/fav/exist",
                    type: "GET",
                    data: a,
                    dataType: "json",
                    success: function (a) {
                        d.isSuccess(a) ? b(a.exist) : c(a.error_code)
                    },
                    error: function () {
                        c("ERROR")
                    }
                })
            }, a.prototype.isSuccess = function (a) {
                return "ok" === a.status
            }, a
        }();
    a.FavApi = d;
    var e = function () {
        function a(a) {
            this.item_type = "user", this.item_id = a
        }
        return a
    }();
    a.FavoriteUser = e;
    var f = function () {
        function a(a) {
            this.item_type = "channel", this.item_id = a
        }
        return a
    }();
    a.FavoriteChannel = f;
    var g = function () {
        function a(a, b) {
            this.spweb_url = a, this.csrf_token = b
        }
        return a.prototype.add = function (a, c, d) {
            jQuery.ajax({
                cache: !1,
                url: this.spweb_url + "api/mylist/add",
                type: "POST",
                data: h.create(a, this.csrf_token),
                dataType: "json",
                success: function () {
                    c()
                },
                error: function (a) {
                    var c = b.parseJSON(a.responseText);
                    d(c.error.code ? c.error.code : "")
                }
            })
        }, a
    }();
    a.MylistApi = g;
    var h;
    ! function (a) {
        function b(a, b) {
            return new i(a.mylistgroup_id, a.item_id, a.item_type, a.description, b)
        }
        a.create = b
    }(h || (h = {}));
    var i = function () {
            function a(a, b, c, d, e) {
                this.mylistgroup_id = a, this.item_id = b, this.item_type = c, this.description = d, this.token = e
            }
            return a
        }(),
        j = function () {
            function a(a, b) {
                this.spweb_url = a, this.csrf_token = b
            }
            return a.prototype.add = function (a, c, d) {
                jQuery.ajax({
                    cache: !1,
                    url: this.spweb_url + "api/deflist/add",
                    type: "POST",
                    data: k.create(a, this.csrf_token),
                    dataType: "json",
                    success: function () {
                        c()
                    },
                    error: function (a) {
                        var c = b.parseJSON(a.responseText);
                        d(c.error.code ? c.error.code : "")
                    }
                })
            }, a
        }();
    a.DeflistApi = j;
    var k;
    ! function (a) {
        function b(a, b) {
            return new l(a.item_id, a.item_type, a.description, b)
        }
        a.create = b
    }(k || (k = {}));
    var l = function () {
            function a(a, b, c, d) {
                this.item_id = a, this.item_type = b, this.description = c, this.token = d
            }
            return a
        }(),
        m = function () {
            function a(a, b) {
                this.spweb_url = a, this.csrf_token = b
            }
            return a.prototype.add = function (a, c, d) {
                jQuery.ajax({
                    url: this.spweb_url + "api/mylistgroup/add",
                    type: "POST",
                    data: n.create(a, this.csrf_token),
                    dataType: "json",
                    success: function (a) {
                        console.log(a), c(a.id)
                    },
                    error: function (a) {
                        var c = b.parseJSON(a.responseText);
                        d(c.error.code ? c.error.code : "")
                    }
                })
            }, a.prototype.list = function (a, b) {
                jQuery.ajax({
                    url: this.spweb_url + "api/mylistgroup/list?" + (new Date).getTime(),
                    type: "GET",
                    dataType: "json",
                    success: function (b) {
                        a(b.mylistgroup)
                    },
                    error: function () {
                        b()
                    }
                })
            }, a
        }();
    a.MylistgroupApi = m;
    var n;
    ! function (a) {
        function b(a, b) {
            return new o(a.name, a.description, a.is_public ? 1 : 0, a.default_sort, a.icon_id, b)
        }
        a.create = b
    }(n || (n = {}));
    var o = function () {
            function a(a, b, c, d, e, f) {
                this.name = a, this.description = b, this.public = c, this.default_sort = d, this.icon_id = e, this.token = f
            }
            return a
        }(),
        p = function () {
            function a(a) {
                this.spweb_url = a
            }
            return a.prototype.access = function (a, b) {
                "undefined" == typeof b && (b = function () {}), jQuery.ajax({
                    url: this.spweb_url + "api/counter/" + a,
                    type: "GET",
                    success: function () {
                        b()
                    },
                    error: function () {
                        b()
                    }
                })
            }, a
        }();
    a.CounterApi = p,
        function (a) {
            function b(a, b) {
                return c.ERROR_GETFLV + e(a, b)
            }

            function d(a, b) {
                return c.ERROR_VIDEO_ERROR + e(a, b)
            }

            function e(a, b) {
                return "?watch_id=" + a + "&quality=" + b
            }

            function f(a, b, d) {
                var e = ["size=" + (a || "default"), "pos=" + (b || "default"), "color=" + (d ? "decorate" : "default")];
                return c.CLICK_COMMENT_POST_BASE + "?" + e.join("&")
            }
            a.createGetFlvErrorPath = b, a.createVideoErrorPath = d, a.createClickCommentPostPath = f
        }(a.CounterApiRequestBuilder || (a.CounterApiRequestBuilder = {}));
    var q = (a.CounterApiRequestBuilder, function () {
        function a(a) {
            this.spweb_url = a
        }
        return a.prototype.access = function (a, b, c) {
            jQuery.ajax({
                url: this.spweb_url + "api/related_video",
                type: "GET",
                data: {
                    video_id: a
                },
                success: function (a) {
                    b(a)
                },
                error: function () {
                    c()
                }
            })
        }, a
    }());
    a.RelatedVideoApi = q;
    var r = function () {
        function a(a) {
            this.spweb_url = a
        }
        return a.prototype.access = function (a, b, c) {
            jQuery.ajax({
                url: this.spweb_url + "api/videotag",
                type: "GET",
                data: {
                    video_id: a,
                    format: "json"
                },
                success: function (a) {
                    b(a)
                },
                error: function () {
                    c()
                }
            })
        }, a
    }();
    a.VideoTagApi = r;
    var s = function () {
        function a(a) {
            this.spweb_url = a
        }
        return a.prototype.access = function (a, b, c) {
            jQuery.ajax({
                url: this.spweb_url + "api/tag/" + encodeURIComponent(a.tag),
                type: "GET",
                data: {
                    sort: a.sort || "",
                    order: a.order || "",
                    page: a.page || 1,
                    f_range: a.first_retrieve_range,
                    l_range: a.length_range,
                    opt_md: a.is_music_dl_only ? 1 : 0,
                    exclude: a.exclude,
                    count: a.request_count,
                    tpl_type: a.tpl_type
                },
                dataType: "html",
                success: function (a) {
                    b(a)
                },
                error: function () {
                    c()
                }
            })
        }, a
    }();
    a.TagApi = s;
    var t = function () {
        function a(a) {
            this.spweb_url = a
        }
        return a.prototype.getVideoBasedRecommendContents = function (a, b, c) {
            jQuery.ajax({
                url: this.spweb_url + "api/gyokuon/video_based",
                type: "GET",
                data: {
                    video_id: a.video_id,
                    tpl_type: a.tpl_type
                },
                dataType: "html",
                success: function (a) {
                    b(a)
                },
                error: function () {
                    c()
                }
            })
        }, a
    }();
    a.GyokuonApi = t
}(SpwebApiSpweb || (SpwebApiSpweb = {}));
var SpwebViewModelHtml5Layout;
! function (a) {
    "use strict";

    function b(a, b, c) {
        return c / b * a
    }

    function c(a, b, c) {
        return c / a * b
    }
    var d = SpwebUtil.DeviceJudgement,
        e = SpwebApiSpweb.CounterApi,
        f = SpwebConstants.CounterApiConstants,
        g = function () {
            function a() {}
            return a.prototype.create = function (a, b, c, d, e) {
                return a.isPortrait() ? b ? this.createLandscape(window.innerWidth, window.innerHeight, c, d, e) : this.createPortrait(window.innerWidth, c, d, e) : this.createLandscape(window.innerHeight, window.innerWidth, c, d, e)
            }, a.prototype.createPortrait = function (a, c, d, e) {
                var f = b(9, 16, a),
                    g = new o(f, a, 0);
                return new m(new n(f, a), g, h.create(f, a), i.create(c, d, g, e, f))
            }, a.prototype.createLandscape = function (a, d, e, f, g) {
                var j, k, l;
                return d / a > 16 / 9 ? (k = a, l = c(9, 16, a)) : (k = b(9, 16, d), l = d), j = new o(k, l, (a - k) / 2), new m(new n(a, d), j, h.create(a, d), i.create(e, f, j, g, a))
            }, a
        }();
    a.Html5PlayerLayoutFactory = g;
    var h;
    ! function (a) {
        function c(a, c) {
            var d, e;
            return d = b(3, 4, c), e = (a - d) / 2, new p(d, c, e)
        }
        a.create = c
    }(h || (h = {}));
    var i;
    ! function (a) {
        function d(a, d, e, f, g) {
            var h, i, j;
            return f && null !== d && null !== a ? d / a < e.width / e.height ? (h = e.height, i = c(a, d, h)) : (i = e.width, h = b(a, d, i)) : (h = e.height, i = e.width), j = (g - h) / 2, new q(h, i, j)
        }
        a.create = d
    }(i || (i = {}));
    var j = function () {
        function a(a) {
            this.parameters = a, this.timer = null, this.player_layout_factory = new g, this.valid_player_layout = new k
        }
        return a.prototype.setVideoSize = function (a) {
            this.video_size = a, this.valid_player_layout = new k
        }, a.prototype.getPlayerLayout = function (a, b, c) {
            var d, g, h = this;
            return this.timer && (clearInterval(this.timer), this.timer = null), (d = this.valid_player_layout.getByScreenLayout(a, b)) ? void c(d, !0) : (g = 0, void(this.timer = setInterval(function () {
                var d;
                if (h.timer) {
                    if (h.isValidLayout(a)) return d = h.calculatePlayerLayout(a, b), h.valid_player_layout.setByScreenLayout(a, b, d), a.isPortrait() && h.valid_player_layout.setByScreenLayout(a, !b, h.calculatePlayerLayout(a, !b)), clearInterval(h.timer), h.timer = null, void c(d, !0);
                    if (g++, g % 2 === 0 && c(h.calculatePlayerLayout(a, b), !1), g > 12 && (clearInterval(h.timer), h.timer = null, h.parameters.counter_report)) {
                        var i = new e(h.parameters.spweb_url);
                        i.access(f.ERROR_ORIENTATION_CALCOVER)
                    }
                }
            }, 250)))
        }, a.prototype.isValidLayout = function (a) {
            var b = window.innerHeight,
                c = window.innerWidth,
                d = a.height(),
                e = a.width();
            return .8 * d > b || b > d ? !1 : .8 * e > c || c > e ? !1 : !0
        }, a.prototype.calculatePlayerLayout = function (a, b) {
            return this.player_layout_factory.create(a, b, this.video_size ? this.video_size.height : null, this.video_size ? this.video_size.width : null, d.isAndroid())
        }, a
    }();
    a.LayoutManager = j;
    var k = function () {
            function a() {
                this.portrait = null, this.landscape = null, this.force_landscape = null
            }
            return a.prototype.getByScreenLayout = function (a, b) {
                return a.isPortrait() ? b ? this.force_landscape : this.portrait : this.landscape
            }, a.prototype.setByScreenLayout = function (a, b, c) {
                a.isPortrait() ? b ? this.force_landscape = c : this.portrait = c : this.landscape = c
            }, a
        }(),
        l = function () {
            function a(a, b) {
                this.height = a, this.width = b
            }
            return a
        }();
    a.SquareLayout = l;
    var m = function () {
        function a(a, b, c, d) {
            this.nico_player_layout = a, this.player_comment_layout = b, this.thumbnail_layout = c, this.video_layout = d
        }
        return a
    }();
    a.PlayerLayout = m;
    var n = function () {
        function a(a, b) {
            this.height = a, this.width = b
        }
        return a
    }();
    a.NicoPlayerLayout = n;
    var o = function () {
        function a(a, b, c) {
            this.height = a, this.width = b, this.top = c
        }
        return a
    }();
    a.PlayerCommentLayout = o;
    var p = function () {
        function a(a, b, c) {
            this.height = a, this.width = b, this.top = c
        }
        return a
    }();
    a.ThumbnailLayout = p;
    var q = function () {
        function a(a, b, c) {
            this.height = a, this.width = b, this.top = c
        }
        return a
    }();
    a.VideoLayout = q
}(SpwebViewModelHtml5Layout || (SpwebViewModelHtml5Layout = {}));
var SpwebViewModelWatchHtml5Controller;
! function (a) {
    "use strict";
    var b = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler,
        c = SpwebUtil.DeviceJudgement,
        d = SpwebApiSpweb.CounterApi,
        e = SpwebConstants.CounterApiConstants,
        f = SpwebViewModelCommonWindow.WindowEventHandler,
        g = function () {
            function a(a, b, c) {
                this.parameters = a, this.controller_view = b, this.seek_bar_view = c, this.hide_timer = null, this.DISPLAY_TIME_AFTER_STAGE_TOUCH = 5e3, this.DISPLAY_TIME_AFTER_BUTTON_CLICK = 3e3, this.is_playing = !1, this.seek_bar_view_model = new h(a, c), this.counter_api = new d(a.spweb_url), this.initialize()
            }
            return a.prototype.initialize = function () {
                var a = this;
                this.controller_view.setControllerViewModel(this), this.handleEnableForceLandscape(f.getScreenLayout()), b.event("videoPlay").listen(function () {
                    a.videoPlay()
                }), b.event("videoPause").listen(function () {
                    a.videoPause()
                }), b.event("onSwitchForceLandscape").listen(function (b) {
                    a.onSwitchForceLandscape(b)
                }), b.event("switchOption").listen(function () {
                    a.hideController(a.DISPLAY_TIME_AFTER_BUTTON_CLICK)
                }), f.listen("orientationchange", function (b) {
                    a.handleEnableForceLandscape(b)
                })
            }, a.prototype.videoPlay = function () {
                this.is_playing = !0, this.seek_bar_view_model.setPlaying(this.is_playing), this.controller_view.setPlaying(this.is_playing)
            }, a.prototype.videoPause = function () {
                this.is_playing = !1, this.seek_bar_view_model.setPlaying(this.is_playing), this.controller_view.setPlaying(this.is_playing)
            }, a.prototype.playOrPause = function () {
                this.is_playing ? b.event("pause").dispatch() : b.event("play").dispatch(), this.hideController(this.DISPLAY_TIME_AFTER_BUTTON_CLICK)
            }, a.prototype.switchForceLandscape = function () {
                b.event("switchForceLandscape").dispatch(), this.hideController(this.DISPLAY_TIME_AFTER_BUTTON_CLICK)
            }, a.prototype.onSwitchForceLandscape = function (a) {
                a && this.counter_api.access(e.CLICK_FORCE_LANDSCAPE), this.controller_view.setForceLandscape(a)
            }, a.prototype.showController = function (a) {
                this.controller_view.show(), this.hideController(a)
            }, a.prototype.hideController = function (a) {
                var b = this;
                null != this.hide_timer && clearTimeout(this.hide_timer), a > 0 ? this.hide_timer = setTimeout(function () {
                    b._hideController()
                }, a) : this._hideController()
            }, a.prototype._hideController = function () {
                this.is_playing && this.controller_view.hide(), this.hide_timer = null
            }, a.prototype.toggleController = function () {
                null != this.hide_timer ? this.hideController(0) : this.showController(this.DISPLAY_TIME_AFTER_STAGE_TOUCH)
            }, a.prototype.handleEnableForceLandscape = function (a) {
                a.isPortrait() ? this.controller_view.enableForceLandscape() : (this.controller_view.disableForceLandscape(), this.controller_view.setForceLandscape(!1))
            }, a
        }();
    a.ControllerViewModel = g;
    var h = function () {
        function a(a, b) {
            this.parameters = a, this.seek_bar_view = b, this.buffered_time = null, this.is_playing_at_seek_start = !1, this.is_playing = !1, this.seek_start_time = 0, this.seek_time_id = 0, this.seek_bar_view.setViewModel(this), this.initialize()
        }
        return a.prototype.initialize = function () {
            var a = this;
            b.event("videoDurationchange").listen(function (b) {
                a.videoDurationchange(b)
            }), b.event("videoTimeupdate").listen(function (b) {
                a.videoTimeupdate(b)
            }), b.event("videoProgress").listen(function (b) {
                a.videoProgress(b)
            })
        }, a.prototype.getSeekTime = function (a) {
            var b;
            return this.parameters.is_free_forward_seek || this.parameters.is_premium || c.is_iOS() ? a : (b = null == this.buffered_time ? this.seek_start_time : this.buffered_time, Math.min(a, b))
        }, a.prototype.setPlaying = function (a) {
            this.is_playing = a
        }, a.prototype.alertPremium = function () {
            var a = this;
            this.seek_time_id && clearTimeout(this.seek_time_id), this.seek_time_id = setTimeout(function () {
                a.alertPremiumTimeout()
            }, 1e3)
        }, a.prototype.alertPremiumTimeout = function () {
            confirm("プレミアム会員になると好きな位置から動画視聴を開始できます") && (window.location.href = this.parameters.seek_premium_url), this.seek_time_id = null
        }, a.prototype.seekStart = function () {
            this.is_playing_at_seek_start = this.is_playing, this.is_playing && b.event("pause").dispatch(), this.seek_start_time = this.seek_current_time
        }, a.prototype.updateCurrentTime = function (a) {
            a && (this.seek_current_time = a)
        }, a.prototype.seekEnd = function () {
            var a = this.getSeekTime(this.seek_current_time);
            b.event("seekEnd").dispatch(a), a === this.seek_current_time ? this.is_playing_at_seek_start && b.event("play").dispatch() : (this.seekBack(a), this.alertPremium())
        }, a.prototype.seekBack = function (a) {
            this.video_duration && (this.seek_current_time = a, this.seek_bar_view.seekBack(a))
        }, a.prototype.videoDurationchange = function (a) {
            a && (this.video_duration = a, this.seek_bar_view.setVideoDuration(a))
        }, a.prototype.videoTimeupdate = function (a) {
            this.seek_current_time = a, this.seek_bar_view.setCurrentTime(a)
        }, a.prototype.videoProgress = function (a) {
            null != a && (this.buffered_time = a, this.seek_bar_view.setProgressTime(a))
        }, a
    }();
    a.SeekBarViewModel = h
}(SpwebViewModelWatchHtml5Controller || (SpwebViewModelWatchHtml5Controller = {}));
var SpwebViewModelWatchCommentEvent;
! function (a) {
    "use strict";
    var b = SpwebEvent.EventHandlerBase;
    a.CommentEventHandler = new b
}(SpwebViewModelWatchCommentEvent || (SpwebViewModelWatchCommentEvent = {}));
var SpwebApiFlapi;
! function (a) {
    "use strict";
    var b = SpwebUtil.Util,
        c = function () {
            function a(a) {
                this.flapi_url = a
            }
            return a.prototype.getFlv = function (a, b, c) {
                jQuery.ajax({
                    url: this.flapi_url + "api/getflv",
                    type: "POST",
                    data: a,
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "text",
                    success: function (a) {
                        var e = d.create(a);
                        e ? b(e) : c()
                    },
                    error: c
                })
            }, a.prototype.getThreadkey = function (a, b, c) {
                jQuery.ajax({
                    url: this.flapi_url + "api/getthreadkey",
                    type: "GET",
                    data: a,
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "text",
                    success: function (a) {
                        var d = f.create(a);
                        null === d ? c() : b(d)
                    },
                    error: function () {
                        c()
                    }
                })
            }, a.prototype.getPostkey = function (a, c, d) {
                jQuery.ajax({
                    url: this.flapi_url + "api/getpostkey",
                    type: "GET",
                    data: a,
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "text",
                    success: function (a) {
                        c(b.queryToObject(a))
                    },
                    error: function () {
                        d()
                    }
                })
            }, a.prototype.playlen = function (a, c, d) {
                jQuery.ajax({
                    url: this.flapi_url + "api/playlen",
                    type: "GET",
                    data: a,
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "text",
                    success: function (a) {
                        c(b.queryToObject(a))
                    },
                    error: function () {
                        d()
                    }
                })
            }, a
        }();
    a.Flapi = c;
    var d;
    ! function (a) {
        function c(a) {
            var c = b.queryToObject(a);
            return c.error ? null : c.url && c.ms && c.user_id ? new e(c.url, c.ms, c.user_id, "1" === c.needs_key) : null
        }
        a.create = c
    }(d || (d = {}));
    var e = function () {
        function a(a, b, c, d) {
            this.video_url = a, this.message_server_url = b, this.user_id = c, this.needs_key = d
        }
        return a
    }();
    a.GetFlvResponse = e;
    var f;
    ! function (a) {
        function c(a) {
            var c = b.queryToObject(a);
            return c.error ? null : c.threadkey ? new g(c.threadkey, c.force_184) : null
        }
        a.create = c
    }(f || (f = {}));
    var g = function () {
        function a(a, b) {
            this.threadkey = a, this.force_184 = b
        }
        return a
    }();
    a.ThreadkeyResponse = g
}(SpwebApiFlapi || (SpwebApiFlapi = {}));
var SpwebApiNicovideo;
! function (a) {
    "use strict";
    var b = SpwebUtil.Util,
        c = function () {
            function a(a) {
                this.watch_api_url = a, this.watch_api_url_continue = a + "&continue_watching=1"
            }
            return a.prototype.access = function (a, c) {
                jQuery.ajax({
                    url: this.watch_api_url,
                    type: "GET",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    success: function (b) {
                        a(b)
                    },
                    error: function (a) {
                        try {
                            c(b.parseJSON(a.responseText))
                        } catch (d) {
                            c()
                        }
                    }
                })
            }, a.prototype.accessContinue = function (a) {
                jQuery.ajax({
                    url: this.watch_api_url_continue,
                    type: "GET",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    success: function (b) {
                        a(b)
                    },
                    error: function () {}
                })
            }, a
        }();
    a.WatchApi = c
}(SpwebApiNicovideo || (SpwebApiNicovideo = {}));
var SpwebModelWatchEvent;
! function (a) {
    "use strict";
    var b = SpwebEvent.EventHandlerBase;
    a.WatchEventHandler = new b;
    var c = function () {
        function a(a) {
            this.watch_auth_key = a
        }
        return a
    }();
    a.WatchAuthKeyContainer = c
}(SpwebModelWatchEvent || (SpwebModelWatchEvent = {}));
var SpwebModelWatch;
! function (a) {
    "use strict";
    var b = SpwebApiNicovideo.WatchApi,
        c = SpwebModelWatchEvent.WatchEventHandler,
        d = SpwebModelWatchEvent.WatchAuthKeyContainer,
        e = SpwebConstants.StatusCodeConstants,
        f = function () {
            function a(a) {
                this.context = a, this.watch_api = new b(this.context.watch_api_url)
            }
            return a.prototype.access = function () {
                var a = this;
                c.event("onAccessWatchApiStart").dispatch(), g.invoke(this.watch_api, new h(this.context), function (b, d) {
                    var e = new i(a.watch_api, d);
                    e.startPolling(), c.event("onAccessWatchApiSuccess").dispatch({
                        watch_api_response: b,
                        watch_auth_key_container: d
                    })
                }, function (a) {
                    c.event("onAccessWatchApiError").dispatch(a)
                })
            }, a
        }();
    a.WatchApiService = f,
        function (a) {
            function b(a, b, c, e) {
                a.access(function (a) {
                    200 == a.status_code && "ok" == a.status ? c(a, new d(a.watchAuthKey)) : (b.execute(a), e(a))
                }, function (a) {
                    b.execute(a), e(a)
                })
            }
            a.invoke = b
        }(a.WatchApiTask || (a.WatchApiTask = {}));
    var g = a.WatchApiTask,
        h = function () {
            function a(a) {
                this.context = a
            }
            return a.prototype.execute = function (a) {
                var b = SpwebConstants.makeMessage(e.WATCH_API_ERROR_DEFAULT);
                if (a) switch (a.status_code) {
                case 403:
                    switch (a.status_message) {
                    case "need_login":
                        if (this.context.login_url) return void(window.location.href = this.context.login_url);
                        break;
                    case "video_error":
                        switch (a.video_error) {
                        case "ppv video":
                            if (this.context.ppv_video_payment_url) return void(window.location.href = this.context.ppv_video_payment_url);
                            break;
                        case "smartphone_forbidden":
                            b = "この動画はスマートフォン版ニコニコ動画では視聴できません。";
                            break;
                        case "domestic_video":
                            b = "お探しの動画は再生できません、この動画は投稿（アップロード）された地域と同じ地域からのみ視聴できます。";
                            break;
                        case "videolock":
                            b = "この動画は、PCなどその他のデバイスと同時に再生することは出来ません。しばらく時間をあけてから再度アクセスして下さい。";
                            break;
                        case "community_member_video":
                            b = "コミュニティ会員のみ視聴できます";
                            break;
                        case "channel_member_video":
                            if (this.context.channel_entry_url) return void(confirm("この動画を視聴するには以下のチャンネルへの入会が必要です。\n入会ページに進みますか？\n「" + this.context.channel_title + "」") && (window.location.href = this.context.channel_entry_url))
                        }
                    }
                    break;
                case 404:
                    b = SpwebConstants.makeMessage(e.WATCH_API_ERROR_404);
                    break;
                case 500:
                case 503:
                    b = SpwebConstants.makeMessage(e.WATCH_API_ERROR_500)
                }
                alert(b)
            }, a
        }();
    a.WatchApiErrorHandler = h;
    var i = function () {
        function a(a, b) {
            this.watch_api = a, this.watch_auth_key_container = b, this.interval_msec = 6e5
        }
        return a.prototype.startPolling = function () {
            var a = this;
            this.timer = setInterval(function () {
                a.polling()
            }, this.interval_msec)
        }, a.prototype.polling = function () {
            var a = this;
            this.watch_api.accessContinue(function (b) {
                a.onWatchApiResponse(b)
            })
        }, a.prototype.stopPolling = function () {
            this.timer && (clearInterval(this.timer), this.timer = null)
        }, a.prototype.onWatchApiResponse = function (a) {
            200 == a.status_code && "ok" == a.status ? a.watchAuthKey && (this.watch_auth_key_container.watch_auth_key = a.watchAuthKey) : (this.stopPolling(), alert(SpwebConstants.makeMessage(e.WATCH_API_ERROR_CONTINUE)))
        }, a
    }()
}(SpwebModelWatch || (SpwebModelWatch = {}));
var SpwebModelVideoEvent;
! function (a) {
    "use strict";
    var b = SpwebEvent.EventHandlerBase;
    a.VideoEventHandler = new b
}(SpwebModelVideoEvent || (SpwebModelVideoEvent = {}));
var SpwebModelVideo;
! function (a) {
    "use strict";
    var b = (SpwebModelVideoQuality.VideoQualityType, SpwebApiFlapi.Flapi),
        c = SpwebModelVideoEvent.VideoEventHandler,
        d = SpwebConstants.StatusCodeConstants,
        e = SpwebApiSpweb.CounterApi,
        f = SpwebApiSpweb.CounterApiRequestBuilder,
        g = SpwebModelWatchEvent.WatchEventHandler,
        h = function () {
            function a(a) {
                this.context = a, this.flapi = new b(a.flapi_url), this.counter_api = new e(a.spweb_url)
            }
            return a.prototype.invoke = function (a, b, d, e) {
                var g = this;
                c.event("onGetFlvStart").dispatch(), this.flapi.getFlv({
                    device: "iphone3",
                    watch_auth_key: a,
                    v: this.context.watch_id,
                    eco: b
                }, function (a) {
                    d({
                        watch_id: g.context.watch_id,
                        video_quality_type: b,
                        getflv_response: a
                    })
                }, function () {
                    g.counter_api.access(f.createGetFlvErrorPath(g.context.watch_id, b)), e()
                })
            }, a
        }();
    a.GetFlvTask = h,
        function (a) {
            function b(a, b) {
                return new e(i.create(a), b)
            }
            a.create = b;
            var e = function () {
                function a(a, b) {
                    var c = this;
                    this.video_quality_manager = a, this.getflv_task = b, g.event("onAccessWatchApiSuccess").listen(function (a) {
                        c.onAccessWatchApiSuccess(a)
                    })
                }
                return a.prototype.play = function () {
                    var a = this,
                        b = this.video_quality_manager.getNext();
                    return b ? (this.getflv_task.invoke(this.watch_auth_key_container.watch_auth_key, b, function (a) {
                        c.event("onGetFlvSuccess").dispatch(a)
                    }, function () {
                        a.setUnplayable(b), a.play() || (alert(SpwebConstants.makeMessage(d.GETFLV_ERROR)), c.event("onGetFlvError").dispatch())
                    }), b) : null
                }, a.prototype.playByQuality = function (a) {
                    return this.video_quality_manager.isPlayable(a) ? (this.getflv_task.invoke(this.watch_auth_key_container.watch_auth_key, a, function (a) {
                        c.event("onGetFlvSuccess").dispatch(a)
                    }, function () {
                        confirm(SpwebConstants.makeMessage(d.PLAY_BY_QUALITY_ERROR)) ? location.reload() : c.event("onGetFlvError").dispatch()
                    }), !0) : !1
                }, a.prototype.isExist = function (a) {
                    return this.video_quality_manager.isExist(a)
                }, a.prototype.isPlayable = function (a) {
                    return this.video_quality_manager.isPlayable(a)
                }, a.prototype.setUnplayable = function (a) {
                    this.video_quality_manager.setUnplayable(a)
                }, a.prototype.onAccessWatchApiSuccess = function (a) {
                    this.watch_auth_key_container = a.watch_auth_key_container, this.play() || alert(SpwebConstants.makeMessage(d.NO_VIDEO_QUALITY_AVAILABLE))
                }, a
            }()
        }(a.VideoQualityModelFactory || (a.VideoQualityModelFactory = {})); {
        var i;
        a.VideoQualityModelFactory
    }! function (a) {
        function b(a) {
            var b = new c(a.video_quality);
            return a.force_low ? a.video_quality.low ? b.push(1) : a.video_quality.middle ? b.push(2) : a.video_quality.high && b.push(4) : a.is_premium ? (a.video_quality.low && b.push(1), a.video_quality.middle && b.push(2), a.video_quality.high && b.push(4)) : a.video_quality.low ? b.push(1) : a.video_quality.high && b.push(4), b
        }
        a.create = b;
        var c = function () {
            function a(a) {
                this.playable_map = {}, this.existence_map = {}, this.queue = [], this.playable_map[4] = !1, this.playable_map[2] = !1, this.playable_map[1] = !1, this.existence_map[4] = a.high, this.existence_map[2] = a.middle, this.existence_map[1] = a.low
            }
            return a.prototype.push = function (a) {
                this.playable_map[a] = !0, this.queue.push(a)
            }, a.prototype.getNext = function () {
                return 0 === this.queue.length ? null : this.queue.pop()
            }, a.prototype.setUnplayable = function (a) {
                this.playable_map[a] = !1
            }, a.prototype.isPlayable = function (a) {
                return this.playable_map[a]
            }, a.prototype.isExist = function (a) {
                return this.existence_map[a]
            }, a
        }()
    }(i || (i = {}))
}(SpwebModelVideo || (SpwebModelVideo = {}));
var SpwebViewModelWatchHtml5Video;
! function (a) {
    "use strict";
    var b = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler,
        c = SpwebModelVideoEvent.VideoEventHandler,
        d = SpwebApiSpweb.CounterApi,
        e = SpwebApiSpweb.CounterApiRequestBuilder,
        f = function () {
            function a(a, b) {
                this.context = a, this.video_view = b, this.SET_CURRENT_TIME_INTERVAL_MSEC = 2e3, this.play_time_on_load = 0, this.is_launched = !1, this.initialize(), this.counter_api = new d(this.context.spweb_url), this.video_view.setViewModel(this)
            }
            return a.prototype.initialize = function () {
                var a = this;
                b.event("launchPlayer").listen(function () {
                    a.is_launched = !0, a.video_view.loadVideo()
                }), b.event("play").listen(function (b) {
                    a.play(b)
                }), b.event("seekEnd").listen(function (b) {
                    a.currentTime(b)
                }), b.event("pause").listen(function (b) {
                    a.pause(b)
                }), c.event("onGetFlvStart").listen(function () {
                    a.is_launched ? (a.play_time_on_load = a.currentTime(), a.pause()) : a.play_time_on_load = 0
                }), c.event("onGetFlvSuccess").listen(function (b) {
                    a.video_view.setVideoInfo(b.getflv_response.video_url, b.video_quality_type), a.is_launched && a.video_view.loadVideo()
                })
            }, a.prototype.currentTime = function (a) {
                return this.video_view.currentTime(a)
            }, a.prototype.bufferedTime = function () {
                return this.video_view.bufferedTime()
            }, a.prototype.isPlaying = function () {
                return this.video_view.isPlaying()
            }, a.prototype.setLayout = function (a) {
                var b = a.video_layout;
                this.context.inline_playable || (b.height = 1, b.width = 1), this.video_view.setLayout(b)
            }, a.prototype.getVideoSize = function () {
                return this.video_view.getVideoSize()
            }, a.prototype.finishLoaded = function () {
                var a = this;
                this.video_view.play(), this.play_time_on_load > 0 && setTimeout(function () {
                    a.currentTime(a.play_time_on_load), a.play_time_on_load = 0
                }, this.SET_CURRENT_TIME_INTERVAL_MSEC)
            }, a.prototype.dispatchVideoError = function (a) {
                this.counter_api.access(e.createVideoErrorPath(this.context.watch_id, a)), b.event("videoError").dispatch({
                    video_quality_type: a
                })
            }, a.prototype.play = function (a) {
                this.video_view.play(a)
            }, a.prototype.pause = function (a) {
                this.video_view.pause(a)
            }, a
        }();
    a.VideoViewModel = f
}(SpwebViewModelWatchHtml5Video || (SpwebViewModelWatchHtml5Video = {}));
var SpwebViewModelWatchHtml5Player;
! function (a) {
    "use strict";
    var b = SpwebModelVideoEvent.VideoEventHandler,
        c = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler,
        d = SpwebApiSpweb.GyokuonApi,
        e = SpwebConstants.GyokuonApiTplTypeConstants,
        f = SpwebModelWatchEvent.WatchEventHandler,
        g = function () {
            function a(a, b) {
                this.context = a, this.player_view = b, this.gyokuon_api = new d(this.context.spweb_url), b.setViewModel(this), this.initialize()
            }
            return a.prototype.initialize = function () {
                var a = this;
                f.event("onAccessWatchApiError").listen(function () {
                    a.disableLoadingImage()
                }), b.event("onGetFlvSuccess").listen(function (b) {
                    a.watch_id !== b.watch_id && (a.watch_id = b.watch_id, a.enablePlay())
                }), c.event("finishPlay").listen(function () {
                    a.finishPlay()
                })
            }, a.prototype.setLayout = function (a) {
                this.player_view.setLayout(a)
            }, a.prototype.enablePlay = function () {
                this.player_view.enableWatchThisPageButton(), this.disableLoadingImage()
            }, a.prototype.disableLoadingImage = function () {
                this.player_view.disableLoadingImage()
            }, a.prototype.finishLoaded = function () {
                this.disableLoadingImage()
            }, a.prototype.replay = function () {
                c.event("play").dispatch(0)
            }, a.prototype.finishPlay = function () {
                var a = this;
                this.gyokuon_api.getVideoBasedRecommendContents({
                    video_id: this.context.video_id,
                    tpl_type: e.PLAYER
                }, function (b) {
                    a.player_view.setRelatedItems(b), a.player_view.finishPlay()
                }, function () {
                    a.player_view.finishPlay()
                })
            }, a
        }();
    a.PlayerViewModel = g
}(SpwebViewModelWatchHtml5Player || (SpwebViewModelWatchHtml5Player = {}));
var SpwebModelComment;
! function (a) {
    "use strict";
    var b = function () {
        function a(a, b, c, d, e, f, g) {
            this.id = a, this.result_code = b, this.last_res = c, this.ticket = d, this.comments = e, this.count = f, this.is_owner_thread = g
        }
        return a
    }();
    a.Thread = b;
    var c = function () {
        function a(a, b) {
            this.view = a, this.mylist = b
        }
        return a
    }();
    a.Count = c;
    var d = function () {
        function a(a, b, c, d, e, f, g, h, i) {
            this.no = a, this.vpos = b, this.body = c, this.color = d, this.font = e, this.position = f, this.is_184 = g, this.mine = h, this.deleted = i, this.COMMAND_184 = "184", this.body_prefix = c.charAt(0)
        }
        return a.prototype.isNiwango = function () {
            return "/" === this.body_prefix
        }, a.prototype.isNicoScript = function () {
            return "@" === this.body_prefix || "＠" === this.body_prefix
        }, a.prototype.asMailString = function () {
            return [this.is_184 ? this.COMMAND_184 : "", this.position, this.color, this.font].join(" ").trim()
        }, a
    }();
    a.Comment = d
}(SpwebModelComment || (SpwebModelComment = {}));
var SpwebModelCommentEvent;
! function (a) {
    "use strict";
    var b = SpwebEvent.EventHandlerBase;
    a.CommentEventHandler = new b
}(SpwebModelCommentEvent || (SpwebModelCommentEvent = {}));
var SpwebViewModelWatchHtml5Comment;
! function (a) {
    "use strict";

    function b(a, b, c) {
        var e, f, g, h;
        null != a && null != b && null != c && (e = a.offsetWidth, f = a.offsetHeight, 0 !== e && 0 !== f && (g = b.font_size, e > c.width && b.position !== d.position.center && (g *= c.width / e, e = c.width, a.style.fontSize = g + "px"), f > c.height && (h = b.font_size * (c.height / f), g > h && (a.style.fontSize = h + "px", f = c.height, e = a.offsetWidth)), b.width = e, b.height = f))
    }
    var c = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler,
        d = SpwebConstants.CommentConstants,
        e = SpwebUtil.CommentUtil,
        f = SpwebModelCommentEvent.CommentEventHandler,
        g = function () {
            function a(a, b) {
                this.context = a, this.player_comment_view = b, this.current_playback_time = 0, this.next_index = 0, this.slot = [], this.comments = [], this.is_playing = !1, this.comments_length = 0, this.initialize()
            }
            return a.prototype.initialize = function () {
                var a = this;
                c.event("launchPlayer").listen(function () {
                    a.launchPlayer()
                }), c.event("videoTimeupdate").listen(function (b) {
                    a.videoTimeupdate(b)
                }), c.event("videoPlay").listen(function (b) {
                    a.videoPlay(b)
                }), c.event("videoPause").listen(function (b) {
                    a.videoPause(b)
                }), f.event("onGetThreadSuccess").listen(function (b) {
                    a.getThreadCallback(b)
                }), f.event("onPostCommentSuccess").listen(function (b) {
                    a.postCommentCallback(b)
                }), f.event("onGetThreadError").listen(function () {
                    c.event("commentLoaded").dispatch()
                })
            }, a.prototype.setLayout = function (a) {
                var b, c = 0,
                    d = this.slot.length,
                    e = 100 * this.current_playback_time;
                if (this.player_comment_view.setLayout(a.player_comment_layout), this.player_comment_layout = a.player_comment_layout, this.clear(), this.is_playing)
                    for (; d > c; c++) b = this.slot[c], this.displayCommentWithAnimation(b, e, !0);
                else this.displayCommentWithoutAnimation(this.current_playback_time)
            }, a.prototype.getThread = function () {
                f.event("getThread").dispatch({
                    thread_id: this.context.thread_id,
                    has_owner_thread: this.context.has_owner_thread,
                    default_thread_id: this.context.default_thread_id
                })
            }, a.prototype.getThreadCallback = function (a) {
                this.thread = a.filter(function (a) {
                    return !a.is_owner_thread
                })[0], this.setThread(a), c.event("commentLoaded").dispatch()
            }, a.prototype.postCommentCallback = function (a) {
                var b = new i(a, !1);
                this.addComment(b, this.current_playback_time)
            }, a.prototype.launchPlayer = function () {
                this.getThread()
            }, a.prototype.convertToCommentViewModel = function (a) {
                for (var b = [], c = 0, d = a.comments.length; d > c; c += 1) b.push(new i(a.comments[c], a.is_owner_thread));
                return b
            }, a.prototype.setThread = function (a) {
                var b = this;
                a.forEach(function (a) {
                    b.comments = b.comments.concat(b.convertToCommentViewModel(a))
                }), this.sortByVstart(this.comments), this.comments_length = this.comments.length, this.videoPause(0)
            }, a.prototype.sortByVstart = function (a) {
                a.sort(function (a, b) {
                    return a.vstart > b.vstart ? 1 : -1
                })
            }, a.prototype.clear = function () {
                this.player_comment_view.setInnerHtml("")
            }, a.prototype.videoTimeupdate = function (a) {
                this.updateDisplayedComments(a)
            }, a.prototype.updateDisplayedComments = function (a) {
                var b;
                a <= this.current_playback_time && (this.next_index = 0, this.clear(), this.slot.length = 0), b = 100 * a, this.current_playback_time = a, this.addNewComment(b), this.removePastComment(b), this.is_playing || this.displayCommentWithoutAnimation(b)
            }, a.prototype.videoPlay = function (a) {
                var b, c = 0,
                    d = 0,
                    e = 100 * a;
                for (a < this.current_playback_time && (this.next_index = 0, this.slot.length = 0), d = this.slot.length, this.clear(), this.current_playback_time = a; d > c; c++) b = this.slot[c], this.displayCommentWithAnimation(b, e, !0);
                this.is_playing = !0
            }, a.prototype.videoPause = function (a) {
                this.is_playing = !1, this.updateDisplayedComments(a)
            }, a.prototype.addComment = function (a, b) {
                for (var c, d, e = 0, f = 0, g = this.slot.length, i = 100 * b; e < this.comments_length; e++) {
                    if (c = this.comments[e], a.vpos < c.vpos) {
                        this.comments.splice(e, 0, a);
                        break
                    }
                    e === this.comments_length - 1 && (this.comments.push(a), e = this.comments_length)
                }
                if (e < this.next_index && a.isVisible(i)) {
                    for (a.updateSize(this.player_comment_layout), a.calcVerPos(this.slot, this.player_comment_layout); g > f; f++) {
                        if (d = this.slot[f], a.vpos < d.vpos) {
                            this.slot.splice(f, 0, a);
                            break
                        }
                        f === g - 1 && this.slot.push(a)
                    }
                    this.is_playing ? this.displayCommentWithAnimation(a, i, !1) : this.player_comment_view.setInnerHtml(this.player_comment_view.getInnerHtml() + h.buildHtml(a, i, this.player_comment_layout)), this.removePastComment(i)
                }
            }, a.prototype.addNewComment = function (a) {
                for (var b; this.next_index < this.comments_length;) {
                    if (b = this.comments[this.next_index], b.isVisible(a)) b.updateSize(this.player_comment_layout), b.calcVerPos(this.slot, this.player_comment_layout), this.is_playing && this.displayCommentWithAnimation(b, a, !1), this.slot.push(b);
                    else if (!b.isEnd(a)) break;
                    this.next_index++
                }
            }, a.prototype.removePastComment = function (a) {
                for (var b, c, e = 30, f = 0; this.slot[0] && !this.slot[0].isVisible(a);) b = this.slot.shift(), this.is_playing && (c = document.getElementById(b.id), c && this.player_comment_view.removeComment(c));
                for (; f < this.slot.length && this.slot.length > e; f++) b = this.slot[f], b.position === d.position.center && (this.is_playing && (c = document.getElementById(b.id), c && this.player_comment_view.removeComment(c)), this.slot.splice(f--, 1))
            }, a.prototype.displayCommentWithoutAnimation = function (a) {
                for (var c, d, e = "", f = 0, g = 0, i = this.slot.length; i > f; f += 1) e += h.buildHtml(this.slot[f], a, this.player_comment_layout);
                for (this.player_comment_view.setInnerHtml(e); i > g; g += 1) c = this.slot[g], d = document.getElementById(c.id), null != d && (b(d, c, this.player_comment_layout), d.style.left = c.calcHolPos(a, this.player_comment_layout) + "px")
            }, a.prototype.displayCommentWithAnimation = function (a, c, e) {
                var f;
                e && a.updateSize(this.player_comment_layout), f = h.buildElement(a, c, this.player_comment_layout), this.player_comment_view.appendComment(f), b(f, a, this.player_comment_layout), f.style.left = a.calcHolPos(c, this.player_comment_layout) + "px", a.position === d.position.center && setTimeout(function (a) {
                    return function () {
                        var b = document.getElementById(a.id);
                        b && (b.style.left = -1 * a.width - 10 + "px")
                    }
                }(a), 10)
            }, a
        }();
    a.PlayerCommentViewModel = g;
    var h;
    ! function (a) {
        function b(a, b, c) {
            var e, f = document.createElement("span"),
                g = f.style;
            return f.id = a.id, g.position = "absolute", g.top = a.position !== d.position.bottom ? a.y + "px" : c.height - a.y - a.height - 10 + "px", g.left = a.calcHolPos(b, c) + "px", g.color = "rgb(" + a.color[0] + "," + a.color[1] + "," + a.color[2] + ")", a.position === d.position.center ? (e = (a.vend - b) / 100, g.webkitTransition = e + "s linear") : g.textAlign = "left", g.fontSize = a.font_size + "px", a.mine && (f.className = "mine"), f.innerHTML = a.body, f
        }

        function c(a, b, c) {
            var e = "<span ";
            return a.mine && (e += 'class="mine"'), e += ' id="' + a.id + '"style="position:absolute;', e += a.position !== d.position.bottom ? "top:" + a.y + "px;" : "top:" + (c.height - a.y - a.height - 10) + "px;", e += "left:" + a.calcHolPos(b, c) + "px;color: rgb(" + a.color[0] + "," + a.color[1] + "," + a.color[2] + ");font-size: " + a.font_size + "px;", a.position !== d.position.center && (e += "text-align:left;"), e += '">' + a.body + "</span>"
        }
        a.buildElement = b, a.buildHtml = c
    }(h || (h = {}));
    var i = function () {
        function a(a, b) {
            this.font_size = 0, this.y = 0, this.width = 0, this.height = 0, this.initialized = !1, this.y_is_set = !1, this.id = (b ? "oc" : "c") + a.no, this.vpos = a.vpos, this.color = this.getColor(a.color), this.font = a.font ? a.font : "medium", this.position = a.position ? a.position : d.position.center, this.mine = a.mine, this.body = this.nl2br(a.body), this.font_size = 0, a.position === d.position.center ? (this.vstart = a.vpos, this.vend = this.vstart + d.visibleSpan - d.aheadSpan) : (this.vstart = a.vpos - d.aheadSpan, this.vend = this.vstart + d.visibleSpan)
        }
        return a.prototype.isVisible = function (a) {
            return this.vstart <= a && this.vend >= a
        }, a.prototype.isEnd = function (a) {
            return this.vend < a
        }, a.prototype.updateSize = function (a) {
            this.font_size = e.calculateFontSize(this.font, a.height), this.initialized ? this.checkCommentSize(a) : (this.calcWidth(), this.checkCommentSize(a), this.calcWidth(), this.initialized = !0), this.height = this.body.split(/\n|<br>/).length * Math.round(this.font_size)
        }, a.prototype.calcVerPos = function (a, b) {
            if (this.initialized || this.updateSize(b), !this.y_is_set) {
                var c, e = !1,
                    f = this.y,
                    g = this.height,
                    h = b.height - g,
                    i = 0,
                    j = a.length;
                do
                    for (e = !1; j > i; i++)
                        if (c = a[i], c.id !== this.id && c.position === this.position && !(c.y + c.height < f || f + g < c.y))
                            if (this.position == d.position.center) {
                                var k = Math.max(this.vstart, c.vstart),
                                    l = Math.min(this.vend, c.vend),
                                    m = [this.calcHolPos(k, b), this.calcHolPos(l, b)],
                                    n = [c.calcHolPos(k, b), c.calcHolPos(l, b)];
                                if ((m[0] <= n[0] + c.width && n[0] <= m[0] + this.width || m[1] <= n[1] + c.width && n[1] <= m[1] + this.width) && this.vstart >= c.vstart) {
                                    if (f += c.height + 1, f > h) {
                                        f = Math.ceil(Math.random() * h);
                                        break
                                    }
                                    e = !0;
                                    break
                                }
                            } else if (this.vstart - c.vstart <= d.duration) {
                    if (f += c.height + 1, f > h) {
                        f = Math.ceil(Math.random() * h);
                        break
                    }
                    e = !0;
                    break
                } while (e);
                this.y = Math.floor(f), this.y_is_set = !0
            }
        }, a.prototype.calcHolPos = function (a, b) {
            var c = b.width,
                e = 0;
            if (this.position === d.position.center) {
                var f = a - this.vpos + 100;
                e = c - f * (this.width + c) / 400
            } else e = (c - this.width) / 2;
            return Math.floor(e)
        }, a.prototype.nl2br = function (a) {
            return a.replace(/\n/g, "<br>").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
        }, a.prototype.getColor = function (a) {
            if (a) {
                if ("#" === a.charAt(0)) return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)];
                if (d.color.hasOwnProperty(a)) return d.color[a];
                if (d.premiumColor.hasOwnProperty(a)) return d.premiumColor[a]
            }
            return d.color.white
        }, a.prototype.checkCommentSize = function (a) {
            if (this.width > a.width && this.position != d.position.center && (this.font_size = this.font_size * (a.width / this.width)), this.height = this.body.split(/\n|<br>/).length * Math.round(this.font_size), this.height > a.height) {
                var b = this.font_size * (a.height / this.height);
                b < this.font_size && (this.font_size = b)
            }
        }, a.prototype.calcWidth = function () {
            var a, b, c, d, e, f = this.body.split(/\n|<br>/),
                g = 0,
                h = f.length;
            for (this.width = 0; h > g; g++) {
                for (a = f[g], d = 0, b = 0, c = a.length; c > b; b++) e = escape(a.charAt(b)), d += e.length < 4 ? 1.1 * this.font_size / 2 : 1.1 * this.font_size;
                this.width = Math.max(this.width, d)
            }
        }, a
    }();
    a.CommentViewModel = i
}(SpwebViewModelWatchHtml5Comment || (SpwebViewModelWatchHtml5Comment = {}));
var SpwebViewModelWatchHtml5Option;
! function (a) {
    "use strict";
    var b = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler,
        c = (SpwebModelVideoQuality.VideoQualityType, SpwebConstants.StatusCodeConstants),
        d = SpwebApiSpweb.CounterApi,
        e = SpwebConstants.CounterApiConstants,
        f = function () {
            function a(a, b) {
                this.context = a, this.comment_display_view = b, this.display = !0, this.comment_display_view.setViewModel(this)
            }
            return a.prototype.switchDisplay = function () {
                return b.event("switchOption").dispatch(), this.context.is_back_comment ? void b.event("showMessage").dispatch({
                    message: "アップロード者の設定により、コメントの表示は制限されています。",
                    hide_automatically: !0
                }) : (this.display = !this.display, void(this.display ? this.comment_display_view.displayComment() : this.comment_display_view.hideComment()))
            }, a
        }();
    a.CommentDisplayViewModel = f;
    var g = function () {
        function a(a, b) {
            this.repeat_view = b, this.lsKey = "marku_repeat", this.repeat = this.getRepeat(), this.repeat_view.setViewModel(this), this.counter_api = new d(a.spweb_url), this.initialize()
        }
        return a.prototype.initialize = function () {
            var a = this;
            this.repeat_view.setRepeat(this.repeat), b.event("videoEnded").listen(function () {
                a.videoEnded()
            })
        }, a.prototype.videoEnded = function () {
            this.repeat ? (b.event("play").dispatch(0), this.counter_api.access(e.EVENT_WATCH_HTML5_VIDEOEND_REPEAT)) : (b.event("finishPlay").dispatch(), this.counter_api.access(e.EVENT_WATCH_HTML5_VIDEOEND_NOREPEAT))
        }, a.prototype.switchRepeat = function () {
            b.event("switchOption").dispatch(), this.repeat = !this.repeat, this.repeat_view.setRepeat(this.repeat), this.setRepeat(this.repeat)
        }, a.prototype.getRepeat = function () {
            var a = localStorage.getItem(this.lsKey);
            return null !== a ? !0 : !1
        }, a.prototype.setRepeat = function (a) {
            a ? localStorage.setItem(this.lsKey, "1") : localStorage.removeItem(this.lsKey)
        }, a
    }();
    a.RepeatViewModel = g,
        function (a) {
            function f(a, b) {
                return a.force_low ? new i(b) : a.is_premium ? new g(b) : new h(a.spweb_url, b)
            }
            a.create = f;
            var g = function () {
                    function a(a) {
                        var c = this;
                        this.video_quality_view = a, this.quality_change_flag = !1, this.is_processing = !1, this.video_quality_view.setViewModel(this), b.event("videoError").listen(function (a) {
                            c.onVideoError(a)
                        }), b.event("videoLoadeddata").listen(function (a) {
                            b.event("hideMessage").dispatch(), c.setSelectedVideoQuality(a)
                        })
                    }
                    return a.prototype.setVideoQualityModel = function (a) {
                        this.video_quality_model = a
                    }, a.prototype.setSelectedVideoQuality = function (a) {
                        this.is_high_quality = 1 !== a.video_quality_type, this.video_quality_view.setHighQuality(this.is_high_quality), this.is_processing = !1
                    }, a.prototype.switchVideoQuality = function () {
                        var a = this.getVideoQualityAfterSwitch();
                        return b.event("switchOption").dispatch(), this.quality_change_flag = !0, a ? void(this.is_processing || (this.is_processing = !0, b.event("showMessage").dispatch({
                            message: (1 === a ? "低" : "高") + "画質に切り替えています…",
                            hide_automatically: !1
                        }), this.video_quality_model.playByQuality(a))) : void b.event("showMessage").dispatch(this.is_high_quality ? {
                            message: "この動画は、低画質に切り替えることができません。",
                            sub_message: "※ただいま高画質再生中です。",
                            hide_automatically: !0
                        } : {
                            message: "この動画は、低画質のみご視聴いただけます。",
                            sub_message: "※アップロード時の設定等により、高画質がご覧いただけない場合があります。",
                            hide_automatically: !0
                        })
                    }, a.prototype.getVideoQualityAfterSwitch = function () {
                        return this.is_high_quality ? this.video_quality_model.isPlayable(1) ? 1 : null : this.video_quality_model.isPlayable(4) ? 4 : this.video_quality_model.isPlayable(2) ? 2 : null
                    }, a.prototype.onVideoError = function (a) {
                        if (this.video_quality_model.setUnplayable(a.video_quality_type), this.quality_change_flag) b.event("showMessage").dispatch({
                            message: (1 === a.video_quality_type ? "低" : "高") + "画質での再生に失敗しました。",
                            hide_automatically: !0
                        });
                        else {
                            var d = this.video_quality_model.play();
                            d || alert(SpwebConstants.makeMessage(c.VIDEO_QUALITY_EXHAUSTED_BY_VIDEO_ERROR))
                        }
                    }, a
                }(),
                h = function () {
                    function a(a, c) {
                        var e = this;
                        this.sp_web_url = a, this.video_quality_view = c, this.counter_api = new d(a), this.video_quality_view.setViewModel(this), b.event("videoError").listen(function (a) {
                            e.onVideoError(a)
                        }), b.event("videoLoadeddata").listen(function (a) {
                            e.setSelectedVideoQuality(a)
                        })
                    }
                    return a.prototype.setVideoQualityModel = function (a) {
                        this.video_quality_model = a
                    }, a.prototype.switchVideoQuality = function () {
                        this.is_high_quality ? b.event("showMessage").dispatch({
                            message: "この動画は、低画質に切り替えることができません。",
                            sub_message: "※ただいま高画質再生中です。",
                            hide_automatically: !0
                        }) : this.video_quality_model.isExist(4) ? (b.event("showMessage").dispatch({
                            message: "プレミアム会員登録すると、高画質で視聴できる!!",
                            sub_message: "※一部の動画は通常画質のみの視聴となります。",
                            hide_automatically: !0,
                            show_premium_link: !0
                        }), this.counter_api.access(e.SHOW_HQ_OPTION_PREMIUM)) : b.event("showMessage").dispatch({
                            message: "この動画は、低画質のみご視聴いただけます。",
                            sub_message: "※アップロード時の設定等により、高画質がご覧いただけない場合があります。",
                            hide_automatically: !0
                        })
                    }, a.prototype.setSelectedVideoQuality = function (a) {
                        this.is_high_quality = 1 !== a.video_quality_type, this.video_quality_view.setHighQuality(this.is_high_quality)
                    }, a.prototype.onVideoError = function (a) {
                        this.video_quality_model.setUnplayable(a.video_quality_type);
                        var b = this.video_quality_model.play();
                        b || alert(SpwebConstants.makeMessage(c.VIDEO_QUALITY_EXHAUSTED_BY_VIDEO_ERROR))
                    }, a
                }(),
                i = function () {
                    function a(a) {
                        var c = this;
                        this.video_quality_view = a, this.video_quality_view.setViewModel(this), b.event("videoError").listen(function (a) {
                            c.onVideoError(a)
                        }), b.event("videoLoadeddata").listen(function (a) {
                            c.setSelectedVideoQuality(a)
                        })
                    }
                    return a.prototype.setVideoQualityModel = function (a) {
                        this.video_quality_model = a
                    }, a.prototype.switchVideoQuality = function () {
                        b.event("showMessage").dispatch(this.is_high_quality ? {
                            message: "この動画は、低画質に切り替えることができません。",
                            sub_message: "※ただいま高画質再生中です。",
                            hide_automatically: !0
                        } : this.video_quality_model.isExist(4) ? {
                            message: "高画質の視聴には、Wi-Fi接続が必要です。",
                            hide_automatically: !0
                        } : {
                            message: "この動画は、低画質のみご視聴いただけます。",
                            sub_message: "※アップロード時の設定等により、高画質がご覧いただけない場合があります。",
                            hide_automatically: !0
                        })
                    }, a.prototype.setSelectedVideoQuality = function (a) {
                        this.is_high_quality = 1 !== a.video_quality_type, this.video_quality_view.setHighQuality(this.is_high_quality)
                    }, a.prototype.onVideoError = function (a) {
                        this.video_quality_model.setUnplayable(a.video_quality_type);
                        var b = this.video_quality_model.play();
                        b || alert(SpwebConstants.makeMessage(c.VIDEO_QUALITY_EXHAUSTED_BY_VIDEO_ERROR))
                    }, a
                }()
        }(a.VideoQualityViewModelFactory || (a.VideoQualityViewModelFactory = {}));
    a.VideoQualityViewModelFactory
}(SpwebViewModelWatchHtml5Option || (SpwebViewModelWatchHtml5Option = {}));
var SpwebModelLocalStorage;
! function (a) {
    "use strict";

    function b() {
        return null === e && (e = new f(window.localStorage)), e
    }
    var c = "last_displayed_tab_index",
        d = "store_tab_index",
        e = null;
    a.getInstance = b;
    var f = function () {
        function a(a) {
            this.storage = a
        }
        return a.prototype.getLastDisplayedTabIndex = function () {
            var a = this.getItem(c);
            return Number(a) || 0
        }, a.prototype.setLastDisplayedTabIndex = function (a) {
            this.setItem(c, String(a))
        }, a.prototype.isStoreTabIndex = function () {
            return "1" === this.getItem(d)
        }, a.prototype.setStoreTabIndex = function (a) {
            this.setItem(d, a ? "1" : "0")
        }, a.prototype.getItem = function (a) {
            if (this.storage) try {
                return this.storage.getItem(a)
            } catch (b) {
                return null
            }
            return null
        }, a.prototype.setItem = function (a, b) {
            if (this.storage) try {
                return this.storage.setItem(a, b)
            } catch (c) {}
        }, a
    }();
    a.LocalStorageRepository = f
}(SpwebModelLocalStorage || (SpwebModelLocalStorage = {}));
var SpwebViewModelCommonTabNavigator;
! function (a) {
    "use strict";
    var b = SpwebApiSpweb.CounterApi,
        c = SpwebConstants.CounterApiConstants,
        d = function () {
            function a(a, c, d) {
                this.context = a, this.tab_contents_view_model_array = c, this.tab_navigator_view = d, this.local_storage = SpwebModelLocalStorage.getInstance(), this.is_store_tab_index = !1, this.is_first_tab_opened_once = !1, this.counter_api = new b(this.context.spweb_url);
                var e = this.getInitialTabIndex();
                this.tab_navigator_view.setViewModel(this), this.is_store_tab_index && 0 === e && (this.is_first_tab_opened_once = !0), this.changeTab(e)
            }
            return a.prototype.getInitialTabIndex = function () {
                var a = 0;
                return this.is_store_tab_index = this.local_storage.isStoreTabIndex(), this.context.is_login && (this.local_storage.setStoreTabIndex(this.context.store_tab_location), !this.is_store_tab_index && this.context.store_tab_location && this.counter_api.access(c.START_WATCH_TAB_INDEX_MEMORY), this.is_store_tab_index = this.context.store_tab_location), this.is_store_tab_index && (a = this.local_storage.getLastDisplayedTabIndex()), a
            }, a.prototype.changeTab = function (a) {
                this.tab_navigator_view.changeTab(a), this.tab_contents_view_model_array[a].show(), this.is_store_tab_index && (this.local_storage.setLastDisplayedTabIndex(a), 0 !== a || this.is_first_tab_opened_once || (this.is_first_tab_opened_once = !0, this.counter_api.access(c.OPEN_VIDEO_INFO_TAB)))
            }, a.prototype.getTabContentsViewModelArray = function () {
                return this.tab_contents_view_model_array
            }, a
        }();
    a.TabNavigatorViewModel = d
}(SpwebViewModelCommonTabNavigator || (SpwebViewModelCommonTabNavigator = {}));
var SpwebViewCommonTabNavigator;
! function (a) {
    "use strict";
    var b = function () {
        function a(a) {
            this.scroll_top_on_change_tab = !1;
            var b = jQuery(a);
            this.navigator_list = b.children(), this.target_contents_list = jQuery("#" + b.data("targetId")).children(), this.tab_loading_element = jQuery("#" + b.data("loadingId"))
        }
        return a.prototype.setViewModel = function (a) {
            var b = this;
            this.tab_navigator_view_model = a, this.navigator_list.each(function (a, c) {
                c.addEventListener("click", function () {
                    b.tab_navigator_view_model.changeTab(a)
                })
            })
        }, a.prototype.changeTab = function (a) {
            var b = jQuery(this.navigator_list[a]),
                c = jQuery(this.target_contents_list[a]);
            this.navigator_list.removeClass("selected"), b.addClass("selected"), this.tab_loading_element.addClass("hidden"), this.target_contents_list.addClass("hidden"), c.removeClass("hidden"), this.scroll_top_on_change_tab && jQuery("html,body").scrollTop(0)
        }, a.prototype.scrollTopOnChangeTab = function (a) {
            this.scroll_top_on_change_tab = a
        }, a
    }();
    a.TabNavigatorViewImpl = b
}(SpwebViewCommonTabNavigator || (SpwebViewCommonTabNavigator = {}));
var SpwebViewModelWatchTabTag;
! function (a) {
    "use strict";
    var b = SpwebApiSpweb.VideoTagApi,
        c = SpwebApiSpweb.TagApi,
        d = SpwebConstants.TagApiTplTypeConstants,
        e = function () {
            function a(a, d) {
                this.context = a, this.tag_tab_view = d, this.is_initialized = !1, this.is_processing = !1, this.video_tag_api = new b(this.context.spweb_url), this.tag_api = new c(this.context.spweb_url), this.tag_tab_view.setViewModel(this)
            }
            return a.prototype.show = function () {
                var a = this;
                this.is_initialized || (this.is_initialized = !0, this.video_tag_api.access(this.context.video_id, function (b) {
                    a.tag_tab_view.setVideoTag(b.html, b.tag_list)
                }, function () {
                    alert("タグの取得に失敗しました")
                }))
            }, a.prototype.searchTag = function (a, b, c) {
                var e = this;
                this.is_processing || (this.is_processing = !0, c.onStart(), this.tag_api.access({
                    tag: a,
                    exclude: this.context.video_id,
                    request_count: b,
                    tpl_type: d.WATCH_PAGE
                }, function (a) {
                    c.onSuccess(a), e.is_processing = !1
                }, function () {
                    alert("検索に失敗しました"), c.onError(), e.is_processing = !1
                }))
            }, a
        }();
    a.TagTabViewModel = e
}(SpwebViewModelWatchTabTag || (SpwebViewModelWatchTabTag = {}));
var SpwebViewModelWatchTabVideoInfo;
! function (a) {
    "use strict";
    var b = SpwebApiSpweb.CounterApi,
        c = SpwebConstants.CounterApiConstants,
        d = SpwebUtil.DeviceJudgement,
        e = SpwebModelWatchEvent.WatchEventHandler,
        f = function () {
            function a(a, c) {
                var f = this;
                this.context = a, this.video_info_tab_view = c, this.counter_api = new b(a.spweb_url), this.video_info_tab_view.setViewModel(this), this.context.music_downloadable && d.isAndroid() && this.video_info_tab_view.showNicosoundDlLink(), e.event("onAccessWatchApiSuccess").listen(function (a) {
                    f.watch_auth_key_container = a.watch_auth_key_container
                })
            }
            return a.prototype.shareByLine = function (a) {
                this.counter_api.access(c.CLICK_SHARE_LINE), window.open("http://line.naver.jp/R/msg/text/?" + encodeURIComponent(a))
            }, a.prototype.shareByFacebook = function (a, b) {
                this.counter_api.access(c.CLICK_SHARE_FACEBOOK, function () {
                    window.location.href = "https://www.facebook.com/dialog/feed?app_id=378853695459932&link=" + encodeURIComponent(a) + "&redirect_uri=" + encodeURIComponent(b)
                })
            }, a.prototype.shareByTwitter = function (a, b) {
                this.counter_api.access(c.CLICK_SHARE_TWITTER), window.open("http://twitter.com/share?url=" + encodeURIComponent(a) + "&text=" + encodeURIComponent(b))
            }, a.prototype.shareByMail = function (a) {
                this.counter_api.access(c.CLICK_SHARE_MAIL, function () {
                    window.location.href = "mailto:?body=" + encodeURIComponent(a)
                })
            }, a.prototype.downloadNicosound = function () {
                this.watch_auth_key_container && window.open(this.createNicosoundDlPageUrl(this.watch_auth_key_container.watch_auth_key))
            }, a.prototype.createNicosoundDlPageUrl = function (a) {
                return this.context.spweb_url + "downloadmusic?video_id=" + this.context.video_id + "&watch_auth_key=" + encodeURIComponent(a)
            }, a.prototype.show = function () {}, a
        }();
    a.VideoInfoTabViewModel = f
}(SpwebViewModelWatchTabVideoInfo || (SpwebViewModelWatchTabVideoInfo = {}));
var SpwebViewModelWatchEvent;
! function (a) {
    "use strict";
    var b = SpwebEvent.EventHandlerBase;
    a.WatchEventHandler = new b
}(SpwebViewModelWatchEvent || (SpwebViewModelWatchEvent = {}));
var SpwebViewModelWatchContents;
! function (a) {
    "use strict";
    var b = SpwebViewModelWatchEvent.WatchEventHandler,
        c = SpwebViewModelWatchTabVideoInfo.VideoInfoTabViewModel,
        d = SpwebViewModelWatchTabTag.TagTabViewModel,
        e = function () {
            function a(a, c) {
                var d = this;
                this.tab_navigator_view_model = a, this.contents_container_view = c, this.video_info_tab_view_model_index = -1, this.tag_tab_view_model_index = -1, b.event("showVideoInfoTab").listen(function () {
                    d.showVideoInfoTab()
                }), b.event("showTagTab").listen(function () {
                    d.showTagTab()
                }), b.event("slideTop").listen(function () {
                    d.contents_container_view.slideTop()
                }), b.event("unslideTop").listen(function () {
                    d.contents_container_view.unslideTop()
                })
            }
            return a.prototype.setLayout = function (a, b) {
                this.contents_container_view.setLayout(a, b)
            }, a.prototype.showVideoInfoTab = function () {
                var a = this;
                this.video_info_tab_view_model_index < 0 && this.tab_navigator_view_model.getTabContentsViewModelArray().some(function (b, d) {
                    return b instanceof c ? (a.video_info_tab_view_model_index = d, !0) : !1
                }), this.tab_navigator_view_model.changeTab(this.video_info_tab_view_model_index)
            }, a.prototype.showTagTab = function () {
                var a = this;
                this.tag_tab_view_model_index < 0 && this.tab_navigator_view_model.getTabContentsViewModelArray().some(function (b, c) {
                    return b instanceof d ? (a.tag_tab_view_model_index = c, !0) : !1
                }), this.tab_navigator_view_model.changeTab(this.tag_tab_view_model_index)
            }, a
        }();
    a.ContentsContainerViewModel = e
}(SpwebViewModelWatchContents || (SpwebViewModelWatchContents = {}));
var SpwebViewModelWatchStyle;
! function (a) {
    "use strict";
    var b = SpwebViewModelCommonWindow.WindowEventHandler,
        c = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler;
    ! function (a) {
        function d() {
            g(b.getScreenLayout()), b.listen("orientationchange", function (a) {
                g(a)
            })
        }

        function e() {
            c.event("switchForceLandscape").listen(function () {
                h()
            }), c.event("finishPlay").listen(function () {
                k && h()
            })
        }

        function f() {
            var a = b.getScreenLayout();
            Math.min(a.height(), a.width()) > j && jQuery(document.body).addClass("tablet")
        }

        function g(a) {
            var b = jQuery(document.body);
            a.isPortrait() ? b.removeClass("landscape") : (document.activeElement.blur(), k && (b.removeClass("player-horizontal"), k = !1), b.addClass("landscape"), b.scrollTop(1))
        }

        function h() {
            var a;
            b.getScreenLayout().isLandscape() || (a = jQuery(document.body), k = !k, k ? a.addClass("player-horizontal") : a.removeClass("player-horizontal"), c.event("onSwitchForceLandscape").dispatch(k))
        }

        function i() {
            return k
        }
        var j = 640,
            k = !1;
        a.listenOrientationchange = d, a.listenForceLandscape = e, a.applyDeviceSizeDependentStyle = f, a.isForceLandscape = i
    }(a.WatchStyleCoordinator || (a.WatchStyleCoordinator = {}));
    a.WatchStyleCoordinator
}(SpwebViewModelWatchStyle || (SpwebViewModelWatchStyle = {}));
var SpwebViewModelWatchHtml5Nicoplayer;
! function (a) {
    "use strict";
    var b = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler,
        c = SpwebViewModelHtml5Layout.LayoutManager,
        d = SpwebViewModelCommonWindow.WindowEventHandler,
        e = SpwebModelVideo.VideoQualityModelFactory,
        f = SpwebModelVideo.GetFlvTask,
        g = SpwebViewModelWatchStyle.WatchStyleCoordinator,
        h = function () {
            function a(a, b, d, g, h, i, j) {
                this.context = a, this.player_view_model = b, this.video_view_model = d, this.controller_view_model = g, this.player_comment_view_model = h, this.video_quality_view_model = i, this.contents_container_view_model = j, this.video_loaded = !1, this.comment_loaded = !1, this.layout_manager = new c(this.context), this.video_quality_model = e.create(this.context, new f(this.context)), this.video_quality_view_model.setVideoQualityModel(this.video_quality_model), this.initialize()
            }
            return a.prototype.initialize = function () {
                var a = this;
                b.event("videoLoadeddata").listen(function () {
                    a.videoLoadeddata()
                }), b.event("commentLoaded").listen(function () {
                    a.commentLoaded()
                }), d.listen("orientationchange", function (b) {
                    a.dispatchLayout(b, !1)
                }), this.layoutInitialize(), b.event("onSwitchForceLandscape").listen(function (b) {
                    a.dispatchLayout(d.getScreenLayout(), b)
                }), b.event("videoDurationchange").listen(function (b) {
                    a.durationchange(b)
                })
            }, a.prototype.videoLoadeddata = function () {
                this.video_loaded = !0, this.checkLoadFinish()
            }, a.prototype.commentLoaded = function () {
                this.comment_loaded = !0, this.checkLoadFinish()
            }, a.prototype.setLayout = function (a, b, c) {
                this.player_view_model.setLayout(a), this.video_view_model.setLayout(a), this.player_comment_view_model.setLayout(a), this.context.is_player_fixed && this.contents_container_view_model.setLayout(b, c)
            }, a.prototype.checkLoadFinish = function () {
                this.video_loaded && this.comment_loaded && (this.player_view_model.finishLoaded(), this.video_view_model.finishLoaded())
            }, a.prototype.layoutInitialize = function () {
                var a = d.getScreenLayout();
                this.dispatchLayout(a, !1)
            }, a.prototype.dispatchLayout = function (a, b) {
                var c = this;
                this.layout_manager.getPlayerLayout(a, b, function (d, e) {
                    c.setLayout(d, a.isLandscape() || b, e)
                })
            }, a.prototype.durationchange = function (a) {
                if (!(null === a || 1 >= a)) {
                    this.layout_manager.setVideoSize(this.video_view_model.getVideoSize());
                    var b = d.getScreenLayout();
                    this.dispatchLayout(b, g.isForceLandscape())
                }
            }, a
        }();
    a.NicoplayerViewModel = h
}(SpwebViewModelWatchHtml5Nicoplayer || (SpwebViewModelWatchHtml5Nicoplayer = {}));
var SpwebViewWatchHtml5Video;
! function (a) {
    "use strict";
    var b = SpwebViewModelHtml5Layout.SquareLayout,
        c = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler,
        d = function () {
            function a() {
                this.player_video = document.getElementById("jsPlayerVideo")
            }
            return a.prototype.setViewModel = function (a) {
                this.video_view_model = a
            }, a.prototype.setVideoInfo = function (a, b) {
                this.video_url = a, this.video_quality_type = b
            }, a.prototype.play = function (a) {
                this.currentTime(a), this.video_element.play()
            }, a.prototype.pause = function (a) {
                this.currentTime(a), this.video_element.pause()
            }, a.prototype.isPlaying = function () {
                return !this.video_element.paused
            }, a.prototype.currentTime = function (a) {
                return null == a || void 0 == a || isNaN(a) || (this.video_element.currentTime = a), this.video_element.currentTime
            }, a.prototype.bufferedTime = function () {
                var a = this.video_element.buffered.length;
                return a && a > 0 ? this.video_element.buffered.end(a - 1) : 0
            }, a.prototype.scrollVideoTop = function () {
                var a = jQuery(this.video_element).offset().top;
                jQuery("html,body").scrollTop(a)
            }, a.prototype.loadVideo = function () {
                this.video_element || this.initializeVideoView(), this.video_element.setAttribute("src", this.video_url), this.video_element.load()
            }, a.prototype.getVideoSize = function () {
                return this.video_element instanceof HTMLVideoElement ? new b(this.video_element.videoHeight, this.video_element.videoWidth) : null
            }, a.prototype.setLayout = function (a) {
                this.video_layout = a, this.executeLayoutSetting()
            }, a.prototype.duration = function () {
                return this.video_element.duration
            }, a.prototype.initializeVideoView = function () {
                var a = this;
                this.video_element = document.createElement("video"), this.video_element.setAttribute("id", "video"), this.video_element.setAttribute("src", this.video_url), this.executeLayoutSetting(), this.video_element.addEventListener("play", function () {
                    a.videoPlay()
                }), this.video_element.addEventListener("pause", function () {
                    a.videoPause()
                }), this.video_element.addEventListener("ended", function () {
                    a.videoEnded()
                }), this.video_element.addEventListener("progress", function () {
                    a.videoProgress()
                }), this.video_element.addEventListener("timeupdate", function () {
                    a.videoTimeupdate()
                }), this.video_element.addEventListener("loadedmetadata", function () {
                    a.videoLoadeddata()
                }), this.video_element.addEventListener("durationchange", function () {
                    a.videoDurationchange()
                }), this.video_element.addEventListener("error", function (b) {
                    a.videoError(b)
                }), this.player_video.appendChild(this.video_element)
            }, a.prototype.videoPlay = function () {
                c.event("videoPlay").dispatch(this.currentTime())
            }, a.prototype.videoPause = function () {
                c.event("videoPause").dispatch(this.currentTime())
            }, a.prototype.videoEnded = function () {
                c.event("videoEnded").dispatch(), this.video_element.duration || this.video_view_model.dispatchVideoError(this.video_quality_type)
            }, a.prototype.videoProgress = function () {
                c.event("videoProgress").dispatch(this.bufferedTime())
            }, a.prototype.videoTimeupdate = function () {
                c.event("videoTimeupdate").dispatch(this.currentTime())
            }, a.prototype.videoLoadeddata = function () {
                c.event("videoLoadeddata").dispatch({
                    video_quality_type: this.video_quality_type
                })
            }, a.prototype.videoDurationchange = function () {
                c.event("videoDurationchange").dispatch(this.duration())
            }, a.prototype.videoError = function (a) {
                switch (a.target.error.code) {
                case 1:
                    alert("動画のロードが中断されました。リロードしてください。");
                    break;
                case 2:
                    alert("ネットワークエラー");
                    break;
                case 3:
                case 4:
                    this.video_view_model.dispatchVideoError(this.video_quality_type)
                }
            }, a.prototype.executeLayoutSetting = function () {
                this.video_element && this.video_layout && (this.video_element.style.height = this.video_layout.height + "px", this.video_element.style.width = this.video_layout.width + "px", this.player_video.style.top = this.video_layout.top + "px")
            }, a
        }();
    a.VideoViewImpl = d
}(SpwebViewWatchHtml5Video || (SpwebViewWatchHtml5Video = {}));
var SpwebViewWatchHtml5Comment;
! function (a) {
    "use strict";
    var b = function () {
        function a() {
            this.player_comment = document.getElementById("jsPlayerComment")
        }
        return a.prototype.setLayout = function (a) {
            this.player_comment.style.height = a.height + "px", this.player_comment.style.width = a.width + "px", this.player_comment.style.top = a.top + "px", this.player_comment.style.marginLeft = a.width * -.5 + "px"
        }, a.prototype.setInnerHtml = function (a) {
            this.player_comment.innerHTML = a
        }, a.prototype.getInnerHtml = function () {
            return this.player_comment.innerHTML
        }, a.prototype.appendComment = function (a) {
            this.player_comment.appendChild(a)
        }, a.prototype.removeComment = function (a) {
            this.player_comment.removeChild(a)
        }, a.prototype.showComment = function () {
            this.player_comment.removeAttribute("invisible")
        }, a.prototype.hideComment = function () {
            this.player_comment.setAttribute("invisible", "invisible")
        }, a
    }();
    a.PlayerCommentViewImpl = b
}(SpwebViewWatchHtml5Comment || (SpwebViewWatchHtml5Comment = {}));
var SpwebViewModelWatchHtml5Banner;
! function (a) {
    "use strict";
    var b = SpwebViewModelCommonWindow.WindowEventHandler,
        c = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler,
        d = function () {
            function a(a) {
                this.banner_view = a, this.is_player_launched = !1, this.initialize()
            }
            return a.prototype.initialize = function () {
                var a = this;
                new adsSimple.Advertisement({
                    zone: this.banner_view.getZoneId()
                }).set(this.banner_view.getElementId()), c.event("launchPlayer").listen(function () {
                    a.launchPlayer()
                }), b.listen("orientationchange", function (b) {
                    a.orientationChange(b)
                })
            }, a.prototype.launchPlayer = function () {
                this.is_player_launched = !0, this.ControlFollowBottomBannerVisible(b.getScreenLayout())
            }, a.prototype.orientationChange = function (a) {
                this.ControlFollowBottomBannerVisible(a)
            }, a.prototype.ControlFollowBottomBannerVisible = function (a) {
                this.is_player_launched && (a.isPortrait() ? this.banner_view.show() : this.banner_view.hide())
            }, a
        }();
    a.FollowBottomViewModel = d
}(SpwebViewModelWatchHtml5Banner || (SpwebViewModelWatchHtml5Banner = {}));
var SpwebViewWatchHtml5Banner;
! function (a) {
    "use strict";
    var b = function () {
        function a() {
            this.BANNER_ID = "jsFollowBottomBanner", this.banner = jQuery("#" + this.BANNER_ID)
        }
        return a.prototype.show = function () {
            this.banner.removeClass("hidden")
        }, a.prototype.hide = function () {
            this.banner.addClass("hidden")
        }, a.prototype.getZoneId = function () {
            return this.banner.data("zoneId")
        }, a.prototype.getElementId = function () {
            return this.BANNER_ID
        }, a
    }();
    a.FollowBottomViewImpl = b
}(SpwebViewWatchHtml5Banner || (SpwebViewWatchHtml5Banner = {}));
var SpwebViewWatchHtml5Controller;
! function (a) {
    "use strict";
    var b = SpwebUtil.Util,
        c = SpwebViewModelWatchStyle.WatchStyleCoordinator,
        d = function () {
            function a() {
                this.player_container = jQuery("#jsPlayerContainer"), this.play_button = jQuery("#jsControlPlay"), this.force_landscape_button = jQuery("#jsForceLandscape")
            }
            return a.prototype.setForceLandscape = function (a) {
                a ? (this.force_landscape_button.removeClass("on"), this.force_landscape_button.addClass("off")) : (this.force_landscape_button.removeClass("off"), this.force_landscape_button.addClass("on"))
            }, a.prototype.setControllerViewModel = function (a) {
                var b = this;
                this.controller_view_model = a, this.play_button.bind("click", function () {
                    b.controller_view_model.playOrPause()
                }), this.force_landscape_button.bind("click", function () {
                    b.controller_view_model.switchForceLandscape()
                }), document.getElementById("jsTapArea").addEventListener("touchend", function () {
                    b.controller_view_model.toggleController()
                })
            }, a.prototype.setPlaying = function (a) {
                a ? (this.play_button.removeClass("control-start"), this.play_button.addClass("control-pause")) : (this.play_button.removeClass("control-pause"), this.play_button.addClass("control-start"))
            }, a.prototype.show = function () {
                this.player_container.addClass("menu-active")
            }, a.prototype.hide = function () {
                this.player_container.removeClass("menu-active")
            }, a.prototype.enableForceLandscape = function () {
                this.force_landscape_button.removeClass("hidden")
            }, a.prototype.disableForceLandscape = function () {
                this.force_landscape_button.addClass("hidden")
            }, a
        }();
    a.ControllerViewImpl = d;
    var e = function () {
        function a() {
            this.play_time_view = document.getElementById("jsPlayTime"), this.duration_view = document.getElementById("jsVideoDuration"), this.seek_bar = jQuery("#jsSeekBar"), this.seek_slider_view = document.getElementById("jsSeekSlider"), this.seek_area = document.getElementById("jsSeek"), this.progress_view = document.getElementById("jsSeekProgress")
        }
        return a.prototype.setViewModel = function (a) {
            var b = this;
            this.seek_bar_view_model = a, this.seek_area.addEventListener("touchstart", function (a) {
                b.seekStart(a)
            }), this.seek_area.addEventListener("touchmove", function (a) {
                b.seekMove(a)
            }), this.seek_area.addEventListener("touchend", function (a) {
                b.seekEnd(a)
            })
        }, a.prototype.seekBackTimeout = function () {
            this.seek_slider_view.style.webkitTransition = ""
        }, a.prototype.seekBack = function (a) {
            var b = this;
            this.seek_slider_view.style.webkitTransition = "left 1s linear", setTimeout(function () {
                b.seekBackTimeout()
            }, 1e3), this.setCurrentTime(a)
        }, a.prototype.setCurrentTime = function (a) {
            var c = f.currentTimeToSeekSliderLeft(a, this.video_duration, this.seek_bar.width());
            this.seek_slider_view.style.left = c + "px", this.play_time_view.innerHTML = b.timeToString(a)
        }, a.prototype.setVideoDuration = function (a) {
            this.duration_view.innerHTML = b.timeToString(a), this.video_duration = a
        }, a.prototype.setProgressTime = function (a) {
            var b = f.bufferedTimeToProgressPercent(a, this.video_duration);
            this.progress_view.style.width = b + "%"
        }, a.prototype.seekStart = function (a) {
            a.preventDefault(), this.seek_bar_view_model.seekStart()
        }, a.prototype.seekMove = function (a) {
            var b;
            a.preventDefault(), this.video_duration && (b = c.isForceLandscape() ? f.clinetPositionToCurrentTime(a.touches[0].clientY, this.seek_bar.offset().top, this.seek_bar.width(), this.video_duration) : f.clinetPositionToCurrentTime(a.touches[0].clientX, this.seek_bar.offset().left, this.seek_bar.width(), this.video_duration), this.setCurrentTime(b), this.seek_bar_view_model.updateCurrentTime(b))
        }, a.prototype.seekEnd = function (a) {
            a.preventDefault(), this.seek_bar_view_model.seekEnd()
        }, a
    }();
    a.SeekBarViewImpl = e,
        function (a) {
            function b(a, b, c, d) {
                return b > a ? 0 : a > c + b ? d : (a - b) / c * d
            }

            function c(a, b, c) {
                return b ? a / b * c : 0
            }

            function d(a, b) {
                return b ? a / b * 100 : 0
            }
            a.clinetPositionToCurrentTime = b, a.currentTimeToSeekSliderLeft = c, a.bufferedTimeToProgressPercent = d
        }(a.SeekBarCalculater || (a.SeekBarCalculater = {}));
    var f = a.SeekBarCalculater
}(SpwebViewWatchHtml5Controller || (SpwebViewWatchHtml5Controller = {}));
var SpwebViewWatchHtml5Player;
! function (a) {
    "use strict";
    var b = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler,
        c = SpwebApiSpweb.CounterApi,
        d = SpwebConstants.CounterApiConstants,
        e = SpwebUtil.DeviceJudgement,
        f = function () {
            function a(a) {
                this.watch_thispage = jQuery("#jsWatchThisPage"), this.replay_button = document.getElementById("jsReplayButton"), this.thumbnail = document.getElementById("jsThumbnail"), this.player_container = jQuery("#jsPlayerContainer"), this.related_items_container = jQuery("#jsRelatedItemsContainer"), this.related_items_recommend_message = jQuery("#jsRelatedItemsRecommendMessage"), this.player_loading_container = jQuery("#jsPlayerLoadingContainer"), this.counter_api = new c(a.spweb_url)
            }
            return a.prototype.setViewModel = function (a) {
                var b = this;
                this.player_view_model = a, this.watch_thispage.bind("click", function () {
                    b.launchPlayer()
                }), this.replay_button.addEventListener("click", function (a) {
                    a.preventDefault(), b.replay()
                })
            }, a.prototype.launchPlayer = function () {
                this.disableWatchThisPageButton(), this.enableLoadingImage(), b.event("launchPlayer").dispatch(), this.player_container.removeClass("screen-open"), this.player_container.addClass("screen-playing"), e.is_iOS() ? this.counter_api.access(d.CLICK_PLAY_WEB_IOS) : e.isAndroid() && this.counter_api.access(d.CLICK_PLAY_WEB_ANDROID)
            }, a.prototype.setLayout = function (a) {
                var b = a.nico_player_layout,
                    c = a.thumbnail_layout;
                this.thumbnail.style.width = c.width + "px", this.thumbnail.style.height = c.height + "px", this.thumbnail.style.marginTop = c.top + "px", this.player_container.css("height", b.height + "px"), this.player_container.css("width", b.width + "px")
            }, a.prototype.enableWatchThisPageButton = function () {
                this.watch_thispage.removeClass("hidden")
            }, a.prototype.disableWatchThisPageButton = function () {
                this.watch_thispage.addClass("hidden")
            }, a.prototype.enableLoadingImage = function () {
                this.player_loading_container.addClass("active")
            }, a.prototype.disableLoadingImage = function () {
                this.player_loading_container.removeClass("active")
            }, a.prototype.finishPlay = function () {
                this.player_container.removeClass("screen-playing"), this.player_container.addClass("screen-close")
            }, a.prototype.setRelatedItems = function (a) {
                this.related_items_container.html(a), this.related_items_container.find(".jsRelatedItem").length > 0 && this.related_items_recommend_message.removeClass("hidden")
            }, a.prototype.replay = function () {
                this.player_container.removeClass("screen-close"), this.player_container.addClass("screen-playing"), this.player_view_model.replay(), this.counter_api.access(d.CLICK_PLAY_ONE_MORE_TIME)
            }, a
        }();
    a.PlayerViewImpl = f
}(SpwebViewWatchHtml5Player || (SpwebViewWatchHtml5Player = {}));
var SpwebViewWatchTabVideoInfo;
! function (a) {
    "use strict";
    var b = function () {
        function a() {
            var a = this;
            this.partial_video_description = jQuery("#jsPartialVideoDescription"), this.full_video_description = jQuery("#jsFullVideoDescription"), this.show_full_video_description_link = jQuery("#jsShowFullVideoDescriptionLink"), this.show_partial_video_description_link = jQuery("#jsShowPartialVideoDescriptionLink"), this.share_line_button = jQuery("#jsShareLineButton"), this.share_twitter_button = jQuery("#jsShareTwitterButton"), this.share_facebook_button = jQuery("#jsShareFacebookButton"), this.share_mail_button = jQuery("#jsShareMailButton"), this.nicosound_download_link = document.getElementById("jsNicosoundDownloadLink"), this.nicosound_download_area = jQuery("#jsNicosoundDownloadArea"), this.show_full_video_description_link.bind("click", function (b) {
                b.preventDefault(), a.showFullVideoDescription()
            }), this.show_partial_video_description_link.bind("click", function (b) {
                b.preventDefault(), a.showPartialVideoDescription()
            })
        }
        return a.prototype.setViewModel = function (a) {
            var b = this;
            this.video_info_tab_view_model = a, this.share_line_button.bind("click", function () {
                b.video_info_tab_view_model.shareByLine(b.share_line_button.data("message"))
            }), this.share_facebook_button.bind("click", function () {
                b.video_info_tab_view_model.shareByFacebook(b.share_facebook_button.data("link"), b.share_facebook_button.data("redirect-uri"))
            }), this.share_twitter_button.bind("click", function () {
                b.video_info_tab_view_model.shareByTwitter(b.share_twitter_button.data("url"), b.share_twitter_button.data("text"))
            }), this.share_mail_button.bind("click", function () {
                var a = b.share_mail_button.data();
                b.video_info_tab_view_model.shareByMail([a.title, a.link, "", a.message].join("\n"))
            }), this.nicosound_download_link.addEventListener("click", function (a) {
                a.preventDefault(), b.video_info_tab_view_model.downloadNicosound()
            })
        }, a.prototype.showFullVideoDescription = function () {
            this.partial_video_description.addClass("hidden"), this.show_full_video_description_link.addClass("hidden"), this.full_video_description.removeClass("hidden"), this.show_partial_video_description_link.removeClass("hidden")
        }, a.prototype.showPartialVideoDescription = function () {
            this.partial_video_description.removeClass("hidden"), this.show_full_video_description_link.removeClass("hidden"), this.full_video_description.addClass("hidden"), this.show_partial_video_description_link.addClass("hidden")
        }, a.prototype.showNicosoundDlLink = function () {
            this.nicosound_download_area.removeClass("hidden")
        }, a
    }();
    a.VideoInfoTabViewImpl = b
}(SpwebViewWatchTabVideoInfo || (SpwebViewWatchTabVideoInfo = {}));
var SpwebViewWatchTabTag;
! function (a) {
    "use strict";

    function b(a, b) {
        a.removeClass("arrow-down"), a.addClass("arrow-up"), b.addClass("expand")
    }

    function c(a, b) {
        a.removeClass("arrow-up"), a.addClass("arrow-down"), b.removeClass("expand")
    }
    var d = SpwebConstants.CustomDomEventConstants,
        e = function () {
            function a() {
                this.tag_link_banner_id = "jsTagLinkBanner", this.tag_tab = jQuery("#jsTagTab"), this.tag_link_banner = jQuery("#" + this.tag_link_banner_id), this.tag_list = document.getElementById("jsTagList"), this.tag_loading_container = jQuery("#jsTagLoadingContainer"), this.SEARCH_TAG_DISPLAY_COUNT = 3
            }
            return a.prototype.setViewModel = function (a) {
                var b = this;
                this.tag_tab_view_model = a, this.tag_tab.on(d.SHOW_ELEMENT, function () {
                    b.tag_tab_view_model.show()
                })
            }, a.prototype.setVideoTag = function (a, b) {
                this.tag_list.innerHTML = a, this.tag_loading_container.removeClass("active"), this.initializeTagExpandTrigger(), new adsSimple.Advertisement({
                    zone: this.tag_link_banner.data("zoneId"),
                    segments: {
                        keyword: b.join(",")
                    }
                }).set(this.tag_link_banner_id)
            }, a.prototype.initializeTagExpandTrigger = function () {
                var a = this;
                jQuery(".jsTagExpandTrigger").each(function (b, c) {
                    c.addEventListener("click", function (b) {
                        var d = jQuery(c);
                        b.preventDefault(), a.toggleTagSearchList(d, d.siblings(".jsTagSearchResult"))
                    })
                })
            }, a.prototype.toggleTagSearchList = function (a, d) {
                a.hasClass("arrow-down") ? d.data("isOnceOpened") ? b(a, d) : this.tag_tab_view_model.searchTag(a.text(), this.SEARCH_TAG_DISPLAY_COUNT, new f(a, d)) : c(a, d)
            }, a
        }();
    a.TagTabViewImpl = e;
    var f = function () {
        function a(a, b) {
            this.tag_expand_trigger_element = a, this.search_tag_target_element = b
        }
        return a.prototype.onStart = function () {
            b(this.tag_expand_trigger_element, this.search_tag_target_element), this.search_tag_target_element.data("isOnceOpened", !0)
        }, a.prototype.onSuccess = function (a) {
            this.search_tag_target_element.prepend(a), this.search_tag_target_element.find(".jsTagSearchLoadingContainer").removeClass("active")
        }, a.prototype.onError = function () {
            this.search_tag_target_element.find(".jsTagSearchLoadingContainer").removeClass("active")
        }, a
    }()
}(SpwebViewWatchTabTag || (SpwebViewWatchTabTag = {}));
var SpwebViewModelWatchTabComment;
! function (a) {
    "use strict";
    var b = SpwebModelComment.Comment,
        c = SpwebModelCommentEvent.CommentEventHandler,
        d = SpwebConstants.CounterApiConstants,
        e = SpwebApiSpweb.CounterApiRequestBuilder,
        f = SpwebApiSpweb.CounterApi,
        g = function () {
            function a(a, b, c) {
                this.context = a, this.comment_post_view = b, this.video_playing_info = c, this.post_thread = null, this.is_player_ready_to_post_comment = !1, this.is_processing = !1, this.is_184_forbidden = !1, this.context.no_comment_post || (this.comment_post_view.setViewModel(this), this.context.thread_id !== this.context.default_thread_id && (this.is_184_forbidden = !0), this.counter_api = new f(this.context.spweb_url))
            }
            return a.prototype.initialize = function () {
                var a = this;
                this.context.no_comment_post || (c.event("onPostCommentStart").listen(function () {
                    a.is_processing = !0
                }), c.event("onPostCommentSuccess").listen(function () {
                    a.is_processing = !1
                }), c.event("onPostCommentError").listen(function () {
                    a.is_processing = !1
                }), this.comment_post_view.initialize())
            }, a.prototype.onGetThreadSuccess = function (a) {
                var b = this;
                a.forEach(function (a) {
                    a.id !== b.context.thread_id || a.is_owner_thread || (b.post_thread = a)
                })
            }, a.prototype.setPlayerReadyToPostComment = function (a) {
                this.is_player_ready_to_post_comment = a
            }, a.prototype.postComment = function () {
                var a, b;
                if (!this.is_player_ready_to_post_comment) return void window.alert("動画を再生すると、コメントが投稿できます");
                if (!this.is_processing && (a = this.comment_post_view.getCommentBody(), b = this.video_playing_info.getPlayingTimeInCentiSecond(), a)) return this.context.inline_playable || b > 100 ? void this.sendPostComment(a, b) : void(window.confirm("再生時間「0秒」にコメント投稿しようとしています。よろしいですか？\n（再生時間はシークバーで操作できます）") && this.sendPostComment(a, b))
            }, a.prototype.sendPostComment = function (a, d) {
                var f = this.comment_post_view.getCommentSize(),
                    g = this.comment_post_view.getCommentPosition(),
                    h = this.comment_post_view.getCommentColor();
                c.event("postComment").dispatch({
                    thread: this.post_thread,
                    comment: new b(-1, d, a, h, f, g, this.is_184_forbidden ? !1 : !0, !0, 0)
                }), this.comment_post_view.setCommentBody(""), this.counter_api.access(e.createClickCommentPostPath(f, g, h))
            }, a
        }();
    a.CommentPostViewModel = g;
    var h = function () {
        function a(a, b) {
            this.comment_list_view = a, this.video_playing_info = b, this.sortByVposFunc = function (a, b) {
                return a.vpos > b.vpos ? 1 : -1
            }, this.page = 0, this.all_comments = [], this.owner_comments = [], this.display_comments = [], this.initialized = !1, this.comment_loaded = !1, this.COMMENT_START_ADJUST_TIME = 300, this.previous_reload_time = null, this.comment_list_view.setViewModel(this), this.count_per_page = this.comment_list_view.getCommentListPageSize()
        }
        return a.prototype.initialize = function () {
            var a = this;
            c.event("onPostCommentSuccess").listen(function (b) {
                a.onPostCommentSuccess(b)
            }), this.comment_list_view.initialize(), this.initialized = !0, this.initializeComment()
        }, a.prototype.onGetThreadSuccess = function (a) {
            var b = this;
            this.all_comments = [], this.owner_comments = [], a.forEach(function (a) {
                a.is_owner_thread && (b.owner_comments = a.comments), b.all_comments = b.all_comments.concat(a.comments)
            }), this.all_comments = this.sortByVpos(this.all_comments), this.owner_comments = this.sortByVpos(this.owner_comments), this.comment_loaded = !0, this.comment_list_view.setCommentLoaded(), this.initializeComment()
        }, a.prototype.initializeComment = function () {
            this.initialized && this.comment_loaded && (0 === this.all_comments.length && this.comment_list_view.setEmpty(!0), this.loadComment())
        }, a.prototype.loadComment = function () {
            this.initializeDisplayComment(0), this.displayComment()
        }, a.prototype.reloadComment = function (a) {
            var b = this.video_playing_info.getPlayingTimeInCentiSecond();
            if (a) {
                if (null !== this.previous_reload_time && this.previous_reload_time === b) return void alert("再生時間以降のコメントを表示します。");
                this.previous_reload_time = b
            } else this.previous_reload_time = null;
            this.initializeDisplayComment(b), this.displayComment()
        }, a.prototype.loadMoreComment = function () {
            this.page += 1, this.displayComment()
        }, a.prototype.initializeDisplayComment = function (a) {
            var b = a - this.COMMENT_START_ADJUST_TIME,
                c = [];
            this.page = 0, this.comment_list_view.clearCommentList(), this.comment_list_view.hideMoreViewButton(), this.comment_list_view.isOwnerThreadOnly() ? (c = this.owner_comments, 0 === this.owner_comments.length && alert("この動画には投稿者コメントがありません")) : (c = this.all_comments, 0 === this.all_comments.length), this.display_comments = c.filter(function (a) {
                return a.vpos > b
            }), this.comment_list_view.setDisplayListEmpty(0 === this.display_comments.length ? !0 : !1)
        }, a.prototype.displayComment = function () {
            var a, b = this.page * this.count_per_page,
                c = b + this.count_per_page;
            if (0 !== this.display_comments.length) {
                if (this.display_comments.length <= b) return void this.comment_list_view.hideMoreViewButton();
                a = this.display_comments.slice(b, c), a.length > 0 && this.comment_list_view.appendCommentList(a), this.display_comments.length > c ? this.comment_list_view.showMoreViewButton() : this.comment_list_view.hideMoreViewButton()
            }
        }, a.prototype.sortByVpos = function (a) {
            return a.sort(this.sortByVposFunc), a
        }, a.prototype.onPostCommentSuccess = function (a) {
            this.all_comments.push(a), this.all_comments = this.sortByVpos(this.all_comments), this.comment_list_view.setEmpty(!1), this.comment_list_view.isOwnerThreadOnly() || this.reloadComment(!1)
        }, a
    }();
    a.CommentListViewModel = h;
    var i = function () {
        function a(a) {
            this.comment_post_view_model = a, this.is_initialized = !1, this.comment_post_view_model.setPlayerReadyToPostComment(!0)
        }
        return a.prototype.show = function () {
            this.is_initialized || (this.is_initialized = !0, this.comment_post_view_model.initialize())
        }, a
    }();
    a.FlashCommentTabViewModel = i;
    var j = function () {
        function a(a, b, d) {
            var e = this;
            this.context = a, this.comment_post_view_model = b, this.comment_list_view_model = d, this.is_initialized = !1, this.counter_api = new f(a.spweb_url), c.event("onGetThreadSuccess").listen(function (a) {
                e.comment_post_view_model.onGetThreadSuccess(a), e.comment_list_view_model.onGetThreadSuccess(a), e.comment_post_view_model.setPlayerReadyToPostComment(!0)
            })
        }
        return a.prototype.show = function () {
            this.is_initialized || (this.is_initialized = !0, this.comment_post_view_model.initialize(), this.comment_list_view_model.initialize(), this.counter_api.access(d.CLICK_COMMENT_TAB))
        }, a
    }();
    a.Html5CommentTabViewModel = j
}(SpwebViewModelWatchTabComment || (SpwebViewModelWatchTabComment = {}));
var SpwebViewWatchTabComment;
! function (a) {
    "use strict";
    var b = SpwebUtil.Util,
        c = SpwebApiSpweb.CounterApi,
        d = SpwebConstants.CounterApiConstants,
        e = function () {
            function a(a) {
                this.context = a, this.once_expanded = !1, this.comment_post_area = jQuery("#jsCommentPostArea"), this.expand_button = document.getElementById("jsExpandButton"), this.comment_body_input = document.getElementById("jsChatBody"), this.submit_button = document.getElementById("jsChatSubmit"), this.command_pallet = document.getElementById("jsChatCommandInput"), this.comment_size_li_list = jQuery("#jsChatCommandSize").find("li"), this.comment_position_li_list = jQuery("#jsChatCommandPosition").find("li"), this.comment_color_li_list = jQuery("#jsChatCommandColor").find("li:not(.jsUnavailableColor)")
            }
            return a.prototype.initialize = function () {
                var a = this;
                this.comment_size_li_list.bind("click", this.createOnClickListener(this.comment_size_li_list)), this.comment_position_li_list.bind("click", this.createOnClickListener(this.comment_position_li_list)), this.comment_color_li_list.bind("click", this.createOnClickListener(this.comment_color_li_list)), this.expand_button.addEventListener("click", function () {
                    a.onClickExpandButton()
                }), this.submit_button.addEventListener("click", function () {
                    a.onClickSubmitButton()
                }), this.comment_body_input.addEventListener("keydown", function (b) {
                    13 === b.keyCode && (a.onClickSubmitButton(), a.comment_body_input.blur())
                }), this.comment_post_area.removeClass("hidden")
            }, a.prototype.setViewModel = function (a) {
                this.view_model = a
            }, a.prototype.createOnClickListener = function (a) {
                return function (b) {
                    var c = jQuery(b.currentTarget),
                        d = c.hasClass("selected");
                    a.removeClass("selected"), d || c.addClass("selected")
                }
            }, a.prototype.onClickExpandButton = function () {
                var a;
                this.expand_button.classList.contains("active") ? (this.expand_button.classList.remove("active"), this.command_pallet.classList.remove("expand")) : (this.expand_button.classList.add("active"), this.command_pallet.classList.add("expand"), this.once_expanded || (a = new c(this.context.spweb_url), a.access(d.CLICK_OPEN_COMMANDPALETTE), this.once_expanded = !0))
            }, a.prototype.onClickSubmitButton = function () {
                this.view_model.postComment()
            }, a.prototype.getCommentBody = function () {
                return this.comment_body_input.value
            }, a.prototype.setCommentBody = function (a) {
                this.comment_body_input.value = a
            }, a.prototype.getCommentSize = function () {
                return this.getSelectedCommand(this.comment_size_li_list)
            }, a.prototype.getCommentPosition = function () {
                return this.getSelectedCommand(this.comment_position_li_list)
            }, a.prototype.getCommentColor = function () {
                return this.getSelectedCommand(this.comment_color_li_list)
            }, a.prototype.getSelectedCommand = function (a) {
                return a.filter(".selected").data("command") || ""
            }, a
        }();
    a.CommentPostViewImpl = e;
    var f = function () {
        function a(a) {
            this.context = a, this.COMMENT_LIST_PAGE_SIZE = 30, this.comment_select_box = jQuery("#jsCommentSelectBox"), this.comment_reload_button = document.getElementById("jsCommentReloadButton"), this.comment_list = document.getElementById("jsCommentList"), this.comment_more_view_button = document.getElementById("jsCommentMoreViewButton"), this.comment_empty = jQuery("#jsCommentEmpty"), this.comment_list_empty = jQuery("#jsCommentListEmpty"), this.comment_unloaded = jQuery("#jsCommentUnloaded"), this.context.has_owner_thread && this.comment_select_box.removeClass("hidden")
        }
        return a.prototype.initialize = function () {
            var a = this;
            this.comment_reload_button.addEventListener("click", function () {
                a.onClickReloadButton()
            }), this.comment_more_view_button.addEventListener("click", function () {
                a.onClickCommentMoreViewButton()
            }), this.context.has_owner_thread && this.comment_select_box.bind("change", function () {
                a.onChangeCommentTypeSelector()
            })
        }, a.prototype.setViewModel = function (a) {
            this.comment_list_view_model = a
        }, a.prototype.onClickReloadButton = function () {
            this.comment_list_view_model.reloadComment(!0)
        }, a.prototype.onChangeCommentTypeSelector = function () {
            this.comment_list_view_model.reloadComment(!1)
        }, a.prototype.onClickCommentMoreViewButton = function () {
            this.comment_list_view_model.loadMoreComment()
        }, a.prototype.appendCommentList = function (a) {
            for (var b = document.createDocumentFragment(), c = 0; c < a.length; c += 1) b.appendChild(this.createElement(a[c]));
            this.comment_list.appendChild(b)
        }, a.prototype.createElement = function (a) {
            var c = document.createElement("div"),
                d = document.createElement("span"),
                e = document.createElement("span");
            return c.classList.add("comment-list-item"), d.classList.add("comment-text"), d.textContent = a.body, e.classList.add("comment-time"), e.textContent = b.timeToString(Math.floor(a.vpos / 100)), c.appendChild(d), c.appendChild(e), c
        }, a.prototype.getCommentListPageSize = function () {
            return this.COMMENT_LIST_PAGE_SIZE
        }, a.prototype.enableReloadButton = function () {
            this.comment_reload_button.removeAttribute("disabled")
        }, a.prototype.disableReloadButton = function () {
            this.comment_reload_button.setAttribute("disabled", "disabled")
        }, a.prototype.showMoreViewButton = function () {
            jQuery(this.comment_more_view_button).removeClass("hidden")
        }, a.prototype.hideMoreViewButton = function () {
            jQuery(this.comment_more_view_button).addClass("hidden")
        }, a.prototype.clearCommentList = function () {
            this.comment_list.innerHTML = ""
        }, a.prototype.isOwnerThreadOnly = function () {
            return this.context.has_owner_thread && "1" === this.comment_select_box.val() ? !0 : !1
        }, a.prototype.setEmpty = function (a) {
            a ? this.comment_empty.removeClass("hidden") : this.comment_empty.addClass("hidden")
        }, a.prototype.setDisplayListEmpty = function (a) {
            a ? this.comment_list_empty.removeClass("hidden") : this.comment_list_empty.addClass("hidden")
        }, a.prototype.setCommentLoaded = function () {
            this.comment_unloaded.addClass("hidden"), this.context.has_owner_thread && this.comment_select_box.prop("disabled", !1)
        }, a
    }();
    a.CommentListViewImpl = f
}(SpwebViewWatchTabComment || (SpwebViewWatchTabComment = {}));
var SpwebViewModelWatchTabRelatedContents;
! function (a) {
    "use strict";
    var b = SpwebViewModelWatchEvent.WatchEventHandler,
        c = SpwebApiSpweb.GyokuonApi,
        d = SpwebConstants.GyokuonApiTplTypeConstants,
        e = function () {
            function a(a, b) {
                this.context = a, this.related_contents_tab_view = b, this.is_initialized = !1, this.gyokuon_api = new c(this.context.spweb_url), this.related_contents_tab_view.setViewModel(this)
            }
            return a.prototype.show = function () {
                var a = this;
                this.is_initialized || (this.is_initialized = !0, this.gyokuon_api.getVideoBasedRecommendContents({
                    video_id: this.context.video_id,
                    tpl_type: d.TAB
                }, function (b) {
                    a.related_contents_tab_view.setRelatedContents(b)
                }, function () {
                    a.related_contents_tab_view.setRelatedContents(null)
                }))
            }, a.prototype.showTagTab = function () {
                b.event("showTagTab").dispatch()
            }, a
        }();
    a.RelatedContentsTabViewModel = e
}(SpwebViewModelWatchTabRelatedContents || (SpwebViewModelWatchTabRelatedContents = {}));
var SpwebViewWatchTabRelatedContents;
! function (a) {
    "use strict";
    var b = function () {
        function a() {
            this.COUNT_PER_PAGE = 12, this.related_contents_more_view_button = jQuery("#jsRelatedContentsMoreViewButton"), this.related_contents_list = jQuery("#jsRelatedContentsList"), this.related_contents_loading_container = jQuery("#jsRelatedContentsLoadingContainer"), this.no_related_contents = jQuery("#jsNoRelatedContents"), this.search_by_tag_link = document.getElementById("jsSearchByTagLink"), this.current_page = 0
        }
        return a.prototype.setViewModel = function (a) {
            var b = this;
            this.related_contents_tab_view_model = a, this.related_contents_more_view_button.bind("click", function () {
                b.showMoreRelatedContents()
            }), this.search_by_tag_link.addEventListener("click", function (a) {
                a.preventDefault(), b.related_contents_tab_view_model.showTagTab()
            })
        }, a.prototype.setRelatedContents = function (a) {
            this.related_contents_list.append(a), this.related_contents_item_list = this.related_contents_list.find(".jsRelatedContentsListItem"), 0 === this.related_contents_item_list.length ? this.showNoRelatedContents() : (this.related_contents_item_list.addClass("hidden"), this.showMoreRelatedContents()), this.related_contents_list.removeClass("hidden"), this.related_contents_loading_container.removeClass("active")
        }, a.prototype.showNoRelatedContents = function () {
            this.no_related_contents.removeClass("hidden")
        }, a.prototype.showMoreRelatedContents = function () {
            var a = this.current_page * this.COUNT_PER_PAGE,
                b = this.related_contents_item_list.slice(a, a + this.COUNT_PER_PAGE);
            this.current_page += 1, this.related_contents_item_list.length > this.current_page * this.COUNT_PER_PAGE ? this.related_contents_more_view_button.removeClass("hidden") : this.related_contents_more_view_button.addClass("hidden"), b.removeClass("hidden")
        }, a
    }();
    a.RelatedContentsTabViewImpl = b
}(SpwebViewWatchTabRelatedContents || (SpwebViewWatchTabRelatedContents = {}));
var SpwebViewModelCommonApp;
! function () {
    "use strict"
}(SpwebViewModelCommonApp || (SpwebViewModelCommonApp = {}));
var SpwebViewModelCommonAppIOS;
! function (a) {
    "use strict";
    var b = SpwebApiSpweb.CounterApi,
        c = function () {
            function a(a, c) {
                this.context = a, this.app_launch_view = c, this.app_launch_view.setViewModel(this), this.counter_api = new b(this.context.spweb_url)
            }
            return a.prototype.launchApp = function (a) {
                var b = this;
                this.counter_api.access(a, function () {
                    window.location.href = "nicovideo://" + b.context.watch_id
                })
            }, a.prototype.goToAppStore = function () {
                window.location.href = "http://itunes.apple.com/jp/app/id307764057"
            }, a
        }();
    a.IPhoneAppLauncherViewModel = c
}(SpwebViewModelCommonAppIOS || (SpwebViewModelCommonAppIOS = {}));
var SpwebViewWatchAppIOS;
! function (a) {
    "use strict";
    var b = SpwebApiSpweb.CounterApi,
        c = SpwebConstants.CounterApiConstants,
        d = function () {
            function a(a) {
                this.context = a, this.play_app_button = document.getElementById("jsPlayApp"), this.dialog_area = jQuery("#jsAppDialog"), this.dialog_ok = document.getElementById("jsAppDialogOK"), this.dialog_cancel = document.getElementById("jsAppDialogCancel"), this.counter_api = new b(this.context.spweb_url)
            }
            return a.prototype.setViewModel = function (a) {
                var b = this;
                this.iphone_app_launcher_view_model = a, this.play_app_button.addEventListener("click", function () {
                    b.dialog_area.removeClass("hidden"), window.addEventListener("pageshow", function () {
                        b.dialog_area.addClass("hidden")
                    }), b.iphone_app_launcher_view_model.launchApp(c.CLICK_PLAY_IAPP)
                }), this.dialog_ok.addEventListener("click", function () {
                    b.dialog_area.addClass("hidden"), b.iphone_app_launcher_view_model.goToAppStore(), b.context.is_login || b.counter_api.access(c.CLICK_DL_IAPP_YES)
                }), this.dialog_cancel.addEventListener("click", function () {
                    b.dialog_area.addClass("hidden"), b.context.is_login || b.counter_api.access(c.CLICK_DL_IAPP_NO)
                })
            }, a
        }();
    a.IPhoneAppLauncherViewImpl = d
}(SpwebViewWatchAppIOS || (SpwebViewWatchAppIOS = {}));
var SpwebViewModelCommonAppAndroid;
! function (a) {
    "use strict";
    var b = SpwebApiSpweb.CounterApi,
        c = function () {
            function a(a, c) {
                this.context = a, this.app_launch_view = c, this.app_launch_view.setViewModel(this), this.counter_api = new b(this.context.spweb_url)
            }
            return a.prototype.launchApp = function (a) {
                var b = this;
                this.counter_api.access(a, function () {
                    window.location.href = "intent://watch/" + b.context.watch_id + "#Intent;scheme=nico;package=jp.nicovideo.android;end"
                })
            }, a
        }();
    a.AndroidAppLauncherViewModel = c
}(SpwebViewModelCommonAppAndroid || (SpwebViewModelCommonAppAndroid = {}));
var SpwebViewWatchAppAndroid;
! function (a) {
    "use strict";
    var b = SpwebConstants.CounterApiConstants,
        c = function () {
            function a() {
                this.play_app_button = document.getElementById("jsPlayApp")
            }
            return a.prototype.setViewModel = function (a) {
                var c = this;
                this.android_app_launcher_view_model = a, this.play_app_button.addEventListener("click", function () {
                    c.android_app_launcher_view_model.launchApp(b.CLICK_PLAY_ANDROID_APP)
                })
            }, a
        }();
    a.AndroidAppLauncherViewImpl = c
}(SpwebViewWatchAppAndroid || (SpwebViewWatchAppAndroid = {}));
var SpwebViewWatchHtml5Option;
! function (a) {
    "use strict";
    var b = SpwebApiSpweb.CounterApi,
        c = SpwebConstants.CounterApiConstants,
        d = function () {
            function a() {
                this.comment_area = jQuery("#jsPlayerComment"), this.comment_toggle_button = jQuery("#jsCommentToggle"), this.comment_toggle_button.removeClass("hidden")
            }
            return a.prototype.setViewModel = function (a) {
                var b = this;
                this.comment_display_view_model = a, this.comment_toggle_button.bind("click", function () {
                    b.comment_display_view_model.switchDisplay()
                })
            }, a.prototype.displayComment = function () {
                this.comment_toggle_button.removeClass("off"), this.comment_toggle_button.addClass("on"), this.comment_area.removeClass("invisible")
            }, a.prototype.hideComment = function () {
                this.comment_toggle_button.removeClass("on"), this.comment_toggle_button.addClass("off"), this.comment_area.addClass("invisible")
            }, a
        }();
    a.CommentDisplayViewImpl = d;
    var e = function () {
        function a() {
            this.repeat_toggle_button = jQuery("#jsRepeatToggle"), this.repeat_toggle_button.removeClass("hidden")
        }
        return a.prototype.setViewModel = function (a) {
            var b = this;
            this.repeat_view_model = a, this.repeat_toggle_button.bind("click", function () {
                b.repeat_view_model.switchRepeat()
            })
        }, a.prototype.setRepeat = function (a) {
            a ? (this.repeat_toggle_button.removeClass("off"), this.repeat_toggle_button.addClass("on")) : (this.repeat_toggle_button.removeClass("on"), this.repeat_toggle_button.addClass("off"))
        }, a
    }();
    a.RepeatViewImpl = e;
    var f = function () {
        function a(a) {
            this.view_quality_toggle_button = jQuery("#jsQualityToggle"), this.is_high_quality = !0, this.counter_api = new b(a.spweb_url)
        }
        return a.prototype.setViewModel = function (a) {
            var b = this;
            this.video_quality_view_model = a, this.view_quality_toggle_button.bind("click", function () {
                b.counter_api.access(b.is_high_quality ? c.CLICK_HQ_OPTION_TO_LOW : c.CLICK_HQ_OPTION_TO_HIGH), b.video_quality_view_model.switchVideoQuality()
            })
        }, a.prototype.setHighQuality = function (a) {
            this.is_high_quality = a, this.is_high_quality ? (this.view_quality_toggle_button.removeClass("off"), this.view_quality_toggle_button.addClass("on")) : (this.view_quality_toggle_button.removeClass("on"), this.view_quality_toggle_button.addClass("off"))
        }, a
    }();
    a.VideoQualityViewImpl = f
}(SpwebViewWatchHtml5Option || (SpwebViewWatchHtml5Option = {}));
var SpwebViewWatchContents;
! function (a) {
    "use strict";
    var b = function () {
        function a() {
            this.SLIDE_TOP_AMOUNT = -200, this.tab_contents_container = document.getElementById("jsTabContentsContainer"), this.player_guide_layout_container = document.getElementById("jsPlayerGuideLayoutContainer"), this.valid_player_layout_padding_top = null, this.slide_top = !1, this.show_player_only = !1
        }
        return a.prototype.setLayout = function (a, b) {
            this.show_player_only = a, this.setTop(b)
        }, a.prototype.clearTop = function () {
            this.player_guide_layout_container.style.top = "0", this.tab_contents_container.style.paddingTop = ""
        }, a.prototype.slideTop = function () {
            this.slide_top = !0, this.setTop(!1)
        }, a.prototype.unslideTop = function () {
            this.slide_top = !1, this.setTop(!1)
        }, a.prototype.setTop = function (a) {
            return this.show_player_only ? void this.clearTop() : (this.player_guide_layout_container.style.top = this.slide_top ? this.SLIDE_TOP_AMOUNT + "px" : "0", void(this.tab_contents_container.style.paddingTop = this.getPlayerLayoutPaddingTop(a) + "px"))
        }, a.prototype.getPlayerLayoutPaddingTop = function (a) {
            var b;
            return null === this.valid_player_layout_padding_top ? (b = this.player_guide_layout_container.offsetHeight, a && (this.valid_player_layout_padding_top = b)) : b = this.valid_player_layout_padding_top, this.slide_top && (b += this.SLIDE_TOP_AMOUNT), b
        }, a
    }();
    a.ContentsContainerViewImpl = b
}(SpwebViewWatchContents || (SpwebViewWatchContents = {}));
var SpwebApiMessageserver;
! function (a) {
    "use strict";
    var b = SpwebModelComment.Thread,
        c = SpwebModelComment.Count,
        d = SpwebModelComment.Comment,
        e = SpwebConstants.CommentConstants,
        f = SpwebUtil.Util,
        g = function () {
            function a(a) {
                this.message_server_url = a
            }
            return a.prototype.getThread = function (a, b, c, d) {
                jQuery.ajax({
                    url: this.message_server_url,
                    type: "POST",
                    xhrFields: {
                        withCredentials: !1
                    },
                    data: this.createXmlQuery(a),
                    dataType: "xml",
                    success: function (a) {
                        c(l.parse(a, b))
                    },
                    error: function () {
                        d()
                    }
                })
            }, a.prototype.postComment = function (a, b, c) {
                jQuery.ajax({
                    url: this.message_server_url + "chat",
                    type: "GET",
                    xhrFields: {
                        withCredentials: !1
                    },
                    data: a,
                    dataType: "xml",
                    success: function (a) {
                        var d = j.parse(a);
                        d ? b(d) : c()
                    },
                    error: function () {
                        c()
                    }
                })
            }, a.prototype.createXmlQuery = function (a) {
                var b = "<packet>";
                return a.forEach(function (a) {
                    b += '<thread thread="' + a.thread_id + '" version="' + a.version + '" res_from="' + a.res_from + '" fork="' + a.fork, a.user_id && (b += '" user_id="' + a.user_id), a.threadkey && (b += '" threadkey="' + a.threadkey), a.force_184 && (b += '" force_184="' + a.force_184), b += '"/>'
                }), b += "</packet>"
            }, a
        }();
    a.MessageServerApi = g;
    var h = function () {
        function a(a, b, c, d, e, f, g) {
            this.thread_id = a, this.res_from = b, this.version = c, this.user_id = d, this.threadkey = e, this.force_184 = f, this.fork = g
        }
        return a
    }();
    a.GetThreadRequest = h;
    var i = function () {
        function a(a, b) {
            this.status = a, this.comment_no = b
        }
        return a
    }();
    a.PostCommentResponse = i;
    var j;
    ! function (a) {
        function b(a) {
            var b, c, d;
            return a ? (b = a.firstChild, b && "packet" === b.nodeName ? (c = b.firstChild, c && "chat_result" === c.nodeName ? (d = c.getAttribute("status") || "", new i(d, Number(c.getAttribute("no")))) : null) : null) : null
        }
        a.parse = b
    }(j || (j = {})),
    function (a) {
        function d(a, b) {
            for (var c = f.nodeListToNodeArray(a.firstChild.childNodes), d = []; c.length > 0;) "thread" === c[0].nodeName ? d.push(e(c, b)) : c.shift();
            return d
        }

        function e(a, d) {
            var e, f, g, h, i, j, l, m, n = [],
                o = !1;
            if (j = a.shift(), h = Number(j.attributes.resultcode.nodeValue), 0 === h)
                for (e = Number(j.attributes.thread.nodeValue), f = null != j.attributes.last_res ? Number(j.attributes.last_res.nodeValue) : 0, g = j.attributes.ticket.nodeValue, o = j.attributes.fork && "1" === j.attributes.fork.nodeValue; a.length > 0 && "thread" !== a[0].nodeName;) switch (l = a.shift(), l.nodeName) {
                case "chat":
                    d && (m = k.parse(l), m.isNiwango() || m.isNicoScript() || 0 !== m.deleted || n.push(m));
                    break;
                case "view_counter":
                    i = new c(Number(l.attributes.video.nodeValue), Number(l.attributes.mylist ? l.attributes.mylist.nodeValue : 0))
                }
            return new b(e, h, f, g, n, i, o)
        }
        a.parse = d
    }(a.ThreadApiParser || (a.ThreadApiParser = {}));
    var k, l = a.ThreadApiParser;
    ! function (a) {
        function b(a) {
            var b = Number(a.attributes.no.nodeValue),
                e = a.attributes.mail ? a.attributes.mail.nodeValue.split(/\s+/) : [],
                i = Number(a.attributes.vpos.nodeValue),
                j = a.firstChild ? a.firstChild.nodeValue : "",
                k = a.attributes.premium ? "1" === a.attributes.premium.nodeValue : !1,
                l = a.attributes.deleted ? Number(a.attributes.deleted.nodeValue) : 0;
            return new d(b, i, j, c(e, k), f(e), g(e), h(e), !1, l)
        }

        function c(a, b) {
            var c, d = 0,
                f = a.length,
                g = /^#[0-9a-f]{6}$/i;
            for (c in e.color)
                if (-1 !== a.indexOf(c)) return c;
            if (b) {
                for (; f > d; d++)
                    if (a[d].match(g)) return a[d];
                for (c in e.premiumColor)
                    if (-1 !== a.indexOf(c)) return c
            }
            return ""
        }

        function f(a) {
            return -1 !== a.indexOf("big") ? "big" : -1 !== a.indexOf("small") ? "small" : -1 !== a.indexOf("medium") ? "medium" : ""
        }

        function g(a) {
            return -1 !== a.indexOf(e.position.bottom) ? e.position.bottom : -1 !== a.indexOf(e.position.top) ? e.position.top : -1 !== a.indexOf(e.position.center) ? e.position.center : ""
        }

        function h(a) {
            return a.indexOf("184") >= 0
        }
        a.parse = b
    }(k || (k = {}))
}(SpwebApiMessageserver || (SpwebApiMessageserver = {}));
var SpwebModelCommentTask;
! function (a) {
    "use strict";
    var b = SpwebUtil.DeviceJudgement,
        c = SpwebApiMessageserver.GetThreadRequest;
    ! function (a) {
        function b(a, b, c, e, f, g, h, i, j, k, l) {
            a.getThread(d(b, c, e, f, g, h), i, function (a) {
                var b = a.filter(function (a) {
                    return !a.is_owner_thread
                })[0];
                switch (b.result_code) {
                case 0:
                    j(a);
                    break;
                case 9:
                    k();
                    break;
                default:
                    l()
                }
            }, function () {
                l()
            })
        }

        function d(a, b, c, d, f, g) {
            var h = [];
            return h.push(e(a, d, f, g, !1)), b && h.push(e(c, null, "", "", !0)), h
        }

        function e(a, b, d, e, f) {
            return new c(a, -500, "20061206", b, d, e, f ? "1" : "0")
        }
        a.invoke = b
    }(a.GetThreadTask || (a.GetThreadTask = {}));
    a.GetThreadTask;
    ! function (a) {
        function b(a, b, c, d) {
            a.getThreadkey({
                thread: b
            }, c, d)
        }
        a.invoke = b
    }(a.GetThreadKeyTask || (a.GetThreadKeyTask = {}));
    a.GetThreadKeyTask;
    ! function (a) {
        function b(a, b, c, d, e, f, g, h, i, j) {
            a.postComment({
                thread: b.id,
                vpos: d.vpos,
                mail: d.asMailString(),
                body: d.body,
                user_id: e,
                ticket: b.ticket,
                postkey: c,
                premium: f ? 1 : 0
            }, function (a) {
                switch (a.status) {
                case "0":
                    b.last_res += 1, d.no = b.last_res, g(d);
                    break;
                case "3":
                    i();
                    break;
                case "4":
                    h();
                    break;
                default:
                    j()
                }
            }, j)
        }
        a.invoke = b
    }(a.PostCommentTask || (a.PostCommentTask = {}));
    a.PostCommentTask;
    ! function (a) {
        function c(a, b, c, e) {
            var f = d(),
                g = Math.floor((b.last_res + 1) / 100);
            a.getPostkey({
                thread: b.id,
                block_no: g,
                device: f.id,
                device_sub: f.sub,
                version: 2
            }, function (a) {
                a.postkey ? c(a.postkey) : e()
            }, e)
        }

        function d() {
            var a, c;
            return b.is_iOS() ? (a = 3, c = b.is_iPhone() ? 1 : b.is_iPod() ? 2 : b.is_iPad() ? 3 : 0) : b.isAndroid() ? (a = 4, c = 0) : (a = 1, c = 0), {
                id: a,
                sub: c
            }
        }
        a.invoke = c
    }(a.GetPostKeyTask || (a.GetPostKeyTask = {}));
    a.GetPostKeyTask
}(SpwebModelCommentTask || (SpwebModelCommentTask = {}));
var SpwebModelCommentService;
! function (a) {
    "use strict";
    var b = SpwebApiFlapi.Flapi,
        c = SpwebApiMessageserver.MessageServerApi,
        d = SpwebModelCommentEvent.CommentEventHandler,
        e = SpwebModelCommentTask.GetThreadTask,
        f = SpwebModelCommentTask.GetThreadKeyTask,
        g = SpwebModelCommentTask.PostCommentTask,
        h = SpwebModelCommentTask.GetPostKeyTask,
        i = SpwebModelVideoEvent.VideoEventHandler,
        j = function () {
            function a(a) {
                var c = this;
                this.is_processing = !1, this.flapi = new b(a.flapi_url), this.is_premium = a.is_premium, i.event("onGetFlvSuccess").listen(function (a) {
                    c.initialize(a.getflv_response)
                }), d.event("getThread").listen(function (a) {
                    c.getThread(a.thread_id, a.has_owner_thread, a.default_thread_id)
                }), d.event("postComment").listen(function (a) {
                    c.postComment(a.thread, a.comment)
                })
            }
            return a.prototype.initialize = function (a) {
                this.needs_key = a.needs_key, this.message_server_api = new c(a.message_server_url), this.user_id = a.user_id
            }, a.prototype.getThread = function (a, b, c) {
                var e = this;
                this.is_processing && alert("しばらく待ってから再度操作してください。"), this.is_processing = !0, d.event("onGetThreadStart").dispatch(), this._getThread(a, b, c, !0, 0, function (a) {
                    e.onGetThreadSuccess(a)
                }, function () {
                    e.onGetThreadError()
                })
            }, a.prototype.postComment = function (a, b) {
                var c = this;
                this.is_processing && alert("しばらく待ってから再度操作してください。"), this.is_processing = !0, d.event("onPostCommentStart").dispatch(), this._postComment(a, b, 0, 0, function (a) {
                    c.onPostCommentSuccess(a)
                }, function () {
                    c.onPostCommentError()
                })
            }, a.prototype._getThread = function (a, b, c, d, g, h, i) {
                var j = this;
                return this.needs_key && !this.threadkey ? void f.invoke(this.flapi, a, function (e) {
                    j.onGetThreadKeySuccessContinue(e, a, b, c, d, g, h, i)
                }, i) : void e.invoke(this.message_server_api, a, b, c, this.user_id, this.threadkey, this.force_184, d, h, function () {
                    j.onTooOldThreadKey(a, b, c, d, g, h, i)
                }, i)
            }, a.prototype._postComment = function (a, b, c, d, e, f) {
                var i = this;
                return this.postkey ? void g.invoke(this.message_server_api, a, this.postkey, b, this.user_id, this.is_premium, e, function () {
                    i.onTooOldTicket(a, b, c, d, e, f)
                }, function () {
                    i.onTooOldPostKey(a, b, c, d, e, f)
                }, f) : void h.invoke(this.flapi, a, function (g) {
                    i.onGetPostKeySuccessContinue(g, a, b, c, d, e, f)
                }, f)
            }, a.prototype.onGetThreadSuccess = function (a) {
                this.is_processing = !1, d.event("onGetThreadSuccess").dispatch(a)
            }, a.prototype.onGetThreadSuccessContinue = function (a, b, c, d, e, f, g) {
                b.ticket = a, this._postComment(b, c, d, e, f, g)
            }, a.prototype.onGetThreadError = function () {
                this.is_processing = !1, d.event("onGetThreadError").dispatch(), alert("コメントの取得に失敗しました。")
            }, a.prototype.onPostCommentSuccess = function (a) {
                this.is_processing = !1, d.event("onPostCommentSuccess").dispatch(a)
            }, a.prototype.onPostCommentError = function () {
                this.is_processing = !1, d.event("onPostCommentError").dispatch(), alert("コメントの投稿に失敗しました。")
            }, a.prototype.onGetThreadKeySuccessContinue = function (a, b, c, d, e, f, g, h) {
                return a.threadkey ? (this.threadkey = a.threadkey, this.force_184 = a.force_184, void this._getThread(b, c, d, e, f, g, h)) : void h()
            }, a.prototype.onGetPostKeySuccessContinue = function (a, b, c, d, e, f, g) {
                this.postkey = a, this._postComment(b, c, d, e, f, g)
            }, a.prototype.onTooOldThreadKey = function (a, b, c, d, e, f, g) {
                e > 0 && g(), this.threadkey = null, this.force_184 = null, e += 1, this._getThread(a, b, c, d, e, f, g)
            }, a.prototype.onTooOldTicket = function (a, b, c, d, e, f) {
                var g = this;
                c > 0 && f(), c += 1, this._getThread(a.id, !1, null, !1, 0, function (h) {
                    g.onGetThreadSuccessContinue(h[0].ticket, a, b, c, d, e, f)
                }, f)
            }, a.prototype.onTooOldPostKey = function (a, b, c, d, e, f) {
                d > 0 && f(), this.postkey = null, d += 1, this._postComment(a, b, c, d, e, f)
            }, a
        }();
    a.CommentService = j
}(SpwebModelCommentService || (SpwebModelCommentService = {}));
var SpwebModelWatchlog;
! function (a) {
    "use strict";

    function b() {}

    function c() {}

    function d() {
        return Math.round(+new Date / 1e3)
    }
    var e = SpwebApiFlapi.Flapi,
        f = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler,
        g = SpwebUtil.DeviceJudgement,
        h = 86400,
        i = 7200,
        j = 1800,
        k = 1800,
        l = 30,
        m = 3e4,
        n = function () {
            function a(a) {
                this.watch_log_time_id = -1, this.repository = new s, this.timer = new q, this.data_manager = new o(a), this.logger = new p(a.flapi_url), this.initialize()
            }
            return a.prototype.initialize = function () {
                var a = this;
                f.event("launchPlayer").listen(function () {
                    a.startLog(), document.addEventListener("click", function () {
                        a.onControlCallback()
                    }), window.addEventListener("unload", function () {
                        a.onFinishCallback()
                    }), window.addEventListener("focus", function () {
                        a.onComebackCallback()
                    }), window.addEventListener("blur", function () {
                        a.onBreakCallback()
                    })
                })
            }, a.prototype.intervalLog = function () {
                var a, b, c = !1,
                    e = 0,
                    f = 0,
                    g = null;
                if (this.timer.increment(), this.timer.isPlayEnd() && (c = !0, this.clearInterval()), a = this.repository.get(), a.isEmpty()) return void this.clearInterval();
                if (g = this.data_manager.findIndex(a), null !== g) {
                    if (e = f = d(), b = a.getDataByIndex(g), c) return b.eTime = f, this.logger.send(b), a.deleteDataByIndex(g), this.repository.set(a), void this.clearInterval();
                    null != b.eTime && f - b.eTime >= k && (c = !0, e = b.eTime + k, this.clearInterval()), a.replaceDataByIndex(g, this.data_manager.createSendData(c, b.sTime, e)), this.repository.set(a)
                }
            }, a.prototype.startLog = function () {
                var a = this.repository.get(),
                    b = d();
                this.sendLogBySendFlag(a), a.filterSentData(b), a.push(this.data_manager.createSendData(!1, b, null)), this.repository.set(a), this.setInterval()
            }, a.prototype.sendLogBySendFlag = function (a) {
                var b = a.getSendArray();
                b.length > 0 && this.logger.sendList(b)
            }, a.prototype.onControlCallback = function () {
                var a, b = this.repository.get(),
                    c = null,
                    e = d();
                return this.timer.reset(), c = this.data_manager.findIndex(b), null === c ? (b.push(this.data_manager.createSendData(!1, e, null)), this.repository.set(b), void this.setInterval()) : (a = b.getDataByIndex(c), !a.sendFlg && (null == a.eTime || e - a.eTime < k) ? (b.replaceDataByIndex(c, this.data_manager.createSendData(!1, a.sTime, e)), void this.repository.set(b)) : (a.eTime - a.sTime >= 30 && (a.eTime += k, this.logger.send(a)), b.replaceDataByIndex(c, this.data_manager.createSendData(!1, e, null)), this.repository.set(b), void this.setInterval()))
            }, a.prototype.onComebackCallback = function () {
                var a, b, c, e = this.repository.get();
                e.isEmpty() || (a = this.data_manager.findIndex(e), null !== a && (b = d(), c = e.getDataByIndex(a), c.sendFlg || null != c.eTime && b - c.eTime >= k ? (c.eTime - c.sTime >= 30 && (c.eTime += k, this.logger.send(c)), e.replaceDataByIndex(a, this.data_manager.createSendData(!1, b, null))) : e.replaceDataByIndex(a, this.data_manager.createSendData(!1, c.sTime, b)), this.repository.set(e), this.timer.reset(), this.setInterval()))
            }, a.prototype.onBreakCallback = function () {
                var a, b, c = this.repository.get(),
                    e = null;
                if (!c.isEmpty()) {
                    if (e = this.data_manager.findIndex(c), null === e) return void this.clearInterval();
                    b = c.getDataByIndex(e), b.sendFlg || (a = d(), a - b.sTime >= 30 ? (null != b.eTime && a - b.eTime >= k && (a = b.eTime), c.replaceDataByIndex(e, this.data_manager.createSendData(!1, b.sTime, a))) : c.deleteDataByIndex(e), this.repository.set(c), this.clearInterval())
                }
            }, a.prototype.onFinishCallback = function () {
                var a, b, c, e = this.repository.get();
                e.isEmpty() || (a = this.data_manager.findIndex(e), null !== a && (b = d(), c = e.getDataByIndex(a), null != c.eTime && c.eTime - c.sTime >= 30 ? (b - c.eTime >= k && (b = c.eTime + k), c.sendFlg || e.replaceDataByIndex(a, this.data_manager.createSendData(!0, c.sTime, b))) : e.deleteDataByIndex(a), this.repository.set(e)))
            }, a.prototype.setInterval = function () {
                var a = this;
                this.clearInterval(), this.watch_log_time_id = setInterval(function () {
                    a.intervalLog()
                }, m)
            }, a.prototype.clearInterval = function () {
                this.watch_log_time_id >= 0 && (clearInterval(this.watch_log_time_id), this.watch_log_time_id = -1)
            }, a
        }();
    a.Watchlog = n;
    var o = function () {
            function a(a) {
                this.watch_id = a.watch_id, this.dummy_id = a.csrf_token.substr(-8, 8)
            }
            return a.prototype.findIndex = function (a) {
                return a.findIndex(this.watch_id, this.dummy_id)
            }, a.prototype.createSendData = function (a, b, c) {
                return new u(this.watch_id, this.dummy_id, a, b, c)
            }, a
        }(),
        p = function () {
            function a(a) {
                this.flapi = new e(a)
            }
            return a.prototype.send = function (a) {
                this.flapi.playlen(new r(a.vid, a.sTime, a.eTime), b, c)
            }, a.prototype.sendList = function (a) {
                var b = 0;
                for (b; b < a.length; b++) this.send(a[b])
            }, a
        }(),
        q = function () {
            function a() {
                var a = this;
                this.play_no_ope = 0, this.pause_no_ope = 0, this.is_playing = !1, f.event("videoPlay").listen(function () {
                    a.is_playing = !0
                }), f.event("videoPause").listen(function () {
                    a.is_playing = !1
                })
            }
            return a.prototype.reset = function () {
                this.play_no_ope = 0, this.pause_no_ope = 0
            }, a.prototype.increment = function () {
                this.is_playing ? this.play_no_ope += l : this.pause_no_ope += l
            }, a.prototype.isPlayEnd = function () {
                return this.play_no_ope >= i || this.pause_no_ope >= j
            }, a
        }(),
        r = function () {
            function a(a, b, c) {
                this.v = a, this.s = b, this.e = c, this.is_sp = 1, this.sp_player = "html5", this.sp_os = "other", g.isAndroid() ? this.sp_os = "android" : g.is_iOS() && (this.sp_os = "ios")
            }
            return a
        }(),
        s = function () {
            function a() {
                this.ls_key = "marku_watch"
            }
            return a.prototype.get = function () {
                var a = localStorage.getItem(this.ls_key),
                    b = null;
                return null != a && a.length > 0 && (b = JSON.parse(a)), new t(b)
            }, a.prototype.set = function (a) {
                a.isEmpty() ? localStorage.removeItem(this.ls_key) : localStorage.setItem(this.ls_key, a.getJson())
            }, a
        }(),
        t = function () {
            function a(a) {
                this.data = a, null === this.data && (this.data = [])
            }
            return a.prototype.isEmpty = function () {
                return 0 === this.data.length
            }, a.prototype.getJson = function () {
                return JSON.stringify(this.data)
            }, a.prototype.getSendArray = function () {
                return this.data.filter(function (a) {
                    return a.sendFlg
                })
            }, a.prototype.filterSentData = function (a) {
                this.data = this.data.filter(function (b) {
                    return !b.sendFlg && null != b.eTime && b.eTime - b.sTime > 0 && a - b.eTime < h
                })
            }, a.prototype.push = function (a) {
                this.data.push(a)
            }, a.prototype.findIndex = function (a, b) {
                var c = 0,
                    d = 0;
                for (c = 0, d = this.data.length; d > c; c++)
                    if (this.data[c].vid === a && this.data[c].dummyId === b) return c;
                return null
            }, a.prototype.getDataByIndex = function (a) {
                return this.data[a]
            }, a.prototype.replaceDataByIndex = function (a, b) {
                this.data.splice(a, 1, b)
            }, a.prototype.deleteDataByIndex = function (a) {
                this.data.splice(a, 1)
            }, a
        }(),
        u = function () {
            function a(a, b, c, d, e) {
                this.vid = a, this.dummyId = b, this.sendFlg = c, this.sTime = d, this.eTime = e
            }
            return a
        }()
}(SpwebModelWatchlog || (SpwebModelWatchlog = {}));
var SpwebViewModelWatchHtml5Message;
! function (a) {
    "use strict";
    var b = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler,
        c = 1e4,
        d = function () {
            function a(a) {
                var c = this;
                this.message_view = a, b.event("showMessage").listen(function (a) {
                    c.showMessage(a)
                }), b.event("hideMessage").listen(function () {
                    c.message_view.hideMessage()
                })
            }
            return a.prototype.showMessage = function (a) {
                var b = this;
                this.timer && clearTimeout(this.timer), this.message_view.showMessage(a.message, a.sub_message, a.show_premium_link), a.hide_automatically && (this.timer = setTimeout(function () {
                    b.message_view.hideMessage()
                }, c))
            }, a
        }();
    a.MessageViewModel = d
}(SpwebViewModelWatchHtml5Message || (SpwebViewModelWatchHtml5Message = {}));
var SpwebViewWatchHtml5Message;
! function (a) {
    "use strict";
    var b = function () {
        function a() {
            this.player_message = jQuery("#jsPlayerMessage"), this.player_message_text = jQuery("#jsPlayerMessageText"), this.player_sub_message_text = jQuery("#jsPlayerSubMessageText"), this.premium_link = jQuery("#jsPlayerMessagePremiumLink")
        }
        return a.prototype.showMessage = function (a, b, c) {
            "undefined" == typeof b && (b = ""), "undefined" == typeof c && (c = !1), this.player_message_text.text(a), this.player_sub_message_text.text(b), c ? this.premium_link.removeClass("hidden") : this.premium_link.addClass("hidden"), this.player_message.removeClass("hidden")
        }, a.prototype.hideMessage = function () {
            this.player_message.addClass("hidden")
        }, a
    }();
    a.MessageViewImpl = b
}(SpwebViewWatchHtml5Message || (SpwebViewWatchHtml5Message = {}));
var SpwebViewModelFavorite;
! function (a) {
    "use strict";
    var b = SpwebApiSpweb.FavApi,
        c = SpwebApiSpweb.FavoriteUser,
        d = SpwebApiSpweb.FavoriteChannel,
        e = function () {
            function a(a, e) {
                this.context = a, this.view = e, this.is_processed = !1, this.is_favorited = null, this.api = new b(this.context.spweb_url, this.context.csrf_token), this.favorite = this.context.is_channel ? new d(this.context.video_author_id) : new c(this.context.video_author_id), this.view.setViewModel(this), this.initialize()
            }
            return a.prototype.toggleFavorite = function () {
                var a = this;
                null !== this.is_favorited && (this.is_processed || (this.is_processed = !0, this.is_favorited ? this.api.del(this.favorite, function () {
                    a.onDeleted()
                }, function (b) {
                    a.onError(b)
                }) : this.api.add(this.favorite, function () {
                    a.onAdded()
                }, function (b) {
                    a.onError(b)
                })))
            }, a.prototype.initialize = function () {
                var a = this;
                this.api.exist(this.favorite, function (b) {
                    a.onExist(b)
                }, function (b) {
                    a.onError(b)
                })
            }, a.prototype.onAdded = function () {
                this.view.disable(), this.view.alertAddFavorite()
            }, a.prototype.onDeleted = function () {
                this.view.disable(), this.view.alertDeleteFavorite()
            }, a.prototype.onExist = function (a) {
                this.is_favorited = a, this.is_favorited ? this.view.showDeleteMessage() : this.view.showAddMessage()
            }, a.prototype.onError = function (a) {
                switch (a) {
                    default: this.view.showErrorMessage()
                }
                this.view.disable()
            }, a
        }();
    a.FavoriteViewModel = e
}(SpwebViewModelFavorite || (SpwebViewModelFavorite = {}));
var SpwebViewFavorite;
! function (a) {
    var b = {
            add: "お気に入り登録",
            "delete": "お気に入り解除",
            error: "お気に入り状態の取得に失敗しました"
        },
        c = {
            add: "お気に入りを追加しました。",
            "delete": "お気に入りを削除しました。"
        },
        d = function () {
            function a() {
                this.button = jQuery("#jsFavorite")
            }
            return a.prototype.setViewModel = function (a) {
                var b = this;
                this.view_model = a, this.button.click(function () {
                    b.view_model.toggleFavorite()
                })
            }, a.prototype.disable = function () {
                this.button.addClass("disable")
            }, a.prototype.showAddMessage = function () {
                this.button.text(b.add)
            }, a.prototype.showDeleteMessage = function () {
                this.button.text(b["delete"])
            }, a.prototype.showErrorMessage = function () {
                this.button.text(b.error)
            }, a.prototype.alertAddFavorite = function () {
                alert(c.add)
            }, a.prototype.alertDeleteFavorite = function () {
                alert(c["delete"])
            }, a
        }();
    a.FavoriteViewImpl = d
}(SpwebViewFavorite || (SpwebViewFavorite = {}));
var SpwebViewModelMylist;
! function (a) {
    "use strict";

    function b(a) {
        var b = "マイリストに登録できませんでした。";
        switch (a) {
        case "MAXERROR":
            b = "これ以上登録できません。";
            break;
        case "EXIST":
            b = "このマイリストに既に登録されています。";
            break;
        case "NON_EXIST":
            b = "マイリストがありません"
        }
        return b
    } {
        var c = SpwebApiSpweb.MylistApi,
            d = SpwebApiSpweb.DeflistApi,
            e = SpwebApiSpweb.MylistgroupApi,
            f = SpwebModelMylist.MylistImpl,
            g = SpwebModelMylist.DeflistImpl,
            h = SpwebModelMylist.MylistgroupImpl;
        SpwebModelMylist.MylistItemType
    }
    a.getAddMylistErrorMessage = b;
    var i = function () {
        function a(a, b) {
            this.context = a, this.deflist_view = b, this.is_processing = !1, this.deflist_api = new d(this.context.spweb_url, this.context.csrf_token), this.deflist_view.setViewModel(this)
        }
        return a.prototype.addDeflist = function () {
            var a = this;
            this.is_processing || (this.is_processing = !0, this.deflist_api.add(new g(String(this.context.thread_id), 0, this.deflist_view.getMylistComment()), function () {
                a.addMylistSuccess()
            }, function (b) {
                a.addMylistError(b)
            }))
        }, a.prototype.addMylistSuccess = function () {
            alert("マイリストに登録しました。"), this.is_processing = !1
        }, a.prototype.addMylistError = function (a) {
            alert(b(a)), this.is_processing = !1
        }, a
    }();
    a.DeflistViewModel = i;
    var j = function () {
        function a(a, b, d) {
            this.context = a, this.mylistgroup_add_view_model = b, this.mylist_view = d, this.DEFAULT_MYLISTGROUP_NAME_PREFIX = "新しいマイリスト", this.next_index_for_default_mylistgroup_name = 1, this.is_processing = !1, this.is_visible = !1, this.mylistgroup_list = [], this.is_mylistgroup_list_initialized = !1, this.mylist_api = new c(this.context.spweb_url, this.context.csrf_token), this.mylistgroup_api = new e(this.context.spweb_url, this.context.csrf_token), this.mylist_view.setViewModel(this)
        }
        return a.prototype.addMylist = function () {
            var a, b = this;
            this.is_processing || (a = this.mylist_view.getSelectedMylistgroupId(), null !== a && (this.is_processing = !0, this.mylist_api.add(new f(a, String(this.context.thread_id), 0, this.mylist_view.getMylistComment()), function () {
                b.addMylistSuccess()
            }, function (a) {
                b.addMylistError(a)
            })))
        }, a.prototype.toggleVisiblity = function () {
            this.is_visible = !this.is_visible, this.is_visible ? this.is_mylistgroup_list_initialized ? this.mylist_view.show() : this.fetchMylistgroupList() : this.mylist_view.hide()
        }, a.prototype.startCreateNewMylistgroup = function () {
            var a = this;
            this.mylistgroup_add_view_model.isInitialized() || this.mylistgroup_add_view_model.initialize(function (b) {
                a.addMylistgroup(b)
            }, function () {
                a.cancelAddMylistgroup()
            }), this.mylistgroup_add_view_model.show(this.getDefaultMylistgroupName())
        }, a.prototype.fetchMylistgroupList = function () {
            var a = this;
            this.mylistgroup_api.list(function (b) {
                a.listSuccess(b)
            }, function () {
                a.listError()
            })
        }, a.prototype.addMylistSuccess = function () {
            alert("マイリストに登録しました。"), this.is_processing = !1, this.mylist_view.hide()
        }, a.prototype.addMylistError = function (a) {
            alert(b(a)), this.is_processing = !1
        }, a.prototype.addMylistgroup = function (a) {
            this.mylistgroup_list.unshift(a), this.mylist_view.addToMylistgroupList(a), this.mylist_view.selectMylistgroup(a.id)
        }, a.prototype.cancelAddMylistgroup = function () {
            this.mylist_view.deselectMylistgroup()
        }, a.prototype.getDefaultMylistgroupName = function () {
            var a = this.DEFAULT_MYLISTGROUP_NAME_PREFIX + "(" + this.next_index_for_default_mylistgroup_name + ")";
            return this.isMylistgroupNameExist(a) ? (this.next_index_for_default_mylistgroup_name += 1, this.getDefaultMylistgroupName()) : a
        }, a.prototype.isMylistgroupNameExist = function (a) {
            return this.mylistgroup_list.some(function (b) {
                return b.name === a
            })
        }, a.prototype.listSuccess = function (a) {
            this.mylistgroup_list = a, this.is_mylistgroup_list_initialized = !0, this.mylist_view.updateMylistgroupList(this.mylistgroup_list), this.mylist_view.show()
        }, a.prototype.listError = function () {
            alert("マイリスト一覧の取得に失敗しました。")
        }, a
    }();
    a.MylistViewModel = j;
    var k = function () {
        function a(a, b) {
            this.context = a, this.mylistgroup_add_view = b, this.is_processing = !1, this.is_initialized = !1, this.mylistgroup_api = new e(this.context.spweb_url, this.context.csrf_token), this.mylistgroup_add_view.setViewModel(this)
        }
        return a.prototype.initialize = function (a, b) {
            this.is_initialized = !0, this.addMylistgroupCallback = a, this.cancelAddMylistgroupCallback = b
        }, a.prototype.isInitialized = function () {
            return this.is_initialized
        }, a.prototype.addMylistgroup = function () {
            var a, b = this;
            this.is_processing || (this.is_processing = !0, a = new h(-1, this.mylistgroup_add_view.getNewMylistgroupTitle(), this.mylistgroup_add_view.getNewMylistgroupDescription(), this.mylistgroup_add_view.isNewMylistgroupPublic(), this.mylistgroup_add_view.getNewMylistgroupDefaultSort(), this.mylistgroup_add_view.getNewMylistgroupIconId()), this.mylistgroup_api.add(a, function (c) {
                a.id = c, b.addMylistgroupSuccess(a)
            }, function (a) {
                b.addMylistgroupError(a)
            }))
        }, a.prototype.cancelAddMylistgroup = function () {
            this.cancelAddMylistgroupCallback && this.cancelAddMylistgroupCallback(), this.mylistgroup_add_view.hide()
        }, a.prototype.show = function (a) {
            this.mylistgroup_add_view.show(a)
        }, a.prototype.addMylistgroupSuccess = function (a) {
            alert("マイリストを新規作成しました"), this.addMylistgroupCallback && this.addMylistgroupCallback(a), this.mylistgroup_add_view.hide(), this.is_processing = !1
        }, a.prototype.addMylistgroupError = function (a) {
            switch (a) {
            case "MAXERROR":
                alert("これ以上マイリストの新規作成ができません。");
                break;
            case "TOO_LONG_NAME":
                alert("タイトルが長すぎます。");
                break;
            case "TOO_LONG_DESCRIPTION":
                alert("説明文が長すぎます。");
                break;
            default:
                alert("マイリストの新規作成ができませんでした。")
            }
            this.is_processing = !1
        }, a
    }();
    a.MylistgroupAddViewModel = k
}(SpwebViewModelMylist || (SpwebViewModelMylist = {}));
var SpwebViewWatchMylist;
! function (a) {
    "use strict";
    var b = (SpwebModelMylist.MylistgroupDefaultSort, SpwebModelMylist.MylistgroupIconId, function () {
        function a() {
            this.mylist_add_area = jQuery("#jsMylistAddArea"), this.add_deflist_button = jQuery("#jsAddDeflistButton")
        }
        return a.prototype.setViewModel = function (a) {
            var b = this;
            this.deflist_view_model = a, this.add_deflist_button.bind("click", function () {
                b.deflist_view_model.addDeflist()
            }), this.mylist_add_area.removeClass("hidden")
        }, a.prototype.getMylistComment = function () {
            return ""
        }, a
    }());
    a.DeflistViewImpl = b;
    var c = function () {
        function a() {
            this.add_mylist_container = jQuery("#jsAddMylistContainer"), this.add_mylist_button = jQuery("#jsAddMylistButton"), this.mylistgroup_selector_toggle = jQuery("#jsMylistgroupSelectorToggle"), this.mylistgroup_selector = document.getElementById("jsMylistgroupSelector"), this.mylistgroup_selector_options = this.mylistgroup_selector.children, this.please_select_option = this.mylistgroup_selector_options[0], this.create_new_option = this.mylistgroup_selector_options[1]
        }
        return a.prototype.setViewModel = function (a) {
            var b = this;
            this.mylist_view_model = a, this.add_mylist_button.bind("click", function () {
                b.mylist_view_model.addMylist()
            }), this.mylistgroup_selector_toggle.bind("click", function () {
                b.mylist_view_model.toggleVisiblity()
            }), this.mylistgroup_selector.addEventListener("change", function () {
                b.onSelectMylistgroup()
            })
        }, a.prototype.getMylistComment = function () {
            return ""
        }, a.prototype.updateMylistgroupList = function (a) {
            var b = this,
                c = document.createDocumentFragment();
            c.appendChild(this.please_select_option), a.forEach(function (a) {
                c.appendChild(b.createMylistgroupOption(a))
            }), c.appendChild(this.create_new_option), this.mylistgroup_selector.innerHTML = "", this.mylistgroup_selector.appendChild(c)
        }, a.prototype.addToMylistgroupList = function (a) {
            this.mylistgroup_selector.insertBefore(this.createMylistgroupOption(a), this.please_select_option.nextSibling)
        }, a.prototype.show = function () {
            this.add_mylist_container.removeClass("hidden"), this.mylistgroup_selector_toggle.addClass("active")
        }, a.prototype.hide = function () {
            this.add_mylist_container.addClass("hidden"), this.mylistgroup_selector_toggle.removeClass("active")
        }, a.prototype.getSelectedMylistgroupId = function () {
            var a = this.mylistgroup_selector.value;
            return "" === a || "new" === a ? null : Number(a)
        }, a.prototype.selectMylistgroup = function (a) {
            this.mylistgroup_selector.value = String(a), this.mylistgroup_selector.disabled = !1, this.add_mylist_button.removeClass("disable")
        }, a.prototype.deselectMylistgroup = function () {
            this.mylistgroup_selector.value = "", this.mylistgroup_selector.disabled = !1, this.add_mylist_button.addClass("disable")
        }, a.prototype.onSelectMylistgroup = function () {
            switch (this.mylistgroup_selector.value) {
            case "":
                this.add_mylist_button.addClass("disable");
                break;
            case "new":
                this.add_mylist_button.addClass("disable"), this.mylistgroup_selector.disabled = !0, this.mylist_view_model.startCreateNewMylistgroup();
                break;
            default:
                this.add_mylist_button.removeClass("disable")
            }
        }, a.prototype.createMylistgroupOption = function (a) {
            var b = document.createElement("option");
            return b.value = String(a.id), b.text = a.name, b
        }, a
    }();
    a.MylistViewImpl = c;
    var d = function () {
        function a() {
            this.add_mylistgroup_container = jQuery("#jsAddMylistgroupContainer"), this.new_mylistgroup_title = document.getElementById("jsNewMylistgroupTitle"), this.add_mylistgroup_button = document.getElementById("jsAddMylistgroupButton"), this.cancel_mylistgroup_button = document.getElementById("jsCancelMylistgroupButton")
        }
        return a.prototype.setViewModel = function (a) {
            var b = this;
            this.mylistgroup_add_view_model = a, this.add_mylistgroup_button.addEventListener("click", function () {
                b.addMylistgroup()
            }), this.new_mylistgroup_title.addEventListener("keydown", function (a) {
                13 === a.keyCode && (b.addMylistgroup(), b.new_mylistgroup_title.blur())
            }), this.cancel_mylistgroup_button.addEventListener("click", function () {
                b.mylistgroup_add_view_model.cancelAddMylistgroup()
            })
        }, a.prototype.show = function (a) {
            this.new_mylistgroup_title.value = a, this.add_mylistgroup_container.removeClass("hidden")
        }, a.prototype.hide = function () {
            this.add_mylistgroup_container.addClass("hidden")
        }, a.prototype.getNewMylistgroupTitle = function () {
            return this.new_mylistgroup_title.value
        }, a.prototype.getNewMylistgroupDescription = function () {
            return ""
        }, a.prototype.isNewMylistgroupPublic = function () {
            return !1
        }, a.prototype.getNewMylistgroupDefaultSort = function () {
            return 1
        }, a.prototype.getNewMylistgroupIconId = function () {
            return 0
        }, a.prototype.addMylistgroup = function () {
            var a = jQuery.trim(this.new_mylistgroup_title.value);
            return a ? void this.mylistgroup_add_view_model.addMylistgroup() : void alert("マイリストのタイトルを入力してください")
        }, a
    }();
    a.MylistgroupAddViewImpl = d
}(SpwebViewWatchMylist || (SpwebViewWatchMylist = {}));
var SpwebViewWatchInput;
! function (a) {
    "use strict";
    var b = SpwebViewModelWatchEvent.WatchEventHandler,
        c = function () {
            function a() {
                this.slide_top_on_focus_triggers = jQuery(".jsSlideTopOnFocus"), this.slide_top_on_focus_triggers.bind("focus", function () {
                    b.event("slideTop").dispatch()
                }).bind("blur", function () {
                    b.event("unslideTop").dispatch()
                })
            }
            return a
        }();
    a.SlideTopOnFocusView = c
}(SpwebViewWatchInput || (SpwebViewWatchInput = {}));
var SpwebInitWatchHtml5;
! function (a) {
    "use strict";
    var b = SpwebViewModelWatchHtml5Nicoplayer.NicoplayerViewModel,
        c = SpwebViewModelWatchHtml5Video.VideoViewModel,
        d = SpwebViewModelWatchHtml5Banner.FollowBottomViewModel,
        e = SpwebViewModelWatchHtml5Player.PlayerViewModel,
        f = SpwebViewModelWatchHtml5Controller.ControllerViewModel,
        g = SpwebViewModelWatchHtml5Comment.PlayerCommentViewModel,
        h = SpwebViewWatchHtml5Video.VideoViewImpl,
        i = SpwebViewWatchHtml5Banner.FollowBottomViewImpl,
        j = SpwebViewWatchHtml5Player.PlayerViewImpl,
        k = SpwebViewWatchHtml5Controller.ControllerViewImpl,
        l = SpwebViewWatchHtml5Controller.SeekBarViewImpl,
        m = SpwebViewWatchHtml5Comment.PlayerCommentViewImpl,
        n = SpwebViewWatchTabVideoInfo.VideoInfoTabViewImpl,
        o = SpwebViewModelWatchTabVideoInfo.VideoInfoTabViewModel,
        p = SpwebViewWatchTabTag.TagTabViewImpl,
        q = SpwebViewModelWatchTabTag.TagTabViewModel,
        r = SpwebViewModelWatchTabComment.Html5CommentTabViewModel,
        s = SpwebViewModelWatchTabComment.CommentListViewModel,
        t = SpwebViewModelWatchTabComment.CommentPostViewModel,
        u = SpwebViewWatchTabComment.CommentListViewImpl,
        v = SpwebViewWatchTabComment.CommentPostViewImpl,
        w = SpwebViewWatchTabRelatedContents.RelatedContentsTabViewImpl,
        x = SpwebViewModelWatchTabRelatedContents.RelatedContentsTabViewModel,
        y = SpwebUtil.DeviceJudgement,
        z = SpwebViewModelCommonAppIOS.IPhoneAppLauncherViewModel,
        A = SpwebViewWatchAppIOS.IPhoneAppLauncherViewImpl,
        B = SpwebViewModelCommonAppAndroid.AndroidAppLauncherViewModel,
        C = SpwebViewWatchAppAndroid.AndroidAppLauncherViewImpl,
        D = SpwebViewModelWatchHtml5Option.VideoQualityViewModelFactory,
        E = SpwebViewWatchHtml5Option.VideoQualityViewImpl,
        F = SpwebViewModelWatchHtml5Option.CommentDisplayViewModel,
        G = SpwebViewWatchHtml5Option.CommentDisplayViewImpl,
        H = SpwebViewModelWatchHtml5Option.RepeatViewModel,
        I = SpwebViewWatchHtml5Option.RepeatViewImpl,
        J = SpwebViewModelWatchStyle.WatchStyleCoordinator,
        K = SpwebViewCommonTabNavigator.TabNavigatorViewImpl,
        L = SpwebViewModelCommonTabNavigator.TabNavigatorViewModel,
        M = SpwebViewModelWatchContents.ContentsContainerViewModel,
        N = SpwebViewWatchContents.ContentsContainerViewImpl,
        O = SpwebViewModelWatchHtml5Event.Html5PlayerEventHandler,
        P = SpwebModelCommentService.CommentService,
        Q = SpwebViewModelWatchHtml5Message.MessageViewModel,
        R = SpwebViewWatchHtml5Message.MessageViewImpl,
        S = SpwebModelWatch.WatchApiService,
        T = SpwebViewWatchMylist.MylistViewImpl,
        U = SpwebViewModelMylist.MylistViewModel,
        V = SpwebViewWatchMylist.DeflistViewImpl,
        W = SpwebViewModelMylist.DeflistViewModel,
        X = SpwebViewWatchMylist.MylistgroupAddViewImpl,
        Y = SpwebViewModelMylist.MylistgroupAddViewModel,
        Z = SpwebViewFavorite.FavoriteViewImpl,
        $ = SpwebViewModelFavorite.FavoriteViewModel,
        _ = SpwebViewWatchInput.SlideTopOnFocusView,
        ab = SpwebModelWatchlog.Watchlog,
        bb = SpwebApiSpweb.CounterApi,
        cb = SpwebConstants.CounterApiConstants,
        db = function () {
            function a() {}
            return a.prototype.getPlayingTimeInCentiSecond = function () {
                return Math.floor(100 * O.getCurrentTime())
            }, a
        }(),
        eb = function () {
            function a(a) {
                this.context = a
            }
            return a.prototype.execute = function () {
                this.initializeService(), this.initializeViewModel(), this.accessWatchApi(), this.initializeWatchStyleCoordinator(), this.incrementAccessCounter()
            }, a.prototype.initializeService = function () {
                new P(this.context)
            }, a.prototype.initializeViewModel = function () {
                var a = (new Q(new R), new c(this.context, new h)),
                    J = new g(this.context, new m),
                    O = new e(this.context, new j(this.context));
                if (this.context.inline_playable) {
                    new F(this.context, new G), new H(this.context, new I)
                }
                var P = D.create(this.context, new E(this.context)),
                    S = new f(this.context, new k, new l),
                    bb = new db,
                    cb = new o(this.context, new n),
                    eb = new q(this.context, new p),
                    fb = new v(this.context),
                    gb = new r(this.context, new t(this.context, fb, bb), new s(new u(this.context), bb)),
                    hb = new x(this.context, new w),
                    ib = new K("#jsTabButtonContainer"),
                    jb = new L(this.context, [cb, eb, gb, hb], ib),
                    kb = new M(jb, new N);
                if (y.is_iPad()) {
                    new d(new i)
                }
                new b(this.context, O, a, S, J, P, kb);
                if (y.is_iOS()) {
                    new z(this.context, new A(this.context))
                } else if (this.context.link_android_app) {
                    new B(this.context, new C)
                }
                if (!this.context.no_mylist_add) {
                    var lb = (new W(this.context, new V), new X),
                        mb = new Y(this.context, lb);
                    new U(this.context, mb, new T)
                }
                if (this.context.is_player_fixed && (ib.scrollTopOnChangeTab(!0), y.isAndroid())) {
                    new _
                }
                if (this.context.is_sojourn_counted_user) {
                    new ab(this.context)
                }
                if (this.context.video_author_id && !this.context.no_favorite) {
                    new $(this.context, new Z)
                }
            }, a.prototype.accessWatchApi = function () {
                var a = new S(this.context);
                a.access()
            }, a.prototype.initializeWatchStyleCoordinator = function () {
                J.listenOrientationchange(), J.listenForceLandscape(), J.applyDeviceSizeDependentStyle()
            }, a.prototype.incrementAccessCounter = function () {
                var a = new bb(this.context.spweb_url);
                a.access(cb.VIEW_WATCH_HTML5)
            }, a
        }();
    a.Html5Initializer = eb
}(SpwebInitWatchHtml5 || (SpwebInitWatchHtml5 = {})), SpwebViewModelCommonWindow.WindowEventHandler.initialize(screen, window),
    function () {
        var a = new SpwebInitWatchHtml5.Html5Initializer(jQuery("#jsDataContainer").data());
        a.execute()
    }();