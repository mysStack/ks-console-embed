((e)=>{
    "use strict";
    if (!e.console) {
        e.console = {};
    }
    let t;
    let n;
    const e_console = e.console;
    const o = function() {};
    for(var a = [
        "memory"
    ], i = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); t = a.pop();){
        if (!e_console[t]) {
            e_console[t] = {};
        }
    }
    while(n = i.pop()){
        if (!e_console[n]) {
            e_console[n] = o;
        }
    }
})(typeof window === "undefined" ? this : window);
