if (self.CavalryLogger) { CavalryLogger.start_js(["plJcN"]); }

__d("LiveVideoCometBadge_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LiveVideoCometBadge_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_premiere",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("useVideoOriginalDimensionsRelay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useVideoOriginalDimensionsRelay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_rotation",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWithLiveVideoIndicator_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoIndicator_video",selections:[{alias:"breakingStatus",args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},{alias:"videoId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"isPremiere",args:null,kind:"ScalarField",name:"is_premiere",storageKey:null},{alias:"liveViewerCount",args:null,kind:"ScalarField",name:"live_viewer_count_read_only",storageKey:null},{alias:"rehearsalInfo",args:null,concreteType:"LiveVideoRehearsalInfo",kind:"LinkedField",name:"rehearsal_info",plural:!1,selections:[{alias:"typeName",args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_gaming_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"publish_time",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("LiveVideoCometBadge.react",["fbt","BaseRow.react","BaseRowItem.react","CometRelay","React","TetraText.react","stylex","LiveVideoCometBadge_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=b("React"),k=function(a,b,c){if(a)return g._("LIVE BREAKING");return c?g._("PREMIERE"):b?g._("LIVE"):null};function a(a){var c=a.pulse;c=c===void 0?!1:c;var d=a.size;d=d===void 0?"small":d;a=a.video;a=b("CometRelay").useFragment(h!==void 0?h:h=b("LiveVideoCometBadge_video.graphql"),a);var e=!!a.breaking_status,f=!!a.is_live_streaming;a=!!a.is_premiere;return j.jsx("div",{className:(i||(i=b("stylex"))).dedupe({"background-color-1":"l44iypv3","border-top-start-radius-1":"jk6sbkaj","border-top-end-radius-1":"kdgqqoy6","border-bottom-end-radius-1":"ihh4hy1g","border-bottom-start-radius-1":"qttc61fc","box-sizing-1":"rq0escxv","display-1":"pq6dq46d","height-1":"datstx6m","margin-top-1":"rs0gx3tq","margin-end-1":"kady6ibp","margin-bottom-1":"dicw6rsg","margin-start-1":"dwxx2s2f"},d==="large"?{"padding-top-1":"l29c1vbm","padding-end-1":"dflh9lhu","padding-bottom-1":"j7796vcc","padding-start-1":"scb9dxdr"}:null,d==="small"?{"padding-top-1":"ipjc6fyt","padding-end-1":"ph5uu5jm","padding-bottom-1":"iuny7tx3","padding-start-1":"b3onmgus"}:null,c?{"animation-direction-1":"afxn4irw","animation-duration-1":"m8weaby5","animation-iteration-count-1":"ee40wjg4","animation-name-1":"q1gqmpn5","animation-timing-function-1":"jbu8tgem"}:null),children:j.jsx(b("BaseRow.react"),{align:"center",verticalAlign:"center",children:j.jsx(b("BaseRowItem.react"),{children:j.jsx(b("TetraText.react"),{color:"white",numberOfLines:1,type:d==="large"?"bodyLink3":"bodyLink4",children:k(e,f,a)})})})})}}),null);
__d("useVideoOriginalDimensionsRelay",["CometRelay","computeAspectRatio","useVideoOriginalDimensionsRelay_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;function a(a){a=b("CometRelay").useFragment(g!==void 0?g:g=b("useVideoOriginalDimensionsRelay_video.graphql"),a);var c=a==null?void 0:a.original_rotation;c=c==="ROTATE_LEFT"||c==="ROTATE_RIGHT";var d=c?a==null?void 0:a.original_height:a==null?void 0:a.original_width;c=c?a==null?void 0:a.original_width:a==null?void 0:a.original_height;a=b("computeAspectRatio")(d,c);return{originalAspectRatio:a,originalHeight:c,originalWidth:d}}}),null);
__d("GamingVideoBackLink.react",["ix","fbt","CometImage.react","CometPressable.react","React","XCometGamingControllerRouteBuilder","asset","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k=g("370949"),l=b("XCometGamingControllerRouteBuilder").buildURL({});function a(){var a=h._("Go to Facebook Gaming");return j.jsx(b("CometPressable.react"),{linkProps:{url:l},children:function(c){c=c.hovered;return j.jsxs("div",{className:"btwxx1t3 j83agx80",children:[j.jsx("span",{className:c?"e4zzj2sf art1omkt dpja2al7 pedkr2u6 pq6dq46d":"e4zzj2sf art1omkt dpja2al7 qwwmc0zo awjy3rxs pq6dq46d",children:j.jsx(b("CometImage.react"),{alt:h._("Close"),src:k})}),j.jsx("div",{className:(i||(i=b("stylex"))).dedupe(c?{"color-1":"r8mhfmj7","display-1":"a8c37x1j","padding-end-1":"dflh9lhu","position-1":"l9j0dhe7","text-decoration-0.1":"oo483o9r","top-1":"tmxdrx1h"}:{"display-1":"mkhogb32"}),children:a})]})}})}}),null);
__d("Duration.react",["React","ServerTime","clearTimeout","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=500,i=1e3,j=60,k=60;a=function(a){babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.state={duration:0};return b}var d=c.prototype;d.UNSAFE_componentWillMount=function(){this.$2()};d.componentWillUnmount=function(){b("clearTimeout")(this.$1)};d.$2=function(){var a=this,c;this.props.useLocalTime?c=Date.now():c=b("ServerTime").getMillis();this.setState({duration:Math.max(c-this.props.startTime,0)});this.$1=b("setTimeout")(function(){return a.$2()},h)};d.render=function(){var a=Math.floor(this.state.duration/i),b=a%j;a=Math.floor(a/j);var c=a%k;a=Math.floor(a/k);var d="";a>0&&(d=a+":");a=c+":";a.length<3&&d.length>0&&(a="0"+a);c=""+b;c.length<2&&(c="0"+c);return g.jsxs("span",{children:[d,a,c]})};return c}(g.Component);e.exports=a;a.defaultProps={useLocalTime:!1}}),null);
__d("idx",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,d){try{return d(a)}catch(a){if(a instanceof TypeError)if(b(a))return null;else if(c(a))return void 0;throw a}}var g;function b(a){a=a.message;g||(g=i("null"));return g.test(a)}var h;function c(a){a=a.message;h||(h=i("undefined"));return h.test(a)}function i(a){return new RegExp("^"+a+" | "+a+"$|^[^\\(]* "+a+" ")}}),null);
__d("intlSummarizeNumber",["FbtNumberType","IntlCompactDecimalNumberFormatConfig","IntlVariations","intlNumUtils"],(function(a,b,c,d,e,f){var g=3,h=14,i={ROUND:"ROUND",TRUNCATE:"TRUNCATE"},j={SHORT:"SHORT",LONG:"LONG"};function a(a,c,d,e){d===void 0&&(d=j.SHORT);e===void 0&&(e=i.ROUND);d=b("IntlCompactDecimalNumberFormatConfig")[d==j.SHORT?"short_patterns":"long_patterns"];var f=a===0?0:Math.floor(Math.log10(Math.abs(a)));f>h&&(f=h);var l=k(a,f,c,e,d),m=l[0],n=l[1];l=l[2];if(l){f+=1;l=k(a,f,c,e,d);m=l[0];n=l[1];l[2]}e=b("FbtNumberType").getVariation(m)||b("IntlVariations").NUMBER_OTHER;l=f.toString();l=(d=d)!=null?(d=d[l])!=null?d[e.toString()]:d:d;if(!l||f<g||l.positive_prefix_pattern===""&&l.positive_suffix_pattern===""){e=c===void 0?0:c;return b("intlNumUtils").formatNumberWithThousandDelimiters(a,e)}return l&&l.min_integer_digits===0&&m===1?l.positive_prefix_pattern+l.positive_suffix_pattern:(l&&l.positive_prefix_pattern||"")+b("intlNumUtils").formatNumberWithThousandDelimiters(m,n)+(l&&l.positive_suffix_pattern||"")}function k(a,c,d,e,f){var g=c.toString();g=(f=f)!=null?(f=f[g])!=null?f[b("IntlVariations").NUMBER_OTHER.toString()]:f:f;f=g&&g.min_integer_digits||c+1;var j=c-f+1;j=Math.abs(a)/Math.pow(10,j);var k=d!=null;d=k?d:g&&g.min_fraction_digits;d==null&&(d=c>2?1:0);g=e==i.TRUNCATE?b("intlNumUtils").truncateLongNumber(j.toString(),d):j.toFixed(d);e=parseFloat(g)*(a<0?-1:1);return[e,e%1===0&&!k?0:d,g.length>f+(d>0?d+1:0)+(j>=0?0:1)&&c<h]}e.exports=a}),null);
__d("VideoPlayerWithLiveVideoIndicator.react",["ix","fbt","CometImage.react","CometPlaceholder.react","CometRelay","CometRouteRenderType","Duration.react","GamingVideoBackLink.react","deferredLoadComponent","requireDeferred","React","TetraText.react","VideoBroadcastStatus","VideoPlayerHooks","asset","clearTimeout","intlSummarizeNumber","setTimeout","stylex","unrecoverableViolation","useVideoPlayerUnifiedCVCProvider","VideoPlayerWithLiveVideoIndicator_video.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j,k=b("deferredLoadComponent")(b("requireDeferred")("LiveVideoCometNuxForCVC.react")),l=b("React");function a(a){var c,d,e,f,g,h=(g=b("VideoPlayerHooks")).useIsLive(),q=g.useIsLiveRewindActive(),r=g.useIsFullscreen(),s=b("CometRouteRenderType").useIsMain(),t=g.usePlaying(),u=l.useRef(null),v=(g=a.isActiveLivingRoom)!=null?g:!1;g=b("CometRelay").useFragment(i!==void 0?i:i=b("VideoPlayerWithLiveVideoIndicator_video.graphql"),a.video);c=(c=g==null?void 0:g.videoId)!=null?c:"";if(g==null||typeof c!=="string"||c==="")throw b("unrecoverableViolation")("Null video or bad videoId","comet_live_video");var w=b("useVideoPlayerUnifiedCVCProvider").useVideoPlayerUnifiedCVCData();d=l.useState((d=g.liveViewerCount)!=null?d:0);var x=d[0],y=d[1];d=l.useState(!1);var z=d[0],A=d[1];d=l.useState(!1);var B=d[0],C=d[1];l.useEffect(function(){h&&w!=null&&(m(w.bs)?y(w.c):(y(0),A(!0)));if(v&&w!=null){var a;y((a=w.lvc)!=null?a:0)}},[w,h,v]);l.useEffect(function(){t?(C(!0),u.current=b("setTimeout")(function(){C(!1)},3e3)):u.current&&(C(!1),b("clearTimeout")(u.current));return function(){return b("clearTimeout")(u.current)}},[t]);d=((d=g.rehearsalInfo)==null?void 0:d.typeName)==="LiveVideoRehearsalInfo";e=(e=g.is_gaming_video)!=null?e:!1;f=(f=a.includeGamingBackLink)!=null?f:!1;f=f&&s&&e;s=!h||z;return s&&!v?null:l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:(j||(j=b("stylex"))).dedupe({"display-1":"j83agx80","height-1":"rgmg9uty","position-1":"pmk7jnqg","start-1":"rnx8an3s","top-1":"fcg2cn6m"},a.hasCometNavOverlay&&!r?{"start-1":"b12hlsfb","top-1":"fgv6swy9"}:null),children:[f?l.jsx(b("GamingVideoBackLink.react"),{}):null,l.jsx("div",{className:j.dedupe({"border-top-start-radius-1":"jk6sbkaj","border-top-end-radius-1":"kdgqqoy6","border-bottom-end-radius-1":"ihh4hy1g","border-bottom-start-radius-1":"qttc61fc","box-sizing-1":"rq0escxv","display-1":"pq6dq46d","height-1":"datstx6m","padding-top-1":"l60d2q6s","padding-end-1":"p8fzw8mz","padding-bottom-1":"qt6c0cv9","padding-start-1":"pcp91wgn"},q?null:{"animation-direction-1":"afxn4irw","animation-duration-1":"m8weaby5","animation-iteration-count-1":"ee40wjg4","animation-name-1":"q1gqmpn5","animation-timing-function-1":"jbu8tgem"},q?null:{"background-color-1":"l44iypv3"},q?{"background-color-1":"tt76kxal"}:null,d?{"background-color-1":"p2o8ms9n"}:null),"data-testid":void 0,children:l.jsxs(b("TetraText.react"),{color:d?"primary":"white",type:"bodyLink4",children:[n(g,v),a.shouldExpand===!0&&B&&(g==null?void 0:g.publish_time)!=null&&!q&&p(g.publish_time)]})}),o(x)]}),a.shouldShowPrivacyNux===!0&&l.jsx(b("CometPlaceholder.react"),{fallback:null,children:l.jsx("div",{className:"t4zy2t7z rnx8an3s pmk7jnqg",children:l.jsx(k,{videoID:c})})})]})}function m(a){if(a==null)return!1;switch(a){case b("VideoBroadcastStatus").LIVE:case b("VideoBroadcastStatus").LIVE_STOPPED:case b("VideoBroadcastStatus").SEAL_STARTED:return!0;default:return!1}}function n(a,b){if((a==null?void 0:a.isPremiere)===!0)return h._("PREMIERE");if((a==null?void 0:a.breakingStatus)===!0)return h._("LIVE BREAKING");return b?h._("WATCH PARTY"):h._("LIVE")}function o(a){if(a==null||a===0)return null;var c=l.jsx("span",{className:"l9j0dhe7 cgat1ltu pq6dq46d l2l2r6co",children:l.jsx(b("CometImage.react"),{alt:"",src:g("406916")})});return l.jsxs("div",{"aria-label":h._({"*":"{number} people currently watching this video.","_1":"1 person currently watching this video."},[h._plural(a,"number",b("intlSummarizeNumber")(a))]),className:"pcp91wgn qt6c0cv9 p8fzw8mz l60d2q6s ggphbty4 datstx6m pq6dq46d rq0escxv qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj swu4x5w2","data-testid":void 0,role:"img",children:[c,l.jsx(b("TetraText.react"),{color:"white",type:"body4",children:b("intlSummarizeNumber")(a)})]})}function p(a){return l.jsx("div",{className:"kkf49tns pq6dq46d",children:l.jsx(b("Duration.react"),{startTime:a*1e3,useLocalTime:!0})})}}),null);