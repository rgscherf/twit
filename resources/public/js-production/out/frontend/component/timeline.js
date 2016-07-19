// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('frontend.component.timeline');
goog.require('cljs.core');
frontend.component.timeline.twitcard = (function frontend$component$timeline$twitcard(p__17442,commit){
var map__17445 = p__17442;
var map__17445__$1 = ((((!((map__17445 == null)))?((((map__17445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17445):map__17445);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,cljs.core.cst$kw$message);
var commit_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,cljs.core.cst$kw$commit_url);
var sha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,cljs.core.cst$kw$sha);
var repo_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,cljs.core.cst$kw$repo_url);
var repo_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,cljs.core.cst$kw$repo_name);
var timestamp_pretty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,cljs.core.cst$kw$timestamp_pretty);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$twitCard$shadow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$twitCardMessage,message], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,commit_url], null),sha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," to "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,repo_url], null),repo_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,timestamp_pretty], null)], null);
});
frontend.component.timeline.timeline = (function frontend$component$timeline$timeline(commits){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$timeline,(function (){var iter__7027__auto__ = (function frontend$component$timeline$timeline_$_iter__17453(s__17454){
return (new cljs.core.LazySeq(null,(function (){
var s__17454__$1 = s__17454;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17454__$1);
if(temp__4657__auto__){
var s__17454__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17454__$2)){
var c__7025__auto__ = cljs.core.chunk_first(s__17454__$2);
var size__7026__auto__ = cljs.core.count(c__7025__auto__);
var b__17456 = cljs.core.chunk_buffer(size__7026__auto__);
if((function (){var i__17455 = (0);
while(true){
if((i__17455 < size__7026__auto__)){
var card = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7025__auto__,i__17455);
cljs.core.chunk_append(b__17456,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.component.timeline.twitcard,card], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(card)], null)));

var G__17459 = (i__17455 + (1));
i__17455 = G__17459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17456),frontend$component$timeline$timeline_$_iter__17453(cljs.core.chunk_rest(s__17454__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17456),null);
}
} else {
var card = cljs.core.first(s__17454__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.component.timeline.twitcard,card], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$sha.cljs$core$IFn$_invoke$arity$1(card)], null)),frontend$component$timeline$timeline_$_iter__17453(cljs.core.rest(s__17454__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7027__auto__(commits);
})()], null);
});
