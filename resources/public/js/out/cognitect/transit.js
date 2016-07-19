// Compiled by ClojureScript 1.9.89 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__21151_21155 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__21152_21156 = null;
var count__21153_21157 = (0);
var i__21154_21158 = (0);
while(true){
if((i__21154_21158 < count__21153_21157)){
var k_21159 = cljs.core._nth.call(null,chunk__21152_21156,i__21154_21158);
var v_21160 = (b[k_21159]);
(a[k_21159] = v_21160);

var G__21161 = seq__21151_21155;
var G__21162 = chunk__21152_21156;
var G__21163 = count__21153_21157;
var G__21164 = (i__21154_21158 + (1));
seq__21151_21155 = G__21161;
chunk__21152_21156 = G__21162;
count__21153_21157 = G__21163;
i__21154_21158 = G__21164;
continue;
} else {
var temp__4657__auto___21165 = cljs.core.seq.call(null,seq__21151_21155);
if(temp__4657__auto___21165){
var seq__21151_21166__$1 = temp__4657__auto___21165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21151_21166__$1)){
var c__20765__auto___21167 = cljs.core.chunk_first.call(null,seq__21151_21166__$1);
var G__21168 = cljs.core.chunk_rest.call(null,seq__21151_21166__$1);
var G__21169 = c__20765__auto___21167;
var G__21170 = cljs.core.count.call(null,c__20765__auto___21167);
var G__21171 = (0);
seq__21151_21155 = G__21168;
chunk__21152_21156 = G__21169;
count__21153_21157 = G__21170;
i__21154_21158 = G__21171;
continue;
} else {
var k_21172 = cljs.core.first.call(null,seq__21151_21166__$1);
var v_21173 = (b[k_21172]);
(a[k_21172] = v_21173);

var G__21174 = cljs.core.next.call(null,seq__21151_21166__$1);
var G__21175 = null;
var G__21176 = (0);
var G__21177 = (0);
seq__21151_21155 = G__21174;
chunk__21152_21156 = G__21175;
count__21153_21157 = G__21176;
i__21154_21158 = G__21177;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args21178 = [];
var len__21029__auto___21181 = arguments.length;
var i__21030__auto___21182 = (0);
while(true){
if((i__21030__auto___21182 < len__21029__auto___21181)){
args21178.push((arguments[i__21030__auto___21182]));

var G__21183 = (i__21030__auto___21182 + (1));
i__21030__auto___21182 = G__21183;
continue;
} else {
}
break;
}

var G__21180 = args21178.length;
switch (G__21180) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21178.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__21185 = (i + (2));
var G__21186 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__21185;
ret = G__21186;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21187_21191 = cljs.core.seq.call(null,v);
var chunk__21188_21192 = null;
var count__21189_21193 = (0);
var i__21190_21194 = (0);
while(true){
if((i__21190_21194 < count__21189_21193)){
var x_21195 = cljs.core._nth.call(null,chunk__21188_21192,i__21190_21194);
ret.push(x_21195);

var G__21196 = seq__21187_21191;
var G__21197 = chunk__21188_21192;
var G__21198 = count__21189_21193;
var G__21199 = (i__21190_21194 + (1));
seq__21187_21191 = G__21196;
chunk__21188_21192 = G__21197;
count__21189_21193 = G__21198;
i__21190_21194 = G__21199;
continue;
} else {
var temp__4657__auto___21200 = cljs.core.seq.call(null,seq__21187_21191);
if(temp__4657__auto___21200){
var seq__21187_21201__$1 = temp__4657__auto___21200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21187_21201__$1)){
var c__20765__auto___21202 = cljs.core.chunk_first.call(null,seq__21187_21201__$1);
var G__21203 = cljs.core.chunk_rest.call(null,seq__21187_21201__$1);
var G__21204 = c__20765__auto___21202;
var G__21205 = cljs.core.count.call(null,c__20765__auto___21202);
var G__21206 = (0);
seq__21187_21191 = G__21203;
chunk__21188_21192 = G__21204;
count__21189_21193 = G__21205;
i__21190_21194 = G__21206;
continue;
} else {
var x_21207 = cljs.core.first.call(null,seq__21187_21201__$1);
ret.push(x_21207);

var G__21208 = cljs.core.next.call(null,seq__21187_21201__$1);
var G__21209 = null;
var G__21210 = (0);
var G__21211 = (0);
seq__21187_21191 = G__21208;
chunk__21188_21192 = G__21209;
count__21189_21193 = G__21210;
i__21190_21194 = G__21211;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21212_21216 = cljs.core.seq.call(null,v);
var chunk__21213_21217 = null;
var count__21214_21218 = (0);
var i__21215_21219 = (0);
while(true){
if((i__21215_21219 < count__21214_21218)){
var x_21220 = cljs.core._nth.call(null,chunk__21213_21217,i__21215_21219);
ret.push(x_21220);

var G__21221 = seq__21212_21216;
var G__21222 = chunk__21213_21217;
var G__21223 = count__21214_21218;
var G__21224 = (i__21215_21219 + (1));
seq__21212_21216 = G__21221;
chunk__21213_21217 = G__21222;
count__21214_21218 = G__21223;
i__21215_21219 = G__21224;
continue;
} else {
var temp__4657__auto___21225 = cljs.core.seq.call(null,seq__21212_21216);
if(temp__4657__auto___21225){
var seq__21212_21226__$1 = temp__4657__auto___21225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21212_21226__$1)){
var c__20765__auto___21227 = cljs.core.chunk_first.call(null,seq__21212_21226__$1);
var G__21228 = cljs.core.chunk_rest.call(null,seq__21212_21226__$1);
var G__21229 = c__20765__auto___21227;
var G__21230 = cljs.core.count.call(null,c__20765__auto___21227);
var G__21231 = (0);
seq__21212_21216 = G__21228;
chunk__21213_21217 = G__21229;
count__21214_21218 = G__21230;
i__21215_21219 = G__21231;
continue;
} else {
var x_21232 = cljs.core.first.call(null,seq__21212_21226__$1);
ret.push(x_21232);

var G__21233 = cljs.core.next.call(null,seq__21212_21226__$1);
var G__21234 = null;
var G__21235 = (0);
var G__21236 = (0);
seq__21212_21216 = G__21233;
chunk__21213_21217 = G__21234;
count__21214_21218 = G__21235;
i__21215_21219 = G__21236;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21237_21241 = cljs.core.seq.call(null,v);
var chunk__21238_21242 = null;
var count__21239_21243 = (0);
var i__21240_21244 = (0);
while(true){
if((i__21240_21244 < count__21239_21243)){
var x_21245 = cljs.core._nth.call(null,chunk__21238_21242,i__21240_21244);
ret.push(x_21245);

var G__21246 = seq__21237_21241;
var G__21247 = chunk__21238_21242;
var G__21248 = count__21239_21243;
var G__21249 = (i__21240_21244 + (1));
seq__21237_21241 = G__21246;
chunk__21238_21242 = G__21247;
count__21239_21243 = G__21248;
i__21240_21244 = G__21249;
continue;
} else {
var temp__4657__auto___21250 = cljs.core.seq.call(null,seq__21237_21241);
if(temp__4657__auto___21250){
var seq__21237_21251__$1 = temp__4657__auto___21250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21237_21251__$1)){
var c__20765__auto___21252 = cljs.core.chunk_first.call(null,seq__21237_21251__$1);
var G__21253 = cljs.core.chunk_rest.call(null,seq__21237_21251__$1);
var G__21254 = c__20765__auto___21252;
var G__21255 = cljs.core.count.call(null,c__20765__auto___21252);
var G__21256 = (0);
seq__21237_21241 = G__21253;
chunk__21238_21242 = G__21254;
count__21239_21243 = G__21255;
i__21240_21244 = G__21256;
continue;
} else {
var x_21257 = cljs.core.first.call(null,seq__21237_21251__$1);
ret.push(x_21257);

var G__21258 = cljs.core.next.call(null,seq__21237_21251__$1);
var G__21259 = null;
var G__21260 = (0);
var G__21261 = (0);
seq__21237_21241 = G__21258;
chunk__21238_21242 = G__21259;
count__21239_21243 = G__21260;
i__21240_21244 = G__21261;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args21262 = [];
var len__21029__auto___21277 = arguments.length;
var i__21030__auto___21278 = (0);
while(true){
if((i__21030__auto___21278 < len__21029__auto___21277)){
args21262.push((arguments[i__21030__auto___21278]));

var G__21279 = (i__21030__auto___21278 + (1));
i__21030__auto___21278 = G__21279;
continue;
} else {
}
break;
}

var G__21264 = args21262.length;
switch (G__21264) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21262.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__21265 = obj;
G__21265.push(kfn.call(null,k),vfn.call(null,v));

return G__21265;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x21266 = cljs.core.clone.call(null,handlers);
x21266.forEach = ((function (x21266,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__21267 = cljs.core.seq.call(null,coll);
var chunk__21268 = null;
var count__21269 = (0);
var i__21270 = (0);
while(true){
if((i__21270 < count__21269)){
var vec__21271 = cljs.core._nth.call(null,chunk__21268,i__21270);
var k = cljs.core.nth.call(null,vec__21271,(0),null);
var v = cljs.core.nth.call(null,vec__21271,(1),null);
f.call(null,v,k);

var G__21281 = seq__21267;
var G__21282 = chunk__21268;
var G__21283 = count__21269;
var G__21284 = (i__21270 + (1));
seq__21267 = G__21281;
chunk__21268 = G__21282;
count__21269 = G__21283;
i__21270 = G__21284;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21267);
if(temp__4657__auto__){
var seq__21267__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21267__$1)){
var c__20765__auto__ = cljs.core.chunk_first.call(null,seq__21267__$1);
var G__21285 = cljs.core.chunk_rest.call(null,seq__21267__$1);
var G__21286 = c__20765__auto__;
var G__21287 = cljs.core.count.call(null,c__20765__auto__);
var G__21288 = (0);
seq__21267 = G__21285;
chunk__21268 = G__21286;
count__21269 = G__21287;
i__21270 = G__21288;
continue;
} else {
var vec__21274 = cljs.core.first.call(null,seq__21267__$1);
var k = cljs.core.nth.call(null,vec__21274,(0),null);
var v = cljs.core.nth.call(null,vec__21274,(1),null);
f.call(null,v,k);

var G__21289 = cljs.core.next.call(null,seq__21267__$1);
var G__21290 = null;
var G__21291 = (0);
var G__21292 = (0);
seq__21267 = G__21289;
chunk__21268 = G__21290;
count__21269 = G__21291;
i__21270 = G__21292;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21266,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x21266;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args21293 = [];
var len__21029__auto___21299 = arguments.length;
var i__21030__auto___21300 = (0);
while(true){
if((i__21030__auto___21300 < len__21029__auto___21299)){
args21293.push((arguments[i__21030__auto___21300]));

var G__21301 = (i__21030__auto___21300 + (1));
i__21030__auto___21300 = G__21301;
continue;
} else {
}
break;
}

var G__21295 = args21293.length;
switch (G__21295) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21293.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit21296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit21296 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta21297){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta21297 = meta21297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit21296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21298,meta21297__$1){
var self__ = this;
var _21298__$1 = this;
return (new cognitect.transit.t_cognitect$transit21296(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta21297__$1));
});

cognitect.transit.t_cognitect$transit21296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21298){
var self__ = this;
var _21298__$1 = this;
return self__.meta21297;
});

cognitect.transit.t_cognitect$transit21296.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit21296.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit21296.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit21296.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit21296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta21297","meta21297",-1401751559,null)], null);
});

cognitect.transit.t_cognitect$transit21296.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit21296.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit21296";

cognitect.transit.t_cognitect$transit21296.cljs$lang$ctorPrWriter = (function (this__20560__auto__,writer__20561__auto__,opt__20562__auto__){
return cljs.core._write.call(null,writer__20561__auto__,"cognitect.transit/t_cognitect$transit21296");
});

cognitect.transit.__GT_t_cognitect$transit21296 = (function cognitect$transit$__GT_t_cognitect$transit21296(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta21297){
return (new cognitect.transit.t_cognitect$transit21296(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta21297));
});

}

return (new cognitect.transit.t_cognitect$transit21296(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__19954__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1468892817281