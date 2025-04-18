import{b as O}from"./QCard.8b0c055e.js";import{Q as F}from"./QPullToRefresh.95bbf1ea.js";import{_ as I,D as k,r as n,u as H,a as q,c as D,F as i,G as Y,H as Q,I as G,J as r,af as v}from"./index.a574533b.js";import{u as $}from"./dataStore.de99154b.js";import{G as W,a as J,S as j}from"./GraphDialog.46b7fff5.js";import{D as z,U as K,G as X,a as Z}from"./GraphTypeTabs.20511af4.js";import{u as x}from"./use-quasar.c4351920.js";import"./format.60068c62.js";import"./use-timeout.764645c6.js";import"./QCardSection.9a4879b6.js";import"./QDialog.b8470fd0.js";import"./use-form.fa450abe.js";const ee=k({name:"GraphPage",components:{GraphItem:W,DateTabs:z,UnitTypeTabs:K,GraphTypeTabs:X,DateControls:Z,GraphDialog:J,StatisticsCards:j},setup(){x();const e=n(!1),o=n(null),C=H(),d=q(),p=$(),h=n(new Date(new Date().setHours(23,59,59,999))),m=n(!1),f=n(!1),E=()=>{f.value=!0},a=D({get(){return d.pref_sort},set(t){h.value=new Date(new Date().setHours(23,59,59,999)),d.pref_sort=t,g()}}),l=D({get(){return d.pref_unit},set(t){d.pref_unit=t,g()}}),u=n(null),w=()=>{u.value&&clearTimeout(u.value),u.value=setTimeout(()=>{g(),u.value=null},333)},s=()=>({"tagRestrictions.ctypec":["consumption","generation"],dropColumns:["GNAME","ESTYPE","EONNAME"],createEmpty:!0,field:l.value==="kwh"?"ENE":"CO2",windowUnit:a.value,"tagRestrictions.etype":l.value!=="co2"?["powermeter","solarpannel","solarpanel"]:[]}),A=()=>({"tagRestrictions.ctypec":["consumption","generation"],dropColumns:["GNAME","ESTYPE","EONNAME"],createEmpty:!0,field:l.value==="kwh"?"forecast.ENE":"forecast.CO2",windowUnit:a.value}),U=()=>({"tagRestrictions.ctypec":["consumption","generation"],dropColumns:["GNAME","ESTYPE","EONNAME"],createEmpty:!0,field:l.value==="kwh"?"ENE":"CO2",windowUnit:a.value==="H"?"m":a.value==="D"?"H":a.value==="M"?"D":a.value,"tagRestrictions.etype":l.value!=="co2"?["powermeter","solarpannel","solarpanel"]:[]}),M=()=>({"tagRestrictions.ctypec":["consumption","generation"],dropColumns:["GNAME","ESTYPE","EONNAME"],createEmpty:!0,field:l.value==="kwh"?"forecast.ENE":"forecast.CO2",windowUnit:a.value==="H"?"m":a.value==="D"?"H":a.value==="M"?"D":a.value}),B=()=>({"tagRestrictions.ctypec":["supply"],dropColumns:["GNAME","ESTYPE","EONNAME"],createEmpty:!0,field:l.value==="kwh"?"ENE_IMP":"CO2_IMP",windowUnit:a.value}),P=t=>{o.value&&o.value.changeStatusChart(t)},y=n(null),N=n(null),b=n(null),S=n(null),V=n(null),R=D(()=>e.value?p.combineWithForecast(b.value,S.value):p.combineWithForecast(y.value,N.value)),c=async(t,_)=>{const L={endTime:h.value};let T=await p.getData(t,a.value,L);return _.value=T,T},g=()=>{let t=[];m.value=!0,t.push(c(U(),b)),t.push(c(s(),y)),t.push(c(M(),S)),t.push(c(A(),N)),t.push(c(B(),V)),Promise.all(t).finally(()=>{m.value=!1})};return g(),{dataStore:p,childRef:o,updateChart:P,tab:a,refresh:t=>{g(),t()},unit:l,loading:m,toggle:e,endTime:h,dataBar:y,dataStatisticsImport:V,dataLine:b,authStore:C,showDialog:E,graphData:R,updateData:w,showGraphDialog:f}}}),te={id:"controls"},ae={class:"row q-ma-sm"},oe={class:"col-6"},se={class:"col-6"};function ne(e,o,C,d,p,h){const m=i("statistics-cards"),f=i("date-tabs"),E=i("date-controls"),a=i("graph-item"),l=i("unit-type-tabs"),u=i("graph-type-tabs"),w=i("graph-dialog");return Y(),Q(F,{onRefresh:e.refresh,color:"accent"},{default:G(()=>[r(O,{class:"q-px-md",style:{display:"flex","flex-flow":"column",height:"100% !important"}},{default:G(()=>[v("div",te,[r(m,{id:"statistics-cards",data:e.dataStore.combineArrays(e.dataBar,e.dataStatisticsImport),loading:e.loading,tab:e.tab,showAverage:!1,showString:!0,onUpdateChart:e.updateChart,class:"q-my-sm"},null,8,["data","loading","tab","onUpdateChart"]),r(f,{id:"date-tabs",class:"q-mt-md",modelValue:e.tab,"onUpdate:modelValue":o[0]||(o[0]=s=>e.tab=s)},null,8,["modelValue"]),r(E,{class:"q-my-sm",style:{width:"100%"},id:"date-controls",modelValue:e.endTime,"onUpdate:modelValue":[o[1]||(o[1]=s=>e.endTime=s),e.updateData],tab:e.tab},null,8,["modelValue","tab","onUpdate:modelValue"])]),r(a,{id:"graph",data:e.graphData,style:{"flex-grow":"1","min-height":"35vh"},class:"q-pb-sm",isLineChart:e.toggle,showFullscreen:!0,loading:e.loading,excludeDataset:["supply"],tab:e.tab,showLegend:!0,onShowDialog:e.showDialog,ref:"childRef"},null,8,["data","isLineChart","loading","tab","onShowDialog"]),v("div",ae,[v("div",oe,[r(l,{modelValue:e.unit,"onUpdate:modelValue":o[2]||(o[2]=s=>e.unit=s)},null,8,["modelValue"])]),v("div",se,[r(u,{class:"float-right",modelValue:e.toggle,"onUpdate:modelValue":o[3]||(o[3]=s=>e.toggle=s)},null,8,["modelValue"])])]),r(w,{id:"graph-dialog",modelValue:e.showGraphDialog,"onUpdate:modelValue":o[4]||(o[4]=s=>e.showGraphDialog=s),isLineChart:e.toggle,data:e.graphData,showLegend:!0,tab:e.tab},null,8,["modelValue","isLineChart","data","tab"])]),_:1})]),_:1},8,["onRefresh"])}var we=I(ee,[["render",ne]]);export{we as default};
