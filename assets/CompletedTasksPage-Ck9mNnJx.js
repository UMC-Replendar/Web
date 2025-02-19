import{a as I,t as C,r as D,j as e,d as t}from"./index-CFPyf70Z.js";import{B as M}from"./blueButton-BAhRILi5.js";import{u as B,a as P,C as E}from"./useGetInfiniteData-BfthvyBA.js";import{t as _}from"./Task-C-RTHX55.js";import"./useBaseQuery-D1s1blM3.js";const z=t.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,A=t.img`
  width: 30px;
  height: 30px;
`,S=t.div`
  background-color: ${({background:i})=>i};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 34.5px 109px 30.5px 37px;
`,F=t.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,N=t.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
`,U=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,V=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`,W=t.div`
  font-weight: bold;
  font-size: 28px;
  font-family: Pretendard, sans-serif;
`,r=t.div`
  color: black;
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
`,G=t.div`
  width: 100%;
  text-align: right;
  color: ${({isEarly:i})=>i?"#4CAF50":"#EB8A8A"};
  font-size: 19px;
  font-weight: 500;
  margin-top: 5px;
`,L=t.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,Q=()=>{var x;const{selectedTheme:i}=I(),g=C[i][1],{data:a,isPending:m,isFetching:n,hasNextPage:d,fetchNextPage:c}=B("/api/assignment/complete",5),{ref:u,inView:l}=P({threshold:0});return D.useEffect(()=>{l&&d&&!n&&c()},[l,d,n,c]),m?e.jsx("div",{children:"스켈레톤 UI (로딩 중...)"}):e.jsxs(z,{children:[e.jsxs(F,{children:[e.jsx(A,{src:_,alt:"Task Icon"}),e.jsx(W,{children:"완료한 과제"})]}),e.jsx(S,{background:g,children:(x=a==null?void 0:a.pages)==null?void 0:x.flatMap(w=>w.content.map(s=>{console.log("과제 데이터:",s);const b=new Date(`${s.due_date} ${s.due_time}`),j=new Date(s.completion_time),p=b.getTime()-j.getTime(),h=p>0,o=Math.abs(p)/1e3,v=Math.floor(o/86400),T=Math.floor(o%86400/3600),k=Math.floor(o%3600/60),y=Math.floor(o%60),f=`${v}일 ${T}시간 ${k}분 ${y}초`,$=`과제 제출이 ${h?`${f} 빨랐습니다`:`${f} 늦었습니다`}`;return e.jsxs(N,{children:[e.jsxs(U,{children:[e.jsxs(V,{children:[e.jsx(r,{children:s.due_date||"미정"}),e.jsx(r,{children:s.due_time||"미정"}),e.jsx(r,{children:s.title||"과제 없음"})]}),e.jsx(M,{status:"완료",children:"완료"})]}),e.jsx(G,{isEarly:h,children:$})]},s.completionTime)}))}),n&&e.jsx("div",{children:"스켈레톤 UI (추가 로딩 중...)"}),e.jsx(L,{ref:u,children:n&&e.jsx(E,{color:"black"})})]})};export{Q as default};
