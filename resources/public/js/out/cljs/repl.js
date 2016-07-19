// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27487){
var map__27512 = p__27487;
var map__27512__$1 = ((((!((map__27512 == null)))?((((map__27512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27512):map__27512);
var m = map__27512__$1;
var n = cljs.core.get.call(null,map__27512__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27512__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__27514_27536 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27515_27537 = null;
var count__27516_27538 = (0);
var i__27517_27539 = (0);
while(true){
if((i__27517_27539 < count__27516_27538)){
var f_27540 = cljs.core._nth.call(null,chunk__27515_27537,i__27517_27539);
cljs.core.println.call(null,"  ",f_27540);

var G__27541 = seq__27514_27536;
var G__27542 = chunk__27515_27537;
var G__27543 = count__27516_27538;
var G__27544 = (i__27517_27539 + (1));
seq__27514_27536 = G__27541;
chunk__27515_27537 = G__27542;
count__27516_27538 = G__27543;
i__27517_27539 = G__27544;
continue;
} else {
var temp__4657__auto___27545 = cljs.core.seq.call(null,seq__27514_27536);
if(temp__4657__auto___27545){
var seq__27514_27546__$1 = temp__4657__auto___27545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27514_27546__$1)){
var c__20765__auto___27547 = cljs.core.chunk_first.call(null,seq__27514_27546__$1);
var G__27548 = cljs.core.chunk_rest.call(null,seq__27514_27546__$1);
var G__27549 = c__20765__auto___27547;
var G__27550 = cljs.core.count.call(null,c__20765__auto___27547);
var G__27551 = (0);
seq__27514_27536 = G__27548;
chunk__27515_27537 = G__27549;
count__27516_27538 = G__27550;
i__27517_27539 = G__27551;
continue;
} else {
var f_27552 = cljs.core.first.call(null,seq__27514_27546__$1);
cljs.core.println.call(null,"  ",f_27552);

var G__27553 = cljs.core.next.call(null,seq__27514_27546__$1);
var G__27554 = null;
var G__27555 = (0);
var G__27556 = (0);
seq__27514_27536 = G__27553;
chunk__27515_27537 = G__27554;
count__27516_27538 = G__27555;
i__27517_27539 = G__27556;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27557 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19954__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27557);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27557)))?cljs.core.second.call(null,arglists_27557):arglists_27557));
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
var seq__27518_27558 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27519_27559 = null;
var count__27520_27560 = (0);
var i__27521_27561 = (0);
while(true){
if((i__27521_27561 < count__27520_27560)){
var vec__27522_27562 = cljs.core._nth.call(null,chunk__27519_27559,i__27521_27561);
var name_27563 = cljs.core.nth.call(null,vec__27522_27562,(0),null);
var map__27525_27564 = cljs.core.nth.call(null,vec__27522_27562,(1),null);
var map__27525_27565__$1 = ((((!((map__27525_27564 == null)))?((((map__27525_27564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27525_27564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27525_27564):map__27525_27564);
var doc_27566 = cljs.core.get.call(null,map__27525_27565__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27567 = cljs.core.get.call(null,map__27525_27565__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27563);

cljs.core.println.call(null," ",arglists_27567);

if(cljs.core.truth_(doc_27566)){
cljs.core.println.call(null," ",doc_27566);
} else {
}

var G__27568 = seq__27518_27558;
var G__27569 = chunk__27519_27559;
var G__27570 = count__27520_27560;
var G__27571 = (i__27521_27561 + (1));
seq__27518_27558 = G__27568;
chunk__27519_27559 = G__27569;
count__27520_27560 = G__27570;
i__27521_27561 = G__27571;
continue;
} else {
var temp__4657__auto___27572 = cljs.core.seq.call(null,seq__27518_27558);
if(temp__4657__auto___27572){
var seq__27518_27573__$1 = temp__4657__auto___27572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27518_27573__$1)){
var c__20765__auto___27574 = cljs.core.chunk_first.call(null,seq__27518_27573__$1);
var G__27575 = cljs.core.chunk_rest.call(null,seq__27518_27573__$1);
var G__27576 = c__20765__auto___27574;
var G__27577 = cljs.core.count.call(null,c__20765__auto___27574);
var G__27578 = (0);
seq__27518_27558 = G__27575;
chunk__27519_27559 = G__27576;
count__27520_27560 = G__27577;
i__27521_27561 = G__27578;
continue;
} else {
var vec__27527_27579 = cljs.core.first.call(null,seq__27518_27573__$1);
var name_27580 = cljs.core.nth.call(null,vec__27527_27579,(0),null);
var map__27530_27581 = cljs.core.nth.call(null,vec__27527_27579,(1),null);
var map__27530_27582__$1 = ((((!((map__27530_27581 == null)))?((((map__27530_27581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27530_27581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27530_27581):map__27530_27581);
var doc_27583 = cljs.core.get.call(null,map__27530_27582__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27584 = cljs.core.get.call(null,map__27530_27582__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27580);

cljs.core.println.call(null," ",arglists_27584);

if(cljs.core.truth_(doc_27583)){
cljs.core.println.call(null," ",doc_27583);
} else {
}

var G__27585 = cljs.core.next.call(null,seq__27518_27573__$1);
var G__27586 = null;
var G__27587 = (0);
var G__27588 = (0);
seq__27518_27558 = G__27585;
chunk__27519_27559 = G__27586;
count__27520_27560 = G__27587;
i__27521_27561 = G__27588;
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

var seq__27532 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27533 = null;
var count__27534 = (0);
var i__27535 = (0);
while(true){
if((i__27535 < count__27534)){
var role = cljs.core._nth.call(null,chunk__27533,i__27535);
var temp__4657__auto___27589__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27589__$1)){
var spec_27590 = temp__4657__auto___27589__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_27590));
} else {
}

var G__27591 = seq__27532;
var G__27592 = chunk__27533;
var G__27593 = count__27534;
var G__27594 = (i__27535 + (1));
seq__27532 = G__27591;
chunk__27533 = G__27592;
count__27534 = G__27593;
i__27535 = G__27594;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__27532);
if(temp__4657__auto____$1){
var seq__27532__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27532__$1)){
var c__20765__auto__ = cljs.core.chunk_first.call(null,seq__27532__$1);
var G__27595 = cljs.core.chunk_rest.call(null,seq__27532__$1);
var G__27596 = c__20765__auto__;
var G__27597 = cljs.core.count.call(null,c__20765__auto__);
var G__27598 = (0);
seq__27532 = G__27595;
chunk__27533 = G__27596;
count__27534 = G__27597;
i__27535 = G__27598;
continue;
} else {
var role = cljs.core.first.call(null,seq__27532__$1);
var temp__4657__auto___27599__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27599__$2)){
var spec_27600 = temp__4657__auto___27599__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_27600));
} else {
}

var G__27601 = cljs.core.next.call(null,seq__27532__$1);
var G__27602 = null;
var G__27603 = (0);
var G__27604 = (0);
seq__27532 = G__27601;
chunk__27533 = G__27602;
count__27534 = G__27603;
i__27535 = G__27604;
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

//# sourceMappingURL=repl.js.map?rel=1468882712121