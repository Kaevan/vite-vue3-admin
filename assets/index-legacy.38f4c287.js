!function(){var t=document.createElement("style");t.innerHTML='.ant-descriptions-header{display:flex;align-items:center;margin-bottom:20px}.ant-descriptions-title{flex:auto;overflow:hidden;color:#000000d9;font-weight:700;font-size:16px;line-height:1.5715;white-space:nowrap;text-overflow:ellipsis}.ant-descriptions-extra{margin-left:auto;color:#000000d9;font-size:14px}.ant-descriptions-view{width:100%;border-radius:2px}.ant-descriptions-view table{width:100%;table-layout:fixed}.ant-descriptions-row>th,.ant-descriptions-row>td{padding-bottom:16px}.ant-descriptions-row:last-child{border-bottom:none}.ant-descriptions-item-label{color:#000000d9;font-weight:400;font-size:14px;line-height:1.5715;text-align:start}.ant-descriptions-item-label:after{content:":";position:relative;top:-.5px;margin:0 8px 0 2px}.ant-descriptions-item-label.ant-descriptions-item-no-colon:after{content:" "}.ant-descriptions-item-no-label:after{margin:0;content:""}.ant-descriptions-item-content{display:table-cell;flex:1;color:#000000d9;font-size:14px;line-height:1.5715;word-break:break-word;overflow-wrap:break-word}.ant-descriptions-item{padding-bottom:0;vertical-align:top}.ant-descriptions-item-container{display:flex}.ant-descriptions-item-container .ant-descriptions-item-label,.ant-descriptions-item-container .ant-descriptions-item-content{display:inline-flex;align-items:baseline}.ant-descriptions-middle .ant-descriptions-row>th,.ant-descriptions-middle .ant-descriptions-row>td{padding-bottom:12px}.ant-descriptions-small .ant-descriptions-row>th,.ant-descriptions-small .ant-descriptions-row>td{padding-bottom:8px}.ant-descriptions-bordered .ant-descriptions-view{border:1px solid #f0f0f0}.ant-descriptions-bordered .ant-descriptions-view>table{table-layout:auto;border-collapse:collapse}.ant-descriptions-bordered .ant-descriptions-item-label,.ant-descriptions-bordered .ant-descriptions-item-content{padding:16px 24px;border-right:1px solid #f0f0f0}.ant-descriptions-bordered .ant-descriptions-item-label:last-child,.ant-descriptions-bordered .ant-descriptions-item-content:last-child{border-right:none}.ant-descriptions-bordered .ant-descriptions-item-label{background-color:#fafafa}.ant-descriptions-bordered .ant-descriptions-item-label:after{display:none}.ant-descriptions-bordered .ant-descriptions-row{border-bottom:1px solid #f0f0f0}.ant-descriptions-bordered .ant-descriptions-row:last-child{border-bottom:none}.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-label,.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-content{padding:12px 24px}.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-label,.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-content{padding:8px 16px}.ant-descriptions-rtl{direction:rtl}.ant-descriptions-rtl .ant-descriptions-item-label:after{margin:0 2px 0 8px}.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-label,.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-content{border-right:none;border-left:1px solid #f0f0f0}.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-label:last-child,.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-content:last-child{border-left:none}\n',document.head.appendChild(t),System.register(["./index-legacy.e21751b6.js"],(function(t){"use strict";var e,n,o,i,l,r,a,s,c,d,p,u,b,m,f,v,y,x,h,w,g,S,C,k;return{setters:[function(t){e=t.c,n=t.e,o=t.m,i=t.r,l=t.cl,r=t.cm,a=t.cn,s=t.k,c=t.a2,d=t.P,p=t.d,u=t.x,b=t.u,m=t.co,f=t.cp,v=t._,y=t.t,x=t.p,h=t.b5,w=t.j,g=t.cq,S=t.f,C=t.aT,k=t.w}],execute:function(){function z(t){return null!=t}var j=function(t){var o,i=t.itemPrefixCls,l=t.component,r=t.span,a=t.labelStyle,s=t.contentStyle,c=t.bordered,d=t.label,p=t.content,u=t.colon,b=l;return c?e(b,{class:[(o={},n(o,"".concat(i,"-item-label"),z(d)),n(o,"".concat(i,"-item-content"),z(p)),o)],colSpan:r},{default:function(){return[z(d)&&e("span",{style:a},[d]),z(p)&&e("span",{style:s},[p])]}}):e(b,{class:["".concat(i,"-item")],colSpan:r},{default:function(){return[e("div",{class:"".concat(i,"-item-container")},[d&&e("span",{class:["".concat(i,"-item-label"),n({},"".concat(i,"-item-no-colon"),!u)],style:a},[d]),p&&e("span",{class:"".concat(i,"-item-content"),style:s},[p])])]}})},D=function(t){var n=function(t,n,o){var i=n.colon,c=n.prefixCls,d=n.bordered,p=o.component,u=o.type,b=o.showLabel,m=o.showContent,f=o.labelStyle,v=o.contentStyle;return t.map((function(t,n){var o,y,x=t.props||{},h=x.prefixCls,w=void 0===h?c:h,g=x.span,S=void 0===g?1:g,C=x.labelStyle,k=x.contentStyle,z=x.label,D=void 0===z?null===(y=null===(o=t.children)||void 0===o?void 0:o.label)||void 0===y?void 0:y.call(o):z,P=l(t),I=r(t),L=a(t),O=t.key;return"string"==typeof p?e(j,{key:"".concat(u,"-").concat(String(O)||n),class:I,style:L,labelStyle:s(s({},f.value),C),contentStyle:s(s({},v.value),k),span:S,colon:i,component:p,itemPrefixCls:w,bordered:d,label:b?D:null,content:m?P:null},null):[e(j,{key:"label-".concat(String(O)||n),class:I,style:s(s(s({},f.value),L),C),span:1,colon:i,component:p[0],itemPrefixCls:w,bordered:d,label:D},null),e(j,{key:"content-".concat(String(O)||n),class:I,style:s(s(s({},v.value),L),k),span:2*S-1,component:p[1],itemPrefixCls:w,bordered:d,content:P},null)]}))},d=t.prefixCls,p=t.vertical,u=t.row,b=t.index,m=t.bordered,f=o(B,{labelStyle:i({}),contentStyle:i({})}),v=f.labelStyle,y=f.contentStyle;return p?e(c,null,[e("tr",{key:"label-".concat(b),class:"".concat(d,"-row")},[n(u,t,{component:"th",type:"label",showLabel:!0,labelStyle:v,contentStyle:y})]),e("tr",{key:"content-".concat(b),class:"".concat(d,"-row")},[n(u,t,{component:"td",type:"content",showContent:!0,labelStyle:v,contentStyle:y})])]):e("tr",{key:b,class:"".concat(d,"-row")},[n(u,t,{component:m?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:v,contentStyle:y})])};d.string,d.any,d.number;var P={prefixCls:d.string,label:d.any,labelStyle:d.style,contentStyle:d.style,span:d.number.def(1)},I=p({name:"ADescriptionsItem",props:P,slots:["label"],setup:function(t,e){var n=e.slots;return function(){var t;return null===(t=n.default)||void 0===t?void 0:t.call(n)}}}),L={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function O(t,e,n){var o=t;return(void 0===e||e>n)&&(o=C(t,{span:n}),k(void 0===e,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}var A={prefixCls:d.string,bordered:d.looseBool,size:d.oneOf(u("default","middle","small")).def("default"),title:d.any,extra:d.any,column:{type:[Number,Object],default:function(){return L}},layout:d.oneOf(u("horizontal","vertical")),colon:d.looseBool,labelStyle:d.style,contentStyle:d.style},B=Symbol("descriptionsContext"),E=p({name:"ADescriptions",props:A,slots:["title","extra"],Item:I,setup:function(t,o){var l,r=o.slots,a=b("descriptions",t),s=a.prefixCls,c=a.direction,d=i({});m((function(){l=f.subscribe((function(e){"object"===v(t.column)&&(d.value=e)}))})),y((function(){f.unsubscribe(l)})),x(B,{labelStyle:h(t,"labelStyle"),contentStyle:h(t,"contentStyle")});var p=w((function(){return function(t,e){if("number"==typeof t)return t;if("object"===v(t))for(var n=0;n<g.length;n++){var o=g[n];if(e[o]&&void 0!==t[o])return t[o]||L[o]}return 3}(t.column,d.value)}));return function(){var o,i,l,a,d=t.size,u=t.bordered,b=void 0!==u&&u,m=t.layout,f=void 0===m?"horizontal":m,v=t.colon,y=void 0===v||v,x=t.title,h=void 0===x?null===(i=r.title)||void 0===i?void 0:i.call(r):x,w=t.extra,g=void 0===w?null===(l=r.extra)||void 0===l?void 0:l.call(r):w,C=function(t,e){var n=S(t),o=[],i=[],l=e;return n.forEach((function(t,r){var a,s=null===(a=t.props)||void 0===a?void 0:a.span,c=s||1;if(r===n.length-1)return i.push(O(t,s,l)),void o.push(i);c<l?(l-=c,i.push(t)):(i.push(O(t,c,l)),o.push(i),l=e,i=[])})),o}(null===(a=r.default)||void 0===a?void 0:a.call(r),p.value);return e("div",{class:[s.value,(o={},n(o,"".concat(s.value,"-").concat(d),"default"!==d),n(o,"".concat(s.value,"-bordered"),!!b),n(o,"".concat(s.value,"-rtl"),"rtl"===c.value),o)]},[(h||g)&&e("div",{class:"".concat(s.value,"-header")},[h&&e("div",{class:"".concat(s.value,"-title")},[h]),g&&e("div",{class:"".concat(s.value,"-extra")},[g])]),e("div",{class:"".concat(s.value,"-view")},[e("table",null,[e("tbody",null,[C.map((function(t,n){return e(D,{key:n,index:n,colon:y,prefixCls:s.value,vertical:"vertical"===f,bordered:b,row:t},null)}))])])])])}}});E.install=function(t){return t.component(E.name,E),t.component(E.Item.name,E.Item),t};t("D",E)}}}))}();
