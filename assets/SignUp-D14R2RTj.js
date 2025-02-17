import{v as L,g as v,r as d,j as e,d as o,b as k,S as y,u as V,i as Y,e as G,M as J}from"./index-DjNPCOSe.js";import{P as U}from"./ProfileUpload-BoZJnHdS.js";const M=L(n=>({schools:[],selectedSchool:null,setSchools:t=>n({schools:t}),addSchool:t=>n(i=>({schools:[...i.schools,t]})),setSelectedSchool:t=>n({selectedSchool:t})})),Z=o.div`
  padding: 20px;
`,q=o.h2`
  font-size: 20px;
  margin-bottom: 15px;
`,H=o.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`,K=o.button`
  width: 100%;
  padding: 10px;
  background: #25c26c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,Q=o.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background: #e8e8e8;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,X=o.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`,_=()=>{const{closeModal:n}=v(),[t,i]=d.useState(""),[s,a]=d.useState(""),{addSchool:g}=M(),x=async()=>{var m,l;if(!t.trim()){a("학교 이름을 입력해주세요.");return}try{const r=await k.post("api/schools",{schoolName:t});(m=r.data)!=null&&m.isSuccess?(g({id:r.data.result.id,name:r.data.result.schoolName}),n()):a(((l=r.data)==null?void 0:l.message)||"학교 등록 중 오류가 발생했습니다.")}catch(r){a("학교 등록 중 오류가 발생했습니다. 다시 시도해주세요."),console.error(r)}};return e.jsxs(Z,{children:[e.jsx(q,{children:"학교 등록하기"}),s&&e.jsx(X,{children:s}),e.jsx(H,{type:"text",placeholder:"학교 이름 입력",value:t,onChange:m=>i(m.target.value)}),e.jsx(K,{onClick:x,children:"등록하기"}),e.jsx(Q,{onClick:n,children:"취소"})]})},ee=o.div`
  padding: 20px;
`,oe=o.h2`
  font-size: 20px;
  margin-bottom: 15px;
`,te=o.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`,ne=o.button`
  padding: 10px;
  margin-left: 10px;
  background: #e8e8e8;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,re=o.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
`,se=o.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`,ae=o.button`
  background: #25c26c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`,ce=o.p`
  margin-top: 20px;
  font-size: 14px;
`,ie=o.button`
  background: #e8e8e8;
  color: black;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`,le=({onSelect:n})=>{const{openModal:t,closeModal:i}=v(),{schools:s,setSchools:a,setSelectedSchool:g}=M(),[x,m]=d.useState(""),[l,r]=d.useState(!1);d.useEffect(()=>{(async()=>{r(!0);try{const c=await k.get("/api/schools");console.log("API 응답 데이터:",c.data.result);const f=c.data.result.map(h=>({id:h.id,name:h.schoolName}));a(f)}catch(c){console.error("학교 목록 불러오기 오류:",c)}finally{r(!1)}})()},[a]);const u=async()=>{if(x.trim()){r(!0);try{const c=(await k.get(`/api/schools?keyword=${x}`)).data.result.map(f=>({id:f.id,name:f.schoolName}));a(c)}catch(p){console.error("학교 검색 중 오류 발생:",p)}finally{r(!1)}}},C=p=>{y.fire({icon:"info",text:`${p.name} 를 선택하였습니다.`,timer:2e3,showConfirmButton:!1}),g(p),n(p.name),i()};return e.jsxs(ee,{children:[e.jsx(oe,{children:"학교 검색하기"}),e.jsx(te,{type:"text",placeholder:"학교 이름 입력",value:x,onChange:p=>m(p.target.value)}),e.jsx(ne,{onClick:u,children:"검색"}),l&&e.jsx("p",{children:"검색 중..."}),e.jsx(re,{children:s.map(p=>e.jsxs(se,{children:[p.name,e.jsx(ae,{onClick:()=>C(p),children:"선택하기"})]},p.id))}),e.jsxs(ce,{children:["찾으시는 학교가 없나요?",e.jsx(ie,{onClick:()=>t(e.jsx(_,{})),children:"등록하기"})]})]})},B=L(n=>({departments:[],selectedDepartment:null,addDepartment:t=>n(i=>({departments:[...i.departments,t]})),setDepartments:t=>n({departments:t}),setSelectedDepartment:t=>n({selectedDepartment:t})})),de=o.div`
  padding: 20px;
