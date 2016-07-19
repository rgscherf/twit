// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20564__auto__,writer__20565__auto__,opt__20566__auto__){
return cljs.core._write.call(null,writer__20565__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35082 = arguments.length;
var i__21034__auto___35083 = (0);
while(true){
if((i__21034__auto___35083 < len__21033__auto___35082)){
args__21040__auto__.push((arguments[i__21034__auto___35083]));

var G__35084 = (i__21034__auto___35083 + (1));
i__21034__auto___35083 = G__35084;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35081){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35081));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35086 = arguments.length;
var i__21034__auto___35087 = (0);
while(true){
if((i__21034__auto___35087 < len__21033__auto___35086)){
args__21040__auto__.push((arguments[i__21034__auto___35087]));

var G__35088 = (i__21034__auto___35087 + (1));
i__21034__auto___35087 = G__35088;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35085){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35085));
});

var g_QMARK__35089 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35090 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35089){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35089))
,null));
var mkg_35091 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35089,g_35090){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35089,g_35090))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35089,g_35090,mkg_35091){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35089).call(null,x);
});})(g_QMARK__35089,g_35090,mkg_35091))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35089,g_35090,mkg_35091){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35091).call(null,gfn);
});})(g_QMARK__35089,g_35090,mkg_35091))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35089,g_35090,mkg_35091){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35090).call(null,generator);
});})(g_QMARK__35089,g_35090,mkg_35091))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__23486__auto___35109 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__23486__auto___35109){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35110 = arguments.length;
var i__21034__auto___35111 = (0);
while(true){
if((i__21034__auto___35111 < len__21033__auto___35110)){
args__21040__auto__.push((arguments[i__21034__auto___35111]));

var G__35112 = (i__21034__auto___35111 + (1));
i__21034__auto___35111 = G__35112;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35109))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35109){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35109),args);
});})(g__23486__auto___35109))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__23486__auto___35109){
return (function (seq35092){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35092));
});})(g__23486__auto___35109))
;


var g__23486__auto___35113 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__23486__auto___35113){
return (function cljs$spec$impl$gen$list(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35114 = arguments.length;
var i__21034__auto___35115 = (0);
while(true){
if((i__21034__auto___35115 < len__21033__auto___35114)){
args__21040__auto__.push((arguments[i__21034__auto___35115]));

var G__35116 = (i__21034__auto___35115 + (1));
i__21034__auto___35115 = G__35116;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35113))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35113){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35113),args);
});})(g__23486__auto___35113))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__23486__auto___35113){
return (function (seq35093){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35093));
});})(g__23486__auto___35113))
;


var g__23486__auto___35117 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__23486__auto___35117){
return (function cljs$spec$impl$gen$map(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35118 = arguments.length;
var i__21034__auto___35119 = (0);
while(true){
if((i__21034__auto___35119 < len__21033__auto___35118)){
args__21040__auto__.push((arguments[i__21034__auto___35119]));

var G__35120 = (i__21034__auto___35119 + (1));
i__21034__auto___35119 = G__35120;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35117))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35117){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35117),args);
});})(g__23486__auto___35117))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__23486__auto___35117){
return (function (seq35094){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35094));
});})(g__23486__auto___35117))
;


var g__23486__auto___35121 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__23486__auto___35121){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35122 = arguments.length;
var i__21034__auto___35123 = (0);
while(true){
if((i__21034__auto___35123 < len__21033__auto___35122)){
args__21040__auto__.push((arguments[i__21034__auto___35123]));

var G__35124 = (i__21034__auto___35123 + (1));
i__21034__auto___35123 = G__35124;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35121))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35121){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35121),args);
});})(g__23486__auto___35121))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__23486__auto___35121){
return (function (seq35095){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35095));
});})(g__23486__auto___35121))
;


