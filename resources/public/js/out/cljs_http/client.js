// Compiled by ClojureScript 1.9.89 {}
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
if(cljs.core.truth_((function (){var and__19942__auto__ = v;
if(cljs.core.truth_(and__19942__auto__)){
return (v > (0));
} else {
return and__19942__auto__;
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
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__22400_SHARP_,p2__22399_SHARP_){
var vec__22404 = clojure.string.split.call(null,p2__22399_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__22404,(0),null);
var v = cljs.core.nth.call(null,vec__22404,(1),null);
return cljs.core.assoc.call(null,p1__22400_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__22407_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__22407_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__22408){
var vec__22412 = p__22408;
var k = cljs.core.nth.call(null,vec__22412,(0),null);
var v = cljs.core.nth.call(null,vec__22412,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__22415_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__22415_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__19942__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__19942__auto__){
var and__19942__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__19942__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__19942__auto____$1;
}
} else {
return and__19942__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__22416_SHARP_){
return cljs_http.client.decode_body.call(null,p1__22416_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22423 = arguments.length;
var i__21030__auto___22424 = (0);
while(true){
if((i__21030__auto___22424 < len__21029__auto___22423)){
args__21036__auto__.push((arguments[i__21030__auto___22424]));

var G__22425 = (i__21030__auto___22424 + (1));
i__21030__auto___22424 = G__22425;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22419){
var vec__22420 = p__22419;
var default_headers = cljs.core.nth.call(null,vec__22420,(0),null);
return ((function (vec__22420,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__19954__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__22420,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq22417){
var G__22418 = cljs.core.first.call(null,seq22417);
var seq22417__$1 = cljs.core.next.call(null,seq22417);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__22418,seq22417__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22432 = arguments.length;
var i__21030__auto___22433 = (0);
while(true){
if((i__21030__auto___22433 < len__21029__auto___22432)){
args__21036__auto__.push((arguments[i__21030__auto___22433]));

var G__22434 = (i__21030__auto___22433 + (1));
i__21030__auto___22433 = G__22434;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22428){
var vec__22429 = p__22428;
var accept = cljs.core.nth.call(null,vec__22429,(0),null);
return ((function (vec__22429,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__19954__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__22429,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq22426){
var G__22427 = cljs.core.first.call(null,seq22426);
var seq22426__$1 = cljs.core.next.call(null,seq22426);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__22427,seq22426__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22441 = arguments.length;
var i__21030__auto___22442 = (0);
while(true){
if((i__21030__auto___22442 < len__21029__auto___22441)){
args__21036__auto__.push((arguments[i__21030__auto___22442]));

var G__22443 = (i__21030__auto___22442 + (1));
i__21030__auto___22442 = G__22443;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22437){
var vec__22438 = p__22437;
var content_type = cljs.core.nth.call(null,vec__22438,(0),null);
return ((function (vec__22438,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__19954__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__22438,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq22435){
var G__22436 = cljs.core.first.call(null,seq22435);
var seq22435__$1 = cljs.core.next.call(null,seq22435);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__22436,seq22435__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__22446 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__22446__$1 = ((((!((map__22446 == null)))?((((map__22446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22446):map__22446);
var encoding = cljs.core.get.call(null,map__22446__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__22446__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__22452 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__22452__$1 = ((((!((map__22452 == null)))?((((map__22452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22452):map__22452);
var decoding = cljs.core.get.call(null,map__22452__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__22452__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__22452,map__22452__$1,decoding,decoding_opts){
return (function (p1__22448_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__22448_SHARP_,decoding,decoding_opts);
});})(map__22452,map__22452__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__22452,map__22452__$1,decoding,decoding_opts,transit_decode){
return (function (p1__22449_SHARP_){
return cljs_http.client.decode_body.call(null,p1__22449_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__22452,map__22452__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__22454_SHARP_){
return cljs_http.client.decode_body.call(null,p1__22454_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__22458){
var map__22459 = p__22458;
var map__22459__$1 = ((((!((map__22459 == null)))?((((map__22459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22459):map__22459);
var req = map__22459__$1;
var query_params = cljs.core.get.call(null,map__22459__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__22464){
var map__22465 = p__22464;
var map__22465__$1 = ((((!((map__22465 == null)))?((((map__22465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22465):map__22465);
var request = map__22465__$1;
var form_params = cljs.core.get.call(null,map__22465__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__22465__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__22465__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__19942__auto__ = form_params;
if(cljs.core.truth_(and__19942__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__19942__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__22477_22487 = cljs.core.seq.call(null,params);
var chunk__22478_22488 = null;
var count__22479_22489 = (0);
var i__22480_22490 = (0);
while(true){
if((i__22480_22490 < count__22479_22489)){
var vec__22481_22491 = cljs.core._nth.call(null,chunk__22478_22488,i__22480_22490);
var k_22492 = cljs.core.nth.call(null,vec__22481_22491,(0),null);
var v_22493 = cljs.core.nth.call(null,vec__22481_22491,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_22493)){
form_data.append(cljs.core.name.call(null,k_22492),cljs.core.first.call(null,v_22493),cljs.core.second.call(null,v_22493));
} else {
form_data.append(cljs.core.name.call(null,k_22492),v_22493);
}

var G__22494 = seq__22477_22487;
var G__22495 = chunk__22478_22488;
var G__22496 = count__22479_22489;
var G__22497 = (i__22480_22490 + (1));
seq__22477_22487 = G__22494;
chunk__22478_22488 = G__22495;
count__22479_22489 = G__22496;
i__22480_22490 = G__22497;
continue;
} else {
var temp__4657__auto___22498 = cljs.core.seq.call(null,seq__22477_22487);
if(temp__4657__auto___22498){
var seq__22477_22499__$1 = temp__4657__auto___22498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22477_22499__$1)){
var c__20765__auto___22500 = cljs.core.chunk_first.call(null,seq__22477_22499__$1);
var G__22501 = cljs.core.chunk_rest.call(null,seq__22477_22499__$1);
var G__22502 = c__20765__auto___22500;
var G__22503 = cljs.core.count.call(null,c__20765__auto___22500);
var G__22504 = (0);
seq__22477_22487 = G__22501;
chunk__22478_22488 = G__22502;
count__22479_22489 = G__22503;
i__22480_22490 = G__22504;
continue;
} else {
var vec__22484_22505 = cljs.core.first.call(null,seq__22477_22499__$1);
var k_22506 = cljs.core.nth.call(null,vec__22484_22505,(0),null);
var v_22507 = cljs.core.nth.call(null,vec__22484_22505,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_22507)){
form_data.append(cljs.core.name.call(null,k_22506),cljs.core.first.call(null,v_22507),cljs.core.second.call(null,v_22507));
} else {
form_data.append(cljs.core.name.call(null,k_22506),v_22507);
}

var G__22508 = cljs.core.next.call(null,seq__22477_22499__$1);
var G__22509 = null;
var G__22510 = (0);
var G__22511 = (0);
seq__22477_22487 = G__22508;
chunk__22478_22488 = G__22509;
count__22479_22489 = G__22510;
i__22480_22490 = G__22511;
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
return (function (p__22515){
var map__22516 = p__22515;
var map__22516__$1 = ((((!((map__22516 == null)))?((((map__22516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22516):map__22516);
var request = map__22516__$1;
var multipart_params = cljs.core.get.call(null,map__22516__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__22516__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__19942__auto__ = multipart_params;
if(cljs.core.truth_(and__19942__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__19942__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__22518_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__22518_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__22523){
var map__22524 = p__22523;
var map__22524__$1 = ((((!((map__22524 == null)))?((((map__22524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22524):map__22524);
var req = map__22524__$1;
var query_params = cljs.core.get.call(null,map__22524__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__22524,map__22524__$1,req,query_params){
return (function (p1__22519_SHARP_){
return cljs.core.merge.call(null,p1__22519_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__22524,map__22524__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22532 = arguments.length;
var i__21030__auto___22533 = (0);
while(true){
if((i__21030__auto___22533 < len__21029__auto___22532)){
args__21036__auto__.push((arguments[i__21030__auto___22533]));

var G__22534 = (i__21030__auto___22533 + (1));
i__21030__auto___22533 = G__22534;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22528){
var vec__22529 = p__22528;
var credentials = cljs.core.nth.call(null,vec__22529,(0),null);
return ((function (vec__22529,credentials){
return (function (req){
var credentials__$1 = (function (){var or__19954__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__22529,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq22526){
var G__22527 = cljs.core.first.call(null,seq22526);
var seq22526__$1 = cljs.core.next.call(null,seq22526);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__22527,seq22526__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
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
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22541 = arguments.length;
var i__21030__auto___22542 = (0);
while(true){
if((i__21030__auto___22542 < len__21029__auto___22541)){
args__21036__auto__.push((arguments[i__21030__auto___22542]));

var G__22543 = (i__21030__auto___22542 + (1));
i__21030__auto___22542 = G__22543;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22537){
var vec__22538 = p__22537;
var req = cljs.core.nth.call(null,vec__22538,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq22535){
var G__22536 = cljs.core.first.call(null,seq22535);
var seq22535__$1 = cljs.core.next.call(null,seq22535);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__22536,seq22535__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22550 = arguments.length;
var i__21030__auto___22551 = (0);
while(true){
if((i__21030__auto___22551 < len__21029__auto___22550)){
args__21036__auto__.push((arguments[i__21030__auto___22551]));

var G__22552 = (i__21030__auto___22551 + (1));
i__21030__auto___22551 = G__22552;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22546){
var vec__22547 = p__22546;
var req = cljs.core.nth.call(null,vec__22547,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq22544){
var G__22545 = cljs.core.first.call(null,seq22544);
var seq22544__$1 = cljs.core.next.call(null,seq22544);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__22545,seq22544__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22559 = arguments.length;
var i__21030__auto___22560 = (0);
while(true){
if((i__21030__auto___22560 < len__21029__auto___22559)){
args__21036__auto__.push((arguments[i__21030__auto___22560]));

var G__22561 = (i__21030__auto___22560 + (1));
i__21030__auto___22560 = G__22561;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22555){
var vec__22556 = p__22555;
var req = cljs.core.nth.call(null,vec__22556,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq22553){
var G__22554 = cljs.core.first.call(null,seq22553);
var seq22553__$1 = cljs.core.next.call(null,seq22553);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__22554,seq22553__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22568 = arguments.length;
var i__21030__auto___22569 = (0);
while(true){
if((i__21030__auto___22569 < len__21029__auto___22568)){
args__21036__auto__.push((arguments[i__21030__auto___22569]));

var G__22570 = (i__21030__auto___22569 + (1));
i__21030__auto___22569 = G__22570;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22564){
var vec__22565 = p__22564;
var req = cljs.core.nth.call(null,vec__22565,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq22562){
var G__22563 = cljs.core.first.call(null,seq22562);
var seq22562__$1 = cljs.core.next.call(null,seq22562);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__22563,seq22562__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22577 = arguments.length;
var i__21030__auto___22578 = (0);
while(true){
if((i__21030__auto___22578 < len__21029__auto___22577)){
args__21036__auto__.push((arguments[i__21030__auto___22578]));

var G__22579 = (i__21030__auto___22578 + (1));
i__21030__auto___22578 = G__22579;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22573){
var vec__22574 = p__22573;
var req = cljs.core.nth.call(null,vec__22574,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq22571){
var G__22572 = cljs.core.first.call(null,seq22571);
var seq22571__$1 = cljs.core.next.call(null,seq22571);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__22572,seq22571__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22586 = arguments.length;
var i__21030__auto___22587 = (0);
while(true){
if((i__21030__auto___22587 < len__21029__auto___22586)){
args__21036__auto__.push((arguments[i__21030__auto___22587]));

var G__22588 = (i__21030__auto___22587 + (1));
i__21030__auto___22587 = G__22588;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22582){
var vec__22583 = p__22582;
var req = cljs.core.nth.call(null,vec__22583,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq22580){
var G__22581 = cljs.core.first.call(null,seq22580);
var seq22580__$1 = cljs.core.next.call(null,seq22580);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__22581,seq22580__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22595 = arguments.length;
var i__21030__auto___22596 = (0);
while(true){
if((i__21030__auto___22596 < len__21029__auto___22595)){
args__21036__auto__.push((arguments[i__21030__auto___22596]));

var G__22597 = (i__21030__auto___22596 + (1));
i__21030__auto___22596 = G__22597;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22591){
var vec__22592 = p__22591;
var req = cljs.core.nth.call(null,vec__22592,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq22589){
var G__22590 = cljs.core.first.call(null,seq22589);
var seq22589__$1 = cljs.core.next.call(null,seq22589);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__22590,seq22589__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22604 = arguments.length;
var i__21030__auto___22605 = (0);
while(true){
if((i__21030__auto___22605 < len__21029__auto___22604)){
args__21036__auto__.push((arguments[i__21030__auto___22605]));

var G__22606 = (i__21030__auto___22605 + (1));
i__21030__auto___22605 = G__22606;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22600){
var vec__22601 = p__22600;
var req = cljs.core.nth.call(null,vec__22601,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq22598){
var G__22599 = cljs.core.first.call(null,seq22598);
var seq22598__$1 = cljs.core.next.call(null,seq22598);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__22599,seq22598__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__21036__auto__ = [];
var len__21029__auto___22613 = arguments.length;
var i__21030__auto___22614 = (0);
while(true){
if((i__21030__auto___22614 < len__21029__auto___22613)){
args__21036__auto__.push((arguments[i__21030__auto___22614]));

var G__22615 = (i__21030__auto___22614 + (1));
i__21030__auto___22614 = G__22615;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22609){
var vec__22610 = p__22609;
var req = cljs.core.nth.call(null,vec__22610,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq22607){
var G__22608 = cljs.core.first.call(null,seq22607);
var seq22607__$1 = cljs.core.next.call(null,seq22607);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__22608,seq22607__$1);
});


//# sourceMappingURL=client.js.map?rel=1468892819303