`,pe=o.h2`
  font-size: 20px;
  margin-bottom: 15px;
`,xe=o.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`,ue=o.button`
  width: 100%;
  padding: 10px;
  background: #25c26c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,he=o.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background: #e8e8e8;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,ge=o.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`,me=()=>{const{closeModal:n}=v(),[t,i]=d.useState(""),[s,a]=d.useState(""),{addDepartment:g}=B(),{selectedSchool:x}=M(),m=async()=>{var l,r;if(!t.trim()){a("학과 이름을 입력해주세요.");return}if(!x){a("학교를 먼저 선택해주세요.");return}try{const u=await k.post("api/majors",{schoolId:x.id,majorName:t});(l=u.data)!=null&&l.isSuccess?(g({id:u.data.result.id,name:u.data.result.majorName}),n()):a(((r=u.data)==null?void 0:r.message)||"학과 등록 중 오류가 발생했습니다.")}catch(u){a("학과 등록 중 오류가 발생했습니다. 다시 시도해주세요."),console.error(u)}};return e.jsxs(de,{children:[e.jsx(pe,{children:"학과 등록하기"}),s&&e.jsx(ge,{children:s}),e.jsx(xe,{type:"text",placeholder:"학과 이름 입력",value:t,onChange:l=>i(l.target.value)}),e.jsx(ue,{onClick:m,children:"등록하기"}),e.jsx(he,{onClick:n,children:"취소"})]})},be=o.div`
  padding: 20px;
`,fe=o.h2`
  font-size: 20px;
  margin-bottom: 15px;
`,je=o.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`,Se=o.button`
  padding: 10px;
  margin-left: 10px;
  background: #e8e8e8;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,ke=o.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
`,we=o.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`,ye=o.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`,Ce=o.p`
  margin-top: 20px;
  font-size: 14px;
