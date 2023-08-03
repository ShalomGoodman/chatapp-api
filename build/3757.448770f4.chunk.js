"use strict";(self.webpackChunkchatapp=self.webpackChunkchatapp||[]).push([[3757],{23037:(C,f,e)=>{e.r(f),e.d(f,{InformationBoxEE:()=>W});var t=e(67294),l=e(70642),o=e(11047),w=e(75515),r=e(77197),i=e(57993),s=e(86896),d=e(88767),u=e(50236),n=e(71926),a=e(38705),c=e(86978),p=e(52258),E=e(5318);const g="strapi_stage";function W(){var L,A;const{initialData:h,isCreatingEntry:D,layout:{uid:M,options:y},isSingleType:m,onChange:P}=(0,i.Wq)(),{put:N}=(0,i.kY)(),v=(L=h==null?void 0:h[g])!=null?L:null,U=(A=y==null?void 0:y.reviewWorkflows)!=null?A:!1,{formatMessage:R}=(0,s.Z)(),{formatAPIError:Z}=(0,i.So)(),$=(0,i.lm)(),{getFeature:Y}=(0,n.q)(),[x,I]=t.useState(!1),{meta:j,workflows:[B],isLoading:H}=(0,p.n)({filters:{contentTypes:M}}),{error:G,isLoading:Q,mutateAsync:X}=(0,d.useMutation)(async({entityId:T,stageId:S,uid:k})=>{const F=m?"single-types":"collection-types",{data:{data:K}}=await N(`/admin/content-manager/${F}/${k}/${T}/stage`,{data:{id:S}});return P({target:{name:g,value:K[g]}},!0),K},{onSuccess(){$({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}})}}),O=Y("review-workflows"),V=G&&Z(G)||null,z=async({value:T})=>{try{O!=null&&O[c.Ef]&&parseInt(O[c.Ef],10)<j.workflowCount?I("workflow"):O!=null&&O[c._X]&&parseInt(O[c._X],10)<B.stages.length?I("stage"):await X({entityId:h.id,stageId:T,uid:M})}catch{}},{themeColorName:b}=v!=null&&v.color?(0,E.k)(v==null?void 0:v.color):{};return t.createElement(u.d.Root,null,t.createElement(u.d.Title,null),U&&!D&&t.createElement(l.q4,{error:V,name:g,id:g,value:v==null?void 0:v.id,onChange:T=>z({value:T}),label:R({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:t.createElement(o.k,{as:"span",height:2,background:v==null?void 0:v.color,borderColor:b==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>t.createElement(o.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},t.createElement(w.Z,{textColor:"neutral800",ellipsis:!0},v==null?void 0:v.name),H||Q?t.createElement(r.a,{small:!0,style:{display:"flex"}}):null)},B?B.stages.map(({id:T,color:S,name:k})=>{const{themeColorName:F}=(0,E.k)(S);return t.createElement(l.ag,{startIcon:t.createElement(o.k,{height:2,background:S,borderColor:F==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:T,textValue:k},k)}):[]),t.createElement(u.d.Body,null),t.createElement(a.fC,{isOpen:x==="workflow",onClose:()=>I(!1)},t.createElement(a.Dx,null,R({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),t.createElement(a.uT,null,R({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),t.createElement(a.fC,{isOpen:x==="stage",onClose:()=>I(!1)},t.createElement(a.Dx,null,R({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),t.createElement(a.uT,null,R({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}},71926:(C,f,e)=>{e.d(f,{q:()=>w});var t=e(67294),l=e(57993),o=e(88767);function w({enabled:r}={enabled:!0}){const{get:i}=(0,l.kY)(),{data:s,isError:d,isLoading:u}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:c}}=await i("/admin/license-limit-information");return c},{enabled:r}),n=s!=null?s:{},a=t.useCallback(c=>{var p,E;const g=((p=n==null?void 0:n.features)!=null?p:[]).find(W=>W.name===c);return(E=g==null?void 0:g.options)!=null?E:{}},[n==null?void 0:n.features]);return{license:n,getFeature:a,isError:d,isLoading:u}}},38705:(C,f,e)=>{e.d(f,{uT:()=>h,fC:()=>y,Dx:()=>A});var t=e(67294),l=e(75515),o=e(11047),w=e(42866),r=e(59946),i=e(41580),s=e(12028),d=e(80994),u=e(70968),n=e(45697),a=e.n(n),c=e(86896),p=e(88972);const E=e.p+"0cd5f8915b265d5b1856.png",g="limits-title",W="https://strapi.io/pricing-cloud",L="https://strapi.io/contact-sales";function A({children:m}){return t.createElement(l.Z,{variant:"alpha",id:g},m)}A.propTypes={children:a().node.isRequired};function h({children:m}){return t.createElement(l.Z,{variant:"omega"},m)}h.propTypes={children:a().node.isRequired};function D(){const{formatMessage:m}=(0,c.Z)();return t.createElement(o.k,{gap:2,paddingTop:4},t.createElement(d.Q,{variant:"default",isExternal:!0,href:W},m({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(d.Q,{variant:"tertiary",isExternal:!0,href:L},m({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const M=p.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:m})=>`-${m.spaces[7]}`};
  margin-top: ${({theme:m})=>`-${m.spaces[7]}`};
  width: 360px;
`;function y({children:m,isOpen:P,onClose:N}){const{formatMessage:v}=(0,c.Z)();return P?t.createElement(w.P,{labelledBy:g},t.createElement(r.f,null,t.createElement(o.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(o.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},m,t.createElement(D,null)),t.createElement(o.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(M,{src:E,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(i.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(s.h,{icon:t.createElement(u.Z,null),"aria-label":v({id:"global.close",defaultMessage:"Close"}),onClick:N})))))):null}y.defaultProps={isOpen:!1},y.propTypes={children:a().node.isRequired,isOpen:a().bool,onClose:a().func.isRequired}},86978:(C,f,e)=>{e.d(f,{$k:()=>d,Ef:()=>p,FT:()=>a,Nj:()=>s,Ot:()=>i,VS:()=>u,_X:()=>E,gu:()=>o,lv:()=>n,qZ:()=>w,sN:()=>l,uL:()=>c,x4:()=>r});var t=e(42675);const l="settings_review-workflows",o="Settings/Review_Workflows/RESET_WORKFLOW",w="Settings/Review_Workflows/SET_WORKFLOW",r="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",i="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",s="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",d="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",u="Settings/Review_Workflows/WORKFLOW_UPDATE",n={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},a=t.W.colors.primary600,c={STAGE:"stage"},p="numberOfWorkflows",E="stagesPerWorkflow"},52258:(C,f,e)=>{e.d(f,{n:()=>o});var t=e(57993),l=e(88767);function o(w={}){var r;const{get:i}=(0,t.kY)(),{id:s="",...d}=w,u={populate:"stages"},{data:n,isLoading:a,status:c,refetch:p}=(0,l.useQuery)(["review-workflows","workflows",s],async()=>(await i(`/admin/review-workflows/workflows/${s}`,{params:{...u,...d}})).data);let E=[];return s&&(n!=null&&n.data)?E=[n.data]:Array.isArray(n==null?void 0:n.data)&&(E=n.data),{meta:(r=n==null?void 0:n.meta)!=null?r:{},workflows:E,isLoading:a,status:c,refetch:p}}},5318:(C,f,e)=>{e.d(f,{k:()=>o,s:()=>w});var t=e(42675),l=e(86978);function o(r){if(!r)return null;const s=Object.entries(t.W.colors).filter(([,d])=>d.toUpperCase()===r.toUpperCase()).reduce((d,[u])=>{var n;return(n=l.lv)!=null&&n[u]&&(d=u),d},null);return s?{themeColorName:s,name:l.lv[s]}:null}function w(){return Object.entries(l.lv).map(([r,i])=>({hex:t.W.colors[r].toUpperCase(),name:i}))}}}]);
