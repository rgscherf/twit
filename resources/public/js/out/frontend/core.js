// Compiled by ClojureScript 1.9.89 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('frontend.user');
goog.require('frontend.component.sidebar');
goog.require('frontend.component.timeline');
goog.require('frontend.component.topbox');
frontend.core.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
frontend.core.content_container = (function frontend$core$content_container(user){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contentContainer","div.contentContainer",-121228775),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.component.sidebar.sidebar,user], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.component.timeline.timeline,new cljs.core.Keyword(null,"commits","commits",1045759893).cljs$core$IFn$_invoke$arity$1(user)], null)], null);
});
frontend.core.page_root = (function frontend$core$page_root(user){
frontend.user.new_user.call(null,frontend.core.state,user);

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.component.topbox.topbox,frontend.core.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.content_container,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.core.state))], null)], null);
});
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.page_root,"rgscherf"], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1468966796698