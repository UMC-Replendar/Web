import{u as y,a as M,t as I,b as P,c as S,j as e,d as t,S as v,e as L,r as k,f as B}from"./index-DCLxYTjz.js";import{u as z,a as E,A as q}from"./AddTaskModal-Dt7kRQsp.js";import{B as p}from"./blueButton-iv1k7oEB.js";import{r as F}from"./commuApi-BRQK-Xc5.js";import{H as _}from"./skeleton-2MwILm4q.js";import{P as V}from"./ProfileUpload-Xv2Q9ZSz.js";import{t as j}from"./Task-C-RTHX55.js";import"./useBaseQuery-CLL0ZrG3.js";const $="data:image/svg+xml,%3csvg%20width='15'%20height='16'%20viewBox='0%200%2015%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%201.53339V14.4666'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1.0332%207.96021H13.9665'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",A=t.p`
  color: black;
  font-size: 28px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 39.2px;
  margin-bottom: 17px;
`,U=t.div`
  width: 100%;
  height: auto;
  padding: 34.5px 109px 39.5px 37px;
  background: ${({background:s})=>s};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Z=t.div`
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,R=t.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`,w=t.div`
  flex: ${({$flex:s})=>s||"1"};
  text-align: left;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`,K=t.div`
  flex: 0.5;
  display: flex;
  justify-content: right;
  align-items: center;
  flex-shrink: 0;
  min-width: 100px;
`,Q=t.img`
  margin-top: 8px;
  width: 10px;
  height: 10px;
`,W=t.p`
  font-size: 14px;
  color: gray;
`,N=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,O=t.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: auto;
  justify-content: flex-end;
  cursor: pointer;
`,b=t.div`
  align-self: center;
  text-align: center;
  font-size: 18px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: gray;
  margin-top: 20px;
`,G=()=>{const s=y(),{selectedTheme:o}=M(),r=I[o][1],{openModal:i}=P(),l=S(),{data:x,isLoading:d,isError:c}=z({queryKey:["history-preview"],queryFn:async()=>(await L.get("/api/activity",{params:{page:1,size:3,sort:"CreatedAt"}})).data.content||[],staleTime:1e3*60*5,refetchOnWindowFocus:!1}),H=E({mutationFn:({requestId:n,isAccepted:C})=>F({requestId:n,isAccepted:C}),onSuccess:()=>{l.invalidateQueries({queryKey:["/api/activity/friend"]}),v.fire({icon:"success",text:"친구 요청을 수락했습니다",timer:2e3,showConfirmButton:!1})},onError:n=>{v.fire({icon:"error",text:"친구 수락에 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(n)}});return d?e.jsx(_,{count:3}):c?e.jsx(b,{children:"데이터를 불러오는 중 오류가 발생하였습니다."}):e.jsxs("div",{children:[e.jsxs(N,{children:[e.jsx(A,{children:"히스토리"}),e.jsxs(O,{children:[e.jsx(W,{onClick:()=>s("/info/history"),children:"더보기"}),e.jsx(Q,{onClick:()=>s("/info/history"),src:$})]})]}),e.jsx(U,{background:r,children:x.length>0?x.map((n,C)=>e.jsx(Z,{children:e.jsxs(R,{children:[e.jsx(w,{$flex:"0.5",children:n.date}),e.jsx(w,{$flex:"0.5",children:n.time}),e.jsx(w,{$flex:"2",children:n.content}),e.jsx(K,{children:n.type==="과제 추가"||n.type==="과제 공유"?n.isRegistered?e.jsx(p,{status:"등록됨",children:"등록됨"}):e.jsx(p,{onClick:()=>i(e.jsx(q,{assId:n.assId,onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"}):n.type==="친구 요청"?n.check==="CHECK"?e.jsx(p,{status:"등록됨",children:"수락됨"}):e.jsx(p,{onClick:()=>H.mutate({requestId:n.friendRequestId,isAccepted:!0}),children:"수락"}):null})]})},C)):e.jsx(b,{children:"기록이 없습니다."})})]})},J="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_605_6855)'%3e%3cpath%20d='M11.0202%2025.4262L2.06641%2027.9333L4.57347%2018.9795L20.9689%202.66372C21.1541%202.47421%2021.3756%202.32363%2021.6197%202.22083C21.864%202.11802%2022.1265%202.06506%2022.3915%202.06506C22.6566%202.06506%2022.919%202.11802%2023.1633%202.22083C23.4075%202.32363%2023.6289%202.47421%2023.8142%202.66372L27.336%206.20545C27.5224%206.39041%2027.6705%206.6105%2027.7716%206.85294C27.8726%207.09541%2027.9246%207.35549%2027.9246%207.61816C27.9246%207.88082%2027.8726%208.1409%2027.7716%208.38337C27.6705%208.62584%2027.5224%208.8459%2027.336%209.03087L11.0202%2025.4262Z'%20stroke='black'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_605_6855'%3e%3crect%20width='30'%20height='30'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",X="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='check-square--check-form-validation-checkmark-success-add-addition-box-square-tick'%3e%3cpath%20id='Vector'%20d='M21.9637%202.06674H8.0356C4.73892%202.06674%202.06641%204.73925%202.06641%208.03594V21.9641C2.06641%2025.2609%204.73892%2027.9333%208.0356%2027.9333H21.9637C25.2605%2027.9333%2027.9329%2025.2609%2027.9329%2021.9641V8.03594C27.9329%204.73925%2025.2605%202.06674%2021.9637%202.06674Z'%20stroke='black'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M20.8036%2010.5231L12.8447%2020.4718L8.86523%2017.4872'%20stroke='black'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e",Y=t.div`
  display: flex;
  gap: 100px;
  align-items: center;
  flex-direction: row;
  margin-left: 25%;
  margin-top: 52px;
  margin-bottom: 54px;
`,D=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,e2=t.h2`
  font-size: 28px;
`,T=t.p`
  font-size: 28px;
  color: #666666;
  margin-top: 10px;
`,t2=t.p`
  display: flex;
  flex-direction: row;
  font-size: 19px;
  font-weight: 500;
  gap: 10px;
`,s2=t.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`,o2=t.img`
  cursor: pointer;
  width: 22px;
  height: 22px;
