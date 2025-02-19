import{a as u,t as w,r as j,j as e,d as t}from"./index-CFPyf70Z.js";import{B as b}from"./blueButton-BAhRILi5.js";import{u as v,a as k,C as y}from"./useGetInfiniteData-BfthvyBA.js";import{t as I}from"./Task-C-RTHX55.js";import"./useBaseQuery-D1s1blM3.js";const T=t.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,B=t.div`
  background-color: ${({background:s})=>s};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 34.5px 109px 30.5px 37px;
`,C=t.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,P=t.img`
  width: 30px;
  height: 30px;
`,D=t.div`
  font-weight: bold;
  font-size: 28px;
  font-family: Pretendard, sans-serif;
`,E=t.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
`,S=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,_=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`,o=t.div`
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 26.6px;
  word-wrap: break-word;
  text-align: left;

  &:nth-child(1) {
    flex-basis: 10%;
    text-align: center;
  }
  &:nth-child(2) {
    flex-basis: 5%;
    text-align: center;
  }
  &:nth-child(3) {
    flex-basis: 70%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,z=t.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,L=()=>{var l;const{data:s,isPending:x,isFetching:n,hasNextPage:a,fetchNextPage:r}=v("/api/assignment/favorite",5),{ref:p,inView:d}=k({threshold:0}),{selectedTheme:h}=u(),f=w[h][1];return j.useEffect(()=>{d&&a&&!n&&r()},[d,a,n,r]),x?e.jsx("div",{children:"스켈레톤 UI (로딩 중...)"}):e.jsxs(T,{children:[e.jsxs(C,{children:[e.jsx(P,{src:I,alt:"Task Icon"}),e.jsx(D,{children:"중요한 과제"})]}),e.jsx(B,{background:f,children:(l=s==null?void 0:s.pages)==null?void 0:l.flatMap(g=>g.content.map((i,m)=>{console.log("과제 데이터:",i);const c=i.completion_time?"완료":"미완료";return e.jsx(E,{children:e.jsxs(S,{children:[e.jsxs(_,{children:[e.jsx(o,{children:i.due_date||"날짜 미정"}),e.jsx(o,{children:i.due_time||"시간 미정"}),e.jsx(o,{children:i.title||"과제 없음"})]}),e.jsx(b,{status:c,children:c})]})},i.dueDate||m)}))}),n&&e.jsx("div",{children:"스켈레톤 UI (추가 로딩 중...)"}),e.jsx(z,{ref:p,children:n&&e.jsx(y,{color:"black"})})]})};export{L as default};
