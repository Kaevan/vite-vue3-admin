var g=Object.defineProperty,F=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var l=(a,e,t)=>e in a?g(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,d=(a,e)=>{for(var t in e||(e={}))D.call(e,t)&&l(a,t,e[t]);if(c)for(var t of c(e))x.call(e,t)&&l(a,t,e[t]);return a},m=(a,e)=>F(a,_(e));var p=(a,e,t)=>new Promise((i,o)=>{var r=n=>{try{u(t.next(n))}catch(s){o(s)}},f=n=>{try{u(t.throw(n))}catch(s){o(s)}},u=n=>n.done?i(n.value):Promise.resolve(n.value).then(r,f);u((t=t.apply(a,e)).next())});import{d as I,z as B,K as w,N as C}from"./index.09d48c59.js";import{u as L}from"./dynamic-table.4e750772.js";import{a as b}from"./index.64b91c34.js";import"./VerticalRightOutlined.1de6581d.js";import"./schema-form.0d17bbe0.js";import"./index.6e2ea1dc.js";const h={name:"SystemMonitorLoginLog"},K=I(m(d({},h),{setup(a){const[e]=L(),t=f=>p(this,[f],function*({page:o,limit:r}){return yield b({page:o,limit:r})}),i=[{title:"\u7528\u6237\u540D",dataIndex:"username",width:280,align:"center"},{title:"\u767B\u5F55IP",dataIndex:"ip",width:150,align:"center"},{title:"\u767B\u5F55\u65F6\u95F4",dataIndex:"time",align:"center",formItemProps:{component:"DatePicker",componentProps:{class:"w-full"}}},{title:"\u64CD\u4F5C\u7CFB\u7EDF",dataIndex:"os",align:"center"},{title:"\u6D4F\u89C8\u5668",dataIndex:"browser",align:"center"}];return(o,r)=>(B(),w(C(e),{"header-title":"\u767B\u5F55\u65E5\u5FD7","data-request":t,columns:i}))}}));export{K as default};