var g__23486__auto___35125 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__23486__auto___35125){
return (function cljs$spec$impl$gen$set(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35126 = arguments.length;
var i__21034__auto___35127 = (0);
while(true){
if((i__21034__auto___35127 < len__21033__auto___35126)){
args__21040__auto__.push((arguments[i__21034__auto___35127]));

var G__35128 = (i__21034__auto___35127 + (1));
i__21034__auto___35127 = G__35128;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35125))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35125){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35125),args);
});})(g__23486__auto___35125))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__23486__auto___35125){
return (function (seq35096){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35096));
});})(g__23486__auto___35125))
;


var g__23486__auto___35129 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__23486__auto___35129){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35130 = arguments.length;
var i__21034__auto___35131 = (0);
while(true){
if((i__21034__auto___35131 < len__21033__auto___35130)){
args__21040__auto__.push((arguments[i__21034__auto___35131]));

var G__35132 = (i__21034__auto___35131 + (1));
i__21034__auto___35131 = G__35132;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35129))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35129){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35129),args);
});})(g__23486__auto___35129))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__23486__auto___35129){
return (function (seq35097){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35097));
});})(g__23486__auto___35129))
;


var g__23486__auto___35133 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__23486__auto___35133){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35134 = arguments.length;
var i__21034__auto___35135 = (0);
while(true){
if((i__21034__auto___35135 < len__21033__auto___35134)){
args__21040__auto__.push((arguments[i__21034__auto___35135]));

var G__35136 = (i__21034__auto___35135 + (1));
i__21034__auto___35135 = G__35136;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35133))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35133){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35133),args);
});})(g__23486__auto___35133))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__23486__auto___35133){
return (function (seq35098){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35098));
});})(g__23486__auto___35133))
;


var g__23486__auto___35137 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__23486__auto___35137){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35138 = arguments.length;
var i__21034__auto___35139 = (0);
while(true){
if((i__21034__auto___35139 < len__21033__auto___35138)){
args__21040__auto__.push((arguments[i__21034__auto___35139]));

var G__35140 = (i__21034__auto___35139 + (1));
i__21034__auto___35139 = G__35140;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35137))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35137){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35137),args);
});})(g__23486__auto___35137))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__23486__auto___35137){
return (function (seq35099){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35099));
});})(g__23486__auto___35137))
;


var g__23486__auto___35141 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__23486__auto___35141){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35142 = arguments.length;
var i__21034__auto___35143 = (0);
while(true){
if((i__21034__auto___35143 < len__21033__auto___35142)){
args__21040__auto__.push((arguments[i__21034__auto___35143]));

var G__35144 = (i__21034__auto___35143 + (1));
i__21034__auto___35143 = G__35144;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35141))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35141){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35141),args);
});})(g__23486__auto___35141))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__23486__auto___35141){
return (function (seq35100){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35100));
});})(g__23486__auto___35141))
;


var g__23486__auto___35145 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__23486__auto___35145){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35146 = arguments.length;
var i__21034__auto___35147 = (0);
while(true){
if((i__21034__auto___35147 < len__21033__auto___35146)){
args__21040__auto__.push((arguments[i__21034__auto___35147]));

var G__35148 = (i__21034__auto___35147 + (1));
i__21034__auto___35147 = G__35148;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35145))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35145){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35145),args);
});})(g__23486__auto___35145))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__23486__auto___35145){
return (function (seq35101){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35101));
});})(g__23486__auto___35145))
;


var g__23486__auto___35149 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__23486__auto___35149){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35150 = arguments.length;
var i__21034__auto___35151 = (0);
while(true){
if((i__21034__auto___35151 < len__21033__auto___35150)){
args__21040__auto__.push((arguments[i__21034__auto___35151]));

var G__35152 = (i__21034__auto___35151 + (1));
i__21034__auto___35151 = G__35152;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35149))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35149){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35149),args);
});})(g__23486__auto___35149))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__23486__auto___35149){
return (function (seq35102){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35102));
});})(g__23486__auto___35149))
;


