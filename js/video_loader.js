/*
 * dependency
 *		jquery
 *		nicoapi
 */
window.Nico_VideoListHtmlLoader = (function(){
	var videolist_type, possession = false;
	var Api = {
		"getVideoListHtml" : function (video_id_list, Callback) {
			var parameter = {
				"v" : video_id_list.join(",")
			};
			if (videolist_type) {
				parameter.videolist_type = videolist_type;
			}
			if (possession) {
				parameter.possession = 1;
			}
			NicoAPI.get(
				"/api/videolist",
				parameter,
				"html"
			).success( function (html){ Callback.success(html);} )
			.error( function (responder) {Callback.error(responder);} );
		}
	}
	var Controller = (function(){
		var Callback = {
			"success": function (html) {
				View.appendVideoListHtml(html);
				VideoIdListContainer.next();
				if (!VideoIdListContainer.existNext()) {
					View.hideLoadButton();
					return ;
				}			
				View.showLoadButton();
			},
			"error" : function (responder) {
				alert("error");
			}
		};
		return {
			"load" : function () {
				if (!VideoIdListContainer.existNext()) {
					return ;
				}
				Api.getVideoListHtml(
					VideoIdListContainer.getNextVideoIdList(),
					Callback
				);
			}
		}
	})();
	var VideoIdListContainer = (function () {
		var video_id_list = [];
		var next_offset = 0;
		
		return {
			"setVideoIdList" : function (list) {
				video_id_list = list;
			},
			"existNext" : function () {
				if (video_id_list[next_offset]) {
					return true;
				} else {
					return false;
				}
			},
			"getNextVideoIdList" : function () {
				return video_id_list[next_offset];
			},
			"next" : function () {
				next_offset++;
			}
		}
	})();
	var View = (function() {
		var
			video_list_dom,
			load_button_dom;
		
		var loadButtonClick = function (event) {
			event.preventDefault();
			load_button_dom.hide();
			Controller.load();
		};
		return {
			"setListDomSelector": function (selector) {
				video_list_dom = $(selector);
			},
			"setLoadButtonDomSelector": function (selector) {
				load_button_dom = $(selector);
				$(document).delegate(selector, "click", loadButtonClick);
			},
			"showLoadButton" : function () {
				load_button_dom.show();
			},
			"hideLoadButton" : function () {
				load_button_dom.hide();
			},
			"appendVideoListHtml" : function (html) {
				video_list_dom.append(html);
			}
		};
	})();
	
	return {
		"setVideoIdList": function (list) {
			if (!list) {
				return ;
			}
			VideoIdListContainer.setVideoIdList(list);
		},
		"setListDomSelector": function (selector) {
			View.setListDomSelector(selector);
		},
		"setLoadButtonDomSelector": function (selector) {
			View.setLoadButtonDomSelector(selector)
		},
		"setVideolistType" : function (_videolist_type) {
			videolist_type = _videolist_type;
		},
		"load": function () {
			Controller.load();
		},
		"setPossession" : function(_possesion) {
			possession = _possesion;
		}
	}
})();