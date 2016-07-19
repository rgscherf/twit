// Compiled by ClojureScript 1.9.89 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
frontend.core.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
frontend.core.new_user = (function frontend$core$new_user(user){
var c__22229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22229__auto__){
return (function (){
var f__22230__auto__ = (function (){var switch__22208__auto__ = ((function (c__22229__auto__){
return (function (state_35056){
var state_val_35057 = (state_35056[(1)]);
if((state_val_35057 === (1))){
var inst_35028 = [cljs.core.str("/get_user/"),cljs.core.str(user)].join('');
var inst_35029 = cljs_http.client.get.call(null,inst_35028);
var state_35056__$1 = state_35056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35056__$1,(2),inst_35029);
} else {
if((state_val_35057 === (2))){
var inst_35031 = (state_35056[(7)]);
var inst_35031__$1 = (state_35056[(2)]);
var inst_35032 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_35031__$1);
var inst_35033 = cljs.core._EQ_.call(null,(200),inst_35032);
var state_35056__$1 = (function (){var statearr_35058 = state_35056;
(statearr_35058[(7)] = inst_35031__$1);

return statearr_35058;
})();
if(inst_35033){
var statearr_35059_35075 = state_35056__$1;
(statearr_35059_35075[(1)] = (3));

} else {
var statearr_35060_35076 = state_35056__$1;
(statearr_35060_35076[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35057 === (3))){
var inst_35031 = (state_35056[(7)]);
var inst_35035 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"user","user",1532431356)];
var inst_35036 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35031);
var inst_35037 = [false,inst_35036];
var inst_35038 = cljs.core.PersistentHashMap.fromArrays(inst_35035,inst_35037);
var inst_35039 = cljs.core.reset_BANG_.call(null,frontend.core.state,inst_35038);
var state_35056__$1 = state_35056;
var statearr_35061_35077 = state_35056__$1;
(statearr_35061_35077[(2)] = inst_35039);

(statearr_35061_35077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35057 === (4))){
var inst_35041 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"user","user",1532431356)];
var inst_35042 = cljs.core.deref.call(null,frontend.core.state);
var inst_35043 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_35042);
var state_35056__$1 = (function (){var statearr_35062 = state_35056;
(statearr_35062[(8)] = inst_35041);

return statearr_35062;
})();
if(cljs.core.truth_(inst_35043)){
var statearr_35063_35078 = state_35056__$1;
(statearr_35063_35078[(1)] = (6));

} else {
var statearr_35064_35079 = state_35056__$1;
(statearr_35064_35079[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35057 === (5))){
var inst_35054 = (state_35056[(2)]);
var state_35056__$1 = state_35056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35056__$1,inst_35054);
} else {
if((state_val_35057 === (6))){
var inst_35045 = cljs.core.deref.call(null,frontend.core.state);
var inst_35046 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_35045);
var state_35056__$1 = state_35056;
var statearr_35065_35080 = state_35056__$1;
(statearr_35065_35080[(2)] = inst_35046);

(statearr_35065_35080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35057 === (7))){
var state_35056__$1 = state_35056;
var statearr_35066_35081 = state_35056__$1;
(statearr_35066_35081[(2)] = null);

(statearr_35066_35081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35057 === (8))){
var inst_35041 = (state_35056[(8)]);
var inst_35049 = (state_35056[(2)]);
var inst_35050 = [true,inst_35049];
var inst_35051 = cljs.core.PersistentHashMap.fromArrays(inst_35041,inst_35050);
var inst_35052 = cljs.core.reset_BANG_.call(null,frontend.core.state,inst_35051);
var state_35056__$1 = state_35056;
var statearr_35067_35082 = state_35056__$1;
(statearr_35067_35082[(2)] = inst_35052);

(statearr_35067_35082[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22229__auto__))
;
return ((function (switch__22208__auto__,c__22229__auto__){
return (function() {
var frontend$core$new_user_$_state_machine__22209__auto__ = null;
var frontend$core$new_user_$_state_machine__22209__auto____0 = (function (){
var statearr_35071 = [null,null,null,null,null,null,null,null,null];
(statearr_35071[(0)] = frontend$core$new_user_$_state_machine__22209__auto__);

(statearr_35071[(1)] = (1));

return statearr_35071;
});
var frontend$core$new_user_$_state_machine__22209__auto____1 = (function (state_35056){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_35056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e35072){if((e35072 instanceof Object)){
var ex__22212__auto__ = e35072;
var statearr_35073_35083 = state_35056;
(statearr_35073_35083[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35084 = state_35056;
state_35056 = G__35084;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
frontend$core$new_user_$_state_machine__22209__auto__ = function(state_35056){
switch(arguments.length){
case 0:
return frontend$core$new_user_$_state_machine__22209__auto____0.call(this);
case 1:
return frontend$core$new_user_$_state_machine__22209__auto____1.call(this,state_35056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$core$new_user_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$core$new_user_$_state_machine__22209__auto____0;
frontend$core$new_user_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$core$new_user_$_state_machine__22209__auto____1;
return frontend$core$new_user_$_state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22229__auto__))
})();
var state__22231__auto__ = (function (){var statearr_35074 = f__22230__auto__.call(null);
(statearr_35074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22229__auto__);

return statearr_35074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22231__auto__);
});})(c__22229__auto__))
);

return c__22229__auto__;
});
frontend.core.sidebar = (function frontend$core$sidebar(p__35085,user){
var map__35088 = p__35085;
var map__35088__$1 = ((((!((map__35088 == null)))?((((map__35088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35088):map__35088);
var avatar_url = cljs.core.get.call(null,map__35088__$1,new cljs.core.Keyword(null,"avatar_url","avatar_url",1520721439));
var name = cljs.core.get.call(null,map__35088__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var html_url = cljs.core.get.call(null,map__35088__$1,new cljs.core.Keyword(null,"html_url","html_url",-1914714112));
var login = cljs.core.get.call(null,map__35088__$1,new cljs.core.Keyword(null,"login","login",55217519));
var public_repos = cljs.core.get.call(null,map__35088__$1,new cljs.core.Keyword(null,"public_repos","public_repos",-1544064903));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sideBar.shadow","div.sideBar.shadow",1146193369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),avatar_url], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#userName","span#userName",-1139139024),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#userUrl","span#userUrl",1015365172),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),html_url], null),[cljs.core.str(login),cljs.core.str(" - "),cljs.core.str(public_repos),cljs.core.str(" public repos")].join('')], null)], null)], null)], null);
});
frontend.core.twitcard = (function frontend$core$twitcard(p__35090,commit){
var map__35093 = p__35090;
var map__35093__$1 = ((((!((map__35093 == null)))?((((map__35093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35093):map__35093);
var message = cljs.core.get.call(null,map__35093__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var commit_url = cljs.core.get.call(null,map__35093__$1,new cljs.core.Keyword(null,"commit_url","commit_url",1638473986));
var sha = cljs.core.get.call(null,map__35093__$1,new cljs.core.Keyword(null,"sha","sha",-950317251));
var repo_url = cljs.core.get.call(null,map__35093__$1,new cljs.core.Keyword(null,"repo_url","repo_url",-1241702661));
var repo_name = cljs.core.get.call(null,map__35093__$1,new cljs.core.Keyword(null,"repo_name","repo_name",61059011));
var timestamp_pretty = cljs.core.get.call(null,map__35093__$1,new cljs.core.Keyword(null,"timestamp_pretty","timestamp_pretty",-1747939911));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitCard.shadow","div.twitCard.shadow",-1434748321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitCardMessage","div.twitCardMessage",835432656),message], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),commit_url], null),sha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," to "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),repo_url], null),repo_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),timestamp_pretty], null)], null);
});
frontend.core.timeline = (function frontend$core$timeline(commits){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timeline","div.timeline",-487827859),(function (){var iter__20734__auto__ = (function frontend$core$timeline_$_iter__35099(s__35100){
return (new cljs.core.LazySeq(null,(function (){
var s__35100__$1 = s__35100;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35100__$1);
if(temp__4657__auto__){
var s__35100__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35100__$2)){
var c__20732__auto__ = cljs.core.chunk_first.call(null,s__35100__$2);
var size__20733__auto__ = cljs.core.count.call(null,c__20732__auto__);
var b__35102 = cljs.core.chunk_buffer.call(null,size__20733__auto__);
if((function (){var i__35101 = (0);
while(true){
if((i__35101 < size__20733__auto__)){
var card = cljs.core._nth.call(null,c__20732__auto__,i__35101);
cljs.core.chunk_append.call(null,b__35102,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.twitcard,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(card)], null)));

var G__35103 = (i__35101 + (1));
i__35101 = G__35103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35102),frontend$core$timeline_$_iter__35099.call(null,cljs.core.chunk_rest.call(null,s__35100__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35102),null);
}
} else {
var card = cljs.core.first.call(null,s__35100__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.twitcard,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(card)], null)),frontend$core$timeline_$_iter__35099.call(null,cljs.core.rest.call(null,s__35100__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20734__auto__.call(null,commits);
})()], null);
});
frontend.core.content_container = (function frontend$core$content_container(user){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contentContainer","div.contentContainer",-121228775),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.sidebar,user], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.timeline,new cljs.core.Keyword(null,"commits","commits",1045759893).cljs$core$IFn$_invoke$arity$1(user)], null)], null);
});
frontend.core.logo_area = (function frontend$core$logo_area(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.titleBox","div.titleBox",-23627707),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#logo","div#logo",1426956221),"Twit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#definition","div#definition",-1376633207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"V. to taunt or ridicule"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"with reference to anything embarrassing"], null)], null)], null)], null)], null);
});
frontend.core.search_area = (function frontend$core$search_area(state_map){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.searchContainer","div.searchContainer",6930280),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Find Github user to twit",new cljs.core.Keyword(null,"class","class",-2030961996),"mainSearch",new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__35104_SHARP_){
if(cljs.core._EQ_.call(null,(13),p1__35104_SHARP_.keyCode)){
return frontend.core.new_user.call(null,p1__35104_SHARP_.target.value);
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.searchError","div.searchError",-1273925700),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(state_map))?"Could not find that Github user!":"")], null)], null);
});
frontend.core.topbox = (function frontend$core$topbox(state_map){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.searchBox.shadow","div.searchBox.shadow",-780230454),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.logo_area], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.search_area], null)], null);
});
frontend.core.page_root = (function frontend$core$page_root(user){
frontend.core.new_user.call(null,user);

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.topbox,cljs.core.deref.call(null,frontend.core.state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.content_container,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.core.state))], null)], null);
});
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.page_root,"rgscherf"], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1468897894282