var g__23486__auto___35153 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__23486__auto___35153){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35154 = arguments.length;
var i__21034__auto___35155 = (0);
while(true){
if((i__21034__auto___35155 < len__21033__auto___35154)){
args__21040__auto__.push((arguments[i__21034__auto___35155]));

var G__35156 = (i__21034__auto___35155 + (1));
i__21034__auto___35155 = G__35156;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35153))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35153){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35153),args);
});})(g__23486__auto___35153))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__23486__auto___35153){
return (function (seq35103){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35103));
});})(g__23486__auto___35153))
;


var g__23486__auto___35157 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__23486__auto___35157){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35158 = arguments.length;
var i__21034__auto___35159 = (0);
while(true){
if((i__21034__auto___35159 < len__21033__auto___35158)){
args__21040__auto__.push((arguments[i__21034__auto___35159]));

var G__35160 = (i__21034__auto___35159 + (1));
i__21034__auto___35159 = G__35160;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35157))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35157){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35157),args);
});})(g__23486__auto___35157))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__23486__auto___35157){
return (function (seq35104){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35104));
});})(g__23486__auto___35157))
;


var g__23486__auto___35161 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__23486__auto___35161){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35162 = arguments.length;
var i__21034__auto___35163 = (0);
while(true){
if((i__21034__auto___35163 < len__21033__auto___35162)){
args__21040__auto__.push((arguments[i__21034__auto___35163]));

var G__35164 = (i__21034__auto___35163 + (1));
i__21034__auto___35163 = G__35164;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35161))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35161){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35161),args);
});})(g__23486__auto___35161))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__23486__auto___35161){
return (function (seq35105){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35105));
});})(g__23486__auto___35161))
;


var g__23486__auto___35165 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__23486__auto___35165){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35166 = arguments.length;
var i__21034__auto___35167 = (0);
while(true){
if((i__21034__auto___35167 < len__21033__auto___35166)){
args__21040__auto__.push((arguments[i__21034__auto___35167]));

var G__35168 = (i__21034__auto___35167 + (1));
i__21034__auto___35167 = G__35168;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35165))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35165){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35165),args);
});})(g__23486__auto___35165))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__23486__auto___35165){
return (function (seq35106){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35106));
});})(g__23486__auto___35165))
;


var g__23486__auto___35169 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__23486__auto___35169){
return (function cljs$spec$impl$gen$return(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35170 = arguments.length;
var i__21034__auto___35171 = (0);
while(true){
if((i__21034__auto___35171 < len__21033__auto___35170)){
args__21040__auto__.push((arguments[i__21034__auto___35171]));

var G__35172 = (i__21034__auto___35171 + (1));
i__21034__auto___35171 = G__35172;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35169))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35169){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35169),args);
});})(g__23486__auto___35169))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__23486__auto___35169){
return (function (seq35107){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35107));
});})(g__23486__auto___35169))
;


var g__23486__auto___35173 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__23486__auto___35173){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35174 = arguments.length;
var i__21034__auto___35175 = (0);
while(true){
if((i__21034__auto___35175 < len__21033__auto___35174)){
args__21040__auto__.push((arguments[i__21034__auto___35175]));

var G__35176 = (i__21034__auto___35175 + (1));
i__21034__auto___35175 = G__35176;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23486__auto___35173))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23486__auto___35173){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__23486__auto___35173),args);
});})(g__23486__auto___35173))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__23486__auto___35173){
return (function (seq35108){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35108));
});})(g__23486__auto___35173))
;

var g__23499__auto___35198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__23499__auto___35198){
return (function cljs$spec$impl$gen$any(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35199 = arguments.length;
var i__21034__auto___35200 = (0);
while(true){
if((i__21034__auto___35200 < len__21033__auto___35199)){
args__21040__auto__.push((arguments[i__21034__auto___35200]));

var G__35201 = (i__21034__auto___35200 + (1));
i__21034__auto___35200 = G__35201;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35198))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35198){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35198);
});})(g__23499__auto___35198))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__23499__auto___35198){
return (function (seq35177){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35177));
});})(g__23499__auto___35198))
;


