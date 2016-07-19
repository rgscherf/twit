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
var or__19958__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19958__auto__){
return or__19958__auto__;
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
var or__19958__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34031_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34031_SHARP_));
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
var seq__34036 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34037 = null;
var count__34038 = (0);
var i__34039 = (0);
while(true){
if((i__34039 < count__34038)){
var n = cljs.core._nth.call(null,chunk__34037,i__34039);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34040 = seq__34036;
var G__34041 = chunk__34037;
var G__34042 = count__34038;
var G__34043 = (i__34039 + (1));
seq__34036 = G__34040;
chunk__34037 = G__34041;
count__34038 = G__34042;
i__34039 = G__34043;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34036);
if(temp__4657__auto__){
var seq__34036__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34036__$1)){
var c__20769__auto__ = cljs.core.chunk_first.call(null,seq__34036__$1);
var G__34044 = cljs.core.chunk_rest.call(null,seq__34036__$1);
var G__34045 = c__20769__auto__;
var G__34046 = cljs.core.count.call(null,c__20769__auto__);
var G__34047 = (0);
seq__34036 = G__34044;
chunk__34037 = G__34045;
count__34038 = G__34046;
i__34039 = G__34047;
continue;
} else {
var n = cljs.core.first.call(null,seq__34036__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34048 = cljs.core.next.call(null,seq__34036__$1);
var G__34049 = null;
var G__34050 = (0);
var G__34051 = (0);
seq__34036 = G__34048;
chunk__34037 = G__34049;
count__34038 = G__34050;
i__34039 = G__34051;
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

var seq__34102_34113 = cljs.core.seq.call(null,deps);
var chunk__34103_34114 = null;
var count__34104_34115 = (0);
var i__34105_34116 = (0);
while(true){
if((i__34105_34116 < count__34104_34115)){
var dep_34117 = cljs.core._nth.call(null,chunk__34103_34114,i__34105_34116);
topo_sort_helper_STAR_.call(null,dep_34117,(depth + (1)),state);

var G__34118 = seq__34102_34113;
var G__34119 = chunk__34103_34114;
var G__34120 = count__34104_34115;
var G__34121 = (i__34105_34116 + (1));
seq__34102_34113 = G__34118;
chunk__34103_34114 = G__34119;
count__34104_34115 = G__34120;
i__34105_34116 = G__34121;
continue;
} else {
var temp__4657__auto___34122 = cljs.core.seq.call(null,seq__34102_34113);
if(temp__4657__auto___34122){
var seq__34102_34123__$1 = temp__4657__auto___34122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34102_34123__$1)){
var c__20769__auto___34124 = cljs.core.chunk_first.call(null,seq__34102_34123__$1);
var G__34125 = cljs.core.chunk_rest.call(null,seq__34102_34123__$1);
var G__34126 = c__20769__auto___34124;
var G__34127 = cljs.core.count.call(null,c__20769__auto___34124);
var G__34128 = (0);
seq__34102_34113 = G__34125;
chunk__34103_34114 = G__34126;
count__34104_34115 = G__34127;
i__34105_34116 = G__34128;
continue;
} else {
var dep_34129 = cljs.core.first.call(null,seq__34102_34123__$1);
topo_sort_helper_STAR_.call(null,dep_34129,(depth + (1)),state);

var G__34130 = cljs.core.next.call(null,seq__34102_34123__$1);
var G__34131 = null;
var G__34132 = (0);
var G__34133 = (0);
seq__34102_34113 = G__34130;
chunk__34103_34114 = G__34131;
count__34104_34115 = G__34132;
i__34105_34116 = G__34133;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34106){
var vec__34110 = p__34106;
var seq__34111 = cljs.core.seq.call(null,vec__34110);
var first__34112 = cljs.core.first.call(null,seq__34111);
var seq__34111__$1 = cljs.core.next.call(null,seq__34111);
var x = first__34112;
var xs = seq__34111__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34110,seq__34111,first__34112,seq__34111__$1,x,xs,get_deps__$1){
return (function (p1__34052_SHARP_){
return clojure.set.difference.call(null,p1__34052_SHARP_,x);
});})(vec__34110,seq__34111,first__34112,seq__34111__$1,x,xs,get_deps__$1))
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
var seq__34146 = cljs.core.seq.call(null,provides);
var chunk__34147 = null;
var count__34148 = (0);
var i__34149 = (0);
while(true){
if((i__34149 < count__34148)){
var prov = cljs.core._nth.call(null,chunk__34147,i__34149);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34150_34158 = cljs.core.seq.call(null,requires);
var chunk__34151_34159 = null;
var count__34152_34160 = (0);
var i__34153_34161 = (0);
while(true){
if((i__34153_34161 < count__34152_34160)){
var req_34162 = cljs.core._nth.call(null,chunk__34151_34159,i__34153_34161);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34162,prov);

var G__34163 = seq__34150_34158;
var G__34164 = chunk__34151_34159;
var G__34165 = count__34152_34160;
var G__34166 = (i__34153_34161 + (1));
seq__34150_34158 = G__34163;
chunk__34151_34159 = G__34164;
count__34152_34160 = G__34165;
i__34153_34161 = G__34166;
continue;
} else {
var temp__4657__auto___34167 = cljs.core.seq.call(null,seq__34150_34158);
if(temp__4657__auto___34167){
var seq__34150_34168__$1 = temp__4657__auto___34167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34150_34168__$1)){
var c__20769__auto___34169 = cljs.core.chunk_first.call(null,seq__34150_34168__$1);
var G__34170 = cljs.core.chunk_rest.call(null,seq__34150_34168__$1);
var G__34171 = c__20769__auto___34169;
var G__34172 = cljs.core.count.call(null,c__20769__auto___34169);
var G__34173 = (0);
seq__34150_34158 = G__34170;
chunk__34151_34159 = G__34171;
count__34152_34160 = G__34172;
i__34153_34161 = G__34173;
continue;
} else {
var req_34174 = cljs.core.first.call(null,seq__34150_34168__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34174,prov);

var G__34175 = cljs.core.next.call(null,seq__34150_34168__$1);
var G__34176 = null;
var G__34177 = (0);
var G__34178 = (0);
seq__34150_34158 = G__34175;
chunk__34151_34159 = G__34176;
count__34152_34160 = G__34177;
i__34153_34161 = G__34178;
continue;
}
} else {
}
}
break;
}

