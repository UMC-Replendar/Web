import{a as u,t as j,r as w,j as e,d as t}from"./index-DjNPCOSe.js";import{t as v}from"./Task-C-RTHX55.js";import{u as b,a as k,C as y}from"./useGetInfiniteData-BmHvwHC2.js";import"./useBaseQuery-BgPE4bNU.js";const C=t.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,I=t.div`
  background-color: ${({background:i})=>i};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 34.5px 37px 30.5px 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`,T=t.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`,P=t.img`
  width: 30px;
  height: 30px;
`,z=t.div`
  font-weight: bold;
  font-size: 28px;
  font-family: Pretendard, sans-serif;
`,D=t.div`
  display: grid;
  margin-right: 10px;
  grid-template-columns: 20% 20% 60%;
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: bold;
  padding: 20px;
  color: black;
`,E=t.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`,S=t.div`
  margin-right: 10px;
  display: grid;
  grid-template-columns: 20% 20% 60%;
  text-align: center;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
  padding: 10px 0;
`,B=t.div`
  color: ${({isValid:i})=>i?"#3982E2":"#666666"};
  font-size: 19px;
  font-weight: 500;
`,V=t.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,_=()=>{var a;const{data:i,isPending:l,isFetching:s,hasNextPage:o,fetchNextPage:r}=b("/api/assignment/store",5),{ref:x,inView:d}=k({threshold:0}),{selectedTheme:p}=u(),h=j[p][1];return w.useEffect(()=>{d&&o&&!s&&r()},[d,o,s,r]),l?e.jsx("div",{children:"스켈레톤 UI (로딩 중...)"}):e.jsxs(C,{children:[e.jsxs(T,{children:[e.jsx(P,{src:v,alt:"Task Icon"}),e.jsx(z,{children:"보관한 과제"})]}),e.jsxs(I,{background:h,children:[e.jsxs(D,{children:[e.jsx("div",{children:"마감일"}),e.jsx("div",{children:"유효 여부"}),e.jsx("div",{children:"과제명"})]}),(a=i==null?void 0:i.pages)==null?void 0:a.flatMap(g=>g.content.map(n=>{console.log("과제 데이터:",n);const f=new Date,m=new Date(n.due_date),c=f<m;return e.jsx(E,{children:e.jsxs(S,{children:[e.jsx("div",{children:n.due_date}),e.jsx(B,{isValid:c,children:c?"유효":"만료됨"}),e.jsx("div",{children:n.title})]})},n.createdAt)}))]}),s&&e.jsx("div",{children:"스켈레톤 UI (추가 로딩 중...)"}),e.jsx(V,{ref:x,children:s&&e.jsx(y,{color:"black"})})]})};export{_ as default};
