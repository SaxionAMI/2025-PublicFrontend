import{i as le,v as A,f as G,o as T,aL as te,l as O,r as m,c as s,aO as re,aC as ue,aP as ne,s as ae,N as ie,y as se,z as de,B as fe,h as a,ao as B,Q as N,aq as ce,A as $,a6 as ve,a0 as pe}from"./index.a574533b.js";import{d as me,u as ge,a as be,e as he}from"./QCard.8b0c055e.js";import{u as W}from"./uid.42677368.js";function Ce({validate:e,resetValidation:o,requiresQForm:t}){const r=le(te,!1);if(r!==!1){const{props:f,proxy:i}=O();Object.assign(i,{validate:e,resetValidation:o}),A(()=>f.disable,u=>{u===!0?(typeof o=="function"&&o(),r.unbindComponent(i)):r.bindComponent(i)}),G(()=>{f.disable!==!0&&r.bindComponent(i)}),T(()=>{f.disable!==!0&&r.unbindComponent(i)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const Q=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,K=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Z=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,k=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,E=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,M={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Q.test(e),hexaColor:e=>K.test(e),hexOrHexaColor:e=>Z.test(e),rgbColor:e=>k.test(e),rgbaColor:e=>E.test(e),rgbOrRgbaColor:e=>k.test(e)||E.test(e),hexOrRgbColor:e=>Q.test(e)||k.test(e),hexaOrRgbaColor:e=>K.test(e)||E.test(e),anyColor:e=>Z.test(e)||k.test(e)||E.test(e)},qe=[!0,!1,"ondemand"],ye={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>qe.includes(e)}};function _e(e,o){const{props:t,proxy:r}=O(),f=m(!1),i=m(null),u=m(null);Ce({validate:C,resetValidation:_});let c=0,h;const V=s(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length!==0),g=s(()=>t.disable!==!0&&V.value===!0),y=s(()=>t.error===!0||f.value===!0),P=s(()=>typeof t.errorMessage=="string"&&t.errorMessage.length!==0?t.errorMessage:i.value);A(()=>t.modelValue,()=>{w()}),A(()=>t.reactiveRules,b=>{b===!0?h===void 0&&(h=A(()=>t.rules,()=>{w(!0)})):h!==void 0&&(h(),h=void 0)},{immediate:!0}),A(e,b=>{b===!0?u.value===null&&(u.value=!1):u.value===!1&&(u.value=!0,g.value===!0&&t.lazyRules!=="ondemand"&&o.value===!1&&x())});function _(){c++,o.value=!1,u.value=null,f.value=!1,i.value=null,x.cancel()}function C(b=t.modelValue){if(g.value!==!0)return!0;const S=++c,I=o.value!==!0?()=>{u.value=!0}:()=>{},q=(d,v)=>{d===!0&&I(),f.value=d,i.value=v||null,o.value=!1},R=[];for(let d=0;d<t.rules.length;d++){const v=t.rules[d];let p;if(typeof v=="function"?p=v(b,M):typeof v=="string"&&M[v]!==void 0&&(p=M[v](b)),p===!1||typeof p=="string")return q(!0,p),!1;p!==!0&&p!==void 0&&R.push(p)}return R.length===0?(q(!1),!0):(o.value=!0,Promise.all(R).then(d=>{if(d===void 0||Array.isArray(d)===!1||d.length===0)return S===c&&q(!1),!0;const v=d.find(p=>p===!1||typeof p=="string");return S===c&&q(v!==void 0,v),v===void 0},d=>(S===c&&(console.error(d),q(!0)),!1)))}function w(b){g.value===!0&&t.lazyRules!=="ondemand"&&(u.value===!0||t.lazyRules!==!0&&b!==!0)&&x()}const x=re(C,0);return T(()=>{h!==void 0&&h(),x.cancel()}),Object.assign(r,{resetValidation:_,validate:C}),ue(r,"hasError",()=>y.value),{isDirtyModel:u,hasRules:V,hasError:y,errorMessage:P,validate:C,resetValidation:_}}const J=/^on[A-Z]/;function xe(e,o){const t={listeners:m({}),attributes:m({})};function r(){const f={},i={};for(const u in e)u!=="class"&&u!=="style"&&J.test(u)===!1&&(f[u]=e[u]);for(const u in o.props)J.test(u)===!0&&(i[u]=o.props[u]);t.attributes.value=f,t.listeners.value=i}return ne(r),r(),t}function X(e,o){return e===void 0?o===!0?`f_${W()}`:void 0:e}function Se(e){return e!=null&&(""+e).length!==0}const ke={...ge,...ye,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ee=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Oe({requiredForAttr:e=!0,tagProp:o}={}){const{props:t,attrs:r,proxy:f,vnode:i}=O(),u=be(t,f.$q);return{requiredForAttr:e,tag:o===!0?s(()=>t.tag):{value:"label"},isDark:u,editable:s(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:m(!1),focused:m(!1),hasPopupOpen:!1,splitAttrs:xe(r,i),targetUid:m(X(t.for,e)),rootRef:m(null),targetRef:m(null),controlRef:m(null)}}function Pe(e){const{props:o,emit:t,slots:r,attrs:f,proxy:i}=O(),{$q:u}=i;let c=null;e.hasValue===void 0&&(e.hasValue=s(()=>Se(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{t("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:z,onFocusout:U}),Object.assign(e,{clearValue:D,onControlFocusin:z,onControlFocusout:U,focus:v}),e.computedCounter===void 0&&(e.computedCounter=s(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,n=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(n!==void 0?" / "+n:"")}}));const{isDirtyModel:h,hasRules:V,hasError:g,errorMessage:y,resetValidation:P}=_e(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?s(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):s(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),C=s(()=>o.bottomSlots===!0||o.hint!==void 0||V.value===!0||o.counter===!0||o.error!==null),w=s(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),x=s(()=>`q-field row no-wrap items-start q-field--${w.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(S.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(g.value===!0?" q-field--error":"")+(g.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&C.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),b=s(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(g.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),S=s(()=>o.labelSlot===!0||o.label!==void 0),I=s(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&g.value!==!0?` text-${o.labelColor}`:"")),q=s(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:o.modelValue,emitValue:e.emitValue})),R=s(()=>{const l={for:e.targetUid.value};return o.disable===!0?l["aria-disabled"]="true":o.readonly===!0&&(l["aria-readonly"]="true"),l});A(()=>o.for,l=>{e.targetUid.value=X(l,e.requiredForAttr)});function d(){const l=document.activeElement;let n=e.targetRef!==void 0&&e.targetRef.value;n&&(l===null||l.id!==e.targetUid.value)&&(n.hasAttribute("tabindex")===!0||(n=n.querySelector("[tabindex]")),n&&n!==l&&n.focus({preventScroll:!0}))}function v(){me(d)}function p(){he(d);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function z(l){c!==null&&(clearTimeout(c),c=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",l))}function U(l,n){c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",l)),n!==void 0&&n())})}function D(l){ae(l),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),t("clear",o.modelValue),ie(()=>{P(),u.platform.is.mobile!==!0&&(h.value=!1)})}function Y(){const l=[];return r.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:B},r.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ee())),g.value===!0&&o.noErrorIcon===!1&&l.push(F("error",[a(N,{name:u.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(F("inner-loading-append",r.loading!==void 0?r.loading():[a(ce,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(F("inner-clearable-append",[a(N,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||u.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:D})])),r.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:B},r.append())),e.getInnerAppend!==void 0&&l.push(F("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function ee(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):r.rawControl!==void 0?l.push(r.rawControl()):r.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(q.value))),S.value===!0&&l.push(a("div",{class:I.value},$(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat($(r.default))}function oe(){let l,n;g.value===!0?y.value!==null?(l=[a("div",{role:"alert"},y.value)],n=`q--slot-error-${y.value}`):(l=$(r.error),n="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],n=`q--slot-hint-${o.hint}`):(l=$(r.hint),n="q--slot-hint"));const H=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&H===!1&&l===void 0)return;const j=a("div",{key:n,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:B},[o.hideBottomSpace===!0?j:a(ve,{name:"q-transition--field-message"},()=>j),H===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function F(l,n){return n===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},n)}let L=!1;return se(()=>{L=!0}),de(()=>{L===!0&&o.autofocus===!0&&i.focus()}),G(()=>{fe.value===!0&&e.requiredForAttr===!0&&o.for===void 0&&(e.targetUid.value=`f_${W()}`),o.autofocus===!0&&i.focus()}),T(()=>{c!==null&&clearTimeout(c)}),Object.assign(i,{focus:v,blur:p}),function(){const n=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...R.value}:R.value;return a(e.tag.value,{ref:e.rootRef,class:[x.value,f.class],style:f.style,...n},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:B},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:b.value,tabindex:-1,...e.controlEvents},Y()),C.value===!0?oe():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:B},r.after()):null])}}const Re=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ae=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Be=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ve=/[a-z0-9_ -]$/i;function Ie(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(pe.is.firefox===!0?Ve.test(t.data)===!1:Re.test(t.data)===!0||Ae.test(t.data)===!0||Be.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}const Me="1.2.21";export{Ee as a,Oe as b,Pe as c,Ie as d,Se as f,ke as u,Me as v};
