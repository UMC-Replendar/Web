import{a as u,t as j,r as w,j as e,d as t}from"./index-DCLxYTjz.js";import{t as b}from"./Task-C-RTHX55.js";import{u as k,a as v,C as y}from"./useGetInfiniteData-DUTu3KS2.js";import{S as l}from"./skeleton-2MwILm4q.js";import"./useBaseQuery-CLL0ZrG3.js";const T=t.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,C=t.div`
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
`,S=t.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`,P=t.img`
  width: 30px;
  height: 30px;
`,I=t.div`
  font-weight: bold;
  font-size: 28px;
  font-family: Pretendard, sans-serif;
`,z=t.div`
  display: grid;
  margin-right: 10px;
  grid-template-columns: 20% 20% 60%;
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: bold;
  padding: 20px;
  color: black;
`,D=t.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`,E=t.div`
  margin-right: 10px;
  display: grid;
  grid-template-columns: 20% 20% 60%;
  text-align: center;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
  padding: 10px 0;
`,_=t.div`
  color: ${({isValid:i})=>i?"#3982E2":"#666666"};
  font-size: 19px;
  font-weight: 500;
`,$=t.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,F=()=>{var d;const{data:i,isPending:x,isFetching:s,hasNextPage:o,fetchNextPage:r}=k("/api/assignment/store",1),{ref:p,inView:a}=v({threshold:0}),{selectedTheme:g}=u(),h=j[g][1];return w.useEffect(()=>{a&&o&&!s&&r()},[a,o,s,r]),x?e.jsx(l,{count:5}):e.jsxs(T,{children:[e.jsxs(S,{children:[e.jsx(P,{src:b,alt:"Task Icon"}),e.jsx(I,{children:"보관한 과제"})]}),e.jsxs(C,{background:h,children:[e.jsxs(z,{children:[e.jsx("div",{children:"마감일"}),e.jsx("div",{children:"유효 여부"}),e.jsx("div",{children:"과제명"})]}),(d=i==null?void 0:i.pages)==null?void 0:d.flatMap(f=>f.content.map(n=>{console.log("과제 데이터:",n);const m=new Date(`${n.due_date} ${n.due_time}`),c=new Date<m;return e.jsx(D,{children:e.jsxs(E,{children:[e.jsxs("div",{children:[n.due_date," ",n.due_time]}),e.jsx(_,{isValid:c,children:c?"유효":"만료됨"}),e.jsx("div",{children:n.title})]})},n.createdAt)})),s&&e.jsx(l,{count:5}),e.jsx($,{ref:p,children:s&&e.jsx(y,{color:"black"})})]})]})};export{F as default};
