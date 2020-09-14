if (self.CavalryLogger) { CavalryLogger.start_js(["1PuxE"]); }

__d("CometStoryAggregatedUsersDialogContent_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometStoryAggregatedUsersDialogContent_textWithEntities",selections:[{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[{alias:null,args:null,concreteType:"AllEntitiesFromAggregatedRangeConnection",kind:"LinkedField",name:"all_entities",plural:!1,selections:[{alias:null,args:null,concreteType:"AllEntitiesFromAggregatedRangeEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"User",abstractKey:null},{args:null,kind:"FragmentSpread",name:"CometProfileListUserRow_user"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("CometStoryAggregatedUsersSuffixDialogQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"id"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"id",variableName:"id"}],c=[{kind:"Variable",name:"location",variableName:"renderLocation"}],d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[e,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometStoryAggregatedUsersSuffixDialogQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:c,concreteType:"TextWithEntities",kind:"LinkedField",name:"suffix",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometStoryAggregatedUsersDialogContent_textWithEntities"}],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometStoryAggregatedUsersSuffixDialogQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[d,e,{kind:"InlineFragment",selections:[{alias:null,args:c,concreteType:"TextWithEntities",kind:"LinkedField",name:"suffix",plural:!1,selections:[{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[{alias:null,args:null,concreteType:"AllEntitiesFromAggregatedRangeConnection",kind:"LinkedField",name:"all_entities",plural:!1,selections:[{alias:null,args:null,concreteType:"AllEntitiesFromAggregatedRangeEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[d,{kind:"InlineFragment",selections:[e,{alias:null,args:null,concreteType:"MutualFriendsConnection",kind:"LinkedField",name:"mutual_friends",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subscribe_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_subscribe_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"invite_status_in_feedback",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"pages_story_bucket_v2",plural:!1,selections:[d,e,f],storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[e,f],storageKey:null}],storageKey:"story_bucket(first:1)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null}],type:"Actor",abstractKey:"__isActor"}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[e],type:"Node",abstractKey:"__isNode"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}]},params:{id:"3644368755651942",metadata:{relayPreloadable:!0},name:"CometStoryAggregatedUsersSuffixDialogQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometStoryAggregatedUsersTitleDialogQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"id"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"id",variableName:"id"}],c=[{kind:"Variable",name:"location",variableName:"renderLocation"}],d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[e,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometStoryAggregatedUsersTitleDialogQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:c,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometStoryAggregatedUsersDialogContent_textWithEntities"}],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometStoryAggregatedUsersTitleDialogQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[d,e,{kind:"InlineFragment",selections:[{alias:null,args:c,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[{alias:null,args:null,concreteType:"AllEntitiesFromAggregatedRangeConnection",kind:"LinkedField",name:"all_entities",plural:!1,selections:[{alias:null,args:null,concreteType:"AllEntitiesFromAggregatedRangeEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[d,{kind:"InlineFragment",selections:[e,{alias:null,args:null,concreteType:"MutualFriendsConnection",kind:"LinkedField",name:"mutual_friends",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subscribe_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_subscribe_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"invite_status_in_feedback",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"pages_story_bucket_v2",plural:!1,selections:[d,e,f],storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[e,f],storageKey:null}],storageKey:"story_bucket(first:1)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null}],type:"Actor",abstractKey:"__isActor"}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[e],type:"Node",abstractKey:"__isNode"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}]},params:{id:"2936976296408591",metadata:{relayPreloadable:!0},name:"CometStoryAggregatedUsersTitleDialogQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometStoryAggregatedUsersDialogContent.react",["fbt","CometCardedDialog.react","CometProfileListScrollableList.react","CometProfileListUserRow.react","CometRelay","React","TetraText.react","stylex","useCometProfileListFriendshipStatusButton","CometStoryAggregatedUsersDialogContent_textWithEntities.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");function j(){return i.jsx("div",{className:"fl8dtwsd gbhij3x4 tkv8g59h dsae2hpk",children:i.jsx(b("TetraText.react"),{color:"secondary",type:"body1",children:g._("No content to show")})})}function a(a){var c=a.onClose;a=a.textWithEntities;a=b("CometRelay").useFragment(h!==void 0?h:h=b("CometStoryAggregatedUsersDialogContent_textWithEntities.graphql"),a);a=(a=a==null?void 0:(a=a.aggregated_ranges)==null?void 0:(a=a[0])==null?void 0:(a=a.all_entities)==null?void 0:a.edges)!=null?a:[];a=a.map(function(a){return a.node}).filter(Boolean);return i.jsx(b("CometCardedDialog.react"),{onClose:c,title:g._("People"),withCloseButton:!0,children:a==null||a.length<1?i.jsx(j,{}):i.jsx(b("CometProfileListScrollableList.react"),{children:a.map(function(a){return i.jsx(b("CometProfileListUserRow.react"),{actionsByPriority:[{hook:b("useCometProfileListFriendshipStatusButton"),hookConfig:{cancelSource:"profile_browser",makeSource:"profile_browser",messengerWebEntryPoint:"story_aggregated_users",responseSource:"profile_browser"},type:"connect"}],user:a},a.id)})})})}}),null);
__d("CometStoryAggregatedUsersSuffixDialog.react",["CometRelay","CometStoryAggregatedUsersDialogContent.react","React","unrecoverableViolation","CometStoryAggregatedUsersSuffixDialogQuery.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.props.onClose;a=a.queries;a=b("CometRelay").usePreloadedQuery(g!==void 0?g:g=b("CometStoryAggregatedUsersSuffixDialogQuery.graphql"),a.queryReference);a=a==null?void 0:(a=a.node)==null?void 0:a.suffix;if(a==null)throw b("unrecoverableViolation")("Suffix cannot be null in aggregated users dialog","comet_feed");return h.jsx(b("CometStoryAggregatedUsersDialogContent.react"),{onClose:c,textWithEntities:a})}}),null);
__d("CometStoryAggregatedUsersTitleDialog.react",["CometRelay","CometStoryAggregatedUsersDialogContent.react","React","unrecoverableViolation","CometStoryAggregatedUsersTitleDialogQuery.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.props.onClose;a=a.queries;a=b("CometRelay").usePreloadedQuery(g!==void 0?g:g=b("CometStoryAggregatedUsersTitleDialogQuery.graphql"),a.queryReference);a=a==null?void 0:(a=a.node)==null?void 0:a.title;if(a==null)throw b("unrecoverableViolation")("Title cannot be null in aggregated users dialog","comet_feed");return h.jsx(b("CometStoryAggregatedUsersDialogContent.react"),{onClose:c,textWithEntities:a})}}),null);
__d("XCometEventsHomeControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/events/",Object.freeze({}),void 0);e.exports=a}),null);
__d("CometDialogCloseCallbackContext.react",["React","gkx"],(function(a,b,c,d,e,f){"use strict";f.CometDialogCloseCallbackContextProvider=a;var g=b("React"),h=g.createContext(null);f.CometDialogCloseCallbackContext=h;var i=function(){return g.useContext(h)};f.useCometDialogCloseCallbackContext=i;function a(a){var c=a.children,d=a.onClose,e=i();a=g.useCallback(function(){d!=null&&d(),!b("gkx")("1545497")&&e!=null&&e()},[d,e]);return g.jsx(h.Provider,{value:a,children:c})}}),null);
__d("EventCometCard.react",["CometCard.react","React","TetraText.react","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.children,d=a.icon,e=a.rightHeaderElement,f=a.testid;f=a.title;a=f!=null||e!=null;var h=d!=null&&f!=null&&e==null;h=h?g.jsxs("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc ecm0bbzt jifvfom9 btwxx1t3 j83agx80 bp9cbjyn du4w35lb l9j0dhe7 hpfvmrgz tgvbjcpo kvgmc6g5 hcukyx3x cxmmr5t8 oygrvhab g5gj957u buofh1pr rq0escxv auili1gw ow4ym5g4",children:[g.jsx("div",{className:"oi9244e8 j83agx80 bp9cbjyn",children:d}),g.jsx(b("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized2",children:f})]}):null;d=a?g.jsxs("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc ecm0bbzt i1fnvgqd btwxx1t3 aovydwv3 du4w35lb l9j0dhe7 hpfvmrgz tgvbjcpo kvgmc6g5 hcukyx3x cxmmr5t8 oygrvhab g5gj957u buofh1pr j83agx80 rq0escxv auili1gw ow4ym5g4",children:[f!=null?g.jsx(b("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized2",children:f}):g.jsx("div",{className:"buofh1pr"}),e]}):null;return g.jsx("div",{className:"sjgh65i0","data-testid":void 0,children:g.jsx(b("CometCard.react"),{background:"white",dropShadow:1,children:g.jsxs("div",{className:"discj3wi ihqw7lf3",children:[h?h:d,c]})})})}}),null);
__d("EventCometCardSidePadding.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){return g.jsx("div",{className:"dati1w0a hv4rvrfc",children:a.children})}}),null);
__d("EventCometVerticalSpacer.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=a.height;return h.jsx("div",{className:(g||(g=b("stylex"))).dedupe(a===8?{"height-1":"t6na6p9t"}:{},a===12?{"height-1":"cyypbtt7"}:null,a===16?{"height-1":"gl3lb2sf"}:null,a===32?{"height-1":"k7cz35w2"}:null)})}}),null);
__d("EventCometComposerStrings",["fbt","React"],(function(a,b,c,d,e,f,g){"use strict";b("React");a=g._("Create Post");f.createTitle=a;c=g._("Edit Post");f.editTitle=c;d=g._("A message is required.");f.errorMessageRequired=d;e=g._("Add a Post");f.openComposer=e;b=g._("Write something...");f.placeholderTextEditor=b;a=g._("Sharing to");f.sharingTo=a;c=g._("Post");f.submitPost=c}),null);
__d("FundraiserCampaignType",[],(function(a,b,c,d,e,f){a=Object.freeze({FACEBOOK_TO_USER:1,DONATE_BUTTON_ON_PAGE:2,DONATE_BUTTON_ON_ADS:3,CHARITY_TO_USER:4,DONATE_BUTTON_ON_POST:5,USER_TO_CHARITY:6,DONATE_BUTTON_ON_LIVE_VIDEO:7,LIGHTWEIGHT_FUNDRAISER_FOR_STORY:8,PERSON_FOR_PERSON:9,CRISIS_FOR_CHARITY:10,IG_STICKER_FOR_CHARITY:11,PERSON_FOR_CAUSE:12,PROFILE_FOR_CHARITY:13,IG_CHARITY_BUSINESS_PROFILE:14,PERSON_FOR_CHARITIES_IN_CAUSE:15,IG_LIVE_FOR_CHARITY:16,IG_STANDALONE_FOR_PERSON:17,IG_STANDALONE_FOR_CHARITY:18});e.exports=a}),null);
__d("SocialGoodCharityActionsTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:SocialGoodCharityActionsLoggerConfig")}),null);
__d("StoriesUtils",["ExecutionEnvironment"],(function(a,b,c,d,e,f){"use strict";var g=500,h={};a=function(a){h[a]==null&&(h[a]=window.atob(a).split(":")[2]);return h[a]};f.cardID2ThreadID=a;c=function(a){return!b("ExecutionEnvironment").canUseDOM?!1:a<g};f.shouldResizeToViewStories=c}),null);
__d("SocialGoodCharityActionsLoggingUtils",["FundraiserCampaignType","SocialGoodCharityActionsTypedLoggerLite","StoriesUtils","WebSession","getJSEnumSafe"],(function(a,b,c,d,e,f){"use strict";f.logFundraiserForStoryCreateEvent=a;f.logFundraiserInviteEvent=c;f.logFundraiserDonateEvent=d;f.logFundraiserInteractEvent=e;var g=b("SocialGoodCharityActionsTypedLoggerLite").log;function a(a,c){g(babelHelpers["extends"]({campaign_type:8,explicit_post_id:c==null?null:b("StoriesUtils").cardID2ThreadID(c),parent_event_type:"create"},a))}function c(a,c,d){g({campaign_id:c,event:a,parent_event_type:"invite",source_attributes:{session_id:b("WebSession").getId(),source_id:c,source_name:(a=d)!=null?a:"fundraiser"}})}function d(a,c,d,e){g({campaign_id:d,campaign_type:b("getJSEnumSafe")(b("FundraiserCampaignType"),e),event:a,parent_event_type:"donate",source_attributes:c})}function e(a,c,d,e,f){g({attributes:e,campaign_id:c,campaign_type:b("getJSEnumSafe")(b("FundraiserCampaignType"),f),event:a,parent_event_type:"interact",source_attributes:{source_name:d}})}}),null);
__d("useFriendingCometFriendshipStatus_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useFriendingCometFriendshipStatus_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("useCometProfileListFriendshipStatusButton_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometProfileListFriendshipStatusButton_user",selections:[{alias:null,args:null,concreteType:"MutualFriendsConnection",kind:"LinkedField",name:"mutual_friends",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useFriendingCometFriendshipStatus_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("useCometProfileListMessageUserButton_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometProfileListMessageUserButton_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_message",storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("useFriendingCometFriendshipStatus",["CometDialogCloseCallbackContext.react","CometRelay","FriendingCometFriendRequestCancelMutation","FriendingCometFriendRequestConfirmMutation","FriendingCometFriendRequestSendMutation","React","emptyFunction","recoverableViolation","unrecoverableViolation","useMWChatOpenTabForUser","useShouldShowMessagingEntrypointOnCurrentRoute","useFriendingCometFriendshipStatus_user.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a,c){var d=b("CometRelay").useRelayEnvironment(),e=b("CometDialogCloseCallbackContext.react").useCometDialogCloseCallbackContext(),f=b("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT"),i=b("useMWChatOpenTabForUser")(c.messengerWebEntryPoint),j=i[0];i[1];i=b("CometRelay").useFragment(g!==void 0?g:g=b("useFriendingCometFriendshipStatus_user.graphql"),a);var k=i==null?void 0:i.id;a=i==null?void 0:i.friendship_status;if(k==null)throw b("unrecoverableViolation")("Unknown user","growth_friending");var l=h.useCallback(function(){b("FriendingCometFriendRequestSendMutation").commit(d,k,c.makeSource,b("emptyFunction"))},[d,k,c.makeSource]),m=h.useCallback(function(){b("FriendingCometFriendRequestCancelMutation").commit(d,k,c.cancelSource,b("emptyFunction"))},[c.cancelSource,d,k]),n=h.useCallback(function(){b("FriendingCometFriendRequestConfirmMutation").commit(d,k,c.responseSource,void 0,b("emptyFunction"))},[d,k,c.responseSource]),o=h.useCallback(function(){k!=null&&(j(k),e&&e())},[k,e,j]);if((i==null?void 0:i.__typename)!=="User")return[null,null];if(a==null)return[b("recoverableViolation")("Unknown friendship status","growth_friending"),null];switch(a){case"ARE_FRIENDS":return[a,f?o:null];case"CAN_REQUEST":return[a,l];case"INCOMING_REQUEST":return[a,n];case"OUTGOING_REQUEST":return[a,m];case"CANNOT_REQUEST":default:return["CANNOT_REQUEST",null]}}}),null);
__d("FriendingCometFriendshipInteractionButtonsConfig",["ix","fbt","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";f.getButtonProps=a;function a(a,c){if(c==null)return null;switch(a){case"ARE_FRIENDS":return{icon:b("fbicon")._(g("505616"),16),label:h._("Message"),onPress:c,testid:"friends_button"};case"CAN_REQUEST":return{icon:b("fbicon")._(g("497883"),16),label:h._("Add Friend"),onPress:c,testid:"add_button"};case"INCOMING_REQUEST":return{icon:b("fbicon")._(g("497883"),16),label:h._("Confirm Friend Request"),onPress:c,testid:"confirm_button"};case"OUTGOING_REQUEST":return{icon:b("fbicon")._(g("664704"),16),label:h._("Cancel Request"),onPress:c,testid:"cancel_request_button"};case"CANNOT_REQUEST":default:return null}}}),null);
__d("useCometProfileListFriendshipStatusButton",["CometRelay","FriendingCometFriendshipInteractionButtonsConfig","gkx","useFriendingCometFriendshipStatus","useCometProfileListFriendshipStatusButton_user.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;function a(a,c){var d;a=b("CometRelay").useFragment(g!==void 0?g:g=b("useCometProfileListFriendshipStatusButton_user.graphql"),a);d=(d=a==null?void 0:(d=a.mutual_friends)==null?void 0:d.count)!=null?d:0;a=b("useFriendingCometFriendshipStatus")(a,c);c=a[0];a=a[1];d=!b("gkx")("1627299")||c!=="CAN_REQUEST"||d!==0;c=b("FriendingCometFriendshipInteractionButtonsConfig").getButtonProps(c,a);return d&&c!=null?{icon:c.icon,label:c.label,onPress:c.onPress,testid:c.testid,type:"secondary-button"}:null}}),null);
__d("useCometProfileListMessageUserButton",["ix","fbt","CometDialogCloseCallbackContext.react","CometRelay","React","fbicon","useMWChatOpenTabForUser","useShouldShowMessagingEntrypointOnCurrentRoute","useCometProfileListMessageUserButton_user.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React");function a(a,c){a=b("CometRelay").useFragment(i!==void 0?i:i=b("useCometProfileListMessageUserButton_user.graphql"),a);var d=b("CometDialogCloseCallbackContext.react").useCometDialogCloseCallbackContext(),e=b("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT");c=b("useMWChatOpenTabForUser")(c.messengerWebEntryPoint);var f=c[0];c[1];var k=a==null?void 0:a.id;c=j.useCallback(function(){k!=null&&(f(k),d&&d())},[k,d,f]);return e&&(a==null?void 0:a.can_viewer_message)===!0?{icon:b("fbicon")._(g("505616"),16),label:h._("Message"),onPress:c,type:"secondary-button"}:null}}),null);
__d("CometProfileListRowLoadingState.react",["BaseGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){return g.jsxs("div",{className:"dati1w0a sj5x9vvc hv4rvrfc cxgpxx05 j83agx80 bp9cbjyn",children:[g.jsx(b("BaseGlimmer.react"),{className:"q676j6op tvfksri0 qypqp5cg spb7xbtv bkmhp75w emlxlaya s45kfl79",index:0}),g.jsx(b("BaseGlimmer.react"),{className:"n99xedck jnigpg78 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:1})]})}}),null);