// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30366 = [];
var len__21033__auto___30372 = arguments.length;
var i__21034__auto___30373 = (0);
while(true){
if((i__21034__auto___30373 < len__21033__auto___30372)){
args30366.push((arguments[i__21034__auto___30373]));

var G__30374 = (i__21034__auto___30373 + (1));
i__21034__auto___30373 = G__30374;
continue;
} else {
}
break;
}

var G__30368 = args30366.length;
switch (G__30368) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30366.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30369 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30369 = (function (f,blockable,meta30370){
this.f = f;
this.blockable = blockable;
this.meta30370 = meta30370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30371,meta30370__$1){
var self__ = this;
var _30371__$1 = this;
return (new cljs.core.async.t_cljs$core$async30369(self__.f,self__.blockable,meta30370__$1));
});

cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30371){
var self__ = this;
var _30371__$1 = this;
return self__.meta30370;
});

cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30370","meta30370",-1558712696,null)], null);
});

cljs.core.async.t_cljs$core$async30369.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30369";

cljs.core.async.t_cljs$core$async30369.cljs$lang$ctorPrWriter = (function (this__20564__auto__,writer__20565__auto__,opt__20566__auto__){
return cljs.core._write.call(null,writer__20565__auto__,"cljs.core.async/t_cljs$core$async30369");
});

cljs.core.async.__GT_t_cljs$core$async30369 = (function cljs$core$async$__GT_t_cljs$core$async30369(f__$1,blockable__$1,meta30370){
return (new cljs.core.async.t_cljs$core$async30369(f__$1,blockable__$1,meta30370));
});

}

return (new cljs.core.async.t_cljs$core$async30369(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args30378 = [];
var len__21033__auto___30381 = arguments.length;
var i__21034__auto___30382 = (0);
while(true){
if((i__21034__auto___30382 < len__21033__auto___30381)){
args30378.push((arguments[i__21034__auto___30382]));

var G__30383 = (i__21034__auto___30382 + (1));
i__21034__auto___30382 = G__30383;
continue;
} else {
}
break;
}

var G__30380 = args30378.length;
switch (G__30380) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30378.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args30385 = [];
var len__21033__auto___30388 = arguments.length;
var i__21034__auto___30389 = (0);
while(true){
if((i__21034__auto___30389 < len__21033__auto___30388)){
args30385.push((arguments[i__21034__auto___30389]));

var G__30390 = (i__21034__auto___30389 + (1));
i__21034__auto___30389 = G__30390;
continue;
} else {
}
break;
}

var G__30387 = args30385.length;
switch (G__30387) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30385.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args30392 = [];
var len__21033__auto___30395 = arguments.length;
var i__21034__auto___30396 = (0);
while(true){
if((i__21034__auto___30396 < len__21033__auto___30395)){
args30392.push((arguments[i__21034__auto___30396]));

var G__30397 = (i__21034__auto___30396 + (1));
i__21034__auto___30396 = G__30397;
continue;
} else {
}
break;
}

var G__30394 = args30392.length;
switch (G__30394) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30392.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30399 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30399);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30399,ret){
return (function (){
return fn1.call(null,val_30399);
});})(val_30399,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args30400 = [];
var len__21033__auto___30403 = arguments.length;
var i__21034__auto___30404 = (0);
while(true){
if((i__21034__auto___30404 < len__21033__auto___30403)){
args30400.push((arguments[i__21034__auto___30404]));

var G__30405 = (i__21034__auto___30404 + (1));
i__21034__auto___30404 = G__30405;
continue;
} else {
}
break;
}

var G__30402 = args30400.length;
switch (G__30402) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30400.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20873__auto___30407 = n;
var x_30408 = (0);
while(true){
if((x_30408 < n__20873__auto___30407)){
(a[x_30408] = (0));

var G__30409 = (x_30408 + (1));
x_30408 = G__30409;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30410 = (i + (1));
i = G__30410;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30414 = (function (alt_flag,flag,meta30415){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30415 = meta30415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30416,meta30415__$1){
var self__ = this;
var _30416__$1 = this;
return (new cljs.core.async.t_cljs$core$async30414(self__.alt_flag,self__.flag,meta30415__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30416){
var self__ = this;
var _30416__$1 = this;
return self__.meta30415;
});})(flag))
;

cljs.core.async.t_cljs$core$async30414.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30414.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30415","meta30415",1707651938,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30414";

cljs.core.async.t_cljs$core$async30414.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20564__auto__,writer__20565__auto__,opt__20566__auto__){
return cljs.core._write.call(null,writer__20565__auto__,"cljs.core.async/t_cljs$core$async30414");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30414 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30414(alt_flag__$1,flag__$1,meta30415){
return (new cljs.core.async.t_cljs$core$async30414(alt_flag__$1,flag__$1,meta30415));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30414(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30420 = (function (alt_handler,flag,cb,meta30421){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30421 = meta30421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30422,meta30421__$1){
var self__ = this;
var _30422__$1 = this;
return (new cljs.core.async.t_cljs$core$async30420(self__.alt_handler,self__.flag,self__.cb,meta30421__$1));
});

cljs.core.async.t_cljs$core$async30420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30422){
var self__ = this;
var _30422__$1 = this;
return self__.meta30421;
});

cljs.core.async.t_cljs$core$async30420.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30420.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30421","meta30421",1027108710,null)], null);
});

cljs.core.async.t_cljs$core$async30420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30420";

cljs.core.async.t_cljs$core$async30420.cljs$lang$ctorPrWriter = (function (this__20564__auto__,writer__20565__auto__,opt__20566__auto__){
return cljs.core._write.call(null,writer__20565__auto__,"cljs.core.async/t_cljs$core$async30420");
});

cljs.core.async.__GT_t_cljs$core$async30420 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30420(alt_handler__$1,flag__$1,cb__$1,meta30421){
return (new cljs.core.async.t_cljs$core$async30420(alt_handler__$1,flag__$1,cb__$1,meta30421));
});

}

