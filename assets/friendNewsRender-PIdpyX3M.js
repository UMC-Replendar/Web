import{b as o,c as w,j as e,d as a,m as C,g as F,f as I,S as g,r as $}from"./index-DUVwGiPo.js";import{B as x}from"./blueButton-shXsk35x.js";import{u as R,a as q,C as L}from"./useGetInfiniteData-DGd0ZaHF.js";import{a as P,c as B}from"./AddTaskModal-DqK3oq6T.js";const O=async s=>(await o.post("/api/friends/request",{friendId:s})).data.result,N=async({requestId:s,isAccepted:t})=>{const n=await o.post("/api/friends/request/respond",{requestId:s,isAccepted:t});return w.getState().refreshProfile(),n.data.result},J=async({friendId:s,buddyStatus:t})=>(await o.patch("/api/friends/best-friend",{friendId:s,buddyStatus:t})).data.result,U=async s=>{const t=await o.delete(`/api/friends?friendId=${s}`);return w.getState().refreshProfile(),t.data.result},W=async({friendId:s,note:t})=>(await o.patch("/api/friends/note",{friendId:s,note:t})).data.result,X=async s=>(await o.post("/api/friend-groups",{groupName:s})).data.result,Y=async s=>(await o.delete(`/api/friend-groups/${s}`)).data.result,Z=async({groupId:s,friendshipIds:t})=>(await o.post(`/api/friend-groups/${s}/add-multiple`,{friendshipIds:t})).data.result,ee=async({groupId:s,friendshipId:t})=>(await o.delete(`/api/friend-groups/${s}/remove/${t}`)).data.result,se=async({lectureId:s,title:t,content:n,endDate:l})=>(await o.post("/api/major/lectures",{lectureId:s,title:t,content:n,endDate:l})).data.result,te=async({friendId:s,assignmentIds:t})=>(await o.post("/api/friends/share/assignment",{friendId:s,assignmentIds:t})).data.result,y=C`
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
`,d=a.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`,p=a.div`
  display: flex;
  gap: ${({gap:s})=>s||"100px"};
  height: 67px;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 0px 30px;
  margin-bottom: 1px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  animation: ${y} 1.5s infinite;
  display: flex;
  align-items: center;
  justify-content: ${({justifyContent:s})=>s||"flex-start"};

  & > div {
    background-color: #e0e0e0;
  }
`,T=a.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,D=a.div`
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
  animation: ${y} 1.5s infinite;

  align-items: center;
`,E=a.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: #e0e0e0;
`,G=a.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e0e0e0;
`,r=a.div`
  width: ${s=>s.width||"100px"};
  height: ${s=>s.height||"20px"};
  border-radius: 5px;
  background-color: #e0e0e0;
`,k=a.div`
  width: 106px;
  height: 26px;
  border-radius: 50px;
  margin-left: ${({marginLeft:s})=>s||"auto"};
  display: flex;
  justify-content: center;
  align-items: center;
`,ne=()=>e.jsx(d,{children:e.jsxs(D,{children:[e.jsx(E,{}),e.jsxs(T,{children:[e.jsx(r,{width:"70px"}),e.jsx(r,{width:"50px"}),e.jsx(r,{width:"400px"})]})]})}),re=({count:s=5})=>e.jsx(d,{children:[...Array(s)].map((t,n)=>e.jsxs(p,{gap:"60px",children:[e.jsx(G,{}),e.jsx(r,{width:"100px"}),e.jsx(r,{width:"150px"})]},n))}),ie=({count:s=5})=>e.jsx(d,{children:[...Array(s)].map((t,n)=>e.jsx(p,{gap:"60px",children:e.jsx(r,{width:"150px",height:"40px"})},n))}),ae=({count:s=5})=>e.jsx(d,{children:[...Array(s)].map((t,n)=>e.jsxs(p,{justifyContent:"space-around",children:[e.jsx(r,{width:"100px"}),e.jsx(r,{width:"100px"}),e.jsx(r,{width:"250px"})]},n))}),oe=({count:s=5})=>e.jsx(d,{children:[...Array(s)].map((t,n)=>e.jsxs(p,{justifyContent:"space-around",children:[e.jsx(r,{width:"100px"}),e.jsx(r,{width:"100px"}),e.jsx(r,{width:"100px"}),e.jsx(r,{width:"200px"}),e.jsx(r,{width:"200px"}),e.jsx(r,{width:"150px"}),e.jsx(k,{marginLeft:"0px"})]},n))}),j=({count:s=5})=>e.jsx(d,{children:[...Array(s)].map((t,n)=>e.jsxs(p,{children:[e.jsx(r,{width:"100px"}),e.jsx(r,{width:"400px"}),e.jsx(k,{})]},n))}),M=a.div`
  display: flex;
  gap: 100px;
  width: 100%;
  font-size: 19px;
  margin-bottom: 1px;
  border-radius: 20px;
  padding: 0px 30px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  &:nth-child(5),
  &:nth-child(8) {
  }
`,_=a.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,m=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 67px;
`,K=a.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,de=()=>{var f;const{data:s,isPending:t,isFetching:n,hasNextPage:l,fetchNextPage:u}=R("/api/activity/friend",5),{ref:b,inView:h}=q({threshold:0,triggerOnce:!1}),{openModal:S}=F(),v=I(),A=P({mutationFn:({requestId:c,isAccepted:i})=>N({requestId:c,isAccepted:i}),onSuccess:()=>{v.invalidateQueries({queryKey:["/api/activity/friend"]}),g.fire({icon:"success",text:"친구 요청을 수락했습니다",timer:2e3,showConfirmButton:!1})},onError:c=>{g.fire({icon:"error",text:"친구 수락에 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(c)}});return $.useEffect(()=>{h&&!n&&l&&u()},[n,l,u,h]),t?e.jsx(j,{count:5}):e.jsxs("div",{children:[(f=s==null?void 0:s.pages)==null?void 0:f.map(c=>c.content.map(i=>e.jsxs(M,{children:[e.jsx(m,{children:i.timeStamp}),e.jsx(m,{children:i.content}),e.jsx(_,{children:i.type==="과제"?i.isRegistered?e.jsx(x,{status:"등록됨",children:"등록됨"}):e.jsx(x,{onClick:()=>S(e.jsx(B,{assId:i.assId,onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"}):i.type==="친구요청"?i.check==="CHECK"?e.jsx(x,{status:"등록됨",children:"수락됨"}):e.jsx(x,{onClick:()=>A.mutate({requestId:i.friendRequestId,isAccepted:!0}),children:"수락"}):null})]},`${i.assId}-${i.createdAt}`))),n&&e.jsx(j,{count:5}),e.jsx(K,{ref:b,className:"scroll",children:n&&e.jsx(L,{color:"black"})})]})};export{se as A,ne as F,ie as G,ae as L,j as N,te as S,oe as T,de as a,J as b,re as c,U as d,Z as e,X as f,ee as g,Y as h,W as p,O as s};
