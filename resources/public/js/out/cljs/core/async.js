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
var args22191 = [];
var len__21029__auto___22197 = arguments.length;
var i__21030__auto___22198 = (0);
while(true){
if((i__21030__auto___22198 < len__21029__auto___22197)){
args22191.push((arguments[i__21030__auto___22198]));

var G__22199 = (i__21030__auto___22198 + (1));
i__21030__auto___22198 = G__22199;
continue;
} else {
}
break;
}

var G__22193 = args22191.length;
switch (G__22193) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22191.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22194 = (function (f,blockable,meta22195){
this.f = f;
this.blockable = blockable;
this.meta22195 = meta22195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22196,meta22195__$1){
var self__ = this;
var _22196__$1 = this;
return (new cljs.core.async.t_cljs$core$async22194(self__.f,self__.blockable,meta22195__$1));
});

cljs.core.async.t_cljs$core$async22194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22196){
var self__ = this;
var _22196__$1 = this;
return self__.meta22195;
});

cljs.core.async.t_cljs$core$async22194.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22195","meta22195",1808683078,null)], null);
});

cljs.core.async.t_cljs$core$async22194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22194";

cljs.core.async.t_cljs$core$async22194.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cljs.core.async/t_cljs$core$async22194");
});

cljs.core.async.__GT_t_cljs$core$async22194 = (function cljs$core$async$__GT_t_cljs$core$async22194(f__$1,blockable__$1,meta22195){
return (new cljs.core.async.t_cljs$core$async22194(f__$1,blockable__$1,meta22195));
});

}

return (new cljs.core.async.t_cljs$core$async22194(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22203 = [];
var len__21029__auto___22206 = arguments.length;
var i__21030__auto___22207 = (0);
while(true){
if((i__21030__auto___22207 < len__21029__auto___22206)){
args22203.push((arguments[i__21030__auto___22207]));

var G__22208 = (i__21030__auto___22207 + (1));
i__21030__auto___22207 = G__22208;
continue;
} else {
}
break;
}

var G__22205 = args22203.length;
switch (G__22205) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22203.length)].join('')));

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
var args22210 = [];
var len__21029__auto___22213 = arguments.length;
var i__21030__auto___22214 = (0);
while(true){
if((i__21030__auto___22214 < len__21029__auto___22213)){
args22210.push((arguments[i__21030__auto___22214]));

var G__22215 = (i__21030__auto___22214 + (1));
i__21030__auto___22214 = G__22215;
continue;
} else {
}
break;
}

var G__22212 = args22210.length;
switch (G__22212) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22210.length)].join('')));

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
var args22217 = [];
var len__21029__auto___22220 = arguments.length;
var i__21030__auto___22221 = (0);
while(true){
if((i__21030__auto___22221 < len__21029__auto___22220)){
args22217.push((arguments[i__21030__auto___22221]));

var G__22222 = (i__21030__auto___22221 + (1));
i__21030__auto___22221 = G__22222;
continue;
} else {
}
break;
}

var G__22219 = args22217.length;
switch (G__22219) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22217.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22224 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22224);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22224,ret){
return (function (){
return fn1.call(null,val_22224);
});})(val_22224,ret))
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
var args22225 = [];
var len__21029__auto___22228 = arguments.length;
var i__21030__auto___22229 = (0);
while(true){
if((i__21030__auto___22229 < len__21029__auto___22228)){
args22225.push((arguments[i__21030__auto___22229]));

var G__22230 = (i__21030__auto___22229 + (1));
i__21030__auto___22229 = G__22230;
continue;
} else {
}
break;
}

var G__22227 = args22225.length;
switch (G__22227) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22225.length)].join('')));

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
var n__20869__auto___22232 = n;
var x_22233 = (0);
while(true){
if((x_22233 < n__20869__auto___22232)){
(a[x_22233] = (0));

var G__22234 = (x_22233 + (1));
x_22233 = G__22234;
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

var G__22235 = (i + (1));
i = G__22235;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22239 = (function (alt_flag,flag,meta22240){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22240 = meta22240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22241,meta22240__$1){
var self__ = this;
var _22241__$1 = this;
return (new cljs.core.async.t_cljs$core$async22239(self__.alt_flag,self__.flag,meta22240__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22241){
var self__ = this;
var _22241__$1 = this;
return self__.meta22240;
});})(flag))
;

cljs.core.async.t_cljs$core$async22239.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22239.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22240","meta22240",-1340097409,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22239";

cljs.core.async.t_cljs$core$async22239.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cljs.core.async/t_cljs$core$async22239");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22239 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22239(alt_flag__$1,flag__$1,meta22240){
return (new cljs.core.async.t_cljs$core$async22239(alt_flag__$1,flag__$1,meta22240));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22239(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22245 = (function (alt_handler,flag,cb,meta22246){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22246 = meta22246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22247,meta22246__$1){
var self__ = this;
var _22247__$1 = this;
return (new cljs.core.async.t_cljs$core$async22245(self__.alt_handler,self__.flag,self__.cb,meta22246__$1));
});

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22247){
var self__ = this;
var _22247__$1 = this;
return self__.meta22246;
});

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22246","meta22246",-863714870,null)], null);
});

cljs.core.async.t_cljs$core$async22245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22245";

cljs.core.async.t_cljs$core$async22245.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cljs.core.async/t_cljs$core$async22245");
});

cljs.core.async.__GT_t_cljs$core$async22245 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22245(alt_handler__$1,flag__$1,cb__$1,meta22246){
return (new cljs.core.async.t_cljs$core$async22245(alt_handler__$1,flag__$1,cb__$1,meta22246));
});

}

