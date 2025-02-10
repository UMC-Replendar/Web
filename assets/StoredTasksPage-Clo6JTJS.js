import{r,x as j,u as v,j as e,a as w,y,d as s}from"./index-BZGV8Fg6.js";const b=s.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,k=s.div`
  background-color: #fcf6f5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 34.5px 37px 30.5px 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`,S=s.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`,T=s.img`
  width: 30px;
  height: 30px;
`,E=s.div`
  font-weight: bold;
  font-size: 28px;
  font-family: Pretendard, sans-serif;
`,I=s.div`
  display: grid;
  margin-right: 10px;
  grid-template-columns: 20% 20% 60%;
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: bold;
  padding: 20px;
  color: black;
`,P=s.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`,z=s.div`
  margin-right: 10px;
  display: grid;
  grid-template-columns: 20% 20% 60%;
  text-align: center;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
  padding: 10px 0;
`,A=s.div`
  color: ${({isValid:n})=>n?"#3982E2":"#666666"};
  font-size: 19px;
  font-weight: 500;
`,B=()=>{const[n,h]=r.useState([]),[f,l]=r.useState(!0),[x,o]=r.useState(null),{token:p}=j(),u=v();return r.useEffect(()=>{(async()=>{var a,g;if(!p){alert("로그인이 필요합니다."),u("/");return}const d=new URLSearchParams({page:"1",size:"5",sort:"createdAt"}).toString();try{l(!0),o(null);const i=await w.get(`/api/assignment/store?${d}`);console.log("API 응답:",i.data);const m=i.data.result.content.map(c=>({date:c.deadline||"미정",delay:c.isValid?"유효":"만료됨",description:c.title||"과제 없음"}));h(m)}catch(i){y.isAxiosError(i)?o(((g=(a=i.response)==null?void 0:a.data)==null?void 0:g.message)||"서버 오류 발생"):o("예기치 않은 오류가 발생했습니다.")}finally{l(!1)}})()},[p]),f?e.jsx("p",{children:"로딩 중..."}):x?e.jsxs("p",{children:["오류 발생: ",x]}):e.jsxs(b,{children:[e.jsxs(S,{children:[e.jsx(T,{src:"src/assets/images/InfoIcons/Task.svg",alt:"Task Icon"}),e.jsx(E,{children:"보관한 과제"})]}),e.jsxs(k,{children:[e.jsxs(I,{children:[e.jsx("div",{children:"마감일"}),e.jsx("div",{children:"유효 여부"}),e.jsx("div",{children:"과제명"})]}),n.map((t,d)=>{const a=t.delay==="유효";return e.jsx(P,{children:e.jsxs(z,{children:[e.jsx("div",{children:t.date}),e.jsx(A,{isValid:a,children:t.delay}),e.jsx("div",{children:t.description})]})},d)})]})]})};export{B as default};