var g__23499__auto___35202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__23499__auto___35202){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35203 = arguments.length;
var i__21034__auto___35204 = (0);
while(true){
if((i__21034__auto___35204 < len__21033__auto___35203)){
args__21040__auto__.push((arguments[i__21034__auto___35204]));

var G__35205 = (i__21034__auto___35204 + (1));
i__21034__auto___35204 = G__35205;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35202))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35202){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35202);
});})(g__23499__auto___35202))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__23499__auto___35202){
return (function (seq35178){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35178));
});})(g__23499__auto___35202))
;


var g__23499__auto___35206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__23499__auto___35206){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35207 = arguments.length;
var i__21034__auto___35208 = (0);
while(true){
if((i__21034__auto___35208 < len__21033__auto___35207)){
args__21040__auto__.push((arguments[i__21034__auto___35208]));

var G__35209 = (i__21034__auto___35208 + (1));
i__21034__auto___35208 = G__35209;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35206))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35206){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35206);
});})(g__23499__auto___35206))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__23499__auto___35206){
return (function (seq35179){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35179));
});})(g__23499__auto___35206))
;


var g__23499__auto___35210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__23499__auto___35210){
return (function cljs$spec$impl$gen$char(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35211 = arguments.length;
var i__21034__auto___35212 = (0);
while(true){
if((i__21034__auto___35212 < len__21033__auto___35211)){
args__21040__auto__.push((arguments[i__21034__auto___35212]));

var G__35213 = (i__21034__auto___35212 + (1));
i__21034__auto___35212 = G__35213;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35210))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35210){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35210);
});})(g__23499__auto___35210))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__23499__auto___35210){
return (function (seq35180){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35180));
});})(g__23499__auto___35210))
;


var g__23499__auto___35214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__23499__auto___35214){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35215 = arguments.length;
var i__21034__auto___35216 = (0);
while(true){
if((i__21034__auto___35216 < len__21033__auto___35215)){
args__21040__auto__.push((arguments[i__21034__auto___35216]));

var G__35217 = (i__21034__auto___35216 + (1));
i__21034__auto___35216 = G__35217;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35214))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35214){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35214);
});})(g__23499__auto___35214))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__23499__auto___35214){
return (function (seq35181){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35181));
});})(g__23499__auto___35214))
;


var g__23499__auto___35218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__23499__auto___35218){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35219 = arguments.length;
var i__21034__auto___35220 = (0);
while(true){
if((i__21034__auto___35220 < len__21033__auto___35219)){
args__21040__auto__.push((arguments[i__21034__auto___35220]));

var G__35221 = (i__21034__auto___35220 + (1));
i__21034__auto___35220 = G__35221;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35218))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35218){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35218);
});})(g__23499__auto___35218))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__23499__auto___35218){
return (function (seq35182){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35182));
});})(g__23499__auto___35218))
;


var g__23499__auto___35222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__23499__auto___35222){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35223 = arguments.length;
var i__21034__auto___35224 = (0);
while(true){
if((i__21034__auto___35224 < len__21033__auto___35223)){
args__21040__auto__.push((arguments[i__21034__auto___35224]));

var G__35225 = (i__21034__auto___35224 + (1));
i__21034__auto___35224 = G__35225;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35222))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35222){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35222);
});})(g__23499__auto___35222))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__23499__auto___35222){
return (function (seq35183){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35183));
});})(g__23499__auto___35222))
;


var g__23499__auto___35226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__23499__auto___35226){
return (function cljs$spec$impl$gen$double(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35227 = arguments.length;
var i__21034__auto___35228 = (0);
while(true){
if((i__21034__auto___35228 < len__21033__auto___35227)){
args__21040__auto__.push((arguments[i__21034__auto___35228]));

var G__35229 = (i__21034__auto___35228 + (1));
i__21034__auto___35228 = G__35229;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35226))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35226){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35226);
});})(g__23499__auto___35226))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__23499__auto___35226){
return (function (seq35184){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35184));
});})(g__23499__auto___35226))
;


