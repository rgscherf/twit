// Compiled by ClojureScript 1.9.89 {}
goog.provide('user_request');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
user_request.new_user = (function user_request$new_user(user){
return user_request.go.call(null,(function (){var user_url = [cljs.core.str("/get_user/"),cljs.core.str(user)].join('');
var response = cljs.core.async._LT__BANG_.call(null,cljs_http.client.get.call(null,user_url));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response),(200))){
return cljs.core.reset_BANG_.call(null,user_request.state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)], null));
} else {
return cljs.core.reset_BANG_.call(null,user_request.state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),true,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,user_request.state))], null));
}
})());
});

//# sourceMappingURL=user_request.js.map?rel=1468966165634