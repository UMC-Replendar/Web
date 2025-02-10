import{r,x as w,u as j,j as e,a as y,y as v,d as t}from"./index-BZGV8Fg6.js";import{B as b}from"./blueButton-D_mLbESf.js";const L="data:image/svg+xml,%3csvg%20width='52'%20height='50'%20viewBox='0%200%2052%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector'%20d='M42.3614%200C47.1753%200%2051.1092%203.76792%2051.375%208.5155L51.3892%209.02778V40.9722C51.3892%2045.7861%2047.6211%2049.72%2042.8736%2049.9858L42.3614%2050H10.4169C5.60297%2050%201.66906%2046.2319%201.40347%2041.4844L1.38917%2040.9722L1.38836%2017.7002C2.04022%2017.9307%202.74172%2018.0561%203.4725%2018.0561C4.20319%2018.0561%204.90461%2017.9307%205.55642%2017.7003L5.55583%2040.9722C5.55583%2043.5228%207.52003%2045.6144%2010.0182%2045.8172L10.4169%2045.8333H42.3614C44.9119%2045.8333%2047.0036%2043.8692%2047.2064%2041.3708L47.2225%2040.9722V9.02778C47.2225%206.47731%2045.2583%204.38558%2042.76%204.18278L42.3614%204.16667H10.4169C8.74978%204.16667%207.27864%205.00592%206.40297%206.285C5.53094%205.81944%204.53256%205.55556%203.4725%205.55556C2.96908%205.55556%202.47958%205.61506%202.01064%205.72744C3.26975%202.52497%206.30575%200.215611%209.90467%200.014278L10.4169%200H42.3614ZM29.8503%2027.7864C31.0008%2027.7864%2031.9336%2028.7189%2031.9336%2029.8697C31.9336%2030.9242%2031.15%2031.7958%2030.1331%2031.9339L29.8503%2031.9531H17.3552C16.2046%2031.9531%2015.2718%2031.0203%2015.2718%2029.8697C15.2718%2028.815%2016.0556%2027.9433%2017.0725%2027.8053L17.3552%2027.7864H29.8503ZM35.4231%2018.0451C36.5739%2018.0451%2037.5064%2018.9778%2037.5064%2020.1283C37.5064%2021.1831%2036.7228%2022.0547%2035.7058%2022.1928L35.4231%2022.2117H17.3552C16.2046%2022.2117%2015.2718%2021.2789%2015.2718%2020.1283C15.2718%2019.0737%2016.0556%2018.2021%2017.0725%2018.0641L17.3552%2018.0451H35.4231ZM3.4725%208.33333C5.39031%208.33333%206.945%209.88803%206.945%2011.8058C6.945%2013.7236%205.39031%2015.2783%203.4725%2015.2783C1.55469%2015.2783%200%2013.7236%200%2011.8058C0%209.88803%201.55469%208.33333%203.4725%208.33333Z'%20fill='%23212121'/%3e%3c/svg%3e",T=t.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,k=t.div`
  background-color: #fcf6f5;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 34.5px 109px 30.5px 37px;
`,H=t.div`
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
`,A=t.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
`,I=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,P=t.div`
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
`,S=t.div`
  width: 100%;
  text-align: right;
  color: ${({isEarly:i})=>i?"#4CAF50":"#EB8A8A"};
  font-size: 19px;
  font-weight: 500;
  margin-top: 5px;
`,Z=()=>{const[i,f]=r.useState([]),[u,x]=r.useState(!0),[p,d]=r.useState(null),{token:h}=w(),m=j();return r.useEffect(()=>{(async()=>{var o,g;if(!h){alert("로그인이 필요합니다."),m("/");return}const c=new URLSearchParams({page:"1",size:"5",sort:"completionTime"}).toString();try{x(!0),d(null);const n=await y.get(`/api/assignment/complete?${c}`);console.log("API 응답:",n.data);const C=n.data.result.content.map(a=>({date:a.date||"미정",time:a.time||"미정",description:a.description||"설명 없음",delay:a.delay||"지연 정보 없음",status:a.status===""?void 0:a.status}));f(C)}catch(n){v.isAxiosError(n)?d(((g=(o=n.response)==null?void 0:o.data)==null?void 0:g.message)||"서버 오류 발생"):d("예기치 않은 오류가 발생했습니다.")}finally{x(!1)}})()},[h]),u?e.jsx("p",{children:"로딩 중..."}):p?e.jsxs("p",{children:["오류 발생: ",p]}):e.jsxs(T,{children:[e.jsxs(H,{children:[e.jsx(B,{src:L,alt:"Task Icon"}),e.jsx(E,{children:"완료한 과제"})]}),e.jsx(k,{children:i.length===0?e.jsxs("p",{children:["완료된 과제가 없습니다. ",e.jsx("br",{}),"완료된 과제가 있을 때 넘겨받은 content 구조 보고 수정 필요할 듯"]}):i.map((s,c)=>{const o=s.delay.includes("빨랐습니다");return e.jsxs(A,{children:[e.jsxs(I,{children:[e.jsxs(P,{children:[e.jsx(l,{children:s.date}),e.jsx(l,{children:s.time}),e.jsx(l,{children:s.description})]}),e.jsx(b,{status:void 0,children:s.status??"미확인"})]}),e.jsx(S,{isEarly:o,children:s.delay})]},c)})})]})};export{Z as default};
