import{p as L,k as C,r as l,j as e,d as t,a as S,u as O,x as V,M as G}from"./index-B7gUGqRc.js";import{P as J}from"./ProfileUpload-yxOPfwPU.js";const $=L(n=>({schools:[],selectedSchool:null,setSchools:o=>n({schools:o}),addSchool:o=>n(i=>({schools:[...i.schools,o]})),setSelectedSchool:o=>n({selectedSchool:o})})),U=t.div`
  padding: 20px;
`,Y=t.h2`
  font-size: 20px;
  margin-bottom: 15px;
`,Z=t.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`,q=t.button`
  width: 100%;
  padding: 10px;
  background: #25c26c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,H=t.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background: #e8e8e8;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,K=t.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`,Q=()=>{const{closeModal:n}=C(),[o,i]=l.useState(""),[s,a]=l.useState(""),{addSchool:g}=$(),x=async()=>{var m,d;if(!o.trim()){a("학교 이름을 입력해주세요.");return}try{const r=await S.post("api/schools",{schoolName:o});(m=r.data)!=null&&m.isSuccess?(g({id:r.data.result.id,name:r.data.result.schoolName}),n()):a(((d=r.data)==null?void 0:d.message)||"학교 등록 중 오류가 발생했습니다.")}catch(r){a("학교 등록 중 오류가 발생했습니다. 다시 시도해주세요."),console.error(r)}};return e.jsxs(U,{children:[e.jsx(Y,{children:"학교 등록하기"}),s&&e.jsx(K,{children:s}),e.jsx(Z,{type:"text",placeholder:"학교 이름 입력",value:o,onChange:m=>i(m.target.value)}),e.jsx(q,{onClick:x,children:"등록하기"}),e.jsx(H,{onClick:n,children:"취소"})]})},X=t.div`
  padding: 20px;
`,_=t.h2`
  font-size: 20px;
  margin-bottom: 15px;
`,ee=t.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`,te=t.button`
  padding: 10px;
  margin-left: 10px;
  background: #e8e8e8;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,oe=t.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
`,ne=t.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`,re=t.button`
  background: #25c26c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`,se=t.p`
  margin-top: 20px;
  font-size: 14px;
`,ae=t.button`
  background: #e8e8e8;
  color: black;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`,ce=({onSelect:n})=>{const{openModal:o,closeModal:i}=C(),{schools:s,setSchools:a,setSelectedSchool:g}=$(),[x,m]=l.useState(""),[d,r]=l.useState(!1);l.useEffect(()=>{(async()=>{r(!0);try{const c=await S.get("/api/schools");console.log("API 응답 데이터:",c.data.result);const f=c.data.result.map(h=>({id:h.id,name:h.schoolName}));a(f)}catch(c){console.error("학교 목록 불러오기 오류:",c)}finally{r(!1)}})()},[a]);const u=async()=>{if(x.trim()){r(!0);try{const c=(await S.get(`/api/schools?keyword=${x}`)).data.result.map(f=>({id:f.id,name:f.schoolName}));a(c)}catch(p){console.error("학교 검색 중 오류 발생:",p)}finally{r(!1)}}},y=p=>{alert(`${p.name} 를 선택하였습니다.`),g(p),n(p.name),i()};return e.jsxs(X,{children:[e.jsx(_,{children:"학교 검색하기"}),e.jsx(ee,{type:"text",placeholder:"학교 이름 입력",value:x,onChange:p=>m(p.target.value)}),e.jsx(te,{onClick:u,children:"검색"}),d&&e.jsx("p",{children:"검색 중..."}),e.jsx(oe,{children:s.map(p=>e.jsxs(ne,{children:[p.name,e.jsx(re,{onClick:()=>y(p),children:"선택하기"})]},p.id))}),e.jsxs(se,{children:["찾으시는 학교가 없나요?",e.jsx(ae,{onClick:()=>o(e.jsx(Q,{})),children:"등록하기"})]})]})},D=L(n=>({departments:[],selectedDepartment:null,addDepartment:o=>n(i=>({departments:[...i.departments,o]})),setDepartments:o=>n({departments:o}),setSelectedDepartment:o=>n({selectedDepartment:o})})),ie=t.div`
  padding: 20px;
`,le=t.h2`
  font-size: 20px;
  margin-bottom: 15px;
