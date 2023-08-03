"use strict";(self.webpackChunkchatapp=self.webpackChunkchatapp||[]).push([[4121],{10395:(I,E,t)=>{t.r(E),t.d(E,{default:()=>he});var e=t(67294),s=t(57993),c=t(86706),h=t(36364),f=t(14087),T=t(17034),D=t(185),S=t(53979),P=t(36989),l=t(75515),M=t(29728),j=t(49066),U=t(41580),ee=t(38939),te=t(49386),ae=t(8060),K=t(79031),i=t(37909),V=t(92155),ne=t(63237),se=t(15234),k=t(11047),v=t(85893),F=t(88972);const $=F.ZP.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,oe=F.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${$} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${$}:before {
    transform: translateX(1rem);
  }
`,le=e.forwardRef(({label:o,onChange:Z,onLabel:m="On",offLabel:u="Off",selected:d,visibleLabels:y=!1,...n},b)=>(0,v.jsx)(oe,{ref:b,role:"switch","aria-checked":d,"aria-label":o,onClick:Z,visibleLabels:y,type:"button",...n,children:(0,v.jsxs)(k.k,{children:[(0,v.jsxs)($,{children:[(0,v.jsx)("span",{children:m}),(0,v.jsx)("span",{children:u})]}),y&&(0,v.jsx)(U.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:d?"success600":"danger600",children:d?m:u})]})}));var z=t(12028),re=t(89722),w=t(96315),H=t(20022),ie=t(4585),de=t(86031),ce=t(86896),O=t(88767),N=t(16550);const me=()=>{var o;const[Z,m]=(0,e.useState)(!1),[u,d]=(0,e.useState)([]),y=(0,c.v9)(h._),{formatMessage:n}=(0,ce.Z)(),{formatAPIError:b}=(0,s.So)(),C=(0,s.lm)();(0,s.go)();const{push:ue}=(0,N.k6)(),{pathname:Q}=(0,N.TH)(),{isLoading:ge,allowedActions:{canCreate:A,canUpdate:Y,canDelete:G}}=(0,s.ss)(y.settings.webhooks),{get:Ee,post:fe,put:ve}=(0,s.kY)(),{notifyStatus:X}=(0,f.G)(),be="webhooks",{isLoading:xe,data:g,error:B,refetch:J}=(0,O.useQuery)(be,async()=>{const{data:{data:a}}=await Ee("/admin/webhooks");return a});(0,e.useEffect)(()=>{if(B){C({type:"warning",message:b(B)});return}g&&X(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[g,B,C,n,X,b]);const q=(0,O.useMutation)(async()=>{await fe("/admin/webhooks/batch-delete",{ids:u})},{onError(a){C({type:"warning",message:b(a)}),m(!1)},onSuccess(){d([]),m(!1),J()}}),pe=(0,O.useMutation)(async({isEnabled:a,id:r})=>{var x;const{id:_,...Le}=(x=g.find(De=>De.id===r))!=null?x:{},Te={...Le,isEnabled:a};await ve(`/admin/webhooks/${r}`,Te)},{onError(a){C({type:"warning",message:b(a)})},onSuccess(){J()}}),Me=()=>q.mutate(),ye=a=>d(a?g.map(r=>r.id):[]),Ce=(a,r)=>d(a?x=>[...x,r]:x=>x.filter(_=>_!==r)),W=a=>ue(`${Q}/${a}`),R=ge||xe,L=(o=g==null?void 0:g.length)!=null?o:0,p=u.length;return e.createElement(T.A,null,e.createElement(s.SL,{name:"Webhooks"}),e.createElement(D.o,{"aria-busy":R},e.createElement(S.T,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:A&&!R&&e.createElement(s.Qj,{startIcon:e.createElement(w.Z,null),variant:"default",to:`${Q}/create`,size:"S"},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),p>0&&G&&e.createElement(P.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:p})),e.createElement(M.z,{onClick:()=>m(!0),startIcon:e.createElement(H.Z,null),size:"L",variant:"danger-light"},n({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(j.D,null,R?e.createElement(U.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.dO,null)):L>0?e.createElement(ee.i,{colCount:5,rowCount:L+1,footer:e.createElement(te.c,{onClick:()=>A?W("create"):{},icon:e.createElement(w.Z,null)},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(ae.h,null,e.createElement(K.Tr,null,e.createElement(i.Th,null,e.createElement(V.C,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:p>0&&p<L,value:p===L,onValueChange:ye})),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(i.Th,{width:"60%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(i.Th,null,e.createElement(ne.T,null,n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(se.p,null,g.map(a=>e.createElement(K.Tr,{key:a.id,...(0,s.X7)({fn:()=>W(a.id),condition:Y})},e.createElement(i.Td,{...s.UW},e.createElement(V.C,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${a.name}`,value:u==null?void 0:u.includes(a.id),onValueChange:r=>Ce(r,a.id),name:"select"})),e.createElement(i.Td,null,e.createElement(l.Z,{fontWeight:"semiBold",textColor:"neutral800"},a.name)),e.createElement(i.Td,null,e.createElement(l.Z,{textColor:"neutral800"},a.url)),e.createElement(i.Td,null,e.createElement(k.k,null,e.createElement(le,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${a.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:a.isEnabled,onChange:r=>{r.stopPropagation(),pe.mutate({isEnabled:!a.isEnabled,id:a.id})},visibleLabels:!0}))),e.createElement(i.Td,null,e.createElement(k.k,{gap:1},Y&&e.createElement(z.h,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(ie.Z,null),noBorder:!0}),G&&e.createElement(z.h,{onClick:r=>{r.stopPropagation(),d([a.id]),m(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(H.Z,null),noBorder:!0}))))))):e.createElement(re.x,{icon:e.createElement(de.Z,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(M.z,{variant:"secondary",startIcon:e.createElement(w.Z,null),onClick:()=>A?W("create"):{}},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.QH,{isOpen:Z,onToggleDialog:()=>m(a=>!a),onConfirm:Me,isConfirmButtonLoading:q.isLoading}))},he=()=>{const o=(0,c.v9)(h._);return e.createElement(s.O4,{permissions:o.settings.webhooks.main},e.createElement(me,null))}},36989:(I,E,t)=>{t.d(E,{Z:()=>c});var e=t(85893),s=t(11047);const c=({startActions:h,endActions:f})=>!h&&!f?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:h}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:f})]})},49386:(I,E,t)=>{t.d(E,{c:()=>P});var e=t(85893),s=t(88972),c=t(41580),h=t(70004),f=t(11047),T=t(75515);const D=(0,s.ZP)(c.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,S=(0,s.ZP)(c.x)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,P=({children:l,icon:M,...j})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(h.i,{}),(0,e.jsx)(S,{as:"button",background:"primary100",padding:5,...j,children:(0,e.jsxs)(f.k,{children:[(0,e.jsx)(D,{"aria-hidden":!0,background:"primary200",children:M}),(0,e.jsx)(c.x,{paddingLeft:3,children:(0,e.jsx)(T.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
