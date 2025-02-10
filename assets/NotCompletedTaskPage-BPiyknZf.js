import{r as i,x as j,u as b,j as e,a as y,y as k,d as t}from"./index-B7gUGqRc.js";import{B as v}from"./blueButton-BKLYKWyS.js";import{t as T}from"./Task-C-RTHX55.js";const I=t.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,P=t.div`
  background-color: #fcf6f5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 34.5px 109px 30.5px 37px;
`,S=t.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,B=t.img`
  width: 30px;
  height: 30px;
`,E=t.div`
  font-weight: bold;
  font-size: 28px;
  font-family: Pretendard, sans-serif;
`,z=t.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
`,A=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`,U=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,h=t.div`
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
    /* 과제명 */
    flex-basis: 60%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; /* 너무 길 경우 한 줄로 */
  }
`,N=()=>{const[f,g]=i.useState([]),[u,d]=i.useState(!0),[l,n]=i.useState(null),{token:c}=j(),m=b();return i.useEffect(()=>{(async()=>{var x,p;if(!c){alert("로그인이 필요합니다."),m("/");return}const r=new URLSearchParams({page:"1",size:"5",sort:"dueDate"}).toString();try{d(!0),n(null);const s=await y.get(`/api/assignment/unfinished?${r}`);console.log("API 응답:",s.data);const w=s.data.result.content.map(o=>({date:o.deadline||"미정",delay:o.isValid?"유효":"만료됨",description:o.title||"과제 없음"}));g(w)}catch(s){k.isAxiosError(s)?n(((p=(x=s.response)==null?void 0:x.data)==null?void 0:p.message)||"서버 오류 발생"):n("예기치 않은 오류가 발생했습니다.")}finally{d(!1)}})()},[c]),u?e.jsx("p",{children:"로딩 중..."}):l?e.jsxs("p",{children:["오류 발생: ",l]}):e.jsxs(I,{children:[e.jsxs(S,{children:[e.jsx(B,{src:T,alt:"Task Icon"}),e.jsx(E,{children:"미완료 과제"})]}),e.jsx(P,{children:f.map((a,r)=>e.jsx(z,{children:e.jsxs(U,{children:[e.jsxs(A,{children:[e.jsx(h,{children:a.date}),e.jsx(h,{children:a.description})]}),e.jsx(v,{status:void 0,children:a.status})]})},r))})]})};export{N as default};
