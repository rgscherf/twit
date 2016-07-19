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
return (function (state_28072){
var state_val_28073 = (state_28072[(1)]);
if((state_val_28073 === (1))){
var inst_28052 = [cljs.core.str("/get_user/"),cljs.core.str(user)].join('');
var inst_28053 = cljs_http.client.get.call(null,inst_28052);
var state_28072__$1 = state_28072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28072__$1,(2),inst_28053);
} else {
if((state_val_28073 === (2))){
var inst_28055 = (state_28072[(7)]);
var inst_28055__$1 = (state_28072[(2)]);
var inst_28056 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_28055__$1);
var inst_28057 = cljs.core._EQ_.call(null,(200),inst_28056);
var state_28072__$1 = (function (){var statearr_28074 = state_28072;
(statearr_28074[(7)] = inst_28055__$1);

return statearr_28074;
})();
if(inst_28057){
var statearr_28075_28086 = state_28072__$1;
(statearr_28075_28086[(1)] = (3));

} else {
var statearr_28076_28087 = state_28072__$1;
(statearr_28076_28087[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28073 === (3))){
var inst_28055 = (state_28072[(7)]);
var inst_28059 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"user","user",1532431356)];
var inst_28060 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28055);
var inst_28061 = [false,inst_28060];
var inst_28062 = cljs.core.PersistentHashMap.fromArrays(inst_28059,inst_28061);
var inst_28063 = cljs.core.reset_BANG_.call(null,frontend.core.state,inst_28062);
var state_28072__$1 = state_28072;
var statearr_28077_28088 = state_28072__$1;
(statearr_28077_28088[(2)] = inst_28063);

(statearr_28077_28088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28073 === (4))){
var inst_28065 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"user","user",1532431356)];
var inst_28066 = [true,null];
var inst_28067 = cljs.core.PersistentHashMap.fromArrays(inst_28065,inst_28066);
var inst_28068 = cljs.core.reset_BANG_.call(null,frontend.core.state,inst_28067);
var state_28072__$1 = state_28072;
var statearr_28078_28089 = state_28072__$1;
(statearr_28078_28089[(2)] = inst_28068);

(statearr_28078_28089[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28073 === (5))){
var inst_28070 = (state_28072[(2)]);
var state_28072__$1 = state_28072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28072__$1,inst_28070);
} else {
return null;
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
var statearr_28082 = [null,null,null,null,null,null,null,null];
(statearr_28082[(0)] = frontend$core$new_user_$_state_machine__22209__auto__);

(statearr_28082[(1)] = (1));

return statearr_28082;
});
var frontend$core$new_user_$_state_machine__22209__auto____1 = (function (state_28072){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_28072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e28083){if((e28083 instanceof Object)){
var ex__22212__auto__ = e28083;
var statearr_28084_28090 = state_28072;
(statearr_28084_28090[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28091 = state_28072;
state_28072 = G__28091;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
frontend$core$new_user_$_state_machine__22209__auto__ = function(state_28072){
switch(arguments.length){
case 0:
return frontend$core$new_user_$_state_machine__22209__auto____0.call(this);
case 1:
return frontend$core$new_user_$_state_machine__22209__auto____1.call(this,state_28072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$core$new_user_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$core$new_user_$_state_machine__22209__auto____0;
frontend$core$new_user_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$core$new_user_$_state_machine__22209__auto____1;
return frontend$core$new_user_$_state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22229__auto__))
})();
var state__22231__auto__ = (function (){var statearr_28085 = f__22230__auto__.call(null);
(statearr_28085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22229__auto__);

return statearr_28085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22231__auto__);
});})(c__22229__auto__))
);

return c__22229__auto__;
});
frontend.core.sidebar = (function frontend$core$sidebar(p__28092,user){
var map__28095 = p__28092;
var map__28095__$1 = ((((!((map__28095 == null)))?((((map__28095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28095):map__28095);
var avatar_url = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"avatar_url","avatar_url",1520721439));
var name = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var html_url = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"html_url","html_url",-1914714112));
var login = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"login","login",55217519));
var public_repos = cljs.core.get.call(null,map__28095__$1,new cljs.core.Keyword(null,"public_repos","public_repos",-1544064903));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sideBar shadow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),avatar_url], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"userName"], null),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"userUrl"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),html_url], null),[cljs.core.str(login),cljs.core.str(" - "),cljs.core.str(public_repos),cljs.core.str(" public repos")].join('')], null)], null)], null)], null);
});
frontend.core.twitcard = (function frontend$core$twitcard(p__28097,commit){
var map__28100 = p__28097;
var map__28100__$1 = ((((!((map__28100 == null)))?((((map__28100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28100):map__28100);
var message = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var commit_url = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"commit_url","commit_url",1638473986));
var sha = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"sha","sha",-950317251));
var repo_url = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"repo_url","repo_url",-1241702661));
var repo_name = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"repo_name","repo_name",61059011));
var timestamp_pretty = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"timestamp_pretty","timestamp_pretty",-1747939911));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"twitCard shadow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"twitCardMessage"], null),message], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),commit_url], null),sha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," to "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),repo_url], null),repo_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),timestamp_pretty], null)], null);
});
frontend.core.timeline = (function frontend$core$timeline(commits){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"timeline"], null),(function (){var iter__20734__auto__ = (function frontend$core$timeline_$_iter__28106(s__28107){
return (new cljs.core.LazySeq(null,(function (){
var s__28107__$1 = s__28107;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28107__$1);
if(temp__4657__auto__){
var s__28107__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28107__$2)){
var c__20732__auto__ = cljs.core.chunk_first.call(null,s__28107__$2);
var size__20733__auto__ = cljs.core.count.call(null,c__20732__auto__);
var b__28109 = cljs.core.chunk_buffer.call(null,size__20733__auto__);
if((function (){var i__28108 = (0);
while(true){
if((i__28108 < size__20733__auto__)){
var card = cljs.core._nth.call(null,c__20732__auto__,i__28108);
cljs.core.chunk_append.call(null,b__28109,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.twitcard,card], null));

var G__28110 = (i__28108 + (1));
i__28108 = G__28110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28109),frontend$core$timeline_$_iter__28106.call(null,cljs.core.chunk_rest.call(null,s__28107__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28109),null);
}
} else {
var card = cljs.core.first.call(null,s__28107__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.twitcard,card], null),frontend$core$timeline_$_iter__28106.call(null,cljs.core.rest.call(null,s__28107__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"contentContainer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.sidebar,user], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.timeline,new cljs.core.Keyword(null,"commits","commits",1045759893).cljs$core$IFn$_invoke$arity$1(user)], null)], null);
});
frontend.core.page_root = (function frontend$core$page_root(user){
frontend.core.new_user.call(null,user);

return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.content_container,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.core.state))], null);
});
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.page_root,"rgscherf"], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1468895221262