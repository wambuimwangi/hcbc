if (self.CavalryLogger) { CavalryLogger.start_js(["7fx3t"]); }

__d("VideoPlayerWatchInlineEndScreenRowItem_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlineEndScreenRowItem_story",selections:[{alias:null,args:null,kind:"ScalarField",name:"click_tracking_linkshim_cb",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_click_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWatchInlineEndScreenRowItem_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlineEndScreenRowItem_video",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoThumbnailImageWithPreview_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeDurationThumbnailOverlay_video"}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("VideoPlayerWatchInlineEndScreenRowQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"caller"},b={defaultValue:null,kind:"LocalArgument",name:"entry_channel_id"},c={defaultValue:null,kind:"LocalArgument",name:"entry_point"},d={defaultValue:null,kind:"LocalArgument",name:"id"},e={defaultValue:null,kind:"LocalArgument",name:"scale"},f=[{kind:"Variable",name:"id",variableName:"id"}],g=[{kind:"Variable",name:"entry_channel_id",variableName:"entry_channel_id"},{kind:"Variable",name:"entry_point",variableName:"entry_point"}],h=[{kind:"Variable",name:"caller",variableName:"caller"},{kind:"Variable",name:"exclude_video",variableName:"id"},{kind:"Literal",name:"first",value:3}],i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},k={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[i,j,{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchInlineEndScreenRowItem_video"}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},m=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"start",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"representation_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mime_codec",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"segment_type",storageKey:null}],n=[j],o={kind:"InlineFragment",selections:n,type:"Node",abstractKey:"__isNode"};m={alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[i,{kind:"InlineFragment",selections:[j,{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[i,j,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:354},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:627}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"smart_preview_video",plural:!1,selections:[i,j,{alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcaster_origin",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_id",storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_trace_enabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_looping",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_video_broadcast",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"loop_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_spherical",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"permalink_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"captions_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dash_prefetch_experimental",storageKey:null},{alias:null,args:null,concreteType:"VideoCaptionLocale",kind:"LinkedField",name:"video_available_captions_locales",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"localized_creation_method",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"context",value:"DEFAULT"},{kind:"Literal",name:"supported",value:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"]}],concreteType:null,kind:"LinkedField",name:"comet_video_player_implementations",plural:!0,selections:[i,{kind:"InlineFragment",selections:[{documentName:"useRelay3DVideoImplementations_video",fragmentName:"useRelay3DOzImplementation_implementation",fragmentPropName:"implementation",kind:"ModuleImport"}],type:"CometVideoPlayerOzImplementation",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRelay3DVideoImplementations_video",fragmentName:"useRelay3DShakaImplementation_implementation",fragmentPropName:"implementation",kind:"ModuleImport"}],type:"CometVideoPlayerShakaImplementation",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRelay3DVideoImplementations_video",fragmentName:"useRelay3DProgressiveImplementation_implementation",fragmentPropName:"implementation",kind:"ModuleImport"}],type:"CometVideoPlayerProgressiveImplementation",abstractKey:null}],storageKey:'comet_video_player_implementations(context:"DEFAULT",supported:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"])'},{alias:null,args:null,kind:"ScalarField",name:"can_use_oz",storageKey:null},{alias:"playable_url_dash",args:[{kind:"Literal",name:"scrubbing_preference",value:"MPEG_DASH"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(scrubbing_preference:"MPEG_DASH")'},{alias:null,args:null,kind:"ScalarField",name:"dash_manifest",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min_quality_preference",storageKey:null},{alias:null,args:null,concreteType:"VideoPrefetchResources",kind:"LinkedField",name:"dash_prefetch_resources",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoPrefetchResource",kind:"LinkedField",name:"audio",plural:!0,selections:m,storageKey:null},{alias:null,args:null,concreteType:"VideoPrefetchResource",kind:"LinkedField",name:"video",plural:!0,selections:m,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"VideoPlayerShakaLiveP2PInit",kind:"LinkedField",name:"video_player_shaka_live_p2p_init",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"json_encoded_video_data",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_url",storageKey:null},{alias:"playable_url_quality_hd",args:[{kind:"Literal",name:"quality",value:"HD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"HD")'},{alias:null,args:null,concreteType:"SphericalVideoFallbackUrls",kind:"LinkedField",name:"spherical_video_fallback_urls",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hd",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sd",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"comet_video_player_static_config",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"comet_video_player_context_sensitive_config",storageKey:null},{alias:null,args:null,concreteType:"VideoPlayerShakaPerformanceLoggerInit",kind:"LinkedField",name:"video_player_shaka_performance_logger_init",plural:!1,selections:[{documentName:"useVideoPlayerShakaPerformanceLoggerRelay_video",fragmentName:"useVideoPlayerShakaPerformanceLoggerRelay_init",fragmentPropName:"init",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"autoplay_gating_result",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_autoplay_setting",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_autoplay",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"drm_info",storageKey:null},{alias:null,args:null,concreteType:"CaptionsSettings",kind:"LinkedField",name:"captions_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"always_show_captions",storageKey:null},j],storageKey:null},{alias:null,args:null,concreteType:"VideoBroadcastLowLatencyConfig",kind:"LinkedField",name:"broadcast_low_latency_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ll_desired_latency_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ll_latency_tolerance_ms",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"SphericalVideoRenderer",kind:"LinkedField",name:"spherical_video_renderer",plural:!1,selections:[{documentName:"VideoPlayerRelay_video_spherical_video_renderer",fragmentName:"VideoPlayerSphericalRelay_sphericalVideoRenderer",fragmentPropName:"sphericalVideoRenderer",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,concreteType:"InstreamVideoAdBreaks",kind:"LinkedField",name:"instream_video_ad_breaks_comet",plural:!1,selections:[{documentName:"VideoPlayerRelay_video_instream_video_ad_breaks_comet",fragmentName:"InstreamVideoAdBreaksPlayer_adBreaks",fragmentPropName:"adBreaks",kind:"ModuleImport"}],storageKey:null}],storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null}],type:"Video",abstractKey:null},o,{kind:"InlineFragment",selections:n,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:n,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:n,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,b,c,d,e],kind:"Fragment",metadata:null,name:"VideoPlayerWatchInlineEndScreenRowQuery",selections:[{alias:"video",args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[{alias:null,args:h,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[k,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[k],storageKey:null},{args:null,kind:"FragmentSpread",name:"VideoPlayerWatchInlineEndScreenRowItem_story"}],type:"Story",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,d,b,c,e],kind:"Operation",name:"VideoPlayerWatchInlineEndScreenRowQuery",selections:[{alias:"video",args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[i,j,{kind:"InlineFragment",selections:[{alias:null,args:g,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[i,{alias:null,args:h,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[i,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"click_tracking_linkshim_cb",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_click_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null},m,{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"attached_story",plural:!1,selections:[m,j],storageKey:null}],type:"Story",abstractKey:null},o,{kind:"InlineFragment",selections:n,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null}],storageKey:null}],storageKey:null},j],storageKey:null}],type:"Video",abstractKey:null}],storageKey:null}]},params:{id:"3647904495253622",metadata:{},name:"VideoPlayerWatchInlineEndScreenRowQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometVideoHomeDurationThumbnailOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeDurationThumbnailOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeVideoThumbnailImageWithPreview_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"},{defaultValue:!1,kind:"LocalArgument",name:"useThumbnailPreviewRelay3d"}],kind:"Fragment",metadata:null,name:"CometVideoHomeVideoThumbnailImageWithPreview_video",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:354},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:627}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{condition:"useThumbnailPreviewRelay3d",kind:"Condition",passingValue:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoThumbnailPreview_video"}]},{condition:"useThumbnailPreviewRelay3d",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoThumbnailPreviewWithRelay3d_video"}]}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeVideoThumbnailPreviewImpl_previewVideo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeVideoThumbnailPreviewImpl_previewVideo",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{args:null,kind:"FragmentSpread",name:"VideoPlayerRelay_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeVideoThumbnailPreviewWithRelay3d_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeVideoThumbnailPreviewWithRelay3d_video",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"smart_preview_video",plural:!1,selections:[{documentName:"CometVideoHomeVideoThumbnailPreviewWithRelay3d_video",fragmentName:"CometVideoHomeVideoThumbnailPreviewImpl_previewVideo",fragmentPropName:"previewVideo",kind:"ModuleImport"}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeVideoThumbnailPreview_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeVideoThumbnailPreview_video",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"smart_preview_video",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoThumbnailPreviewImpl_previewVideo"}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeDurationThumbnailOverlay.react",["fbt","CometRelay","React","TetraText.react","VideoBroadcastStatus","formatDurationSeconds","stylex","CometVideoHomeDurationThumbnailOverlay_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");function a(a){a=a.video;a=b("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeDurationThumbnailOverlay_video.graphql"),a);if(!a||a.broadcast_status===b("VideoBroadcastStatus").LIVE)return null;var c=a&&!!a.has_viewer_watched_show_video;a=a.playable_duration||0;return a===0&&!c?null:i.jsx("div",{className:"d18pfyog pmk7jnqg hzruof5a pcp91wgn pby63qed p8fzw8mz linoseic b5fwa0m2 labbqbtg b6jg2yqc hp05c5td bn9qtmzc s8bnoagg iz2mbcqi",children:i.jsx(b("TetraText.react"),{color:"white",type:"headlineEmphasized4",children:c?g._("WATCHED"):b("formatDurationSeconds")(a)})})}}),null);
__d("CometVideoHomePlayButtonThumbnailOverlay.react",["ix","CometImage.react","CometVideoHomeVideoThumbnailHoverContext","React","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");function a(a){var c=a.forceVisibility;c=c===void 0?!1:c;a=a.size;var d=i.useContext(b("CometVideoHomeVideoThumbnailHoverContext"));d=d||c;c=g("101640");switch(a){case 24:c=g("354763");break;case 48:c=g("101640");break;case 72:c=g("352839");break}return i.jsx("div",{className:(h||(h=b("stylex"))).dedupe({"bottom-1":"i09qtzwb","end-1":"n7fi1qx3","opacity-1":"b5wmifdl","position-1":"pmk7jnqg","start-1":"j9ispegn","top-1":"kr520xx4","transition-delay-1":"lxbcnve3","transition-duration-1":"pc15xi3s","transition-property-1":"art1omkt","transition-timing-function-1":"ilcmz9jb"},d?{"opacity-1":"pedkr2u6"}:null),children:i.jsx("span",{className:"i07tyfg8 rk01pc8j kfkz5moi pmk7jnqg pq6dq46d",children:i.jsx(b("CometImage.react"),{src:c,width:a})})})}}),null);
__d("VideoItemPreviewContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({hidePreview:function(){},isPreviewVisible:!1,showPreview:function(){}});e.exports=c}),null);
__d("CometVideoHomeVideoThumbnailPreviewImpl.react",["CometRelay","React","VideoItemPreviewContext","VideoPlayerHooks","VideoPlayerLoggingSuboriginContext","VideoPlayerRelay.react","VideoPlayerSurface.react","stylex","CometVideoHomeVideoThumbnailPreviewImpl_previewVideo.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React");function a(a){var c=a.noPreviewFallback;c=c===void 0?null:c;var d=a.preload;d=d===void 0?!0:d;a=a.previewVideoKey;var e=i.useContext(b("VideoItemPreviewContext"));e=e.isPreviewVisible;var f=i.useContext(b("VideoPlayerLoggingSuboriginContext"));a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeVideoThumbnailPreviewImpl_previewVideo.graphql"),a);if(a==null)if(e)return c;else return null;return i.jsx("div",{className:(h||(h=b("stylex"))).dedupe(a!=null&&!e?{"opacity-1":"b5wmifdl"}:{},{"background-color-1":"s8bbyrx9","display-1":"j83agx80","height-1":"datstx6m","pointer-events-1":"hzruof5a","position-1":"pmk7jnqg","top-1":"kr520xx4","transition-delay-1":"lxbcnve3","transition-duration-1":"tn0ko95a","transition-property-1":"art1omkt","transition-timing-function-1":"bu1j732b","width-1":"k4urcfbm"},e?null:{"background-color-1":"bca7ynr6"}),children:(d||e)&&i.jsx(b("VideoPlayerRelay.react"),{canAutoplay:"dangerously_disable_autoplay_management",disableLoadingIndicator:!0,portalingEnabled:!1,subOrigin:(c=f)!=null?c:"video_home_thumbnail_preview",video:a,children:i.jsx(l,{preload:d})})})}function j(){var a=b("VideoPlayerHooks").useController(),c=b("VideoPlayerHooks").useEnded(),d=i.useContext(b("VideoItemPreviewContext"));i.useEffect(function(){d.isPreviewVisible?c?d.hidePreview():(a.seek(0),a.play("user_initiated")):a.pause("user_initiated")},[a,c,d]);return null}function k(){var a,c=(a=b("VideoPlayerHooks")).useController(),d=a.useEnded(),e=a.usePaused(),f=a.usePlaying(),g=a.useStalling();i.useLayoutEffect(function(){d&&c.seek(0),(!g&&!f||e)&&c.play("user_initiated")},[c,d,e,f,g]);return null}function l(a){a=a.preload;a=a?j:k;return i.jsx(b("VideoPlayerSurface.react"),{children:i.jsx(a,{})})}}),null);
__d("CometVideoHomeVideoThumbnailPreview.react",["CometRelay","CometVideoHomeVideoThumbnailPreviewImpl.react","React","CometVideoHomeVideoThumbnailPreview_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.noPreviewFallback;c=c===void 0?null:c;var d=a.preload;d=d===void 0?!0:d;a=a.video;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeVideoThumbnailPreview_video.graphql"),a);a=a==null?void 0:a.smart_preview_video;return h.jsx(b("CometVideoHomeVideoThumbnailPreviewImpl.react"),{noPreviewFallback:c,preload:d,previewVideoKey:a})}}),null);
__d("CometVideoHomeVideoThumbnailImageWithPreview.react",["fbt","CometAspectRatioContainer.react","CometImage.react","CometRelay","CometVideoHomeVideoThumbnailPreview.react","React","VideoPlayerLoggingSuboriginContext","requireCond","stylex","cr:1355688","cr:1357993","CometVideoHomeVideoThumbnailImageWithPreview_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=b("React"),k={blackBackground:{backgroundColor:"tqsryivl",height:"datstx6m"},blurredImage:{bottom:"i09qtzwb",end:"n7fi1qx3",filter:"nq2o82sz",height:"datstx6m",opacity:"l8rlqa9s",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",transform:"cyijgrg9",width:"k4urcfbm"},image:{bottom:"i09qtzwb",end:"n7fi1qx3",marginTop:"km676qkl",marginEnd:"ad2k81qe",marginBottom:"myj7ivm5",marginStart:"f9o22wc5",maxHeight:"nwf6jgls",maxWidth:"d2edcug0",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},imageContainer:{height:"datstx6m",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm"},ratioContainer:{height:"do00u71z",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7"},root:{position:"l9j0dhe7"}};function a(a){var c,d=b("CometRelay").useFragment(h!==void 0?h:h=b("CometVideoHomeVideoThumbnailImageWithPreview_video.graphql"),a.video),e=j.useContext(b("VideoPlayerLoggingSuboriginContext"));c=d==null?void 0:(c=d.image)==null?void 0:c.uri;if(c==null)return null;e=b("cr:1357993")!=null&&e==="topic_live";return j.jsx("div",{className:(i||(i=b("stylex")))(k.root),children:j.jsxs(b("CometAspectRatioContainer.react"),{aspectRatio:a.width/a.height,children:[j.jsxs("div",{className:i(k.imageContainer),children:[b("cr:1355688")!=null?j.jsx("div",{className:(i||(i=b("stylex")))(k.blurredImage),children:j.jsx(b("cr:1355688"),{src:c})}):j.jsx("div",{className:(i||(i=b("stylex")))(k.blackBackground)}),j.jsx(b("CometImage.react"),{alt:g._("Video thumbnail"),src:c,xstyle:k.image})]}),!e&&j.jsx(b("CometVideoHomeVideoThumbnailPreview.react"),{video:d}),e&&b("cr:1357993")!=null&&j.jsx(b("cr:1357993"),{video:d})]})})}}),null);
__d("VideoPlayerWatchInlineEndScreenRowItem.react",["CometLink.react","CometRelay","CometTrackingCodeProvider.react","CometVideoHomeDurationThumbnailOverlay.react","CometVideoHomePlayButtonThumbnailOverlay.react","CometVideoHomeVideoThumbnailHoverContext","CometVideoHomeVideoThumbnailImageWithPreview.react","React","TetraTextPairing.react","VideoHomeTypedLoggerLite","XCometVideoHomePlaylistControllerRouteBuilder","XCometWatchControllerRouteBuilder","gkx","stylex","useInnerMostTrackingCode","useStoryVPVDLogger","VideoPlayerWatchInlineEndScreenRowItem_story.graphql","VideoPlayerWatchInlineEndScreenRowItem_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j=84,k=150;function a(a){var c=a.position,d=a.story;a=a.video;d=b("CometRelay").useFragment(g!==void 0?g:g=b("VideoPlayerWatchInlineEndScreenRowItem_story.graphql"),d);c=b("useStoryVPVDLogger")({interactionSourceOverride:54,position:c,trackable:d==null?void 0:d.encrypted_tracking});var e=c[0];c=c[1];var f=d.click_tracking_linkshim_cb,h=d.encrypted_click_tracking;d=d.encrypted_tracking;f={click_tracking_linkshim_cb:f||"",encrypted_click_tracking:h||"",encrypted_tracking:d||""};return i.jsx("div",{className:"cbu4d94t j83agx80",ref:e,children:i.jsx(b("CometTrackingCodeProvider.react"),{trackingCode:f,children:i.jsx(l,{video:a,vpvdDebuggingInfoComponent:c})})})}function l(a){var c=a.video;a=a.vpvdDebuggingInfoComponent;var d=i.useState(!1),e=d[0],f=d[1];d=i.useCallback(function(){f(!0)},[]);var g=i.useCallback(function(){f(!1)},[]),l=b("useInnerMostTrackingCode")(),m=b("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerWatchInlineEndScreenRowItem_video.graphql"),c);c=m==null?void 0:m.id;var n=m==null?void 0:m.owner;if(m==null||c==null||n==null)return null;var o=m.title_with_fallback,p=n.uri_token;p=p!=null?b("XCometVideoHomePlaylistControllerRouteBuilder").buildURL({idorvanity:p}):n.url;c=b("XCometWatchControllerRouteBuilder").buildURL({v:c});var q=function(){b("VideoHomeTypedLoggerLite").log({click_point:"inline_end_screen",event:"click",event_target:"video",event_target_id:m.id})},r=function(){var a;b("VideoHomeTypedLoggerLite").log({click_point:"inline_end_screen",event:"click",event_target:"page",event_target_id:(a=m.owner)==null?void 0:a.id})};l=babelHelpers["extends"]({playerSubOrigin:"inline_end_screen"},b("gkx")("1369260")?{trackingCode:l}:{});return i.jsxs(i.Fragment,{children:[a,i.jsx(b("CometLink.react"),{href:c,onClick:q,passthroughProps:l,children:i.jsx(b("CometVideoHomeVideoThumbnailHoverContext").Provider,{value:e,children:i.jsxs("div",{className:"l9j0dhe7 stjgntxs ni8dbmo4 kzx2olss aot14ch1 p86d2i9g beltcj47",onMouseEnter:d,onMouseLeave:g,children:[i.jsx(b("CometVideoHomeVideoThumbnailImageWithPreview.react"),{height:j,video:m,width:k}),i.jsx(b("CometVideoHomeDurationThumbnailOverlay.react"),{video:m}),i.jsx(b("CometVideoHomePlayButtonThumbnailOverlay.react"),{size:48})]})})}),i.jsx("div",{className:"cxgpxx05 dflh9lhu",children:i.jsx(b("TetraTextPairing.react"),{body:i.jsx(b("CometLink.react"),{color:"secondary",href:p,onClick:r,children:n.name}),bodyLineLimit:1,headline:o!=null&&i.jsx(b("CometLink.react"),{color:"white",href:c,onClick:q,passthroughProps:l,children:o}),headlineLineLimit:3,level:4,reduceEmphasis:!0})})]})}}),null);
__d("VideoPlayerWatchInlineEndScreenRow.react",["fbt","CometFlexibleRow.react","CometLink.react","React","RelayHooks","TetraText.react","VideoHomeTypedLoggerLite","VideoPlayerWatchInlineEndScreenRowItem.react","WebPixelRatio","XCometWatchControllerRouteBuilder","stylex","VideoPlayerWatchInlineEndScreenRowQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");function a(a){var c=a.videoChainingCaller,d=a.videoChannelEntryPoint,e=a.videoChannelID;a=a.videoID;c=b("RelayHooks").useLazyLoadQuery(h!==void 0?h:h=b("VideoPlayerWatchInlineEndScreenRowQuery.graphql"),{caller:c,entry_channel_id:e,entry_point:d,id:a,scale:b("WebPixelRatio").get()});e=(c=c==null?void 0:(e=c.video)==null?void 0:(d=e.video_channel)==null?void 0:(a=d.video_channel_feed)==null?void 0:a.nodes)!=null?c:[];d=e.map(function(a,c){var d;d=(d=a==null?void 0:a.attached_story)!=null?d:a;d=d==null?void 0:(d=d.attachments)==null?void 0:(d=d[0])==null?void 0:d.media;return d==null||d.__typename!=="Video"?null:i.jsx(b("VideoPlayerWatchInlineEndScreenRowItem.react"),{position:c,story:a,video:d},d.id)}).filter(Boolean);a=function(){b("VideoHomeTypedLoggerLite").log({click_point:"inline_end_screen",event:"click",event_target:"watch"})};return d.length>0?i.jsxs("div",{className:"ihqw7lf3 taijpn5t hdr16bak buofh1pr cbu4d94t j83agx80",children:[i.jsx("div",{className:"ihqw7lf3",children:i.jsx(b("TetraText.react"),{color:"white",type:"headlineEmphasized2",children:i.jsx(b("CometLink.react"),{href:b("XCometWatchControllerRouteBuilder").buildURL({}),onClick:a,children:g._("More Videos on Watch")})})}),i.jsx(b("CometFlexibleRow.react"),{columnMaxWidth:250,columnMinWidth:100,justify:"start",minItems:d.length,children:d})]}):null}}),null);
__d("VideoPlayerWatchInlineEndScreenRowContainer.react",["React","requireCond","cr:1522185","cr:1522186"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.videoChainingCaller,d=a.videoChannelEntryPoint,e=a.videoChannelID;a=a.videoID;if(b("cr:1522186")!=null)return g.jsx(b("cr:1522186"),{videoChainingCaller:c,videoChannelEntryPoint:d,videoChannelID:e,videoID:a});return b("cr:1522185")!=null?g.jsx(b("cr:1522185"),{videoID:a}):null}}),null);
__d("CometVideoHomeVideoThumbnailPreviewWithRelay3d.react",["CometPlaceholder.react","CometRelay","React","CometVideoHomeVideoThumbnailPreviewWithRelay3d_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.noPreviewFallback;c=c===void 0?null:c;var d=a.preload;d=d===void 0?!0:d;a=a.video;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeVideoThumbnailPreviewWithRelay3d_video.graphql"),a);a=a==null?void 0:a.smart_preview_video;return h.jsx(b("CometPlaceholder.react"),{fallback:null,children:h.jsx(b("CometRelay").MatchContainer,{match:a,props:{noPreviewFallback:c,preload:d,previewVideo:a}})})}}),null);