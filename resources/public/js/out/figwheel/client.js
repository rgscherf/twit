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
var args38015 = [];
var len__21033__auto___38018 = arguments.length;
var i__21034__auto___38019 = (0);
while(true){
if((i__21034__auto___38019 < len__21033__auto___38018)){
args38015.push((arguments[i__21034__auto___38019]));

var G__38020 = (i__21034__auto___38019 + (1));
i__21034__auto___38019 = G__38020;
continue;
} else {
}
break;
}

var G__38017 = args38015.length;
switch (G__38017) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38015.length)].join('')));

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
var args__21040__auto__ = [];
var len__21033__auto___38023 = arguments.length;
var i__21034__auto___38024 = (0);
while(true){
if((i__21034__auto___38024 < len__21033__auto___38023)){
args__21040__auto__.push((arguments[i__21034__auto___38024]));

var G__38025 = (i__21034__auto___38024 + (1));
i__21034__auto___38024 = G__38025;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38022){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38022));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21040__auto__ = [];
var len__21033__auto___38027 = arguments.length;
var i__21034__auto___38028 = (0);
while(true){
if((i__21034__auto___38028 < len__21033__auto___38027)){
args__21040__auto__.push((arguments[i__21034__auto___38028]));

var G__38029 = (i__21034__auto___38028 + (1));
i__21034__auto___38028 = G__38029;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38026){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38026));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__38030 = cljs.core._EQ_;
var expr__38031 = (function (){var or__19958__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e38034){if((e38034 instanceof Error)){
var e = e38034;
return false;
} else {
throw e38034;

}
}})();
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38030.call(null,"true",expr__38031))){
return true;
} else {
if(cljs.core.truth_(pred__38030.call(null,"false",expr__38031))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__38031)].join('')));
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
}catch (e38036){if((e38036 instanceof Error)){
var e = e38036;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e38036;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38037){
var map__38040 = p__38037;
var map__38040__$1 = ((((!((map__38040 == null)))?((((map__38040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38040):map__38040);
var message = cljs.core.get.call(null,map__38040__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38040__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19958__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19958__auto__)){
return or__19958__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19946__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19946__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19946__auto__;
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
var c__22804__auto___38202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___38202,ch){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___38202,ch){
return (function (state_38171){
var state_val_38172 = (state_38171[(1)]);
if((state_val_38172 === (7))){
var inst_38167 = (state_38171[(2)]);
var state_38171__$1 = state_38171;
var statearr_38173_38203 = state_38171__$1;
(statearr_38173_38203[(2)] = inst_38167);

(statearr_38173_38203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (1))){
var state_38171__$1 = state_38171;
var statearr_38174_38204 = state_38171__$1;
(statearr_38174_38204[(2)] = null);

(statearr_38174_38204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (4))){
var inst_38124 = (state_38171[(7)]);
var inst_38124__$1 = (state_38171[(2)]);
var state_38171__$1 = (function (){var statearr_38175 = state_38171;
(statearr_38175[(7)] = inst_38124__$1);

return statearr_38175;
})();
if(cljs.core.truth_(inst_38124__$1)){
var statearr_38176_38205 = state_38171__$1;
(statearr_38176_38205[(1)] = (5));

} else {
var statearr_38177_38206 = state_38171__$1;
(statearr_38177_38206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (15))){
var inst_38131 = (state_38171[(8)]);
var inst_38146 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38131);
var inst_38147 = cljs.core.first.call(null,inst_38146);
var inst_38148 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38147);
var inst_38149 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38148)].join('');
var inst_38150 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38149);
var state_38171__$1 = state_38171;
var statearr_38178_38207 = state_38171__$1;
(statearr_38178_38207[(2)] = inst_38150);

(statearr_38178_38207[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (13))){
var inst_38155 = (state_38171[(2)]);
var state_38171__$1 = state_38171;
var statearr_38179_38208 = state_38171__$1;
(statearr_38179_38208[(2)] = inst_38155);

(statearr_38179_38208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (6))){
var state_38171__$1 = state_38171;
var statearr_38180_38209 = state_38171__$1;
(statearr_38180_38209[(2)] = null);

(statearr_38180_38209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (17))){
var inst_38153 = (state_38171[(2)]);
var state_38171__$1 = state_38171;
var statearr_38181_38210 = state_38171__$1;
(statearr_38181_38210[(2)] = inst_38153);

(statearr_38181_38210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (3))){
var inst_38169 = (state_38171[(2)]);
var state_38171__$1 = state_38171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38171__$1,inst_38169);
} else {
if((state_val_38172 === (12))){
var inst_38130 = (state_38171[(9)]);
var inst_38144 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38130,opts);
var state_38171__$1 = state_38171;
if(cljs.core.truth_(inst_38144)){
var statearr_38182_38211 = state_38171__$1;
(statearr_38182_38211[(1)] = (15));

} else {
var statearr_38183_38212 = state_38171__$1;
(statearr_38183_38212[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (2))){
var state_38171__$1 = state_38171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38171__$1,(4),ch);
} else {
if((state_val_38172 === (11))){
var inst_38131 = (state_38171[(8)]);
var inst_38136 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38137 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38131);
var inst_38138 = cljs.core.async.timeout.call(null,(1000));
var inst_38139 = [inst_38137,inst_38138];
var inst_38140 = (new cljs.core.PersistentVector(null,2,(5),inst_38136,inst_38139,null));
var state_38171__$1 = state_38171;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38171__$1,(14),inst_38140);
} else {
if((state_val_38172 === (9))){
var inst_38131 = (state_38171[(8)]);
var inst_38157 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38158 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38131);
var inst_38159 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38158);
var inst_38160 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38159)].join('');
var inst_38161 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38160);
var state_38171__$1 = (function (){var statearr_38184 = state_38171;
(statearr_38184[(10)] = inst_38157);

return statearr_38184;
})();
var statearr_38185_38213 = state_38171__$1;
(statearr_38185_38213[(2)] = inst_38161);

(statearr_38185_38213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (5))){
var inst_38124 = (state_38171[(7)]);
var inst_38126 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38127 = (new cljs.core.PersistentArrayMap(null,2,inst_38126,null));
var inst_38128 = (new cljs.core.PersistentHashSet(null,inst_38127,null));
var inst_38129 = figwheel.client.focus_msgs.call(null,inst_38128,inst_38124);
var inst_38130 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38129);
var inst_38131 = cljs.core.first.call(null,inst_38129);
var inst_38132 = figwheel.client.autoload_QMARK_.call(null);
var state_38171__$1 = (function (){var statearr_38186 = state_38171;
(statearr_38186[(9)] = inst_38130);

(statearr_38186[(8)] = inst_38131);

return statearr_38186;
})();
if(cljs.core.truth_(inst_38132)){
var statearr_38187_38214 = state_38171__$1;
(statearr_38187_38214[(1)] = (8));

} else {
var statearr_38188_38215 = state_38171__$1;
(statearr_38188_38215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (14))){
var inst_38142 = (state_38171[(2)]);
var state_38171__$1 = state_38171;
var statearr_38189_38216 = state_38171__$1;
(statearr_38189_38216[(2)] = inst_38142);

(statearr_38189_38216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (16))){
var state_38171__$1 = state_38171;
var statearr_38190_38217 = state_38171__$1;
(statearr_38190_38217[(2)] = null);

(statearr_38190_38217[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (10))){
var inst_38163 = (state_38171[(2)]);
var state_38171__$1 = (function (){var statearr_38191 = state_38171;
(statearr_38191[(11)] = inst_38163);

return statearr_38191;
})();
var statearr_38192_38218 = state_38171__$1;
(statearr_38192_38218[(2)] = null);

(statearr_38192_38218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38172 === (8))){
var inst_38130 = (state_38171[(9)]);
var inst_38134 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38130,opts);
var state_38171__$1 = state_38171;
if(cljs.core.truth_(inst_38134)){
var statearr_38193_38219 = state_38171__$1;
(statearr_38193_38219[(1)] = (11));

} else {
var statearr_38194_38220 = state_38171__$1;
(statearr_38194_38220[(1)] = (12));

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
});})(c__22804__auto___38202,ch))
;
return ((function (switch__22783__auto__,c__22804__auto___38202,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22784__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22784__auto____0 = (function (){
var statearr_38198 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38198[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22784__auto__);

(statearr_38198[(1)] = (1));

return statearr_38198;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22784__auto____1 = (function (state_38171){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_38171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e38199){if((e38199 instanceof Object)){
var ex__22787__auto__ = e38199;
var statearr_38200_38221 = state_38171;
(statearr_38200_38221[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38222 = state_38171;
state_38171 = G__38222;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22784__auto__ = function(state_38171){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22784__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22784__auto____1.call(this,state_38171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22784__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22784__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___38202,ch))
})();
var state__22806__auto__ = (function (){var statearr_38201 = f__22805__auto__.call(null);
(statearr_38201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___38202);

return statearr_38201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___38202,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38223_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38223_SHARP_));
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
var base_path_38226 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38226){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38225){if((e38225 instanceof Error)){
var e = e38225;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38226], null));
} else {
var e = e38225;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38226))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38227){
var map__38236 = p__38227;
var map__38236__$1 = ((((!((map__38236 == null)))?((((map__38236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38236):map__38236);
var opts = map__38236__$1;
var build_id = cljs.core.get.call(null,map__38236__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38236,map__38236__$1,opts,build_id){
return (function (p__38238){
var vec__38239 = p__38238;
var seq__38240 = cljs.core.seq.call(null,vec__38239);
var first__38241 = cljs.core.first.call(null,seq__38240);
var seq__38240__$1 = cljs.core.next.call(null,seq__38240);
var map__38242 = first__38241;
var map__38242__$1 = ((((!((map__38242 == null)))?((((map__38242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38242):map__38242);
var msg = map__38242__$1;
var msg_name = cljs.core.get.call(null,map__38242__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38240__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38239,seq__38240,first__38241,seq__38240__$1,map__38242,map__38242__$1,msg,msg_name,_,map__38236,map__38236__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38239,seq__38240,first__38241,seq__38240__$1,map__38242,map__38242__$1,msg,msg_name,_,map__38236,map__38236__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38236,map__38236__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38250){
var vec__38251 = p__38250;
var seq__38252 = cljs.core.seq.call(null,vec__38251);
var first__38253 = cljs.core.first.call(null,seq__38252);
var seq__38252__$1 = cljs.core.next.call(null,seq__38252);
var map__38254 = first__38253;
var map__38254__$1 = ((((!((map__38254 == null)))?((((map__38254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38254):map__38254);
var msg = map__38254__$1;
var msg_name = cljs.core.get.call(null,map__38254__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38252__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38256){
var map__38268 = p__38256;
var map__38268__$1 = ((((!((map__38268 == null)))?((((map__38268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38268):map__38268);
var on_compile_warning = cljs.core.get.call(null,map__38268__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38268__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38268,map__38268__$1,on_compile_warning,on_compile_fail){
return (function (p__38270){
var vec__38271 = p__38270;
var seq__38272 = cljs.core.seq.call(null,vec__38271);
var first__38273 = cljs.core.first.call(null,seq__38272);
var seq__38272__$1 = cljs.core.next.call(null,seq__38272);
var map__38274 = first__38273;
var map__38274__$1 = ((((!((map__38274 == null)))?((((map__38274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38274):map__38274);
var msg = map__38274__$1;
var msg_name = cljs.core.get.call(null,map__38274__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38272__$1;
var pred__38276 = cljs.core._EQ_;
var expr__38277 = msg_name;
if(cljs.core.truth_(pred__38276.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38277))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38276.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38277))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38268,map__38268__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto__,msg_hist,msg_names,msg){
return (function (state_38485){
var state_val_38486 = (state_38485[(1)]);
if((state_val_38486 === (7))){
var inst_38413 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
if(cljs.core.truth_(inst_38413)){
var statearr_38487_38533 = state_38485__$1;
(statearr_38487_38533[(1)] = (8));

} else {
var statearr_38488_38534 = state_38485__$1;
(statearr_38488_38534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (20))){
var inst_38479 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38489_38535 = state_38485__$1;
(statearr_38489_38535[(2)] = inst_38479);

(statearr_38489_38535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (27))){
var inst_38475 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38490_38536 = state_38485__$1;
(statearr_38490_38536[(2)] = inst_38475);

(statearr_38490_38536[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (1))){
var inst_38406 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38485__$1 = state_38485;
if(cljs.core.truth_(inst_38406)){
var statearr_38491_38537 = state_38485__$1;
(statearr_38491_38537[(1)] = (2));

} else {
var statearr_38492_38538 = state_38485__$1;
(statearr_38492_38538[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (24))){
var inst_38477 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38493_38539 = state_38485__$1;
(statearr_38493_38539[(2)] = inst_38477);

(statearr_38493_38539[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (4))){
var inst_38483 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38485__$1,inst_38483);
} else {
if((state_val_38486 === (15))){
var inst_38481 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38494_38540 = state_38485__$1;
(statearr_38494_38540[(2)] = inst_38481);

(statearr_38494_38540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (21))){
var inst_38440 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38495_38541 = state_38485__$1;
(statearr_38495_38541[(2)] = inst_38440);

(statearr_38495_38541[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (31))){
var inst_38464 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38485__$1 = state_38485;
if(cljs.core.truth_(inst_38464)){
var statearr_38496_38542 = state_38485__$1;
(statearr_38496_38542[(1)] = (34));

} else {
var statearr_38497_38543 = state_38485__$1;
(statearr_38497_38543[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (32))){
var inst_38473 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38498_38544 = state_38485__$1;
(statearr_38498_38544[(2)] = inst_38473);

(statearr_38498_38544[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (33))){
var inst_38462 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38499_38545 = state_38485__$1;
(statearr_38499_38545[(2)] = inst_38462);

(statearr_38499_38545[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (13))){
var inst_38427 = figwheel.client.heads_up.clear.call(null);
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38485__$1,(16),inst_38427);
} else {
if((state_val_38486 === (22))){
var inst_38444 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38445 = figwheel.client.heads_up.append_warning_message.call(null,inst_38444);
var state_38485__$1 = state_38485;
var statearr_38500_38546 = state_38485__$1;
(statearr_38500_38546[(2)] = inst_38445);

(statearr_38500_38546[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (36))){
var inst_38471 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38501_38547 = state_38485__$1;
(statearr_38501_38547[(2)] = inst_38471);

(statearr_38501_38547[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (29))){
var inst_38455 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38502_38548 = state_38485__$1;
(statearr_38502_38548[(2)] = inst_38455);

(statearr_38502_38548[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (6))){
var inst_38408 = (state_38485[(7)]);
var state_38485__$1 = state_38485;
var statearr_38503_38549 = state_38485__$1;
(statearr_38503_38549[(2)] = inst_38408);

(statearr_38503_38549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (28))){
var inst_38451 = (state_38485[(2)]);
var inst_38452 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38453 = figwheel.client.heads_up.display_warning.call(null,inst_38452);
var state_38485__$1 = (function (){var statearr_38504 = state_38485;
(statearr_38504[(8)] = inst_38451);

return statearr_38504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38485__$1,(29),inst_38453);
} else {
if((state_val_38486 === (25))){
var inst_38449 = figwheel.client.heads_up.clear.call(null);
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38485__$1,(28),inst_38449);
} else {
if((state_val_38486 === (34))){
var inst_38466 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38485__$1,(37),inst_38466);
} else {
if((state_val_38486 === (17))){
var inst_38433 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38505_38550 = state_38485__$1;
(statearr_38505_38550[(2)] = inst_38433);

(statearr_38505_38550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (3))){
var inst_38425 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38485__$1 = state_38485;
if(cljs.core.truth_(inst_38425)){
var statearr_38506_38551 = state_38485__$1;
(statearr_38506_38551[(1)] = (13));

} else {
var statearr_38507_38552 = state_38485__$1;
(statearr_38507_38552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (12))){
var inst_38421 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38508_38553 = state_38485__$1;
(statearr_38508_38553[(2)] = inst_38421);

(statearr_38508_38553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (2))){
var inst_38408 = (state_38485[(7)]);
var inst_38408__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38485__$1 = (function (){var statearr_38509 = state_38485;
(statearr_38509[(7)] = inst_38408__$1);

return statearr_38509;
})();
if(cljs.core.truth_(inst_38408__$1)){
var statearr_38510_38554 = state_38485__$1;
(statearr_38510_38554[(1)] = (5));

} else {
var statearr_38511_38555 = state_38485__$1;
(statearr_38511_38555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (23))){
var inst_38447 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38485__$1 = state_38485;
if(cljs.core.truth_(inst_38447)){
var statearr_38512_38556 = state_38485__$1;
(statearr_38512_38556[(1)] = (25));

} else {
var statearr_38513_38557 = state_38485__$1;
(statearr_38513_38557[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (35))){
var state_38485__$1 = state_38485;
var statearr_38514_38558 = state_38485__$1;
(statearr_38514_38558[(2)] = null);

(statearr_38514_38558[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (19))){
var inst_38442 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38485__$1 = state_38485;
if(cljs.core.truth_(inst_38442)){
var statearr_38515_38559 = state_38485__$1;
(statearr_38515_38559[(1)] = (22));

} else {
var statearr_38516_38560 = state_38485__$1;
(statearr_38516_38560[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (11))){
var inst_38417 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38517_38561 = state_38485__$1;
(statearr_38517_38561[(2)] = inst_38417);

(statearr_38517_38561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (9))){
var inst_38419 = figwheel.client.heads_up.clear.call(null);
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38485__$1,(12),inst_38419);
} else {
if((state_val_38486 === (5))){
var inst_38410 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38485__$1 = state_38485;
var statearr_38518_38562 = state_38485__$1;
(statearr_38518_38562[(2)] = inst_38410);

(statearr_38518_38562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (14))){
var inst_38435 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38485__$1 = state_38485;
if(cljs.core.truth_(inst_38435)){
var statearr_38519_38563 = state_38485__$1;
(statearr_38519_38563[(1)] = (18));

} else {
var statearr_38520_38564 = state_38485__$1;
(statearr_38520_38564[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (26))){
var inst_38457 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38485__$1 = state_38485;
if(cljs.core.truth_(inst_38457)){
var statearr_38521_38565 = state_38485__$1;
(statearr_38521_38565[(1)] = (30));

} else {
var statearr_38522_38566 = state_38485__$1;
(statearr_38522_38566[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (16))){
var inst_38429 = (state_38485[(2)]);
var inst_38430 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38431 = figwheel.client.heads_up.display_exception.call(null,inst_38430);
var state_38485__$1 = (function (){var statearr_38523 = state_38485;
(statearr_38523[(9)] = inst_38429);

return statearr_38523;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38485__$1,(17),inst_38431);
} else {
if((state_val_38486 === (30))){
var inst_38459 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38460 = figwheel.client.heads_up.display_warning.call(null,inst_38459);
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38485__$1,(33),inst_38460);
} else {
if((state_val_38486 === (10))){
var inst_38423 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38524_38567 = state_38485__$1;
(statearr_38524_38567[(2)] = inst_38423);

(statearr_38524_38567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (18))){
var inst_38437 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38438 = figwheel.client.heads_up.display_exception.call(null,inst_38437);
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38485__$1,(21),inst_38438);
} else {
if((state_val_38486 === (37))){
var inst_38468 = (state_38485[(2)]);
var state_38485__$1 = state_38485;
var statearr_38525_38568 = state_38485__$1;
(statearr_38525_38568[(2)] = inst_38468);

(statearr_38525_38568[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38486 === (8))){
var inst_38415 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38485__$1 = state_38485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38485__$1,(11),inst_38415);
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
});})(c__22804__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22783__auto__,c__22804__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22784__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22784__auto____0 = (function (){
var statearr_38529 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38529[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22784__auto__);

(statearr_38529[(1)] = (1));

return statearr_38529;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22784__auto____1 = (function (state_38485){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_38485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e38530){if((e38530 instanceof Object)){
var ex__22787__auto__ = e38530;
var statearr_38531_38569 = state_38485;
(statearr_38531_38569[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38570 = state_38485;
state_38485 = G__38570;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22784__auto__ = function(state_38485){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22784__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22784__auto____1.call(this,state_38485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22784__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22784__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto__,msg_hist,msg_names,msg))
})();
var state__22806__auto__ = (function (){var statearr_38532 = f__22805__auto__.call(null);
(statearr_38532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto__);

return statearr_38532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto__,msg_hist,msg_names,msg))
);

return c__22804__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22804__auto___38633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto___38633,ch){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto___38633,ch){
return (function (state_38616){
var state_val_38617 = (state_38616[(1)]);
if((state_val_38617 === (1))){
var state_38616__$1 = state_38616;
var statearr_38618_38634 = state_38616__$1;
(statearr_38618_38634[(2)] = null);

(statearr_38618_38634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38617 === (2))){
var state_38616__$1 = state_38616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38616__$1,(4),ch);
} else {
if((state_val_38617 === (3))){
var inst_38614 = (state_38616[(2)]);
var state_38616__$1 = state_38616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38616__$1,inst_38614);
} else {
if((state_val_38617 === (4))){
var inst_38604 = (state_38616[(7)]);
var inst_38604__$1 = (state_38616[(2)]);
var state_38616__$1 = (function (){var statearr_38619 = state_38616;
(statearr_38619[(7)] = inst_38604__$1);

return statearr_38619;
})();
if(cljs.core.truth_(inst_38604__$1)){
var statearr_38620_38635 = state_38616__$1;
(statearr_38620_38635[(1)] = (5));

} else {
var statearr_38621_38636 = state_38616__$1;
(statearr_38621_38636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38617 === (5))){
var inst_38604 = (state_38616[(7)]);
var inst_38606 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38604);
var state_38616__$1 = state_38616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38616__$1,(8),inst_38606);
} else {
if((state_val_38617 === (6))){
var state_38616__$1 = state_38616;
var statearr_38622_38637 = state_38616__$1;
(statearr_38622_38637[(2)] = null);

(statearr_38622_38637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38617 === (7))){
var inst_38612 = (state_38616[(2)]);
var state_38616__$1 = state_38616;
var statearr_38623_38638 = state_38616__$1;
(statearr_38623_38638[(2)] = inst_38612);

(statearr_38623_38638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38617 === (8))){
var inst_38608 = (state_38616[(2)]);
var state_38616__$1 = (function (){var statearr_38624 = state_38616;
(statearr_38624[(8)] = inst_38608);

return statearr_38624;
})();
var statearr_38625_38639 = state_38616__$1;
(statearr_38625_38639[(2)] = null);

(statearr_38625_38639[(1)] = (2));


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
});})(c__22804__auto___38633,ch))
;
return ((function (switch__22783__auto__,c__22804__auto___38633,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22784__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22784__auto____0 = (function (){
var statearr_38629 = [null,null,null,null,null,null,null,null,null];
(statearr_38629[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22784__auto__);

(statearr_38629[(1)] = (1));

return statearr_38629;
});
var figwheel$client$heads_up_plugin_$_state_machine__22784__auto____1 = (function (state_38616){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_38616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e38630){if((e38630 instanceof Object)){
var ex__22787__auto__ = e38630;
var statearr_38631_38640 = state_38616;
(statearr_38631_38640[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38641 = state_38616;
state_38616 = G__38641;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22784__auto__ = function(state_38616){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22784__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22784__auto____1.call(this,state_38616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22784__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22784__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto___38633,ch))
})();
var state__22806__auto__ = (function (){var statearr_38632 = f__22805__auto__.call(null);
(statearr_38632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto___38633);

return statearr_38632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto___38633,ch))
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
var c__22804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto__){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto__){
return (function (state_38662){
var state_val_38663 = (state_38662[(1)]);
if((state_val_38663 === (1))){
var inst_38657 = cljs.core.async.timeout.call(null,(3000));
var state_38662__$1 = state_38662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38662__$1,(2),inst_38657);
} else {
if((state_val_38663 === (2))){
var inst_38659 = (state_38662[(2)]);
var inst_38660 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38662__$1 = (function (){var statearr_38664 = state_38662;
(statearr_38664[(7)] = inst_38659);

return statearr_38664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38662__$1,inst_38660);
} else {
return null;
}
}
});})(c__22804__auto__))
;
return ((function (switch__22783__auto__,c__22804__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22784__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22784__auto____0 = (function (){
var statearr_38668 = [null,null,null,null,null,null,null,null];
(statearr_38668[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22784__auto__);

(statearr_38668[(1)] = (1));

return statearr_38668;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22784__auto____1 = (function (state_38662){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_38662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e38669){if((e38669 instanceof Object)){
var ex__22787__auto__ = e38669;
var statearr_38670_38672 = state_38662;
(statearr_38670_38672[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38673 = state_38662;
state_38662 = G__38673;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22784__auto__ = function(state_38662){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22784__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22784__auto____1.call(this,state_38662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22784__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22784__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto__))
})();
var state__22806__auto__ = (function (){var statearr_38671 = f__22805__auto__.call(null);
(statearr_38671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto__);

return statearr_38671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto__))
);

return c__22804__auto__;
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
var c__22804__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22804__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__22805__auto__ = (function (){var switch__22783__auto__ = ((function (c__22804__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38696){
var state_val_38697 = (state_38696[(1)]);
if((state_val_38697 === (1))){
var inst_38690 = cljs.core.async.timeout.call(null,(2000));
var state_38696__$1 = state_38696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38696__$1,(2),inst_38690);
} else {
if((state_val_38697 === (2))){
var inst_38692 = (state_38696[(2)]);
var inst_38693 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_38694 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38693);
var state_38696__$1 = (function (){var statearr_38698 = state_38696;
(statearr_38698[(7)] = inst_38692);

return statearr_38698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38696__$1,inst_38694);
} else {
return null;
}
}
});})(c__22804__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22783__auto__,c__22804__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22784__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22784__auto____0 = (function (){
var statearr_38702 = [null,null,null,null,null,null,null,null];
(statearr_38702[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22784__auto__);

(statearr_38702[(1)] = (1));

return statearr_38702;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22784__auto____1 = (function (state_38696){
while(true){
var ret_value__22785__auto__ = (function (){try{while(true){
var result__22786__auto__ = switch__22783__auto__.call(null,state_38696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22786__auto__;
}
break;
}
}catch (e38703){if((e38703 instanceof Object)){
var ex__22787__auto__ = e38703;
var statearr_38704_38706 = state_38696;
(statearr_38704_38706[(5)] = ex__22787__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38707 = state_38696;
state_38696 = G__38707;
continue;
} else {
return ret_value__22785__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22784__auto__ = function(state_38696){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22784__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22784__auto____1.call(this,state_38696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22784__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22784__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22784__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22784__auto__;
})()
;})(switch__22783__auto__,c__22804__auto__,figwheel_version,temp__4657__auto__))
})();
var state__22806__auto__ = (function (){var statearr_38705 = f__22805__auto__.call(null);
(statearr_38705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22804__auto__);

return statearr_38705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22806__auto__);
});})(c__22804__auto__,figwheel_version,temp__4657__auto__))
);

return c__22804__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38708){
var map__38712 = p__38708;
var map__38712__$1 = ((((!((map__38712 == null)))?((((map__38712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38712):map__38712);
var file = cljs.core.get.call(null,map__38712__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38712__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38712__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38714 = "";
var G__38714__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38714),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38714);
var G__38714__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38714__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38714__$1);
if(cljs.core.truth_((function (){var and__19946__auto__ = line;
if(cljs.core.truth_(and__19946__auto__)){
return column;
} else {
return and__19946__auto__;
}
})())){
return [cljs.core.str(G__38714__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38714__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38715){
var map__38722 = p__38715;
var map__38722__$1 = ((((!((map__38722 == null)))?((((map__38722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38722):map__38722);
var ed = map__38722__$1;
var formatted_exception = cljs.core.get.call(null,map__38722__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38722__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38722__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38724_38728 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38725_38729 = null;
var count__38726_38730 = (0);
var i__38727_38731 = (0);
while(true){
if((i__38727_38731 < count__38726_38730)){
var msg_38732 = cljs.core._nth.call(null,chunk__38725_38729,i__38727_38731);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38732);

var G__38733 = seq__38724_38728;
var G__38734 = chunk__38725_38729;
var G__38735 = count__38726_38730;
var G__38736 = (i__38727_38731 + (1));
seq__38724_38728 = G__38733;
chunk__38725_38729 = G__38734;
count__38726_38730 = G__38735;
i__38727_38731 = G__38736;
continue;
} else {
var temp__4657__auto___38737 = cljs.core.seq.call(null,seq__38724_38728);
if(temp__4657__auto___38737){
var seq__38724_38738__$1 = temp__4657__auto___38737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38724_38738__$1)){
var c__20769__auto___38739 = cljs.core.chunk_first.call(null,seq__38724_38738__$1);
var G__38740 = cljs.core.chunk_rest.call(null,seq__38724_38738__$1);
var G__38741 = c__20769__auto___38739;
var G__38742 = cljs.core.count.call(null,c__20769__auto___38739);
var G__38743 = (0);
seq__38724_38728 = G__38740;
chunk__38725_38729 = G__38741;
count__38726_38730 = G__38742;
i__38727_38731 = G__38743;
continue;
} else {
var msg_38744 = cljs.core.first.call(null,seq__38724_38738__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38744);

var G__38745 = cljs.core.next.call(null,seq__38724_38738__$1);
var G__38746 = null;
var G__38747 = (0);
var G__38748 = (0);
seq__38724_38728 = G__38745;
chunk__38725_38729 = G__38746;
count__38726_38730 = G__38747;
i__38727_38731 = G__38748;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38749){
var map__38752 = p__38749;
var map__38752__$1 = ((((!((map__38752 == null)))?((((map__38752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38752):map__38752);
var w = map__38752__$1;
var message = cljs.core.get.call(null,map__38752__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__19946__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19946__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19946__auto__;
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
var seq__38764 = cljs.core.seq.call(null,plugins);
var chunk__38765 = null;
var count__38766 = (0);
var i__38767 = (0);
while(true){
if((i__38767 < count__38766)){
var vec__38768 = cljs.core._nth.call(null,chunk__38765,i__38767);
var k = cljs.core.nth.call(null,vec__38768,(0),null);
var plugin = cljs.core.nth.call(null,vec__38768,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38774 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38764,chunk__38765,count__38766,i__38767,pl_38774,vec__38768,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38774.call(null,msg_hist);
});})(seq__38764,chunk__38765,count__38766,i__38767,pl_38774,vec__38768,k,plugin))
);
} else {
}

var G__38775 = seq__38764;
var G__38776 = chunk__38765;
var G__38777 = count__38766;
var G__38778 = (i__38767 + (1));
seq__38764 = G__38775;
chunk__38765 = G__38776;
count__38766 = G__38777;
i__38767 = G__38778;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38764);
if(temp__4657__auto__){
var seq__38764__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38764__$1)){
var c__20769__auto__ = cljs.core.chunk_first.call(null,seq__38764__$1);
var G__38779 = cljs.core.chunk_rest.call(null,seq__38764__$1);
var G__38780 = c__20769__auto__;
var G__38781 = cljs.core.count.call(null,c__20769__auto__);
var G__38782 = (0);
seq__38764 = G__38779;
chunk__38765 = G__38780;
count__38766 = G__38781;
i__38767 = G__38782;
continue;
} else {
var vec__38771 = cljs.core.first.call(null,seq__38764__$1);
var k = cljs.core.nth.call(null,vec__38771,(0),null);
var plugin = cljs.core.nth.call(null,vec__38771,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38783 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38764,chunk__38765,count__38766,i__38767,pl_38783,vec__38771,k,plugin,seq__38764__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38783.call(null,msg_hist);
});})(seq__38764,chunk__38765,count__38766,i__38767,pl_38783,vec__38771,k,plugin,seq__38764__$1,temp__4657__auto__))
);
} else {
}

var G__38784 = cljs.core.next.call(null,seq__38764__$1);
var G__38785 = null;
var G__38786 = (0);
var G__38787 = (0);
seq__38764 = G__38784;
chunk__38765 = G__38785;
count__38766 = G__38786;
i__38767 = G__38787;
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
var args38788 = [];
var len__21033__auto___38795 = arguments.length;
var i__21034__auto___38796 = (0);
while(true){
if((i__21034__auto___38796 < len__21033__auto___38795)){
args38788.push((arguments[i__21034__auto___38796]));

var G__38797 = (i__21034__auto___38796 + (1));
i__21034__auto___38796 = G__38797;
continue;
} else {
}
break;
}

var G__38790 = args38788.length;
switch (G__38790) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38788.length)].join('')));

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

var seq__38791_38799 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38792_38800 = null;
var count__38793_38801 = (0);
var i__38794_38802 = (0);
while(true){
if((i__38794_38802 < count__38793_38801)){
var msg_38803 = cljs.core._nth.call(null,chunk__38792_38800,i__38794_38802);
figwheel.client.socket.handle_incoming_message.call(null,msg_38803);

var G__38804 = seq__38791_38799;
var G__38805 = chunk__38792_38800;
var G__38806 = count__38793_38801;
var G__38807 = (i__38794_38802 + (1));
seq__38791_38799 = G__38804;
chunk__38792_38800 = G__38805;
count__38793_38801 = G__38806;
i__38794_38802 = G__38807;
continue;
} else {
var temp__4657__auto___38808 = cljs.core.seq.call(null,seq__38791_38799);
if(temp__4657__auto___38808){
var seq__38791_38809__$1 = temp__4657__auto___38808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38791_38809__$1)){
var c__20769__auto___38810 = cljs.core.chunk_first.call(null,seq__38791_38809__$1);
var G__38811 = cljs.core.chunk_rest.call(null,seq__38791_38809__$1);
var G__38812 = c__20769__auto___38810;
var G__38813 = cljs.core.count.call(null,c__20769__auto___38810);
var G__38814 = (0);
seq__38791_38799 = G__38811;
chunk__38792_38800 = G__38812;
count__38793_38801 = G__38813;
i__38794_38802 = G__38814;
continue;
} else {
var msg_38815 = cljs.core.first.call(null,seq__38791_38809__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38815);

var G__38816 = cljs.core.next.call(null,seq__38791_38809__$1);
var G__38817 = null;
var G__38818 = (0);
var G__38819 = (0);
seq__38791_38799 = G__38816;
chunk__38792_38800 = G__38817;
count__38793_38801 = G__38818;
i__38794_38802 = G__38819;
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
var args__21040__auto__ = [];
var len__21033__auto___38824 = arguments.length;
var i__21034__auto___38825 = (0);
while(true){
if((i__21034__auto___38825 < len__21033__auto___38824)){
args__21040__auto__.push((arguments[i__21034__auto___38825]));

var G__38826 = (i__21034__auto___38825 + (1));
i__21034__auto___38825 = G__38826;
continue;
} else {
}
break;
}

var argseq__21041__auto__ = ((((0) < args__21040__auto__.length))?(new cljs.core.IndexedSeq(args__21040__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21041__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38821){
var map__38822 = p__38821;
var map__38822__$1 = ((((!((map__38822 == null)))?((((map__38822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38822):map__38822);
var opts = map__38822__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38820){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38820));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38828){if((e38828 instanceof Error)){
var e = e38828;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38828;

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
return (function (p__38832){
var map__38833 = p__38832;
var map__38833__$1 = ((((!((map__38833 == null)))?((((map__38833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38833):map__38833);
var msg_name = cljs.core.get.call(null,map__38833__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1468965299741