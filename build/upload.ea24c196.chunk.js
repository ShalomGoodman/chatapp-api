"use strict";(self.webpackChunkchatapp=self.webpackChunkchatapp||[]).push([[3650],{60648:(H,B,t)=>{t.r(B),t.d(B,{default:()=>St});var e=t(67294),i=t(185),a=t(57993),L=t(64593),E=t(86896),Z=t(16550),p=t(4396),F=t(18206),o=t(24359),b=t(41580),Q=t(75515),I=t(17034),r=t(36989),y=t(92155),g=t(12028),x=t(49066),O=t(67819),A=t(11047),V=t(63237),ee=t(70004),se=t(78114),te=t(50738),Qe=t(29729),Ve=t(4585),ye=t(80129),Ge=t(73727),oe=t(88972),Ne=t(70572),Ye=t(21050),Je=t(4114),ne=t(28742),Xe=t(52805),we=t(45697),h=t.n(we);const re=({pagination:l})=>e.createElement(b.x,{paddingTop:6},e.createElement(A.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(a.v4,null),e.createElement(a.tU,{pagination:l})));re.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},re.propTypes={pagination:h().shape({page:h().number,pageCount:h().number,pageSize:h().number,total:h().number})};var ke=t(45687),qe=t(24214),_e=t(19839),M=t(11727),et=t(54314),tt=t(40426),nt=t(41801),at=t(60269),lt=t(93593),G=t(29728),st=t(20022),ot=t(29731);const xe=({selected:l,onSuccess:d})=>{const{formatMessage:s}=(0,E.Z)(),[u,c]=(0,e.useState)(!1),{isLoading:f,remove:T}=(0,ot.K)(),D=async()=>{await T(l),d()};return e.createElement(e.Fragment,null,e.createElement(G.z,{variant:"danger-light",size:"S",startIcon:e.createElement(st.Z,null),onClick:()=>c(!0)},s({id:"global.delete",defaultMessage:"Delete"})),e.createElement(a.QH,{isConfirmButtonLoading:f,isOpen:u,onToggleDialog:()=>c(!1),onConfirm:D}))};xe.propTypes={selected:h().arrayOf(M.pw,M.nx).isRequired,onSuccess:h().func.isRequired};var rt=t(32605),Me=t(42866),Ce=t(59946),it=t(77197),dt=t(24969),ct=t(11276),ut=t(64777),mt=t(36856),gt=t(41054),vt=t(41609),ft=t.n(vt),Be=t(88767);const ht=()=>{const l=(0,a.lm)(),d=(0,Be.useQueryClient)(),s=(0,o.IF)("actions/bulk-move"),{post:u}=(0,a.kY)(),c=({destinationFolderId:D,filesAndFolders:C})=>{const v=C.reduce((j,P)=>{const{id:R,type:J}=P,N=J==="asset"?"fileIds":"folderIds";return j[N]||(j[N]=[]),j[N].push(R),j},{});return u(s,{...v,destinationFolderId:D})},f=(0,Be.useMutation)(c,{onSuccess(D){var C;const{data:{data:v}}=D;((C=v==null?void 0:v.files)==null?void 0:C.length)>0&&(d.refetchQueries([F.Z,"assets"],{active:!0}),d.refetchQueries([F.Z,"asset-count"],{active:!0})),d.refetchQueries([F.Z,"folders"],{active:!0}),l({type:"success",message:{id:(0,o.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...f,move:(D,C)=>f.mutateAsync({destinationFolderId:D,filesAndFolders:C})}};var Et=t(81138),pt=t(71381);const ie=({onClose:l,selected:d,currentFolder:s})=>{const{formatMessage:u}=(0,E.Z)(),{data:c,isLoading:f}=(0,Et.v)(),{move:T}=ht();if(!c)return null;const D=async(j,{setErrors:P})=>{try{await T(j.destination.value,d),l()}catch(R){const N=(0,a.OT)(R).errors.reduce((X,U)=>{var z,w;return X[((w=(z=U.values)==null?void 0:z.path)==null?void 0:w.length)||"destination"]=U.defaultMessage,X},{});ft()(N)||P(N)}},C=()=>{l()};if(f)return e.createElement(Me.P,{onClose:C,labelledBy:"title"},e.createElement(Ce.f,null,e.createElement(A.k,{justifyContent:"center",paddingTop:4,paddingBottom:4},e.createElement(it.a,null,u({id:(0,o.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const v={destination:{value:(s==null?void 0:s.id)||"",label:(s==null?void 0:s.name)||c[0].label}};return e.createElement(Me.P,{onClose:C,labelledBy:"title"},e.createElement(gt.J9,{validateOnChange:!1,onSubmit:D,initialValues:v},({values:j,errors:P,setFieldValue:R})=>e.createElement(a.l0,{noValidate:!0},e.createElement(dt.x,null,e.createElement(Q.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},u({id:(0,o.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),e.createElement(Ce.f,null,e.createElement(ct.r,{gap:4},e.createElement(O.P,{xs:12,col:12},e.createElement(A.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(ut.Q,{htmlFor:"folder-destination"},u({id:(0,o.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),e.createElement(pt.Z,{options:c,onChange:J=>{R("destination",J)},defaultValue:j.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:P==null?void 0:P.destination,ariaErrorMessage:"destination-error"}),P.destination&&e.createElement(Q.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},P.destination))))),e.createElement(mt.m,{startActions:e.createElement(G.z,{onClick:C,variant:"tertiary",name:"cancel"},u({id:"cancel",defaultMessage:"Cancel"})),endActions:e.createElement(G.z,{type:"submit",loading:f},u({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};ie.defaultProps={currentFolder:void 0},ie.propTypes={onClose:h().func.isRequired,currentFolder:M.nx,selected:h().arrayOf(M.nx,M.pw).isRequired};const de=({selected:l,onSuccess:d,currentFolder:s})=>{const{formatMessage:u}=(0,E.Z)(),[c,f]=(0,e.useState)(!1),T=()=>{f(!1),d()};return e.createElement(e.Fragment,null,e.createElement(G.z,{variant:"secondary",size:"S",startIcon:e.createElement(rt.Z,null),onClick:()=>f(!0)},u({id:"global.move",defaultMessage:"Move"})),c&&e.createElement(ie,{currentFolder:s,onClose:T,selected:l}))};de.defaultProps={currentFolder:void 0},de.propTypes={onSuccess:h().func.isRequired,currentFolder:M.nx,selected:h().arrayOf(M.pw,M.nx).isRequired};const ce=({selected:l,onSuccess:d,currentFolder:s})=>{const{formatMessage:u}=(0,E.Z)();return e.createElement(A.k,{gap:2,paddingBottom:5},e.createElement(Q.Z,{variant:"epsilon",textColor:"neutral600"},u({id:(0,lt.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:l.filter(({type:c})=>c==="folder").length,numberAssets:l.filter(({type:c})=>c==="asset").length})),e.createElement(xe,{selected:l,onSuccess:d}),e.createElement(de,{currentFolder:s,selected:l,onSuccess:d}))};ce.defaultProps={currentFolder:void 0},ce.propTypes={onSuccess:h().func.isRequired,currentFolder:M.nx,selected:h().arrayOf(M.pw,M.nx).isRequired};var yt=t(65169),ue=t(96315),xt=t(54053);const Mt=({isFiltering:l,canCreate:d,canRead:s})=>l?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:s?d?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},Le=({canCreate:l,isFiltering:d,canRead:s,onActionClick:u})=>{const{formatMessage:c}=(0,E.Z)(),f=Mt({isFiltering:d,canCreate:l,canRead:s});return e.createElement(xt.i,{icon:s?null:yt.Z,action:l&&!d&&e.createElement(G.z,{variant:"secondary",startIcon:e.createElement(ue.Z,null),onClick:u},c({id:(0,o.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:c({...f,id:(0,o.OB)(f.id)})})};Le.propTypes={canCreate:h().bool.isRequired,canRead:h().bool.isRequired,isFiltering:h().bool.isRequired,onActionClick:h().func.isRequired};var Ct=t(89597),Bt=t(99398),Lt=t(32269),Oe=t(62082);const Ot=()=>{var l;const d=(0,e.useRef)(null),[s,u]=(0,e.useState)(!1),{formatMessage:c}=(0,E.Z)(),{trackUsage:f}=(0,a.rS)(),[{query:T},D]=(0,a.Kx)(),C=((l=T==null?void 0:T.filters)==null?void 0:l.$and)||[],v=()=>u(R=>!R),j=R=>{D({filters:{$and:R},page:1})},P=R=>{f("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(R[R.length-1])[0]}),D({filters:{$and:R},page:1})};return e.createElement(e.Fragment,null,e.createElement(G.z,{variant:"tertiary",ref:d,startIcon:e.createElement(Ct.Z,null),onClick:v,size:"S"},c({id:"app.utils.filters",defaultMessage:"Filters"})),s&&e.createElement(Lt.Z,{displayedFilters:Oe.Z,filters:C,onSubmit:P,onToggle:v,source:d}),e.createElement(Bt.Z,{appliedFilters:C,filtersSchema:Oe.Z,onRemoveFilter:j}))};var At=t(53979),Dt=t(23620),Pt=t(67109),Tt=t(22976);const me=({breadcrumbs:l,canCreate:d,folder:s,onToggleEditFolderDialog:u,onToggleUploadAssetDialog:c})=>{var f,T,D,C;const{formatMessage:v}=(0,E.Z)(),{pathname:j}=(0,Z.TH)(),[{query:P}]=(0,a.Kx)(),R={...P,folder:(T=(f=s==null?void 0:s.parent)==null?void 0:f.id)!=null?T:void 0,folderPath:(C=(D=s==null?void 0:s.parent)==null?void 0:D.path)!=null?C:void 0};return e.createElement(At.T,{title:v({id:(0,o.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:l&&s&&e.createElement(Tt.O,{as:"nav",label:v({id:(0,o.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:l,currentFolderId:s==null?void 0:s.id}),navigationAction:s&&e.createElement(Dt.r,{startIcon:e.createElement(Pt.Z,null),to:`${j}?${(0,ye.stringify)(R,{encode:!1})}`},v({id:(0,o.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:d&&e.createElement(A.k,{gap:2},e.createElement(G.z,{startIcon:e.createElement(ue.Z,null),variant:"secondary",onClick:u},v({id:(0,o.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),e.createElement(G.z,{startIcon:e.createElement(ue.Z,null),onClick:c},v({id:(0,o.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};me.defaultProps={breadcrumbs:!1,folder:null},me.propTypes={breadcrumbs:h().oneOfType([M.Fv,h().bool]),canCreate:h().bool.isRequired,folder:M.nx,onToggleEditFolderDialog:h().func.isRequired,onToggleUploadAssetDialog:h().func.isRequired};const Rt=(0,oe.ZP)(b.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,Ae=(0,oe.ZP)(Q.Z)`
  max-width: 100%;
`,De=(0,oe.ZP)(b.x)`
  svg {
    path {
      fill: ${({theme:l})=>l.colors.neutral500};
    }
  }
`,Ft=()=>{var l,d,s,u,c,f,T,D;const{push:C}=(0,Z.k6)(),{canRead:v,canCreate:j,canUpdate:P,canCopyLink:R,canDownload:J,isLoading:N}=(0,at.y)(),X=(0,e.useRef)(),{formatMessage:U}=(0,E.Z)(),{pathname:z}=(0,Z.TH)(),{trackUsage:w}=(0,a.rS)(),[{query:m},ge]=(0,a.Kx)(),k=Boolean(m._q||m.filters),[Zt,It]=(0,a.Yw)(M.uf.view,M.Uk.GRID),Y=Zt===M.Uk.GRID,{data:S,isLoading:Ut,errors:bt}=(0,et.L)({skipWhen:!v,query:m}),{data:Pe,isLoading:Wt,errors:Kt}=(0,nt.j)({enabled:v&&((l=S==null?void 0:S.pagination)==null?void 0:l.page)===1&&!(0,o.rV)(m),query:m}),{data:ve,isLoading:Te,error:Re}=(0,tt.W)(m==null?void 0:m.folder,{enabled:v&&!!(m!=null&&m.folder)});((d=Re==null?void 0:Re.response)==null?void 0:d.status)===404&&C(z);const q=(s=Pe==null?void 0:Pe.map(n=>({...n,type:"folder",folderURL:(0,o.Km)(z,m,n.id),isSelectable:P})))!=null?s:[],W=(q==null?void 0:q.length)||0,_=((u=S==null?void 0:S.results)==null?void 0:u.map(n=>({...n,type:"asset",isSelectable:P})))||[],K=(c=_==null?void 0:_.length)!=null?c:0,$t=(f=S==null?void 0:S.pagination)==null?void 0:f.total,Fe=Te||Wt||N||Ut,[zt,Ht]=(0,e.useState)(!1),[Qt,je]=(0,e.useState)(!1),[Se,fe]=(0,e.useState)(void 0),[he,Ze]=(0,e.useState)(void 0),[$,{selectOne:ae,selectAll:Ie}]=(0,a.Uq)(["type","id"],[]),Ue=($==null?void 0:$.length)>0&&($==null?void 0:$.length)!==K+W,Ee=()=>Ht(n=>!n),be=({created:n=!1}={})=>{n&&(m==null?void 0:m.page)!=="1"&&ge({...m,page:1}),je(le=>!le)},We=(n,le)=>{n.target.checked&&w("didSelectAllMediaLibraryElements"),Ie(le)},Ke=n=>{w("didSortMediaLibraryElements",{location:"upload",sort:n}),ge({sort:n})},$e=n=>{Ze(n),je(!0)},Vt=n=>{Ze(null),be(n),X.current&&X.current.focus()},ze=n=>{n===K&&S.pagination.page===S.pagination.pageCount&&S.pagination.page>1&&ge({...m,page:S.pagination.page-1})},Gt=()=>{Ie(),ze($.length)};return(0,a.go)(),e.createElement(I.A,null,e.createElement(i.o,{"aria-busy":Fe},e.createElement(me,{breadcrumbs:!Te&&(0,o.M4)(ve,{pathname:z,query:m}),canCreate:j,onToggleEditFolderDialog:be,onToggleUploadAssetDialog:Ee,folder:ve}),e.createElement(r.Z,{startActions:e.createElement(e.Fragment,null,P&&Y&&(K>0||W>0)&&e.createElement(Rt,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},e.createElement(y.C,{"aria-label":U({id:(0,o.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:Ue,value:(K>0||W>0)&&$.length===K+W,onChange:n=>We(n,[..._,...q])})),v&&Y&&e.createElement(ke.Z,{value:m==null?void 0:m.sort,onChangeSort:Ke}),v&&e.createElement(Ot,null)),endActions:e.createElement(e.Fragment,null,e.createElement(a.jW,{permissions:M._I.configureView},e.createElement(De,{paddingTop:1,paddingBottom:1},e.createElement(g.h,{forwardedAs:Ge.rU,to:{pathname:`${z}/configuration`,search:(0,ye.stringify)(m,{encode:!1})},icon:e.createElement(se.Z,null),label:U({id:"app.links.configure-view",defaultMessage:"Configure the view"})}))),e.createElement(De,{paddingTop:1,paddingBottom:1},e.createElement(g.h,{icon:Y?e.createElement(te.Z,null):e.createElement(Qe.Z,null),label:U(Y?{id:(0,o.OB)("view-switch.list"),defaultMessage:"List View"}:{id:(0,o.OB)("view-switch.grid"),defaultMessage:"Grid View"}),onClick:()=>It(Y?M.Uk.LIST:M.Uk.GRID)})),e.createElement(a.m,{label:U({id:(0,o.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}}))}),e.createElement(x.D,null,$.length>0&&e.createElement(ce,{currentFolder:ve,selected:$,onSuccess:Gt}),Fe&&e.createElement(a.dO,null),(bt||Kt)&&e.createElement(a.Hn,null),W===0&&K===0&&e.createElement(Le,{canCreate:j,canRead:v,isFiltering:k,onActionClick:Ee}),v&&!Y&&(K>0||W>0)&&e.createElement(qe.b,{assetCount:K,folderCount:W,indeterminate:Ue,onChangeSort:Ke,onChangeFolder:n=>C((0,o.Km)(z,m,n)),onEditAsset:fe,onEditFolder:$e,onSelectOne:ae,onSelectAll:We,rows:[...q,..._],selected:$,shouldDisableBulkSelect:!P,sortQuery:(T=m==null?void 0:m.sort)!=null?T:""}),v&&Y&&e.createElement(e.Fragment,null,W>0&&e.createElement(Xe.a,{title:(k&&K>0||!k)&&U({id:(0,o.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:W})||""},q.map(n=>{const Nt=!!$.filter(({type:pe})=>pe==="folder").find(pe=>pe.id===n.id),He=(0,o.Km)(z,m,{folder:n==null?void 0:n.id,folderPath:n==null?void 0:n.path});return e.createElement(O.P,{col:3,key:`folder-${n.id}`},e.createElement(ne.Ac,{ref:he&&n.id===he.id?X:void 0,ariaLabel:n.name,id:`folder-${n.id}`,to:He,startAction:ae&&n.isSelectable?e.createElement(ne.MM,{"data-testid":`folder-checkbox-${n.id}`,value:Nt,onChange:()=>ae(n)}):null,cardActions:e.createElement(g.h,{icon:e.createElement(Ve.Z,null),"aria-label":U({id:(0,o.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>$e(n)})},e.createElement(ne.Bu,null,e.createElement(ne.u6,{to:He},e.createElement(A.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},e.createElement(Ae,{fontWeight:"semiBold",ellipsis:!0},n.name,e.createElement(V.T,null,":")),e.createElement(Ae,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},U({id:(0,o.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:n.children.count,filesCount:n.files.count})))))))})),K>0&&W>0&&e.createElement(b.x,{paddingTop:6,paddingBottom:4},e.createElement(ee.i,null)),K>0&&e.createElement(Ne.r,{assets:_,onEditAsset:fe,onSelectAsset:ae,selectedAssets:$.filter(({type:n})=>n==="asset"),title:(!k||k&&W>0)&&((D=S==null?void 0:S.pagination)==null?void 0:D.page)===1&&U({id:(0,o.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:$t})||""})),(S==null?void 0:S.pagination)&&e.createElement(re,{pagination:S.pagination}))),zt&&e.createElement(_e.x,{onClose:Ee,trackedLocation:"upload",folderId:m==null?void 0:m.folder}),Qt&&e.createElement(Je.f,{onClose:Vt,folder:he,parentFolderId:m==null?void 0:m.folder,location:"upload"}),Se&&e.createElement(Ye.s,{onClose:n=>{n===null&&ze(1),fe(void 0)},asset:Se,canUpdate:P,canCopyLink:R,canDownload:J,trackedLocation:"upload"}))},jt=(0,e.lazy)(()=>t.e(9514).then(t.bind(t,47670))),St=()=>{const{config:{isLoading:l,isError:d,data:s}}=(0,p.Z)(),[{rawQuery:u},c]=(0,a.Kx)(),{formatMessage:f}=(0,E.Z)(),T=f({id:(0,o.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,e.useEffect)(()=>{l||d||u||c({sort:s.sort,page:1,pageSize:s.pageSize})},[l,d,s,u,c]),(0,a.go)(),e.createElement(i.o,{"aria-busy":l},e.createElement(L.q,{title:T}),l&&e.createElement(a.dO,null),u?e.createElement(e.Suspense,{fallback:e.createElement(a.dO,null)},e.createElement(Z.rs,null,e.createElement(Z.AW,{exact:!0,path:`/plugins/${F.Z}`,component:Ft}),e.createElement(Z.AW,{exact:!0,path:`/plugins/${F.Z}/configuration`,render:()=>e.createElement(jt,{config:s})}))):null)}},36989:(H,B,t)=>{t.d(B,{Z:()=>a});var e=t(85893),i=t(11047);const a=({startActions:L,endActions:E})=>!L&&!E?null:(0,e.jsxs)(i.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(i.k,{gap:2,wrap:"wrap",children:L}),(0,e.jsx)(i.k,{gap:2,shrink:0,wrap:"wrap",children:E})]})},49066:(H,B,t)=>{t.d(B,{D:()=>a});var e=t(85893),i=t(41580);const a=({children:L})=>(0,e.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:L})},53979:(H,B,t)=>{t.d(B,{T:()=>b});var e=t(85893),i=t(67294),a=t(88972);const L=r=>{const y=(0,i.useRef)(null),[g,x]=(0,i.useState)(!0),O=([A])=>{x(A.isIntersecting)};return(0,i.useEffect)(()=>{const A=y.current,V=new IntersectionObserver(O,r);return A&&V.observe(y.current),()=>{A&&V.disconnect()}},[y,r]),[y,g]};var E=t(79698);const Z=(r,y)=>{const g=(0,E.W)(y);(0,i.useLayoutEffect)(()=>{const x=new ResizeObserver(g);return Array.isArray(r)?r.forEach(O=>{O.current&&x.observe(O.current)}):r.current&&x.observe(r.current),()=>{x.disconnect()}},[r,g])};var p=t(41580),F=t(11047),o=t(75515);const b=r=>{const y=(0,i.useRef)(null),[g,x]=(0,i.useState)(null),[O,A]=L({root:null,rootMargin:"0px",threshold:0});return Z(O,()=>{O.current&&x(O.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{y.current&&x(y.current.getBoundingClientRect())},[y]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:g==null?void 0:g.height},ref:O,children:A&&(0,e.jsx)(I,{ref:y,...r})}),!A&&(0,e.jsx)(I,{...r,sticky:!0,width:g==null?void 0:g.width})]})};b.displayName="HeaderLayout";const Q=(0,a.ZP)(p.x)`
  width: ${({width:r})=>r?`${r/16}rem`:void 0};
  z-index: ${({theme:r})=>r.zIndices[1]};
`,I=i.forwardRef(({navigationAction:r,primaryAction:y,secondaryAction:g,subtitle:x,title:O,sticky:A,width:V,...ee},se)=>{const te=typeof x=="string";return A?(0,e.jsx)(Q,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:V,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(F.k,{justifyContent:"space-between",children:[(0,e.jsxs)(F.k,{children:[r&&(0,e.jsx)(p.x,{paddingRight:3,children:r}),(0,e.jsxs)(p.x,{children:[(0,e.jsx)(o.Z,{variant:"beta",as:"h1",...ee,children:O}),te?(0,e.jsx)(o.Z,{variant:"pi",textColor:"neutral600",children:x}):x]}),g?(0,e.jsx)(p.x,{paddingLeft:4,children:g}):null]}),(0,e.jsx)(F.k,{children:y?(0,e.jsx)(p.x,{paddingLeft:2,children:y}):void 0})]})}):(0,e.jsxs)(p.x,{ref:se,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:r?6:8,background:"neutral100","data-strapi-header":!0,children:[r?(0,e.jsx)(p.x,{paddingBottom:2,children:r}):null,(0,e.jsxs)(F.k,{justifyContent:"space-between",children:[(0,e.jsxs)(F.k,{minWidth:0,children:[(0,e.jsx)(o.Z,{as:"h1",variant:"alpha",...ee,children:O}),g?(0,e.jsx)(p.x,{paddingLeft:4,children:g}):null]}),y]}),te?(0,e.jsx)(o.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:x}):x]})})},17034:(H,B,t)=>{t.d(B,{A:()=>Z});var e=t(85893),i=t(88972),a=t(41580);const L=(0,i.ZP)(a.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:p})=>p?"auto 1fr":"1fr"};
`,E=(0,i.ZP)(a.x)`
  overflow-x: hidden;
`,Z=({sideNav:p,children:F})=>(0,e.jsxs)(L,{hasSideNav:!!p,children:[p,(0,e.jsx)(E,{paddingBottom:10,children:F})]})},23620:(H,B,t)=>{t.d(B,{r:()=>Q});var e=t(85893),i=t(67294),a=t(17772),L=t(73727),E=t(88972),Z=t(15585),p=t(75515),F=t(41580);const o=E.ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:I})=>I?"none":void 0};
  color: ${({disabled:I,theme:r})=>I?r.colors.neutral600:r.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${p.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:I})=>I.colors.primary500};
  }

  &:active {
    color: ${({theme:I})=>I.colors.primary700};
  }

  ${Z.BF};
`,b=(0,E.ZP)(F.x)`
  display: flex;
`,Q=i.forwardRef(({children:I,href:r,to:y,disabled:g=!1,startIcon:x,endIcon:O,...A},V)=>(0,e.jsxs)(o,{as:y&&!g?L.OL:"a",target:r?"_blank":void 0,rel:r?"noreferrer noopener":void 0,to:g?void 0:y,href:g?"#":r,disabled:g,ref:V,...A,children:[x&&(0,e.jsx)(b,{as:"span","aria-hidden":!0,paddingRight:2,children:x}),(0,e.jsx)(p.Z,{children:I}),O&&!r&&(0,e.jsx)(b,{as:"span","aria-hidden":!0,paddingLeft:2,children:O}),r&&(0,e.jsx)(b,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(a.Z,{})})]}))},185:(H,B,t)=>{t.d(B,{o:()=>E});var e=t(85893),i=t(88972),a=t(41580);const L=(0,i.ZP)(a.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,E=({labelledBy:Z="main-content-title",...p})=>(0,e.jsx)(L,{"aria-labelledby":Z,as:"main",id:"main-content",tabIndex:-1,...p})},67109:(H,B,t)=>{t.d(B,{Z:()=>a});var e=t(85893);const i=L=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...L,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),a=i},78114:(H,B,t)=>{t.d(B,{Z:()=>a});var e=t(85893);const i=L=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...L,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),a=i}}]);
