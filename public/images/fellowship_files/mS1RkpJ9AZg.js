if (self.CavalryLogger) { CavalryLogger.start_js(["Z+o\/G"]); }

__d("CometVideoHomeVideoOwnerLink_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeVideoOwnerLink_video",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeThreeDotContextMenuWrapper_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeThreeDotContextMenuWrapper_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoGridCardGlimmer.react",["BaseGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=146,i=256;function a(a){var c=a.index,d=a.height;d=d===void 0?h:d;a=a.width;a=a===void 0?i:a;return g.jsxs("div",{className:"cbu4d94t j83agx80",children:[g.jsx(b("BaseGlimmer.react"),{className:"kzx2olss aot14ch1 p86d2i9g beltcj47",index:c,children:g.jsx("div",{style:{paddingTop:"calc("+d+" / "+a+" * 100%)"}})}),g.jsxs("div",{className:"tr9rh885",children:[g.jsx(b("BaseGlimmer.react"),{className:"g14fb8az oud54xpy cyypbtt7 kzx2olss aot14ch1 p86d2i9g beltcj47",index:c}),g.jsx(b("BaseGlimmer.react"),{className:"pnicyljo bsodd3zb kzx2olss aot14ch1 p86d2i9g beltcj47",index:c})]})]})}}),null);
__d("CometVideoHomeLiveHeroVideoGlimmer.react",["BaseGlimmer.react","React","gkx","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");c=461;d=530;f=48;var h=(b("gkx")("708253")?d:c)+f;function a(){return g.jsx("div",{className:"k4urcfbm a8nywdso qt6c0cv9 rz4wbd8a jb3vyjys stjgntxs ni8dbmo4 id8gkqje oygrvhab tci0nj69 trrkgow7 taijpn5t j83agx80 cddn0xzi",style:{height:h},children:g.jsx("div",{className:"d2edcug0 nwf6jgls taijpn5t j83agx80",children:g.jsx(b("BaseGlimmer.react"),{className:"k4urcfbm nwf6jgls",index:0})})})}}),null);
__d("CometVideoHomeVideoOwnerLink.react",["CometLink.react","CometRelay","React","XCometVideoHomePlaylistControllerRouteBuilder","CometVideoHomeVideoOwnerLink_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c,d=a.children,e=a.video;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","video"]);e=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeVideoOwnerLink_video.graphql"),e);e=(e==null?void 0:(c=e.owner)==null?void 0:c.uri_token)||(e==null?void 0:(c=e.owner)==null?void 0:c.id);if(e==null)return h.jsx(h.Fragment,{children:d});c=b("XCometVideoHomePlaylistControllerRouteBuilder").buildURL({idorvanity:e});return h.jsx(b("CometLink.react"),babelHelpers["extends"]({},a,{href:c,children:d}))}}),null);
__d("CometVideoHomeStoryContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({hideableToken:null,identifierToken:null,tracking:null});e.exports=c}),null);
__d("CometVideoHomeThreeDotContextMenuWrapper.react",["CometRelay","CometVideoHomeStoryContext","CometVideoHomeThreeDotContextMenu.react","CometVideoHomeThreeDotContextMenuWrapperContext","React","VideoHomeTypedLoggerLite","CometVideoHomeThreeDotContextMenuWrapper_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.color;c=c===void 0?"white":c;var d=a.video,e=a.videoChannelType;a=a.videoMenuLocation;d=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeThreeDotContextMenuWrapper_video.graphql"),d);var f=d.id;d=h.useState(!1);var i=d[0],j=d[1];d=h.useContext(b("CometVideoHomeStoryContext"));var k=d.hideableToken,l=d.identifierToken;d=d.tracking;var m=h.useContext(b("CometVideoHomeThreeDotContextMenuWrapperContext")),n=m.contextMenuEnabled,o=m.onHideVideo,p=m.tabType;n===null;if(n!==!0)return null;return f==null?null:h.jsx(b("CometVideoHomeThreeDotContextMenu.react"),{color:c,hideableToken:k,identifierToken:l,onHideVideo:function(){o&&o(f)},onPress:i?null:function(){b("VideoHomeTypedLoggerLite").log({click_target:"context_menu",event:"click",tab_type:p}),j(!0)},stopPropagation:!0,tracking:d,videoChannelType:e,videoID:f,videoMenuLocation:a||"VIDEO_HOME_LIVE_TAB"})}}),null);
__d("CometVideoHomeChainingCallerContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("CometVideoHomeRowGlimmer.react",["BaseGlimmer.react","CometFlexibleRow.react","CometVideoGridCardGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=4,j=2,k={card:{backgroundColor:"cwj9ozl2",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a"},header:{borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",height:"rgmg9uty",marginBottom:"sjgh65i0",width:"qio8uep8"},root:{marginTop:"jei6r52m"}};function a(a){var c=a.hideHeader,d=a.maxItems;d=d===void 0?i:d;var e=a.numRows;e=e===void 0?1:e;var f=a.useTransparentBackground;f=f===void 0?!1:f;a=a.xstyles;a=a===void 0?[]:a;var l=[],m=[];for(var n=0;n<d;n++)l.push(h.jsx(b("CometVideoGridCardGlimmer.react"),{index:0},n));for(var n=0;n<e;n++)m.push(h.jsxs("div",{className:(g||(g=b("stylex")))([!f&&k.card,k.root].concat(a)),children:[c!==!0&&h.jsx(b("BaseGlimmer.react"),{className:(g||(g=b("stylex")))(k.header),index:0}),h.jsx(b("CometFlexibleRow.react"),{columnMaxWidth:350,columnMinWidth:250,maxItems:d,minItems:j,children:l})]},n));return h.jsx(h.Fragment,{children:m})}}),null);
__d("CometVideoHomeRowSectionGlimmer.react",["CometVideoHomeRowGlimmer.react","React","gkx","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.glimmerXstyles;a=babelHelpers.objectWithoutPropertiesLoose(a,["glimmerXstyles"]);var d=b("gkx")("708253");return g.jsx("div",{className:(d?"t7yuvbsa nhadk0th":"")+" jei6r52m",children:g.jsx(b("CometVideoHomeRowGlimmer.react"),babelHelpers["extends"]({},a,{xstyles:c}))})}}),null);
__d("CometVideoHomeLiveContext",["React"],(function(a,b,c,d,e,f){"use strict";c=b("React");function a(){}d=c.createContext({hasInjectedVideo:!1,heroVideoID:null,hiddenVideoIDs:[],hotswapVideoID:null,setHeroVideoID:a,setHiddenVideoIDs:a,setHotswapVideoID:a,setVideoMuted:a,updateVisibleVideoIDs:a,videoMuted:!0,visibleVideoIDs:{}});e.exports=d}),null);
__d("CometVideoHomeLiveLoggerContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({setTimeRequested:function(){},timeEntered:null,timeRequested:{},totalVideos:0});e.exports=c}),null);
__d("CometVideoHomeLiveGridConstants",["stylex"],(function(a,b,c,d,e,f){"use strict";a=3;f.VIDEOS_PER_ROW=a;b=250;f.MIN_COLUMN_WIDTH=b;c=300;f.MAX_COLUMN_WIDTH=c;d=8;e=(c+d)*a-d;f.MAX_WIDTH=e;b={gridWidth:{maxWidth:"cl7tx4kc"}};c=b.gridWidth;f.GRID_WIDTH_XSTYLE=c}),null);