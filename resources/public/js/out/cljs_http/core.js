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
return (function (p__33121){
var vec__33122 = p__33121;
var k = cljs.core.nth.call(null,vec__33122,(0),null);
var v = cljs.core.nth.call(null,vec__33122,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__33126 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__33126)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__33126)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__33126)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__33126)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__33126)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__33126)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__33127){
var map__33131 = p__33127;
var map__33131__$1 = ((((!((map__33131 == null)))?((((map__33131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33131):map__33131);
var request = map__33131__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__33131__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__33131__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__33131__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__19958__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__33133 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__33133,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__33133,response_type);

G__33133.setTimeoutInterval(timeout);

G__33133.setWithCredentials(send_credentials);

return G__33133;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__33134){
var map__33162 = p__33134;
var map__33162__$1 = ((((!((map__33162 == null)))?((((map__33162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33162):map__33162);
var request = map__33162__$1;
var request_method = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__19958__auto__ = request_method;
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__33162,map__33162__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__33162,map__33162__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_33189 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__33162,map__33162__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__33162,map__33162__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__33164_33190 = xhr__$1;
G__33164_33190.setProgressEventsEnabled(true);

G__33164_33190.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_33189,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__33164_33190.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_33189,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__22804__auto___33191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___33191,channel,request_url,method,headers__$1,xhr__$1,map__33162,map__33162__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___33191,channel,request_url,method,headers__$1,xhr__$1,map__33162,map__33162__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_33175){
var state_val_33176 = (state_33175[(1)]);
if((state_val_33176 === (1))){
var state_33175__$1 = state_33175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33175__$1,(2),cancel);
} else {
if((state_val_33176 === (2))){
var inst_33166 = (state_33175[(2)]);
var inst_33167 = xhr__$1.isComplete();
var inst_33168 = cljs.core.not.call(null,inst_33167);
var state_33175__$1 = (function (){var statearr_33177 = state_33175;
(statearr_33177[(7)] = inst_33166);

return statearr_33177;
})();
if(inst_33168){
var statearr_33178_33192 = state_33175__$1;
(statearr_33178_33192[(1)] = (3));

} else {
var statearr_33179_33193 = state_33175__$1;
(statearr_33179_33193[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (3))){
var inst_33170 = xhr__$1.abort();
var state_33175__$1 = state_33175;
var statearr_33180_33194 = state_33175__$1;
(statearr_33180_33194[(2)] = inst_33170);

(statearr_33180_33194[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (4))){
var state_33175__$1 = state_33175;
var statearr_33181_33195 = state_33175__$1;
(statearr_33181_33195[(2)] = null);

(statearr_33181_33195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33176 === (5))){
var inst_33173 = (state_33175[(2)]);
var state_33175__$1 = state_33175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33175__$1,inst_33173);
} else {
return null;
}
}
}
}
}
});})(c__22804__auto___33191,channel,request_url,method,headers__$1,xhr__$1,map__33162,map__33162__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__22783__auto__,c__22804__auto___33191,channel,request_url,method,headers__$1,xhr__$1,map__33162,map__33162__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__22784__auto__ = null;
var cljs_http$core$xhr_$_state_machine__22784__auto____0 = (function (){
var statearr_33185 = [null,null,null,null,null,null,null,null];
(statearr_33185[(0)] = cljs_http$core$xhr_$_state_machine__22784__auto__);

(statearr_33185[(1)] = (1));

return statearr_33185;
});
var cljs_http$core$xhr_$_state_machine__22784__auto____1 = (function (state_33175){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_33175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e33186){if((e33186 instanceof Object)){
var ex__22787__auto__ = e33186;
var statearr_33187_33196 = state_33175;
(statearr_33187_33196[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33197 = state_33175;
state_33175 = G__33197;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__22784__auto__ = function(state_33175){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__22784__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__22784__auto____1.call(this,state_33175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__22784__auto____0;
cljs_http$core$xhr_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__22784__auto____1;
return cljs_http$core$xhr_$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___33191,channel,request_url,method,headers__$1,xhr__$1,map__33162,map__33162__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__22806__auto__ = (function (){var statearr_33188 = f__22805__auto__.call(null);
(statearr_33188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___33191);

return statearr_33188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___33191,channel,request_url,method,headers__$1,xhr__$1,map__33162,map__33162__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__33198){
var map__33215 = p__33198;
var map__33215__$1 = ((((!((map__33215 == null)))?((((map__33215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33215):map__33215);
var request = map__33215__$1;
var timeout = cljs.core.get.call(null,map__33215__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__33215__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__33215__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__33215__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_33231 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__33215,map__33215__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__33215,map__33215__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__33215,map__33215__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__33215,map__33215__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_33231], null));

if(cljs.core.truth_(cancel)){
var c__22804__auto___33232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___33232,req_33231,channel,jsonp__$1,map__33215,map__33215__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___33232,req_33231,channel,jsonp__$1,map__33215,map__33215__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_33221){
var state_val_33222 = (state_33221[(1)]);
if((state_val_33222 === (1))){
var state_33221__$1 = state_33221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33221__$1,(2),cancel);
} else {
if((state_val_33222 === (2))){
var inst_33218 = (state_33221[(2)]);
var inst_33219 = jsonp__$1.cancel(req_33231);
var state_33221__$1 = (function (){var statearr_33223 = state_33221;
(statearr_33223[(7)] = inst_33218);

return statearr_33223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33221__$1,inst_33219);
} else {
return null;
}
}
});})(c__22804__auto___33232,req_33231,channel,jsonp__$1,map__33215,map__33215__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__22783__auto__,c__22804__auto___33232,req_33231,channel,jsonp__$1,map__33215,map__33215__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__22784__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__22784__auto____0 = (function (){
var statearr_33227 = [null,null,null,null,null,null,null,null];
(statearr_33227[(0)] = cljs_http$core$jsonp_$_state_machine__22784__auto__);

(statearr_33227[(1)] = (1));

return statearr_33227;
});
var cljs_http$core$jsonp_$_state_machine__22784__auto____1 = (function (state_33221){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_33221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e33228){if((e33228 instanceof Object)){
var ex__22787__auto__ = e33228;
var statearr_33229_33233 = state_33221;
(statearr_33229_33233[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33234 = state_33221;
state_33221 = G__33234;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__22784__auto__ = function(state_33221){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__22784__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__22784__auto____1.call(this,state_33221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__22784__auto____0;
cljs_http$core$jsonp_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__22784__auto____1;
return cljs_http$core$jsonp_$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___33232,req_33231,channel,jsonp__$1,map__33215,map__33215__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__22806__auto__ = (function (){var statearr_33230 = f__22805__auto__.call(null);
(statearr_33230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___33232);

return statearr_33230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___33232,req_33231,channel,jsonp__$1,map__33215,map__33215__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__33235){
var map__33238 = p__33235;
var map__33238__$1 = ((((!((map__33238 == null)))?((((map__33238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33238):map__33238);
var request__$1 = map__33238__$1;
var request_method = cljs.core.get.call(null,map__33238__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1468965266906