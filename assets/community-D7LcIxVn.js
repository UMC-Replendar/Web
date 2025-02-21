import{d as t,r as u,S as y,j as e,g as fe,c as z,D as je,b as F,h as oe,i as q,R as me,a as we,t as be}from"./index-DCLxYTjz.js";import{b as S,a as I,c as L,C as U,U as _,P as E,G as de,S as ae,s as ve,T as ye,L as ke,d as Ce,D as Se,A as K}from"./AddTaskModal-Dt7kRQsp.js";import{P as Ie,C as Fe,N as Me,S as Ae,A as R,a as G,U as De,D as $e}from"./OngoingTasks-C_XI0lmG.js";import{s as Be,S as Ee,a as ze,d as Ne,p as Te,g as Ge,b as Le,c as Ye,e as Oe,A as Pe}from"./commuApi-BRQK-Xc5.js";import{F as qe,a as Ke,G as Re,T as Qe,N as H,L as Ue}from"./skeleton-2MwILm4q.js";import{F as _e}from"./friendNewsRender-DgYofJRK.js";import{B as A}from"./blueButton-iv1k7oEB.js";import{u as He,a as Je,C as Ve}from"./useGetInfiniteData-DUTu3KS2.js";import"./useBaseQuery-CLL0ZrG3.js";const We="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2030%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0102%2024.4539C19.0542%2024.4539%2023.9538%2019.5544%2023.9538%2013.5104C23.9538%207.46647%2019.0542%202.56689%2013.0102%202.56689C6.96629%202.56689%202.06671%207.46647%202.06671%2013.5104C2.06671%2019.5544%206.96629%2024.4539%2013.0102%2024.4539Z'%20stroke='%23666666'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M27.9332%2028.4333L20.9692%2021.4692'%20stroke='%23666666'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",J=()=>{const[i,d]=u.useState(""),[s,c]=u.useState(""),{data:r,isLoading:j}=S(i?`/api/friends/search?nickname=${i}`:""),p=Array.isArray(r)&&r.length>0,h=p?r[0]:null,b=I({mutationFn:n=>Be(n),onSuccess:()=>{y.fire({icon:"success",text:`'${i}' 님에게 친구 요청을 보냈습니다.`,timer:2e3,showConfirmButton:!1})},onError:n=>{y.fire({icon:"error",text:"친구 요청을 보내는 데 실패했습니다.",confirmButtonText:"확인",showConfirmButton:!0}),console.error(n)}}),g=n=>{c(n.target.value)},o=n=>{n.key==="Enter"&&a()},a=()=>{const n=s.trim();!n||i===n||d(s)};return e.jsxs(Xe,{children:[e.jsxs(rt,{children:[e.jsx(it,{src:We,alt:"searchIcon"}),e.jsx(st,{value:s,onKeyDown:o,onChange:g,placeholder:"등록할 친구의 이름을 입력해주세요"}),e.jsx(Z,{id:"searchBtn",onClick:a,children:"검색"})]}),e.jsxs(ot,{children:[!p&&!!i&&!j&&e.jsx(W,{width:"900px",children:e.jsxs(Ze,{children:["'",i,"' 검색 결과를 찾을 수 없습니다. 다시 시도해주세요."]})}),!!i&&j&&e.jsx(qe,{}),p?e.jsxs(e.Fragment,{children:[e.jsxs(nt,{children:[e.jsx(Ie,{}),e.jsxs(et,{children:[e.jsx(V,{children:h.nickname}),e.jsx(V,{children:h.name}),e.jsx(tt,{children:h.statusMessage})]})]}),e.jsx(W,{children:e.jsx(Z,{width:"134px",onClick:()=>b.mutate(h.friendId),children:"친구요청"})})]}):null]})]})},Ze=t.span`
  font-weight: bold;
  color: #c82333;
  font-size: 24px;
`,Xe=t.div`
  width: 100%;
  padding: 20px;
`,et=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`,V=t.h3`
  margin: 0px;
  font-size: 19px;
`,tt=t.p`
  margin: 10px 0px 0px 0px;
  color: #666;
  font-size: 16px;