`,n2=t.div`
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
`,i2=({profileData:s})=>{const[o,a]=k.useState(s.statusMessage||"상태 메시지 없음"),[r,i]=k.useState(!1),[l,x]=k.useState(s.profileImageUrl),d=async()=>{try{await L.patch(`/api/user/status?statusMessage=${o}`),i(!1)}catch(c){console.error("상태 메시지 업데이트 실패:",c)}};return console.log(s.ongoingTasks),e.jsxs(Y,{children:[e.jsx(V,{profilePhoto:l,onPhotoChange:x,size:300,title:"프로필 사진 변경"}),e.jsxs(D,{children:[e.jsx(e2,{children:s.nickname||"닉네임 없음"}),e.jsx(t2,{children:r?e.jsxs(n2,{children:[e.jsx("input",{type:"text",value:o,onChange:c=>a(c.target.value),onBlur:d,onKeyDown:c=>c.key==="Enter"&&d(),autoFocus:!0}),e.jsx(o2,{src:X,alt:"입력 완료",onClick:d})]}):e.jsxs(e.Fragment,{children:[o,e.jsx(s2,{src:J,alt:"수정",onClick:()=>i(!0)})]})}),e.jsxs(T,{children:["친구: ",s.friendCount]}),e.jsxs(T,{children:["진행 중인 과제: ",s.ongoingTasks]})]})]})},r2="data:image/svg+xml,%3csvg%20width='52'%20height='50'%20viewBox='0%200%2052%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector'%20d='M42.3614%200C47.1753%200%2051.1092%203.76792%2051.375%208.5155L51.3892%209.02778V40.9722C51.3892%2045.7861%2047.6211%2049.72%2042.8736%2049.9858L42.3614%2050H10.4169C5.60297%2050%201.66906%2046.2319%201.40347%2041.4844L1.38917%2040.9722L1.38836%2017.7002C2.04022%2017.9307%202.74172%2018.0561%203.4725%2018.0561C4.20319%2018.0561%204.90461%2017.9307%205.55642%2017.7003L5.55583%2040.9722C5.55583%2043.5228%207.52003%2045.6144%2010.0182%2045.8172L10.4169%2045.8333H42.3614C44.9119%2045.8333%2047.0036%2043.8692%2047.2064%2041.3708L47.2225%2040.9722V9.02778C47.2225%206.47731%2045.2583%204.38558%2042.76%204.18278L42.3614%204.16667H10.4169C8.74978%204.16667%207.27864%205.00592%206.40297%206.285C5.53094%205.81944%204.53256%205.55556%203.4725%205.55556C2.96908%205.55556%202.47958%205.61506%202.01064%205.72744C3.26975%202.52497%206.30575%200.215611%209.90467%200.014278L10.4169%200H42.3614ZM29.8503%2027.7864C31.0008%2027.7864%2031.9336%2028.7189%2031.9336%2029.8697C31.9336%2030.9242%2031.15%2031.7958%2030.1331%2031.9339L29.8503%2031.9531H17.3552C16.2046%2031.9531%2015.2718%2031.0203%2015.2718%2029.8697C15.2718%2028.815%2016.0556%2027.9433%2017.0725%2027.8053L17.3552%2027.7864H29.8503ZM35.4231%2018.0451C36.5739%2018.0451%2037.5064%2018.9778%2037.5064%2020.1283C37.5064%2021.1831%2036.7228%2022.0547%2035.7058%2022.1928L35.4231%2022.2117H17.3552C16.2046%2022.2117%2015.2718%2021.2789%2015.2718%2020.1283C15.2718%2019.0737%2016.0556%2018.2021%2017.0725%2018.0641L17.3552%2018.0451H35.4231ZM3.4725%208.33333C5.39031%208.33333%206.945%209.88803%206.945%2011.8058C6.945%2013.7236%205.39031%2015.2783%203.4725%2015.2783C1.55469%2015.2783%200%2013.7236%200%2011.8058C0%209.88803%201.55469%208.33333%203.4725%208.33333Z'%20fill='%23212121'/%3e%3c/svg%3e",c2=t.div`
  display: flex;
  flex-direction: row;
  gap: 27px;
  width: 100%;
