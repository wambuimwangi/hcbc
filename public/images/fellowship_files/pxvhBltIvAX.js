if (self.CavalryLogger) { CavalryLogger.start_js(["Acv2d"]); }

__d("VideoPlayerWithVideoHomeLiveUpNextQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},f=[b],g={kind:"InlineFragment",selections:f,type:"Node",abstractKey:"__isNode"},h={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithVideoHomeLiveUpNextQuery",selections:[{args:null,kind:"FragmentSpread",name:"CometVideoHomeLiveUpNextOverlay_query"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"VideoPlayerWithVideoHomeLiveUpNextQuery",selections:[{alias:null,args:[{kind:"Literal",name:"section_type",value:"WWW_LIVE_HERO"}],concreteType:"VideoHomeSection",kind:"LinkedField",name:"video_home_section",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoHomeSectionComponentsConnection",kind:"LinkedField",name:"section_components",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"feed_unit",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[a,{kind:"InlineFragment",selections:[b,{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:145},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:257}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[c],storageKey:'image(height:145,sizing:"cover-fill-cropped",width:257)'},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[d,e,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[a,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},c,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},g],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[d,e,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[d,e,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[a,{kind:"InlineFragment",selections:[b,h],type:"User",abstractKey:null},g],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[a,{kind:"TypeDiscriminator",abstractKey:"__isEntity"},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:"mobileUrl",args:[{kind:"Literal",name:"site",value:"mobile"}],kind:"ScalarField",name:"url",storageKey:'url(site:"mobile")'},{kind:"InlineFragment",selections:[b,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"web_link",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"fbclid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lynx_mode",storageKey:null}],type:"ExternalWebLink",abstractKey:null}],storageKey:null}],type:"WebLinkable",abstractKey:"__isWebLinkable"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},b,{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[i,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[i,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null},g],storageKey:null},d,e],storageKey:null},{alias:null,args:null,concreteType:"ColorAtRange",kind:"LinkedField",name:"color_ranges",plural:!0,selections:[d,e,{alias:null,args:null,kind:"ScalarField",name:"hex_rgb_color_with_pound_key",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a,h,b],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_premiere",storageKey:null}],type:"Video",abstractKey:null},g,{kind:"InlineFragment",selections:f,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:f,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:f,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null},g,{kind:"InlineFragment",selections:f,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null}],storageKey:null}],type:"VideoHomeFeedUnitSectionComponent",abstractKey:null},g],storageKey:null}],storageKey:null},b],storageKey:'video_home_section(section_type:"WWW_LIVE_HERO")'}]},params:{id:"3319851368068468",metadata:{},name:"VideoPlayerWithVideoHomeLiveUpNextQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometVideoHomeLiveHeroPlayerWrapper_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"isComet"}],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveHeroPlayerWrapper_story",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{condition:"isComet",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"CometVideoHomeLiveHeroPlayer_video"}]},{condition:"isComet",kind:"Condition",passingValue:!1,selections:[{args:null,kind:"FragmentSpread",name:"VideoHomeLiveHeroPlayer_video"}]}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeLiveHeroUFI_story"}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeLiveHeroPlayerOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveHeroPlayerOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"live_rewind_enabled",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"Page",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"savable_description",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoLink_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeVideoOwnerLink_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeThreeDotContextMenuWrapper_video"}],type:"Video",abstractKey:null}}();e.exports=a}),null);
__d("CometVideoHomeLiveHeroPlayerSurface_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveHeroPlayerSurface_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{args:null,kind:"FragmentSpread",name:"VideoPlayerWithLiveVideoIndicator_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeLiveHeroPlayerOverlay_video"},{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerWithVideoCardsOverlay_video"}]},{args:null,kind:"FragmentSpread",name:"VideoPlayerWithLiveVideoEndscreen_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerDefaultControls_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeLiveHeroPlayer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveHeroPlayer_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"VideoPlayerRelay_video"},{args:null,kind:"FragmentSpread",name:"CometVideoHomeLiveHeroPlayerSurface_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeLiveUpNextOverlay_query.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveUpNextOverlay_query",selections:[{alias:null,args:[{kind:"Literal",name:"section_type",value:"WWW_LIVE_HERO"}],concreteType:"VideoHomeSection",kind:"LinkedField",name:"video_home_section",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoHomeSectionComponentsConnection",kind:"LinkedField",name:"section_components",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"feed_unit",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometTahoeUpNextOverlay_video"}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],type:"VideoHomeFeedUnitSectionComponent",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'video_home_section(section_type:"WWW_LIVE_HERO")'}],type:"Query",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeLiveHeroUFI_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveHeroUFI_story",selections:[{args:null,kind:"FragmentSpread",name:"CometVideoHomeBlueDesignFeedUnitUFI_story"}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeLiveUpNextOverlay.react",["CometRelay","CometTahoeUpNextOverlay.react","CometVideoHomeLiveContext","React","XCometVideoHomeLiveControllerRouteBuilder","requireDeferred","stylex","CometVideoHomeLiveUpNextOverlay_query.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=b("requireDeferred")("VideoHomeTypedLoggerLite"),j=5;function a(a){var b=h.useState(!1),c=b[0];b=b[1];return c?null:h.jsx(k,babelHelpers["extends"]({},a,{setCancelled:b}))}function k(a){var c=a.query,d=a.setCancelled;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeLiveUpNextOverlay_query.graphql"),c);c=a.video_home_section;a=h.useContext(b("CometVideoHomeLiveContext"));var e=a.setHotswapVideoID,f=c==null?void 0:(a=c.section_components)==null?void 0:(c=a.nodes)==null?void 0:(a=c[0])==null?void 0:(c=a.feed_unit)==null?void 0:(a=c.attachments)==null?void 0:(c=a[0])==null?void 0:c.media;if(f==null)return null;a={};f.id!=null&&(a.v=f.id);c=b("XCometVideoHomeLiveControllerRouteBuilder").buildURL(a);a=function(){e(f.id),i.onReady(function(a){a.log({event:"www_live_hero_up_next_chain",event_target:"video",event_target_id:f.id})})};return h.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg mrt03zmi n7fi1qx3 i09qtzwb qqguqgly",children:h.jsx(b("CometTahoeUpNextOverlay.react"),{isMakingProgress:!0,navigateToNextVideo:a,nextVideoURL:c,onCancelCallback:function(){return d(!0)},onProgressDone:a,timeoutSec:j,video:f,visible:!0})})}}),null);
__d("VideoPlayerWithVideoHomeLiveUpNext.react",["CometPlaceholder.react","CometRelay","CometVideoHomeLiveUpNextOverlay.react","React","VideoPlayerHooks","VideoPlayerWithVideoHomeLiveUpNextQuery.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=b("VideoPlayerHooks").useEnded();return!c?null:h.jsx(b("CometPlaceholder.react"),{fallback:null,children:h.jsx(i,babelHelpers["extends"]({},a))})}function i(a){var c=b("CometRelay").useLazyLoadQuery(g!==void 0?g:g=b("VideoPlayerWithVideoHomeLiveUpNextQuery.graphql"),{});return h.jsx(b("CometVideoHomeLiveUpNextOverlay.react"),babelHelpers["extends"]({},a,{query:c}))}}),null);
__d("CometVideoHomeLiveHeroUFI.react",["CometRelay","CometVideoHomeBlueDesignFeedUnitUFI.react","CometVideoHomeLiveUFIContext","React","gkx","stylex","CometVideoHomeLiveHeroUFI_story.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeLiveHeroUFI_story.graphql"),a.story);return h.jsx("div",{className:"l9j0dhe7 d2edcug0 f9o22wc5 ad2k81qe cwj9ozl2"+(b("gkx")("708253")?" bglkmn5o":""),children:h.jsx(b("CometVideoHomeLiveUFIContext").Provider,{value:{renderConfig:"www_live_tab_hero"},children:h.jsx(b("CometVideoHomeBlueDesignFeedUnitUFI.react"),{autoExpandComments:a.expandComments,story:c})})})}}),null);
__d("CometVideoHomeLiveHeroPlayerWrapper.react",["CometErrorRoot.react","CometRelay","CometVideoHomeLiveHeroUFI.react","React","VideoHomeCometErrorBoundary.react","requireCond","cr:1157945","cr:1005306","cr:1157946","CometVideoHomeLiveHeroPlayerWrapper_story.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c,d=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeLiveHeroPlayerWrapper_story.graphql"),a.story);c=d==null?void 0:(c=d.attachments)==null?void 0:(c=c[0])==null?void 0:c.media;if(d==null||c==null)return null;var e=null;b("cr:1157945")!==null?e=h.jsx(b("cr:1157945"),{video:c}):b("cr:1157946")!==null&&b("cr:1005306")!==null&&(e=h.jsx(b("cr:1157946"),{playerOrigin:a.playerOrigin,playerSubOrigin:a.playerSubOrigin,reactionVideoChannelType:a.reactionVideoChannelType,video:c}));return h.jsx(b("VideoHomeCometErrorBoundary.react"),{fallback:function(){return h.jsx(b("CometErrorRoot.react"),{})},moduleClass:"CometVideoHomeLiveHeroPlayerWrapper",children:h.jsxs(h.Fragment,{children:[e,a.disableUFI!==!0&&h.jsx(b("CometVideoHomeLiveHeroUFI.react"),{expandComments:a.playerSubOrigin==="live_hero"&&a.playerOrigin==="pages_live_tab",story:d})]})})}}),null);
__d("CometVideoHomeVerifiedPageTooltip.react",["ix","fbt","CometTooltip.react","React","TetraIcon.react","TetraTextPairing.react","fbicon","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i=b("React");function j(){var a=h._("Verified Page"),c=h._("Facebook confirmed this is an authentic Page for this public figure, media company or brand.");return i.jsx("div",{children:i.jsx(b("TetraTextPairing.react"),{body:c,bodyLineLimit:2,headline:a,headlineLineLimit:1,level:3})})}function a(a){a=a.xstyle;return i.jsx("span",{className:a!=null?a:"bk00n993 pmk7jnqg hnxzwevs",children:i.jsx(b("CometTooltip.react"),{align:"start",position:"above",tooltip:i.jsx(j,{}),children:i.jsx(b("TetraIcon.react"),{color:"highlight",icon:b("fbicon")._(g("498144"),12),size:12})})})}}),null);
__d("CometVideoHomeLiveHeroPlayer.react",["CometRelay","CometVideoHomeLiveContext","React","VideoPlayerLoggingSuboriginContext","VideoPlayerRelay.react","deferredLoadComponent","requireDeferredForDisplay","stylex","unrecoverableViolation","CometVideoHomeLiveHeroPlayer_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=b("deferredLoadComponent")(b("requireDeferredForDisplay")("CometVideoHomeLiveHeroPlayerSurface.react"));function a(a){var c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeLiveHeroPlayer_video.graphql"),a.video);a=h.useContext(b("CometVideoHomeLiveContext"));var d=a.setHeroVideoID;a=a.startTimestamp;h.useEffect(function(){d(c.id)},[d,c.id]);var e=h.useContext(b("VideoPlayerLoggingSuboriginContext"));if(e==null)throw b("unrecoverableViolation")("Missing or empty subOrigin. Did you forget the VideoHomeLoggingSuboriginContext provider or the value in it?","watch_www_bug_rotation");a=h.jsx("div",{className:"k4urcfbm taijpn5t datstx6m j83agx80",children:h.jsx("div",{className:"bglkmn5o l9j0dhe7 d2edcug0 nwf6jgls tqsryivl",children:h.jsx(b("VideoPlayerRelay.react"),{initialForceHD:!0,portalingEnabled:!0,startTimestamp:a,subOrigin:e,video:c,children:h.jsx(i,{subOrigin:e,video:c})})})});return h.jsx("div",{className:"cxj30y35",children:a})}}),null);
__d("CometVideoHomeLiveHeroPlayerOverlay.react",["fbt","CometImageIcon.react","CometRelay","CometVideoHomeChainingCallerContext","CometVideoHomeLiveLoggerContext","CometVideoHomeLiveUtils","CometVideoHomeVerifiedPageTooltip.react","CometVideoHomeVideoLink.react","CometVideoHomeVideoOwnerLink.react","LiveVideoDestinationTypedLoggerLite","React","TetraTextPairing.react","VideoBroadcastStatus","gkx","requireCond","stylex","useVideoPlayerDefaultControlsVisibility","cr:1427299","CometVideoHomeLiveHeroPlayerOverlay_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=b("React"),k=h!==void 0?h:h=b("CometVideoHomeLiveHeroPlayerOverlay_video.graphql");function a(a){var c,d;a=b("CometRelay").useFragment(k,a.video);var e=j.useContext(b("CometVideoHomeChainingCallerContext")),f=j.useContext(b("CometVideoHomeLiveLoggerContext")),h=f.timeEntered;f=b("useVideoPlayerDefaultControlsVisibility")({forceVisibleOnMount:!0});f=f.isControlsVisible;if(!f)return null;f=(f=a.owner)==null?void 0:(f=f.profile_picture)==null?void 0:f.uri;c=(c=a.owner)==null?void 0:c.name;d=a.name!=null&&a.name!==""?a.name:(d=a.savable_description)==null?void 0:d.text;var l=a.broadcast_status===b("VideoBroadcastStatus").LIVE,m=Boolean(a==null?void 0:a.live_rewind_enabled)&&b("gkx")("1406599");return j.jsxs(j.Fragment,{children:[!l&&j.jsx("div",{className:"k4urcfbm sizpolk9 kr520xx4 pmk7jnqg pioscnbf kpb67iw4"}),l&&m&&j.jsx("div",{className:"k4urcfbm pmk7jnqg pe468gzs i09qtzwb kpb67iw4"}),j.jsxs("div",{className:(i||(i=b("stylex"))).dedupe({"align-items-1":"bp9cbjyn","bottom-1":"lfi1tu6t","display-1":"j83agx80","end-1":"cypi58rs","max-width-1":"d2edcug0","overflow-x-1":"ni8dbmo4","overflow-y-1":"stjgntxs","position-1":"pmk7jnqg","start-1":"re5koujm"},l?null:{"bottom-1":"erznsawz","top-1":"dn56xbwz"},m&&l?{"bottom-1":"mio9le5o"}:null),children:[j.jsx("div",{className:"j102wcjv",children:j.jsx(b("CometVideoHomeVideoOwnerLink.react"),{"aria-label":g._("Link to Profile"),video:a,children:f!=null&&j.jsx(b("CometImageIcon.react"),{size:48,src:f})})}),j.jsxs("div",{className:"hpfvmrgz ozuftl9m gso5pdkr"+(l?" izkdicnu":""),children:[j.jsxs("div",{className:"j83agx80 bp9cbjyn",children:[d!=null&&d!==""&&j.jsx("span",{className:"oytq2wg0 hpfvmrgz n3ffmt46 a5q79mjw bnpdmtie ljqsnud1",children:j.jsx(b("CometVideoHomeVideoLink.react"),{caller:e,clickPoint:"video_title",onClick:function(a){b("LiveVideoDestinationTypedLoggerLite").log({event:"exited_surface",next_surface:"fullscreen",time_spent_ms:b("CometVideoHomeLiveUtils").getTimeSpent(h)})},openInTahoe:!0,video:a,children:j.jsx(b("TetraTextPairing.react"),{body:d,bodyColor:"white",bodyLineLimit:1,headlineColor:"white",headlineLineLimit:1,level:1})})}),!l&&j.jsx("div",{className:"pcp91wgn pby63qed p8fzw8mz linoseic h676nmdw e9vueds3 pfnyh3mw ljqsnud1 qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj d6rk862h",children:g._("Recorded Live")})]}),j.jsxs("div",{className:"l9j0dhe7 fdg1wqfs jq4qci2q j1xjxeot j102wcjv",children:[j.jsx(b("CometVideoHomeVideoOwnerLink.react"),{video:a,children:c}),((m=a.owner)==null?void 0:m.is_verified)===!0&&j.jsx(b("CometVideoHomeVerifiedPageTooltip.react"),{})]})]})]}),b("cr:1427299")&&j.jsx("div",{className:"fcg2cn6m pmk7jnqg swmj3c3o",children:j.jsx(b("cr:1427299"),{video:a,videoMenuLocation:"VIDEO_HOME_LIVE_TAB"})})]})}}),null);
__d("CometVideoHomeLiveHeroPlayerSurface.react",["CometPlaceholder.react","CometRelay","CometRouteURL","CometUFIVideoPlayerUtils","CometVideoHomeLiveHeroPlayerOverlay.react","React","VideoHomeLoggingReactionVideoChannelTypeContext","VideoPlayerDefaultControls.react","VideoPlayerHooks","VideoPlayerInteractionOverlay.react","VideoPlayerSurface.react","VideoPlayerWithAutoCenterOnUserInitiatedPlay.react","VideoPlayerWithLiveVideoIndicator.react","requireCond","requireDeferred","useVideoPlayerClickToPlayInteraction","useVideoPlayerClickToTahoeInteraction","cr:1406285","cr:1678842","cr:1359970","CometVideoHomeLiveHeroPlayerSurface_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=b("requireDeferred")("VideoHomeTypedLoggerLite");function a(a){var c=a.subOrigin;a=a.video;var d=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeLiveHeroPlayerSurface_video.graphql"),a),e=h.useContext(b("VideoHomeLoggingReactionVideoChannelTypeContext")),f=d.url;a=h.useCallback(function(){i.onReady(function(a){a.log({event:"click",event_target:"video",event_target_id:d.id,event_target_info:f,section_video_channel_type:e})})},[e,d.id,f]);a=b("useVideoPlayerClickToTahoeInteraction")({onClick:a,reactionVideoChannelType:e,subOrigin:c,videoTahoeUrl:f});var j=b("useVideoPlayerClickToPlayInteraction")(),k=h.useMemo(function(){return{subOrigin:c,videoTahoeUrl:f}},[c,f]),l=b("CometRouteURL").useRouteURLParams(),m=Number(l==null?void 0:l.notif_id)||null,n=String(l==null?void 0:l.extid)||null,o=b("VideoPlayerHooks").useController();h.useEffect(function(){o.setAdditionalLogData("notification_id",m),o.setAdditionalLogData("notification_medium","jewel"),o.setAdditionalLogData("permalink_share_id",n)},[m,n,o]);return h.jsxs(b("VideoPlayerSurface.react"),{children:[h.jsx(b("VideoPlayerDefaultControls.react"),{forceVisibleOnMount:!0,subOrigin:"topic_live",video:d,videoTahoeUrl:f}),h.jsx(b("CometUFIVideoPlayerUtils").CometUFIVideoPlayerStateAndControllerExtractor,{data:k}),h.jsx(b("VideoPlayerWithLiveVideoIndicator.react"),{hasCometNavOverlay:!1,video:d}),h.jsx(b("CometPlaceholder.react"),{fallback:null,children:h.jsx(b("cr:1678842"),{surface:"COMET_HERO",video:d})}),h.jsx(b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{pressInteraction:a}),j!=null?h.jsx(b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,{pressInteraction:j}):null,h.jsx(b("CometVideoHomeLiveHeroPlayerOverlay.react"),{video:d}),b("cr:1406285")!=null&&h.jsx(b("cr:1406285"),{video:d}),b("cr:1359970")!=null&&h.jsx(b("cr:1359970"),{}),h.jsx(b("VideoPlayerWithAutoCenterOnUserInitiatedPlay.react"),{})]})}}),null);