if (self.CavalryLogger) { CavalryLogger.start_js(["pHkCC"]); }

__d("CometNotificationsActionsMenu.react",["ix","fbt","JSResource","promiseDone","requireCond","CometMenu.react","CometMenuItem.react","React","cr:1459139","XCometSettingsControllerRouteBuilder","fbicon","gkx","useCometRouterState"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("JSResource")("Banzai").__setRef("CometNotificationsActionsMenu.react"),j=b("React"),k="notif_see_all";function a(a){var c,d,e=a.actorId,f=a.experiment,l=a.notificationsListRef,m=a.onSeeAllClick;a=b("useCometRouterState")();a=(a==null?void 0:a.main.route.tabKey)==="notifications";var n=function(){l.current!=null&&l.current.markAllNotificationsAsRead!=null&&l.current.markAllNotificationsAsRead()},o=function(){l.current!=null&&l.current.handleDebugModeClick!=null&&l.current.handleDebugModeClick()};c=l==null?void 0:(c=l.current)==null?void 0:(c=c.debugModeEnabled)==null?void 0:c.current;d=(d=b("gkx")("678680"))!=null?d:!1;return j.jsxs(b("CometMenu.react"),{withArrow:!0,children:[f!=="mark_all_as_read"?j.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(g("477820"),20),onClick:n,primaryText:h._("Mark all as read"),testid:void 0}):null,j.jsx(b("CometMenuItem.react"),{href:b("XCometSettingsControllerRouteBuilder").buildURL({tab:"notifications"}),icon:b("fbicon")._(g("497570"),20),primaryText:h._("Notification settings")}),d?j.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(g("874274"),20),onClick:o,primaryText:"[FB Only] "+(c===!0?"Disable":"Enable")+" Debug Mode"}):null,!a&&f!=="see_all_notifications"&&b("cr:1459139")!=null?j.jsx(b("CometMenuItem.react"),{href:b("cr:1459139").buildURL({}),icon:b("fbicon")._(g("1529371"),20),onClick:function(){m&&m(),b("promiseDone")(i.load().then(function(a){a.post(k,{notification_data:{user_id:e},ref:"www_tab"})}))},primaryText:h._("Open Notifications")}):null]})}}),null);
__d("XCometSettingsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/settings/",Object.freeze({}),void 0);e.exports=a}),null);
__d("NullStateFiles",["IconSource"],(function(a,b,c,d,e,f){"use strict";a={dark:new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/files/null_states_files_dark_mode.svg",112),"default":new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/files/null_states_files_gray_wash.svg",112)};e.exports=a}),null);