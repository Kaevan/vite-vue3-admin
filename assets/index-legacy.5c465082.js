System.register(["./index-legacy.e21751b6.js","./index-legacy.fec98179.js","./dynamic-table-legacy.9a247695.js","./VerticalRightOutlined-legacy.083ab0a3.js","./schema-form-legacy.28260cd0.js","./index-legacy.cea177fd.js"],(function(e){"use strict";var t,l,n,a,o,r,c,s,d,i,u,m;return{setters:[function(e){t=e.c,l=e.a2,n=e.Z,a=e.aJ,o=e.d,r=e.z,c=e.B,s=e.Y,d=e.N,i=e.ck},function(e){u=e.A},function(e){m=e.u},function(){},function(){},function(){}],execute:function(){const p=["王路飞","王大蛇","李白","刺客伍六七"],f=["西装","领带","裙子","包包"],g=Array.from({length:30}).map(((e,t)=>({id:t+1,date:(new Date).toLocaleString(),name:p[~~(4*Math.random())],clothes:f[~~(4*Math.random())],price:~~(1e3*Math.random()),gender:~~(2*Math.random()),status:~~(2*Math.random())}))),b=[{title:"姓名",align:"center",dataIndex:"name",formItemProps:{required:!0}},{title:"性别",align:"center",dataIndex:"gender",formItemProps:{component:"Select",componentProps:({formInstance:e,formModel:t,tableInstance:l})=>({options:[{label:"男",value:1},{label:"女",value:0}],onChange(){var n;console.log("tableInstance",null==l?void 0:l.reload()),null==e||e.updateSchema({field:"clothes",componentProps:{options:(n=t.gender,1===n?[{label:"西装",value:1},{label:"领带",value:0}]:0===n?[{label:"裙子",value:1},{label:"包包",value:0}]:[])}}),t.clothes=void 0}})},bodyCell:({record:e})=>t(l,null,[["女","男"][e.gender]])},{title:"衣服",align:"center",dataIndex:"clothes",formItemProps:{component:"Select"}},{title:"价格",align:"center",dataIndex:"price",formItemProps:{component:"Select"},bodyCell:({record:e})=>t(l,null,[[e.price],n("元")])},{title:"状态",align:"center",dataIndex:"status",formItemProps:{component:"Select",componentProps:{request:()=>new Promise((e=>{setTimeout((()=>{e([{label:"已售罄",value:0},{label:"热卖中",value:1}])}),3e3)}))}},bodyCell:({record:e})=>t(a,{color:1==e.status?"red":"default"},{default:()=>[["已售罄","热卖中"][e.status]]})}],h=n(" 查询表格-查询表单使用示例 ");e("default",o({setup(e){const[l,n]=m(),a=async e=>new Promise((t=>{setTimeout((()=>{var l;t({list:g,...e}),null==n||null===(l=n.getQueryFormRef())||void 0===l||l.updateSchema([{field:"price",componentProps:{options:[{label:"0-199",value:"0-199"},{label:"200-999",value:"200-999"}]}}])}),500)}));return(e,n)=>(r(),c("div",null,[t(d(u),{message:"查询表格",type:"info","show-icon":""},{description:s((()=>[h])),_:1}),t(d(i),{title:"查询表单基本使用示例",style:{"margin-top":"20px"}},{default:s((()=>[t(d(l),{size:"small",bordered:"","data-request":a,columns:d(b),"row-key":"heroid"},null,8,["columns"])])),_:1})]))}}))}}}));
