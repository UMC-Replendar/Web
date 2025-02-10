import{u as g,x,b as w,r as j,j as e,L as s,d as t,y as h}from"./index-B7gUGqRc.js";const m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIUSURBVHgBtVbRccIwDH30+l86Qd0JYAOyAdkAj8AGZAPoBMAEpRMAE0AnCJ0AmKC1ErvIwk4CTd/dO4gsWbEkS+ngNnQNU/Z8MtwbHvAP6BseDb8Fc7vWOvKAM+60ixahxeYLS37iBC2hC/90GVvLmHxnqOo264hnKoih4RllITwZjuGH6xWXIiH5ka2RfGX4Zdizsi3KaFxhiniOHGcBu6yB3VQa6RqDDapzRJHJa/Yo7F1ISVnZ/0uUd0tZbiInC0Fb5wdLui4ju0bPlI7CM69AVbMp6Y8tkxpdl2PvlJoJ1hXGfYTDVnfxd0w3dW/BN5hEnIW6jOMRYacToafcwgyBBDPkYnPSXwh5Lmy02DMT60U4Q4sJ4jlWiHebjMnfnfCBKWwRBg/VBv5koP/LiC7HZ8hhE5wDspuaNnfYi+js2f8RrkM6iOhyDKRAVlMq1mVxzFEWzhHxokkQaW8KNdWE+69FJvSK8KfwR0wM9178NdPVjyi/S8BO2xUyB8oP9cKEOSDZBnEo+Dk/hJr3AmUZ0/OL4Qci8ywA6q9UIDQPDygLUTtn9oULJKgeLfRCaYUjsl+jOsdaGs1QP0gnAWeTBna/401+Ymhc2pObiUP4eXjGJcck59eB5G/2l9aoHlaWjaHgj5hMvGCsz/4JCfx8zC35NdFoEfJTMVRUrSN28WNdJogOboOym/MJQQVxarrBDwdqIKEfJzxdAAAAAElFTkSuQmCC";function P(){const l=g(),{clearAuth:c}=x(),{token:d}=x(),{profile:o,fetchProfile:f}=w();j.useEffect(()=>{o?console.log("기존 프로필 데이터 사용"):(console.log("프로필 데이터가 없음, fetchProfile 실행"),f(l))},[o]);const p=async()=>{if(window.confirm("정말로 로그아웃을 진행하시겠습니까?"))try{const n=await h.post("https://api.replendar.site/api/user/logout",{},{headers:{Authorization:`${d}`}});if(n.data.isSuccess)alert("로그아웃 되었습니다."),c(),l("/login");else throw new Error(n.data.message||"로그아웃 실패")}catch(n){console.error("로그아웃에 실패했습니다",n)}},A=async()=>{if(window.confirm("정말로 회원 탈퇴를 진행하시겠습니까?"))try{const n=await h.delete("https://api.replendar.site/api/user/withdraw",{headers:{Authorization:`${d}`}});if(n.data.isSuccess)alert("회원탈퇴 되었습니다."),c(),l("/login");else throw new Error(n.data.message||"회원 탈퇴 실패")}catch(n){console.error("회원 탈퇴 실패:",n),alert("회원 탈퇴 중 오류가 발생했습니다.")}};return e.jsxs(u,{children:[e.jsxs(v,{children:[e.jsx(b,{src:m}),e.jsx(C,{children:"환경설정"})]}),e.jsxs(y,{children:[e.jsxs(r,{children:[e.jsx(a,{children:"계정"}),e.jsxs(k,{children:[e.jsx(B,{children:"아이디"}),e.jsx(S,{children:(o==null?void 0:o.nickname)||"리플레닝"})]})]}),e.jsxs(r,{children:[e.jsx(a,{children:"앱 설정"}),e.jsx(i,{children:e.jsx(s,{to:"/settings/theme",children:"테마 설정"})})]}),e.jsxs(r,{children:[e.jsx(a,{children:"이용 안내"}),e.jsx(s,{to:"/settings/ask",children:e.jsx(i,{children:"문의하기"})}),e.jsx(s,{to:"/settings/notify",children:e.jsx(i,{children:"공지사항"})}),e.jsx(s,{to:"/settings/detail",children:e.jsx(i,{children:"서비스 이용약관"})})]}),e.jsxs(r,{children:[e.jsx(a,{children:"기타"}),e.jsx(i,{onClick:A,children:"회원 탈퇴"}),e.jsx(i,{onClick:p,children:"로그아웃"})]})]})]})}const u=t.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-left: 100px;
  margin-top: 70px;
  /* width: 100%; */
  gap: 50px;
`,y=t.div`
  display: flex;
  width: 431px;
  height: 755px;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  flex-shrink: 0;
  padding: 65px 30px 0px 30px;
  border-radius: 20px;
  background: var(--bg, #fcf6f5);

  /* bg 1 */
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
`,b=t.img`
  width: 30px;
  height: 30px;
`,C=t.span`
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`,v=t.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,r=t.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    width: 100%;
  }
`,a=t.div`
  color: var(--, #000);

  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 5px;
`,k=t.div`
  color: var(--, #666);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  padding-bottom: 3px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`,i=t.span`
  color: var(--, #666);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  padding-bottom: 3px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.3); /* 밑줄 효과 */
  }
`,S=t.div`
  color: rgba(102, 102, 102, 0.7);

  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`,B=t.div`
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.3); /* 밑줄 효과 */
  }
`;export{P as default};
