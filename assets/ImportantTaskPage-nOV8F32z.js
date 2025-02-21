import{a as w,t as j,r as b,j as e,d as t}from"./index-HSlvYZEY.js";import{B as k}from"./blueButton-CEU8-eJw.js";import{u as v,a as y,C as T}from"./useGetInfiniteData-CpjWvf4I.js";import{t as C}from"./Task-C-RTHX55.js";import{C as x}from"./skeleton-B5_-emf1.js";import"./useBaseQuery-Dcs-aCZV.js";const I=t.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,B=t.div`
  background-color: ${({background:i})=>i};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 34.5px 109px 30.5px 37px;
`,P=t.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,S=t.img`
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
`,_=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,z=t.div`
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
`,N=t.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,$=()=>{var l;const{data:i,isPending:p,isFetching:n,hasNextPage:a,fetchNextPage:r}=v("/api/assignment/favorite",5),{ref:h,inView:d}=y({threshold:0}),{selectedTheme:f}=w(),g=j[f][1];return b.useEffect(()=>{d&&a&&!n&&r()},[d,a,n,r]),p?e.jsx(x,{count:5}):e.jsxs(I,{children:[e.jsxs(P,{children:[e.jsx(S,{src:C,alt:"Task Icon"}),e.jsx(D,{children:"중요한 과제"})]}),e.jsxs(B,{background:g,children:[(l=i==null?void 0:i.pages)==null?void 0:l.flatMap(m=>m.content.map((s,u)=>{console.log("과제 데이터:",s);const c=s.completion_time?"완료":"미완료";return e.jsx(E,{children:e.jsxs(_,{children:[e.jsxs(z,{children:[e.jsx(o,{children:s.due_date||"날짜 미정"}),e.jsx(o,{children:s.due_time||"시간 미정"}),e.jsx(o,{children:s.title||"과제 없음"})]}),e.jsx(k,{status:c,children:c})]})},s.dueDate||u)})),n&&e.jsx(x,{count:5}),e.jsx(N,{ref:h,children:n&&e.jsx(T,{color:"black"})})]})]})};export{$ as default};