`,ve=o.button`
  background: #e8e8e8;
  color: black;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`,$e=({})=>{const{openModal:n,closeModal:t}=v(),{selectedSchool:i}=M(),s=(i==null?void 0:i.id)??null,{setSelectedDepartment:a}=B(),[g,x]=d.useState(""),[m,l]=d.useState([]),[r,u]=d.useState(!1);d.useEffect(()=>{if(console.log("선택된 학교 id",s),!s){console.warn("학교 ID가 없습니다. API 요청을 중단합니다.");return}(async()=>{u(!0);try{const h=(await k.get(`/api/major?schoolId=${s}`)).data.result.map($=>({id:$.id,name:$.majorName}));l(h)}catch(f){console.error("학과 목록 불러오기 오류:",f)}finally{u(!1)}})()},[s]);const C=async()=>{if(!(!g.trim()||!s)){u(!0);try{const f=(await k.get(`/api/major?schoolId=${s}&keyword=${g}`)).data.result.map(h=>({id:h.id,name:h.majorName}));l(f)}catch(c){console.error("학과 검색 중 오류 발생:",c)}finally{u(!1)}}},p=c=>{y.fire({icon:"info",text:`${c.name}를 선택하였습니다.`,showConfirmButton:!1,timer:2e3}),a(c),t()};return e.jsxs(be,{children:[e.jsx(fe,{children:"학과 검색하기"}),e.jsx(je,{type:"text",placeholder:"학과 이름 입력",value:g,onChange:c=>x(c.target.value)}),e.jsx(Se,{onClick:C,children:"검색"}),r&&e.jsx("p",{children:"검색 중..."}),e.jsx(ke,{children:m.map(c=>e.jsxs(we,{children:[c.name,e.jsx(ye,{onClick:()=>p(c),children:"선택하기"})]},c.id))}),e.jsxs(Ce,{children:["찾으시는 학과가 없나요?",e.jsx(ve,{onClick:()=>n(e.jsx(me,{})),children:"등록하기"})]})]})},Me=o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,I=o.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 65px;
`,Ie=o.label`
  font-weight: bold;
  display: block;
  font-size: 23px;
  margin-bottom: 10px;
`,D=o.label`
  font-weight: bold;
  font-size: 23px;
  padding-top: 8px;
  margin: 10px 0;
`,z=o.input`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: #e8e8e8;
  border: none;
  cursor: not-allowed;
`,T=o.button`
  background: #e8e8e8;
  color: black;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin: 10px 0;
`,De=o.select`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  margin-left: 30px;
`,Be=({selectedSchool:n,selectedDepartment:t,grade:i,onSchoolChange:s,onDepartmentChange:a,onGradeChange:g})=>{const{openModal:x}=v(),m=()=>{x(e.jsx(le,{onSelect:r=>{s({id:0,name:r}),a({id:0,name:""})}}))},l=()=>{if(!n){y.fire({icon:"info",text:"먼저 학교를 선택해주세요",showConfirmButton:!1,timer:2e3});return}x(e.jsx($e,{}))};return e.jsxs("div",{children:[e.jsx(Ie,{children:"학교 정보 설정*"}),e.jsxs(Me,{children:[e.jsxs(I,{children:[e.jsx(D,{children:"학교 명 *"}),e.jsx(z,{type:"text",placeholder:"학교 검색은 버튼을 클릭하세요.",value:n?n.name:"",disabled:!0}),e.jsx(T,{onClick:m,children:"검색하기"})]}),e.jsxs(I,{children:[e.jsx(D,{children:"학과 명 *"}),e.jsx(z,{type:"text",placeholder:"학과 검색은 버튼을 클릭하세요.",value:t?t.name:"",disabled:!0}),e.jsx(T,{onClick:l,children:"검색하기"})]}),e.jsxs(I,{children:[e.jsx(D,{children:"학년 *"}),e.jsxs(De,{value:i,onChange:r=>g(r.target.value),children:[e.jsx("option",{value:"1학년",children:"1학년"}),e.jsx("option",{value:"2학년",children:"2학년"}),e.jsx("option",{value:"3학년",children:"3학년"}),e.jsx("option",{value:"4학년",children:"4학년"})]})]})]})]})},Ne=o.div`
  margin: 20px 0;
`,ze=o.label`
  font-weight: bold;
  margin-top: 10px;
  display: block;
  font-size: 23px;
`,Te=o.input`
  margin-top: 10px;
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #999;
  font-size: 18px;
  outline: none;
  background: transparent;

  &:focus {
    border-bottom: 1px solid #25c26c;
  }

  &::placeholder {
    color: #ccc;
    font-style: italic;
  }
`,Le=o.p`
  font-size: 12px;
  text-align: right;
  color: ${n=>n.$color};
  margin-top: 5px;
`,Re=({message:n,onMessageChange:t})=>{const s=a=>{a.target.value.length<=40&&t(a.target.value)};return e.jsxs(Ne,{children:[e.jsx(ze,{children:"상태 메시지 설정"}),e.jsx(Te,{type:"text",value:n,onChange:s,placeholder:"상태 메시지를 입력하세요."}),e.jsxs(Le,{$color:n.length===40?"red":"#25C26C",children:["(",n.length,"/",40,"자)"]})]})},Ae=/^[a-zA-Z\uAC00-\uD7A3]+$/,Ee=o.div`
  background: #fff;
  padding: 40px;
  max-width: 1000px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,Pe=o.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`,We=o.label`
  font-weight: bold;
  margin-top: 40px;
  display: block;
  font-size: 23px;
`,Fe=o.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: #e8e8e8;
  border: none;
`,Oe=o.button`
  background: #e8e8e8;
  color: black;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  width: 100px;
  height: 100%;
  padding: 10px;
  margin: 10px 0;
