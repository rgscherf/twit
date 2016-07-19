// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('frontend.user');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
frontend.user.new_user = (function frontend$user$new_user(state,user){
var c__14065__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto__){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto__){
return (function (state_17772){
var state_val_17773 = (state_17772[(1)]);
if((state_val_17773 === (1))){
var inst_17750 = [cljs.core.str("/get_user/"),cljs.core.str(user)].join('');
var inst_17751 = cljs_http.client.get(inst_17750);
var state_17772__$1 = state_17772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17772__$1,(2),inst_17751);
} else {
if((state_val_17773 === (2))){
var inst_17753 = (state_17772[(7)]);
var inst_17753__$1 = (state_17772[(2)]);
var inst_17754 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(inst_17753__$1);
var inst_17755 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17754,(200));
var state_17772__$1 = (function (){var statearr_17774 = state_17772;
(statearr_17774[(7)] = inst_17753__$1);

return statearr_17774;
})();
if(inst_17755){
var statearr_17775_17786 = state_17772__$1;
(statearr_17775_17786[(1)] = (3));

} else {
var statearr_17776_17787 = state_17772__$1;
(statearr_17776_17787[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17773 === (3))){
var inst_17753 = (state_17772[(7)]);
var inst_17757 = [cljs.core.cst$kw$error,cljs.core.cst$kw$user];
var inst_17758 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_17753);
var inst_17759 = [false,inst_17758];
var inst_17760 = cljs.core.PersistentHashMap.fromArrays(inst_17757,inst_17759);
var inst_17761 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,inst_17760) : cljs.core.reset_BANG_.call(null,state,inst_17760));
var state_17772__$1 = state_17772;
var statearr_17777_17788 = state_17772__$1;
(statearr_17777_17788[(2)] = inst_17761);

(statearr_17777_17788[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17773 === (4))){
var inst_17763 = [cljs.core.cst$kw$error,cljs.core.cst$kw$user];
var inst_17764 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var inst_17765 = cljs.core.cst$kw$user.cljs$core$IFn$_invoke$arity$1(inst_17764);
var inst_17766 = [true,inst_17765];
var inst_17767 = cljs.core.PersistentHashMap.fromArrays(inst_17763,inst_17766);
var inst_17768 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,inst_17767) : cljs.core.reset_BANG_.call(null,state,inst_17767));
var state_17772__$1 = state_17772;
var statearr_17778_17789 = state_17772__$1;
(statearr_17778_17789[(2)] = inst_17768);

(statearr_17778_17789[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17773 === (5))){
var inst_17770 = (state_17772[(2)]);
var state_17772__$1 = state_17772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17772__$1,inst_17770);
} else {
return null;
}
}
}
}
}
});})(c__14065__auto__))
;
return ((function (switch__13951__auto__,c__14065__auto__){
return (function() {
var frontend$user$new_user_$_state_machine__13952__auto__ = null;
var frontend$user$new_user_$_state_machine__13952__auto____0 = (function (){
var statearr_17782 = [null,null,null,null,null,null,null,null];
(statearr_17782[(0)] = frontend$user$new_user_$_state_machine__13952__auto__);

(statearr_17782[(1)] = (1));

return statearr_17782;
});
var frontend$user$new_user_$_state_machine__13952__auto____1 = (function (state_17772){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_17772);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e17783){if((e17783 instanceof Object)){
var ex__13955__auto__ = e17783;
var statearr_17784_17790 = state_17772;
(statearr_17784_17790[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17772);

return cljs.core.cst$kw$recur;
} else {
throw e17783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__17791 = state_17772;
state_17772 = G__17791;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
frontend$user$new_user_$_state_machine__13952__auto__ = function(state_17772){
switch(arguments.length){
case 0:
return frontend$user$new_user_$_state_machine__13952__auto____0.call(this);
case 1:
return frontend$user$new_user_$_state_machine__13952__auto____1.call(this,state_17772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$user$new_user_$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$user$new_user_$_state_machine__13952__auto____0;
frontend$user$new_user_$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$user$new_user_$_state_machine__13952__auto____1;
return frontend$user$new_user_$_state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto__))
})();
var state__14067__auto__ = (function (){var statearr_17785 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_17785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto__);

return statearr_17785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto__))
);

return c__14065__auto__;
});
