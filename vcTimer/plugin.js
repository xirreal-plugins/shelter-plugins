(()=>{var T=Object.create;var a=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var $=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),b=(t,e)=>{for(var o in e)a(t,o,{get:e[o],enumerable:!0})},c=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of S(e))!N.call(t,n)&&n!==o&&a(t,n,{get:()=>e[n],enumerable:!(r=_(e,n))||r.enumerable});return t};var s=(t,e,o)=>(o=t!=null?T(h(t)):{},c(e||!t||!t.__esModule?a(o,"default",{value:t,enumerable:!0}):o,t)),v=t=>c(a({},"__esModule",{value:!0}),t);var i=$((R,l)=>{l.exports=shelter.solidWeb});var D={};b(D,{onLoad:()=>w,onUnload:()=>y});var u=s(i(),1),d=s(i(),1),p=s(i(),1),E=(0,u.template)('<div id="vcTimer" style="font-weight: bold"><br></div>',3),{flux:{dispatcher:m},solid:{createSignal:g,onCleanup:I}}=shelter;function O(t){let e=Math.floor(t/36e5),o=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3);return`${e>0?e.toString().padStart(2,"0")+":":""}${o.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}function x(){let t=Date.now(),[e,o]=g(0),r=setInterval(()=>{o(Date.now()-t)},1e3);return I(()=>clearInterval(r)),(()=>{let n=E.cloneNode(!0),C=n.firstChild;return(0,p.insert)(n,()=>O(e()),C),n})()}function f(t){t.state=="RTC_CONNECTED"&&(document.getElementById("vcTimer")||document.querySelector('[class^="rtcConnectionStatus_"] + a > div').prepend((0,d.createComponent)(x,{})))}function w(){m.subscribe("RTC_CONNECTION_STATE",f)}function y(){m.unsubscribe("RTC_CONNECTION_STATE",f)}return v(D);})();
