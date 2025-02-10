import{r as i,x as j,u as b,j as e,a as v,y,d as t}from"./index-BZGV8Fg6.js";import{B as k}from"./blueButton-D_mLbESf.js";const T=t.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,I=t.div`
  background-color: #fcf6f5;
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
`,B=t.div`
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
`,z=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,A=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`,d=t.div`
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 26.6px;
  word-wrap: break-word;
  text-align: left;

  /* 개별 요소 너비 설정 */
  &:nth-child(1) {
    /* 날짜 */
    flex-basis: 10%;
    text-align: center;
  }
  &:nth-child(2) {
    /* 시간 */
    flex-basis: 10%;
    text-align: center;
  }
  &:nth-child(3) {
    /* 과제명 */
    flex-basis: 60%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; /* 너무 길 경우 한 줄로 */
  }
`,L=()=>{const[f,g]=i.useState([]),[u,l]=i.useState(!0),[c,n]=i.useState(null),{token:x}=j(),m=b();return i.useEffect(()=>{(async()=>{var p,h;if(!x){alert("로그인이 필요합니다."),m("/");return}const r=new URLSearchParams({page:"1",size:"5",sort:"dueDate"}).toString();try{l(!0),n(null);const a=await v.get(`/api/assignment/favorite?${r}`);console.log("API 응답:",a.data);const w=a.data.result.content.map(o=>({date:o.deadline||"미정",delay:o.isValid?"유효":"만료됨",description:o.title||"과제 없음"}));g(w)}catch(a){y.isAxiosError(a)?n(((h=(p=a.response)==null?void 0:p.data)==null?void 0:h.message)||"서버 오류 발생"):n("예기치 않은 오류가 발생했습니다.")}finally{l(!1)}})()},[x]),u?e.jsx("p",{children:"로딩 중..."}):c?e.jsxs("p",{children:["오류 발생: ",c]}):e.jsxs(T,{children:[e.jsxs(P,{children:[e.jsx(S,{src:"src/assets/images/Worked.svg",alt:"Task Icon"}),e.jsx(B,{children:"중요한 과제"})]}),e.jsx(I,{children:f.map((s,r)=>e.jsx(E,{children:e.jsxs(z,{children:[e.jsxs(A,{children:[e.jsx(d,{children:s.date}),e.jsx(d,{children:s.time}),e.jsx(d,{children:s.description})]}),e.jsx(k,{status:void 0,children:s.status})]})},r))})]})};export{L as default};
