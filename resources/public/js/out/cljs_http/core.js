// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__22278){
var vec__22279 = p__22278;
var k = cljs.core.nth.call(null,vec__22279,(0),null);
var v = cljs.core.nth.call(null,vec__22279,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__22283 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__22283)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__22283)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__22283)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__22283)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__22283)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__22283)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__22284){
var map__22288 = p__22284;
var map__22288__$1 = ((((!((map__22288 == null)))?((((map__22288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22288):map__22288);
var request = map__22288__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__22288__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__22288__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__22288__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__19954__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__22290 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__22290,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__22290,response_type);

G__22290.setTimeoutInterval(timeout);

G__22290.setWithCredentials(send_credentials);

return G__22290;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__22291){
var map__22319 = p__22291;
var map__22319__$1 = ((((!((map__22319 == null)))?((((map__22319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22319):map__22319);
var request = map__22319__$1;
var request_method = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__22319__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__19954__auto__ = request_method;
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__22319,map__22319__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__22319,map__22319__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_22346 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__22319,map__22319__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__22319,map__22319__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__22321_22347 = xhr__$1;
G__22321_22347.setProgressEventsEnabled(true);

G__22321_22347.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_22346,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__22321_22347.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_22346,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__22229__auto___22348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22229__auto___22348,channel,request_url,method,headers__$1,xhr__$1,map__22319,map__22319__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__22230__auto__ = (function (){var switch__22208__auto__ = ((function (c__22229__auto___22348,channel,request_url,method,headers__$1,xhr__$1,map__22319,map__22319__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_22332){
var state_val_22333 = (state_22332[(1)]);
if((state_val_22333 === (1))){
var state_22332__$1 = state_22332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22332__$1,(2),cancel);
} else {
if((state_val_22333 === (2))){
var inst_22323 = (state_22332[(2)]);
var inst_22324 = xhr__$1.isComplete();
var inst_22325 = cljs.core.not.call(null,inst_22324);
var state_22332__$1 = (function (){var statearr_22334 = state_22332;
(statearr_22334[(7)] = inst_22323);

return statearr_22334;
})();
if(inst_22325){
var statearr_22335_22349 = state_22332__$1;
(statearr_22335_22349[(1)] = (3));

} else {
var statearr_22336_22350 = state_22332__$1;
(statearr_22336_22350[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22333 === (3))){
var inst_22327 = xhr__$1.abort();
var state_22332__$1 = state_22332;
var statearr_22337_22351 = state_22332__$1;
(statearr_22337_22351[(2)] = inst_22327);

(statearr_22337_22351[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22333 === (4))){
var state_22332__$1 = state_22332;
var statearr_22338_22352 = state_22332__$1;
(statearr_22338_22352[(2)] = null);

(statearr_22338_22352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22333 === (5))){
var inst_22330 = (state_22332[(2)]);
var state_22332__$1 = state_22332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22332__$1,inst_22330);
} else {
return null;
}
}
}
}
}
});})(c__22229__auto___22348,channel,request_url,method,headers__$1,xhr__$1,map__22319,map__22319__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__22208__auto__,c__22229__auto___22348,channel,request_url,method,headers__$1,xhr__$1,map__22319,map__22319__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__22209__auto__ = null;
var cljs_http$core$xhr_$_state_machine__22209__auto____0 = (function (){
var statearr_22342 = [null,null,null,null,null,null,null,null];
(statearr_22342[(0)] = cljs_http$core$xhr_$_state_machine__22209__auto__);

(statearr_22342[(1)] = (1));

return statearr_22342;
});
var cljs_http$core$xhr_$_state_machine__22209__auto____1 = (function (state_22332){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_22332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e22343){if((e22343 instanceof Object)){
var ex__22212__auto__ = e22343;
var statearr_22344_22353 = state_22332;
(statearr_22344_22353[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22354 = state_22332;
state_22332 = G__22354;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__22209__auto__ = function(state_22332){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__22209__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__22209__auto____1.call(this,state_22332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__22209__auto____0;
cljs_http$core$xhr_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__22209__auto____1;
return cljs_http$core$xhr_$_state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22229__auto___22348,channel,request_url,method,headers__$1,xhr__$1,map__22319,map__22319__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__22231__auto__ = (function (){var statearr_22345 = f__22230__auto__.call(null);
(statearr_22345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22229__auto___22348);

return statearr_22345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22231__auto__);
});})(c__22229__auto___22348,channel,request_url,method,headers__$1,xhr__$1,map__22319,map__22319__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__22355){
var map__22372 = p__22355;
var map__22372__$1 = ((((!((map__22372 == null)))?((((map__22372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22372):map__22372);
var request = map__22372__$1;
var timeout = cljs.core.get.call(null,map__22372__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__22372__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__22372__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__22372__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_22388 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__22372,map__22372__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__22372,map__22372__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__22372,map__22372__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__22372,map__22372__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_22388], null));

if(cljs.core.truth_(cancel)){
var c__22229__auto___22389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22229__auto___22389,req_22388,channel,jsonp__$1,map__22372,map__22372__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__22230__auto__ = (function (){var switch__22208__auto__ = ((function (c__22229__auto___22389,req_22388,channel,jsonp__$1,map__22372,map__22372__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_22378){
var state_val_22379 = (state_22378[(1)]);
if((state_val_22379 === (1))){
var state_22378__$1 = state_22378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22378__$1,(2),cancel);
} else {
if((state_val_22379 === (2))){
var inst_22375 = (state_22378[(2)]);
var inst_22376 = jsonp__$1.cancel(req_22388);
var state_22378__$1 = (function (){var statearr_22380 = state_22378;
(statearr_22380[(7)] = inst_22375);

return statearr_22380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22378__$1,inst_22376);
} else {
return null;
}
}
});})(c__22229__auto___22389,req_22388,channel,jsonp__$1,map__22372,map__22372__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__22208__auto__,c__22229__auto___22389,req_22388,channel,jsonp__$1,map__22372,map__22372__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__22209__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__22209__auto____0 = (function (){
var statearr_22384 = [null,null,null,null,null,null,null,null];
(statearr_22384[(0)] = cljs_http$core$jsonp_$_state_machine__22209__auto__);

(statearr_22384[(1)] = (1));

return statearr_22384;
});
var cljs_http$core$jsonp_$_state_machine__22209__auto____1 = (function (state_22378){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_22378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e22385){if((e22385 instanceof Object)){
var ex__22212__auto__ = e22385;
var statearr_22386_22390 = state_22378;
(statearr_22386_22390[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22391 = state_22378;
state_22378 = G__22391;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__22209__auto__ = function(state_22378){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__22209__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__22209__auto____1.call(this,state_22378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__22209__auto____0;
cljs_http$core$jsonp_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__22209__auto____1;
return cljs_http$core$jsonp_$_state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22229__auto___22389,req_22388,channel,jsonp__$1,map__22372,map__22372__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__22231__auto__ = (function (){var statearr_22387 = f__22230__auto__.call(null);
(statearr_22387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22229__auto___22389);

return statearr_22387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22231__auto__);
});})(c__22229__auto___22389,req_22388,channel,jsonp__$1,map__22372,map__22372__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__22392){
var map__22395 = p__22392;
var map__22395__$1 = ((((!((map__22395 == null)))?((((map__22395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22395):map__22395);
var request__$1 = map__22395__$1;
var request_method = cljs.core.get.call(null,map__22395__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1468892818676