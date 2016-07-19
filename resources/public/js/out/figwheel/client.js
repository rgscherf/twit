// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args29633 = [];
var len__21029__auto___29636 = arguments.length;
var i__21030__auto___29637 = (0);
while(true){
if((i__21030__auto___29637 < len__21029__auto___29636)){
args29633.push((arguments[i__21030__auto___29637]));

var G__29638 = (i__21030__auto___29637 + (1));
i__21030__auto___29637 = G__29638;
continue;
} else {
}
break;
}

var G__29635 = args29633.length;
switch (G__29635) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29633.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21036__auto__ = [];
var len__21029__auto___29641 = arguments.length;
var i__21030__auto___29642 = (0);
while(true){
if((i__21030__auto___29642 < len__21029__auto___29641)){
args__21036__auto__.push((arguments[i__21030__auto___29642]));

var G__29643 = (i__21030__auto___29642 + (1));
i__21030__auto___29642 = G__29643;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((0) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21037__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29640){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29640));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21036__auto__ = [];
var len__21029__auto___29645 = arguments.length;
var i__21030__auto___29646 = (0);
while(true){
if((i__21030__auto___29646 < len__21029__auto___29645)){
args__21036__auto__.push((arguments[i__21030__auto___29646]));

var G__29647 = (i__21030__auto___29646 + (1));
i__21030__auto___29646 = G__29647;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((0) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21037__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29644){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29644));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__29648 = cljs.core._EQ_;
var expr__29649 = (function (){var or__19954__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e29652){if((e29652 instanceof Error)){
var e = e29652;
return false;
} else {
throw e29652;

}
}})();
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29648.call(null,"true",expr__29649))){
return true;
} else {
if(cljs.core.truth_(pred__29648.call(null,"false",expr__29649))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29649)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e29654){if((e29654 instanceof Error)){
var e = e29654;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e29654;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29655){
var map__29658 = p__29655;
var map__29658__$1 = ((((!((map__29658 == null)))?((((map__29658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29658):map__29658);
var message = cljs.core.get.call(null,map__29658__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29658__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19954__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19954__auto__)){
return or__19954__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19942__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19942__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19942__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22146__auto___29820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___29820,ch){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___29820,ch){
return (function (state_29789){
var state_val_29790 = (state_29789[(1)]);
if((state_val_29790 === (7))){
var inst_29785 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
var statearr_29791_29821 = state_29789__$1;
(statearr_29791_29821[(2)] = inst_29785);

(statearr_29791_29821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (1))){
var state_29789__$1 = state_29789;
var statearr_29792_29822 = state_29789__$1;
(statearr_29792_29822[(2)] = null);

(statearr_29792_29822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (4))){
var inst_29742 = (state_29789[(7)]);
var inst_29742__$1 = (state_29789[(2)]);
var state_29789__$1 = (function (){var statearr_29793 = state_29789;
(statearr_29793[(7)] = inst_29742__$1);

return statearr_29793;
})();
if(cljs.core.truth_(inst_29742__$1)){
var statearr_29794_29823 = state_29789__$1;
(statearr_29794_29823[(1)] = (5));

} else {
var statearr_29795_29824 = state_29789__$1;
(statearr_29795_29824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (15))){
var inst_29749 = (state_29789[(8)]);
var inst_29764 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29749);
var inst_29765 = cljs.core.first.call(null,inst_29764);
var inst_29766 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29765);
var inst_29767 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29766)].join('');
var inst_29768 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29767);
var state_29789__$1 = state_29789;
var statearr_29796_29825 = state_29789__$1;
(statearr_29796_29825[(2)] = inst_29768);

(statearr_29796_29825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (13))){
var inst_29773 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
var statearr_29797_29826 = state_29789__$1;
(statearr_29797_29826[(2)] = inst_29773);

(statearr_29797_29826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (6))){
var state_29789__$1 = state_29789;
var statearr_29798_29827 = state_29789__$1;
(statearr_29798_29827[(2)] = null);

(statearr_29798_29827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (17))){
var inst_29771 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
var statearr_29799_29828 = state_29789__$1;
(statearr_29799_29828[(2)] = inst_29771);

(statearr_29799_29828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (3))){
var inst_29787 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29789__$1,inst_29787);
} else {
if((state_val_29790 === (12))){
var inst_29748 = (state_29789[(9)]);
var inst_29762 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29748,opts);
var state_29789__$1 = state_29789;
if(cljs.core.truth_(inst_29762)){
var statearr_29800_29829 = state_29789__$1;
(statearr_29800_29829[(1)] = (15));

} else {
var statearr_29801_29830 = state_29789__$1;
(statearr_29801_29830[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (2))){
var state_29789__$1 = state_29789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29789__$1,(4),ch);
} else {
if((state_val_29790 === (11))){
var inst_29749 = (state_29789[(8)]);
var inst_29754 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29755 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29749);
var inst_29756 = cljs.core.async.timeout.call(null,(1000));
var inst_29757 = [inst_29755,inst_29756];
var inst_29758 = (new cljs.core.PersistentVector(null,2,(5),inst_29754,inst_29757,null));
var state_29789__$1 = state_29789;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29789__$1,(14),inst_29758);
} else {
if((state_val_29790 === (9))){
var inst_29749 = (state_29789[(8)]);
var inst_29775 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29776 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29749);
var inst_29777 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29776);
var inst_29778 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29777)].join('');
var inst_29779 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29778);
var state_29789__$1 = (function (){var statearr_29802 = state_29789;
(statearr_29802[(10)] = inst_29775);

return statearr_29802;
})();
var statearr_29803_29831 = state_29789__$1;
(statearr_29803_29831[(2)] = inst_29779);

(statearr_29803_29831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (5))){
var inst_29742 = (state_29789[(7)]);
var inst_29744 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29745 = (new cljs.core.PersistentArrayMap(null,2,inst_29744,null));
var inst_29746 = (new cljs.core.PersistentHashSet(null,inst_29745,null));
var inst_29747 = figwheel.client.focus_msgs.call(null,inst_29746,inst_29742);
var inst_29748 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29747);
var inst_29749 = cljs.core.first.call(null,inst_29747);
var inst_29750 = figwheel.client.autoload_QMARK_.call(null);
var state_29789__$1 = (function (){var statearr_29804 = state_29789;
(statearr_29804[(8)] = inst_29749);

(statearr_29804[(9)] = inst_29748);

return statearr_29804;
})();
if(cljs.core.truth_(inst_29750)){
var statearr_29805_29832 = state_29789__$1;
(statearr_29805_29832[(1)] = (8));

} else {
var statearr_29806_29833 = state_29789__$1;
(statearr_29806_29833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (14))){
var inst_29760 = (state_29789[(2)]);
var state_29789__$1 = state_29789;
var statearr_29807_29834 = state_29789__$1;
(statearr_29807_29834[(2)] = inst_29760);

(statearr_29807_29834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (16))){
var state_29789__$1 = state_29789;
var statearr_29808_29835 = state_29789__$1;
(statearr_29808_29835[(2)] = null);

(statearr_29808_29835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (10))){
var inst_29781 = (state_29789[(2)]);
var state_29789__$1 = (function (){var statearr_29809 = state_29789;
(statearr_29809[(11)] = inst_29781);

return statearr_29809;
})();
var statearr_29810_29836 = state_29789__$1;
(statearr_29810_29836[(2)] = null);

(statearr_29810_29836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29790 === (8))){
var inst_29748 = (state_29789[(9)]);
var inst_29752 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29748,opts);
var state_29789__$1 = state_29789;
if(cljs.core.truth_(inst_29752)){
var statearr_29811_29837 = state_29789__$1;
(statearr_29811_29837[(1)] = (11));

} else {
var statearr_29812_29838 = state_29789__$1;
(statearr_29812_29838[(1)] = (12));

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
});})(c__22146__auto___29820,ch))
;
return ((function (switch__22034__auto__,c__22146__auto___29820,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22035__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22035__auto____0 = (function (){
var statearr_29816 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29816[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22035__auto__);

(statearr_29816[(1)] = (1));

return statearr_29816;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22035__auto____1 = (function (state_29789){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_29789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e29817){if((e29817 instanceof Object)){
var ex__22038__auto__ = e29817;
var statearr_29818_29839 = state_29789;
(statearr_29818_29839[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29840 = state_29789;
state_29789 = G__29840;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22035__auto__ = function(state_29789){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22035__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22035__auto____1.call(this,state_29789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22035__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22035__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___29820,ch))
})();
var state__22148__auto__ = (function (){var statearr_29819 = f__22147__auto__.call(null);
(statearr_29819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___29820);

return statearr_29819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___29820,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29841_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29841_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29844 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29844){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e29843){if((e29843 instanceof Error)){
var e = e29843;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29844], null));
} else {
var e = e29843;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_29844))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29845){
var map__29854 = p__29845;
var map__29854__$1 = ((((!((map__29854 == null)))?((((map__29854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29854):map__29854);
var opts = map__29854__$1;
var build_id = cljs.core.get.call(null,map__29854__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29854,map__29854__$1,opts,build_id){
return (function (p__29856){
var vec__29857 = p__29856;
var seq__29858 = cljs.core.seq.call(null,vec__29857);
var first__29859 = cljs.core.first.call(null,seq__29858);
var seq__29858__$1 = cljs.core.next.call(null,seq__29858);
var map__29860 = first__29859;
var map__29860__$1 = ((((!((map__29860 == null)))?((((map__29860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29860):map__29860);
var msg = map__29860__$1;
var msg_name = cljs.core.get.call(null,map__29860__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29858__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29857,seq__29858,first__29859,seq__29858__$1,map__29860,map__29860__$1,msg,msg_name,_,map__29854,map__29854__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29857,seq__29858,first__29859,seq__29858__$1,map__29860,map__29860__$1,msg,msg_name,_,map__29854,map__29854__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29854,map__29854__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29868){
var vec__29869 = p__29868;
var seq__29870 = cljs.core.seq.call(null,vec__29869);
var first__29871 = cljs.core.first.call(null,seq__29870);
var seq__29870__$1 = cljs.core.next.call(null,seq__29870);
var map__29872 = first__29871;
var map__29872__$1 = ((((!((map__29872 == null)))?((((map__29872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29872):map__29872);
var msg = map__29872__$1;
var msg_name = cljs.core.get.call(null,map__29872__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29870__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29874){
var map__29886 = p__29874;
var map__29886__$1 = ((((!((map__29886 == null)))?((((map__29886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29886):map__29886);
var on_compile_warning = cljs.core.get.call(null,map__29886__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29886__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29886,map__29886__$1,on_compile_warning,on_compile_fail){
return (function (p__29888){
var vec__29889 = p__29888;
var seq__29890 = cljs.core.seq.call(null,vec__29889);
var first__29891 = cljs.core.first.call(null,seq__29890);
var seq__29890__$1 = cljs.core.next.call(null,seq__29890);
var map__29892 = first__29891;
var map__29892__$1 = ((((!((map__29892 == null)))?((((map__29892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29892):map__29892);
var msg = map__29892__$1;
var msg_name = cljs.core.get.call(null,map__29892__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29890__$1;
var pred__29894 = cljs.core._EQ_;
var expr__29895 = msg_name;
if(cljs.core.truth_(pred__29894.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29895))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29894.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29895))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29886,map__29886__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto__,msg_hist,msg_names,msg){
return (function (state_30103){
var state_val_30104 = (state_30103[(1)]);
if((state_val_30104 === (7))){
var inst_30031 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30031)){
var statearr_30105_30151 = state_30103__$1;
(statearr_30105_30151[(1)] = (8));

} else {
var statearr_30106_30152 = state_30103__$1;
(statearr_30106_30152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (20))){
var inst_30097 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30107_30153 = state_30103__$1;
(statearr_30107_30153[(2)] = inst_30097);

(statearr_30107_30153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (27))){
var inst_30093 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30108_30154 = state_30103__$1;
(statearr_30108_30154[(2)] = inst_30093);

(statearr_30108_30154[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (1))){
var inst_30024 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30024)){
var statearr_30109_30155 = state_30103__$1;
(statearr_30109_30155[(1)] = (2));

} else {
var statearr_30110_30156 = state_30103__$1;
(statearr_30110_30156[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (24))){
var inst_30095 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30111_30157 = state_30103__$1;
(statearr_30111_30157[(2)] = inst_30095);

(statearr_30111_30157[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (4))){
var inst_30101 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30103__$1,inst_30101);
} else {
if((state_val_30104 === (15))){
var inst_30099 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30112_30158 = state_30103__$1;
(statearr_30112_30158[(2)] = inst_30099);

(statearr_30112_30158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (21))){
var inst_30058 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30113_30159 = state_30103__$1;
(statearr_30113_30159[(2)] = inst_30058);

(statearr_30113_30159[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (31))){
var inst_30082 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30082)){
var statearr_30114_30160 = state_30103__$1;
(statearr_30114_30160[(1)] = (34));

} else {
var statearr_30115_30161 = state_30103__$1;
(statearr_30115_30161[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (32))){
var inst_30091 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30116_30162 = state_30103__$1;
(statearr_30116_30162[(2)] = inst_30091);

(statearr_30116_30162[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (33))){
var inst_30080 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30117_30163 = state_30103__$1;
(statearr_30117_30163[(2)] = inst_30080);

(statearr_30117_30163[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (13))){
var inst_30045 = figwheel.client.heads_up.clear.call(null);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(16),inst_30045);
} else {
if((state_val_30104 === (22))){
var inst_30062 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30063 = figwheel.client.heads_up.append_warning_message.call(null,inst_30062);
var state_30103__$1 = state_30103;
var statearr_30118_30164 = state_30103__$1;
(statearr_30118_30164[(2)] = inst_30063);

(statearr_30118_30164[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (36))){
var inst_30089 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30119_30165 = state_30103__$1;
(statearr_30119_30165[(2)] = inst_30089);

(statearr_30119_30165[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (29))){
var inst_30073 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30120_30166 = state_30103__$1;
(statearr_30120_30166[(2)] = inst_30073);

(statearr_30120_30166[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (6))){
var inst_30026 = (state_30103[(7)]);
var state_30103__$1 = state_30103;
var statearr_30121_30167 = state_30103__$1;
(statearr_30121_30167[(2)] = inst_30026);

(statearr_30121_30167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (28))){
var inst_30069 = (state_30103[(2)]);
var inst_30070 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30071 = figwheel.client.heads_up.display_warning.call(null,inst_30070);
var state_30103__$1 = (function (){var statearr_30122 = state_30103;
(statearr_30122[(8)] = inst_30069);

return statearr_30122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(29),inst_30071);
} else {
if((state_val_30104 === (25))){
var inst_30067 = figwheel.client.heads_up.clear.call(null);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(28),inst_30067);
} else {
if((state_val_30104 === (34))){
var inst_30084 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(37),inst_30084);
} else {
if((state_val_30104 === (17))){
var inst_30051 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30123_30168 = state_30103__$1;
(statearr_30123_30168[(2)] = inst_30051);

(statearr_30123_30168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (3))){
var inst_30043 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30043)){
var statearr_30124_30169 = state_30103__$1;
(statearr_30124_30169[(1)] = (13));

} else {
var statearr_30125_30170 = state_30103__$1;
(statearr_30125_30170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (12))){
var inst_30039 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30126_30171 = state_30103__$1;
(statearr_30126_30171[(2)] = inst_30039);

(statearr_30126_30171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (2))){
var inst_30026 = (state_30103[(7)]);
var inst_30026__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30103__$1 = (function (){var statearr_30127 = state_30103;
(statearr_30127[(7)] = inst_30026__$1);

return statearr_30127;
})();
if(cljs.core.truth_(inst_30026__$1)){
var statearr_30128_30172 = state_30103__$1;
(statearr_30128_30172[(1)] = (5));

} else {
var statearr_30129_30173 = state_30103__$1;
(statearr_30129_30173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (23))){
var inst_30065 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30065)){
var statearr_30130_30174 = state_30103__$1;
(statearr_30130_30174[(1)] = (25));

} else {
var statearr_30131_30175 = state_30103__$1;
(statearr_30131_30175[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (35))){
var state_30103__$1 = state_30103;
var statearr_30132_30176 = state_30103__$1;
(statearr_30132_30176[(2)] = null);

(statearr_30132_30176[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (19))){
var inst_30060 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30060)){
var statearr_30133_30177 = state_30103__$1;
(statearr_30133_30177[(1)] = (22));

} else {
var statearr_30134_30178 = state_30103__$1;
(statearr_30134_30178[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (11))){
var inst_30035 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30135_30179 = state_30103__$1;
(statearr_30135_30179[(2)] = inst_30035);

(statearr_30135_30179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (9))){
var inst_30037 = figwheel.client.heads_up.clear.call(null);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(12),inst_30037);
} else {
if((state_val_30104 === (5))){
var inst_30028 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30103__$1 = state_30103;
var statearr_30136_30180 = state_30103__$1;
(statearr_30136_30180[(2)] = inst_30028);

(statearr_30136_30180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (14))){
var inst_30053 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30053)){
var statearr_30137_30181 = state_30103__$1;
(statearr_30137_30181[(1)] = (18));

} else {
var statearr_30138_30182 = state_30103__$1;
(statearr_30138_30182[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (26))){
var inst_30075 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30075)){
var statearr_30139_30183 = state_30103__$1;
(statearr_30139_30183[(1)] = (30));

} else {
var statearr_30140_30184 = state_30103__$1;
(statearr_30140_30184[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (16))){
var inst_30047 = (state_30103[(2)]);
var inst_30048 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30049 = figwheel.client.heads_up.display_exception.call(null,inst_30048);
var state_30103__$1 = (function (){var statearr_30141 = state_30103;
(statearr_30141[(9)] = inst_30047);

return statearr_30141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(17),inst_30049);
} else {
if((state_val_30104 === (30))){
var inst_30077 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30078 = figwheel.client.heads_up.display_warning.call(null,inst_30077);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(33),inst_30078);
} else {
if((state_val_30104 === (10))){
var inst_30041 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30142_30185 = state_30103__$1;
(statearr_30142_30185[(2)] = inst_30041);

(statearr_30142_30185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (18))){
var inst_30055 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30056 = figwheel.client.heads_up.display_exception.call(null,inst_30055);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(21),inst_30056);
} else {
if((state_val_30104 === (37))){
var inst_30086 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30143_30186 = state_30103__$1;
(statearr_30143_30186[(2)] = inst_30086);

(statearr_30143_30186[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (8))){
var inst_30033 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30103__$1,(11),inst_30033);
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
});})(c__22146__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22034__auto__,c__22146__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22035__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22035__auto____0 = (function (){
var statearr_30147 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30147[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22035__auto__);

(statearr_30147[(1)] = (1));

return statearr_30147;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22035__auto____1 = (function (state_30103){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_30103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e30148){if((e30148 instanceof Object)){
var ex__22038__auto__ = e30148;
var statearr_30149_30187 = state_30103;
(statearr_30149_30187[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30188 = state_30103;
state_30103 = G__30188;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22035__auto__ = function(state_30103){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22035__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22035__auto____1.call(this,state_30103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22035__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22035__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto__,msg_hist,msg_names,msg))
})();
var state__22148__auto__ = (function (){var statearr_30150 = f__22147__auto__.call(null);
(statearr_30150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto__);

return statearr_30150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto__,msg_hist,msg_names,msg))
);

return c__22146__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22146__auto___30251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto___30251,ch){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto___30251,ch){
return (function (state_30234){
var state_val_30235 = (state_30234[(1)]);
if((state_val_30235 === (1))){
var state_30234__$1 = state_30234;
var statearr_30236_30252 = state_30234__$1;
(statearr_30236_30252[(2)] = null);

(statearr_30236_30252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (2))){
var state_30234__$1 = state_30234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30234__$1,(4),ch);
} else {
if((state_val_30235 === (3))){
var inst_30232 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30234__$1,inst_30232);
} else {
if((state_val_30235 === (4))){
var inst_30222 = (state_30234[(7)]);
var inst_30222__$1 = (state_30234[(2)]);
var state_30234__$1 = (function (){var statearr_30237 = state_30234;
(statearr_30237[(7)] = inst_30222__$1);

return statearr_30237;
})();
if(cljs.core.truth_(inst_30222__$1)){
var statearr_30238_30253 = state_30234__$1;
(statearr_30238_30253[(1)] = (5));

} else {
var statearr_30239_30254 = state_30234__$1;
(statearr_30239_30254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (5))){
var inst_30222 = (state_30234[(7)]);
var inst_30224 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30222);
var state_30234__$1 = state_30234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30234__$1,(8),inst_30224);
} else {
if((state_val_30235 === (6))){
var state_30234__$1 = state_30234;
var statearr_30240_30255 = state_30234__$1;
(statearr_30240_30255[(2)] = null);

(statearr_30240_30255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (7))){
var inst_30230 = (state_30234[(2)]);
var state_30234__$1 = state_30234;
var statearr_30241_30256 = state_30234__$1;
(statearr_30241_30256[(2)] = inst_30230);

(statearr_30241_30256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30235 === (8))){
var inst_30226 = (state_30234[(2)]);
var state_30234__$1 = (function (){var statearr_30242 = state_30234;
(statearr_30242[(8)] = inst_30226);

return statearr_30242;
})();
var statearr_30243_30257 = state_30234__$1;
(statearr_30243_30257[(2)] = null);

(statearr_30243_30257[(1)] = (2));


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
});})(c__22146__auto___30251,ch))
;
return ((function (switch__22034__auto__,c__22146__auto___30251,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22035__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22035__auto____0 = (function (){
var statearr_30247 = [null,null,null,null,null,null,null,null,null];
(statearr_30247[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22035__auto__);

(statearr_30247[(1)] = (1));

return statearr_30247;
});
var figwheel$client$heads_up_plugin_$_state_machine__22035__auto____1 = (function (state_30234){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_30234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e30248){if((e30248 instanceof Object)){
var ex__22038__auto__ = e30248;
var statearr_30249_30258 = state_30234;
(statearr_30249_30258[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30259 = state_30234;
state_30234 = G__30259;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22035__auto__ = function(state_30234){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22035__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22035__auto____1.call(this,state_30234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22035__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22035__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto___30251,ch))
})();
var state__22148__auto__ = (function (){var statearr_30250 = f__22147__auto__.call(null);
(statearr_30250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto___30251);

return statearr_30250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto___30251,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto__){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto__){
return (function (state_30280){
var state_val_30281 = (state_30280[(1)]);
if((state_val_30281 === (1))){
var inst_30275 = cljs.core.async.timeout.call(null,(3000));
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(2),inst_30275);
} else {
if((state_val_30281 === (2))){
var inst_30277 = (state_30280[(2)]);
var inst_30278 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30280__$1 = (function (){var statearr_30282 = state_30280;
(statearr_30282[(7)] = inst_30277);

return statearr_30282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30280__$1,inst_30278);
} else {
return null;
}
}
});})(c__22146__auto__))
;
return ((function (switch__22034__auto__,c__22146__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22035__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22035__auto____0 = (function (){
var statearr_30286 = [null,null,null,null,null,null,null,null];
(statearr_30286[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22035__auto__);

(statearr_30286[(1)] = (1));

return statearr_30286;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22035__auto____1 = (function (state_30280){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_30280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e30287){if((e30287 instanceof Object)){
var ex__22038__auto__ = e30287;
var statearr_30288_30290 = state_30280;
(statearr_30288_30290[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30291 = state_30280;
state_30280 = G__30291;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22035__auto__ = function(state_30280){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22035__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22035__auto____1.call(this,state_30280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22035__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22035__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto__))
})();
var state__22148__auto__ = (function (){var statearr_30289 = f__22147__auto__.call(null);
(statearr_30289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto__);

return statearr_30289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto__))
);

return c__22146__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22146__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__22147__auto__ = (function (){var switch__22034__auto__ = ((function (c__22146__auto__,figwheel_version,temp__4657__auto__){
return (function (state_30314){
var state_val_30315 = (state_30314[(1)]);
if((state_val_30315 === (1))){
var inst_30308 = cljs.core.async.timeout.call(null,(2000));
var state_30314__$1 = state_30314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30314__$1,(2),inst_30308);
} else {
if((state_val_30315 === (2))){
var inst_30310 = (state_30314[(2)]);
var inst_30311 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_30312 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30311);
var state_30314__$1 = (function (){var statearr_30316 = state_30314;
(statearr_30316[(7)] = inst_30310);

return statearr_30316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30314__$1,inst_30312);
} else {
return null;
}
}
});})(c__22146__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22034__auto__,c__22146__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22035__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22035__auto____0 = (function (){
var statearr_30320 = [null,null,null,null,null,null,null,null];
(statearr_30320[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22035__auto__);

(statearr_30320[(1)] = (1));

return statearr_30320;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22035__auto____1 = (function (state_30314){
while(true){
var ret_value__22036__auto__ = (function (){try{while(true){
var result__22037__auto__ = switch__22034__auto__.call(null,state_30314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22037__auto__;
}
break;
}
}catch (e30321){if((e30321 instanceof Object)){
var ex__22038__auto__ = e30321;
var statearr_30322_30324 = state_30314;
(statearr_30322_30324[(5)] = ex__22038__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30325 = state_30314;
state_30314 = G__30325;
continue;
} else {
return ret_value__22036__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22035__auto__ = function(state_30314){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22035__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22035__auto____1.call(this,state_30314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22035__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22035__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22035__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22035__auto__;
})()
;})(switch__22034__auto__,c__22146__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22148__auto__ = (function (){var statearr_30323 = f__22147__auto__.call(null);
(statearr_30323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22146__auto__);

return statearr_30323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22148__auto__);
});})(c__22146__auto__,figwheel_version,temp__4657__auto__))
);

return c__22146__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30326){
var map__30330 = p__30326;
var map__30330__$1 = ((((!((map__30330 == null)))?((((map__30330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30330):map__30330);
var file = cljs.core.get.call(null,map__30330__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30330__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30330__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30332 = "";
var G__30332__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__30332),cljs.core.str("file "),cljs.core.str(file)].join(''):G__30332);
var G__30332__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__30332__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__30332__$1);
if(cljs.core.truth_((function (){var and__19942__auto__ = line;
if(cljs.core.truth_(and__19942__auto__)){
return column;
} else {
return and__19942__auto__;
}
})())){
return [cljs.core.str(G__30332__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__30332__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30333){
var map__30340 = p__30333;
var map__30340__$1 = ((((!((map__30340 == null)))?((((map__30340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30340):map__30340);
var ed = map__30340__$1;
var formatted_exception = cljs.core.get.call(null,map__30340__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30340__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30340__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30342_30346 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30343_30347 = null;
var count__30344_30348 = (0);
var i__30345_30349 = (0);
while(true){
if((i__30345_30349 < count__30344_30348)){
var msg_30350 = cljs.core._nth.call(null,chunk__30343_30347,i__30345_30349);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30350);

var G__30351 = seq__30342_30346;
var G__30352 = chunk__30343_30347;
var G__30353 = count__30344_30348;
var G__30354 = (i__30345_30349 + (1));
seq__30342_30346 = G__30351;
chunk__30343_30347 = G__30352;
count__30344_30348 = G__30353;
i__30345_30349 = G__30354;
continue;
} else {
var temp__4657__auto___30355 = cljs.core.seq.call(null,seq__30342_30346);
if(temp__4657__auto___30355){
var seq__30342_30356__$1 = temp__4657__auto___30355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30342_30356__$1)){
var c__20765__auto___30357 = cljs.core.chunk_first.call(null,seq__30342_30356__$1);
var G__30358 = cljs.core.chunk_rest.call(null,seq__30342_30356__$1);
var G__30359 = c__20765__auto___30357;
var G__30360 = cljs.core.count.call(null,c__20765__auto___30357);
var G__30361 = (0);
seq__30342_30346 = G__30358;
chunk__30343_30347 = G__30359;
count__30344_30348 = G__30360;
i__30345_30349 = G__30361;
continue;
} else {
var msg_30362 = cljs.core.first.call(null,seq__30342_30356__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30362);

var G__30363 = cljs.core.next.call(null,seq__30342_30356__$1);
var G__30364 = null;
var G__30365 = (0);
var G__30366 = (0);
seq__30342_30346 = G__30363;
chunk__30343_30347 = G__30364;
count__30344_30348 = G__30365;
i__30345_30349 = G__30366;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30367){
var map__30370 = p__30367;
var map__30370__$1 = ((((!((map__30370 == null)))?((((map__30370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30370):map__30370);
var w = map__30370__$1;
var message = cljs.core.get.call(null,map__30370__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19942__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19942__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19942__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30382 = cljs.core.seq.call(null,plugins);
var chunk__30383 = null;
var count__30384 = (0);
var i__30385 = (0);
while(true){
if((i__30385 < count__30384)){
var vec__30386 = cljs.core._nth.call(null,chunk__30383,i__30385);
var k = cljs.core.nth.call(null,vec__30386,(0),null);
var plugin = cljs.core.nth.call(null,vec__30386,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30392 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30382,chunk__30383,count__30384,i__30385,pl_30392,vec__30386,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30392.call(null,msg_hist);
});})(seq__30382,chunk__30383,count__30384,i__30385,pl_30392,vec__30386,k,plugin))
);
} else {
}

var G__30393 = seq__30382;
var G__30394 = chunk__30383;
var G__30395 = count__30384;
var G__30396 = (i__30385 + (1));
seq__30382 = G__30393;
chunk__30383 = G__30394;
count__30384 = G__30395;
i__30385 = G__30396;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30382);
if(temp__4657__auto__){
var seq__30382__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30382__$1)){
var c__20765__auto__ = cljs.core.chunk_first.call(null,seq__30382__$1);
var G__30397 = cljs.core.chunk_rest.call(null,seq__30382__$1);
var G__30398 = c__20765__auto__;
var G__30399 = cljs.core.count.call(null,c__20765__auto__);
var G__30400 = (0);
seq__30382 = G__30397;
chunk__30383 = G__30398;
count__30384 = G__30399;
i__30385 = G__30400;
continue;
} else {
var vec__30389 = cljs.core.first.call(null,seq__30382__$1);
var k = cljs.core.nth.call(null,vec__30389,(0),null);
var plugin = cljs.core.nth.call(null,vec__30389,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30401 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30382,chunk__30383,count__30384,i__30385,pl_30401,vec__30389,k,plugin,seq__30382__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30401.call(null,msg_hist);
});})(seq__30382,chunk__30383,count__30384,i__30385,pl_30401,vec__30389,k,plugin,seq__30382__$1,temp__4657__auto__))
);
} else {
}

var G__30402 = cljs.core.next.call(null,seq__30382__$1);
var G__30403 = null;
var G__30404 = (0);
var G__30405 = (0);
seq__30382 = G__30402;
chunk__30383 = G__30403;
count__30384 = G__30404;
i__30385 = G__30405;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30406 = [];
var len__21029__auto___30413 = arguments.length;
var i__21030__auto___30414 = (0);
while(true){
if((i__21030__auto___30414 < len__21029__auto___30413)){
args30406.push((arguments[i__21030__auto___30414]));

var G__30415 = (i__21030__auto___30414 + (1));
i__21030__auto___30414 = G__30415;
continue;
} else {
}
break;
}

var G__30408 = args30406.length;
switch (G__30408) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30406.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30409_30417 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30410_30418 = null;
var count__30411_30419 = (0);
var i__30412_30420 = (0);
while(true){
if((i__30412_30420 < count__30411_30419)){
var msg_30421 = cljs.core._nth.call(null,chunk__30410_30418,i__30412_30420);
figwheel.client.socket.handle_incoming_message.call(null,msg_30421);

var G__30422 = seq__30409_30417;
var G__30423 = chunk__30410_30418;
var G__30424 = count__30411_30419;
var G__30425 = (i__30412_30420 + (1));
seq__30409_30417 = G__30422;
chunk__30410_30418 = G__30423;
count__30411_30419 = G__30424;
i__30412_30420 = G__30425;
continue;
} else {
var temp__4657__auto___30426 = cljs.core.seq.call(null,seq__30409_30417);
if(temp__4657__auto___30426){
var seq__30409_30427__$1 = temp__4657__auto___30426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30409_30427__$1)){
var c__20765__auto___30428 = cljs.core.chunk_first.call(null,seq__30409_30427__$1);
var G__30429 = cljs.core.chunk_rest.call(null,seq__30409_30427__$1);
var G__30430 = c__20765__auto___30428;
var G__30431 = cljs.core.count.call(null,c__20765__auto___30428);
var G__30432 = (0);
seq__30409_30417 = G__30429;
chunk__30410_30418 = G__30430;
count__30411_30419 = G__30431;
i__30412_30420 = G__30432;
continue;
} else {
var msg_30433 = cljs.core.first.call(null,seq__30409_30427__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30433);

var G__30434 = cljs.core.next.call(null,seq__30409_30427__$1);
var G__30435 = null;
var G__30436 = (0);
var G__30437 = (0);
seq__30409_30417 = G__30434;
chunk__30410_30418 = G__30435;
count__30411_30419 = G__30436;
i__30412_30420 = G__30437;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21036__auto__ = [];
var len__21029__auto___30442 = arguments.length;
var i__21030__auto___30443 = (0);
while(true){
if((i__21030__auto___30443 < len__21029__auto___30442)){
args__21036__auto__.push((arguments[i__21030__auto___30443]));

var G__30444 = (i__21030__auto___30443 + (1));
i__21030__auto___30443 = G__30444;
continue;
} else {
}
break;
}

var argseq__21037__auto__ = ((((0) < args__21036__auto__.length))?(new cljs.core.IndexedSeq(args__21036__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21037__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30439){
var map__30440 = p__30439;
var map__30440__$1 = ((((!((map__30440 == null)))?((((map__30440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30440):map__30440);
var opts = map__30440__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30438){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30438));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30446){if((e30446 instanceof Error)){
var e = e30446;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30446;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30450){
var map__30451 = p__30450;
var map__30451__$1 = ((((!((map__30451 == null)))?((((map__30451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30451):map__30451);
var msg_name = cljs.core.get.call(null,map__30451__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1468882716684