`,de=t.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`,pe=t.button`
  width: 100%;
  padding: 10px;
  background: #25c26c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,xe=t.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background: #e8e8e8;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,ue=t.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`,he=()=>{const{closeModal:n}=C(),[o,i]=l.useState(""),[s,a]=l.useState(""),{addDepartment:g}=D(),{selectedSchool:x}=$(),m=async()=>{var d,r;if(!o.trim()){a("학과 이름을 입력해주세요.");return}if(!x){a("학교를 먼저 선택해주세요.");return}try{const u=await S.post("api/majors",{schoolId:x.id,majorName:o});(d=u.data)!=null&&d.isSuccess?(g({id:u.data.result.id,name:u.data.result.majorName}),n()):a(((r=u.data)==null?void 0:r.message)||"학과 등록 중 오류가 발생했습니다.")}catch(u){a("학과 등록 중 오류가 발생했습니다. 다시 시도해주세요."),console.error(u)}};return e.jsxs(ie,{children:[e.jsx(le,{children:"학과 등록하기"}),s&&e.jsx(ue,{children:s}),e.jsx(de,{type:"text",placeholder:"학과 이름 입력",value:o,onChange:d=>i(d.target.value)}),e.jsx(pe,{onClick:m,children:"등록하기"}),e.jsx(xe,{onClick:n,children:"취소"})]})},ge=t.div`
  padding: 20px;
`,me=t.h2`
  font-size: 20px;
  margin-bottom: 15px;
`,be=t.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`,fe=t.button`
  padding: 10px;
  margin-left: 10px;
  background: #e8e8e8;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`,je=t.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
`,Se=t.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`,ke=t.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`,ye=t.p`
  margin-top: 20px;
  font-size: 14px;
`,we=t.button`
  background: #e8e8e8;
  color: black;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`,Ce=({})=>{const{openModal:n,closeModal:o}=C(),{selectedSchool:i}=$(),s=(i==null?void 0:i.id)??null,{setSelectedDepartment:a}=D(),[g,x]=l.useState(""),[m,d]=l.useState([]),[r,u]=l.useState(!1);l.useEffect(()=>{if(console.log("선택된 학교 id",s),!s){console.warn("학교 ID가 없습니다. API 요청을 중단합니다.");return}(async()=>{u(!0);try{const h=(await S.get(`/api/major?schoolId=${s}`)).data.result.map(v=>({id:v.id,name:v.majorName}));d(h)}catch(f){console.error("학과 목록 불러오기 오류:",f)}finally{u(!1)}})()},[s]);const y=async()=>{if(!(!g.trim()||!s)){u(!0);try{const f=(await S.get(`/api/major?schoolId=${s}&keyword=${g}`)).data.result.map(h=>({id:h.id,name:h.majorName}));d(f)}catch(c){console.error("학과 검색 중 오류 발생:",c)}finally{u(!1)}}},p=c=>{alert(`${c.name}를 선택하였습니다.`),a(c),o()};return e.jsxs(ge,{children:[e.jsx(me,{children:"학과 검색하기"}),e.jsx(be,{type:"text",placeholder:"학과 이름 입력",value:g,onChange:c=>x(c.target.value)}),e.jsx(fe,{onClick:y,children:"검색"}),r&&e.jsx("p",{children:"검색 중..."}),e.jsx(je,{children:m.map(c=>e.jsxs(Se,{children:[c.name,e.jsx(ke,{onClick:()=>p(c),children:"선택하기"})]},c.id))}),e.jsxs(ye,{children:["찾으시는 학과가 없나요?",e.jsx(we,{onClick:()=>n(e.jsx(he,{})),children:"등록하기"})]})]})},ve=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,M=t.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 65px;
`,$e=t.label`
  font-weight: bold;
  display: block;
  font-size: 23px;
  margin-bottom: 10px;
`,I=t.label`
  font-weight: bold;
  font-size: 23px;
  padding-top: 8px;
  margin: 10px 0;
`,z=t.input`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: #e8e8e8;
  border: none;
  cursor: not-allowed;
`,B=t.button`
  background: #e8e8e8;
  color: black;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin: 10px 0;
`,Me=t.select`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  margin-left: 30px;
`,Ie=({selectedSchool:n,selectedDepartment:o,grade:i,onSchoolChange:s,onDepartmentChange:a,onGradeChange:g})=>{const{openModal:x}=C(),m=()=>{x(e.jsx(ce,{onSelect:r=>{s({id:0,name:r}),a({id:0,name:""})}}))},d=()=>{if(!n){alert("먼저 학교를 선택해주세요.");return}x(e.jsx(Ce,{}))};return e.jsxs("div",{children:[e.jsx($e,{children:"학교 정보 설정*"}),e.jsxs(ve,{children:[e.jsxs(M,{children:[e.jsx(I,{children:"학교 명 *"}),e.jsx(z,{type:"text",placeholder:"학교 검색은 버튼을 클릭하세요.",value:n?n.name:"",disabled:!0}),e.jsx(B,{onClick:m,children:"검색하기"})]}),e.jsxs(M,{children:[e.jsx(I,{children:"학과 명 *"}),e.jsx(z,{type:"text",placeholder:"학과 검색은 버튼을 클릭하세요.",value:o?o.name:"",disabled:!0}),e.jsx(B,{onClick:d,children:"검색하기"})]}),e.jsxs(M,{children:[e.jsx(I,{children:"학년 *"}),e.jsxs(Me,{value:i,onChange:r=>g(r.target.value),children:[e.jsx("option",{value:"1학년",children:"1학년"}),e.jsx("option",{value:"2학년",children:"2학년"}),e.jsx("option",{value:"3학년",children:"3학년"}),e.jsx("option",{value:"4학년",children:"4학년"})]})]})]})]})},De=t.div`
  margin: 20px 0;
`,Ne=t.label`
  font-weight: bold;
  margin-top: 10px;
  display: block;
  font-size: 23px;
`,ze=t.input`
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
`,Be=t.p`
  font-size: 12px;
  text-align: right;
  color: ${n=>n.$color};
  margin-top: 5px;
`,Le=({message:n,onMessageChange:o})=>{const s=a=>{a.target.value.length<=40&&o(a.target.value)};return e.jsxs(De,{children:[e.jsx(Ne,{children:"상태 메시지 설정"}),e.jsx(ze,{type:"text",value:n,onChange:s,placeholder:"상태 메시지를 입력하세요."}),e.jsxs(Be,{$color:n.length===40?"red":"#25C26C",children:["(",n.length,"/",40,"자)"]})]})},Re=/^[a-zA-Z\uAC00-\uD7A3]+$/,Te=t.div`
  background: #fff;
  padding: 40px;
  max-width: 1000px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,Ee=t.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`,Pe=t.label`
  font-weight: bold;
  margin-top: 40px;
  display: block;
  font-size: 23px;
`,Ae=t.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: #e8e8e8;
  border: none;
