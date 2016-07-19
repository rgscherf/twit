// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14110 = [];
var len__7322__auto___14116 = arguments.length;
var i__7323__auto___14117 = (0);
while(true){
if((i__7323__auto___14117 < len__7322__auto___14116)){
args14110.push((arguments[i__7323__auto___14117]));

var G__14118 = (i__7323__auto___14117 + (1));
i__7323__auto___14117 = G__14118;
continue;
} else {
}
break;
}

var G__14112 = args14110.length;
switch (G__14112) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14110.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14113 = (function (f,blockable,meta14114){
this.f = f;
this.blockable = blockable;
this.meta14114 = meta14114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14115,meta14114__$1){
var self__ = this;
var _14115__$1 = this;
return (new cljs.core.async.t_cljs$core$async14113(self__.f,self__.blockable,meta14114__$1));
});

cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14115){
var self__ = this;
var _14115__$1 = this;
return self__.meta14114;
});

cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14114], null);
});

cljs.core.async.t_cljs$core$async14113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14113";

cljs.core.async.t_cljs$core$async14113.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write(writer__6854__auto__,"cljs.core.async/t_cljs$core$async14113");
});

cljs.core.async.__GT_t_cljs$core$async14113 = (function cljs$core$async$__GT_t_cljs$core$async14113(f__$1,blockable__$1,meta14114){
return (new cljs.core.async.t_cljs$core$async14113(f__$1,blockable__$1,meta14114));
});

}

return (new cljs.core.async.t_cljs$core$async14113(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14122 = [];
var len__7322__auto___14125 = arguments.length;
var i__7323__auto___14126 = (0);
while(true){
if((i__7323__auto___14126 < len__7322__auto___14125)){
args14122.push((arguments[i__7323__auto___14126]));

var G__14127 = (i__7323__auto___14126 + (1));
i__7323__auto___14126 = G__14127;
continue;
} else {
}
break;
}

var G__14124 = args14122.length;
switch (G__14124) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14122.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args14129 = [];
var len__7322__auto___14132 = arguments.length;
var i__7323__auto___14133 = (0);
while(true){
if((i__7323__auto___14133 < len__7322__auto___14132)){
args14129.push((arguments[i__7323__auto___14133]));

var G__14134 = (i__7323__auto___14133 + (1));
i__7323__auto___14133 = G__14134;
continue;
} else {
}
break;
}

var G__14131 = args14129.length;
switch (G__14131) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14129.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14136 = [];
var len__7322__auto___14139 = arguments.length;
var i__7323__auto___14140 = (0);
while(true){
if((i__7323__auto___14140 < len__7322__auto___14139)){
args14136.push((arguments[i__7323__auto___14140]));

var G__14141 = (i__7323__auto___14140 + (1));
i__7323__auto___14140 = G__14141;
continue;
} else {
}
break;
}

var G__14138 = args14136.length;
switch (G__14138) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14136.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14143 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14143) : fn1.call(null,val_14143));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14143,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14143) : fn1.call(null,val_14143));
});})(val_14143,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14144 = [];
var len__7322__auto___14147 = arguments.length;
var i__7323__auto___14148 = (0);
while(true){
if((i__7323__auto___14148 < len__7322__auto___14147)){
args14144.push((arguments[i__7323__auto___14148]));

var G__14149 = (i__7323__auto___14148 + (1));
i__7323__auto___14148 = G__14149;
continue;
} else {
}
break;
}

var G__14146 = args14144.length;
switch (G__14146) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14144.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7162__auto___14151 = n;
var x_14152 = (0);
while(true){
if((x_14152 < n__7162__auto___14151)){
(a[x_14152] = (0));

var G__14153 = (x_14152 + (1));
x_14152 = G__14153;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__14154 = (i + (1));
i = G__14154;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14158 = (function (alt_flag,flag,meta14159){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14159 = meta14159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14160,meta14159__$1){
var self__ = this;
var _14160__$1 = this;
return (new cljs.core.async.t_cljs$core$async14158(self__.alt_flag,self__.flag,meta14159__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14160){
var self__ = this;
var _14160__$1 = this;
return self__.meta14159;
});})(flag))
;

cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14158.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14159], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14158";

cljs.core.async.t_cljs$core$async14158.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write(writer__6854__auto__,"cljs.core.async/t_cljs$core$async14158");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14158 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14158(alt_flag__$1,flag__$1,meta14159){
return (new cljs.core.async.t_cljs$core$async14158(alt_flag__$1,flag__$1,meta14159));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14158(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14164 = (function (alt_handler,flag,cb,meta14165){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14165 = meta14165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14166,meta14165__$1){
var self__ = this;
var _14166__$1 = this;
return (new cljs.core.async.t_cljs$core$async14164(self__.alt_handler,self__.flag,self__.cb,meta14165__$1));
});

cljs.core.async.t_cljs$core$async14164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14166){
var self__ = this;
var _14166__$1 = this;
return self__.meta14165;
});

cljs.core.async.t_cljs$core$async14164.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14165], null);
});

cljs.core.async.t_cljs$core$async14164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14164";

cljs.core.async.t_cljs$core$async14164.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write(writer__6854__auto__,"cljs.core.async/t_cljs$core$async14164");
});

cljs.core.async.__GT_t_cljs$core$async14164 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14164(alt_handler__$1,flag__$1,cb__$1,meta14165){
return (new cljs.core.async.t_cljs$core$async14164(alt_handler__$1,flag__$1,cb__$1,meta14165));
});

}