`,W=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: ${i=>i.width||"auto"};
  font-size: 20px;
  color: red;
`,nt=t.div`
  background-color: white;
  border-radius: 20px;
  width: 75%;
  margin-left: 40px;
  display: flex;
  gap: 40px;
  padding: 20px;
  border: 1px solid rgba(232, 232, 232, 1);
  height: 132px;
`,it=t.img`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 1;
  margin-left: 40px;
`,st=t.input`
  width: 75%;
  padding-left: 50px;
  margin-left: 40px;
  height: 100%;
  border-radius: 50px;
  border: 1px solid rgba(232, 232, 232, 1);
  font-size: 19px;
  &:focus {
    outline: none;
  }
`,Z=t.button`
  color: rgba(102, 102, 102, 1);
  border-radius: 20px;

  border: 1px solid #e8e8e8;
  margin-left: 40px;
  background-color: white;
  height: 60px;
  width: ${i=>i.width||"97px"};
  font-size: 19px;
    &:focus {
    outline: none;  
    
`,rt=t.div`
  position: relative;
  margin: 30px 0px;

  align-items: center;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
`,ot=t.div`
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: start;
  align-items: start;
  margin-top: 10px;
`,dt=()=>e.jsx(at,{children:e.jsx(_e,{})}),at=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 20px;
`,lt=t.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 452px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 2000;
`,ct=t.h5`
  font-size: 23px;
  font-weight: 600;
  line-height: 140%;
  margin-top: 24px;
  margin-left: 24px;
`,xt=t.div`
  display: flex;
  width: 394px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  margin-top: 50px;
  margin-left: 29px;
`,pt=t.div`
  display: flex;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  white-space: nowrap;
  margin-top: 28px;
  margin-bottom: 10px;
  margin-left: 29px;
`,ht=t.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,ut=t.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  width: 150px; /* 원하는 고정 너비 */
  word-break: break-word; /* 긴 단어를 줄바꿈 */
  white-space: normal; /* 줄바꿈 허용 */