var G__34179 = seq__34146;
var G__34180 = chunk__34147;
var G__34181 = count__34148;
var G__34182 = (i__34149 + (1));
seq__34146 = G__34179;
chunk__34147 = G__34180;
count__34148 = G__34181;
i__34149 = G__34182;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34146);
if(temp__4657__auto__){
var seq__34146__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34146__$1)){
var c__20769__auto__ = cljs.core.chunk_first.call(null,seq__34146__$1);
var G__34183 = cljs.core.chunk_rest.call(null,seq__34146__$1);
var G__34184 = c__20769__auto__;
var G__34185 = cljs.core.count.call(null,c__20769__auto__);
var G__34186 = (0);
seq__34146 = G__34183;
chunk__34147 = G__34184;
count__34148 = G__34185;
i__34149 = G__34186;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34146__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34154_34187 = cljs.core.seq.call(null,requires);
var chunk__34155_34188 = null;
var count__34156_34189 = (0);
var i__34157_34190 = (0);
while(true){
if((i__34157_34190 < count__34156_34189)){
var req_34191 = cljs.core._nth.call(null,chunk__34155_34188,i__34157_34190);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34191,prov);

var G__34192 = seq__34154_34187;
var G__34193 = chunk__34155_34188;
var G__34194 = count__34156_34189;
var G__34195 = (i__34157_34190 + (1));
seq__34154_34187 = G__34192;
chunk__34155_34188 = G__34193;
count__34156_34189 = G__34194;
i__34157_34190 = G__34195;
continue;
} else {
var temp__4657__auto___34196__$1 = cljs.core.seq.call(null,seq__34154_34187);
if(temp__4657__auto___34196__$1){
var seq__34154_34197__$1 = temp__4657__auto___34196__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34154_34197__$1)){
var c__20769__auto___34198 = cljs.core.chunk_first.call(null,seq__34154_34197__$1);
var G__34199 = cljs.core.chunk_rest.call(null,seq__34154_34197__$1);
var G__34200 = c__20769__auto___34198;
var G__34201 = cljs.core.count.call(null,c__20769__auto___34198);
var G__34202 = (0);
seq__34154_34187 = G__34199;
chunk__34155_34188 = G__34200;
count__34156_34189 = G__34201;
i__34157_34190 = G__34202;
continue;
} else {
var req_34203 = cljs.core.first.call(null,seq__34154_34197__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34203,prov);

var G__34204 = cljs.core.next.call(null,seq__34154_34197__$1);
var G__34205 = null;
var G__34206 = (0);
var G__34207 = (0);
seq__34154_34187 = G__34204;
chunk__34155_34188 = G__34205;
count__34156_34189 = G__34206;
i__34157_34190 = G__34207;
continue;
}
} else {
}
}
break;
}