return (new cljs.core.async.t_cljs$core$async14164(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14167_SHARP_){
var G__14171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14167_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14171) : fret.call(null,G__14171));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14168_SHARP_){
var G__14172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14168_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14172) : fret.call(null,G__14172));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6247__auto__ = wport;
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14173 = (i + (1));
i = G__14173;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6247__auto__ = ret;
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6235__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6235__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6235__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___14179 = arguments.length;
var i__7323__auto___14180 = (0);
while(true){
if((i__7323__auto___14180 < len__7322__auto___14179)){
args__7329__auto__.push((arguments[i__7323__auto___14180]));

var G__14181 = (i__7323__auto___14180 + (1));
i__7323__auto___14180 = G__14181;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((1) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7330__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14176){
var map__14177 = p__14176;
var map__14177__$1 = ((((!((map__14177 == null)))?((((map__14177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14177):map__14177);
var opts = map__14177__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14174){
var G__14175 = cljs.core.first(seq14174);
var seq14174__$1 = cljs.core.next(seq14174);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14175,seq14174__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args14182 = [];
var len__7322__auto___14232 = arguments.length;
var i__7323__auto___14233 = (0);
while(true){
if((i__7323__auto___14233 < len__7322__auto___14232)){
args14182.push((arguments[i__7323__auto___14233]));

var G__14234 = (i__7323__auto___14233 + (1));
i__7323__auto___14233 = G__14234;
continue;
} else {
}
break;
}

var G__14184 = args14182.length;
switch (G__14184) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14182.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14065__auto___14236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___14236){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___14236){
return (function (state_14208){
var state_val_14209 = (state_14208[(1)]);
if((state_val_14209 === (7))){
var inst_14204 = (state_14208[(2)]);
var state_14208__$1 = state_14208;
var statearr_14210_14237 = state_14208__$1;
(statearr_14210_14237[(2)] = inst_14204);

(statearr_14210_14237[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14209 === (1))){
var state_14208__$1 = state_14208;
var statearr_14211_14238 = state_14208__$1;
(statearr_14211_14238[(2)] = null);

(statearr_14211_14238[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14209 === (4))){
var inst_14187 = (state_14208[(7)]);
var inst_14187__$1 = (state_14208[(2)]);
var inst_14188 = (inst_14187__$1 == null);
var state_14208__$1 = (function (){var statearr_14212 = state_14208;
(statearr_14212[(7)] = inst_14187__$1);

return statearr_14212;
})();
if(cljs.core.truth_(inst_14188)){
var statearr_14213_14239 = state_14208__$1;
(statearr_14213_14239[(1)] = (5));

} else {
var statearr_14214_14240 = state_14208__$1;
(statearr_14214_14240[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14209 === (13))){
var state_14208__$1 = state_14208;
var statearr_14215_14241 = state_14208__$1;
(statearr_14215_14241[(2)] = null);

(statearr_14215_14241[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14209 === (6))){
var inst_14187 = (state_14208[(7)]);
var state_14208__$1 = state_14208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14208__$1,(11),to,inst_14187);
} else {
if((state_val_14209 === (3))){
var inst_14206 = (state_14208[(2)]);
var state_14208__$1 = state_14208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14208__$1,inst_14206);
} else {
if((state_val_14209 === (12))){
var state_14208__$1 = state_14208;
var statearr_14216_14242 = state_14208__$1;
(statearr_14216_14242[(2)] = null);

(statearr_14216_14242[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14209 === (2))){
var state_14208__$1 = state_14208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14208__$1,(4),from);
} else {
if((state_val_14209 === (11))){
var inst_14197 = (state_14208[(2)]);
var state_14208__$1 = state_14208;
if(cljs.core.truth_(inst_14197)){
var statearr_14217_14243 = state_14208__$1;
(statearr_14217_14243[(1)] = (12));

} else {
var statearr_14218_14244 = state_14208__$1;
(statearr_14218_14244[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14209 === (9))){
var state_14208__$1 = state_14208;
var statearr_14219_14245 = state_14208__$1;
(statearr_14219_14245[(2)] = null);

(statearr_14219_14245[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14209 === (5))){
var state_14208__$1 = state_14208;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14220_14246 = state_14208__$1;
(statearr_14220_14246[(1)] = (8));

} else {
var statearr_14221_14247 = state_14208__$1;
(statearr_14221_14247[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14209 === (14))){
var inst_14202 = (state_14208[(2)]);
var state_14208__$1 = state_14208;
var statearr_14222_14248 = state_14208__$1;
(statearr_14222_14248[(2)] = inst_14202);

(statearr_14222_14248[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14209 === (10))){
var inst_14194 = (state_14208[(2)]);
var state_14208__$1 = state_14208;
var statearr_14223_14249 = state_14208__$1;
(statearr_14223_14249[(2)] = inst_14194);

(statearr_14223_14249[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14209 === (8))){
var inst_14191 = cljs.core.async.close_BANG_(to);
var state_14208__$1 = state_14208;
var statearr_14224_14250 = state_14208__$1;
(statearr_14224_14250[(2)] = inst_14191);

(statearr_14224_14250[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___14236))
;
return ((function (switch__13951__auto__,c__14065__auto___14236){
return (function() {
var cljs$core$async$state_machine__13952__auto__ = null;
var cljs$core$async$state_machine__13952__auto____0 = (function (){
var statearr_14228 = [null,null,null,null,null,null,null,null];
(statearr_14228[(0)] = cljs$core$async$state_machine__13952__auto__);

(statearr_14228[(1)] = (1));

return statearr_14228;
});
var cljs$core$async$state_machine__13952__auto____1 = (function (state_14208){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_14208);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e14229){if((e14229 instanceof Object)){
var ex__13955__auto__ = e14229;
var statearr_14230_14251 = state_14208;
(statearr_14230_14251[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14208);

return cljs.core.cst$kw$recur;
} else {
throw e14229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__14252 = state_14208;
state_14208 = G__14252;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$state_machine__13952__auto__ = function(state_14208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13952__auto____1.call(this,state_14208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13952__auto____0;
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13952__auto____1;
return cljs$core$async$state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___14236))
})();
var state__14067__auto__ = (function (){var statearr_14231 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_14231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___14236);

return statearr_14231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___14236))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__14440){
var vec__14441 = p__14440;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14441,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14441,(1),null);
var job = vec__14441;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14065__auto___14627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___14627,res,vec__14441,v,p,job,jobs,results){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___14627,res,vec__14441,v,p,job,jobs,results){
return (function (state_14448){
var state_val_14449 = (state_14448[(1)]);
if((state_val_14449 === (1))){
var state_14448__$1 = state_14448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14448__$1,(2),res,v);
} else {
if((state_val_14449 === (2))){
var inst_14445 = (state_14448[(2)]);
var inst_14446 = cljs.core.async.close_BANG_(res);
var state_14448__$1 = (function (){var statearr_14450 = state_14448;
(statearr_14450[(7)] = inst_14445);

return statearr_14450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14448__$1,inst_14446);
} else {
return null;
}
}
});})(c__14065__auto___14627,res,vec__14441,v,p,job,jobs,results))
;
return ((function (switch__13951__auto__,c__14065__auto___14627,res,vec__14441,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0 = (function (){
var statearr_14454 = [null,null,null,null,null,null,null,null];
(statearr_14454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__);

(statearr_14454[(1)] = (1));

return statearr_14454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1 = (function (state_14448){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_14448);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e14455){if((e14455 instanceof Object)){
var ex__13955__auto__ = e14455;
var statearr_14456_14628 = state_14448;
(statearr_14456_14628[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14448);

return cljs.core.cst$kw$recur;
} else {
throw e14455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__14629 = state_14448;
state_14448 = G__14629;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__ = function(state_14448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1.call(this,state_14448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___14627,res,vec__14441,v,p,job,jobs,results))
})();
var state__14067__auto__ = (function (){var statearr_14457 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_14457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___14627);

return statearr_14457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___14627,res,vec__14441,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14458){
var vec__14459 = p__14458;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14459,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14459,(1),null);
var job = vec__14459;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7162__auto___14630 = n;
var __14631 = (0);
while(true){
if((__14631 < n__7162__auto___14630)){
var G__14462_14632 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14462_14632) {
case "compute":
var c__14065__auto___14634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14631,c__14065__auto___14634,G__14462_14632,n__7162__auto___14630,jobs,results,process,async){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (__14631,c__14065__auto___14634,G__14462_14632,n__7162__auto___14630,jobs,results,process,async){
return (function (state_14475){
var state_val_14476 = (state_14475[(1)]);
if((state_val_14476 === (1))){
var state_14475__$1 = state_14475;
var statearr_14477_14635 = state_14475__$1;
(statearr_14477_14635[(2)] = null);

(statearr_14477_14635[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14476 === (2))){
var state_14475__$1 = state_14475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14475__$1,(4),jobs);
} else {
if((state_val_14476 === (3))){
var inst_14473 = (state_14475[(2)]);
var state_14475__$1 = state_14475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14475__$1,inst_14473);
} else {
if((state_val_14476 === (4))){
var inst_14465 = (state_14475[(2)]);
var inst_14466 = process(inst_14465);
var state_14475__$1 = state_14475;
if(cljs.core.truth_(inst_14466)){
var statearr_14478_14636 = state_14475__$1;
(statearr_14478_14636[(1)] = (5));

} else {
var statearr_14479_14637 = state_14475__$1;
(statearr_14479_14637[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14476 === (5))){
var state_14475__$1 = state_14475;
var statearr_14480_14638 = state_14475__$1;
(statearr_14480_14638[(2)] = null);

(statearr_14480_14638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14476 === (6))){
var state_14475__$1 = state_14475;
var statearr_14481_14639 = state_14475__$1;
(statearr_14481_14639[(2)] = null);

(statearr_14481_14639[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14476 === (7))){
var inst_14471 = (state_14475[(2)]);
var state_14475__$1 = state_14475;
var statearr_14482_14640 = state_14475__$1;
(statearr_14482_14640[(2)] = inst_14471);

(statearr_14482_14640[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__14631,c__14065__auto___14634,G__14462_14632,n__7162__auto___14630,jobs,results,process,async))
;
return ((function (__14631,switch__13951__auto__,c__14065__auto___14634,G__14462_14632,n__7162__auto___14630,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0 = (function (){
var statearr_14486 = [null,null,null,null,null,null,null];
(statearr_14486[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__);

(statearr_14486[(1)] = (1));

return statearr_14486;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1 = (function (state_14475){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_14475);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e14487){if((e14487 instanceof Object)){
var ex__13955__auto__ = e14487;
var statearr_14488_14641 = state_14475;
(statearr_14488_14641[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14475);

return cljs.core.cst$kw$recur;
} else {
throw e14487;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__14642 = state_14475;
state_14475 = G__14642;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__ = function(state_14475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1.call(this,state_14475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__;
})()
;})(__14631,switch__13951__auto__,c__14065__auto___14634,G__14462_14632,n__7162__auto___14630,jobs,results,process,async))
})();
var state__14067__auto__ = (function (){var statearr_14489 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_14489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___14634);

return statearr_14489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(__14631,c__14065__auto___14634,G__14462_14632,n__7162__auto___14630,jobs,results,process,async))
);


break;
case "async":
var c__14065__auto___14643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14631,c__14065__auto___14643,G__14462_14632,n__7162__auto___14630,jobs,results,process,async){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (__14631,c__14065__auto___14643,G__14462_14632,n__7162__auto___14630,jobs,results,process,async){
return (function (state_14502){
var state_val_14503 = (state_14502[(1)]);
if((state_val_14503 === (1))){
var state_14502__$1 = state_14502;
var statearr_14504_14644 = state_14502__$1;
(statearr_14504_14644[(2)] = null);

(statearr_14504_14644[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14503 === (2))){
var state_14502__$1 = state_14502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14502__$1,(4),jobs);
} else {
if((state_val_14503 === (3))){
var inst_14500 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14502__$1,inst_14500);
} else {
if((state_val_14503 === (4))){
var inst_14492 = (state_14502[(2)]);
var inst_14493 = async(inst_14492);
var state_14502__$1 = state_14502;
if(cljs.core.truth_(inst_14493)){
var statearr_14505_14645 = state_14502__$1;
(statearr_14505_14645[(1)] = (5));

} else {
var statearr_14506_14646 = state_14502__$1;
(statearr_14506_14646[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14503 === (5))){
var state_14502__$1 = state_14502;
var statearr_14507_14647 = state_14502__$1;
(statearr_14507_14647[(2)] = null);

(statearr_14507_14647[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14503 === (6))){
var state_14502__$1 = state_14502;
var statearr_14508_14648 = state_14502__$1;
(statearr_14508_14648[(2)] = null);

(statearr_14508_14648[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14503 === (7))){
var inst_14498 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
var statearr_14509_14649 = state_14502__$1;
(statearr_14509_14649[(2)] = inst_14498);

(statearr_14509_14649[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__14631,c__14065__auto___14643,G__14462_14632,n__7162__auto___14630,jobs,results,process,async))
;
return ((function (__14631,switch__13951__auto__,c__14065__auto___14643,G__14462_14632,n__7162__auto___14630,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0 = (function (){
var statearr_14513 = [null,null,null,null,null,null,null];
(statearr_14513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__);

(statearr_14513[(1)] = (1));

return statearr_14513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1 = (function (state_14502){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_14502);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e14514){if((e14514 instanceof Object)){
var ex__13955__auto__ = e14514;
var statearr_14515_14650 = state_14502;
(statearr_14515_14650[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14502);

return cljs.core.cst$kw$recur;
} else {
throw e14514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__14651 = state_14502;
state_14502 = G__14651;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__ = function(state_14502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1.call(this,state_14502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__;
})()
;})(__14631,switch__13951__auto__,c__14065__auto___14643,G__14462_14632,n__7162__auto___14630,jobs,results,process,async))
})();
var state__14067__auto__ = (function (){var statearr_14516 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_14516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___14643);

return statearr_14516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(__14631,c__14065__auto___14643,G__14462_14632,n__7162__auto___14630,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14652 = (__14631 + (1));
__14631 = G__14652;
continue;
} else {
}
break;
}

var c__14065__auto___14653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___14653,jobs,results,process,async){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___14653,jobs,results,process,async){
return (function (state_14538){
var state_val_14539 = (state_14538[(1)]);
if((state_val_14539 === (1))){
var state_14538__$1 = state_14538;
var statearr_14540_14654 = state_14538__$1;
(statearr_14540_14654[(2)] = null);

(statearr_14540_14654[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14539 === (2))){
var state_14538__$1 = state_14538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14538__$1,(4),from);
} else {
if((state_val_14539 === (3))){
var inst_14536 = (state_14538[(2)]);
var state_14538__$1 = state_14538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14538__$1,inst_14536);
} else {
if((state_val_14539 === (4))){
var inst_14519 = (state_14538[(7)]);
var inst_14519__$1 = (state_14538[(2)]);
var inst_14520 = (inst_14519__$1 == null);
var state_14538__$1 = (function (){var statearr_14541 = state_14538;
(statearr_14541[(7)] = inst_14519__$1);

return statearr_14541;
})();
if(cljs.core.truth_(inst_14520)){
var statearr_14542_14655 = state_14538__$1;
(statearr_14542_14655[(1)] = (5));

} else {
var statearr_14543_14656 = state_14538__$1;
(statearr_14543_14656[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14539 === (5))){
var inst_14522 = cljs.core.async.close_BANG_(jobs);
var state_14538__$1 = state_14538;
var statearr_14544_14657 = state_14538__$1;
(statearr_14544_14657[(2)] = inst_14522);

(statearr_14544_14657[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14539 === (6))){
var inst_14524 = (state_14538[(8)]);
var inst_14519 = (state_14538[(7)]);
var inst_14524__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14526 = [inst_14519,inst_14524__$1];
var inst_14527 = (new cljs.core.PersistentVector(null,2,(5),inst_14525,inst_14526,null));
var state_14538__$1 = (function (){var statearr_14545 = state_14538;
(statearr_14545[(8)] = inst_14524__$1);

return statearr_14545;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14538__$1,(8),jobs,inst_14527);
} else {
if((state_val_14539 === (7))){
var inst_14534 = (state_14538[(2)]);
var state_14538__$1 = state_14538;
var statearr_14546_14658 = state_14538__$1;
(statearr_14546_14658[(2)] = inst_14534);

(statearr_14546_14658[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14539 === (8))){
var inst_14524 = (state_14538[(8)]);
var inst_14529 = (state_14538[(2)]);
var state_14538__$1 = (function (){var statearr_14547 = state_14538;
(statearr_14547[(9)] = inst_14529);

return statearr_14547;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14538__$1,(9),results,inst_14524);
} else {
if((state_val_14539 === (9))){
var inst_14531 = (state_14538[(2)]);
var state_14538__$1 = (function (){var statearr_14548 = state_14538;
(statearr_14548[(10)] = inst_14531);

return statearr_14548;
})();
var statearr_14549_14659 = state_14538__$1;
(statearr_14549_14659[(2)] = null);

(statearr_14549_14659[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___14653,jobs,results,process,async))
;
return ((function (switch__13951__auto__,c__14065__auto___14653,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0 = (function (){
var statearr_14553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__);

(statearr_14553[(1)] = (1));

return statearr_14553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1 = (function (state_14538){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_14538);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e14554){if((e14554 instanceof Object)){
var ex__13955__auto__ = e14554;
var statearr_14555_14660 = state_14538;
(statearr_14555_14660[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14538);

return cljs.core.cst$kw$recur;
} else {
throw e14554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__14661 = state_14538;
state_14538 = G__14661;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__ = function(state_14538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1.call(this,state_14538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___14653,jobs,results,process,async))
})();
var state__14067__auto__ = (function (){var statearr_14556 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_14556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___14653);

return statearr_14556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___14653,jobs,results,process,async))
);


var c__14065__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto__,jobs,results,process,async){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto__,jobs,results,process,async){
return (function (state_14594){
var state_val_14595 = (state_14594[(1)]);
if((state_val_14595 === (7))){
var inst_14590 = (state_14594[(2)]);
var state_14594__$1 = state_14594;
var statearr_14596_14662 = state_14594__$1;
(statearr_14596_14662[(2)] = inst_14590);

(statearr_14596_14662[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (20))){
var state_14594__$1 = state_14594;
var statearr_14597_14663 = state_14594__$1;
(statearr_14597_14663[(2)] = null);

(statearr_14597_14663[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (1))){
var state_14594__$1 = state_14594;
var statearr_14598_14664 = state_14594__$1;
(statearr_14598_14664[(2)] = null);

(statearr_14598_14664[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (4))){
var inst_14559 = (state_14594[(7)]);
var inst_14559__$1 = (state_14594[(2)]);
var inst_14560 = (inst_14559__$1 == null);
var state_14594__$1 = (function (){var statearr_14599 = state_14594;
(statearr_14599[(7)] = inst_14559__$1);

return statearr_14599;
})();
if(cljs.core.truth_(inst_14560)){
var statearr_14600_14665 = state_14594__$1;
(statearr_14600_14665[(1)] = (5));

} else {
var statearr_14601_14666 = state_14594__$1;
(statearr_14601_14666[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (15))){
var inst_14572 = (state_14594[(8)]);
var state_14594__$1 = state_14594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14594__$1,(18),to,inst_14572);
} else {
if((state_val_14595 === (21))){
var inst_14585 = (state_14594[(2)]);
var state_14594__$1 = state_14594;
var statearr_14602_14667 = state_14594__$1;
(statearr_14602_14667[(2)] = inst_14585);

(statearr_14602_14667[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (13))){
var inst_14587 = (state_14594[(2)]);
var state_14594__$1 = (function (){var statearr_14603 = state_14594;
(statearr_14603[(9)] = inst_14587);

return statearr_14603;
})();
var statearr_14604_14668 = state_14594__$1;
(statearr_14604_14668[(2)] = null);

(statearr_14604_14668[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (6))){
var inst_14559 = (state_14594[(7)]);
var state_14594__$1 = state_14594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14594__$1,(11),inst_14559);
} else {
if((state_val_14595 === (17))){
var inst_14580 = (state_14594[(2)]);
var state_14594__$1 = state_14594;
if(cljs.core.truth_(inst_14580)){
var statearr_14605_14669 = state_14594__$1;
(statearr_14605_14669[(1)] = (19));

} else {
var statearr_14606_14670 = state_14594__$1;
(statearr_14606_14670[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (3))){
var inst_14592 = (state_14594[(2)]);
var state_14594__$1 = state_14594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14594__$1,inst_14592);
} else {
if((state_val_14595 === (12))){
var inst_14569 = (state_14594[(10)]);
var state_14594__$1 = state_14594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14594__$1,(14),inst_14569);
} else {
if((state_val_14595 === (2))){
var state_14594__$1 = state_14594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14594__$1,(4),results);
} else {
if((state_val_14595 === (19))){
var state_14594__$1 = state_14594;
var statearr_14607_14671 = state_14594__$1;
(statearr_14607_14671[(2)] = null);

(statearr_14607_14671[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (11))){
var inst_14569 = (state_14594[(2)]);
var state_14594__$1 = (function (){var statearr_14608 = state_14594;
(statearr_14608[(10)] = inst_14569);

return statearr_14608;
})();
var statearr_14609_14672 = state_14594__$1;
(statearr_14609_14672[(2)] = null);

(statearr_14609_14672[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (9))){
var state_14594__$1 = state_14594;
var statearr_14610_14673 = state_14594__$1;
(statearr_14610_14673[(2)] = null);

(statearr_14610_14673[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (5))){
var state_14594__$1 = state_14594;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14611_14674 = state_14594__$1;
(statearr_14611_14674[(1)] = (8));

} else {
var statearr_14612_14675 = state_14594__$1;
(statearr_14612_14675[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (14))){
var inst_14574 = (state_14594[(11)]);
var inst_14572 = (state_14594[(8)]);
var inst_14572__$1 = (state_14594[(2)]);
var inst_14573 = (inst_14572__$1 == null);
var inst_14574__$1 = cljs.core.not(inst_14573);
var state_14594__$1 = (function (){var statearr_14613 = state_14594;
(statearr_14613[(11)] = inst_14574__$1);

(statearr_14613[(8)] = inst_14572__$1);

return statearr_14613;
})();
if(inst_14574__$1){
var statearr_14614_14676 = state_14594__$1;
(statearr_14614_14676[(1)] = (15));

} else {
var statearr_14615_14677 = state_14594__$1;
(statearr_14615_14677[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (16))){
var inst_14574 = (state_14594[(11)]);
var state_14594__$1 = state_14594;
var statearr_14616_14678 = state_14594__$1;
(statearr_14616_14678[(2)] = inst_14574);

(statearr_14616_14678[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (10))){
var inst_14566 = (state_14594[(2)]);
var state_14594__$1 = state_14594;
var statearr_14617_14679 = state_14594__$1;
(statearr_14617_14679[(2)] = inst_14566);

(statearr_14617_14679[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (18))){
var inst_14577 = (state_14594[(2)]);
var state_14594__$1 = state_14594;
var statearr_14618_14680 = state_14594__$1;
(statearr_14618_14680[(2)] = inst_14577);

(statearr_14618_14680[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14595 === (8))){
var inst_14563 = cljs.core.async.close_BANG_(to);
var state_14594__$1 = state_14594;
var statearr_14619_14681 = state_14594__$1;
(statearr_14619_14681[(2)] = inst_14563);

(statearr_14619_14681[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto__,jobs,results,process,async))
;
return ((function (switch__13951__auto__,c__14065__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0 = (function (){
var statearr_14623 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__);

(statearr_14623[(1)] = (1));

return statearr_14623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1 = (function (state_14594){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_14594);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e14624){if((e14624 instanceof Object)){
var ex__13955__auto__ = e14624;
var statearr_14625_14682 = state_14594;
(statearr_14625_14682[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14594);

return cljs.core.cst$kw$recur;
} else {
throw e14624;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__14683 = state_14594;
state_14594 = G__14683;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__ = function(state_14594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1.call(this,state_14594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13952__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto__,jobs,results,process,async))
})();
var state__14067__auto__ = (function (){var statearr_14626 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_14626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto__);

return statearr_14626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto__,jobs,results,process,async))
);

return c__14065__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args14684 = [];
var len__7322__auto___14687 = arguments.length;
var i__7323__auto___14688 = (0);
while(true){
if((i__7323__auto___14688 < len__7322__auto___14687)){
args14684.push((arguments[i__7323__auto___14688]));

var G__14689 = (i__7323__auto___14688 + (1));
i__7323__auto___14688 = G__14689;
continue;
} else {
}
break;
}

var G__14686 = args14684.length;
switch (G__14686) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14684.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args14691 = [];
var len__7322__auto___14694 = arguments.length;
var i__7323__auto___14695 = (0);
while(true){
if((i__7323__auto___14695 < len__7322__auto___14694)){
args14691.push((arguments[i__7323__auto___14695]));

var G__14696 = (i__7323__auto___14695 + (1));
i__7323__auto___14695 = G__14696;
continue;
} else {
}
break;
}

var G__14693 = args14691.length;
switch (G__14693) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14691.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args14698 = [];
var len__7322__auto___14751 = arguments.length;
var i__7323__auto___14752 = (0);
while(true){
if((i__7323__auto___14752 < len__7322__auto___14751)){
args14698.push((arguments[i__7323__auto___14752]));

var G__14753 = (i__7323__auto___14752 + (1));
i__7323__auto___14752 = G__14753;
continue;
} else {
}
break;
}

var G__14700 = args14698.length;
switch (G__14700) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14698.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14065__auto___14755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___14755,tc,fc){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___14755,tc,fc){
return (function (state_14726){
var state_val_14727 = (state_14726[(1)]);
if((state_val_14727 === (7))){
var inst_14722 = (state_14726[(2)]);
var state_14726__$1 = state_14726;
var statearr_14728_14756 = state_14726__$1;
(statearr_14728_14756[(2)] = inst_14722);

(statearr_14728_14756[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14727 === (1))){
var state_14726__$1 = state_14726;
var statearr_14729_14757 = state_14726__$1;
(statearr_14729_14757[(2)] = null);

(statearr_14729_14757[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14727 === (4))){
var inst_14703 = (state_14726[(7)]);
var inst_14703__$1 = (state_14726[(2)]);
var inst_14704 = (inst_14703__$1 == null);
var state_14726__$1 = (function (){var statearr_14730 = state_14726;
(statearr_14730[(7)] = inst_14703__$1);

return statearr_14730;
})();
if(cljs.core.truth_(inst_14704)){
var statearr_14731_14758 = state_14726__$1;
(statearr_14731_14758[(1)] = (5));

} else {
var statearr_14732_14759 = state_14726__$1;
(statearr_14732_14759[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14727 === (13))){
var state_14726__$1 = state_14726;
var statearr_14733_14760 = state_14726__$1;
(statearr_14733_14760[(2)] = null);

(statearr_14733_14760[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14727 === (6))){
var inst_14703 = (state_14726[(7)]);
var inst_14709 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14703) : p.call(null,inst_14703));
var state_14726__$1 = state_14726;
if(cljs.core.truth_(inst_14709)){
var statearr_14734_14761 = state_14726__$1;
(statearr_14734_14761[(1)] = (9));

} else {
var statearr_14735_14762 = state_14726__$1;
(statearr_14735_14762[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14727 === (3))){
var inst_14724 = (state_14726[(2)]);
var state_14726__$1 = state_14726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14726__$1,inst_14724);
} else {
if((state_val_14727 === (12))){
var state_14726__$1 = state_14726;
var statearr_14736_14763 = state_14726__$1;
(statearr_14736_14763[(2)] = null);

(statearr_14736_14763[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14727 === (2))){
var state_14726__$1 = state_14726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14726__$1,(4),ch);
} else {
if((state_val_14727 === (11))){
var inst_14703 = (state_14726[(7)]);
var inst_14713 = (state_14726[(2)]);
var state_14726__$1 = state_14726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14726__$1,(8),inst_14713,inst_14703);
} else {
if((state_val_14727 === (9))){
var state_14726__$1 = state_14726;
var statearr_14737_14764 = state_14726__$1;
(statearr_14737_14764[(2)] = tc);

(statearr_14737_14764[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14727 === (5))){
var inst_14706 = cljs.core.async.close_BANG_(tc);
var inst_14707 = cljs.core.async.close_BANG_(fc);
var state_14726__$1 = (function (){var statearr_14738 = state_14726;
(statearr_14738[(8)] = inst_14706);

return statearr_14738;
})();
var statearr_14739_14765 = state_14726__$1;
(statearr_14739_14765[(2)] = inst_14707);

(statearr_14739_14765[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14727 === (14))){
var inst_14720 = (state_14726[(2)]);
var state_14726__$1 = state_14726;
var statearr_14740_14766 = state_14726__$1;
(statearr_14740_14766[(2)] = inst_14720);

(statearr_14740_14766[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14727 === (10))){
var state_14726__$1 = state_14726;
var statearr_14741_14767 = state_14726__$1;
(statearr_14741_14767[(2)] = fc);

(statearr_14741_14767[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14727 === (8))){
var inst_14715 = (state_14726[(2)]);
var state_14726__$1 = state_14726;
if(cljs.core.truth_(inst_14715)){
var statearr_14742_14768 = state_14726__$1;
(statearr_14742_14768[(1)] = (12));

} else {
var statearr_14743_14769 = state_14726__$1;
(statearr_14743_14769[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___14755,tc,fc))
;
return ((function (switch__13951__auto__,c__14065__auto___14755,tc,fc){
return (function() {
var cljs$core$async$state_machine__13952__auto__ = null;
var cljs$core$async$state_machine__13952__auto____0 = (function (){
var statearr_14747 = [null,null,null,null,null,null,null,null,null];
(statearr_14747[(0)] = cljs$core$async$state_machine__13952__auto__);

(statearr_14747[(1)] = (1));

return statearr_14747;
});
var cljs$core$async$state_machine__13952__auto____1 = (function (state_14726){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_14726);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e14748){if((e14748 instanceof Object)){
var ex__13955__auto__ = e14748;
var statearr_14749_14770 = state_14726;
(statearr_14749_14770[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14726);

return cljs.core.cst$kw$recur;
} else {
throw e14748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__14771 = state_14726;
state_14726 = G__14771;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$state_machine__13952__auto__ = function(state_14726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13952__auto____1.call(this,state_14726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13952__auto____0;
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13952__auto____1;
return cljs$core$async$state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___14755,tc,fc))
})();
var state__14067__auto__ = (function (){var statearr_14750 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_14750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___14755);

return statearr_14750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___14755,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14065__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto__){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto__){
return (function (state_14835){
var state_val_14836 = (state_14835[(1)]);
if((state_val_14836 === (7))){
var inst_14831 = (state_14835[(2)]);
var state_14835__$1 = state_14835;
var statearr_14837_14858 = state_14835__$1;
(statearr_14837_14858[(2)] = inst_14831);

(statearr_14837_14858[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14836 === (1))){
var inst_14815 = init;
var state_14835__$1 = (function (){var statearr_14838 = state_14835;
(statearr_14838[(7)] = inst_14815);

return statearr_14838;
})();
var statearr_14839_14859 = state_14835__$1;
(statearr_14839_14859[(2)] = null);

(statearr_14839_14859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14836 === (4))){
var inst_14818 = (state_14835[(8)]);
var inst_14818__$1 = (state_14835[(2)]);
var inst_14819 = (inst_14818__$1 == null);
var state_14835__$1 = (function (){var statearr_14840 = state_14835;
(statearr_14840[(8)] = inst_14818__$1);

return statearr_14840;
})();
if(cljs.core.truth_(inst_14819)){
var statearr_14841_14860 = state_14835__$1;
(statearr_14841_14860[(1)] = (5));

} else {
var statearr_14842_14861 = state_14835__$1;
(statearr_14842_14861[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14836 === (6))){
var inst_14815 = (state_14835[(7)]);
var inst_14822 = (state_14835[(9)]);
var inst_14818 = (state_14835[(8)]);
var inst_14822__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14815,inst_14818) : f.call(null,inst_14815,inst_14818));
var inst_14823 = cljs.core.reduced_QMARK_(inst_14822__$1);
var state_14835__$1 = (function (){var statearr_14843 = state_14835;
(statearr_14843[(9)] = inst_14822__$1);

return statearr_14843;
})();
if(inst_14823){
var statearr_14844_14862 = state_14835__$1;
(statearr_14844_14862[(1)] = (8));

} else {
var statearr_14845_14863 = state_14835__$1;
(statearr_14845_14863[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14836 === (3))){
var inst_14833 = (state_14835[(2)]);
var state_14835__$1 = state_14835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14835__$1,inst_14833);
} else {
if((state_val_14836 === (2))){
var state_14835__$1 = state_14835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14835__$1,(4),ch);
} else {
if((state_val_14836 === (9))){
var inst_14822 = (state_14835[(9)]);
var inst_14815 = inst_14822;
var state_14835__$1 = (function (){var statearr_14846 = state_14835;
(statearr_14846[(7)] = inst_14815);

return statearr_14846;
})();
var statearr_14847_14864 = state_14835__$1;
(statearr_14847_14864[(2)] = null);

(statearr_14847_14864[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14836 === (5))){
var inst_14815 = (state_14835[(7)]);
var state_14835__$1 = state_14835;
var statearr_14848_14865 = state_14835__$1;
(statearr_14848_14865[(2)] = inst_14815);

(statearr_14848_14865[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14836 === (10))){
var inst_14829 = (state_14835[(2)]);
var state_14835__$1 = state_14835;
var statearr_14849_14866 = state_14835__$1;
(statearr_14849_14866[(2)] = inst_14829);

(statearr_14849_14866[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14836 === (8))){
var inst_14822 = (state_14835[(9)]);
var inst_14825 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_14822) : cljs.core.deref.call(null,inst_14822));
var state_14835__$1 = state_14835;
var statearr_14850_14867 = state_14835__$1;
(statearr_14850_14867[(2)] = inst_14825);

(statearr_14850_14867[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto__))
;
return ((function (switch__13951__auto__,c__14065__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13952__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13952__auto____0 = (function (){
var statearr_14854 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14854[(0)] = cljs$core$async$reduce_$_state_machine__13952__auto__);

(statearr_14854[(1)] = (1));

return statearr_14854;
});
var cljs$core$async$reduce_$_state_machine__13952__auto____1 = (function (state_14835){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_14835);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e14855){if((e14855 instanceof Object)){
var ex__13955__auto__ = e14855;
var statearr_14856_14868 = state_14835;
(statearr_14856_14868[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14835);

return cljs.core.cst$kw$recur;
} else {
throw e14855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__14869 = state_14835;
state_14835 = G__14869;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13952__auto__ = function(state_14835){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13952__auto____1.call(this,state_14835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13952__auto____0;
cljs$core$async$reduce_$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13952__auto____1;
return cljs$core$async$reduce_$_state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto__))
})();
var state__14067__auto__ = (function (){var statearr_14857 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_14857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto__);

return statearr_14857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto__))
);

return c__14065__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14870 = [];
var len__7322__auto___14922 = arguments.length;
var i__7323__auto___14923 = (0);
while(true){
if((i__7323__auto___14923 < len__7322__auto___14922)){
args14870.push((arguments[i__7323__auto___14923]));

var G__14924 = (i__7323__auto___14923 + (1));
i__7323__auto___14923 = G__14924;
continue;
} else {
}
break;
}

var G__14872 = args14870.length;
switch (G__14872) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14870.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14065__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto__){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto__){
return (function (state_14897){
var state_val_14898 = (state_14897[(1)]);
if((state_val_14898 === (7))){
var inst_14879 = (state_14897[(2)]);
var state_14897__$1 = state_14897;
var statearr_14899_14926 = state_14897__$1;
(statearr_14899_14926[(2)] = inst_14879);

(statearr_14899_14926[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14898 === (1))){
var inst_14873 = cljs.core.seq(coll);
var inst_14874 = inst_14873;
var state_14897__$1 = (function (){var statearr_14900 = state_14897;
(statearr_14900[(7)] = inst_14874);

return statearr_14900;
})();
var statearr_14901_14927 = state_14897__$1;
(statearr_14901_14927[(2)] = null);

(statearr_14901_14927[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14898 === (4))){
var inst_14874 = (state_14897[(7)]);
var inst_14877 = cljs.core.first(inst_14874);
var state_14897__$1 = state_14897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14897__$1,(7),ch,inst_14877);
} else {
if((state_val_14898 === (13))){
var inst_14891 = (state_14897[(2)]);
var state_14897__$1 = state_14897;
var statearr_14902_14928 = state_14897__$1;
(statearr_14902_14928[(2)] = inst_14891);

(statearr_14902_14928[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14898 === (6))){
var inst_14882 = (state_14897[(2)]);
var state_14897__$1 = state_14897;
if(cljs.core.truth_(inst_14882)){
var statearr_14903_14929 = state_14897__$1;
(statearr_14903_14929[(1)] = (8));

} else {
var statearr_14904_14930 = state_14897__$1;
(statearr_14904_14930[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14898 === (3))){
var inst_14895 = (state_14897[(2)]);
var state_14897__$1 = state_14897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14897__$1,inst_14895);
} else {
if((state_val_14898 === (12))){
var state_14897__$1 = state_14897;
var statearr_14905_14931 = state_14897__$1;
(statearr_14905_14931[(2)] = null);

(statearr_14905_14931[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14898 === (2))){
var inst_14874 = (state_14897[(7)]);
var state_14897__$1 = state_14897;
if(cljs.core.truth_(inst_14874)){
var statearr_14906_14932 = state_14897__$1;
(statearr_14906_14932[(1)] = (4));

} else {
var statearr_14907_14933 = state_14897__$1;
(statearr_14907_14933[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14898 === (11))){
var inst_14888 = cljs.core.async.close_BANG_(ch);
var state_14897__$1 = state_14897;
var statearr_14908_14934 = state_14897__$1;
(statearr_14908_14934[(2)] = inst_14888);

(statearr_14908_14934[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14898 === (9))){
var state_14897__$1 = state_14897;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14909_14935 = state_14897__$1;
(statearr_14909_14935[(1)] = (11));

} else {
var statearr_14910_14936 = state_14897__$1;
(statearr_14910_14936[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14898 === (5))){
var inst_14874 = (state_14897[(7)]);
var state_14897__$1 = state_14897;
var statearr_14911_14937 = state_14897__$1;
(statearr_14911_14937[(2)] = inst_14874);

(statearr_14911_14937[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14898 === (10))){
var inst_14893 = (state_14897[(2)]);
var state_14897__$1 = state_14897;
var statearr_14912_14938 = state_14897__$1;
(statearr_14912_14938[(2)] = inst_14893);

(statearr_14912_14938[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14898 === (8))){
var inst_14874 = (state_14897[(7)]);
var inst_14884 = cljs.core.next(inst_14874);
var inst_14874__$1 = inst_14884;
var state_14897__$1 = (function (){var statearr_14913 = state_14897;
(statearr_14913[(7)] = inst_14874__$1);

return statearr_14913;
})();
var statearr_14914_14939 = state_14897__$1;
(statearr_14914_14939[(2)] = null);

(statearr_14914_14939[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto__))
;
return ((function (switch__13951__auto__,c__14065__auto__){
return (function() {
var cljs$core$async$state_machine__13952__auto__ = null;
var cljs$core$async$state_machine__13952__auto____0 = (function (){
var statearr_14918 = [null,null,null,null,null,null,null,null];
(statearr_14918[(0)] = cljs$core$async$state_machine__13952__auto__);

(statearr_14918[(1)] = (1));

return statearr_14918;
});
var cljs$core$async$state_machine__13952__auto____1 = (function (state_14897){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_14897);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e14919){if((e14919 instanceof Object)){
var ex__13955__auto__ = e14919;
var statearr_14920_14940 = state_14897;
(statearr_14920_14940[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14897);

return cljs.core.cst$kw$recur;
} else {
throw e14919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__14941 = state_14897;
state_14897 = G__14941;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$state_machine__13952__auto__ = function(state_14897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13952__auto____1.call(this,state_14897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13952__auto____0;
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13952__auto____1;
return cljs$core$async$state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto__))
})();
var state__14067__auto__ = (function (){var statearr_14921 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_14921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto__);

return statearr_14921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto__))
);

return c__14065__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6910__auto__ = (((_ == null))?null:_);
var m__6911__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__6911__auto__.call(null,_));
} else {
var m__6911__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__6911__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6911__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__6911__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6911__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6911__auto__.call(null,m,ch));
} else {
var m__6911__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6911__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6911__auto__.call(null,m));
} else {
var m__6911__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6911__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__15170 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15170) : cljs.core.atom.call(null,G__15170));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15171 = (function (mult,ch,cs,meta15172){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15172 = meta15172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15173,meta15172__$1){
var self__ = this;
var _15173__$1 = this;
return (new cljs.core.async.t_cljs$core$async15171(self__.mult,self__.ch,self__.cs,meta15172__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15173){
var self__ = this;
var _15173__$1 = this;
return self__.meta15172;
});})(cs))
;

cljs.core.async.t_cljs$core$async15171.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15171.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15171.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15171.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15171.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15174_15398 = self__.cs;
var G__15175_15399 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15174_15398,G__15175_15399) : cljs.core.reset_BANG_.call(null,G__15174_15398,G__15175_15399));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15171.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15172], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15171";

cljs.core.async.t_cljs$core$async15171.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write(writer__6854__auto__,"cljs.core.async/t_cljs$core$async15171");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15171 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15171(mult__$1,ch__$1,cs__$1,meta15172){
return (new cljs.core.async.t_cljs$core$async15171(mult__$1,ch__$1,cs__$1,meta15172));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15171(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14065__auto___15400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___15400,cs,m,dchan,dctr,done){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___15400,cs,m,dchan,dctr,done){
return (function (state_15310){
var state_val_15311 = (state_15310[(1)]);
if((state_val_15311 === (7))){
var inst_15306 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15312_15401 = state_15310__$1;
(statearr_15312_15401[(2)] = inst_15306);

(statearr_15312_15401[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (20))){
var inst_15209 = (state_15310[(7)]);
var inst_15221 = cljs.core.first(inst_15209);
var inst_15222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15221,(0),null);
var inst_15223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15221,(1),null);
var state_15310__$1 = (function (){var statearr_15313 = state_15310;
(statearr_15313[(8)] = inst_15222);

return statearr_15313;
})();
if(cljs.core.truth_(inst_15223)){
var statearr_15314_15402 = state_15310__$1;
(statearr_15314_15402[(1)] = (22));

} else {
var statearr_15315_15403 = state_15310__$1;
(statearr_15315_15403[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (27))){
var inst_15258 = (state_15310[(9)]);
var inst_15253 = (state_15310[(10)]);
var inst_15251 = (state_15310[(11)]);
var inst_15178 = (state_15310[(12)]);
var inst_15258__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15251,inst_15253);
var inst_15259 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15258__$1,inst_15178,done);
var state_15310__$1 = (function (){var statearr_15316 = state_15310;
(statearr_15316[(9)] = inst_15258__$1);

return statearr_15316;
})();
if(cljs.core.truth_(inst_15259)){
var statearr_15317_15404 = state_15310__$1;
(statearr_15317_15404[(1)] = (30));

} else {
var statearr_15318_15405 = state_15310__$1;
(statearr_15318_15405[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (1))){
var state_15310__$1 = state_15310;
var statearr_15319_15406 = state_15310__$1;
(statearr_15319_15406[(2)] = null);

(statearr_15319_15406[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (24))){
var inst_15209 = (state_15310[(7)]);
var inst_15228 = (state_15310[(2)]);
var inst_15229 = cljs.core.next(inst_15209);
var inst_15187 = inst_15229;
var inst_15188 = null;
var inst_15189 = (0);
var inst_15190 = (0);
var state_15310__$1 = (function (){var statearr_15320 = state_15310;
(statearr_15320[(13)] = inst_15188);

(statearr_15320[(14)] = inst_15187);

(statearr_15320[(15)] = inst_15189);

(statearr_15320[(16)] = inst_15190);

(statearr_15320[(17)] = inst_15228);

return statearr_15320;
})();
var statearr_15321_15407 = state_15310__$1;
(statearr_15321_15407[(2)] = null);

(statearr_15321_15407[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (39))){
var state_15310__$1 = state_15310;
var statearr_15325_15408 = state_15310__$1;
(statearr_15325_15408[(2)] = null);

(statearr_15325_15408[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (4))){
var inst_15178 = (state_15310[(12)]);
var inst_15178__$1 = (state_15310[(2)]);
var inst_15179 = (inst_15178__$1 == null);
var state_15310__$1 = (function (){var statearr_15326 = state_15310;
(statearr_15326[(12)] = inst_15178__$1);

return statearr_15326;
})();
if(cljs.core.truth_(inst_15179)){
var statearr_15327_15409 = state_15310__$1;
(statearr_15327_15409[(1)] = (5));

} else {
var statearr_15328_15410 = state_15310__$1;
(statearr_15328_15410[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (15))){
var inst_15188 = (state_15310[(13)]);
var inst_15187 = (state_15310[(14)]);
var inst_15189 = (state_15310[(15)]);
var inst_15190 = (state_15310[(16)]);
var inst_15205 = (state_15310[(2)]);
var inst_15206 = (inst_15190 + (1));
var tmp15322 = inst_15188;
var tmp15323 = inst_15187;
var tmp15324 = inst_15189;
var inst_15187__$1 = tmp15323;
var inst_15188__$1 = tmp15322;
var inst_15189__$1 = tmp15324;
var inst_15190__$1 = inst_15206;
var state_15310__$1 = (function (){var statearr_15329 = state_15310;
(statearr_15329[(18)] = inst_15205);

(statearr_15329[(13)] = inst_15188__$1);

(statearr_15329[(14)] = inst_15187__$1);

(statearr_15329[(15)] = inst_15189__$1);

(statearr_15329[(16)] = inst_15190__$1);

return statearr_15329;
})();
var statearr_15330_15411 = state_15310__$1;
(statearr_15330_15411[(2)] = null);

(statearr_15330_15411[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (21))){
var inst_15232 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15334_15412 = state_15310__$1;
(statearr_15334_15412[(2)] = inst_15232);

(statearr_15334_15412[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (31))){
var inst_15258 = (state_15310[(9)]);
var inst_15262 = done(null);
var inst_15263 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15258);
var state_15310__$1 = (function (){var statearr_15335 = state_15310;
(statearr_15335[(19)] = inst_15262);

return statearr_15335;
})();
var statearr_15336_15413 = state_15310__$1;
(statearr_15336_15413[(2)] = inst_15263);

(statearr_15336_15413[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (32))){
var inst_15250 = (state_15310[(20)]);
var inst_15252 = (state_15310[(21)]);
var inst_15253 = (state_15310[(10)]);
var inst_15251 = (state_15310[(11)]);
var inst_15265 = (state_15310[(2)]);
var inst_15266 = (inst_15253 + (1));
var tmp15331 = inst_15250;
var tmp15332 = inst_15252;
var tmp15333 = inst_15251;
var inst_15250__$1 = tmp15331;
var inst_15251__$1 = tmp15333;
var inst_15252__$1 = tmp15332;
var inst_15253__$1 = inst_15266;
var state_15310__$1 = (function (){var statearr_15337 = state_15310;
(statearr_15337[(20)] = inst_15250__$1);

(statearr_15337[(21)] = inst_15252__$1);

(statearr_15337[(22)] = inst_15265);

(statearr_15337[(10)] = inst_15253__$1);

(statearr_15337[(11)] = inst_15251__$1);

return statearr_15337;
})();
var statearr_15338_15414 = state_15310__$1;
(statearr_15338_15414[(2)] = null);

(statearr_15338_15414[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (40))){
var inst_15278 = (state_15310[(23)]);
var inst_15282 = done(null);
var inst_15283 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15278);
var state_15310__$1 = (function (){var statearr_15339 = state_15310;
(statearr_15339[(24)] = inst_15282);

return statearr_15339;
})();
var statearr_15340_15415 = state_15310__$1;
(statearr_15340_15415[(2)] = inst_15283);

(statearr_15340_15415[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (33))){
var inst_15269 = (state_15310[(25)]);
var inst_15271 = cljs.core.chunked_seq_QMARK_(inst_15269);
var state_15310__$1 = state_15310;
if(inst_15271){
var statearr_15341_15416 = state_15310__$1;
(statearr_15341_15416[(1)] = (36));

} else {
var statearr_15342_15417 = state_15310__$1;
(statearr_15342_15417[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (13))){
var inst_15199 = (state_15310[(26)]);
var inst_15202 = cljs.core.async.close_BANG_(inst_15199);
var state_15310__$1 = state_15310;
var statearr_15343_15418 = state_15310__$1;
(statearr_15343_15418[(2)] = inst_15202);

(statearr_15343_15418[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (22))){
var inst_15222 = (state_15310[(8)]);
var inst_15225 = cljs.core.async.close_BANG_(inst_15222);
var state_15310__$1 = state_15310;
var statearr_15344_15419 = state_15310__$1;
(statearr_15344_15419[(2)] = inst_15225);

(statearr_15344_15419[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (36))){
var inst_15269 = (state_15310[(25)]);
var inst_15273 = cljs.core.chunk_first(inst_15269);
var inst_15274 = cljs.core.chunk_rest(inst_15269);
var inst_15275 = cljs.core.count(inst_15273);
var inst_15250 = inst_15274;
var inst_15251 = inst_15273;
var inst_15252 = inst_15275;
var inst_15253 = (0);
var state_15310__$1 = (function (){var statearr_15345 = state_15310;
(statearr_15345[(20)] = inst_15250);

(statearr_15345[(21)] = inst_15252);

(statearr_15345[(10)] = inst_15253);

(statearr_15345[(11)] = inst_15251);

return statearr_15345;
})();
var statearr_15346_15420 = state_15310__$1;
(statearr_15346_15420[(2)] = null);

(statearr_15346_15420[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (41))){
var inst_15269 = (state_15310[(25)]);
var inst_15285 = (state_15310[(2)]);
var inst_15286 = cljs.core.next(inst_15269);
var inst_15250 = inst_15286;
var inst_15251 = null;
var inst_15252 = (0);
var inst_15253 = (0);
var state_15310__$1 = (function (){var statearr_15347 = state_15310;
(statearr_15347[(20)] = inst_15250);

(statearr_15347[(21)] = inst_15252);

(statearr_15347[(10)] = inst_15253);

(statearr_15347[(11)] = inst_15251);

(statearr_15347[(27)] = inst_15285);

return statearr_15347;
})();
var statearr_15348_15421 = state_15310__$1;
(statearr_15348_15421[(2)] = null);

(statearr_15348_15421[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (43))){
var state_15310__$1 = state_15310;
var statearr_15349_15422 = state_15310__$1;
(statearr_15349_15422[(2)] = null);

(statearr_15349_15422[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (29))){
var inst_15294 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15350_15423 = state_15310__$1;
(statearr_15350_15423[(2)] = inst_15294);

(statearr_15350_15423[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (44))){
var inst_15303 = (state_15310[(2)]);
var state_15310__$1 = (function (){var statearr_15351 = state_15310;
(statearr_15351[(28)] = inst_15303);

return statearr_15351;
})();
var statearr_15352_15424 = state_15310__$1;
(statearr_15352_15424[(2)] = null);

(statearr_15352_15424[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (6))){
var inst_15242 = (state_15310[(29)]);
var inst_15241 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15242__$1 = cljs.core.keys(inst_15241);
var inst_15243 = cljs.core.count(inst_15242__$1);
var inst_15244 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_15243) : cljs.core.reset_BANG_.call(null,dctr,inst_15243));
var inst_15249 = cljs.core.seq(inst_15242__$1);
var inst_15250 = inst_15249;
var inst_15251 = null;
var inst_15252 = (0);
var inst_15253 = (0);
var state_15310__$1 = (function (){var statearr_15353 = state_15310;
(statearr_15353[(20)] = inst_15250);

(statearr_15353[(30)] = inst_15244);

(statearr_15353[(21)] = inst_15252);

(statearr_15353[(10)] = inst_15253);

(statearr_15353[(11)] = inst_15251);

(statearr_15353[(29)] = inst_15242__$1);

return statearr_15353;
})();
var statearr_15354_15425 = state_15310__$1;
(statearr_15354_15425[(2)] = null);

(statearr_15354_15425[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (28))){
var inst_15250 = (state_15310[(20)]);
var inst_15269 = (state_15310[(25)]);
var inst_15269__$1 = cljs.core.seq(inst_15250);
var state_15310__$1 = (function (){var statearr_15355 = state_15310;
(statearr_15355[(25)] = inst_15269__$1);

return statearr_15355;
})();
if(inst_15269__$1){
var statearr_15356_15426 = state_15310__$1;
(statearr_15356_15426[(1)] = (33));

} else {
var statearr_15357_15427 = state_15310__$1;
(statearr_15357_15427[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (25))){
var inst_15252 = (state_15310[(21)]);
var inst_15253 = (state_15310[(10)]);
var inst_15255 = (inst_15253 < inst_15252);
var inst_15256 = inst_15255;
var state_15310__$1 = state_15310;
if(cljs.core.truth_(inst_15256)){
var statearr_15358_15428 = state_15310__$1;
(statearr_15358_15428[(1)] = (27));

} else {
var statearr_15359_15429 = state_15310__$1;
(statearr_15359_15429[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (34))){
var state_15310__$1 = state_15310;
var statearr_15360_15430 = state_15310__$1;
(statearr_15360_15430[(2)] = null);

(statearr_15360_15430[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (17))){
var state_15310__$1 = state_15310;
var statearr_15361_15431 = state_15310__$1;
(statearr_15361_15431[(2)] = null);

(statearr_15361_15431[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (3))){
var inst_15308 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15310__$1,inst_15308);
} else {
if((state_val_15311 === (12))){
var inst_15237 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15362_15432 = state_15310__$1;
(statearr_15362_15432[(2)] = inst_15237);

(statearr_15362_15432[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (2))){
var state_15310__$1 = state_15310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15310__$1,(4),ch);
} else {
if((state_val_15311 === (23))){
var state_15310__$1 = state_15310;
var statearr_15363_15433 = state_15310__$1;
(statearr_15363_15433[(2)] = null);

(statearr_15363_15433[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (35))){
var inst_15292 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15364_15434 = state_15310__$1;
(statearr_15364_15434[(2)] = inst_15292);

(statearr_15364_15434[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (19))){
var inst_15209 = (state_15310[(7)]);
var inst_15213 = cljs.core.chunk_first(inst_15209);
var inst_15214 = cljs.core.chunk_rest(inst_15209);
var inst_15215 = cljs.core.count(inst_15213);
var inst_15187 = inst_15214;
var inst_15188 = inst_15213;
var inst_15189 = inst_15215;
var inst_15190 = (0);
var state_15310__$1 = (function (){var statearr_15365 = state_15310;
(statearr_15365[(13)] = inst_15188);

(statearr_15365[(14)] = inst_15187);

(statearr_15365[(15)] = inst_15189);

(statearr_15365[(16)] = inst_15190);

return statearr_15365;
})();
var statearr_15366_15435 = state_15310__$1;
(statearr_15366_15435[(2)] = null);

(statearr_15366_15435[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (11))){
var inst_15187 = (state_15310[(14)]);
var inst_15209 = (state_15310[(7)]);
var inst_15209__$1 = cljs.core.seq(inst_15187);
var state_15310__$1 = (function (){var statearr_15367 = state_15310;
(statearr_15367[(7)] = inst_15209__$1);

return statearr_15367;
})();
if(inst_15209__$1){
var statearr_15368_15436 = state_15310__$1;
(statearr_15368_15436[(1)] = (16));

} else {
var statearr_15369_15437 = state_15310__$1;
(statearr_15369_15437[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (9))){
var inst_15239 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15370_15438 = state_15310__$1;
(statearr_15370_15438[(2)] = inst_15239);

(statearr_15370_15438[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (5))){
var inst_15185 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15186 = cljs.core.seq(inst_15185);
var inst_15187 = inst_15186;
var inst_15188 = null;
var inst_15189 = (0);
var inst_15190 = (0);
var state_15310__$1 = (function (){var statearr_15371 = state_15310;
(statearr_15371[(13)] = inst_15188);

(statearr_15371[(14)] = inst_15187);

(statearr_15371[(15)] = inst_15189);

(statearr_15371[(16)] = inst_15190);

return statearr_15371;
})();
var statearr_15372_15439 = state_15310__$1;
(statearr_15372_15439[(2)] = null);

(statearr_15372_15439[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (14))){
var state_15310__$1 = state_15310;
var statearr_15373_15440 = state_15310__$1;
(statearr_15373_15440[(2)] = null);

(statearr_15373_15440[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (45))){
var inst_15300 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15374_15441 = state_15310__$1;
(statearr_15374_15441[(2)] = inst_15300);

(statearr_15374_15441[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (26))){
var inst_15242 = (state_15310[(29)]);
var inst_15296 = (state_15310[(2)]);
var inst_15297 = cljs.core.seq(inst_15242);
var state_15310__$1 = (function (){var statearr_15375 = state_15310;
(statearr_15375[(31)] = inst_15296);

return statearr_15375;
})();
if(inst_15297){
var statearr_15376_15442 = state_15310__$1;
(statearr_15376_15442[(1)] = (42));

} else {
var statearr_15377_15443 = state_15310__$1;
(statearr_15377_15443[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (16))){
var inst_15209 = (state_15310[(7)]);
var inst_15211 = cljs.core.chunked_seq_QMARK_(inst_15209);
var state_15310__$1 = state_15310;
if(inst_15211){
var statearr_15378_15444 = state_15310__$1;
(statearr_15378_15444[(1)] = (19));

} else {
var statearr_15379_15445 = state_15310__$1;
(statearr_15379_15445[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (38))){
var inst_15289 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15380_15446 = state_15310__$1;
(statearr_15380_15446[(2)] = inst_15289);

(statearr_15380_15446[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (30))){
var state_15310__$1 = state_15310;
var statearr_15381_15447 = state_15310__$1;
(statearr_15381_15447[(2)] = null);

(statearr_15381_15447[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (10))){
var inst_15188 = (state_15310[(13)]);
var inst_15190 = (state_15310[(16)]);
var inst_15198 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15188,inst_15190);
var inst_15199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15198,(0),null);
var inst_15200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15198,(1),null);
var state_15310__$1 = (function (){var statearr_15382 = state_15310;
(statearr_15382[(26)] = inst_15199);

return statearr_15382;
})();
if(cljs.core.truth_(inst_15200)){
var statearr_15383_15448 = state_15310__$1;
(statearr_15383_15448[(1)] = (13));

} else {
var statearr_15384_15449 = state_15310__$1;
(statearr_15384_15449[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (18))){
var inst_15235 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15385_15450 = state_15310__$1;
(statearr_15385_15450[(2)] = inst_15235);

(statearr_15385_15450[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (42))){
var state_15310__$1 = state_15310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15310__$1,(45),dchan);
} else {
if((state_val_15311 === (37))){
var inst_15269 = (state_15310[(25)]);
var inst_15178 = (state_15310[(12)]);
var inst_15278 = (state_15310[(23)]);
var inst_15278__$1 = cljs.core.first(inst_15269);
var inst_15279 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15278__$1,inst_15178,done);
var state_15310__$1 = (function (){var statearr_15386 = state_15310;
(statearr_15386[(23)] = inst_15278__$1);

return statearr_15386;
})();
if(cljs.core.truth_(inst_15279)){
var statearr_15387_15451 = state_15310__$1;
(statearr_15387_15451[(1)] = (39));

} else {
var statearr_15388_15452 = state_15310__$1;
(statearr_15388_15452[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15311 === (8))){
var inst_15189 = (state_15310[(15)]);
var inst_15190 = (state_15310[(16)]);
var inst_15192 = (inst_15190 < inst_15189);
var inst_15193 = inst_15192;
var state_15310__$1 = state_15310;
if(cljs.core.truth_(inst_15193)){
var statearr_15389_15453 = state_15310__$1;
(statearr_15389_15453[(1)] = (10));

} else {
var statearr_15390_15454 = state_15310__$1;
(statearr_15390_15454[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___15400,cs,m,dchan,dctr,done))
;
return ((function (switch__13951__auto__,c__14065__auto___15400,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13952__auto__ = null;
var cljs$core$async$mult_$_state_machine__13952__auto____0 = (function (){
var statearr_15394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15394[(0)] = cljs$core$async$mult_$_state_machine__13952__auto__);

(statearr_15394[(1)] = (1));

return statearr_15394;
});
var cljs$core$async$mult_$_state_machine__13952__auto____1 = (function (state_15310){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_15310);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e15395){if((e15395 instanceof Object)){
var ex__13955__auto__ = e15395;
var statearr_15396_15455 = state_15310;
(statearr_15396_15455[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15310);

return cljs.core.cst$kw$recur;
} else {
throw e15395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__15456 = state_15310;
state_15310 = G__15456;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13952__auto__ = function(state_15310){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13952__auto____1.call(this,state_15310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13952__auto____0;
cljs$core$async$mult_$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13952__auto____1;
return cljs$core$async$mult_$_state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___15400,cs,m,dchan,dctr,done))
})();
var state__14067__auto__ = (function (){var statearr_15397 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_15397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___15400);

return statearr_15397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___15400,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15457 = [];
var len__7322__auto___15460 = arguments.length;
var i__7323__auto___15461 = (0);
while(true){
if((i__7323__auto___15461 < len__7322__auto___15460)){
args15457.push((arguments[i__7323__auto___15461]));

var G__15462 = (i__7323__auto___15461 + (1));
i__7323__auto___15461 = G__15462;
continue;
} else {
}
break;
}

var G__15459 = args15457.length;
switch (G__15459) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15457.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6911__auto__.call(null,m,ch));
} else {
var m__6911__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6911__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6911__auto__.call(null,m,ch));
} else {
var m__6911__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6911__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6911__auto__.call(null,m));
} else {
var m__6911__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6911__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6911__auto__.call(null,m,state_map));
} else {
var m__6911__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6911__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6910__auto__ = (((m == null))?null:m);
var m__6911__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6911__auto__.call(null,m,mode));
} else {
var m__6911__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6911__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7329__auto__ = [];
var len__7322__auto___15474 = arguments.length;
var i__7323__auto___15475 = (0);
while(true){
if((i__7323__auto___15475 < len__7322__auto___15474)){
args__7329__auto__.push((arguments[i__7323__auto___15475]));

var G__15476 = (i__7323__auto___15475 + (1));
i__7323__auto___15475 = G__15476;
continue;
} else {
}
break;
}

var argseq__7330__auto__ = ((((3) < args__7329__auto__.length))?(new cljs.core.IndexedSeq(args__7329__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7330__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15468){
var map__15469 = p__15468;
var map__15469__$1 = ((((!((map__15469 == null)))?((((map__15469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15469):map__15469);
var opts = map__15469__$1;
var statearr_15471_15477 = state;
(statearr_15471_15477[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__15469,map__15469__$1,opts){
return (function (val){
var statearr_15472_15478 = state;
(statearr_15472_15478[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__15469,map__15469__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15473_15479 = state;
(statearr_15473_15479[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15464){
var G__15465 = cljs.core.first(seq15464);
var seq15464__$1 = cljs.core.next(seq15464);
var G__15466 = cljs.core.first(seq15464__$1);
var seq15464__$2 = cljs.core.next(seq15464__$1);
var G__15467 = cljs.core.first(seq15464__$2);
var seq15464__$3 = cljs.core.next(seq15464__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15465,G__15466,G__15467,seq15464__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__15648 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15648) : cljs.core.atom.call(null,G__15648));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15649 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15650){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15650 = meta15650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15651,meta15650__$1){
var self__ = this;
var _15651__$1 = this;
return (new cljs.core.async.t_cljs$core$async15649(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15650__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15651){
var self__ = this;
var _15651__$1 = this;
return self__.meta15650;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15649.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15649.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15649.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15649.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15649.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15652_15816 = self__.cs;
var G__15653_15817 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15652_15816,G__15653_15817) : cljs.core.reset_BANG_.call(null,G__15652_15816,G__15653_15817));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15649.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15649.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15649.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta15650], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15649";

cljs.core.async.t_cljs$core$async15649.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write(writer__6854__auto__,"cljs.core.async/t_cljs$core$async15649");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15649 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15649(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15650){
return (new cljs.core.async.t_cljs$core$async15649(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15650));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15649(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14065__auto___15818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___15818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___15818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15753){
var state_val_15754 = (state_15753[(1)]);
if((state_val_15754 === (7))){
var inst_15669 = (state_15753[(2)]);
var state_15753__$1 = state_15753;
var statearr_15755_15819 = state_15753__$1;
(statearr_15755_15819[(2)] = inst_15669);

(statearr_15755_15819[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (20))){
var inst_15681 = (state_15753[(7)]);
var state_15753__$1 = state_15753;
var statearr_15756_15820 = state_15753__$1;
(statearr_15756_15820[(2)] = inst_15681);

(statearr_15756_15820[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (27))){
var state_15753__$1 = state_15753;
var statearr_15757_15821 = state_15753__$1;
(statearr_15757_15821[(2)] = null);

(statearr_15757_15821[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (1))){
var inst_15657 = (state_15753[(8)]);
var inst_15657__$1 = calc_state();
var inst_15659 = (inst_15657__$1 == null);
var inst_15660 = cljs.core.not(inst_15659);
var state_15753__$1 = (function (){var statearr_15758 = state_15753;
(statearr_15758[(8)] = inst_15657__$1);

return statearr_15758;
})();
if(inst_15660){
var statearr_15759_15822 = state_15753__$1;
(statearr_15759_15822[(1)] = (2));

} else {
var statearr_15760_15823 = state_15753__$1;
(statearr_15760_15823[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (24))){
var inst_15704 = (state_15753[(9)]);
var inst_15727 = (state_15753[(10)]);
var inst_15713 = (state_15753[(11)]);
var inst_15727__$1 = (inst_15704.cljs$core$IFn$_invoke$arity$1 ? inst_15704.cljs$core$IFn$_invoke$arity$1(inst_15713) : inst_15704.call(null,inst_15713));
var state_15753__$1 = (function (){var statearr_15761 = state_15753;
(statearr_15761[(10)] = inst_15727__$1);

return statearr_15761;
})();
if(cljs.core.truth_(inst_15727__$1)){
var statearr_15762_15824 = state_15753__$1;
(statearr_15762_15824[(1)] = (29));

} else {
var statearr_15763_15825 = state_15753__$1;
(statearr_15763_15825[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (4))){
var inst_15672 = (state_15753[(2)]);
var state_15753__$1 = state_15753;
if(cljs.core.truth_(inst_15672)){
var statearr_15764_15826 = state_15753__$1;
(statearr_15764_15826[(1)] = (8));

} else {
var statearr_15765_15827 = state_15753__$1;
(statearr_15765_15827[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (15))){
var inst_15698 = (state_15753[(2)]);
var state_15753__$1 = state_15753;
if(cljs.core.truth_(inst_15698)){
var statearr_15766_15828 = state_15753__$1;
(statearr_15766_15828[(1)] = (19));

} else {
var statearr_15767_15829 = state_15753__$1;
(statearr_15767_15829[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (21))){
var inst_15703 = (state_15753[(12)]);
var inst_15703__$1 = (state_15753[(2)]);
var inst_15704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15703__$1,cljs.core.cst$kw$solos);
var inst_15705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15703__$1,cljs.core.cst$kw$mutes);
var inst_15706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15703__$1,cljs.core.cst$kw$reads);
var state_15753__$1 = (function (){var statearr_15768 = state_15753;
(statearr_15768[(9)] = inst_15704);

(statearr_15768[(12)] = inst_15703__$1);

(statearr_15768[(13)] = inst_15705);

return statearr_15768;
})();
return cljs.core.async.ioc_alts_BANG_(state_15753__$1,(22),inst_15706);
} else {
if((state_val_15754 === (31))){
var inst_15735 = (state_15753[(2)]);
var state_15753__$1 = state_15753;
if(cljs.core.truth_(inst_15735)){
var statearr_15769_15830 = state_15753__$1;
(statearr_15769_15830[(1)] = (32));

} else {
var statearr_15770_15831 = state_15753__$1;
(statearr_15770_15831[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (32))){
var inst_15712 = (state_15753[(14)]);
var state_15753__$1 = state_15753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15753__$1,(35),out,inst_15712);
} else {
if((state_val_15754 === (33))){
var inst_15703 = (state_15753[(12)]);
var inst_15681 = inst_15703;
var state_15753__$1 = (function (){var statearr_15771 = state_15753;
(statearr_15771[(7)] = inst_15681);

return statearr_15771;
})();
var statearr_15772_15832 = state_15753__$1;
(statearr_15772_15832[(2)] = null);

(statearr_15772_15832[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (13))){
var inst_15681 = (state_15753[(7)]);
var inst_15688 = inst_15681.cljs$lang$protocol_mask$partition0$;
var inst_15689 = (inst_15688 & (64));
var inst_15690 = inst_15681.cljs$core$ISeq$;
var inst_15691 = (inst_15689) || (inst_15690);
var state_15753__$1 = state_15753;
if(cljs.core.truth_(inst_15691)){
var statearr_15773_15833 = state_15753__$1;
(statearr_15773_15833[(1)] = (16));

} else {
var statearr_15774_15834 = state_15753__$1;
(statearr_15774_15834[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (22))){
var inst_15713 = (state_15753[(11)]);
var inst_15712 = (state_15753[(14)]);
var inst_15711 = (state_15753[(2)]);
var inst_15712__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15711,(0),null);
var inst_15713__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15711,(1),null);
var inst_15714 = (inst_15712__$1 == null);
var inst_15715 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15713__$1,change);
var inst_15716 = (inst_15714) || (inst_15715);
var state_15753__$1 = (function (){var statearr_15775 = state_15753;
(statearr_15775[(11)] = inst_15713__$1);

(statearr_15775[(14)] = inst_15712__$1);

return statearr_15775;
})();
if(cljs.core.truth_(inst_15716)){
var statearr_15776_15835 = state_15753__$1;
(statearr_15776_15835[(1)] = (23));

} else {
var statearr_15777_15836 = state_15753__$1;
(statearr_15777_15836[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (36))){
var inst_15703 = (state_15753[(12)]);
var inst_15681 = inst_15703;
var state_15753__$1 = (function (){var statearr_15778 = state_15753;
(statearr_15778[(7)] = inst_15681);

return statearr_15778;
})();
var statearr_15779_15837 = state_15753__$1;
(statearr_15779_15837[(2)] = null);

(statearr_15779_15837[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (29))){
var inst_15727 = (state_15753[(10)]);
var state_15753__$1 = state_15753;
var statearr_15780_15838 = state_15753__$1;
(statearr_15780_15838[(2)] = inst_15727);

(statearr_15780_15838[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (6))){
var state_15753__$1 = state_15753;
var statearr_15781_15839 = state_15753__$1;
(statearr_15781_15839[(2)] = false);

(statearr_15781_15839[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (28))){
var inst_15723 = (state_15753[(2)]);
var inst_15724 = calc_state();
var inst_15681 = inst_15724;
var state_15753__$1 = (function (){var statearr_15782 = state_15753;
(statearr_15782[(15)] = inst_15723);

(statearr_15782[(7)] = inst_15681);

return statearr_15782;
})();
var statearr_15783_15840 = state_15753__$1;
(statearr_15783_15840[(2)] = null);

(statearr_15783_15840[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (25))){
var inst_15749 = (state_15753[(2)]);
var state_15753__$1 = state_15753;
var statearr_15784_15841 = state_15753__$1;
(statearr_15784_15841[(2)] = inst_15749);

(statearr_15784_15841[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (34))){
var inst_15747 = (state_15753[(2)]);
var state_15753__$1 = state_15753;
var statearr_15785_15842 = state_15753__$1;
(statearr_15785_15842[(2)] = inst_15747);

(statearr_15785_15842[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (17))){
var state_15753__$1 = state_15753;
var statearr_15786_15843 = state_15753__$1;
(statearr_15786_15843[(2)] = false);

(statearr_15786_15843[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (3))){
var state_15753__$1 = state_15753;
var statearr_15787_15844 = state_15753__$1;
(statearr_15787_15844[(2)] = false);

(statearr_15787_15844[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (12))){
var inst_15751 = (state_15753[(2)]);
var state_15753__$1 = state_15753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15753__$1,inst_15751);
} else {
if((state_val_15754 === (2))){
var inst_15657 = (state_15753[(8)]);
var inst_15662 = inst_15657.cljs$lang$protocol_mask$partition0$;
var inst_15663 = (inst_15662 & (64));
var inst_15664 = inst_15657.cljs$core$ISeq$;
var inst_15665 = (inst_15663) || (inst_15664);
var state_15753__$1 = state_15753;
if(cljs.core.truth_(inst_15665)){
var statearr_15788_15845 = state_15753__$1;
(statearr_15788_15845[(1)] = (5));

} else {
var statearr_15789_15846 = state_15753__$1;
(statearr_15789_15846[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (23))){
var inst_15712 = (state_15753[(14)]);
var inst_15718 = (inst_15712 == null);
var state_15753__$1 = state_15753;
if(cljs.core.truth_(inst_15718)){
var statearr_15790_15847 = state_15753__$1;
(statearr_15790_15847[(1)] = (26));

} else {
var statearr_15791_15848 = state_15753__$1;
(statearr_15791_15848[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (35))){
var inst_15738 = (state_15753[(2)]);
var state_15753__$1 = state_15753;
if(cljs.core.truth_(inst_15738)){
var statearr_15792_15849 = state_15753__$1;
(statearr_15792_15849[(1)] = (36));

} else {
var statearr_15793_15850 = state_15753__$1;
(statearr_15793_15850[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (19))){
var inst_15681 = (state_15753[(7)]);
var inst_15700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15681);
var state_15753__$1 = state_15753;
var statearr_15794_15851 = state_15753__$1;
(statearr_15794_15851[(2)] = inst_15700);

(statearr_15794_15851[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (11))){
var inst_15681 = (state_15753[(7)]);
var inst_15685 = (inst_15681 == null);
var inst_15686 = cljs.core.not(inst_15685);
var state_15753__$1 = state_15753;
if(inst_15686){
var statearr_15795_15852 = state_15753__$1;
(statearr_15795_15852[(1)] = (13));

} else {
var statearr_15796_15853 = state_15753__$1;
(statearr_15796_15853[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (9))){
var inst_15657 = (state_15753[(8)]);
var state_15753__$1 = state_15753;
var statearr_15797_15854 = state_15753__$1;
(statearr_15797_15854[(2)] = inst_15657);

(statearr_15797_15854[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (5))){
var state_15753__$1 = state_15753;
var statearr_15798_15855 = state_15753__$1;
(statearr_15798_15855[(2)] = true);

(statearr_15798_15855[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (14))){
var state_15753__$1 = state_15753;
var statearr_15799_15856 = state_15753__$1;
(statearr_15799_15856[(2)] = false);

(statearr_15799_15856[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (26))){
var inst_15713 = (state_15753[(11)]);
var inst_15720 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15713);
var state_15753__$1 = state_15753;
var statearr_15800_15857 = state_15753__$1;
(statearr_15800_15857[(2)] = inst_15720);

(statearr_15800_15857[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (16))){
var state_15753__$1 = state_15753;
var statearr_15801_15858 = state_15753__$1;
(statearr_15801_15858[(2)] = true);

(statearr_15801_15858[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (38))){
var inst_15743 = (state_15753[(2)]);
var state_15753__$1 = state_15753;
var statearr_15802_15859 = state_15753__$1;
(statearr_15802_15859[(2)] = inst_15743);

(statearr_15802_15859[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (30))){
var inst_15704 = (state_15753[(9)]);
var inst_15713 = (state_15753[(11)]);
var inst_15705 = (state_15753[(13)]);
var inst_15730 = cljs.core.empty_QMARK_(inst_15704);
var inst_15731 = (inst_15705.cljs$core$IFn$_invoke$arity$1 ? inst_15705.cljs$core$IFn$_invoke$arity$1(inst_15713) : inst_15705.call(null,inst_15713));
var inst_15732 = cljs.core.not(inst_15731);
var inst_15733 = (inst_15730) && (inst_15732);
var state_15753__$1 = state_15753;
var statearr_15803_15860 = state_15753__$1;
(statearr_15803_15860[(2)] = inst_15733);

(statearr_15803_15860[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (10))){
var inst_15657 = (state_15753[(8)]);
var inst_15677 = (state_15753[(2)]);
var inst_15678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15677,cljs.core.cst$kw$solos);
var inst_15679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15677,cljs.core.cst$kw$mutes);
var inst_15680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15677,cljs.core.cst$kw$reads);
var inst_15681 = inst_15657;
var state_15753__$1 = (function (){var statearr_15804 = state_15753;
(statearr_15804[(16)] = inst_15678);

(statearr_15804[(7)] = inst_15681);

(statearr_15804[(17)] = inst_15679);

(statearr_15804[(18)] = inst_15680);

return statearr_15804;
})();
var statearr_15805_15861 = state_15753__$1;
(statearr_15805_15861[(2)] = null);

(statearr_15805_15861[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (18))){
var inst_15695 = (state_15753[(2)]);
var state_15753__$1 = state_15753;
var statearr_15806_15862 = state_15753__$1;
(statearr_15806_15862[(2)] = inst_15695);

(statearr_15806_15862[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (37))){
var state_15753__$1 = state_15753;
var statearr_15807_15863 = state_15753__$1;
(statearr_15807_15863[(2)] = null);

(statearr_15807_15863[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15754 === (8))){
var inst_15657 = (state_15753[(8)]);
var inst_15674 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15657);
var state_15753__$1 = state_15753;
var statearr_15808_15864 = state_15753__$1;
(statearr_15808_15864[(2)] = inst_15674);

(statearr_15808_15864[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___15818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13951__auto__,c__14065__auto___15818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13952__auto__ = null;
var cljs$core$async$mix_$_state_machine__13952__auto____0 = (function (){
var statearr_15812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15812[(0)] = cljs$core$async$mix_$_state_machine__13952__auto__);

(statearr_15812[(1)] = (1));

return statearr_15812;
});
var cljs$core$async$mix_$_state_machine__13952__auto____1 = (function (state_15753){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_15753);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e15813){if((e15813 instanceof Object)){
var ex__13955__auto__ = e15813;
var statearr_15814_15865 = state_15753;
(statearr_15814_15865[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15753);

return cljs.core.cst$kw$recur;
} else {
throw e15813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__15866 = state_15753;
state_15753 = G__15866;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13952__auto__ = function(state_15753){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13952__auto____1.call(this,state_15753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13952__auto____0;
cljs$core$async$mix_$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13952__auto____1;
return cljs$core$async$mix_$_state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___15818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14067__auto__ = (function (){var statearr_15815 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_15815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___15818);

return statearr_15815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___15818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6910__auto__ = (((p == null))?null:p);
var m__6911__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6911__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__6911__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6911__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6910__auto__ = (((p == null))?null:p);
var m__6911__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6911__auto__.call(null,p,v,ch));
} else {
var m__6911__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6911__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15867 = [];
var len__7322__auto___15870 = arguments.length;
var i__7323__auto___15871 = (0);
while(true){
if((i__7323__auto___15871 < len__7322__auto___15870)){
args15867.push((arguments[i__7323__auto___15871]));

var G__15872 = (i__7323__auto___15871 + (1));
i__7323__auto___15871 = G__15872;
continue;
} else {
}
break;
}

var G__15869 = args15867.length;
switch (G__15869) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15867.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6910__auto__ = (((p == null))?null:p);
var m__6911__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__6911__auto__.call(null,p));
} else {
var m__6911__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__6911__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6910__auto__ = (((p == null))?null:p);
var m__6911__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6910__auto__)]);
if(!((m__6911__auto__ == null))){
return (m__6911__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6911__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__6911__auto__.call(null,p,v));
} else {
var m__6911__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6911__auto____$1 == null))){
return (m__6911__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6911__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__6911__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args15875 = [];
var len__7322__auto___16003 = arguments.length;
var i__7323__auto___16004 = (0);
while(true){
if((i__7323__auto___16004 < len__7322__auto___16003)){
args15875.push((arguments[i__7323__auto___16004]));

var G__16005 = (i__7323__auto___16004 + (1));
i__7323__auto___16004 = G__16005;
continue;
} else {
}
break;
}

var G__15877 = args15875.length;
switch (G__15877) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15875.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__15878 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15878) : cljs.core.atom.call(null,G__15878));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6247__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6247__auto__,mults){
return (function (p1__15874_SHARP_){
if(cljs.core.truth_((p1__15874_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15874_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15874_SHARP_.call(null,topic)))){
return p1__15874_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15874_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6247__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15879 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15880){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15880 = meta15880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15881,meta15880__$1){
var self__ = this;
var _15881__$1 = this;
return (new cljs.core.async.t_cljs$core$async15879(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15880__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15881){
var self__ = this;
var _15881__$1 = this;
return self__.meta15880;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15882 = self__.mults;
var G__15883 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15882,G__15883) : cljs.core.reset_BANG_.call(null,G__15882,G__15883));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15879.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15879.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta15880], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15879";

cljs.core.async.t_cljs$core$async15879.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write(writer__6854__auto__,"cljs.core.async/t_cljs$core$async15879");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15879 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15879(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15880){
return (new cljs.core.async.t_cljs$core$async15879(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15880));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15879(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14065__auto___16007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___16007,mults,ensure_mult,p){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___16007,mults,ensure_mult,p){
return (function (state_15955){
var state_val_15956 = (state_15955[(1)]);
if((state_val_15956 === (7))){
var inst_15951 = (state_15955[(2)]);
var state_15955__$1 = state_15955;
var statearr_15957_16008 = state_15955__$1;
(statearr_15957_16008[(2)] = inst_15951);

(statearr_15957_16008[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (20))){
var state_15955__$1 = state_15955;
var statearr_15958_16009 = state_15955__$1;
(statearr_15958_16009[(2)] = null);

(statearr_15958_16009[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (1))){
var state_15955__$1 = state_15955;
var statearr_15959_16010 = state_15955__$1;
(statearr_15959_16010[(2)] = null);

(statearr_15959_16010[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (24))){
var inst_15934 = (state_15955[(7)]);
var inst_15943 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15934);
var state_15955__$1 = state_15955;
var statearr_15960_16011 = state_15955__$1;
(statearr_15960_16011[(2)] = inst_15943);

(statearr_15960_16011[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (4))){
var inst_15886 = (state_15955[(8)]);
var inst_15886__$1 = (state_15955[(2)]);
var inst_15887 = (inst_15886__$1 == null);
var state_15955__$1 = (function (){var statearr_15961 = state_15955;
(statearr_15961[(8)] = inst_15886__$1);

return statearr_15961;
})();
if(cljs.core.truth_(inst_15887)){
var statearr_15962_16012 = state_15955__$1;
(statearr_15962_16012[(1)] = (5));

} else {
var statearr_15963_16013 = state_15955__$1;
(statearr_15963_16013[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (15))){
var inst_15928 = (state_15955[(2)]);
var state_15955__$1 = state_15955;
var statearr_15964_16014 = state_15955__$1;
(statearr_15964_16014[(2)] = inst_15928);

(statearr_15964_16014[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (21))){
var inst_15948 = (state_15955[(2)]);
var state_15955__$1 = (function (){var statearr_15965 = state_15955;
(statearr_15965[(9)] = inst_15948);

return statearr_15965;
})();
var statearr_15966_16015 = state_15955__$1;
(statearr_15966_16015[(2)] = null);

(statearr_15966_16015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (13))){
var inst_15910 = (state_15955[(10)]);
var inst_15912 = cljs.core.chunked_seq_QMARK_(inst_15910);
var state_15955__$1 = state_15955;
if(inst_15912){
var statearr_15967_16016 = state_15955__$1;
(statearr_15967_16016[(1)] = (16));

} else {
var statearr_15968_16017 = state_15955__$1;
(statearr_15968_16017[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (22))){
var inst_15940 = (state_15955[(2)]);
var state_15955__$1 = state_15955;
if(cljs.core.truth_(inst_15940)){
var statearr_15969_16018 = state_15955__$1;
(statearr_15969_16018[(1)] = (23));

} else {
var statearr_15970_16019 = state_15955__$1;
(statearr_15970_16019[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (6))){
var inst_15886 = (state_15955[(8)]);
var inst_15936 = (state_15955[(11)]);
var inst_15934 = (state_15955[(7)]);
var inst_15934__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15886) : topic_fn.call(null,inst_15886));
var inst_15935 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15936__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15935,inst_15934__$1);
var state_15955__$1 = (function (){var statearr_15971 = state_15955;
(statearr_15971[(11)] = inst_15936__$1);

(statearr_15971[(7)] = inst_15934__$1);

return statearr_15971;
})();
if(cljs.core.truth_(inst_15936__$1)){
var statearr_15972_16020 = state_15955__$1;
(statearr_15972_16020[(1)] = (19));

} else {
var statearr_15973_16021 = state_15955__$1;
(statearr_15973_16021[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (25))){
var inst_15945 = (state_15955[(2)]);
var state_15955__$1 = state_15955;
var statearr_15974_16022 = state_15955__$1;
(statearr_15974_16022[(2)] = inst_15945);

(statearr_15974_16022[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (17))){
var inst_15910 = (state_15955[(10)]);
var inst_15919 = cljs.core.first(inst_15910);
var inst_15920 = cljs.core.async.muxch_STAR_(inst_15919);
var inst_15921 = cljs.core.async.close_BANG_(inst_15920);
var inst_15922 = cljs.core.next(inst_15910);
var inst_15896 = inst_15922;
var inst_15897 = null;
var inst_15898 = (0);
var inst_15899 = (0);
var state_15955__$1 = (function (){var statearr_15975 = state_15955;
(statearr_15975[(12)] = inst_15921);

(statearr_15975[(13)] = inst_15896);

(statearr_15975[(14)] = inst_15899);

(statearr_15975[(15)] = inst_15897);

(statearr_15975[(16)] = inst_15898);

return statearr_15975;
})();
var statearr_15976_16023 = state_15955__$1;
(statearr_15976_16023[(2)] = null);

(statearr_15976_16023[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (3))){
var inst_15953 = (state_15955[(2)]);
var state_15955__$1 = state_15955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15955__$1,inst_15953);
} else {
if((state_val_15956 === (12))){
var inst_15930 = (state_15955[(2)]);
var state_15955__$1 = state_15955;
var statearr_15977_16024 = state_15955__$1;
(statearr_15977_16024[(2)] = inst_15930);

(statearr_15977_16024[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (2))){
var state_15955__$1 = state_15955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15955__$1,(4),ch);
} else {
if((state_val_15956 === (23))){
var state_15955__$1 = state_15955;
var statearr_15978_16025 = state_15955__$1;
(statearr_15978_16025[(2)] = null);

(statearr_15978_16025[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (19))){
var inst_15886 = (state_15955[(8)]);
var inst_15936 = (state_15955[(11)]);
var inst_15938 = cljs.core.async.muxch_STAR_(inst_15936);
var state_15955__$1 = state_15955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15955__$1,(22),inst_15938,inst_15886);
} else {
if((state_val_15956 === (11))){
var inst_15910 = (state_15955[(10)]);
var inst_15896 = (state_15955[(13)]);
var inst_15910__$1 = cljs.core.seq(inst_15896);
var state_15955__$1 = (function (){var statearr_15979 = state_15955;
(statearr_15979[(10)] = inst_15910__$1);

return statearr_15979;
})();
if(inst_15910__$1){
var statearr_15980_16026 = state_15955__$1;
(statearr_15980_16026[(1)] = (13));

} else {
var statearr_15981_16027 = state_15955__$1;
(statearr_15981_16027[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (9))){
var inst_15932 = (state_15955[(2)]);
var state_15955__$1 = state_15955;
var statearr_15982_16028 = state_15955__$1;
(statearr_15982_16028[(2)] = inst_15932);

(statearr_15982_16028[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (5))){
var inst_15893 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15894 = cljs.core.vals(inst_15893);
var inst_15895 = cljs.core.seq(inst_15894);
var inst_15896 = inst_15895;
var inst_15897 = null;
var inst_15898 = (0);
var inst_15899 = (0);
var state_15955__$1 = (function (){var statearr_15983 = state_15955;
(statearr_15983[(13)] = inst_15896);

(statearr_15983[(14)] = inst_15899);

(statearr_15983[(15)] = inst_15897);

(statearr_15983[(16)] = inst_15898);

return statearr_15983;
})();
var statearr_15984_16029 = state_15955__$1;
(statearr_15984_16029[(2)] = null);

(statearr_15984_16029[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (14))){
var state_15955__$1 = state_15955;
var statearr_15988_16030 = state_15955__$1;
(statearr_15988_16030[(2)] = null);

(statearr_15988_16030[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (16))){
var inst_15910 = (state_15955[(10)]);
var inst_15914 = cljs.core.chunk_first(inst_15910);
var inst_15915 = cljs.core.chunk_rest(inst_15910);
var inst_15916 = cljs.core.count(inst_15914);
var inst_15896 = inst_15915;
var inst_15897 = inst_15914;
var inst_15898 = inst_15916;
var inst_15899 = (0);
var state_15955__$1 = (function (){var statearr_15989 = state_15955;
(statearr_15989[(13)] = inst_15896);

(statearr_15989[(14)] = inst_15899);

(statearr_15989[(15)] = inst_15897);

(statearr_15989[(16)] = inst_15898);

return statearr_15989;
})();
var statearr_15990_16031 = state_15955__$1;
(statearr_15990_16031[(2)] = null);

(statearr_15990_16031[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (10))){
var inst_15896 = (state_15955[(13)]);
var inst_15899 = (state_15955[(14)]);
var inst_15897 = (state_15955[(15)]);
var inst_15898 = (state_15955[(16)]);
var inst_15904 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15897,inst_15899);
var inst_15905 = cljs.core.async.muxch_STAR_(inst_15904);
var inst_15906 = cljs.core.async.close_BANG_(inst_15905);
var inst_15907 = (inst_15899 + (1));
var tmp15985 = inst_15896;
var tmp15986 = inst_15897;
var tmp15987 = inst_15898;
var inst_15896__$1 = tmp15985;
var inst_15897__$1 = tmp15986;
var inst_15898__$1 = tmp15987;
var inst_15899__$1 = inst_15907;
var state_15955__$1 = (function (){var statearr_15991 = state_15955;
(statearr_15991[(17)] = inst_15906);

(statearr_15991[(13)] = inst_15896__$1);

(statearr_15991[(14)] = inst_15899__$1);

(statearr_15991[(15)] = inst_15897__$1);

(statearr_15991[(16)] = inst_15898__$1);

return statearr_15991;
})();
var statearr_15992_16032 = state_15955__$1;
(statearr_15992_16032[(2)] = null);

(statearr_15992_16032[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (18))){
var inst_15925 = (state_15955[(2)]);
var state_15955__$1 = state_15955;
var statearr_15993_16033 = state_15955__$1;
(statearr_15993_16033[(2)] = inst_15925);

(statearr_15993_16033[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15956 === (8))){
var inst_15899 = (state_15955[(14)]);
var inst_15898 = (state_15955[(16)]);
var inst_15901 = (inst_15899 < inst_15898);
var inst_15902 = inst_15901;
var state_15955__$1 = state_15955;
if(cljs.core.truth_(inst_15902)){
var statearr_15994_16034 = state_15955__$1;
(statearr_15994_16034[(1)] = (10));

} else {
var statearr_15995_16035 = state_15955__$1;
(statearr_15995_16035[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___16007,mults,ensure_mult,p))
;
return ((function (switch__13951__auto__,c__14065__auto___16007,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13952__auto__ = null;
var cljs$core$async$state_machine__13952__auto____0 = (function (){
var statearr_15999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15999[(0)] = cljs$core$async$state_machine__13952__auto__);

(statearr_15999[(1)] = (1));

return statearr_15999;
});
var cljs$core$async$state_machine__13952__auto____1 = (function (state_15955){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_15955);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e16000){if((e16000 instanceof Object)){
var ex__13955__auto__ = e16000;
var statearr_16001_16036 = state_15955;
(statearr_16001_16036[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15955);

return cljs.core.cst$kw$recur;
} else {
throw e16000;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__16037 = state_15955;
state_15955 = G__16037;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$state_machine__13952__auto__ = function(state_15955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13952__auto____1.call(this,state_15955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13952__auto____0;
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13952__auto____1;
return cljs$core$async$state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___16007,mults,ensure_mult,p))
})();
var state__14067__auto__ = (function (){var statearr_16002 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_16002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___16007);

return statearr_16002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___16007,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16038 = [];
var len__7322__auto___16041 = arguments.length;
var i__7323__auto___16042 = (0);
while(true){
if((i__7323__auto___16042 < len__7322__auto___16041)){
args16038.push((arguments[i__7323__auto___16042]));

var G__16043 = (i__7323__auto___16042 + (1));
i__7323__auto___16042 = G__16043;
continue;
} else {
}
break;
}

var G__16040 = args16038.length;
switch (G__16040) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16038.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16045 = [];
var len__7322__auto___16048 = arguments.length;
var i__7323__auto___16049 = (0);
while(true){
if((i__7323__auto___16049 < len__7322__auto___16048)){
args16045.push((arguments[i__7323__auto___16049]));

var G__16050 = (i__7323__auto___16049 + (1));
i__7323__auto___16049 = G__16050;
continue;
} else {
}
break;
}

var G__16047 = args16045.length;
switch (G__16047) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16045.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16052 = [];
var len__7322__auto___16123 = arguments.length;
var i__7323__auto___16124 = (0);
while(true){
if((i__7323__auto___16124 < len__7322__auto___16123)){
args16052.push((arguments[i__7323__auto___16124]));

var G__16125 = (i__7323__auto___16124 + (1));
i__7323__auto___16124 = G__16125;
continue;
} else {
}
break;
}

var G__16054 = args16052.length;
switch (G__16054) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16052.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__14065__auto___16127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___16127,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___16127,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16093){
var state_val_16094 = (state_16093[(1)]);
if((state_val_16094 === (7))){
var state_16093__$1 = state_16093;
var statearr_16095_16128 = state_16093__$1;
(statearr_16095_16128[(2)] = null);

(statearr_16095_16128[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16094 === (1))){
var state_16093__$1 = state_16093;
var statearr_16096_16129 = state_16093__$1;
(statearr_16096_16129[(2)] = null);

(statearr_16096_16129[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16094 === (4))){
var inst_16057 = (state_16093[(7)]);
var inst_16059 = (inst_16057 < cnt);
var state_16093__$1 = state_16093;
if(cljs.core.truth_(inst_16059)){
var statearr_16097_16130 = state_16093__$1;
(statearr_16097_16130[(1)] = (6));

} else {
var statearr_16098_16131 = state_16093__$1;
(statearr_16098_16131[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16094 === (15))){
var inst_16089 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
var statearr_16099_16132 = state_16093__$1;
(statearr_16099_16132[(2)] = inst_16089);

(statearr_16099_16132[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16094 === (13))){
var inst_16082 = cljs.core.async.close_BANG_(out);
var state_16093__$1 = state_16093;
var statearr_16100_16133 = state_16093__$1;
(statearr_16100_16133[(2)] = inst_16082);

(statearr_16100_16133[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16094 === (6))){
var state_16093__$1 = state_16093;
var statearr_16101_16134 = state_16093__$1;
(statearr_16101_16134[(2)] = null);

(statearr_16101_16134[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16094 === (3))){
var inst_16091 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16093__$1,inst_16091);
} else {
if((state_val_16094 === (12))){
var inst_16079 = (state_16093[(8)]);
var inst_16079__$1 = (state_16093[(2)]);
var inst_16080 = cljs.core.some(cljs.core.nil_QMARK_,inst_16079__$1);
var state_16093__$1 = (function (){var statearr_16102 = state_16093;
(statearr_16102[(8)] = inst_16079__$1);

return statearr_16102;
})();
if(cljs.core.truth_(inst_16080)){
var statearr_16103_16135 = state_16093__$1;
(statearr_16103_16135[(1)] = (13));

} else {
var statearr_16104_16136 = state_16093__$1;
(statearr_16104_16136[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16094 === (2))){
var inst_16056 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16057 = (0);
var state_16093__$1 = (function (){var statearr_16105 = state_16093;
(statearr_16105[(7)] = inst_16057);

(statearr_16105[(9)] = inst_16056);

return statearr_16105;
})();
var statearr_16106_16137 = state_16093__$1;
(statearr_16106_16137[(2)] = null);

(statearr_16106_16137[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16094 === (11))){
var inst_16057 = (state_16093[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16093,(10),Object,null,(9));
var inst_16066 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16057) : chs__$1.call(null,inst_16057));
var inst_16067 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16057) : done.call(null,inst_16057));
var inst_16068 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16066,inst_16067);
var state_16093__$1 = state_16093;
var statearr_16107_16138 = state_16093__$1;
(statearr_16107_16138[(2)] = inst_16068);


cljs.core.async.impl.ioc_helpers.process_exception(state_16093__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16094 === (9))){
var inst_16057 = (state_16093[(7)]);
var inst_16070 = (state_16093[(2)]);
var inst_16071 = (inst_16057 + (1));
var inst_16057__$1 = inst_16071;
var state_16093__$1 = (function (){var statearr_16108 = state_16093;
(statearr_16108[(7)] = inst_16057__$1);

(statearr_16108[(10)] = inst_16070);

return statearr_16108;
})();
var statearr_16109_16139 = state_16093__$1;
(statearr_16109_16139[(2)] = null);

(statearr_16109_16139[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16094 === (5))){
var inst_16077 = (state_16093[(2)]);
var state_16093__$1 = (function (){var statearr_16110 = state_16093;
(statearr_16110[(11)] = inst_16077);

return statearr_16110;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16093__$1,(12),dchan);
} else {
if((state_val_16094 === (14))){
var inst_16079 = (state_16093[(8)]);
var inst_16084 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16079);
var state_16093__$1 = state_16093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16093__$1,(16),out,inst_16084);
} else {
if((state_val_16094 === (16))){
var inst_16086 = (state_16093[(2)]);
var state_16093__$1 = (function (){var statearr_16111 = state_16093;
(statearr_16111[(12)] = inst_16086);

return statearr_16111;
})();
var statearr_16112_16140 = state_16093__$1;
(statearr_16112_16140[(2)] = null);

(statearr_16112_16140[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16094 === (10))){
var inst_16061 = (state_16093[(2)]);
var inst_16062 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16093__$1 = (function (){var statearr_16113 = state_16093;
(statearr_16113[(13)] = inst_16061);

return statearr_16113;
})();
var statearr_16114_16141 = state_16093__$1;
(statearr_16114_16141[(2)] = inst_16062);


cljs.core.async.impl.ioc_helpers.process_exception(state_16093__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16094 === (8))){
var inst_16075 = (state_16093[(2)]);
var state_16093__$1 = state_16093;
var statearr_16115_16142 = state_16093__$1;
(statearr_16115_16142[(2)] = inst_16075);

(statearr_16115_16142[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___16127,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13951__auto__,c__14065__auto___16127,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13952__auto__ = null;
var cljs$core$async$state_machine__13952__auto____0 = (function (){
var statearr_16119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16119[(0)] = cljs$core$async$state_machine__13952__auto__);

(statearr_16119[(1)] = (1));

return statearr_16119;
});
var cljs$core$async$state_machine__13952__auto____1 = (function (state_16093){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_16093);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e16120){if((e16120 instanceof Object)){
var ex__13955__auto__ = e16120;
var statearr_16121_16143 = state_16093;
(statearr_16121_16143[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16093);

return cljs.core.cst$kw$recur;
} else {
throw e16120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__16144 = state_16093;
state_16093 = G__16144;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$state_machine__13952__auto__ = function(state_16093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13952__auto____1.call(this,state_16093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13952__auto____0;
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13952__auto____1;
return cljs$core$async$state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___16127,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14067__auto__ = (function (){var statearr_16122 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_16122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___16127);

return statearr_16122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___16127,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16146 = [];
var len__7322__auto___16204 = arguments.length;
var i__7323__auto___16205 = (0);
while(true){
if((i__7323__auto___16205 < len__7322__auto___16204)){
args16146.push((arguments[i__7323__auto___16205]));

var G__16206 = (i__7323__auto___16205 + (1));
i__7323__auto___16205 = G__16206;
continue;
} else {
}
break;
}

var G__16148 = args16146.length;
switch (G__16148) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16146.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14065__auto___16208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___16208,out){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___16208,out){
return (function (state_16180){
var state_val_16181 = (state_16180[(1)]);
if((state_val_16181 === (7))){
var inst_16159 = (state_16180[(7)]);
var inst_16160 = (state_16180[(8)]);
var inst_16159__$1 = (state_16180[(2)]);
var inst_16160__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16159__$1,(0),null);
var inst_16161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16159__$1,(1),null);
var inst_16162 = (inst_16160__$1 == null);
var state_16180__$1 = (function (){var statearr_16182 = state_16180;
(statearr_16182[(9)] = inst_16161);

(statearr_16182[(7)] = inst_16159__$1);

(statearr_16182[(8)] = inst_16160__$1);

return statearr_16182;
})();
if(cljs.core.truth_(inst_16162)){
var statearr_16183_16209 = state_16180__$1;
(statearr_16183_16209[(1)] = (8));

} else {
var statearr_16184_16210 = state_16180__$1;
(statearr_16184_16210[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16181 === (1))){
var inst_16149 = cljs.core.vec(chs);
var inst_16150 = inst_16149;
var state_16180__$1 = (function (){var statearr_16185 = state_16180;
(statearr_16185[(10)] = inst_16150);

return statearr_16185;
})();
var statearr_16186_16211 = state_16180__$1;
(statearr_16186_16211[(2)] = null);

(statearr_16186_16211[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16181 === (4))){
var inst_16150 = (state_16180[(10)]);
var state_16180__$1 = state_16180;
return cljs.core.async.ioc_alts_BANG_(state_16180__$1,(7),inst_16150);
} else {
if((state_val_16181 === (6))){
var inst_16176 = (state_16180[(2)]);
var state_16180__$1 = state_16180;
var statearr_16187_16212 = state_16180__$1;
(statearr_16187_16212[(2)] = inst_16176);

(statearr_16187_16212[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16181 === (3))){
var inst_16178 = (state_16180[(2)]);
var state_16180__$1 = state_16180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16180__$1,inst_16178);
} else {
if((state_val_16181 === (2))){
var inst_16150 = (state_16180[(10)]);
var inst_16152 = cljs.core.count(inst_16150);
var inst_16153 = (inst_16152 > (0));
var state_16180__$1 = state_16180;
if(cljs.core.truth_(inst_16153)){
var statearr_16189_16213 = state_16180__$1;
(statearr_16189_16213[(1)] = (4));

} else {
var statearr_16190_16214 = state_16180__$1;
(statearr_16190_16214[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16181 === (11))){
var inst_16150 = (state_16180[(10)]);
var inst_16169 = (state_16180[(2)]);
var tmp16188 = inst_16150;
var inst_16150__$1 = tmp16188;
var state_16180__$1 = (function (){var statearr_16191 = state_16180;
(statearr_16191[(10)] = inst_16150__$1);

(statearr_16191[(11)] = inst_16169);

return statearr_16191;
})();
var statearr_16192_16215 = state_16180__$1;
(statearr_16192_16215[(2)] = null);

(statearr_16192_16215[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16181 === (9))){
var inst_16160 = (state_16180[(8)]);
var state_16180__$1 = state_16180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16180__$1,(11),out,inst_16160);
} else {
if((state_val_16181 === (5))){
var inst_16174 = cljs.core.async.close_BANG_(out);
var state_16180__$1 = state_16180;
var statearr_16193_16216 = state_16180__$1;
(statearr_16193_16216[(2)] = inst_16174);

(statearr_16193_16216[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16181 === (10))){
var inst_16172 = (state_16180[(2)]);
var state_16180__$1 = state_16180;
var statearr_16194_16217 = state_16180__$1;
(statearr_16194_16217[(2)] = inst_16172);

(statearr_16194_16217[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16181 === (8))){
var inst_16150 = (state_16180[(10)]);
var inst_16161 = (state_16180[(9)]);
var inst_16159 = (state_16180[(7)]);
var inst_16160 = (state_16180[(8)]);
var inst_16164 = (function (){var cs = inst_16150;
var vec__16155 = inst_16159;
var v = inst_16160;
var c = inst_16161;
return ((function (cs,vec__16155,v,c,inst_16150,inst_16161,inst_16159,inst_16160,state_val_16181,c__14065__auto___16208,out){
return (function (p1__16145_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16145_SHARP_);
});
;})(cs,vec__16155,v,c,inst_16150,inst_16161,inst_16159,inst_16160,state_val_16181,c__14065__auto___16208,out))
})();
var inst_16165 = cljs.core.filterv(inst_16164,inst_16150);
var inst_16150__$1 = inst_16165;
var state_16180__$1 = (function (){var statearr_16195 = state_16180;
(statearr_16195[(10)] = inst_16150__$1);

return statearr_16195;
})();
var statearr_16196_16218 = state_16180__$1;
(statearr_16196_16218[(2)] = null);

(statearr_16196_16218[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___16208,out))
;
return ((function (switch__13951__auto__,c__14065__auto___16208,out){
return (function() {
var cljs$core$async$state_machine__13952__auto__ = null;
var cljs$core$async$state_machine__13952__auto____0 = (function (){
var statearr_16200 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16200[(0)] = cljs$core$async$state_machine__13952__auto__);

(statearr_16200[(1)] = (1));

return statearr_16200;
});
var cljs$core$async$state_machine__13952__auto____1 = (function (state_16180){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_16180);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e16201){if((e16201 instanceof Object)){
var ex__13955__auto__ = e16201;
var statearr_16202_16219 = state_16180;
(statearr_16202_16219[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16180);

return cljs.core.cst$kw$recur;
} else {
throw e16201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__16220 = state_16180;
state_16180 = G__16220;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$state_machine__13952__auto__ = function(state_16180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13952__auto____1.call(this,state_16180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13952__auto____0;
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13952__auto____1;
return cljs$core$async$state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___16208,out))
})();
var state__14067__auto__ = (function (){var statearr_16203 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_16203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___16208);

return statearr_16203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___16208,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args16221 = [];
var len__7322__auto___16270 = arguments.length;
var i__7323__auto___16271 = (0);
while(true){
if((i__7323__auto___16271 < len__7322__auto___16270)){
args16221.push((arguments[i__7323__auto___16271]));

var G__16272 = (i__7323__auto___16271 + (1));
i__7323__auto___16271 = G__16272;
continue;
} else {
}
break;
}

var G__16223 = args16221.length;
switch (G__16223) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16221.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14065__auto___16274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___16274,out){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___16274,out){
return (function (state_16247){
var state_val_16248 = (state_16247[(1)]);
if((state_val_16248 === (7))){
var inst_16229 = (state_16247[(7)]);
var inst_16229__$1 = (state_16247[(2)]);
var inst_16230 = (inst_16229__$1 == null);
var inst_16231 = cljs.core.not(inst_16230);
var state_16247__$1 = (function (){var statearr_16249 = state_16247;
(statearr_16249[(7)] = inst_16229__$1);

return statearr_16249;
})();
if(inst_16231){
var statearr_16250_16275 = state_16247__$1;
(statearr_16250_16275[(1)] = (8));

} else {
var statearr_16251_16276 = state_16247__$1;
(statearr_16251_16276[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (1))){
var inst_16224 = (0);
var state_16247__$1 = (function (){var statearr_16252 = state_16247;
(statearr_16252[(8)] = inst_16224);

return statearr_16252;
})();
var statearr_16253_16277 = state_16247__$1;
(statearr_16253_16277[(2)] = null);

(statearr_16253_16277[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (4))){
var state_16247__$1 = state_16247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16247__$1,(7),ch);
} else {
if((state_val_16248 === (6))){
var inst_16242 = (state_16247[(2)]);
var state_16247__$1 = state_16247;
var statearr_16254_16278 = state_16247__$1;
(statearr_16254_16278[(2)] = inst_16242);

(statearr_16254_16278[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (3))){
var inst_16244 = (state_16247[(2)]);
var inst_16245 = cljs.core.async.close_BANG_(out);
var state_16247__$1 = (function (){var statearr_16255 = state_16247;
(statearr_16255[(9)] = inst_16244);

return statearr_16255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16247__$1,inst_16245);
} else {
if((state_val_16248 === (2))){
var inst_16224 = (state_16247[(8)]);
var inst_16226 = (inst_16224 < n);
var state_16247__$1 = state_16247;
if(cljs.core.truth_(inst_16226)){
var statearr_16256_16279 = state_16247__$1;
(statearr_16256_16279[(1)] = (4));

} else {
var statearr_16257_16280 = state_16247__$1;
(statearr_16257_16280[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (11))){
var inst_16224 = (state_16247[(8)]);
var inst_16234 = (state_16247[(2)]);
var inst_16235 = (inst_16224 + (1));
var inst_16224__$1 = inst_16235;
var state_16247__$1 = (function (){var statearr_16258 = state_16247;
(statearr_16258[(10)] = inst_16234);

(statearr_16258[(8)] = inst_16224__$1);

return statearr_16258;
})();
var statearr_16259_16281 = state_16247__$1;
(statearr_16259_16281[(2)] = null);

(statearr_16259_16281[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (9))){
var state_16247__$1 = state_16247;
var statearr_16260_16282 = state_16247__$1;
(statearr_16260_16282[(2)] = null);

(statearr_16260_16282[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (5))){
var state_16247__$1 = state_16247;
var statearr_16261_16283 = state_16247__$1;
(statearr_16261_16283[(2)] = null);

(statearr_16261_16283[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (10))){
var inst_16239 = (state_16247[(2)]);
var state_16247__$1 = state_16247;
var statearr_16262_16284 = state_16247__$1;
(statearr_16262_16284[(2)] = inst_16239);

(statearr_16262_16284[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16248 === (8))){
var inst_16229 = (state_16247[(7)]);
var state_16247__$1 = state_16247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16247__$1,(11),out,inst_16229);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___16274,out))
;
return ((function (switch__13951__auto__,c__14065__auto___16274,out){
return (function() {
var cljs$core$async$state_machine__13952__auto__ = null;
var cljs$core$async$state_machine__13952__auto____0 = (function (){
var statearr_16266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16266[(0)] = cljs$core$async$state_machine__13952__auto__);

(statearr_16266[(1)] = (1));

return statearr_16266;
});
var cljs$core$async$state_machine__13952__auto____1 = (function (state_16247){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_16247);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e16267){if((e16267 instanceof Object)){
var ex__13955__auto__ = e16267;
var statearr_16268_16285 = state_16247;
(statearr_16268_16285[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16247);

return cljs.core.cst$kw$recur;
} else {
throw e16267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__16286 = state_16247;
state_16247 = G__16286;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$state_machine__13952__auto__ = function(state_16247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13952__auto____1.call(this,state_16247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13952__auto____0;
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13952__auto____1;
return cljs$core$async$state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___16274,out))
})();
var state__14067__auto__ = (function (){var statearr_16269 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_16269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___16274);

return statearr_16269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___16274,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16296 = (function (map_LT_,f,ch,meta16297){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16297 = meta16297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16298,meta16297__$1){
var self__ = this;
var _16298__$1 = this;
return (new cljs.core.async.t_cljs$core$async16296(self__.map_LT_,self__.f,self__.ch,meta16297__$1));
});

cljs.core.async.t_cljs$core$async16296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16298){
var self__ = this;
var _16298__$1 = this;
return self__.meta16297;
});

cljs.core.async.t_cljs$core$async16296.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16296.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16296.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16299 = (function (map_LT_,f,ch,meta16297,_,fn1,meta16300){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16297 = meta16297;
this._ = _;
this.fn1 = fn1;
this.meta16300 = meta16300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16301,meta16300__$1){
var self__ = this;
var _16301__$1 = this;
return (new cljs.core.async.t_cljs$core$async16299(self__.map_LT_,self__.f,self__.ch,self__.meta16297,self__._,self__.fn1,meta16300__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16301){
var self__ = this;
var _16301__$1 = this;
return self__.meta16300;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16299.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16287_SHARP_){
var G__16302 = (((p1__16287_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16287_SHARP_) : self__.f.call(null,p1__16287_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16302) : f1.call(null,G__16302));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16299.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16297,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16296], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16300], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16299";

cljs.core.async.t_cljs$core$async16299.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write(writer__6854__auto__,"cljs.core.async/t_cljs$core$async16299");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16299 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16299(map_LT___$1,f__$1,ch__$1,meta16297__$1,___$2,fn1__$1,meta16300){
return (new cljs.core.async.t_cljs$core$async16299(map_LT___$1,f__$1,ch__$1,meta16297__$1,___$2,fn1__$1,meta16300));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16299(self__.map_LT_,self__.f,self__.ch,self__.meta16297,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6235__auto__ = ret;
if(cljs.core.truth_(and__6235__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6235__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16303 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16303) : self__.f.call(null,G__16303));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16296.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16297], null);
});

cljs.core.async.t_cljs$core$async16296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16296";

cljs.core.async.t_cljs$core$async16296.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write(writer__6854__auto__,"cljs.core.async/t_cljs$core$async16296");
});

cljs.core.async.__GT_t_cljs$core$async16296 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16296(map_LT___$1,f__$1,ch__$1,meta16297){
return (new cljs.core.async.t_cljs$core$async16296(map_LT___$1,f__$1,ch__$1,meta16297));
});

}

return (new cljs.core.async.t_cljs$core$async16296(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16307 = (function (map_GT_,f,ch,meta16308){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16308 = meta16308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16309,meta16308__$1){
var self__ = this;
var _16309__$1 = this;
return (new cljs.core.async.t_cljs$core$async16307(self__.map_GT_,self__.f,self__.ch,meta16308__$1));
});

cljs.core.async.t_cljs$core$async16307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16309){
var self__ = this;
var _16309__$1 = this;
return self__.meta16308;
});

cljs.core.async.t_cljs$core$async16307.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16307.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16307.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16308], null);
});

cljs.core.async.t_cljs$core$async16307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16307";

cljs.core.async.t_cljs$core$async16307.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write(writer__6854__auto__,"cljs.core.async/t_cljs$core$async16307");
});

cljs.core.async.__GT_t_cljs$core$async16307 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16307(map_GT___$1,f__$1,ch__$1,meta16308){
return (new cljs.core.async.t_cljs$core$async16307(map_GT___$1,f__$1,ch__$1,meta16308));
});

}

return (new cljs.core.async.t_cljs$core$async16307(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16313 = (function (filter_GT_,p,ch,meta16314){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16314 = meta16314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16315,meta16314__$1){
var self__ = this;
var _16315__$1 = this;
return (new cljs.core.async.t_cljs$core$async16313(self__.filter_GT_,self__.p,self__.ch,meta16314__$1));
});

cljs.core.async.t_cljs$core$async16313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16315){
var self__ = this;
var _16315__$1 = this;
return self__.meta16314;
});

cljs.core.async.t_cljs$core$async16313.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16313.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16313.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16313.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16314], null);
});

cljs.core.async.t_cljs$core$async16313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16313";

cljs.core.async.t_cljs$core$async16313.cljs$lang$ctorPrWriter = (function (this__6853__auto__,writer__6854__auto__,opt__6855__auto__){
return cljs.core._write(writer__6854__auto__,"cljs.core.async/t_cljs$core$async16313");
});

cljs.core.async.__GT_t_cljs$core$async16313 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16313(filter_GT___$1,p__$1,ch__$1,meta16314){
return (new cljs.core.async.t_cljs$core$async16313(filter_GT___$1,p__$1,ch__$1,meta16314));
});

}

return (new cljs.core.async.t_cljs$core$async16313(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16316 = [];
var len__7322__auto___16360 = arguments.length;
var i__7323__auto___16361 = (0);
while(true){
if((i__7323__auto___16361 < len__7322__auto___16360)){
args16316.push((arguments[i__7323__auto___16361]));

var G__16362 = (i__7323__auto___16361 + (1));
i__7323__auto___16361 = G__16362;
continue;
} else {
}
break;
}

var G__16318 = args16316.length;
switch (G__16318) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16316.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14065__auto___16364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___16364,out){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___16364,out){
return (function (state_16339){
var state_val_16340 = (state_16339[(1)]);
if((state_val_16340 === (7))){
var inst_16335 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
var statearr_16341_16365 = state_16339__$1;
(statearr_16341_16365[(2)] = inst_16335);

(statearr_16341_16365[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (1))){
var state_16339__$1 = state_16339;
var statearr_16342_16366 = state_16339__$1;
(statearr_16342_16366[(2)] = null);

(statearr_16342_16366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (4))){
var inst_16321 = (state_16339[(7)]);
var inst_16321__$1 = (state_16339[(2)]);
var inst_16322 = (inst_16321__$1 == null);
var state_16339__$1 = (function (){var statearr_16343 = state_16339;
(statearr_16343[(7)] = inst_16321__$1);

return statearr_16343;
})();
if(cljs.core.truth_(inst_16322)){
var statearr_16344_16367 = state_16339__$1;
(statearr_16344_16367[(1)] = (5));

} else {
var statearr_16345_16368 = state_16339__$1;
(statearr_16345_16368[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (6))){
var inst_16321 = (state_16339[(7)]);
var inst_16326 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16321) : p.call(null,inst_16321));
var state_16339__$1 = state_16339;
if(cljs.core.truth_(inst_16326)){
var statearr_16346_16369 = state_16339__$1;
(statearr_16346_16369[(1)] = (8));

} else {
var statearr_16347_16370 = state_16339__$1;
(statearr_16347_16370[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (3))){
var inst_16337 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16339__$1,inst_16337);
} else {
if((state_val_16340 === (2))){
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16339__$1,(4),ch);
} else {
if((state_val_16340 === (11))){
var inst_16329 = (state_16339[(2)]);
var state_16339__$1 = state_16339;
var statearr_16348_16371 = state_16339__$1;
(statearr_16348_16371[(2)] = inst_16329);

(statearr_16348_16371[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (9))){
var state_16339__$1 = state_16339;
var statearr_16349_16372 = state_16339__$1;
(statearr_16349_16372[(2)] = null);

(statearr_16349_16372[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (5))){
var inst_16324 = cljs.core.async.close_BANG_(out);
var state_16339__$1 = state_16339;
var statearr_16350_16373 = state_16339__$1;
(statearr_16350_16373[(2)] = inst_16324);

(statearr_16350_16373[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (10))){
var inst_16332 = (state_16339[(2)]);
var state_16339__$1 = (function (){var statearr_16351 = state_16339;
(statearr_16351[(8)] = inst_16332);

return statearr_16351;
})();
var statearr_16352_16374 = state_16339__$1;
(statearr_16352_16374[(2)] = null);

(statearr_16352_16374[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16340 === (8))){
var inst_16321 = (state_16339[(7)]);
var state_16339__$1 = state_16339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16339__$1,(11),out,inst_16321);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___16364,out))
;
return ((function (switch__13951__auto__,c__14065__auto___16364,out){
return (function() {
var cljs$core$async$state_machine__13952__auto__ = null;
var cljs$core$async$state_machine__13952__auto____0 = (function (){
var statearr_16356 = [null,null,null,null,null,null,null,null,null];
(statearr_16356[(0)] = cljs$core$async$state_machine__13952__auto__);

(statearr_16356[(1)] = (1));

return statearr_16356;
});
var cljs$core$async$state_machine__13952__auto____1 = (function (state_16339){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_16339);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e16357){if((e16357 instanceof Object)){
var ex__13955__auto__ = e16357;
var statearr_16358_16375 = state_16339;
(statearr_16358_16375[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16339);

return cljs.core.cst$kw$recur;
} else {
throw e16357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__16376 = state_16339;
state_16339 = G__16376;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$state_machine__13952__auto__ = function(state_16339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13952__auto____1.call(this,state_16339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13952__auto____0;
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13952__auto____1;
return cljs$core$async$state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___16364,out))
})();
var state__14067__auto__ = (function (){var statearr_16359 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_16359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___16364);

return statearr_16359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___16364,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16377 = [];
var len__7322__auto___16380 = arguments.length;
var i__7323__auto___16381 = (0);
while(true){
if((i__7323__auto___16381 < len__7322__auto___16380)){
args16377.push((arguments[i__7323__auto___16381]));

var G__16382 = (i__7323__auto___16381 + (1));
i__7323__auto___16381 = G__16382;
continue;
} else {
}
break;
}

var G__16379 = args16377.length;
switch (G__16379) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16377.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14065__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto__){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto__){
return (function (state_16549){
var state_val_16550 = (state_16549[(1)]);
if((state_val_16550 === (7))){
var inst_16545 = (state_16549[(2)]);
var state_16549__$1 = state_16549;
var statearr_16551_16592 = state_16549__$1;
(statearr_16551_16592[(2)] = inst_16545);

(statearr_16551_16592[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (20))){
var inst_16515 = (state_16549[(7)]);
var inst_16526 = (state_16549[(2)]);
var inst_16527 = cljs.core.next(inst_16515);
var inst_16501 = inst_16527;
var inst_16502 = null;
var inst_16503 = (0);
var inst_16504 = (0);
var state_16549__$1 = (function (){var statearr_16552 = state_16549;
(statearr_16552[(8)] = inst_16504);

(statearr_16552[(9)] = inst_16501);

(statearr_16552[(10)] = inst_16526);

(statearr_16552[(11)] = inst_16503);

(statearr_16552[(12)] = inst_16502);

return statearr_16552;
})();
var statearr_16553_16593 = state_16549__$1;
(statearr_16553_16593[(2)] = null);

(statearr_16553_16593[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (1))){
var state_16549__$1 = state_16549;
var statearr_16554_16594 = state_16549__$1;
(statearr_16554_16594[(2)] = null);

(statearr_16554_16594[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (4))){
var inst_16490 = (state_16549[(13)]);
var inst_16490__$1 = (state_16549[(2)]);
var inst_16491 = (inst_16490__$1 == null);
var state_16549__$1 = (function (){var statearr_16555 = state_16549;
(statearr_16555[(13)] = inst_16490__$1);

return statearr_16555;
})();
if(cljs.core.truth_(inst_16491)){
var statearr_16556_16595 = state_16549__$1;
(statearr_16556_16595[(1)] = (5));

} else {
var statearr_16557_16596 = state_16549__$1;
(statearr_16557_16596[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (15))){
var state_16549__$1 = state_16549;
var statearr_16561_16597 = state_16549__$1;
(statearr_16561_16597[(2)] = null);

(statearr_16561_16597[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (21))){
var state_16549__$1 = state_16549;
var statearr_16562_16598 = state_16549__$1;
(statearr_16562_16598[(2)] = null);

(statearr_16562_16598[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (13))){
var inst_16504 = (state_16549[(8)]);
var inst_16501 = (state_16549[(9)]);
var inst_16503 = (state_16549[(11)]);
var inst_16502 = (state_16549[(12)]);
var inst_16511 = (state_16549[(2)]);
var inst_16512 = (inst_16504 + (1));
var tmp16558 = inst_16501;
var tmp16559 = inst_16503;
var tmp16560 = inst_16502;
var inst_16501__$1 = tmp16558;
var inst_16502__$1 = tmp16560;
var inst_16503__$1 = tmp16559;
var inst_16504__$1 = inst_16512;
var state_16549__$1 = (function (){var statearr_16563 = state_16549;
(statearr_16563[(8)] = inst_16504__$1);

(statearr_16563[(9)] = inst_16501__$1);

(statearr_16563[(14)] = inst_16511);

(statearr_16563[(11)] = inst_16503__$1);

(statearr_16563[(12)] = inst_16502__$1);

return statearr_16563;
})();
var statearr_16564_16599 = state_16549__$1;
(statearr_16564_16599[(2)] = null);

(statearr_16564_16599[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (22))){
var state_16549__$1 = state_16549;
var statearr_16565_16600 = state_16549__$1;
(statearr_16565_16600[(2)] = null);

(statearr_16565_16600[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (6))){
var inst_16490 = (state_16549[(13)]);
var inst_16499 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16490) : f.call(null,inst_16490));
var inst_16500 = cljs.core.seq(inst_16499);
var inst_16501 = inst_16500;
var inst_16502 = null;
var inst_16503 = (0);
var inst_16504 = (0);
var state_16549__$1 = (function (){var statearr_16566 = state_16549;
(statearr_16566[(8)] = inst_16504);

(statearr_16566[(9)] = inst_16501);

(statearr_16566[(11)] = inst_16503);

(statearr_16566[(12)] = inst_16502);

return statearr_16566;
})();
var statearr_16567_16601 = state_16549__$1;
(statearr_16567_16601[(2)] = null);

(statearr_16567_16601[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (17))){
var inst_16515 = (state_16549[(7)]);
var inst_16519 = cljs.core.chunk_first(inst_16515);
var inst_16520 = cljs.core.chunk_rest(inst_16515);
var inst_16521 = cljs.core.count(inst_16519);
var inst_16501 = inst_16520;
var inst_16502 = inst_16519;
var inst_16503 = inst_16521;
var inst_16504 = (0);
var state_16549__$1 = (function (){var statearr_16568 = state_16549;
(statearr_16568[(8)] = inst_16504);

(statearr_16568[(9)] = inst_16501);

(statearr_16568[(11)] = inst_16503);

(statearr_16568[(12)] = inst_16502);

return statearr_16568;
})();
var statearr_16569_16602 = state_16549__$1;
(statearr_16569_16602[(2)] = null);

(statearr_16569_16602[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (3))){
var inst_16547 = (state_16549[(2)]);
var state_16549__$1 = state_16549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16549__$1,inst_16547);
} else {
if((state_val_16550 === (12))){
var inst_16535 = (state_16549[(2)]);
var state_16549__$1 = state_16549;
var statearr_16570_16603 = state_16549__$1;
(statearr_16570_16603[(2)] = inst_16535);

(statearr_16570_16603[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (2))){
var state_16549__$1 = state_16549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16549__$1,(4),in$);
} else {
if((state_val_16550 === (23))){
var inst_16543 = (state_16549[(2)]);
var state_16549__$1 = state_16549;
var statearr_16571_16604 = state_16549__$1;
(statearr_16571_16604[(2)] = inst_16543);

(statearr_16571_16604[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (19))){
var inst_16530 = (state_16549[(2)]);
var state_16549__$1 = state_16549;
var statearr_16572_16605 = state_16549__$1;
(statearr_16572_16605[(2)] = inst_16530);

(statearr_16572_16605[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (11))){
var inst_16515 = (state_16549[(7)]);
var inst_16501 = (state_16549[(9)]);
var inst_16515__$1 = cljs.core.seq(inst_16501);
var state_16549__$1 = (function (){var statearr_16573 = state_16549;
(statearr_16573[(7)] = inst_16515__$1);

return statearr_16573;
})();
if(inst_16515__$1){
var statearr_16574_16606 = state_16549__$1;
(statearr_16574_16606[(1)] = (14));

} else {
var statearr_16575_16607 = state_16549__$1;
(statearr_16575_16607[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (9))){
var inst_16537 = (state_16549[(2)]);
var inst_16538 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16549__$1 = (function (){var statearr_16576 = state_16549;
(statearr_16576[(15)] = inst_16537);

return statearr_16576;
})();
if(cljs.core.truth_(inst_16538)){
var statearr_16577_16608 = state_16549__$1;
(statearr_16577_16608[(1)] = (21));

} else {
var statearr_16578_16609 = state_16549__$1;
(statearr_16578_16609[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (5))){
var inst_16493 = cljs.core.async.close_BANG_(out);
var state_16549__$1 = state_16549;
var statearr_16579_16610 = state_16549__$1;
(statearr_16579_16610[(2)] = inst_16493);

(statearr_16579_16610[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (14))){
var inst_16515 = (state_16549[(7)]);
var inst_16517 = cljs.core.chunked_seq_QMARK_(inst_16515);
var state_16549__$1 = state_16549;
if(inst_16517){
var statearr_16580_16611 = state_16549__$1;
(statearr_16580_16611[(1)] = (17));

} else {
var statearr_16581_16612 = state_16549__$1;
(statearr_16581_16612[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (16))){
var inst_16533 = (state_16549[(2)]);
var state_16549__$1 = state_16549;
var statearr_16582_16613 = state_16549__$1;
(statearr_16582_16613[(2)] = inst_16533);

(statearr_16582_16613[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16550 === (10))){
var inst_16504 = (state_16549[(8)]);
var inst_16502 = (state_16549[(12)]);
var inst_16509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16502,inst_16504);
var state_16549__$1 = state_16549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16549__$1,(13),out,inst_16509);
} else {
if((state_val_16550 === (18))){
var inst_16515 = (state_16549[(7)]);
var inst_16524 = cljs.core.first(inst_16515);
var state_16549__$1 = state_16549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16549__$1,(20),out,inst_16524);
} else {
if((state_val_16550 === (8))){
var inst_16504 = (state_16549[(8)]);
var inst_16503 = (state_16549[(11)]);
var inst_16506 = (inst_16504 < inst_16503);
var inst_16507 = inst_16506;
var state_16549__$1 = state_16549;
if(cljs.core.truth_(inst_16507)){
var statearr_16583_16614 = state_16549__$1;
(statearr_16583_16614[(1)] = (10));

} else {
var statearr_16584_16615 = state_16549__$1;
(statearr_16584_16615[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto__))
;
return ((function (switch__13951__auto__,c__14065__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13952__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13952__auto____0 = (function (){
var statearr_16588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16588[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13952__auto__);

(statearr_16588[(1)] = (1));

return statearr_16588;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13952__auto____1 = (function (state_16549){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_16549);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e16589){if((e16589 instanceof Object)){
var ex__13955__auto__ = e16589;
var statearr_16590_16616 = state_16549;
(statearr_16590_16616[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16549);

return cljs.core.cst$kw$recur;
} else {
throw e16589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__16617 = state_16549;
state_16549 = G__16617;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13952__auto__ = function(state_16549){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13952__auto____1.call(this,state_16549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13952__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13952__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto__))
})();
var state__14067__auto__ = (function (){var statearr_16591 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_16591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto__);

return statearr_16591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto__))
);

return c__14065__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16618 = [];
var len__7322__auto___16621 = arguments.length;
var i__7323__auto___16622 = (0);
while(true){
if((i__7323__auto___16622 < len__7322__auto___16621)){
args16618.push((arguments[i__7323__auto___16622]));

var G__16623 = (i__7323__auto___16622 + (1));
i__7323__auto___16622 = G__16623;
continue;
} else {
}
break;
}

var G__16620 = args16618.length;
switch (G__16620) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16618.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16625 = [];
var len__7322__auto___16628 = arguments.length;
var i__7323__auto___16629 = (0);
while(true){
if((i__7323__auto___16629 < len__7322__auto___16628)){
args16625.push((arguments[i__7323__auto___16629]));

var G__16630 = (i__7323__auto___16629 + (1));
i__7323__auto___16629 = G__16630;
continue;
} else {
}
break;
}

var G__16627 = args16625.length;
switch (G__16627) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16625.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16632 = [];
var len__7322__auto___16683 = arguments.length;
var i__7323__auto___16684 = (0);
while(true){
if((i__7323__auto___16684 < len__7322__auto___16683)){
args16632.push((arguments[i__7323__auto___16684]));

var G__16685 = (i__7323__auto___16684 + (1));
i__7323__auto___16684 = G__16685;
continue;
} else {
}
break;
}

var G__16634 = args16632.length;
switch (G__16634) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16632.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14065__auto___16687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___16687,out){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___16687,out){
return (function (state_16658){
var state_val_16659 = (state_16658[(1)]);
if((state_val_16659 === (7))){
var inst_16653 = (state_16658[(2)]);
var state_16658__$1 = state_16658;
var statearr_16660_16688 = state_16658__$1;
(statearr_16660_16688[(2)] = inst_16653);

(statearr_16660_16688[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16659 === (1))){
var inst_16635 = null;
var state_16658__$1 = (function (){var statearr_16661 = state_16658;
(statearr_16661[(7)] = inst_16635);

return statearr_16661;
})();
var statearr_16662_16689 = state_16658__$1;
(statearr_16662_16689[(2)] = null);

(statearr_16662_16689[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16659 === (4))){
var inst_16638 = (state_16658[(8)]);
var inst_16638__$1 = (state_16658[(2)]);
var inst_16639 = (inst_16638__$1 == null);
var inst_16640 = cljs.core.not(inst_16639);
var state_16658__$1 = (function (){var statearr_16663 = state_16658;
(statearr_16663[(8)] = inst_16638__$1);

return statearr_16663;
})();
if(inst_16640){
var statearr_16664_16690 = state_16658__$1;
(statearr_16664_16690[(1)] = (5));

} else {
var statearr_16665_16691 = state_16658__$1;
(statearr_16665_16691[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16659 === (6))){
var state_16658__$1 = state_16658;
var statearr_16666_16692 = state_16658__$1;
(statearr_16666_16692[(2)] = null);

(statearr_16666_16692[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16659 === (3))){
var inst_16655 = (state_16658[(2)]);
var inst_16656 = cljs.core.async.close_BANG_(out);
var state_16658__$1 = (function (){var statearr_16667 = state_16658;
(statearr_16667[(9)] = inst_16655);

return statearr_16667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16658__$1,inst_16656);
} else {
if((state_val_16659 === (2))){
var state_16658__$1 = state_16658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16658__$1,(4),ch);
} else {
if((state_val_16659 === (11))){
var inst_16638 = (state_16658[(8)]);
var inst_16647 = (state_16658[(2)]);
var inst_16635 = inst_16638;
var state_16658__$1 = (function (){var statearr_16668 = state_16658;
(statearr_16668[(10)] = inst_16647);

(statearr_16668[(7)] = inst_16635);

return statearr_16668;
})();
var statearr_16669_16693 = state_16658__$1;
(statearr_16669_16693[(2)] = null);

(statearr_16669_16693[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16659 === (9))){
var inst_16638 = (state_16658[(8)]);
var state_16658__$1 = state_16658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16658__$1,(11),out,inst_16638);
} else {
if((state_val_16659 === (5))){
var inst_16638 = (state_16658[(8)]);
var inst_16635 = (state_16658[(7)]);
var inst_16642 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16638,inst_16635);
var state_16658__$1 = state_16658;
if(inst_16642){
var statearr_16671_16694 = state_16658__$1;
(statearr_16671_16694[(1)] = (8));

} else {
var statearr_16672_16695 = state_16658__$1;
(statearr_16672_16695[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16659 === (10))){
var inst_16650 = (state_16658[(2)]);
var state_16658__$1 = state_16658;
var statearr_16673_16696 = state_16658__$1;
(statearr_16673_16696[(2)] = inst_16650);

(statearr_16673_16696[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16659 === (8))){
var inst_16635 = (state_16658[(7)]);
var tmp16670 = inst_16635;
var inst_16635__$1 = tmp16670;
var state_16658__$1 = (function (){var statearr_16674 = state_16658;
(statearr_16674[(7)] = inst_16635__$1);

return statearr_16674;
})();
var statearr_16675_16697 = state_16658__$1;
(statearr_16675_16697[(2)] = null);

(statearr_16675_16697[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___16687,out))
;
return ((function (switch__13951__auto__,c__14065__auto___16687,out){
return (function() {
var cljs$core$async$state_machine__13952__auto__ = null;
var cljs$core$async$state_machine__13952__auto____0 = (function (){
var statearr_16679 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16679[(0)] = cljs$core$async$state_machine__13952__auto__);

(statearr_16679[(1)] = (1));

return statearr_16679;
});
var cljs$core$async$state_machine__13952__auto____1 = (function (state_16658){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_16658);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e16680){if((e16680 instanceof Object)){
var ex__13955__auto__ = e16680;
var statearr_16681_16698 = state_16658;
(statearr_16681_16698[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16658);

return cljs.core.cst$kw$recur;
} else {
throw e16680;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__16699 = state_16658;
state_16658 = G__16699;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$state_machine__13952__auto__ = function(state_16658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13952__auto____1.call(this,state_16658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13952__auto____0;
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13952__auto____1;
return cljs$core$async$state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___16687,out))
})();
var state__14067__auto__ = (function (){var statearr_16682 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_16682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___16687);

return statearr_16682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___16687,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16700 = [];
var len__7322__auto___16770 = arguments.length;
var i__7323__auto___16771 = (0);
while(true){
if((i__7323__auto___16771 < len__7322__auto___16770)){
args16700.push((arguments[i__7323__auto___16771]));

var G__16772 = (i__7323__auto___16771 + (1));
i__7323__auto___16771 = G__16772;
continue;
} else {
}
break;
}

var G__16702 = args16700.length;
switch (G__16702) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16700.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14065__auto___16774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___16774,out){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___16774,out){
return (function (state_16740){
var state_val_16741 = (state_16740[(1)]);
if((state_val_16741 === (7))){
var inst_16736 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
var statearr_16742_16775 = state_16740__$1;
(statearr_16742_16775[(2)] = inst_16736);

(statearr_16742_16775[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (1))){
var inst_16703 = (new Array(n));
var inst_16704 = inst_16703;
var inst_16705 = (0);
var state_16740__$1 = (function (){var statearr_16743 = state_16740;
(statearr_16743[(7)] = inst_16705);

(statearr_16743[(8)] = inst_16704);

return statearr_16743;
})();
var statearr_16744_16776 = state_16740__$1;
(statearr_16744_16776[(2)] = null);

(statearr_16744_16776[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (4))){
var inst_16708 = (state_16740[(9)]);
var inst_16708__$1 = (state_16740[(2)]);
var inst_16709 = (inst_16708__$1 == null);
var inst_16710 = cljs.core.not(inst_16709);
var state_16740__$1 = (function (){var statearr_16745 = state_16740;
(statearr_16745[(9)] = inst_16708__$1);

return statearr_16745;
})();
if(inst_16710){
var statearr_16746_16777 = state_16740__$1;
(statearr_16746_16777[(1)] = (5));

} else {
var statearr_16747_16778 = state_16740__$1;
(statearr_16747_16778[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (15))){
var inst_16730 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
var statearr_16748_16779 = state_16740__$1;
(statearr_16748_16779[(2)] = inst_16730);

(statearr_16748_16779[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (13))){
var state_16740__$1 = state_16740;
var statearr_16749_16780 = state_16740__$1;
(statearr_16749_16780[(2)] = null);

(statearr_16749_16780[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (6))){
var inst_16705 = (state_16740[(7)]);
var inst_16726 = (inst_16705 > (0));
var state_16740__$1 = state_16740;
if(cljs.core.truth_(inst_16726)){
var statearr_16750_16781 = state_16740__$1;
(statearr_16750_16781[(1)] = (12));

} else {
var statearr_16751_16782 = state_16740__$1;
(statearr_16751_16782[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (3))){
var inst_16738 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16740__$1,inst_16738);
} else {
if((state_val_16741 === (12))){
var inst_16704 = (state_16740[(8)]);
var inst_16728 = cljs.core.vec(inst_16704);
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16740__$1,(15),out,inst_16728);
} else {
if((state_val_16741 === (2))){
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16740__$1,(4),ch);
} else {
if((state_val_16741 === (11))){
var inst_16720 = (state_16740[(2)]);
var inst_16721 = (new Array(n));
var inst_16704 = inst_16721;
var inst_16705 = (0);
var state_16740__$1 = (function (){var statearr_16752 = state_16740;
(statearr_16752[(7)] = inst_16705);

(statearr_16752[(8)] = inst_16704);

(statearr_16752[(10)] = inst_16720);

return statearr_16752;
})();
var statearr_16753_16783 = state_16740__$1;
(statearr_16753_16783[(2)] = null);

(statearr_16753_16783[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (9))){
var inst_16704 = (state_16740[(8)]);
var inst_16718 = cljs.core.vec(inst_16704);
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16740__$1,(11),out,inst_16718);
} else {
if((state_val_16741 === (5))){
var inst_16705 = (state_16740[(7)]);
var inst_16713 = (state_16740[(11)]);
var inst_16708 = (state_16740[(9)]);
var inst_16704 = (state_16740[(8)]);
var inst_16712 = (inst_16704[inst_16705] = inst_16708);
var inst_16713__$1 = (inst_16705 + (1));
var inst_16714 = (inst_16713__$1 < n);
var state_16740__$1 = (function (){var statearr_16754 = state_16740;
(statearr_16754[(12)] = inst_16712);

(statearr_16754[(11)] = inst_16713__$1);

return statearr_16754;
})();
if(cljs.core.truth_(inst_16714)){
var statearr_16755_16784 = state_16740__$1;
(statearr_16755_16784[(1)] = (8));

} else {
var statearr_16756_16785 = state_16740__$1;
(statearr_16756_16785[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (14))){
var inst_16733 = (state_16740[(2)]);
var inst_16734 = cljs.core.async.close_BANG_(out);
var state_16740__$1 = (function (){var statearr_16758 = state_16740;
(statearr_16758[(13)] = inst_16733);

return statearr_16758;
})();
var statearr_16759_16786 = state_16740__$1;
(statearr_16759_16786[(2)] = inst_16734);

(statearr_16759_16786[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (10))){
var inst_16724 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
var statearr_16760_16787 = state_16740__$1;
(statearr_16760_16787[(2)] = inst_16724);

(statearr_16760_16787[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16741 === (8))){
var inst_16713 = (state_16740[(11)]);
var inst_16704 = (state_16740[(8)]);
var tmp16757 = inst_16704;
var inst_16704__$1 = tmp16757;
var inst_16705 = inst_16713;
var state_16740__$1 = (function (){var statearr_16761 = state_16740;
(statearr_16761[(7)] = inst_16705);

(statearr_16761[(8)] = inst_16704__$1);

return statearr_16761;
})();
var statearr_16762_16788 = state_16740__$1;
(statearr_16762_16788[(2)] = null);

(statearr_16762_16788[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___16774,out))
;
return ((function (switch__13951__auto__,c__14065__auto___16774,out){
return (function() {
var cljs$core$async$state_machine__13952__auto__ = null;
var cljs$core$async$state_machine__13952__auto____0 = (function (){
var statearr_16766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16766[(0)] = cljs$core$async$state_machine__13952__auto__);

(statearr_16766[(1)] = (1));

return statearr_16766;
});
var cljs$core$async$state_machine__13952__auto____1 = (function (state_16740){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_16740);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e16767){if((e16767 instanceof Object)){
var ex__13955__auto__ = e16767;
var statearr_16768_16789 = state_16740;
(statearr_16768_16789[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16740);

return cljs.core.cst$kw$recur;
} else {
throw e16767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__16790 = state_16740;
state_16740 = G__16790;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$state_machine__13952__auto__ = function(state_16740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13952__auto____1.call(this,state_16740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13952__auto____0;
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13952__auto____1;
return cljs$core$async$state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___16774,out))
})();
var state__14067__auto__ = (function (){var statearr_16769 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_16769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___16774);

return statearr_16769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___16774,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16791 = [];
var len__7322__auto___16865 = arguments.length;
var i__7323__auto___16866 = (0);
while(true){
if((i__7323__auto___16866 < len__7322__auto___16865)){
args16791.push((arguments[i__7323__auto___16866]));

var G__16867 = (i__7323__auto___16866 + (1));
i__7323__auto___16866 = G__16867;
continue;
} else {
}
break;
}

var G__16793 = args16791.length;
switch (G__16793) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16791.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14065__auto___16869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14065__auto___16869,out){
return (function (){
var f__14066__auto__ = (function (){var switch__13951__auto__ = ((function (c__14065__auto___16869,out){
return (function (state_16835){
var state_val_16836 = (state_16835[(1)]);
if((state_val_16836 === (7))){
var inst_16831 = (state_16835[(2)]);
var state_16835__$1 = state_16835;
var statearr_16837_16870 = state_16835__$1;
(statearr_16837_16870[(2)] = inst_16831);

(statearr_16837_16870[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16836 === (1))){
var inst_16794 = [];
var inst_16795 = inst_16794;
var inst_16796 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_16835__$1 = (function (){var statearr_16838 = state_16835;
(statearr_16838[(7)] = inst_16795);

(statearr_16838[(8)] = inst_16796);

return statearr_16838;
})();
var statearr_16839_16871 = state_16835__$1;
(statearr_16839_16871[(2)] = null);

(statearr_16839_16871[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16836 === (4))){
var inst_16799 = (state_16835[(9)]);
var inst_16799__$1 = (state_16835[(2)]);
var inst_16800 = (inst_16799__$1 == null);
var inst_16801 = cljs.core.not(inst_16800);
var state_16835__$1 = (function (){var statearr_16840 = state_16835;
(statearr_16840[(9)] = inst_16799__$1);

return statearr_16840;
})();
if(inst_16801){
var statearr_16841_16872 = state_16835__$1;
(statearr_16841_16872[(1)] = (5));

} else {
var statearr_16842_16873 = state_16835__$1;
(statearr_16842_16873[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16836 === (15))){
var inst_16825 = (state_16835[(2)]);
var state_16835__$1 = state_16835;
var statearr_16843_16874 = state_16835__$1;
(statearr_16843_16874[(2)] = inst_16825);

(statearr_16843_16874[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16836 === (13))){
var state_16835__$1 = state_16835;
var statearr_16844_16875 = state_16835__$1;
(statearr_16844_16875[(2)] = null);

(statearr_16844_16875[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16836 === (6))){
var inst_16795 = (state_16835[(7)]);
var inst_16820 = inst_16795.length;
var inst_16821 = (inst_16820 > (0));
var state_16835__$1 = state_16835;
if(cljs.core.truth_(inst_16821)){
var statearr_16845_16876 = state_16835__$1;
(statearr_16845_16876[(1)] = (12));

} else {
var statearr_16846_16877 = state_16835__$1;
(statearr_16846_16877[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16836 === (3))){
var inst_16833 = (state_16835[(2)]);
var state_16835__$1 = state_16835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16835__$1,inst_16833);
} else {
if((state_val_16836 === (12))){
var inst_16795 = (state_16835[(7)]);
var inst_16823 = cljs.core.vec(inst_16795);
var state_16835__$1 = state_16835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16835__$1,(15),out,inst_16823);
} else {
if((state_val_16836 === (2))){
var state_16835__$1 = state_16835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16835__$1,(4),ch);
} else {
if((state_val_16836 === (11))){
var inst_16803 = (state_16835[(10)]);
var inst_16799 = (state_16835[(9)]);
var inst_16813 = (state_16835[(2)]);
var inst_16814 = [];
var inst_16815 = inst_16814.push(inst_16799);
var inst_16795 = inst_16814;
var inst_16796 = inst_16803;
var state_16835__$1 = (function (){var statearr_16847 = state_16835;
(statearr_16847[(7)] = inst_16795);

(statearr_16847[(8)] = inst_16796);

(statearr_16847[(11)] = inst_16815);

(statearr_16847[(12)] = inst_16813);

return statearr_16847;
})();
var statearr_16848_16878 = state_16835__$1;
(statearr_16848_16878[(2)] = null);

(statearr_16848_16878[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16836 === (9))){
var inst_16795 = (state_16835[(7)]);
var inst_16811 = cljs.core.vec(inst_16795);
var state_16835__$1 = state_16835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16835__$1,(11),out,inst_16811);
} else {
if((state_val_16836 === (5))){
var inst_16803 = (state_16835[(10)]);
var inst_16799 = (state_16835[(9)]);
var inst_16796 = (state_16835[(8)]);
var inst_16803__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16799) : f.call(null,inst_16799));
var inst_16804 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16803__$1,inst_16796);
var inst_16805 = cljs.core.keyword_identical_QMARK_(inst_16796,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_16806 = (inst_16804) || (inst_16805);
var state_16835__$1 = (function (){var statearr_16849 = state_16835;
(statearr_16849[(10)] = inst_16803__$1);

return statearr_16849;
})();
if(cljs.core.truth_(inst_16806)){
var statearr_16850_16879 = state_16835__$1;
(statearr_16850_16879[(1)] = (8));

} else {
var statearr_16851_16880 = state_16835__$1;
(statearr_16851_16880[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16836 === (14))){
var inst_16828 = (state_16835[(2)]);
var inst_16829 = cljs.core.async.close_BANG_(out);
var state_16835__$1 = (function (){var statearr_16853 = state_16835;
(statearr_16853[(13)] = inst_16828);

return statearr_16853;
})();
var statearr_16854_16881 = state_16835__$1;
(statearr_16854_16881[(2)] = inst_16829);

(statearr_16854_16881[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16836 === (10))){
var inst_16818 = (state_16835[(2)]);
var state_16835__$1 = state_16835;
var statearr_16855_16882 = state_16835__$1;
(statearr_16855_16882[(2)] = inst_16818);

(statearr_16855_16882[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16836 === (8))){
var inst_16803 = (state_16835[(10)]);
var inst_16799 = (state_16835[(9)]);
var inst_16795 = (state_16835[(7)]);
var inst_16808 = inst_16795.push(inst_16799);
var tmp16852 = inst_16795;
var inst_16795__$1 = tmp16852;
var inst_16796 = inst_16803;
var state_16835__$1 = (function (){var statearr_16856 = state_16835;
(statearr_16856[(7)] = inst_16795__$1);

(statearr_16856[(8)] = inst_16796);

(statearr_16856[(14)] = inst_16808);

return statearr_16856;
})();
var statearr_16857_16883 = state_16835__$1;
(statearr_16857_16883[(2)] = null);

(statearr_16857_16883[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14065__auto___16869,out))
;
return ((function (switch__13951__auto__,c__14065__auto___16869,out){
return (function() {
var cljs$core$async$state_machine__13952__auto__ = null;
var cljs$core$async$state_machine__13952__auto____0 = (function (){
var statearr_16861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16861[(0)] = cljs$core$async$state_machine__13952__auto__);

(statearr_16861[(1)] = (1));

return statearr_16861;
});
var cljs$core$async$state_machine__13952__auto____1 = (function (state_16835){
while(true){
var ret_value__13953__auto__ = (function (){try{while(true){
var result__13954__auto__ = switch__13951__auto__(state_16835);
if(cljs.core.keyword_identical_QMARK_(result__13954__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13954__auto__;
}
break;
}
}catch (e16862){if((e16862 instanceof Object)){
var ex__13955__auto__ = e16862;
var statearr_16863_16884 = state_16835;
(statearr_16863_16884[(5)] = ex__13955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16835);

return cljs.core.cst$kw$recur;
} else {
throw e16862;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13953__auto__,cljs.core.cst$kw$recur)){
var G__16885 = state_16835;
state_16835 = G__16885;
continue;
} else {
return ret_value__13953__auto__;
}
break;
}
});
cljs$core$async$state_machine__13952__auto__ = function(state_16835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13952__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13952__auto____1.call(this,state_16835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13952__auto____0;
cljs$core$async$state_machine__13952__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13952__auto____1;
return cljs$core$async$state_machine__13952__auto__;
})()
;})(switch__13951__auto__,c__14065__auto___16869,out))
})();
var state__14067__auto__ = (function (){var statearr_16864 = (f__14066__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14066__auto__.cljs$core$IFn$_invoke$arity$0() : f__14066__auto__.call(null));
(statearr_16864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14065__auto___16869);

return statearr_16864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14067__auto__);
});})(c__14065__auto___16869,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

