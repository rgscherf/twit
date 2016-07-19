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
if(cljs.core.truth_((function (){var and__19946__auto__ = v;
if(cljs.core.truth_(and__19946__auto__)){
return (v > (0));
} else {
return and__19946__auto__;
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
return cljs.core.reduce.call(null,(function (p1__33680_SHARP_,p2__33679_SHARP_){
var vec__33684 = clojure.string.split.call(null,p2__33679_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__33684,(0),null);
var v = cljs.core.nth.call(null,vec__33684,(1),null);
return cljs.core.assoc.call(null,p1__33680_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__33687_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__33687_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__33688){
var vec__33692 = p__33688;
var k = cljs.core.nth.call(null,vec__33692,(0),null);
var v = cljs.core.nth.call(null,vec__33692,(1),null);
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
return (function (p1__33695_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__33695_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__19946__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__19946__auto__){
var and__19946__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__19946__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__19946__auto____$1;
}
} else {
return and__19946__auto__;
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
return cljs.core.async.map.call(null,(function (p1__33696_SHARP_){
return cljs_http.client.decode_body.call(null,p1__33696_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__21040__auto__ = [];
var len__21033__auto___33703 = arguments.length;
var i__21034__auto___33704 = (0);
while(true){
if((i__21034__auto___33704 < len__21033__auto___33703)){
args__21040__auto__.push((arguments[i__21034__auto___33704]));

var G__33705 = (i__21034__auto___33704 + (1));
i__21034__auto___33704 = G__33705;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33699){
var vec__33700 = p__33699;
var default_headers = cljs.core.nth.call(null,vec__33700,(0),null);
return ((function (vec__33700,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__19958__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
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
;})(vec__33700,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq33697){
var G__33698 = cljs.core.first.call(null,seq33697);
var seq33697__$1 = cljs.core.next.call(null,seq33697);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__33698,seq33697__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__21040__auto__ = [];
var len__21033__auto___33712 = arguments.length;
var i__21034__auto___33713 = (0);
while(true){
if((i__21034__auto___33713 < len__21033__auto___33712)){
args__21040__auto__.push((arguments[i__21034__auto___33713]));

var G__33714 = (i__21034__auto___33713 + (1));
i__21034__auto___33713 = G__33714;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33708){
var vec__33709 = p__33708;
var accept = cljs.core.nth.call(null,vec__33709,(0),null);
return ((function (vec__33709,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__19958__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
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
;})(vec__33709,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq33706){
var G__33707 = cljs.core.first.call(null,seq33706);
var seq33706__$1 = cljs.core.next.call(null,seq33706);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__33707,seq33706__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__21040__auto__ = [];
var len__21033__auto___33721 = arguments.length;
var i__21034__auto___33722 = (0);
while(true){
if((i__21034__auto___33722 < len__21033__auto___33721)){
args__21040__auto__.push((arguments[i__21034__auto___33722]));

var G__33723 = (i__21034__auto___33722 + (1));
i__21034__auto___33722 = G__33723;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33717){
var vec__33718 = p__33717;
var content_type = cljs.core.nth.call(null,vec__33718,(0),null);
return ((function (vec__33718,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__19958__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
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
;})(vec__33718,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq33715){
var G__33716 = cljs.core.first.call(null,seq33715);
var seq33715__$1 = cljs.core.next.call(null,seq33715);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__33716,seq33715__$1);
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
var map__33726 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__33726__$1 = ((((!((map__33726 == null)))?((((map__33726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33726):map__33726);
var encoding = cljs.core.get.call(null,map__33726__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__33726__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__33732 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__33732__$1 = ((((!((map__33732 == null)))?((((map__33732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33732):map__33732);
var decoding = cljs.core.get.call(null,map__33732__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__33732__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__33732,map__33732__$1,decoding,decoding_opts){
return (function (p1__33728_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__33728_SHARP_,decoding,decoding_opts);
});})(map__33732,map__33732__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__33732,map__33732__$1,decoding,decoding_opts,transit_decode){
return (function (p1__33729_SHARP_){
return cljs_http.client.decode_body.call(null,p1__33729_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__33732,map__33732__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__33734_SHARP_){
return cljs_http.client.decode_body.call(null,p1__33734_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__33738){
var map__33739 = p__33738;
var map__33739__$1 = ((((!((map__33739 == null)))?((((map__33739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33739):map__33739);
var req = map__33739__$1;
var query_params = cljs.core.get.call(null,map__33739__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__33744){
var map__33745 = p__33744;
var map__33745__$1 = ((((!((map__33745 == null)))?((((map__33745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33745):map__33745);
var request = map__33745__$1;
var form_params = cljs.core.get.call(null,map__33745__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__33745__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__33745__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__19946__auto__ = form_params;
if(cljs.core.truth_(and__19946__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__19946__auto__;
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
var seq__33757_33767 = cljs.core.seq.call(null,params);
var chunk__33758_33768 = null;
var count__33759_33769 = (0);
var i__33760_33770 = (0);
while(true){
if((i__33760_33770 < count__33759_33769)){
var vec__33761_33771 = cljs.core._nth.call(null,chunk__33758_33768,i__33760_33770);
var k_33772 = cljs.core.nth.call(null,vec__33761_33771,(0),null);
var v_33773 = cljs.core.nth.call(null,vec__33761_33771,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_33773)){
form_data.append(cljs.core.name.call(null,k_33772),cljs.core.first.call(null,v_33773),cljs.core.second.call(null,v_33773));
} else {
form_data.append(cljs.core.name.call(null,k_33772),v_33773);
}

var G__33774 = seq__33757_33767;
var G__33775 = chunk__33758_33768;
var G__33776 = count__33759_33769;
var G__33777 = (i__33760_33770 + (1));
seq__33757_33767 = G__33774;
chunk__33758_33768 = G__33775;
count__33759_33769 = G__33776;
i__33760_33770 = G__33777;
continue;
} else {
var temp__4657__auto___33778 = cljs.core.seq.call(null,seq__33757_33767);
if(temp__4657__auto___33778){
var seq__33757_33779__$1 = temp__4657__auto___33778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33757_33779__$1)){
var c__20769__auto___33780 = cljs.core.chunk_first.call(null,seq__33757_33779__$1);
var G__33781 = cljs.core.chunk_rest.call(null,seq__33757_33779__$1);
var G__33782 = c__20769__auto___33780;
var G__33783 = cljs.core.count.call(null,c__20769__auto___33780);
var G__33784 = (0);
seq__33757_33767 = G__33781;
chunk__33758_33768 = G__33782;
count__33759_33769 = G__33783;
i__33760_33770 = G__33784;
continue;
} else {
var vec__33764_33785 = cljs.core.first.call(null,seq__33757_33779__$1);
var k_33786 = cljs.core.nth.call(null,vec__33764_33785,(0),null);
var v_33787 = cljs.core.nth.call(null,vec__33764_33785,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_33787)){
form_data.append(cljs.core.name.call(null,k_33786),cljs.core.first.call(null,v_33787),cljs.core.second.call(null,v_33787));
} else {
form_data.append(cljs.core.name.call(null,k_33786),v_33787);
}

var G__33788 = cljs.core.next.call(null,seq__33757_33779__$1);
var G__33789 = null;
var G__33790 = (0);
var G__33791 = (0);
seq__33757_33767 = G__33788;
chunk__33758_33768 = G__33789;
count__33759_33769 = G__33790;
i__33760_33770 = G__33791;
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
return (function (p__33795){
var map__33796 = p__33795;
var map__33796__$1 = ((((!((map__33796 == null)))?((((map__33796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33796):map__33796);
var request = map__33796__$1;
var multipart_params = cljs.core.get.call(null,map__33796__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__33796__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__19946__auto__ = multipart_params;
if(cljs.core.truth_(and__19946__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__19946__auto__;
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
return (function (p1__33798_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__33798_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__33803){
var map__33804 = p__33803;
var map__33804__$1 = ((((!((map__33804 == null)))?((((map__33804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33804):map__33804);
var req = map__33804__$1;
var query_params = cljs.core.get.call(null,map__33804__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__33804,map__33804__$1,req,query_params){
return (function (p1__33799_SHARP_){
return cljs.core.merge.call(null,p1__33799_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__33804,map__33804__$1,req,query_params))
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
var args__21040__auto__ = [];
var len__21033__auto___33812 = arguments.length;
var i__21034__auto___33813 = (0);
while(true){
if((i__21034__auto___33813 < len__21033__auto___33812)){
args__21040__auto__.push((arguments[i__21034__auto___33813]));

var G__33814 = (i__21034__auto___33813 + (1));
i__21034__auto___33813 = G__33814;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33808){
var vec__33809 = p__33808;
var credentials = cljs.core.nth.call(null,vec__33809,(0),null);
return ((function (vec__33809,credentials){
return (function (req){
var credentials__$1 = (function (){var or__19958__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
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
;})(vec__33809,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq33806){
var G__33807 = cljs.core.first.call(null,seq33806);
var seq33806__$1 = cljs.core.next.call(null,seq33806);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__33807,seq33806__$1);
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
var args__21040__auto__ = [];
var len__21033__auto___33821 = arguments.length;
var i__21034__auto___33822 = (0);
while(true){
if((i__21034__auto___33822 < len__21033__auto___33821)){
args__21040__auto__.push((arguments[i__21034__auto___33822]));

var G__33823 = (i__21034__auto___33822 + (1));
i__21034__auto___33822 = G__33823;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33817){
var vec__33818 = p__33817;
var req = cljs.core.nth.call(null,vec__33818,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq33815){
var G__33816 = cljs.core.first.call(null,seq33815);
var seq33815__$1 = cljs.core.next.call(null,seq33815);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__33816,seq33815__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__21040__auto__ = [];
var len__21033__auto___33830 = arguments.length;
var i__21034__auto___33831 = (0);
while(true){
if((i__21034__auto___33831 < len__21033__auto___33830)){
args__21040__auto__.push((arguments[i__21034__auto___33831]));

var G__33832 = (i__21034__auto___33831 + (1));
i__21034__auto___33831 = G__33832;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33826){
var vec__33827 = p__33826;
var req = cljs.core.nth.call(null,vec__33827,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq33824){
var G__33825 = cljs.core.first.call(null,seq33824);
var seq33824__$1 = cljs.core.next.call(null,seq33824);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__33825,seq33824__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__21040__auto__ = [];
var len__21033__auto___33839 = arguments.length;
var i__21034__auto___33840 = (0);
while(true){
if((i__21034__auto___33840 < len__21033__auto___33839)){
args__21040__auto__.push((arguments[i__21034__auto___33840]));

var G__33841 = (i__21034__auto___33840 + (1));
i__21034__auto___33840 = G__33841;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33835){
var vec__33836 = p__33835;
var req = cljs.core.nth.call(null,vec__33836,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq33833){
var G__33834 = cljs.core.first.call(null,seq33833);
var seq33833__$1 = cljs.core.next.call(null,seq33833);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__33834,seq33833__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__21040__auto__ = [];
var len__21033__auto___33848 = arguments.length;
var i__21034__auto___33849 = (0);
while(true){
if((i__21034__auto___33849 < len__21033__auto___33848)){
args__21040__auto__.push((arguments[i__21034__auto___33849]));

var G__33850 = (i__21034__auto___33849 + (1));
i__21034__auto___33849 = G__33850;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33844){
var vec__33845 = p__33844;
var req = cljs.core.nth.call(null,vec__33845,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq33842){
var G__33843 = cljs.core.first.call(null,seq33842);
var seq33842__$1 = cljs.core.next.call(null,seq33842);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__33843,seq33842__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__21040__auto__ = [];
var len__21033__auto___33857 = arguments.length;
var i__21034__auto___33858 = (0);
while(true){
if((i__21034__auto___33858 < len__21033__auto___33857)){
args__21040__auto__.push((arguments[i__21034__auto___33858]));

var G__33859 = (i__21034__auto___33858 + (1));
i__21034__auto___33858 = G__33859;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33853){
var vec__33854 = p__33853;
var req = cljs.core.nth.call(null,vec__33854,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq33851){
var G__33852 = cljs.core.first.call(null,seq33851);
var seq33851__$1 = cljs.core.next.call(null,seq33851);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__33852,seq33851__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__21040__auto__ = [];
var len__21033__auto___33866 = arguments.length;
var i__21034__auto___33867 = (0);
while(true){
if((i__21034__auto___33867 < len__21033__auto___33866)){
args__21040__auto__.push((arguments[i__21034__auto___33867]));

var G__33868 = (i__21034__auto___33867 + (1));
i__21034__auto___33867 = G__33868;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33862){
var vec__33863 = p__33862;
var req = cljs.core.nth.call(null,vec__33863,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq33860){
var G__33861 = cljs.core.first.call(null,seq33860);
var seq33860__$1 = cljs.core.next.call(null,seq33860);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__33861,seq33860__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__21040__auto__ = [];
var len__21033__auto___33875 = arguments.length;
var i__21034__auto___33876 = (0);
while(true){
if((i__21034__auto___33876 < len__21033__auto___33875)){
args__21040__auto__.push((arguments[i__21034__auto___33876]));

var G__33877 = (i__21034__auto___33876 + (1));
i__21034__auto___33876 = G__33877;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33871){
var vec__33872 = p__33871;
var req = cljs.core.nth.call(null,vec__33872,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq33869){
var G__33870 = cljs.core.first.call(null,seq33869);
var seq33869__$1 = cljs.core.next.call(null,seq33869);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__33870,seq33869__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__21040__auto__ = [];
var len__21033__auto___33884 = arguments.length;
var i__21034__auto___33885 = (0);
while(true){
if((i__21034__auto___33885 < len__21033__auto___33884)){
args__21040__auto__.push((arguments[i__21034__auto___33885]));

var G__33886 = (i__21034__auto___33885 + (1));
i__21034__auto___33885 = G__33886;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33880){
var vec__33881 = p__33880;
var req = cljs.core.nth.call(null,vec__33881,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq33878){
var G__33879 = cljs.core.first.call(null,seq33878);
var seq33878__$1 = cljs.core.next.call(null,seq33878);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__33879,seq33878__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__21040__auto__ = [];
var len__21033__auto___33893 = arguments.length;
var i__21034__auto___33894 = (0);
while(true){
if((i__21034__auto___33894 < len__21033__auto___33893)){
args__21040__auto__.push((arguments[i__21034__auto___33894]));

var G__33895 = (i__21034__auto___33894 + (1));
i__21034__auto___33894 = G__33895;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33889){
var vec__33890 = p__33889;
var req = cljs.core.nth.call(null,vec__33890,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq33887){
var G__33888 = cljs.core.first.call(null,seq33887);
var seq33887__$1 = cljs.core.next.call(null,seq33887);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__33888,seq33887__$1);
});


//# sourceMappingURL=client.js.map?rel=1468965268131