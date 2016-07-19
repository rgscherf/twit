// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19954__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19954__auto__){
return or__19954__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19954__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25123_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25123_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25128 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25129 = null;
var count__25130 = (0);
var i__25131 = (0);
while(true){
if((i__25131 < count__25130)){
var n = cljs.core._nth.call(null,chunk__25129,i__25131);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25132 = seq__25128;
var G__25133 = chunk__25129;
var G__25134 = count__25130;
var G__25135 = (i__25131 + (1));
seq__25128 = G__25132;
chunk__25129 = G__25133;
count__25130 = G__25134;
i__25131 = G__25135;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25128);
if(temp__4657__auto__){
var seq__25128__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25128__$1)){
var c__20765__auto__ = cljs.core.chunk_first.call(null,seq__25128__$1);
var G__25136 = cljs.core.chunk_rest.call(null,seq__25128__$1);
var G__25137 = c__20765__auto__;
var G__25138 = cljs.core.count.call(null,c__20765__auto__);
var G__25139 = (0);
seq__25128 = G__25136;
chunk__25129 = G__25137;
count__25130 = G__25138;
i__25131 = G__25139;
continue;
} else {
var n = cljs.core.first.call(null,seq__25128__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25140 = cljs.core.next.call(null,seq__25128__$1);
var G__25141 = null;
var G__25142 = (0);
var G__25143 = (0);
seq__25128 = G__25140;
chunk__25129 = G__25141;
count__25130 = G__25142;
i__25131 = G__25143;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25194_25205 = cljs.core.seq.call(null,deps);
var chunk__25195_25206 = null;
var count__25196_25207 = (0);
var i__25197_25208 = (0);
while(true){
if((i__25197_25208 < count__25196_25207)){
var dep_25209 = cljs.core._nth.call(null,chunk__25195_25206,i__25197_25208);
topo_sort_helper_STAR_.call(null,dep_25209,(depth + (1)),state);

var G__25210 = seq__25194_25205;
var G__25211 = chunk__25195_25206;
var G__25212 = count__25196_25207;
var G__25213 = (i__25197_25208 + (1));
seq__25194_25205 = G__25210;
chunk__25195_25206 = G__25211;
count__25196_25207 = G__25212;
i__25197_25208 = G__25213;
continue;
} else {
var temp__4657__auto___25214 = cljs.core.seq.call(null,seq__25194_25205);
if(temp__4657__auto___25214){
var seq__25194_25215__$1 = temp__4657__auto___25214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25194_25215__$1)){
var c__20765__auto___25216 = cljs.core.chunk_first.call(null,seq__25194_25215__$1);
var G__25217 = cljs.core.chunk_rest.call(null,seq__25194_25215__$1);
var G__25218 = c__20765__auto___25216;
var G__25219 = cljs.core.count.call(null,c__20765__auto___25216);
var G__25220 = (0);
seq__25194_25205 = G__25217;
chunk__25195_25206 = G__25218;
count__25196_25207 = G__25219;
i__25197_25208 = G__25220;
continue;
} else {
var dep_25221 = cljs.core.first.call(null,seq__25194_25215__$1);
topo_sort_helper_STAR_.call(null,dep_25221,(depth + (1)),state);

var G__25222 = cljs.core.next.call(null,seq__25194_25215__$1);
var G__25223 = null;
var G__25224 = (0);
var G__25225 = (0);
seq__25194_25205 = G__25222;
chunk__25195_25206 = G__25223;
count__25196_25207 = G__25224;
i__25197_25208 = G__25225;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25198){
var vec__25202 = p__25198;
var seq__25203 = cljs.core.seq.call(null,vec__25202);
var first__25204 = cljs.core.first.call(null,seq__25203);
var seq__25203__$1 = cljs.core.next.call(null,seq__25203);
var x = first__25204;
var xs = seq__25203__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25202,seq__25203,first__25204,seq__25203__$1,x,xs,get_deps__$1){
return (function (p1__25144_SHARP_){
return clojure.set.difference.call(null,p1__25144_SHARP_,x);
});})(vec__25202,seq__25203,first__25204,seq__25203__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25238 = cljs.core.seq.call(null,provides);
var chunk__25239 = null;
var count__25240 = (0);
var i__25241 = (0);
while(true){
if((i__25241 < count__25240)){
var prov = cljs.core._nth.call(null,chunk__25239,i__25241);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25242_25250 = cljs.core.seq.call(null,requires);
var chunk__25243_25251 = null;
var count__25244_25252 = (0);
var i__25245_25253 = (0);
while(true){
if((i__25245_25253 < count__25244_25252)){
var req_25254 = cljs.core._nth.call(null,chunk__25243_25251,i__25245_25253);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25254,prov);

var G__25255 = seq__25242_25250;
var G__25256 = chunk__25243_25251;
var G__25257 = count__25244_25252;
var G__25258 = (i__25245_25253 + (1));
seq__25242_25250 = G__25255;
chunk__25243_25251 = G__25256;
count__25244_25252 = G__25257;
i__25245_25253 = G__25258;
continue;
} else {
var temp__4657__auto___25259 = cljs.core.seq.call(null,seq__25242_25250);
if(temp__4657__auto___25259){
var seq__25242_25260__$1 = temp__4657__auto___25259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25242_25260__$1)){
var c__20765__auto___25261 = cljs.core.chunk_first.call(null,seq__25242_25260__$1);
var G__25262 = cljs.core.chunk_rest.call(null,seq__25242_25260__$1);
var G__25263 = c__20765__auto___25261;
var G__25264 = cljs.core.count.call(null,c__20765__auto___25261);
var G__25265 = (0);
seq__25242_25250 = G__25262;
chunk__25243_25251 = G__25263;
count__25244_25252 = G__25264;
i__25245_25253 = G__25265;
continue;
} else {
var req_25266 = cljs.core.first.call(null,seq__25242_25260__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25266,prov);

var G__25267 = cljs.core.next.call(null,seq__25242_25260__$1);
var G__25268 = null;
var G__25269 = (0);
var G__25270 = (0);
seq__25242_25250 = G__25267;
chunk__25243_25251 = G__25268;
count__25244_25252 = G__25269;
i__25245_25253 = G__25270;
continue;
}
} else {
}
}
break;
}

var G__25271 = seq__25238;
var G__25272 = chunk__25239;
var G__25273 = count__25240;
var G__25274 = (i__25241 + (1));
seq__25238 = G__25271;
chunk__25239 = G__25272;
count__25240 = G__25273;
i__25241 = G__25274;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25238);
if(temp__4657__auto__){
var seq__25238__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25238__$1)){
var c__20765__auto__ = cljs.core.chunk_first.call(null,seq__25238__$1);
var G__25275 = cljs.core.chunk_rest.call(null,seq__25238__$1);
var G__25276 = c__20765__auto__;
var G__25277 = cljs.core.count.call(null,c__20765__auto__);
var G__25278 = (0);
seq__25238 = G__25275;
chunk__25239 = G__25276;
count__25240 = G__25277;
i__25241 = G__25278;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25238__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25246_25279 = cljs.core.seq.call(null,requires);
var chunk__25247_25280 = null;
var count__25248_25281 = (0);
var i__25249_25282 = (0);
while(true){
if((i__25249_25282 < count__25248_25281)){
var req_25283 = cljs.core._nth.call(null,chunk__25247_25280,i__25249_25282);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25283,prov);

var G__25284 = seq__25246_25279;
var G__25285 = chunk__25247_25280;
var G__25286 = count__25248_25281;
var G__25287 = (i__25249_25282 + (1));
seq__25246_25279 = G__25284;
chunk__25247_25280 = G__25285;
count__25248_25281 = G__25286;
i__25249_25282 = G__25287;
continue;
} else {
var temp__4657__auto___25288__$1 = cljs.core.seq.call(null,seq__25246_25279);
if(temp__4657__auto___25288__$1){
var seq__25246_25289__$1 = temp__4657__auto___25288__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25246_25289__$1)){
var c__20765__auto___25290 = cljs.core.chunk_first.call(null,seq__25246_25289__$1);
var G__25291 = cljs.core.chunk_rest.call(null,seq__25246_25289__$1);
var G__25292 = c__20765__auto___25290;
var G__25293 = cljs.core.count.call(null,c__20765__auto___25290);
var G__25294 = (0);
seq__25246_25279 = G__25291;
chunk__25247_25280 = G__25292;
count__25248_25281 = G__25293;
i__25249_25282 = G__25294;
continue;
} else {
var req_25295 = cljs.core.first.call(null,seq__25246_25289__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25295,prov);

var G__25296 = cljs.core.next.call(null,seq__25246_25289__$1);
var G__25297 = null;
var G__25298 = (0);
var G__25299 = (0);
seq__25246_25279 = G__25296;
chunk__25247_25280 = G__25297;
count__25248_25281 = G__25298;
i__25249_25282 = G__25299;
continue;
}
} else {
}
}
break;
}

