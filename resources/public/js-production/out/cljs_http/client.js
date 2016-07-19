// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__6235__auto__ = v;
if(cljs.core.truth_(and__6235__auto__)){
return (v > (0));
} else {
return and__6235__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17463_SHARP_,p2__17462_SHARP_){
var vec__17467 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__17462_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17467,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17467,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17463_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17470_SHARP_){
return cljs_http.client.encode_val(k,p1__17470_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__17471){
var vec__17475 = p__17471;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17475,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__17478_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__17478_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6235__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__6235__auto__){
var and__6235__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__6235__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6235__auto____$1;
}
} else {
return and__6235__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17480 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17480) : client.call(null,G__17480));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__17481_SHARP_){
return cljs_http.client.decode_body(p1__17481_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17489 = arguments.length;
var i__7323__auto___17490 = (0);
while(true){
if((i__7323__auto___17490 < len__7322__auto___17489)){
args__7329__auto__.push((arguments[i__7323__auto___17490]));

var G__17491 = (i__7323__auto___17490 + (1));
i__7323__auto___17490 = G__17491;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17484){
var vec__17485 = p__17484;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17485,(0),null);
return ((function (vec__17485,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6247__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
var G__17488 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17488) : client.call(null,G__17488));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17485,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq17482){
var G__17483 = cljs.core.first(seq17482);
var seq17482__$1 = cljs.core.next(seq17482);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__17483,seq17482__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17499 = arguments.length;
var i__7323__auto___17500 = (0);
while(true){
if((i__7323__auto___17500 < len__7322__auto___17499)){
args__7329__auto__.push((arguments[i__7323__auto___17500]));

var G__17501 = (i__7323__auto___17500 + (1));
i__7323__auto___17500 = G__17501;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17494){
var vec__17495 = p__17494;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17495,(0),null);
return ((function (vec__17495,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6247__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
var G__17498 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17498) : client.call(null,G__17498));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17495,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq17492){
var G__17493 = cljs.core.first(seq17492);
var seq17492__$1 = cljs.core.next(seq17492);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__17493,seq17492__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17509 = arguments.length;
var i__7323__auto___17510 = (0);
while(true){
if((i__7323__auto___17510 < len__7322__auto___17509)){
args__7329__auto__.push((arguments[i__7323__auto___17510]));

var G__17511 = (i__7323__auto___17510 + (1));
i__7323__auto___17510 = G__17511;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17504){
var vec__17505 = p__17504;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17505,(0),null);
return ((function (vec__17505,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6247__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
var G__17508 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17508) : client.call(null,G__17508));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17505,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq17502){
var G__17503 = cljs.core.first(seq17502);
var seq17502__$1 = cljs.core.next(seq17502);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__17503,seq17502__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__17515 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__17515__$1 = ((((!((map__17515 == null)))?((((map__17515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17515):map__17515);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17515__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17515__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17517 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17517) : client.call(null,G__17517));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__17522 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__17522__$1 = ((((!((map__17522 == null)))?((((map__17522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17522):map__17522);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17522__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17522__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__17522,map__17522__$1,decoding,decoding_opts){
return (function (p1__17518_SHARP_){
return cljs_http.util.transit_decode(p1__17518_SHARP_,decoding,decoding_opts);
});})(map__17522,map__17522__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__17522,map__17522__$1,decoding,decoding_opts,transit_decode){
return (function (p1__17519_SHARP_){
return cljs_http.client.decode_body(p1__17519_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__17522,map__17522__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17525 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17525) : client.call(null,G__17525));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__17526_SHARP_){
return cljs_http.client.decode_body(p1__17526_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__17531){
var map__17532 = p__17531;
var map__17532__$1 = ((((!((map__17532 == null)))?((((map__17532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17532):map__17532);
var req = map__17532__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17532__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__17534 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17534) : client.call(null,G__17534));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__17539){
var map__17540 = p__17539;
var map__17540__$1 = ((((!((map__17540 == null)))?((((map__17540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17540):map__17540);
var request = map__17540__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17540__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17540__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17540__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__6235__auto__ = form_params;
if(cljs.core.truth_(and__6235__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6235__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__17542 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17542) : client.call(null,G__17542));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__17553_17563 = cljs.core.seq(params);
var chunk__17554_17564 = null;
var count__17555_17565 = (0);
var i__17556_17566 = (0);
while(true){
if((i__17556_17566 < count__17555_17565)){
var vec__17557_17567 = chunk__17554_17564.cljs$core$IIndexed$_nth$arity$2(null,i__17556_17566);
var k_17568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17557_17567,(0),null);
var v_17569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17557_17567,(1),null);
if(cljs.core.coll_QMARK_(v_17569)){
form_data.append(cljs.core.name(k_17568),cljs.core.first(v_17569),cljs.core.second(v_17569));
} else {
form_data.append(cljs.core.name(k_17568),v_17569);
}

var G__17570 = seq__17553_17563;
var G__17571 = chunk__17554_17564;
var G__17572 = count__17555_17565;
var G__17573 = (i__17556_17566 + (1));
seq__17553_17563 = G__17570;
chunk__17554_17564 = G__17571;
count__17555_17565 = G__17572;
i__17556_17566 = G__17573;
continue;
} else {
var temp__4657__auto___17574 = cljs.core.seq(seq__17553_17563);
if(temp__4657__auto___17574){
var seq__17553_17575__$1 = temp__4657__auto___17574;
if(cljs.core.chunked_seq_QMARK_(seq__17553_17575__$1)){
var c__7058__auto___17576 = cljs.core.chunk_first(seq__17553_17575__$1);
var G__17577 = cljs.core.chunk_rest(seq__17553_17575__$1);
var G__17578 = c__7058__auto___17576;
var G__17579 = cljs.core.count(c__7058__auto___17576);
var G__17580 = (0);
seq__17553_17563 = G__17577;
chunk__17554_17564 = G__17578;
count__17555_17565 = G__17579;
i__17556_17566 = G__17580;
continue;
} else {
var vec__17560_17581 = cljs.core.first(seq__17553_17575__$1);
var k_17582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17560_17581,(0),null);
var v_17583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17560_17581,(1),null);
if(cljs.core.coll_QMARK_(v_17583)){
form_data.append(cljs.core.name(k_17582),cljs.core.first(v_17583),cljs.core.second(v_17583));
} else {
form_data.append(cljs.core.name(k_17582),v_17583);
}

var G__17584 = cljs.core.next(seq__17553_17575__$1);
var G__17585 = null;
var G__17586 = (0);
var G__17587 = (0);
seq__17553_17563 = G__17584;
chunk__17554_17564 = G__17585;
count__17555_17565 = G__17586;
i__17556_17566 = G__17587;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__17592){
var map__17593 = p__17592;
var map__17593__$1 = ((((!((map__17593 == null)))?((((map__17593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17593):map__17593);
var request = map__17593__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17593__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17593__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__6235__auto__ = multipart_params;
if(cljs.core.truth_(and__6235__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6235__auto__;
}
})())){
var G__17595 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17595) : client.call(null,G__17595));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
var G__17597 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17597) : client.call(null,G__17597));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__17598_SHARP_){
var G__17600 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17598_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17600) : client.call(null,G__17600));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__17606){
var map__17607 = p__17606;
var map__17607__$1 = ((((!((map__17607 == null)))?((((map__17607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17607):map__17607);
var req = map__17607__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17607__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4655__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
var G__17609 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4655__auto__,map__17607,map__17607__$1,req,query_params){
return (function (p1__17601_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__17601_SHARP_,query_params], 0));
});})(spec,temp__4655__auto__,map__17607,map__17607__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17609) : client.call(null,G__17609));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17617 = arguments.length;
var i__7323__auto___17618 = (0);
while(true){
if((i__7323__auto___17618 < len__7322__auto___17617)){
args__7329__auto__.push((arguments[i__7323__auto___17618]));

var G__17619 = (i__7323__auto___17618 + (1));
i__7323__auto___17618 = G__17619;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17612){
var vec__17613 = p__17612;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613,(0),null);
return ((function (vec__17613,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6247__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__17616 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17616) : client.call(null,G__17616));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__17613,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq17610){
var G__17611 = cljs.core.first(seq17610);
var seq17610__$1 = cljs.core.next(seq17610);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__17611,seq17610__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
var G__17621 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17621) : client.call(null,G__17621));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17629 = arguments.length;
var i__7323__auto___17630 = (0);
while(true){
if((i__7323__auto___17630 < len__7322__auto___17629)){
args__7329__auto__.push((arguments[i__7323__auto___17630]));

var G__17631 = (i__7323__auto___17630 + (1));
i__7323__auto___17630 = G__17631;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17624){
var vec__17625 = p__17624;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17625,(0),null);
var G__17628 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17628) : cljs_http.client.request.call(null,G__17628));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq17622){
var G__17623 = cljs.core.first(seq17622);
var seq17622__$1 = cljs.core.next(seq17622);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__17623,seq17622__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17639 = arguments.length;
var i__7323__auto___17640 = (0);
while(true){
if((i__7323__auto___17640 < len__7322__auto___17639)){
args__7329__auto__.push((arguments[i__7323__auto___17640]));

var G__17641 = (i__7323__auto___17640 + (1));
i__7323__auto___17640 = G__17641;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17634){
var vec__17635 = p__17634;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17635,(0),null);
var G__17638 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17638) : cljs_http.client.request.call(null,G__17638));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq17632){
var G__17633 = cljs.core.first(seq17632);
var seq17632__$1 = cljs.core.next(seq17632);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__17633,seq17632__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17649 = arguments.length;
var i__7323__auto___17650 = (0);
while(true){
if((i__7323__auto___17650 < len__7322__auto___17649)){
args__7329__auto__.push((arguments[i__7323__auto___17650]));

var G__17651 = (i__7323__auto___17650 + (1));
i__7323__auto___17650 = G__17651;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17644){
var vec__17645 = p__17644;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17645,(0),null);
var G__17648 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17648) : cljs_http.client.request.call(null,G__17648));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq17642){
var G__17643 = cljs.core.first(seq17642);
var seq17642__$1 = cljs.core.next(seq17642);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__17643,seq17642__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17659 = arguments.length;
var i__7323__auto___17660 = (0);
while(true){
if((i__7323__auto___17660 < len__7322__auto___17659)){
args__7329__auto__.push((arguments[i__7323__auto___17660]));

var G__17661 = (i__7323__auto___17660 + (1));
i__7323__auto___17660 = G__17661;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17654){
var vec__17655 = p__17654;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17655,(0),null);
var G__17658 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17658) : cljs_http.client.request.call(null,G__17658));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq17652){
var G__17653 = cljs.core.first(seq17652);
var seq17652__$1 = cljs.core.next(seq17652);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__17653,seq17652__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17669 = arguments.length;
var i__7323__auto___17670 = (0);
while(true){
if((i__7323__auto___17670 < len__7322__auto___17669)){
args__7329__auto__.push((arguments[i__7323__auto___17670]));

var G__17671 = (i__7323__auto___17670 + (1));
i__7323__auto___17670 = G__17671;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17664){
var vec__17665 = p__17664;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17665,(0),null);
var G__17668 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17668) : cljs_http.client.request.call(null,G__17668));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq17662){
var G__17663 = cljs.core.first(seq17662);
var seq17662__$1 = cljs.core.next(seq17662);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__17663,seq17662__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17679 = arguments.length;
var i__7323__auto___17680 = (0);
while(true){
if((i__7323__auto___17680 < len__7322__auto___17679)){
args__7329__auto__.push((arguments[i__7323__auto___17680]));

var G__17681 = (i__7323__auto___17680 + (1));
i__7323__auto___17680 = G__17681;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17674){
var vec__17675 = p__17674;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675,(0),null);
var G__17678 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17678) : cljs_http.client.request.call(null,G__17678));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq17672){
var G__17673 = cljs.core.first(seq17672);
var seq17672__$1 = cljs.core.next(seq17672);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__17673,seq17672__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17689 = arguments.length;
var i__7323__auto___17690 = (0);
while(true){
if((i__7323__auto___17690 < len__7322__auto___17689)){
args__7329__auto__.push((arguments[i__7323__auto___17690]));

var G__17691 = (i__7323__auto___17690 + (1));
i__7323__auto___17690 = G__17691;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17684){
var vec__17685 = p__17684;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17685,(0),null);
var G__17688 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17688) : cljs_http.client.request.call(null,G__17688));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq17682){
var G__17683 = cljs.core.first(seq17682);
var seq17682__$1 = cljs.core.next(seq17682);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__17683,seq17682__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17699 = arguments.length;
var i__7323__auto___17700 = (0);
while(true){
if((i__7323__auto___17700 < len__7322__auto___17699)){
args__7329__auto__.push((arguments[i__7323__auto___17700]));

var G__17701 = (i__7323__auto___17700 + (1));
i__7323__auto___17700 = G__17701;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17694){
var vec__17695 = p__17694;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17695,(0),null);
var G__17698 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17698) : cljs_http.client.request.call(null,G__17698));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq17692){
var G__17693 = cljs.core.first(seq17692);
var seq17692__$1 = cljs.core.next(seq17692);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__17693,seq17692__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7329__auto__ = [];
var len__7322__auto___17709 = arguments.length;
var i__7323__auto___17710 = (0);
while(true){
if((i__7323__auto___17710 < len__7322__auto___17709)){
args__7329__auto__.push((arguments[i__7323__auto___17710]));

var G__17711 = (i__7323__auto___17710 + (1));
i__7323__auto___17710 = G__17711;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17704){
var vec__17705 = p__17704;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17705,(0),null);
var G__17708 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17708) : cljs_http.client.request.call(null,G__17708));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq17702){
var G__17703 = cljs.core.first(seq17702);
var seq17702__$1 = cljs.core.next(seq17702);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__17703,seq17702__$1);
});

