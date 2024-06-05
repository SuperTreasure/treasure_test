import{e as F,i as w,z as K,r as u,A as j,o as n,c as t,v as h,f as z,t as C,m,a as s,p as y,n as A,u as U,w as G,F as J,g as O,x as I,y as T,B as P,C as L,q as Q,s as X,_ as Y}from"./app-D0JRNure.js";import Z from"./Space-D9RFgX9n.js";const B=i=>(Q("data-v-63c82bd1"),i=i(),X(),i),_={key:0,class:"m-icon"},x={class:"u-tag"},ee=B(()=>s("svg",{focusable:"false",class:"u-close","data-icon":"close",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"64 64 896 896"},[s("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"})],-1)),oe=[ee],le={class:"u-tag"},ae=["onClick"],se=B(()=>s("svg",{focusable:"false",class:"u-close","data-icon":"close",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"64 64 896 896"},[s("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"})],-1)),ne=[se],te=B(()=>s("svg",{focusable:"false",class:"u-plus","data-icon":"plus",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"64 64 896 896"},[s("path",{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}),s("path",{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"})],-1)),re=[te],ce=F({__name:"Tag",props:{closable:{type:Boolean,default:!1},color:{default:""},icon:{default:""},size:{default:"middle"},bordered:{type:Boolean,default:!0},dynamic:{type:Boolean,default:!1},value:{default:()=>[]},spaceWidth:{default:"auto"},spaceAlign:{default:"start"},spaceDirection:{default:"horizontal"},spaceSize:{default:"small"}},emits:["update:value","close","dynamicClose"],setup(i,{emit:V}){const a=i,$=w(()=>{if(a.dynamic&&a.value.length){if(typeof a.value[0]=="string")return!0;if(typeof a.value[0]=="object")return!1}return null}),M=w(()=>a.dynamic&&a.value.length?$.value?a.value.map(e=>({label:e,closable:!0})):a.value.map(e=>({closable:!0,...e})):[]),g=K(),D=w(()=>{var e;if(!a.dynamic){const l=(e=g.icon)==null?void 0:e.call(g);return l?!!(l[0].children!=="v-if"&&(l!=null&&l.length)):a.icon}return!1}),p=u(),d=u(!1),v=u(""),r=["success","processing","error","warning","default","pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],S=u(!1),b=u(),k=u(Array(a.value.length).fill(1));j(()=>{if(a.dynamic){const e=a.value.length;k.value=Array(e).fill(1),L(()=>{if(b.value)for(let l=0;l<e;l++)k.value[l]=b.value[l].offsetWidth})}});const f=V;function R(e){S.value=!0,f("close",e)}function E(e,l){const o=a.value.filter((c,q)=>q!==l);f("update:value",o),f("dynamicClose",e,l)}function H(){d.value=!0,L(()=>{p.value.focus()})}function N(){$.value?f("update:value",[...a.value,v.value]):f("update:value",[...a.value,{label:v.value}]),d.value=!1,p.value=""}function W(e){e.key==="Enter"&&p.value.blur()}return(e,l)=>e.dynamic?(n(),U(Z,{key:1,width:e.spaceWidth,align:e.spaceAlign,direction:e.spaceDirection,size:e.spaceSize},{default:G(()=>[(n(!0),t(J,null,O(M.value,(o,c)=>(n(),t("div",{class:y(["m-tag",[`tag-${o.size||e.size}`,(o.color||e.color)&&r.includes(o.color||e.color)?"tag-"+(o.color||e.color):"",{"tag-borderless":o.bordered!==void 0&&!o.bordered,"has-color":(o.color||e.color)&&!r.includes(o.color||e.color)}]]),style:A(`background-color: ${(o.color||e.color)&&!r.includes(o.color||e.color)?o.color||e.color:""};`),key:c},[I(s("span",{class:"m-icon",ref_for:!0,ref_key:"tagsIconRef",ref:b},[h(e.$slots,"icon",{index:c},()=>[z(C(o.icon),1)],!0)],512),[[T,k.value[c]]]),s("span",le,[h(e.$slots,"default",{label:o.label,index:c},()=>[z(C(o.label),1)],!0)]),o.closable||e.closable?(n(),t("span",{key:0,class:"m-close",onClick:q=>E(o,c)},ne,8,ae)):m("",!0)],6))),128)),d.value?m("",!0):(n(),t("div",{key:0,class:y(["m-tag",[`tag-${e.size}`,{"m-plus":e.dynamic}]]),onClick:H},re,2)),I(s("input",{ref_key:"inputRef",ref:p,class:y(["u-input",`input-${e.size}`]),type:"text","onUpdate:modelValue":l[0]||(l[0]=o=>v.value=o),onBlur:l[1]||(l[1]=o=>d.value=!1),onChange:N,onKeydown:W},null,34),[[T,d.value],[P,v.value]])]),_:3},8,["width","align","direction","size"])):(n(),t("div",{key:0,class:y(["m-tag",[`tag-${e.size}`,e.color&&r.includes(e.color)?"tag-"+e.color:"",{"tag-borderless":!e.bordered,"has-color":e.color&&!r.includes(e.color),hidden:S.value}]]),style:A(`background-color: ${e.color&&!r.includes(e.color)?e.color:""};`)},[D.value?(n(),t("span",_,[h(e.$slots,"icon",{},()=>[z(C(e.icon),1)],!0)])):m("",!0),s("span",x,[h(e.$slots,"default",{},void 0,!0)]),e.closable?(n(),t("span",{key:1,class:"m-close",onClick:R},oe)):m("",!0)],6))}}),de=Y(ce,[["__scopeId","data-v-63c82bd1"],["__file","Tag.vue"]]);export{de as default};