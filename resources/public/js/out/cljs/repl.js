// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36089){
var map__36114 = p__36089;
var map__36114__$1 = ((((!((map__36114 == null)))?((((map__36114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36114):map__36114);
var m = map__36114__$1;
var n = cljs.core.get.call(null,map__36114__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36114__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36116_36138 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36117_36139 = null;
var count__36118_36140 = (0);
var i__36119_36141 = (0);
while(true){
if((i__36119_36141 < count__36118_36140)){
var f_36142 = cljs.core._nth.call(null,chunk__36117_36139,i__36119_36141);
cljs.core.println.call(null,"  ",f_36142);

var G__36143 = seq__36116_36138;
var G__36144 = chunk__36117_36139;
var G__36145 = count__36118_36140;
var G__36146 = (i__36119_36141 + (1));
seq__36116_36138 = G__36143;
chunk__36117_36139 = G__36144;
count__36118_36140 = G__36145;
i__36119_36141 = G__36146;
continue;
} else {
var temp__4657__auto___36147 = cljs.core.seq.call(null,seq__36116_36138);
if(temp__4657__auto___36147){
var seq__36116_36148__$1 = temp__4657__auto___36147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36116_36148__$1)){
var c__20769__auto___36149 = cljs.core.chunk_first.call(null,seq__36116_36148__$1);
var G__36150 = cljs.core.chunk_rest.call(null,seq__36116_36148__$1);
var G__36151 = c__20769__auto___36149;
var G__36152 = cljs.core.count.call(null,c__20769__auto___36149);
var G__36153 = (0);
seq__36116_36138 = G__36150;
chunk__36117_36139 = G__36151;
count__36118_36140 = G__36152;
i__36119_36141 = G__36153;
continue;
} else {
var f_36154 = cljs.core.first.call(null,seq__36116_36148__$1);
cljs.core.println.call(null,"  ",f_36154);

var G__36155 = cljs.core.next.call(null,seq__36116_36148__$1);
var G__36156 = null;
var G__36157 = (0);
var G__36158 = (0);
seq__36116_36138 = G__36155;
chunk__36117_36139 = G__36156;
count__36118_36140 = G__36157;
i__36119_36141 = G__36158;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36159 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19958__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36159);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36159)))?cljs.core.second.call(null,arglists_36159):arglists_36159));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36120_36160 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36121_36161 = null;
var count__36122_36162 = (0);
var i__36123_36163 = (0);
while(true){
if((i__36123_36163 < count__36122_36162)){
var vec__36124_36164 = cljs.core._nth.call(null,chunk__36121_36161,i__36123_36163);
var name_36165 = cljs.core.nth.call(null,vec__36124_36164,(0),null);
var map__36127_36166 = cljs.core.nth.call(null,vec__36124_36164,(1),null);
var map__36127_36167__$1 = ((((!((map__36127_36166 == null)))?((((map__36127_36166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36127_36166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36127_36166):map__36127_36166);
var doc_36168 = cljs.core.get.call(null,map__36127_36167__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36169 = cljs.core.get.call(null,map__36127_36167__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36165);

cljs.core.println.call(null," ",arglists_36169);

if(cljs.core.truth_(doc_36168)){
cljs.core.println.call(null," ",doc_36168);
} else {
}

var G__36170 = seq__36120_36160;
var G__36171 = chunk__36121_36161;
var G__36172 = count__36122_36162;
var G__36173 = (i__36123_36163 + (1));
seq__36120_36160 = G__36170;
chunk__36121_36161 = G__36171;
count__36122_36162 = G__36172;
i__36123_36163 = G__36173;
continue;
} else {
var temp__4657__auto___36174 = cljs.core.seq.call(null,seq__36120_36160);
if(temp__4657__auto___36174){
var seq__36120_36175__$1 = temp__4657__auto___36174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36120_36175__$1)){
var c__20769__auto___36176 = cljs.core.chunk_first.call(null,seq__36120_36175__$1);
var G__36177 = cljs.core.chunk_rest.call(null,seq__36120_36175__$1);
var G__36178 = c__20769__auto___36176;
var G__36179 = cljs.core.count.call(null,c__20769__auto___36176);
var G__36180 = (0);
seq__36120_36160 = G__36177;
chunk__36121_36161 = G__36178;
count__36122_36162 = G__36179;
i__36123_36163 = G__36180;
continue;
} else {
var vec__36129_36181 = cljs.core.first.call(null,seq__36120_36175__$1);
var name_36182 = cljs.core.nth.call(null,vec__36129_36181,(0),null);
var map__36132_36183 = cljs.core.nth.call(null,vec__36129_36181,(1),null);
var map__36132_36184__$1 = ((((!((map__36132_36183 == null)))?((((map__36132_36183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36132_36183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36132_36183):map__36132_36183);
var doc_36185 = cljs.core.get.call(null,map__36132_36184__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36186 = cljs.core.get.call(null,map__36132_36184__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36182);

cljs.core.println.call(null," ",arglists_36186);

if(cljs.core.truth_(doc_36185)){
cljs.core.println.call(null," ",doc_36185);
} else {
}

var G__36187 = cljs.core.next.call(null,seq__36120_36175__$1);
var G__36188 = null;
var G__36189 = (0);
var G__36190 = (0);
seq__36120_36160 = G__36187;
chunk__36121_36161 = G__36188;
count__36122_36162 = G__36189;
i__36123_36163 = G__36190;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36134 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36135 = null;
var count__36136 = (0);
var i__36137 = (0);
while(true){
if((i__36137 < count__36136)){
var role = cljs.core._nth.call(null,chunk__36135,i__36137);
var temp__4657__auto___36191__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36191__$1)){
var spec_36192 = temp__4657__auto___36191__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36192));
} else {
}

var G__36193 = seq__36134;
var G__36194 = chunk__36135;
var G__36195 = count__36136;
var G__36196 = (i__36137 + (1));
seq__36134 = G__36193;
chunk__36135 = G__36194;
count__36136 = G__36195;
i__36137 = G__36196;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36134);
if(temp__4657__auto____$1){
var seq__36134__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36134__$1)){
var c__20769__auto__ = cljs.core.chunk_first.call(null,seq__36134__$1);
var G__36197 = cljs.core.chunk_rest.call(null,seq__36134__$1);
var G__36198 = c__20769__auto__;
var G__36199 = cljs.core.count.call(null,c__20769__auto__);
var G__36200 = (0);
seq__36134 = G__36197;
chunk__36135 = G__36198;
count__36136 = G__36199;
i__36137 = G__36200;
continue;
} else {
var role = cljs.core.first.call(null,seq__36134__$1);
var temp__4657__auto___36201__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36201__$2)){
var spec_36202 = temp__4657__auto___36201__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36202));
} else {
}

var G__36203 = cljs.core.next.call(null,seq__36134__$1);
var G__36204 = null;
var G__36205 = (0);
var G__36206 = (0);
seq__36134 = G__36203;
chunk__36135 = G__36204;
count__36136 = G__36205;
i__36137 = G__36206;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1468965296400