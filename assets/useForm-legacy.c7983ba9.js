System.register(["./schema-form-legacy.28260cd0.js","./index-legacy.e21751b6.js"],(function(e){"use strict";var t,n,c,r,s,a,o,i,u;return{setters:[function(e){t=e._},function(e){n=e.N,c=e.r,r=e.n,s=e.q,a=e.c,o=e.ac,i=e.ai,u=e.bi}],execute:function(){e("u",(function(e){const l=c({});async function f(){await i();const e=n(l);return u(e)&&console.error("未获取表单实例!"),e}r((()=>e),(()=>{e&&s((async()=>{var t;null===(t=await f())||void 0===t||t.setSchemaFormProps(e)}))}),{immediate:!0,deep:!0});const m=new Proxy(l,{get:(e,t)=>Reflect.has(e,t)?n(e):Reflect.has(e.value,t)?e.value[t]:async(...e)=>{const n=await f();return null==n?void 0:n[t](...e)}});return[(n,{attrs:c,slots:r})=>a(t,o({ref:l},{...c,...e,...n}),r),n(m)]}))}}}));
