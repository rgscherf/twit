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
return (function (state_23422){
var state_val_23423 = (state_23422[(1)]);
if((state_val_23423 === (1))){
var inst_23415 = [cljs.core.str("/get_user/"),cljs.core.str(user)].join('');
var inst_23416 = cljs_http.client.get.call(null,inst_23415);
var state_23422__$1 = state_23422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23422__$1,(2),inst_23416);
} else {
if((state_val_23423 === (2))){
var inst_23418 = (state_23422[(2)]);
var inst_23419 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23418);
var inst_23420 = cljs.core.reset_BANG_.call(null,frontend.core.state,inst_23419);
var state_23422__$1 = state_23422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23422__$1,inst_23420);
} else {
return null;
}
}
});})(c__22229__auto__))
;
return ((function (switch__22208__auto__,c__22229__auto__){
return (function() {
var frontend$core$new_user_$_state_machine__22209__auto__ = null;
var frontend$core$new_user_$_state_machine__22209__auto____0 = (function (){
var statearr_23427 = [null,null,null,null,null,null,null];
(statearr_23427[(0)] = frontend$core$new_user_$_state_machine__22209__auto__);

(statearr_23427[(1)] = (1));

return statearr_23427;
});
var frontend$core$new_user_$_state_machine__22209__auto____1 = (function (state_23422){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_23422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e23428){if((e23428 instanceof Object)){
var ex__22212__auto__ = e23428;
var statearr_23429_23431 = state_23422;
(statearr_23429_23431[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23432 = state_23422;
state_23422 = G__23432;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
frontend$core$new_user_$_state_machine__22209__auto__ = function(state_23422){
switch(arguments.length){
case 0:
return frontend$core$new_user_$_state_machine__22209__auto____0.call(this);
case 1:
return frontend$core$new_user_$_state_machine__22209__auto____1.call(this,state_23422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$core$new_user_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$core$new_user_$_state_machine__22209__auto____0;
frontend$core$new_user_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$core$new_user_$_state_machine__22209__auto____1;
return frontend$core$new_user_$_state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22229__auto__))
})();
var state__22231__auto__ = (function (){var statearr_23430 = f__22230__auto__.call(null);
(statearr_23430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22229__auto__);

return statearr_23430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22231__auto__);
});})(c__22229__auto__))
);

return c__22229__auto__;
});
frontend.core.page_root = (function frontend$core$page_root(user){
frontend.core.new_user.call(null,user);

return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("Hi, "),cljs.core.str(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.core.state)))].join('')], null);
});
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.page_root,"rgscherf"], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1468893033029