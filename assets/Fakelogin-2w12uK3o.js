import{r as c,u as f,e as b,j as o,d as t}from"./index-BCNRdKTe.js";const j=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  width: 100%;
`,k=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  width: 350px;
`,w=t.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`,y=t.button`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`,v=t.p`
  color: red;
  font-size: 14px;
`,E=()=>{const[n,l]=c.useState(""),[i,s]=c.useState(null),d=f(),{setAuth:p}=b(),u=async()=>{if(!n){s("이메일을 입력해주세요.");return}try{const e=await(await fetch("https://api.replendar.site/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})})).json();if(console.log("로그인 응답:",e),e.isSuccess&&e.result.accessToken){const{accessToken:x,email:h,id:g,nickname:a,theme:m}=e.result;console.log(e),p(x,h,g,a,m),a==null&&(alert("Replendar에 처음이시군요! 회원가입을 진행해 주세요"),d("/signup"))}else s(e.message||"로그인 실패")}catch(r){console.error("로그인 요청 오류:",r),s("서버 오류 발생")}};return o.jsx(j,{children:o.jsxs(k,{children:[o.jsx("h2",{children:"로그인"}),o.jsx(w,{type:"email",placeholder:"이메일을 입력하세요",value:n,onChange:r=>l(r.target.value)}),i&&o.jsx(v,{children:i}),o.jsx(y,{onClick:u,children:"로그인"})]})})};export{E as default};
