import{u as C,a as w,t as v,j as e,d as t,b as y,r as f,c as b}from"./index-DUVwGiPo.js";import{u as T}from"./useQuery-DYlJpF-P.js";import{B as I}from"./blueButton-shXsk35x.js";import{P as L}from"./ProfileUpload-ZseqlbI1.js";import{t as m}from"./Task-C-RTHX55.js";import"./useBaseQuery-DZSUbMf5.js";const M="data:image/svg+xml,%3csvg%20width='15'%20height='16'%20viewBox='0%200%2015%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%201.53339V14.4666'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1.0332%207.96021H13.9665'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",P=t.p`
  color: black;
  font-size: 28px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 39.2px;
  margin-bottom: 17px;
`,H=t.div`
  width: 100%;
  height: auto;
  padding: 34.5px 109px 39.5px 37px;
  background: ${({background:o})=>o};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,S=t.div`
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,B=t.div`
  display: flex;
  gap: 30px;
  align-items: center;
`,k=t.div`
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  color: black;
`,z=t.img`
  margin-top: 8px;
  width: 10px;
  height: 10px;
`,E=t.p`
  font-size: 14px;
  color: gray;
`,_=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,V=t.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: auto;
  justify-content: flex-end;
  cursor: pointer;
`,F=()=>{const o=C(),{selectedTheme:s}=w(),r=v[s][1],{data:n,isLoading:l,isError:u}=T({queryKey:["history-preview"],queryFn:async()=>(await y.get("/api/activity",{params:{page:1,size:3,sort:"CreatedAt"}})).data.content||[],staleTime:1e3*60*5,refetchOnWindowFocus:!1});return l?e.jsx("div",{children:"로딩 중..."}):u?e.jsx("div",{children:"데이터를 불러오는 중 오류 발생!"}):e.jsxs("div",{children:[e.jsxs(_,{children:[e.jsx(P,{children:"히스토리"}),e.jsxs(V,{children:[e.jsx(E,{onClick:()=>o("/info/history"),children:"더보기"}),e.jsx(z,{onClick:()=>o("/info/history"),src:M})]})]}),e.jsx(H,{background:r,children:n.length>0?n.map((i,c)=>e.jsxs(S,{children:[e.jsxs(B,{children:[e.jsx(k,{children:i.date}),e.jsx(k,{children:i.time}),e.jsx(k,{children:i.content})," "]}),e.jsx(I,{status:i.check?"등록됨":"내 일정에 등록",children:i.check?"등록됨":"내 일정에 등록"})]},c)):e.jsx("div",{children:"기록이 없습니다."})})]})},U="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_605_6855)'%3e%3cpath%20d='M11.0202%2025.4262L2.06641%2027.9333L4.57347%2018.9795L20.9689%202.66372C21.1541%202.47421%2021.3756%202.32363%2021.6197%202.22083C21.864%202.11802%2022.1265%202.06506%2022.3915%202.06506C22.6566%202.06506%2022.919%202.11802%2023.1633%202.22083C23.4075%202.32363%2023.6289%202.47421%2023.8142%202.66372L27.336%206.20545C27.5224%206.39041%2027.6705%206.6105%2027.7716%206.85294C27.8726%207.09541%2027.9246%207.35549%2027.9246%207.61816C27.9246%207.88082%2027.8726%208.1409%2027.7716%208.38337C27.6705%208.62584%2027.5224%208.8459%2027.336%209.03087L11.0202%2025.4262Z'%20stroke='black'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_605_6855'%3e%3crect%20width='30'%20height='30'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Z="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='check-square--check-form-validation-checkmark-success-add-addition-box-square-tick'%3e%3cpath%20id='Vector'%20d='M21.9637%202.06674H8.0356C4.73892%202.06674%202.06641%204.73925%202.06641%208.03594V21.9641C2.06641%2025.2609%204.73892%2027.9333%208.0356%2027.9333H21.9637C25.2605%2027.9333%2027.9329%2025.2609%2027.9329%2021.9641V8.03594C27.9329%204.73925%2025.2605%202.06674%2021.9637%202.06674Z'%20stroke='black'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M20.8036%2010.5231L12.8447%2020.4718L8.86523%2017.4872'%20stroke='black'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e",q=t.div`
  display: flex;
  gap: 100px;
  align-items: center;
  flex-direction: row;
  margin-left: 25%;
  margin-top: 52px;
  margin-bottom: 54px;