return (new cljs.core.async.t_cljs$core$async22245(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22248_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22248_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22249_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22249_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19954__auto__ = wport;
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22250 = (i + (1));
i = G__22250;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19954__auto__ = ret;
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__19942__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19942__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19942__auto__;
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
var args__21036__auto__ = [];
var len__21029__auto___22256 = arguments.length;
var i__21030__auto___22257 = (0);
while(true){
if((i__21030__auto___22257 < len__21029__auto___22256)){
args__21036__auto__.push((arguments[i__21030__auto___22257]));

var G__22258 = (i__21030__auto___22257 + (1));
i__21030__auto___22257 = G__22258;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((1) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21037__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22253){
var map__22254 = p__22253;
var map__22254__$1 = ((((!((map__22254 == null)))?((((map__22254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22254):map__22254);
var opts = map__22254__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22251){
var G__22252 = cljs.core.first.call(null,seq22251);
var seq22251__$1 = cljs.core.next.call(null,seq22251);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22252,seq22251__$1);
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
var args22259 = [];
var len__21029__auto___22309 = arguments.length;
var i__21030__auto___22310 = (0);
while(true){
if((i__21030__auto___22310 < len__21029__auto___22309)){
args22259.push((arguments[i__21030__auto___22310]));

var G__22311 = (i__21030__auto___22310 + (1));
i__21030__auto___22310 = G__22311;
continue;
} else {
}
break;
}

var G__22261 = args22259.length;
switch (G__22261) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22259.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22146__auto___22313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___22313){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___22313){
return (function (state_22285){
var state_val_22286 = (state_22285[(1)]);
if((state_val_22286 === (7))){
var inst_22281 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22287_22314 = state_22285__$1;
(statearr_22287_22314[(2)] = inst_22281);

(statearr_22287_22314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (1))){
var state_22285__$1 = state_22285;
var statearr_22288_22315 = state_22285__$1;
(statearr_22288_22315[(2)] = null);

(statearr_22288_22315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (4))){
var inst_22264 = (state_22285[(7)]);
var inst_22264__$1 = (state_22285[(2)]);
var inst_22265 = (inst_22264__$1 == null);
var state_22285__$1 = (function (){var statearr_22289 = state_22285;
(statearr_22289[(7)] = inst_22264__$1);

return statearr_22289;
})();
if(cljs.core.truth_(inst_22265)){
var statearr_22290_22316 = state_22285__$1;
(statearr_22290_22316[(1)] = (5));

} else {
var statearr_22291_22317 = state_22285__$1;
(statearr_22291_22317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (13))){
var state_22285__$1 = state_22285;
var statearr_22292_22318 = state_22285__$1;
(statearr_22292_22318[(2)] = null);

(statearr_22292_22318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (6))){
var inst_22264 = (state_22285[(7)]);
var state_22285__$1 = state_22285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22285__$1,(11),to,inst_22264);
} else {
if((state_val_22286 === (3))){
var inst_22283 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22285__$1,inst_22283);
} else {
if((state_val_22286 === (12))){
var state_22285__$1 = state_22285;
var statearr_22293_22319 = state_22285__$1;
(statearr_22293_22319[(2)] = null);

(statearr_22293_22319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (2))){
var state_22285__$1 = state_22285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22285__$1,(4),from);
} else {
if((state_val_22286 === (11))){
var inst_22274 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
if(cljs.core.truth_(inst_22274)){
var statearr_22294_22320 = state_22285__$1;
(statearr_22294_22320[(1)] = (12));

} else {
var statearr_22295_22321 = state_22285__$1;
(statearr_22295_22321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (9))){
var state_22285__$1 = state_22285;
var statearr_22296_22322 = state_22285__$1;
(statearr_22296_22322[(2)] = null);

(statearr_22296_22322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (5))){
var state_22285__$1 = state_22285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22297_22323 = state_22285__$1;
(statearr_22297_22323[(1)] = (8));

} else {
var statearr_22298_22324 = state_22285__$1;
(statearr_22298_22324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (14))){
var inst_22279 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22299_22325 = state_22285__$1;
(statearr_22299_22325[(2)] = inst_22279);

(statearr_22299_22325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (10))){
var inst_22271 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22300_22326 = state_22285__$1;
(statearr_22300_22326[(2)] = inst_22271);

(statearr_22300_22326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (8))){
var inst_22268 = cljs.core.async.close_BANG_.call(null,to);
var state_22285__$1 = state_22285;
var statearr_22301_22327 = state_22285__$1;
(statearr_22301_22327[(2)] = inst_22268);

(statearr_22301_22327[(1)] = (10));


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
});})(c__22146__auto___22313))
;
return ((function (switch__22034__auto__,c__22146__auto___22313){
return (function() {
var cljs$core$async$state_machine__22035__auto__ = null;
var cljs$core$async$state_machine__22035__auto____0 = (function (){
var statearr_22305 = [null,null,null,null,null,null,null,null];
(statearr_22305[(0)] = cljs$core$async$state_machine__22035__auto__);

(statearr_22305[(1)] = (1));

return statearr_22305;
});
var cljs$core$async$state_machine__22035__auto____1 = (function (state_22285){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_22285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e22306){if((e22306 instanceof Object)){
var ex__22038__auto__ = e22306;
var statearr_22307_22328 = state_22285;
(statearr_22307_22328[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22329 = state_22285;
state_22285 = G__22329;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$state_machine__22035__auto__ = function(state_22285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22035__auto____1.call(this,state_22285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22035__auto____0;
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22035__auto____1;
return cljs$core$async$state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___22313))
})();
var state__22148__auto__ = (function (){var statearr_22308 = f__22147__auto__.call(null);
(statearr_22308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___22313);

return statearr_22308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___22313))
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
return (function (p__22517){
var vec__22518 = p__22517;
var v = cljs.core.nth.call(null,vec__22518,(0),null);
var p = cljs.core.nth.call(null,vec__22518,(1),null);
var job = vec__22518;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22146__auto___22704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___22704,res,vec__22518,v,p,job,jobs,results){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___22704,res,vec__22518,v,p,job,jobs,results){
return (function (state_22525){
var state_val_22526 = (state_22525[(1)]);
if((state_val_22526 === (1))){
var state_22525__$1 = state_22525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22525__$1,(2),res,v);
} else {
if((state_val_22526 === (2))){
var inst_22522 = (state_22525[(2)]);
var inst_22523 = cljs.core.async.close_BANG_.call(null,res);
var state_22525__$1 = (function (){var statearr_22527 = state_22525;
(statearr_22527[(7)] = inst_22522);

return statearr_22527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22525__$1,inst_22523);
} else {
return null;
}
}
});})(c__22146__auto___22704,res,vec__22518,v,p,job,jobs,results))
;
return ((function (switch__22034__auto__,c__22146__auto___22704,res,vec__22518,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0 = (function (){
var statearr_22531 = [null,null,null,null,null,null,null,null];
(statearr_22531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__);

(statearr_22531[(1)] = (1));

return statearr_22531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1 = (function (state_22525){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_22525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e22532){if((e22532 instanceof Object)){
var ex__22038__auto__ = e22532;
var statearr_22533_22705 = state_22525;
(statearr_22533_22705[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22706 = state_22525;
state_22525 = G__22706;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__ = function(state_22525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1.call(this,state_22525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___22704,res,vec__22518,v,p,job,jobs,results))
})();
var state__22148__auto__ = (function (){var statearr_22534 = f__22147__auto__.call(null);
(statearr_22534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___22704);

return statearr_22534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___22704,res,vec__22518,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22535){
var vec__22536 = p__22535;
var v = cljs.core.nth.call(null,vec__22536,(0),null);
var p = cljs.core.nth.call(null,vec__22536,(1),null);
var job = vec__22536;
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
var n__20869__auto___22707 = n;
var __22708 = (0);
while(true){
if((__22708 < n__20869__auto___22707)){
var G__22539_22709 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22539_22709) {
case "compute":
var c__22146__auto___22711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22708,c__22146__auto___22711,G__22539_22709,n__20869__auto___22707,jobs,results,process,async){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (__22708,c__22146__auto___22711,G__22539_22709,n__20869__auto___22707,jobs,results,process,async){
return (function (state_22552){
var state_val_22553 = (state_22552[(1)]);
if((state_val_22553 === (1))){
var state_22552__$1 = state_22552;
var statearr_22554_22712 = state_22552__$1;
(statearr_22554_22712[(2)] = null);

(statearr_22554_22712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22553 === (2))){
var state_22552__$1 = state_22552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22552__$1,(4),jobs);
} else {
if((state_val_22553 === (3))){
var inst_22550 = (state_22552[(2)]);
var state_22552__$1 = state_22552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22552__$1,inst_22550);
} else {
if((state_val_22553 === (4))){
var inst_22542 = (state_22552[(2)]);
var inst_22543 = process.call(null,inst_22542);
var state_22552__$1 = state_22552;
if(cljs.core.truth_(inst_22543)){
var statearr_22555_22713 = state_22552__$1;
(statearr_22555_22713[(1)] = (5));

} else {
var statearr_22556_22714 = state_22552__$1;
(statearr_22556_22714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22553 === (5))){
var state_22552__$1 = state_22552;
var statearr_22557_22715 = state_22552__$1;
(statearr_22557_22715[(2)] = null);

(statearr_22557_22715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22553 === (6))){
var state_22552__$1 = state_22552;
var statearr_22558_22716 = state_22552__$1;
(statearr_22558_22716[(2)] = null);

(statearr_22558_22716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22553 === (7))){
var inst_22548 = (state_22552[(2)]);
var state_22552__$1 = state_22552;
var statearr_22559_22717 = state_22552__$1;
(statearr_22559_22717[(2)] = inst_22548);

(statearr_22559_22717[(1)] = (3));


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
});})(__22708,c__22146__auto___22711,G__22539_22709,n__20869__auto___22707,jobs,results,process,async))
;
return ((function (__22708,switch__22034__auto__,c__22146__auto___22711,G__22539_22709,n__20869__auto___22707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0 = (function (){
var statearr_22563 = [null,null,null,null,null,null,null];
(statearr_22563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__);

(statearr_22563[(1)] = (1));

return statearr_22563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1 = (function (state_22552){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_22552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e22564){if((e22564 instanceof Object)){
var ex__22038__auto__ = e22564;
var statearr_22565_22718 = state_22552;
(statearr_22565_22718[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22719 = state_22552;
state_22552 = G__22719;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__ = function(state_22552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1.call(this,state_22552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__;
})()
;})(__22708,switch__22034__auto__,c__22146__auto___22711,G__22539_22709,n__20869__auto___22707,jobs,results,process,async))
})();
var state__22148__auto__ = (function (){var statearr_22566 = f__22147__auto__.call(null);
(statearr_22566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___22711);

return statearr_22566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(__22708,c__22146__auto___22711,G__22539_22709,n__20869__auto___22707,jobs,results,process,async))
);


break;
case "async":
var c__22146__auto___22720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22708,c__22146__auto___22720,G__22539_22709,n__20869__auto___22707,jobs,results,process,async){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (__22708,c__22146__auto___22720,G__22539_22709,n__20869__auto___22707,jobs,results,process,async){
return (function (state_22579){
var state_val_22580 = (state_22579[(1)]);
if((state_val_22580 === (1))){
var state_22579__$1 = state_22579;
var statearr_22581_22721 = state_22579__$1;
(statearr_22581_22721[(2)] = null);

(statearr_22581_22721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (2))){
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22579__$1,(4),jobs);
} else {
if((state_val_22580 === (3))){
var inst_22577 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22579__$1,inst_22577);
} else {
if((state_val_22580 === (4))){
var inst_22569 = (state_22579[(2)]);
var inst_22570 = async.call(null,inst_22569);
var state_22579__$1 = state_22579;
if(cljs.core.truth_(inst_22570)){
var statearr_22582_22722 = state_22579__$1;
(statearr_22582_22722[(1)] = (5));

} else {
var statearr_22583_22723 = state_22579__$1;
(statearr_22583_22723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (5))){
var state_22579__$1 = state_22579;
var statearr_22584_22724 = state_22579__$1;
(statearr_22584_22724[(2)] = null);

(statearr_22584_22724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (6))){
var state_22579__$1 = state_22579;
var statearr_22585_22725 = state_22579__$1;
(statearr_22585_22725[(2)] = null);

(statearr_22585_22725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (7))){
var inst_22575 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
var statearr_22586_22726 = state_22579__$1;
(statearr_22586_22726[(2)] = inst_22575);

(statearr_22586_22726[(1)] = (3));


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
});})(__22708,c__22146__auto___22720,G__22539_22709,n__20869__auto___22707,jobs,results,process,async))
;
return ((function (__22708,switch__22034__auto__,c__22146__auto___22720,G__22539_22709,n__20869__auto___22707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0 = (function (){
var statearr_22590 = [null,null,null,null,null,null,null];
(statearr_22590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__);

(statearr_22590[(1)] = (1));

return statearr_22590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1 = (function (state_22579){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_22579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e22591){if((e22591 instanceof Object)){
var ex__22038__auto__ = e22591;
var statearr_22592_22727 = state_22579;
(statearr_22592_22727[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22728 = state_22579;
state_22579 = G__22728;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__ = function(state_22579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1.call(this,state_22579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__;
})()
;})(__22708,switch__22034__auto__,c__22146__auto___22720,G__22539_22709,n__20869__auto___22707,jobs,results,process,async))
})();
var state__22148__auto__ = (function (){var statearr_22593 = f__22147__auto__.call(null);
(statearr_22593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___22720);

return statearr_22593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(__22708,c__22146__auto___22720,G__22539_22709,n__20869__auto___22707,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22729 = (__22708 + (1));
__22708 = G__22729;
continue;
} else {
}
break;
}

var c__22146__auto___22730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___22730,jobs,results,process,async){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___22730,jobs,results,process,async){
return (function (state_22615){
var state_val_22616 = (state_22615[(1)]);
if((state_val_22616 === (1))){
var state_22615__$1 = state_22615;
var statearr_22617_22731 = state_22615__$1;
(statearr_22617_22731[(2)] = null);

(statearr_22617_22731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22616 === (2))){
var state_22615__$1 = state_22615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22615__$1,(4),from);
} else {
if((state_val_22616 === (3))){
var inst_22613 = (state_22615[(2)]);
var state_22615__$1 = state_22615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22615__$1,inst_22613);
} else {
if((state_val_22616 === (4))){
var inst_22596 = (state_22615[(7)]);
var inst_22596__$1 = (state_22615[(2)]);
var inst_22597 = (inst_22596__$1 == null);
var state_22615__$1 = (function (){var statearr_22618 = state_22615;
(statearr_22618[(7)] = inst_22596__$1);

return statearr_22618;
})();
if(cljs.core.truth_(inst_22597)){
var statearr_22619_22732 = state_22615__$1;
(statearr_22619_22732[(1)] = (5));

} else {
var statearr_22620_22733 = state_22615__$1;
(statearr_22620_22733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22616 === (5))){
var inst_22599 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22615__$1 = state_22615;
var statearr_22621_22734 = state_22615__$1;
(statearr_22621_22734[(2)] = inst_22599);

(statearr_22621_22734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22616 === (6))){
var inst_22601 = (state_22615[(8)]);
var inst_22596 = (state_22615[(7)]);
var inst_22601__$1 = cljs.core.async.chan.call(null,(1));
var inst_22602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22603 = [inst_22596,inst_22601__$1];
var inst_22604 = (new cljs.core.PersistentVector(null,2,(5),inst_22602,inst_22603,null));
var state_22615__$1 = (function (){var statearr_22622 = state_22615;
(statearr_22622[(8)] = inst_22601__$1);

return statearr_22622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22615__$1,(8),jobs,inst_22604);
} else {
if((state_val_22616 === (7))){
var inst_22611 = (state_22615[(2)]);
var state_22615__$1 = state_22615;
var statearr_22623_22735 = state_22615__$1;
(statearr_22623_22735[(2)] = inst_22611);

(statearr_22623_22735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22616 === (8))){
var inst_22601 = (state_22615[(8)]);
var inst_22606 = (state_22615[(2)]);
var state_22615__$1 = (function (){var statearr_22624 = state_22615;
(statearr_22624[(9)] = inst_22606);

return statearr_22624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22615__$1,(9),results,inst_22601);
} else {
if((state_val_22616 === (9))){
var inst_22608 = (state_22615[(2)]);
var state_22615__$1 = (function (){var statearr_22625 = state_22615;
(statearr_22625[(10)] = inst_22608);

return statearr_22625;
})();
var statearr_22626_22736 = state_22615__$1;
(statearr_22626_22736[(2)] = null);

(statearr_22626_22736[(1)] = (2));


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
});})(c__22146__auto___22730,jobs,results,process,async))
;
return ((function (switch__22034__auto__,c__22146__auto___22730,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0 = (function (){
var statearr_22630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__);

(statearr_22630[(1)] = (1));

return statearr_22630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1 = (function (state_22615){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_22615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e22631){if((e22631 instanceof Object)){
var ex__22038__auto__ = e22631;
var statearr_22632_22737 = state_22615;
(statearr_22632_22737[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22738 = state_22615;
state_22615 = G__22738;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__ = function(state_22615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1.call(this,state_22615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___22730,jobs,results,process,async))
})();
var state__22148__auto__ = (function (){var statearr_22633 = f__22147__auto__.call(null);
(statearr_22633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___22730);

return statearr_22633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___22730,jobs,results,process,async))
);


var c__22146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto__,jobs,results,process,async){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto__,jobs,results,process,async){
return (function (state_22671){
var state_val_22672 = (state_22671[(1)]);
if((state_val_22672 === (7))){
var inst_22667 = (state_22671[(2)]);
var state_22671__$1 = state_22671;
var statearr_22673_22739 = state_22671__$1;
(statearr_22673_22739[(2)] = inst_22667);

(statearr_22673_22739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (20))){
var state_22671__$1 = state_22671;
var statearr_22674_22740 = state_22671__$1;
(statearr_22674_22740[(2)] = null);

(statearr_22674_22740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (1))){
var state_22671__$1 = state_22671;
var statearr_22675_22741 = state_22671__$1;
(statearr_22675_22741[(2)] = null);

(statearr_22675_22741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (4))){
var inst_22636 = (state_22671[(7)]);
var inst_22636__$1 = (state_22671[(2)]);
var inst_22637 = (inst_22636__$1 == null);
var state_22671__$1 = (function (){var statearr_22676 = state_22671;
(statearr_22676[(7)] = inst_22636__$1);

return statearr_22676;
})();
if(cljs.core.truth_(inst_22637)){
var statearr_22677_22742 = state_22671__$1;
(statearr_22677_22742[(1)] = (5));

} else {
var statearr_22678_22743 = state_22671__$1;
(statearr_22678_22743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (15))){
var inst_22649 = (state_22671[(8)]);
var state_22671__$1 = state_22671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22671__$1,(18),to,inst_22649);
} else {
if((state_val_22672 === (21))){
var inst_22662 = (state_22671[(2)]);
var state_22671__$1 = state_22671;
var statearr_22679_22744 = state_22671__$1;
(statearr_22679_22744[(2)] = inst_22662);

(statearr_22679_22744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (13))){
var inst_22664 = (state_22671[(2)]);
var state_22671__$1 = (function (){var statearr_22680 = state_22671;
(statearr_22680[(9)] = inst_22664);

return statearr_22680;
})();
var statearr_22681_22745 = state_22671__$1;
(statearr_22681_22745[(2)] = null);

(statearr_22681_22745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (6))){
var inst_22636 = (state_22671[(7)]);
var state_22671__$1 = state_22671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22671__$1,(11),inst_22636);
} else {
if((state_val_22672 === (17))){
var inst_22657 = (state_22671[(2)]);
var state_22671__$1 = state_22671;
if(cljs.core.truth_(inst_22657)){
var statearr_22682_22746 = state_22671__$1;
(statearr_22682_22746[(1)] = (19));

} else {
var statearr_22683_22747 = state_22671__$1;
(statearr_22683_22747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (3))){
var inst_22669 = (state_22671[(2)]);
var state_22671__$1 = state_22671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22671__$1,inst_22669);
} else {
if((state_val_22672 === (12))){
var inst_22646 = (state_22671[(10)]);
var state_22671__$1 = state_22671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22671__$1,(14),inst_22646);
} else {
if((state_val_22672 === (2))){
var state_22671__$1 = state_22671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22671__$1,(4),results);
} else {
if((state_val_22672 === (19))){
var state_22671__$1 = state_22671;
var statearr_22684_22748 = state_22671__$1;
(statearr_22684_22748[(2)] = null);

(statearr_22684_22748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (11))){
var inst_22646 = (state_22671[(2)]);
var state_22671__$1 = (function (){var statearr_22685 = state_22671;
(statearr_22685[(10)] = inst_22646);

return statearr_22685;
})();
var statearr_22686_22749 = state_22671__$1;
(statearr_22686_22749[(2)] = null);

(statearr_22686_22749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (9))){
var state_22671__$1 = state_22671;
var statearr_22687_22750 = state_22671__$1;
(statearr_22687_22750[(2)] = null);

(statearr_22687_22750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (5))){
var state_22671__$1 = state_22671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22688_22751 = state_22671__$1;
(statearr_22688_22751[(1)] = (8));

} else {
var statearr_22689_22752 = state_22671__$1;
(statearr_22689_22752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (14))){
var inst_22649 = (state_22671[(8)]);
var inst_22651 = (state_22671[(11)]);
var inst_22649__$1 = (state_22671[(2)]);
var inst_22650 = (inst_22649__$1 == null);
var inst_22651__$1 = cljs.core.not.call(null,inst_22650);
var state_22671__$1 = (function (){var statearr_22690 = state_22671;
(statearr_22690[(8)] = inst_22649__$1);

(statearr_22690[(11)] = inst_22651__$1);

return statearr_22690;
})();
if(inst_22651__$1){
var statearr_22691_22753 = state_22671__$1;
(statearr_22691_22753[(1)] = (15));

} else {
var statearr_22692_22754 = state_22671__$1;
(statearr_22692_22754[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (16))){
var inst_22651 = (state_22671[(11)]);
var state_22671__$1 = state_22671;
var statearr_22693_22755 = state_22671__$1;
(statearr_22693_22755[(2)] = inst_22651);

(statearr_22693_22755[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (10))){
var inst_22643 = (state_22671[(2)]);
var state_22671__$1 = state_22671;
var statearr_22694_22756 = state_22671__$1;
(statearr_22694_22756[(2)] = inst_22643);

(statearr_22694_22756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (18))){
var inst_22654 = (state_22671[(2)]);
var state_22671__$1 = state_22671;
var statearr_22695_22757 = state_22671__$1;
(statearr_22695_22757[(2)] = inst_22654);

(statearr_22695_22757[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22672 === (8))){
var inst_22640 = cljs.core.async.close_BANG_.call(null,to);
var state_22671__$1 = state_22671;
var statearr_22696_22758 = state_22671__$1;
(statearr_22696_22758[(2)] = inst_22640);

(statearr_22696_22758[(1)] = (10));


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
});})(c__22146__auto__,jobs,results,process,async))
;
return ((function (switch__22034__auto__,c__22146__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0 = (function (){
var statearr_22700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__);

(statearr_22700[(1)] = (1));

return statearr_22700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1 = (function (state_22671){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_22671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e22701){if((e22701 instanceof Object)){
var ex__22038__auto__ = e22701;
var statearr_22702_22759 = state_22671;
(statearr_22702_22759[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22760 = state_22671;
state_22671 = G__22760;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__ = function(state_22671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1.call(this,state_22671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22035__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto__,jobs,results,process,async))
})();
var state__22148__auto__ = (function (){var statearr_22703 = f__22147__auto__.call(null);
(statearr_22703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto__);

return statearr_22703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto__,jobs,results,process,async))
);

return c__22146__auto__;
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
var args22761 = [];
var len__21029__auto___22764 = arguments.length;
var i__21030__auto___22765 = (0);
while(true){
if((i__21030__auto___22765 < len__21029__auto___22764)){
args22761.push((arguments[i__21030__auto___22765]));

var G__22766 = (i__21030__auto___22765 + (1));
i__21030__auto___22765 = G__22766;
continue;
} else {
}
break;
}

var G__22763 = args22761.length;
switch (G__22763) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22761.length)].join('')));

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
var args22768 = [];
var len__21029__auto___22771 = arguments.length;
var i__21030__auto___22772 = (0);
while(true){
if((i__21030__auto___22772 < len__21029__auto___22771)){
args22768.push((arguments[i__21030__auto___22772]));

var G__22773 = (i__21030__auto___22772 + (1));
i__21030__auto___22772 = G__22773;
continue;
} else {
}
break;
}

var G__22770 = args22768.length;
switch (G__22770) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22768.length)].join('')));

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
var args22775 = [];
var len__21029__auto___22828 = arguments.length;
var i__21030__auto___22829 = (0);
while(true){
if((i__21030__auto___22829 < len__21029__auto___22828)){
args22775.push((arguments[i__21030__auto___22829]));

var G__22830 = (i__21030__auto___22829 + (1));
i__21030__auto___22829 = G__22830;
continue;
} else {
}
break;
}

var G__22777 = args22775.length;
switch (G__22777) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22775.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22146__auto___22832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___22832,tc,fc){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___22832,tc,fc){
return (function (state_22803){
var state_val_22804 = (state_22803[(1)]);
if((state_val_22804 === (7))){
var inst_22799 = (state_22803[(2)]);
var state_22803__$1 = state_22803;
var statearr_22805_22833 = state_22803__$1;
(statearr_22805_22833[(2)] = inst_22799);

(statearr_22805_22833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22804 === (1))){
var state_22803__$1 = state_22803;
var statearr_22806_22834 = state_22803__$1;
(statearr_22806_22834[(2)] = null);

(statearr_22806_22834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22804 === (4))){
var inst_22780 = (state_22803[(7)]);
var inst_22780__$1 = (state_22803[(2)]);
var inst_22781 = (inst_22780__$1 == null);
var state_22803__$1 = (function (){var statearr_22807 = state_22803;
(statearr_22807[(7)] = inst_22780__$1);

return statearr_22807;
})();
if(cljs.core.truth_(inst_22781)){
var statearr_22808_22835 = state_22803__$1;
(statearr_22808_22835[(1)] = (5));

} else {
var statearr_22809_22836 = state_22803__$1;
(statearr_22809_22836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22804 === (13))){
var state_22803__$1 = state_22803;
var statearr_22810_22837 = state_22803__$1;
(statearr_22810_22837[(2)] = null);

(statearr_22810_22837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22804 === (6))){
var inst_22780 = (state_22803[(7)]);
var inst_22786 = p.call(null,inst_22780);
var state_22803__$1 = state_22803;
if(cljs.core.truth_(inst_22786)){
var statearr_22811_22838 = state_22803__$1;
(statearr_22811_22838[(1)] = (9));

} else {
var statearr_22812_22839 = state_22803__$1;
(statearr_22812_22839[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22804 === (3))){
var inst_22801 = (state_22803[(2)]);
var state_22803__$1 = state_22803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22803__$1,inst_22801);
} else {
if((state_val_22804 === (12))){
var state_22803__$1 = state_22803;
var statearr_22813_22840 = state_22803__$1;
(statearr_22813_22840[(2)] = null);

(statearr_22813_22840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22804 === (2))){
var state_22803__$1 = state_22803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22803__$1,(4),ch);
} else {
if((state_val_22804 === (11))){
var inst_22780 = (state_22803[(7)]);
var inst_22790 = (state_22803[(2)]);
var state_22803__$1 = state_22803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22803__$1,(8),inst_22790,inst_22780);
} else {
if((state_val_22804 === (9))){
var state_22803__$1 = state_22803;
var statearr_22814_22841 = state_22803__$1;
(statearr_22814_22841[(2)] = tc);

(statearr_22814_22841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22804 === (5))){
var inst_22783 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22784 = cljs.core.async.close_BANG_.call(null,fc);
var state_22803__$1 = (function (){var statearr_22815 = state_22803;
(statearr_22815[(8)] = inst_22783);

return statearr_22815;
})();
var statearr_22816_22842 = state_22803__$1;
(statearr_22816_22842[(2)] = inst_22784);

(statearr_22816_22842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22804 === (14))){
var inst_22797 = (state_22803[(2)]);
var state_22803__$1 = state_22803;
var statearr_22817_22843 = state_22803__$1;
(statearr_22817_22843[(2)] = inst_22797);

(statearr_22817_22843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22804 === (10))){
var state_22803__$1 = state_22803;
var statearr_22818_22844 = state_22803__$1;
(statearr_22818_22844[(2)] = fc);

(statearr_22818_22844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22804 === (8))){
var inst_22792 = (state_22803[(2)]);
var state_22803__$1 = state_22803;
if(cljs.core.truth_(inst_22792)){
var statearr_22819_22845 = state_22803__$1;
(statearr_22819_22845[(1)] = (12));

} else {
var statearr_22820_22846 = state_22803__$1;
(statearr_22820_22846[(1)] = (13));

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
});})(c__22146__auto___22832,tc,fc))
;
return ((function (switch__22034__auto__,c__22146__auto___22832,tc,fc){
return (function() {
var cljs$core$async$state_machine__22035__auto__ = null;
var cljs$core$async$state_machine__22035__auto____0 = (function (){
var statearr_22824 = [null,null,null,null,null,null,null,null,null];
(statearr_22824[(0)] = cljs$core$async$state_machine__22035__auto__);

(statearr_22824[(1)] = (1));

return statearr_22824;
});
var cljs$core$async$state_machine__22035__auto____1 = (function (state_22803){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_22803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e22825){if((e22825 instanceof Object)){
var ex__22038__auto__ = e22825;
var statearr_22826_22847 = state_22803;
(statearr_22826_22847[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22848 = state_22803;
state_22803 = G__22848;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$state_machine__22035__auto__ = function(state_22803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22035__auto____1.call(this,state_22803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22035__auto____0;
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22035__auto____1;
return cljs$core$async$state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___22832,tc,fc))
})();
var state__22148__auto__ = (function (){var statearr_22827 = f__22147__auto__.call(null);
(statearr_22827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___22832);

return statearr_22827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___22832,tc,fc))
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
var c__22146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto__){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto__){
return (function (state_22912){
var state_val_22913 = (state_22912[(1)]);
if((state_val_22913 === (7))){
var inst_22908 = (state_22912[(2)]);
var state_22912__$1 = state_22912;
var statearr_22914_22935 = state_22912__$1;
(statearr_22914_22935[(2)] = inst_22908);

(statearr_22914_22935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (1))){
var inst_22892 = init;
var state_22912__$1 = (function (){var statearr_22915 = state_22912;
(statearr_22915[(7)] = inst_22892);

return statearr_22915;
})();
var statearr_22916_22936 = state_22912__$1;
(statearr_22916_22936[(2)] = null);

(statearr_22916_22936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (4))){
var inst_22895 = (state_22912[(8)]);
var inst_22895__$1 = (state_22912[(2)]);
var inst_22896 = (inst_22895__$1 == null);
var state_22912__$1 = (function (){var statearr_22917 = state_22912;
(statearr_22917[(8)] = inst_22895__$1);

return statearr_22917;
})();
if(cljs.core.truth_(inst_22896)){
var statearr_22918_22937 = state_22912__$1;
(statearr_22918_22937[(1)] = (5));

} else {
var statearr_22919_22938 = state_22912__$1;
(statearr_22919_22938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (6))){
var inst_22892 = (state_22912[(7)]);
var inst_22899 = (state_22912[(9)]);
var inst_22895 = (state_22912[(8)]);
var inst_22899__$1 = f.call(null,inst_22892,inst_22895);
var inst_22900 = cljs.core.reduced_QMARK_.call(null,inst_22899__$1);
var state_22912__$1 = (function (){var statearr_22920 = state_22912;
(statearr_22920[(9)] = inst_22899__$1);

return statearr_22920;
})();
if(inst_22900){
var statearr_22921_22939 = state_22912__$1;
(statearr_22921_22939[(1)] = (8));

} else {
var statearr_22922_22940 = state_22912__$1;
(statearr_22922_22940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (3))){
var inst_22910 = (state_22912[(2)]);
var state_22912__$1 = state_22912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22912__$1,inst_22910);
} else {
if((state_val_22913 === (2))){
var state_22912__$1 = state_22912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22912__$1,(4),ch);
} else {
if((state_val_22913 === (9))){
var inst_22899 = (state_22912[(9)]);
var inst_22892 = inst_22899;
var state_22912__$1 = (function (){var statearr_22923 = state_22912;
(statearr_22923[(7)] = inst_22892);

return statearr_22923;
})();
var statearr_22924_22941 = state_22912__$1;
(statearr_22924_22941[(2)] = null);

(statearr_22924_22941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (5))){
var inst_22892 = (state_22912[(7)]);
var state_22912__$1 = state_22912;
var statearr_22925_22942 = state_22912__$1;
(statearr_22925_22942[(2)] = inst_22892);

(statearr_22925_22942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (10))){
var inst_22906 = (state_22912[(2)]);
var state_22912__$1 = state_22912;
var statearr_22926_22943 = state_22912__$1;
(statearr_22926_22943[(2)] = inst_22906);

(statearr_22926_22943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22913 === (8))){
var inst_22899 = (state_22912[(9)]);
var inst_22902 = cljs.core.deref.call(null,inst_22899);
var state_22912__$1 = state_22912;
var statearr_22927_22944 = state_22912__$1;
(statearr_22927_22944[(2)] = inst_22902);

(statearr_22927_22944[(1)] = (10));


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
});})(c__22146__auto__))
;
return ((function (switch__22034__auto__,c__22146__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22035__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22035__auto____0 = (function (){
var statearr_22931 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22931[(0)] = cljs$core$async$reduce_$_state_machine__22035__auto__);

(statearr_22931[(1)] = (1));

return statearr_22931;
});
var cljs$core$async$reduce_$_state_machine__22035__auto____1 = (function (state_22912){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_22912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e22932){if((e22932 instanceof Object)){
var ex__22038__auto__ = e22932;
var statearr_22933_22945 = state_22912;
(statearr_22933_22945[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22946 = state_22912;
state_22912 = G__22946;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22035__auto__ = function(state_22912){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22035__auto____1.call(this,state_22912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22035__auto____0;
cljs$core$async$reduce_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22035__auto____1;
return cljs$core$async$reduce_$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto__))
})();
var state__22148__auto__ = (function (){var statearr_22934 = f__22147__auto__.call(null);
(statearr_22934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto__);

return statearr_22934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto__))
);

return c__22146__auto__;
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
var args22947 = [];
var len__21029__auto___22999 = arguments.length;
var i__21030__auto___23000 = (0);
while(true){
if((i__21030__auto___23000 < len__21029__auto___22999)){
args22947.push((arguments[i__21030__auto___23000]));

var G__23001 = (i__21030__auto___23000 + (1));
i__21030__auto___23000 = G__23001;
continue;
} else {
}
break;
}

var G__22949 = args22947.length;
switch (G__22949) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22947.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto__){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto__){
return (function (state_22974){
var state_val_22975 = (state_22974[(1)]);
if((state_val_22975 === (7))){
var inst_22956 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_22976_23003 = state_22974__$1;
(statearr_22976_23003[(2)] = inst_22956);

(statearr_22976_23003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (1))){
var inst_22950 = cljs.core.seq.call(null,coll);
var inst_22951 = inst_22950;
var state_22974__$1 = (function (){var statearr_22977 = state_22974;
(statearr_22977[(7)] = inst_22951);

return statearr_22977;
})();
var statearr_22978_23004 = state_22974__$1;
(statearr_22978_23004[(2)] = null);

(statearr_22978_23004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (4))){
var inst_22951 = (state_22974[(7)]);
var inst_22954 = cljs.core.first.call(null,inst_22951);
var state_22974__$1 = state_22974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22974__$1,(7),ch,inst_22954);
} else {
if((state_val_22975 === (13))){
var inst_22968 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_22979_23005 = state_22974__$1;
(statearr_22979_23005[(2)] = inst_22968);

(statearr_22979_23005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (6))){
var inst_22959 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
if(cljs.core.truth_(inst_22959)){
var statearr_22980_23006 = state_22974__$1;
(statearr_22980_23006[(1)] = (8));

} else {
var statearr_22981_23007 = state_22974__$1;
(statearr_22981_23007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (3))){
var inst_22972 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22974__$1,inst_22972);
} else {
if((state_val_22975 === (12))){
var state_22974__$1 = state_22974;
var statearr_22982_23008 = state_22974__$1;
(statearr_22982_23008[(2)] = null);

(statearr_22982_23008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (2))){
var inst_22951 = (state_22974[(7)]);
var state_22974__$1 = state_22974;
if(cljs.core.truth_(inst_22951)){
var statearr_22983_23009 = state_22974__$1;
(statearr_22983_23009[(1)] = (4));

} else {
var statearr_22984_23010 = state_22974__$1;
(statearr_22984_23010[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (11))){
var inst_22965 = cljs.core.async.close_BANG_.call(null,ch);
var state_22974__$1 = state_22974;
var statearr_22985_23011 = state_22974__$1;
(statearr_22985_23011[(2)] = inst_22965);

(statearr_22985_23011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (9))){
var state_22974__$1 = state_22974;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22986_23012 = state_22974__$1;
(statearr_22986_23012[(1)] = (11));

} else {
var statearr_22987_23013 = state_22974__$1;
(statearr_22987_23013[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (5))){
var inst_22951 = (state_22974[(7)]);
var state_22974__$1 = state_22974;
var statearr_22988_23014 = state_22974__$1;
(statearr_22988_23014[(2)] = inst_22951);

(statearr_22988_23014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (10))){
var inst_22970 = (state_22974[(2)]);
var state_22974__$1 = state_22974;
var statearr_22989_23015 = state_22974__$1;
(statearr_22989_23015[(2)] = inst_22970);

(statearr_22989_23015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22975 === (8))){
var inst_22951 = (state_22974[(7)]);
var inst_22961 = cljs.core.next.call(null,inst_22951);
var inst_22951__$1 = inst_22961;
var state_22974__$1 = (function (){var statearr_22990 = state_22974;
(statearr_22990[(7)] = inst_22951__$1);

return statearr_22990;
})();
var statearr_22991_23016 = state_22974__$1;
(statearr_22991_23016[(2)] = null);

(statearr_22991_23016[(1)] = (2));


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
});})(c__22146__auto__))
;
return ((function (switch__22034__auto__,c__22146__auto__){
return (function() {
var cljs$core$async$state_machine__22035__auto__ = null;
var cljs$core$async$state_machine__22035__auto____0 = (function (){
var statearr_22995 = [null,null,null,null,null,null,null,null];
(statearr_22995[(0)] = cljs$core$async$state_machine__22035__auto__);

(statearr_22995[(1)] = (1));

return statearr_22995;
});
var cljs$core$async$state_machine__22035__auto____1 = (function (state_22974){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_22974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e22996){if((e22996 instanceof Object)){
var ex__22038__auto__ = e22996;
var statearr_22997_23017 = state_22974;
(statearr_22997_23017[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23018 = state_22974;
state_22974 = G__23018;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$state_machine__22035__auto__ = function(state_22974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22035__auto____1.call(this,state_22974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22035__auto____0;
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22035__auto____1;
return cljs$core$async$state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto__))
})();
var state__22148__auto__ = (function (){var statearr_22998 = f__22147__auto__.call(null);
(statearr_22998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto__);

return statearr_22998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto__))
);

return c__22146__auto__;
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
var x__20617__auto__ = (((_ == null))?null:_);
var m__20618__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,_);
} else {
var m__20618__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,_);
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
var x__20617__auto__ = (((m == null))?null:m);
var m__20618__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20618__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__20617__auto__ = (((m == null))?null:m);
var m__20618__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,m,ch);
} else {
var m__20618__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,m,ch);
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
var x__20617__auto__ = (((m == null))?null:m);
var m__20618__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,m);
} else {
var m__20618__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23244 = (function (mult,ch,cs,meta23245){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23245 = meta23245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23246,meta23245__$1){
var self__ = this;
var _23246__$1 = this;
return (new cljs.core.async.t_cljs$core$async23244(self__.mult,self__.ch,self__.cs,meta23245__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23246){
var self__ = this;
var _23246__$1 = this;
return self__.meta23245;
});})(cs))
;

cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23244.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23244.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23245","meta23245",-1224671812,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23244";

cljs.core.async.t_cljs$core$async23244.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cljs.core.async/t_cljs$core$async23244");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23244 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23244(mult__$1,ch__$1,cs__$1,meta23245){
return (new cljs.core.async.t_cljs$core$async23244(mult__$1,ch__$1,cs__$1,meta23245));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23244(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22146__auto___23469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___23469,cs,m,dchan,dctr,done){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___23469,cs,m,dchan,dctr,done){
return (function (state_23381){
var state_val_23382 = (state_23381[(1)]);
if((state_val_23382 === (7))){
var inst_23377 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23383_23470 = state_23381__$1;
(statearr_23383_23470[(2)] = inst_23377);

(statearr_23383_23470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (20))){
var inst_23280 = (state_23381[(7)]);
var inst_23292 = cljs.core.first.call(null,inst_23280);
var inst_23293 = cljs.core.nth.call(null,inst_23292,(0),null);
var inst_23294 = cljs.core.nth.call(null,inst_23292,(1),null);
var state_23381__$1 = (function (){var statearr_23384 = state_23381;
(statearr_23384[(8)] = inst_23293);

return statearr_23384;
})();
if(cljs.core.truth_(inst_23294)){
var statearr_23385_23471 = state_23381__$1;
(statearr_23385_23471[(1)] = (22));

} else {
var statearr_23386_23472 = state_23381__$1;
(statearr_23386_23472[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (27))){
var inst_23322 = (state_23381[(9)]);
var inst_23324 = (state_23381[(10)]);
var inst_23329 = (state_23381[(11)]);
var inst_23249 = (state_23381[(12)]);
var inst_23329__$1 = cljs.core._nth.call(null,inst_23322,inst_23324);
var inst_23330 = cljs.core.async.put_BANG_.call(null,inst_23329__$1,inst_23249,done);
var state_23381__$1 = (function (){var statearr_23387 = state_23381;
(statearr_23387[(11)] = inst_23329__$1);

return statearr_23387;
})();
if(cljs.core.truth_(inst_23330)){
var statearr_23388_23473 = state_23381__$1;
(statearr_23388_23473[(1)] = (30));

} else {
var statearr_23389_23474 = state_23381__$1;
(statearr_23389_23474[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (1))){
var state_23381__$1 = state_23381;
var statearr_23390_23475 = state_23381__$1;
(statearr_23390_23475[(2)] = null);

(statearr_23390_23475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (24))){
var inst_23280 = (state_23381[(7)]);
var inst_23299 = (state_23381[(2)]);
var inst_23300 = cljs.core.next.call(null,inst_23280);
var inst_23258 = inst_23300;
var inst_23259 = null;
var inst_23260 = (0);
var inst_23261 = (0);
var state_23381__$1 = (function (){var statearr_23391 = state_23381;
(statearr_23391[(13)] = inst_23258);

(statearr_23391[(14)] = inst_23259);

(statearr_23391[(15)] = inst_23260);

(statearr_23391[(16)] = inst_23299);

(statearr_23391[(17)] = inst_23261);

return statearr_23391;
})();
var statearr_23392_23476 = state_23381__$1;
(statearr_23392_23476[(2)] = null);

(statearr_23392_23476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (39))){
var state_23381__$1 = state_23381;
var statearr_23396_23477 = state_23381__$1;
(statearr_23396_23477[(2)] = null);

(statearr_23396_23477[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (4))){
var inst_23249 = (state_23381[(12)]);
var inst_23249__$1 = (state_23381[(2)]);
var inst_23250 = (inst_23249__$1 == null);
var state_23381__$1 = (function (){var statearr_23397 = state_23381;
(statearr_23397[(12)] = inst_23249__$1);

return statearr_23397;
})();
if(cljs.core.truth_(inst_23250)){
var statearr_23398_23478 = state_23381__$1;
(statearr_23398_23478[(1)] = (5));

} else {
var statearr_23399_23479 = state_23381__$1;
(statearr_23399_23479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (15))){
var inst_23258 = (state_23381[(13)]);
var inst_23259 = (state_23381[(14)]);
var inst_23260 = (state_23381[(15)]);
var inst_23261 = (state_23381[(17)]);
var inst_23276 = (state_23381[(2)]);
var inst_23277 = (inst_23261 + (1));
var tmp23393 = inst_23258;
var tmp23394 = inst_23259;
var tmp23395 = inst_23260;
var inst_23258__$1 = tmp23393;
var inst_23259__$1 = tmp23394;
var inst_23260__$1 = tmp23395;
var inst_23261__$1 = inst_23277;
var state_23381__$1 = (function (){var statearr_23400 = state_23381;
(statearr_23400[(13)] = inst_23258__$1);

(statearr_23400[(14)] = inst_23259__$1);

(statearr_23400[(15)] = inst_23260__$1);

(statearr_23400[(18)] = inst_23276);

(statearr_23400[(17)] = inst_23261__$1);

return statearr_23400;
})();
var statearr_23401_23480 = state_23381__$1;
(statearr_23401_23480[(2)] = null);

(statearr_23401_23480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (21))){
var inst_23303 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23405_23481 = state_23381__$1;
(statearr_23405_23481[(2)] = inst_23303);

(statearr_23405_23481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (31))){
var inst_23329 = (state_23381[(11)]);
var inst_23333 = done.call(null,null);
var inst_23334 = cljs.core.async.untap_STAR_.call(null,m,inst_23329);
var state_23381__$1 = (function (){var statearr_23406 = state_23381;
(statearr_23406[(19)] = inst_23333);

return statearr_23406;
})();
var statearr_23407_23482 = state_23381__$1;
(statearr_23407_23482[(2)] = inst_23334);

(statearr_23407_23482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (32))){
var inst_23322 = (state_23381[(9)]);
var inst_23321 = (state_23381[(20)]);
var inst_23324 = (state_23381[(10)]);
var inst_23323 = (state_23381[(21)]);
var inst_23336 = (state_23381[(2)]);
var inst_23337 = (inst_23324 + (1));
var tmp23402 = inst_23322;
var tmp23403 = inst_23321;
var tmp23404 = inst_23323;
var inst_23321__$1 = tmp23403;
var inst_23322__$1 = tmp23402;
var inst_23323__$1 = tmp23404;
var inst_23324__$1 = inst_23337;
var state_23381__$1 = (function (){var statearr_23408 = state_23381;
(statearr_23408[(22)] = inst_23336);

(statearr_23408[(9)] = inst_23322__$1);

(statearr_23408[(20)] = inst_23321__$1);

(statearr_23408[(10)] = inst_23324__$1);

(statearr_23408[(21)] = inst_23323__$1);

return statearr_23408;
})();
var statearr_23409_23483 = state_23381__$1;
(statearr_23409_23483[(2)] = null);

(statearr_23409_23483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (40))){
var inst_23349 = (state_23381[(23)]);
var inst_23353 = done.call(null,null);
var inst_23354 = cljs.core.async.untap_STAR_.call(null,m,inst_23349);
var state_23381__$1 = (function (){var statearr_23410 = state_23381;
(statearr_23410[(24)] = inst_23353);

return statearr_23410;
})();
var statearr_23411_23484 = state_23381__$1;
(statearr_23411_23484[(2)] = inst_23354);

(statearr_23411_23484[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (33))){
var inst_23340 = (state_23381[(25)]);
var inst_23342 = cljs.core.chunked_seq_QMARK_.call(null,inst_23340);
var state_23381__$1 = state_23381;
if(inst_23342){
var statearr_23412_23485 = state_23381__$1;
(statearr_23412_23485[(1)] = (36));

} else {
var statearr_23413_23486 = state_23381__$1;
(statearr_23413_23486[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (13))){
var inst_23270 = (state_23381[(26)]);
var inst_23273 = cljs.core.async.close_BANG_.call(null,inst_23270);
var state_23381__$1 = state_23381;
var statearr_23414_23487 = state_23381__$1;
(statearr_23414_23487[(2)] = inst_23273);

(statearr_23414_23487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (22))){
var inst_23293 = (state_23381[(8)]);
var inst_23296 = cljs.core.async.close_BANG_.call(null,inst_23293);
var state_23381__$1 = state_23381;
var statearr_23415_23488 = state_23381__$1;
(statearr_23415_23488[(2)] = inst_23296);

(statearr_23415_23488[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (36))){
var inst_23340 = (state_23381[(25)]);
var inst_23344 = cljs.core.chunk_first.call(null,inst_23340);
var inst_23345 = cljs.core.chunk_rest.call(null,inst_23340);
var inst_23346 = cljs.core.count.call(null,inst_23344);
var inst_23321 = inst_23345;
var inst_23322 = inst_23344;
var inst_23323 = inst_23346;
var inst_23324 = (0);
var state_23381__$1 = (function (){var statearr_23416 = state_23381;
(statearr_23416[(9)] = inst_23322);

(statearr_23416[(20)] = inst_23321);

(statearr_23416[(10)] = inst_23324);

(statearr_23416[(21)] = inst_23323);

return statearr_23416;
})();
var statearr_23417_23489 = state_23381__$1;
(statearr_23417_23489[(2)] = null);

(statearr_23417_23489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (41))){
var inst_23340 = (state_23381[(25)]);
var inst_23356 = (state_23381[(2)]);
var inst_23357 = cljs.core.next.call(null,inst_23340);
var inst_23321 = inst_23357;
var inst_23322 = null;
var inst_23323 = (0);
var inst_23324 = (0);
var state_23381__$1 = (function (){var statearr_23418 = state_23381;
(statearr_23418[(9)] = inst_23322);

(statearr_23418[(20)] = inst_23321);

(statearr_23418[(10)] = inst_23324);

(statearr_23418[(21)] = inst_23323);

(statearr_23418[(27)] = inst_23356);

return statearr_23418;
})();
var statearr_23419_23490 = state_23381__$1;
(statearr_23419_23490[(2)] = null);

(statearr_23419_23490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (43))){
var state_23381__$1 = state_23381;
var statearr_23420_23491 = state_23381__$1;
(statearr_23420_23491[(2)] = null);

(statearr_23420_23491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (29))){
var inst_23365 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23421_23492 = state_23381__$1;
(statearr_23421_23492[(2)] = inst_23365);

(statearr_23421_23492[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (44))){
var inst_23374 = (state_23381[(2)]);
var state_23381__$1 = (function (){var statearr_23422 = state_23381;
(statearr_23422[(28)] = inst_23374);

return statearr_23422;
})();
var statearr_23423_23493 = state_23381__$1;
(statearr_23423_23493[(2)] = null);

(statearr_23423_23493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (6))){
var inst_23313 = (state_23381[(29)]);
var inst_23312 = cljs.core.deref.call(null,cs);
var inst_23313__$1 = cljs.core.keys.call(null,inst_23312);
var inst_23314 = cljs.core.count.call(null,inst_23313__$1);
var inst_23315 = cljs.core.reset_BANG_.call(null,dctr,inst_23314);
var inst_23320 = cljs.core.seq.call(null,inst_23313__$1);
var inst_23321 = inst_23320;
var inst_23322 = null;
var inst_23323 = (0);
var inst_23324 = (0);
var state_23381__$1 = (function (){var statearr_23424 = state_23381;
(statearr_23424[(30)] = inst_23315);

(statearr_23424[(9)] = inst_23322);

(statearr_23424[(20)] = inst_23321);

(statearr_23424[(10)] = inst_23324);

(statearr_23424[(29)] = inst_23313__$1);

(statearr_23424[(21)] = inst_23323);

return statearr_23424;
})();
var statearr_23425_23494 = state_23381__$1;
(statearr_23425_23494[(2)] = null);

(statearr_23425_23494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (28))){
var inst_23321 = (state_23381[(20)]);
var inst_23340 = (state_23381[(25)]);
var inst_23340__$1 = cljs.core.seq.call(null,inst_23321);
var state_23381__$1 = (function (){var statearr_23426 = state_23381;
(statearr_23426[(25)] = inst_23340__$1);

return statearr_23426;
})();
if(inst_23340__$1){
var statearr_23427_23495 = state_23381__$1;
(statearr_23427_23495[(1)] = (33));

} else {
var statearr_23428_23496 = state_23381__$1;
(statearr_23428_23496[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (25))){
var inst_23324 = (state_23381[(10)]);
var inst_23323 = (state_23381[(21)]);
var inst_23326 = (inst_23324 < inst_23323);
var inst_23327 = inst_23326;
var state_23381__$1 = state_23381;
if(cljs.core.truth_(inst_23327)){
var statearr_23429_23497 = state_23381__$1;
(statearr_23429_23497[(1)] = (27));

} else {
var statearr_23430_23498 = state_23381__$1;
(statearr_23430_23498[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (34))){
var state_23381__$1 = state_23381;
var statearr_23431_23499 = state_23381__$1;
(statearr_23431_23499[(2)] = null);

(statearr_23431_23499[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (17))){
var state_23381__$1 = state_23381;
var statearr_23432_23500 = state_23381__$1;
(statearr_23432_23500[(2)] = null);

(statearr_23432_23500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (3))){
var inst_23379 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23381__$1,inst_23379);
} else {
if((state_val_23382 === (12))){
var inst_23308 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23433_23501 = state_23381__$1;
(statearr_23433_23501[(2)] = inst_23308);

(statearr_23433_23501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (2))){
var state_23381__$1 = state_23381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23381__$1,(4),ch);
} else {
if((state_val_23382 === (23))){
var state_23381__$1 = state_23381;
var statearr_23434_23502 = state_23381__$1;
(statearr_23434_23502[(2)] = null);

(statearr_23434_23502[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (35))){
var inst_23363 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23435_23503 = state_23381__$1;
(statearr_23435_23503[(2)] = inst_23363);

(statearr_23435_23503[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (19))){
var inst_23280 = (state_23381[(7)]);
var inst_23284 = cljs.core.chunk_first.call(null,inst_23280);
var inst_23285 = cljs.core.chunk_rest.call(null,inst_23280);
var inst_23286 = cljs.core.count.call(null,inst_23284);
var inst_23258 = inst_23285;
var inst_23259 = inst_23284;
var inst_23260 = inst_23286;
var inst_23261 = (0);
var state_23381__$1 = (function (){var statearr_23436 = state_23381;
(statearr_23436[(13)] = inst_23258);

(statearr_23436[(14)] = inst_23259);

(statearr_23436[(15)] = inst_23260);

(statearr_23436[(17)] = inst_23261);

return statearr_23436;
})();
var statearr_23437_23504 = state_23381__$1;
(statearr_23437_23504[(2)] = null);

(statearr_23437_23504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (11))){
var inst_23258 = (state_23381[(13)]);
var inst_23280 = (state_23381[(7)]);
var inst_23280__$1 = cljs.core.seq.call(null,inst_23258);
var state_23381__$1 = (function (){var statearr_23438 = state_23381;
(statearr_23438[(7)] = inst_23280__$1);

return statearr_23438;
})();
if(inst_23280__$1){
var statearr_23439_23505 = state_23381__$1;
(statearr_23439_23505[(1)] = (16));

} else {
var statearr_23440_23506 = state_23381__$1;
(statearr_23440_23506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (9))){
var inst_23310 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23441_23507 = state_23381__$1;
(statearr_23441_23507[(2)] = inst_23310);

(statearr_23441_23507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (5))){
var inst_23256 = cljs.core.deref.call(null,cs);
var inst_23257 = cljs.core.seq.call(null,inst_23256);
var inst_23258 = inst_23257;
var inst_23259 = null;
var inst_23260 = (0);
var inst_23261 = (0);
var state_23381__$1 = (function (){var statearr_23442 = state_23381;
(statearr_23442[(13)] = inst_23258);

(statearr_23442[(14)] = inst_23259);

(statearr_23442[(15)] = inst_23260);

(statearr_23442[(17)] = inst_23261);

return statearr_23442;
})();
var statearr_23443_23508 = state_23381__$1;
(statearr_23443_23508[(2)] = null);

(statearr_23443_23508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (14))){
var state_23381__$1 = state_23381;
var statearr_23444_23509 = state_23381__$1;
(statearr_23444_23509[(2)] = null);

(statearr_23444_23509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (45))){
var inst_23371 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23445_23510 = state_23381__$1;
(statearr_23445_23510[(2)] = inst_23371);

(statearr_23445_23510[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (26))){
var inst_23313 = (state_23381[(29)]);
var inst_23367 = (state_23381[(2)]);
var inst_23368 = cljs.core.seq.call(null,inst_23313);
var state_23381__$1 = (function (){var statearr_23446 = state_23381;
(statearr_23446[(31)] = inst_23367);

return statearr_23446;
})();
if(inst_23368){
var statearr_23447_23511 = state_23381__$1;
(statearr_23447_23511[(1)] = (42));

} else {
var statearr_23448_23512 = state_23381__$1;
(statearr_23448_23512[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (16))){
var inst_23280 = (state_23381[(7)]);
var inst_23282 = cljs.core.chunked_seq_QMARK_.call(null,inst_23280);
var state_23381__$1 = state_23381;
if(inst_23282){
var statearr_23449_23513 = state_23381__$1;
(statearr_23449_23513[(1)] = (19));

} else {
var statearr_23450_23514 = state_23381__$1;
(statearr_23450_23514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (38))){
var inst_23360 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23451_23515 = state_23381__$1;
(statearr_23451_23515[(2)] = inst_23360);

(statearr_23451_23515[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (30))){
var state_23381__$1 = state_23381;
var statearr_23452_23516 = state_23381__$1;
(statearr_23452_23516[(2)] = null);

(statearr_23452_23516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (10))){
var inst_23259 = (state_23381[(14)]);
var inst_23261 = (state_23381[(17)]);
var inst_23269 = cljs.core._nth.call(null,inst_23259,inst_23261);
var inst_23270 = cljs.core.nth.call(null,inst_23269,(0),null);
var inst_23271 = cljs.core.nth.call(null,inst_23269,(1),null);
var state_23381__$1 = (function (){var statearr_23453 = state_23381;
(statearr_23453[(26)] = inst_23270);

return statearr_23453;
})();
if(cljs.core.truth_(inst_23271)){
var statearr_23454_23517 = state_23381__$1;
(statearr_23454_23517[(1)] = (13));

} else {
var statearr_23455_23518 = state_23381__$1;
(statearr_23455_23518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (18))){
var inst_23306 = (state_23381[(2)]);
var state_23381__$1 = state_23381;
var statearr_23456_23519 = state_23381__$1;
(statearr_23456_23519[(2)] = inst_23306);

(statearr_23456_23519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (42))){
var state_23381__$1 = state_23381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23381__$1,(45),dchan);
} else {
if((state_val_23382 === (37))){
var inst_23340 = (state_23381[(25)]);
var inst_23349 = (state_23381[(23)]);
var inst_23249 = (state_23381[(12)]);
var inst_23349__$1 = cljs.core.first.call(null,inst_23340);
var inst_23350 = cljs.core.async.put_BANG_.call(null,inst_23349__$1,inst_23249,done);
var state_23381__$1 = (function (){var statearr_23457 = state_23381;
(statearr_23457[(23)] = inst_23349__$1);

return statearr_23457;
})();
if(cljs.core.truth_(inst_23350)){
var statearr_23458_23520 = state_23381__$1;
(statearr_23458_23520[(1)] = (39));

} else {
var statearr_23459_23521 = state_23381__$1;
(statearr_23459_23521[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23382 === (8))){
var inst_23260 = (state_23381[(15)]);
var inst_23261 = (state_23381[(17)]);
var inst_23263 = (inst_23261 < inst_23260);
var inst_23264 = inst_23263;
var state_23381__$1 = state_23381;
if(cljs.core.truth_(inst_23264)){
var statearr_23460_23522 = state_23381__$1;
(statearr_23460_23522[(1)] = (10));

} else {
var statearr_23461_23523 = state_23381__$1;
(statearr_23461_23523[(1)] = (11));

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
});})(c__22146__auto___23469,cs,m,dchan,dctr,done))
;
return ((function (switch__22034__auto__,c__22146__auto___23469,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22035__auto__ = null;
var cljs$core$async$mult_$_state_machine__22035__auto____0 = (function (){
var statearr_23465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23465[(0)] = cljs$core$async$mult_$_state_machine__22035__auto__);

(statearr_23465[(1)] = (1));

return statearr_23465;
});
var cljs$core$async$mult_$_state_machine__22035__auto____1 = (function (state_23381){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_23381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e23466){if((e23466 instanceof Object)){
var ex__22038__auto__ = e23466;
var statearr_23467_23524 = state_23381;
(statearr_23467_23524[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23525 = state_23381;
state_23381 = G__23525;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22035__auto__ = function(state_23381){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22035__auto____1.call(this,state_23381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22035__auto____0;
cljs$core$async$mult_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22035__auto____1;
return cljs$core$async$mult_$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___23469,cs,m,dchan,dctr,done))
})();
var state__22148__auto__ = (function (){var statearr_23468 = f__22147__auto__.call(null);
(statearr_23468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___23469);

return statearr_23468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___23469,cs,m,dchan,dctr,done))
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
var args23526 = [];
var len__21029__auto___23529 = arguments.length;
var i__21030__auto___23530 = (0);
while(true){
if((i__21030__auto___23530 < len__21029__auto___23529)){
args23526.push((arguments[i__21030__auto___23530]));

var G__23531 = (i__21030__auto___23530 + (1));
i__21030__auto___23530 = G__23531;
continue;
} else {
}
break;
}

var G__23528 = args23526.length;
switch (G__23528) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23526.length)].join('')));

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
var x__20617__auto__ = (((m == null))?null:m);
var m__20618__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,m,ch);
} else {
var m__20618__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,m,ch);
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
var x__20617__auto__ = (((m == null))?null:m);
var m__20618__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,m,ch);
} else {
var m__20618__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,m,ch);
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
var x__20617__auto__ = (((m == null))?null:m);
var m__20618__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,m);
} else {
var m__20618__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,m);
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
var x__20617__auto__ = (((m == null))?null:m);
var m__20618__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,m,state_map);
} else {
var m__20618__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,m,state_map);
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
var x__20617__auto__ = (((m == null))?null:m);
var m__20618__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,m,mode);
} else {
var m__20618__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21036__auto__ = [];
var len__21029__auto___23543 = arguments.length;
var i__21030__auto___23544 = (0);
while(true){
if((i__21030__auto___23544 < len__21029__auto___23543)){
args__21036__auto__.push((arguments[i__21030__auto___23544]));

var G__23545 = (i__21030__auto___23544 + (1));
i__21030__auto___23544 = G__23545;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((3) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21037__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23537){
var map__23538 = p__23537;
var map__23538__$1 = ((((!((map__23538 == null)))?((((map__23538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23538):map__23538);
var opts = map__23538__$1;
var statearr_23540_23546 = state;
(statearr_23540_23546[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23538,map__23538__$1,opts){
return (function (val){
var statearr_23541_23547 = state;
(statearr_23541_23547[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23538,map__23538__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23542_23548 = state;
(statearr_23542_23548[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23533){
var G__23534 = cljs.core.first.call(null,seq23533);
var seq23533__$1 = cljs.core.next.call(null,seq23533);
var G__23535 = cljs.core.first.call(null,seq23533__$1);
var seq23533__$2 = cljs.core.next.call(null,seq23533__$1);
var G__23536 = cljs.core.first.call(null,seq23533__$2);
var seq23533__$3 = cljs.core.next.call(null,seq23533__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23534,G__23535,G__23536,seq23533__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23714 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23715){
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
this.meta23715 = meta23715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23716,meta23715__$1){
var self__ = this;
var _23716__$1 = this;
return (new cljs.core.async.t_cljs$core$async23714(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23715__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23716){
var self__ = this;
var _23716__$1 = this;
return self__.meta23715;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23714.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23714.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23714.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23714.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23714.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23714.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23714.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23714.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23714.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23715","meta23715",1150883042,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23714";

cljs.core.async.t_cljs$core$async23714.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cljs.core.async/t_cljs$core$async23714");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23714 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23714(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23715){
return (new cljs.core.async.t_cljs$core$async23714(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23715));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23714(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22146__auto___23879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___23879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___23879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23816){
var state_val_23817 = (state_23816[(1)]);
if((state_val_23817 === (7))){
var inst_23732 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
var statearr_23818_23880 = state_23816__$1;
(statearr_23818_23880[(2)] = inst_23732);

(statearr_23818_23880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (20))){
var inst_23744 = (state_23816[(7)]);
var state_23816__$1 = state_23816;
var statearr_23819_23881 = state_23816__$1;
(statearr_23819_23881[(2)] = inst_23744);

(statearr_23819_23881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (27))){
var state_23816__$1 = state_23816;
var statearr_23820_23882 = state_23816__$1;
(statearr_23820_23882[(2)] = null);

(statearr_23820_23882[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (1))){
var inst_23720 = (state_23816[(8)]);
var inst_23720__$1 = calc_state.call(null);
var inst_23722 = (inst_23720__$1 == null);
var inst_23723 = cljs.core.not.call(null,inst_23722);
var state_23816__$1 = (function (){var statearr_23821 = state_23816;
(statearr_23821[(8)] = inst_23720__$1);

return statearr_23821;
})();
if(inst_23723){
var statearr_23822_23883 = state_23816__$1;
(statearr_23822_23883[(1)] = (2));

} else {
var statearr_23823_23884 = state_23816__$1;
(statearr_23823_23884[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (24))){
var inst_23767 = (state_23816[(9)]);
var inst_23790 = (state_23816[(10)]);
var inst_23776 = (state_23816[(11)]);
var inst_23790__$1 = inst_23767.call(null,inst_23776);
var state_23816__$1 = (function (){var statearr_23824 = state_23816;
(statearr_23824[(10)] = inst_23790__$1);

return statearr_23824;
})();
if(cljs.core.truth_(inst_23790__$1)){
var statearr_23825_23885 = state_23816__$1;
(statearr_23825_23885[(1)] = (29));

} else {
var statearr_23826_23886 = state_23816__$1;
(statearr_23826_23886[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (4))){
var inst_23735 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
if(cljs.core.truth_(inst_23735)){
var statearr_23827_23887 = state_23816__$1;
(statearr_23827_23887[(1)] = (8));

} else {
var statearr_23828_23888 = state_23816__$1;
(statearr_23828_23888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (15))){
var inst_23761 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
if(cljs.core.truth_(inst_23761)){
var statearr_23829_23889 = state_23816__$1;
(statearr_23829_23889[(1)] = (19));

} else {
var statearr_23830_23890 = state_23816__$1;
(statearr_23830_23890[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (21))){
var inst_23766 = (state_23816[(12)]);
var inst_23766__$1 = (state_23816[(2)]);
var inst_23767 = cljs.core.get.call(null,inst_23766__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23768 = cljs.core.get.call(null,inst_23766__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23769 = cljs.core.get.call(null,inst_23766__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23816__$1 = (function (){var statearr_23831 = state_23816;
(statearr_23831[(12)] = inst_23766__$1);

(statearr_23831[(9)] = inst_23767);

(statearr_23831[(13)] = inst_23768);

return statearr_23831;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23816__$1,(22),inst_23769);
} else {
if((state_val_23817 === (31))){
var inst_23798 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
if(cljs.core.truth_(inst_23798)){
var statearr_23832_23891 = state_23816__$1;
(statearr_23832_23891[(1)] = (32));

} else {
var statearr_23833_23892 = state_23816__$1;
(statearr_23833_23892[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (32))){
var inst_23775 = (state_23816[(14)]);
var state_23816__$1 = state_23816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23816__$1,(35),out,inst_23775);
} else {
if((state_val_23817 === (33))){
var inst_23766 = (state_23816[(12)]);
var inst_23744 = inst_23766;
var state_23816__$1 = (function (){var statearr_23834 = state_23816;
(statearr_23834[(7)] = inst_23744);

return statearr_23834;
})();
var statearr_23835_23893 = state_23816__$1;
(statearr_23835_23893[(2)] = null);

(statearr_23835_23893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (13))){
var inst_23744 = (state_23816[(7)]);
var inst_23751 = inst_23744.cljs$lang$protocol_mask$partition0$;
var inst_23752 = (inst_23751 & (64));
var inst_23753 = inst_23744.cljs$core$ISeq$;
var inst_23754 = (inst_23752) || (inst_23753);
var state_23816__$1 = state_23816;
if(cljs.core.truth_(inst_23754)){
var statearr_23836_23894 = state_23816__$1;
(statearr_23836_23894[(1)] = (16));

} else {
var statearr_23837_23895 = state_23816__$1;
(statearr_23837_23895[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (22))){
var inst_23775 = (state_23816[(14)]);
var inst_23776 = (state_23816[(11)]);
var inst_23774 = (state_23816[(2)]);
var inst_23775__$1 = cljs.core.nth.call(null,inst_23774,(0),null);
var inst_23776__$1 = cljs.core.nth.call(null,inst_23774,(1),null);
var inst_23777 = (inst_23775__$1 == null);
var inst_23778 = cljs.core._EQ_.call(null,inst_23776__$1,change);
var inst_23779 = (inst_23777) || (inst_23778);
var state_23816__$1 = (function (){var statearr_23838 = state_23816;
(statearr_23838[(14)] = inst_23775__$1);

(statearr_23838[(11)] = inst_23776__$1);

return statearr_23838;
})();
if(cljs.core.truth_(inst_23779)){
var statearr_23839_23896 = state_23816__$1;
(statearr_23839_23896[(1)] = (23));

} else {
var statearr_23840_23897 = state_23816__$1;
(statearr_23840_23897[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (36))){
var inst_23766 = (state_23816[(12)]);
var inst_23744 = inst_23766;
var state_23816__$1 = (function (){var statearr_23841 = state_23816;
(statearr_23841[(7)] = inst_23744);

return statearr_23841;
})();
var statearr_23842_23898 = state_23816__$1;
(statearr_23842_23898[(2)] = null);

(statearr_23842_23898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (29))){
var inst_23790 = (state_23816[(10)]);
var state_23816__$1 = state_23816;
var statearr_23843_23899 = state_23816__$1;
(statearr_23843_23899[(2)] = inst_23790);

(statearr_23843_23899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (6))){
var state_23816__$1 = state_23816;
var statearr_23844_23900 = state_23816__$1;
(statearr_23844_23900[(2)] = false);

(statearr_23844_23900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (28))){
var inst_23786 = (state_23816[(2)]);
var inst_23787 = calc_state.call(null);
var inst_23744 = inst_23787;
var state_23816__$1 = (function (){var statearr_23845 = state_23816;
(statearr_23845[(15)] = inst_23786);

(statearr_23845[(7)] = inst_23744);

return statearr_23845;
})();
var statearr_23846_23901 = state_23816__$1;
(statearr_23846_23901[(2)] = null);

(statearr_23846_23901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (25))){
var inst_23812 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
var statearr_23847_23902 = state_23816__$1;
(statearr_23847_23902[(2)] = inst_23812);

(statearr_23847_23902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (34))){
var inst_23810 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
var statearr_23848_23903 = state_23816__$1;
(statearr_23848_23903[(2)] = inst_23810);

(statearr_23848_23903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (17))){
var state_23816__$1 = state_23816;
var statearr_23849_23904 = state_23816__$1;
(statearr_23849_23904[(2)] = false);

(statearr_23849_23904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (3))){
var state_23816__$1 = state_23816;
var statearr_23850_23905 = state_23816__$1;
(statearr_23850_23905[(2)] = false);

(statearr_23850_23905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (12))){
var inst_23814 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23816__$1,inst_23814);
} else {
if((state_val_23817 === (2))){
var inst_23720 = (state_23816[(8)]);
var inst_23725 = inst_23720.cljs$lang$protocol_mask$partition0$;
var inst_23726 = (inst_23725 & (64));
var inst_23727 = inst_23720.cljs$core$ISeq$;
var inst_23728 = (inst_23726) || (inst_23727);
var state_23816__$1 = state_23816;
if(cljs.core.truth_(inst_23728)){
var statearr_23851_23906 = state_23816__$1;
(statearr_23851_23906[(1)] = (5));

} else {
var statearr_23852_23907 = state_23816__$1;
(statearr_23852_23907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (23))){
var inst_23775 = (state_23816[(14)]);
var inst_23781 = (inst_23775 == null);
var state_23816__$1 = state_23816;
if(cljs.core.truth_(inst_23781)){
var statearr_23853_23908 = state_23816__$1;
(statearr_23853_23908[(1)] = (26));

} else {
var statearr_23854_23909 = state_23816__$1;
(statearr_23854_23909[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (35))){
var inst_23801 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
if(cljs.core.truth_(inst_23801)){
var statearr_23855_23910 = state_23816__$1;
(statearr_23855_23910[(1)] = (36));

} else {
var statearr_23856_23911 = state_23816__$1;
(statearr_23856_23911[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (19))){
var inst_23744 = (state_23816[(7)]);
var inst_23763 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23744);
var state_23816__$1 = state_23816;
var statearr_23857_23912 = state_23816__$1;
(statearr_23857_23912[(2)] = inst_23763);

(statearr_23857_23912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (11))){
var inst_23744 = (state_23816[(7)]);
var inst_23748 = (inst_23744 == null);
var inst_23749 = cljs.core.not.call(null,inst_23748);
var state_23816__$1 = state_23816;
if(inst_23749){
var statearr_23858_23913 = state_23816__$1;
(statearr_23858_23913[(1)] = (13));

} else {
var statearr_23859_23914 = state_23816__$1;
(statearr_23859_23914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (9))){
var inst_23720 = (state_23816[(8)]);
var state_23816__$1 = state_23816;
var statearr_23860_23915 = state_23816__$1;
(statearr_23860_23915[(2)] = inst_23720);

(statearr_23860_23915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (5))){
var state_23816__$1 = state_23816;
var statearr_23861_23916 = state_23816__$1;
(statearr_23861_23916[(2)] = true);

(statearr_23861_23916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (14))){
var state_23816__$1 = state_23816;
var statearr_23862_23917 = state_23816__$1;
(statearr_23862_23917[(2)] = false);

(statearr_23862_23917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (26))){
var inst_23776 = (state_23816[(11)]);
var inst_23783 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23776);
var state_23816__$1 = state_23816;
var statearr_23863_23918 = state_23816__$1;
(statearr_23863_23918[(2)] = inst_23783);

(statearr_23863_23918[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (16))){
var state_23816__$1 = state_23816;
var statearr_23864_23919 = state_23816__$1;
(statearr_23864_23919[(2)] = true);

(statearr_23864_23919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (38))){
var inst_23806 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
var statearr_23865_23920 = state_23816__$1;
(statearr_23865_23920[(2)] = inst_23806);

(statearr_23865_23920[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (30))){
var inst_23767 = (state_23816[(9)]);
var inst_23776 = (state_23816[(11)]);
var inst_23768 = (state_23816[(13)]);
var inst_23793 = cljs.core.empty_QMARK_.call(null,inst_23767);
var inst_23794 = inst_23768.call(null,inst_23776);
var inst_23795 = cljs.core.not.call(null,inst_23794);
var inst_23796 = (inst_23793) && (inst_23795);
var state_23816__$1 = state_23816;
var statearr_23866_23921 = state_23816__$1;
(statearr_23866_23921[(2)] = inst_23796);

(statearr_23866_23921[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (10))){
var inst_23720 = (state_23816[(8)]);
var inst_23740 = (state_23816[(2)]);
var inst_23741 = cljs.core.get.call(null,inst_23740,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23742 = cljs.core.get.call(null,inst_23740,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23743 = cljs.core.get.call(null,inst_23740,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23744 = inst_23720;
var state_23816__$1 = (function (){var statearr_23867 = state_23816;
(statearr_23867[(16)] = inst_23741);

(statearr_23867[(17)] = inst_23742);

(statearr_23867[(18)] = inst_23743);

(statearr_23867[(7)] = inst_23744);

return statearr_23867;
})();
var statearr_23868_23922 = state_23816__$1;
(statearr_23868_23922[(2)] = null);

(statearr_23868_23922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (18))){
var inst_23758 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
var statearr_23869_23923 = state_23816__$1;
(statearr_23869_23923[(2)] = inst_23758);

(statearr_23869_23923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (37))){
var state_23816__$1 = state_23816;
var statearr_23870_23924 = state_23816__$1;
(statearr_23870_23924[(2)] = null);

(statearr_23870_23924[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (8))){
var inst_23720 = (state_23816[(8)]);
var inst_23737 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23720);
var state_23816__$1 = state_23816;
var statearr_23871_23925 = state_23816__$1;
(statearr_23871_23925[(2)] = inst_23737);

(statearr_23871_23925[(1)] = (10));


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
});})(c__22146__auto___23879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22034__auto__,c__22146__auto___23879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22035__auto__ = null;
var cljs$core$async$mix_$_state_machine__22035__auto____0 = (function (){
var statearr_23875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23875[(0)] = cljs$core$async$mix_$_state_machine__22035__auto__);

(statearr_23875[(1)] = (1));

return statearr_23875;
});
var cljs$core$async$mix_$_state_machine__22035__auto____1 = (function (state_23816){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_23816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e23876){if((e23876 instanceof Object)){
var ex__22038__auto__ = e23876;
var statearr_23877_23926 = state_23816;
(statearr_23877_23926[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23927 = state_23816;
state_23816 = G__23927;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22035__auto__ = function(state_23816){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22035__auto____1.call(this,state_23816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22035__auto____0;
cljs$core$async$mix_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22035__auto____1;
return cljs$core$async$mix_$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___23879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22148__auto__ = (function (){var statearr_23878 = f__22147__auto__.call(null);
(statearr_23878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___23879);

return statearr_23878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___23879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__20617__auto__ = (((p == null))?null:p);
var m__20618__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20618__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__20617__auto__ = (((p == null))?null:p);
var m__20618__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,p,v,ch);
} else {
var m__20618__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23928 = [];
var len__21029__auto___23931 = arguments.length;
var i__21030__auto___23932 = (0);
while(true){
if((i__21030__auto___23932 < len__21029__auto___23931)){
args23928.push((arguments[i__21030__auto___23932]));

var G__23933 = (i__21030__auto___23932 + (1));
i__21030__auto___23932 = G__23933;
continue;
} else {
}
break;
}

var G__23930 = args23928.length;
switch (G__23930) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23928.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20617__auto__ = (((p == null))?null:p);
var m__20618__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,p);
} else {
var m__20618__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,p);
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
var x__20617__auto__ = (((p == null))?null:p);
var m__20618__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20617__auto__)]);
if(!((m__20618__auto__ == null))){
return m__20618__auto__.call(null,p,v);
} else {
var m__20618__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20618__auto____$1 == null))){
return m__20618__auto____$1.call(null,p,v);
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
var args23936 = [];
var len__21029__auto___24061 = arguments.length;
var i__21030__auto___24062 = (0);
while(true){
if((i__21030__auto___24062 < len__21029__auto___24061)){
args23936.push((arguments[i__21030__auto___24062]));

var G__24063 = (i__21030__auto___24062 + (1));
i__21030__auto___24062 = G__24063;
continue;
} else {
}
break;
}

var G__23938 = args23936.length;
switch (G__23938) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23936.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19954__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19954__auto__,mults){
return (function (p1__23935_SHARP_){
if(cljs.core.truth_(p1__23935_SHARP_.call(null,topic))){
return p1__23935_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23935_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19954__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23939 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23940){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23940 = meta23940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23941,meta23940__$1){
var self__ = this;
var _23941__$1 = this;
return (new cljs.core.async.t_cljs$core$async23939(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23940__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23941){
var self__ = this;
var _23941__$1 = this;
return self__.meta23940;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23939.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23939.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23939.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23939.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23939.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23939.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23939.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23939.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23940","meta23940",1348332087,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23939";

cljs.core.async.t_cljs$core$async23939.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cljs.core.async/t_cljs$core$async23939");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23939 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23939(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23940){
return (new cljs.core.async.t_cljs$core$async23939(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23940));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23939(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22146__auto___24065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___24065,mults,ensure_mult,p){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___24065,mults,ensure_mult,p){
return (function (state_24013){
var state_val_24014 = (state_24013[(1)]);
if((state_val_24014 === (7))){
var inst_24009 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24015_24066 = state_24013__$1;
(statearr_24015_24066[(2)] = inst_24009);

(statearr_24015_24066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (20))){
var state_24013__$1 = state_24013;
var statearr_24016_24067 = state_24013__$1;
(statearr_24016_24067[(2)] = null);

(statearr_24016_24067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (1))){
var state_24013__$1 = state_24013;
var statearr_24017_24068 = state_24013__$1;
(statearr_24017_24068[(2)] = null);

(statearr_24017_24068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (24))){
var inst_23992 = (state_24013[(7)]);
var inst_24001 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23992);
var state_24013__$1 = state_24013;
var statearr_24018_24069 = state_24013__$1;
(statearr_24018_24069[(2)] = inst_24001);

(statearr_24018_24069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (4))){
var inst_23944 = (state_24013[(8)]);
var inst_23944__$1 = (state_24013[(2)]);
var inst_23945 = (inst_23944__$1 == null);
var state_24013__$1 = (function (){var statearr_24019 = state_24013;
(statearr_24019[(8)] = inst_23944__$1);

return statearr_24019;
})();
if(cljs.core.truth_(inst_23945)){
var statearr_24020_24070 = state_24013__$1;
(statearr_24020_24070[(1)] = (5));

} else {
var statearr_24021_24071 = state_24013__$1;
(statearr_24021_24071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (15))){
var inst_23986 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24022_24072 = state_24013__$1;
(statearr_24022_24072[(2)] = inst_23986);

(statearr_24022_24072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (21))){
var inst_24006 = (state_24013[(2)]);
var state_24013__$1 = (function (){var statearr_24023 = state_24013;
(statearr_24023[(9)] = inst_24006);

return statearr_24023;
})();
var statearr_24024_24073 = state_24013__$1;
(statearr_24024_24073[(2)] = null);

(statearr_24024_24073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (13))){
var inst_23968 = (state_24013[(10)]);
var inst_23970 = cljs.core.chunked_seq_QMARK_.call(null,inst_23968);
var state_24013__$1 = state_24013;
if(inst_23970){
var statearr_24025_24074 = state_24013__$1;
(statearr_24025_24074[(1)] = (16));

} else {
var statearr_24026_24075 = state_24013__$1;
(statearr_24026_24075[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (22))){
var inst_23998 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
if(cljs.core.truth_(inst_23998)){
var statearr_24027_24076 = state_24013__$1;
(statearr_24027_24076[(1)] = (23));

} else {
var statearr_24028_24077 = state_24013__$1;
(statearr_24028_24077[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (6))){
var inst_23992 = (state_24013[(7)]);
var inst_23994 = (state_24013[(11)]);
var inst_23944 = (state_24013[(8)]);
var inst_23992__$1 = topic_fn.call(null,inst_23944);
var inst_23993 = cljs.core.deref.call(null,mults);
var inst_23994__$1 = cljs.core.get.call(null,inst_23993,inst_23992__$1);
var state_24013__$1 = (function (){var statearr_24029 = state_24013;
(statearr_24029[(7)] = inst_23992__$1);

(statearr_24029[(11)] = inst_23994__$1);

return statearr_24029;
})();
if(cljs.core.truth_(inst_23994__$1)){
var statearr_24030_24078 = state_24013__$1;
(statearr_24030_24078[(1)] = (19));

} else {
var statearr_24031_24079 = state_24013__$1;
(statearr_24031_24079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (25))){
var inst_24003 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24032_24080 = state_24013__$1;
(statearr_24032_24080[(2)] = inst_24003);

(statearr_24032_24080[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (17))){
var inst_23968 = (state_24013[(10)]);
var inst_23977 = cljs.core.first.call(null,inst_23968);
var inst_23978 = cljs.core.async.muxch_STAR_.call(null,inst_23977);
var inst_23979 = cljs.core.async.close_BANG_.call(null,inst_23978);
var inst_23980 = cljs.core.next.call(null,inst_23968);
var inst_23954 = inst_23980;
var inst_23955 = null;
var inst_23956 = (0);
var inst_23957 = (0);
var state_24013__$1 = (function (){var statearr_24033 = state_24013;
(statearr_24033[(12)] = inst_23957);

(statearr_24033[(13)] = inst_23954);

(statearr_24033[(14)] = inst_23956);

(statearr_24033[(15)] = inst_23955);

(statearr_24033[(16)] = inst_23979);

return statearr_24033;
})();
var statearr_24034_24081 = state_24013__$1;
(statearr_24034_24081[(2)] = null);

(statearr_24034_24081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (3))){
var inst_24011 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24013__$1,inst_24011);
} else {
if((state_val_24014 === (12))){
var inst_23988 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24035_24082 = state_24013__$1;
(statearr_24035_24082[(2)] = inst_23988);

(statearr_24035_24082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (2))){
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24013__$1,(4),ch);
} else {
if((state_val_24014 === (23))){
var state_24013__$1 = state_24013;
var statearr_24036_24083 = state_24013__$1;
(statearr_24036_24083[(2)] = null);

(statearr_24036_24083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (19))){
var inst_23994 = (state_24013[(11)]);
var inst_23944 = (state_24013[(8)]);
var inst_23996 = cljs.core.async.muxch_STAR_.call(null,inst_23994);
var state_24013__$1 = state_24013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24013__$1,(22),inst_23996,inst_23944);
} else {
if((state_val_24014 === (11))){
var inst_23954 = (state_24013[(13)]);
var inst_23968 = (state_24013[(10)]);
var inst_23968__$1 = cljs.core.seq.call(null,inst_23954);
var state_24013__$1 = (function (){var statearr_24037 = state_24013;
(statearr_24037[(10)] = inst_23968__$1);

return statearr_24037;
})();
if(inst_23968__$1){
var statearr_24038_24084 = state_24013__$1;
(statearr_24038_24084[(1)] = (13));

} else {
var statearr_24039_24085 = state_24013__$1;
(statearr_24039_24085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (9))){
var inst_23990 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24040_24086 = state_24013__$1;
(statearr_24040_24086[(2)] = inst_23990);

(statearr_24040_24086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (5))){
var inst_23951 = cljs.core.deref.call(null,mults);
var inst_23952 = cljs.core.vals.call(null,inst_23951);
var inst_23953 = cljs.core.seq.call(null,inst_23952);
var inst_23954 = inst_23953;
var inst_23955 = null;
var inst_23956 = (0);
var inst_23957 = (0);
var state_24013__$1 = (function (){var statearr_24041 = state_24013;
(statearr_24041[(12)] = inst_23957);

(statearr_24041[(13)] = inst_23954);

(statearr_24041[(14)] = inst_23956);

(statearr_24041[(15)] = inst_23955);

return statearr_24041;
})();
var statearr_24042_24087 = state_24013__$1;
(statearr_24042_24087[(2)] = null);

(statearr_24042_24087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (14))){
var state_24013__$1 = state_24013;
var statearr_24046_24088 = state_24013__$1;
(statearr_24046_24088[(2)] = null);

(statearr_24046_24088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (16))){
var inst_23968 = (state_24013[(10)]);
var inst_23972 = cljs.core.chunk_first.call(null,inst_23968);
var inst_23973 = cljs.core.chunk_rest.call(null,inst_23968);
var inst_23974 = cljs.core.count.call(null,inst_23972);
var inst_23954 = inst_23973;
var inst_23955 = inst_23972;
var inst_23956 = inst_23974;
var inst_23957 = (0);
var state_24013__$1 = (function (){var statearr_24047 = state_24013;
(statearr_24047[(12)] = inst_23957);

(statearr_24047[(13)] = inst_23954);

(statearr_24047[(14)] = inst_23956);

(statearr_24047[(15)] = inst_23955);

return statearr_24047;
})();
var statearr_24048_24089 = state_24013__$1;
(statearr_24048_24089[(2)] = null);

(statearr_24048_24089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (10))){
var inst_23957 = (state_24013[(12)]);
var inst_23954 = (state_24013[(13)]);
var inst_23956 = (state_24013[(14)]);
var inst_23955 = (state_24013[(15)]);
var inst_23962 = cljs.core._nth.call(null,inst_23955,inst_23957);
var inst_23963 = cljs.core.async.muxch_STAR_.call(null,inst_23962);
var inst_23964 = cljs.core.async.close_BANG_.call(null,inst_23963);
var inst_23965 = (inst_23957 + (1));
var tmp24043 = inst_23954;
var tmp24044 = inst_23956;
var tmp24045 = inst_23955;
var inst_23954__$1 = tmp24043;
var inst_23955__$1 = tmp24045;
var inst_23956__$1 = tmp24044;
var inst_23957__$1 = inst_23965;
var state_24013__$1 = (function (){var statearr_24049 = state_24013;
(statearr_24049[(12)] = inst_23957__$1);

(statearr_24049[(13)] = inst_23954__$1);

(statearr_24049[(14)] = inst_23956__$1);

(statearr_24049[(15)] = inst_23955__$1);

(statearr_24049[(17)] = inst_23964);

return statearr_24049;
})();
var statearr_24050_24090 = state_24013__$1;
(statearr_24050_24090[(2)] = null);

(statearr_24050_24090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (18))){
var inst_23983 = (state_24013[(2)]);
var state_24013__$1 = state_24013;
var statearr_24051_24091 = state_24013__$1;
(statearr_24051_24091[(2)] = inst_23983);

(statearr_24051_24091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24014 === (8))){
var inst_23957 = (state_24013[(12)]);
var inst_23956 = (state_24013[(14)]);
var inst_23959 = (inst_23957 < inst_23956);
var inst_23960 = inst_23959;
var state_24013__$1 = state_24013;
if(cljs.core.truth_(inst_23960)){
var statearr_24052_24092 = state_24013__$1;
(statearr_24052_24092[(1)] = (10));

} else {
var statearr_24053_24093 = state_24013__$1;
(statearr_24053_24093[(1)] = (11));

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
});})(c__22146__auto___24065,mults,ensure_mult,p))
;
return ((function (switch__22034__auto__,c__22146__auto___24065,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22035__auto__ = null;
var cljs$core$async$state_machine__22035__auto____0 = (function (){
var statearr_24057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24057[(0)] = cljs$core$async$state_machine__22035__auto__);

(statearr_24057[(1)] = (1));

return statearr_24057;
});
var cljs$core$async$state_machine__22035__auto____1 = (function (state_24013){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_24013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e24058){if((e24058 instanceof Object)){
var ex__22038__auto__ = e24058;
var statearr_24059_24094 = state_24013;
(statearr_24059_24094[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24095 = state_24013;
state_24013 = G__24095;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$state_machine__22035__auto__ = function(state_24013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22035__auto____1.call(this,state_24013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22035__auto____0;
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22035__auto____1;
return cljs$core$async$state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___24065,mults,ensure_mult,p))
})();
var state__22148__auto__ = (function (){var statearr_24060 = f__22147__auto__.call(null);
(statearr_24060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___24065);

return statearr_24060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___24065,mults,ensure_mult,p))
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
var args24096 = [];
var len__21029__auto___24099 = arguments.length;
var i__21030__auto___24100 = (0);
while(true){
if((i__21030__auto___24100 < len__21029__auto___24099)){
args24096.push((arguments[i__21030__auto___24100]));

var G__24101 = (i__21030__auto___24100 + (1));
i__21030__auto___24100 = G__24101;
continue;
} else {
}
break;
}

var G__24098 = args24096.length;
switch (G__24098) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24096.length)].join('')));

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
var args24103 = [];
var len__21029__auto___24106 = arguments.length;
var i__21030__auto___24107 = (0);
while(true){
if((i__21030__auto___24107 < len__21029__auto___24106)){
args24103.push((arguments[i__21030__auto___24107]));

var G__24108 = (i__21030__auto___24107 + (1));
i__21030__auto___24107 = G__24108;
continue;
} else {
}
break;
}

var G__24105 = args24103.length;
switch (G__24105) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24103.length)].join('')));

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
var args24110 = [];
var len__21029__auto___24181 = arguments.length;
var i__21030__auto___24182 = (0);
while(true){
if((i__21030__auto___24182 < len__21029__auto___24181)){
args24110.push((arguments[i__21030__auto___24182]));

var G__24183 = (i__21030__auto___24182 + (1));
i__21030__auto___24182 = G__24183;
continue;
} else {
}
break;
}

var G__24112 = args24110.length;
switch (G__24112) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24110.length)].join('')));

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
var c__22146__auto___24185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___24185,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___24185,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24151){
var state_val_24152 = (state_24151[(1)]);
if((state_val_24152 === (7))){
var state_24151__$1 = state_24151;
var statearr_24153_24186 = state_24151__$1;
(statearr_24153_24186[(2)] = null);

(statearr_24153_24186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (1))){
var state_24151__$1 = state_24151;
var statearr_24154_24187 = state_24151__$1;
(statearr_24154_24187[(2)] = null);

(statearr_24154_24187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (4))){
var inst_24115 = (state_24151[(7)]);
var inst_24117 = (inst_24115 < cnt);
var state_24151__$1 = state_24151;
if(cljs.core.truth_(inst_24117)){
var statearr_24155_24188 = state_24151__$1;
(statearr_24155_24188[(1)] = (6));

} else {
var statearr_24156_24189 = state_24151__$1;
(statearr_24156_24189[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (15))){
var inst_24147 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
var statearr_24157_24190 = state_24151__$1;
(statearr_24157_24190[(2)] = inst_24147);

(statearr_24157_24190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (13))){
var inst_24140 = cljs.core.async.close_BANG_.call(null,out);
var state_24151__$1 = state_24151;
var statearr_24158_24191 = state_24151__$1;
(statearr_24158_24191[(2)] = inst_24140);

(statearr_24158_24191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (6))){
var state_24151__$1 = state_24151;
var statearr_24159_24192 = state_24151__$1;
(statearr_24159_24192[(2)] = null);

(statearr_24159_24192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (3))){
var inst_24149 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24151__$1,inst_24149);
} else {
if((state_val_24152 === (12))){
var inst_24137 = (state_24151[(8)]);
var inst_24137__$1 = (state_24151[(2)]);
var inst_24138 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24137__$1);
var state_24151__$1 = (function (){var statearr_24160 = state_24151;
(statearr_24160[(8)] = inst_24137__$1);

return statearr_24160;
})();
if(cljs.core.truth_(inst_24138)){
var statearr_24161_24193 = state_24151__$1;
(statearr_24161_24193[(1)] = (13));

} else {
var statearr_24162_24194 = state_24151__$1;
(statearr_24162_24194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (2))){
var inst_24114 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24115 = (0);
var state_24151__$1 = (function (){var statearr_24163 = state_24151;
(statearr_24163[(9)] = inst_24114);

(statearr_24163[(7)] = inst_24115);

return statearr_24163;
})();
var statearr_24164_24195 = state_24151__$1;
(statearr_24164_24195[(2)] = null);

(statearr_24164_24195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (11))){
var inst_24115 = (state_24151[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24151,(10),Object,null,(9));
var inst_24124 = chs__$1.call(null,inst_24115);
var inst_24125 = done.call(null,inst_24115);
var inst_24126 = cljs.core.async.take_BANG_.call(null,inst_24124,inst_24125);
var state_24151__$1 = state_24151;
var statearr_24165_24196 = state_24151__$1;
(statearr_24165_24196[(2)] = inst_24126);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24151__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (9))){
var inst_24115 = (state_24151[(7)]);
var inst_24128 = (state_24151[(2)]);
var inst_24129 = (inst_24115 + (1));
var inst_24115__$1 = inst_24129;
var state_24151__$1 = (function (){var statearr_24166 = state_24151;
(statearr_24166[(10)] = inst_24128);

(statearr_24166[(7)] = inst_24115__$1);

return statearr_24166;
})();
var statearr_24167_24197 = state_24151__$1;
(statearr_24167_24197[(2)] = null);

(statearr_24167_24197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (5))){
var inst_24135 = (state_24151[(2)]);
var state_24151__$1 = (function (){var statearr_24168 = state_24151;
(statearr_24168[(11)] = inst_24135);

return statearr_24168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24151__$1,(12),dchan);
} else {
if((state_val_24152 === (14))){
var inst_24137 = (state_24151[(8)]);
var inst_24142 = cljs.core.apply.call(null,f,inst_24137);
var state_24151__$1 = state_24151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24151__$1,(16),out,inst_24142);
} else {
if((state_val_24152 === (16))){
var inst_24144 = (state_24151[(2)]);
var state_24151__$1 = (function (){var statearr_24169 = state_24151;
(statearr_24169[(12)] = inst_24144);

return statearr_24169;
})();
var statearr_24170_24198 = state_24151__$1;
(statearr_24170_24198[(2)] = null);

(statearr_24170_24198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (10))){
var inst_24119 = (state_24151[(2)]);
var inst_24120 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24151__$1 = (function (){var statearr_24171 = state_24151;
(statearr_24171[(13)] = inst_24119);

return statearr_24171;
})();
var statearr_24172_24199 = state_24151__$1;
(statearr_24172_24199[(2)] = inst_24120);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24151__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24152 === (8))){
var inst_24133 = (state_24151[(2)]);
var state_24151__$1 = state_24151;
var statearr_24173_24200 = state_24151__$1;
(statearr_24173_24200[(2)] = inst_24133);

(statearr_24173_24200[(1)] = (5));


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
});})(c__22146__auto___24185,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22034__auto__,c__22146__auto___24185,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22035__auto__ = null;
var cljs$core$async$state_machine__22035__auto____0 = (function (){
var statearr_24177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24177[(0)] = cljs$core$async$state_machine__22035__auto__);

(statearr_24177[(1)] = (1));

return statearr_24177;
});
var cljs$core$async$state_machine__22035__auto____1 = (function (state_24151){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_24151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e24178){if((e24178 instanceof Object)){
var ex__22038__auto__ = e24178;
var statearr_24179_24201 = state_24151;
(statearr_24179_24201[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24202 = state_24151;
state_24151 = G__24202;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$state_machine__22035__auto__ = function(state_24151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22035__auto____1.call(this,state_24151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22035__auto____0;
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22035__auto____1;
return cljs$core$async$state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___24185,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22148__auto__ = (function (){var statearr_24180 = f__22147__auto__.call(null);
(statearr_24180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___24185);

return statearr_24180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___24185,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24204 = [];
var len__21029__auto___24262 = arguments.length;
var i__21030__auto___24263 = (0);
while(true){
if((i__21030__auto___24263 < len__21029__auto___24262)){
args24204.push((arguments[i__21030__auto___24263]));

var G__24264 = (i__21030__auto___24263 + (1));
i__21030__auto___24263 = G__24264;
continue;
} else {
}
break;
}

var G__24206 = args24204.length;
switch (G__24206) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24204.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22146__auto___24266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___24266,out){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___24266,out){
return (function (state_24238){
var state_val_24239 = (state_24238[(1)]);
if((state_val_24239 === (7))){
var inst_24217 = (state_24238[(7)]);
var inst_24218 = (state_24238[(8)]);
var inst_24217__$1 = (state_24238[(2)]);
var inst_24218__$1 = cljs.core.nth.call(null,inst_24217__$1,(0),null);
var inst_24219 = cljs.core.nth.call(null,inst_24217__$1,(1),null);
var inst_24220 = (inst_24218__$1 == null);
var state_24238__$1 = (function (){var statearr_24240 = state_24238;
(statearr_24240[(9)] = inst_24219);

(statearr_24240[(7)] = inst_24217__$1);

(statearr_24240[(8)] = inst_24218__$1);

return statearr_24240;
})();
if(cljs.core.truth_(inst_24220)){
var statearr_24241_24267 = state_24238__$1;
(statearr_24241_24267[(1)] = (8));

} else {
var statearr_24242_24268 = state_24238__$1;
(statearr_24242_24268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (1))){
var inst_24207 = cljs.core.vec.call(null,chs);
var inst_24208 = inst_24207;
var state_24238__$1 = (function (){var statearr_24243 = state_24238;
(statearr_24243[(10)] = inst_24208);

return statearr_24243;
})();
var statearr_24244_24269 = state_24238__$1;
(statearr_24244_24269[(2)] = null);

(statearr_24244_24269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (4))){
var inst_24208 = (state_24238[(10)]);
var state_24238__$1 = state_24238;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24238__$1,(7),inst_24208);
} else {
if((state_val_24239 === (6))){
var inst_24234 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
var statearr_24245_24270 = state_24238__$1;
(statearr_24245_24270[(2)] = inst_24234);

(statearr_24245_24270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (3))){
var inst_24236 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24238__$1,inst_24236);
} else {
if((state_val_24239 === (2))){
var inst_24208 = (state_24238[(10)]);
var inst_24210 = cljs.core.count.call(null,inst_24208);
var inst_24211 = (inst_24210 > (0));
var state_24238__$1 = state_24238;
if(cljs.core.truth_(inst_24211)){
var statearr_24247_24271 = state_24238__$1;
(statearr_24247_24271[(1)] = (4));

} else {
var statearr_24248_24272 = state_24238__$1;
(statearr_24248_24272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (11))){
var inst_24208 = (state_24238[(10)]);
var inst_24227 = (state_24238[(2)]);
var tmp24246 = inst_24208;
var inst_24208__$1 = tmp24246;
var state_24238__$1 = (function (){var statearr_24249 = state_24238;
(statearr_24249[(10)] = inst_24208__$1);

(statearr_24249[(11)] = inst_24227);

return statearr_24249;
})();
var statearr_24250_24273 = state_24238__$1;
(statearr_24250_24273[(2)] = null);

(statearr_24250_24273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (9))){
var inst_24218 = (state_24238[(8)]);
var state_24238__$1 = state_24238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24238__$1,(11),out,inst_24218);
} else {
if((state_val_24239 === (5))){
var inst_24232 = cljs.core.async.close_BANG_.call(null,out);
var state_24238__$1 = state_24238;
var statearr_24251_24274 = state_24238__$1;
(statearr_24251_24274[(2)] = inst_24232);

(statearr_24251_24274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (10))){
var inst_24230 = (state_24238[(2)]);
var state_24238__$1 = state_24238;
var statearr_24252_24275 = state_24238__$1;
(statearr_24252_24275[(2)] = inst_24230);

(statearr_24252_24275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24239 === (8))){
var inst_24208 = (state_24238[(10)]);
var inst_24219 = (state_24238[(9)]);
var inst_24217 = (state_24238[(7)]);
var inst_24218 = (state_24238[(8)]);
var inst_24222 = (function (){var cs = inst_24208;
var vec__24213 = inst_24217;
var v = inst_24218;
var c = inst_24219;
return ((function (cs,vec__24213,v,c,inst_24208,inst_24219,inst_24217,inst_24218,state_val_24239,c__22146__auto___24266,out){
return (function (p1__24203_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24203_SHARP_);
});
;})(cs,vec__24213,v,c,inst_24208,inst_24219,inst_24217,inst_24218,state_val_24239,c__22146__auto___24266,out))
})();
var inst_24223 = cljs.core.filterv.call(null,inst_24222,inst_24208);
var inst_24208__$1 = inst_24223;
var state_24238__$1 = (function (){var statearr_24253 = state_24238;
(statearr_24253[(10)] = inst_24208__$1);

return statearr_24253;
})();
var statearr_24254_24276 = state_24238__$1;
(statearr_24254_24276[(2)] = null);

(statearr_24254_24276[(1)] = (2));


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
});})(c__22146__auto___24266,out))
;
return ((function (switch__22034__auto__,c__22146__auto___24266,out){
return (function() {
var cljs$core$async$state_machine__22035__auto__ = null;
var cljs$core$async$state_machine__22035__auto____0 = (function (){
var statearr_24258 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24258[(0)] = cljs$core$async$state_machine__22035__auto__);

(statearr_24258[(1)] = (1));

return statearr_24258;
});
var cljs$core$async$state_machine__22035__auto____1 = (function (state_24238){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_24238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e24259){if((e24259 instanceof Object)){
var ex__22038__auto__ = e24259;
var statearr_24260_24277 = state_24238;
(statearr_24260_24277[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24278 = state_24238;
state_24238 = G__24278;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$state_machine__22035__auto__ = function(state_24238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22035__auto____1.call(this,state_24238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22035__auto____0;
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22035__auto____1;
return cljs$core$async$state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___24266,out))
})();
var state__22148__auto__ = (function (){var statearr_24261 = f__22147__auto__.call(null);
(statearr_24261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___24266);

return statearr_24261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___24266,out))
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
var args24279 = [];
var len__21029__auto___24328 = arguments.length;
var i__21030__auto___24329 = (0);
while(true){
if((i__21030__auto___24329 < len__21029__auto___24328)){
args24279.push((arguments[i__21030__auto___24329]));

var G__24330 = (i__21030__auto___24329 + (1));
i__21030__auto___24329 = G__24330;
continue;
} else {
}
break;
}

var G__24281 = args24279.length;
switch (G__24281) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24279.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22146__auto___24332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___24332,out){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___24332,out){
return (function (state_24305){
var state_val_24306 = (state_24305[(1)]);
if((state_val_24306 === (7))){
var inst_24287 = (state_24305[(7)]);
var inst_24287__$1 = (state_24305[(2)]);
var inst_24288 = (inst_24287__$1 == null);
var inst_24289 = cljs.core.not.call(null,inst_24288);
var state_24305__$1 = (function (){var statearr_24307 = state_24305;
(statearr_24307[(7)] = inst_24287__$1);

return statearr_24307;
})();
if(inst_24289){
var statearr_24308_24333 = state_24305__$1;
(statearr_24308_24333[(1)] = (8));

} else {
var statearr_24309_24334 = state_24305__$1;
(statearr_24309_24334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24306 === (1))){
var inst_24282 = (0);
var state_24305__$1 = (function (){var statearr_24310 = state_24305;
(statearr_24310[(8)] = inst_24282);

return statearr_24310;
})();
var statearr_24311_24335 = state_24305__$1;
(statearr_24311_24335[(2)] = null);

(statearr_24311_24335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24306 === (4))){
var state_24305__$1 = state_24305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24305__$1,(7),ch);
} else {
if((state_val_24306 === (6))){
var inst_24300 = (state_24305[(2)]);
var state_24305__$1 = state_24305;
var statearr_24312_24336 = state_24305__$1;
(statearr_24312_24336[(2)] = inst_24300);

(statearr_24312_24336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24306 === (3))){
var inst_24302 = (state_24305[(2)]);
var inst_24303 = cljs.core.async.close_BANG_.call(null,out);
var state_24305__$1 = (function (){var statearr_24313 = state_24305;
(statearr_24313[(9)] = inst_24302);

return statearr_24313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24305__$1,inst_24303);
} else {
if((state_val_24306 === (2))){
var inst_24282 = (state_24305[(8)]);
var inst_24284 = (inst_24282 < n);
var state_24305__$1 = state_24305;
if(cljs.core.truth_(inst_24284)){
var statearr_24314_24337 = state_24305__$1;
(statearr_24314_24337[(1)] = (4));

} else {
var statearr_24315_24338 = state_24305__$1;
(statearr_24315_24338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24306 === (11))){
var inst_24282 = (state_24305[(8)]);
var inst_24292 = (state_24305[(2)]);
var inst_24293 = (inst_24282 + (1));
var inst_24282__$1 = inst_24293;
var state_24305__$1 = (function (){var statearr_24316 = state_24305;
(statearr_24316[(8)] = inst_24282__$1);

(statearr_24316[(10)] = inst_24292);

return statearr_24316;
})();
var statearr_24317_24339 = state_24305__$1;
(statearr_24317_24339[(2)] = null);

(statearr_24317_24339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24306 === (9))){
var state_24305__$1 = state_24305;
var statearr_24318_24340 = state_24305__$1;
(statearr_24318_24340[(2)] = null);

(statearr_24318_24340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24306 === (5))){
var state_24305__$1 = state_24305;
var statearr_24319_24341 = state_24305__$1;
(statearr_24319_24341[(2)] = null);

(statearr_24319_24341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24306 === (10))){
var inst_24297 = (state_24305[(2)]);
var state_24305__$1 = state_24305;
var statearr_24320_24342 = state_24305__$1;
(statearr_24320_24342[(2)] = inst_24297);

(statearr_24320_24342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24306 === (8))){
var inst_24287 = (state_24305[(7)]);
var state_24305__$1 = state_24305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24305__$1,(11),out,inst_24287);
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
});})(c__22146__auto___24332,out))
;
return ((function (switch__22034__auto__,c__22146__auto___24332,out){
return (function() {
var cljs$core$async$state_machine__22035__auto__ = null;
var cljs$core$async$state_machine__22035__auto____0 = (function (){
var statearr_24324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24324[(0)] = cljs$core$async$state_machine__22035__auto__);

(statearr_24324[(1)] = (1));

return statearr_24324;
});
var cljs$core$async$state_machine__22035__auto____1 = (function (state_24305){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_24305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e24325){if((e24325 instanceof Object)){
var ex__22038__auto__ = e24325;
var statearr_24326_24343 = state_24305;
(statearr_24326_24343[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24344 = state_24305;
state_24305 = G__24344;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$state_machine__22035__auto__ = function(state_24305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22035__auto____1.call(this,state_24305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22035__auto____0;
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22035__auto____1;
return cljs$core$async$state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___24332,out))
})();
var state__22148__auto__ = (function (){var statearr_24327 = f__22147__auto__.call(null);
(statearr_24327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___24332);

return statearr_24327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___24332,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24352 = (function (map_LT_,f,ch,meta24353){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24353 = meta24353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24354,meta24353__$1){
var self__ = this;
var _24354__$1 = this;
return (new cljs.core.async.t_cljs$core$async24352(self__.map_LT_,self__.f,self__.ch,meta24353__$1));
});

cljs.core.async.t_cljs$core$async24352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24354){
var self__ = this;
var _24354__$1 = this;
return self__.meta24353;
});

cljs.core.async.t_cljs$core$async24352.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24352.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24355 = (function (map_LT_,f,ch,meta24353,_,fn1,meta24356){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24353 = meta24353;
this._ = _;
this.fn1 = fn1;
this.meta24356 = meta24356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24357,meta24356__$1){
var self__ = this;
var _24357__$1 = this;
return (new cljs.core.async.t_cljs$core$async24355(self__.map_LT_,self__.f,self__.ch,self__.meta24353,self__._,self__.fn1,meta24356__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24357){
var self__ = this;
var _24357__$1 = this;
return self__.meta24356;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24355.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24345_SHARP_){
return f1.call(null,(((p1__24345_SHARP_ == null))?null:self__.f.call(null,p1__24345_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24355.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24353","meta24353",-1848615171,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24352","cljs.core.async/t_cljs$core$async24352",-1928285042,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24356","meta24356",1478950361,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24355";

cljs.core.async.t_cljs$core$async24355.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cljs.core.async/t_cljs$core$async24355");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24355 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24355(map_LT___$1,f__$1,ch__$1,meta24353__$1,___$2,fn1__$1,meta24356){
return (new cljs.core.async.t_cljs$core$async24355(map_LT___$1,f__$1,ch__$1,meta24353__$1,___$2,fn1__$1,meta24356));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24355(self__.map_LT_,self__.f,self__.ch,self__.meta24353,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19942__auto__ = ret;
if(cljs.core.truth_(and__19942__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19942__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24352.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24353","meta24353",-1848615171,null)], null);
});

cljs.core.async.t_cljs$core$async24352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24352";

cljs.core.async.t_cljs$core$async24352.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cljs.core.async/t_cljs$core$async24352");
});

cljs.core.async.__GT_t_cljs$core$async24352 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24352(map_LT___$1,f__$1,ch__$1,meta24353){
return (new cljs.core.async.t_cljs$core$async24352(map_LT___$1,f__$1,ch__$1,meta24353));
});

}

return (new cljs.core.async.t_cljs$core$async24352(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24361 = (function (map_GT_,f,ch,meta24362){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24362 = meta24362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24363,meta24362__$1){
var self__ = this;
var _24363__$1 = this;
return (new cljs.core.async.t_cljs$core$async24361(self__.map_GT_,self__.f,self__.ch,meta24362__$1));
});

cljs.core.async.t_cljs$core$async24361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24363){
var self__ = this;
var _24363__$1 = this;
return self__.meta24362;
});

cljs.core.async.t_cljs$core$async24361.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24361.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24361.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24362","meta24362",1703962100,null)], null);
});

cljs.core.async.t_cljs$core$async24361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24361";

cljs.core.async.t_cljs$core$async24361.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cljs.core.async/t_cljs$core$async24361");
});

cljs.core.async.__GT_t_cljs$core$async24361 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24361(map_GT___$1,f__$1,ch__$1,meta24362){
return (new cljs.core.async.t_cljs$core$async24361(map_GT___$1,f__$1,ch__$1,meta24362));
});

}

return (new cljs.core.async.t_cljs$core$async24361(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24367 = (function (filter_GT_,p,ch,meta24368){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24368 = meta24368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24369,meta24368__$1){
var self__ = this;
var _24369__$1 = this;
return (new cljs.core.async.t_cljs$core$async24367(self__.filter_GT_,self__.p,self__.ch,meta24368__$1));
});

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24369){
var self__ = this;
var _24369__$1 = this;
return self__.meta24368;
});

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24368","meta24368",2128045415,null)], null);
});

cljs.core.async.t_cljs$core$async24367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24367";

cljs.core.async.t_cljs$core$async24367.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cljs.core.async/t_cljs$core$async24367");
});

cljs.core.async.__GT_t_cljs$core$async24367 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24367(filter_GT___$1,p__$1,ch__$1,meta24368){
return (new cljs.core.async.t_cljs$core$async24367(filter_GT___$1,p__$1,ch__$1,meta24368));
});

}

return (new cljs.core.async.t_cljs$core$async24367(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24370 = [];
var len__21029__auto___24414 = arguments.length;
var i__21030__auto___24415 = (0);
while(true){
if((i__21030__auto___24415 < len__21029__auto___24414)){
args24370.push((arguments[i__21030__auto___24415]));

var G__24416 = (i__21030__auto___24415 + (1));
i__21030__auto___24415 = G__24416;
continue;
} else {
}
break;
}

var G__24372 = args24370.length;
switch (G__24372) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24370.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22146__auto___24418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___24418,out){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___24418,out){
return (function (state_24393){
var state_val_24394 = (state_24393[(1)]);
if((state_val_24394 === (7))){
var inst_24389 = (state_24393[(2)]);
var state_24393__$1 = state_24393;
var statearr_24395_24419 = state_24393__$1;
(statearr_24395_24419[(2)] = inst_24389);

(statearr_24395_24419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24394 === (1))){
var state_24393__$1 = state_24393;
var statearr_24396_24420 = state_24393__$1;
(statearr_24396_24420[(2)] = null);

(statearr_24396_24420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24394 === (4))){
var inst_24375 = (state_24393[(7)]);
var inst_24375__$1 = (state_24393[(2)]);
var inst_24376 = (inst_24375__$1 == null);
var state_24393__$1 = (function (){var statearr_24397 = state_24393;
(statearr_24397[(7)] = inst_24375__$1);

return statearr_24397;
})();
if(cljs.core.truth_(inst_24376)){
var statearr_24398_24421 = state_24393__$1;
(statearr_24398_24421[(1)] = (5));

} else {
var statearr_24399_24422 = state_24393__$1;
(statearr_24399_24422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24394 === (6))){
var inst_24375 = (state_24393[(7)]);
var inst_24380 = p.call(null,inst_24375);
var state_24393__$1 = state_24393;
if(cljs.core.truth_(inst_24380)){
var statearr_24400_24423 = state_24393__$1;
(statearr_24400_24423[(1)] = (8));

} else {
var statearr_24401_24424 = state_24393__$1;
(statearr_24401_24424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24394 === (3))){
var inst_24391 = (state_24393[(2)]);
var state_24393__$1 = state_24393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24393__$1,inst_24391);
} else {
if((state_val_24394 === (2))){
var state_24393__$1 = state_24393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24393__$1,(4),ch);
} else {
if((state_val_24394 === (11))){
var inst_24383 = (state_24393[(2)]);
var state_24393__$1 = state_24393;
var statearr_24402_24425 = state_24393__$1;
(statearr_24402_24425[(2)] = inst_24383);

(statearr_24402_24425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24394 === (9))){
var state_24393__$1 = state_24393;
var statearr_24403_24426 = state_24393__$1;
(statearr_24403_24426[(2)] = null);

(statearr_24403_24426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24394 === (5))){
var inst_24378 = cljs.core.async.close_BANG_.call(null,out);
var state_24393__$1 = state_24393;
var statearr_24404_24427 = state_24393__$1;
(statearr_24404_24427[(2)] = inst_24378);

(statearr_24404_24427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24394 === (10))){
var inst_24386 = (state_24393[(2)]);
var state_24393__$1 = (function (){var statearr_24405 = state_24393;
(statearr_24405[(8)] = inst_24386);

return statearr_24405;
})();
var statearr_24406_24428 = state_24393__$1;
(statearr_24406_24428[(2)] = null);

(statearr_24406_24428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24394 === (8))){
var inst_24375 = (state_24393[(7)]);
var state_24393__$1 = state_24393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24393__$1,(11),out,inst_24375);
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
});})(c__22146__auto___24418,out))
;
return ((function (switch__22034__auto__,c__22146__auto___24418,out){
return (function() {
var cljs$core$async$state_machine__22035__auto__ = null;
var cljs$core$async$state_machine__22035__auto____0 = (function (){
var statearr_24410 = [null,null,null,null,null,null,null,null,null];
(statearr_24410[(0)] = cljs$core$async$state_machine__22035__auto__);

(statearr_24410[(1)] = (1));

return statearr_24410;
});
var cljs$core$async$state_machine__22035__auto____1 = (function (state_24393){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_24393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e24411){if((e24411 instanceof Object)){
var ex__22038__auto__ = e24411;
var statearr_24412_24429 = state_24393;
(statearr_24412_24429[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24430 = state_24393;
state_24393 = G__24430;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$state_machine__22035__auto__ = function(state_24393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22035__auto____1.call(this,state_24393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22035__auto____0;
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22035__auto____1;
return cljs$core$async$state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___24418,out))
})();
var state__22148__auto__ = (function (){var statearr_24413 = f__22147__auto__.call(null);
(statearr_24413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___24418);

return statearr_24413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___24418,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24431 = [];
var len__21029__auto___24434 = arguments.length;
var i__21030__auto___24435 = (0);
while(true){
if((i__21030__auto___24435 < len__21029__auto___24434)){
args24431.push((arguments[i__21030__auto___24435]));

var G__24436 = (i__21030__auto___24435 + (1));
i__21030__auto___24435 = G__24436;
continue;
} else {
}
break;
}

var G__24433 = args24431.length;
switch (G__24433) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24431.length)].join('')));

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
var c__22146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto__){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto__){
return (function (state_24603){
var state_val_24604 = (state_24603[(1)]);
if((state_val_24604 === (7))){
var inst_24599 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
var statearr_24605_24646 = state_24603__$1;
(statearr_24605_24646[(2)] = inst_24599);

(statearr_24605_24646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (20))){
var inst_24569 = (state_24603[(7)]);
var inst_24580 = (state_24603[(2)]);
var inst_24581 = cljs.core.next.call(null,inst_24569);
var inst_24555 = inst_24581;
var inst_24556 = null;
var inst_24557 = (0);
var inst_24558 = (0);
var state_24603__$1 = (function (){var statearr_24606 = state_24603;
(statearr_24606[(8)] = inst_24558);

(statearr_24606[(9)] = inst_24557);

(statearr_24606[(10)] = inst_24556);

(statearr_24606[(11)] = inst_24580);

(statearr_24606[(12)] = inst_24555);

return statearr_24606;
})();
var statearr_24607_24647 = state_24603__$1;
(statearr_24607_24647[(2)] = null);

(statearr_24607_24647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (1))){
var state_24603__$1 = state_24603;
var statearr_24608_24648 = state_24603__$1;
(statearr_24608_24648[(2)] = null);

(statearr_24608_24648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (4))){
var inst_24544 = (state_24603[(13)]);
var inst_24544__$1 = (state_24603[(2)]);
var inst_24545 = (inst_24544__$1 == null);
var state_24603__$1 = (function (){var statearr_24609 = state_24603;
(statearr_24609[(13)] = inst_24544__$1);

return statearr_24609;
})();
if(cljs.core.truth_(inst_24545)){
var statearr_24610_24649 = state_24603__$1;
(statearr_24610_24649[(1)] = (5));

} else {
var statearr_24611_24650 = state_24603__$1;
(statearr_24611_24650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (15))){
var state_24603__$1 = state_24603;
var statearr_24615_24651 = state_24603__$1;
(statearr_24615_24651[(2)] = null);

(statearr_24615_24651[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (21))){
var state_24603__$1 = state_24603;
var statearr_24616_24652 = state_24603__$1;
(statearr_24616_24652[(2)] = null);

(statearr_24616_24652[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (13))){
var inst_24558 = (state_24603[(8)]);
var inst_24557 = (state_24603[(9)]);
var inst_24556 = (state_24603[(10)]);
var inst_24555 = (state_24603[(12)]);
var inst_24565 = (state_24603[(2)]);
var inst_24566 = (inst_24558 + (1));
var tmp24612 = inst_24557;
var tmp24613 = inst_24556;
var tmp24614 = inst_24555;
var inst_24555__$1 = tmp24614;
var inst_24556__$1 = tmp24613;
var inst_24557__$1 = tmp24612;
var inst_24558__$1 = inst_24566;
var state_24603__$1 = (function (){var statearr_24617 = state_24603;
(statearr_24617[(8)] = inst_24558__$1);

(statearr_24617[(9)] = inst_24557__$1);

(statearr_24617[(14)] = inst_24565);

(statearr_24617[(10)] = inst_24556__$1);

(statearr_24617[(12)] = inst_24555__$1);

return statearr_24617;
})();
var statearr_24618_24653 = state_24603__$1;
(statearr_24618_24653[(2)] = null);

(statearr_24618_24653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (22))){
var state_24603__$1 = state_24603;
var statearr_24619_24654 = state_24603__$1;
(statearr_24619_24654[(2)] = null);

(statearr_24619_24654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (6))){
var inst_24544 = (state_24603[(13)]);
var inst_24553 = f.call(null,inst_24544);
var inst_24554 = cljs.core.seq.call(null,inst_24553);
var inst_24555 = inst_24554;
var inst_24556 = null;
var inst_24557 = (0);
var inst_24558 = (0);
var state_24603__$1 = (function (){var statearr_24620 = state_24603;
(statearr_24620[(8)] = inst_24558);

(statearr_24620[(9)] = inst_24557);

(statearr_24620[(10)] = inst_24556);

(statearr_24620[(12)] = inst_24555);

return statearr_24620;
})();
var statearr_24621_24655 = state_24603__$1;
(statearr_24621_24655[(2)] = null);

(statearr_24621_24655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (17))){
var inst_24569 = (state_24603[(7)]);
var inst_24573 = cljs.core.chunk_first.call(null,inst_24569);
var inst_24574 = cljs.core.chunk_rest.call(null,inst_24569);
var inst_24575 = cljs.core.count.call(null,inst_24573);
var inst_24555 = inst_24574;
var inst_24556 = inst_24573;
var inst_24557 = inst_24575;
var inst_24558 = (0);
var state_24603__$1 = (function (){var statearr_24622 = state_24603;
(statearr_24622[(8)] = inst_24558);

(statearr_24622[(9)] = inst_24557);

(statearr_24622[(10)] = inst_24556);

(statearr_24622[(12)] = inst_24555);

return statearr_24622;
})();
var statearr_24623_24656 = state_24603__$1;
(statearr_24623_24656[(2)] = null);

(statearr_24623_24656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (3))){
var inst_24601 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24603__$1,inst_24601);
} else {
if((state_val_24604 === (12))){
var inst_24589 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
var statearr_24624_24657 = state_24603__$1;
(statearr_24624_24657[(2)] = inst_24589);

(statearr_24624_24657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (2))){
var state_24603__$1 = state_24603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24603__$1,(4),in$);
} else {
if((state_val_24604 === (23))){
var inst_24597 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
var statearr_24625_24658 = state_24603__$1;
(statearr_24625_24658[(2)] = inst_24597);

(statearr_24625_24658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (19))){
var inst_24584 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
var statearr_24626_24659 = state_24603__$1;
(statearr_24626_24659[(2)] = inst_24584);

(statearr_24626_24659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (11))){
var inst_24569 = (state_24603[(7)]);
var inst_24555 = (state_24603[(12)]);
var inst_24569__$1 = cljs.core.seq.call(null,inst_24555);
var state_24603__$1 = (function (){var statearr_24627 = state_24603;
(statearr_24627[(7)] = inst_24569__$1);

return statearr_24627;
})();
if(inst_24569__$1){
var statearr_24628_24660 = state_24603__$1;
(statearr_24628_24660[(1)] = (14));

} else {
var statearr_24629_24661 = state_24603__$1;
(statearr_24629_24661[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (9))){
var inst_24591 = (state_24603[(2)]);
var inst_24592 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24603__$1 = (function (){var statearr_24630 = state_24603;
(statearr_24630[(15)] = inst_24591);

return statearr_24630;
})();
if(cljs.core.truth_(inst_24592)){
var statearr_24631_24662 = state_24603__$1;
(statearr_24631_24662[(1)] = (21));

} else {
var statearr_24632_24663 = state_24603__$1;
(statearr_24632_24663[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (5))){
var inst_24547 = cljs.core.async.close_BANG_.call(null,out);
var state_24603__$1 = state_24603;
var statearr_24633_24664 = state_24603__$1;
(statearr_24633_24664[(2)] = inst_24547);

(statearr_24633_24664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (14))){
var inst_24569 = (state_24603[(7)]);
var inst_24571 = cljs.core.chunked_seq_QMARK_.call(null,inst_24569);
var state_24603__$1 = state_24603;
if(inst_24571){
var statearr_24634_24665 = state_24603__$1;
(statearr_24634_24665[(1)] = (17));

} else {
var statearr_24635_24666 = state_24603__$1;
(statearr_24635_24666[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (16))){
var inst_24587 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
var statearr_24636_24667 = state_24603__$1;
(statearr_24636_24667[(2)] = inst_24587);

(statearr_24636_24667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (10))){
var inst_24558 = (state_24603[(8)]);
var inst_24556 = (state_24603[(10)]);
var inst_24563 = cljs.core._nth.call(null,inst_24556,inst_24558);
var state_24603__$1 = state_24603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24603__$1,(13),out,inst_24563);
} else {
if((state_val_24604 === (18))){
var inst_24569 = (state_24603[(7)]);
var inst_24578 = cljs.core.first.call(null,inst_24569);
var state_24603__$1 = state_24603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24603__$1,(20),out,inst_24578);
} else {
if((state_val_24604 === (8))){
var inst_24558 = (state_24603[(8)]);
var inst_24557 = (state_24603[(9)]);
var inst_24560 = (inst_24558 < inst_24557);
var inst_24561 = inst_24560;
var state_24603__$1 = state_24603;
if(cljs.core.truth_(inst_24561)){
var statearr_24637_24668 = state_24603__$1;
(statearr_24637_24668[(1)] = (10));

} else {
var statearr_24638_24669 = state_24603__$1;
(statearr_24638_24669[(1)] = (11));

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
});})(c__22146__auto__))
;
return ((function (switch__22034__auto__,c__22146__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22035__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22035__auto____0 = (function (){
var statearr_24642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24642[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22035__auto__);

(statearr_24642[(1)] = (1));

return statearr_24642;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22035__auto____1 = (function (state_24603){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_24603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e24643){if((e24643 instanceof Object)){
var ex__22038__auto__ = e24643;
var statearr_24644_24670 = state_24603;
(statearr_24644_24670[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24671 = state_24603;
state_24603 = G__24671;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22035__auto__ = function(state_24603){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22035__auto____1.call(this,state_24603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22035__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22035__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto__))
})();
var state__22148__auto__ = (function (){var statearr_24645 = f__22147__auto__.call(null);
(statearr_24645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto__);

return statearr_24645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto__))
);

return c__22146__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24672 = [];
var len__21029__auto___24675 = arguments.length;
var i__21030__auto___24676 = (0);
while(true){
if((i__21030__auto___24676 < len__21029__auto___24675)){
args24672.push((arguments[i__21030__auto___24676]));

var G__24677 = (i__21030__auto___24676 + (1));
i__21030__auto___24676 = G__24677;
continue;
} else {
}
break;
}

var G__24674 = args24672.length;
switch (G__24674) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24672.length)].join('')));

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
var args24679 = [];
var len__21029__auto___24682 = arguments.length;
var i__21030__auto___24683 = (0);
while(true){
if((i__21030__auto___24683 < len__21029__auto___24682)){
args24679.push((arguments[i__21030__auto___24683]));

var G__24684 = (i__21030__auto___24683 + (1));
i__21030__auto___24683 = G__24684;
continue;
} else {
}
break;
}

var G__24681 = args24679.length;
switch (G__24681) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24679.length)].join('')));

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
var args24686 = [];
var len__21029__auto___24737 = arguments.length;
var i__21030__auto___24738 = (0);
while(true){
if((i__21030__auto___24738 < len__21029__auto___24737)){
args24686.push((arguments[i__21030__auto___24738]));

var G__24739 = (i__21030__auto___24738 + (1));
i__21030__auto___24738 = G__24739;
continue;
} else {
}
break;
}

var G__24688 = args24686.length;
switch (G__24688) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24686.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22146__auto___24741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___24741,out){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___24741,out){
return (function (state_24712){
var state_val_24713 = (state_24712[(1)]);
if((state_val_24713 === (7))){
var inst_24707 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24714_24742 = state_24712__$1;
(statearr_24714_24742[(2)] = inst_24707);

(statearr_24714_24742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (1))){
var inst_24689 = null;
var state_24712__$1 = (function (){var statearr_24715 = state_24712;
(statearr_24715[(7)] = inst_24689);

return statearr_24715;
})();
var statearr_24716_24743 = state_24712__$1;
(statearr_24716_24743[(2)] = null);

(statearr_24716_24743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (4))){
var inst_24692 = (state_24712[(8)]);
var inst_24692__$1 = (state_24712[(2)]);
var inst_24693 = (inst_24692__$1 == null);
var inst_24694 = cljs.core.not.call(null,inst_24693);
var state_24712__$1 = (function (){var statearr_24717 = state_24712;
(statearr_24717[(8)] = inst_24692__$1);

return statearr_24717;
})();
if(inst_24694){
var statearr_24718_24744 = state_24712__$1;
(statearr_24718_24744[(1)] = (5));

} else {
var statearr_24719_24745 = state_24712__$1;
(statearr_24719_24745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (6))){
var state_24712__$1 = state_24712;
var statearr_24720_24746 = state_24712__$1;
(statearr_24720_24746[(2)] = null);

(statearr_24720_24746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (3))){
var inst_24709 = (state_24712[(2)]);
var inst_24710 = cljs.core.async.close_BANG_.call(null,out);
var state_24712__$1 = (function (){var statearr_24721 = state_24712;
(statearr_24721[(9)] = inst_24709);

return statearr_24721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24712__$1,inst_24710);
} else {
if((state_val_24713 === (2))){
var state_24712__$1 = state_24712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24712__$1,(4),ch);
} else {
if((state_val_24713 === (11))){
var inst_24692 = (state_24712[(8)]);
var inst_24701 = (state_24712[(2)]);
var inst_24689 = inst_24692;
var state_24712__$1 = (function (){var statearr_24722 = state_24712;
(statearr_24722[(7)] = inst_24689);

(statearr_24722[(10)] = inst_24701);

return statearr_24722;
})();
var statearr_24723_24747 = state_24712__$1;
(statearr_24723_24747[(2)] = null);

(statearr_24723_24747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (9))){
var inst_24692 = (state_24712[(8)]);
var state_24712__$1 = state_24712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24712__$1,(11),out,inst_24692);
} else {
if((state_val_24713 === (5))){
var inst_24689 = (state_24712[(7)]);
var inst_24692 = (state_24712[(8)]);
var inst_24696 = cljs.core._EQ_.call(null,inst_24692,inst_24689);
var state_24712__$1 = state_24712;
if(inst_24696){
var statearr_24725_24748 = state_24712__$1;
(statearr_24725_24748[(1)] = (8));

} else {
var statearr_24726_24749 = state_24712__$1;
(statearr_24726_24749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (10))){
var inst_24704 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24727_24750 = state_24712__$1;
(statearr_24727_24750[(2)] = inst_24704);

(statearr_24727_24750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (8))){
var inst_24689 = (state_24712[(7)]);
var tmp24724 = inst_24689;
var inst_24689__$1 = tmp24724;
var state_24712__$1 = (function (){var statearr_24728 = state_24712;
(statearr_24728[(7)] = inst_24689__$1);

return statearr_24728;
})();
var statearr_24729_24751 = state_24712__$1;
(statearr_24729_24751[(2)] = null);

(statearr_24729_24751[(1)] = (2));


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
});})(c__22146__auto___24741,out))
;
return ((function (switch__22034__auto__,c__22146__auto___24741,out){
return (function() {
var cljs$core$async$state_machine__22035__auto__ = null;
var cljs$core$async$state_machine__22035__auto____0 = (function (){
var statearr_24733 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24733[(0)] = cljs$core$async$state_machine__22035__auto__);

(statearr_24733[(1)] = (1));

return statearr_24733;
});
var cljs$core$async$state_machine__22035__auto____1 = (function (state_24712){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_24712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e24734){if((e24734 instanceof Object)){
var ex__22038__auto__ = e24734;
var statearr_24735_24752 = state_24712;
(statearr_24735_24752[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24753 = state_24712;
state_24712 = G__24753;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$state_machine__22035__auto__ = function(state_24712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22035__auto____1.call(this,state_24712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22035__auto____0;
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22035__auto____1;
return cljs$core$async$state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___24741,out))
})();
var state__22148__auto__ = (function (){var statearr_24736 = f__22147__auto__.call(null);
(statearr_24736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___24741);

return statearr_24736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___24741,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24754 = [];
var len__21029__auto___24824 = arguments.length;
var i__21030__auto___24825 = (0);
while(true){
if((i__21030__auto___24825 < len__21029__auto___24824)){
args24754.push((arguments[i__21030__auto___24825]));

var G__24826 = (i__21030__auto___24825 + (1));
i__21030__auto___24825 = G__24826;
continue;
} else {
}
break;
}

var G__24756 = args24754.length;
switch (G__24756) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24754.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22146__auto___24828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___24828,out){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___24828,out){
return (function (state_24794){
var state_val_24795 = (state_24794[(1)]);
if((state_val_24795 === (7))){
var inst_24790 = (state_24794[(2)]);
var state_24794__$1 = state_24794;
var statearr_24796_24829 = state_24794__$1;
(statearr_24796_24829[(2)] = inst_24790);

(statearr_24796_24829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24795 === (1))){
var inst_24757 = (new Array(n));
var inst_24758 = inst_24757;
var inst_24759 = (0);
var state_24794__$1 = (function (){var statearr_24797 = state_24794;
(statearr_24797[(7)] = inst_24758);

(statearr_24797[(8)] = inst_24759);

return statearr_24797;
})();
var statearr_24798_24830 = state_24794__$1;
(statearr_24798_24830[(2)] = null);

(statearr_24798_24830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24795 === (4))){
var inst_24762 = (state_24794[(9)]);
var inst_24762__$1 = (state_24794[(2)]);
var inst_24763 = (inst_24762__$1 == null);
var inst_24764 = cljs.core.not.call(null,inst_24763);
var state_24794__$1 = (function (){var statearr_24799 = state_24794;
(statearr_24799[(9)] = inst_24762__$1);

return statearr_24799;
})();
if(inst_24764){
var statearr_24800_24831 = state_24794__$1;
(statearr_24800_24831[(1)] = (5));

} else {
var statearr_24801_24832 = state_24794__$1;
(statearr_24801_24832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24795 === (15))){
var inst_24784 = (state_24794[(2)]);
var state_24794__$1 = state_24794;
var statearr_24802_24833 = state_24794__$1;
(statearr_24802_24833[(2)] = inst_24784);

(statearr_24802_24833[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24795 === (13))){
var state_24794__$1 = state_24794;
var statearr_24803_24834 = state_24794__$1;
(statearr_24803_24834[(2)] = null);

(statearr_24803_24834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24795 === (6))){
var inst_24759 = (state_24794[(8)]);
var inst_24780 = (inst_24759 > (0));
var state_24794__$1 = state_24794;
if(cljs.core.truth_(inst_24780)){
var statearr_24804_24835 = state_24794__$1;
(statearr_24804_24835[(1)] = (12));

} else {
var statearr_24805_24836 = state_24794__$1;
(statearr_24805_24836[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24795 === (3))){
var inst_24792 = (state_24794[(2)]);
var state_24794__$1 = state_24794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24794__$1,inst_24792);
} else {
if((state_val_24795 === (12))){
var inst_24758 = (state_24794[(7)]);
var inst_24782 = cljs.core.vec.call(null,inst_24758);
var state_24794__$1 = state_24794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24794__$1,(15),out,inst_24782);
} else {
if((state_val_24795 === (2))){
var state_24794__$1 = state_24794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24794__$1,(4),ch);
} else {
if((state_val_24795 === (11))){
var inst_24774 = (state_24794[(2)]);
var inst_24775 = (new Array(n));
var inst_24758 = inst_24775;
var inst_24759 = (0);
var state_24794__$1 = (function (){var statearr_24806 = state_24794;
(statearr_24806[(7)] = inst_24758);

(statearr_24806[(8)] = inst_24759);

(statearr_24806[(10)] = inst_24774);

return statearr_24806;
})();
var statearr_24807_24837 = state_24794__$1;
(statearr_24807_24837[(2)] = null);

(statearr_24807_24837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24795 === (9))){
var inst_24758 = (state_24794[(7)]);
var inst_24772 = cljs.core.vec.call(null,inst_24758);
var state_24794__$1 = state_24794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24794__$1,(11),out,inst_24772);
} else {
if((state_val_24795 === (5))){
var inst_24758 = (state_24794[(7)]);
var inst_24759 = (state_24794[(8)]);
var inst_24762 = (state_24794[(9)]);
var inst_24767 = (state_24794[(11)]);
var inst_24766 = (inst_24758[inst_24759] = inst_24762);
var inst_24767__$1 = (inst_24759 + (1));
var inst_24768 = (inst_24767__$1 < n);
var state_24794__$1 = (function (){var statearr_24808 = state_24794;
(statearr_24808[(12)] = inst_24766);

(statearr_24808[(11)] = inst_24767__$1);

return statearr_24808;
})();
if(cljs.core.truth_(inst_24768)){
var statearr_24809_24838 = state_24794__$1;
(statearr_24809_24838[(1)] = (8));

} else {
var statearr_24810_24839 = state_24794__$1;
(statearr_24810_24839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24795 === (14))){
var inst_24787 = (state_24794[(2)]);
var inst_24788 = cljs.core.async.close_BANG_.call(null,out);
var state_24794__$1 = (function (){var statearr_24812 = state_24794;
(statearr_24812[(13)] = inst_24787);

return statearr_24812;
})();
var statearr_24813_24840 = state_24794__$1;
(statearr_24813_24840[(2)] = inst_24788);

(statearr_24813_24840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24795 === (10))){
var inst_24778 = (state_24794[(2)]);
var state_24794__$1 = state_24794;
var statearr_24814_24841 = state_24794__$1;
(statearr_24814_24841[(2)] = inst_24778);

(statearr_24814_24841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24795 === (8))){
var inst_24758 = (state_24794[(7)]);
var inst_24767 = (state_24794[(11)]);
var tmp24811 = inst_24758;
var inst_24758__$1 = tmp24811;
var inst_24759 = inst_24767;
var state_24794__$1 = (function (){var statearr_24815 = state_24794;
(statearr_24815[(7)] = inst_24758__$1);

(statearr_24815[(8)] = inst_24759);

return statearr_24815;
})();
var statearr_24816_24842 = state_24794__$1;
(statearr_24816_24842[(2)] = null);

(statearr_24816_24842[(1)] = (2));


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
});})(c__22146__auto___24828,out))
;
return ((function (switch__22034__auto__,c__22146__auto___24828,out){
return (function() {
var cljs$core$async$state_machine__22035__auto__ = null;
var cljs$core$async$state_machine__22035__auto____0 = (function (){
var statearr_24820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24820[(0)] = cljs$core$async$state_machine__22035__auto__);

(statearr_24820[(1)] = (1));

return statearr_24820;
});
var cljs$core$async$state_machine__22035__auto____1 = (function (state_24794){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_24794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e24821){if((e24821 instanceof Object)){
var ex__22038__auto__ = e24821;
var statearr_24822_24843 = state_24794;
(statearr_24822_24843[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24844 = state_24794;
state_24794 = G__24844;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$state_machine__22035__auto__ = function(state_24794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22035__auto____1.call(this,state_24794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22035__auto____0;
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22035__auto____1;
return cljs$core$async$state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___24828,out))
})();
var state__22148__auto__ = (function (){var statearr_24823 = f__22147__auto__.call(null);
(statearr_24823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___24828);

return statearr_24823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___24828,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24845 = [];
var len__21029__auto___24919 = arguments.length;
var i__21030__auto___24920 = (0);
while(true){
if((i__21030__auto___24920 < len__21029__auto___24919)){
args24845.push((arguments[i__21030__auto___24920]));

var G__24921 = (i__21030__auto___24920 + (1));
i__21030__auto___24920 = G__24921;
continue;
} else {
}
break;
}

var G__24847 = args24845.length;
switch (G__24847) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24845.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22146__auto___24923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___24923,out){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___24923,out){
return (function (state_24889){
var state_val_24890 = (state_24889[(1)]);
if((state_val_24890 === (7))){
var inst_24885 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
var statearr_24891_24924 = state_24889__$1;
(statearr_24891_24924[(2)] = inst_24885);

(statearr_24891_24924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (1))){
var inst_24848 = [];
var inst_24849 = inst_24848;
var inst_24850 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24889__$1 = (function (){var statearr_24892 = state_24889;
(statearr_24892[(7)] = inst_24849);

(statearr_24892[(8)] = inst_24850);

return statearr_24892;
})();
var statearr_24893_24925 = state_24889__$1;
(statearr_24893_24925[(2)] = null);

(statearr_24893_24925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (4))){
var inst_24853 = (state_24889[(9)]);
var inst_24853__$1 = (state_24889[(2)]);
var inst_24854 = (inst_24853__$1 == null);
var inst_24855 = cljs.core.not.call(null,inst_24854);
var state_24889__$1 = (function (){var statearr_24894 = state_24889;
(statearr_24894[(9)] = inst_24853__$1);

return statearr_24894;
})();
if(inst_24855){
var statearr_24895_24926 = state_24889__$1;
(statearr_24895_24926[(1)] = (5));

} else {
var statearr_24896_24927 = state_24889__$1;
(statearr_24896_24927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (15))){
var inst_24879 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
var statearr_24897_24928 = state_24889__$1;
(statearr_24897_24928[(2)] = inst_24879);

(statearr_24897_24928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (13))){
var state_24889__$1 = state_24889;
var statearr_24898_24929 = state_24889__$1;
(statearr_24898_24929[(2)] = null);

(statearr_24898_24929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (6))){
var inst_24849 = (state_24889[(7)]);
var inst_24874 = inst_24849.length;
var inst_24875 = (inst_24874 > (0));
var state_24889__$1 = state_24889;
if(cljs.core.truth_(inst_24875)){
var statearr_24899_24930 = state_24889__$1;
(statearr_24899_24930[(1)] = (12));

} else {
var statearr_24900_24931 = state_24889__$1;
(statearr_24900_24931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (3))){
var inst_24887 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24889__$1,inst_24887);
} else {
if((state_val_24890 === (12))){
var inst_24849 = (state_24889[(7)]);
var inst_24877 = cljs.core.vec.call(null,inst_24849);
var state_24889__$1 = state_24889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24889__$1,(15),out,inst_24877);
} else {
if((state_val_24890 === (2))){
var state_24889__$1 = state_24889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24889__$1,(4),ch);
} else {
if((state_val_24890 === (11))){
var inst_24853 = (state_24889[(9)]);
var inst_24857 = (state_24889[(10)]);
var inst_24867 = (state_24889[(2)]);
var inst_24868 = [];
var inst_24869 = inst_24868.push(inst_24853);
var inst_24849 = inst_24868;
var inst_24850 = inst_24857;
var state_24889__$1 = (function (){var statearr_24901 = state_24889;
(statearr_24901[(11)] = inst_24867);

(statearr_24901[(12)] = inst_24869);

(statearr_24901[(7)] = inst_24849);

(statearr_24901[(8)] = inst_24850);

return statearr_24901;
})();
var statearr_24902_24932 = state_24889__$1;
(statearr_24902_24932[(2)] = null);

(statearr_24902_24932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (9))){
var inst_24849 = (state_24889[(7)]);
var inst_24865 = cljs.core.vec.call(null,inst_24849);
var state_24889__$1 = state_24889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24889__$1,(11),out,inst_24865);
} else {
if((state_val_24890 === (5))){
var inst_24853 = (state_24889[(9)]);
var inst_24857 = (state_24889[(10)]);
var inst_24850 = (state_24889[(8)]);
var inst_24857__$1 = f.call(null,inst_24853);
var inst_24858 = cljs.core._EQ_.call(null,inst_24857__$1,inst_24850);
var inst_24859 = cljs.core.keyword_identical_QMARK_.call(null,inst_24850,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24860 = (inst_24858) || (inst_24859);
var state_24889__$1 = (function (){var statearr_24903 = state_24889;
(statearr_24903[(10)] = inst_24857__$1);

return statearr_24903;
})();
if(cljs.core.truth_(inst_24860)){
var statearr_24904_24933 = state_24889__$1;
(statearr_24904_24933[(1)] = (8));

} else {
var statearr_24905_24934 = state_24889__$1;
(statearr_24905_24934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (14))){
var inst_24882 = (state_24889[(2)]);
var inst_24883 = cljs.core.async.close_BANG_.call(null,out);
var state_24889__$1 = (function (){var statearr_24907 = state_24889;
(statearr_24907[(13)] = inst_24882);

return statearr_24907;
})();
var statearr_24908_24935 = state_24889__$1;
(statearr_24908_24935[(2)] = inst_24883);

(statearr_24908_24935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (10))){
var inst_24872 = (state_24889[(2)]);
var state_24889__$1 = state_24889;
var statearr_24909_24936 = state_24889__$1;
(statearr_24909_24936[(2)] = inst_24872);

(statearr_24909_24936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24890 === (8))){
var inst_24853 = (state_24889[(9)]);
var inst_24857 = (state_24889[(10)]);
var inst_24849 = (state_24889[(7)]);
var inst_24862 = inst_24849.push(inst_24853);
var tmp24906 = inst_24849;
var inst_24849__$1 = tmp24906;
var inst_24850 = inst_24857;
var state_24889__$1 = (function (){var statearr_24910 = state_24889;
(statearr_24910[(7)] = inst_24849__$1);

(statearr_24910[(8)] = inst_24850);

(statearr_24910[(14)] = inst_24862);

return statearr_24910;
})();
var statearr_24911_24937 = state_24889__$1;
(statearr_24911_24937[(2)] = null);

(statearr_24911_24937[(1)] = (2));


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
});})(c__22146__auto___24923,out))
;
return ((function (switch__22034__auto__,c__22146__auto___24923,out){
return (function() {
var cljs$core$async$state_machine__22035__auto__ = null;
var cljs$core$async$state_machine__22035__auto____0 = (function (){
var statearr_24915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24915[(0)] = cljs$core$async$state_machine__22035__auto__);

(statearr_24915[(1)] = (1));

return statearr_24915;
});
var cljs$core$async$state_machine__22035__auto____1 = (function (state_24889){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_24889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e24916){if((e24916 instanceof Object)){
var ex__22038__auto__ = e24916;
var statearr_24917_24938 = state_24889;
(statearr_24917_24938[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24939 = state_24889;
state_24889 = G__24939;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
cljs$core$async$state_machine__22035__auto__ = function(state_24889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22035__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22035__auto____1.call(this,state_24889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22035__auto____0;
cljs$core$async$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22035__auto____1;
return cljs$core$async$state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___24923,out))
})();
var state__22148__auto__ = (function (){var statearr_24918 = f__22147__auto__.call(null);
(statearr_24918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___24923);

return statearr_24918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___24923,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1468882707602