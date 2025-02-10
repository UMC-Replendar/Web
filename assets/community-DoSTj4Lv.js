var re=t=>{throw TypeError(t)};var W=(t,n,s)=>n.has(t)||re("Cannot "+s);var v=(t,n,s)=>(W(t,n,"read from private field"),s?s.call(t):n.get(t)),_=(t,n,s)=>n.has(t)?re("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,s),B=(t,n,s,i)=>(W(t,n,"write to private field"),i?i.call(t,s):n.set(t,s),s),z=(t,n,s)=>(W(t,n,"access private method"),s);import{i as ie,h as $e,c as Pe,S as Ee,s as Re,e as oe,g as Ae,n as Ce,f as U,r as f,j as e,a as O,d as c,k as H,l as Ne,m as Le}from"./index-B7gUGqRc.js";import{u as L,S as _e,a as Se,P as q,G as ne,b as ke,A as se,c as Me,U as Be,D as ze}from"./OngoingTasks-C--J-Oyx.js";import{Q as Ge,n as qe,s as Ke,u as Te}from"./useQuery-D4OBwsx6.js";import{B as N}from"./blueButton-BKLYKWyS.js";var Qe=class extends Ge{constructor(t,n){super(t,n)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,n){super.setOptions({...t,behavior:ie()},n)}getOptimisticResult(t){return t.behavior=ie(),super.getOptimisticResult(t)}fetchNextPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"backward"}}})}createResult(t,n){var m,S;const{state:s}=t,i=super.createResult(t,n),{isFetching:o,isRefetching:l,isError:a,isRefetchError:p}=i,x=(S=(m=s.fetchMeta)==null?void 0:m.fetchMore)==null?void 0:S.direction,j=a&&x==="forward",r=o&&x==="forward",d=a&&x==="backward",u=o&&x==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Pe(n,s.data),hasPreviousPage:$e(n,s.data),isFetchNextPageError:j,isFetchingNextPage:r,isFetchPreviousPageError:d,isFetchingPreviousPage:u,isRefetchError:p&&!j&&!d,isRefetching:l&&!r&&!u}}},$,P,C,F,D,Y,ee,ye,Ue=(ye=class extends Ee{constructor(n,s){super();_(this,D);_(this,$);_(this,P);_(this,C);_(this,F);B(this,$,n),this.setOptions(s),this.bindMethods(),z(this,D,Y).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(n){var i;const s=this.options;this.options=v(this,$).defaultMutationOptions(n),Re(this.options,s)||v(this,$).getMutationCache().notify({type:"observerOptionsUpdated",mutation:v(this,C),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&oe(s.mutationKey)!==oe(this.options.mutationKey)?this.reset():((i=v(this,C))==null?void 0:i.state.status)==="pending"&&v(this,C).setOptions(this.options)}onUnsubscribe(){var n;this.hasListeners()||(n=v(this,C))==null||n.removeObserver(this)}onMutationUpdate(n){z(this,D,Y).call(this),z(this,D,ee).call(this,n)}getCurrentResult(){return v(this,P)}reset(){var n;(n=v(this,C))==null||n.removeObserver(this),B(this,C,void 0),z(this,D,Y).call(this),z(this,D,ee).call(this)}mutate(n,s){var i;return B(this,F,s),(i=v(this,C))==null||i.removeObserver(this),B(this,C,v(this,$).getMutationCache().build(v(this,$),this.options)),v(this,C).addObserver(this),v(this,C).execute(n)}},$=new WeakMap,P=new WeakMap,C=new WeakMap,F=new WeakMap,D=new WeakSet,Y=function(){var s;const n=((s=v(this,C))==null?void 0:s.state)??Ae();B(this,P,{...n,isPending:n.status==="pending",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset})},ee=function(n){Ce.batch(()=>{var s,i,o,l,a,p,x,j;if(v(this,F)&&this.hasListeners()){const r=v(this,P).variables,d=v(this,P).context;(n==null?void 0:n.type)==="success"?((i=(s=v(this,F)).onSuccess)==null||i.call(s,n.data,r,d),(l=(o=v(this,F)).onSettled)==null||l.call(o,n.data,null,r,d)):(n==null?void 0:n.type)==="error"&&((p=(a=v(this,F)).onError)==null||p.call(a,n.error,r,d),(j=(x=v(this,F)).onSettled)==null||j.call(x,void 0,n.error,r,d))}this.listeners.forEach(r=>{r(v(this,P))})})},ye);function E(t,n){const s=U(),[i]=f.useState(()=>new Ue(s,t));f.useEffect(()=>{i.setOptions(t)},[i,t]);const o=f.useSyncExternalStore(f.useCallback(a=>i.subscribe(Ce.batchCalls(a)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),l=f.useCallback((a,p)=>{i.mutate(a,p).catch(qe)},[i]);if(o.error&&Ke(i.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:l,mutateAsync:o.mutate}}function Ve(t,n){return Te(t,Qe)}const Ze="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2030%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0102%2024.4539C19.0542%2024.4539%2023.9538%2019.5544%2023.9538%2013.5104C23.9538%207.46647%2019.0542%202.56689%2013.0102%202.56689C6.96629%202.56689%202.06671%207.46647%202.06671%2013.5104C2.06671%2019.5544%206.96629%2024.4539%2013.0102%2024.4539Z'%20stroke='%23666666'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M27.9332%2028.4333L20.9692%2021.4692'%20stroke='%23666666'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ye=({width:t="30",height:n="30",fill:s="black",onClick:i})=>e.jsxs("svg",{width:t,height:n,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:i,children:[e.jsx("path",{d:"M7.5 8.9996C8.32843 8.9996 9 8.32811 9 7.4998C9 6.67148 8.32843 6 7.5 6C6.67157 6 6 6.67148 6 7.4998C6 8.32811 6.67157 8.9996 7.5 8.9996Z",fill:s}),e.jsx("path",{d:"M14.5 9C15.3284 9 16 8.32843 16 7.5C16 6.67157 15.3284 6 14.5 6C13.6716 6 13 6.67157 13 7.5C13 8.32843 13.6716 9 14.5 9Z",fill:s}),e.jsx("path",{d:"M21.5 9C22.3284 9 23 8.32843 23 7.5C23 6.67157 22.3284 6 21.5 6C20.6716 6 20 6.67157 20 7.5C20 8.32843 20.6716 9 21.5 9Z",fill:s}),e.jsx("path",{d:"M7.5 16C8.32844 16 9 15.3284 9 14.5C9 13.6716 8.32844 13 7.5 13C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16Z",fill:s}),e.jsx("path",{d:"M14.5 16C15.3284 16 16 15.3284 16 14.5C16 13.6716 15.3284 13 14.5 13C13.6716 13 13 13.6716 13 14.5C13 15.3284 13.6716 16 14.5 16Z",fill:s}),e.jsx("path",{d:"M21.5 16C22.3284 16 23 15.3284 23 14.5C23 13.6716 22.3284 13 21.5 13C20.6716 13 20 13.6716 20 14.5C20 15.3284 20.6716 16 21.5 16Z",fill:s}),e.jsx("path",{d:"M7.5 23C8.32843 23 9 22.3284 9 21.5C9 20.6716 8.32843 20 7.5 20C6.67157 20 6 20.6716 6 21.5C6 22.3284 6.67157 23 7.5 23Z",fill:s}),e.jsx("path",{d:"M14.5 23C15.3284 23 16 22.3284 16 21.5C16 20.6716 15.3284 20 14.5 20C13.6716 20 13 20.6716 13 21.5C13 22.3284 13.6716 23 14.5 23Z",fill:s}),e.jsx("path",{d:"M21.5 23C22.3284 23 23 22.3284 23 21.5C23 20.6716 22.3284 20 21.5 20C20.6716 20 20 20.6716 20 21.5C20 22.3284 20.6716 23 21.5 23Z",fill:s})]}),ae=({width:t="15",height:n="16",fill:s="black",onClick:i})=>e.jsxs("svg",{width:t,height:n,viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:i,children:[e.jsx("path",{d:"M7.5 1.53339V14.4666",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M1.0332 7.96021H13.9665",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Ie=({width:t="92",height:n="93",onClick:s})=>e.jsxs("svg",{width:t,height:n,viewBox:"0 0 92 93",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:s,children:[e.jsx("circle",{cx:"46",cy:"46.5",r:"46",fill:"#EAEDFB"}),e.jsx("path",{d:"M23.8625 42.9121C23.8625 30.6065 33.8382 20.6309 46.1438 20.6309C58.4494 20.6309 68.425 30.6065 68.425 42.9121V86.6707C68.425 86.6707 61.8125 92.5002 46.575 92.5002C31.3375 92.5002 23.8625 86.7502 23.8625 86.7502V42.9121Z",fill:"#7CD7EB"}),e.jsx("circle",{cx:"37.6626",cy:"36.7256",r:"1.4375",fill:"#666666"}),e.jsx("circle",{cx:"54.9126",cy:"36.7256",r:"1.4375",fill:"#666666"}),e.jsx("path",{d:"M38.2375 43.0508C42.4063 47.7945 50.025 47.6508 54.3375 43.0508",stroke:"#37AAC3",strokeWidth:"4",strokeLinecap:"round"})]}),He=async t=>(await O.post("/api/friends/request",{friendId:t})).data.result,We=async({friendId:t,buddyStatus:n})=>(await O.patch("/api/friends/best-friend",{friendId:t,buddyStatus:n})).data.result,Je=async t=>(await O.delete(`/api/friends?friendId=${t}`)).data.result,Xe=async({friendId:t,note:n})=>(await O.patch("/api/friends/note",{friendId:t,note:n})).data.result,et=async t=>(await O.post("/api/friend-groups",{groupName:t})).data.result,tt=async t=>(await O.delete(`/api/friend-groups/${t}`)).data.result,nt=async({groupId:t,friendshipIds:n})=>(await O.post(`/api/friend-groups/${t}/add-multiple`,{friendshipIds:n})).data.result,st=async({groupId:t,friendshipId:n})=>(await O.delete(`/api/friend-groups/${t}/remove/${n}`)).data.result,de=()=>{const[t,n]=f.useState(""),[s,i]=f.useState(""),{data:o,isLoading:l}=L(t?`/api/friends/search?nickname=${t}`:""),a=Array.isArray(o)&&o.length>0,p=a?o[0]:null,x=E({mutationFn:u=>He(u),onSuccess:()=>{alert("친구 요청이 성공적으로 보내졌습니다.")},onError:u=>{alert("친구 요청을 보내는 데 실패했습니다."),console.error(u)}}),j=u=>{i(u.target.value)},r=u=>{u.key==="Enter"&&d()},d=()=>{const u=s.trim();!u||t===u||n(s)};return e.jsxs(rt,{children:[e.jsxs(lt,{children:[e.jsx(dt,{src:Ze,alt:"searchIcon"}),e.jsx(ct,{value:s,onKeyDown:r,onChange:j,placeholder:"등록할 친구의 이름을 입력해주세요"}),e.jsx(pe,{id:"searchBtn",onClick:d,children:"검색"})]}),e.jsxs(pt,{children:[!a&&!!t&&!l&&e.jsx(le,{width:"900px",children:"존재하지 않는 사용자입니다."}),!!t&&l&&e.jsx("div",{children:"스켈레톤"}),a?e.jsxs(e.Fragment,{children:[e.jsxs(at,{children:[e.jsx(Ie,{}),e.jsxs(it,{children:[e.jsx(ce,{children:p.nickname}),e.jsx(ce,{children:p.name}),e.jsx(ot,{children:p.statusMessage})]})]}),e.jsx(le,{children:e.jsx(pe,{width:"134px",onClick:()=>x.mutate(p.friendId),children:"친구요청"})})]}):null]})]})},rt=c.div`
  width: 100%;
  padding: 20px;
`,it=c.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`,ce=c.h3`
  margin: 0px;
  font-size: 19px;
`,ot=c.p`
  margin: 10px 0px 0px 0px;
  color: #666;
  font-size: 16px;
`,le=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: ${t=>t.width||"auto"};
`,at=c.div`
  background-color: white;
  border-radius: 20px;
  width: 75%;
  margin-left: 40px;
  display: flex;
  gap: 40px;
  padding: 20px;
  border: 1px solid rgba(232, 232, 232, 1);
  height: 132px;
`,dt=c.img`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 1;
  margin-left: 40px;
`,ct=c.input`
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
`,pe=c.button`
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
    
`,lt=c.div`
  position: relative;
  margin: 30px 0px;

  align-items: center;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
`,pt=c.div`
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: start;
  align-items: start;
  margin-top: 10px;
`,ut=c.div`
  width: 100%;
  padding: 20px;
`,ht=c.div`
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
`,xt=c.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,ue=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 67px;
`,gt=({expanded:t})=>{const n=t==="true"?20:5,[s,i]=f.useState(Array(he.length).fill(!1)),o=l=>{i(a=>a.map((p,x)=>x===l?!p:p))};return e.jsx(ut,{children:he.slice(0,n).map((l,a)=>e.jsxs(ht,{children:[e.jsx(ue,{children:l.time}),e.jsx(ue,{children:l.message}),e.jsx(xt,{children:s[a]?e.jsx(N,{status:"등록됨",children:"등록됨"}):e.jsx(N,{onClick:()=>o(a),children:"내 일정에 등록"})})]},a))})},he=[{time:"10분 전",message:"홍길동님이 자바스크립트 과제를 완료하였습니다"},{time:"15분 전",message:"이순신님이 CSS 스타일링 과제를 완료하였습니다"},{time:"20분 전",message:"김유신님이 React 프로젝트 과제를 완료하였습니다"},{time:"25분 전",message:"박문수님이 HTML 마크업 과제를 완료하였습니다"},{time:"30분 전",message:"정약용님이 API 호출 과제를 완료하였습니다"},{time:"35분 전",message:"강감찬님이 배열 메소드 과제를 완료하였습니다"},{time:"40분 전",message:"윤봉길님이 DOM 조작 과제를 완료하였습니다"},{time:"45분 전",message:"홍정호님이 웹 접근성 과제를 완료하였습니다"},{time:"50분 전",message:"임꺽정님이 CSS Flexbox 과제를 완료하였습니다"},{time:"35분 전",message:"강감찬님이 배열 메소드 과제를 완료하였습니다"},{time:"40분 전",message:"윤봉길님이 DOM 조작 과제를 완료하였습니다"},{time:"45분 전",message:"홍정호님이 웹 접근성 과제를 완료하였습니다"},{time:"50분 전",message:"임꺽정님이 CSS Flexbox 과제를 완료하였습니다"},{time:"55분 전",message:"유관순님이 비동기 처리 과제를 완료하였습니다"},{time:"55분 전",message:"유관순님이 비동기 처리 과제를 완료하였습니다"},{time:"50분 전",message:"임꺽정님이 CSS Flexbox 과제를 완료하였습니다"},{time:"35분 전",message:"강감찬님이 배열 메소드 과제를 완료하였습니다"},{time:"40분 전",message:"윤봉길님이 DOM 조작 과제를 완료하였습니다"},{time:"45분 전",message:"홍정호님이 웹 접근성 과제를 완료하였습니다"},{time:"50분 전",message:"임꺽정님이 CSS Flexbox 과제를 완료하였습니다"},{time:"55분 전",message:"유관순님이 비동기 처리 과제를 완료하였습니다"},{time:"55분 전",message:"유관순님이 비동기 처리 과제를 완료하였습니다"},{time:"50분 전",message:"임꺽정님이 CSS Flexbox 과제를 완료하였습니다"},{time:"35분 전",message:"강감찬님이 배열 메소드 과제를 완료하였습니다"},{time:"40분 전",message:"윤봉길님이 DOM 조작 과제를 완료하였습니다"},{time:"45분 전",message:"홍정호님이 웹 접근성 과제를 완료하였습니다"},{time:"50분 전",message:"임꺽정님이 CSS Flexbox 과제를 완료하였습니다"},{time:"55분 전",message:"유관순님이 비동기 처리 과제를 완료하였습니다"},{time:"55분 전",message:"유관순님이 비동기 처리 과제를 완료하였습니다"}],Fe=({data:t,queryKey:n,groupId:s})=>{const i=U(),[o,l]=f.useState({isOpen:!1,selectedId:null,note:""}),[a,p]=f.useState(!1),[x,j]=f.useState(""),r=E({mutationFn:({friendId:h,buddyStatus:b})=>We({friendId:h,buddyStatus:b}),onSuccess:h=>{alert(h),i.invalidateQueries({queryKey:[n]})},onError:h=>{alert("친한 친구 설정하는 데 실패했습니다"),console.error(h)}}),d=E({mutationFn:({friendId:h})=>Je(h),onSuccess:h=>{alert(h),i.invalidateQueries({queryKey:[n]})},onError:h=>{alert("친구 삭제하는 데 실패했습니다."),console.error(h)}}),u=E({mutationFn:({friendId:h,note:b})=>Xe({friendId:h,note:b}),onSuccess:h=>{alert(h),i.invalidateQueries({queryKey:[`/api/friends/note?friendId=${o.selectedId}`]}),p(!1)},onError:h=>{alert("메모 업데이트에 실패했습니다."),console.error(h)}}),{data:g}=L(o.selectedId?`/api/friends/note?friendId=${o.selectedId}`:""),m=E({mutationFn:({groupId:h,friendshipId:b})=>st({groupId:h,friendshipId:b}),onSuccess:h=>{alert(h),i.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:h=>{alert("그룹에 친구 추가하기 실패했습니다"),console.error(h)}}),w=Array.isArray(g)&&g.length>0?g[0].note:null,I=()=>{p(!0),j((g==null?void 0:g.note)||"")},k=()=>{u.mutate({friendId:o.selectedId,note:x})},M=h=>{l(b=>({isOpen:b.selectedId!==h||!b.isOpen,selectedId:b.selectedId===h?null:h,note:b.selectedId===h?b.note:""}))};return e.jsxs(e.Fragment,{children:[t.length===0&&e.jsx("div",{children:"친구 없음"}),t.map((h,b)=>e.jsxs("div",{children:[e.jsxs(ft,{children:[e.jsxs(jt,{children:[e.jsx(Ie,{width:"30",height:"30"}),e.jsx(xe,{width:"100px",children:h.nickname})]}),e.jsxs(xe,{children:["진행 중인 과제: ",h.ongoingAssignments,"개"]}),e.jsxs(mt,{children:[s&&e.jsx(N,{status:"그룹에서 삭제하기",onClick:()=>m.mutate({groupId:s,friendshipId:h.friendshipId}),children:"그룹에서 삭제하기"}),e.jsx(Ye,{fill:o.selectedId===h.friendId?"rgba(74, 198, 226, 1)":"black",onClick:()=>M(h.friendId)})]})]}),o.isOpen&&o.selectedId===h.friendId&&e.jsxs(vt,{onClick:K=>K.stopPropagation(),top:`${b*67+320}px`,children:[e.jsxs(J,{children:[e.jsxs("span",{children:["진행중인 과제: ",h.ongoingAssignments,"개"]}),e.jsx("div",{children:"일정확인"})]}),e.jsx(ge,{children:"과제공유"}),e.jsxs(J,{children:[e.jsx("div",{style:{display:"flex",transformOrigin:"left",alignItems:"center",transform:"scale(0.5)"},children:e.jsx(_e,{isOn:h.buddyStatus==="YES",onToggle:()=>{r.mutate({friendId:h.friendId,buddyStatus:h.buddyStatus==="YES"?"NO":"YES"})}})}),e.jsx("div",{children:"친한친구설정"})]}),e.jsx(J,{children:a?e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",onChange:K=>j(K.target.value),value:x,placeholder:"메모를 수정하세요"}),e.jsx("div",{onClick:k,children:"수정완료"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:w}),e.jsx("div",{onClick:I,children:"메모수정"})]})}),e.jsx(ge,{onClick:()=>d.mutate({friendId:h.friendId}),children:"친구삭제"})]})]},h.friendId))]})},ft=c.div`
  display: flex;
  position: relative;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  font-size: 19px;
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
`,mt=c.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`,xe=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${t=>t.width||"auto"};
`,jt=c.div`
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,vt=c.div`
  position: absolute;
  top: ${t=>t.top};
  right: 250px;
  width: 300px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #ccc;

  border-radius: 10px;

  flex-direction: column;
  z-index: 1;
`,J=c.div`
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
`,ge=c.p`
  text-align: right; /* 텍스트 오른쪽 정렬 */
  margin: 0px;
  padding: 8px 10px 8px 10px;
  height: 38px;
`,bt=({expanded:t})=>{const n=t?"/api/friends":"/api/friends?limit=5",{data:s,isLoading:i,isError:o}=L(n);return i?e.jsx("div",{children:"스켈레톤 이미지"}):o?e.jsx("h1",{children:"에러"}):e.jsx(wt,{children:e.jsx(Fe,{data:s,queryKey:n})})},wt=c.div`
  width: 100%;

  padding: 20px;
`,yt="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9643%2012.9695L15.0002%2019.9336L8.03613%2012.9695'%20stroke='black'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ct="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9643%2017.0308L15.0002%2010.0667L8.03613%2017.0308'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",De=()=>{const t=U(),{closeModal:n}=H();return E({mutationFn:({groupId:s,friendshipIds:i})=>nt({groupId:s,friendshipIds:i}),onSuccess:()=>{n(),t.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:s=>{alert("그룹에 친구 추가하기 실패했습니다"),console.error(s)}})},St=({groupId:t})=>{const{closeModal:n}=H(),{isFriendModalOpen:s,openFriendModal:i,nicknames:o,updateFriendsData:l,setFriendData:a,friendData:p,resetFriends:x,friendshipIds:j}=Se(),r=De();f.useEffect(()=>{x()},[n]),f.useEffect(()=>{l()},[s]);const{data:d}=L(`/api/friend-groups/${t}/available-friends`);f.useEffect(()=>{JSON.stringify(d)!==JSON.stringify(p)&&a(d)},[d,i]);const u=()=>{if(o.length===0){alert("그룹에 추가할 친구를 선택하세요");return}const g=j.filter(m=>m!==null);r.mutate({groupId:t,friendshipIds:g})};return e.jsxs(Mt,{children:[e.jsx("h1",{children:"그룹에 추가하기"}),e.jsxs(It,{children:[" ",e.jsx("label",{children:"그룹에 넣을 친구"})]}),e.jsxs(Ot,{children:[e.jsxs(q,{onClick:i,children:[" ",e.jsx("img",{src:ne,alt:"Gray Plus Icon"}),"추가"]}),o.length>0&&e.jsx(Ft,{children:o.map(g=>e.jsx(Dt,{children:g},g))})]}),s&&e.jsx(ke,{}),e.jsx(kt,{children:e.jsx(q,{onClick:u,children:"완료"})})]})},kt=c.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,Mt=c.div`
  padding: 20px;
`,It=c.div`
  padding: 20px 0px 40px 0px;
  label {
    font-size: 16px;
    color: #666;
  }
`,Ft=c.div`
  display: flex;
  align-items: center;
  gap: 8px;

  flex-wrap: wrap;
`,Dt=c.span`
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
`,Ot=c.div`
  display: flex;
  gap: 8px;
`,$t=()=>{const{closeModal:t}=H(),n=De(),{isFriendModalOpen:s,openFriendModal:i,nicknames:o,updateFriendsData:l,setFriendData:a,friendData:p,resetFriends:x,friendshipIds:j}=Se();f.useEffect(()=>{x()},[t]);const[r,d]=f.useState(""),u=U(),g=E({mutationFn:w=>et(w),onSuccess:w=>{const I=j.filter(k=>k!==null);n.mutate({groupId:w.groupId,friendshipIds:I}),alert("그룹이 성공적으로 생성되었습니다."),t(),u.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:w=>{alert("그룹을 생성하는 데 실패했습니다."),console.error(w)}}),m=()=>{if(!r.trim()){alert("그룹 이름을 입력하세요.");return}g.mutate(r)};f.useEffect(()=>{l()},[s]);const{data:S}=L("/api/friends");return f.useEffect(()=>{JSON.stringify(S)!==JSON.stringify(p)&&a(S)},[S,i]),e.jsxs(At,{children:[e.jsx("h1",{children:"그룹 만들기"}),e.jsxs(Rt,{children:[e.jsxs("div",{children:[" ",e.jsx("label",{children:"그룹명"}),e.jsx(Pt,{placeholder:"그룹 이름을 입력하세요",value:r,onChange:w=>d(w.target.value)})]}),e.jsx("label",{children:"그룹에 넣을 친구"})]}),e.jsxs(_t,{children:[e.jsxs(q,{onClick:i,children:[e.jsx("img",{src:ne,alt:"Gray Plus Icon"}),"추가"]}),o.length>0&&e.jsx(Nt,{children:o.map(w=>e.jsx(Lt,{children:w},w))})]}),s&&e.jsx(ke,{}),e.jsx(Et,{children:e.jsx(q,{onClick:m,children:"완료"})})]})},Pt=c.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 200px;
  color: #9a9a9a;
`,Et=c.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,Rt=c.div`
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
`,At=c.div`
  padding: 20px;
`,Nt=c.div`
  display: flex;
  align-items: center;
  gap: 8px;

  flex-wrap: wrap;
`,Lt=c.span`
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
`,_t=c.div`
  display: flex;
  gap: 8px;
`,Bt="data:image/svg+xml,%3csvg%20width='19'%20height='3'%20viewBox='0%200%2019%203'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.16016%201.5H17.1602'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",zt=()=>{const{openModal:t}=H(),n=U(),s=r=>{t(e.jsx(St,{groupId:r}))},i=()=>{t(e.jsx($t,{}))},o=r=>{j(d=>{const u=[...d];return u[r]=!u[r],u})},{data:l,isLoading:a}=L("/api/friend-groups"),p=E({mutationFn:r=>tt(r),onSuccess:r=>{alert(r),n.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:r=>{alert("친구 요청을 보내는 데 실패했습니다."),console.error(r)}}),[x,j]=f.useState(new Array(l.length).fill(!1));return a?e.jsx("div",{children:"스켈레톤"}):e.jsxs(qt,{children:[e.jsx(Gt,{children:e.jsxs(se,{onClick:i,children:["그룹 만들기",e.jsx(ae,{})]})}),l.map(r=>e.jsxs("div",{children:[e.jsxs(Kt,{status:x[r.groupId]!==void 0?x[r.groupId].toString():"false",children:[e.jsxs(V,{children:[r.groupName,e.jsx("img",{src:x[r.groupId]?Ct:yt,alt:x[r.groupId]?"UpArrow Icon":"DownArrow Icon",onClick:()=>o(r.groupId)})]}),x[r.groupId]&&e.jsxs(V,{gap:"50px",children:[e.jsxs(V,{onClick:()=>p.mutate(r.groupId),children:["그룹 삭제하기",e.jsx("img",{src:Bt,alt:"MinusIcon"})]}),e.jsxs(V,{onClick:()=>s(r.groupId),children:["그룹에 추가하기 ",e.jsx(ae,{fill:"white"})]})]})]}),x[r.groupId]&&e.jsx(Tt,{children:e.jsx(Fe,{data:r.friends,queryKey:"/api/friend-groups",groupId:r.groupId})})]},r.groupId))]})},Gt=c.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  height: 67px;
`,qt=c.div`
  width: 100%;
  padding: 20px;
  overflow-y: auto;
`,Kt=c.div`
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
`,V=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${t=>t.gap};
`,Tt=c.div`
  display: flex;
  flex-direction: column;
`,Oe=()=>{const[t,n]=f.useState(""),[s,i]=f.useState("");return f.useEffect(()=>{const o=new Date,l=o.getFullYear(),a=String(o.getMonth()+1).padStart(2,"0"),p=String(o.getDate()).padStart(2,"0");n(`${l}-${a}-${p}`)},[]),e.jsxs(e.Fragment,{children:[" ",e.jsx(Ut,{children:"학과 과제 추가하기"}),e.jsxs(A,{children:[e.jsx(R,{children:"과제명"}),e.jsx(G,{placeholder:"과제 이름을 입력하세요"})]}),e.jsxs(A,{children:[e.jsx(R,{children:"강좌명"}),e.jsx(G,{placeholder:"강좌 이름을 입력하세요"})]}),e.jsxs(A,{children:[" ",e.jsx(R,{children:"교수명"}),e.jsx(G,{placeholder:"교수님 성함을 입력하세요"})]}),e.jsxs(A,{children:[e.jsx(R,{children:"학년"}),e.jsx(G,{placeholder:"2학년"})]}),e.jsxs(A,{children:[e.jsx(R,{children:"과제마감일"}),e.jsx(G,{width:"100px",type:"date",placeholder:t})," ",e.jsx(G,{width:"100px",type:"time",placeholder:"23:55",value:s,onChange:o=>i(o.target.value)})]}),e.jsxs(A,{children:[" ",e.jsx(R,{children:"공유할 친구"})," ",e.jsxs(q,{children:[e.jsx("img",{src:ne,alt:"Gray Plus Icon"}),"추가"]})]}),e.jsxs(A,{children:[e.jsx(R,{children:"메모"}),e.jsx(Qt,{})]}),e.jsxs(Vt,{children:[" ",e.jsx(q,{children:"일정 추가하기"})]})]})},Qt=c.textarea`
  background-color: white;
  width: 400px;
  height: 200px;
  border: 1px solid rgba(213, 213, 213, 1);
  &:focus {
    outline: none;
  }
`,Ut=c.h1`
  padding-bottom: 40px;
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`,G=c.input`
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
`,R=c.label`
  width: 150px;
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`,A=c.div`
  display: flex;
  gap: 20px;
  padding: 5px;
`,Vt=c.label`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,Zt=c.div`
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
`,Yt=c.div`
  div {
    display: flex;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67px;
`,Ht=c.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
`,Wt=c.div`
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
`,Jt=c.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,X=c.select`
  width: 100px;
  background: rgba(252, 246, 245, 1);
  border: none;
  outline: none;
  font-size: 19px;
  margin-left: 50px;
`,Xt=({expanded:t})=>{const n=t==="true"?10:3,[s,i]=f.useState(!1),[o,l]=f.useState(""),[a,p]=f.useState(""),[x,j]=f.useState(""),r=()=>{i(!s)};return e.jsxs(Zt,{children:[e.jsxs(Yt,{children:[e.jsxs(Ht,{children:[" ",e.jsxs(se,{onClick:r,children:["과제 추가하기",e.jsx("img",{src:Me,alt:"Plus Icon"})]})]}),e.jsxs("div",{children:[e.jsxs(X,{value:o,onChange:d=>l(d.target.value),children:[e.jsx("option",{value:"",hidden:!0,children:"학년"}),e.jsx("option",{value:"1",children:"1학년"}),e.jsx("option",{value:"2",children:"2학년"}),e.jsx("option",{value:"3",children:"3학년"}),e.jsx("option",{value:"4",children:"4학년"}),e.jsx("option",{value:"5",children:"5학년"})]}),e.jsxs(X,{onChange:d=>p(d.target.value),value:a,children:[e.jsx("option",{value:"",hidden:!0,children:"교수명"}),e.jsx("option",{value:"김교수",children:"김교수"}),e.jsx("option",{value:"이교수",children:"이교수"}),e.jsx("option",{value:"박교수",children:"박교수"})]}),e.jsxs(X,{onChange:d=>j(d.target.value),value:x,children:[e.jsx("option",{value:"",hidden:!0,children:"정렬"}),e.jsx("option",{value:"등록일",children:"등록일"}),e.jsx("option",{value:"교수명",children:"교수명"}),e.jsx("option",{value:"강좌명",children:"강좌명"}),e.jsx("option",{value:"과제명",children:"과제명"}),e.jsx("option",{value:"마감일",children:"마감일"})]})]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"학년"}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"교수"}),e.jsx("th",{children:"강좌"}),e.jsx("th",{children:"과제명"}),e.jsx("th",{children:"마감일"}),e.jsx("th",{children:"과제등록"})]})}),e.jsx("tbody",{children:en.slice(0,n).map((d,u)=>e.jsxs("tr",{children:[e.jsx("td",{children:d.grade}),e.jsx("td",{children:d.registrationDate}),e.jsx("td",{children:d.professor}),e.jsx("td",{children:d.course}),e.jsx("td",{children:d.assignment}),e.jsx("td",{children:d.deadline}),e.jsx("td",{children:d.isRegistered?e.jsx(N,{status:"등록됨",children:"등록됨"}):e.jsx(N,{children:"내 일정에 등록"})})]},u))})]}),s&&e.jsx(Jt,{onClick:()=>i(!s),children:e.jsx(Wt,{onClick:d=>d.stopPropagation(),children:e.jsx(Oe,{})})})]})},en=[{grade:"1",registrationDate:"1/10",professor:"김영희",course:"컴퓨터공학",assignment:"자료구조 과제",deadline:"2/1",isRegistered:!0},{grade:"2",registrationDate:"1/15",professor:"이철수",course:"수학",assignment:"미적분학 2-1",deadline:"2/5",isRegistered:!0},{grade:"3",registrationDate:"1/20",professor:"박민정",course:"물리학",assignment:"고급 물리학",deadline:"2/10",isRegistered:!1},{grade:"1",registrationDate:"1/12",professor:"김영희",course:"영어",assignment:"영어회화 과제",deadline:"2/3",isRegistered:!0},{grade:"2",registrationDate:"1/17",professor:"이철수",course:"역사",assignment:"한국사 과제",deadline:"2/7",isRegistered:!1},{grade:"3",registrationDate:"1/22",professor:"박민정",course:"화학",assignment:"화학 실험 보고서",deadline:"2/12",isRegistered:!0},{grade:"1",registrationDate:"1/11",professor:"김영희",course:"프로그래밍",assignment:"파이썬 기초",deadline:"2/2",isRegistered:!0},{grade:"2",registrationDate:"1/16",professor:"이철수",course:"통계학",assignment:"기초 통계학 과제",deadline:"2/6",isRegistered:!1},{grade:"3",registrationDate:"1/21",professor:"박민정",course:"경제학",assignment:"미시경제학 과제",deadline:"2/11",isRegistered:!0},{grade:"1",registrationDate:"1/13",professor:"김영희",course:"생물학",assignment:"생물학 실험",deadline:"2/4",isRegistered:!0},{grade:"2",registrationDate:"1/18",professor:"이철수",course:"컴퓨터공학",assignment:"알고리즘 과제",deadline:"2/8",isRegistered:!1},{grade:"3",registrationDate:"1/23",professor:"박민정",course:"심리학",assignment:"심리학 연구 보고서",deadline:"2/13",isRegistered:!0}];var te=new Map,Z=new WeakMap,fe=0,tn=void 0;function nn(t){return t?(Z.has(t)||(fe+=1,Z.set(t,fe.toString())),Z.get(t)):"0"}function sn(t){return Object.keys(t).sort().filter(n=>t[n]!==void 0).map(n=>`${n}_${n==="root"?nn(t.root):t[n]}`).toString()}function rn(t){const n=sn(t);let s=te.get(n);if(!s){const i=new Map;let o;const l=new IntersectionObserver(a=>{a.forEach(p=>{var x;const j=p.isIntersecting&&o.some(r=>p.intersectionRatio>=r);t.trackVisibility&&typeof p.isVisible>"u"&&(p.isVisible=j),(x=i.get(p.target))==null||x.forEach(r=>{r(j,p)})})},t);o=l.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),s={id:n,observer:l,elements:i},te.set(n,s)}return s}function on(t,n,s={},i=tn){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const x=t.getBoundingClientRect();return n(i,{isIntersecting:i,target:t,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:x,intersectionRect:x,rootBounds:x}),()=>{}}const{id:o,observer:l,elements:a}=rn(s),p=a.get(t)||[];return a.has(t)||a.set(t,p),p.push(n),l.observe(t),function(){p.splice(p.indexOf(n),1),p.length===0&&(a.delete(t),l.unobserve(t)),a.size===0&&(l.disconnect(),te.delete(o))}}function an({threshold:t,delay:n,trackVisibility:s,rootMargin:i,root:o,triggerOnce:l,skip:a,initialInView:p,fallbackInView:x,onChange:j}={}){var r;const[d,u]=f.useState(null),g=f.useRef(j),[m,S]=f.useState({inView:!!p,entry:void 0});g.current=j,f.useEffect(()=>{if(a||!d)return;let M;return M=on(d,(h,b)=>{S({inView:h,entry:b}),g.current&&g.current(h,b),b.isIntersecting&&l&&M&&(M(),M=void 0)},{root:o,rootMargin:i,threshold:t,trackVisibility:s,delay:n},x),()=>{M&&M()}},[Array.isArray(t)?t.toString():t,d,o,i,l,a,s,x,n]);const w=(r=m.entry)==null?void 0:r.target,I=f.useRef(void 0);!d&&w&&!l&&!a&&I.current!==w&&(I.current=w,S({inView:!!p,entry:void 0}));const k=[u,m.inView,m.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}var y={},T={},me;function dn(){if(me)return T;me=1,Object.defineProperty(T,"__esModule",{value:!0}),T.parseLengthAndUnit=n,T.cssValue=s;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(i){if(typeof i=="number")return{value:i,unit:"px"};var o,l=(i.match(/^[0-9.]*/)||"").toString();l.includes(".")?o=parseFloat(l):o=parseInt(l,10);var a=(i.match(/[^0-9]*$/)||"").toString();return t[a]?{value:o,unit:a}:(console.warn("React Spinners: ".concat(i," is not a valid css value. Defaulting to ").concat(o,"px.")),{value:o,unit:"px"})}function s(i){var o=n(i);return"".concat(o.value).concat(o.unit)}return T}var Q={},je;function cn(){if(je)return Q;je=1,Object.defineProperty(Q,"__esModule",{value:!0}),Q.createAnimation=void 0;var t=function(n,s,i){var o="react-spinners-".concat(n,"-").concat(i);if(typeof window>"u"||!window.document)return o;var l=document.createElement("style");document.head.appendChild(l);var a=l.sheet,p=`
    @keyframes `.concat(o,` {
      `).concat(s,`
    }
  `);return a&&a.insertRule(p,0),o};return Q.createAnimation=t,Q}var ve;function ln(){if(ve)return y;ve=1;var t=y&&y.__assign||function(){return t=Object.assign||function(r){for(var d,u=1,g=arguments.length;u<g;u++){d=arguments[u];for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&(r[m]=d[m])}return r},t.apply(this,arguments)},n=y&&y.__createBinding||(Object.create?function(r,d,u,g){g===void 0&&(g=u);var m=Object.getOwnPropertyDescriptor(d,u);(!m||("get"in m?!d.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return d[u]}}),Object.defineProperty(r,g,m)}:function(r,d,u,g){g===void 0&&(g=u),r[g]=d[u]}),s=y&&y.__setModuleDefault||(Object.create?function(r,d){Object.defineProperty(r,"default",{enumerable:!0,value:d})}:function(r,d){r.default=d}),i=y&&y.__importStar||function(r){if(r&&r.__esModule)return r;var d={};if(r!=null)for(var u in r)u!=="default"&&Object.prototype.hasOwnProperty.call(r,u)&&n(d,r,u);return s(d,r),d},o=y&&y.__rest||function(r,d){var u={};for(var g in r)Object.prototype.hasOwnProperty.call(r,g)&&d.indexOf(g)<0&&(u[g]=r[g]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,g=Object.getOwnPropertySymbols(r);m<g.length;m++)d.indexOf(g[m])<0&&Object.prototype.propertyIsEnumerable.call(r,g[m])&&(u[g[m]]=r[g[m]]);return u};Object.defineProperty(y,"__esModule",{value:!0});var l=i(Ne()),a=dn(),p=cn(),x=(0,p.createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function j(r){var d=r.loading,u=d===void 0?!0:d,g=r.color,m=g===void 0?"#000000":g,S=r.speedMultiplier,w=S===void 0?1:S,I=r.cssOverride,k=I===void 0?{}:I,M=r.size,h=M===void 0?35:M,b=o(r,["loading","color","speedMultiplier","cssOverride","size"]),K=t({background:"transparent !important",width:(0,a.cssValue)(h),height:(0,a.cssValue)(h),borderRadius:"100%",border:"2px solid",borderTopColor:m,borderBottomColor:"transparent",borderLeftColor:m,borderRightColor:m,display:"inline-block",animation:"".concat(x," ").concat(.75/w,"s 0s infinite linear"),animationFillMode:"both"},k);return u?l.createElement("span",t({style:K},b)):null}return y.default=j,y}var pn=ln();const un=Le(pn);function hn(t,n=10){return Ve({queryFn:async({pageParam:i=1})=>{const{data:o}=await O.get(`${t}?page=${i}&size=${n}`);return o.result},queryKey:[t,n],initialPageParam:1,getNextPageParam:i=>i.last?void 0:i.pageable.pageNumber+1})}const xn=c.div`
  width: 100%;
  padding: 20px;
`,gn=c.div`
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
`,be=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,fn=c.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`,mn=()=>{var j;const{data:t,isPending:n,isError:s,error:i,isFetching:o,hasNextPage:l,fetchNextPage:a}=hn("/api/major/lectures/news",5),{ref:p,inView:x}=an({threshold:0});return f.useEffect(()=>{x&&!o&&l&&a()},[o,l,a,x]),n?e.jsx("div",{children:"스켈레톤"}):s?e.jsx("h1",{children:i.message}):e.jsxs(xn,{children:[(j=t==null?void 0:t.pages)==null?void 0:j.map(r=>r.content.map(d=>e.jsxs(gn,{children:[e.jsx(be,{children:d.time}),e.jsxs(be,{children:[d.nickname,"님이 ",d.title,"를 등록하였습니다"]}),e.jsx(fn,{children:d.check==="CHECK"?e.jsx(N,{status:"등록됨",children:"등록됨"}):e.jsx(N,{children:"내 일정에 등록"})})]},d.friendId))),o&&e.jsx("div",{children:"스켈레톤"}),e.jsx("div",{ref:p,className:"scroll",children:o&&e.jsx(un,{color:"#fff"})})]})},jn=()=>{const[t,n]=f.useState(!1),[s,i]=f.useState(1),o=()=>{n(!t)},{data:l}=L(s?`/api/major/lectures/list/${s}`:"");return e.jsxs(wn,{children:[e.jsxs(bn,{children:[e.jsx(yn,{children:e.jsxs(se,{onClick:o,children:["과제 추가하기",e.jsx("img",{src:Me,alt:"Plus Icon"})]})}),e.jsxs(vn,{value:s,onChange:a=>i(Number(a.target.value)),children:[e.jsx("option",{value:1,children:"1학년"}),e.jsx("option",{value:2,children:"2학년"}),e.jsx("option",{value:3,children:"3학년"}),e.jsx("option",{value:4,children:"4학년"})]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"학년"}),e.jsx("th",{children:"교수"}),e.jsx("th",{children:"강좌"})]})}),e.jsx("tbody",{children:l.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.academicYear}),e.jsx("td",{children:a.professor}),e.jsx("td",{children:a.lectureName})]},a.lectureName))})]}),t&&e.jsx(Sn,{onClick:()=>n(!t),children:e.jsx(Cn,{onClick:a=>a.stopPropagation(),children:e.jsx(Oe,{})})})]})},vn=c.select`
  margin-left: 130px;
  width: 100px;

  background: rgba(252, 246, 245, 1);
  border: none;
  outline: none;
  font-size: 19px;
`,bn=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67px;
`,wn=c.div`
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
`,yn=c.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  height: 67px;
`,Cn=c.div`
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
`,Sn=c.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,kn=({menuState:t,expanded:n})=>{let s;switch(t){case"친구등록":s=e.jsx(de,{});break;case"친구목록":s=e.jsx(bt,{expanded:n});break;case"친구소식":s=e.jsx(gt,{expanded:n});break;case"친구관리":s=e.jsx(zt,{});break;case"학과소식":s=e.jsx(mn,{});break;case"과제목록":s=e.jsx(Xt,{expanded:n});break;case"강좌목록":s=e.jsx(jn,{});break;default:s=e.jsx(de,{})}return e.jsx(e.Fragment,{children:s})},we=({title:t,menuItems:n})=>{const[s,i]=f.useState({activeMenu:n[0],expanded:!1}),o=a=>i({activeMenu:a,expanded:!1}),l=()=>i(a=>({...a,expanded:!a.expanded}));return e.jsxs("div",{children:[e.jsx(On,{children:t}),e.jsxs($n,{children:[e.jsx(Dn,{children:n.map(a=>e.jsx(Fn,{isSelected:s.activeMenu===a,onClick:()=>o(a),children:a},a))}),e.jsxs(Mn,{onClick:l,children:[s.expanded?"닫기":"더보기",e.jsx("img",{src:s.expanded?Be:ze,alt:s.expanded?"Up Arrow":"Down Arrow"})]})]}),e.jsx(In,{expanded:s.expanded.toString(),children:e.jsx(kn,{menuState:s.activeMenu,expanded:s.expanded.toString()})})]})},Mn=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 16px;
  gap: 6px;
`,In=c.div`
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
`,Fn=c.button`
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
`,Dn=c.div`
  display: flex;
  gap: 8px;
`,On=c.h2`
  margin: 0px 0px 30px 0px;
`,$n=c.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`,Pn=c.div`
  display: flex;
  flex-direction: column;
  margin: 68px 0px 68px 0px;
  width: 100%;
  gap: 59px;
  padding: 0 50px;
`,_n=()=>e.jsx(e.Fragment,{children:e.jsxs(Pn,{children:[e.jsx(we,{title:"친구",menuItems:["친구등록","친구목록","친구소식","친구관리"]}),e.jsx(we,{title:"학과",menuItems:["학과소식","과제목록","강좌목록"]})]})});export{_n as default};
