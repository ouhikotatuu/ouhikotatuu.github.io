import{u as ae,e as le}from"./exportToExcel-BUpgOtO1.js";import{D as O,E as J,z as h,r as B,o as q,d as L,a as N,s as K,p as Q,b as p,c as x,q as H,w as t,g as e,l as I,e as j,v as A,x as $,F as V,M as F,t as W,A as ne,f as S,C as oe,j as z,B as X,_ as ue}from"./index-DHTjKAgc.js";import{l as se,P as de}from"./productTypeStroe-CJkoG5F2.js";import{l as re}from"./sampliTask-C47FV6jp.js";import"./productType-D4N8wgIn.js";function ie(f){return O({url:"/result/pageItem",method:"GET",params:f})}function ce(f){return O({url:"/result/save",method:"POST",data:f})}function me(f){return O({url:"/result/update",method:"PUT",data:f})}function pe(f){return O({url:"/result",method:"DELETE",params:f})}const ve=J("productBatchStore",()=>{const f=h([]),o=B({current:1,size:20,pbTypeName:null,detectProject:null,productNumber:null,startTime:null,endTime:null});q(()=>{T()});const T=async()=>{const v=await se(o);f.value=v.records};return{ProductBatchdata:T,ProducBatchData:f,model:o}}),fe=J("sampliTaskManage",()=>{const f=h([]),o=B({size:20,current:1,marketId:null,sampleTypeId:null,sampleTypeName:null,sampleName:null,userName:null,merchantId:null,startTime:null,endTime:null,userId:null,sampleNameId:null});return{sampliTaskManage:f,model:o,SampliTaskManage:async()=>{const v=await re(o);f.value=v.records}}}),_e=L({__name:"ResultManageAllAdd",emits:["save"],setup(f,{expose:o,emit:T}){const v=N(!1),n=B({id:"",detectProject:null,productBatchId:"",batchCode:"",nsId:"",detectionMethod:"",result:"",detectionTime:"",checkStatus:"",userName:"",samplingRecordId:null}),C=fe(),{sampliTaskManage:U}=K(C),{SampliTaskManage:y}=C,b=de(),{productTypeTableData:Y}=K(b),{ProductTypedata:E}=b;q(()=>{y(),E()});const M=N(null),m=T;o({begin:()=>{var d;(d=M.value)==null||d.resetFields(),Q(()=>{v.value=!0})},end:()=>{v.value=!1}});const l=()=>{F.confirm({title:"确定取消",content:"是否确定取消操作？",okText:"确定",cancelText:"取消",onOk:()=>{v.value=!1}})},_=async()=>{var d;await((d=M.value)==null?void 0:d.validate()),m("save",n)};return(d,s)=>{const k=p("a-select-option"),P=p("a-select"),R=p("a-form-item"),r=p("a-form"),a=p("a-button"),g=p("a-modal");return x(),H(g,{open:v.value,"onUpdate:open":s[2]||(s[2]=i=>v.value=i),title:"添加"},{footer:t(()=>[e(a,{onClick:l},{default:t(()=>s[3]||(s[3]=[I("取消")])),_:1}),e(a,{type:"primary",onClick:_},{default:t(()=>s[4]||(s[4]=[I("确定")])),_:1})]),default:t(()=>[e(r,{model:n,ref_key:"formRef",ref:M},{default:t(()=>[e(R,{label:"采样任务",name:"samplingRecordId"},{default:t(()=>[e(P,{value:n.samplingRecordId,"onUpdate:value":s[0]||(s[0]=i=>n.samplingRecordId=i),placeholder:"请选择采样任务"},{default:t(()=>[(x(!0),j(V,null,A($(U),i=>(x(),H(k,{key:i.id,label:i.id,value:i.id},null,8,["label","value"]))),128))]),_:1},8,["value"])]),_:1}),e(R,{label:"检测项目",name:"detectProject"},{default:t(()=>[e(P,{value:n.detectProject,"onUpdate:value":s[1]||(s[1]=i=>n.detectProject=i),placeholder:"请选择检测项目"},{default:t(()=>[(x(!0),j(V,null,A($(Y),i=>(x(),H(k,{key:i.id,label:i.detectProject,value:i.detectProject},null,8,["label","value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])}}}),be=L({__name:"ResultManageAllEdit",emits:["save"],setup(f,{expose:o,emit:T}){const v=N(!1),n=B({id:"",detectProject:"",productBatchId:null,batchCode:"",nsId:"",detectionMethod:"",instrumentName:"",result:"",detectionTime:"",checkStatus:"",userName:"",samplingRecordId:""}),C=ve(),{ProducBatchData:U}=K(C),y=N(null),b=B({sampleType:"",sampleName:"",marketName:"",boothId:""}),Y=T;o({begin:m=>{console.log(m),n.id=m.id,n.samplingRecordId=m.samplingRecordId,n.detectProject=m.detectProject,n.productBatchId=m.productBatchId,n.batchCode=m.batchCode,n.nsId=m.nsId,n.detectionMethod=m.detectionMethod,n.result=m.result,n.detectionTime=m.detectionTime,n.checkStatus=m.checkStatus,n.userName=m.userName,n.instrumentName=m.instrumentName;for(const l in b)b[l]=m[l];Q(()=>{v.value=!0})},end:()=>{v.value=!1}});const E=()=>{F.confirm({title:"确定取消",content:"是否确定取消操作？",okText:"确定",cancelText:"取消",onOk:()=>{v.value=!1}})},M=async()=>{var m;await((m=y.value)==null?void 0:m.validate()),Y("save",n)};return(m,l)=>{const _=p("a-input"),d=p("a-form-item"),s=p("a-col"),k=p("a-row"),P=p("a-select-option"),R=p("a-select"),r=p("a-date-picker"),a=p("a-form"),g=p("a-button"),i=p("a-modal");return x(),H(i,{open:v.value,"onUpdate:open":l[15]||(l[15]=u=>v.value=u),title:"检测项目修改",width:"800px"},{footer:t(()=>[e(g,{onClick:E},{default:t(()=>l[18]||(l[18]=[I("取消")])),_:1}),e(g,{type:"primary",onClick:M},{default:t(()=>l[19]||(l[19]=[I("确定")])),_:1})]),default:t(()=>[e(a,{model:n,ref_key:"formRef",ref:y},{default:t(()=>[e(k,{gutter:24},{default:t(()=>[e(s,{span:12},{default:t(()=>[e(d,{label:"操作人"},{default:t(()=>[e(_,{value:n.userName,"onUpdate:value":l[0]||(l[0]=u=>n.userName=u)},null,8,["value"])]),_:1})]),_:1}),e(s,{span:12},{default:t(()=>[e(d,{label:"采样任务ID"},{default:t(()=>[e(_,{disabled:!0,value:n.samplingRecordId,"onUpdate:value":l[1]||(l[1]=u=>n.samplingRecordId=u)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(k,{gutter:24},{default:t(()=>[e(s,{span:12},{default:t(()=>[e(d,{label:"市场名"},{default:t(()=>[e(_,{disabled:!0,value:b.marketName,"onUpdate:value":l[2]||(l[2]=u=>b.marketName=u)},null,8,["value"])]),_:1})]),_:1}),e(s,{span:12},{default:t(()=>[e(d,{label:"摊位名"},{default:t(()=>[e(_,{disabled:!0,value:b.boothId,"onUpdate:value":l[3]||(l[3]=u=>b.boothId=u)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(k,{gutter:24},{default:t(()=>[e(s,{span:12},{default:t(()=>[e(d,{label:"样品类型"},{default:t(()=>[e(_,{disabled:!0,value:b.sampleType,"onUpdate:value":l[4]||(l[4]=u=>b.sampleType=u)},null,8,["value"])]),_:1})]),_:1}),e(s,{span:12},{default:t(()=>[e(d,{label:"样品名称"},{default:t(()=>[e(_,{disabled:!0,value:b.sampleName,"onUpdate:value":l[5]||(l[5]=u=>b.sampleName=u)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(k,{gutter:24},{default:t(()=>[e(s,{span:12},{default:t(()=>[e(d,{label:"检测项目"},{default:t(()=>[e(_,{value:n.detectProject,"onUpdate:value":l[6]||(l[6]=u=>n.detectProject=u)},null,8,["value"])]),_:1})]),_:1}),e(s,{span:12},{default:t(()=>[e(d,{label:"批号"},{default:t(()=>[e(R,{value:n.productBatchId,"onUpdate:value":l[7]||(l[7]=u=>n.productBatchId=u)},{default:t(()=>[(x(!0),j(V,null,A($(U),u=>(x(),H(P,{key:u.id,label:u.batchNumber,value:u.id},{default:t(()=>[I(W(u.batchNumber),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),e(k,{gutter:24},{default:t(()=>[e(s,{span:12},{default:t(()=>[e(d,{label:"滚码"},{default:t(()=>[e(_,{value:n.batchCode,"onUpdate:value":l[8]||(l[8]=u=>n.batchCode=u)},null,8,["value"])]),_:1})]),_:1}),e(s,{span:12},{default:t(()=>[e(d,{label:"检测方式"},{default:t(()=>[e(_,{value:n.detectionMethod,"onUpdate:value":l[9]||(l[9]=u=>n.detectionMethod=u)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(k,{gutter:24},{default:t(()=>[e(s,{span:12},{default:t(()=>[e(d,{label:"检测仪器"},{default:t(()=>[e(_,{value:n.instrumentName,"onUpdate:value":l[10]||(l[10]=u=>n.instrumentName=u)},null,8,["value"])]),_:1})]),_:1}),e(s,{span:12},{default:t(()=>[e(d,{label:"结论"},{default:t(()=>[e(_,{value:n.result,"onUpdate:value":l[11]||(l[11]=u=>n.result=u)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(k,{gutter:24},{default:t(()=>[e(s,{span:12},{default:t(()=>[e(d,{label:"检测时间"},{default:t(()=>[e(r,{valueFormat:"YYYY-MM-DD",value:n.detectionTime,"onUpdate:value":l[12]||(l[12]=u=>n.detectionTime=u)},null,8,["value"])]),_:1})]),_:1}),e(s,{span:12},{default:t(()=>[e(d,{label:"复核状态"},{default:t(()=>[e(R,{value:n.checkStatus,"onUpdate:value":l[13]||(l[13]=u=>n.checkStatus=u)},{default:t(()=>[e(P,{value:1},{default:t(()=>l[16]||(l[16]=[I("复核")])),_:1}),e(P,{value:0},{default:t(()=>l[17]||(l[17]=[I("非复核")])),_:1})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),e(k,{gutter:24},{default:t(()=>[e(s,{span:12},{default:t(()=>[e(d,{label:"依据标准"},{default:t(()=>[e(_,{value:n.nsId,"onUpdate:value":l[14]||(l[14]=u=>n.nsId=u)},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])}}}),ge={class:"product_manageall_page"},ke={class:"table_form_view"},Ie={class:"table_action_view"},ye={class:"table_search_handler"},Te={class:"table_action_button"},xe={class:"table_title"},Ne={class:"table_title_icon"},Ce={key:0,class:"action_button_list"},Pe={key:1},Se=L({__name:"index",setup(f){const o=B({current:1,size:10,marketName:null,boothId:null,sampleTypeName:null,sampleName:null,merchantId:null,detectProject:null,result:null,startTime:null,endTime:null}),T=h([]),v=h(0),n=N(null),C=N(null),U=N(null);q(async()=>{y()});const y=async()=>{const r=await ie(o);T.value=r.records,v.value||(v.value=r.total||0)},b=async()=>{y()},Y=()=>{o.marketName=null,o.boothId=null,o.sampleTypeName=null,o.sampleName=null,o.merchantId=null,o.detectProject=null,o.result=null,o.startTime=null,o.endTime=null,y()},E=async r=>{var a;await ce(r),(a=U.value)==null||a.end(),y(),z.success("新增成功")},M=async r=>{var a;console.log(1),await me(r),(a=C.value)==null||a.end(),y(),z.success("修改成功")},m=async r=>{console.log(r),F.confirm({title:"确定删除",content:"是否确定删除该结果？",okText:"确定",cancelText:"取消",onOk:async()=>{await pe({ids:r}),y(),z.success("删除成功")}})},l=[{title:"序号",customRender:({text:r,record:a,index:g})=>`${g+1}`,align:"center",fixed:"left"},{title:"采样任务ID",dataIndex:"samplingRecordId",align:"center"},{title:"市场名",dataIndex:"marketName",align:"center"},{title:"摊位名",dataIndex:"boothId",align:"center"},{title:"样品类型",dataIndex:"sampleType",align:"center"},{title:"样品名称",dataIndex:"sampleName",align:"center"},{title:"检测项目",dataIndex:"detectProject",align:"center"},{title:"批号",dataIndex:"batchNumber",align:"center"},{title:"滚码",dataIndex:"batchCode",align:"center"},{title:"依据标准",dataIndex:"nsId",align:"center"},{title:"检测方式",dataIndex:"detectionMethod",align:"center"},{title:"检测仪器",dataIndex:"instrumentName",align:"center"},{title:"结论",dataIndex:"result",align:"center"},{title:"检测时间",dataIndex:"detectionTime",align:"center"},{title:"复核状态",dataIndex:"checkStatus",align:"center"},{title:"操作人",dataIndex:"userName",align:"center"},{title:"操作",dataIndex:"action",align:"center"}],_=()=>{const r=["操作","序号"];return[...l.filter(a=>!r.includes(a.title))]},d=N([]),s=N([]),k=ne(()=>({selectedRowKeys:d.value,onChange:(r,a)=>{d.value=r,s.value=a}})),P=()=>{F.confirm({title:"确定导出选中数据吗？",content:"导出后无法修改，请确认是否导出？",okText:"确定",cancelText:"取消",onOk:()=>{le(s.value.map((r,a)=>({...r,sn:a})),_(),"selectedData.xlsx")}})},R=r=>{o.current=r.current,o.size=r.pageSize,y()};return(r,a)=>{const g=p("a-input"),i=p("a-form-item"),u=p("a-date-picker"),Z=p("a-form"),w=p("a-button"),ee=p("a-table");return x(),j("div",ge,[S("div",ke,[e(Z,{class:"search_form",layout:"inline",autocomplete:"off",model:n.value},{default:t(()=>[e(i,{label:"市场名"},{default:t(()=>[e(g,{placeholder:"请输入市场名字",value:o.marketName,"onUpdate:value":a[0]||(a[0]=c=>o.marketName=c)},null,8,["value"])]),_:1}),e(i,{label:"摊位"},{default:t(()=>[e(g,{placeholder:"请输入摊位",value:o.boothId,"onUpdate:value":a[1]||(a[1]=c=>o.boothId=c)},null,8,["value"])]),_:1}),e(i,{label:"样品类型"},{default:t(()=>[e(g,{placeholder:"请输入样品类型",value:o.sampleTypeName,"onUpdate:value":a[2]||(a[2]=c=>o.sampleTypeName=c)},null,8,["value"])]),_:1}),e(i,{label:"样品名"},{default:t(()=>[e(g,{placeholder:"请输入样品名称",value:o.sampleName,"onUpdate:value":a[3]||(a[3]=c=>o.sampleName=c)},null,8,["value"])]),_:1}),e(i,{label:"商户"},{default:t(()=>[e(g,{placeholder:"请输入商户名称",value:o.merchantId,"onUpdate:value":a[4]||(a[4]=c=>o.merchantId=c)},null,8,["value"])]),_:1}),e(i,{label:"检测项目"},{default:t(()=>[e(g,{placeholder:"请输入检测项目",value:o.detectProject,"onUpdate:value":a[5]||(a[5]=c=>o.detectProject=c)},null,8,["value"])]),_:1}),e(i,{label:"检测结果"},{default:t(()=>[e(g,{placeholder:"请输入检测结果",value:o.result,"onUpdate:value":a[6]||(a[6]=c=>o.result=c)},null,8,["value"])]),_:1}),e(i,{label:"时间"},{default:t(()=>[e(u,{placeholder:"请选择时间",value:o.startTime,"onUpdate:value":a[7]||(a[7]=c=>o.startTime=c),valueFormat:"YYYY-MM-DD"},null,8,["value"]),a[11]||(a[11]=S("span",null,"-",-1)),e(u,{placeholder:"请选择时间",value:o.endTime,"onUpdate:value":a[8]||(a[8]=c=>o.endTime=c),valueFormat:"YYYY-MM-DD"},null,8,["value"])]),_:1})]),_:1},8,["model"]),S("div",Ie,[S("div",ye,[e(w,{class:"table_search_button",type:"primary",onClick:a[9]||(a[9]=c=>b())},{default:t(()=>a[12]||(a[12]=[I("查询")])),_:1}),e(w,{class:"table_search_clean_button",type:"primary",onClick:Y},{default:t(()=>a[13]||(a[13]=[I("清除")])),_:1}),e(w,{class:"table_search_button",type:"primary",onClick:P},{default:t(()=>a[14]||(a[14]=[I("导出信息")])),_:1})]),S("div",Te,[e(w,{class:"table_action_add",type:"primary",onClick:a[10]||(a[10]=c=>{var D;return(D=U.value)==null?void 0:D.begin()})},{default:t(()=>a[15]||(a[15]=[I(" 检测任务增加 ")])),_:1})])])]),S("div",xe,[S("div",Ne,[e($(oe))]),a[16]||(a[16]=S("div",{class:"table_title_text"},"菜单名称",-1))]),e(ee,{columns:l,"data-source":T.value,pagination:$(ae)(v.value),"row-selection":k.value,rowKey:c=>c.id,onChange:R},{bodyCell:t(({column:c,record:D})=>[c.dataIndex==="action"?(x(),j("div",Ce,[e(w,{class:"action_button",type:"primary",ghost:"",danger:"",onClick:te=>m(D.id)},{default:t(()=>a[17]||(a[17]=[I("删除")])),_:2},1032,["onClick"]),e(w,{class:"action_button",type:"primary",ghost:"",onClick:te=>{var G;return(G=C.value)==null?void 0:G.begin(D)}},{default:t(()=>a[18]||(a[18]=[I("修改")])),_:2},1032,["onClick"])])):X("",!0),c.dataIndex==="checkStatus"?(x(),j("span",Pe,W(D.checkStatus==="1"?"复核":"非复核"),1)):X("",!0)]),_:1},8,["data-source","pagination","row-selection","rowKey"]),e(_e,{ref_key:"addRef",ref:U,onSave:E,tableData:T.value},null,8,["tableData"]),e(be,{ref_key:"updateRef",ref:C,onSave:M},null,512)])}}}),je=ue(Se,[["__scopeId","data-v-909b3549"]]);export{je as default};
