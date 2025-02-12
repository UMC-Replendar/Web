import{i as J,h as we,c as ye,j as e,a as I,d as s,r as j,e as Ce,f as ke,g as Se,k as z,l as T}from"./index-BCNRdKTe.js";import{u as F,a as M,A as Ie,C as Me,S as Fe,b as xe,P as N,G as H,c as ue,d as W,e as he,U as De,D as $e}from"./OngoingTasks-BodcqjGZ.js";import{S as X}from"./sweetalert2.esm.all-CumHaNCI.js";import{B as A}from"./blueButton-B1AxfaKe.js";import{Q as Pe,u as Oe}from"./useQuery-7wihUi9h.js";var Ae=class extends Pe{constructor(t,r){super(t,r)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,r){super.setOptions({...t,behavior:J()},r)}getOptimisticResult(t){return t.behavior=J(),super.getOptimisticResult(t)}fetchNextPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"backward"}}})}createResult(t,r){var f,m;const{state:n}=t,d=super.createResult(t,r),{isFetching:o,isRefetching:p,isError:c,isRefetchError:l}=d,h=(m=(f=n.fetchMeta)==null?void 0:f.fetchMore)==null?void 0:m.direction,v=c&&h==="forward",i=o&&h==="forward",a=c&&h==="backward",u=o&&h==="backward";return{...d,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:ye(r,n.data),hasPreviousPage:we(r,n.data),isFetchNextPageError:v,isFetchingNextPage:i,isFetchPreviousPageError:a,isFetchingPreviousPage:u,isRefetchError:l&&!v&&!a,isRefetching:p&&!i&&!u}}};function Ee(t,r){return Oe(t,Ae)}const Re="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2030%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0102%2024.4539C19.0542%2024.4539%2023.9538%2019.5544%2023.9538%2013.5104C23.9538%207.46647%2019.0542%202.56689%2013.0102%202.56689C6.96629%202.56689%202.06671%207.46647%202.06671%2013.5104C2.06671%2019.5544%206.96629%2024.4539%2013.0102%2024.4539Z'%20stroke='%23666666'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M27.9332%2028.4333L20.9692%2021.4692'%20stroke='%23666666'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ne=({width:t="30",height:r="30",fill:n="black",onClick:d})=>e.jsxs("svg",{width:t,height:r,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:d,children:[e.jsx("path",{d:"M7.5 8.9996C8.32843 8.9996 9 8.32811 9 7.4998C9 6.67148 8.32843 6 7.5 6C6.67157 6 6 6.67148 6 7.4998C6 8.32811 6.67157 8.9996 7.5 8.9996Z",fill:n}),e.jsx("path",{d:"M14.5 9C15.3284 9 16 8.32843 16 7.5C16 6.67157 15.3284 6 14.5 6C13.6716 6 13 6.67157 13 7.5C13 8.32843 13.6716 9 14.5 9Z",fill:n}),e.jsx("path",{d:"M21.5 9C22.3284 9 23 8.32843 23 7.5C23 6.67157 22.3284 6 21.5 6C20.6716 6 20 6.67157 20 7.5C20 8.32843 20.6716 9 21.5 9Z",fill:n}),e.jsx("path",{d:"M7.5 16C8.32844 16 9 15.3284 9 14.5C9 13.6716 8.32844 13 7.5 13C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16Z",fill:n}),e.jsx("path",{d:"M14.5 16C15.3284 16 16 15.3284 16 14.5C16 13.6716 15.3284 13 14.5 13C13.6716 13 13 13.6716 13 14.5C13 15.3284 13.6716 16 14.5 16Z",fill:n}),e.jsx("path",{d:"M21.5 16C22.3284 16 23 15.3284 23 14.5C23 13.6716 22.3284 13 21.5 13C20.6716 13 20 13.6716 20 14.5C20 15.3284 20.6716 16 21.5 16Z",fill:n}),e.jsx("path",{d:"M7.5 23C8.32843 23 9 22.3284 9 21.5C9 20.6716 8.32843 20 7.5 20C6.67157 20 6 20.6716 6 21.5C6 22.3284 6.67157 23 7.5 23Z",fill:n}),e.jsx("path",{d:"M14.5 23C15.3284 23 16 22.3284 16 21.5C16 20.6716 15.3284 20 14.5 20C13.6716 20 13 20.6716 13 21.5C13 22.3284 13.6716 23 14.5 23Z",fill:n}),e.jsx("path",{d:"M21.5 23C22.3284 23 23 22.3284 23 21.5C23 20.6716 22.3284 20 21.5 20C20.6716 20 20 20.6716 20 21.5C20 22.3284 20.6716 23 21.5 23Z",fill:n})]}),ee=({width:t="15",height:r="16",fill:n="black",onClick:d})=>e.jsxs("svg",{width:t,height:r,viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:d,children:[e.jsx("path",{d:"M7.5 1.53339V14.4666",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M1.0332 7.96021H13.9665",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Z=({width:t="92",height:r="93",onClick:n})=>e.jsxs("svg",{width:t,height:r,viewBox:"0 0 92 93",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:n,children:[e.jsx("circle",{cx:"46",cy:"46.5",r:"46",fill:"#EAEDFB"}),e.jsx("path",{d:"M23.8625 42.9121C23.8625 30.6065 33.8382 20.6309 46.1438 20.6309C58.4494 20.6309 68.425 30.6065 68.425 42.9121V86.6707C68.425 86.6707 61.8125 92.5002 46.575 92.5002C31.3375 92.5002 23.8625 86.7502 23.8625 86.7502V42.9121Z",fill:"#7CD7EB"}),e.jsx("circle",{cx:"37.6626",cy:"36.7256",r:"1.4375",fill:"#666666"}),e.jsx("circle",{cx:"54.9126",cy:"36.7256",r:"1.4375",fill:"#666666"}),e.jsx("path",{d:"M38.2375 43.0508C42.4063 47.7945 50.025 47.6508 54.3375 43.0508",stroke:"#37AAC3",strokeWidth:"4",strokeLinecap:"round"})]}),Be=async t=>(await I.post("/api/friends/request",{friendId:t})).data.result,_e=async({friendId:t,buddyStatus:r})=>(await I.patch("/api/friends/best-friend",{friendId:t,buddyStatus:r})).data.result,ze=async t=>(await I.delete(`/api/friends?friendId=${t}`)).data.result,Le=async({friendId:t,note:r})=>(await I.patch("/api/friends/note",{friendId:t,note:r})).data.result,Ge=async t=>(await I.post("/api/friend-groups",{groupName:t})).data.result,qe=async t=>(await I.delete(`/api/friend-groups/${t}`)).data.result,Te=async({groupId:t,friendshipIds:r})=>(await I.post(`/api/friend-groups/${t}/add-multiple`,{friendshipIds:r})).data.result,Ke=async({groupId:t,friendshipId:r})=>(await I.delete(`/api/friend-groups/${t}/remove/${r}`)).data.result,te=()=>{const[t,r]=j.useState(""),{nickname:n}=Ce(),[d,o]=j.useState(""),{data:p,isLoading:c}=F(t?`/api/friends/search?nickname=${t}`:""),l=Array.isArray(p)&&p.length>0,h=l?p[0]:null,v=M({mutationFn:x=>Be(x),onSuccess:()=>{X.fire({icon:"success",text:`'${t}' 님에게 친구 요청을 보냈습니다.`,timer:2e3,showConfirmButton:!1})},onError:x=>{X.fire({icon:"success",title:"친구 요청을 보내는 데 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(x)}}),i=x=>{o(x.target.value)},a=x=>{x.key==="Enter"&&u()},u=()=>{const x=d.trim();!x||t===x||r(d)};return e.jsxs(Qe,{children:[e.jsxs(We,{children:[e.jsx(Ye,{src:Re,alt:"searchIcon"}),e.jsx(He,{value:d,onKeyDown:a,onChange:i,placeholder:"등록할 친구의 이름을 입력해주세요"}),e.jsx(ie,{id:"searchBtn",onClick:u,children:"검색"})]}),e.jsxs(Je,{children:[!l&&!!t&&!c&&e.jsx(re,{width:"900px",children:t==n?"자기 자신은 검색할 수 없습니다.":"존재하지 않는 사용자입니다."}),!!t&&c&&e.jsx("div",{children:"스켈레톤"}),l?e.jsxs(e.Fragment,{children:[e.jsxs(Ze,{children:[e.jsx(Z,{}),e.jsxs(Ve,{children:[e.jsx(ne,{children:h.nickname}),e.jsx(ne,{children:h.name}),e.jsx(Ue,{children:h.statusMessage})]})]}),e.jsx(re,{children:e.jsx(ie,{width:"134px",onClick:()=>v.mutate(h.friendId),children:"친구요청"})})]}):null]})]})},Qe=s.div`
  width: 100%;
  padding: 20px;
`,Ve=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`,ne=s.h3`
  margin: 0px;
  font-size: 19px;
`,Ue=s.p`
  margin: 10px 0px 0px 0px;
  color: #666;
  font-size: 16px;
`,re=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: ${t=>t.width||"auto"};
  font-size: 20px;
  color: red;
`,Ze=s.div`
  background-color: white;
  border-radius: 20px;
  width: 75%;
  margin-left: 40px;
  display: flex;
  gap: 40px;
  padding: 20px;
  border: 1px solid rgba(232, 232, 232, 1);
  height: 132px;
`,Ye=s.img`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 1;
  margin-left: 40px;
`,He=s.input`
  width: 75%;
  padding-left: 50px;
  margin-left: 40px;
  height: 100%;
  border-radius: 50px;
  border: 1px solid rgba(232, 232, 232, 1);
  font-size: 19px;
  &:focus {
    outline: none;
  }
`,ie=s.button`
  color: rgba(102, 102, 102, 1);
  border-radius: 20px;

  border: 1px solid #e8e8e8;
  margin-left: 40px;
  background-color: white;
  height: 60px;
  width: ${t=>t.width||"97px"};
  font-size: 19px;
    &:focus {
    outline: none;  
    
`,We=s.div`
  position: relative;
  margin: 30px 0px;

  align-items: center;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
`,Je=s.div`
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: start;
  align-items: start;
  margin-top: 10px;
`;var Y=new Map,L=new WeakMap,se=0,Xe=void 0;function et(t){return t?(L.has(t)||(se+=1,L.set(t,se.toString())),L.get(t)):"0"}function tt(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?et(t.root):t[r]}`).toString()}function nt(t){const r=tt(t);let n=Y.get(r);if(!n){const d=new Map;let o;const p=new IntersectionObserver(c=>{c.forEach(l=>{var h;const v=l.isIntersecting&&o.some(i=>l.intersectionRatio>=i);t.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=v),(h=d.get(l.target))==null||h.forEach(i=>{i(v,l)})})},t);o=p.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:r,observer:p,elements:d},Y.set(r,n)}return n}function rt(t,r,n={},d=Xe){if(typeof window.IntersectionObserver>"u"&&d!==void 0){const h=t.getBoundingClientRect();return r(d,{isIntersecting:d,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:h,intersectionRect:h,rootBounds:h}),()=>{}}const{id:o,observer:p,elements:c}=nt(n),l=c.get(t)||[];return c.has(t)||c.set(t,l),l.push(r),p.observe(t),function(){l.splice(l.indexOf(r),1),l.length===0&&(c.delete(t),p.unobserve(t)),c.size===0&&(p.disconnect(),Y.delete(o))}}function ge({threshold:t,delay:r,trackVisibility:n,rootMargin:d,root:o,triggerOnce:p,skip:c,initialInView:l,fallbackInView:h,onChange:v}={}){var i;const[a,u]=j.useState(null),x=j.useRef(v),[f,m]=j.useState({inView:!!l,entry:void 0});x.current=v,j.useEffect(()=>{if(c||!a)return;let k;return k=rt(a,(D,$)=>{m({inView:D,entry:$}),x.current&&x.current(D,$),$.isIntersecting&&p&&k&&(k(),k=void 0)},{root:o,rootMargin:d,threshold:t,trackVisibility:n,delay:r},h),()=>{k&&k()}},[Array.isArray(t)?t.toString():t,a,o,d,p,c,n,h,r]);const b=(i=f.entry)==null?void 0:i.target,S=j.useRef(void 0);!a&&b&&!p&&!c&&S.current!==b&&(S.current=b,m({inView:!!l,entry:void 0}));const C=[u,f.inView,f.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}var w={},B={},oe;function it(){if(oe)return B;oe=1,Object.defineProperty(B,"__esModule",{value:!0}),B.parseLengthAndUnit=r,B.cssValue=n;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(d){if(typeof d=="number")return{value:d,unit:"px"};var o,p=(d.match(/^[0-9.]*/)||"").toString();p.includes(".")?o=parseFloat(p):o=parseInt(p,10);var c=(d.match(/[^0-9]*$/)||"").toString();return t[c]?{value:o,unit:c}:(console.warn("React Spinners: ".concat(d," is not a valid css value. Defaulting to ").concat(o,"px.")),{value:o,unit:"px"})}function n(d){var o=r(d);return"".concat(o.value).concat(o.unit)}return B}var _={},ae;function st(){if(ae)return _;ae=1,Object.defineProperty(_,"__esModule",{value:!0}),_.createAnimation=void 0;var t=function(r,n,d){var o="react-spinners-".concat(r,"-").concat(d);if(typeof window>"u"||!window.document)return o;var p=document.createElement("style");document.head.appendChild(p);var c=p.sheet,l=`
    @keyframes `.concat(o,` {
      `).concat(n,`
    }
  `);return c&&c.insertRule(l,0),o};return _.createAnimation=t,_}var de;function ot(){if(de)return w;de=1;var t=w&&w.__assign||function(){return t=Object.assign||function(i){for(var a,u=1,x=arguments.length;u<x;u++){a=arguments[u];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(i[f]=a[f])}return i},t.apply(this,arguments)},r=w&&w.__createBinding||(Object.create?function(i,a,u,x){x===void 0&&(x=u);var f=Object.getOwnPropertyDescriptor(a,u);(!f||("get"in f?!a.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return a[u]}}),Object.defineProperty(i,x,f)}:function(i,a,u,x){x===void 0&&(x=u),i[x]=a[u]}),n=w&&w.__setModuleDefault||(Object.create?function(i,a){Object.defineProperty(i,"default",{enumerable:!0,value:a})}:function(i,a){i.default=a}),d=w&&w.__importStar||function(i){if(i&&i.__esModule)return i;var a={};if(i!=null)for(var u in i)u!=="default"&&Object.prototype.hasOwnProperty.call(i,u)&&r(a,i,u);return n(a,i),a},o=w&&w.__rest||function(i,a){var u={};for(var x in i)Object.prototype.hasOwnProperty.call(i,x)&&a.indexOf(x)<0&&(u[x]=i[x]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,x=Object.getOwnPropertySymbols(i);f<x.length;f++)a.indexOf(x[f])<0&&Object.prototype.propertyIsEnumerable.call(i,x[f])&&(u[x[f]]=i[x[f]]);return u};Object.defineProperty(w,"__esModule",{value:!0});var p=d(ke()),c=it(),l=st(),h=(0,l.createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function v(i){var a=i.loading,u=a===void 0?!0:a,x=i.color,f=x===void 0?"#000000":x,m=i.speedMultiplier,b=m===void 0?1:m,S=i.cssOverride,C=S===void 0?{}:S,k=i.size,D=k===void 0?35:k,$=o(i,["loading","color","speedMultiplier","cssOverride","size"]),K=t({background:"transparent !important",width:(0,c.cssValue)(D),height:(0,c.cssValue)(D),borderRadius:"100%",border:"2px solid",borderTopColor:f,borderBottomColor:"transparent",borderLeftColor:f,borderRightColor:f,display:"inline-block",animation:"".concat(h," ").concat(.75/b,"s 0s infinite linear"),animationFillMode:"both"},C);return u?p.createElement("span",t({style:K},$)):null}return w.default=v,w}var at=ot();const fe=Se(at);function je(t,r=10){return Ee({queryFn:async({pageParam:d=1})=>{const{data:o}=await I.get(`${t}?page=${d}&size=${r}`);return console.log(`현재 요청한 페이지: ${d}`),console.log(o.result),o.result},queryKey:[t,r],initialPageParam:1,getNextPageParam:d=>d.last?void 0:d.pageable.pageNumber+2})}const dt=s.div`
  width: 100%;
  padding: 20px;
`,ct=s.div`
  display: flex;
  gap: 100px;
  width: 100%;
  font-size: 19px;
  margin-bottom: 1px;
  border-radius: 20px;
  padding: 0px 30px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  &:nth-child(7),
  &:nth-child(8) {
    margin-bottom: 1.5px; /* 얼탱없네 얘네 */
  }
`,lt=s.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,Q=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 67px;
`,pt=s.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,xt=()=>{var i;const{data:t,isPending:r,isError:n,error:d,isFetching:o,hasNextPage:p,fetchNextPage:c}=je("/api/activity/friend",5),{ref:l,inView:h}=ge({threshold:0}),{openModal:v}=z();return j.useEffect(()=>{h&&!o&&p&&c()},[o,p,c,h]),r?e.jsx("div",{children:"스켈레톤"}):n?e.jsx("h1",{children:d.message}):e.jsxs(dt,{children:[(i=t==null?void 0:t.pages)==null?void 0:i.map(a=>a.content.map(u=>e.jsxs(ct,{children:[e.jsx(Q,{children:u.time}),e.jsx(Q,{children:u.createdAt}),e.jsx(Q,{children:u.content}),e.jsx(lt,{children:u.registered?e.jsx(A,{status:"등록됨",children:"등록됨"}):e.jsx(A,{onClick:()=>v(e.jsx(Ie,{onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"})})]},u.createdAt))),o&&e.jsx("div",{children:"스켈레톤"}),e.jsx(pt,{ref:l,className:"scroll",children:o&&e.jsx(fe,{color:"blace"})})]})},ve=({data:t,queryKey:r,groupId:n})=>{const d=T(),[o,p]=j.useState({isOpen:!1,selectedId:null,note:""}),[c,l]=j.useState(!1),[h,v]=j.useState(""),[i,a]=j.useState(!1),u=M({mutationFn:({friendId:g,buddyStatus:y})=>_e({friendId:g,buddyStatus:y}),onSuccess:g=>{alert(g),d.invalidateQueries({queryKey:[r]})},onError:g=>{alert("친한 친구 설정하는 데 실패했습니다"),console.error(g)}}),x=M({mutationFn:({friendId:g})=>ze(g),onSuccess:g=>{alert(g),d.invalidateQueries({queryKey:[r]})},onError:g=>{alert("친구 삭제하는 데 실패했습니다."),console.error(g)}}),f=M({mutationFn:({friendId:g,note:y})=>Le({friendId:g,note:y}),onSuccess:g=>{alert(g),d.invalidateQueries({queryKey:[`/api/friends/note?friendId=${o.selectedId}`]}),l(!1)},onError:g=>{alert("메모 업데이트에 실패했습니다."),console.error(g)}}),{data:m}=F(o.selectedId?`/api/friends/note?friendId=${o.selectedId}`:""),{data:b}=F(i?`/api/assignment/friend/${o.selectedId}/public-assignments`:""),S=M({mutationFn:({groupId:g,friendshipId:y})=>Ke({groupId:g,friendshipId:y}),onSuccess:g=>{alert(g),d.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:g=>{alert("그룹에 친구 추가하기 실패했습니다"),console.error(g)}}),k=Array.isArray(m)&&m.length>0?m[0].note:null,D=()=>{l(!0),v((m==null?void 0:m.note)||"")},$=()=>{f.mutate({friendId:o.selectedId,note:h})},K=g=>{a(!1),p(y=>({isOpen:y.selectedId!==g||!y.isOpen,selectedId:y.selectedId===g?null:g,note:y.selectedId===g?y.note:""}))};return e.jsxs(e.Fragment,{children:[t.length===0&&e.jsx("div",{children:"친구 없음"}),t.map((g,y)=>e.jsxs("div",{children:[i&&o.selectedId&&b.length>0&&e.jsx(e.Fragment,{children:e.jsxs(ut,{children:[e.jsxs(vt,{children:[e.jsx(Z,{width:"30",height:"30"}),e.jsx(G,{width:"100px",bold:!0,children:g.nickname}),e.jsxs(G,{bold:!0,children:["진행 중인 과제: ",g.ongoingAssignments,"개"]})]}),e.jsx(ht,{onClick:()=>a(!1),children:"닫기"}),e.jsx(Me,{tasks:b.map(E=>({name:E.title,deadline:E.due_date}))})]})}),e.jsxs(gt,{children:[e.jsxs(jt,{children:[e.jsx(Z,{width:"30",height:"30"}),e.jsx(G,{width:"100px",children:g.nickname})]}),e.jsxs(G,{children:["진행 중인 과제: ",g.ongoingAssignments,"개"]}),e.jsxs(ft,{children:[n&&e.jsx(A,{status:"그룹에서 삭제하기",onClick:()=>S.mutate({groupId:n,friendshipId:g.friendshipId}),children:"그룹에서 삭제하기"}),e.jsx(Ne,{fill:o.selectedId===g.friendId?"rgba(74, 198, 226, 1)":"black",onClick:()=>K(g.friendId)})]})]}),o.isOpen&&o.selectedId===g.friendId&&e.jsxs(mt,{onClick:E=>E.stopPropagation(),top:`${y*67+320}px`,children:[e.jsxs(V,{children:[e.jsxs("span",{children:["진행중인 과제: ",g.ongoingAssignments,"개"]}),e.jsx("div",{onClick:()=>a(!0),children:"일정확인"})]}),e.jsx(ce,{children:"과제공유"}),e.jsxs(V,{children:[e.jsx("div",{style:{display:"flex",transformOrigin:"left",alignItems:"center",transform:"scale(0.5)"},children:e.jsx(Fe,{isOn:g.buddyStatus==="YES",onToggle:()=>{u.mutate({friendId:g.friendId,buddyStatus:g.buddyStatus==="YES"?"NO":"YES"})}})}),e.jsx("div",{children:"친한친구설정"})]}),e.jsx(V,{children:c?e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",onChange:E=>v(E.target.value),value:h,placeholder:"메모를 수정하세요"}),e.jsx("div",{onClick:$,children:"수정완료"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:k}),e.jsx("div",{onClick:D,children:"메모수정"})]})}),e.jsx(ce,{onClick:()=>x.mutate({friendId:g.friendId}),children:"친구삭제"})]})]},g.friendId))]})},ut=s.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  min-width: 300px;
`,ht=s.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: rgba(57, 130, 226, 1);
  }
`,gt=s.div`
  display: flex;
  position: relative;
  gap: 100px; /* 갭 조정 */
  width: 100%;

  height: 67px;
  background: white;
  border-radius: 20px;
  padding: 0px 30px;
  margin-bottom: 1px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  &:nth-child(7),
  &:nth-child(8) {
    margin-bottom: 1.5px;
  }
`,ft=s.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`,G=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({width:t})=>t||"auto"};
  font-weight: ${({bold:t})=>t?"bold":"normal"};
`,jt=s.div`
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,vt=s.div`
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`,mt=s.div`
  position: absolute;
  top: ${t=>t.top};
  right: 250px;
  width: 300px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #ccc;

  border-radius: 10px;

  flex-direction: column;
  z-index: 1;
`,V=s.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 10px 8px 10px;
  height: 38px;
  z-index: 2;

  span {
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 18.2px;
    text-align: right;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(102, 102, 102, 1);
  }
  div {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    text-align: right;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`,ce=s.p`
  text-align: right; /* 텍스트 오른쪽 정렬 */
  margin: 0px;
  padding: 8px 10px 8px 10px;
  height: 38px;
`,bt=({expanded:t})=>{const r=t?"/api/friends":"/api/friends?limit=5",{data:n,isLoading:d,isError:o}=F(r);return d?e.jsx("div",{children:"스켈레톤 이미지"}):o?e.jsx("h1",{children:"에러"}):e.jsx(wt,{children:e.jsx(ve,{data:n,queryKey:r})})},wt=s.div`
  width: 100%;

  padding: 20px;
`,yt="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9643%2012.9695L15.0002%2019.9336L8.03613%2012.9695'%20stroke='black'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ct="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9643%2017.0308L15.0002%2010.0667L8.03613%2017.0308'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",me=()=>{const t=T(),{closeModal:r}=z();return M({mutationFn:({groupId:n,friendshipIds:d})=>Te({groupId:n,friendshipIds:d}),onSuccess:()=>{r(),t.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:n=>{alert("그룹에 친구 추가하기 실패했습니다"),console.error(n)}})},kt=({groupId:t})=>{const{closeModal:r}=z(),{isFriendModalOpen:n,openFriendModal:d,nicknames:o,updateFriendsData:p,setFriendData:c,friendData:l,resetFriends:h,friendshipIds:v}=xe(),i=me();j.useEffect(()=>{h()},[r]),j.useEffect(()=>{p()},[n]);const{data:a}=F(`/api/friend-groups/${t}/available-friends`);j.useEffect(()=>{JSON.stringify(a)!==JSON.stringify(l)&&c(a)},[a,d]);const u=()=>{if(o.length===0){alert("그룹에 추가할 친구를 선택하세요");return}const x=v.filter(f=>f!==null);i.mutate({groupId:t,friendshipIds:x})};return e.jsxs(It,{children:[e.jsx("h1",{children:"그룹에 추가하기"}),e.jsxs(Mt,{children:[" ",e.jsx("label",{children:"그룹에 넣을 친구"})]}),e.jsxs($t,{children:[e.jsxs(N,{onClick:d,children:[" ",e.jsx("img",{src:H,alt:"Gray Plus Icon"}),"추가"]}),o.length>0&&e.jsx(Ft,{children:o.map(x=>e.jsx(Dt,{children:x},x))})]}),n&&e.jsx(ue,{}),e.jsx(St,{children:e.jsx(N,{onClick:u,children:"완료"})})]})},St=s.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,It=s.div`
  padding: 20px;
`,Mt=s.div`
  padding: 20px 0px 40px 0px;
  label {
    font-size: 16px;
    color: #666;
  }
`,Ft=s.div`
  display: flex;
  align-items: center;
  gap: 8px;

  flex-wrap: wrap;
`,Dt=s.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(102, 102, 102, 1);
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(186, 186, 186, 1);
  font-size: 14px;
  width: 64px;
  height: 31px;
`,$t=s.div`
  display: flex;
  gap: 8px;
`,Pt=()=>{const{closeModal:t}=z(),r=me(),{isFriendModalOpen:n,openFriendModal:d,nicknames:o,updateFriendsData:p,setFriendData:c,friendData:l,resetFriends:h,friendshipIds:v}=xe();j.useEffect(()=>{h()},[t]);const[i,a]=j.useState(""),u=T(),x=M({mutationFn:b=>Ge(b),onSuccess:b=>{const S=v.filter(C=>C!==null);r.mutate({groupId:b.groupId,friendshipIds:S}),alert("그룹이 성공적으로 생성되었습니다."),t(),u.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:b=>{alert("그룹을 생성하는 데 실패했습니다."),console.error(b)}}),f=()=>{if(!i.trim()){alert("그룹 이름을 입력하세요.");return}x.mutate(i)};j.useEffect(()=>{p()},[n]);const{data:m}=F("/api/friends");return j.useEffect(()=>{JSON.stringify(m)!==JSON.stringify(l)&&c(m)},[m,d]),e.jsxs(Rt,{children:[e.jsx("h1",{children:"그룹 만들기"}),e.jsxs(Et,{children:[e.jsxs("div",{children:[" ",e.jsx("label",{children:"그룹명"}),e.jsx(Ot,{placeholder:"그룹 이름을 입력하세요",value:i,onChange:b=>a(b.target.value)})]}),e.jsx("label",{children:"그룹에 넣을 친구"})]}),e.jsxs(_t,{children:[e.jsxs(N,{onClick:d,children:[e.jsx("img",{src:H,alt:"Gray Plus Icon"}),"추가"]}),o.length>0&&e.jsx(Nt,{children:o.map(b=>e.jsx(Bt,{children:b},b))})]}),n&&e.jsx(ue,{}),e.jsx(At,{children:e.jsx(N,{onClick:f,children:"완료"})})]})},Ot=s.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 200px;
  color: #9a9a9a;
`,At=s.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,Et=s.div`
  label {
    font-size: 16px;
    color: #666;
  }
  div {
    gap: 20px;
    display: flex;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10px 0px;
  gap: 10px;
`,Rt=s.div`
  padding: 20px;
`,Nt=s.div`
  display: flex;
  align-items: center;
  gap: 8px;

  flex-wrap: wrap;
`,Bt=s.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(102, 102, 102, 1);
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(186, 186, 186, 1);
  font-size: 14px;
  width: 64px;
  height: 31px;
`,_t=s.div`
  display: flex;
  gap: 8px;
`,zt="data:image/svg+xml,%3csvg%20width='19'%20height='3'%20viewBox='0%200%2019%203'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.16016%201.5H17.1602'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Lt=()=>{const{openModal:t}=z(),r=T(),n=i=>{t(e.jsx(kt,{groupId:i}))},d=()=>{t(e.jsx(Pt,{}))},o=i=>{v(a=>{const u=[...a];return u[i]=!u[i],u})},{data:p,isLoading:c}=F("/api/friend-groups"),l=M({mutationFn:i=>qe(i),onSuccess:i=>{alert(i),r.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:i=>{alert("친구 요청을 보내는 데 실패했습니다."),console.error(i)}}),[h,v]=j.useState(new Array(p.length).fill(!1));return c?e.jsx("div",{children:"스켈레톤"}):e.jsxs(qt,{children:[e.jsx(Gt,{children:e.jsxs(W,{onClick:d,children:["그룹 만들기",e.jsx(ee,{})]})}),p.map(i=>e.jsxs("div",{children:[e.jsxs(Tt,{status:h[i.groupId]!==void 0?h[i.groupId].toString():"false",children:[e.jsxs(q,{children:[i.groupName,e.jsx("img",{src:h[i.groupId]?Ct:yt,alt:h[i.groupId]?"UpArrow Icon":"DownArrow Icon",onClick:()=>o(i.groupId)})]}),h[i.groupId]&&e.jsxs(q,{gap:"50px",children:[e.jsxs(q,{onClick:()=>l.mutate(i.groupId),children:["그룹 삭제하기",e.jsx("img",{src:zt,alt:"MinusIcon"})]}),e.jsxs(q,{onClick:()=>n(i.groupId),children:["그룹에 추가하기 ",e.jsx(ee,{fill:"white"})]})]})]}),h[i.groupId]&&e.jsx(Kt,{children:e.jsx(ve,{data:i.friends,queryKey:"/api/friend-groups",groupId:i.groupId})})]},i.groupId))]})},Gt=s.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  height: 67px;
`,qt=s.div`
  width: 100%;
  padding: 20px;
  overflow-y: auto;
`,Tt=s.div`
  display: flex;
  justify-content: space-between;
  background-color: ${t=>t.status==="true"?"#666":"white"};
  color: ${t=>t.status==="true"?"white":"black"};
  font-size: 23px;

  height: 67px;
  border-radius: 20px;
  padding: 0px 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  &:nth-child(10),
  &:nth-child(11) {
    margin-bottom: 1.5px; /* 얼탱없네 얘네 */
  }
`,q=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${t=>t.gap};
`,Kt=s.div`
  display: flex;
  flex-direction: column;
`,be=()=>{const[t,r]=j.useState(""),[n,d]=j.useState("");return j.useEffect(()=>{const o=new Date,p=o.getFullYear(),c=String(o.getMonth()+1).padStart(2,"0"),l=String(o.getDate()).padStart(2,"0");r(`${p}-${c}-${l}`)},[]),e.jsxs(e.Fragment,{children:[" ",e.jsx(Vt,{children:"학과 과제 추가하기"}),e.jsxs(O,{children:[e.jsx(P,{children:"과제명"}),e.jsx(R,{placeholder:"과제 이름을 입력하세요"})]}),e.jsxs(O,{children:[e.jsx(P,{children:"강좌명"}),e.jsx(R,{placeholder:"강좌 이름을 입력하세요"})]}),e.jsxs(O,{children:[" ",e.jsx(P,{children:"교수명"}),e.jsx(R,{placeholder:"교수님 성함을 입력하세요"})]}),e.jsxs(O,{children:[e.jsx(P,{children:"학년"}),e.jsx(R,{placeholder:"2학년"})]}),e.jsxs(O,{children:[e.jsx(P,{children:"과제마감일"}),e.jsx(R,{width:"100px",type:"date",placeholder:t})," ",e.jsx(R,{width:"100px",type:"time",placeholder:"23:55",value:n,onChange:o=>d(o.target.value)})]}),e.jsxs(O,{children:[" ",e.jsx(P,{children:"공유할 친구"})," ",e.jsxs(N,{children:[e.jsx("img",{src:H,alt:"Gray Plus Icon"}),"추가"]})]}),e.jsxs(O,{children:[e.jsx(P,{children:"메모"}),e.jsx(Qt,{})]}),e.jsxs(Ut,{children:[" ",e.jsx(N,{children:"일정 추가하기"})]})]})},Qt=s.textarea`
  background-color: white;
  width: 400px;
  height: 200px;
  border: 1px solid rgba(213, 213, 213, 1);
  &:focus {
    outline: none;
  }
`,Vt=s.h1`
  padding-bottom: 40px;
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`,R=s.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: ${t=>t.width||"300px"}
  color: rgba(102, 102, 102, 1);

  font-family: Pretendard;
  font-size: 19px;
  font-weight: 500;
  line-height: 26.6px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`,P=s.label`
  width: 150px;
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`,O=s.div`
  display: flex;
  gap: 20px;
  padding: 5px;
`,Ut=s.label`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,Zt=s.div`
  width: 100%;
  padding: 20px;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 2px; /* 셀 간격 */
  }
  th {
    color: #666;
  }
  th,
  td {
    height: 67px;
    text-align: center;
    vertical-align: middle;
    padding: 12px 15px;
    font-size: 19px;
    background-color: white;
  }
  tr {
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  }
  tr th:first-child,
  tr td:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  /* 각 행(tr)의 마지막 셀을 오른쪽 둥글게 */
  tr th:last-child,
  tr td:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`,Yt=s.div`
  div {
    display: flex;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67px;
`,Ht=s.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
`,Wt=s.div`
  position: absolute;
  /*top: 830px;
  left: 430px;*/
  top: 400px;
  left: 430px;
  width: 600px;
  height: 650px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #ccc;

  border-radius: 10px;
  padding: 30px;
  flex-direction: column;
`,Jt=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,U=s.select`
  width: 100px;
  background: rgba(252, 246, 245, 1);
  border: none;
  outline: none;
  font-size: 19px;
  margin-left: 50px;
`,Xt=({expanded:t})=>{const r=t==="true"?10:3,[n,d]=j.useState(!1),[o,p]=j.useState(""),[c,l]=j.useState(""),[h,v]=j.useState(""),i=()=>{d(!n)};return e.jsxs(Zt,{children:[e.jsxs(Yt,{children:[e.jsxs(Ht,{children:[" ",e.jsxs(W,{onClick:i,children:["과제 추가하기",e.jsx("img",{src:he,alt:"Plus Icon"})]})]}),e.jsxs("div",{children:[e.jsxs(U,{value:o,onChange:a=>p(a.target.value),children:[e.jsx("option",{value:"",hidden:!0,children:"학년"}),e.jsx("option",{value:"1",children:"1학년"}),e.jsx("option",{value:"2",children:"2학년"}),e.jsx("option",{value:"3",children:"3학년"}),e.jsx("option",{value:"4",children:"4학년"}),e.jsx("option",{value:"5",children:"5학년"})]}),e.jsxs(U,{onChange:a=>l(a.target.value),value:c,children:[e.jsx("option",{value:"",hidden:!0,children:"교수명"}),e.jsx("option",{value:"김교수",children:"김교수"}),e.jsx("option",{value:"이교수",children:"이교수"}),e.jsx("option",{value:"박교수",children:"박교수"})]}),e.jsxs(U,{onChange:a=>v(a.target.value),value:h,children:[e.jsx("option",{value:"",hidden:!0,children:"정렬"}),e.jsx("option",{value:"등록일",children:"등록일"}),e.jsx("option",{value:"교수명",children:"교수명"}),e.jsx("option",{value:"강좌명",children:"강좌명"}),e.jsx("option",{value:"과제명",children:"과제명"}),e.jsx("option",{value:"마감일",children:"마감일"})]})]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"학년"}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"교수"}),e.jsx("th",{children:"강좌"}),e.jsx("th",{children:"과제명"}),e.jsx("th",{children:"마감일"}),e.jsx("th",{children:"과제등록"})]})}),e.jsx("tbody",{children:en.slice(0,r).map((a,u)=>e.jsxs("tr",{children:[e.jsx("td",{children:a.grade}),e.jsx("td",{children:a.registrationDate}),e.jsx("td",{children:a.professor}),e.jsx("td",{children:a.course}),e.jsx("td",{children:a.assignment}),e.jsx("td",{children:a.deadline}),e.jsx("td",{children:a.isRegistered?e.jsx(A,{status:"등록됨",children:"등록됨"}):e.jsx(A,{children:"내 일정에 등록"})})]},u))})]}),n&&e.jsx(Jt,{onClick:()=>d(!n),children:e.jsx(Wt,{onClick:a=>a.stopPropagation(),children:e.jsx(be,{})})})]})},en=[{grade:"1",registrationDate:"1/10",professor:"김영희",course:"컴퓨터공학",assignment:"자료구조 과제",deadline:"2/1",isRegistered:!0},{grade:"2",registrationDate:"1/15",professor:"이철수",course:"수학",assignment:"미적분학 2-1",deadline:"2/5",isRegistered:!0},{grade:"3",registrationDate:"1/20",professor:"박민정",course:"물리학",assignment:"고급 물리학",deadline:"2/10",isRegistered:!1},{grade:"1",registrationDate:"1/12",professor:"김영희",course:"영어",assignment:"영어회화 과제",deadline:"2/3",isRegistered:!0},{grade:"2",registrationDate:"1/17",professor:"이철수",course:"역사",assignment:"한국사 과제",deadline:"2/7",isRegistered:!1},{grade:"3",registrationDate:"1/22",professor:"박민정",course:"화학",assignment:"화학 실험 보고서",deadline:"2/12",isRegistered:!0},{grade:"1",registrationDate:"1/11",professor:"김영희",course:"프로그래밍",assignment:"파이썬 기초",deadline:"2/2",isRegistered:!0},{grade:"2",registrationDate:"1/16",professor:"이철수",course:"통계학",assignment:"기초 통계학 과제",deadline:"2/6",isRegistered:!1},{grade:"3",registrationDate:"1/21",professor:"박민정",course:"경제학",assignment:"미시경제학 과제",deadline:"2/11",isRegistered:!0},{grade:"1",registrationDate:"1/13",professor:"김영희",course:"생물학",assignment:"생물학 실험",deadline:"2/4",isRegistered:!0},{grade:"2",registrationDate:"1/18",professor:"이철수",course:"컴퓨터공학",assignment:"알고리즘 과제",deadline:"2/8",isRegistered:!1},{grade:"3",registrationDate:"1/23",professor:"박민정",course:"심리학",assignment:"심리학 연구 보고서",deadline:"2/13",isRegistered:!0}],tn=s.div`
  width: 100%;
  padding: 20px;
`,nn=s.div`
  display: flex;
  justify-content: space-between;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  font-size: 19px;
  height: 67px;
  background: white;
  border-radius: 20px;
  padding: 0px 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);yarn add react-spinners

  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  jsutify-content: center;
  align-items: center;
`,le=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,rn=s.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`,sn=s.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`,on=()=>{var v;const{data:t,isPending:r,isError:n,error:d,isFetching:o,hasNextPage:p,fetchNextPage:c}=je("/api/major/lectures/news",4),{ref:l,inView:h}=ge({threshold:0});return j.useEffect(()=>{h&&!o&&p&&c()},[o,p,c,h]),r?e.jsx("div",{children:"스켈레톤"}):n?e.jsx("h1",{children:d.message}):e.jsxs(tn,{children:[(v=t==null?void 0:t.pages)==null?void 0:v.map(i=>i.content.map(a=>e.jsxs(nn,{children:[e.jsx(le,{children:a.time}),e.jsxs(le,{children:[a.nickname,"님이 ",a.title,"를 등록하였습니다"]}),e.jsx(rn,{children:a.check==="CHECK"?e.jsx(A,{status:"등록됨",children:"등록됨"}):e.jsx(A,{children:"내 일정에 등록"})})]},a.friendId))),o&&e.jsx("div",{children:"스켈레톤"}),e.jsx(sn,{ref:l,className:"scroll",children:o&&e.jsx(fe,{color:"#fff"})})]})},an=()=>{const[t,r]=j.useState(!1),[n,d]=j.useState(1),o=()=>{r(!t)},{data:p}=F(n?`/api/major/lectures/list/${n}`:"");return e.jsxs(ln,{children:[e.jsxs(cn,{children:[e.jsx(pn,{children:e.jsxs(W,{onClick:o,children:["과제 추가하기",e.jsx("img",{src:he,alt:"Plus Icon"})]})}),e.jsxs(dn,{value:n,onChange:c=>d(Number(c.target.value)),children:[e.jsx("option",{value:1,children:"1학년"}),e.jsx("option",{value:2,children:"2학년"}),e.jsx("option",{value:3,children:"3학년"}),e.jsx("option",{value:4,children:"4학년"})]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"학년"}),e.jsx("th",{children:"교수"}),e.jsx("th",{children:"강좌"})]})}),e.jsx("tbody",{children:p.map(c=>e.jsxs("tr",{children:[e.jsx("td",{children:c.academicYear}),e.jsx("td",{children:c.professor}),e.jsx("td",{children:c.lectureName})]},c.lectureName))})]}),t&&e.jsx(un,{onClick:()=>r(!t),children:e.jsx(xn,{onClick:c=>c.stopPropagation(),children:e.jsx(be,{})})})]})},dn=s.select`
  margin-left: 130px;
  width: 100px;

  background: rgba(252, 246, 245, 1);
  border: none;
  outline: none;
  font-size: 19px;
`,cn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67px;
`,ln=s.div`
  width: 100%;

  padding: 20px;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 2px;
  }
  th {
    color: #666;
  }
  th,
  td {
    height: 67px;
    text-align: center;
    vertical-align: middle;
    padding: 12px 15px;
    font-size: 19px;
    background-color: white;
  }
  tr {
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  }

  tr th:first-child,
  tr td:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  tr th:last-child,
  tr td:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`,pn=s.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  height: 67px;
`,xn=s.div`
  position: absolute;
  /*top: 830px;
  left: 430px;*/
  top: 400px;
  left: 430px;
  width: 600px;
  height: 650px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #ccc;

  border-radius: 10px;
  padding: 30px;
  flex-direction: column;
  z-index:;
`,un=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,hn=({menuState:t,expanded:r})=>{let n;switch(t){case"친구등록":n=e.jsx(te,{});break;case"친구목록":n=e.jsx(bt,{expanded:r});break;case"친구소식":n=e.jsx(xt,{expanded:r});break;case"친구관리":n=e.jsx(Lt,{});break;case"학과소식":n=e.jsx(on,{});break;case"과제목록":n=e.jsx(Xt,{expanded:r});break;case"강좌목록":n=e.jsx(an,{});break;default:n=e.jsx(te,{})}return e.jsx(e.Fragment,{children:n})},pe=({title:t,menuItems:r})=>{const[n,d]=j.useState({activeMenu:r[0],expanded:!1}),o=l=>d({activeMenu:l,expanded:!1}),p=()=>d(l=>({...l,expanded:!l.expanded})),c=j.useRef(null);return j.useEffect(()=>{c.current&&!n.expanded&&(c.current.scrollTop=0)},[n.expanded]),e.jsxs("div",{children:[e.jsx(mn,{children:t}),e.jsxs(bn,{children:[e.jsx(vn,{children:r.map(l=>e.jsx(jn,{isSelected:n.activeMenu===l,onClick:()=>o(l),children:l},l))}),e.jsxs(gn,{onClick:p,children:[n.expanded?"닫기":"더보기",e.jsx("img",{src:n.expanded?De:$e,alt:n.expanded?"Up Arrow":"Down Arrow"})]})]}),e.jsx(fn,{ref:c,expanded:n.expanded.toString(),children:e.jsx(hn,{menuState:n.activeMenu,expanded:n.expanded.toString()})})]})},gn=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 16px;
  gap: 6px;
`,fn=s.div`
  background: rgba(252, 246, 245, 1);
  width: 95%;
  overflow-y: ${({expanded:t})=>t==="true"?"auto":"hidden"};
  border-radius: 20px;
  box-shadow: 0px 5px 15.7px 0px rgba(177, 198, 187, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  height: ${t=>t.expanded==="true"?"855px":"380px"};

transition: height 0.3s ease-out;>
`,jn=s.button`
  background: ${t=>t.isSelected?"rgba(102, 102, 102, 1)":"rgba(243, 243, 243, 1)"};
  width: 135px;
  height: 38px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  color: ${t=>t.isSelected?"white":"rgba(102, 102, 102, 1)"};
  padding: 0px;
  box-shadow: 0px 5px 15.7px 0px rgba(177, 198, 187, 0.4);
  margin-bottom: 15px;
`,vn=s.div`
  display: flex;
  gap: 8px;
`,mn=s.h2`
  margin: 0px 0px 30px 0px;
`,bn=s.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`,wn=s.div`
  display: flex;
  flex-direction: column;
  margin: 68px 0px 68px 0px;
  width: 100%;
  gap: 59px;
  padding: 0 50px;
`,Mn=()=>e.jsx(e.Fragment,{children:e.jsxs(wn,{children:[e.jsx(pe,{title:"친구",menuItems:["친구등록","친구목록","친구소식","친구관리"]}),e.jsx(pe,{title:"학과",menuItems:["학과소식","과제목록","강좌목록"]})]})});export{Mn as default};