`,We=t.button`
  background: #e8e8e8;
  color: black;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  width: 100px;
  height: 100%;
  padding: 10px;
  margin: 10px 0;
`,Fe=t.button`
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
`,Oe=t.p`
  color: ${n=>n.isValid?"green":"red"};
  font-size: 14px;
  margin-top: 5px;
  min-height: 20px;
`,Ve=()=>{const n=O(),[o,i]=l.useState(""),[s,a]=l.useState(!1),[g,x]=l.useState(!1),[m,d]=l.useState(""),[r,u]=l.useState(null),[y,p]=l.useState(""),[c,f]=l.useState(null),{selectedDepartment:h,setSelectedDepartment:v}=D(),[N,R]=l.useState("1학년"),T=j=>{const k=j.target.value;i(k),a(!1),d("")},E=async j=>{var k,w;try{const b=await S.get("/api/user/check-nickname",{params:{nickname:j}});return console.log("API 응답:",b.data),b.data}catch(b){return console.error("닉네임 중복 확인 중 오류 발생:",b),{isSuccess:!1,result:((w=(k=b.response)==null?void 0:k.data)==null?void 0:w.message)||"닉네임 확인 중 오류가 발생했습니다."}}},P=async()=>{if(!Re.test(o)){d("영어와 한글만 사용 가능합니다.");return}x(!0);try{const j=await E(o);a(j.isSuccess),d(j.result)}finally{x(!1)}},A=async()=>{var k,w;if(!s){alert("닉네임 중복 확인을 완료해주세요.");return}if(!c||!h){alert("학교와 학과를 선택해주세요.");return}const j=parseInt(N.replace("학년",""),10);console.log(h),console.log("null아니지?",h==null?void 0:h.id);try{const b=new FormData,W={nickname:o,statusMessage:y||"",majorId:h.id,academicYear:j};b.append("userInfo",new Blob([JSON.stringify(W)],{type:"application/json"})),r&&b.append("profileImage",r);const F=await S.post("/api/user/signup",b);console.log(F),alert("회원가입이 완료되었습니다."),n("/")}catch(b){console.log(b.response.data),alert(`회원가입 중 오류 발생: ${((w=(k=b.response)==null?void 0:k.data)==null?void 0:w.message)||"서버 오류"}`)}};return e.jsxs(Te,{children:[e.jsx("h1",{children:"회원가입"}),e.jsx(Pe,{children:"닉네임 설정 *"}),e.jsxs(Ee,{children:[e.jsx(Ae,{type:"text",placeholder:"닉네임 입력",value:o,onChange:T}),e.jsx(We,{onClick:P,disabled:g,children:g?"확인 중...":"중복확인"})]}),e.jsx(Oe,{isValid:s,children:m||" "}),e.jsx(J,{profilePhoto:r,onPhotoChange:u}),e.jsx(Le,{message:y,onMessageChange:p}),e.jsx(Ie,{selectedSchool:c,selectedDepartment:h,grade:N,onSchoolChange:f,onDepartmentChange:v,onGradeChange:R}),e.jsx(Fe,{onClick:A,children:"회원가입 완료"})]})},Ue=()=>{const{token:n,email:o,id:i,nickname:s}=V();return console.log(n+`
`,o+`
`,i+`
`,s+`
`),e.jsxs(e.Fragment,{children:[e.jsx(Ve,{}),e.jsx(G,{})]})};export{Ue as default};