`,g=t.button`
  display: flex;
  align-items: center;
  padding: 31.5px 26px;
  width: 100%;
  max-width: 320px;
  height: 161px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${({background:s})=>s};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  gap: 69px;

  &:hover {
    background: #f0f0f0;
  }
`,h=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`,f=t.div`
  width: 150px;
  align-self: stretch;
  text-align: right;
  color: #666666;
  font-size: 28px;
  font-weight: 500;
`,u=t.div`
  text-align: right;
  color: #666666;
  font-size: 28px;
  font-weight: 500;
`,m=t.img`
  width: 30px;
  height: 30px;
`,a2=({taskData:s})=>{const o=y(),{selectedTheme:a}=M(),i=I[a][1];return e.jsxs(c2,{children:[e.jsxs(g,{background:i,onClick:()=>o("/info/completed"),children:[e.jsx(m,{src:r2,alt:"Completed Task Icon"}),e.jsxs(h,{children:[e.jsx(f,{children:"완료한 과제"}),e.jsx(u,{children:s.completed_TasksCount})]})]}),e.jsxs(g,{background:i,onClick:()=>o("/info/stored"),children:[e.jsx(m,{src:j,alt:"Stored Task Icon"}),e.jsxs(h,{children:[e.jsx(f,{children:"보관한 과제"}),e.jsx(u,{children:s.store_TasksCount})]})]}),e.jsxs(g,{background:i,onClick:()=>o("/info/notcompleted"),children:[e.jsx(m,{src:j,alt:"Incomplete Task Icon"}),e.jsxs(h,{children:[e.jsx(f,{children:"미완료 과제"}),e.jsx(u,{children:s.not_completedTasksCount})]})]}),e.jsxs(g,{background:i,onClick:()=>o("/info/important"),children:[e.jsx(m,{src:j,alt:"Important Task Icon"}),e.jsxs(h,{children:[e.jsx(f,{children:"중요한 과제"}),e.jsx(u,{children:s.important_taskCount})]})]})]})},l2=t.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  gap: 40px;
`,d2={profileImageUrl:void 0,nickname:"닉네임 없음",statusMessage:"상태 메시지 없음",friendCount:0,ongoingTasks:0},C2=()=>{const s=y(),{profile:o,loading:a,fetchProfile:r}=B();if(k.useEffect(()=>{o?console.log("기존 프로필 데이터 사용"):(console.log("프로필 데이터가 없음, fetchProfile 실행"),r(s))},[o,r,s]),a)return e.jsx("div",{children:"Loading..."});const i=o?{profileImageUrl:o.profileImageUrl??void 0,nickname:o.nickname??"닉네임 없음",statusMessage:o.statusMessage??"상태 메시지 없음",friendCount:o.friendCount??0,ongoingTasks:o.ongoingTasks??0}:d2,l=o??{};return e.jsxs(l2,{children:[e.jsx(i2,{profileData:i}),e.jsx(a2,{taskData:l}),e.jsx(G,{})]})};export{C2 as default};