`,Ve=o.button`
  background: white;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  width: 150px;
  height: 40px;
  padding: 10px;
  margin: 10px 0;
  margin-right: 55px;
  align-self: flex-end;
`,Ye=o.p`
  color: ${n=>n.isValid?"green":"red"};
  font-size: 14px;
  margin-top: 5px;
  min-height: 20px;
`,Ge=()=>{const n=V(),[t,i]=d.useState(""),[s,a]=d.useState(!1),[g,x]=d.useState(!1),[m,l]=d.useState(""),[r,u]=d.useState(null),[C,p]=d.useState(""),[c,f]=d.useState(null),{selectedDepartment:h,setSelectedDepartment:$}=B(),{academicYear:N,setAcademicYear:R}=Y(),A=b=>{const j=b.target.value;i(j),a(!1),l("")},E=async b=>{var j,S;try{const w=await k.get("/api/user/check-nickname",{params:{nickname:b}});return console.log("API 응답:",w.data),w.data}catch(w){return console.error("닉네임 중복 확인 중 오류 발생:",w),{isSuccess:!1,result:((S=(j=w.response)==null?void 0:j.data)==null?void 0:S.message)||"닉네임 확인 중 오류가 발생했습니다."}}},P=b=>{const j=parseInt(b.replace("학년",""),10);R(j),console.log(j)},W=async()=>{if(!Ae.test(t)){l("영어와 한글만 사용 가능합니다.");return}x(!0);try{const b=await E(t);b.isSuccess?(a(b.isSuccess),l(b.result)):l("이미 사용 중인 닉네임입니다.")}finally{x(!1)}},F=async()=>{var b,j;if(!s){y.fire({icon:"warning",title:"닉네임 중복 확인 필요",text:"닉네임 중복 확인을 완료해주세요.",confirmButtonColor:"#25C26C"});return}if(!c||!h){y.fire({icon:"warning",title:"학교 및 학과 선택 필요",confirmButtonColor:"#25C26C",text:"학교와 학과를 선택해주세요."});return}console.log(h),console.log("null아니지?",h==null?void 0:h.id);try{const S=new FormData,w={nickname:t,statusMessage:C||"",majorId:h.id,academicYear:N};S.append("userInfo",new Blob([JSON.stringify(w)],{type:"application/json"})),r&&S.append("profileImage",r);const O=await k.post("/api/user/signup",S);console.log(O),y.fire({icon:"success",title:"회원가입 성공!",text:"가입을 축하드립니다! 메인 페이지로 이동합니다.",timer:3e3,showConfirmButton:!1}),setTimeout(()=>{n("/")},3e3)}catch(S){console.log(S.response.data),y.fire({icon:"error",title:"회원가입 실패",text:((j=(b=S.response)==null?void 0:b.data)==null?void 0:j.message)||"서버 오류가 발생했습니다."})}};return e.jsxs(Ee,{children:[e.jsx("h1",{children:"회원가입"}),e.jsx(We,{children:"닉네임 설정 *"}),e.jsxs(Pe,{children:[e.jsx(Fe,{type:"text",placeholder:"닉네임 입력",value:t,onChange:A}),e.jsx(Oe,{onClick:W,disabled:g,children:g?"확인 중...":"중복확인"})]}),e.jsx(Ye,{isValid:s,children:m||" "}),e.jsx(U,{profilePhoto:r,onPhotoChange:u}),e.jsx(Re,{message:C,onMessageChange:p}),e.jsx(Be,{selectedSchool:c,selectedDepartment:h,grade:`${N}학년`,onSchoolChange:f,onDepartmentChange:$,onGradeChange:P}),e.jsx(Ve,{onClick:F,children:"회원가입 완료"})]})},Ze=()=>{const{token:n,email:t,id:i,nickname:s}=G();return console.log(n+`
`,t+`
`,i+`
`,s+`
`),e.jsxs(e.Fragment,{children:[e.jsx(Ge,{}),e.jsx(J,{})]})};export{Ze as default};
