// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__16888 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16888) : cljs.core.atom.call(null,G__16888));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__16893){
var vec__16894 = p__16893;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16894,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16894,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__16898 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__16898)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__16898)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__16898)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__16898)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__16898)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16898)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__16899){
var map__16903 = p__16899;
var map__16903__$1 = ((((!((map__16903 == null)))?((((map__16903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16903):map__16903);
var request = map__16903__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16903__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16903__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16903__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6247__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__16905 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__16905,default_headers);

cljs_http.core.apply_response_type_BANG_(G__16905,response_type);

G__16905.setTimeoutInterval(timeout);

G__16905.setWithCredentials(send_credentials);

return G__16905;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__16906){
var map__16935 = p__16906;
var map__16935__$1 = ((((!((map__16935 == null)))?((((map__16935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16935):map__16935);
var request = map__16935__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16935__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16935__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16935__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16935__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16935__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16935__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__6247__auto__ = request_method;
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr__$1 = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__16935,map__16935__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__16937 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__16937) : cljs_http.core.error_kw.call(null,G__16937));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr__$1))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__16935,map__16935__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_16963 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__16935,map__16935__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__16935,map__16935__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__16938_16964 = xhr__$1;
G__16938_16964.setProgressEventsEnabled(true);

G__16938_16964.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_16963,cljs.core.cst$kw$upload));

G__16938_16964.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_16963,cljs.core.cst$kw$download));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__14065__auto___16965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___16965,channel,request_url,method,headers__$1,xhr__$1,map__16935,map__16935__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___16965,channel,request_url,method,headers__$1,xhr__$1,map__16935,map__16935__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_16949){
var state_val_16950 = (state_16949[(1)]);
if((state_val_16950 === (1))){
var state_16949__$1 = state_16949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16949__$1,(2),cancel);
} else {
if((state_val_16950 === (2))){
var inst_16940 = (state_16949[(2)]);
var inst_16941 = xhr__$1.isComplete();
var inst_16942 = cljs.core.not(inst_16941);
var state_16949__$1 = (function (){var statearr_16951 = state_16949;
(statearr_16951[(7)] = inst_16940);

return statearr_16951;
})();
if(inst_16942){
var statearr_16952_16966 = state_16949__$1;
(statearr_16952_16966[(1)] = (3));

} else {
var statearr_16953_16967 = state_16949__$1;
(statearr_16953_16967[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16950 === (3))){
var inst_16944 = xhr__$1.abort();
var state_16949__$1 = state_16949;
var statearr_16954_16968 = state_16949__$1;
(statearr_16954_16968[(2)] = inst_16944);

(statearr_16954_16968[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16950 === (4))){
var state_16949__$1 = state_16949;
var statearr_16955_16969 = state_16949__$1;
(statearr_16955_16969[(2)] = null);

(statearr_16955_16969[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16950 === (5))){
var inst_16947 = (state_16949[(2)]);
var state_16949__$1 = state_16949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16949__$1,inst_16947);
} else {
return null;
}
}
}
}
}
});})(c__14065__auto___16965,channel,request_url,method,headers__$1,xhr__$1,map__16935,map__16935__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__13951__auto__,c__14065__auto___16965,channel,request_url,method,headers__$1,xhr__$1,map__16935,map__16935__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__13952__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13952__auto____0 = (function (){
var statearr_16959 = [null,null,null,null,null,null,null,null];
(statearr_16959[(0)] = cljs_http$core$xhr_$_state_machine__13952__auto__);

(statearr_16959[(1)] = (1));

return statearr_16959;
});
var cljs_http$core$xhr_$_state_machine__13952__auto____1 = (function (state_16949){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_16949);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e16960){if((e16960 instanceof Object)){
var ex__13955__auto__ = e16960;
var statearr_16961_16970 = state_16949;
(statearr_16961_16970[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16949);

return cljs.core.cst$kw$recur;
} else {
throw e16960;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__16971 = state_16949;
state_16949 = G__16971;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13952__auto__ = function(state_16949){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13952__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13952__auto____1.call(this,state_16949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13952__auto____0;
cljs_http$core$xhr_$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13952__auto____1;
return cljs_http$core$xhr_$_state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___16965,channel,request_url,method,headers__$1,xhr__$1,map__16935,map__16935__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__14067__auto__ = (function (){var statearr_16962 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_16962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___16965);

return statearr_16962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___16965,channel,request_url,method,headers__$1,xhr__$1,map__16935,map__16935__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__16972){
var map__16989 = p__16972;
var map__16989__$1 = ((((!((map__16989 == null)))?((((map__16989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16989):map__16989);
var request = map__16989__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16989__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16989__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16989__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16989__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_17005 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__16989,map__16989__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__16989,map__16989__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__16989,map__16989__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__16989,map__16989__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_17005], null));

if(cljs.core.truth_(cancel)){
var c__14065__auto___17006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___17006,req_17005,channel,jsonp__$1,map__16989,map__16989__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___17006,req_17005,channel,jsonp__$1,map__16989,map__16989__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_16995){
var state_val_16996 = (state_16995[(1)]);
if((state_val_16996 === (1))){
var state_16995__$1 = state_16995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16995__$1,(2),cancel);
} else {
if((state_val_16996 === (2))){
var inst_16992 = (state_16995[(2)]);
var inst_16993 = jsonp__$1.cancel(req_17005);
var state_16995__$1 = (function (){var statearr_16997 = state_16995;
(statearr_16997[(7)] = inst_16992);

return statearr_16997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16995__$1,inst_16993);
} else {
return null;
}
}
});})(c__14065__auto___17006,req_17005,channel,jsonp__$1,map__16989,map__16989__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__13951__auto__,c__14065__auto___17006,req_17005,channel,jsonp__$1,map__16989,map__16989__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__13952__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13952__auto____0 = (function (){
var statearr_17001 = [null,null,null,null,null,null,null,null];
(statearr_17001[(0)] = cljs_http$core$jsonp_$_state_machine__13952__auto__);

(statearr_17001[(1)] = (1));

return statearr_17001;
});
var cljs_http$core$jsonp_$_state_machine__13952__auto____1 = (function (state_16995){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_16995);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e17002){if((e17002 instanceof Object)){
var ex__13955__auto__ = e17002;
var statearr_17003_17007 = state_16995;
(statearr_17003_17007[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16995);

return cljs.core.cst$kw$recur;
} else {
throw e17002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__17008 = state_16995;
state_16995 = G__17008;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13952__auto__ = function(state_16995){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13952__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13952__auto____1.call(this,state_16995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13952__auto____0;
cljs_http$core$jsonp_$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13952__auto____1;
return cljs_http$core$jsonp_$_state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___17006,req_17005,channel,jsonp__$1,map__16989,map__16989__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__14067__auto__ = (function (){var statearr_17004 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_17004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___17006);

return statearr_17004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___17006,req_17005,channel,jsonp__$1,map__16989,map__16989__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__17009){
var map__17012 = p__17009;
var map__17012__$1 = ((((!((map__17012 == null)))?((((map__17012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17012):map__17012);
var request__$1 = map__17012__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17012__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
