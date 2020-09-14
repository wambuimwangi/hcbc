if (self.CavalryLogger) { CavalryLogger.start_js(["hpRy1"]); }

__d("CometGamingVideoThumbnail_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometGamingVideoThumbnail_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"live_viewer_count_read_only",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"CometGamingVideoThumbnailPreview_video"}]},{args:null,kind:"FragmentSpread",name:"LiveVideoCometBadge_video"},{args:null,kind:"FragmentSpread",name:"VideoBlurBackgroundContainer_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWithLiveVideoEndscreenAndChainingQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"caller"},{defaultValue:null,kind:"LocalArgument",name:"entryPoint"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"videoID"}],b=[{kind:"Variable",name:"id",variableName:"videoID"}],c=[{kind:"Variable",name:"entry_point",variableName:"entryPoint"}],d=[{kind:"Variable",name:"caller",variableName:"caller"},{kind:"Variable",name:"first",variableName:"first"}],e={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},g={alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"broadcaster_origin",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"broadcast_id",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"is_live_trace_enabled",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"is_looping",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"is_video_broadcast",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"loop_count",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"is_spherical",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"permalink_url",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"captions_url",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"dash_prefetch_experimental",storageKey:null},w={alias:null,args:null,concreteType:"VideoCaptionLocale",kind:"LinkedField",name:"video_available_captions_locales",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"localized_creation_method",storageKey:null}],storageKey:null},x={alias:null,args:[{kind:"Literal",name:"context",value:"DEFAULT"},{kind:"Literal",name:"supported",value:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"]}],concreteType:null,kind:"LinkedField",name:"comet_video_player_implementations",plural:!0,selections:[e,{kind:"InlineFragment",selections:[{documentName:"useRelay3DVideoImplementations_video",fragmentName:"useRelay3DOzImplementation_implementation",fragmentPropName:"implementation",kind:"ModuleImport"}],type:"CometVideoPlayerOzImplementation",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRelay3DVideoImplementations_video",fragmentName:"useRelay3DShakaImplementation_implementation",fragmentPropName:"implementation",kind:"ModuleImport"}],type:"CometVideoPlayerShakaImplementation",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRelay3DVideoImplementations_video",fragmentName:"useRelay3DProgressiveImplementation_implementation",fragmentPropName:"implementation",kind:"ModuleImport"}],type:"CometVideoPlayerProgressiveImplementation",abstractKey:null}],storageKey:'comet_video_player_implementations(context:"DEFAULT",supported:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"])'},y={alias:null,args:null,kind:"ScalarField",name:"can_use_oz",storageKey:null},z={alias:"playable_url_dash",args:[{kind:"Literal",name:"scrubbing_preference",value:"MPEG_DASH"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(scrubbing_preference:"MPEG_DASH")'},A={alias:null,args:null,kind:"ScalarField",name:"dash_manifest",storageKey:null},B={alias:null,args:null,kind:"ScalarField",name:"min_quality_preference",storageKey:null},C=[i,{alias:null,args:null,kind:"ScalarField",name:"start",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"representation_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mime_codec",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"segment_type",storageKey:null}];C={alias:null,args:null,concreteType:"VideoPrefetchResources",kind:"LinkedField",name:"dash_prefetch_resources",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoPrefetchResource",kind:"LinkedField",name:"audio",plural:!0,selections:C,storageKey:null},{alias:null,args:null,concreteType:"VideoPrefetchResource",kind:"LinkedField",name:"video",plural:!0,selections:C,storageKey:null}],storageKey:null};var D={alias:null,args:null,concreteType:"VideoPlayerShakaLiveP2PInit",kind:"LinkedField",name:"video_player_shaka_live_p2p_init",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"json_encoded_video_data",storageKey:null}],storageKey:null},E={alias:null,args:null,kind:"ScalarField",name:"playable_url",storageKey:null},F={alias:"playable_url_quality_hd",args:[{kind:"Literal",name:"quality",value:"HD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"HD")'},G={alias:null,args:null,concreteType:"SphericalVideoFallbackUrls",kind:"LinkedField",name:"spherical_video_fallback_urls",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hd",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sd",storageKey:null}],storageKey:null},H={alias:null,args:null,kind:"ScalarField",name:"comet_video_player_static_config",storageKey:null},I={alias:null,args:null,kind:"ScalarField",name:"comet_video_player_context_sensitive_config",storageKey:null},J={alias:null,args:null,concreteType:"VideoPlayerShakaPerformanceLoggerInit",kind:"LinkedField",name:"video_player_shaka_performance_logger_init",plural:!1,selections:[{documentName:"useVideoPlayerShakaPerformanceLoggerRelay_video",fragmentName:"useVideoPlayerShakaPerformanceLoggerRelay_init",fragmentPropName:"init",kind:"ModuleImport"}],storageKey:null},K={alias:null,args:null,kind:"ScalarField",name:"autoplay_gating_result",storageKey:null},L={alias:null,args:null,kind:"ScalarField",name:"viewer_autoplay_setting",storageKey:null},M={alias:null,args:null,kind:"ScalarField",name:"can_autoplay",storageKey:null},N={alias:null,args:null,kind:"ScalarField",name:"drm_info",storageKey:null},O={alias:null,args:null,concreteType:"CaptionsSettings",kind:"LinkedField",name:"captions_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"always_show_captions",storageKey:null},h],storageKey:null},P={alias:null,args:null,concreteType:"VideoBroadcastLowLatencyConfig",kind:"LinkedField",name:"broadcast_low_latency_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ll_desired_latency_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ll_latency_tolerance_ms",storageKey:null}],storageKey:null},Q={alias:null,args:null,concreteType:"SphericalVideoRenderer",kind:"LinkedField",name:"spherical_video_renderer",plural:!1,selections:[{documentName:"VideoPlayerRelay_video_spherical_video_renderer",fragmentName:"VideoPlayerSphericalRelay_sphericalVideoRenderer",fragmentPropName:"sphericalVideoRenderer",kind:"ModuleImport"}],storageKey:null},R={alias:null,args:null,concreteType:"InstreamVideoAdBreaks",kind:"LinkedField",name:"instream_video_ad_breaks_comet",plural:!1,selections:[{documentName:"VideoPlayerRelay_video_instream_video_ad_breaks_comet",fragmentName:"InstreamVideoAdBreaksPlayer_adBreaks",fragmentPropName:"adBreaks",kind:"ModuleImport"}],storageKey:null},S=[h],T={kind:"InlineFragment",selections:S,type:"Node",abstractKey:"__isNode"};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoEndscreenAndChainingQuery",selections:[{alias:null,args:b,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[{alias:"live_video_endscreen_channel",args:c,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[{alias:null,args:d,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoChannelFeedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"CometGamingVideoThumbnail_video"}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"VideoPlayerWithLiveVideoEndscreenAndChainingQuery",selections:[{alias:null,args:b,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[{alias:"live_video_endscreen_channel",args:c,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[e,{alias:null,args:d,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoChannelFeedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[e,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[e,{kind:"InlineFragment",selections:[f,{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},g,{alias:null,args:null,kind:"ScalarField",name:"live_viewer_count_read_only",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[e,h],storageKey:null},i,{alias:null,args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},j,{alias:null,args:null,kind:"ScalarField",name:"is_premiere",storageKey:null},{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[g,{alias:null,args:null,kind:"ScalarField",name:"image_preview_payload",storageKey:null},h],storageKey:null},{"if":null,kind:"Defer",label:"CometGamingVideoThumbnail_video$defer$CometGamingVideoThumbnailPreview_video",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"smart_preview_video",plural:!1,selections:[h,k,l,m,n,f,j,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R],storageKey:null},h,k,l,m,n,f,j,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R]}],type:"Video",abstractKey:null},T,{kind:"InlineFragment",selections:S,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:S,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:S,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null},T,{kind:"InlineFragment",selections:S,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null},h],storageKey:null},h],storageKey:null}]},params:{id:"3395093367239697",metadata:{},name:"VideoPlayerWithLiveVideoEndscreenAndChainingQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("VideoPlayerWithLiveVideoEndscreenAndChaining_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoEndscreenAndChaining_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"VideoPlayerWithLiveVideoEndscreen_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWithLiveVideoEndscreen_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoEndscreen_video",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"live_end_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometGamingCvcBadge.react",["ix","BaseRow.react","BaseRowItem.react","React","TetraIcon.react","TetraText.react","fbicon","intlSummarizeNumber","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j={iconWithLabel:{marginEnd:"fv0vnmcu"},root:{alignItems:"bp9cbjyn",backgroundColor:"ora8z2hr",borderTop:"gcieejh5",borderEnd:"bn081pho",borderBottom:"humdl8nn",borderStart:"izx4hr6d",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"btwxx1t3",height:"datstx6m",justifyContent:"taijpn5t",marginTop:"rs0gx3tq",marginEnd:"kady6ibp",marginBottom:"dicw6rsg",marginStart:"dwxx2s2f",overflowX:"ni8dbmo4",overflowY:"stjgntxs",paddingTop:"ipjc6fyt",paddingEnd:"p8fzw8mz",paddingBottom:"iuny7tx3",paddingStart:"pcp91wgn",position:"l9j0dhe7",textDecoration:"esuyzwwr"}};function a(a){a=a.initialViewerCount;return i.jsx("div",{className:(h||(h=b("stylex")))(j.root),children:i.jsxs(b("BaseRow.react"),{align:"center",verticalAlign:"center",children:[i.jsx(b("BaseRowItem.react"),{xstyle:j.iconWithLabel,children:i.jsx(b("TetraIcon.react"),{color:"white",icon:b("fbicon")._(g("491228"),20)})}),i.jsx(b("BaseRowItem.react"),{children:i.jsx(b("TetraText.react"),{color:"white",numberOfLines:1,type:"body4",children:b("intlSummarizeNumber")(a)})})]})})}}),null);
__d("CometGamingVideoThumbnail.react",["CometAspectRatioContainer.react","CometGamingCvcBadge.react","CometImage.react","CometPlaceholder.react","CometPressable.react","CometRelay","LiveVideoCometBadge.react","React","VideoBlurBackgroundContainer.react","VideoBroadcastStatus","emptyFunction","getGamingCaller","requireCond","stylex","usePlayerOriginRouteTracePolicy","cr:1291368","cr:1677603","CometGamingVideoThumbnail_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j=(c=b("cr:1291368"))!=null?c:b("emptyFunction"),k={centered:{alignItems:"bp9cbjyn",display:"j83agx80",height:"datstx6m",justifyContent:"taijpn5t",position:"l9j0dhe7"},cvc:{display:"j83agx80",height:"rgmg9uty",pointerEvents:"hzruof5a",position:"pmk7jnqg",start:"hnlv2pgd",top:"plgsh5y4",zIndex:"tkr6xdv7"},playIcon:{boxSizing:"rq0escxv",left:"pzli0o6b",position:"pmk7jnqg",top:"rk01pc8j",transform:"py2didcb"},root:{borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm"},thumbnailImg:{height:"datstx6m"}},l=1920/1080,m=g!==void 0?g:g=b("CometGamingVideoThumbnail_video.graphql");function a(a){var c=a.onClick,d=a.playerOrigin,e=a.playerSubOrigin,f=a.routeTarget;a=a.video;var g=b("CometRelay").useFragment(m,a);a=g.broadcast_status;var n=g.image,o=g.live_viewer_count_read_only,p=g.title_with_fallback,q=g.url,r=g.video_channel,s=i.useState(!1),t=s[0],u=s[1];s=i.useCallback(function(){u(!0)},[u]);var v=i.useCallback(function(){u(!1)},[u]),w=b("usePlayerOriginRouteTracePolicy")(),x=b("getGamingCaller")(),y=j({extraData:{caller:x,channelID:r==null?void 0:r.id,origin:d,suborigin:e},href:q}),z=a===b("VideoBroadcastStatus").LIVE,A=n==null?void 0:n.uri;return i.jsx(b("CometPressable.react"),{"aria-label":(d=p)!=null?d:void 0,expanding:!0,linkProps:{passthroughProps:{caller:x,channelEntryPoint:"FACEBOOK_GAMING",channelID:r==null?void 0:r.id,initialTracePolicy:w,playerSubOrigin:e},preventLocalNavigation:y!=null,routeTarget:f,url:q},onHoverIn:s,onHoverOut:v,onPress:function(a){c==null?void 0:c(),y==null?void 0:y(a)},xstyle:k.root,children:function(a){var c;a=a.hovered;c=i.jsxs(b("CometAspectRatioContainer.react"),{aspectRatio:l,children:[z&&i.jsxs("div",{className:(h||(h=b("stylex")))(k.cvc),children:[i.jsx(b("LiveVideoCometBadge.react"),{pulse:!0,size:"small",video:g}),i.jsx(b("CometGamingCvcBadge.react"),{initialViewerCount:(c=o)!=null?c:0})]}),A!=null&&i.jsx("div",{className:(h||(h=b("stylex")))(k.centered),children:i.jsx(b("CometImage.react"),{alt:(c=p)!=null?c:"",src:A,xstyle:k.thumbnailImg})}),i.jsx(b("CometPlaceholder.react"),{fallback:null,children:b("cr:1677603")!=null&&i.jsx(b("cr:1677603"),{hidePreview:v,isPreviewVisible:t,video:g})}),a&&i.jsx(b("CometImage.react"),{src:"/images/video/play_48dp.png",xstyle:k.playIcon})]});return i.jsx(b("VideoBlurBackgroundContainer.react"),{video:g,children:c})}})}}),null);
__d("CometGamingVideoThumbnailPreviewDeferred.react",["React","deferredLoadComponent","requireDeferred"],(function(a,b,c,d,e,f){"use strict";b("React");a=b("deferredLoadComponent")(b("requireDeferred")("CometGamingVideoThumbnailPreview.react"));c=a;e.exports=c}),null);
__d("VideoPlayerWithLiveVideoEndscreen.react",["fbt","CometRelay","React","TetraTextPairing.react","VideoPlayerHooks","VideoPlayerInteractionOverlay.react","stylex","VideoPlayerWithLiveVideoEndscreen_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");function a(a){var c=b("VideoPlayerHooks").useEnded(),d=b("VideoPlayerHooks").useIsLive(),e=b("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerWithLiveVideoEndscreen_video.graphql"),a.video);if(!c||!d)return null;c=g._("This live video has ended.");return i.jsx(b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{children:i.jsx("div",{className:"taijpn5t cbu4d94t j83agx80 s8bbyrx9 bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",children:i.jsxs("div",{className:"d46ut3hm",children:[i.jsx(b("TetraTextPairing.react"),{body:e==null?void 0:(d=e.live_end_text)==null?void 0:d.text,bodyColor:"white",headline:c,headlineColor:"white",level:2,textAlign:"center"}),a.children]})})})}}),null);
__d("VideoPlayerWithLiveVideoEndscreenAndChaining.react",["BaseGlimmer.react","CometGamingVideoThumbnail.react","CometPlaceholder.react","CometRelay","CometRow.react","CometRowItem.react","React","VideoPlayerHooks","VideoPlayerWithLiveVideoEndscreen.react","gkx","recoverableViolation","stylex","VideoPlayerWithLiveVideoEndscreenAndChainingQuery.graphql","VideoPlayerWithLiveVideoEndscreenAndChaining_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j=g!==void 0?g:g=b("VideoPlayerWithLiveVideoEndscreenAndChainingQuery.graphql");function a(a){var c=a.routeTarget;a=a.video;var d=b("VideoPlayerHooks").useEnded(),e=b("VideoPlayerHooks").useIsLive();a=b("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerWithLiveVideoEndscreenAndChaining_video.graphql"),a);var f=a==null?void 0:a.id;if(!d||!e||f==null)return null;f===""&&b("recoverableViolation")("Live Video Endscreen with Chaining has an empty string videoID","comet_live_video");return b("gkx")("1224637")?i.jsx(b("VideoPlayerWithLiveVideoEndscreen.react"),{video:a}):i.jsx(b("VideoPlayerWithLiveVideoEndscreen.react"),{video:a,children:i.jsx(b("CometPlaceholder.react"),{fallback:i.jsx(l,{}),children:i.jsx(k,{routeTarget:c,videoID:f})})})}function k(a){var c=b("CometRelay").useLazyLoadQuery(j,{caller:"LIVE_CHAINING",entryPoint:"LIVE_VIDEO_ENDSCREEN",first:3,videoID:a.videoID}),d=c==null?void 0:c.video;if(d==null){b("recoverableViolation")("Live Video Endscreen with Chaining has null video","comet_live_video");return null}c=(c==null?void 0:(d=c.video)==null?void 0:(c=d.live_video_endscreen_channel)==null?void 0:(d=c.video_channel_feed)==null?void 0:d.edges)||[];d=c.map(function(c,d){c=c==null?void 0:(c=c.node)==null?void 0:(c=c.attachments)==null?void 0:c[0].media;return c==null?null:i.jsx(b("CometRowItem.react"),{children:i.jsx(b("CometGamingVideoThumbnail.react"),{playerOrigin:"live_video_end_screen",playerSubOrigin:"tahoe",routeTarget:a.routeTarget,video:c},d)},d)}).filter(Boolean);return i.jsx(b("CometRow.react"),{align:"center",columns:3,paddingTop:16,children:d})}function l(){return i.jsxs(b("CometRow.react"),{align:"center",columns:3,paddingTop:16,children:[i.jsx(b("CometRowItem.react"),{children:i.jsx(b("BaseGlimmer.react"),{className:"oghtd16d kzx2olss aot14ch1 p86d2i9g beltcj47",index:0})},0),i.jsx(b("CometRowItem.react"),{children:i.jsx(b("BaseGlimmer.react"),{className:"oghtd16d kzx2olss aot14ch1 p86d2i9g beltcj47",index:0})},1),i.jsx(b("CometRowItem.react"),{children:i.jsx(b("BaseGlimmer.react"),{className:"oghtd16d kzx2olss aot14ch1 p86d2i9g beltcj47",index:0})},2)]})}}),null);