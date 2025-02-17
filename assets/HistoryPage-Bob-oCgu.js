import{a as x,t as l,j as t,d as s,b as h,r as u}from"./index-DjNPCOSe.js";import{u as g}from"./useQuery-BDhDW2NA.js";import{B as m}from"./blueButton-2D0vbln7.js";import{a as f}from"./friendNewsRender-Cc2TVz3_.js";import"./useBaseQuery-BgPE4bNU.js";import"./useGetInfiniteData-BmHvwHC2.js";import"./AddTaskModal-DmwHUHk-.js";const b=s.div`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({background:e})=>e};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
`,j=s.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`,y=s.div`
  display: flex;
  gap: 50px;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`,d=s.div`
  min-width: 100px;
  text-align: center;
`,v=()=>{const{selectedTheme:e}=x(),r=l[e][1],{data:i,isLoading:a,isError:c}=g({queryKey:["activity","전체"],queryFn:async()=>{const o=await h.get("/api/activity",{params:{page:1,size:15,sort:"CreatedAt"}});return console.log("전체 API Response:",o.data),o.data.content||[]},staleTime:1e3*60*5,refetchOnWindowFocus:!1});return t.jsx(b,{background:r,children:a?t.jsx("div",{children:"Loading..."}):c?t.jsx("div",{children:"데이터를 불러오는 중 오류 발생!"}):i.length>0?i.map((o,p)=>t.jsxs(j,{children:[t.jsxs(y,{children:[t.jsx(d,{children:o.date}),t.jsx(d,{children:o.time}),t.jsx(d,{children:o.content})," "]}),t.jsx(m,{status:o.check?"등록됨":"내 일정에 등록",children:o.check?"등록됨":"내 일정에 등록"})]},p)):t.jsx("div",{children:"기록이 없습니다."})})},w=s.div`
  padding: 34.5px 109px 67.5px 37px;
  background: ${({background:e})=>e};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: calc(100% - 146px);
  display: flex;
  flex-direction: column;
  height: 100%;
`,k=()=>{const{selectedTheme:e}=x(),r=l[e][1];return t.jsxs(w,{background:r,children:[t.jsx(f,{})," "]})},C=()=>t.jsx("div",{children:"HistoryAssignment"}),H=()=>t.jsx("div",{children:"HistoryEtc"}),E=s.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  margin-top: 70px;
  margin-left: 79px;
`,T=s.div`
  font-size: 28px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  color: black;
`,A=s.div`
  display: flex;
  gap: 10px;
`,B=s.button`
  height: 38px;
  width: 135px;
  padding: 8px 8px;
  background-color: ${e=>e.active?e.background:"#E8E8E8"};
  border-radius: 50px;
  border: none;
  color: ${e=>e.active?"white":"#666666"};
  font-size: 16px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: ${({background:e})=>e};
    color: white;
  }
`,I=()=>{const[e,n]=u.useState("전체"),{selectedTheme:r}=x(),a=l[r][0],c=()=>{switch(e){case"친구소식":return t.jsx(k,{});case"과제알림":return t.jsx(C,{});case"기타":return t.jsx(H,{});default:return t.jsx(v,{})}};return t.jsxs(E,{children:[t.jsx(T,{children:"히스토리"}),t.jsx(A,{children:["전체","친구소식","과제알림","기타"].map(o=>t.jsx(B,{background:a,active:e===o,onClick:()=>n(o),children:o},o))}),c()]})};export{I as default};