`,$=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,K=t.h2`
  font-size: 28px;
`,j=t.p`
  font-size: 28px;
  color: #666666;
  margin-top: 10px;
`,N=t.p`
  display: flex;
  flex-direction: row;
  font-size: 19px;
  font-weight: 500;
  gap: 10px;
`,W=t.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`,A=t.img`
  cursor: pointer;
  width: 22px;
  height: 22px;
`,O=t.div`
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
`,Q=({profileData:o})=>{const[s,a]=f.useState(o.statusMessage||"상태 메시지 없음"),[r,n]=f.useState(!1),[l,u]=f.useState(o.profileImageUrl),i=async()=>{try{await y.patch(`/api/user/status?statusMessage=${s}`),n(!1)}catch(c){console.error("상태 메시지 업데이트 실패:",c)}};return console.log(o.ongoingTasks),e.jsxs(q,{children:[e.jsx(L,{profilePhoto:l,onPhotoChange:u,size:300,title:"프로필 사진 변경"}),e.jsxs($,{children:[e.jsx(K,{children:o.nickname||"닉네임 없음"}),e.jsx(N,{children:r?e.jsxs(O,{children:[e.jsx("input",{type:"text",value:s,onChange:c=>a(c.target.value),onBlur:i,onKeyDown:c=>c.key==="Enter"&&i(),autoFocus:!0}),e.jsx(A,{src:Z,alt:"입력 완료",onClick:i})]}):e.jsxs(e.Fragment,{children:[s,e.jsx(W,{src:U,alt:"수정",onClick:()=>n(!0)})]})}),e.jsxs(j,{children:["친구: ",o.friendCount]}),e.jsxs(j,{children:["진행 중인 과제: ",o.ongoingTasks]})]})]})},R="data:image/svg+xml,%3csvg%20width='52'%20height='50'%20viewBox='0%200%2052%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector'%20d='M42.3614%200C47.1753%200%2051.1092%203.76792%2051.375%208.5155L51.3892%209.02778V40.9722C51.3892%2045.7861%2047.6211%2049.72%2042.8736%2049.9858L42.3614%2050H10.4169C5.60297%2050%201.66906%2046.2319%201.40347%2041.4844L1.38917%2040.9722L1.38836%2017.7002C2.04022%2017.9307%202.74172%2018.0561%203.4725%2018.0561C4.20319%2018.0561%204.90461%2017.9307%205.55642%2017.7003L5.55583%2040.9722C5.55583%2043.5228%207.52003%2045.6144%2010.0182%2045.8172L10.4169%2045.8333H42.3614C44.9119%2045.8333%2047.0036%2043.8692%2047.2064%2041.3708L47.2225%2040.9722V9.02778C47.2225%206.47731%2045.2583%204.38558%2042.76%204.18278L42.3614%204.16667H10.4169C8.74978%204.16667%207.27864%205.00592%206.40297%206.285C5.53094%205.81944%204.53256%205.55556%203.4725%205.55556C2.96908%205.55556%202.47958%205.61506%202.01064%205.72744C3.26975%202.52497%206.30575%200.215611%209.90467%200.014278L10.4169%200H42.3614ZM29.8503%2027.7864C31.0008%2027.7864%2031.9336%2028.7189%2031.9336%2029.8697C31.9336%2030.9242%2031.15%2031.7958%2030.1331%2031.9339L29.8503%2031.9531H17.3552C16.2046%2031.9531%2015.2718%2031.0203%2015.2718%2029.8697C15.2718%2028.815%2016.0556%2027.9433%2017.0725%2027.8053L17.3552%2027.7864H29.8503ZM35.4231%2018.0451C36.5739%2018.0451%2037.5064%2018.9778%2037.5064%2020.1283C37.5064%2021.1831%2036.7228%2022.0547%2035.7058%2022.1928L35.4231%2022.2117H17.3552C16.2046%2022.2117%2015.2718%2021.2789%2015.2718%2020.1283C15.2718%2019.0737%2016.0556%2018.2021%2017.0725%2018.0641L17.3552%2018.0451H35.4231ZM3.4725%208.33333C5.39031%208.33333%206.945%209.88803%206.945%2011.8058C6.945%2013.7236%205.39031%2015.2783%203.4725%2015.2783C1.55469%2015.2783%200%2013.7236%200%2011.8058C0%209.88803%201.55469%208.33333%203.4725%208.33333Z'%20fill='%23212121'/%3e%3c/svg%3e",G=t.div`
  display: flex;
  flex-direction: row;
  gap: 27px;
  width: 100%;
`,d=t.button`
  display: flex;
  align-items: center;
  padding: 31.5px 26px;
  width: 100%;
  max-width: 320px;
  height: 161px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${({background:o})=>o};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  gap: 69px;

  &:hover {
    background: #f0f0f0;
  }
`,x=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`,p=t.div`
  width: 150px;
  align-self: stretch;
  text-align: right;
  color: #666666;
  font-size: 28px;
  font-weight: 500;
