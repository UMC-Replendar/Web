import{g as I,u as H,S as h,e as E,a as g,t as m,b as A,c as M,r as v,j as e,d as n}from"./index-CFPyf70Z.js";import{B as b}from"./blueButton-BAhRILi5.js";import{b as T,a as P,C as $,u as B}from"./useGetInfiniteData-BfthvyBA.js";import{a as F,A as N}from"./AddTaskModal-fGec3Mzu.js";import{r as S}from"./commuApi-BHfzj9pn.js";import{a as q}from"./friendNewsRender-D1CVSCc3.js";import"./useBaseQuery-D1s1blM3.js";function R(t,l=10){const{token:a}=I(),c=H();return T({queryFn:async({pageParam:r=1})=>{var o;if(!a){h.fire({icon:"info",text:"로그인이 필요합니다",showConfirmButton:!1,timer:2e3}).then(()=>{c("/")});return}try{const{data:s}=await E.get(`${t}?page=${r}&size=${l}`);return s}catch(s){if(s.response){const d=((o=s.response.data)==null?void 0:o.error)||`API 오류: ${s.response.status}`;console.error("API 실패 메시지:",d),h.fire({icon:"error",text:d,showConfirmButton:!1,timer:2e3})}else if(s instanceof Error){const d=s.message||"Network/API Error";console.error("네트워크 오류:",d),h.fire({icon:"error",title:"네트워크 오류",text:d,showConfirmButton:!1,timer:2e3})}else console.error("예상치 못한 오류:",s),h.fire({icon:"error",title:"오류",text:"예상치 못한 오류가 발생했습니다.",showConfirmButton:!1,timer:2e3});return[]}},queryKey:[t,l],initialPageParam:1,getNextPageParam:r=>{var o;if(!(!r||r.last))return(((o=r.pageable)==null?void 0:o.pageNumber)??0)+2}})}const D=n.div`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({background:t})=>t};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
`,z=n.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  margin-top: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,U=n.div`
  display: flex;
  gap: 50px;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`,w=n.div`
  min-width: 100px;
  text-align: center;
`,K=n.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,Q=()=>{var k;const{selectedTheme:t}=g(),a=m[t][1],{data:c,isPending:p,isFetching:r,hasNextPage:o,fetchNextPage:s}=R("/api/activity",5),{ref:d,inView:f}=P({threshold:0}),{openModal:y}=A(),j=M(),x=F({mutationFn:({requestId:u,isAccepted:i})=>S({requestId:u,isAccepted:i}),onSuccess:()=>{j.invalidateQueries({queryKey:["/api/activity/friend"]}),h.fire({icon:"success",text:"친구 요청을 수락했습니다",timer:2e3,showConfirmButton:!1})},onError:u=>{h.fire({icon:"error",text:"친구 수락에 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(u)}});return v.useEffect(()=>{f&&o&&!r&&s()},[f,o,r,s]),p?(console.log(),e.jsx("div",{children:"스켈레톤 UI (로딩 중...)"})):e.jsxs(e.Fragment,{children:[e.jsxs(D,{background:a,children:[(k=c==null?void 0:c.pages)==null?void 0:k.flatMap(u=>u.content.map(i=>e.jsxs(z,{children:[e.jsxs(U,{children:[e.jsx(w,{children:i.date}),e.jsx(w,{children:i.time}),e.jsx(w,{children:i.content})]}),i.type==="과제 추가"||i.type==="과제 공유"?i.isRegistered?e.jsx(b,{status:"등록됨",children:"등록됨"}):e.jsx(b,{onClick:()=>y(e.jsx(N,{assId:i.assId,onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"}):i.type==="친구 요청"?i.check==="CHECK"?e.jsx(b,{status:"등록됨",children:"수락됨"}):e.jsx(b,{onClick:()=>x.mutate({requestId:i.friendRequestId,isAccepted:!0}),children:"수락"}):null," "]},i.createdAt))),r&&e.jsx("div",{children:"스켈레톤 UI (추가 로딩 중...)"})]}),e.jsx(K,{ref:d,children:r&&e.jsx($,{color:"black"})})]})},V=n.div`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({background:t})=>t};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
`,G=()=>{const{selectedTheme:t}=g(),a=m[t][1];return e.jsxs(V,{background:a,children:[e.jsx(q,{})," "]})},L=n.div`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({background:t})=>t};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
`,J=n.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  margin-top: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,O=n.div`
  display: flex;
  gap: 50px;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`,C=n.div`
  min-width: 100px;
  text-align: center;
`,W=n.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,X=()=>{var y;const{selectedTheme:t}=g(),a=m[t][1],{data:c,isPending:p,isFetching:r,hasNextPage:o,fetchNextPage:s}=B("/api/activity/assignment/notify",5),{ref:d,inView:f}=P({threshold:0});return v.useEffect(()=>{f&&o&&!r&&s()},[f,o,r,s]),p?e.jsx("div",{children:"스켈레톤 UI (로딩 중...)"}):e.jsxs(e.Fragment,{children:[e.jsxs(L,{background:a,children:[(y=c==null?void 0:c.pages)==null?void 0:y.flatMap(j=>j.content.filter(x=>x.type==="과제 시간 알림").map(x=>e.jsx(J,{children:e.jsxs(O,{children:[e.jsx(C,{children:x.date}),e.jsx(C,{children:x.time}),e.jsx(C,{children:x.content})]})},x.createdAt))),r&&e.jsx("div",{children:"스켈레톤 UI (추가 로딩 중...)"})]}),e.jsx(W,{ref:d,children:r&&e.jsx($,{color:"black"})})]})},Y=n.div`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({background:t})=>t};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`,Z=n.div`
  font-size: 20px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: #666;
  text-align: center;
`,_=()=>{const{selectedTheme:t}=g(),a=m[t][1];return e.jsx(Y,{background:a,children:e.jsx(Z,{children:"기타 항목이 없습니다."})})},ee=n.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  margin-top: 70px;
  margin-left: 79px;
`,te=n.div`
  font-size: 28px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  color: black;
`,re=n.div`
  display: flex;
  gap: 10px;
`,ne=n.button`
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
`,xe=()=>{const[t,l]=v.useState("전체"),{selectedTheme:a}=g(),p=m[a][0],r=()=>{switch(t){case"친구소식":return e.jsx(G,{});case"과제알림":return e.jsx(X,{});case"기타":return e.jsx(_,{});default:return e.jsx(Q,{})}};return e.jsxs(ee,{children:[e.jsx(te,{children:"히스토리"}),e.jsx(re,{children:["전체","친구소식","과제알림","기타"].map(o=>e.jsx(ne,{background:p,active:t===o,onClick:()=>l(o),children:o},o))}),r()]})};export{xe as default};
