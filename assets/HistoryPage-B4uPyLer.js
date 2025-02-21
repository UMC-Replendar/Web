import{g as E,u as I,S as u,e as T,a as g,t as h,b as B,c as F,r as C,j as e,d as n}from"./index-_E89fCQW.js";import{B as w}from"./blueButton-os1Rpwgr.js";import{b as S,a as A,C as M,u as N}from"./useGetInfiniteData-BDxzNoAQ.js";import{a as q,A as D}from"./AddTaskModal-CoheRXQo.js";import{r as R}from"./commuApi-BmddxyCz.js";import{b as H,H as P}from"./skeleton-RmRIKzMd.js";import{F as z}from"./friendNewsRender-CS9WdwCC.js";import{u as V}from"./useDebounce-C7pd0KyT.js";import"./useBaseQuery-BEw4jf_8.js";function K(t,x=10){const{token:a}=E(),c=I();return S({queryFn:async({pageParam:o=1})=>{var r;if(!a){u.fire({icon:"info",text:"로그인이 필요합니다",showConfirmButton:!1,timer:2e3}).then(()=>{c("/")});return}try{const{data:s}=await T.get(`${t}?page=${o}&size=${x}`);return s}catch(s){if(s.response){const d=((r=s.response.data)==null?void 0:r.error)||`API 오류: ${s.response.status}`;console.error("API 실패 메시지:",d),u.fire({icon:"error",text:d,showConfirmButton:!1,timer:2e3})}else if(s instanceof Error){const d=s.message||"Network/API Error";console.error("네트워크 오류:",d),u.fire({icon:"error",title:"네트워크 오류",text:d,showConfirmButton:!1,timer:2e3})}else console.error("예상치 못한 오류:",s),u.fire({icon:"error",title:"오류",text:"예상치 못한 오류가 발생했습니다.",showConfirmButton:!1,timer:2e3});return[]}},queryKey:[t,x],initialPageParam:1,getNextPageParam:o=>{var r;if(!(!o||o.last))return(((r=o.pageable)==null?void 0:r.pageNumber)??0)+2}})}const Q=n.div`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({background:t})=>t};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
`,G=n.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  margin-top: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,L=n.div`
  display: flex;
  gap: 100px;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`,k=n.div`
  min-width: 100px;
  text-align: center;
`,J=n.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,O=()=>{var j;const{selectedTheme:t}=g(),a=h[t][1],{data:c,isPending:f,isFetching:o,hasNextPage:r,fetchNextPage:s}=K("/api/activity",5),{ref:d,inView:m}=A({threshold:0}),{openModal:y}=B(),b=F(),l=q({mutationFn:({requestId:p,isAccepted:i})=>R({requestId:p,isAccepted:i}),onSuccess:()=>{b.invalidateQueries({queryKey:["/api/activity/friend"]}),u.fire({icon:"success",text:"친구 요청을 수락했습니다",timer:2e3,showConfirmButton:!1})},onError:p=>{u.fire({icon:"error",text:"친구 수락에 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(p)}});return C.useEffect(()=>{m&&r&&!o&&s()},[m,r,o,s]),f?e.jsx(H,{count:5}):e.jsxs(e.Fragment,{children:[e.jsxs(Q,{background:a,children:[(j=c==null?void 0:c.pages)==null?void 0:j.flatMap(p=>p.content.map(i=>e.jsxs(G,{children:[e.jsxs(L,{children:[e.jsx(k,{children:i.date}),e.jsx(k,{children:i.time}),e.jsx(k,{children:i.content})]}),i.type==="과제 추가"||i.type==="과제 공유"?i.isRegistered?e.jsx(w,{status:"등록됨",children:"등록됨"}):e.jsx(w,{onClick:()=>y(e.jsx(D,{assId:i.assId,onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"}):i.type==="친구 요청"?i.check==="CHECK"?e.jsx(w,{status:"등록됨",children:"수락됨"}):e.jsx(w,{onClick:()=>l.mutate({requestId:i.friendRequestId,isAccepted:!0}),children:"수락"}):null," "]},i.createdAt))),o&&e.jsx(H,{count:5})]}),e.jsx(J,{ref:d,children:o&&e.jsx(M,{color:"black"})})]})},U=n.div`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({background:t})=>t};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
`,W=()=>{const{selectedTheme:t}=g(),a=h[t][1];return e.jsxs(U,{background:a,children:[e.jsx(z,{})," "]})},$=n.div`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({background:t})=>t};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
`,X=n.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  margin-top: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Y=n.div`
  display: flex;
  gap: 100px;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`,v=n.div`
  min-width: 100px;
  text-align: center;
`,Z=n.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,_=n.div`
  text-align: center;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: gray;
  margin-top: 20px;
`,ee=()=>{const{selectedTheme:t}=g(),a=h[t][1],{data:c,isPending:f,isFetching:o,hasNextPage:r,fetchNextPage:s}=N("/api/activity/assignment/notify",5),{ref:d,inView:m}=A({threshold:0}),y=V(m,300);C.useEffect(()=>{y&&r&&!o&&s()},[y,r,o,s]);const b=C.useMemo(()=>{var l;return((l=c==null?void 0:c.pages)==null?void 0:l.flatMap(j=>j.content.filter(p=>p.type==="과제 시간 알림")))||[]},[c]);return f?e.jsx($,{background:a,children:e.jsx(P,{count:3})}):e.jsxs(e.Fragment,{children:[e.jsxs($,{background:a,children:[b.length===0?e.jsx(_,{children:"과제 알림 항목이 없습니다."}):b.map(l=>e.jsx(X,{children:e.jsxs(Y,{children:[e.jsx(v,{children:l.date}),e.jsx(v,{children:l.time}),e.jsx(v,{children:l.content})]})},l.createdAt)),o&&e.jsx(P,{count:3})]}),e.jsx(Z,{ref:d,children:o&&e.jsx(M,{color:"black"})})]})},te=n.div`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({background:t})=>t};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`,ne=n.div`
  align-self: center;
  text-align: center;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: gray;
  margin-top: 20px;
`,oe=()=>{const{selectedTheme:t}=g(),a=h[t][1];return e.jsx(te,{background:a,children:e.jsx(ne,{children:"기타 항목이 없습니다."})})},re=n.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  margin-top: 70px;
  margin-left: 79px;
`,se=n.div`
  font-size: 28px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  color: black;
`,ie=n.div`
  display: flex;
  gap: 10px;
`,ae=n.button`
  height: 38px;
  width: 135px;
  padding: 8px 8px;
  background-color: ${t=>t.active?t.background:"#E8E8E8"};
  border-radius: 50px;
  border: none;
  color: ${t=>t.active?"white":"#666666"};
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: ${({background:t})=>t};
    color: white;
  }
`,me=()=>{const[t,x]=C.useState("전체"),{selectedTheme:a}=g(),f=h[a][0],o=()=>{switch(t){case"친구소식":return e.jsx(W,{});case"과제알림":return e.jsx(ee,{});case"기타":return e.jsx(oe,{});default:return e.jsx(O,{})}};return e.jsxs(re,{children:[e.jsx(se,{children:"히스토리"}),e.jsx(ie,{children:["전체","친구소식","과제알림","기타"].map(r=>e.jsx(ae,{background:f,active:t===r,onClick:()=>x(r),children:r},r))}),o()]})};export{me as default};