var g__23499__auto___35230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__23499__auto___35230){
return (function cljs$spec$impl$gen$int(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35231 = arguments.length;
var i__21034__auto___35232 = (0);
while(true){
if((i__21034__auto___35232 < len__21033__auto___35231)){
args__21040__auto__.push((arguments[i__21034__auto___35232]));

var G__35233 = (i__21034__auto___35232 + (1));
i__21034__auto___35232 = G__35233;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35230))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35230){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35230);
});})(g__23499__auto___35230))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__23499__auto___35230){
return (function (seq35185){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35185));
});})(g__23499__auto___35230))
;


var g__23499__auto___35234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__23499__auto___35234){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35235 = arguments.length;
var i__21034__auto___35236 = (0);
while(true){
if((i__21034__auto___35236 < len__21033__auto___35235)){
args__21040__auto__.push((arguments[i__21034__auto___35236]));

var G__35237 = (i__21034__auto___35236 + (1));
i__21034__auto___35236 = G__35237;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35234))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35234){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35234);
});})(g__23499__auto___35234))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__23499__auto___35234){
return (function (seq35186){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35186));
});})(g__23499__auto___35234))
;


var g__23499__auto___35238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__23499__auto___35238){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35239 = arguments.length;
var i__21034__auto___35240 = (0);
while(true){
if((i__21034__auto___35240 < len__21033__auto___35239)){
args__21040__auto__.push((arguments[i__21034__auto___35240]));

var G__35241 = (i__21034__auto___35240 + (1));
i__21034__auto___35240 = G__35241;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35238))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35238){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35238);
});})(g__23499__auto___35238))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__23499__auto___35238){
return (function (seq35187){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35187));
});})(g__23499__auto___35238))
;


var g__23499__auto___35242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__23499__auto___35242){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35243 = arguments.length;
var i__21034__auto___35244 = (0);
while(true){
if((i__21034__auto___35244 < len__21033__auto___35243)){
args__21040__auto__.push((arguments[i__21034__auto___35244]));

var G__35245 = (i__21034__auto___35244 + (1));
i__21034__auto___35244 = G__35245;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35242))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35242){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35242);
});})(g__23499__auto___35242))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__23499__auto___35242){
return (function (seq35188){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35188));
});})(g__23499__auto___35242))
;


var g__23499__auto___35246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__23499__auto___35246){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35247 = arguments.length;
var i__21034__auto___35248 = (0);
while(true){
if((i__21034__auto___35248 < len__21033__auto___35247)){
args__21040__auto__.push((arguments[i__21034__auto___35248]));

var G__35249 = (i__21034__auto___35248 + (1));
i__21034__auto___35248 = G__35249;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35246))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35246){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35246);
});})(g__23499__auto___35246))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__23499__auto___35246){
return (function (seq35189){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35189));
});})(g__23499__auto___35246))
;


var g__23499__auto___35250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__23499__auto___35250){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35251 = arguments.length;
var i__21034__auto___35252 = (0);
while(true){
if((i__21034__auto___35252 < len__21033__auto___35251)){
args__21040__auto__.push((arguments[i__21034__auto___35252]));

var G__35253 = (i__21034__auto___35252 + (1));
i__21034__auto___35252 = G__35253;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35250))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35250){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35250);
});})(g__23499__auto___35250))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__23499__auto___35250){
return (function (seq35190){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35190));
});})(g__23499__auto___35250))
;


var g__23499__auto___35254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__23499__auto___35254){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35255 = arguments.length;
var i__21034__auto___35256 = (0);
while(true){
if((i__21034__auto___35256 < len__21033__auto___35255)){
args__21040__auto__.push((arguments[i__21034__auto___35256]));

var G__35257 = (i__21034__auto___35256 + (1));
i__21034__auto___35256 = G__35257;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35254))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35254){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35254);
});})(g__23499__auto___35254))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__23499__auto___35254){
return (function (seq35191){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35191));
});})(g__23499__auto___35254))
;


