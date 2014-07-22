(function () {

// concatenate two functions.
function chain(head, tail) {
	return head ? function () {
			head && head.apply(this, arguments);
			tail && tail.apply(this, arguments);
	} : tail;
}


var NicoAPI = window.NicoAPI = {
	"post": function (api, params, dataType) {
		return NicoAPI.call(api, params, dataType, "POST");
	},
	"get": function (api, params, dataType) {
		return NicoAPI.call(api, params, dataType, "GET");
	},
	"call": function (url, params, dataType, method) {
		params = params || {};
		dataType = dataType || "text";
		var responder = new NicoAPI.Responder;

		if(url.indexOf("/") == 0) {
			url = url.substring(1);
		}

		responder.xhr = jQuery.ajax({
			"type":		method,
			"url":		Nico_getBaseUrl() + url,
			"data":		params,
			"dataType":	dataType,
			"success":	function (data) { responder.onSuccess(data); },
			"error":	function (data) { responder.onError(data); }
		});
		return responder;
	}
};

NicoAPI.Responder = function () {};
NicoAPI.Responder.prototype = {
	"success": function (cb) {
		this.onSuccess = chain(this.onSuccess, cb);
		return this;
	},
	"error":function (cb) {
		this.onError = chain(this.onError, cb);
		return this;
	},
	"onSuccess":null,
	"onError":null
}

})();

(function () {
	NicoAPI.searchKeyword = function (keyword, sort, order, page, detail_search, video_count_after_middle_banner, callback) {
		NicoAPI.get(
			"api/search/" + encodeURIComponent(keyword),
			{
				"sort": sort,
				"order": order,
				"page": page,
				"f_range": detail_search.f_range,
				"l_range" : detail_search.l_range,
				"opt_md": detail_search.music_downloadable,
				"vc_after_mb": video_count_after_middle_banner
			},
			"html"
		).success(function (result) {
			callback && callback(keyword, sort, order, page, detail_search, result);
		});
	};
	
	NicoAPI.searchTag = function (tag, sort, order, page, detail_search, video_count_after_middle_banner, callback) {
		NicoAPI.get(
			"api/tag/" + encodeURIComponent(tag),
			{
				"sort": sort,
				"order": order,
				"page": page,
				"f_range": detail_search.f_range,
				"l_range" : detail_search.l_range,
				"opt_md": detail_search.music_downloadable,
				"vc_after_mb": video_count_after_middle_banner
			},
			"html"
		).success(function (result) {
			callback && callback(tag, sort, order, page, detail_search, result);
		});
	};

	NicoAPI.counter = function (path, parameter, callback) {
		NicoAPI.get(
			"api/counter/" + path,
			parameter || {}
		).success(function (result) {
			callback && callback(path, result);
		});
	}
})();
