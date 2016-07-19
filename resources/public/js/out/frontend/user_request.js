// Compiled by ClojureScript 1.9.89 {}
goog.provide('frontend.user_request');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
frontend.user_request.new_user = (function frontend$user_request$new_user(state,user){
var c__21984__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21984__auto__){
return (function (){
var f__21985__auto__ = (function (){var switch__21963__auto__ = ((function (c__21984__auto__){
return (function (state_22087){
var state_val_22088 = (state_22087[(1)]);
if((state_val_22088 === (1))){
var inst_22065 = [cljs.core.str("/get_user/"),cljs.core.str(user)].join('');
var inst_22066 = cljs_http.client.get.call(null,inst_22065);
var state_22087__$1 = state_22087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22087__$1,(2),inst_22066);
} else {
if((state_val_22088 === (2))){
var inst_22068 = (state_22087[(7)]);
var inst_22068__$1 = (state_22087[(2)]);
var inst_22069 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_22068__$1);
var inst_22070 = cljs.core._EQ_.call(null,inst_22069,(200));
var state_22087__$1 = (function (){var statearr_22089 = state_22087;
(statearr_22089[(7)] = inst_22068__$1);

return statearr_22089;
})();
if(inst_22070){
var statearr_22090_22101 = state_22087__$1;
(statearr_22090_22101[(1)] = (3));

} else {
var statearr_22091_22102 = state_22087__$1;
(statearr_22091_22102[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (3))){
var inst_22068 = (state_22087[(7)]);
var inst_22072 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"user","user",1532431356)];
var inst_22073 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_22068);
var inst_22074 = [false,inst_22073];
var inst_22075 = cljs.core.PersistentHashMap.fromArrays(inst_22072,inst_22074);
var inst_22076 = cljs.core.reset_BANG_.call(null,state,inst_22075);
var state_22087__$1 = state_22087;
var statearr_22092_22103 = state_22087__$1;
(statearr_22092_22103[(2)] = inst_22076);

(statearr_22092_22103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (4))){
var inst_22078 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"user","user",1532431356)];
var inst_22079 = cljs.core.deref.call(null,state);
var inst_22080 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_22079);
var inst_22081 = [true,inst_22080];
var inst_22082 = cljs.core.PersistentHashMap.fromArrays(inst_22078,inst_22081);
var inst_22083 = cljs.core.reset_BANG_.call(null,state,inst_22082);
var state_22087__$1 = state_22087;
var statearr_22093_22104 = state_22087__$1;
(statearr_22093_22104[(2)] = inst_22083);

(statearr_22093_22104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22088 === (5))){
var inst_22085 = (state_22087[(2)]);
var state_22087__$1 = state_22087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22087__$1,inst_22085);
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
var frontend$user_request$new_user_$_state_machine__21964__auto__ = null;
var frontend$user_request$new_user_$_state_machine__21964__auto____0 = (function (){
var statearr_22097 = [null,null,null,null,null,null,null,null];
(statearr_22097[(0)] = frontend$user_request$new_user_$_state_machine__21964__auto__);

(statearr_22097[(1)] = (1));

return statearr_22097;
});
var frontend$user_request$new_user_$_state_machine__21964__auto____1 = (function (state_22087){
while(true){
var ret_value__21965__auto__ = (function (){try{while(true){
var result__21966__auto__ = switch__21963__auto__.call(null,state_22087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21966__auto__;
}
break;
}
}catch (e22098){if((e22098 instanceof Object)){
var ex__21967__auto__ = e22098;
var statearr_22099_22105 = state_22087;
(statearr_22099_22105[(5)] = ex__21967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22106 = state_22087;
state_22087 = G__22106;
continue;
} else {
return ret_value__21965__auto__;
}
break;
}
});
frontend$user_request$new_user_$_state_machine__21964__auto__ = function(state_22087){
switch(arguments.length){
case 0:
return frontend$user_request$new_user_$_state_machine__21964__auto____0.call(this);
case 1:
return frontend$user_request$new_user_$_state_machine__21964__auto____1.call(this,state_22087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$user_request$new_user_$_state_machine__21964__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$user_request$new_user_$_state_machine__21964__auto____0;
frontend$user_request$new_user_$_state_machine__21964__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$user_request$new_user_$_state_machine__21964__auto____1;
return frontend$user_request$new_user_$_state_machine__21964__auto__;
})()
;})(switch__21963__auto__,c__21984__auto__))
})();
var state__21986__auto__ = (function (){var statearr_22100 = f__21985__auto__.call(null);
(statearr_22100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21984__auto__);

return statearr_22100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21986__auto__);
});})(c__21984__auto__))
);

return c__21984__auto__;
});

//# sourceMappingURL=user_request.js.map?rel=1468966522591