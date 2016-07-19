// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('frontend.user');
goog.require('frontend.component.sidebar');
goog.require('frontend.component.timeline');
goog.require('frontend.component.topbox');
frontend.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.core.content_container = (function frontend$core$content_container(user){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$contentContainer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.component.sidebar.sidebar,user], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.component.timeline.timeline,cljs.core.cst$kw$commits.cljs$core$IFn$_invoke$arity$1(user)], null)], null);
});
frontend.core.page_root = (function frontend$core$page_root(user){
frontend.user.new_user(frontend.core.state,user);

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.component.topbox.topbox,frontend.core.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.content_container,cljs.core.cst$kw$user.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(frontend.core.state) : cljs.core.deref.call(null,frontend.core.state)))], null)], null);
});
});
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.page_root,"rgscherf"], null),document.getElementById("app"));
