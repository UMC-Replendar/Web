import{a as m,t as u,r as w,j as e,d as t}from"./index-HSlvYZEY.js";import{B as j}from"./blueButton-CEU8-eJw.js";import{t as b}from"./Task-C-RTHX55.js";import{u as k,a as v,C as y}from"./useGetInfiniteData-CpjWvf4I.js";import{c as l}from"./skeleton-B5_-emf1.js";import"./useBaseQuery-Dcs-aCZV.js";const T=t.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,C=t.div`
  background-color: ${({background:s})=>s};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 34.5px 109px 30.5px 37px;
`,B=t.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,I=t.img`
  width: 30px;
  height: 30px;
`,P=t.div`
  font-weight: bold;
  font-size: 28px;
  font-family: Pretendard, sans-serif;
`,N=t.div`
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
`,S=t.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,x=t.div`
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
`,R=()=>{var d;const{data:s,isPending:c,isFetching:i,hasNextPage:o,fetchNextPage:a}=k("/api/assignment/unfinished",5),{ref:p,inView:r}=v({threshold:0}),{selectedTheme:h}=m(),f=u[h][1];return w.useEffect(()=>{r&&o&&!i&&a()},[r,o,i,a]),c?e.jsx(l,{count:5}):e.jsxs(T,{children:[e.jsxs(B,{children:[e.jsx(I,{src:b,alt:"Task Icon"}),e.jsx(P,{children:"미완료 과제"})]}),e.jsxs(C,{background:f,children:[(d=s==null?void 0:s.pages)==null?void 0:d.flatMap(g=>g.content.map(n=>(console.log("과제 데이터:",n),e.jsx(N,{children:e.jsxs(E,{children:[e.jsxs(D,{children:[e.jsx(x,{children:n.due_date}),e.jsx(x,{children:n.title})]}),e.jsx(j,{status:"미완료",children:"미완료"})]})},n.dueDate)))),i&&e.jsx(l,{count:5}),e.jsx(S,{ref:p,children:i&&e.jsx(y,{color:"black"})})]})]})};export{R as default};