`,O=t.div`
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
`,gt=t.div`
  display: flex;
  width: 200px;
  height: 38px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`,ft=t.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`,jt=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,mt=({friendId:i})=>{const{closeFriendModal:d}=L(),{id:s}=fe(),[c,r]=u.useState([]),[j,p]=u.useState({}),{data:h}=S(`/api/assignment?userId=${s}`),b=I({mutationFn:({friendId:n,assignmentIds:f})=>Ee({friendId:n,assignmentIds:f}),onSuccess:()=>{y.fire({icon:"success",text:"과제가 공유되었습니다",timer:2e3,showConfirmButton:!1}),d()},onError:n=>{y.fire({icon:"error",text:"과제 공유에 실패했습니다",timer:2e3,showConfirmButton:!1}),console.error(n)}}),g=h.every(n=>j[n.assignmentId]),o=()=>{if(g)r([]),p({});else{const n=h.reduce((f,m)=>(f[m.assignmentId]=!0,f),{});r(h.map(f=>f.assignmentId)),p(n)}},a=n=>{const f=[...c];c.includes(n)?(r(f.filter(m=>m!==n)),p(m=>({...m,[n]:!1}))):(r([...f,n]),p(m=>({...m,[n]:!0})))};return e.jsx(jt,{onClick:d,children:e.jsxs(lt,{onClick:n=>n.stopPropagation(),children:[e.jsx(ct,{children:"공유할 과제 선택"}),e.jsxs(xt,{children:["전체 선택",e.jsx("div",{style:{cursor:"pointer"},onClick:o,children:e.jsx("img",{src:g?U:_,alt:"Checkbox Icon"})})]}),h.map(n=>e.jsxs(pt,{children:[e.jsxs(ht,{children:[e.jsx(ut,{children:n.title}),e.jsx(O,{})]}),e.jsxs(gt,{children:[e.jsx(O,{children:"마감일"}),e.jsx(O,{children:n.due_date}),e.jsx("div",{onClick:()=>a(n.assignmentId),style:{cursor:"pointer"},children:e.jsx("img",{src:j[n.assignmentId]?U:_,alt:"Checkbox Icon"})})]})]},n.assignmentId)),e.jsx(ft,{onClick:()=>b.mutate({friendId:i,assignmentIds:c}),children:"공유하기"})]})})},le=({data:i,queryKey:d,groupId:s})=>{const c=z(),[r,j]=u.useState({isOpen:!1,selectedId:null,note:""}),{isFriendModalOpen:p,openFriendModal:h,resetFriends:b}=L(),[g,o]=u.useState(!1),[a,n]=u.useState(""),[f,m]=u.useState(!1),w=I({mutationFn:({friendId:l,buddyStatus:C})=>ze({friendId:l,buddyStatus:C}),onSuccess:()=>{c.invalidateQueries({queryKey:[d]})},onError:l=>{y.fire({icon:"error",text:"친한 친구 설정하는 데 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(l)}}),v=I({mutationFn:({friendId:l})=>Ne(l),onSuccess:()=>{c.invalidateQueries({queryKey:[d]})},onError:l=>{y.fire({icon:"error",text:"친구 삭제하는 데 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(l)}}),k=I({mutationFn:({friendId:l,note:C})=>Te({friendId:l,note:C}),onSuccess:()=>{c.invalidateQueries({queryKey:[`/api/friends/note?friendId=${r.selectedId}`]}),o(!1)},onError:l=>{y.fire({icon:"error",text:"메모 업데이트에 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(l)}}),{data:x}=S(r.selectedId?`/api/friends/note?friendId=${r.selectedId}`:""),{data:M}=S(f?`/api/assignment/friend/${r.selectedId}/public-assignments`:""),Y=I({mutationFn:({groupId:l,friendshipId:C})=>Ge({groupId:l,friendshipId:C}),onSuccess:()=>{y.fire({icon:"success",text:"친구가 삭제되었습니다",timer:2e3,showConfirmButton:!1}),c.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:l=>{y.fire({icon:"error",text:"그룹에 친구 삭제하기 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(l)}});u.useEffect(()=>{b()},[r.selectedId,r.isOpen]);const pe=Array.isArray(x)&&x.length>0?x[0].note:null,he=()=>{o(!0),n((x==null?void 0:x.note)||"")},ue=()=>{k.mutate({friendId:r.selectedId,note:a})},ge=l=>{m(!1),j(C=>({isOpen:C.selectedId!==l||!C.isOpen,selectedId:C.selectedId===l?null:l,note:C.selectedId===l?C.note:""}))};return e.jsx(e.Fragment,{children:i.map((l,C)=>e.jsxs("div",{children:[f&&r.selectedId&&e.jsx(e.Fragment,{children:e.jsxs(bt,{children:[e.jsxs(St,{children:[e.jsx(N,{width:"100px",bold:!0,children:l.nickname}),e.jsxs(N,{bold:!0,children:["진행 중인 과제: ",l.ongoingAssignments,"개"]})]}),e.jsx(vt,{onClick:()=>m(!1),children:"닫기"}),e.jsx(Fe,{tasks:M.map(D=>({name:D.title,deadline:D.due_date}))})]})}),p&&e.jsx(mt,{friendId:l.friendId}),e.jsxs(yt,{children:[e.jsxs(Ct,{children:[e.jsx(wt,{src:l.profileImageUrl||je}),e.jsx(N,{width:"100px",children:l.nickname})]}),e.jsxs(N,{children:["진행 중인 과제: ",l.ongoingAssignments,"개"]}),e.jsxs(kt,{children:[s&&e.jsx(A,{status:"그룹에서 삭제하기",onClick:()=>Y.mutate({groupId:s,friendshipId:l.friendshipId}),children:"그룹에서 삭제하기"}),e.jsx(Me,{fill:r.selectedId===l.friendId?"rgba(74, 198, 226, 1)":"black",onClick:()=>ge(l.friendId)})]})]}),r.isOpen&&r.selectedId===l.friendId&&e.jsxs(It,{onClick:D=>D.stopPropagation(),top:`${C*67+320}px`,children:[e.jsxs(P,{children:[e.jsxs("span",{children:["진행중인 과제: ",l.ongoingAssignments,"개"]}),e.jsx("div",{onClick:()=>m(!0),children:"일정확인"})]}),e.jsx(X,{onClick:h,children:"과제공유"}),e.jsxs(P,{children:[e.jsx("div",{style:{display:"flex",transformOrigin:"left",alignItems:"center",transform:"scale(0.5)"},children:e.jsx(Ae,{isOn:l.buddyStatus==="YES",onToggle:()=>{w.mutate({friendId:l.friendId,buddyStatus:l.buddyStatus==="YES"?"NO":"YES"})}})}),e.jsx("div",{children:"친한친구설정"})]}),e.jsx(P,{children:g?e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",onChange:D=>n(D.target.value),value:a,placeholder:"메모를 수정하세요"}),e.jsx("div",{onClick:ue,children:"수정완료"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:pe}),e.jsx("div",{onClick:he,children:"메모수정"})]})}),e.jsx(X,{onClick:()=>v.mutate({friendId:l.friendId}),children:"친구삭제"})]})]},l.friendId))})},wt=t.div`
  width: 34px;
  height: 34px;
  border-radius: 300px;
  background-image: url(${i=>i.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #d9d9d9;
`,bt=t.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  min-width: 300px;
`,vt=t.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: rgba(57, 130, 226, 1);
  }
`,yt=t.div`
  display: flex;
  position: relative;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  height: 67px;
  background: white;
  border-radius: 20px;
  padding: 0px 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`,kt=t.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`,N=t.div`
  font-size: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({width:i})=>i||"auto"};
  font-weight: ${({bold:i})=>i?"bold":"normal"};
`,Ct=t.div`
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,St=t.div`
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`,It=t.div`
  position: absolute;
  top: ${i=>i.top};
  right: 250px;
  width: 300px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #ccc;

  border-radius: 10px;

  flex-direction: column;
  z-index: 1;
`,P=t.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 10px 8px 10px;
  height: 38px;
  z-index: 2;

  span {
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 18.2px;
    text-align: right;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(102, 102, 102, 1);
  }
  div {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    text-align: right;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`,X=t.p`
  text-align: right; /* 텍스트 오른쪽 정렬 */
  margin: 0px;
  padding: 8px 10px 8px 10px;
  height: 38px;
`,Ft=({expanded:i})=>{const d=i==="true"?"/api/friends":"/api/friends?limit=5",{data:s,isLoading:c}=S(d);return c?e.jsx(ee,{children:e.jsx(Ke,{count:2})}):e.jsxs(ee,{children:[e.jsx(le,{data:s,queryKey:d})," "]})},ee=t.div`
  width: 100%;

  padding: 20px;
`,Mt="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9643%2012.9695L15.0002%2019.9336L8.03613%2012.9695'%20stroke='black'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",At="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9643%2017.0308L15.0002%2010.0667L8.03613%2017.0308'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ce=()=>{const i=z(),{closeModal:d}=F();return I({mutationFn:({groupId:s,friendshipIds:c})=>Le({groupId:s,friendshipIds:c}),onSuccess:()=>{d(),i.invalidateQueries({queryKey:["/api/friend-groups"]}),y.fire({icon:"success",text:"그룹에 친구가 추가되었습니다",timer:2e3,showConfirmButton:!1})},onError:s=>{y.fire({icon:"error",text:"그룹에 친구 추가하기 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(s)}})},Dt=({groupId:i})=>{const{closeModal:d}=F(),{isFriendModalOpen:s,openFriendModal:c,nicknames:r,updateFriendsData:j,setFriendData:p,friendData:h,resetFriends:b,friendshipIds:g}=L(),o=ce();u.useEffect(()=>{b()},[d]),u.useEffect(()=>{j()},[s]);const{data:a}=S(s?`/api/friend-groups/${i}/available-friends`:"");u.useEffect(()=>{JSON.stringify(a)!==JSON.stringify(h)&&p(a)},[a,c]);const n=()=>{if(r.length===0){y.fire({icon:"warning",text:"그룹에 추가할 친구를 선택하세요",timer:2e3,showConfirmButton:!1});return}const f=g.filter(m=>m!==null);o.mutate({groupId:i,friendshipIds:f})};return e.jsxs(Bt,{children:[e.jsx("h1",{children:"그룹에 추가하기"}),e.jsxs(Et,{children:[" ",e.jsx("label",{children:"그룹에 넣을 친구"})]}),e.jsxs(Tt,{children:[e.jsxs(E,{onClick:c,children:[" ",e.jsx("img",{src:de,alt:"Gray Plus Icon"}),"추가"]}),r.length>0&&e.jsx(zt,{children:r.map(f=>e.jsx(Nt,{children:f},f))})]}),s&&e.jsx(ae,{}),e.jsx($t,{children:e.jsx(E,{onClick:n,children:"완료"})})]})},$t=t.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,Bt=t.div`
  padding: 20px;
`,Et=t.div`
  padding: 20px 0px 40px 0px;
  label {
    font-size: 16px;
    color: #666;
  }
`,zt=t.div`
  display: flex;
  align-items: center;
  gap: 8px;

  flex-wrap: wrap;
`,Nt=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(102, 102, 102, 1);
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(186, 186, 186, 1);
  font-size: 14px;
  width: 64px;
  height: 31px;
`,Tt=t.div`
  display: flex;
  gap: 8px;
`,Gt=()=>{const{closeModal:i}=F(),d=ce(),{isFriendModalOpen:s,openFriendModal:c,nicknames:r,updateFriendsData:j,setFriendData:p,friendData:h,resetFriends:b,friendshipIds:g}=L();u.useEffect(()=>{b()},[i]);const[o,a]=u.useState(""),n=z(),f=I({mutationFn:v=>Ye(v),onSuccess:v=>{const k=g.filter(x=>x!==null);d.mutate({groupId:v.groupId,friendshipIds:k}),y.fire({icon:"success",text:"그룹이 생성되었습니다",timer:2e3,showConfirmButton:!1}),i(),n.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:v=>{y.fire({icon:"error",text:"그룹을 생성하는 데 실패했습니다.",confirmButtonText:"확인",showConfirmButton:!0}),console.error(v)}}),m=()=>{if(!o.trim()){y.fire({icon:"warning",text:"그룹 이름을 입력하세요",timer:2e3,showConfirmButton:!1});return}f.mutate(o)};u.useEffect(()=>{j()},[s]);const{data:w}=S(s?"/api/friends":"");return u.useEffect(()=>{JSON.stringify(w)!==JSON.stringify(h)&&p(w)},[w,c]),e.jsxs(Pt,{children:[e.jsx("h1",{children:"그룹 만들기"}),e.jsxs(Ot,{children:[e.jsxs("div",{children:[" ",e.jsx("label",{children:"그룹명"}),e.jsx(Lt,{placeholder:"그룹 이름을 입력하세요",value:o,onChange:v=>a(v.target.value)})]}),e.jsx("label",{children:"그룹에 넣을 친구"})]}),e.jsxs(Rt,{children:[e.jsxs(E,{onClick:c,children:[e.jsx("img",{src:de,alt:"Gray Plus Icon"}),"추가"]}),r.length>0&&e.jsx(qt,{children:r.map(v=>e.jsx(Kt,{children:v},v))})]}),s&&e.jsx(ae,{}),e.jsx(Yt,{children:e.jsx(E,{onClick:m,children:"완료"})})]})},Lt=t.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 200px;
  color: #9a9a9a;
`,Yt=t.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,Ot=t.div`
  label {
    font-size: 16px;
    color: #666;
  }
  div {
    gap: 20px;
    display: flex;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10px 0px;
  gap: 10px;
`,Pt=t.div`
  padding: 20px;
`,qt=t.div`
  display: flex;
  align-items: center;
  gap: 8px;

  flex-wrap: wrap;
`,Kt=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(102, 102, 102, 1);
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(186, 186, 186, 1);
  font-size: 14px;

  height: 31px;
`,Rt=t.div`
  display: flex;
  gap: 8px;
`,Qt="data:image/svg+xml,%3csvg%20width='19'%20height='3'%20viewBox='0%200%2019%203'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.16016%201.5H17.1602'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ut=({expanded:i})=>{const{openModal:d}=F(),s=z(),c=n=>{d(e.jsx(Dt,{groupId:n}))},r=()=>{d(e.jsx(Gt,{}))},j=n=>{a(f=>{const m=[...f];return m[n]=!m[n],m})},{data:p,isLoading:h}=S("/api/friend-groups"),b=i==="true"?p:p.slice(0,4),g=I({mutationFn:n=>Oe(n),onSuccess:()=>{s.invalidateQueries({queryKey:["/api/friend-groups"]}),y.fire({icon:"success",text:"그룹이 삭제되었습니다",timer:2e3,showConfirmButton:!1})},onError:n=>{y.fire({icon:"error",text:"그룹 삭제하는 데 실패했습니다",timer:2e3,showConfirmButton:!1}),console.error(n)}}),[o,a]=u.useState(new Array(p.length).fill(!1));return e.jsxs(Ht,{children:[e.jsx(_t,{children:e.jsxs(R,{onClick:r,children:["그룹 만들기",e.jsx(G,{})]})}),h&&e.jsx(Re,{count:4}),b.map(n=>e.jsxs("div",{children:[e.jsxs(Jt,{status:o[n.groupId]!==void 0?o[n.groupId].toString():"false",children:[e.jsxs(T,{children:[n.groupName,e.jsx("img",{src:o[n.groupId]?At:Mt,alt:o[n.groupId]?"UpArrow Icon":"DownArrow Icon",onClick:()=>j(n.groupId)})]}),o[n.groupId]&&e.jsxs(T,{gap:"50px",children:[e.jsxs(T,{onClick:()=>g.mutate(n.groupId),children:["그룹 삭제하기",e.jsx("img",{src:Qt,alt:"MinusIcon"})]}),e.jsxs(T,{onClick:()=>c(n.groupId),children:["그룹에 추가하기 ",e.jsx(G,{fill:"white"})]})]})]}),o[n.groupId]&&e.jsx(Vt,{children:e.jsx(le,{data:n.friends,queryKey:"/api/friend-groups",groupId:n.groupId})})]},n.groupId))]})},_t=t.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  height: 67px;
`,Ht=t.div`
  width: 100%;
  padding: 20px;
`,Jt=t.div`
  display: flex;
  justify-content: space-between;
  background-color: ${i=>i.status==="true"?"#666":"white"};
  color: ${i=>i.status==="true"?"white":"black"};
  font-size: 23px;

  height: 67px;
  border-radius: 20px;
  padding: 0px 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,T=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${i=>i.gap};
`,Vt=t.div`
  display: flex;
  flex-direction: column;
`;oe.locale("ko");const xe=({queryKey:i})=>{const[d,s]=u.useState(1),[c,r]=u.useState(null),[j,p]=u.useState(""),[h,b]=u.useState(""),[g,o]=u.useState(oe()),{closeModal:a}=F(),{setAcademicYear:n}=q(),f=z(),{data:m}=S(`/api/major/lectures/list/${d}`),w=I({mutationFn:({lectureId:x,title:M,content:Y,endDate:Q})=>Pe({lectureId:x,title:M,content:Y,endDate:Q}),onSuccess:()=>{y.fire({icon:"success",text:"학과 과제가 추가되었습니다",timer:2e3,showConfirmButton:!1}),n(d),a(),f.invalidateQueries({queryKey:[i]})},onError:x=>{y.fire({icon:"error",text:"학과 과제 추가하기에 실패했습니다.",confirmButtonText:"확인",showConfirmButton:!0}),console.error(x)}}),v=x=>{const M=Number(x.target.value);r(M)},k=()=>{if(c===null){y.fire({icon:"warning",text:"강좌를 선택해주세요"});return}if(!j.trim()){y.fire({icon:"warning",text:"과제명을 선택해주세요",timer:2e3,showConfirmButton:!1});return}if(!g){y.fire({icon:"warning",text:"마감일을 선택해주세요",timer:2e3,showConfirmButton:!1});return}const x=`${g.format("YYYY/MM/DD")}`,M={lectureId:c,title:j,content:h.trim()||"",endDate:x};w.mutate(M)};return e.jsxs(e.Fragment,{children:[e.jsx(Xt,{children:"학과 과제 추가하기"}),e.jsxs(B,{children:[e.jsx($,{children:"과제명"}),e.jsx(en,{placeholder:"과제 이름을 입력하세요",value:j,onChange:x=>p(x.target.value)})]}),e.jsxs(B,{children:[e.jsx($,{children:"학년"}),e.jsxs(te,{value:d,onChange:x=>s(Number(x.target.value)),children:[e.jsx("option",{value:1,children:"1학년"}),e.jsx("option",{value:2,children:"2학년"}),e.jsx("option",{value:3,children:"3학년"}),e.jsx("option",{value:4,children:"4학년"})]})]}),e.jsxs(B,{children:[e.jsx($,{children:"강좌"}),e.jsxs(te,{onChange:v,children:[e.jsx("option",{value:"",hidden:!0,children:"강좌를 선택하세요"}),m.map(x=>e.jsxs("option",{value:x.lectureId,children:[x.lectureName," - ",x.professor]},x.lectureId))]})]}),e.jsxs(B,{children:[e.jsx($,{children:"과제마감일"}),e.jsx(ke,{dateAdapter:Ce,children:e.jsx(Se,{value:g,onChange:x=>o(x||g),format:"YYYY/MM/DD",slots:{textField:Wt}})})]}),e.jsxs(B,{children:[e.jsx($,{children:"메모"}),e.jsx(Zt,{value:h,onChange:x=>{b(x.target.value)}})]}),e.jsxs(tn,{children:[" ",e.jsx(E,{onClick:k,children:"일정 추가하기"})]})]})},te=t.select`
  width: 300px;
  background: white;
  border: none;
  outline: none;
  font-size: 19px;
`,Wt=ve(ye)({width:"auto",maxWidth:"200px",boxSizing:"border-box","& .MuiInputBase-root":{display:"flex",alignItems:"center",fontSize:"19px",padding:"8px",height:"47px"},"& .MuiOutlinedInput-root":{borderRadius:"5px",border:"0.5px solid #E8E8E8",backgroundColor:"white","&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#E8E8E8"}},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#E8E8E8"},"& .MuiSvgIcon-root":{fontSize:"1.2rem"}}),Zt=t.textarea`
  background-color: white;
  width: 400px;
  height: 200px;
  border: 1px solid rgba(213, 213, 213, 1);
  &:focus {
    outline: none;
  }
`,Xt=t.h1`
  padding-bottom: 40px;
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`,en=t.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 220px;

  font-family: Pretendard;
  font-size: 19px;
  font-weight: 500;
  line-height: 26.6px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`,$=t.label`
  width: 150px;
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`,B=t.div`
  display: flex;
  gap: 20px;
  padding: 5px;
`,tn=t.label`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,nn=t.div`
  width: 100%;
  padding: 20px;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 2px; /* 셀 간격 */
  }
  th {
    color: #666;
  }
  th,
  td {
    height: 67px;
    text-align: center;
    vertical-align: middle;
    padding: 12px 15px;
    font-size: 19px;
    background-color: white;
  }
  tr {
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  }
  tr th:first-child,
  tr td:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  /* 각 행(tr)의 마지막 셀을 오른쪽 둥글게 */
  tr th:last-child,
  tr td:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`,sn=t.div`
  div {
    display: flex;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67px;
`,rn=t.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
`,ne=t.select`
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: rgba(252, 246, 245, 1);
  border: none;
  outline: none;
  font-size: 19px;
  margin-left: 10px;
`,on=t.label`
  width: 100px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  font-size: 19px;
  align-items: center;
`,dn=t.td`
  background-color: transparent;
  padding: 0;
  width: 100%;
`,an=({expanded:i})=>{const{openModal:d}=F(),{academicYear:s,setAcademicYear:c,sortKey:r,setSortKey:j}=q(),p=`/api/major/lectures/sort/${r}?sort=asc&academicYear=${s}&majorId=`,{data:h,isLoading:b}=S(p),g=i==="true"?h:h.slice(0,3),o=()=>{d(e.jsx(xe,{queryKey:p}))};return e.jsxs(nn,{children:[e.jsxs(sn,{children:[e.jsx(rn,{children:e.jsxs(R,{onClick:o,children:["과제 추가하기",e.jsx(G,{fill:"currentColor"})]})}),e.jsxs("div",{children:[e.jsxs(ne,{value:s,onChange:a=>c(Number(a.target.value)),children:[e.jsx("option",{value:"1",children:"1학년"}),e.jsx("option",{value:"2",children:"2학년"}),e.jsx("option",{value:"3",children:"3학년"}),e.jsx("option",{value:"4",children:"4학년"}),e.jsx("option",{value:"5",children:"5학년"})]}),e.jsx(on,{children:"정렬"}),e.jsxs(ne,{onChange:a=>j(a.target.value),value:r,children:[e.jsx("option",{value:"professor",children:"교수명"}),e.jsx("option",{value:"registration",children:"강좌명"}),e.jsx("option",{value:"assignment",children:"과제명"}),e.jsx("option",{value:"due",children:"마감일"})]})]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"학년"}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"교수"}),e.jsx("th",{children:"강좌"}),e.jsx("th",{children:"과제명"}),e.jsx("th",{children:"마감일"}),e.jsx("th",{children:"과제등록"})]})}),e.jsx("tbody",{children:b?e.jsx("tr",{children:e.jsx(dn,{colSpan:7,style:{backgroundColor:"transparent",padding:0,width:"100%"},children:e.jsx(Qe,{count:3})})}):g.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a.academicYear.replace("YEAR_","")}),e.jsx("td",{children:a.created_date}),e.jsx("td",{children:a.professor}),e.jsx("td",{children:a.lectureName}),e.jsx("td",{children:a.title}),e.jsx("td",{children:a.due_date}),e.jsx("td",{children:a.check==="CHECK"?e.jsx(A,{status:"등록됨",children:"등록됨"}):e.jsx(A,{onClick:()=>d(e.jsx(K,{lectureAssignmentId:a.lectureAssignmentId,onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"})})]},a.lectureAssignmentId))})]})]})},ie=t.div`
  width: 100%;
  padding: 20px;
`,ln=t.div`
  display: flex;
  justify-content: space-between;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  font-size: 19px;
  height: 67px;
  background: white;
  border-radius: 20px;
  padding: 0px 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  jsutify-content: center;
  align-items: center;
`,se=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,cn=t.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`,xn=t.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`,pn=()=>{var b;const{data:i,isPending:d,isFetching:s,hasNextPage:c,fetchNextPage:r}=He("/api/major/lectures/news",4),{ref:j,inView:p}=Je({threshold:0}),{openModal:h}=F();return u.useEffect(()=>{p&&!s&&c&&r()},[s,c,r,p]),d?e.jsx(ie,{children:e.jsx(H,{count:5})}):e.jsxs(ie,{children:[(b=i==null?void 0:i.pages)==null?void 0:b.map(g=>g.content.map((o,a)=>e.jsxs(ln,{children:[e.jsx(se,{children:o.time}),e.jsxs(se,{children:[o.nickname,"님이 ",o.title,"를 등록하였습니다"]}),e.jsx(cn,{children:o.check==="CHECK"?e.jsx(A,{status:"등록됨",children:"등록됨"}):e.jsx(A,{onClick:()=>h(e.jsx(K,{lectureAssignmentId:o.lectureAssignmentId,onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"})})]},`${o.lectureAssignmentId}-${a}`))),s&&e.jsx(H,{count:5}),e.jsx(xn,{ref:j,className:"scroll",children:s&&e.jsx(Ve,{color:"#fff"})})]})},hn=({expanded:i})=>{const{openModal:d}=F(),{academicYear:s,setAcademicYear:c}=q(),[r,j]=u.useState(null),p=`/api/major/lectures/list/${s}`,{data:h,isLoading:b}=S(p),g=i==="true"?h:h.slice(0,3),o=()=>{d(e.jsx(xe,{queryKey:p}))},[a,n]=u.useState({}),f=w=>{j(v=>v===w?null:w),n(v=>{const k={...v};return v[w]?k[w]=!1:(Object.keys(v).forEach(x=>{k[Number(x)]=!1}),k[w]=!0),k})},{data:m}=S(r?`/api/lecture-assignments/${r}`:"");return e.jsxs(fn,{children:[e.jsxs(gn,{children:[e.jsx(jn,{children:e.jsxs(R,{onClick:o,children:["과제 추가하기",e.jsx(G,{fill:"currentColor"})]})}),e.jsxs(un,{value:s,onChange:w=>c(Number(w.target.value)),children:[e.jsx("option",{value:1,children:"1학년"}),e.jsx("option",{value:2,children:"2학년"}),e.jsx("option",{value:3,children:"3학년"}),e.jsx("option",{value:4,children:"4학년"})]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"학년"}),e.jsx("th",{children:"교수"}),e.jsx("th",{children:"강좌"})]})}),e.jsx("tbody",{children:b?e.jsx("tr",{children:e.jsx("td",{colSpan:7,style:{backgroundColor:"transparent",padding:0,width:"100%"},children:e.jsx(Ue,{count:3})})}):g.map((w,v)=>e.jsxs(me.Fragment,{children:[e.jsxs("tr",{className:"hover",onClick:()=>f(w.lectureId),style:{backgroundColor:a[w.lectureId]?"rgba(102, 102, 102, 1)":"white",color:a[w.lectureId]?"white":"black",transition:"background-color 0.3s ease, color 0.3s ease"},children:[e.jsx("td",{children:w.academicYear.replace("YEAR_","")}),e.jsx("td",{children:w.professor}),e.jsx("td",{children:w.lectureName})]}),a[w.lectureId]&&e.jsx("tr",{style:{boxShadow:"none"},children:e.jsx("td",{colSpan:3,style:{padding:"0 15px"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"학년"}),e.jsx("th",{children:"과제 추가일"}),e.jsx("th",{children:"교수"}),e.jsx("th",{children:"강좌명"}),e.jsx("th",{children:"과제 제목"}),e.jsx("th",{children:"마감일"}),e.jsx("th",{children:"체크"})]})}),e.jsx("tbody",{children:m.map((k,x)=>e.jsxs("tr",{style:{backgroundColor:"white"},children:[e.jsx("td",{children:k.academicYear.replace("YEAR_","")}),e.jsx("td",{children:k.created_date}),e.jsx("td",{children:k.professor}),e.jsx("td",{children:k.lectureName}),e.jsx("td",{children:k.title}),e.jsx("td",{children:k.due_date}),e.jsx("td",{children:k.check==="CHECK"?e.jsx(A,{status:"등록됨",children:"등록됨"}):e.jsx(A,{onClick:()=>d(e.jsx(K,{lectureAssignmentId:k.lectureAssignmentId,onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"})})]},x))})]})})})]},v))})]})]})},un=t.select`
  margin-left: 130px;
  width: 100px;

  background: rgba(252, 246, 245, 1);
  border: none;
  outline: none;
  font-size: 19px;
`,gn=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67px;
`,fn=t.div`
  width: 100%;

  padding: 20px;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 2px;
  }

  tr.hover:hover {
    background-color: rgba(102, 102, 102, 1) !important;
    color: white !important;
    cursor: pointer; /* 마우스 커서를 포인터로 변경 */
  }
  th {
    color: #666;
    background-color: white;
  }
  th,
  td {
    height: 67px;
    text-align: center;
    vertical-align: middle;
    padding: 12px 15px;
    font-size: 19px;
  }
  tr {
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  }

  tr th:first-child,
  tr td:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  tr th:last-child,
  tr td:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`,jn=t.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  height: 67px;
`,mn=({menuState:i,expanded:d})=>{let s;switch(i){case"친구등록":s=e.jsx(J,{});break;case"친구목록":s=e.jsx(Ft,{expanded:d});break;case"친구소식":s=e.jsx(dt,{});break;case"친구관리":s=e.jsx(Ut,{expanded:d});break;case"학과소식":s=e.jsx(pn,{});break;case"과제목록":s=e.jsx(an,{expanded:d});break;case"강좌목록":s=e.jsx(hn,{expanded:d});break;default:s=e.jsx(J,{})}return e.jsx(e.Fragment,{children:s})},re=({title:i,menuItems:d})=>{const[s,c]=u.useState({activeMenu:d[0],expanded:!1}),{selectedTheme:r}=we(),p=be[r][1],h=o=>c({activeMenu:o,expanded:!1}),b=()=>c(o=>({...o,expanded:!o.expanded})),g=u.useRef(null);return u.useEffect(()=>{g.current&&!s.expanded&&(g.current.scrollTop=0)},[s.expanded]),e.jsxs("div",{children:[e.jsx(kn,{children:i}),e.jsxs(Cn,{children:[e.jsx(yn,{children:d.map(o=>e.jsx(vn,{$isSelected:s.activeMenu===o,onClick:()=>h(o),children:o},o))}),e.jsxs(wn,{onClick:b,children:[s.expanded?"닫기":"더보기",e.jsx("img",{src:s.expanded?De:$e,alt:s.expanded?"Up Arrow":"Down Arrow"})]})]}),e.jsx(bn,{background:p,ref:g,expanded:s.expanded.toString(),children:e.jsx(mn,{menuState:s.activeMenu,expanded:s.expanded.toString()})})]})},wn=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 16px;
  gap: 6px;
`,bn=t.div`
  background: ${({background:i})=>i};
  width: 95%;
  overflow-y: ${({expanded:i})=>i==="true"?"auto":"hidden"};
  border-radius: 20px;
  box-shadow: 0px 5px 15.7px 0px rgba(177, 198, 187, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  height: ${i=>i.expanded==="true"?"855px":"380px"};

  transition: height 0.3s ease-out;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`,vn=t.button`
  background: ${i=>i.$isSelected?"rgba(102, 102, 102, 1)":"rgba(243, 243, 243, 1)"};
  width: 135px;
  height: 38px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  color: ${i=>i.$isSelected?"white":"rgba(102, 102, 102, 1)"};
  padding: 0px;
  box-shadow: 0px 5px 15.7px 0px rgba(177, 198, 187, 0.4);
  margin-bottom: 15px;
  cursor: pointer;
  transition:
    background 0.3s,
    color 0.3s;

  &:hover {
    background: rgba(102, 102, 102, 1);
    color: white;
  }
`,yn=t.div`
  display: flex;
  gap: 8px;
`,kn=t.h2`
  margin: 0px 0px 30px 0px;
`,Cn=t.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`,Sn=t.div`
  display: flex;
  flex-direction: column;
  margin: 68px 0px 136px 0px;
  width: 100%;
  gap: 59px;
  padding: 0 100px;
`,Nn=()=>e.jsx(e.Fragment,{children:e.jsxs(Sn,{children:[e.jsx(re,{title:"친구",menuItems:["친구등록","친구목록","친구소식","친구관리"]}),e.jsx(re,{title:"학과",menuItems:["학과소식","과제목록","강좌목록"]})]})});export{Nn as default};
