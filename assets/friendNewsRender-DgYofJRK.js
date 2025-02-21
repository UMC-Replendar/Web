import{b as j,c as y,S as x,r as w,j as e,d as i}from"./index-DCLxYTjz.js";import{B as r}from"./blueButton-iv1k7oEB.js";import{u as v,a as C,C as b}from"./useGetInfiniteData-DUTu3KS2.js";import{a as k,A as I}from"./AddTaskModal-Dt7kRQsp.js";import{N as p}from"./skeleton-2MwILm4q.js";import{r as F}from"./commuApi-BRQK-Xc5.js";const R=i.div`
  display: flex;
  width: 100%;
  font-size: 19px;
  padding: 0px 20px;
  padding-right: 30px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`,S=i.div`
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  height: 67px;
`,A=i.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 120%;
  height: 67px;
`,N=i.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
`,q=i.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,K=()=>{var l;const{data:o,isPending:u,isFetching:n,hasNextPage:a,fetchNextPage:d}=v("/api/activity/friend",5),{ref:f,inView:c}=C({threshold:0,triggerOnce:!1}),{openModal:h}=j(),g=y(),m=k({mutationFn:({requestId:s,isAccepted:t})=>F({requestId:s,isAccepted:t}),onSuccess:()=>{g.invalidateQueries({queryKey:["/api/activity/friend"]}),x.fire({icon:"success",text:"친구 요청을 수락했습니다",timer:2e3,showConfirmButton:!1})},onError:s=>{x.fire({icon:"error",text:"친구 수락에 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(s)}});return w.useEffect(()=>{c&&!n&&a&&d()},[n,a,d,c]),u?e.jsx(p,{count:5}):e.jsxs("div",{children:[(l=o==null?void 0:o.pages)==null?void 0:l.map(s=>s.content.map(t=>e.jsxs(R,{children:[e.jsx(S,{children:t.timeStamp}),e.jsx(A,{children:t.content}),e.jsx(N,{children:t.type==="과제 활동 로그"?t.isRegistered?e.jsx(r,{status:"등록됨",children:"등록됨"}):e.jsx(r,{onClick:()=>h(e.jsx(I,{assId:t.assId,onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"}):t.type==="친구 요청"?t.check==="CHECK"?e.jsx(r,{status:"등록됨",children:"수락됨"}):e.jsx(r,{onClick:()=>m.mutate({requestId:t.friendRequestId,isAccepted:!0}),children:"수락"}):null})]},`${t.assId}-${t.createdAt}`))),n&&e.jsx(p,{count:5}),e.jsx(q,{ref:f,className:"scroll",children:n&&e.jsx(b,{color:"black"})})]})};export{K as F};
