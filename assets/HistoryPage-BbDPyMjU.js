import{r as x,j as t,d as n,a as l}from"./index-BZGV8Fg6.js";import{a as p}from"./useQuery-BvRKwqBt.js";import{B as f}from"./blueButton-D_mLbESf.js";const h=n.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  margin-top: 70px;
  margin-left: 79px;
`,u=n.div`
  font-size: 28px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  color: black;
`,g=n.div`
  display: flex;
  gap: 10px;
`,y=n.button`
  height: 38px;
  width: 135px;
  padding: 8px 8px;
  background-color: ${i=>i.active?"green":"#E8E8E8"};
  border-radius: 50px;
  border: none;
  color: ${i=>i.active?"white":"#666666"};
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: white;
  }
`,v=n.div`
  padding: 34.5px 109px 67.5px 37px;
  background: #fcf6f5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
`,j=n.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
`,m=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,b=n.div`
  display: flex;
  gap: 100px;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`,E=()=>{const[i,a]=x.useState("전체"),o=(()=>{switch(i){case"친구소식":return"/api/activity/friend";case"과제알림":return"/api/activity/assignment/notify";case"기타":return"/api/activity";default:return"/api/activity"}})(),{data:s,isLoading:c,isError:d}=p({queryKey:["activity",i],queryFn:async()=>{var r;const e=await l.get(o,{params:{page:1,size:5,sort:"CreatedAt"}});return console.log(`${i} API Response:`,e.data),i==="전체"?e.data.content||[]:((r=e.data.result)==null?void 0:r.content)||[]},staleTime:1e3*60*5,refetchOnWindowFocus:!1});return c?t.jsx("div",{children:"Loading..."}):d?t.jsx("div",{children:"데이터를 불러오는 중 오류 발생!"}):t.jsxs(h,{children:[t.jsx(u,{children:"히스토리"}),t.jsx(g,{children:["전체","친구소식","과제알림","기타"].map(e=>t.jsx(y,{active:i===e,onClick:()=>a(e),children:e},e))}),t.jsx(v,{children:s.length>0?s.map((e,r)=>t.jsx(j,{children:t.jsxs(m,{children:[t.jsxs(b,{children:[t.jsx("div",{children:e.date}),t.jsx("div",{children:e.time}),t.jsx("div",{children:e.content})]}),t.jsx(f,{status:e.check?"등록됨":"내 일정에 등록",children:e.check?"등록됨":"내 일정에 등록"})]})},r)):t.jsx("div",{children:"기록이 없습니다."})})]})};export{E as default};
