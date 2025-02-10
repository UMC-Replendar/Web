import{u as m,j as s,d as t,r as g,a as y,b as v}from"./index-BZGV8Fg6.js";import{B as w}from"./blueButton-D_mLbESf.js";import{P as b}from"./ProfileUpload-UUO_mtU7.js";const C=t.p`
  color: black;
  font-size: 28px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 39.2px;
  word-wrap: break-word;
  margin-bottom: 17px;
  cursor: pointer;
`,I=t.div`
  width: 100%;
  height: 100%;
  padding: 34.5px 109px 39.5px 37px;
  background: #fcf6f5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
`,T=t.div`
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,P=t.div`
  display: flex;
  gap: 100px;
  align-items: center;
`,u=t.div`
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 26.6px;
  color: black;
`;function S(){const n=m(),e=[{date:"11/02",time:"23:55",task:"000님이 ~~~~~~~하기 과제",status:"완료"},{date:"11/02",time:"23:55",task:"000님이 ~~~~~~~하기 과제",status:"미완료"}];return s.jsxs("div",{children:[s.jsx(C,{onClick:()=>n("/history"),children:"히스토리"}),s.jsx(I,{onClick:()=>n("/history"),children:e.map((i,o)=>s.jsxs(T,{children:[s.jsxs(P,{children:[s.jsx(u,{children:i.date}),s.jsx(u,{children:i.time}),s.jsx(u,{children:i.task})]}),s.jsx(w,{status:i.status==="완료"?"등록됨":"내 일정에 등록",children:i.status})]},o))})]})}const M=t.div`
  display: flex;
  gap: 100px;
  align-items: center;
  flex-direction: row;
  margin-left: 25%;
  margin-top: 52px;
  margin-bottom: 54px;
`,z=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,E=t.h2`
  font-size: 28px;
`,j=t.p`
  font-size: 28px;
  color: #666666;
  margin-top: 10px;
`,B=t.p`
  display: flex;
  flex-direction: row;
  font-size: 19px;
  font-weight: 500;
  gap: 10px;
`,U=t.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`,H=t.img`
  cursor: pointer;
  width: 22px;
  height: 22px;
`,F=t.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;

  input {
    border: none;
    outline: none;
    font-size: 17px;
    flex: 1;
  }
`,_=({profileData:n})=>{const[e,i]=g.useState(n.statusMessage||"상태 메시지 없음"),[o,a]=g.useState(!1),[f,k]=g.useState(n.profileImageUrl),h=async()=>{try{await y.patch(`/api/user/status?statusMessage=${e}`),a(!1)}catch(r){console.error("상태 메시지 업데이트 실패:",r)}};return s.jsxs(M,{children:[s.jsx(b,{profilePhoto:f,onPhotoChange:k,size:300,title:"프로필 사진 변경"}),s.jsxs(z,{children:[s.jsx(E,{children:n.nickname||"닉네임 없음"}),s.jsx(B,{children:o?s.jsxs(F,{children:[s.jsx("input",{type:"text",value:e,onChange:r=>i(r.target.value),onBlur:h,onKeyDown:r=>r.key==="Enter"&&h(),autoFocus:!0}),s.jsx(H,{src:"./src/assets/images/check.svg",alt:"입력 완료",onClick:h})]}):s.jsxs(s.Fragment,{children:[e,s.jsx(U,{src:"./src/assets/images/Pencil.svg",alt:"수정",onClick:()=>a(!0)})]})}),s.jsxs(j,{children:["친구: ",n.friendCount]}),s.jsxs(j,{children:["진행 중인 과제: ",n.ongoingTasks]})]})]})},L=t.div`
  display: flex;
  flex-direction: row;
  gap: 27px;
  width: 100%;
`,c=t.button`
  display: flex;
  align-items: center;
  padding: 31.5px 26px;
  width: 100%;
  max-width: 320px;
  height: 161px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: #fcf6f5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  gap: 69px;

  &:hover {
    background: #f0f0f0;
  }
`,l=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`,d=t.div`
  width: 150px;
  align-self: stretch;
  text-align: right;
  color: #666666;
  font-size: 28px;
  font-weight: 500;
`,x=t.div`
  text-align: right;
  color: #666666;
  font-size: 28px;
  font-weight: 500;
`,p=t.img`
  width: 30px;
  height: 30px;
`,N=({taskData:n})=>{const e=m();return s.jsxs(L,{children:[s.jsxs(c,{onClick:()=>e("/info/completed"),children:[s.jsx(p,{src:"src/assets/images/Worked.svg",alt:"Completed Task Icon"}),s.jsxs(l,{children:[s.jsx(d,{children:"완료한 과제"}),s.jsx(x,{children:n.completed_TasksCount})]})]}),s.jsxs(c,{onClick:()=>e("/info/stored"),children:[s.jsx(p,{src:"src/assets/images/InfoIcons/Task.svg",alt:"Stored Task Icon"}),s.jsxs(l,{children:[s.jsx(d,{children:"보관한 과제"}),s.jsx(x,{children:n.store_TasksCount})]})]}),s.jsxs(c,{onClick:()=>e("/info/notcompleted"),children:[s.jsx(p,{src:"src/assets/images/InfoIcons/Task.svg",alt:"Incomplete Task Icon"}),s.jsxs(l,{children:[s.jsx(d,{children:"미완료 과제"}),s.jsx(x,{children:n.not_completedTasksCount})]})]}),s.jsxs(c,{onClick:()=>e("/info/important"),children:[s.jsx(p,{src:"src/assets/images/InfoIcons/Task.svg",alt:"Important Task Icon"}),s.jsxs(l,{children:[s.jsx(d,{children:"중요한 과제"}),s.jsx(x,{children:n.important_taskCount})]})]})]})},K=t.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  gap: 40px;
`,R={profileImageUrl:void 0,nickname:"닉네임 없음",statusMessage:"상태 메시지 없음",friendCount:0,ongoingTasks:0},A=()=>{const n=m(),{profile:e,loading:i,fetchProfile:o}=v();if(g.useEffect(()=>{e?console.log("기존 프로필 데이터 사용"):(console.log("프로필 데이터가 없음, fetchProfile 실행"),o(n))},[e,o,n]),i)return s.jsx("div",{children:"Loading..."});const a=e?{profileImageUrl:e.profileImageUrl??void 0,nickname:e.nickname??"닉네임 없음",statusMessage:e.statusMessage??"상태 메시지 없음",friendCount:e.friendCount??0,ongoingTasks:e.ongoingTasks??0}:R,f=e??{};return s.jsxs(K,{children:[s.jsx(_,{profileData:a}),s.jsx(N,{taskData:f}),s.jsx(S,{})]})};export{A as default};
