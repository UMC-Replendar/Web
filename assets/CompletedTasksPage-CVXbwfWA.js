import{r,e as w,u as y,j as e,a as b,t as v,d as t}from"./index-BCNRdKTe.js";import{B as T}from"./blueButton-B1AxfaKe.js";import{W as k}from"./Worked-ylCTaO9l.js";const E=t.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,A=t.div`
  background-color: #fcf6f5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 34.5px 109px 30.5px 37px;
`,B=t.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,I=t.img`
  width: 30px;
  height: 30px;
`,P=t.div`
  font-weight: bold;
  font-size: 28px;
  font-family: Pretendard, sans-serif;
`,S=t.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
`,C=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,z=t.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`,l=t.div`
  color: black;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 26.6px;
  word-wrap: break-word;
  text-align: left;
`,W=t.div`
  width: 100%;
  text-align: right;
  color: ${({isEarly:i})=>i?"#4CAF50":"#EB8A8A"};
  font-size: 19px;
  font-weight: 500;
  margin-top: 5px;
`,$=()=>{const[i,f]=r.useState([]),[u,p]=r.useState(!0),[x,d]=r.useState(null),{token:h}=w(),m=y();return r.useEffect(()=>{(async()=>{var o,g;if(!h){alert("로그인이 필요합니다."),m("/");return}const c=new URLSearchParams({page:"1",size:"5",sort:"completionTime"}).toString();try{p(!0),d(null);const n=await b.get(`/api/assignment/complete?${c}`);console.log("API 응답:",n.data);const j=n.data.result.content.map(a=>({date:a.date||"미정",time:a.time||"미정",description:a.description||"설명 없음",delay:a.delay||"지연 정보 없음",status:a.status===""?void 0:a.status}));f(j)}catch(n){v.isAxiosError(n)?d(((g=(o=n.response)==null?void 0:o.data)==null?void 0:g.message)||"서버 오류 발생"):d("예기치 않은 오류가 발생했습니다.")}finally{p(!1)}})()},[h]),u?e.jsx("p",{children:"로딩 중..."}):x?e.jsxs("p",{children:["오류 발생: ",x]}):e.jsxs(E,{children:[e.jsxs(B,{children:[e.jsx(I,{src:k,alt:"Task Icon"}),e.jsx(P,{children:"완료한 과제"})]}),e.jsx(A,{children:i.length===0?e.jsxs("p",{children:["완료된 과제가 없습니다. ",e.jsx("br",{}),"완료된 과제가 있을 때 넘겨받은 content 구조 보고 수정 필요할 듯"]}):i.map((s,c)=>{const o=s.delay.includes("빨랐습니다");return e.jsxs(S,{children:[e.jsxs(C,{children:[e.jsxs(z,{children:[e.jsx(l,{children:s.date}),e.jsx(l,{children:s.time}),e.jsx(l,{children:s.description})]}),e.jsx(T,{status:void 0,children:s.status??"미확인"})]}),e.jsx(W,{isEarly:o,children:s.delay})]},c)})})]})};export{$ as default};
