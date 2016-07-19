// Compiled by ClojureScript 1.9.89 {}
goog.provide('component.timeline');
goog.require('cljs.core');
component.timeline.twitcard = (function component$timeline$twitcard(p__33908,commit){
var map__33911 = p__33908;
var map__33911__$1 = ((((!((map__33911 == null)))?((((map__33911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33911):map__33911);
var message = cljs.core.get.call(null,map__33911__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var commit_url = cljs.core.get.call(null,map__33911__$1,new cljs.core.Keyword(null,"commit_url","commit_url",1638473986));
var sha = cljs.core.get.call(null,map__33911__$1,new cljs.core.Keyword(null,"sha","sha",-950317251));
var repo_url = cljs.core.get.call(null,map__33911__$1,new cljs.core.Keyword(null,"repo_url","repo_url",-1241702661));
var repo_name = cljs.core.get.call(null,map__33911__$1,new cljs.core.Keyword(null,"repo_name","repo_name",61059011));
var timestamp_pretty = cljs.core.get.call(null,map__33911__$1,new cljs.core.Keyword(null,"timestamp_pretty","timestamp_pretty",-1747939911));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitCard.shadow","div.twitCard.shadow",-1434748321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitCardMessage","div.twitCardMessage",835432656),message], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),commit_url], null),sha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," to "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),repo_url], null),repo_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),timestamp_pretty], null)], null);
});
component.timeline.timeline = (function component$timeline$timeline(commits){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timeline","div.timeline",-487827859),(function (){var iter__20738__auto__ = (function component$timeline$timeline_$_iter__33917(s__33918){
return (new cljs.core.LazySeq(null,(function (){
var s__33918__$1 = s__33918;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33918__$1);
if(temp__4657__auto__){
var s__33918__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33918__$2)){
var c__20736__auto__ = cljs.core.chunk_first.call(null,s__33918__$2);
var size__20737__auto__ = cljs.core.count.call(null,c__20736__auto__);
var b__33920 = cljs.core.chunk_buffer.call(null,size__20737__auto__);
if((function (){var i__33919 = (0);
while(true){
if((i__33919 < size__20737__auto__)){
var card = cljs.core._nth.call(null,c__20736__auto__,i__33919);
cljs.core.chunk_append.call(null,b__33920,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component.timeline.twitcard,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(card)], null)));

var G__33921 = (i__33919 + (1));
i__33919 = G__33921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33920),component$timeline$timeline_$_iter__33917.call(null,cljs.core.chunk_rest.call(null,s__33918__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33920),null);
}
} else {
var card = cljs.core.first.call(null,s__33918__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component.timeline.twitcard,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(card)], null)),component$timeline$timeline_$_iter__33917.call(null,cljs.core.rest.call(null,s__33918__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20738__auto__.call(null,commits);
})()], null);
});

//# sourceMappingURL=timeline.js.map?rel=1468965268224