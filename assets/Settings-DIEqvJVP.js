import{u as m,e as h,b as w,r as j,j as t,L as r,d as e,t as f}from"./index-BCNRdKTe.js";import{S as i}from"./sweetalert2.esm.all-CumHaNCI.js";const C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIUSURBVHgBtVbRccIwDH30+l86Qd0JYAOyAdkAj8AGZAPoBMAEpRMAE0AnCJ0AmKC1ErvIwk4CTd/dO4gsWbEkS+ngNnQNU/Z8MtwbHvAP6BseDb8Fc7vWOvKAM+60ixahxeYLS37iBC2hC/90GVvLmHxnqOo264hnKoih4RllITwZjuGH6xWXIiH5ka2RfGX4Zdizsi3KaFxhiniOHGcBu6yB3VQa6RqDDapzRJHJa/Yo7F1ISVnZ/0uUd0tZbiInC0Fb5wdLui4ju0bPlI7CM69AVbMp6Y8tkxpdl2PvlJoJ1hXGfYTDVnfxd0w3dW/BN5hEnIW6jOMRYacToafcwgyBBDPkYnPSXwh5Lmy02DMT60U4Q4sJ4jlWiHebjMnfnfCBKWwRBg/VBv5koP/LiC7HZ8hhE5wDspuaNnfYi+js2f8RrkM6iOhyDKRAVlMq1mVxzFEWzhHxokkQaW8KNdWE+69FJvSK8KfwR0wM9178NdPVjyi/S8BO2xUyB8oP9cKEOSDZBnEo+Dk/hJr3AmUZ0/OL4Qci8ywA6q9UIDQPDygLUTtn9oULJKgeLfRCaYUjsl+jOsdaGs1QP0gnAWeTBna/401+Ymhc2pObiUP4eXjGJcck59eB5G/2l9aoHlaWjaHgj5hMvGCsz/4JCfx8zC35NdFoEfJTMVRUrSN28WNdJogOboOym/MJQQVxarrBDwdqIKEfJzxdAAAAAElFTkSuQmCC";function R(){const c=m(),{clearAuth:d}=h(),{token:x}=h(),{profile:s,fetchProfile:p}=w();j.useEffect(()=>{s?console.log("기존 프로필 데이터 사용"):(console.log("프로필 데이터가 없음, fetchProfile 실행"),p(c))},[s]);const g=async()=>{(await i.fire({icon:"warning",title:"정말로 로그아웃 하시겠습니까?",confirmButtonColor:"#25C26C",showCancelButton:!0,confirmButtonText:"네, 로그아웃 합니다.",cancelButtonText:"취소"})).isConfirmed&&(i.fire({title:"잠시만 기다려 주세요...",text:"로그아웃을 처리 중입니다.",allowOutsideClick:!1,didOpen:()=>{i.showLoading()}}),setTimeout(async()=>{try{const n=await f.post("https://api.replendar.site/api/user/logout",{},{headers:{Authorization:`${x}`}});if(n.data.isSuccess)i.fire({icon:"success",title:"로그아웃 되었습니다!",text:"잠시 후 로그인 화면으로 이동합니다.",timer:2e3,showConfirmButton:!1}),setTimeout(()=>{d(),c("/login")},2e3);else throw new Error(n.data.message||"로그아웃 실패")}catch(n){console.error("로그아웃 실패:",n),i.fire({icon:"error",title:"로그아웃 실패",text:"잠시 후 다시 시도해 주세요."})}},2e3))},A=async()=>{(await i.fire({icon:"warning",title:"정말로 회원 탈퇴를 진행하시겠습니까?",confirmButtonColor:"#25C26C",text:"이 작업은 되돌릴 수 없습니다.",showCancelButton:!0,confirmButtonText:"네, 탈퇴합니다",cancelButtonText:"취소"})).isConfirmed&&(i.fire({title:"처리 중...",text:"회원 탈퇴를 진행하고 있습니다.",allowOutsideClick:!1,didOpen:()=>{i.showLoading()}}),setTimeout(async()=>{try{const n=await f.delete("https://api.replendar.site/api/user/withdraw",{headers:{Authorization:`${x}`}});if(n.data.isSuccess)i.fire({icon:"success",title:"회원탈퇴가 완료되었습니다.",text:"잠시 후 로그인 화면으로 이동합니다.",timer:2e3,showConfirmButton:!1}),setTimeout(()=>{d(),c("/login")},2e3);else throw new Error(n.data.message||"회원 탈퇴 실패")}catch(n){console.error("회원 탈퇴 실패:",n),i.fire({icon:"error",title:"회원 탈퇴 실패",text:"잠시 후 다시 시도해주세요."})}},2e3))};return t.jsxs(y,{children:[t.jsxs(S,{children:[t.jsx(b,{src:C}),t.jsx(k,{children:"환경설정"})]}),t.jsxs(B,{children:[t.jsxs(a,{children:[t.jsx(l,{children:"계정"}),t.jsxs(v,{children:[t.jsx(T,{children:"아이디"}),t.jsx(E,{children:(s==null?void 0:s.nickname)||"리플레닝"})]})]}),t.jsxs(a,{children:[t.jsx(l,{children:"앱 설정"}),t.jsx(o,{children:t.jsx(r,{to:"/settings/theme",children:"테마 설정"})})]}),t.jsxs(a,{children:[t.jsx(l,{children:"이용 안내"}),t.jsx(r,{to:"/settings/ask",children:t.jsx(o,{children:"문의하기"})}),t.jsx(r,{to:"/settings/notify",children:t.jsx(o,{children:"공지사항"})}),t.jsx(r,{to:"/settings/detail",children:t.jsx(o,{children:"서비스 이용약관"})})]}),t.jsxs(a,{children:[t.jsx(l,{children:"기타"}),t.jsx(o,{onClick:A,children:"회원 탈퇴"}),t.jsx(o,{onClick:g,children:"로그아웃"})]})]})]})}const y=e.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-left: 100px;
  margin-top: 70px;
  /* width: 100%; */
  gap: 50px;
`,B=e.div`
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
`,b=e.img`
  width: 30px;
  height: 30px;
`,k=e.span`
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`,S=e.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,a=e.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    width: 100%;
  }
`,l=e.div`
  color: var(--, #000);

  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 5px;
`,v=e.div`
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
`,o=e.span`
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
`,E=e.div`
  color: rgba(102, 102, 102, 0.7);

  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`,T=e.div`
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.3); /* 밑줄 효과 */
  }
`;export{R as default};