`,g=t.div`
  text-align: right;
  color: #666666;
  font-size: 28px;
  font-weight: 500;
`,h=t.img`
  width: 30px;
  height: 30px;
`,J=({taskData:o})=>{const s=C(),{selectedTheme:a}=w(),n=v[a][1];return e.jsxs(G,{children:[e.jsxs(d,{background:n,onClick:()=>s("/info/completed"),children:[e.jsx(h,{src:R,alt:"Completed Task Icon"}),e.jsxs(x,{children:[e.jsx(p,{children:"완료한 과제"}),e.jsx(g,{children:o.completed_TasksCount})]})]}),e.jsxs(d,{background:n,onClick:()=>s("/info/stored"),children:[e.jsx(h,{src:m,alt:"Stored Task Icon"}),e.jsxs(x,{children:[e.jsx(p,{children:"보관한 과제"}),e.jsx(g,{children:o.store_TasksCount})]})]}),e.jsxs(d,{background:n,onClick:()=>s("/info/notcompleted"),children:[e.jsx(h,{src:m,alt:"Incomplete Task Icon"}),e.jsxs(x,{children:[e.jsx(p,{children:"미완료 과제"}),e.jsx(g,{children:o.not_completedTasksCount})]})]}),e.jsxs(d,{background:n,onClick:()=>s("/info/important"),children:[e.jsx(h,{src:m,alt:"Important Task Icon"}),e.jsxs(x,{children:[e.jsx(p,{children:"중요한 과제"}),e.jsx(g,{children:o.important_taskCount})]})]})]})},X=t.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  gap: 40px;
`,Y={profileImageUrl:void 0,nickname:"닉네임 없음",statusMessage:"상태 메시지 없음",friendCount:0,ongoingTasks:0},i2=()=>{const o=C(),{profile:s,loading:a,fetchProfile:r}=b();if(f.useEffect(()=>{s?console.log("기존 프로필 데이터 사용"):(console.log("프로필 데이터가 없음, fetchProfile 실행"),r(o))},[s,r,o]),a)return e.jsx("div",{children:"Loading..."});const n=s?{profileImageUrl:s.profileImageUrl??void 0,nickname:s.nickname??"닉네임 없음",statusMessage:s.statusMessage??"상태 메시지 없음",friendCount:s.friendCount??0,ongoingTasks:s.ongoingTasks??0}:Y,l=s??{};return e.jsxs(X,{children:[e.jsx(Q,{profileData:n}),e.jsx(J,{taskData:l}),e.jsx(F,{})]})};export{i2 as default};
