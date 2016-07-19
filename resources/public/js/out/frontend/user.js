// Compiled by ClojureScript 1.9.89 {}
goog.provide('frontend.user');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
frontend.user.new_user = (function frontend$user$new_user(state,user){
var c__21984__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21984__auto__){
return (function (){
var f__21985__auto__ = (function (){var switch__21963__auto__ = ((function (c__21984__auto__){
return (function (state_22394){
var state_val_22395 = (state_22394[(1)]);
if((state_val_22395 === (1))){
var inst_22372 = [cljs.core.str("/get_user/"),cljs.core.str(user)].join('');
var inst_22373 = cljs_http.client.get.call(null,inst_22372);
var state_22394__$1 = state_22394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22394__$1,(2),inst_22373);
} else {
if((state_val_22395 === (2))){
var inst_22375 = (state_22394[(7)]);
var inst_22375__$1 = (state_22394[(2)]);
var inst_22376 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_22375__$1);
var inst_22377 = cljs.core._EQ_.call(null,inst_22376,(200));
var state_22394__$1 = (function (){var statearr_22396 = state_22394;
(statearr_22396[(7)] = inst_22375__$1);

return statearr_22396;
})();
if(inst_22377){
var statearr_22397_22408 = state_22394__$1;
(statearr_22397_22408[(1)] = (3));

} else {
var statearr_22398_22409 = state_22394__$1;
(statearr_22398_22409[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22395 === (3))){
var inst_22375 = (state_22394[(7)]);
var inst_22379 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"user","user",1532431356)];
var inst_22380 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_22375);
var inst_22381 = [false,inst_22380];
var inst_22382 = cljs.core.PersistentHashMap.fromArrays(inst_22379,inst_22381);
var inst_22383 = cljs.core.reset_BANG_.call(null,state,inst_22382);
var state_22394__$1 = state_22394;
var statearr_22399_22410 = state_22394__$1;
(statearr_22399_22410[(2)] = inst_22383);

(statearr_22399_22410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22395 === (4))){
var inst_22385 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"user","user",1532431356)];
var inst_22386 = cljs.core.deref.call(null,state);
var inst_22387 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_22386);
var inst_22388 = [true,inst_22387];
var inst_22389 = cljs.core.PersistentHashMap.fromArrays(inst_22385,inst_22388);
var inst_22390 = cljs.core.reset_BANG_.call(null,state,inst_22389);
var state_22394__$1 = state_22394;
var statearr_22400_22411 = state_22394__$1;
(statearr_22400_22411[(2)] = inst_22390);

(statearr_22400_22411[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22395 === (5))){
var inst_22392 = (state_22394[(2)]);
var state_22394__$1 = state_22394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22394__$1,inst_22392);
} else {
return null;
}
}
}
}
}
});})(c__21984__auto__))
;
return ((function (switch__21963__auto__,c__21984__auto__){
return (function() {
var frontend$user$new_user_$_state_machine__21964__auto__ = null;
var frontend$user$new_user_$_state_machine__21964__auto____0 = (function (){
var statearr_22404 = [null,null,null,null,null,null,null,null];
(statearr_22404[(0)] = frontend$user$new_user_$_state_machine__21964__auto__);

(statearr_22404[(1)] = (1));

return statearr_22404;
});
var frontend$user$new_user_$_state_machine__21964__auto____1 = (function (state_22394){
while(true){
var ret_value__21965__auto__ = (function (){try{while(true){
var result__21966__auto__ = switch__21963__auto__.call(null,state_22394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21966__auto__;
}
break;
}
}catch (e22405){if((e22405 instanceof Object)){
var ex__21967__auto__ = e22405;
var statearr_22406_22412 = state_22394;
(statearr_22406_22412[(5)] = ex__21967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22413 = state_22394;
state_22394 = G__22413;
continue;
} else {
return ret_value__21965__auto__;
}
break;
}
});
frontend$user$new_user_$_state_machine__21964__auto__ = function(state_22394){
switch(arguments.length){
case 0:
return frontend$user$new_user_$_state_machine__21964__auto____0.call(this);
case 1:
return frontend$user$new_user_$_state_machine__21964__auto____1.call(this,state_22394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$user$new_user_$_state_machine__21964__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$user$new_user_$_state_machine__21964__auto____0;
frontend$user$new_user_$_state_machine__21964__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$user$new_user_$_state_machine__21964__auto____1;
return frontend$user$new_user_$_state_machine__21964__auto__;
})()
;})(switch__21963__auto__,c__21984__auto__))
})();
var state__21986__auto__ = (function (){var statearr_22407 = f__21985__auto__.call(null);
(statearr_22407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21984__auto__);

return statearr_22407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21986__auto__);
});})(c__21984__auto__))
);

return c__21984__auto__;
});

//# sourceMappingURL=user.js.map?rel=1468966629859