var G__34208 = cljs.core.next.call(null,seq__34146__$1);
var G__34209 = null;
var G__34210 = (0);
var G__34211 = (0);
seq__34146 = G__34208;
chunk__34147 = G__34209;
count__34148 = G__34210;
i__34149 = G__34211;
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
var seq__34216_34220 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34217_34221 = null;
var count__34218_34222 = (0);
var i__34219_34223 = (0);
while(true){
if((i__34219_34223 < count__34218_34222)){
var ns_34224 = cljs.core._nth.call(null,chunk__34217_34221,i__34219_34223);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34224);

var G__34225 = seq__34216_34220;
var G__34226 = chunk__34217_34221;
var G__34227 = count__34218_34222;
var G__34228 = (i__34219_34223 + (1));
seq__34216_34220 = G__34225;
chunk__34217_34221 = G__34226;
count__34218_34222 = G__34227;
i__34219_34223 = G__34228;
continue;
} else {
var temp__4657__auto___34229 = cljs.core.seq.call(null,seq__34216_34220);
if(temp__4657__auto___34229){
var seq__34216_34230__$1 = temp__4657__auto___34229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34216_34230__$1)){
var c__20769__auto___34231 = cljs.core.chunk_first.call(null,seq__34216_34230__$1);
var G__34232 = cljs.core.chunk_rest.call(null,seq__34216_34230__$1);
var G__34233 = c__20769__auto___34231;
var G__34234 = cljs.core.count.call(null,c__20769__auto___34231);
var G__34235 = (0);
seq__34216_34220 = G__34232;
chunk__34217_34221 = G__34233;
count__34218_34222 = G__34234;
i__34219_34223 = G__34235;
continue;
} else {
var ns_34236 = cljs.core.first.call(null,seq__34216_34230__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34236);

var G__34237 = cljs.core.next.call(null,seq__34216_34230__$1);
var G__34238 = null;
var G__34239 = (0);
var G__34240 = (0);
seq__34216_34220 = G__34237;
chunk__34217_34221 = G__34238;
count__34218_34222 = G__34239;
i__34219_34223 = G__34240;
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
goog.require_figwheel_backup_ = (function (){var or__19958__auto__ = goog.require__;
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
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
var G__34241__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34242__i = 0, G__34242__a = new Array(arguments.length -  0);
while (G__34242__i < G__34242__a.length) {G__34242__a[G__34242__i] = arguments[G__34242__i + 0]; ++G__34242__i;}
  args = new cljs.core.IndexedSeq(G__34242__a,0);
} 
return G__34241__delegate.call(this,args);};
G__34241.cljs$lang$maxFixedArity = 0;
G__34241.cljs$lang$applyTo = (function (arglist__34243){
var args = cljs.core.seq(arglist__34243);
return G__34241__delegate(args);
});
G__34241.cljs$core$IFn$_invoke$arity$variadic = G__34241__delegate;
return G__34241;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34245 = cljs.core._EQ_;
var expr__34246 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34245.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34246))){
var path_parts = ((function (pred__34245,expr__34246){
return (function (p1__34244_SHARP_){
return clojure.string.split.call(null,p1__34244_SHARP_,/[\/\\]/);
});})(pred__34245,expr__34246))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34245,expr__34246){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34248){if((e34248 instanceof Error)){
var e = e34248;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34248;

}
}})());
});
;})(path_parts,sep,root,pred__34245,expr__34246))
} else {
if(cljs.core.truth_(pred__34245.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34246))){
return ((function (pred__34245,expr__34246){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__34245,expr__34246){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34245,expr__34246))
);

return deferred.addErrback(((function (deferred,pred__34245,expr__34246){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34245,expr__34246))
);
});
;})(pred__34245,expr__34246))
} else {
return ((function (pred__34245,expr__34246){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34245,expr__34246))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34249,callback){
var map__34252 = p__34249;
var map__34252__$1 = ((((!((map__34252 == null)))?((((map__34252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34252):map__34252);
var file_msg = map__34252__$1;
var request_url = cljs.core.get.call(null,map__34252__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34252,map__34252__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34252,map__34252__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto__){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto__){
return (function (state_34276){
var state_val_34277 = (state_34276[(1)]);
if((state_val_34277 === (7))){
var inst_34272 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
var statearr_34278_34298 = state_34276__$1;
(statearr_34278_34298[(2)] = inst_34272);

(statearr_34278_34298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (1))){
var state_34276__$1 = state_34276;
var statearr_34279_34299 = state_34276__$1;
(statearr_34279_34299[(2)] = null);

(statearr_34279_34299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (4))){
var inst_34256 = (state_34276[(7)]);
var inst_34256__$1 = (state_34276[(2)]);
var state_34276__$1 = (function (){var statearr_34280 = state_34276;
(statearr_34280[(7)] = inst_34256__$1);

return statearr_34280;
})();
if(cljs.core.truth_(inst_34256__$1)){
var statearr_34281_34300 = state_34276__$1;
(statearr_34281_34300[(1)] = (5));

} else {
var statearr_34282_34301 = state_34276__$1;
(statearr_34282_34301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (6))){
var state_34276__$1 = state_34276;
var statearr_34283_34302 = state_34276__$1;
(statearr_34283_34302[(2)] = null);

(statearr_34283_34302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (3))){
var inst_34274 = (state_34276[(2)]);
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34276__$1,inst_34274);
} else {
if((state_val_34277 === (2))){
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34276__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34277 === (11))){
var inst_34268 = (state_34276[(2)]);
var state_34276__$1 = (function (){var statearr_34284 = state_34276;
(statearr_34284[(8)] = inst_34268);

return statearr_34284;
})();
var statearr_34285_34303 = state_34276__$1;
(statearr_34285_34303[(2)] = null);

(statearr_34285_34303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (9))){
var inst_34262 = (state_34276[(9)]);
var inst_34260 = (state_34276[(10)]);
var inst_34264 = inst_34262.call(null,inst_34260);
var state_34276__$1 = state_34276;
var statearr_34286_34304 = state_34276__$1;
(statearr_34286_34304[(2)] = inst_34264);

(statearr_34286_34304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (5))){
var inst_34256 = (state_34276[(7)]);
var inst_34258 = figwheel.client.file_reloading.blocking_load.call(null,inst_34256);
var state_34276__$1 = state_34276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34276__$1,(8),inst_34258);
} else {
if((state_val_34277 === (10))){
var inst_34260 = (state_34276[(10)]);
var inst_34266 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34260);
var state_34276__$1 = state_34276;
var statearr_34287_34305 = state_34276__$1;
(statearr_34287_34305[(2)] = inst_34266);

(statearr_34287_34305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34277 === (8))){
var inst_34256 = (state_34276[(7)]);
var inst_34262 = (state_34276[(9)]);
var inst_34260 = (state_34276[(2)]);
var inst_34261 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34262__$1 = cljs.core.get.call(null,inst_34261,inst_34256);
var state_34276__$1 = (function (){var statearr_34288 = state_34276;
(statearr_34288[(9)] = inst_34262__$1);

(statearr_34288[(10)] = inst_34260);

return statearr_34288;
})();
if(cljs.core.truth_(inst_34262__$1)){
var statearr_34289_34306 = state_34276__$1;
(statearr_34289_34306[(1)] = (9));

} else {
var statearr_34290_34307 = state_34276__$1;
(statearr_34290_34307[(1)] = (10));

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
});})(c__22804__auto__))
;
return ((function (switch__22783__auto__,c__22804__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22784__auto__ = null;
var figwheel$client$file_reloading$state_machine__22784__auto____0 = (function (){
var statearr_34294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34294[(0)] = figwheel$client$file_reloading$state_machine__22784__auto__);

(statearr_34294[(1)] = (1));

return statearr_34294;
});
var figwheel$client$file_reloading$state_machine__22784__auto____1 = (function (state_34276){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_34276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e34295){if((e34295 instanceof Object)){
var ex__22787__auto__ = e34295;
var statearr_34296_34308 = state_34276;
(statearr_34296_34308[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34309 = state_34276;
state_34276 = G__34309;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22784__auto__ = function(state_34276){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22784__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22784__auto____1.call(this,state_34276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22784__auto____0;
figwheel$client$file_reloading$state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22784__auto____1;
return figwheel$client$file_reloading$state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto__))
})();
var state__22806__auto__ = (function (){var statearr_34297 = f__22805__auto__.call(null);
(statearr_34297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto__);

return statearr_34297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto__))
);

return c__22804__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34310,callback){
var map__34313 = p__34310;
var map__34313__$1 = ((((!((map__34313 == null)))?((((map__34313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34313):map__34313);
var file_msg = map__34313__$1;
var namespace = cljs.core.get.call(null,map__34313__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34313,map__34313__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34313,map__34313__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34315){
var map__34318 = p__34315;
var map__34318__$1 = ((((!((map__34318 == null)))?((((map__34318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34318):map__34318);
var file_msg = map__34318__$1;
var namespace = cljs.core.get.call(null,map__34318__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19946__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19946__auto__){
var or__19958__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
} else {
var or__19958__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19958__auto____$1)){
return or__19958__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19946__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34320,callback){
var map__34323 = p__34320;
var map__34323__$1 = ((((!((map__34323 == null)))?((((map__34323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34323):map__34323);
var file_msg = map__34323__$1;
var request_url = cljs.core.get.call(null,map__34323__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34323__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22804__auto___34427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___34427,out){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___34427,out){
return (function (state_34409){
var state_val_34410 = (state_34409[(1)]);
if((state_val_34410 === (1))){
var inst_34383 = cljs.core.seq.call(null,files);
var inst_34384 = cljs.core.first.call(null,inst_34383);
var inst_34385 = cljs.core.next.call(null,inst_34383);
var inst_34386 = files;
var state_34409__$1 = (function (){var statearr_34411 = state_34409;
(statearr_34411[(7)] = inst_34384);

(statearr_34411[(8)] = inst_34385);

(statearr_34411[(9)] = inst_34386);

return statearr_34411;
})();
var statearr_34412_34428 = state_34409__$1;
(statearr_34412_34428[(2)] = null);

(statearr_34412_34428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (2))){
var inst_34392 = (state_34409[(10)]);
var inst_34386 = (state_34409[(9)]);
var inst_34391 = cljs.core.seq.call(null,inst_34386);
var inst_34392__$1 = cljs.core.first.call(null,inst_34391);
var inst_34393 = cljs.core.next.call(null,inst_34391);
var inst_34394 = (inst_34392__$1 == null);
var inst_34395 = cljs.core.not.call(null,inst_34394);
var state_34409__$1 = (function (){var statearr_34413 = state_34409;
(statearr_34413[(11)] = inst_34393);

(statearr_34413[(10)] = inst_34392__$1);

return statearr_34413;
})();
if(inst_34395){
var statearr_34414_34429 = state_34409__$1;
(statearr_34414_34429[(1)] = (4));

} else {
var statearr_34415_34430 = state_34409__$1;
(statearr_34415_34430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (3))){
var inst_34407 = (state_34409[(2)]);
var state_34409__$1 = state_34409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34409__$1,inst_34407);
} else {
if((state_val_34410 === (4))){
var inst_34392 = (state_34409[(10)]);
var inst_34397 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34392);
var state_34409__$1 = state_34409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34409__$1,(7),inst_34397);
} else {
if((state_val_34410 === (5))){
var inst_34403 = cljs.core.async.close_BANG_.call(null,out);
var state_34409__$1 = state_34409;
var statearr_34416_34431 = state_34409__$1;
(statearr_34416_34431[(2)] = inst_34403);

(statearr_34416_34431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (6))){
var inst_34405 = (state_34409[(2)]);
var state_34409__$1 = state_34409;
var statearr_34417_34432 = state_34409__$1;
(statearr_34417_34432[(2)] = inst_34405);

(statearr_34417_34432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34410 === (7))){
var inst_34393 = (state_34409[(11)]);
var inst_34399 = (state_34409[(2)]);
var inst_34400 = cljs.core.async.put_BANG_.call(null,out,inst_34399);
var inst_34386 = inst_34393;
var state_34409__$1 = (function (){var statearr_34418 = state_34409;
(statearr_34418[(12)] = inst_34400);

(statearr_34418[(9)] = inst_34386);

return statearr_34418;
})();
var statearr_34419_34433 = state_34409__$1;
(statearr_34419_34433[(2)] = null);

(statearr_34419_34433[(1)] = (2));


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
});})(c__22804__auto___34427,out))
;
return ((function (switch__22783__auto__,c__22804__auto___34427,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22784__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22784__auto____0 = (function (){
var statearr_34423 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34423[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22784__auto__);

(statearr_34423[(1)] = (1));

return statearr_34423;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22784__auto____1 = (function (state_34409){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_34409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e34424){if((e34424 instanceof Object)){
var ex__22787__auto__ = e34424;
var statearr_34425_34434 = state_34409;
(statearr_34425_34434[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34435 = state_34409;
state_34409 = G__34435;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22784__auto__ = function(state_34409){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22784__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22784__auto____1.call(this,state_34409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22784__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22784__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___34427,out))
})();
var state__22806__auto__ = (function (){var statearr_34426 = f__22805__auto__.call(null);
(statearr_34426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___34427);

return statearr_34426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___34427,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34436,opts){
var map__34440 = p__34436;
var map__34440__$1 = ((((!((map__34440 == null)))?((((map__34440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34440):map__34440);
var eval_body__$1 = cljs.core.get.call(null,map__34440__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34440__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19946__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19946__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19946__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34442){var e = e34442;
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
return (function (p1__34443_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34443_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34452){
var vec__34453 = p__34452;
var k = cljs.core.nth.call(null,vec__34453,(0),null);
var v = cljs.core.nth.call(null,vec__34453,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34456){
var vec__34457 = p__34456;
var k = cljs.core.nth.call(null,vec__34457,(0),null);
var v = cljs.core.nth.call(null,vec__34457,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34463,p__34464){
var map__34711 = p__34463;
var map__34711__$1 = ((((!((map__34711 == null)))?((((map__34711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34711):map__34711);
var opts = map__34711__$1;
var before_jsload = cljs.core.get.call(null,map__34711__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34711__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34711__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34712 = p__34464;
var map__34712__$1 = ((((!((map__34712 == null)))?((((map__34712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34712):map__34712);
var msg = map__34712__$1;
var files = cljs.core.get.call(null,map__34712__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34712__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34712__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34865){
var state_val_34866 = (state_34865[(1)]);
if((state_val_34866 === (7))){
var inst_34727 = (state_34865[(7)]);
var inst_34726 = (state_34865[(8)]);
var inst_34728 = (state_34865[(9)]);
var inst_34729 = (state_34865[(10)]);
var inst_34734 = cljs.core._nth.call(null,inst_34727,inst_34729);
var inst_34735 = figwheel.client.file_reloading.eval_body.call(null,inst_34734,opts);
var inst_34736 = (inst_34729 + (1));
var tmp34867 = inst_34727;
var tmp34868 = inst_34726;
var tmp34869 = inst_34728;
var inst_34726__$1 = tmp34868;
var inst_34727__$1 = tmp34867;
var inst_34728__$1 = tmp34869;
var inst_34729__$1 = inst_34736;
var state_34865__$1 = (function (){var statearr_34870 = state_34865;
(statearr_34870[(7)] = inst_34727__$1);

(statearr_34870[(8)] = inst_34726__$1);

(statearr_34870[(9)] = inst_34728__$1);

(statearr_34870[(11)] = inst_34735);

(statearr_34870[(10)] = inst_34729__$1);

return statearr_34870;
})();
var statearr_34871_34957 = state_34865__$1;
(statearr_34871_34957[(2)] = null);

(statearr_34871_34957[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (20))){
var inst_34769 = (state_34865[(12)]);
var inst_34777 = figwheel.client.file_reloading.sort_files.call(null,inst_34769);
var state_34865__$1 = state_34865;
var statearr_34872_34958 = state_34865__$1;
(statearr_34872_34958[(2)] = inst_34777);

(statearr_34872_34958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (27))){
var state_34865__$1 = state_34865;
var statearr_34873_34959 = state_34865__$1;
(statearr_34873_34959[(2)] = null);

(statearr_34873_34959[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (1))){
var inst_34718 = (state_34865[(13)]);
var inst_34715 = before_jsload.call(null,files);
var inst_34716 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34717 = (function (){return ((function (inst_34718,inst_34715,inst_34716,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34460_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34460_SHARP_);
});
;})(inst_34718,inst_34715,inst_34716,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34718__$1 = cljs.core.filter.call(null,inst_34717,files);
var inst_34719 = cljs.core.not_empty.call(null,inst_34718__$1);
var state_34865__$1 = (function (){var statearr_34874 = state_34865;
(statearr_34874[(13)] = inst_34718__$1);

(statearr_34874[(14)] = inst_34716);

(statearr_34874[(15)] = inst_34715);

return statearr_34874;
})();
if(cljs.core.truth_(inst_34719)){
var statearr_34875_34960 = state_34865__$1;
(statearr_34875_34960[(1)] = (2));

} else {
var statearr_34876_34961 = state_34865__$1;
(statearr_34876_34961[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (24))){
var state_34865__$1 = state_34865;
var statearr_34877_34962 = state_34865__$1;
(statearr_34877_34962[(2)] = null);

(statearr_34877_34962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (39))){
var inst_34819 = (state_34865[(16)]);
var state_34865__$1 = state_34865;
var statearr_34878_34963 = state_34865__$1;
(statearr_34878_34963[(2)] = inst_34819);

(statearr_34878_34963[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (46))){
var inst_34860 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34879_34964 = state_34865__$1;
(statearr_34879_34964[(2)] = inst_34860);

(statearr_34879_34964[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (4))){
var inst_34763 = (state_34865[(2)]);
var inst_34764 = cljs.core.List.EMPTY;
var inst_34765 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34764);
var inst_34766 = (function (){return ((function (inst_34763,inst_34764,inst_34765,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34461_SHARP_){
var and__19946__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34461_SHARP_);
if(cljs.core.truth_(and__19946__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34461_SHARP_));
} else {
return and__19946__auto__;
}
});
;})(inst_34763,inst_34764,inst_34765,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34767 = cljs.core.filter.call(null,inst_34766,files);
var inst_34768 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34769 = cljs.core.concat.call(null,inst_34767,inst_34768);
var state_34865__$1 = (function (){var statearr_34880 = state_34865;
(statearr_34880[(12)] = inst_34769);

(statearr_34880[(17)] = inst_34763);

(statearr_34880[(18)] = inst_34765);

return statearr_34880;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34881_34965 = state_34865__$1;
(statearr_34881_34965[(1)] = (16));

} else {
var statearr_34882_34966 = state_34865__$1;
(statearr_34882_34966[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (15))){
var inst_34753 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34883_34967 = state_34865__$1;
(statearr_34883_34967[(2)] = inst_34753);

(statearr_34883_34967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (21))){
var inst_34779 = (state_34865[(19)]);
var inst_34779__$1 = (state_34865[(2)]);
var inst_34780 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34779__$1);
var state_34865__$1 = (function (){var statearr_34884 = state_34865;
(statearr_34884[(19)] = inst_34779__$1);

return statearr_34884;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34865__$1,(22),inst_34780);
} else {
if((state_val_34866 === (31))){
var inst_34863 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34865__$1,inst_34863);
} else {
if((state_val_34866 === (32))){
var inst_34819 = (state_34865[(16)]);
var inst_34824 = inst_34819.cljs$lang$protocol_mask$partition0$;
var inst_34825 = (inst_34824 & (64));
var inst_34826 = inst_34819.cljs$core$ISeq$;
var inst_34827 = (inst_34825) || (inst_34826);
var state_34865__$1 = state_34865;
if(cljs.core.truth_(inst_34827)){
var statearr_34885_34968 = state_34865__$1;
(statearr_34885_34968[(1)] = (35));

} else {
var statearr_34886_34969 = state_34865__$1;
(statearr_34886_34969[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (40))){
var inst_34840 = (state_34865[(20)]);
var inst_34839 = (state_34865[(2)]);
var inst_34840__$1 = cljs.core.get.call(null,inst_34839,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34841 = cljs.core.get.call(null,inst_34839,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34842 = cljs.core.not_empty.call(null,inst_34840__$1);
var state_34865__$1 = (function (){var statearr_34887 = state_34865;
(statearr_34887[(20)] = inst_34840__$1);

(statearr_34887[(21)] = inst_34841);

return statearr_34887;
})();
if(cljs.core.truth_(inst_34842)){
var statearr_34888_34970 = state_34865__$1;
(statearr_34888_34970[(1)] = (41));

} else {
var statearr_34889_34971 = state_34865__$1;
(statearr_34889_34971[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (33))){
var state_34865__$1 = state_34865;
var statearr_34890_34972 = state_34865__$1;
(statearr_34890_34972[(2)] = false);

(statearr_34890_34972[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (13))){
var inst_34739 = (state_34865[(22)]);
var inst_34743 = cljs.core.chunk_first.call(null,inst_34739);
var inst_34744 = cljs.core.chunk_rest.call(null,inst_34739);
var inst_34745 = cljs.core.count.call(null,inst_34743);
var inst_34726 = inst_34744;
var inst_34727 = inst_34743;
var inst_34728 = inst_34745;
var inst_34729 = (0);
var state_34865__$1 = (function (){var statearr_34891 = state_34865;
(statearr_34891[(7)] = inst_34727);

(statearr_34891[(8)] = inst_34726);

(statearr_34891[(9)] = inst_34728);

(statearr_34891[(10)] = inst_34729);

return statearr_34891;
})();
var statearr_34892_34973 = state_34865__$1;
(statearr_34892_34973[(2)] = null);

(statearr_34892_34973[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (22))){
var inst_34787 = (state_34865[(23)]);
var inst_34782 = (state_34865[(24)]);
var inst_34779 = (state_34865[(19)]);
var inst_34783 = (state_34865[(25)]);
var inst_34782__$1 = (state_34865[(2)]);
var inst_34783__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34782__$1);
var inst_34784 = (function (){var all_files = inst_34779;
var res_SINGLEQUOTE_ = inst_34782__$1;
var res = inst_34783__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34787,inst_34782,inst_34779,inst_34783,inst_34782__$1,inst_34783__$1,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34462_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34462_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34787,inst_34782,inst_34779,inst_34783,inst_34782__$1,inst_34783__$1,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34785 = cljs.core.filter.call(null,inst_34784,inst_34782__$1);
var inst_34786 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34787__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34786);
var inst_34788 = cljs.core.not_empty.call(null,inst_34787__$1);
var state_34865__$1 = (function (){var statearr_34893 = state_34865;
(statearr_34893[(23)] = inst_34787__$1);

(statearr_34893[(24)] = inst_34782__$1);

(statearr_34893[(26)] = inst_34785);

(statearr_34893[(25)] = inst_34783__$1);

return statearr_34893;
})();
if(cljs.core.truth_(inst_34788)){
var statearr_34894_34974 = state_34865__$1;
(statearr_34894_34974[(1)] = (23));

} else {
var statearr_34895_34975 = state_34865__$1;
(statearr_34895_34975[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (36))){
var state_34865__$1 = state_34865;
var statearr_34896_34976 = state_34865__$1;
(statearr_34896_34976[(2)] = false);

(statearr_34896_34976[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (41))){
var inst_34840 = (state_34865[(20)]);
var inst_34844 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34845 = cljs.core.map.call(null,inst_34844,inst_34840);
var inst_34846 = cljs.core.pr_str.call(null,inst_34845);
var inst_34847 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34846)].join('');
var inst_34848 = figwheel.client.utils.log.call(null,inst_34847);
var state_34865__$1 = state_34865;
var statearr_34897_34977 = state_34865__$1;
(statearr_34897_34977[(2)] = inst_34848);

(statearr_34897_34977[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (43))){
var inst_34841 = (state_34865[(21)]);
var inst_34851 = (state_34865[(2)]);
var inst_34852 = cljs.core.not_empty.call(null,inst_34841);
var state_34865__$1 = (function (){var statearr_34898 = state_34865;
(statearr_34898[(27)] = inst_34851);

return statearr_34898;
})();
if(cljs.core.truth_(inst_34852)){
var statearr_34899_34978 = state_34865__$1;
(statearr_34899_34978[(1)] = (44));

} else {
var statearr_34900_34979 = state_34865__$1;
(statearr_34900_34979[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (29))){
var inst_34787 = (state_34865[(23)]);
var inst_34819 = (state_34865[(16)]);
var inst_34782 = (state_34865[(24)]);
var inst_34779 = (state_34865[(19)]);
var inst_34785 = (state_34865[(26)]);
var inst_34783 = (state_34865[(25)]);
var inst_34815 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34818 = (function (){var all_files = inst_34779;
var res_SINGLEQUOTE_ = inst_34782;
var res = inst_34783;
var files_not_loaded = inst_34785;
var dependencies_that_loaded = inst_34787;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34787,inst_34819,inst_34782,inst_34779,inst_34785,inst_34783,inst_34815,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34817){
var map__34901 = p__34817;
var map__34901__$1 = ((((!((map__34901 == null)))?((((map__34901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34901):map__34901);
var namespace = cljs.core.get.call(null,map__34901__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34787,inst_34819,inst_34782,inst_34779,inst_34785,inst_34783,inst_34815,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34819__$1 = cljs.core.group_by.call(null,inst_34818,inst_34785);
var inst_34821 = (inst_34819__$1 == null);
var inst_34822 = cljs.core.not.call(null,inst_34821);
var state_34865__$1 = (function (){var statearr_34903 = state_34865;
(statearr_34903[(16)] = inst_34819__$1);

(statearr_34903[(28)] = inst_34815);

return statearr_34903;
})();
if(inst_34822){
var statearr_34904_34980 = state_34865__$1;
(statearr_34904_34980[(1)] = (32));

} else {
var statearr_34905_34981 = state_34865__$1;
(statearr_34905_34981[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (44))){
var inst_34841 = (state_34865[(21)]);
var inst_34854 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34841);
var inst_34855 = cljs.core.pr_str.call(null,inst_34854);
var inst_34856 = [cljs.core.str("not required: "),cljs.core.str(inst_34855)].join('');
var inst_34857 = figwheel.client.utils.log.call(null,inst_34856);
var state_34865__$1 = state_34865;
var statearr_34906_34982 = state_34865__$1;
(statearr_34906_34982[(2)] = inst_34857);

(statearr_34906_34982[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (6))){
var inst_34760 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34907_34983 = state_34865__$1;
(statearr_34907_34983[(2)] = inst_34760);

(statearr_34907_34983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (28))){
var inst_34785 = (state_34865[(26)]);
var inst_34812 = (state_34865[(2)]);
var inst_34813 = cljs.core.not_empty.call(null,inst_34785);
var state_34865__$1 = (function (){var statearr_34908 = state_34865;
(statearr_34908[(29)] = inst_34812);

return statearr_34908;
})();
if(cljs.core.truth_(inst_34813)){
var statearr_34909_34984 = state_34865__$1;
(statearr_34909_34984[(1)] = (29));

} else {
var statearr_34910_34985 = state_34865__$1;
(statearr_34910_34985[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (25))){
var inst_34783 = (state_34865[(25)]);
var inst_34799 = (state_34865[(2)]);
var inst_34800 = cljs.core.not_empty.call(null,inst_34783);
var state_34865__$1 = (function (){var statearr_34911 = state_34865;
(statearr_34911[(30)] = inst_34799);

return statearr_34911;
})();
if(cljs.core.truth_(inst_34800)){
var statearr_34912_34986 = state_34865__$1;
(statearr_34912_34986[(1)] = (26));

} else {
var statearr_34913_34987 = state_34865__$1;
(statearr_34913_34987[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (34))){
var inst_34834 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
if(cljs.core.truth_(inst_34834)){
var statearr_34914_34988 = state_34865__$1;
(statearr_34914_34988[(1)] = (38));

} else {
var statearr_34915_34989 = state_34865__$1;
(statearr_34915_34989[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (17))){
var state_34865__$1 = state_34865;
var statearr_34916_34990 = state_34865__$1;
(statearr_34916_34990[(2)] = recompile_dependents);

(statearr_34916_34990[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (3))){
var state_34865__$1 = state_34865;
var statearr_34917_34991 = state_34865__$1;
(statearr_34917_34991[(2)] = null);

(statearr_34917_34991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (12))){
var inst_34756 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34918_34992 = state_34865__$1;
(statearr_34918_34992[(2)] = inst_34756);

(statearr_34918_34992[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (2))){
var inst_34718 = (state_34865[(13)]);
var inst_34725 = cljs.core.seq.call(null,inst_34718);
var inst_34726 = inst_34725;
var inst_34727 = null;
var inst_34728 = (0);
var inst_34729 = (0);
var state_34865__$1 = (function (){var statearr_34919 = state_34865;
(statearr_34919[(7)] = inst_34727);

(statearr_34919[(8)] = inst_34726);

(statearr_34919[(9)] = inst_34728);

(statearr_34919[(10)] = inst_34729);

return statearr_34919;
})();
var statearr_34920_34993 = state_34865__$1;
(statearr_34920_34993[(2)] = null);

(statearr_34920_34993[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (23))){
var inst_34787 = (state_34865[(23)]);
var inst_34782 = (state_34865[(24)]);
var inst_34779 = (state_34865[(19)]);
var inst_34785 = (state_34865[(26)]);
var inst_34783 = (state_34865[(25)]);
var inst_34790 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34792 = (function (){var all_files = inst_34779;
var res_SINGLEQUOTE_ = inst_34782;
var res = inst_34783;
var files_not_loaded = inst_34785;
var dependencies_that_loaded = inst_34787;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34787,inst_34782,inst_34779,inst_34785,inst_34783,inst_34790,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34791){
var map__34921 = p__34791;
var map__34921__$1 = ((((!((map__34921 == null)))?((((map__34921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34921):map__34921);
var request_url = cljs.core.get.call(null,map__34921__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34787,inst_34782,inst_34779,inst_34785,inst_34783,inst_34790,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34793 = cljs.core.reverse.call(null,inst_34787);
var inst_34794 = cljs.core.map.call(null,inst_34792,inst_34793);
var inst_34795 = cljs.core.pr_str.call(null,inst_34794);
var inst_34796 = figwheel.client.utils.log.call(null,inst_34795);
var state_34865__$1 = (function (){var statearr_34923 = state_34865;
(statearr_34923[(31)] = inst_34790);

return statearr_34923;
})();
var statearr_34924_34994 = state_34865__$1;
(statearr_34924_34994[(2)] = inst_34796);

(statearr_34924_34994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (35))){
var state_34865__$1 = state_34865;
var statearr_34925_34995 = state_34865__$1;
(statearr_34925_34995[(2)] = true);

(statearr_34925_34995[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (19))){
var inst_34769 = (state_34865[(12)]);
var inst_34775 = figwheel.client.file_reloading.expand_files.call(null,inst_34769);
var state_34865__$1 = state_34865;
var statearr_34926_34996 = state_34865__$1;
(statearr_34926_34996[(2)] = inst_34775);

(statearr_34926_34996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (11))){
var state_34865__$1 = state_34865;
var statearr_34927_34997 = state_34865__$1;
(statearr_34927_34997[(2)] = null);

(statearr_34927_34997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (9))){
var inst_34758 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34928_34998 = state_34865__$1;
(statearr_34928_34998[(2)] = inst_34758);

(statearr_34928_34998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (5))){
var inst_34728 = (state_34865[(9)]);
var inst_34729 = (state_34865[(10)]);
var inst_34731 = (inst_34729 < inst_34728);
var inst_34732 = inst_34731;
var state_34865__$1 = state_34865;
if(cljs.core.truth_(inst_34732)){
var statearr_34929_34999 = state_34865__$1;
(statearr_34929_34999[(1)] = (7));

} else {
var statearr_34930_35000 = state_34865__$1;
(statearr_34930_35000[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (14))){
var inst_34739 = (state_34865[(22)]);
var inst_34748 = cljs.core.first.call(null,inst_34739);
var inst_34749 = figwheel.client.file_reloading.eval_body.call(null,inst_34748,opts);
var inst_34750 = cljs.core.next.call(null,inst_34739);
var inst_34726 = inst_34750;
var inst_34727 = null;
var inst_34728 = (0);
var inst_34729 = (0);
var state_34865__$1 = (function (){var statearr_34931 = state_34865;
(statearr_34931[(7)] = inst_34727);

(statearr_34931[(8)] = inst_34726);

(statearr_34931[(9)] = inst_34728);

(statearr_34931[(10)] = inst_34729);

(statearr_34931[(32)] = inst_34749);

return statearr_34931;
})();
var statearr_34932_35001 = state_34865__$1;
(statearr_34932_35001[(2)] = null);

(statearr_34932_35001[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (45))){
var state_34865__$1 = state_34865;
var statearr_34933_35002 = state_34865__$1;
(statearr_34933_35002[(2)] = null);

(statearr_34933_35002[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (26))){
var inst_34787 = (state_34865[(23)]);
var inst_34782 = (state_34865[(24)]);
var inst_34779 = (state_34865[(19)]);
var inst_34785 = (state_34865[(26)]);
var inst_34783 = (state_34865[(25)]);
var inst_34802 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34804 = (function (){var all_files = inst_34779;
var res_SINGLEQUOTE_ = inst_34782;
var res = inst_34783;
var files_not_loaded = inst_34785;
var dependencies_that_loaded = inst_34787;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34787,inst_34782,inst_34779,inst_34785,inst_34783,inst_34802,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34803){
var map__34934 = p__34803;
var map__34934__$1 = ((((!((map__34934 == null)))?((((map__34934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34934):map__34934);
var namespace = cljs.core.get.call(null,map__34934__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34787,inst_34782,inst_34779,inst_34785,inst_34783,inst_34802,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34805 = cljs.core.map.call(null,inst_34804,inst_34783);
var inst_34806 = cljs.core.pr_str.call(null,inst_34805);
var inst_34807 = figwheel.client.utils.log.call(null,inst_34806);
var inst_34808 = (function (){var all_files = inst_34779;
var res_SINGLEQUOTE_ = inst_34782;
var res = inst_34783;
var files_not_loaded = inst_34785;
var dependencies_that_loaded = inst_34787;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34787,inst_34782,inst_34779,inst_34785,inst_34783,inst_34802,inst_34804,inst_34805,inst_34806,inst_34807,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34787,inst_34782,inst_34779,inst_34785,inst_34783,inst_34802,inst_34804,inst_34805,inst_34806,inst_34807,state_val_34866,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34809 = setTimeout(inst_34808,(10));
var state_34865__$1 = (function (){var statearr_34936 = state_34865;
(statearr_34936[(33)] = inst_34807);

(statearr_34936[(34)] = inst_34802);

return statearr_34936;
})();
var statearr_34937_35003 = state_34865__$1;
(statearr_34937_35003[(2)] = inst_34809);

(statearr_34937_35003[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (16))){
var state_34865__$1 = state_34865;
var statearr_34938_35004 = state_34865__$1;
(statearr_34938_35004[(2)] = reload_dependents);

(statearr_34938_35004[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (38))){
var inst_34819 = (state_34865[(16)]);
var inst_34836 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34819);
var state_34865__$1 = state_34865;
var statearr_34939_35005 = state_34865__$1;
(statearr_34939_35005[(2)] = inst_34836);

(statearr_34939_35005[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (30))){
var state_34865__$1 = state_34865;
var statearr_34940_35006 = state_34865__$1;
(statearr_34940_35006[(2)] = null);

(statearr_34940_35006[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (10))){
var inst_34739 = (state_34865[(22)]);
var inst_34741 = cljs.core.chunked_seq_QMARK_.call(null,inst_34739);
var state_34865__$1 = state_34865;
if(inst_34741){
var statearr_34941_35007 = state_34865__$1;
(statearr_34941_35007[(1)] = (13));

} else {
var statearr_34942_35008 = state_34865__$1;
(statearr_34942_35008[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (18))){
var inst_34773 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
if(cljs.core.truth_(inst_34773)){
var statearr_34943_35009 = state_34865__$1;
(statearr_34943_35009[(1)] = (19));

} else {
var statearr_34944_35010 = state_34865__$1;
(statearr_34944_35010[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (42))){
var state_34865__$1 = state_34865;
var statearr_34945_35011 = state_34865__$1;
(statearr_34945_35011[(2)] = null);

(statearr_34945_35011[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (37))){
var inst_34831 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34946_35012 = state_34865__$1;
(statearr_34946_35012[(2)] = inst_34831);

(statearr_34946_35012[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (8))){
var inst_34726 = (state_34865[(8)]);
var inst_34739 = (state_34865[(22)]);
var inst_34739__$1 = cljs.core.seq.call(null,inst_34726);
var state_34865__$1 = (function (){var statearr_34947 = state_34865;
(statearr_34947[(22)] = inst_34739__$1);

return statearr_34947;
})();
if(inst_34739__$1){
var statearr_34948_35013 = state_34865__$1;
(statearr_34948_35013[(1)] = (10));

} else {
var statearr_34949_35014 = state_34865__$1;
(statearr_34949_35014[(1)] = (11));

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
});})(c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22783__auto__,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22784__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22784__auto____0 = (function (){
var statearr_34953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34953[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22784__auto__);

(statearr_34953[(1)] = (1));

return statearr_34953;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22784__auto____1 = (function (state_34865){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_34865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e34954){if((e34954 instanceof Object)){
var ex__22787__auto__ = e34954;
var statearr_34955_35015 = state_34865;
(statearr_34955_35015[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35016 = state_34865;
state_34865 = G__35016;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22784__auto__ = function(state_34865){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22784__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22784__auto____1.call(this,state_34865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22784__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22784__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22806__auto__ = (function (){var statearr_34956 = f__22805__auto__.call(null);
(statearr_34956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto__);

return statearr_34956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto__,map__34711,map__34711__$1,opts,before_jsload,on_jsload,reload_dependents,map__34712,map__34712__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22804__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35019,link){
var map__35022 = p__35019;
var map__35022__$1 = ((((!((map__35022 == null)))?((((map__35022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35022):map__35022);
var file = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35022,map__35022__$1,file){
return (function (p1__35017_SHARP_,p2__35018_SHARP_){
if(cljs.core._EQ_.call(null,p1__35017_SHARP_,p2__35018_SHARP_)){
return p1__35017_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35022,map__35022__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35028){
var map__35029 = p__35028;
var map__35029__$1 = ((((!((map__35029 == null)))?((((map__35029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35029):map__35029);
var match_length = cljs.core.get.call(null,map__35029__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35029__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35024_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35024_SHARP_);
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
var args35031 = [];
var len__21033__auto___35034 = arguments.length;
var i__21034__auto___35035 = (0);
while(true){
if((i__21034__auto___35035 < len__21033__auto___35034)){
args35031.push((arguments[i__21034__auto___35035]));

var G__35036 = (i__21034__auto___35035 + (1));
i__21034__auto___35035 = G__35036;
continue;
} else {
}
break;
}

var G__35033 = args35031.length;
switch (G__35033) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35031.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35038_SHARP_,p2__35039_SHARP_){
return cljs.core.assoc.call(null,p1__35038_SHARP_,cljs.core.get.call(null,p2__35039_SHARP_,key),p2__35039_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35040){
var map__35043 = p__35040;
var map__35043__$1 = ((((!((map__35043 == null)))?((((map__35043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35043):map__35043);
var f_data = map__35043__$1;
var file = cljs.core.get.call(null,map__35043__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35045,files_msg){
var map__35052 = p__35045;
var map__35052__$1 = ((((!((map__35052 == null)))?((((map__35052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35052):map__35052);
var opts = map__35052__$1;
var on_cssload = cljs.core.get.call(null,map__35052__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35054_35058 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35055_35059 = null;
var count__35056_35060 = (0);
var i__35057_35061 = (0);
while(true){
if((i__35057_35061 < count__35056_35060)){
var f_35062 = cljs.core._nth.call(null,chunk__35055_35059,i__35057_35061);
figwheel.client.file_reloading.reload_css_file.call(null,f_35062);

var G__35063 = seq__35054_35058;
var G__35064 = chunk__35055_35059;
var G__35065 = count__35056_35060;
var G__35066 = (i__35057_35061 + (1));
seq__35054_35058 = G__35063;
chunk__35055_35059 = G__35064;
count__35056_35060 = G__35065;
i__35057_35061 = G__35066;
continue;
} else {
var temp__4657__auto___35067 = cljs.core.seq.call(null,seq__35054_35058);
if(temp__4657__auto___35067){
var seq__35054_35068__$1 = temp__4657__auto___35067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35054_35068__$1)){
var c__20769__auto___35069 = cljs.core.chunk_first.call(null,seq__35054_35068__$1);
var G__35070 = cljs.core.chunk_rest.call(null,seq__35054_35068__$1);
var G__35071 = c__20769__auto___35069;
var G__35072 = cljs.core.count.call(null,c__20769__auto___35069);
var G__35073 = (0);
seq__35054_35058 = G__35070;
chunk__35055_35059 = G__35071;
count__35056_35060 = G__35072;
i__35057_35061 = G__35073;
continue;
} else {
var f_35074 = cljs.core.first.call(null,seq__35054_35068__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35074);

var G__35075 = cljs.core.next.call(null,seq__35054_35068__$1);
var G__35076 = null;
var G__35077 = (0);
var G__35078 = (0);
seq__35054_35058 = G__35075;
chunk__35055_35059 = G__35076;
count__35056_35060 = G__35077;
i__35057_35061 = G__35078;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35052,map__35052__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__35052,map__35052__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1468965294386