var g__23499__auto___35258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__23499__auto___35258){
return (function cljs$spec$impl$gen$string(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35259 = arguments.length;
var i__21034__auto___35260 = (0);
while(true){
if((i__21034__auto___35260 < len__21033__auto___35259)){
args__21040__auto__.push((arguments[i__21034__auto___35260]));

var G__35261 = (i__21034__auto___35260 + (1));
i__21034__auto___35260 = G__35261;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35258))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35258){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35258);
});})(g__23499__auto___35258))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__23499__auto___35258){
return (function (seq35192){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35192));
});})(g__23499__auto___35258))
;


var g__23499__auto___35262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__23499__auto___35262){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35263 = arguments.length;
var i__21034__auto___35264 = (0);
while(true){
if((i__21034__auto___35264 < len__21033__auto___35263)){
args__21040__auto__.push((arguments[i__21034__auto___35264]));

var G__35265 = (i__21034__auto___35264 + (1));
i__21034__auto___35264 = G__35265;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35262))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35262){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35262);
});})(g__23499__auto___35262))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__23499__auto___35262){
return (function (seq35193){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35193));
});})(g__23499__auto___35262))
;


var g__23499__auto___35266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__23499__auto___35266){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35267 = arguments.length;
var i__21034__auto___35268 = (0);
while(true){
if((i__21034__auto___35268 < len__21033__auto___35267)){
args__21040__auto__.push((arguments[i__21034__auto___35268]));

var G__35269 = (i__21034__auto___35268 + (1));
i__21034__auto___35268 = G__35269;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35266))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35266){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35266);
});})(g__23499__auto___35266))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__23499__auto___35266){
return (function (seq35194){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35194));
});})(g__23499__auto___35266))
;


var g__23499__auto___35270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__23499__auto___35270){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35271 = arguments.length;
var i__21034__auto___35272 = (0);
while(true){
if((i__21034__auto___35272 < len__21033__auto___35271)){
args__21040__auto__.push((arguments[i__21034__auto___35272]));

var G__35273 = (i__21034__auto___35272 + (1));
i__21034__auto___35272 = G__35273;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35270))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35270){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35270);
});})(g__23499__auto___35270))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__23499__auto___35270){
return (function (seq35195){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35195));
});})(g__23499__auto___35270))
;


var g__23499__auto___35274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__23499__auto___35274){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35275 = arguments.length;
var i__21034__auto___35276 = (0);
while(true){
if((i__21034__auto___35276 < len__21033__auto___35275)){
args__21040__auto__.push((arguments[i__21034__auto___35276]));

var G__35277 = (i__21034__auto___35276 + (1));
i__21034__auto___35276 = G__35277;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35274))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35274){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35274);
});})(g__23499__auto___35274))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__23499__auto___35274){
return (function (seq35196){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35196));
});})(g__23499__auto___35274))
;


var g__23499__auto___35278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__23499__auto___35278){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35279 = arguments.length;
var i__21034__auto___35280 = (0);
while(true){
if((i__21034__auto___35280 < len__21033__auto___35279)){
args__21040__auto__.push((arguments[i__21034__auto___35280]));

var G__35281 = (i__21034__auto___35280 + (1));
i__21034__auto___35280 = G__35281;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});})(g__23499__auto___35278))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__23499__auto___35278){
return (function (args){
return cljs.core.deref.call(null,g__23499__auto___35278);
});})(g__23499__auto___35278))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__23499__auto___35278){
return (function (seq35197){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35197));
});})(g__23499__auto___35278))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21040__auto__ = [];
var len__21033__auto___35284 = arguments.length;
var i__21034__auto___35285 = (0);
while(true){
if((i__21034__auto___35285 < len__21033__auto___35284)){
args__21040__auto__.push((arguments[i__21034__auto___35285]));

var G__35286 = (i__21034__auto___35285 + (1));
i__21034__auto___35285 = G__35286;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35282_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35282_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35283){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35283));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35287_SHARP_){
return (new Date(p1__35287_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1468965294901