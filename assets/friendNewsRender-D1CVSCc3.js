import{j as e,d as n,m as v,b as S,c as C,S as u,r as $}from"./index-CFPyf70Z.js";import{B as c}from"./blueButton-BAhRILi5.js";import{u as I,a as A,C as R}from"./useGetInfiniteData-BfthvyBA.js";import{a as F,A as L}from"./AddTaskModal-fGec3Mzu.js";import{r as T}from"./commuApi-BHfzj9pn.js";const j=v`
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
`,d=n.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`,x=n.div`
  display: flex;
  gap: ${({$gap:t})=>t||"100px"};
  height: 67px;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 0px 30px;
  margin-bottom: 1px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  animation: ${j} 1.5s infinite;
  display: flex;
  align-items: center;
  justify-content: ${({$justifyContent:t})=>t||"flex-start"};

  & > div {
    background-color: #e0e0e0;
  }
`,B=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,N=n.div`
  background-color: white;
  border-radius: 20px;
  width: 1400px;
  margin-left: 40px;
  display: flex;
  gap: 40px;
  padding: 20px;
  border: 1px solid rgba(232, 232, 232, 1);
  height: 132px;
  background-color: #f0f0f0;
  animation: ${j} 1.5s infinite;

  align-items: center;
`,q=n.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: #e0e0e0;
`,E=n.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e0e0e0;
`,s=n.div`
  width: ${t=>t.width||"100px"};
  height: ${t=>t.height||"20px"};
  border-radius: 5px;
  background-color: #e0e0e0;
`,m=n.div`
  width: 106px;
  height: 26px;
  border-radius: 50px;
  margin-left: ${({$marginLeft:t})=>t||"auto"};
  display: flex;
  justify-content: center;
  align-items: center;
`,O=()=>e.jsx(d,{children:e.jsxs(N,{children:[e.jsx(q,{}),e.jsxs(B,{children:[e.jsx(s,{width:"70px"}),e.jsx(s,{width:"50px"}),e.jsx(s,{width:"400px"})]})]})}),J=({count:t=5})=>e.jsx(d,{children:[...Array(t)].map((o,i)=>e.jsxs(x,{$gap:"60px",children:[e.jsx(E,{}),e.jsx(s,{width:"100px"}),e.jsx(s,{width:"150px"})]},i))}),U=({count:t=5})=>e.jsx(d,{children:[...Array(t)].map((o,i)=>e.jsx(x,{$gap:"60px",children:e.jsx(s,{width:"150px",height:"40px"})},i))}),W=({count:t=5})=>e.jsx(d,{children:[...Array(t)].map((o,i)=>e.jsxs(x,{$justifyContent:"space-around",children:[e.jsx(s,{width:"100px"}),e.jsx(s,{width:"100px"}),e.jsx(s,{width:"250px"})]},i))}),X=({count:t=5})=>e.jsx(d,{children:[...Array(t)].map((o,i)=>e.jsxs(x,{$justifyContent:"space-around",children:[e.jsx(s,{width:"100px"}),e.jsx(s,{width:"100px"}),e.jsx(s,{width:"100px"}),e.jsx(s,{width:"200px"}),e.jsx(s,{width:"200px"}),e.jsx(s,{width:"150px"}),e.jsx(m,{$marginLeft:"0px"})]},i))}),g=({count:t=5})=>e.jsx(d,{children:[...Array(t)].map((o,i)=>e.jsxs(x,{children:[e.jsx(s,{width:"100px"}),e.jsx(s,{width:"400px"}),e.jsx(m,{})]},i))}),M=n.div`
  display: flex;
  width: 100%;
  font-size: 19px;
  padding: 0px 20px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`,P=n.div`
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  height: 67px;
`,_=n.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: 67px;
`,D=n.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
`,G=n.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,Y=()=>{var f;const{data:t,isPending:o,isFetching:i,hasNextPage:l,fetchNextPage:p}=I("/api/activity/friend",5),{ref:w,inView:h}=A({threshold:0,triggerOnce:!1}),{openModal:k}=S(),y=C(),b=F({mutationFn:({requestId:a,isAccepted:r})=>T({requestId:a,isAccepted:r}),onSuccess:()=>{y.invalidateQueries({queryKey:["/api/activity/friend"]}),u.fire({icon:"success",text:"친구 요청을 수락했습니다",timer:2e3,showConfirmButton:!1})},onError:a=>{u.fire({icon:"error",text:"친구 수락에 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(a)}});return $.useEffect(()=>{h&&!i&&l&&p()},[i,l,p,h]),o?e.jsx(g,{count:5}):e.jsxs("div",{children:[(f=t==null?void 0:t.pages)==null?void 0:f.map(a=>a.content.map(r=>e.jsxs(M,{children:[e.jsx(P,{children:r.timeStamp}),e.jsx(_,{children:r.content}),e.jsx(D,{children:r.type==="과제 활동 로그"?r.isRegistered?e.jsx(c,{status:"등록됨",children:"등록됨"}):e.jsx(c,{onClick:()=>k(e.jsx(L,{assId:r.assId,onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"}):r.type==="친구 요청"?r.check==="CHECK"?e.jsx(c,{status:"등록됨",children:"수락됨"}):e.jsx(c,{onClick:()=>b.mutate({requestId:r.friendRequestId,isAccepted:!0}),children:"수락"}):null})]},`${r.assId}-${r.createdAt}`))),i&&e.jsx(g,{count:5}),e.jsx(G,{ref:w,className:"scroll",children:i&&e.jsx(R,{color:"black"})})]})};export{O as F,U as G,W as L,g as N,X as T,Y as a,J as b};
