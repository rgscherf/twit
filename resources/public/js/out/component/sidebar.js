// Compiled by ClojureScript 1.9.89 {}
goog.provide('component.sidebar');
goog.require('cljs.core');
component.sidebar.sidebar = (function component$sidebar$sidebar(p__33901,user){
var map__33904 = p__33901;
var map__33904__$1 = ((((!((map__33904 == null)))?((((map__33904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33904):map__33904);
var avatar_url = cljs.core.get.call(null,map__33904__$1,new cljs.core.Keyword(null,"avatar_url","avatar_url",1520721439));
var name = cljs.core.get.call(null,map__33904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var html_url = cljs.core.get.call(null,map__33904__$1,new cljs.core.Keyword(null,"html_url","html_url",-1914714112));
var login = cljs.core.get.call(null,map__33904__$1,new cljs.core.Keyword(null,"login","login",55217519));
var public_repos = cljs.core.get.call(null,map__33904__$1,new cljs.core.Keyword(null,"public_repos","public_repos",-1544064903));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sideBar.shadow","div.sideBar.shadow",1146193369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),avatar_url], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#userName","span#userName",-1139139024),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#userUrl","span#userUrl",1015365172),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),html_url], null),[cljs.core.str(login),cljs.core.str(" - "),cljs.core.str(public_repos),cljs.core.str(" public repos")].join('')], null)], null)], null)], null);
});

//# sourceMappingURL=sidebar.js.map?rel=1468965268192