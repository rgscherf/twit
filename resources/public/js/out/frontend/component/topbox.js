// Compiled by ClojureScript 1.9.89 {}
goog.provide('frontend.component.topbox');
goog.require('cljs.core');
goog.require('frontend.user');
frontend.component.topbox.logo_area = (function frontend$component$topbox$logo_area(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.titleBox","div.titleBox",-23627707),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#logo","div#logo",1426956221),"Twit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#definition","div#definition",-1376633207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"V. to taunt or ridicule"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"with reference to anything embarrassing"], null)], null)], null)], null)], null);
});
frontend.component.topbox.search_area = (function frontend$component$topbox$search_area(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.searchContainer","div.searchContainer",6930280),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Find Github user to twit",new cljs.core.Keyword(null,"class","class",-2030961996),"mainSearch",new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__22029_SHARP_){
if(cljs.core._EQ_.call(null,(13),p1__22029_SHARP_.keyCode)){
return frontend.user.new_user.call(null,state,p1__22029_SHARP_.target.value);
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.searchError","div.searchError",-1273925700),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"Could not find that Github user!":"")], null)], null);
});
frontend.component.topbox.topbox = (function frontend$component$topbox$topbox(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.searchBox.shadow","div.searchBox.shadow",-780230454),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.component.topbox.logo_area], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.component.topbox.search_area,state], null)], null);
});

//# sourceMappingURL=topbox.js.map?rel=1468966691405