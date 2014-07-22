var loginurl = "https://secure.nicovideo.jp/secure/login?site=niconico";
var mylisturl = "http://sp.nicovideo.jp/my/mylist/deflist";//"http://www.nicovideo.jp/my/mylist";
var videolistapi = "http://sp.nicovideo.jp/api/videolist?v=";

(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(document).on("click", "#registerbtn", function(evt)
        {
        /* your code goes here */ 
        });
        $(document).on("click", ".uib_w_21", function(evt)
        {
        /* your code goes here */ 
            //console.log("login button");
            var username = $("#username").val();
            var password = $("#password").val();
            $.ui.showMask("Loading...");
            $.post(loginurl, {mail_tel:username, password:password}, function(data) {
                console.log("login");
                if($(data).find("#password").length > 0)
                {
                    $.ui.popup("Failed");
                } else {
                    //$.ui.popup("Success");
                    //$.ui.loadContent("mylist_page", null, null, "fade");
                    window.location.href = "#mylist_page";
			         // clears all back button history
                    $.ui.clearHistory();
                    $.post(mylisturl, {}, function(mylistpage) {
                        console.log("mylistpage");
                        //$("#mylist").html(mylistpage);
                        var mylistRegex = /Nico_VideoListHtmlLoader\.setVideoIdList\((.+)\)\;/i;
                        var mylist = mylistpage.match(mylistRegex)[1];
                        mylist = $.parseJSON(mylist);
                        var mylistqueryurl = videolistapi + mylist.join(",");
                        $.post(mylistqueryurl, {}, function(list) {
                            console.log("mylistdata");
                            $("#mylist").html(list);   
                        }, 'text');
                        //console.log($.parseJSON(mylist));
                    }, 'text');
                }
                $.ui.hideMask();
            }, "text"); 
        });
}
 $(document).ready(register_event_handlers);
})();
