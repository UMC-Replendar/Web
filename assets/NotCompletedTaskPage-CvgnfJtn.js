import{a as g,t as m,r as u,j as e,d as t}from"./index-DUVwGiPo.js";import{B as w}from"./blueButton-shXsk35x.js";import{t as j}from"./Task-C-RTHX55.js";import{u as b,a as v,C as k}from"./useGetInfiniteData-DGd0ZaHF.js";import"./useBaseQuery-DZSUbMf5.js";const y=t.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,T=t.div`
  background-color: ${({background:i})=>i};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 34.5px 109px 30.5px 37px;
`,I=t.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,C=t.img`
  width: 30px;
  height: 30px;
`,B=t.div`
  font-weight: bold;
  font-size: 28px;
  font-family: Pretendard, sans-serif;
`,P=t.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
`,D=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`,E=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,N=t.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,l=t.div`
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 26.6px;
  word-wrap: break-word;
  text-align: left;

  &:nth-child(1) {
    flex-basis: 20%;
    text-align: center;
  }

  &:nth-child(2) {
    flex-basis: 60%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,G=()=>{var d;const{data:i,isPending:x,isFetching:s,hasNextPage:o,fetchNextPage:a}=b("/api/assignment/unfinished",5),{ref:c,inView:r}=v({threshold:0}),{selectedTheme:p}=g(),h=m[p][1];return u.useEffect(()=>{r&&o&&!s&&a()},[r,o,s,a]),x?e.jsx("div",{children:"스켈레톤 UI (로딩 중...)"}):e.jsxs(y,{children:[e.jsxs(I,{children:[e.jsx(C,{src:j,alt:"Task Icon"}),e.jsx(B,{children:"미완료 과제"})]}),e.jsx(T,{background:h,children:(d=i==null?void 0:i.pages)==null?void 0:d.flatMap(f=>f.content.map(n=>(console.log("과제 데이터:",n),e.jsx(P,{children:e.jsxs(E,{children:[e.jsxs(D,{children:[e.jsx(l,{children:n.due_date}),e.jsx(l,{children:n.title})]}),e.jsx(w,{status:"미완료",children:"미완료"})]})},n.dueDate))))}),s&&e.jsx("div",{children:"스켈레톤 UI (추가 로딩 중...)"}),e.jsx(N,{ref:c,children:s&&e.jsx(k,{color:"black"})})]})};export{G as default};