var G__25300 = cljs.core.next.call(null,seq__25238__$1);
var G__25301 = null;
var G__25302 = (0);
var G__25303 = (0);
seq__25238 = G__25300;
chunk__25239 = G__25301;
count__25240 = G__25302;
i__25241 = G__25303;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25308_25312 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25309_25313 = null;
var count__25310_25314 = (0);
var i__25311_25315 = (0);
while(true){
if((i__25311_25315 < count__25310_25314)){
var ns_25316 = cljs.core._nth.call(null,chunk__25309_25313,i__25311_25315);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25316);

var G__25317 = seq__25308_25312;
var G__25318 = chunk__25309_25313;
var G__25319 = count__25310_25314;
var G__25320 = (i__25311_25315 + (1));
seq__25308_25312 = G__25317;
chunk__25309_25313 = G__25318;
count__25310_25314 = G__25319;
i__25311_25315 = G__25320;
continue;
} else {
var temp__4657__auto___25321 = cljs.core.seq.call(null,seq__25308_25312);
if(temp__4657__auto___25321){
var seq__25308_25322__$1 = temp__4657__auto___25321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25308_25322__$1)){
var c__20765__auto___25323 = cljs.core.chunk_first.call(null,seq__25308_25322__$1);
var G__25324 = cljs.core.chunk_rest.call(null,seq__25308_25322__$1);
var G__25325 = c__20765__auto___25323;
var G__25326 = cljs.core.count.call(null,c__20765__auto___25323);
var G__25327 = (0);
seq__25308_25312 = G__25324;
chunk__25309_25313 = G__25325;
count__25310_25314 = G__25326;
i__25311_25315 = G__25327;
continue;
} else {
var ns_25328 = cljs.core.first.call(null,seq__25308_25322__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25328);

var G__25329 = cljs.core.next.call(null,seq__25308_25322__$1);
var G__25330 = null;
var G__25331 = (0);
var G__25332 = (0);
seq__25308_25312 = G__25329;
chunk__25309_25313 = G__25330;
count__25310_25314 = G__25331;
i__25311_25315 = G__25332;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19954__auto__ = goog.require__;
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25333__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25334__i = 0, G__25334__a = new Array(arguments.length -  0);
while (G__25334__i < G__25334__a.length) {G__25334__a[G__25334__i] = arguments[G__25334__i + 0]; ++G__25334__i;}
  args = new cljs.core.IndexedSeq(G__25334__a,0);
} 
return G__25333__delegate.call(this,args);};
G__25333.cljs$lang$maxFixedArity = 0;
G__25333.cljs$lang$applyTo = (function (arglist__25335){
var args = cljs.core.seq(arglist__25335);
return G__25333__delegate(args);
});
G__25333.cljs$core$IFn$_invoke$arity$variadic = G__25333__delegate;
return G__25333;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25337 = cljs.core._EQ_;
var expr__25338 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25337.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25338))){
var path_parts = ((function (pred__25337,expr__25338){
return (function (p1__25336_SHARP_){
return clojure.string.split.call(null,p1__25336_SHARP_,/[\/\\]/);
});})(pred__25337,expr__25338))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25337,expr__25338){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25340){if((e25340 instanceof Error)){
var e = e25340;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25340;

}
}})());
});
;})(path_parts,sep,root,pred__25337,expr__25338))
} else {
if(cljs.core.truth_(pred__25337.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25338))){
return ((function (pred__25337,expr__25338){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25337,expr__25338){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25337,expr__25338))
);

return deferred.addErrback(((function (deferred,pred__25337,expr__25338){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25337,expr__25338))
);
});
;})(pred__25337,expr__25338))
} else {
return ((function (pred__25337,expr__25338){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25337,expr__25338))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25341,callback){
var map__25344 = p__25341;
var map__25344__$1 = ((((!((map__25344 == null)))?((((map__25344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25344):map__25344);
var file_msg = map__25344__$1;
var request_url = cljs.core.get.call(null,map__25344__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25344,map__25344__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25344,map__25344__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto__){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto__){
return (function (state_25368){
var state_val_25369 = (state_25368[(1)]);
if((state_val_25369 === (7))){
var inst_25364 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25370_25390 = state_25368__$1;
(statearr_25370_25390[(2)] = inst_25364);

(statearr_25370_25390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (1))){
var state_25368__$1 = state_25368;
var statearr_25371_25391 = state_25368__$1;
(statearr_25371_25391[(2)] = null);

(statearr_25371_25391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (4))){
var inst_25348 = (state_25368[(7)]);
var inst_25348__$1 = (state_25368[(2)]);
var state_25368__$1 = (function (){var statearr_25372 = state_25368;
(statearr_25372[(7)] = inst_25348__$1);

return statearr_25372;
})();
if(cljs.core.truth_(inst_25348__$1)){
var statearr_25373_25392 = state_25368__$1;
(statearr_25373_25392[(1)] = (5));

} else {
var statearr_25374_25393 = state_25368__$1;
(statearr_25374_25393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (6))){
var state_25368__$1 = state_25368;
var statearr_25375_25394 = state_25368__$1;
(statearr_25375_25394[(2)] = null);

(statearr_25375_25394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (3))){
var inst_25366 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25368__$1,inst_25366);
} else {
if((state_val_25369 === (2))){
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25368__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25369 === (11))){
var inst_25360 = (state_25368[(2)]);
var state_25368__$1 = (function (){var statearr_25376 = state_25368;
(statearr_25376[(8)] = inst_25360);

return statearr_25376;
})();
var statearr_25377_25395 = state_25368__$1;
(statearr_25377_25395[(2)] = null);

(statearr_25377_25395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (9))){
var inst_25354 = (state_25368[(9)]);
var inst_25352 = (state_25368[(10)]);
var inst_25356 = inst_25354.call(null,inst_25352);
var state_25368__$1 = state_25368;
var statearr_25378_25396 = state_25368__$1;
(statearr_25378_25396[(2)] = inst_25356);

(statearr_25378_25396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (5))){
var inst_25348 = (state_25368[(7)]);
var inst_25350 = figwheel.client.file_reloading.blocking_load.call(null,inst_25348);
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25368__$1,(8),inst_25350);
} else {
if((state_val_25369 === (10))){
var inst_25352 = (state_25368[(10)]);
var inst_25358 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25352);
var state_25368__$1 = state_25368;
var statearr_25379_25397 = state_25368__$1;
(statearr_25379_25397[(2)] = inst_25358);

(statearr_25379_25397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (8))){
var inst_25348 = (state_25368[(7)]);
var inst_25354 = (state_25368[(9)]);
var inst_25352 = (state_25368[(2)]);
var inst_25353 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25354__$1 = cljs.core.get.call(null,inst_25353,inst_25348);
var state_25368__$1 = (function (){var statearr_25380 = state_25368;
(statearr_25380[(9)] = inst_25354__$1);

(statearr_25380[(10)] = inst_25352);

return statearr_25380;
})();
if(cljs.core.truth_(inst_25354__$1)){
var statearr_25381_25398 = state_25368__$1;
(statearr_25381_25398[(1)] = (9));

} else {
var statearr_25382_25399 = state_25368__$1;
(statearr_25382_25399[(1)] = (10));

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
});})(c__22146__auto__))
;
return ((function (switch__22034__auto__,c__22146__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22035__auto__ = null;
var figwheel$client$file_reloading$state_machine__22035__auto____0 = (function (){
var statearr_25386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25386[(0)] = figwheel$client$file_reloading$state_machine__22035__auto__);

(statearr_25386[(1)] = (1));

return statearr_25386;
});
var figwheel$client$file_reloading$state_machine__22035__auto____1 = (function (state_25368){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_25368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e25387){if((e25387 instanceof Object)){
var ex__22038__auto__ = e25387;
var statearr_25388_25400 = state_25368;
(statearr_25388_25400[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25401 = state_25368;
state_25368 = G__25401;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22035__auto__ = function(state_25368){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22035__auto____1.call(this,state_25368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22035__auto____0;
figwheel$client$file_reloading$state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22035__auto____1;
return figwheel$client$file_reloading$state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto__))
})();
var state__22148__auto__ = (function (){var statearr_25389 = f__22147__auto__.call(null);
(statearr_25389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto__);

return statearr_25389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto__))
);

return c__22146__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25402,callback){
var map__25405 = p__25402;
var map__25405__$1 = ((((!((map__25405 == null)))?((((map__25405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25405):map__25405);
var file_msg = map__25405__$1;
var namespace = cljs.core.get.call(null,map__25405__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25405,map__25405__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25405,map__25405__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25407){
var map__25410 = p__25407;
var map__25410__$1 = ((((!((map__25410 == null)))?((((map__25410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25410):map__25410);
var file_msg = map__25410__$1;
var namespace = cljs.core.get.call(null,map__25410__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19942__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19942__auto__){
var or__19954__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
var or__19954__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19954__auto____$1)){
return or__19954__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19942__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25412,callback){
var map__25415 = p__25412;
var map__25415__$1 = ((((!((map__25415 == null)))?((((map__25415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25415):map__25415);
var file_msg = map__25415__$1;
var request_url = cljs.core.get.call(null,map__25415__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25415__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22146__auto___25519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___25519,out){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___25519,out){
return (function (state_25501){
var state_val_25502 = (state_25501[(1)]);
if((state_val_25502 === (1))){
var inst_25475 = cljs.core.seq.call(null,files);
var inst_25476 = cljs.core.first.call(null,inst_25475);
var inst_25477 = cljs.core.next.call(null,inst_25475);
var inst_25478 = files;
var state_25501__$1 = (function (){var statearr_25503 = state_25501;
(statearr_25503[(7)] = inst_25478);

(statearr_25503[(8)] = inst_25477);

(statearr_25503[(9)] = inst_25476);

return statearr_25503;
})();
var statearr_25504_25520 = state_25501__$1;
(statearr_25504_25520[(2)] = null);

(statearr_25504_25520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (2))){
var inst_25478 = (state_25501[(7)]);
var inst_25484 = (state_25501[(10)]);
var inst_25483 = cljs.core.seq.call(null,inst_25478);
var inst_25484__$1 = cljs.core.first.call(null,inst_25483);
var inst_25485 = cljs.core.next.call(null,inst_25483);
var inst_25486 = (inst_25484__$1 == null);
var inst_25487 = cljs.core.not.call(null,inst_25486);
var state_25501__$1 = (function (){var statearr_25505 = state_25501;
(statearr_25505[(11)] = inst_25485);

(statearr_25505[(10)] = inst_25484__$1);

return statearr_25505;
})();
if(inst_25487){
var statearr_25506_25521 = state_25501__$1;
(statearr_25506_25521[(1)] = (4));

} else {
var statearr_25507_25522 = state_25501__$1;
(statearr_25507_25522[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (3))){
var inst_25499 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25501__$1,inst_25499);
} else {
if((state_val_25502 === (4))){
var inst_25484 = (state_25501[(10)]);
var inst_25489 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25484);
var state_25501__$1 = state_25501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25501__$1,(7),inst_25489);
} else {
if((state_val_25502 === (5))){
var inst_25495 = cljs.core.async.close_BANG_.call(null,out);
var state_25501__$1 = state_25501;
var statearr_25508_25523 = state_25501__$1;
(statearr_25508_25523[(2)] = inst_25495);

(statearr_25508_25523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (6))){
var inst_25497 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
var statearr_25509_25524 = state_25501__$1;
(statearr_25509_25524[(2)] = inst_25497);

(statearr_25509_25524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (7))){
var inst_25485 = (state_25501[(11)]);
var inst_25491 = (state_25501[(2)]);
var inst_25492 = cljs.core.async.put_BANG_.call(null,out,inst_25491);
var inst_25478 = inst_25485;
var state_25501__$1 = (function (){var statearr_25510 = state_25501;
(statearr_25510[(7)] = inst_25478);

(statearr_25510[(12)] = inst_25492);

return statearr_25510;
})();
var statearr_25511_25525 = state_25501__$1;
(statearr_25511_25525[(2)] = null);

(statearr_25511_25525[(1)] = (2));


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
});})(c__22146__auto___25519,out))
;
return ((function (switch__22034__auto__,c__22146__auto___25519,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22035__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22035__auto____0 = (function (){
var statearr_25515 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25515[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22035__auto__);

(statearr_25515[(1)] = (1));

return statearr_25515;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22035__auto____1 = (function (state_25501){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_25501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e25516){if((e25516 instanceof Object)){
var ex__22038__auto__ = e25516;
var statearr_25517_25526 = state_25501;
(statearr_25517_25526[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25527 = state_25501;
state_25501 = G__25527;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22035__auto__ = function(state_25501){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22035__auto____1.call(this,state_25501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22035__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22035__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___25519,out))
})();
var state__22148__auto__ = (function (){var statearr_25518 = f__22147__auto__.call(null);
(statearr_25518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___25519);

return statearr_25518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___25519,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25528,opts){
var map__25532 = p__25528;
var map__25532__$1 = ((((!((map__25532 == null)))?((((map__25532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25532):map__25532);
var eval_body__$1 = cljs.core.get.call(null,map__25532__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25532__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19942__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19942__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19942__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25534){var e = e25534;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25535_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25535_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25544){
var vec__25545 = p__25544;
var k = cljs.core.nth.call(null,vec__25545,(0),null);
var v = cljs.core.nth.call(null,vec__25545,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25548){
var vec__25549 = p__25548;
var k = cljs.core.nth.call(null,vec__25549,(0),null);
var v = cljs.core.nth.call(null,vec__25549,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25555,p__25556){
var map__25803 = p__25555;
var map__25803__$1 = ((((!((map__25803 == null)))?((((map__25803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25803):map__25803);
var opts = map__25803__$1;
var before_jsload = cljs.core.get.call(null,map__25803__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25803__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25803__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25804 = p__25556;
var map__25804__$1 = ((((!((map__25804 == null)))?((((map__25804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25804):map__25804);
var msg = map__25804__$1;
var files = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25957){
var state_val_25958 = (state_25957[(1)]);
if((state_val_25958 === (7))){
var inst_25821 = (state_25957[(7)]);
var inst_25819 = (state_25957[(8)]);
var inst_25818 = (state_25957[(9)]);
var inst_25820 = (state_25957[(10)]);
var inst_25826 = cljs.core._nth.call(null,inst_25819,inst_25821);
var inst_25827 = figwheel.client.file_reloading.eval_body.call(null,inst_25826,opts);
var inst_25828 = (inst_25821 + (1));
var tmp25959 = inst_25819;
var tmp25960 = inst_25818;
var tmp25961 = inst_25820;
var inst_25818__$1 = tmp25960;
var inst_25819__$1 = tmp25959;
var inst_25820__$1 = tmp25961;
var inst_25821__$1 = inst_25828;
var state_25957__$1 = (function (){var statearr_25962 = state_25957;
(statearr_25962[(7)] = inst_25821__$1);

(statearr_25962[(8)] = inst_25819__$1);

(statearr_25962[(11)] = inst_25827);

(statearr_25962[(9)] = inst_25818__$1);

(statearr_25962[(10)] = inst_25820__$1);

return statearr_25962;
})();
var statearr_25963_26049 = state_25957__$1;
(statearr_25963_26049[(2)] = null);

(statearr_25963_26049[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (20))){
var inst_25861 = (state_25957[(12)]);
var inst_25869 = figwheel.client.file_reloading.sort_files.call(null,inst_25861);
var state_25957__$1 = state_25957;
var statearr_25964_26050 = state_25957__$1;
(statearr_25964_26050[(2)] = inst_25869);

(statearr_25964_26050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (27))){
var state_25957__$1 = state_25957;
var statearr_25965_26051 = state_25957__$1;
(statearr_25965_26051[(2)] = null);

(statearr_25965_26051[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (1))){
var inst_25810 = (state_25957[(13)]);
var inst_25807 = before_jsload.call(null,files);
var inst_25808 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25809 = (function (){return ((function (inst_25810,inst_25807,inst_25808,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25552_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25552_SHARP_);
});
;})(inst_25810,inst_25807,inst_25808,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25810__$1 = cljs.core.filter.call(null,inst_25809,files);
var inst_25811 = cljs.core.not_empty.call(null,inst_25810__$1);
var state_25957__$1 = (function (){var statearr_25966 = state_25957;
(statearr_25966[(13)] = inst_25810__$1);

(statearr_25966[(14)] = inst_25807);

(statearr_25966[(15)] = inst_25808);

return statearr_25966;
})();
if(cljs.core.truth_(inst_25811)){
var statearr_25967_26052 = state_25957__$1;
(statearr_25967_26052[(1)] = (2));

} else {
var statearr_25968_26053 = state_25957__$1;
(statearr_25968_26053[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (24))){
var state_25957__$1 = state_25957;
var statearr_25969_26054 = state_25957__$1;
(statearr_25969_26054[(2)] = null);

(statearr_25969_26054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (39))){
var inst_25911 = (state_25957[(16)]);
var state_25957__$1 = state_25957;
var statearr_25970_26055 = state_25957__$1;
(statearr_25970_26055[(2)] = inst_25911);

(statearr_25970_26055[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (46))){
var inst_25952 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
var statearr_25971_26056 = state_25957__$1;
(statearr_25971_26056[(2)] = inst_25952);

(statearr_25971_26056[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (4))){
var inst_25855 = (state_25957[(2)]);
var inst_25856 = cljs.core.List.EMPTY;
var inst_25857 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25856);
var inst_25858 = (function (){return ((function (inst_25855,inst_25856,inst_25857,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25553_SHARP_){
var and__19942__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25553_SHARP_);
if(cljs.core.truth_(and__19942__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25553_SHARP_));
} else {
return and__19942__auto__;
}
});
;})(inst_25855,inst_25856,inst_25857,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25859 = cljs.core.filter.call(null,inst_25858,files);
var inst_25860 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25861 = cljs.core.concat.call(null,inst_25859,inst_25860);
var state_25957__$1 = (function (){var statearr_25972 = state_25957;
(statearr_25972[(17)] = inst_25855);

(statearr_25972[(18)] = inst_25857);

(statearr_25972[(12)] = inst_25861);

return statearr_25972;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25973_26057 = state_25957__$1;
(statearr_25973_26057[(1)] = (16));

} else {
var statearr_25974_26058 = state_25957__$1;
(statearr_25974_26058[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (15))){
var inst_25845 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
var statearr_25975_26059 = state_25957__$1;
(statearr_25975_26059[(2)] = inst_25845);

(statearr_25975_26059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (21))){
var inst_25871 = (state_25957[(19)]);
var inst_25871__$1 = (state_25957[(2)]);
var inst_25872 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25871__$1);
var state_25957__$1 = (function (){var statearr_25976 = state_25957;
(statearr_25976[(19)] = inst_25871__$1);

return statearr_25976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25957__$1,(22),inst_25872);
} else {
if((state_val_25958 === (31))){
var inst_25955 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25957__$1,inst_25955);
} else {
if((state_val_25958 === (32))){
var inst_25911 = (state_25957[(16)]);
var inst_25916 = inst_25911.cljs$lang$protocol_mask$partition0$;
var inst_25917 = (inst_25916 & (64));
var inst_25918 = inst_25911.cljs$core$ISeq$;
var inst_25919 = (inst_25917) || (inst_25918);
var state_25957__$1 = state_25957;
if(cljs.core.truth_(inst_25919)){
var statearr_25977_26060 = state_25957__$1;
(statearr_25977_26060[(1)] = (35));

} else {
var statearr_25978_26061 = state_25957__$1;
(statearr_25978_26061[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (40))){
var inst_25932 = (state_25957[(20)]);
var inst_25931 = (state_25957[(2)]);
var inst_25932__$1 = cljs.core.get.call(null,inst_25931,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25933 = cljs.core.get.call(null,inst_25931,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25934 = cljs.core.not_empty.call(null,inst_25932__$1);
var state_25957__$1 = (function (){var statearr_25979 = state_25957;
(statearr_25979[(20)] = inst_25932__$1);

(statearr_25979[(21)] = inst_25933);

return statearr_25979;
})();
if(cljs.core.truth_(inst_25934)){
var statearr_25980_26062 = state_25957__$1;
(statearr_25980_26062[(1)] = (41));

} else {
var statearr_25981_26063 = state_25957__$1;
(statearr_25981_26063[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (33))){
var state_25957__$1 = state_25957;
var statearr_25982_26064 = state_25957__$1;
(statearr_25982_26064[(2)] = false);

(statearr_25982_26064[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (13))){
var inst_25831 = (state_25957[(22)]);
var inst_25835 = cljs.core.chunk_first.call(null,inst_25831);
var inst_25836 = cljs.core.chunk_rest.call(null,inst_25831);
var inst_25837 = cljs.core.count.call(null,inst_25835);
var inst_25818 = inst_25836;
var inst_25819 = inst_25835;
var inst_25820 = inst_25837;
var inst_25821 = (0);
var state_25957__$1 = (function (){var statearr_25983 = state_25957;
(statearr_25983[(7)] = inst_25821);

(statearr_25983[(8)] = inst_25819);

(statearr_25983[(9)] = inst_25818);

(statearr_25983[(10)] = inst_25820);

return statearr_25983;
})();
var statearr_25984_26065 = state_25957__$1;
(statearr_25984_26065[(2)] = null);

(statearr_25984_26065[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (22))){
var inst_25874 = (state_25957[(23)]);
var inst_25875 = (state_25957[(24)]);
var inst_25871 = (state_25957[(19)]);
var inst_25879 = (state_25957[(25)]);
var inst_25874__$1 = (state_25957[(2)]);
var inst_25875__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25874__$1);
var inst_25876 = (function (){var all_files = inst_25871;
var res_SINGLEQUOTE_ = inst_25874__$1;
var res = inst_25875__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25874,inst_25875,inst_25871,inst_25879,inst_25874__$1,inst_25875__$1,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25554_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25554_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25874,inst_25875,inst_25871,inst_25879,inst_25874__$1,inst_25875__$1,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25877 = cljs.core.filter.call(null,inst_25876,inst_25874__$1);
var inst_25878 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25879__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25878);
var inst_25880 = cljs.core.not_empty.call(null,inst_25879__$1);
var state_25957__$1 = (function (){var statearr_25985 = state_25957;
(statearr_25985[(23)] = inst_25874__$1);

(statearr_25985[(24)] = inst_25875__$1);

(statearr_25985[(26)] = inst_25877);

(statearr_25985[(25)] = inst_25879__$1);

return statearr_25985;
})();
if(cljs.core.truth_(inst_25880)){
var statearr_25986_26066 = state_25957__$1;
(statearr_25986_26066[(1)] = (23));

} else {
var statearr_25987_26067 = state_25957__$1;
(statearr_25987_26067[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (36))){
var state_25957__$1 = state_25957;
var statearr_25988_26068 = state_25957__$1;
(statearr_25988_26068[(2)] = false);

(statearr_25988_26068[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (41))){
var inst_25932 = (state_25957[(20)]);
var inst_25936 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25937 = cljs.core.map.call(null,inst_25936,inst_25932);
var inst_25938 = cljs.core.pr_str.call(null,inst_25937);
var inst_25939 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25938)].join('');
var inst_25940 = figwheel.client.utils.log.call(null,inst_25939);
var state_25957__$1 = state_25957;
var statearr_25989_26069 = state_25957__$1;
(statearr_25989_26069[(2)] = inst_25940);

(statearr_25989_26069[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (43))){
var inst_25933 = (state_25957[(21)]);
var inst_25943 = (state_25957[(2)]);
var inst_25944 = cljs.core.not_empty.call(null,inst_25933);
var state_25957__$1 = (function (){var statearr_25990 = state_25957;
(statearr_25990[(27)] = inst_25943);

return statearr_25990;
})();
if(cljs.core.truth_(inst_25944)){
var statearr_25991_26070 = state_25957__$1;
(statearr_25991_26070[(1)] = (44));

} else {
var statearr_25992_26071 = state_25957__$1;
(statearr_25992_26071[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (29))){
var inst_25874 = (state_25957[(23)]);
var inst_25875 = (state_25957[(24)]);
var inst_25871 = (state_25957[(19)]);
var inst_25877 = (state_25957[(26)]);
var inst_25911 = (state_25957[(16)]);
var inst_25879 = (state_25957[(25)]);
var inst_25907 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25910 = (function (){var all_files = inst_25871;
var res_SINGLEQUOTE_ = inst_25874;
var res = inst_25875;
var files_not_loaded = inst_25877;
var dependencies_that_loaded = inst_25879;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25874,inst_25875,inst_25871,inst_25877,inst_25911,inst_25879,inst_25907,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25909){
var map__25993 = p__25909;
var map__25993__$1 = ((((!((map__25993 == null)))?((((map__25993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25993):map__25993);
var namespace = cljs.core.get.call(null,map__25993__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25874,inst_25875,inst_25871,inst_25877,inst_25911,inst_25879,inst_25907,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25911__$1 = cljs.core.group_by.call(null,inst_25910,inst_25877);
var inst_25913 = (inst_25911__$1 == null);
var inst_25914 = cljs.core.not.call(null,inst_25913);
var state_25957__$1 = (function (){var statearr_25995 = state_25957;
(statearr_25995[(28)] = inst_25907);

(statearr_25995[(16)] = inst_25911__$1);

return statearr_25995;
})();
if(inst_25914){
var statearr_25996_26072 = state_25957__$1;
(statearr_25996_26072[(1)] = (32));

} else {
var statearr_25997_26073 = state_25957__$1;
(statearr_25997_26073[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (44))){
var inst_25933 = (state_25957[(21)]);
var inst_25946 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25933);
var inst_25947 = cljs.core.pr_str.call(null,inst_25946);
var inst_25948 = [cljs.core.str("not required: "),cljs.core.str(inst_25947)].join('');
var inst_25949 = figwheel.client.utils.log.call(null,inst_25948);
var state_25957__$1 = state_25957;
var statearr_25998_26074 = state_25957__$1;
(statearr_25998_26074[(2)] = inst_25949);

(statearr_25998_26074[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (6))){
var inst_25852 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
var statearr_25999_26075 = state_25957__$1;
(statearr_25999_26075[(2)] = inst_25852);

(statearr_25999_26075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (28))){
var inst_25877 = (state_25957[(26)]);
var inst_25904 = (state_25957[(2)]);
var inst_25905 = cljs.core.not_empty.call(null,inst_25877);
var state_25957__$1 = (function (){var statearr_26000 = state_25957;
(statearr_26000[(29)] = inst_25904);

return statearr_26000;
})();
if(cljs.core.truth_(inst_25905)){
var statearr_26001_26076 = state_25957__$1;
(statearr_26001_26076[(1)] = (29));

} else {
var statearr_26002_26077 = state_25957__$1;
(statearr_26002_26077[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (25))){
var inst_25875 = (state_25957[(24)]);
var inst_25891 = (state_25957[(2)]);
var inst_25892 = cljs.core.not_empty.call(null,inst_25875);
var state_25957__$1 = (function (){var statearr_26003 = state_25957;
(statearr_26003[(30)] = inst_25891);

return statearr_26003;
})();
if(cljs.core.truth_(inst_25892)){
var statearr_26004_26078 = state_25957__$1;
(statearr_26004_26078[(1)] = (26));

} else {
var statearr_26005_26079 = state_25957__$1;
(statearr_26005_26079[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (34))){
var inst_25926 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
if(cljs.core.truth_(inst_25926)){
var statearr_26006_26080 = state_25957__$1;
(statearr_26006_26080[(1)] = (38));

} else {
var statearr_26007_26081 = state_25957__$1;
(statearr_26007_26081[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (17))){
var state_25957__$1 = state_25957;
var statearr_26008_26082 = state_25957__$1;
(statearr_26008_26082[(2)] = recompile_dependents);

(statearr_26008_26082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (3))){
var state_25957__$1 = state_25957;
var statearr_26009_26083 = state_25957__$1;
(statearr_26009_26083[(2)] = null);

(statearr_26009_26083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (12))){
var inst_25848 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
var statearr_26010_26084 = state_25957__$1;
(statearr_26010_26084[(2)] = inst_25848);

(statearr_26010_26084[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (2))){
var inst_25810 = (state_25957[(13)]);
var inst_25817 = cljs.core.seq.call(null,inst_25810);
var inst_25818 = inst_25817;
var inst_25819 = null;
var inst_25820 = (0);
var inst_25821 = (0);
var state_25957__$1 = (function (){var statearr_26011 = state_25957;
(statearr_26011[(7)] = inst_25821);

(statearr_26011[(8)] = inst_25819);

(statearr_26011[(9)] = inst_25818);

(statearr_26011[(10)] = inst_25820);

return statearr_26011;
})();
var statearr_26012_26085 = state_25957__$1;
(statearr_26012_26085[(2)] = null);

(statearr_26012_26085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (23))){
var inst_25874 = (state_25957[(23)]);
var inst_25875 = (state_25957[(24)]);
var inst_25871 = (state_25957[(19)]);
var inst_25877 = (state_25957[(26)]);
var inst_25879 = (state_25957[(25)]);
var inst_25882 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25884 = (function (){var all_files = inst_25871;
var res_SINGLEQUOTE_ = inst_25874;
var res = inst_25875;
var files_not_loaded = inst_25877;
var dependencies_that_loaded = inst_25879;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25874,inst_25875,inst_25871,inst_25877,inst_25879,inst_25882,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25883){
var map__26013 = p__25883;
var map__26013__$1 = ((((!((map__26013 == null)))?((((map__26013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26013):map__26013);
var request_url = cljs.core.get.call(null,map__26013__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25874,inst_25875,inst_25871,inst_25877,inst_25879,inst_25882,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25885 = cljs.core.reverse.call(null,inst_25879);
var inst_25886 = cljs.core.map.call(null,inst_25884,inst_25885);
var inst_25887 = cljs.core.pr_str.call(null,inst_25886);
var inst_25888 = figwheel.client.utils.log.call(null,inst_25887);
var state_25957__$1 = (function (){var statearr_26015 = state_25957;
(statearr_26015[(31)] = inst_25882);

return statearr_26015;
})();
var statearr_26016_26086 = state_25957__$1;
(statearr_26016_26086[(2)] = inst_25888);

(statearr_26016_26086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (35))){
var state_25957__$1 = state_25957;
var statearr_26017_26087 = state_25957__$1;
(statearr_26017_26087[(2)] = true);

(statearr_26017_26087[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (19))){
var inst_25861 = (state_25957[(12)]);
var inst_25867 = figwheel.client.file_reloading.expand_files.call(null,inst_25861);
var state_25957__$1 = state_25957;
var statearr_26018_26088 = state_25957__$1;
(statearr_26018_26088[(2)] = inst_25867);

(statearr_26018_26088[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (11))){
var state_25957__$1 = state_25957;
var statearr_26019_26089 = state_25957__$1;
(statearr_26019_26089[(2)] = null);

(statearr_26019_26089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (9))){
var inst_25850 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
var statearr_26020_26090 = state_25957__$1;
(statearr_26020_26090[(2)] = inst_25850);

(statearr_26020_26090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (5))){
var inst_25821 = (state_25957[(7)]);
var inst_25820 = (state_25957[(10)]);
var inst_25823 = (inst_25821 < inst_25820);
var inst_25824 = inst_25823;
var state_25957__$1 = state_25957;
if(cljs.core.truth_(inst_25824)){
var statearr_26021_26091 = state_25957__$1;
(statearr_26021_26091[(1)] = (7));

} else {
var statearr_26022_26092 = state_25957__$1;
(statearr_26022_26092[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (14))){
var inst_25831 = (state_25957[(22)]);
var inst_25840 = cljs.core.first.call(null,inst_25831);
var inst_25841 = figwheel.client.file_reloading.eval_body.call(null,inst_25840,opts);
var inst_25842 = cljs.core.next.call(null,inst_25831);
var inst_25818 = inst_25842;
var inst_25819 = null;
var inst_25820 = (0);
var inst_25821 = (0);
var state_25957__$1 = (function (){var statearr_26023 = state_25957;
(statearr_26023[(7)] = inst_25821);

(statearr_26023[(8)] = inst_25819);

(statearr_26023[(32)] = inst_25841);

(statearr_26023[(9)] = inst_25818);

(statearr_26023[(10)] = inst_25820);

return statearr_26023;
})();
var statearr_26024_26093 = state_25957__$1;
(statearr_26024_26093[(2)] = null);

(statearr_26024_26093[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (45))){
var state_25957__$1 = state_25957;
var statearr_26025_26094 = state_25957__$1;
(statearr_26025_26094[(2)] = null);

(statearr_26025_26094[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (26))){
var inst_25874 = (state_25957[(23)]);
var inst_25875 = (state_25957[(24)]);
var inst_25871 = (state_25957[(19)]);
var inst_25877 = (state_25957[(26)]);
var inst_25879 = (state_25957[(25)]);
var inst_25894 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25896 = (function (){var all_files = inst_25871;
var res_SINGLEQUOTE_ = inst_25874;
var res = inst_25875;
var files_not_loaded = inst_25877;
var dependencies_that_loaded = inst_25879;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25874,inst_25875,inst_25871,inst_25877,inst_25879,inst_25894,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25895){
var map__26026 = p__25895;
var map__26026__$1 = ((((!((map__26026 == null)))?((((map__26026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26026):map__26026);
var namespace = cljs.core.get.call(null,map__26026__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26026__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25874,inst_25875,inst_25871,inst_25877,inst_25879,inst_25894,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25897 = cljs.core.map.call(null,inst_25896,inst_25875);
var inst_25898 = cljs.core.pr_str.call(null,inst_25897);
var inst_25899 = figwheel.client.utils.log.call(null,inst_25898);
var inst_25900 = (function (){var all_files = inst_25871;
var res_SINGLEQUOTE_ = inst_25874;
var res = inst_25875;
var files_not_loaded = inst_25877;
var dependencies_that_loaded = inst_25879;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25874,inst_25875,inst_25871,inst_25877,inst_25879,inst_25894,inst_25896,inst_25897,inst_25898,inst_25899,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25874,inst_25875,inst_25871,inst_25877,inst_25879,inst_25894,inst_25896,inst_25897,inst_25898,inst_25899,state_val_25958,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25901 = setTimeout(inst_25900,(10));
var state_25957__$1 = (function (){var statearr_26028 = state_25957;
(statearr_26028[(33)] = inst_25899);

(statearr_26028[(34)] = inst_25894);

return statearr_26028;
})();
var statearr_26029_26095 = state_25957__$1;
(statearr_26029_26095[(2)] = inst_25901);

(statearr_26029_26095[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (16))){
var state_25957__$1 = state_25957;
var statearr_26030_26096 = state_25957__$1;
(statearr_26030_26096[(2)] = reload_dependents);

(statearr_26030_26096[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (38))){
var inst_25911 = (state_25957[(16)]);
var inst_25928 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25911);
var state_25957__$1 = state_25957;
var statearr_26031_26097 = state_25957__$1;
(statearr_26031_26097[(2)] = inst_25928);

(statearr_26031_26097[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (30))){
var state_25957__$1 = state_25957;
var statearr_26032_26098 = state_25957__$1;
(statearr_26032_26098[(2)] = null);

(statearr_26032_26098[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (10))){
var inst_25831 = (state_25957[(22)]);
var inst_25833 = cljs.core.chunked_seq_QMARK_.call(null,inst_25831);
var state_25957__$1 = state_25957;
if(inst_25833){
var statearr_26033_26099 = state_25957__$1;
(statearr_26033_26099[(1)] = (13));

} else {
var statearr_26034_26100 = state_25957__$1;
(statearr_26034_26100[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (18))){
var inst_25865 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
if(cljs.core.truth_(inst_25865)){
var statearr_26035_26101 = state_25957__$1;
(statearr_26035_26101[(1)] = (19));

} else {
var statearr_26036_26102 = state_25957__$1;
(statearr_26036_26102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (42))){
var state_25957__$1 = state_25957;
var statearr_26037_26103 = state_25957__$1;
(statearr_26037_26103[(2)] = null);

(statearr_26037_26103[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (37))){
var inst_25923 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
var statearr_26038_26104 = state_25957__$1;
(statearr_26038_26104[(2)] = inst_25923);

(statearr_26038_26104[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25958 === (8))){
var inst_25818 = (state_25957[(9)]);
var inst_25831 = (state_25957[(22)]);
var inst_25831__$1 = cljs.core.seq.call(null,inst_25818);
var state_25957__$1 = (function (){var statearr_26039 = state_25957;
(statearr_26039[(22)] = inst_25831__$1);

return statearr_26039;
})();
if(inst_25831__$1){
var statearr_26040_26105 = state_25957__$1;
(statearr_26040_26105[(1)] = (10));

} else {
var statearr_26041_26106 = state_25957__$1;
(statearr_26041_26106[(1)] = (11));

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
}
});})(c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22034__auto__,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22035__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22035__auto____0 = (function (){
var statearr_26045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26045[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22035__auto__);

(statearr_26045[(1)] = (1));

return statearr_26045;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22035__auto____1 = (function (state_25957){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_25957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e26046){if((e26046 instanceof Object)){
var ex__22038__auto__ = e26046;
var statearr_26047_26107 = state_25957;
(statearr_26047_26107[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26108 = state_25957;
state_25957 = G__26108;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22035__auto__ = function(state_25957){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22035__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22035__auto____1.call(this,state_25957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22035__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22035__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22148__auto__ = (function (){var statearr_26048 = f__22147__auto__.call(null);
(statearr_26048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto__);

return statearr_26048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto__,map__25803,map__25803__$1,opts,before_jsload,on_jsload,reload_dependents,map__25804,map__25804__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22146__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26111,link){
var map__26114 = p__26111;
var map__26114__$1 = ((((!((map__26114 == null)))?((((map__26114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26114):map__26114);
var file = cljs.core.get.call(null,map__26114__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__26114,map__26114__$1,file){
return (function (p1__26109_SHARP_,p2__26110_SHARP_){
if(cljs.core._EQ_.call(null,p1__26109_SHARP_,p2__26110_SHARP_)){
return p1__26109_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__26114,map__26114__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26120){
var map__26121 = p__26120;
var map__26121__$1 = ((((!((map__26121 == null)))?((((map__26121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26121):map__26121);
var match_length = cljs.core.get.call(null,map__26121__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26121__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26116_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26116_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26123 = [];
var len__21029__auto___26126 = arguments.length;
var i__21030__auto___26127 = (0);
while(true){
if((i__21030__auto___26127 < len__21029__auto___26126)){
args26123.push((arguments[i__21030__auto___26127]));

var G__26128 = (i__21030__auto___26127 + (1));
i__21030__auto___26127 = G__26128;
continue;
} else {
}
break;
}

var G__26125 = args26123.length;
switch (G__26125) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26123.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26130_SHARP_,p2__26131_SHARP_){
return cljs.core.assoc.call(null,p1__26130_SHARP_,cljs.core.get.call(null,p2__26131_SHARP_,key),p2__26131_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26132){
var map__26135 = p__26132;
var map__26135__$1 = ((((!((map__26135 == null)))?((((map__26135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26135):map__26135);
var f_data = map__26135__$1;
var file = cljs.core.get.call(null,map__26135__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26137,files_msg){
var map__26144 = p__26137;
var map__26144__$1 = ((((!((map__26144 == null)))?((((map__26144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26144):map__26144);
var opts = map__26144__$1;
var on_cssload = cljs.core.get.call(null,map__26144__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26146_26150 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26147_26151 = null;
var count__26148_26152 = (0);
var i__26149_26153 = (0);
while(true){
if((i__26149_26153 < count__26148_26152)){
var f_26154 = cljs.core._nth.call(null,chunk__26147_26151,i__26149_26153);
figwheel.client.file_reloading.reload_css_file.call(null,f_26154);

var G__26155 = seq__26146_26150;
var G__26156 = chunk__26147_26151;
var G__26157 = count__26148_26152;
var G__26158 = (i__26149_26153 + (1));
seq__26146_26150 = G__26155;
chunk__26147_26151 = G__26156;
count__26148_26152 = G__26157;
i__26149_26153 = G__26158;
continue;
} else {
var temp__4657__auto___26159 = cljs.core.seq.call(null,seq__26146_26150);
if(temp__4657__auto___26159){
var seq__26146_26160__$1 = temp__4657__auto___26159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26146_26160__$1)){
var c__20765__auto___26161 = cljs.core.chunk_first.call(null,seq__26146_26160__$1);
var G__26162 = cljs.core.chunk_rest.call(null,seq__26146_26160__$1);
var G__26163 = c__20765__auto___26161;
var G__26164 = cljs.core.count.call(null,c__20765__auto___26161);
var G__26165 = (0);
seq__26146_26150 = G__26162;
chunk__26147_26151 = G__26163;
count__26148_26152 = G__26164;
i__26149_26153 = G__26165;
continue;
} else {
var f_26166 = cljs.core.first.call(null,seq__26146_26160__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26166);

var G__26167 = cljs.core.next.call(null,seq__26146_26160__$1);
var G__26168 = null;
var G__26169 = (0);
var G__26170 = (0);
seq__26146_26150 = G__26167;
chunk__26147_26151 = G__26168;
count__26148_26152 = G__26169;
i__26149_26153 = G__26170;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26144,map__26144__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26144,map__26144__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1468882709196