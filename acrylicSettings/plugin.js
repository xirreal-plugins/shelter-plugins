(()=>{var M=Object.create;var g=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var N=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var z=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),U=(e,t)=>{for(var r in t)g(e,r,{get:t[r],enumerable:!0})},C=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of T(t))!j.call(e,n)&&n!==r&&g(e,n,{get:()=>t[n],enumerable:!(i=R(t,n))||i.enumerable});return e};var u=(e,t,r)=>(r=e!=null?M(N(e)):{},C(t||!e||!e.__esModule?g(r,"default",{value:e,enumerable:!0}):r,e)),k=e=>C(g({},"__esModule",{value:!0}),e);var s=z((Q,I)=>{I.exports=shelter.solidWeb});var J={};U(J,{onLoad:()=>G,onUnload:()=>H,openEditor:()=>x,setAcrylicType:()=>h,settings:()=>F,syncSettings:()=>_,toggleAcrylic:()=>$,toggleCSS:()=>w});var S="._row_duff3_1{display:flex;flex-direction:column;margin-bottom:20px}._rowItem_duff3_1{display:flex;width:100%;align-items:center}._label_duff3_1{color:var(--header-primary);line-height:24px;font-weight:500;flex:1}._alignRightFlex_duff3_1{flex:0 0 auto}",l={row:"_row_duff3_1",rowItem:"_rowItem_duff3_1",label:"_label_duff3_1",alignRightFlex:"_alignRightFlex_duff3_1"};var y=u(s()),o=u(s()),p=u(s()),v=u(s()),d=u(s());var D=(0,y.template)("<div><div><label>Open CSS Editor</label></div></div>",6),O=(0,y.template)("<div><div><label>Blur type</label></div></div>",6),{plugin:{store:m},ui:{SwitchItem:A,Button:B,ButtonSizes:E,Space:W}}=shelter,L=["Mica (Windows 11)","Acrylic","Blur "],F=()=>(_(),[(0,d.createComponent)(A,{hideBorder:!0,get value(){return m.acrylic},onChange:e=>$(e),children:"Acrylic effect"}),(0,d.createComponent)(A,{hideBorder:!0,get value(){return m.css},onChange:e=>w(e),children:"Theme injector"}),(()=>{let e=D.cloneNode(!0),t=e.firstChild,r=t.firstChild;return(0,v.insert)(t,(0,d.createComponent)(B,{get classes(){return`${l.alignRightFlex}`},get size(){return E.MEDIUM},onClick:x,children:"Open"}),null),(0,p.effect)(i=>{let n=`${l.row}`,a=`${l.rowItem}`,f=`${l.label}`;return n!==i._v$&&(0,o.className)(e,i._v$=n),a!==i._v$2&&(0,o.className)(t,i._v$2=a),f!==i._v$3&&(0,o.className)(r,i._v$3=f),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})(),(0,d.createComponent)(W,{}),(()=>{let e=O.cloneNode(!0),t=e.firstChild,r=t.firstChild;return(0,v.insert)(t,(0,d.createComponent)(B,{get classes(){return`${l.alignRightFlex}`},get size(){return E.MEDIUM},grow:!0,onClick:()=>{h((m.type+1)%3)},get children(){return L[m.type]}}),null),(0,p.effect)(i=>{let n=`${l.row}`,a=`${l.rowItem}`,f=`${l.label}`;return n!==i._v$4&&(0,o.className)(e,i._v$4=n),a!==i._v$5&&(0,o.className)(t,i._v$5=a),f!==i._v$6&&(0,o.className)(r,i._v$6=f),i},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),e})()]);var{plugin:{store:c},ui:{injectCss:q}}=shelter;function $(e){c.acrylic=e,e?window.acrylic.enable():window.acrylic.disable()}function w(e){c.css=e,e?window.acrylic.css.enable():window.acrylic.css.disable()}function h(e){c.type=e,window.acrylic.setType(e)}function x(){c.css=!0,window.acrylic.css.openEditor()}function _(){if(window.acrylic==null){setTimeout(_(),500);return}let e=window.acrylic.internal.getSettings();c.acrylic=e.acrylic,c.css=e.css,c.type=e.type}var b=null;function G(){b||(b=q(S)),_()}function H(){b?.()}return k(J);})();
