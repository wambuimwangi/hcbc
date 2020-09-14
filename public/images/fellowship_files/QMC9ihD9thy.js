if (self.CavalryLogger) { CavalryLogger.start_js(["KJMLL"]); }

__d("UFI2FeedbackReactMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"useDefaultActor"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"detection_analytics_enabled",storageKey:null},d=[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],e={alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i={alias:"i18n_reaction_count",args:null,kind:"ScalarField",name:"reaction_count_reduced",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"UFI2FeedbackReactMutation",selections:[{alias:null,args:b,concreteType:"FeedbackReactResponsePayload",kind:"LinkedField",name:"feedback_react",plural:!1,selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"UFI2ReactionActionLink_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2ReactionsCount_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2CommentTopReactions_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2CommentTopReactionsWrapper_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2TopReactions_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2FeedbackReactMutation_feedback"}],storageKey:null},c],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"UFI2FeedbackReactMutation",selections:[{alias:null,args:b,concreteType:"FeedbackReactResponsePayload",kind:"LinkedField",name:"feedback_react",plural:!1,selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:d,kind:"ScalarField",name:"can_viewer_react",storageKey:null},{alias:null,args:d,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"viewer_feedback_reaction_info",plural:!1,selections:[e,f,g],storageKey:null},f,{alias:null,args:d,concreteType:null,kind:"LinkedField",name:"viewer_actor",plural:!1,selections:[g,f,h],storageKey:null},{alias:null,args:null,concreteType:"FeedbackReaction",kind:"LinkedField",name:"supported_reactions",plural:!0,selections:[e],storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:[f],storageKey:null},{alias:null,args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",kind:"LinkedField",name:"top_reactions",plural:!1,selections:[{alias:null,args:null,concreteType:"TopReactionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"node",plural:!1,selections:[e,f,{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"localized_name",storageKey:null}],storageKey:null},i],storageKey:null}],storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])'},{alias:null,args:null,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[j,{alias:null,args:null,kind:"ScalarField",name:"is_empty",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"count_reduced",storageKey:null}],storageKey:null},i,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"ImportantReactorsConnection",kind:"LinkedField",name:"important_reactors",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[g,h,f],storageKey:null}],storageKey:"important_reactors(first:2)"},{alias:"reaction_count",args:null,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[j],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show_top_reactions",storageKey:null}],storageKey:null},c],storageKey:null}]},params:{id:"2904260529628528",metadata:{},name:"UFI2FeedbackReactMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("UFI2FeedbackReactMutation_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"useDefaultActor"}],kind:"Fragment",metadata:{mask:!1},name:"UFI2FeedbackReactMutation_feedback",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",kind:"LinkedField",name:"top_reactions",plural:!1,selections:[{alias:null,args:null,concreteType:"TopReactionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"node",plural:!1,selections:a,storageKey:null}],storageKey:null}],storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])'},{alias:null,args:null,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_empty",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"viewer_feedback_reaction_info",plural:!1,selections:a,storageKey:null}],type:"Feedback",abstractKey:null}}();e.exports=a}),null);
__d("UFI2FeedbackReactMutation",["invariant","requireCond","Bootloader","ChannelClientID","FBLogger","FeedbackSourceType","JSEnumValueToGraphQLKey","RelayModern","RelayRuntime","UFIODSLogger","UFIReactionTypes","arrayStableSort","cr:1088250","setTimeoutAcrossTransitions","UFI2FeedbackReactMutation_feedback.graphql","UFI2FeedbackReactMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=b("RelayModern").commitMutation;b("RelayModern").graphql;var k=b("RelayRuntime").ConnectionHandler,l=b("RelayRuntime").applyOptimisticMutation,m=b("UFIReactionTypes").ordering,n=2,o=3e3,p=b("JSEnumValueToGraphQLKey")(b("FeedbackSourceType"),1);h!==void 0?h:h=b("UFI2FeedbackReactMutation_feedback.graphql");var q=i!==void 0?i:i=b("UFI2FeedbackReactMutation.graphql");function a(a){var c=a.actorID,d=a.environment,e=a.feedbackArg,f=a.input,h=a.useDefaultActor,i=f.feedback_source,j=f.feedback_reaction,k=(e=e.associated_video)==null?void 0:e.id;j!==0&&k!=null&&b("Bootloader").loadModules(["CreateLivingRoomActionLinkStore","LivingRoomCreationSource"],function(a,b){a.activateLivingRoomCTAForVideo(k,b.FEED_CTA_ON_REACT)},"UFI2FeedbackReactMutation");e={input:babelHelpers["extends"]({},f,{actor_id:c,feedback_source:i!=null?b("JSEnumValueToGraphQLKey")(b("FeedbackSourceType"),i):void 0,session_id:b("ChannelClientID").getID()}),useDefaultActor:h};c=function(a){var c=a.get(f.feedback_id);if(c==null){b("FBLogger")("ufi2").addMetadata("UFI","FEEDBACK_TARGET_ID",f.feedback_id).warn("UFI2FeedbackReactMutation: Could not find feedback in Relay store.");return}c.setValue(!0,"should_show_top_reactions");var d=s(a,f.feedback_id,c),e=c.getLinkedRecord("viewer_feedback_reaction_info",{use_default_actor:h}),i=e?e.getValue("key")||0:0;typeof i==="number"||g(0,3027);var k=c.getLinkedRecord("top_reactions",{orderby:["COUNT_DESC","REACTION_TYPE"]});if(!k){var l="client:top_reactions:"+f.feedback_id;k=a.create(l,"TopReactionsConnection")}u(a,k,j,i);var m;if(j===0){if(e!==null){l=d.getValue("count");k=typeof l==="number"?l:1;m=k-1}c.setValue(null,"viewer_feedback_reaction_info",{use_default_actor:h})}else{if(e===null){i=d.getValue("count");l=typeof i==="number"?i:0;m=l+1}e=t(a,j);c.setLinkedRecord(e,"viewer_feedback_reaction_info",{use_default_actor:h})}m!=null&&(d.setValue(m,"count"),d.setValue(m===0,"is_empty"));k=d.getValue("count_reduced");if(parseInt(k,10).toString()===k){i=d.getValue("count");typeof i==="number"&&d.setValue(i.toString(),"count_reduced")}};i={mutation:q,optimisticUpdater:c,variables:e};return r(d,i,c,0,f,a.onError)}function r(a,c,d,e,f,g){var h=j(a,babelHelpers["extends"]({},c,{onCompleted:function(a){a=c==null?void 0:(a=c.variables)==null?void 0:(a=a.input)==null?void 0:a.feedback_source;var d=Math.min(e+1,3);d=""+d+(e>=d?"+":"");a===p&&b("UFIODSLogger").bump("reaction.newsfeed.mutation.attempt."+d,"relay");b("UFIODSLogger").bump("reaction.mutation.attempt."+d,"relay");b("cr:1088250")&&b("cr:1088250")(f)},onError:function(i){if(i.name==="GraphQLError")return g(i);h=l(a,babelHelpers["extends"]({},c,{optimisticUpdater:d}));if(e>=n)return g(i);b("setTimeoutAcrossTransitions")(function(){h&&h.dispose(),h=r(a,c,d,e+1,f,g)},o)}}));return{dispose:function(){h&&h.dispose(),h=null}}}function s(a,c,d){var e=d.getLinkedRecord("reactors");if(!e){b("FBLogger")("ufi2").addMetadata("UFI","FEEDBACK_TARGET_ID",c).warn("Expected Feedback record proxy to have a reactors connection");c="client:reactors:"+c;e=a.get(c)||a.create(c,"ReactorsOfContentConnection");e.setValue(0,"count");e.setValue("0","count_reduced");e.setValue(!0,"is_empty");d.setLinkedRecord(e,"reactors")}return e}function t(a,c){c!==0||g(0,3028);var d="client:reaction_info:"+c,e=a.get(d);if(!e){e=a.create(d,"FeedbackReactionInfo");e.setValue(c,"key");a=b("UFIReactionTypes").reactions[c];a||g(0,3029,c);e.setValue(a.display_name,"localized_name");e.setValue(a.name.toUpperCase(),"reaction_type")}return e}function u(a,c,d,e){var f=(c.getLinkedRecords("edges")||[]).map(function(a){if(!a)return null;var b=a.getLinkedRecord("node"),c=a.getValue("reaction_count")||0,d=b&&b.getValue("key")||0;typeof c==="number"&&typeof d==="number"||g(0,3027);return b&&c!==0&&d!==0?{count:c,edge:a,key:d}:null}).filter(Boolean);if(e){var h=f.find(function(a){return a.key===e});h&&h.count--}if(d){h=f.find(function(a){return a.key===d});if(!h){var i=t(a,d);a=k.createEdge(a,c,i,"TopReactionsEdge");h={count:0,edge:a,key:d};f.push(h)}h.count++}i=b("arrayStableSort")(f,function(a,b){return b.count-a.count||m.indexOf(a.key)-m.indexOf(b.key)}).filter(function(a){return a.count!==0}).map(function(a){var b=a.edge;a=a.count;b.setValue(a,"reaction_count");b.setValue((a=b.getValue("reaction_count_reduced"))!=null?a:"","reaction_count_reduced");return b});c.setLinkedRecords(i,"edges")}e.exports={commit:a}}),null);
__d("getReactionKeyFromType",["invariant","FeedbackReactionType","getJSEnumSafe"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;function a(a){var c=b("getJSEnumSafe")(b("FeedbackReactionType"),a);typeof c==="number"||g(0,2265,a);return c}}),null);