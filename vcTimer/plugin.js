(()=>{var T=Object.create;var a=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var $=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),b=(t,e)=>{for(var o in e)a(t,o,{get:e[o],enumerable:!0})},c=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of S(e))!N.call(t,n)&&n!==o&&a(t,n,{get:()=>e[n],enumerable:!(r=_(e,n))||r.enumerable});return t};var i=(t,e,o)=>(o=t!=null?T(h(t)):{},c(e||!t||!t.__esModule?a(o,"default",{value:t,enumerable:!0}):o,t)),E=t=>c(a({},"__esModule",{value:!0}),t);var s=$((y,l)=>{l.exports=shelter.solidWeb});var M={};b(M,{onLoad:()=>w,onUnload:()=>D});var u=i(s()),p=i(s()),d=i(s()),v=(0,u.template)('<div style="font-weight: bold"><br></div>',3),{flux:{dispatcher:f},solid:{createSignal:O,onCleanup:g}}=shelter;function x(t){let e=Math.floor(t/36e5),o=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3);return`${e>0?e.padStart(2,"0")+":":""}${o.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}function I(){let t=Date.now(),[e,o]=O(0),r=setInterval(()=>{o(Date.now()-t)},1e3);return g(()=>clearInterval(r)),(()=>{let n=v.cloneNode(!0),C=n.firstChild;return(0,d.insert)(n,()=>x(e()),C),n})()}function m(t){t.state=="RTC_CONNECTED"&&document.querySelector('[class^="rtcConnectionStatus-"] + a > div').prepend((0,p.createComponent)(I,{}))}function w(){f.subscribe("RTC_CONNECTION_STATE",m)}function D(){f.unsubscribe("RTC_CONNECTION_STATE",m)}return E(M);})();