return (new cljs.core.async.t_cljs$core$async30420(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30423_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30423_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30424_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30424_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19958__auto__ = wport;
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30425 = (i + (1));
i = G__30425;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19958__auto__ = ret;
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__19946__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19946__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19946__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__21040__auto__ = [];
var len__21033__auto___30431 = arguments.length;
var i__21034__auto___30432 = (0);
while(true){
if((i__21034__auto___30432 < len__21033__auto___30431)){
args__21040__auto__.push((arguments[i__21034__auto___30432]));

var G__30433 = (i__21034__auto___30432 + (1));
i__21034__auto___30432 = G__30433;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((1) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21041__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30428){
var map__30429 = p__30428;
var map__30429__$1 = ((((!((map__30429 == null)))?((((map__30429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30429):map__30429);
var opts = map__30429__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30426){
var G__30427 = cljs.core.first.call(null,seq30426);
var seq30426__$1 = cljs.core.next.call(null,seq30426);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30427,seq30426__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args30434 = [];
var len__21033__auto___30484 = arguments.length;
var i__21034__auto___30485 = (0);
while(true){
if((i__21034__auto___30485 < len__21033__auto___30484)){
args30434.push((arguments[i__21034__auto___30485]));

var G__30486 = (i__21034__auto___30485 + (1));
i__21034__auto___30485 = G__30486;
continue;
} else {
}
break;
}

var G__30436 = args30434.length;
switch (G__30436) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30434.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22804__auto___30488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___30488){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___30488){
return (function (state_30460){
var state_val_30461 = (state_30460[(1)]);
if((state_val_30461 === (7))){
var inst_30456 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30462_30489 = state_30460__$1;
(statearr_30462_30489[(2)] = inst_30456);

(statearr_30462_30489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (1))){
var state_30460__$1 = state_30460;
var statearr_30463_30490 = state_30460__$1;
(statearr_30463_30490[(2)] = null);

(statearr_30463_30490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (4))){
var inst_30439 = (state_30460[(7)]);
var inst_30439__$1 = (state_30460[(2)]);
var inst_30440 = (inst_30439__$1 == null);
var state_30460__$1 = (function (){var statearr_30464 = state_30460;
(statearr_30464[(7)] = inst_30439__$1);

return statearr_30464;
})();
if(cljs.core.truth_(inst_30440)){
var statearr_30465_30491 = state_30460__$1;
(statearr_30465_30491[(1)] = (5));

} else {
var statearr_30466_30492 = state_30460__$1;
(statearr_30466_30492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (13))){
var state_30460__$1 = state_30460;
var statearr_30467_30493 = state_30460__$1;
(statearr_30467_30493[(2)] = null);

(statearr_30467_30493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (6))){
var inst_30439 = (state_30460[(7)]);
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30460__$1,(11),to,inst_30439);
} else {
if((state_val_30461 === (3))){
var inst_30458 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30460__$1,inst_30458);
} else {
if((state_val_30461 === (12))){
var state_30460__$1 = state_30460;
var statearr_30468_30494 = state_30460__$1;
(statearr_30468_30494[(2)] = null);

(statearr_30468_30494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (2))){
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30460__$1,(4),from);
} else {
if((state_val_30461 === (11))){
var inst_30449 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
if(cljs.core.truth_(inst_30449)){
var statearr_30469_30495 = state_30460__$1;
(statearr_30469_30495[(1)] = (12));

} else {
var statearr_30470_30496 = state_30460__$1;
(statearr_30470_30496[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (9))){
var state_30460__$1 = state_30460;
var statearr_30471_30497 = state_30460__$1;
(statearr_30471_30497[(2)] = null);

(statearr_30471_30497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (5))){
var state_30460__$1 = state_30460;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30472_30498 = state_30460__$1;
(statearr_30472_30498[(1)] = (8));

} else {
var statearr_30473_30499 = state_30460__$1;
(statearr_30473_30499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (14))){
var inst_30454 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30474_30500 = state_30460__$1;
(statearr_30474_30500[(2)] = inst_30454);

(statearr_30474_30500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (10))){
var inst_30446 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30475_30501 = state_30460__$1;
(statearr_30475_30501[(2)] = inst_30446);

(statearr_30475_30501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (8))){
var inst_30443 = cljs.core.async.close_BANG_.call(null,to);
var state_30460__$1 = state_30460;
var statearr_30476_30502 = state_30460__$1;
(statearr_30476_30502[(2)] = inst_30443);

(statearr_30476_30502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto___30488))
;
return ((function (switch__22783__auto__,c__22804__auto___30488){
return (function() {
var cljs$core$async$state_machine__22784__auto__ = null;
var cljs$core$async$state_machine__22784__auto____0 = (function (){
var statearr_30480 = [null,null,null,null,null,null,null,null];
(statearr_30480[(0)] = cljs$core$async$state_machine__22784__auto__);

(statearr_30480[(1)] = (1));

return statearr_30480;
});
var cljs$core$async$state_machine__22784__auto____1 = (function (state_30460){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_30460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e30481){if((e30481 instanceof Object)){
var ex__22787__auto__ = e30481;
var statearr_30482_30503 = state_30460;
(statearr_30482_30503[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30504 = state_30460;
state_30460 = G__30504;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$state_machine__22784__auto__ = function(state_30460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22784__auto____1.call(this,state_30460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22784__auto____0;
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22784__auto____1;
return cljs$core$async$state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___30488))
})();
var state__22806__auto__ = (function (){var statearr_30483 = f__22805__auto__.call(null);
(statearr_30483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___30488);

return statearr_30483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___30488))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30692){
var vec__30693 = p__30692;
var v = cljs.core.nth.call(null,vec__30693,(0),null);
var p = cljs.core.nth.call(null,vec__30693,(1),null);
var job = vec__30693;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22804__auto___30879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___30879,res,vec__30693,v,p,job,jobs,results){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___30879,res,vec__30693,v,p,job,jobs,results){
return (function (state_30700){
var state_val_30701 = (state_30700[(1)]);
if((state_val_30701 === (1))){
var state_30700__$1 = state_30700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30700__$1,(2),res,v);
} else {
if((state_val_30701 === (2))){
var inst_30697 = (state_30700[(2)]);
var inst_30698 = cljs.core.async.close_BANG_.call(null,res);
var state_30700__$1 = (function (){var statearr_30702 = state_30700;
(statearr_30702[(7)] = inst_30697);

return statearr_30702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30700__$1,inst_30698);
} else {
return null;
}
}
});})(c__22804__auto___30879,res,vec__30693,v,p,job,jobs,results))
;
return ((function (switch__22783__auto__,c__22804__auto___30879,res,vec__30693,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0 = (function (){
var statearr_30706 = [null,null,null,null,null,null,null,null];
(statearr_30706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__);

(statearr_30706[(1)] = (1));

return statearr_30706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1 = (function (state_30700){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_30700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e30707){if((e30707 instanceof Object)){
var ex__22787__auto__ = e30707;
var statearr_30708_30880 = state_30700;
(statearr_30708_30880[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30881 = state_30700;
state_30700 = G__30881;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__ = function(state_30700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1.call(this,state_30700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___30879,res,vec__30693,v,p,job,jobs,results))
})();
var state__22806__auto__ = (function (){var statearr_30709 = f__22805__auto__.call(null);
(statearr_30709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___30879);

return statearr_30709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___30879,res,vec__30693,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30710){
var vec__30711 = p__30710;
var v = cljs.core.nth.call(null,vec__30711,(0),null);
var p = cljs.core.nth.call(null,vec__30711,(1),null);
var job = vec__30711;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__20873__auto___30882 = n;
var __30883 = (0);
while(true){
if((__30883 < n__20873__auto___30882)){
var G__30714_30884 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30714_30884) {
case "compute":
var c__22804__auto___30886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30883,c__22804__auto___30886,G__30714_30884,n__20873__auto___30882,jobs,results,process,async){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (__30883,c__22804__auto___30886,G__30714_30884,n__20873__auto___30882,jobs,results,process,async){
return (function (state_30727){
var state_val_30728 = (state_30727[(1)]);
if((state_val_30728 === (1))){
var state_30727__$1 = state_30727;
var statearr_30729_30887 = state_30727__$1;
(statearr_30729_30887[(2)] = null);

(statearr_30729_30887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (2))){
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30727__$1,(4),jobs);
} else {
if((state_val_30728 === (3))){
var inst_30725 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30727__$1,inst_30725);
} else {
if((state_val_30728 === (4))){
var inst_30717 = (state_30727[(2)]);
var inst_30718 = process.call(null,inst_30717);
var state_30727__$1 = state_30727;
if(cljs.core.truth_(inst_30718)){
var statearr_30730_30888 = state_30727__$1;
(statearr_30730_30888[(1)] = (5));

} else {
var statearr_30731_30889 = state_30727__$1;
(statearr_30731_30889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (5))){
var state_30727__$1 = state_30727;
var statearr_30732_30890 = state_30727__$1;
(statearr_30732_30890[(2)] = null);

(statearr_30732_30890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (6))){
var state_30727__$1 = state_30727;
var statearr_30733_30891 = state_30727__$1;
(statearr_30733_30891[(2)] = null);

(statearr_30733_30891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (7))){
var inst_30723 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30734_30892 = state_30727__$1;
(statearr_30734_30892[(2)] = inst_30723);

(statearr_30734_30892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30883,c__22804__auto___30886,G__30714_30884,n__20873__auto___30882,jobs,results,process,async))
;
return ((function (__30883,switch__22783__auto__,c__22804__auto___30886,G__30714_30884,n__20873__auto___30882,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0 = (function (){
var statearr_30738 = [null,null,null,null,null,null,null];
(statearr_30738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__);

(statearr_30738[(1)] = (1));

return statearr_30738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1 = (function (state_30727){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_30727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e30739){if((e30739 instanceof Object)){
var ex__22787__auto__ = e30739;
var statearr_30740_30893 = state_30727;
(statearr_30740_30893[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30894 = state_30727;
state_30727 = G__30894;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__ = function(state_30727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1.call(this,state_30727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__;
})()
;})(__30883,switch__22783__auto__,c__22804__auto___30886,G__30714_30884,n__20873__auto___30882,jobs,results,process,async))
})();
var state__22806__auto__ = (function (){var statearr_30741 = f__22805__auto__.call(null);
(statearr_30741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___30886);

return statearr_30741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(__30883,c__22804__auto___30886,G__30714_30884,n__20873__auto___30882,jobs,results,process,async))
);


break;
case "async":
var c__22804__auto___30895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30883,c__22804__auto___30895,G__30714_30884,n__20873__auto___30882,jobs,results,process,async){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (__30883,c__22804__auto___30895,G__30714_30884,n__20873__auto___30882,jobs,results,process,async){
return (function (state_30754){
var state_val_30755 = (state_30754[(1)]);
if((state_val_30755 === (1))){
var state_30754__$1 = state_30754;
var statearr_30756_30896 = state_30754__$1;
(statearr_30756_30896[(2)] = null);

(statearr_30756_30896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30755 === (2))){
var state_30754__$1 = state_30754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30754__$1,(4),jobs);
} else {
if((state_val_30755 === (3))){
var inst_30752 = (state_30754[(2)]);
var state_30754__$1 = state_30754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30754__$1,inst_30752);
} else {
if((state_val_30755 === (4))){
var inst_30744 = (state_30754[(2)]);
var inst_30745 = async.call(null,inst_30744);
var state_30754__$1 = state_30754;
if(cljs.core.truth_(inst_30745)){
var statearr_30757_30897 = state_30754__$1;
(statearr_30757_30897[(1)] = (5));

} else {
var statearr_30758_30898 = state_30754__$1;
(statearr_30758_30898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30755 === (5))){
var state_30754__$1 = state_30754;
var statearr_30759_30899 = state_30754__$1;
(statearr_30759_30899[(2)] = null);

(statearr_30759_30899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30755 === (6))){
var state_30754__$1 = state_30754;
var statearr_30760_30900 = state_30754__$1;
(statearr_30760_30900[(2)] = null);

(statearr_30760_30900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30755 === (7))){
var inst_30750 = (state_30754[(2)]);
var state_30754__$1 = state_30754;
var statearr_30761_30901 = state_30754__$1;
(statearr_30761_30901[(2)] = inst_30750);

(statearr_30761_30901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30883,c__22804__auto___30895,G__30714_30884,n__20873__auto___30882,jobs,results,process,async))
;
return ((function (__30883,switch__22783__auto__,c__22804__auto___30895,G__30714_30884,n__20873__auto___30882,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0 = (function (){
var statearr_30765 = [null,null,null,null,null,null,null];
(statearr_30765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__);

(statearr_30765[(1)] = (1));

return statearr_30765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1 = (function (state_30754){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_30754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e30766){if((e30766 instanceof Object)){
var ex__22787__auto__ = e30766;
var statearr_30767_30902 = state_30754;
(statearr_30767_30902[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30903 = state_30754;
state_30754 = G__30903;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__ = function(state_30754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1.call(this,state_30754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__;
})()
;})(__30883,switch__22783__auto__,c__22804__auto___30895,G__30714_30884,n__20873__auto___30882,jobs,results,process,async))
})();
var state__22806__auto__ = (function (){var statearr_30768 = f__22805__auto__.call(null);
(statearr_30768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___30895);

return statearr_30768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(__30883,c__22804__auto___30895,G__30714_30884,n__20873__auto___30882,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30904 = (__30883 + (1));
__30883 = G__30904;
continue;
} else {
}
break;
}

var c__22804__auto___30905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___30905,jobs,results,process,async){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___30905,jobs,results,process,async){
return (function (state_30790){
var state_val_30791 = (state_30790[(1)]);
if((state_val_30791 === (1))){
var state_30790__$1 = state_30790;
var statearr_30792_30906 = state_30790__$1;
(statearr_30792_30906[(2)] = null);

(statearr_30792_30906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (2))){
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30790__$1,(4),from);
} else {
if((state_val_30791 === (3))){
var inst_30788 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30790__$1,inst_30788);
} else {
if((state_val_30791 === (4))){
var inst_30771 = (state_30790[(7)]);
var inst_30771__$1 = (state_30790[(2)]);
var inst_30772 = (inst_30771__$1 == null);
var state_30790__$1 = (function (){var statearr_30793 = state_30790;
(statearr_30793[(7)] = inst_30771__$1);

return statearr_30793;
})();
if(cljs.core.truth_(inst_30772)){
var statearr_30794_30907 = state_30790__$1;
(statearr_30794_30907[(1)] = (5));

} else {
var statearr_30795_30908 = state_30790__$1;
(statearr_30795_30908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (5))){
var inst_30774 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30790__$1 = state_30790;
var statearr_30796_30909 = state_30790__$1;
(statearr_30796_30909[(2)] = inst_30774);

(statearr_30796_30909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (6))){
var inst_30771 = (state_30790[(7)]);
var inst_30776 = (state_30790[(8)]);
var inst_30776__$1 = cljs.core.async.chan.call(null,(1));
var inst_30777 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30778 = [inst_30771,inst_30776__$1];
var inst_30779 = (new cljs.core.PersistentVector(null,2,(5),inst_30777,inst_30778,null));
var state_30790__$1 = (function (){var statearr_30797 = state_30790;
(statearr_30797[(8)] = inst_30776__$1);

return statearr_30797;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30790__$1,(8),jobs,inst_30779);
} else {
if((state_val_30791 === (7))){
var inst_30786 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30798_30910 = state_30790__$1;
(statearr_30798_30910[(2)] = inst_30786);

(statearr_30798_30910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (8))){
var inst_30776 = (state_30790[(8)]);
var inst_30781 = (state_30790[(2)]);
var state_30790__$1 = (function (){var statearr_30799 = state_30790;
(statearr_30799[(9)] = inst_30781);

return statearr_30799;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30790__$1,(9),results,inst_30776);
} else {
if((state_val_30791 === (9))){
var inst_30783 = (state_30790[(2)]);
var state_30790__$1 = (function (){var statearr_30800 = state_30790;
(statearr_30800[(10)] = inst_30783);

return statearr_30800;
})();
var statearr_30801_30911 = state_30790__$1;
(statearr_30801_30911[(2)] = null);

(statearr_30801_30911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto___30905,jobs,results,process,async))
;
return ((function (switch__22783__auto__,c__22804__auto___30905,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0 = (function (){
var statearr_30805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__);

(statearr_30805[(1)] = (1));

return statearr_30805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1 = (function (state_30790){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_30790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e30806){if((e30806 instanceof Object)){
var ex__22787__auto__ = e30806;
var statearr_30807_30912 = state_30790;
(statearr_30807_30912[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30913 = state_30790;
state_30790 = G__30913;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__ = function(state_30790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1.call(this,state_30790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___30905,jobs,results,process,async))
})();
var state__22806__auto__ = (function (){var statearr_30808 = f__22805__auto__.call(null);
(statearr_30808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___30905);

return statearr_30808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___30905,jobs,results,process,async))
);


var c__22804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto__,jobs,results,process,async){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto__,jobs,results,process,async){
return (function (state_30846){
var state_val_30847 = (state_30846[(1)]);
if((state_val_30847 === (7))){
var inst_30842 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
var statearr_30848_30914 = state_30846__$1;
(statearr_30848_30914[(2)] = inst_30842);

(statearr_30848_30914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (20))){
var state_30846__$1 = state_30846;
var statearr_30849_30915 = state_30846__$1;
(statearr_30849_30915[(2)] = null);

(statearr_30849_30915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (1))){
var state_30846__$1 = state_30846;
var statearr_30850_30916 = state_30846__$1;
(statearr_30850_30916[(2)] = null);

(statearr_30850_30916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (4))){
var inst_30811 = (state_30846[(7)]);
var inst_30811__$1 = (state_30846[(2)]);
var inst_30812 = (inst_30811__$1 == null);
var state_30846__$1 = (function (){var statearr_30851 = state_30846;
(statearr_30851[(7)] = inst_30811__$1);

return statearr_30851;
})();
if(cljs.core.truth_(inst_30812)){
var statearr_30852_30917 = state_30846__$1;
(statearr_30852_30917[(1)] = (5));

} else {
var statearr_30853_30918 = state_30846__$1;
(statearr_30853_30918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (15))){
var inst_30824 = (state_30846[(8)]);
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30846__$1,(18),to,inst_30824);
} else {
if((state_val_30847 === (21))){
var inst_30837 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
var statearr_30854_30919 = state_30846__$1;
(statearr_30854_30919[(2)] = inst_30837);

(statearr_30854_30919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (13))){
var inst_30839 = (state_30846[(2)]);
var state_30846__$1 = (function (){var statearr_30855 = state_30846;
(statearr_30855[(9)] = inst_30839);

return statearr_30855;
})();
var statearr_30856_30920 = state_30846__$1;
(statearr_30856_30920[(2)] = null);

(statearr_30856_30920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (6))){
var inst_30811 = (state_30846[(7)]);
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30846__$1,(11),inst_30811);
} else {
if((state_val_30847 === (17))){
var inst_30832 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
if(cljs.core.truth_(inst_30832)){
var statearr_30857_30921 = state_30846__$1;
(statearr_30857_30921[(1)] = (19));

} else {
var statearr_30858_30922 = state_30846__$1;
(statearr_30858_30922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (3))){
var inst_30844 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30846__$1,inst_30844);
} else {
if((state_val_30847 === (12))){
var inst_30821 = (state_30846[(10)]);
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30846__$1,(14),inst_30821);
} else {
if((state_val_30847 === (2))){
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30846__$1,(4),results);
} else {
if((state_val_30847 === (19))){
var state_30846__$1 = state_30846;
var statearr_30859_30923 = state_30846__$1;
(statearr_30859_30923[(2)] = null);

(statearr_30859_30923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (11))){
var inst_30821 = (state_30846[(2)]);
var state_30846__$1 = (function (){var statearr_30860 = state_30846;
(statearr_30860[(10)] = inst_30821);

return statearr_30860;
})();
var statearr_30861_30924 = state_30846__$1;
(statearr_30861_30924[(2)] = null);

(statearr_30861_30924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (9))){
var state_30846__$1 = state_30846;
var statearr_30862_30925 = state_30846__$1;
(statearr_30862_30925[(2)] = null);

(statearr_30862_30925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (5))){
var state_30846__$1 = state_30846;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30863_30926 = state_30846__$1;
(statearr_30863_30926[(1)] = (8));

} else {
var statearr_30864_30927 = state_30846__$1;
(statearr_30864_30927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (14))){
var inst_30826 = (state_30846[(11)]);
var inst_30824 = (state_30846[(8)]);
var inst_30824__$1 = (state_30846[(2)]);
var inst_30825 = (inst_30824__$1 == null);
var inst_30826__$1 = cljs.core.not.call(null,inst_30825);
var state_30846__$1 = (function (){var statearr_30865 = state_30846;
(statearr_30865[(11)] = inst_30826__$1);

(statearr_30865[(8)] = inst_30824__$1);

return statearr_30865;
})();
if(inst_30826__$1){
var statearr_30866_30928 = state_30846__$1;
(statearr_30866_30928[(1)] = (15));

} else {
var statearr_30867_30929 = state_30846__$1;
(statearr_30867_30929[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (16))){
var inst_30826 = (state_30846[(11)]);
var state_30846__$1 = state_30846;
var statearr_30868_30930 = state_30846__$1;
(statearr_30868_30930[(2)] = inst_30826);

(statearr_30868_30930[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (10))){
var inst_30818 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
var statearr_30869_30931 = state_30846__$1;
(statearr_30869_30931[(2)] = inst_30818);

(statearr_30869_30931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (18))){
var inst_30829 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
var statearr_30870_30932 = state_30846__$1;
(statearr_30870_30932[(2)] = inst_30829);

(statearr_30870_30932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (8))){
var inst_30815 = cljs.core.async.close_BANG_.call(null,to);
var state_30846__$1 = state_30846;
var statearr_30871_30933 = state_30846__$1;
(statearr_30871_30933[(2)] = inst_30815);

(statearr_30871_30933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto__,jobs,results,process,async))
;
return ((function (switch__22783__auto__,c__22804__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0 = (function (){
var statearr_30875 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__);

(statearr_30875[(1)] = (1));

return statearr_30875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1 = (function (state_30846){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_30846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e30876){if((e30876 instanceof Object)){
var ex__22787__auto__ = e30876;
var statearr_30877_30934 = state_30846;
(statearr_30877_30934[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30935 = state_30846;
state_30846 = G__30935;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__ = function(state_30846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1.call(this,state_30846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22784__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto__,jobs,results,process,async))
})();
var state__22806__auto__ = (function (){var statearr_30878 = f__22805__auto__.call(null);
(statearr_30878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto__);

return statearr_30878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto__,jobs,results,process,async))
);

return c__22804__auto__;
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
var args30936 = [];
var len__21033__auto___30939 = arguments.length;
var i__21034__auto___30940 = (0);
while(true){
if((i__21034__auto___30940 < len__21033__auto___30939)){
args30936.push((arguments[i__21034__auto___30940]));

var G__30941 = (i__21034__auto___30940 + (1));
i__21034__auto___30940 = G__30941;
continue;
} else {
}
break;
}

var G__30938 = args30936.length;
switch (G__30938) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30936.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args30943 = [];
var len__21033__auto___30946 = arguments.length;
var i__21034__auto___30947 = (0);
while(true){
if((i__21034__auto___30947 < len__21033__auto___30946)){
args30943.push((arguments[i__21034__auto___30947]));

var G__30948 = (i__21034__auto___30947 + (1));
i__21034__auto___30947 = G__30948;
continue;
} else {
}
break;
}

var G__30945 = args30943.length;
switch (G__30945) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30943.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args30950 = [];
var len__21033__auto___31003 = arguments.length;
var i__21034__auto___31004 = (0);
while(true){
if((i__21034__auto___31004 < len__21033__auto___31003)){
args30950.push((arguments[i__21034__auto___31004]));

var G__31005 = (i__21034__auto___31004 + (1));
i__21034__auto___31004 = G__31005;
continue;
} else {
}
break;
}

var G__30952 = args30950.length;
switch (G__30952) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30950.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22804__auto___31007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___31007,tc,fc){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___31007,tc,fc){
return (function (state_30978){
var state_val_30979 = (state_30978[(1)]);
if((state_val_30979 === (7))){
var inst_30974 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
var statearr_30980_31008 = state_30978__$1;
(statearr_30980_31008[(2)] = inst_30974);

(statearr_30980_31008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (1))){
var state_30978__$1 = state_30978;
var statearr_30981_31009 = state_30978__$1;
(statearr_30981_31009[(2)] = null);

(statearr_30981_31009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (4))){
var inst_30955 = (state_30978[(7)]);
var inst_30955__$1 = (state_30978[(2)]);
var inst_30956 = (inst_30955__$1 == null);
var state_30978__$1 = (function (){var statearr_30982 = state_30978;
(statearr_30982[(7)] = inst_30955__$1);

return statearr_30982;
})();
if(cljs.core.truth_(inst_30956)){
var statearr_30983_31010 = state_30978__$1;
(statearr_30983_31010[(1)] = (5));

} else {
var statearr_30984_31011 = state_30978__$1;
(statearr_30984_31011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (13))){
var state_30978__$1 = state_30978;
var statearr_30985_31012 = state_30978__$1;
(statearr_30985_31012[(2)] = null);

(statearr_30985_31012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (6))){
var inst_30955 = (state_30978[(7)]);
var inst_30961 = p.call(null,inst_30955);
var state_30978__$1 = state_30978;
if(cljs.core.truth_(inst_30961)){
var statearr_30986_31013 = state_30978__$1;
(statearr_30986_31013[(1)] = (9));

} else {
var statearr_30987_31014 = state_30978__$1;
(statearr_30987_31014[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (3))){
var inst_30976 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30978__$1,inst_30976);
} else {
if((state_val_30979 === (12))){
var state_30978__$1 = state_30978;
var statearr_30988_31015 = state_30978__$1;
(statearr_30988_31015[(2)] = null);

(statearr_30988_31015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (2))){
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30978__$1,(4),ch);
} else {
if((state_val_30979 === (11))){
var inst_30955 = (state_30978[(7)]);
var inst_30965 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30978__$1,(8),inst_30965,inst_30955);
} else {
if((state_val_30979 === (9))){
var state_30978__$1 = state_30978;
var statearr_30989_31016 = state_30978__$1;
(statearr_30989_31016[(2)] = tc);

(statearr_30989_31016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (5))){
var inst_30958 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30959 = cljs.core.async.close_BANG_.call(null,fc);
var state_30978__$1 = (function (){var statearr_30990 = state_30978;
(statearr_30990[(8)] = inst_30958);

return statearr_30990;
})();
var statearr_30991_31017 = state_30978__$1;
(statearr_30991_31017[(2)] = inst_30959);

(statearr_30991_31017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (14))){
var inst_30972 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
var statearr_30992_31018 = state_30978__$1;
(statearr_30992_31018[(2)] = inst_30972);

(statearr_30992_31018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (10))){
var state_30978__$1 = state_30978;
var statearr_30993_31019 = state_30978__$1;
(statearr_30993_31019[(2)] = fc);

(statearr_30993_31019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30979 === (8))){
var inst_30967 = (state_30978[(2)]);
var state_30978__$1 = state_30978;
if(cljs.core.truth_(inst_30967)){
var statearr_30994_31020 = state_30978__$1;
(statearr_30994_31020[(1)] = (12));

} else {
var statearr_30995_31021 = state_30978__$1;
(statearr_30995_31021[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto___31007,tc,fc))
;
return ((function (switch__22783__auto__,c__22804__auto___31007,tc,fc){
return (function() {
var cljs$core$async$state_machine__22784__auto__ = null;
var cljs$core$async$state_machine__22784__auto____0 = (function (){
var statearr_30999 = [null,null,null,null,null,null,null,null,null];
(statearr_30999[(0)] = cljs$core$async$state_machine__22784__auto__);

(statearr_30999[(1)] = (1));

return statearr_30999;
});
var cljs$core$async$state_machine__22784__auto____1 = (function (state_30978){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_30978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e31000){if((e31000 instanceof Object)){
var ex__22787__auto__ = e31000;
var statearr_31001_31022 = state_30978;
(statearr_31001_31022[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31023 = state_30978;
state_30978 = G__31023;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$state_machine__22784__auto__ = function(state_30978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22784__auto____1.call(this,state_30978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22784__auto____0;
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22784__auto____1;
return cljs$core$async$state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___31007,tc,fc))
})();
var state__22806__auto__ = (function (){var statearr_31002 = f__22805__auto__.call(null);
(statearr_31002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___31007);

return statearr_31002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___31007,tc,fc))
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
var c__22804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto__){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto__){
return (function (state_31087){
var state_val_31088 = (state_31087[(1)]);
if((state_val_31088 === (7))){
var inst_31083 = (state_31087[(2)]);
var state_31087__$1 = state_31087;
var statearr_31089_31110 = state_31087__$1;
(statearr_31089_31110[(2)] = inst_31083);

(statearr_31089_31110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31088 === (1))){
var inst_31067 = init;
var state_31087__$1 = (function (){var statearr_31090 = state_31087;
(statearr_31090[(7)] = inst_31067);

return statearr_31090;
})();
var statearr_31091_31111 = state_31087__$1;
(statearr_31091_31111[(2)] = null);

(statearr_31091_31111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31088 === (4))){
var inst_31070 = (state_31087[(8)]);
var inst_31070__$1 = (state_31087[(2)]);
var inst_31071 = (inst_31070__$1 == null);
var state_31087__$1 = (function (){var statearr_31092 = state_31087;
(statearr_31092[(8)] = inst_31070__$1);

return statearr_31092;
})();
if(cljs.core.truth_(inst_31071)){
var statearr_31093_31112 = state_31087__$1;
(statearr_31093_31112[(1)] = (5));

} else {
var statearr_31094_31113 = state_31087__$1;
(statearr_31094_31113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31088 === (6))){
var inst_31074 = (state_31087[(9)]);
var inst_31067 = (state_31087[(7)]);
var inst_31070 = (state_31087[(8)]);
var inst_31074__$1 = f.call(null,inst_31067,inst_31070);
var inst_31075 = cljs.core.reduced_QMARK_.call(null,inst_31074__$1);
var state_31087__$1 = (function (){var statearr_31095 = state_31087;
(statearr_31095[(9)] = inst_31074__$1);

return statearr_31095;
})();
if(inst_31075){
var statearr_31096_31114 = state_31087__$1;
(statearr_31096_31114[(1)] = (8));

} else {
var statearr_31097_31115 = state_31087__$1;
(statearr_31097_31115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31088 === (3))){
var inst_31085 = (state_31087[(2)]);
var state_31087__$1 = state_31087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31087__$1,inst_31085);
} else {
if((state_val_31088 === (2))){
var state_31087__$1 = state_31087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31087__$1,(4),ch);
} else {
if((state_val_31088 === (9))){
var inst_31074 = (state_31087[(9)]);
var inst_31067 = inst_31074;
var state_31087__$1 = (function (){var statearr_31098 = state_31087;
(statearr_31098[(7)] = inst_31067);

return statearr_31098;
})();
var statearr_31099_31116 = state_31087__$1;
(statearr_31099_31116[(2)] = null);

(statearr_31099_31116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31088 === (5))){
var inst_31067 = (state_31087[(7)]);
var state_31087__$1 = state_31087;
var statearr_31100_31117 = state_31087__$1;
(statearr_31100_31117[(2)] = inst_31067);

(statearr_31100_31117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31088 === (10))){
var inst_31081 = (state_31087[(2)]);
var state_31087__$1 = state_31087;
var statearr_31101_31118 = state_31087__$1;
(statearr_31101_31118[(2)] = inst_31081);

(statearr_31101_31118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31088 === (8))){
var inst_31074 = (state_31087[(9)]);
var inst_31077 = cljs.core.deref.call(null,inst_31074);
var state_31087__$1 = state_31087;
var statearr_31102_31119 = state_31087__$1;
(statearr_31102_31119[(2)] = inst_31077);

(statearr_31102_31119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto__))
;
return ((function (switch__22783__auto__,c__22804__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22784__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22784__auto____0 = (function (){
var statearr_31106 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31106[(0)] = cljs$core$async$reduce_$_state_machine__22784__auto__);

(statearr_31106[(1)] = (1));

return statearr_31106;
});
var cljs$core$async$reduce_$_state_machine__22784__auto____1 = (function (state_31087){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_31087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e31107){if((e31107 instanceof Object)){
var ex__22787__auto__ = e31107;
var statearr_31108_31120 = state_31087;
(statearr_31108_31120[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31121 = state_31087;
state_31087 = G__31121;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22784__auto__ = function(state_31087){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22784__auto____1.call(this,state_31087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22784__auto____0;
cljs$core$async$reduce_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22784__auto____1;
return cljs$core$async$reduce_$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto__))
})();
var state__22806__auto__ = (function (){var statearr_31109 = f__22805__auto__.call(null);
(statearr_31109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto__);

return statearr_31109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto__))
);

return c__22804__auto__;
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
var args31122 = [];
var len__21033__auto___31174 = arguments.length;
var i__21034__auto___31175 = (0);
while(true){
if((i__21034__auto___31175 < len__21033__auto___31174)){
args31122.push((arguments[i__21034__auto___31175]));

var G__31176 = (i__21034__auto___31175 + (1));
i__21034__auto___31175 = G__31176;
continue;
} else {
}
break;
}

var G__31124 = args31122.length;
switch (G__31124) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31122.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto__){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto__){
return (function (state_31149){
var state_val_31150 = (state_31149[(1)]);
if((state_val_31150 === (7))){
var inst_31131 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
var statearr_31151_31178 = state_31149__$1;
(statearr_31151_31178[(2)] = inst_31131);

(statearr_31151_31178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (1))){
var inst_31125 = cljs.core.seq.call(null,coll);
var inst_31126 = inst_31125;
var state_31149__$1 = (function (){var statearr_31152 = state_31149;
(statearr_31152[(7)] = inst_31126);

return statearr_31152;
})();
var statearr_31153_31179 = state_31149__$1;
(statearr_31153_31179[(2)] = null);

(statearr_31153_31179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (4))){
var inst_31126 = (state_31149[(7)]);
var inst_31129 = cljs.core.first.call(null,inst_31126);
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31149__$1,(7),ch,inst_31129);
} else {
if((state_val_31150 === (13))){
var inst_31143 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
var statearr_31154_31180 = state_31149__$1;
(statearr_31154_31180[(2)] = inst_31143);

(statearr_31154_31180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (6))){
var inst_31134 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
if(cljs.core.truth_(inst_31134)){
var statearr_31155_31181 = state_31149__$1;
(statearr_31155_31181[(1)] = (8));

} else {
var statearr_31156_31182 = state_31149__$1;
(statearr_31156_31182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (3))){
var inst_31147 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31149__$1,inst_31147);
} else {
if((state_val_31150 === (12))){
var state_31149__$1 = state_31149;
var statearr_31157_31183 = state_31149__$1;
(statearr_31157_31183[(2)] = null);

(statearr_31157_31183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (2))){
var inst_31126 = (state_31149[(7)]);
var state_31149__$1 = state_31149;
if(cljs.core.truth_(inst_31126)){
var statearr_31158_31184 = state_31149__$1;
(statearr_31158_31184[(1)] = (4));

} else {
var statearr_31159_31185 = state_31149__$1;
(statearr_31159_31185[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (11))){
var inst_31140 = cljs.core.async.close_BANG_.call(null,ch);
var state_31149__$1 = state_31149;
var statearr_31160_31186 = state_31149__$1;
(statearr_31160_31186[(2)] = inst_31140);

(statearr_31160_31186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (9))){
var state_31149__$1 = state_31149;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31161_31187 = state_31149__$1;
(statearr_31161_31187[(1)] = (11));

} else {
var statearr_31162_31188 = state_31149__$1;
(statearr_31162_31188[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (5))){
var inst_31126 = (state_31149[(7)]);
var state_31149__$1 = state_31149;
var statearr_31163_31189 = state_31149__$1;
(statearr_31163_31189[(2)] = inst_31126);

(statearr_31163_31189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (10))){
var inst_31145 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
var statearr_31164_31190 = state_31149__$1;
(statearr_31164_31190[(2)] = inst_31145);

(statearr_31164_31190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (8))){
var inst_31126 = (state_31149[(7)]);
var inst_31136 = cljs.core.next.call(null,inst_31126);
var inst_31126__$1 = inst_31136;
var state_31149__$1 = (function (){var statearr_31165 = state_31149;
(statearr_31165[(7)] = inst_31126__$1);

return statearr_31165;
})();
var statearr_31166_31191 = state_31149__$1;
(statearr_31166_31191[(2)] = null);

(statearr_31166_31191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto__))
;
return ((function (switch__22783__auto__,c__22804__auto__){
return (function() {
var cljs$core$async$state_machine__22784__auto__ = null;
var cljs$core$async$state_machine__22784__auto____0 = (function (){
var statearr_31170 = [null,null,null,null,null,null,null,null];
(statearr_31170[(0)] = cljs$core$async$state_machine__22784__auto__);

(statearr_31170[(1)] = (1));

return statearr_31170;
});
var cljs$core$async$state_machine__22784__auto____1 = (function (state_31149){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_31149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e31171){if((e31171 instanceof Object)){
var ex__22787__auto__ = e31171;
var statearr_31172_31192 = state_31149;
(statearr_31172_31192[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31193 = state_31149;
state_31149 = G__31193;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$state_machine__22784__auto__ = function(state_31149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22784__auto____1.call(this,state_31149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22784__auto____0;
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22784__auto____1;
return cljs$core$async$state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto__))
})();
var state__22806__auto__ = (function (){var statearr_31173 = f__22805__auto__.call(null);
(statearr_31173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto__);

return statearr_31173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto__))
);

return c__22804__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__20621__auto__ = (((_ == null))?null:_);
var m__20622__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,_);
} else {
var m__20622__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__20621__auto__ = (((m == null))?null:m);
var m__20622__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20622__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20621__auto__ = (((m == null))?null:m);
var m__20622__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,m,ch);
} else {
var m__20622__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20621__auto__ = (((m == null))?null:m);
var m__20622__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,m);
} else {
var m__20622__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31419 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31419 = (function (mult,ch,cs,meta31420){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31420 = meta31420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31421,meta31420__$1){
var self__ = this;
var _31421__$1 = this;
return (new cljs.core.async.t_cljs$core$async31419(self__.mult,self__.ch,self__.cs,meta31420__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31421){
var self__ = this;
var _31421__$1 = this;
return self__.meta31420;
});})(cs))
;

cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31419.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31419.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31420","meta31420",196030260,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31419.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31419";

cljs.core.async.t_cljs$core$async31419.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20564__auto__,writer__20565__auto__,opt__20566__auto__){
return cljs.core._write.call(null,writer__20565__auto__,"cljs.core.async/t_cljs$core$async31419");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31419 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31419(mult__$1,ch__$1,cs__$1,meta31420){
return (new cljs.core.async.t_cljs$core$async31419(mult__$1,ch__$1,cs__$1,meta31420));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31419(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22804__auto___31644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___31644,cs,m,dchan,dctr,done){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___31644,cs,m,dchan,dctr,done){
return (function (state_31556){
var state_val_31557 = (state_31556[(1)]);
if((state_val_31557 === (7))){
var inst_31552 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
var statearr_31558_31645 = state_31556__$1;
(statearr_31558_31645[(2)] = inst_31552);

(statearr_31558_31645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (20))){
var inst_31455 = (state_31556[(7)]);
var inst_31467 = cljs.core.first.call(null,inst_31455);
var inst_31468 = cljs.core.nth.call(null,inst_31467,(0),null);
var inst_31469 = cljs.core.nth.call(null,inst_31467,(1),null);
var state_31556__$1 = (function (){var statearr_31559 = state_31556;
(statearr_31559[(8)] = inst_31468);

return statearr_31559;
})();
if(cljs.core.truth_(inst_31469)){
var statearr_31560_31646 = state_31556__$1;
(statearr_31560_31646[(1)] = (22));

} else {
var statearr_31561_31647 = state_31556__$1;
(statearr_31561_31647[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (27))){
var inst_31499 = (state_31556[(9)]);
var inst_31424 = (state_31556[(10)]);
var inst_31504 = (state_31556[(11)]);
var inst_31497 = (state_31556[(12)]);
var inst_31504__$1 = cljs.core._nth.call(null,inst_31497,inst_31499);
var inst_31505 = cljs.core.async.put_BANG_.call(null,inst_31504__$1,inst_31424,done);
var state_31556__$1 = (function (){var statearr_31562 = state_31556;
(statearr_31562[(11)] = inst_31504__$1);

return statearr_31562;
})();
if(cljs.core.truth_(inst_31505)){
var statearr_31563_31648 = state_31556__$1;
(statearr_31563_31648[(1)] = (30));

} else {
var statearr_31564_31649 = state_31556__$1;
(statearr_31564_31649[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (1))){
var state_31556__$1 = state_31556;
var statearr_31565_31650 = state_31556__$1;
(statearr_31565_31650[(2)] = null);

(statearr_31565_31650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (24))){
var inst_31455 = (state_31556[(7)]);
var inst_31474 = (state_31556[(2)]);
var inst_31475 = cljs.core.next.call(null,inst_31455);
var inst_31433 = inst_31475;
var inst_31434 = null;
var inst_31435 = (0);
var inst_31436 = (0);
var state_31556__$1 = (function (){var statearr_31566 = state_31556;
(statearr_31566[(13)] = inst_31435);

(statearr_31566[(14)] = inst_31474);

(statearr_31566[(15)] = inst_31434);

(statearr_31566[(16)] = inst_31433);

(statearr_31566[(17)] = inst_31436);

return statearr_31566;
})();
var statearr_31567_31651 = state_31556__$1;
(statearr_31567_31651[(2)] = null);

(statearr_31567_31651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (39))){
var state_31556__$1 = state_31556;
var statearr_31571_31652 = state_31556__$1;
(statearr_31571_31652[(2)] = null);

(statearr_31571_31652[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (4))){
var inst_31424 = (state_31556[(10)]);
var inst_31424__$1 = (state_31556[(2)]);
var inst_31425 = (inst_31424__$1 == null);
var state_31556__$1 = (function (){var statearr_31572 = state_31556;
(statearr_31572[(10)] = inst_31424__$1);

return statearr_31572;
})();
if(cljs.core.truth_(inst_31425)){
var statearr_31573_31653 = state_31556__$1;
(statearr_31573_31653[(1)] = (5));

} else {
var statearr_31574_31654 = state_31556__$1;
(statearr_31574_31654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (15))){
var inst_31435 = (state_31556[(13)]);
var inst_31434 = (state_31556[(15)]);
var inst_31433 = (state_31556[(16)]);
var inst_31436 = (state_31556[(17)]);
var inst_31451 = (state_31556[(2)]);
var inst_31452 = (inst_31436 + (1));
var tmp31568 = inst_31435;
var tmp31569 = inst_31434;
var tmp31570 = inst_31433;
var inst_31433__$1 = tmp31570;
var inst_31434__$1 = tmp31569;
var inst_31435__$1 = tmp31568;
var inst_31436__$1 = inst_31452;
var state_31556__$1 = (function (){var statearr_31575 = state_31556;
(statearr_31575[(13)] = inst_31435__$1);

(statearr_31575[(15)] = inst_31434__$1);

(statearr_31575[(16)] = inst_31433__$1);

(statearr_31575[(18)] = inst_31451);

(statearr_31575[(17)] = inst_31436__$1);

return statearr_31575;
})();
var statearr_31576_31655 = state_31556__$1;
(statearr_31576_31655[(2)] = null);

(statearr_31576_31655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (21))){
var inst_31478 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
var statearr_31580_31656 = state_31556__$1;
(statearr_31580_31656[(2)] = inst_31478);

(statearr_31580_31656[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (31))){
var inst_31504 = (state_31556[(11)]);
var inst_31508 = done.call(null,null);
var inst_31509 = cljs.core.async.untap_STAR_.call(null,m,inst_31504);
var state_31556__$1 = (function (){var statearr_31581 = state_31556;
(statearr_31581[(19)] = inst_31508);

return statearr_31581;
})();
var statearr_31582_31657 = state_31556__$1;
(statearr_31582_31657[(2)] = inst_31509);

(statearr_31582_31657[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (32))){
var inst_31499 = (state_31556[(9)]);
var inst_31496 = (state_31556[(20)]);
var inst_31497 = (state_31556[(12)]);
var inst_31498 = (state_31556[(21)]);
var inst_31511 = (state_31556[(2)]);
var inst_31512 = (inst_31499 + (1));
var tmp31577 = inst_31496;
var tmp31578 = inst_31497;
var tmp31579 = inst_31498;
var inst_31496__$1 = tmp31577;
var inst_31497__$1 = tmp31578;
var inst_31498__$1 = tmp31579;
var inst_31499__$1 = inst_31512;
var state_31556__$1 = (function (){var statearr_31583 = state_31556;
(statearr_31583[(22)] = inst_31511);

(statearr_31583[(9)] = inst_31499__$1);

(statearr_31583[(20)] = inst_31496__$1);

(statearr_31583[(12)] = inst_31497__$1);

(statearr_31583[(21)] = inst_31498__$1);

return statearr_31583;
})();
var statearr_31584_31658 = state_31556__$1;
(statearr_31584_31658[(2)] = null);

(statearr_31584_31658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (40))){
var inst_31524 = (state_31556[(23)]);
var inst_31528 = done.call(null,null);
var inst_31529 = cljs.core.async.untap_STAR_.call(null,m,inst_31524);
var state_31556__$1 = (function (){var statearr_31585 = state_31556;
(statearr_31585[(24)] = inst_31528);

return statearr_31585;
})();
var statearr_31586_31659 = state_31556__$1;
(statearr_31586_31659[(2)] = inst_31529);

(statearr_31586_31659[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (33))){
var inst_31515 = (state_31556[(25)]);
var inst_31517 = cljs.core.chunked_seq_QMARK_.call(null,inst_31515);
var state_31556__$1 = state_31556;
if(inst_31517){
var statearr_31587_31660 = state_31556__$1;
(statearr_31587_31660[(1)] = (36));

} else {
var statearr_31588_31661 = state_31556__$1;
(statearr_31588_31661[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (13))){
var inst_31445 = (state_31556[(26)]);
var inst_31448 = cljs.core.async.close_BANG_.call(null,inst_31445);
var state_31556__$1 = state_31556;
var statearr_31589_31662 = state_31556__$1;
(statearr_31589_31662[(2)] = inst_31448);

(statearr_31589_31662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (22))){
var inst_31468 = (state_31556[(8)]);
var inst_31471 = cljs.core.async.close_BANG_.call(null,inst_31468);
var state_31556__$1 = state_31556;
var statearr_31590_31663 = state_31556__$1;
(statearr_31590_31663[(2)] = inst_31471);

(statearr_31590_31663[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (36))){
var inst_31515 = (state_31556[(25)]);
var inst_31519 = cljs.core.chunk_first.call(null,inst_31515);
var inst_31520 = cljs.core.chunk_rest.call(null,inst_31515);
var inst_31521 = cljs.core.count.call(null,inst_31519);
var inst_31496 = inst_31520;
var inst_31497 = inst_31519;
var inst_31498 = inst_31521;
var inst_31499 = (0);
var state_31556__$1 = (function (){var statearr_31591 = state_31556;
(statearr_31591[(9)] = inst_31499);

(statearr_31591[(20)] = inst_31496);

(statearr_31591[(12)] = inst_31497);

(statearr_31591[(21)] = inst_31498);

return statearr_31591;
})();
var statearr_31592_31664 = state_31556__$1;
(statearr_31592_31664[(2)] = null);

(statearr_31592_31664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (41))){
var inst_31515 = (state_31556[(25)]);
var inst_31531 = (state_31556[(2)]);
var inst_31532 = cljs.core.next.call(null,inst_31515);
var inst_31496 = inst_31532;
var inst_31497 = null;
var inst_31498 = (0);
var inst_31499 = (0);
var state_31556__$1 = (function (){var statearr_31593 = state_31556;
(statearr_31593[(9)] = inst_31499);

(statearr_31593[(20)] = inst_31496);

(statearr_31593[(27)] = inst_31531);

(statearr_31593[(12)] = inst_31497);

(statearr_31593[(21)] = inst_31498);

return statearr_31593;
})();
var statearr_31594_31665 = state_31556__$1;
(statearr_31594_31665[(2)] = null);

(statearr_31594_31665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (43))){
var state_31556__$1 = state_31556;
var statearr_31595_31666 = state_31556__$1;
(statearr_31595_31666[(2)] = null);

(statearr_31595_31666[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (29))){
var inst_31540 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
var statearr_31596_31667 = state_31556__$1;
(statearr_31596_31667[(2)] = inst_31540);

(statearr_31596_31667[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (44))){
var inst_31549 = (state_31556[(2)]);
var state_31556__$1 = (function (){var statearr_31597 = state_31556;
(statearr_31597[(28)] = inst_31549);

return statearr_31597;
})();
var statearr_31598_31668 = state_31556__$1;
(statearr_31598_31668[(2)] = null);

(statearr_31598_31668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (6))){
var inst_31488 = (state_31556[(29)]);
var inst_31487 = cljs.core.deref.call(null,cs);
var inst_31488__$1 = cljs.core.keys.call(null,inst_31487);
var inst_31489 = cljs.core.count.call(null,inst_31488__$1);
var inst_31490 = cljs.core.reset_BANG_.call(null,dctr,inst_31489);
var inst_31495 = cljs.core.seq.call(null,inst_31488__$1);
var inst_31496 = inst_31495;
var inst_31497 = null;
var inst_31498 = (0);
var inst_31499 = (0);
var state_31556__$1 = (function (){var statearr_31599 = state_31556;
(statearr_31599[(9)] = inst_31499);

(statearr_31599[(20)] = inst_31496);

(statearr_31599[(30)] = inst_31490);

(statearr_31599[(12)] = inst_31497);

(statearr_31599[(21)] = inst_31498);

(statearr_31599[(29)] = inst_31488__$1);

return statearr_31599;
})();
var statearr_31600_31669 = state_31556__$1;
(statearr_31600_31669[(2)] = null);

(statearr_31600_31669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (28))){
var inst_31515 = (state_31556[(25)]);
var inst_31496 = (state_31556[(20)]);
var inst_31515__$1 = cljs.core.seq.call(null,inst_31496);
var state_31556__$1 = (function (){var statearr_31601 = state_31556;
(statearr_31601[(25)] = inst_31515__$1);

return statearr_31601;
})();
if(inst_31515__$1){
var statearr_31602_31670 = state_31556__$1;
(statearr_31602_31670[(1)] = (33));

} else {
var statearr_31603_31671 = state_31556__$1;
(statearr_31603_31671[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (25))){
var inst_31499 = (state_31556[(9)]);
var inst_31498 = (state_31556[(21)]);
var inst_31501 = (inst_31499 < inst_31498);
var inst_31502 = inst_31501;
var state_31556__$1 = state_31556;
if(cljs.core.truth_(inst_31502)){
var statearr_31604_31672 = state_31556__$1;
(statearr_31604_31672[(1)] = (27));

} else {
var statearr_31605_31673 = state_31556__$1;
(statearr_31605_31673[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (34))){
var state_31556__$1 = state_31556;
var statearr_31606_31674 = state_31556__$1;
(statearr_31606_31674[(2)] = null);

(statearr_31606_31674[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (17))){
var state_31556__$1 = state_31556;
var statearr_31607_31675 = state_31556__$1;
(statearr_31607_31675[(2)] = null);

(statearr_31607_31675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (3))){
var inst_31554 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31556__$1,inst_31554);
} else {
if((state_val_31557 === (12))){
var inst_31483 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
var statearr_31608_31676 = state_31556__$1;
(statearr_31608_31676[(2)] = inst_31483);

(statearr_31608_31676[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (2))){
var state_31556__$1 = state_31556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31556__$1,(4),ch);
} else {
if((state_val_31557 === (23))){
var state_31556__$1 = state_31556;
var statearr_31609_31677 = state_31556__$1;
(statearr_31609_31677[(2)] = null);

(statearr_31609_31677[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (35))){
var inst_31538 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
var statearr_31610_31678 = state_31556__$1;
(statearr_31610_31678[(2)] = inst_31538);

(statearr_31610_31678[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (19))){
var inst_31455 = (state_31556[(7)]);
var inst_31459 = cljs.core.chunk_first.call(null,inst_31455);
var inst_31460 = cljs.core.chunk_rest.call(null,inst_31455);
var inst_31461 = cljs.core.count.call(null,inst_31459);
var inst_31433 = inst_31460;
var inst_31434 = inst_31459;
var inst_31435 = inst_31461;
var inst_31436 = (0);
var state_31556__$1 = (function (){var statearr_31611 = state_31556;
(statearr_31611[(13)] = inst_31435);

(statearr_31611[(15)] = inst_31434);

(statearr_31611[(16)] = inst_31433);

(statearr_31611[(17)] = inst_31436);

return statearr_31611;
})();
var statearr_31612_31679 = state_31556__$1;
(statearr_31612_31679[(2)] = null);

(statearr_31612_31679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (11))){
var inst_31433 = (state_31556[(16)]);
var inst_31455 = (state_31556[(7)]);
var inst_31455__$1 = cljs.core.seq.call(null,inst_31433);
var state_31556__$1 = (function (){var statearr_31613 = state_31556;
(statearr_31613[(7)] = inst_31455__$1);

return statearr_31613;
})();
if(inst_31455__$1){
var statearr_31614_31680 = state_31556__$1;
(statearr_31614_31680[(1)] = (16));

} else {
var statearr_31615_31681 = state_31556__$1;
(statearr_31615_31681[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (9))){
var inst_31485 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
var statearr_31616_31682 = state_31556__$1;
(statearr_31616_31682[(2)] = inst_31485);

(statearr_31616_31682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (5))){
var inst_31431 = cljs.core.deref.call(null,cs);
var inst_31432 = cljs.core.seq.call(null,inst_31431);
var inst_31433 = inst_31432;
var inst_31434 = null;
var inst_31435 = (0);
var inst_31436 = (0);
var state_31556__$1 = (function (){var statearr_31617 = state_31556;
(statearr_31617[(13)] = inst_31435);

(statearr_31617[(15)] = inst_31434);

(statearr_31617[(16)] = inst_31433);

(statearr_31617[(17)] = inst_31436);

return statearr_31617;
})();
var statearr_31618_31683 = state_31556__$1;
(statearr_31618_31683[(2)] = null);

(statearr_31618_31683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (14))){
var state_31556__$1 = state_31556;
var statearr_31619_31684 = state_31556__$1;
(statearr_31619_31684[(2)] = null);

(statearr_31619_31684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (45))){
var inst_31546 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
var statearr_31620_31685 = state_31556__$1;
(statearr_31620_31685[(2)] = inst_31546);

(statearr_31620_31685[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (26))){
var inst_31488 = (state_31556[(29)]);
var inst_31542 = (state_31556[(2)]);
var inst_31543 = cljs.core.seq.call(null,inst_31488);
var state_31556__$1 = (function (){var statearr_31621 = state_31556;
(statearr_31621[(31)] = inst_31542);

return statearr_31621;
})();
if(inst_31543){
var statearr_31622_31686 = state_31556__$1;
(statearr_31622_31686[(1)] = (42));

} else {
var statearr_31623_31687 = state_31556__$1;
(statearr_31623_31687[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (16))){
var inst_31455 = (state_31556[(7)]);
var inst_31457 = cljs.core.chunked_seq_QMARK_.call(null,inst_31455);
var state_31556__$1 = state_31556;
if(inst_31457){
var statearr_31624_31688 = state_31556__$1;
(statearr_31624_31688[(1)] = (19));

} else {
var statearr_31625_31689 = state_31556__$1;
(statearr_31625_31689[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (38))){
var inst_31535 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
var statearr_31626_31690 = state_31556__$1;
(statearr_31626_31690[(2)] = inst_31535);

(statearr_31626_31690[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (30))){
var state_31556__$1 = state_31556;
var statearr_31627_31691 = state_31556__$1;
(statearr_31627_31691[(2)] = null);

(statearr_31627_31691[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (10))){
var inst_31434 = (state_31556[(15)]);
var inst_31436 = (state_31556[(17)]);
var inst_31444 = cljs.core._nth.call(null,inst_31434,inst_31436);
var inst_31445 = cljs.core.nth.call(null,inst_31444,(0),null);
var inst_31446 = cljs.core.nth.call(null,inst_31444,(1),null);
var state_31556__$1 = (function (){var statearr_31628 = state_31556;
(statearr_31628[(26)] = inst_31445);

return statearr_31628;
})();
if(cljs.core.truth_(inst_31446)){
var statearr_31629_31692 = state_31556__$1;
(statearr_31629_31692[(1)] = (13));

} else {
var statearr_31630_31693 = state_31556__$1;
(statearr_31630_31693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (18))){
var inst_31481 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
var statearr_31631_31694 = state_31556__$1;
(statearr_31631_31694[(2)] = inst_31481);

(statearr_31631_31694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (42))){
var state_31556__$1 = state_31556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31556__$1,(45),dchan);
} else {
if((state_val_31557 === (37))){
var inst_31515 = (state_31556[(25)]);
var inst_31424 = (state_31556[(10)]);
var inst_31524 = (state_31556[(23)]);
var inst_31524__$1 = cljs.core.first.call(null,inst_31515);
var inst_31525 = cljs.core.async.put_BANG_.call(null,inst_31524__$1,inst_31424,done);
var state_31556__$1 = (function (){var statearr_31632 = state_31556;
(statearr_31632[(23)] = inst_31524__$1);

return statearr_31632;
})();
if(cljs.core.truth_(inst_31525)){
var statearr_31633_31695 = state_31556__$1;
(statearr_31633_31695[(1)] = (39));

} else {
var statearr_31634_31696 = state_31556__$1;
(statearr_31634_31696[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31557 === (8))){
var inst_31435 = (state_31556[(13)]);
var inst_31436 = (state_31556[(17)]);
var inst_31438 = (inst_31436 < inst_31435);
var inst_31439 = inst_31438;
var state_31556__$1 = state_31556;
if(cljs.core.truth_(inst_31439)){
var statearr_31635_31697 = state_31556__$1;
(statearr_31635_31697[(1)] = (10));

} else {
var statearr_31636_31698 = state_31556__$1;
(statearr_31636_31698[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto___31644,cs,m,dchan,dctr,done))
;
return ((function (switch__22783__auto__,c__22804__auto___31644,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22784__auto__ = null;
var cljs$core$async$mult_$_state_machine__22784__auto____0 = (function (){
var statearr_31640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31640[(0)] = cljs$core$async$mult_$_state_machine__22784__auto__);

(statearr_31640[(1)] = (1));

return statearr_31640;
});
var cljs$core$async$mult_$_state_machine__22784__auto____1 = (function (state_31556){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_31556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e31641){if((e31641 instanceof Object)){
var ex__22787__auto__ = e31641;
var statearr_31642_31699 = state_31556;
(statearr_31642_31699[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31700 = state_31556;
state_31556 = G__31700;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22784__auto__ = function(state_31556){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22784__auto____1.call(this,state_31556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22784__auto____0;
cljs$core$async$mult_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22784__auto____1;
return cljs$core$async$mult_$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___31644,cs,m,dchan,dctr,done))
})();
var state__22806__auto__ = (function (){var statearr_31643 = f__22805__auto__.call(null);
(statearr_31643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___31644);

return statearr_31643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___31644,cs,m,dchan,dctr,done))
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
var args31701 = [];
var len__21033__auto___31704 = arguments.length;
var i__21034__auto___31705 = (0);
while(true){
if((i__21034__auto___31705 < len__21033__auto___31704)){
args31701.push((arguments[i__21034__auto___31705]));

var G__31706 = (i__21034__auto___31705 + (1));
i__21034__auto___31705 = G__31706;
continue;
} else {
}
break;
}

var G__31703 = args31701.length;
switch (G__31703) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31701.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20621__auto__ = (((m == null))?null:m);
var m__20622__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,m,ch);
} else {
var m__20622__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20621__auto__ = (((m == null))?null:m);
var m__20622__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,m,ch);
} else {
var m__20622__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20621__auto__ = (((m == null))?null:m);
var m__20622__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,m);
} else {
var m__20622__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20621__auto__ = (((m == null))?null:m);
var m__20622__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,m,state_map);
} else {
var m__20622__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20621__auto__ = (((m == null))?null:m);
var m__20622__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,m,mode);
} else {
var m__20622__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21040__auto__ = [];
var len__21033__auto___31718 = arguments.length;
var i__21034__auto___31719 = (0);
while(true){
if((i__21034__auto___31719 < len__21033__auto___31718)){
args__21040__auto__.push((arguments[i__21034__auto___31719]));

var G__31720 = (i__21034__auto___31719 + (1));
i__21034__auto___31719 = G__31720;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((3) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21041__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31712){
var map__31713 = p__31712;
var map__31713__$1 = ((((!((map__31713 == null)))?((((map__31713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31713):map__31713);
var opts = map__31713__$1;
var statearr_31715_31721 = state;
(statearr_31715_31721[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31713,map__31713__$1,opts){
return (function (val){
var statearr_31716_31722 = state;
(statearr_31716_31722[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31713,map__31713__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31717_31723 = state;
(statearr_31717_31723[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31708){
var G__31709 = cljs.core.first.call(null,seq31708);
var seq31708__$1 = cljs.core.next.call(null,seq31708);
var G__31710 = cljs.core.first.call(null,seq31708__$1);
var seq31708__$2 = cljs.core.next.call(null,seq31708__$1);
var G__31711 = cljs.core.first.call(null,seq31708__$2);
var seq31708__$3 = cljs.core.next.call(null,seq31708__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31709,G__31710,G__31711,seq31708__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31889 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31890){
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
this.meta31890 = meta31890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31891,meta31890__$1){
var self__ = this;
var _31891__$1 = this;
return (new cljs.core.async.t_cljs$core$async31889(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31890__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31891){
var self__ = this;
var _31891__$1 = this;
return self__.meta31890;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31889.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31889.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31890","meta31890",919819512,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31889";

cljs.core.async.t_cljs$core$async31889.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20564__auto__,writer__20565__auto__,opt__20566__auto__){
return cljs.core._write.call(null,writer__20565__auto__,"cljs.core.async/t_cljs$core$async31889");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31889 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31889(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31890){
return (new cljs.core.async.t_cljs$core$async31889(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31890));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31889(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22804__auto___32054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___32054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___32054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31991){
var state_val_31992 = (state_31991[(1)]);
if((state_val_31992 === (7))){
var inst_31907 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_31993_32055 = state_31991__$1;
(statearr_31993_32055[(2)] = inst_31907);

(statearr_31993_32055[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (20))){
var inst_31919 = (state_31991[(7)]);
var state_31991__$1 = state_31991;
var statearr_31994_32056 = state_31991__$1;
(statearr_31994_32056[(2)] = inst_31919);

(statearr_31994_32056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (27))){
var state_31991__$1 = state_31991;
var statearr_31995_32057 = state_31991__$1;
(statearr_31995_32057[(2)] = null);

(statearr_31995_32057[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (1))){
var inst_31895 = (state_31991[(8)]);
var inst_31895__$1 = calc_state.call(null);
var inst_31897 = (inst_31895__$1 == null);
var inst_31898 = cljs.core.not.call(null,inst_31897);
var state_31991__$1 = (function (){var statearr_31996 = state_31991;
(statearr_31996[(8)] = inst_31895__$1);

return statearr_31996;
})();
if(inst_31898){
var statearr_31997_32058 = state_31991__$1;
(statearr_31997_32058[(1)] = (2));

} else {
var statearr_31998_32059 = state_31991__$1;
(statearr_31998_32059[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (24))){
var inst_31965 = (state_31991[(9)]);
var inst_31942 = (state_31991[(10)]);
var inst_31951 = (state_31991[(11)]);
var inst_31965__$1 = inst_31942.call(null,inst_31951);
var state_31991__$1 = (function (){var statearr_31999 = state_31991;
(statearr_31999[(9)] = inst_31965__$1);

return statearr_31999;
})();
if(cljs.core.truth_(inst_31965__$1)){
var statearr_32000_32060 = state_31991__$1;
(statearr_32000_32060[(1)] = (29));

} else {
var statearr_32001_32061 = state_31991__$1;
(statearr_32001_32061[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (4))){
var inst_31910 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31910)){
var statearr_32002_32062 = state_31991__$1;
(statearr_32002_32062[(1)] = (8));

} else {
var statearr_32003_32063 = state_31991__$1;
(statearr_32003_32063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (15))){
var inst_31936 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31936)){
var statearr_32004_32064 = state_31991__$1;
(statearr_32004_32064[(1)] = (19));

} else {
var statearr_32005_32065 = state_31991__$1;
(statearr_32005_32065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (21))){
var inst_31941 = (state_31991[(12)]);
var inst_31941__$1 = (state_31991[(2)]);
var inst_31942 = cljs.core.get.call(null,inst_31941__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31943 = cljs.core.get.call(null,inst_31941__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31944 = cljs.core.get.call(null,inst_31941__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31991__$1 = (function (){var statearr_32006 = state_31991;
(statearr_32006[(13)] = inst_31943);

(statearr_32006[(10)] = inst_31942);

(statearr_32006[(12)] = inst_31941__$1);

return statearr_32006;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31991__$1,(22),inst_31944);
} else {
if((state_val_31992 === (31))){
var inst_31973 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31973)){
var statearr_32007_32066 = state_31991__$1;
(statearr_32007_32066[(1)] = (32));

} else {
var statearr_32008_32067 = state_31991__$1;
(statearr_32008_32067[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (32))){
var inst_31950 = (state_31991[(14)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31991__$1,(35),out,inst_31950);
} else {
if((state_val_31992 === (33))){
var inst_31941 = (state_31991[(12)]);
var inst_31919 = inst_31941;
var state_31991__$1 = (function (){var statearr_32009 = state_31991;
(statearr_32009[(7)] = inst_31919);

return statearr_32009;
})();
var statearr_32010_32068 = state_31991__$1;
(statearr_32010_32068[(2)] = null);

(statearr_32010_32068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (13))){
var inst_31919 = (state_31991[(7)]);
var inst_31926 = inst_31919.cljs$lang$protocol_mask$partition0$;
var inst_31927 = (inst_31926 & (64));
var inst_31928 = inst_31919.cljs$core$ISeq$;
var inst_31929 = (inst_31927) || (inst_31928);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31929)){
var statearr_32011_32069 = state_31991__$1;
(statearr_32011_32069[(1)] = (16));

} else {
var statearr_32012_32070 = state_31991__$1;
(statearr_32012_32070[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (22))){
var inst_31950 = (state_31991[(14)]);
var inst_31951 = (state_31991[(11)]);
var inst_31949 = (state_31991[(2)]);
var inst_31950__$1 = cljs.core.nth.call(null,inst_31949,(0),null);
var inst_31951__$1 = cljs.core.nth.call(null,inst_31949,(1),null);
var inst_31952 = (inst_31950__$1 == null);
var inst_31953 = cljs.core._EQ_.call(null,inst_31951__$1,change);
var inst_31954 = (inst_31952) || (inst_31953);
var state_31991__$1 = (function (){var statearr_32013 = state_31991;
(statearr_32013[(14)] = inst_31950__$1);

(statearr_32013[(11)] = inst_31951__$1);

return statearr_32013;
})();
if(cljs.core.truth_(inst_31954)){
var statearr_32014_32071 = state_31991__$1;
(statearr_32014_32071[(1)] = (23));

} else {
var statearr_32015_32072 = state_31991__$1;
(statearr_32015_32072[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (36))){
var inst_31941 = (state_31991[(12)]);
var inst_31919 = inst_31941;
var state_31991__$1 = (function (){var statearr_32016 = state_31991;
(statearr_32016[(7)] = inst_31919);

return statearr_32016;
})();
var statearr_32017_32073 = state_31991__$1;
(statearr_32017_32073[(2)] = null);

(statearr_32017_32073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (29))){
var inst_31965 = (state_31991[(9)]);
var state_31991__$1 = state_31991;
var statearr_32018_32074 = state_31991__$1;
(statearr_32018_32074[(2)] = inst_31965);

(statearr_32018_32074[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (6))){
var state_31991__$1 = state_31991;
var statearr_32019_32075 = state_31991__$1;
(statearr_32019_32075[(2)] = false);

(statearr_32019_32075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (28))){
var inst_31961 = (state_31991[(2)]);
var inst_31962 = calc_state.call(null);
var inst_31919 = inst_31962;
var state_31991__$1 = (function (){var statearr_32020 = state_31991;
(statearr_32020[(15)] = inst_31961);

(statearr_32020[(7)] = inst_31919);

return statearr_32020;
})();
var statearr_32021_32076 = state_31991__$1;
(statearr_32021_32076[(2)] = null);

(statearr_32021_32076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (25))){
var inst_31987 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32022_32077 = state_31991__$1;
(statearr_32022_32077[(2)] = inst_31987);

(statearr_32022_32077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (34))){
var inst_31985 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32023_32078 = state_31991__$1;
(statearr_32023_32078[(2)] = inst_31985);

(statearr_32023_32078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (17))){
var state_31991__$1 = state_31991;
var statearr_32024_32079 = state_31991__$1;
(statearr_32024_32079[(2)] = false);

(statearr_32024_32079[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (3))){
var state_31991__$1 = state_31991;
var statearr_32025_32080 = state_31991__$1;
(statearr_32025_32080[(2)] = false);

(statearr_32025_32080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (12))){
var inst_31989 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31991__$1,inst_31989);
} else {
if((state_val_31992 === (2))){
var inst_31895 = (state_31991[(8)]);
var inst_31900 = inst_31895.cljs$lang$protocol_mask$partition0$;
var inst_31901 = (inst_31900 & (64));
var inst_31902 = inst_31895.cljs$core$ISeq$;
var inst_31903 = (inst_31901) || (inst_31902);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31903)){
var statearr_32026_32081 = state_31991__$1;
(statearr_32026_32081[(1)] = (5));

} else {
var statearr_32027_32082 = state_31991__$1;
(statearr_32027_32082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (23))){
var inst_31950 = (state_31991[(14)]);
var inst_31956 = (inst_31950 == null);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31956)){
var statearr_32028_32083 = state_31991__$1;
(statearr_32028_32083[(1)] = (26));

} else {
var statearr_32029_32084 = state_31991__$1;
(statearr_32029_32084[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (35))){
var inst_31976 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31976)){
var statearr_32030_32085 = state_31991__$1;
(statearr_32030_32085[(1)] = (36));

} else {
var statearr_32031_32086 = state_31991__$1;
(statearr_32031_32086[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (19))){
var inst_31919 = (state_31991[(7)]);
var inst_31938 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31919);
var state_31991__$1 = state_31991;
var statearr_32032_32087 = state_31991__$1;
(statearr_32032_32087[(2)] = inst_31938);

(statearr_32032_32087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (11))){
var inst_31919 = (state_31991[(7)]);
var inst_31923 = (inst_31919 == null);
var inst_31924 = cljs.core.not.call(null,inst_31923);
var state_31991__$1 = state_31991;
if(inst_31924){
var statearr_32033_32088 = state_31991__$1;
(statearr_32033_32088[(1)] = (13));

} else {
var statearr_32034_32089 = state_31991__$1;
(statearr_32034_32089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (9))){
var inst_31895 = (state_31991[(8)]);
var state_31991__$1 = state_31991;
var statearr_32035_32090 = state_31991__$1;
(statearr_32035_32090[(2)] = inst_31895);

(statearr_32035_32090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (5))){
var state_31991__$1 = state_31991;
var statearr_32036_32091 = state_31991__$1;
(statearr_32036_32091[(2)] = true);

(statearr_32036_32091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (14))){
var state_31991__$1 = state_31991;
var statearr_32037_32092 = state_31991__$1;
(statearr_32037_32092[(2)] = false);

(statearr_32037_32092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (26))){
var inst_31951 = (state_31991[(11)]);
var inst_31958 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31951);
var state_31991__$1 = state_31991;
var statearr_32038_32093 = state_31991__$1;
(statearr_32038_32093[(2)] = inst_31958);

(statearr_32038_32093[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (16))){
var state_31991__$1 = state_31991;
var statearr_32039_32094 = state_31991__$1;
(statearr_32039_32094[(2)] = true);

(statearr_32039_32094[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (38))){
var inst_31981 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32040_32095 = state_31991__$1;
(statearr_32040_32095[(2)] = inst_31981);

(statearr_32040_32095[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (30))){
var inst_31943 = (state_31991[(13)]);
var inst_31942 = (state_31991[(10)]);
var inst_31951 = (state_31991[(11)]);
var inst_31968 = cljs.core.empty_QMARK_.call(null,inst_31942);
var inst_31969 = inst_31943.call(null,inst_31951);
var inst_31970 = cljs.core.not.call(null,inst_31969);
var inst_31971 = (inst_31968) && (inst_31970);
var state_31991__$1 = state_31991;
var statearr_32041_32096 = state_31991__$1;
(statearr_32041_32096[(2)] = inst_31971);

(statearr_32041_32096[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (10))){
var inst_31895 = (state_31991[(8)]);
var inst_31915 = (state_31991[(2)]);
var inst_31916 = cljs.core.get.call(null,inst_31915,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31917 = cljs.core.get.call(null,inst_31915,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31918 = cljs.core.get.call(null,inst_31915,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31919 = inst_31895;
var state_31991__$1 = (function (){var statearr_32042 = state_31991;
(statearr_32042[(16)] = inst_31916);

(statearr_32042[(17)] = inst_31918);

(statearr_32042[(18)] = inst_31917);

(statearr_32042[(7)] = inst_31919);

return statearr_32042;
})();
var statearr_32043_32097 = state_31991__$1;
(statearr_32043_32097[(2)] = null);

(statearr_32043_32097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (18))){
var inst_31933 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32044_32098 = state_31991__$1;
(statearr_32044_32098[(2)] = inst_31933);

(statearr_32044_32098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (37))){
var state_31991__$1 = state_31991;
var statearr_32045_32099 = state_31991__$1;
(statearr_32045_32099[(2)] = null);

(statearr_32045_32099[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (8))){
var inst_31895 = (state_31991[(8)]);
var inst_31912 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31895);
var state_31991__$1 = state_31991;
var statearr_32046_32100 = state_31991__$1;
(statearr_32046_32100[(2)] = inst_31912);

(statearr_32046_32100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto___32054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22783__auto__,c__22804__auto___32054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22784__auto__ = null;
var cljs$core$async$mix_$_state_machine__22784__auto____0 = (function (){
var statearr_32050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32050[(0)] = cljs$core$async$mix_$_state_machine__22784__auto__);

(statearr_32050[(1)] = (1));

return statearr_32050;
});
var cljs$core$async$mix_$_state_machine__22784__auto____1 = (function (state_31991){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_31991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e32051){if((e32051 instanceof Object)){
var ex__22787__auto__ = e32051;
var statearr_32052_32101 = state_31991;
(statearr_32052_32101[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32102 = state_31991;
state_31991 = G__32102;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22784__auto__ = function(state_31991){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22784__auto____1.call(this,state_31991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22784__auto____0;
cljs$core$async$mix_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22784__auto____1;
return cljs$core$async$mix_$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___32054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22806__auto__ = (function (){var statearr_32053 = f__22805__auto__.call(null);
(statearr_32053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___32054);

return statearr_32053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___32054,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20621__auto__ = (((p == null))?null:p);
var m__20622__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20622__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20621__auto__ = (((p == null))?null:p);
var m__20622__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,p,v,ch);
} else {
var m__20622__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32103 = [];
var len__21033__auto___32106 = arguments.length;
var i__21034__auto___32107 = (0);
while(true){
if((i__21034__auto___32107 < len__21033__auto___32106)){
args32103.push((arguments[i__21034__auto___32107]));

var G__32108 = (i__21034__auto___32107 + (1));
i__21034__auto___32107 = G__32108;
continue;
} else {
}
break;
}

var G__32105 = args32103.length;
switch (G__32105) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32103.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20621__auto__ = (((p == null))?null:p);
var m__20622__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,p);
} else {
var m__20622__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20621__auto__ = (((p == null))?null:p);
var m__20622__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20621__auto__)]);
if(!((m__20622__auto__ == null))){
return m__20622__auto__.call(null,p,v);
} else {
var m__20622__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20622__auto____$1 == null))){
return m__20622__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args32111 = [];
var len__21033__auto___32236 = arguments.length;
var i__21034__auto___32237 = (0);
while(true){
if((i__21034__auto___32237 < len__21033__auto___32236)){
args32111.push((arguments[i__21034__auto___32237]));

var G__32238 = (i__21034__auto___32237 + (1));
i__21034__auto___32237 = G__32238;
continue;
} else {
}
break;
}

var G__32113 = args32111.length;
switch (G__32113) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32111.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19958__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19958__auto__,mults){
return (function (p1__32110_SHARP_){
if(cljs.core.truth_(p1__32110_SHARP_.call(null,topic))){
return p1__32110_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32110_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19958__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32114 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32114 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32115){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32115 = meta32115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32116,meta32115__$1){
var self__ = this;
var _32116__$1 = this;
return (new cljs.core.async.t_cljs$core$async32114(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32115__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32116){
var self__ = this;
var _32116__$1 = this;
return self__.meta32115;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32114.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32114.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32115","meta32115",503995675,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32114";

cljs.core.async.t_cljs$core$async32114.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20564__auto__,writer__20565__auto__,opt__20566__auto__){
return cljs.core._write.call(null,writer__20565__auto__,"cljs.core.async/t_cljs$core$async32114");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32114 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32114(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32115){
return (new cljs.core.async.t_cljs$core$async32114(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32115));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32114(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22804__auto___32240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___32240,mults,ensure_mult,p){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___32240,mults,ensure_mult,p){
return (function (state_32188){
var state_val_32189 = (state_32188[(1)]);
if((state_val_32189 === (7))){
var inst_32184 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
var statearr_32190_32241 = state_32188__$1;
(statearr_32190_32241[(2)] = inst_32184);

(statearr_32190_32241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (20))){
var state_32188__$1 = state_32188;
var statearr_32191_32242 = state_32188__$1;
(statearr_32191_32242[(2)] = null);

(statearr_32191_32242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (1))){
var state_32188__$1 = state_32188;
var statearr_32192_32243 = state_32188__$1;
(statearr_32192_32243[(2)] = null);

(statearr_32192_32243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (24))){
var inst_32167 = (state_32188[(7)]);
var inst_32176 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32167);
var state_32188__$1 = state_32188;
var statearr_32193_32244 = state_32188__$1;
(statearr_32193_32244[(2)] = inst_32176);

(statearr_32193_32244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (4))){
var inst_32119 = (state_32188[(8)]);
var inst_32119__$1 = (state_32188[(2)]);
var inst_32120 = (inst_32119__$1 == null);
var state_32188__$1 = (function (){var statearr_32194 = state_32188;
(statearr_32194[(8)] = inst_32119__$1);

return statearr_32194;
})();
if(cljs.core.truth_(inst_32120)){
var statearr_32195_32245 = state_32188__$1;
(statearr_32195_32245[(1)] = (5));

} else {
var statearr_32196_32246 = state_32188__$1;
(statearr_32196_32246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (15))){
var inst_32161 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
var statearr_32197_32247 = state_32188__$1;
(statearr_32197_32247[(2)] = inst_32161);

(statearr_32197_32247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (21))){
var inst_32181 = (state_32188[(2)]);
var state_32188__$1 = (function (){var statearr_32198 = state_32188;
(statearr_32198[(9)] = inst_32181);

return statearr_32198;
})();
var statearr_32199_32248 = state_32188__$1;
(statearr_32199_32248[(2)] = null);

(statearr_32199_32248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (13))){
var inst_32143 = (state_32188[(10)]);
var inst_32145 = cljs.core.chunked_seq_QMARK_.call(null,inst_32143);
var state_32188__$1 = state_32188;
if(inst_32145){
var statearr_32200_32249 = state_32188__$1;
(statearr_32200_32249[(1)] = (16));

} else {
var statearr_32201_32250 = state_32188__$1;
(statearr_32201_32250[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (22))){
var inst_32173 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
if(cljs.core.truth_(inst_32173)){
var statearr_32202_32251 = state_32188__$1;
(statearr_32202_32251[(1)] = (23));

} else {
var statearr_32203_32252 = state_32188__$1;
(statearr_32203_32252[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (6))){
var inst_32119 = (state_32188[(8)]);
var inst_32169 = (state_32188[(11)]);
var inst_32167 = (state_32188[(7)]);
var inst_32167__$1 = topic_fn.call(null,inst_32119);
var inst_32168 = cljs.core.deref.call(null,mults);
var inst_32169__$1 = cljs.core.get.call(null,inst_32168,inst_32167__$1);
var state_32188__$1 = (function (){var statearr_32204 = state_32188;
(statearr_32204[(11)] = inst_32169__$1);

(statearr_32204[(7)] = inst_32167__$1);

return statearr_32204;
})();
if(cljs.core.truth_(inst_32169__$1)){
var statearr_32205_32253 = state_32188__$1;
(statearr_32205_32253[(1)] = (19));

} else {
var statearr_32206_32254 = state_32188__$1;
(statearr_32206_32254[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (25))){
var inst_32178 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
var statearr_32207_32255 = state_32188__$1;
(statearr_32207_32255[(2)] = inst_32178);

(statearr_32207_32255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (17))){
var inst_32143 = (state_32188[(10)]);
var inst_32152 = cljs.core.first.call(null,inst_32143);
var inst_32153 = cljs.core.async.muxch_STAR_.call(null,inst_32152);
var inst_32154 = cljs.core.async.close_BANG_.call(null,inst_32153);
var inst_32155 = cljs.core.next.call(null,inst_32143);
var inst_32129 = inst_32155;
var inst_32130 = null;
var inst_32131 = (0);
var inst_32132 = (0);
var state_32188__$1 = (function (){var statearr_32208 = state_32188;
(statearr_32208[(12)] = inst_32131);

(statearr_32208[(13)] = inst_32130);

(statearr_32208[(14)] = inst_32129);

(statearr_32208[(15)] = inst_32132);

(statearr_32208[(16)] = inst_32154);

return statearr_32208;
})();
var statearr_32209_32256 = state_32188__$1;
(statearr_32209_32256[(2)] = null);

(statearr_32209_32256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (3))){
var inst_32186 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32188__$1,inst_32186);
} else {
if((state_val_32189 === (12))){
var inst_32163 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
var statearr_32210_32257 = state_32188__$1;
(statearr_32210_32257[(2)] = inst_32163);

(statearr_32210_32257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (2))){
var state_32188__$1 = state_32188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32188__$1,(4),ch);
} else {
if((state_val_32189 === (23))){
var state_32188__$1 = state_32188;
var statearr_32211_32258 = state_32188__$1;
(statearr_32211_32258[(2)] = null);

(statearr_32211_32258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (19))){
var inst_32119 = (state_32188[(8)]);
var inst_32169 = (state_32188[(11)]);
var inst_32171 = cljs.core.async.muxch_STAR_.call(null,inst_32169);
var state_32188__$1 = state_32188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32188__$1,(22),inst_32171,inst_32119);
} else {
if((state_val_32189 === (11))){
var inst_32143 = (state_32188[(10)]);
var inst_32129 = (state_32188[(14)]);
var inst_32143__$1 = cljs.core.seq.call(null,inst_32129);
var state_32188__$1 = (function (){var statearr_32212 = state_32188;
(statearr_32212[(10)] = inst_32143__$1);

return statearr_32212;
})();
if(inst_32143__$1){
var statearr_32213_32259 = state_32188__$1;
(statearr_32213_32259[(1)] = (13));

} else {
var statearr_32214_32260 = state_32188__$1;
(statearr_32214_32260[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (9))){
var inst_32165 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
var statearr_32215_32261 = state_32188__$1;
(statearr_32215_32261[(2)] = inst_32165);

(statearr_32215_32261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (5))){
var inst_32126 = cljs.core.deref.call(null,mults);
var inst_32127 = cljs.core.vals.call(null,inst_32126);
var inst_32128 = cljs.core.seq.call(null,inst_32127);
var inst_32129 = inst_32128;
var inst_32130 = null;
var inst_32131 = (0);
var inst_32132 = (0);
var state_32188__$1 = (function (){var statearr_32216 = state_32188;
(statearr_32216[(12)] = inst_32131);

(statearr_32216[(13)] = inst_32130);

(statearr_32216[(14)] = inst_32129);

(statearr_32216[(15)] = inst_32132);

return statearr_32216;
})();
var statearr_32217_32262 = state_32188__$1;
(statearr_32217_32262[(2)] = null);

(statearr_32217_32262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (14))){
var state_32188__$1 = state_32188;
var statearr_32221_32263 = state_32188__$1;
(statearr_32221_32263[(2)] = null);

(statearr_32221_32263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (16))){
var inst_32143 = (state_32188[(10)]);
var inst_32147 = cljs.core.chunk_first.call(null,inst_32143);
var inst_32148 = cljs.core.chunk_rest.call(null,inst_32143);
var inst_32149 = cljs.core.count.call(null,inst_32147);
var inst_32129 = inst_32148;
var inst_32130 = inst_32147;
var inst_32131 = inst_32149;
var inst_32132 = (0);
var state_32188__$1 = (function (){var statearr_32222 = state_32188;
(statearr_32222[(12)] = inst_32131);

(statearr_32222[(13)] = inst_32130);

(statearr_32222[(14)] = inst_32129);

(statearr_32222[(15)] = inst_32132);

return statearr_32222;
})();
var statearr_32223_32264 = state_32188__$1;
(statearr_32223_32264[(2)] = null);

(statearr_32223_32264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (10))){
var inst_32131 = (state_32188[(12)]);
var inst_32130 = (state_32188[(13)]);
var inst_32129 = (state_32188[(14)]);
var inst_32132 = (state_32188[(15)]);
var inst_32137 = cljs.core._nth.call(null,inst_32130,inst_32132);
var inst_32138 = cljs.core.async.muxch_STAR_.call(null,inst_32137);
var inst_32139 = cljs.core.async.close_BANG_.call(null,inst_32138);
var inst_32140 = (inst_32132 + (1));
var tmp32218 = inst_32131;
var tmp32219 = inst_32130;
var tmp32220 = inst_32129;
var inst_32129__$1 = tmp32220;
var inst_32130__$1 = tmp32219;
var inst_32131__$1 = tmp32218;
var inst_32132__$1 = inst_32140;
var state_32188__$1 = (function (){var statearr_32224 = state_32188;
(statearr_32224[(12)] = inst_32131__$1);

(statearr_32224[(13)] = inst_32130__$1);

(statearr_32224[(14)] = inst_32129__$1);

(statearr_32224[(15)] = inst_32132__$1);

(statearr_32224[(17)] = inst_32139);

return statearr_32224;
})();
var statearr_32225_32265 = state_32188__$1;
(statearr_32225_32265[(2)] = null);

(statearr_32225_32265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (18))){
var inst_32158 = (state_32188[(2)]);
var state_32188__$1 = state_32188;
var statearr_32226_32266 = state_32188__$1;
(statearr_32226_32266[(2)] = inst_32158);

(statearr_32226_32266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32189 === (8))){
var inst_32131 = (state_32188[(12)]);
var inst_32132 = (state_32188[(15)]);
var inst_32134 = (inst_32132 < inst_32131);
var inst_32135 = inst_32134;
var state_32188__$1 = state_32188;
if(cljs.core.truth_(inst_32135)){
var statearr_32227_32267 = state_32188__$1;
(statearr_32227_32267[(1)] = (10));

} else {
var statearr_32228_32268 = state_32188__$1;
(statearr_32228_32268[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto___32240,mults,ensure_mult,p))
;
return ((function (switch__22783__auto__,c__22804__auto___32240,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22784__auto__ = null;
var cljs$core$async$state_machine__22784__auto____0 = (function (){
var statearr_32232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32232[(0)] = cljs$core$async$state_machine__22784__auto__);

(statearr_32232[(1)] = (1));

return statearr_32232;
});
var cljs$core$async$state_machine__22784__auto____1 = (function (state_32188){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_32188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e32233){if((e32233 instanceof Object)){
var ex__22787__auto__ = e32233;
var statearr_32234_32269 = state_32188;
(statearr_32234_32269[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32270 = state_32188;
state_32188 = G__32270;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$state_machine__22784__auto__ = function(state_32188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22784__auto____1.call(this,state_32188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22784__auto____0;
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22784__auto____1;
return cljs$core$async$state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___32240,mults,ensure_mult,p))
})();
var state__22806__auto__ = (function (){var statearr_32235 = f__22805__auto__.call(null);
(statearr_32235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___32240);

return statearr_32235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___32240,mults,ensure_mult,p))
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
var args32271 = [];
var len__21033__auto___32274 = arguments.length;
var i__21034__auto___32275 = (0);
while(true){
if((i__21034__auto___32275 < len__21033__auto___32274)){
args32271.push((arguments[i__21034__auto___32275]));

var G__32276 = (i__21034__auto___32275 + (1));
i__21034__auto___32275 = G__32276;
continue;
} else {
}
break;
}

var G__32273 = args32271.length;
switch (G__32273) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32271.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32278 = [];
var len__21033__auto___32281 = arguments.length;
var i__21034__auto___32282 = (0);
while(true){
if((i__21034__auto___32282 < len__21033__auto___32281)){
args32278.push((arguments[i__21034__auto___32282]));

var G__32283 = (i__21034__auto___32282 + (1));
i__21034__auto___32282 = G__32283;
continue;
} else {
}
break;
}

var G__32280 = args32278.length;
switch (G__32280) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32278.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args32285 = [];
var len__21033__auto___32356 = arguments.length;
var i__21034__auto___32357 = (0);
while(true){
if((i__21034__auto___32357 < len__21033__auto___32356)){
args32285.push((arguments[i__21034__auto___32357]));

var G__32358 = (i__21034__auto___32357 + (1));
i__21034__auto___32357 = G__32358;
continue;
} else {
}
break;
}

var G__32287 = args32285.length;
switch (G__32287) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32285.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22804__auto___32360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___32360,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___32360,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32326){
var state_val_32327 = (state_32326[(1)]);
if((state_val_32327 === (7))){
var state_32326__$1 = state_32326;
var statearr_32328_32361 = state_32326__$1;
(statearr_32328_32361[(2)] = null);

(statearr_32328_32361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (1))){
var state_32326__$1 = state_32326;
var statearr_32329_32362 = state_32326__$1;
(statearr_32329_32362[(2)] = null);

(statearr_32329_32362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (4))){
var inst_32290 = (state_32326[(7)]);
var inst_32292 = (inst_32290 < cnt);
var state_32326__$1 = state_32326;
if(cljs.core.truth_(inst_32292)){
var statearr_32330_32363 = state_32326__$1;
(statearr_32330_32363[(1)] = (6));

} else {
var statearr_32331_32364 = state_32326__$1;
(statearr_32331_32364[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (15))){
var inst_32322 = (state_32326[(2)]);
var state_32326__$1 = state_32326;
var statearr_32332_32365 = state_32326__$1;
(statearr_32332_32365[(2)] = inst_32322);

(statearr_32332_32365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (13))){
var inst_32315 = cljs.core.async.close_BANG_.call(null,out);
var state_32326__$1 = state_32326;
var statearr_32333_32366 = state_32326__$1;
(statearr_32333_32366[(2)] = inst_32315);

(statearr_32333_32366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (6))){
var state_32326__$1 = state_32326;
var statearr_32334_32367 = state_32326__$1;
(statearr_32334_32367[(2)] = null);

(statearr_32334_32367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (3))){
var inst_32324 = (state_32326[(2)]);
var state_32326__$1 = state_32326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32326__$1,inst_32324);
} else {
if((state_val_32327 === (12))){
var inst_32312 = (state_32326[(8)]);
var inst_32312__$1 = (state_32326[(2)]);
var inst_32313 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32312__$1);
var state_32326__$1 = (function (){var statearr_32335 = state_32326;
(statearr_32335[(8)] = inst_32312__$1);

return statearr_32335;
})();
if(cljs.core.truth_(inst_32313)){
var statearr_32336_32368 = state_32326__$1;
(statearr_32336_32368[(1)] = (13));

} else {
var statearr_32337_32369 = state_32326__$1;
(statearr_32337_32369[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (2))){
var inst_32289 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32290 = (0);
var state_32326__$1 = (function (){var statearr_32338 = state_32326;
(statearr_32338[(9)] = inst_32289);

(statearr_32338[(7)] = inst_32290);

return statearr_32338;
})();
var statearr_32339_32370 = state_32326__$1;
(statearr_32339_32370[(2)] = null);

(statearr_32339_32370[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (11))){
var inst_32290 = (state_32326[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32326,(10),Object,null,(9));
var inst_32299 = chs__$1.call(null,inst_32290);
var inst_32300 = done.call(null,inst_32290);
var inst_32301 = cljs.core.async.take_BANG_.call(null,inst_32299,inst_32300);
var state_32326__$1 = state_32326;
var statearr_32340_32371 = state_32326__$1;
(statearr_32340_32371[(2)] = inst_32301);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32326__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (9))){
var inst_32290 = (state_32326[(7)]);
var inst_32303 = (state_32326[(2)]);
var inst_32304 = (inst_32290 + (1));
var inst_32290__$1 = inst_32304;
var state_32326__$1 = (function (){var statearr_32341 = state_32326;
(statearr_32341[(10)] = inst_32303);

(statearr_32341[(7)] = inst_32290__$1);

return statearr_32341;
})();
var statearr_32342_32372 = state_32326__$1;
(statearr_32342_32372[(2)] = null);

(statearr_32342_32372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (5))){
var inst_32310 = (state_32326[(2)]);
var state_32326__$1 = (function (){var statearr_32343 = state_32326;
(statearr_32343[(11)] = inst_32310);

return statearr_32343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32326__$1,(12),dchan);
} else {
if((state_val_32327 === (14))){
var inst_32312 = (state_32326[(8)]);
var inst_32317 = cljs.core.apply.call(null,f,inst_32312);
var state_32326__$1 = state_32326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32326__$1,(16),out,inst_32317);
} else {
if((state_val_32327 === (16))){
var inst_32319 = (state_32326[(2)]);
var state_32326__$1 = (function (){var statearr_32344 = state_32326;
(statearr_32344[(12)] = inst_32319);

return statearr_32344;
})();
var statearr_32345_32373 = state_32326__$1;
(statearr_32345_32373[(2)] = null);

(statearr_32345_32373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (10))){
var inst_32294 = (state_32326[(2)]);
var inst_32295 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32326__$1 = (function (){var statearr_32346 = state_32326;
(statearr_32346[(13)] = inst_32294);

return statearr_32346;
})();
var statearr_32347_32374 = state_32326__$1;
(statearr_32347_32374[(2)] = inst_32295);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32326__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (8))){
var inst_32308 = (state_32326[(2)]);
var state_32326__$1 = state_32326;
var statearr_32348_32375 = state_32326__$1;
(statearr_32348_32375[(2)] = inst_32308);

(statearr_32348_32375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto___32360,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22783__auto__,c__22804__auto___32360,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22784__auto__ = null;
var cljs$core$async$state_machine__22784__auto____0 = (function (){
var statearr_32352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32352[(0)] = cljs$core$async$state_machine__22784__auto__);

(statearr_32352[(1)] = (1));

return statearr_32352;
});
var cljs$core$async$state_machine__22784__auto____1 = (function (state_32326){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_32326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e32353){if((e32353 instanceof Object)){
var ex__22787__auto__ = e32353;
var statearr_32354_32376 = state_32326;
(statearr_32354_32376[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32377 = state_32326;
state_32326 = G__32377;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$state_machine__22784__auto__ = function(state_32326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22784__auto____1.call(this,state_32326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22784__auto____0;
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22784__auto____1;
return cljs$core$async$state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___32360,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22806__auto__ = (function (){var statearr_32355 = f__22805__auto__.call(null);
(statearr_32355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___32360);

return statearr_32355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___32360,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32379 = [];
var len__21033__auto___32437 = arguments.length;
var i__21034__auto___32438 = (0);
while(true){
if((i__21034__auto___32438 < len__21033__auto___32437)){
args32379.push((arguments[i__21034__auto___32438]));

var G__32439 = (i__21034__auto___32438 + (1));
i__21034__auto___32438 = G__32439;
continue;
} else {
}
break;
}

var G__32381 = args32379.length;
switch (G__32381) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32379.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22804__auto___32441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___32441,out){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___32441,out){
return (function (state_32413){
var state_val_32414 = (state_32413[(1)]);
if((state_val_32414 === (7))){
var inst_32393 = (state_32413[(7)]);
var inst_32392 = (state_32413[(8)]);
var inst_32392__$1 = (state_32413[(2)]);
var inst_32393__$1 = cljs.core.nth.call(null,inst_32392__$1,(0),null);
var inst_32394 = cljs.core.nth.call(null,inst_32392__$1,(1),null);
var inst_32395 = (inst_32393__$1 == null);
var state_32413__$1 = (function (){var statearr_32415 = state_32413;
(statearr_32415[(9)] = inst_32394);

(statearr_32415[(7)] = inst_32393__$1);

(statearr_32415[(8)] = inst_32392__$1);

return statearr_32415;
})();
if(cljs.core.truth_(inst_32395)){
var statearr_32416_32442 = state_32413__$1;
(statearr_32416_32442[(1)] = (8));

} else {
var statearr_32417_32443 = state_32413__$1;
(statearr_32417_32443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (1))){
var inst_32382 = cljs.core.vec.call(null,chs);
var inst_32383 = inst_32382;
var state_32413__$1 = (function (){var statearr_32418 = state_32413;
(statearr_32418[(10)] = inst_32383);

return statearr_32418;
})();
var statearr_32419_32444 = state_32413__$1;
(statearr_32419_32444[(2)] = null);

(statearr_32419_32444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (4))){
var inst_32383 = (state_32413[(10)]);
var state_32413__$1 = state_32413;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32413__$1,(7),inst_32383);
} else {
if((state_val_32414 === (6))){
var inst_32409 = (state_32413[(2)]);
var state_32413__$1 = state_32413;
var statearr_32420_32445 = state_32413__$1;
(statearr_32420_32445[(2)] = inst_32409);

(statearr_32420_32445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (3))){
var inst_32411 = (state_32413[(2)]);
var state_32413__$1 = state_32413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32413__$1,inst_32411);
} else {
if((state_val_32414 === (2))){
var inst_32383 = (state_32413[(10)]);
var inst_32385 = cljs.core.count.call(null,inst_32383);
var inst_32386 = (inst_32385 > (0));
var state_32413__$1 = state_32413;
if(cljs.core.truth_(inst_32386)){
var statearr_32422_32446 = state_32413__$1;
(statearr_32422_32446[(1)] = (4));

} else {
var statearr_32423_32447 = state_32413__$1;
(statearr_32423_32447[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (11))){
var inst_32383 = (state_32413[(10)]);
var inst_32402 = (state_32413[(2)]);
var tmp32421 = inst_32383;
var inst_32383__$1 = tmp32421;
var state_32413__$1 = (function (){var statearr_32424 = state_32413;
(statearr_32424[(10)] = inst_32383__$1);

(statearr_32424[(11)] = inst_32402);

return statearr_32424;
})();
var statearr_32425_32448 = state_32413__$1;
(statearr_32425_32448[(2)] = null);

(statearr_32425_32448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (9))){
var inst_32393 = (state_32413[(7)]);
var state_32413__$1 = state_32413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32413__$1,(11),out,inst_32393);
} else {
if((state_val_32414 === (5))){
var inst_32407 = cljs.core.async.close_BANG_.call(null,out);
var state_32413__$1 = state_32413;
var statearr_32426_32449 = state_32413__$1;
(statearr_32426_32449[(2)] = inst_32407);

(statearr_32426_32449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (10))){
var inst_32405 = (state_32413[(2)]);
var state_32413__$1 = state_32413;
var statearr_32427_32450 = state_32413__$1;
(statearr_32427_32450[(2)] = inst_32405);

(statearr_32427_32450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32414 === (8))){
var inst_32383 = (state_32413[(10)]);
var inst_32394 = (state_32413[(9)]);
var inst_32393 = (state_32413[(7)]);
var inst_32392 = (state_32413[(8)]);
var inst_32397 = (function (){var cs = inst_32383;
var vec__32388 = inst_32392;
var v = inst_32393;
var c = inst_32394;
return ((function (cs,vec__32388,v,c,inst_32383,inst_32394,inst_32393,inst_32392,state_val_32414,c__22804__auto___32441,out){
return (function (p1__32378_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32378_SHARP_);
});
;})(cs,vec__32388,v,c,inst_32383,inst_32394,inst_32393,inst_32392,state_val_32414,c__22804__auto___32441,out))
})();
var inst_32398 = cljs.core.filterv.call(null,inst_32397,inst_32383);
var inst_32383__$1 = inst_32398;
var state_32413__$1 = (function (){var statearr_32428 = state_32413;
(statearr_32428[(10)] = inst_32383__$1);

return statearr_32428;
})();
var statearr_32429_32451 = state_32413__$1;
(statearr_32429_32451[(2)] = null);

(statearr_32429_32451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto___32441,out))
;
return ((function (switch__22783__auto__,c__22804__auto___32441,out){
return (function() {
var cljs$core$async$state_machine__22784__auto__ = null;
var cljs$core$async$state_machine__22784__auto____0 = (function (){
var statearr_32433 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32433[(0)] = cljs$core$async$state_machine__22784__auto__);

(statearr_32433[(1)] = (1));

return statearr_32433;
});
var cljs$core$async$state_machine__22784__auto____1 = (function (state_32413){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_32413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e32434){if((e32434 instanceof Object)){
var ex__22787__auto__ = e32434;
var statearr_32435_32452 = state_32413;
(statearr_32435_32452[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32453 = state_32413;
state_32413 = G__32453;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$state_machine__22784__auto__ = function(state_32413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22784__auto____1.call(this,state_32413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22784__auto____0;
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22784__auto____1;
return cljs$core$async$state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___32441,out))
})();
var state__22806__auto__ = (function (){var statearr_32436 = f__22805__auto__.call(null);
(statearr_32436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___32441);

return statearr_32436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___32441,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32454 = [];
var len__21033__auto___32503 = arguments.length;
var i__21034__auto___32504 = (0);
while(true){
if((i__21034__auto___32504 < len__21033__auto___32503)){
args32454.push((arguments[i__21034__auto___32504]));

var G__32505 = (i__21034__auto___32504 + (1));
i__21034__auto___32504 = G__32505;
continue;
} else {
}
break;
}

var G__32456 = args32454.length;
switch (G__32456) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32454.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22804__auto___32507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___32507,out){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___32507,out){
return (function (state_32480){
var state_val_32481 = (state_32480[(1)]);
if((state_val_32481 === (7))){
var inst_32462 = (state_32480[(7)]);
var inst_32462__$1 = (state_32480[(2)]);
var inst_32463 = (inst_32462__$1 == null);
var inst_32464 = cljs.core.not.call(null,inst_32463);
var state_32480__$1 = (function (){var statearr_32482 = state_32480;
(statearr_32482[(7)] = inst_32462__$1);

return statearr_32482;
})();
if(inst_32464){
var statearr_32483_32508 = state_32480__$1;
(statearr_32483_32508[(1)] = (8));

} else {
var statearr_32484_32509 = state_32480__$1;
(statearr_32484_32509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (1))){
var inst_32457 = (0);
var state_32480__$1 = (function (){var statearr_32485 = state_32480;
(statearr_32485[(8)] = inst_32457);

return statearr_32485;
})();
var statearr_32486_32510 = state_32480__$1;
(statearr_32486_32510[(2)] = null);

(statearr_32486_32510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (4))){
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32480__$1,(7),ch);
} else {
if((state_val_32481 === (6))){
var inst_32475 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32487_32511 = state_32480__$1;
(statearr_32487_32511[(2)] = inst_32475);

(statearr_32487_32511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (3))){
var inst_32477 = (state_32480[(2)]);
var inst_32478 = cljs.core.async.close_BANG_.call(null,out);
var state_32480__$1 = (function (){var statearr_32488 = state_32480;
(statearr_32488[(9)] = inst_32477);

return statearr_32488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32480__$1,inst_32478);
} else {
if((state_val_32481 === (2))){
var inst_32457 = (state_32480[(8)]);
var inst_32459 = (inst_32457 < n);
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32459)){
var statearr_32489_32512 = state_32480__$1;
(statearr_32489_32512[(1)] = (4));

} else {
var statearr_32490_32513 = state_32480__$1;
(statearr_32490_32513[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (11))){
var inst_32457 = (state_32480[(8)]);
var inst_32467 = (state_32480[(2)]);
var inst_32468 = (inst_32457 + (1));
var inst_32457__$1 = inst_32468;
var state_32480__$1 = (function (){var statearr_32491 = state_32480;
(statearr_32491[(8)] = inst_32457__$1);

(statearr_32491[(10)] = inst_32467);

return statearr_32491;
})();
var statearr_32492_32514 = state_32480__$1;
(statearr_32492_32514[(2)] = null);

(statearr_32492_32514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (9))){
var state_32480__$1 = state_32480;
var statearr_32493_32515 = state_32480__$1;
(statearr_32493_32515[(2)] = null);

(statearr_32493_32515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (5))){
var state_32480__$1 = state_32480;
var statearr_32494_32516 = state_32480__$1;
(statearr_32494_32516[(2)] = null);

(statearr_32494_32516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (10))){
var inst_32472 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32495_32517 = state_32480__$1;
(statearr_32495_32517[(2)] = inst_32472);

(statearr_32495_32517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (8))){
var inst_32462 = (state_32480[(7)]);
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32480__$1,(11),out,inst_32462);
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
});})(c__22804__auto___32507,out))
;
return ((function (switch__22783__auto__,c__22804__auto___32507,out){
return (function() {
var cljs$core$async$state_machine__22784__auto__ = null;
var cljs$core$async$state_machine__22784__auto____0 = (function (){
var statearr_32499 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32499[(0)] = cljs$core$async$state_machine__22784__auto__);

(statearr_32499[(1)] = (1));

return statearr_32499;
});
var cljs$core$async$state_machine__22784__auto____1 = (function (state_32480){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_32480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e32500){if((e32500 instanceof Object)){
var ex__22787__auto__ = e32500;
var statearr_32501_32518 = state_32480;
(statearr_32501_32518[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32519 = state_32480;
state_32480 = G__32519;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$state_machine__22784__auto__ = function(state_32480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22784__auto____1.call(this,state_32480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22784__auto____0;
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22784__auto____1;
return cljs$core$async$state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___32507,out))
})();
var state__22806__auto__ = (function (){var statearr_32502 = f__22805__auto__.call(null);
(statearr_32502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___32507);

return statearr_32502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___32507,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32527 = (function (map_LT_,f,ch,meta32528){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32528 = meta32528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32529,meta32528__$1){
var self__ = this;
var _32529__$1 = this;
return (new cljs.core.async.t_cljs$core$async32527(self__.map_LT_,self__.f,self__.ch,meta32528__$1));
});

cljs.core.async.t_cljs$core$async32527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32529){
var self__ = this;
var _32529__$1 = this;
return self__.meta32528;
});

cljs.core.async.t_cljs$core$async32527.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32527.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32527.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32530 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32530 = (function (map_LT_,f,ch,meta32528,_,fn1,meta32531){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32528 = meta32528;
this._ = _;
this.fn1 = fn1;
this.meta32531 = meta32531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32532,meta32531__$1){
var self__ = this;
var _32532__$1 = this;
return (new cljs.core.async.t_cljs$core$async32530(self__.map_LT_,self__.f,self__.ch,self__.meta32528,self__._,self__.fn1,meta32531__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32530.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32532){
var self__ = this;
var _32532__$1 = this;
return self__.meta32531;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32530.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32530.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32520_SHARP_){
return f1.call(null,(((p1__32520_SHARP_ == null))?null:self__.f.call(null,p1__32520_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32530.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32528","meta32528",-1118199718,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32527","cljs.core.async/t_cljs$core$async32527",1864792005,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32531","meta32531",1797787147,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32530";

cljs.core.async.t_cljs$core$async32530.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20564__auto__,writer__20565__auto__,opt__20566__auto__){
return cljs.core._write.call(null,writer__20565__auto__,"cljs.core.async/t_cljs$core$async32530");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32530 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32530(map_LT___$1,f__$1,ch__$1,meta32528__$1,___$2,fn1__$1,meta32531){
return (new cljs.core.async.t_cljs$core$async32530(map_LT___$1,f__$1,ch__$1,meta32528__$1,___$2,fn1__$1,meta32531));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32530(self__.map_LT_,self__.f,self__.ch,self__.meta32528,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19946__auto__ = ret;
if(cljs.core.truth_(and__19946__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19946__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32527.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32528","meta32528",-1118199718,null)], null);
});

cljs.core.async.t_cljs$core$async32527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32527";

cljs.core.async.t_cljs$core$async32527.cljs$lang$ctorPrWriter = (function (this__20564__auto__,writer__20565__auto__,opt__20566__auto__){
return cljs.core._write.call(null,writer__20565__auto__,"cljs.core.async/t_cljs$core$async32527");
});

cljs.core.async.__GT_t_cljs$core$async32527 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32527(map_LT___$1,f__$1,ch__$1,meta32528){
return (new cljs.core.async.t_cljs$core$async32527(map_LT___$1,f__$1,ch__$1,meta32528));
});

}

return (new cljs.core.async.t_cljs$core$async32527(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32536 = (function (map_GT_,f,ch,meta32537){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32537 = meta32537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32538,meta32537__$1){
var self__ = this;
var _32538__$1 = this;
return (new cljs.core.async.t_cljs$core$async32536(self__.map_GT_,self__.f,self__.ch,meta32537__$1));
});

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32538){
var self__ = this;
var _32538__$1 = this;
return self__.meta32537;
});

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32536.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32537","meta32537",-843354765,null)], null);
});

cljs.core.async.t_cljs$core$async32536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32536";

cljs.core.async.t_cljs$core$async32536.cljs$lang$ctorPrWriter = (function (this__20564__auto__,writer__20565__auto__,opt__20566__auto__){
return cljs.core._write.call(null,writer__20565__auto__,"cljs.core.async/t_cljs$core$async32536");
});

cljs.core.async.__GT_t_cljs$core$async32536 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32536(map_GT___$1,f__$1,ch__$1,meta32537){
return (new cljs.core.async.t_cljs$core$async32536(map_GT___$1,f__$1,ch__$1,meta32537));
});

}

return (new cljs.core.async.t_cljs$core$async32536(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32542 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32542 = (function (filter_GT_,p,ch,meta32543){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32543 = meta32543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32544,meta32543__$1){
var self__ = this;
var _32544__$1 = this;
return (new cljs.core.async.t_cljs$core$async32542(self__.filter_GT_,self__.p,self__.ch,meta32543__$1));
});

cljs.core.async.t_cljs$core$async32542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32544){
var self__ = this;
var _32544__$1 = this;
return self__.meta32543;
});

cljs.core.async.t_cljs$core$async32542.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32542.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32542.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32542.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32543","meta32543",1480463258,null)], null);
});

cljs.core.async.t_cljs$core$async32542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32542";

cljs.core.async.t_cljs$core$async32542.cljs$lang$ctorPrWriter = (function (this__20564__auto__,writer__20565__auto__,opt__20566__auto__){
return cljs.core._write.call(null,writer__20565__auto__,"cljs.core.async/t_cljs$core$async32542");
});

cljs.core.async.__GT_t_cljs$core$async32542 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32542(filter_GT___$1,p__$1,ch__$1,meta32543){
return (new cljs.core.async.t_cljs$core$async32542(filter_GT___$1,p__$1,ch__$1,meta32543));
});

}

return (new cljs.core.async.t_cljs$core$async32542(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32545 = [];
var len__21033__auto___32589 = arguments.length;
var i__21034__auto___32590 = (0);
while(true){
if((i__21034__auto___32590 < len__21033__auto___32589)){
args32545.push((arguments[i__21034__auto___32590]));

var G__32591 = (i__21034__auto___32590 + (1));
i__21034__auto___32590 = G__32591;
continue;
} else {
}
break;
}

var G__32547 = args32545.length;
switch (G__32547) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32545.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22804__auto___32593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___32593,out){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___32593,out){
return (function (state_32568){
var state_val_32569 = (state_32568[(1)]);
if((state_val_32569 === (7))){
var inst_32564 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
var statearr_32570_32594 = state_32568__$1;
(statearr_32570_32594[(2)] = inst_32564);

(statearr_32570_32594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (1))){
var state_32568__$1 = state_32568;
var statearr_32571_32595 = state_32568__$1;
(statearr_32571_32595[(2)] = null);

(statearr_32571_32595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (4))){
var inst_32550 = (state_32568[(7)]);
var inst_32550__$1 = (state_32568[(2)]);
var inst_32551 = (inst_32550__$1 == null);
var state_32568__$1 = (function (){var statearr_32572 = state_32568;
(statearr_32572[(7)] = inst_32550__$1);

return statearr_32572;
})();
if(cljs.core.truth_(inst_32551)){
var statearr_32573_32596 = state_32568__$1;
(statearr_32573_32596[(1)] = (5));

} else {
var statearr_32574_32597 = state_32568__$1;
(statearr_32574_32597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (6))){
var inst_32550 = (state_32568[(7)]);
var inst_32555 = p.call(null,inst_32550);
var state_32568__$1 = state_32568;
if(cljs.core.truth_(inst_32555)){
var statearr_32575_32598 = state_32568__$1;
(statearr_32575_32598[(1)] = (8));

} else {
var statearr_32576_32599 = state_32568__$1;
(statearr_32576_32599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (3))){
var inst_32566 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32568__$1,inst_32566);
} else {
if((state_val_32569 === (2))){
var state_32568__$1 = state_32568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32568__$1,(4),ch);
} else {
if((state_val_32569 === (11))){
var inst_32558 = (state_32568[(2)]);
var state_32568__$1 = state_32568;
var statearr_32577_32600 = state_32568__$1;
(statearr_32577_32600[(2)] = inst_32558);

(statearr_32577_32600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (9))){
var state_32568__$1 = state_32568;
var statearr_32578_32601 = state_32568__$1;
(statearr_32578_32601[(2)] = null);

(statearr_32578_32601[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (5))){
var inst_32553 = cljs.core.async.close_BANG_.call(null,out);
var state_32568__$1 = state_32568;
var statearr_32579_32602 = state_32568__$1;
(statearr_32579_32602[(2)] = inst_32553);

(statearr_32579_32602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (10))){
var inst_32561 = (state_32568[(2)]);
var state_32568__$1 = (function (){var statearr_32580 = state_32568;
(statearr_32580[(8)] = inst_32561);

return statearr_32580;
})();
var statearr_32581_32603 = state_32568__$1;
(statearr_32581_32603[(2)] = null);

(statearr_32581_32603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32569 === (8))){
var inst_32550 = (state_32568[(7)]);
var state_32568__$1 = state_32568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32568__$1,(11),out,inst_32550);
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
});})(c__22804__auto___32593,out))
;
return ((function (switch__22783__auto__,c__22804__auto___32593,out){
return (function() {
var cljs$core$async$state_machine__22784__auto__ = null;
var cljs$core$async$state_machine__22784__auto____0 = (function (){
var statearr_32585 = [null,null,null,null,null,null,null,null,null];
(statearr_32585[(0)] = cljs$core$async$state_machine__22784__auto__);

(statearr_32585[(1)] = (1));

return statearr_32585;
});
var cljs$core$async$state_machine__22784__auto____1 = (function (state_32568){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_32568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e32586){if((e32586 instanceof Object)){
var ex__22787__auto__ = e32586;
var statearr_32587_32604 = state_32568;
(statearr_32587_32604[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32605 = state_32568;
state_32568 = G__32605;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$state_machine__22784__auto__ = function(state_32568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22784__auto____1.call(this,state_32568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22784__auto____0;
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22784__auto____1;
return cljs$core$async$state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___32593,out))
})();
var state__22806__auto__ = (function (){var statearr_32588 = f__22805__auto__.call(null);
(statearr_32588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___32593);

return statearr_32588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___32593,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32606 = [];
var len__21033__auto___32609 = arguments.length;
var i__21034__auto___32610 = (0);
while(true){
if((i__21034__auto___32610 < len__21033__auto___32609)){
args32606.push((arguments[i__21034__auto___32610]));

var G__32611 = (i__21034__auto___32610 + (1));
i__21034__auto___32610 = G__32611;
continue;
} else {
}
break;
}

var G__32608 = args32606.length;
switch (G__32608) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32606.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto__){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto__){
return (function (state_32778){
var state_val_32779 = (state_32778[(1)]);
if((state_val_32779 === (7))){
var inst_32774 = (state_32778[(2)]);
var state_32778__$1 = state_32778;
var statearr_32780_32821 = state_32778__$1;
(statearr_32780_32821[(2)] = inst_32774);

(statearr_32780_32821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (20))){
var inst_32744 = (state_32778[(7)]);
var inst_32755 = (state_32778[(2)]);
var inst_32756 = cljs.core.next.call(null,inst_32744);
var inst_32730 = inst_32756;
var inst_32731 = null;
var inst_32732 = (0);
var inst_32733 = (0);
var state_32778__$1 = (function (){var statearr_32781 = state_32778;
(statearr_32781[(8)] = inst_32755);

(statearr_32781[(9)] = inst_32731);

(statearr_32781[(10)] = inst_32732);

(statearr_32781[(11)] = inst_32730);

(statearr_32781[(12)] = inst_32733);

return statearr_32781;
})();
var statearr_32782_32822 = state_32778__$1;
(statearr_32782_32822[(2)] = null);

(statearr_32782_32822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (1))){
var state_32778__$1 = state_32778;
var statearr_32783_32823 = state_32778__$1;
(statearr_32783_32823[(2)] = null);

(statearr_32783_32823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (4))){
var inst_32719 = (state_32778[(13)]);
var inst_32719__$1 = (state_32778[(2)]);
var inst_32720 = (inst_32719__$1 == null);
var state_32778__$1 = (function (){var statearr_32784 = state_32778;
(statearr_32784[(13)] = inst_32719__$1);

return statearr_32784;
})();
if(cljs.core.truth_(inst_32720)){
var statearr_32785_32824 = state_32778__$1;
(statearr_32785_32824[(1)] = (5));

} else {
var statearr_32786_32825 = state_32778__$1;
(statearr_32786_32825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (15))){
var state_32778__$1 = state_32778;
var statearr_32790_32826 = state_32778__$1;
(statearr_32790_32826[(2)] = null);

(statearr_32790_32826[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (21))){
var state_32778__$1 = state_32778;
var statearr_32791_32827 = state_32778__$1;
(statearr_32791_32827[(2)] = null);

(statearr_32791_32827[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (13))){
var inst_32731 = (state_32778[(9)]);
var inst_32732 = (state_32778[(10)]);
var inst_32730 = (state_32778[(11)]);
var inst_32733 = (state_32778[(12)]);
var inst_32740 = (state_32778[(2)]);
var inst_32741 = (inst_32733 + (1));
var tmp32787 = inst_32731;
var tmp32788 = inst_32732;
var tmp32789 = inst_32730;
var inst_32730__$1 = tmp32789;
var inst_32731__$1 = tmp32787;
var inst_32732__$1 = tmp32788;
var inst_32733__$1 = inst_32741;
var state_32778__$1 = (function (){var statearr_32792 = state_32778;
(statearr_32792[(9)] = inst_32731__$1);

(statearr_32792[(14)] = inst_32740);

(statearr_32792[(10)] = inst_32732__$1);

(statearr_32792[(11)] = inst_32730__$1);

(statearr_32792[(12)] = inst_32733__$1);

return statearr_32792;
})();
var statearr_32793_32828 = state_32778__$1;
(statearr_32793_32828[(2)] = null);

(statearr_32793_32828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (22))){
var state_32778__$1 = state_32778;
var statearr_32794_32829 = state_32778__$1;
(statearr_32794_32829[(2)] = null);

(statearr_32794_32829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (6))){
var inst_32719 = (state_32778[(13)]);
var inst_32728 = f.call(null,inst_32719);
var inst_32729 = cljs.core.seq.call(null,inst_32728);
var inst_32730 = inst_32729;
var inst_32731 = null;
var inst_32732 = (0);
var inst_32733 = (0);
var state_32778__$1 = (function (){var statearr_32795 = state_32778;
(statearr_32795[(9)] = inst_32731);

(statearr_32795[(10)] = inst_32732);

(statearr_32795[(11)] = inst_32730);

(statearr_32795[(12)] = inst_32733);

return statearr_32795;
})();
var statearr_32796_32830 = state_32778__$1;
(statearr_32796_32830[(2)] = null);

(statearr_32796_32830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (17))){
var inst_32744 = (state_32778[(7)]);
var inst_32748 = cljs.core.chunk_first.call(null,inst_32744);
var inst_32749 = cljs.core.chunk_rest.call(null,inst_32744);
var inst_32750 = cljs.core.count.call(null,inst_32748);
var inst_32730 = inst_32749;
var inst_32731 = inst_32748;
var inst_32732 = inst_32750;
var inst_32733 = (0);
var state_32778__$1 = (function (){var statearr_32797 = state_32778;
(statearr_32797[(9)] = inst_32731);

(statearr_32797[(10)] = inst_32732);

(statearr_32797[(11)] = inst_32730);

(statearr_32797[(12)] = inst_32733);

return statearr_32797;
})();
var statearr_32798_32831 = state_32778__$1;
(statearr_32798_32831[(2)] = null);

(statearr_32798_32831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (3))){
var inst_32776 = (state_32778[(2)]);
var state_32778__$1 = state_32778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32778__$1,inst_32776);
} else {
if((state_val_32779 === (12))){
var inst_32764 = (state_32778[(2)]);
var state_32778__$1 = state_32778;
var statearr_32799_32832 = state_32778__$1;
(statearr_32799_32832[(2)] = inst_32764);

(statearr_32799_32832[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (2))){
var state_32778__$1 = state_32778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32778__$1,(4),in$);
} else {
if((state_val_32779 === (23))){
var inst_32772 = (state_32778[(2)]);
var state_32778__$1 = state_32778;
var statearr_32800_32833 = state_32778__$1;
(statearr_32800_32833[(2)] = inst_32772);

(statearr_32800_32833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (19))){
var inst_32759 = (state_32778[(2)]);
var state_32778__$1 = state_32778;
var statearr_32801_32834 = state_32778__$1;
(statearr_32801_32834[(2)] = inst_32759);

(statearr_32801_32834[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (11))){
var inst_32744 = (state_32778[(7)]);
var inst_32730 = (state_32778[(11)]);
var inst_32744__$1 = cljs.core.seq.call(null,inst_32730);
var state_32778__$1 = (function (){var statearr_32802 = state_32778;
(statearr_32802[(7)] = inst_32744__$1);

return statearr_32802;
})();
if(inst_32744__$1){
var statearr_32803_32835 = state_32778__$1;
(statearr_32803_32835[(1)] = (14));

} else {
var statearr_32804_32836 = state_32778__$1;
(statearr_32804_32836[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (9))){
var inst_32766 = (state_32778[(2)]);
var inst_32767 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32778__$1 = (function (){var statearr_32805 = state_32778;
(statearr_32805[(15)] = inst_32766);

return statearr_32805;
})();
if(cljs.core.truth_(inst_32767)){
var statearr_32806_32837 = state_32778__$1;
(statearr_32806_32837[(1)] = (21));

} else {
var statearr_32807_32838 = state_32778__$1;
(statearr_32807_32838[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (5))){
var inst_32722 = cljs.core.async.close_BANG_.call(null,out);
var state_32778__$1 = state_32778;
var statearr_32808_32839 = state_32778__$1;
(statearr_32808_32839[(2)] = inst_32722);

(statearr_32808_32839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (14))){
var inst_32744 = (state_32778[(7)]);
var inst_32746 = cljs.core.chunked_seq_QMARK_.call(null,inst_32744);
var state_32778__$1 = state_32778;
if(inst_32746){
var statearr_32809_32840 = state_32778__$1;
(statearr_32809_32840[(1)] = (17));

} else {
var statearr_32810_32841 = state_32778__$1;
(statearr_32810_32841[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (16))){
var inst_32762 = (state_32778[(2)]);
var state_32778__$1 = state_32778;
var statearr_32811_32842 = state_32778__$1;
(statearr_32811_32842[(2)] = inst_32762);

(statearr_32811_32842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32779 === (10))){
var inst_32731 = (state_32778[(9)]);
var inst_32733 = (state_32778[(12)]);
var inst_32738 = cljs.core._nth.call(null,inst_32731,inst_32733);
var state_32778__$1 = state_32778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32778__$1,(13),out,inst_32738);
} else {
if((state_val_32779 === (18))){
var inst_32744 = (state_32778[(7)]);
var inst_32753 = cljs.core.first.call(null,inst_32744);
var state_32778__$1 = state_32778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32778__$1,(20),out,inst_32753);
} else {
if((state_val_32779 === (8))){
var inst_32732 = (state_32778[(10)]);
var inst_32733 = (state_32778[(12)]);
var inst_32735 = (inst_32733 < inst_32732);
var inst_32736 = inst_32735;
var state_32778__$1 = state_32778;
if(cljs.core.truth_(inst_32736)){
var statearr_32812_32843 = state_32778__$1;
(statearr_32812_32843[(1)] = (10));

} else {
var statearr_32813_32844 = state_32778__$1;
(statearr_32813_32844[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto__))
;
return ((function (switch__22783__auto__,c__22804__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22784__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22784__auto____0 = (function (){
var statearr_32817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32817[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22784__auto__);

(statearr_32817[(1)] = (1));

return statearr_32817;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22784__auto____1 = (function (state_32778){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_32778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e32818){if((e32818 instanceof Object)){
var ex__22787__auto__ = e32818;
var statearr_32819_32845 = state_32778;
(statearr_32819_32845[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32846 = state_32778;
state_32778 = G__32846;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22784__auto__ = function(state_32778){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22784__auto____1.call(this,state_32778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22784__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22784__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto__))
})();
var state__22806__auto__ = (function (){var statearr_32820 = f__22805__auto__.call(null);
(statearr_32820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto__);

return statearr_32820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto__))
);

return c__22804__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32847 = [];
var len__21033__auto___32850 = arguments.length;
var i__21034__auto___32851 = (0);
while(true){
if((i__21034__auto___32851 < len__21033__auto___32850)){
args32847.push((arguments[i__21034__auto___32851]));

var G__32852 = (i__21034__auto___32851 + (1));
i__21034__auto___32851 = G__32852;
continue;
} else {
}
break;
}

var G__32849 = args32847.length;
switch (G__32849) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32847.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32854 = [];
var len__21033__auto___32857 = arguments.length;
var i__21034__auto___32858 = (0);
while(true){
if((i__21034__auto___32858 < len__21033__auto___32857)){
args32854.push((arguments[i__21034__auto___32858]));

var G__32859 = (i__21034__auto___32858 + (1));
i__21034__auto___32858 = G__32859;
continue;
} else {
}
break;
}

var G__32856 = args32854.length;
switch (G__32856) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32854.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32861 = [];
var len__21033__auto___32912 = arguments.length;
var i__21034__auto___32913 = (0);
while(true){
if((i__21034__auto___32913 < len__21033__auto___32912)){
args32861.push((arguments[i__21034__auto___32913]));

var G__32914 = (i__21034__auto___32913 + (1));
i__21034__auto___32913 = G__32914;
continue;
} else {
}
break;
}

var G__32863 = args32861.length;
switch (G__32863) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32861.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22804__auto___32916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___32916,out){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___32916,out){
return (function (state_32887){
var state_val_32888 = (state_32887[(1)]);
if((state_val_32888 === (7))){
var inst_32882 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
var statearr_32889_32917 = state_32887__$1;
(statearr_32889_32917[(2)] = inst_32882);

(statearr_32889_32917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (1))){
var inst_32864 = null;
var state_32887__$1 = (function (){var statearr_32890 = state_32887;
(statearr_32890[(7)] = inst_32864);

return statearr_32890;
})();
var statearr_32891_32918 = state_32887__$1;
(statearr_32891_32918[(2)] = null);

(statearr_32891_32918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (4))){
var inst_32867 = (state_32887[(8)]);
var inst_32867__$1 = (state_32887[(2)]);
var inst_32868 = (inst_32867__$1 == null);
var inst_32869 = cljs.core.not.call(null,inst_32868);
var state_32887__$1 = (function (){var statearr_32892 = state_32887;
(statearr_32892[(8)] = inst_32867__$1);

return statearr_32892;
})();
if(inst_32869){
var statearr_32893_32919 = state_32887__$1;
(statearr_32893_32919[(1)] = (5));

} else {
var statearr_32894_32920 = state_32887__$1;
(statearr_32894_32920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (6))){
var state_32887__$1 = state_32887;
var statearr_32895_32921 = state_32887__$1;
(statearr_32895_32921[(2)] = null);

(statearr_32895_32921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (3))){
var inst_32884 = (state_32887[(2)]);
var inst_32885 = cljs.core.async.close_BANG_.call(null,out);
var state_32887__$1 = (function (){var statearr_32896 = state_32887;
(statearr_32896[(9)] = inst_32884);

return statearr_32896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32887__$1,inst_32885);
} else {
if((state_val_32888 === (2))){
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32887__$1,(4),ch);
} else {
if((state_val_32888 === (11))){
var inst_32867 = (state_32887[(8)]);
var inst_32876 = (state_32887[(2)]);
var inst_32864 = inst_32867;
var state_32887__$1 = (function (){var statearr_32897 = state_32887;
(statearr_32897[(10)] = inst_32876);

(statearr_32897[(7)] = inst_32864);

return statearr_32897;
})();
var statearr_32898_32922 = state_32887__$1;
(statearr_32898_32922[(2)] = null);

(statearr_32898_32922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (9))){
var inst_32867 = (state_32887[(8)]);
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32887__$1,(11),out,inst_32867);
} else {
if((state_val_32888 === (5))){
var inst_32864 = (state_32887[(7)]);
var inst_32867 = (state_32887[(8)]);
var inst_32871 = cljs.core._EQ_.call(null,inst_32867,inst_32864);
var state_32887__$1 = state_32887;
if(inst_32871){
var statearr_32900_32923 = state_32887__$1;
(statearr_32900_32923[(1)] = (8));

} else {
var statearr_32901_32924 = state_32887__$1;
(statearr_32901_32924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (10))){
var inst_32879 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
var statearr_32902_32925 = state_32887__$1;
(statearr_32902_32925[(2)] = inst_32879);

(statearr_32902_32925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (8))){
var inst_32864 = (state_32887[(7)]);
var tmp32899 = inst_32864;
var inst_32864__$1 = tmp32899;
var state_32887__$1 = (function (){var statearr_32903 = state_32887;
(statearr_32903[(7)] = inst_32864__$1);

return statearr_32903;
})();
var statearr_32904_32926 = state_32887__$1;
(statearr_32904_32926[(2)] = null);

(statearr_32904_32926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto___32916,out))
;
return ((function (switch__22783__auto__,c__22804__auto___32916,out){
return (function() {
var cljs$core$async$state_machine__22784__auto__ = null;
var cljs$core$async$state_machine__22784__auto____0 = (function (){
var statearr_32908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32908[(0)] = cljs$core$async$state_machine__22784__auto__);

(statearr_32908[(1)] = (1));

return statearr_32908;
});
var cljs$core$async$state_machine__22784__auto____1 = (function (state_32887){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_32887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e32909){if((e32909 instanceof Object)){
var ex__22787__auto__ = e32909;
var statearr_32910_32927 = state_32887;
(statearr_32910_32927[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32928 = state_32887;
state_32887 = G__32928;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$state_machine__22784__auto__ = function(state_32887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22784__auto____1.call(this,state_32887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22784__auto____0;
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22784__auto____1;
return cljs$core$async$state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___32916,out))
})();
var state__22806__auto__ = (function (){var statearr_32911 = f__22805__auto__.call(null);
(statearr_32911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___32916);

return statearr_32911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___32916,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32929 = [];
var len__21033__auto___32999 = arguments.length;
var i__21034__auto___33000 = (0);
while(true){
if((i__21034__auto___33000 < len__21033__auto___32999)){
args32929.push((arguments[i__21034__auto___33000]));

var G__33001 = (i__21034__auto___33000 + (1));
i__21034__auto___33000 = G__33001;
continue;
} else {
}
break;
}

var G__32931 = args32929.length;
switch (G__32931) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32929.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22804__auto___33003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___33003,out){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___33003,out){
return (function (state_32969){
var state_val_32970 = (state_32969[(1)]);
if((state_val_32970 === (7))){
var inst_32965 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
var statearr_32971_33004 = state_32969__$1;
(statearr_32971_33004[(2)] = inst_32965);

(statearr_32971_33004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (1))){
var inst_32932 = (new Array(n));
var inst_32933 = inst_32932;
var inst_32934 = (0);
var state_32969__$1 = (function (){var statearr_32972 = state_32969;
(statearr_32972[(7)] = inst_32933);

(statearr_32972[(8)] = inst_32934);

return statearr_32972;
})();
var statearr_32973_33005 = state_32969__$1;
(statearr_32973_33005[(2)] = null);

(statearr_32973_33005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (4))){
var inst_32937 = (state_32969[(9)]);
var inst_32937__$1 = (state_32969[(2)]);
var inst_32938 = (inst_32937__$1 == null);
var inst_32939 = cljs.core.not.call(null,inst_32938);
var state_32969__$1 = (function (){var statearr_32974 = state_32969;
(statearr_32974[(9)] = inst_32937__$1);

return statearr_32974;
})();
if(inst_32939){
var statearr_32975_33006 = state_32969__$1;
(statearr_32975_33006[(1)] = (5));

} else {
var statearr_32976_33007 = state_32969__$1;
(statearr_32976_33007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (15))){
var inst_32959 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
var statearr_32977_33008 = state_32969__$1;
(statearr_32977_33008[(2)] = inst_32959);

(statearr_32977_33008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (13))){
var state_32969__$1 = state_32969;
var statearr_32978_33009 = state_32969__$1;
(statearr_32978_33009[(2)] = null);

(statearr_32978_33009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (6))){
var inst_32934 = (state_32969[(8)]);
var inst_32955 = (inst_32934 > (0));
var state_32969__$1 = state_32969;
if(cljs.core.truth_(inst_32955)){
var statearr_32979_33010 = state_32969__$1;
(statearr_32979_33010[(1)] = (12));

} else {
var statearr_32980_33011 = state_32969__$1;
(statearr_32980_33011[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (3))){
var inst_32967 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32969__$1,inst_32967);
} else {
if((state_val_32970 === (12))){
var inst_32933 = (state_32969[(7)]);
var inst_32957 = cljs.core.vec.call(null,inst_32933);
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32969__$1,(15),out,inst_32957);
} else {
if((state_val_32970 === (2))){
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32969__$1,(4),ch);
} else {
if((state_val_32970 === (11))){
var inst_32949 = (state_32969[(2)]);
var inst_32950 = (new Array(n));
var inst_32933 = inst_32950;
var inst_32934 = (0);
var state_32969__$1 = (function (){var statearr_32981 = state_32969;
(statearr_32981[(10)] = inst_32949);

(statearr_32981[(7)] = inst_32933);

(statearr_32981[(8)] = inst_32934);

return statearr_32981;
})();
var statearr_32982_33012 = state_32969__$1;
(statearr_32982_33012[(2)] = null);

(statearr_32982_33012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (9))){
var inst_32933 = (state_32969[(7)]);
var inst_32947 = cljs.core.vec.call(null,inst_32933);
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32969__$1,(11),out,inst_32947);
} else {
if((state_val_32970 === (5))){
var inst_32942 = (state_32969[(11)]);
var inst_32937 = (state_32969[(9)]);
var inst_32933 = (state_32969[(7)]);
var inst_32934 = (state_32969[(8)]);
var inst_32941 = (inst_32933[inst_32934] = inst_32937);
var inst_32942__$1 = (inst_32934 + (1));
var inst_32943 = (inst_32942__$1 < n);
var state_32969__$1 = (function (){var statearr_32983 = state_32969;
(statearr_32983[(12)] = inst_32941);

(statearr_32983[(11)] = inst_32942__$1);

return statearr_32983;
})();
if(cljs.core.truth_(inst_32943)){
var statearr_32984_33013 = state_32969__$1;
(statearr_32984_33013[(1)] = (8));

} else {
var statearr_32985_33014 = state_32969__$1;
(statearr_32985_33014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (14))){
var inst_32962 = (state_32969[(2)]);
var inst_32963 = cljs.core.async.close_BANG_.call(null,out);
var state_32969__$1 = (function (){var statearr_32987 = state_32969;
(statearr_32987[(13)] = inst_32962);

return statearr_32987;
})();
var statearr_32988_33015 = state_32969__$1;
(statearr_32988_33015[(2)] = inst_32963);

(statearr_32988_33015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (10))){
var inst_32953 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
var statearr_32989_33016 = state_32969__$1;
(statearr_32989_33016[(2)] = inst_32953);

(statearr_32989_33016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (8))){
var inst_32942 = (state_32969[(11)]);
var inst_32933 = (state_32969[(7)]);
var tmp32986 = inst_32933;
var inst_32933__$1 = tmp32986;
var inst_32934 = inst_32942;
var state_32969__$1 = (function (){var statearr_32990 = state_32969;
(statearr_32990[(7)] = inst_32933__$1);

(statearr_32990[(8)] = inst_32934);

return statearr_32990;
})();
var statearr_32991_33017 = state_32969__$1;
(statearr_32991_33017[(2)] = null);

(statearr_32991_33017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto___33003,out))
;
return ((function (switch__22783__auto__,c__22804__auto___33003,out){
return (function() {
var cljs$core$async$state_machine__22784__auto__ = null;
var cljs$core$async$state_machine__22784__auto____0 = (function (){
var statearr_32995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32995[(0)] = cljs$core$async$state_machine__22784__auto__);

(statearr_32995[(1)] = (1));

return statearr_32995;
});
var cljs$core$async$state_machine__22784__auto____1 = (function (state_32969){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_32969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e32996){if((e32996 instanceof Object)){
var ex__22787__auto__ = e32996;
var statearr_32997_33018 = state_32969;
(statearr_32997_33018[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33019 = state_32969;
state_32969 = G__33019;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$state_machine__22784__auto__ = function(state_32969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22784__auto____1.call(this,state_32969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22784__auto____0;
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22784__auto____1;
return cljs$core$async$state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___33003,out))
})();
var state__22806__auto__ = (function (){var statearr_32998 = f__22805__auto__.call(null);
(statearr_32998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___33003);

return statearr_32998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___33003,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33020 = [];
var len__21033__auto___33094 = arguments.length;
var i__21034__auto___33095 = (0);
while(true){
if((i__21034__auto___33095 < len__21033__auto___33094)){
args33020.push((arguments[i__21034__auto___33095]));

var G__33096 = (i__21034__auto___33095 + (1));
i__21034__auto___33095 = G__33096;
continue;
} else {
}
break;
}

var G__33022 = args33020.length;
switch (G__33022) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33020.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22804__auto___33098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___33098,out){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___33098,out){
return (function (state_33064){
var state_val_33065 = (state_33064[(1)]);
if((state_val_33065 === (7))){
var inst_33060 = (state_33064[(2)]);
var state_33064__$1 = state_33064;
var statearr_33066_33099 = state_33064__$1;
(statearr_33066_33099[(2)] = inst_33060);

(statearr_33066_33099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (1))){
var inst_33023 = [];
var inst_33024 = inst_33023;
var inst_33025 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33064__$1 = (function (){var statearr_33067 = state_33064;
(statearr_33067[(7)] = inst_33025);

(statearr_33067[(8)] = inst_33024);

return statearr_33067;
})();
var statearr_33068_33100 = state_33064__$1;
(statearr_33068_33100[(2)] = null);

(statearr_33068_33100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (4))){
var inst_33028 = (state_33064[(9)]);
var inst_33028__$1 = (state_33064[(2)]);
var inst_33029 = (inst_33028__$1 == null);
var inst_33030 = cljs.core.not.call(null,inst_33029);
var state_33064__$1 = (function (){var statearr_33069 = state_33064;
(statearr_33069[(9)] = inst_33028__$1);

return statearr_33069;
})();
if(inst_33030){
var statearr_33070_33101 = state_33064__$1;
(statearr_33070_33101[(1)] = (5));

} else {
var statearr_33071_33102 = state_33064__$1;
(statearr_33071_33102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (15))){
var inst_33054 = (state_33064[(2)]);
var state_33064__$1 = state_33064;
var statearr_33072_33103 = state_33064__$1;
(statearr_33072_33103[(2)] = inst_33054);

(statearr_33072_33103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (13))){
var state_33064__$1 = state_33064;
var statearr_33073_33104 = state_33064__$1;
(statearr_33073_33104[(2)] = null);

(statearr_33073_33104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (6))){
var inst_33024 = (state_33064[(8)]);
var inst_33049 = inst_33024.length;
var inst_33050 = (inst_33049 > (0));
var state_33064__$1 = state_33064;
if(cljs.core.truth_(inst_33050)){
var statearr_33074_33105 = state_33064__$1;
(statearr_33074_33105[(1)] = (12));

} else {
var statearr_33075_33106 = state_33064__$1;
(statearr_33075_33106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (3))){
var inst_33062 = (state_33064[(2)]);
var state_33064__$1 = state_33064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33064__$1,inst_33062);
} else {
if((state_val_33065 === (12))){
var inst_33024 = (state_33064[(8)]);
var inst_33052 = cljs.core.vec.call(null,inst_33024);
var state_33064__$1 = state_33064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33064__$1,(15),out,inst_33052);
} else {
if((state_val_33065 === (2))){
var state_33064__$1 = state_33064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33064__$1,(4),ch);
} else {
if((state_val_33065 === (11))){
var inst_33032 = (state_33064[(10)]);
var inst_33028 = (state_33064[(9)]);
var inst_33042 = (state_33064[(2)]);
var inst_33043 = [];
var inst_33044 = inst_33043.push(inst_33028);
var inst_33024 = inst_33043;
var inst_33025 = inst_33032;
var state_33064__$1 = (function (){var statearr_33076 = state_33064;
(statearr_33076[(7)] = inst_33025);

(statearr_33076[(11)] = inst_33042);

(statearr_33076[(8)] = inst_33024);

(statearr_33076[(12)] = inst_33044);

return statearr_33076;
})();
var statearr_33077_33107 = state_33064__$1;
(statearr_33077_33107[(2)] = null);

(statearr_33077_33107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (9))){
var inst_33024 = (state_33064[(8)]);
var inst_33040 = cljs.core.vec.call(null,inst_33024);
var state_33064__$1 = state_33064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33064__$1,(11),out,inst_33040);
} else {
if((state_val_33065 === (5))){
var inst_33032 = (state_33064[(10)]);
var inst_33025 = (state_33064[(7)]);
var inst_33028 = (state_33064[(9)]);
var inst_33032__$1 = f.call(null,inst_33028);
var inst_33033 = cljs.core._EQ_.call(null,inst_33032__$1,inst_33025);
var inst_33034 = cljs.core.keyword_identical_QMARK_.call(null,inst_33025,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33035 = (inst_33033) || (inst_33034);
var state_33064__$1 = (function (){var statearr_33078 = state_33064;
(statearr_33078[(10)] = inst_33032__$1);

return statearr_33078;
})();
if(cljs.core.truth_(inst_33035)){
var statearr_33079_33108 = state_33064__$1;
(statearr_33079_33108[(1)] = (8));

} else {
var statearr_33080_33109 = state_33064__$1;
(statearr_33080_33109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (14))){
var inst_33057 = (state_33064[(2)]);
var inst_33058 = cljs.core.async.close_BANG_.call(null,out);
var state_33064__$1 = (function (){var statearr_33082 = state_33064;
(statearr_33082[(13)] = inst_33057);

return statearr_33082;
})();
var statearr_33083_33110 = state_33064__$1;
(statearr_33083_33110[(2)] = inst_33058);

(statearr_33083_33110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (10))){
var inst_33047 = (state_33064[(2)]);
var state_33064__$1 = state_33064;
var statearr_33084_33111 = state_33064__$1;
(statearr_33084_33111[(2)] = inst_33047);

(statearr_33084_33111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (8))){
var inst_33032 = (state_33064[(10)]);
var inst_33028 = (state_33064[(9)]);
var inst_33024 = (state_33064[(8)]);
var inst_33037 = inst_33024.push(inst_33028);
var tmp33081 = inst_33024;
var inst_33024__$1 = tmp33081;
var inst_33025 = inst_33032;
var state_33064__$1 = (function (){var statearr_33085 = state_33064;
(statearr_33085[(7)] = inst_33025);

(statearr_33085[(8)] = inst_33024__$1);

(statearr_33085[(14)] = inst_33037);

return statearr_33085;
})();
var statearr_33086_33112 = state_33064__$1;
(statearr_33086_33112[(2)] = null);

(statearr_33086_33112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__22804__auto___33098,out))
;
return ((function (switch__22783__auto__,c__22804__auto___33098,out){
return (function() {
var cljs$core$async$state_machine__22784__auto__ = null;
var cljs$core$async$state_machine__22784__auto____0 = (function (){
var statearr_33090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33090[(0)] = cljs$core$async$state_machine__22784__auto__);

(statearr_33090[(1)] = (1));

return statearr_33090;
});
var cljs$core$async$state_machine__22784__auto____1 = (function (state_33064){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_33064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e33091){if((e33091 instanceof Object)){
var ex__22787__auto__ = e33091;
var statearr_33092_33113 = state_33064;
(statearr_33092_33113[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33114 = state_33064;
state_33064 = G__33114;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
cljs$core$async$state_machine__22784__auto__ = function(state_33064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22784__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22784__auto____1.call(this,state_33064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22784__auto____0;
cljs$core$async$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22784__auto____1;
return cljs$core$async$state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___33098,out))
})();
var state__22806__auto__ = (function (){var statearr_33093 = f__22805__auto__.call(null);
(statearr_33093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___33098);

return statearr_33093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___33098,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1468965266661