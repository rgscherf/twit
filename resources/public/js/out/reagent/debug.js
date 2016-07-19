// Compiled by ClojureScript 1.9.89 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__30576__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30577__i = 0, G__30577__a = new Array(arguments.length -  0);
while (G__30577__i < G__30577__a.length) {G__30577__a[G__30577__i] = arguments[G__30577__i + 0]; ++G__30577__i;}
  args = new cljs.core.IndexedSeq(G__30577__a,0);
} 
return G__30576__delegate.call(this,args);};
G__30576.cljs$lang$maxFixedArity = 0;
G__30576.cljs$lang$applyTo = (function (arglist__30578){
var args = cljs.core.seq(arglist__30578);
return G__30576__delegate(args);
});
G__30576.cljs$core$IFn$_invoke$arity$variadic = G__30576__delegate;
return G__30576;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30579__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30580__i = 0, G__30580__a = new Array(arguments.length -  0);
while (G__30580__i < G__30580__a.length) {G__30580__a[G__30580__i] = arguments[G__30580__i + 0]; ++G__30580__i;}
  args = new cljs.core.IndexedSeq(G__30580__a,0);
} 
return G__30579__delegate.call(this,args);};
G__30579.cljs$lang$maxFixedArity = 0;
G__30579.cljs$lang$applyTo = (function (arglist__30581){
var args = cljs.core.seq(arglist__30581);
return G__30579__delegate(args);
});
G__30579.cljs$core$IFn$_invoke$arity$variadic = G__30579__delegate;
return G__30579;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1468890444641