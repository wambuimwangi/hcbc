if (self.CavalryLogger) { CavalryLogger.start_js(["AmXTT"]); }

__d("XCometVideoHomeLiveControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/watch/live/",Object.freeze({}),void 0);e.exports=a}),null);
__d("CometGranularTimestamp.react",["fbt","CometTimestamp.react","React","formatDate","useServerTime"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React"),i=1e3*60*60,j=i*24;function k(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()}function a(a){var c=a.date;a=a.granularity;a=a===void 0?"none":a;var d=b("useServerTime")();if(a==="none"||a==="min")return h.jsx(b("CometTimestamp.react"),{date:c});if(a==="hour"){var e=c.valueOf()%i;e=new Date(c.valueOf()-e);return h.jsx(b("CometTimestamp.react"),{date:e})}if(a==="year")return b("formatDate")(c,"Y");if(a==="month")return d.getFullYear()===c.getFullYear()?b("formatDate")(c,"F"):b("formatDate")(c,"F Y");if(k(c,d))return g._("Today");e=new Date(d.valueOf()-j);if(k(c,e))return g._("Yesterday");a=new Date(d.valueOf()+j);if(k(c,a))return g._("Tomorrow");return d.getFullYear()!==c.getFullYear()?b("formatDate")(c,"F j, Y"):b("formatDate")(c,"F j")}}),null);
__d("ShowSurfacesLoggingUtil",["Banzai","WebSession"],(function(a,b,c,d,e,f){"use strict";f.log=a;var g="show_surfaces";function a(a,c,d,e,f,h,i,j,k){b("Banzai").post(g,{entrypoint_surface:c,event:e,event_data:f,page_id:a,player_origin:j,player_suborigin:k,session_id:b("WebSession").getId(),surface:d,video_id:h,video_list_id:i})}}),null);
__d("cometVideoHomeScrollTo",["VideoHomeTypedLoggerLite","gkx","scrollTo"],(function(a,b,c,d,e,f){"use strict";e.exports=c;function c(c,d,e){c=c.getBoundingClientRect();var f=c.height;c=c.top;e=(window.innerHeight-d-e-f)/2+d;f=e-c;d=b("gkx")("1243461");b("scrollTo")({behavior:d?"auto":"smooth",left:a.pageXOffset,top:a.pageYOffset-f});b("VideoHomeTypedLoggerLite").log({event:"auto_scroll"})}}),null);
__d("cometVideoHomeScrollToRef",["cometVideoHomeScrollTo"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c,d){if(a==null)return;a=a.current;if(a==null)return;b("cometVideoHomeScrollTo")(a,c,d)}}),null);
__d("VideoPlayerWithAutoCenterOnUserInitiatedPlay.react",["CometViewportMarginsContext","React","VideoPlayerHooks","cometVideoHomeScrollToRef","stylex","usePrevious"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=g.useRef(null),c=b("VideoPlayerHooks").usePaused(),d=b("usePrevious")(c),e=b("VideoPlayerHooks").useLastPlayReason(),f=g.useContext(b("CometViewportMarginsContext")),h=f.bottom,i=f.top;g.useEffect(function(){d===!0&&c===!1&&e==="user_initiated"&&b("cometVideoHomeScrollToRef")(a,i,h)},[e,c,d,h,i]);return g.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb",ref:a})}}),null);
__d("CometVideoHomeFeedAutoAdvanceAPIContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({advance:function(){},register:function(){},unregister:function(){}});e.exports=c}),null);
__d("CometVideoHomeFeedUnitPositionContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(0);e.exports=c}),null);
__d("VideoPlayerWithVideoHomeAutoAdvance.react",["CometVideoHomeFeedAutoAdvanceAPIContext","CometVideoHomeFeedUnitPositionContext","React","VideoPlayerHooks"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=b("VideoPlayerHooks").useController(),c=g.useContext(b("CometVideoHomeFeedAutoAdvanceAPIContext")),d=g.useContext(b("CometVideoHomeFeedUnitPositionContext")),e=b("VideoPlayerHooks").useVideoPlayerCurrentLoop(),f=b("VideoPlayerHooks").useVideoPlayerTotalLoops(),h=g.useRef(a.getCurrentState().ended);g.useEffect(function(){var b=a.subscribe(function(){var b=a.getCurrentState();b=b.ended;!h.current&&b&&e>=f&&c.advance(d);h.current=b});return function(){b.remove()}},[c,a,e,d,f]);return null}}),null);
__d("VideoHomeGlobalSoundContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({muted:!0,setMuted:function(){},setVolume:function(){},volume:1});e.exports=c}),null);
__d("VideoPlayerWithVideoHomeGlobalSoundContext.react",["React","VideoHomeGlobalSoundContext","VideoPlayerHooks","gkx","usePrevious"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a,c=g.useContext(b("VideoHomeGlobalSoundContext")),d=(a=b("VideoPlayerHooks")).useController(),e=a.useMuted(),f=a.useVolume(),h=a.usePaused(),i=b("usePrevious")(e),j=b("usePrevious")(f);g.useEffect(function(){b("gkx")("1657807")||i!==null&&i!==e&&c.setMuted(e),j!==null&&j!==f&&c.setVolume(f)},[e,i,j,c,f]);g.useEffect(function(){h||(b("gkx")("1657807")||d.setMuted(c.muted,"user_initiated"),d.setVolume(c.volume))},[d,h,c.muted,c.volume]);return null}}),null);
__d("VideoPlayerWithVideoHomeLogging.react",["React","VideoPlayerHooks"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.reactionVideoChannelType,d=b("VideoPlayerHooks").useController();g.useEffect(function(){c!=null&&d.setAdditionalLogData("reaction_video_channel_type",c)},[d,c]);return null}}),null);
__d("CometLiveCommentReplyContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({replyCommentID:null,replyingToHeader:null,setReplyingToHeader:function(){}});f.CometLiveCommentReplyContext=c}),null);
__d("CometTahoeUFIContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c={COMPOSER_AND_ALL_COMMENTS:"COMPOSER_AND_ALL_COMMENTS",COMPOSER_AND_TOP_COMMENT:"COMPOSER_AND_TOP_COMMENT",COMPOSER_ONLY:"COMPOSER_ONLY"};f.TahoeCommentComposerConfigEnum=c;d=a.createContext({tahoeCommentComposerConfig:c.COMPOSER_AND_ALL_COMMENTS});f.CometTahoeUFIContext=d}),null);
__d("generateChainingSessionID",["Random"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(){return"f"+(b("Random").random()*(1<<30)).toString(16).replace(".","")}}),null);
__d("useCometTahoeChainingDepth",["React","generateChainingSessionID"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=g.createContext({chainingDepthDispatch:null,chainingDepthState:0,chainingSessionID:null});a=function(){var a=0,c=function(a,b){switch(b.type){case"INCREMENT":return a+1;default:return a}};c=g.useReducer(c,a);var d=c[0],e=c[1];a=g.useState(function(){return b("generateChainingSessionID")()});var f=a[0];a[1];return g.useMemo(function(){return{chainingDepthDispatch:e,chainingDepthState:d,chainingSessionID:f}},[e,d,f])};f.useChainingDepth=a;c=function(){return g.useContext(h)};f.useChainingDepthContext=c;d=function(a){var b=a.children;a=a.value;return g.jsx(h.Provider,{value:a,children:b})};f.CometTahoeChainingDepthContextProvider=d}),null);
__d("VideoHomeCometErrorBoundary.react",["CometErrorBoundary.react","React","VideoHomeTypedLoggerLite"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=g.useCallback(function(c){b("VideoHomeTypedLoggerLite").log({event:"js_error",exception:c.message,exception_trace:c.componentStack,module_class:a.moduleClass,unit_position:a.unitPosition})},[a.moduleClass,a.unitPosition]);return g.jsx(b("CometErrorBoundary.react"),{context:{project:"www_watch"},fallback:a.fallback,onError:c,children:a.children})}}),null);
__d("CometVideoProfileInfoGlimmer.react",["BaseGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c;a=a.index;return g.jsxs("div",{className:"cbu4d94t j83agx80",children:[g.jsxs("div",{className:"j83agx80",children:[g.jsx(c=b("BaseGlimmer.react"),{className:"go5t5npl oi9244e8 hxdsxuhi spb7xbtv bkmhp75w emlxlaya s45kfl79",index:a}),g.jsxs("div",{className:"taijpn5t cbu4d94t j83agx80",children:[g.jsx(c,{className:"elpiyq4v bi6gxh9e cyypbtt7 kzx2olss aot14ch1 p86d2i9g beltcj47",index:a}),g.jsx(c,{className:"i7o4yfgj cyypbtt7 kzx2olss aot14ch1 p86d2i9g beltcj47",index:a})]})]}),g.jsx(c,{className:"f4c7eilb n1l5q3vz jnigpg78 ns4ygwem fykbt5ly hgaippwi fni8adji",index:a})]})}}),null);
__d("CometVideoHomeThreeDotContextMenuWrapperContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({contextMenuEnabled:null});e.exports=c}),null);
__d("CometVideoHomeFunnelLoggingContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({hasPermalinkInjection:!1});e.exports=c}),null);
__d("CometVideoHomeSectionPositionContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("CometVideoHomeShowSurfacesLoggingContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({entrypoint:"",pageID:null,sectionTypeName:"",surface:""});e.exports=c}),null);
__d("CometVideoHomeLiveUFIContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({renderConfig:"default"});e.exports=c}),null);
__d("CometTahoeTracePolicyContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("VideoPlayerLoggingExternalLogContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({externalLogID:null,externalLogType:null});e.exports=c}),null);
__d("logVideoHomeWebFunnel",["CurrentUser","WebFunnelLogger","gkx"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c,d,e){if(!b("gkx")("1238150"))return;var f=new(b("WebFunnelLogger"))("VideoHomeWWWFunnelDefinition").setAction(a).setSessionKey(b("CurrentUser").getID());c!=null&&Object.entries(c).forEach(function(a){var b=a[0];a=a[1];f.addFunnelPayload(b,a)});d!=null&&Object.entries(d).forEach(function(a){var b=a[0];a=a[1];f.addActionPayload(b,a)});e&&f.markStart();f.log()}}),null);