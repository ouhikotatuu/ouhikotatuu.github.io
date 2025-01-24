import{E as fe,z as Q,r as K,_ as ee,a as b,p as ae,b as p,c as v,q as O,w as a,g as e,l as w,f as T,j as X,d as le,s as de,o as Z,e as M,F as B,v as z,t as F,x as q,P as ie,M as G,A as ve,C as ce,B as oe,I as _e,J as ge}from"./index-DHTjKAgc.js";import{a as se,u as be,e as ye}from"./exportToExcel-BUpgOtO1.js";import{l as Ie}from"./merchantMange-6-FL9nMZ.js";import{l as ke}from"./marketMange-Bzid1rzT.js";import{l as xe,a as re,d as Ne}from"./sampliTask-C47FV6jp.js";const pe=fe("merchantStore",()=>{const Y=Q([]),f=K({current:1,size:10,marketName:null,businessTypeId:null,businessStatus:null});return{MerchantStoreData:Y,Merchant:async()=>{const x=await Ie(f);Y.value=x.records},model:f}}),Te={class:"handwriting-board",ref:"boardContainer"},we={__name:"HandwritingBoard",emits:["getSignature"],setup(Y,{expose:f,emit:h}){const x=h,t=b(!1),i=b({x:0,y:0}),R=b(null),N=b(null),C=D=>{t.value=!0,i.value={x:D.offsetX,y:D.offsetY}},$=D=>{if(!t.value)return;const{offsetX:c,offsetY:_}=D;N.value.beginPath(),N.value.moveTo(i.value.x,i.value.y),N.value.lineTo(c,_),N.value.stroke(),i.value={x:c,y:_}},H=()=>{t.value=!1},P=()=>{N.value.clearRect(0,0,R.value.width,R.value.height)},m=()=>{const D=R.value.toDataURL("image/png"),c=atob(D.split(",")[1]),_=new ArrayBuffer(c.length),o=new Uint8Array(_);for(let l=0;l<c.length;l++)o[l]=c.charCodeAt(l);const d=new Blob([o],{type:"image/png"});se(d).then(l=>{l&&(X.success("签名保存成功"),x("getSignature",l),I.value=!1)})},y=()=>{N.value=R.value.getContext("2d"),N.value.lineJoin="round",N.value.lineCap="round",N.value.lineWidth=5,N.value.strokeStyle="#000000"},S=()=>{P(),I.value=!1},I=b(!1);return f({begin:()=>{I.value=!0,ae(()=>{y()})},end:()=>{}}),(D,c)=>{const _=p("a-button"),o=p("a-modal");return v(),O(o,{open:I.value,"onUpdate:open":c[0]||(c[0]=d=>I.value=d),title:"签名",onCancel:S},{footer:a(()=>[e(_,{onClick:P},{default:a(()=>c[1]||(c[1]=[w("清除")])),_:1}),e(_,{type:"primary",onClick:m},{default:a(()=>c[2]||(c[2]=[w("确定")])),_:1})]),default:a(()=>[T("div",Te,[T("canvas",{ref_key:"canvasRef",ref:R,width:"500",height:"500",onMousedown:C,onMousemove:$,onMouseup:H,onMouseleave:H},null,544)],512)]),_:1},8,["open"])}}},me=ee(we,[["__scopeId","data-v-194516f1"]]),Pe={class:"signature-container"},Se=["src"],Ue=le({__name:"SampliTaskManageAdd",props:{tableData:Array},emits:["save"],setup(Y,{expose:f,emit:h}){const x=b(!1),t=K({id:"",sampleTypeId:null,sampleNameId:null,marketId:null,merchantId:"",detectProject:"",boothId:null,samplingSite:"",samplingTime:"",samplingPic:[],remark:"",signature:"",userId:"",purchaseInvoicePic:[]}),i=pe(),{MerchantStoreData:R}=de(i),{Merchant:N}=i;Z(()=>{N()});const C=b(),$=b(null),H={marketId:[{required:!0,message:"请选择市场名称",trigger:"change"}],boothId:[{required:!0,message:"请选择摊位",trigger:"change"}],sampleTypeId:[{required:!0,message:"请选择样品类型",trigger:"change"}],sampleNameId:[{required:!0,message:"请选择样品名称",trigger:"change"}]},P=Y,m=h,y=b([]),S=b([]);f({begin:()=>{var _;(_=$.value)==null||_.resetFields(),y.value=[],S.value=[],ae(()=>{x.value=!0})},end:()=>{x.value=!1}});const I=_=>{var o;if(_){(o=$.value)==null||o.resetFields(),C.value.end(),x.value=!1;return}G.confirm({title:"确定取消",content:"是否确定取消操作？",okText:"确定",cancelText:"取消",onOk:()=>{var d;(d=$.value)==null||d.resetFields(),C.value.end(),x.value=!1}})},D=async()=>{var _;await((_=$.value)==null?void 0:_.validate().then(async()=>{m("save",t)}))},c=async(_,o,d,l)=>{if(l){let s=0;d==="samplingPic"&&(s=y.value.findIndex(n=>n.uuid===_.uuid)),d==="purchaseInvoicePic"&&(s=S.value.findIndex(n=>n.uuid===_.uuid)),o[d].splice(s,1);return}return se(_).then(s=>{o[d]=[...o[d]??[],s]}),!1};return(_,o)=>{const d=p("a-select-option"),l=p("a-select"),s=p("a-form-item"),n=p("a-input"),g=p("a-upload"),k=p("a-button"),J=p("a-textarea"),E=p("a-form"),A=p("a-modal");return v(),M(B,null,[e(A,{open:x.value,"onUpdate:open":o[11]||(o[11]=u=>x.value=u),title:"检测任务增加",onCancel:o[12]||(o[12]=u=>I(!0))},{footer:a(()=>[e(k,{onClick:I},{default:a(()=>o[17]||(o[17]=[w("取消")])),_:1}),e(k,{type:"primary",onClick:D},{default:a(()=>o[18]||(o[18]=[w("确定")])),_:1})]),default:a(()=>[e(E,{model:t,ref_key:"formRef",ref:$,rules:H},{default:a(()=>[e(s,{label:"市场名称",name:"marketId"},{default:a(()=>[e(l,{value:t.marketId,"onUpdate:value":o[0]||(o[0]=u=>t.marketId=u),placeholder:"请选择市场名"},{default:a(()=>[(v(!0),M(B,null,z(q(R),u=>(v(),O(d,{key:u.id,label:u.marketName,value:u.marketId},{default:a(()=>[w(F(u.marketName),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["value"])]),_:1}),e(s,{label:"摊位名称",name:"boothId"},{default:a(()=>[e(l,{value:t.boothId,"onUpdate:value":o[1]||(o[1]=u=>t.boothId=u),placeholder:"请选择摊位名"},{default:a(()=>[(v(!0),M(B,null,z(q(R),u=>(v(),O(d,{key:u.id,label:u.boothId,value:u.boothId},null,8,["label","value"]))),128))]),_:1},8,["value"])]),_:1}),e(s,{label:"样品类型",name:"sampleTypeId"},{default:a(()=>[e(l,{value:t.sampleTypeId,"onUpdate:value":o[2]||(o[2]=u=>t.sampleTypeId=u),placeholder:"请选择样品类型"},{default:a(()=>[(v(!0),M(B,null,z(P.tableData,u=>(v(),O(d,{key:u.id,label:u.sampleName,value:u.sampleTypeId},{default:a(()=>[w(F(u.sampleTypeName),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["value"])]),_:1}),e(s,{label:"样品名称",name:"sampleNameId"},{default:a(()=>[e(l,{value:t.sampleNameId,"onUpdate:value":o[3]||(o[3]=u=>t.sampleNameId=u),placeholder:"请选择样品名称"},{default:a(()=>[(v(!0),M(B,null,z(P.tableData,u=>(v(),O(d,{key:u.id,label:u.sampleTypeName,value:u.sampleNameId},{default:a(()=>[w(F(u.sampleName),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["value"])]),_:1}),e(s,{label:"采样地点",name:"samplingSite"},{default:a(()=>[e(n,{value:t.samplingSite,"onUpdate:value":o[4]||(o[4]=u=>t.samplingSite=u),placeholder:"请输入简要信息"},null,8,["value"])]),_:1}),e(s,{label:"采样图片"},{default:a(()=>[e(g,{name:"file","list-type":"picture-card","file-list":y.value,"onUpdate:fileList":o[5]||(o[5]=u=>y.value=u),multiple:!0,"before-upload":u=>c(u,t,"samplingPic"),onRemove:o[6]||(o[6]=u=>c(u,t,"samplingPic",!0))},{default:a(()=>[T("div",null,[e(q(ie)),o[14]||(o[14]=T("div",{class:"ant-upload-text"},"上传",-1))])]),_:1},8,["file-list","before-upload"])]),_:1}),e(s,{label:"签名",name:"signature"},{default:a(()=>[T("div",Pe,[t.signature?(v(),M("img",{key:0,src:t.signature,style:{height:"100px",width:"100px"},class:"signature-img",onClick:o[7]||(o[7]=(...u)=>C.value.begin&&C.value.begin(...u))},null,8,Se)):(v(),O(k,{key:1,class:"signature-placeholder-btn",onClick:C.value.begin,style:{height:"100px",width:"100px"}},{default:a(()=>o[15]||(o[15]=[w("请签名")])),_:1},8,["onClick"]))])]),_:1}),e(s,{label:"进货单图片"},{default:a(()=>[e(g,{name:"file","list-type":"picture-card","file-list":S.value,"onUpdate:fileList":o[8]||(o[8]=u=>S.value=u),multiple:!0,"before-upload":u=>c(u,t,"purchaseInvoicePic"),onRemove:o[9]||(o[9]=u=>c(u,t,"purchaseInvoicePic",!0))},{default:a(()=>[T("div",null,[e(q(ie)),o[16]||(o[16]=T("div",{class:"ant-upload-text"},"上传",-1))])]),_:1},8,["file-list","before-upload"])]),_:1}),e(s,{label:"备注",name:"remark"},{default:a(()=>[e(J,{value:t.remark,"onUpdate:value":o[10]||(o[10]=u=>t.remark=u),"auto-size":{minRows:4,maxRows:6}},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open"]),e(me,{ref_key:"HandwritingBoardRef",ref:C,onGetSignature:o[13]||(o[13]=u=>{t.signature=u})},null,512)],64)}}}),Ce=ee(Ue,[["__scopeId","data-v-e068b43a"]]),De=["src"],Re=le({__name:"SampliTaskManageUpdate",props:{tableData:Array},emits:["save"],setup(Y,{expose:f,emit:h}){const x=b(),t=b(!1),i=K({id:"",sampleTypeId:"",sampleNameId:"",marketId:"",merchantId:"",detectProject:"",boothId:"",samplingSite:"",samplingTime:"",samplingPic:[],remark:"",signature:"",userId:"",purchaseInvoicePic:[]}),R=pe(),{MerchantStoreData:N}=de(R),{Merchant:C}=R;Z(()=>{C()});const $=b(null),H=Y,P=h;f({begin:d=>{i.id=d.id,i.marketId=d.marketId,i.boothId=d.boothId,i.sampleTypeId=d.sampleTypeId,i.sampleNameId=d.sampleNameId,i.samplingSite=d.samplingSite,i.signature=d.signature,i.remark=d.remark,i.merchantId=d.merchantId,i.samplingPic=JSON.parse(JSON.stringify(d.samplingPic)),i.purchaseInvoicePic=JSON.parse(JSON.stringify(d.purchaseInvoicePic)),Array.isArray(i.samplingPic)&&(c.value=i.samplingPic.map((l,s)=>({uid:s+1,name:`${s}.png`,url:l}))),Array.isArray(i.purchaseInvoicePic)&&(_.value=i.purchaseInvoicePic.map((l,s)=>({uid:s+1,name:`${s}.png`,url:l}))),ae(()=>{t.value=!0})},end:()=>{t.value=!1}});const m=K({current:1,size:10,startTime:"",endTime:""}),y=Q([]);Z(async()=>{S()});const S=async()=>{const d=await ke(m);y.value=d.records},I=()=>{G.confirm({title:"确定取消",content:"是否确定取消操作？",okText:"确定",cancelText:"取消",onOk:()=>{t.value=!1}})},D=async()=>{var d;await((d=$.value)==null?void 0:d.validate()),P("save",i)},c=b([]),_=b([]),o=async(d,l,s,n)=>{if(n){let g=0;s==="samplingPic"&&(g=c.value.findIndex(k=>k.uuid===d.uuid)),s==="purchaseInvoicePic"&&(g=_.value.findIndex(k=>k.uuid===d.uuid)),l[s].splice(g,1);return}return se(d).then(g=>{l[s]=[...l[s]??[],g]}),!1};return(d,l)=>{const s=p("a-select-option"),n=p("a-select"),g=p("a-form-item"),k=p("a-col"),J=p("a-row"),E=p("a-textarea"),A=p("a-input"),u=p("plus-outlined"),W=p("a-upload"),j=p("a-button"),te=p("a-form"),ne=p("a-modal");return v(),M(B,null,[e(ne,{open:t.value,"onUpdate:open":l[11]||(l[11]=r=>t.value=r),title:"采样任务修改",width:"760px"},{footer:a(()=>[e(j,{onClick:I},{default:a(()=>l[16]||(l[16]=[w("取消")])),_:1}),e(j,{type:"primary",onClick:D},{default:a(()=>l[17]||(l[17]=[w("确定")])),_:1})]),default:a(()=>[e(te,{model:i,ref_key:"formRef",ref:$},{default:a(()=>[e(J,{gutter:24},{default:a(()=>[e(k,{span:12},{default:a(()=>[e(g,{label:"市场名称"},{default:a(()=>[e(n,{value:i.marketId,"onUpdate:value":l[0]||(l[0]=r=>i.marketId=r),placeholder:"请选择市场名"},{default:a(()=>[(v(!0),M(B,null,z(q(N),r=>(v(),O(s,{key:r.id,label:r.marketName,value:r.marketId},{default:a(()=>[w(F(r.marketName),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1}),e(k,{span:12},{default:a(()=>[e(g,{label:"摊位名称"},{default:a(()=>[e(n,{value:i.boothId,"onUpdate:value":l[1]||(l[1]=r=>i.boothId=r),placeholder:"请选择摊位名"},{default:a(()=>[(v(!0),M(B,null,z(q(N),r=>(v(),O(s,{key:r.id,label:r.boothId,value:r.boothId},null,8,["label","value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),e(J,{gutter:24},{default:a(()=>[e(k,{span:12},{default:a(()=>[e(g,{label:"样品类型"},{default:a(()=>[e(n,{value:i.sampleTypeId,"onUpdate:value":l[2]||(l[2]=r=>i.sampleTypeId=r),placeholder:"请选择仪器归属系统"},{default:a(()=>[(v(!0),M(B,null,z(H.tableData,r=>(v(),O(s,{key:r.id,label:r.sampleName,value:r.sampleTypeId},{default:a(()=>[w(F(r.sampleTypeName),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1}),e(k,{span:12},{default:a(()=>[e(g,{label:"样品名"},{default:a(()=>[e(n,{value:i.sampleNameId,"onUpdate:value":l[3]||(l[3]=r=>i.sampleNameId=r),placeholder:"请选择仪器归属市场"},{default:a(()=>[(v(!0),M(B,null,z(H.tableData,r=>(v(),O(s,{key:r.id,label:r.sampleName,value:r.sampleNameId},{default:a(()=>[w(F(r.sampleName),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),e(J,{gutter:24},{default:a(()=>[e(k,{span:12},{default:a(()=>[e(g,{label:"备注"},{default:a(()=>[e(E,{value:i.remark,"onUpdate:value":l[4]||(l[4]=r=>i.remark=r),"auto-size":{minRows:4,maxRows:6}},null,8,["value"])]),_:1})]),_:1}),e(k,{span:12},{default:a(()=>[e(g,{label:"采样地点"},{default:a(()=>[e(A,{value:i.samplingSite,"onUpdate:value":l[5]||(l[5]=r=>i.samplingSite=r),placeholder:"请输入简要信息"},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(J,{gutter:24},{default:a(()=>[e(k,{span:12},{default:a(()=>[e(g,{label:"采样图片"},{default:a(()=>[e(W,{name:"file","list-type":"picture-card","file-list":c.value,"onUpdate:fileList":l[6]||(l[6]=r=>c.value=r),multiple:!0,"before-upload":r=>o(r,i,"samplingPic"),onRemove:l[7]||(l[7]=r=>o(r,i,"samplingPic",!0))},{default:a(()=>[T("div",null,[e(u),l[13]||(l[13]=T("div",{class:"ant-upload-text"},"上传",-1))])]),_:1},8,["file-list","before-upload"])]),_:1})]),_:1}),e(k,{span:12},{default:a(()=>[e(g,{label:"签名"},{default:a(()=>[T("div",{class:"signature-container",onClick:l[8]||(l[8]=(...r)=>x.value.begin&&x.value.begin(...r))},[i.signature?(v(),M("img",{key:0,style:{width:"100%",height:"100%"},src:i.signature,alt:""},null,8,De)):(v(),O(j,{key:1,class:"signature-placeholder-btn",onClick:x.value.begin,style:{height:"100px",width:"100px"}},{default:a(()=>l[14]||(l[14]=[w("请签名")])),_:1},8,["onClick"]))])]),_:1})]),_:1})]),_:1}),e(J,{gutter:24},{default:a(()=>[e(k,{span:12},{default:a(()=>[e(g,{label:"进货单图片"},{default:a(()=>[e(W,{name:"file","list-type":"picture-card","file-list":_.value,"onUpdate:fileList":l[9]||(l[9]=r=>_.value=r),multiple:!0,"before-upload":r=>o(r,i,"purchaseInvoicePic"),onRemove:l[10]||(l[10]=r=>o(r,i,"purchaseInvoicePic",!0))},{default:a(()=>[T("div",null,[e(u),l[15]||(l[15]=T("div",{class:"ant-upload-text"},"上传",-1))])]),_:1},8,["file-list","before-upload"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["open"]),e(me,{ref_key:"HandwritingBoardRef",ref:x,onGetSignature:l[12]||(l[12]=r=>{i.signature=r})},null,512)],64)}}}),Me=ee(Re,[["__scopeId","data-v-4ad81579"]]),Oe={key:1,style:{color:"red","margin-left":"50px"}},$e={key:1,style:{color:"red","margin-left":"50px"}},he={key:1,style:{color:"red","margin-left":"50px"}},He=le({__name:"SampliTaskManageItem",emits:["save"],setup(Y,{expose:f,emit:h}){const x=b(!1),t=K({id:"",marketId:"",marketName:"",boothId:"",merchantId:"",merchantOperatorName:"",sampleNameId:"",sampleName:"",sampleTypeId:"",sampleTypeName:"",samplingSite:"",samplingPic:"",purchaseInvoicePic:"",signature:"",detectProject:"",remark:"",samplingTime:"",userName:""}),i=b(),R=b(),N=b(),C=b(null),$=h;f({begin:P=>{t.sampleTypeName=P.sampleTypeName,t.sampleName=P.sampleName,t.marketName=P.marketName,t.boothId=P.boothId,t.merchantOperatorName=P.merchantOperatorName,t.userName=P.userName,t.samplingTime=P.samplingTime,t.samplingSite=P.samplingSite,t.signature=P.signature,t.samplingPic=JSON.parse(JSON.stringify(P.samplingPic)),t.purchaseInvoicePic=JSON.parse(JSON.stringify(P.purchaseInvoicePic)),Array.isArray(t.samplingPic)&&(i.value=t.samplingPic.map((m,y)=>({uid:y+1,name:`${y}.png`,url:m}))),Array.isArray(t.purchaseInvoicePic)&&(R.value=t.purchaseInvoicePic.map((m,y)=>({uid:y+1,name:`${y}.png`,url:m}))),t.signature&&(N.value=[{uid:1,name:"1.png",url:t.signature}]),ae(()=>{x.value=!0})},end:()=>x.value=!1});const H=()=>{$("save",t)};return(P,m)=>{const y=p("a-input"),S=p("a-form-item"),I=p("a-col"),D=p("a-row"),c=p("a-upload"),_=p("a-form"),o=p("a-button"),d=p("a-modal");return v(),O(d,{open:x.value,"onUpdate:open":m[11]||(m[11]=l=>x.value=l),title:"详情",width:"760px"},{footer:a(()=>[e(o,{type:"primary",onClick:H},{default:a(()=>m[12]||(m[12]=[w("确定")])),_:1})]),default:a(()=>[e(_,{model:t,ref_key:"formRef",ref:C},{default:a(()=>[e(D,{gutter:24},{default:a(()=>[e(I,{span:12},{default:a(()=>[e(S,{label:"样品类型"},{default:a(()=>[e(y,{value:t.sampleTypeName,"onUpdate:value":m[0]||(m[0]=l=>t.sampleTypeName=l)},null,8,["value"])]),_:1})]),_:1}),e(I,{span:12},{default:a(()=>[e(S,{label:"样品名"},{default:a(()=>[e(y,{value:t.sampleName,"onUpdate:value":m[1]||(m[1]=l=>t.sampleName=l)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(D,{gutter:24},{default:a(()=>[e(I,{span:12},{default:a(()=>[e(S,{label:"市场名"},{default:a(()=>[e(y,{value:t.marketName,"onUpdate:value":m[2]||(m[2]=l=>t.marketName=l)},null,8,["value"])]),_:1})]),_:1}),e(I,{span:12},{default:a(()=>[e(S,{label:"商户摊位"},{default:a(()=>[e(y,{value:t.boothId,"onUpdate:value":m[3]||(m[3]=l=>t.boothId=l)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(D,{gutter:24},{default:a(()=>[e(I,{span:12},{default:a(()=>[e(S,{label:"经营户姓名"},{default:a(()=>[e(y,{value:t.merchantOperatorName,"onUpdate:value":m[4]||(m[4]=l=>t.merchantOperatorName=l)},null,8,["value"])]),_:1})]),_:1}),e(I,{span:12},{default:a(()=>[e(S,{label:"采样人"},{default:a(()=>[e(y,{value:t.userName,"onUpdate:value":m[5]||(m[5]=l=>t.userName=l)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(D,{gutter:24},{default:a(()=>[e(I,{span:12},{default:a(()=>[e(S,{label:"采样时间 "},{default:a(()=>[e(y,{value:t.samplingTime,"onUpdate:value":m[6]||(m[6]=l=>t.samplingTime=l)},null,8,["value"])]),_:1})]),_:1}),e(I,{span:12},{default:a(()=>[e(S,{label:"采样地点"},{default:a(()=>[e(y,{value:t.samplingSite,"onUpdate:value":m[7]||(m[7]=l=>t.samplingSite=l)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(D,{gutter:24},{default:a(()=>[e(I,{span:12},{default:a(()=>[e(S,{label:"采样图片"},{default:a(()=>{var l;return[(l=t.samplingPic)!=null&&l.length?(v(),O(c,{key:0,disabled:!0,name:"file","list-type":"picture-card","file-list":i.value,"onUpdate:fileList":m[8]||(m[8]=s=>i.value=s)},null,8,["file-list"])):(v(),M("span",Oe,"暂无图片"))]}),_:1})]),_:1}),e(I,{span:12},{default:a(()=>[e(S,{label:"签名"},{default:a(()=>[t.signature?(v(),O(c,{key:0,disabled:!0,name:"file","list-type":"picture-card","file-list":N.value,"onUpdate:fileList":m[9]||(m[9]=l=>N.value=l)},null,8,["file-list"])):(v(),M("span",$e,"暂无图片"))]),_:1})]),_:1})]),_:1}),e(D,{gutter:24},{default:a(()=>[e(I,{span:12},{default:a(()=>[e(S,{label:"签名"},{default:a(()=>{var l;return[(l=t.purchaseInvoicePic)!=null&&l.length?(v(),O(c,{key:0,disabled:!0,name:"file","list-type":"picture-card","file-list":R.value,"onUpdate:fileList":m[10]||(m[10]=s=>R.value=s)},null,8,["file-list"])):(v(),M("span",he,"暂无图片"))]}),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["open"])}}}),Ae={class:"product_sampli_page"},Be={class:"table_form_view"},Je={class:"table_action_view"},Ye={class:"table_search_handler"},Le={class:"table_action_button"},qe={class:"table_title"},ze={class:"table_title_icon"},Fe=le({__name:"index",setup(Y){const f=K({size:10,current:1,marketId:null,sampleTypeId:null,sampleTypeName:null,sampleName:null,userName:null,merchantId:null,startTime:null,endTime:null,userId:null,sampleNameId:null}),h=Q([]),x=Q(0),t=b(null),i=b(null),R=b(null),N=b(null);Z(async()=>{C()});const C=async()=>{const s=await xe(f);h.value=s.records,x.value||(x.value=s.total||0)},$=async()=>{C()},H=()=>{f.merchantId=null,f.sampleTypeName=null,f.sampleName=null,f.marketId=null,f.userName=null,f.startTime=null,f.endTime=null,C()},P=async s=>{var n;await re(s),(n=i.value)==null||n.end(),C(),X.success("新增成功")},m=async s=>{var n;await re(s),(n=R.value)==null||n.end(),C(),X.success("修改成功")},y=async s=>{G.confirm({title:"确定删除？",content:"此操作不可撤销，请确认是否删除!!!",okText:"确认",cancelText:"取消",onOk:async()=>{const n=await Ne({ids:s});(n==null?void 0:n.code)===200?(C(),X.success("删除成功")):G.info({title:"操作提示",content:"无法删除，仅可修改。",onOk(){}})},onCancel(){X.error("操作已取消")}})},S=()=>{var s;(s=N.value)==null||s.end()},I=[{title:"序号",customRender:({text:s,record:n,index:g})=>`${g+1}`,align:"center"},{title:"样品类型",dataIndex:"sampleTypeName",align:"center"},{title:"样品名称",dataIndex:"sampleName",align:"center"},{title:"市场名",dataIndex:"marketName",align:"center"},{title:"商户摊位",dataIndex:"boothId",align:"center"},{title:"经营户姓名",dataIndex:"merchantOperatorName",align:"center"},{title:"采样人",dataIndex:"userName",align:"center"},{title:"采样时间",dataIndex:"samplingTime",align:"center"},{title:"详情",dataIndex:"xiangqing",align:"center"},{title:"检测任务",dataIndex:"jiance",align:"center"},{title:"操作",dataIndex:"action",align:"center",width:200}],D=()=>{const s=["操作","序号","详情","检测任务"],n=[{title:"采样地点",dataIndex:"samplingSite"},{title:"采样图片",dataIndex:"samplingPic"},{title:"签名",dataIndex:"signature"},{title:"进货单图片",dataIndex:"purchaseInvoicePic"}];return[...I.filter(g=>!s.includes(g.title)),...n]},c=b([]),_=b([]),o=ve(()=>({selectedRowKeys:c.value,onChange:(s,n)=>{c.value=s,_.value=n}})),d=()=>{G.confirm({title:"确定导出选中数据吗？",content:"导出后无法修改，请确认是否导出？",okText:"确定",cancelText:"取消",onOk:()=>{ye(_.value.map((s,n)=>({...s,sn:n})),D(),"selectedData.xlsx")}})},l=s=>{f.current=s.current,f.size=s.pageSize,C()};return(s,n)=>{const g=p("a-input"),k=p("a-form-item"),J=p("a-date-picker"),E=p("a-form"),A=p("a-button"),u=p("a-divider"),W=p("a-textarea"),j=p("a-menu-item"),te=p("a-menu"),ne=p("a-dropdown"),r=p("a-table");return v(),M("div",Ae,[T("div",Be,[e(E,{class:"search_form",layout:"inline",autocomplete:"off",model:t.value},{default:a(()=>[e(k,{label:"商户ID"},{default:a(()=>[e(g,{placeholder:"请输入商户ID",value:f.merchantId,"onUpdate:value":n[0]||(n[0]=U=>f.merchantId=U)},null,8,["value"])]),_:1}),e(k,{label:"样品类型"},{default:a(()=>[e(g,{placeholder:"请输入样品类型",value:f.sampleTypeName,"onUpdate:value":n[1]||(n[1]=U=>f.sampleTypeName=U)},null,8,["value"])]),_:1}),e(k,{label:"样品名称"},{default:a(()=>[e(g,{placeholder:"请输入样品类型",value:f.sampleName,"onUpdate:value":n[2]||(n[2]=U=>f.sampleName=U)},null,8,["value"])]),_:1}),e(k,{label:"市场ID"},{default:a(()=>[e(g,{placeholder:"请输入市场ID",value:f.marketId,"onUpdate:value":n[3]||(n[3]=U=>f.marketId=U)},null,8,["value"])]),_:1}),e(k,{label:"采样人"},{default:a(()=>[e(g,{placeholder:"请输入采样人",value:f.userName,"onUpdate:value":n[4]||(n[4]=U=>f.userName=U)},null,8,["value"])]),_:1}),e(k,{label:"时间"},{default:a(()=>[e(J,{placeholder:"请选择时间",value:f.startTime,"onUpdate:value":n[5]||(n[5]=U=>f.startTime=U),valueFormat:"YYYY-MM-DD"},null,8,["value"]),n[10]||(n[10]=T("span",null,"-",-1)),e(J,{placeholder:"请选择时间",value:f.endTime,"onUpdate:value":n[6]||(n[6]=U=>f.endTime=U),valueFormat:"YYYY-MM-DD"},null,8,["value"])]),_:1})]),_:1},8,["model"]),T("div",Je,[T("div",Ye,[e(A,{class:"table_search_button",type:"primary",onClick:n[7]||(n[7]=U=>$())},{default:a(()=>n[11]||(n[11]=[w("查询")])),_:1}),e(A,{class:"table_search_clean_button",type:"primary",onClick:H},{default:a(()=>n[12]||(n[12]=[w("清除")])),_:1}),e(A,{class:"table_search_button",type:"primary",onClick:d},{default:a(()=>n[13]||(n[13]=[w("导出信息")])),_:1})]),T("div",Le,[e(A,{class:"table_action_add",type:"primary",onClick:n[8]||(n[8]=U=>{var L;return(L=i.value)==null?void 0:L.begin()})},{default:a(()=>n[14]||(n[14]=[w(" 检测任务增加")])),_:1})])])]),T("div",qe,[T("div",ze,[e(q(ce))]),n[15]||(n[15]=T("div",{class:"table_title_text"},"菜单名称",-1))]),e(r,{columns:I,"data-source":h.value,pagination:q(be)(x.value),"row-selection":o.value,rowKey:U=>U.id,onChange:l},{bodyCell:a(({column:U,record:L})=>[U.dataIndex==="action"?(v(),M(B,{key:0},[e(A,{class:"no-border-button",type:"primary",ghost:"",danger:"",onClick:ue=>y(L.id)},{default:a(()=>n[16]||(n[16]=[w("删除")])),_:2},1032,["onClick"]),e(u,{type:"vertical"}),e(A,{class:"no-border-button",type:"primary",ghost:"",onClick:ue=>{var V;return(V=R.value)==null?void 0:V.begin(L)}},{default:a(()=>n[17]||(n[17]=[w("修改")])),_:2},1032,["onClick"])],64)):oe("",!0),U.dataIndex==="xiangqing"?(v(),O(A,{key:1,class:"no-border-button",type:"primary",ghost:"",onClick:ue=>{var V;return(V=N.value)==null?void 0:V.begin(L)}},{default:a(()=>n[18]||(n[18]=[w("详情")])),_:2},1032,["onClick"])):oe("",!0),U.dataIndex==="jiance"?(v(),O(ne,{key:2,trigger:["click"]},{overlay:a(()=>[e(te,null,{default:a(()=>[e(j,null,{default:a(()=>[e(k,{label:"备注"},{default:a(()=>[e(W,{value:L.remark,rows:"4",readonly:""},null,8,["value"])]),_:2},1024)]),_:2},1024),e(j,null,{default:a(()=>[T("span",null,"其他项二:"+F(L.userName),1)]),_:2},1024),e(j,null,{default:a(()=>[T("span",null,"其他项三:"+F(L.userName),1)]),_:2},1024)]),_:2},1024)]),default:a(()=>[T("a",{class:"ant-dropdown-link",onClick:n[9]||(n[9]=ge(()=>{},["prevent"]))},[n[19]||(n[19]=w(" 检测任务 ")),e(q(_e))])]),_:2},1024)):oe("",!0)]),_:1},8,["data-source","pagination","row-selection","rowKey"]),e(Ce,{ref_key:"addRef",ref:i,onSave:P,tableData:h.value},null,8,["tableData"]),e(Me,{ref_key:"updateRef",ref:R,onSave:m,tableData:h.value},null,8,["tableData"]),e(He,{ref_key:"detail",ref:N,onSave:S},null,512)])}}}),Ge=ee(Fe,[["__scopeId","data-v-2c85db43"]]);export{Ge as default};
