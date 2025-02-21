import{j as e,d as n,m as f}from"./index-DCLxYTjz.js";const l=f`
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
`,d=n.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`,o=n.div`
  display: flex;
  gap: ${({$gap:s})=>s||"100px"};
  height: 67px;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 0px 30px;
  margin-bottom: 1px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  animation: ${l} 1.5s infinite;
  display: flex;
  align-items: center;
  justify-content: ${({$justifyContent:s})=>s||"flex-start"};

  & > div {
    background-color: #e0e0e0;
  }
`,k=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,w=n.div`
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
  animation: ${l} 1.5s infinite;

  align-items: center;
`,m=n.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: #e0e0e0;
`,u=n.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e0e0e0;
`,t=n.div`
  width: ${s=>s.width||"100px"};
  height: ${s=>s.height||"20px"};
  border-radius: 5px;
  background-color: #e0e0e0;
`,a=n.div`
  width: 106px;
  height: 26px;
  border-radius: 50px;
  margin-left: ${({$marginLeft:s})=>s||"auto"};
  display: flex;
  justify-content: center;
  align-items: center;
`,y=()=>e.jsx(d,{children:e.jsxs(w,{children:[e.jsx(m,{}),e.jsxs(k,{children:[e.jsx(t,{width:"70px"}),e.jsx(t,{width:"50px"}),e.jsx(t,{width:"400px"})]})]})}),S=({count:s=5})=>e.jsx(d,{children:[...Array(s)].map((x,i)=>e.jsxs(o,{$gap:"60px",children:[e.jsx(u,{}),e.jsx(t,{width:"100px"}),e.jsx(t,{width:"150px"})]},i))}),v=({count:s=5})=>e.jsx(d,{children:[...Array(s)].map((x,i)=>e.jsx(o,{$gap:"60px",children:e.jsx(t,{width:"150px",height:"40px"})},i))}),T=({count:s=5})=>e.jsx(d,{children:[...Array(s)].map((x,i)=>e.jsxs(o,{$justifyContent:"space-around",children:[e.jsx(t,{width:"100px"}),e.jsx(t,{width:"100px"}),e.jsx(t,{width:"250px"})]},i))}),$=({count:s=5})=>e.jsx(d,{children:[...Array(s)].map((x,i)=>e.jsxs(o,{$justifyContent:"space-around",children:[e.jsx(t,{width:"100px"}),e.jsx(t,{width:"100px"}),e.jsx(t,{width:"100px"}),e.jsx(t,{width:"200px"}),e.jsx(t,{width:"200px"}),e.jsx(t,{width:"150px"}),e.jsx(a,{$marginLeft:"0px"})]},i))}),A=({count:s=5})=>e.jsx(d,{children:[...Array(s)].map((x,i)=>e.jsxs(o,{children:[e.jsx(t,{width:"100px"}),e.jsx(t,{width:"400px"}),e.jsx(a,{})]},i))}),_=({count:s=3})=>e.jsx(d,{children:[...Array(s)].map((x,i)=>e.jsxs(o,{children:[e.jsx(t,{width:"100px"}),e.jsx(t,{width:"100px"}),e.jsx(t,{width:"300px"})]},i))}),C=({count:s=3})=>e.jsx(d,{children:[...Array(s)].map((x,i)=>e.jsxs(o,{children:[e.jsx(t,{width:"100px"}),e.jsx(t,{width:"100px"}),e.jsx(t,{width:"300px"}),e.jsx(a,{})]},i))}),L=({count:s=5})=>e.jsx(p,{children:[...Array(s)].map((x,i)=>e.jsxs(o,{children:[e.jsx(t,{width:"20%"}),e.jsx(t,{width:"10%"}),e.jsx(t,{width:"60%"})]},i))}),I=({count:s=5})=>e.jsx(p,{children:[...Array(s)].map((x,i)=>e.jsx(c,{children:e.jsxs(h,{children:[e.jsx(r,{width:"150px"}),e.jsx(r,{width:"80px"}),e.jsx(r,{width:"300px"}),e.jsx(j,{children:e.jsx(g,{})})]})},i))}),B=({count:s=5})=>e.jsx(p,{children:[...Array(s)].map((x,i)=>e.jsx(c,{children:e.jsxs(h,{children:[e.jsx(r,{width:"20%"}),e.jsx(r,{width:"60%"}),e.jsx(j,{children:e.jsx(g,{})})]})},i))}),p=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,c=n.div`
  background: #f0f0f0;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0% {
      background-color: #f0f0f0;
    }
    50% {
      background-color: #e0e0e0;
    }
    100% {
      background-color: #f0f0f0;
    }
  }
`,h=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 125px;
`,r=n.div`
  width: ${({width:s})=>s};
  height: 20px;
  background: #e0e0e0;
  border-radius: 5px;
`,j=n.div`
  flex-grow: 1; /* 버튼이 자동으로 오른쪽으로 밀리도록 설정 */
  display: flex;
  justify-content: flex-end;
`,g=n.div`
  width: 100px;
  height: 30px;
  background: #e0e0e0;
  border-radius: 20px;
`;export{I as C,y as F,v as G,_ as H,T as L,A as N,L as S,$ as T,S as a,C as b,B as c};
