// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('frontend.component.sidebar');
goog.require('cljs.core');
frontend.component.sidebar.sidebar = (function frontend$component$sidebar$sidebar(p__17928,user){
var map__17931 = p__17928;
var map__17931__$1 = ((((!((map__17931 == null)))?((((map__17931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17931):map__17931);
var avatar_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,cljs.core.cst$kw$avatar_url);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,cljs.core.cst$kw$name);
var html_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,cljs.core.cst$kw$html_url);
var login = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,cljs.core.cst$kw$login);
var public_repos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,cljs.core.cst$kw$public_repos);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sideBar$shadow,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,avatar_url], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span_SHARP_userName,name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span_SHARP_userUrl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,html_url], null),[cljs.core.str(login),cljs.core.str(" - "),cljs.core.str(public_repos),cljs.core.str(" public repos")].join('')], null)], null)], null)], null);
});
