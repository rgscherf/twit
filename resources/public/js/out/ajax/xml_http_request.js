// Compiled by ClojureScript 1.9.89 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__29530,handler){
var map__29531 = p__29530;
var map__29531__$1 = ((((!((map__29531 == null)))?((((map__29531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29531):map__29531);
var uri = cljs.core.get.call(null,map__29531__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__29531__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__29531__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__29531__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__29531__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__29531__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__29531__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__29531,map__29531__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__29529_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__29529_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__29531,map__29531__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___29543 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___29543)){
var response_type_29544 = temp__4657__auto___29543;
this$__$1.responseType = cljs.core.name.call(null,response_type_29544);
} else {
}

var seq__29533_29545 = cljs.core.seq.call(null,headers);
var chunk__29534_29546 = null;
var count__29535_29547 = (0);
var i__29536_29548 = (0);
while(true){
if((i__29536_29548 < count__29535_29547)){
var vec__29537_29549 = cljs.core._nth.call(null,chunk__29534_29546,i__29536_29548);
var k_29550 = cljs.core.nth.call(null,vec__29537_29549,(0),null);
var v_29551 = cljs.core.nth.call(null,vec__29537_29549,(1),null);
this$__$1.setRequestHeader(k_29550,v_29551);

var G__29552 = seq__29533_29545;
var G__29553 = chunk__29534_29546;
var G__29554 = count__29535_29547;
var G__29555 = (i__29536_29548 + (1));
seq__29533_29545 = G__29552;
chunk__29534_29546 = G__29553;
count__29535_29547 = G__29554;
i__29536_29548 = G__29555;
continue;
} else {
var temp__4657__auto___29556 = cljs.core.seq.call(null,seq__29533_29545);
if(temp__4657__auto___29556){
var seq__29533_29557__$1 = temp__4657__auto___29556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29533_29557__$1)){
var c__20769__auto___29558 = cljs.core.chunk_first.call(null,seq__29533_29557__$1);
var G__29559 = cljs.core.chunk_rest.call(null,seq__29533_29557__$1);
var G__29560 = c__20769__auto___29558;
var G__29561 = cljs.core.count.call(null,c__20769__auto___29558);
var G__29562 = (0);
seq__29533_29545 = G__29559;
chunk__29534_29546 = G__29560;
count__29535_29547 = G__29561;
i__29536_29548 = G__29562;
continue;
} else {
var vec__29540_29563 = cljs.core.first.call(null,seq__29533_29557__$1);
var k_29564 = cljs.core.nth.call(null,vec__29540_29563,(0),null);
var v_29565 = cljs.core.nth.call(null,vec__29540_29563,(1),null);
this$__$1.setRequestHeader(k_29564,v_29565);

var G__29566 = cljs.core.next.call(null,seq__29533_29557__$1);
var G__29567 = null;
var G__29568 = (0);
var G__29569 = (0);
seq__29533_29545 = G__29566;
chunk__29534_29546 = G__29567;
count__29535_29547 = G__29568;
i__29536_29548 = G__29569;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__19958__auto__ = body;
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1468965263415