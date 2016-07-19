// Compiled by ClojureScript 1.9.89 {}
goog.provide('frontend.component.timeline');
goog.require('cljs.core');
frontend.component.timeline.twitcard = (function frontend$component$timeline$twitcard(p__23360,commit){
var map__23363 = p__23360;
var map__23363__$1 = ((((!((map__23363 == null)))?((((map__23363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23363):map__23363);
var message = cljs.core.get.call(null,map__23363__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var commit_url = cljs.core.get.call(null,map__23363__$1,new cljs.core.Keyword(null,"commit_url","commit_url",1638473986));
var sha = cljs.core.get.call(null,map__23363__$1,new cljs.core.Keyword(null,"sha","sha",-950317251));
var repo_url = cljs.core.get.call(null,map__23363__$1,new cljs.core.Keyword(null,"repo_url","repo_url",-1241702661));
var repo_name = cljs.core.get.call(null,map__23363__$1,new cljs.core.Keyword(null,"repo_name","repo_name",61059011));
var timestamp_pretty = cljs.core.get.call(null,map__23363__$1,new cljs.core.Keyword(null,"timestamp_pretty","timestamp_pretty",-1747939911));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitCard.shadow","div.twitCard.shadow",-1434748321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitCardMessage","div.twitCardMessage",835432656),message], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),commit_url], null),sha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," to "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),repo_url], null),repo_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),timestamp_pretty], null)], null);
});
frontend.component.timeline.timeline = (function frontend$component$timeline$timeline(commits){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timeline","div.timeline",-487827859),(function (){var iter__20734__auto__ = (function frontend$component$timeline$timeline_$_iter__23369(s__23370){
return (new cljs.core.LazySeq(null,(function (){
var s__23370__$1 = s__23370;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23370__$1);
if(temp__4657__auto__){
var s__23370__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23370__$2)){
var c__20732__auto__ = cljs.core.chunk_first.call(null,s__23370__$2);
var size__20733__auto__ = cljs.core.count.call(null,c__20732__auto__);
var b__23372 = cljs.core.chunk_buffer.call(null,size__20733__auto__);
if((function (){var i__23371 = (0);
while(true){
if((i__23371 < size__20733__auto__)){
var card = cljs.core._nth.call(null,c__20732__auto__,i__23371);
cljs.core.chunk_append.call(null,b__23372,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.component.timeline.twitcard,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(card)], null)));

var G__23373 = (i__23371 + (1));
i__23371 = G__23373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23372),frontend$component$timeline$timeline_$_iter__23369.call(null,cljs.core.chunk_rest.call(null,s__23370__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23372),null);
}
} else {
var card = cljs.core.first.call(null,s__23370__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.component.timeline.twitcard,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"sha","sha",-950317251).cljs$core$IFn$_invoke$arity$1(card)], null)),frontend$component$timeline$timeline_$_iter__23369.call(null,cljs.core.rest.call(null,s__23370__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20734__auto__.call(null,commits);
})()], null);
});

//# sourceMappingURL=timeline.js.map?rel=1468966187181