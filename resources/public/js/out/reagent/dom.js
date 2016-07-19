// Compiled by ClojureScript 1.9.89 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__19954__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_30901 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_30901){
return (function (){
var _STAR_always_update_STAR_30902 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_30902;
}});})(_STAR_always_update_STAR_30901))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_30901;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args30903 = [];
var len__21029__auto___30906 = arguments.length;
var i__21030__auto___30907 = (0);
while(true){
if((i__21030__auto___30907 < len__21029__auto___30906)){
args30903.push((arguments[i__21030__auto___30907]));

var G__30908 = (i__21030__auto___30907 + (1));
i__21030__auto___30907 = G__30908;
continue;
} else {
}
break;
}

var G__30905 = args30903.length;
switch (G__30905) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30903.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__30914_30918 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__30915_30919 = null;
var count__30916_30920 = (0);
var i__30917_30921 = (0);
while(true){
if((i__30917_30921 < count__30916_30920)){
var v_30922 = cljs.core._nth.call(null,chunk__30915_30919,i__30917_30921);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_30922);

var G__30923 = seq__30914_30918;
var G__30924 = chunk__30915_30919;
var G__30925 = count__30916_30920;
var G__30926 = (i__30917_30921 + (1));
seq__30914_30918 = G__30923;
chunk__30915_30919 = G__30924;
count__30916_30920 = G__30925;
i__30917_30921 = G__30926;
continue;
} else {
var temp__4657__auto___30927 = cljs.core.seq.call(null,seq__30914_30918);
if(temp__4657__auto___30927){
var seq__30914_30928__$1 = temp__4657__auto___30927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30914_30928__$1)){
var c__20765__auto___30929 = cljs.core.chunk_first.call(null,seq__30914_30928__$1);
var G__30930 = cljs.core.chunk_rest.call(null,seq__30914_30928__$1);
var G__30931 = c__20765__auto___30929;
var G__30932 = cljs.core.count.call(null,c__20765__auto___30929);
var G__30933 = (0);
seq__30914_30918 = G__30930;
chunk__30915_30919 = G__30931;
count__30916_30920 = G__30932;
i__30917_30921 = G__30933;
continue;
} else {
var v_30934 = cljs.core.first.call(null,seq__30914_30928__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_30934);

var G__30935 = cljs.core.next.call(null,seq__30914_30928__$1);
var G__30936 = null;
var G__30937 = (0);
var G__30938 = (0);
seq__30914_30918 = G__30935;
chunk__30915_30919 = G__30936;
count__30916_30920 = G__30937;
i__30917_30921 = G__30938;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1468890447032