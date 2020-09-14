if (self.CavalryLogger) { CavalryLogger.start_js(["M1CJB"]); }

__d("ProfileCometTextWithEntities_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTextWithEntities_textWithEntities",selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities",selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],type:"AggregatedEntitiesAtRange",abstractKey:null};e.exports=a}),null);
__d("CometMetaLinkedEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometMetaLinkedEntityRenderer_entity",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("TetraishLink.react",["CometLink.react","React","TetraText.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){var d=a.color,e=a.type;a=babelHelpers.objectWithoutPropertiesLoose(a,["color","type"]);a=babelHelpers["extends"]({},a,{ref:c});return g.jsx(b("TetraText.react"),{color:d,type:e,children:g.jsx(b("CometLink.react"),babelHelpers["extends"]({},a,{color:d}))})}c=g.forwardRef(a);e.exports=c}),null);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer",["fbt","CometRelay","CometTooltip.react","React","CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");h!==void 0?h:h=b("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql");a=function(a,c){var d;d=(d=c.count)!=null?d:0;c=(c=c.sample_entities)!=null?c:[];d=d-c.length;var e=d>0;return i.jsx(b("CometTooltip.react"),{tooltip:i.jsxs(i.Fragment,{children:[c.map(function(a){if(a.__typename!=="User")return null;var b=a.id;a=a.name;return b!=null&&a!=null?i.jsx("div",{children:a},b):null}),e?i.jsx("div",{children:g._("and {count} more...",[g._param("count",d)])}):null]}),children:a})};e.exports=a}),null);
__d("CometInlineEntityRenderer",["React","TetraText.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a,c){switch(c.inline_style){case"BOLD":return g.jsx("b",{children:a});case"ITALIC":return g.jsx("i",{children:a});case"UNDERLINE":return g.jsx("u",{children:a});case"CODE":return g.jsx("code",{className:"b3i9ofy5",children:a});case"STRIKETHROUGH":return g.jsx("strike",{children:a});case"SUBSCRIPT":return g.jsx("sub",{children:a});case"SUPERSCRIPT":return g.jsx("sup",{children:a});case"QUOTE":return g.jsx("blockquote",{children:a});case"UNORDEREDLIST":return g.jsx("ul",{className:"dhix69tm mf5omzu7",children:a});case"ORDEREDLIST":return g.jsx("ol",{className:"dhix69tm mf5omzu7",children:a});case"LISTITEM":return g.jsx("li",{children:a});case"HEADLINE1":return g.jsx(b("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized1",children:a});case"HEADLINE2":return g.jsx(b("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized2",children:a});case"HEADLINE3":return g.jsx(b("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized3",children:a});case"HORIZONTALRULER":return g.jsx("hr",{});default:return a}};e.exports=a}),null);
__d("CometMetaLinkedEntityRenderer",["CometLink.react","CometRelay","React","TetraTextContext","CometMetaLinkedEntityRenderer_entity.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");g!==void 0?g:g=b("CometMetaLinkedEntityRenderer_entity.graphql");a=function(a,c){var d;d=(d=h.useContext(b("TetraTextContext")))==null?void 0:d.type;if(c.url==null)return a;return d==null||!d.startsWith("meta")?h.jsx(b("CometLink.react"),{href:c.url,children:a}):h.jsx(b("CometLink.react"),{color:"secondary",href:c.url,weight:d==="meta3"||d==="meta4"?"normal":"semibold",children:a})};e.exports=a}),null);
__d("ProfileCometTextWithEntities.react",["CometAggregatedEntitiesTooltipRenderer","CometContextuallyStyledAggregatedEntitiesTooltipRenderer","CometHovercardEntityRenderer","CometImageEntityRenderer","CometInlineEntityRenderer","CometLinkedEntityRenderer","CometMetaLinkedEntityRenderer","CometRelay","CometTextWithEntitiesRelay.react","React","ProfileCometTextWithEntities_textWithEntities.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.textWithEntities,d=a.useMetaTextContext;a=babelHelpers.objectWithoutPropertiesLoose(a,["textWithEntities","useMetaTextContext"]);c=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometTextWithEntities_textWithEntities.graphql"),c);d=d!=null&&d;return h.jsx(b("CometTextWithEntitiesRelay.react"),babelHelpers["extends"]({},a,{renderers:{"*":[d?b("CometMetaLinkedEntityRenderer"):b("CometLinkedEntityRenderer")],Aggregate:[d?b("CometContextuallyStyledAggregatedEntitiesTooltipRenderer"):b("CometAggregatedEntitiesTooltipRenderer")],Event:[b("CometHovercardEntityRenderer")],Group:[b("CometHovercardEntityRenderer")],Image:[b("CometImageEntityRenderer")()],Inline:[b("CometInlineEntityRenderer")],Page:[b("CometHovercardEntityRenderer")],User:[b("CometHovercardEntityRenderer")]},textWithEntities:c}))}}),null);
__d("getRoundedCorners",[],(function(a,b,c,d,e,f){"use strict";e.exports=b;var g={TOP_START:1,TOP_END:2,BOTTOM_START:4,BOTTOM_END:8,NONE:0,ALL:15};function a(a,b){return(a&b)===b}function b(a,b){if(a===0)return{};var c={},d=function(a,b){c[a]=((a=c[a])!=null?a:0)|b};d(0,g.TOP_START);d(Math.min(b,a)-1,g.TOP_END);var e=a-(a%b===0?b:a%b);d(e,g.BOTTOM_START);d(Math.min(e+b,a)-1,g.BOTTOM_END);a%b!==0&&e>=b&&d(e-1,g.BOTTOM_END);return c}b.hasCorner=a;b.CORNERS=g}),null);
__d("ProfileCometTileImage.react",["CometImage.react","CometPressable.react","React","getRoundedCorners","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=b("getRoundedCorners").CORNERS,j=b("getRoundedCorners").hasCorner,k={borderBottomEndRadius:{borderBottomEndRadius:"uo3d90p7"},borderBottomStartRadius:{borderBottomStartRadius:"l82x9zwi"},borderTopEndRadius:{borderTopEndRadius:"pw54ja7n"},borderTopStartRadius:{borderTopStartRadius:"ue3kfks5"},fallbackImage:{backgroundColor:"g6srhlxm"},image:{height:"datstx6m",objectFit:"bixrwtb6",width:"k4urcfbm"},imageContainer:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},root:{display:"a8c37x1j",paddingBottom:"d5it6em2",position:"l9j0dhe7",width:"k4urcfbm"},shadow:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",boxShadow:"blnotr6c"}};function a(a,c){var d=a.linkProps,e=a.onPress,f=a.onPressIn,l=a.onPressOut,m=a.roundCorner;a=a.src;m=(m=m)!=null?m:i.NONE;return h.jsx(b("CometPressable.react"),{"aria-hidden":!0,display:"inline",linkProps:d,onPress:e,onPressIn:f,onPressOut:l,ref:c,xstyle:k.root,children:h.jsxs("div",{className:(g||(g=b("stylex")))(k.imageContainer),children:[a!==""&&a!=="#"?h.jsx(b("CometImage.react"),{src:a,xstyle:[k.image,j(m,i.TOP_START)&&k.borderTopStartRadius,j(m,i.TOP_END)&&k.borderTopEndRadius,j(m,i.BOTTOM_START)&&k.borderBottomStartRadius,j(m,i.BOTTOM_END)&&k.borderBottomEndRadius]}):h.jsx("div",{className:(g||(g=b("stylex")))(k.image,k.fallbackImage,j(m,i.TOP_START)?k.borderTopStartRadius:null,j(m,i.TOP_END)?k.borderTopEndRadius:null,j(m,i.BOTTOM_START)?k.borderBottomStartRadius:null,j(m,i.BOTTOM_END)?k.borderBottomEndRadius:null)}),h.jsx("span",{className:g(k.shadow,j(m,i.TOP_START)?k.borderTopStartRadius:null,j(m,i.TOP_END)?k.borderTopEndRadius:null,j(m,i.BOTTOM_START)?k.borderBottomStartRadius:null,j(m,i.BOTTOM_END)?k.borderBottomEndRadius:null)})]})})}c=h.forwardRef(a);e.exports=c}),null);
__d("useProfileEngagementImpression",["React","recoverableViolation","requireDeferred","useImpressionLogger","useProfileEngagementData"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("requireDeferred")("ProfileEngagementTypedLoggerLite");function a(a){var c=b("useProfileEngagementData")(a);c.product_bucket==null&&(b("recoverableViolation")("product_bucket is a required field for profile engagement logging","profile_comet"),c=babelHelpers["extends"]({},c,{product_bucket:"unknown"}));a=g.useCallback(function(a,b){b=a.log;b(babelHelpers["extends"]({engagement_type:"impression"},c))},[c]);return b("useImpressionLogger")(h,a)}}),null);