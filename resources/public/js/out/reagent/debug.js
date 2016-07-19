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
var G__29384__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29385__i = 0, G__29385__a = new Array(arguments.length -  0);
while (G__29385__i < G__29385__a.length) {G__29385__a[G__29385__i] = arguments[G__29385__i + 0]; ++G__29385__i;}
  args = new cljs.core.IndexedSeq(G__29385__a,0);
} 
return G__29384__delegate.call(this,args);};
G__29384.cljs$lang$maxFixedArity = 0;
G__29384.cljs$lang$applyTo = (function (arglist__29386){
var args = cljs.core.seq(arglist__29386);
return G__29384__delegate(args);
});
G__29384.cljs$core$IFn$_invoke$arity$variadic = G__29384__delegate;
return G__29384;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29387__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29388__i = 0, G__29388__a = new Array(arguments.length -  0);
while (G__29388__i < G__29388__a.length) {G__29388__a[G__29388__i] = arguments[G__29388__i + 0]; ++G__29388__i;}
  args = new cljs.core.IndexedSeq(G__29388__a,0);
} 
return G__29387__delegate.call(this,args);};
G__29387.cljs$lang$maxFixedArity = 0;
G__29387.cljs$lang$applyTo = (function (arglist__29389){
var args = cljs.core.seq(arglist__29389);
return G__29387__delegate(args);
});
G__29387.cljs$core$IFn$_invoke$arity$variadic = G__29387__delegate;
return G__29387;
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

//# sourceMappingURL=debug.js.map?rel=1468965262620