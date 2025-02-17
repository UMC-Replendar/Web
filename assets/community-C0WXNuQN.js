import{d as t,r as f,S as b,j as e,e as ue,f as z,D as ge,g as M,h as re,i as q,R as fe,a as me,t as je}from"./index-DjNPCOSe.js";import{u as k,a as S,b as L,C as Q,U,P as B,G as oe,S as de,s as we,T as be,L as ve,A as ye,D as ke,c as Ce}from"./AddTaskModal-DmwHUHk-.js";import{P as Se,C as Ie,N as Fe,S as Me,A as K,a as T,U as De,D as Ae}from"./OngoingTasks-JCU8j9bh.js";import{s as $e,F as Be,a as Ee,S as ze,b as Ne,d as Ge,p as Te,g as Le,c as Pe,e as Ye,f as Oe,h as qe,G as Ke,A as Re,T as Qe,N as _,L as Ue}from"./friendNewsRender-Cc2TVz3_.js";import{B as E}from"./blueButton-2D0vbln7.js";import{u as _e,a as He,C as Je}from"./useGetInfiniteData-BmHvwHC2.js";import"./useQuery-BDhDW2NA.js";import"./useBaseQuery-BgPE4bNU.js";import"./useDebounce-DSoT4RGs.js";const Ve="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2030%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0102%2024.4539C19.0542%2024.4539%2023.9538%2019.5544%2023.9538%2013.5104C23.9538%207.46647%2019.0542%202.56689%2013.0102%202.56689C6.96629%202.56689%202.06671%207.46647%202.06671%2013.5104C2.06671%2019.5544%206.96629%2024.4539%2013.0102%2024.4539Z'%20stroke='%23666666'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M27.9332%2028.4333L20.9692%2021.4692'%20stroke='%23666666'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",H=()=>{const[i,d]=f.useState(""),[s,p]=f.useState(""),{data:r,isLoading:g}=k(i?`/api/friends/search?nickname=${i}`:""),h=Array.isArray(r)&&r.length>0,u=h?r[0]:null,w=S({mutationFn:n=>$e(n),onSuccess:()=>{b.fire({icon:"success",text:`'${i}' 님에게 친구 요청을 보냈습니다.`,timer:2e3,showConfirmButton:!1})},onError:n=>{b.fire({icon:"error",text:"친구 요청을 보내는 데 실패했습니다.",confirmButtonText:"확인",showConfirmButton:!0}),console.error(n)}}),x=n=>{p(n.target.value)},a=n=>{n.key==="Enter"&&o()},o=()=>{const n=s.trim();!n||i===n||d(s)};return e.jsxs(Ze,{children:[e.jsxs(st,{children:[e.jsx(nt,{src:Ve,alt:"searchIcon"}),e.jsx(it,{value:s,onKeyDown:a,onChange:x,placeholder:"등록할 친구의 이름을 입력해주세요"}),e.jsx(W,{id:"searchBtn",onClick:o,children:"검색"})]}),e.jsxs(rt,{children:[!h&&!!i&&!g&&e.jsx(V,{width:"900px",children:e.jsxs(We,{children:["'",i,"' 검색 결과를 찾을 수 없습니다. 다시 시도해주세요."]})}),!!i&&g&&e.jsx(Be,{}),h?e.jsxs(e.Fragment,{children:[e.jsxs(tt,{children:[e.jsx(Se,{}),e.jsxs(Xe,{children:[e.jsx(J,{children:u.nickname}),e.jsx(J,{children:u.name}),e.jsx(et,{children:u.statusMessage})]})]}),e.jsx(V,{children:e.jsx(W,{width:"134px",onClick:()=>w.mutate(u.friendId),children:"친구요청"})})]}):null]})]})},We=t.span`
  font-weight: bold;
  color: #c82333;
  font-size: 24px;
`,Ze=t.div`
  width: 100%;
  padding: 20px;
`,Xe=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`,J=t.h3`
  margin: 0px;
  font-size: 19px;
`,et=t.p`
  margin: 10px 0px 0px 0px;
  color: #666;
  font-size: 16px;
`,V=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: ${i=>i.width||"auto"};
  font-size: 20px;
  color: red;
`,tt=t.div`
  background-color: white;
  border-radius: 20px;
  width: 75%;
  margin-left: 40px;
  display: flex;
  gap: 40px;
  padding: 20px;
  border: 1px solid rgba(232, 232, 232, 1);
  height: 132px;
`,nt=t.img`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 1;
  margin-left: 40px;
`,it=t.input`
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
`,W=t.button`
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
    
`,st=t.div`
  position: relative;
  margin: 30px 0px;

  align-items: center;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
`,rt=t.div`
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: start;
  align-items: start;
  margin-top: 10px;
`,ot=()=>e.jsx(dt,{children:e.jsx(Ee,{})}),dt=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
`,at=t.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 452px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  z-index: 2000;
`,lt=t.h5`
  font-size: 23px;
  font-weight: 600;
  line-height: 140%;
  margin-top: 24px;
  margin-left: 24px;
`,ct=t.div`
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
`,xt=t.div`
  display: flex;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  white-space: nowrap;
  margin-top: 28px;
  margin-bottom: 10px;
  margin-left: 29px;
`,pt=t.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,ht=t.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  width: 150px; /* 원하는 고정 너비 */
  word-break: break-word; /* 긴 단어를 줄바꿈 */
  white-space: normal; /* 줄바꿈 허용 */
`,Y=t.div`
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
`,ut=t.div`
  display: flex;
  width: 200px;
  height: 38px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`,gt=t.button`
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
`,ft=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,mt=({friendId:i})=>{const{closeFriendModal:d}=L(),{id:s}=ue(),[p,r]=f.useState([]),[g,h]=f.useState({}),{data:u}=k(`/api/assignment?userId=${s}`),w=S({mutationFn:({friendId:n,assignmentIds:l})=>ze({friendId:n,assignmentIds:l}),onSuccess:()=>{b.fire({icon:"success",text:"과제가 공유되었습니다",timer:2e3,showConfirmButton:!1})},onError:n=>{b.fire({icon:"error",text:"과제 공유에 실패했습니다",timer:2e3,showConfirmButton:!1}),console.error(n)}}),x=u.every(n=>g[n.assignmentId]),a=()=>{if(x)r([]),h({});else{const n=u.reduce((l,j)=>(l[j.assignmentId]=!0,l),{});r(u.map(l=>l.assignmentId)),h(n)}},o=n=>{const l=[...p];p.includes(n)?(r(l.filter(j=>j!==n)),h(j=>({...j,[n]:!1}))):(r([...l,n]),h(j=>({...j,[n]:!0})))};return e.jsx(ft,{onClick:d,children:e.jsxs(at,{onClick:n=>n.stopPropagation(),children:[e.jsx(lt,{children:"공유할 과제 선택"}),e.jsxs(ct,{children:["전체 선택",e.jsx("div",{style:{cursor:"pointer"},onClick:a,children:e.jsx("img",{src:x?Q:U,alt:"Checkbox Icon"})})]}),u.map(n=>e.jsxs(xt,{children:[e.jsxs(pt,{children:[e.jsx(ht,{children:n.title}),e.jsx(Y,{})]}),e.jsxs(ut,{children:[e.jsx(Y,{children:"마감일"}),e.jsx(Y,{children:n.due_date}),e.jsx("div",{onClick:()=>o(n.assignmentId),style:{cursor:"pointer"},children:e.jsx("img",{src:g[n.assignmentId]?Q:U,alt:"Checkbox Icon"})})]})]},n.assignmentId)),e.jsx(gt,{onClick:()=>w.mutate({friendId:i,assignmentIds:p}),children:"공유하기"})]})})},ae=({data:i,queryKey:d,groupId:s})=>{const p=z(),[r,g]=f.useState({isOpen:!1,selectedId:null,note:""}),{isFriendModalOpen:h,openFriendModal:u}=L(),[w,x]=f.useState(!1),[a,o]=f.useState(""),[n,l]=f.useState(!1),j=S({mutationFn:({friendId:c,buddyStatus:y})=>Ne({friendId:c,buddyStatus:y}),onSuccess:()=>{p.invalidateQueries({queryKey:[d]})},onError:c=>{b.fire({icon:"error",text:"친한 친구 설정하는 데 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(c)}}),I=S({mutationFn:({friendId:c})=>Ge(c),onSuccess:()=>{p.invalidateQueries({queryKey:[d]})},onError:c=>{b.fire({icon:"error",text:"친구 삭제하는 데 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(c)}}),v=S({mutationFn:({friendId:c,note:y})=>Te({friendId:c,note:y}),onSuccess:()=>{p.invalidateQueries({queryKey:[`/api/friends/note?friendId=${r.selectedId}`]}),x(!1)},onError:c=>{b.fire({icon:"error",text:"메모 업데이트에 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(c)}}),{data:C}=k(r.selectedId?`/api/friends/note?friendId=${r.selectedId}`:""),{data:m}=k(n?`/api/assignment/friend/${r.selectedId}/public-assignments`:""),F=S({mutationFn:({groupId:c,friendshipId:y})=>Le({groupId:c,friendshipId:y}),onSuccess:()=>{b.fire({icon:"success",text:"친구가 삭제되었습니다",timer:2e3,showConfirmButton:!1}),p.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:c=>{b.fire({icon:"error",text:"그룹에 친구 삭제하기 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(c)}}),P=Array.isArray(C)&&C.length>0?C[0].note:null,xe=()=>{x(!0),o((C==null?void 0:C.note)||"")},pe=()=>{v.mutate({friendId:r.selectedId,note:a})},he=c=>{l(!1),g(y=>({isOpen:y.selectedId!==c||!y.isOpen,selectedId:y.selectedId===c?null:c,note:y.selectedId===c?y.note:""}))};return e.jsx(e.Fragment,{children:i.map((c,y)=>e.jsxs("div",{children:[n&&r.selectedId&&e.jsx(e.Fragment,{children:e.jsxs(wt,{children:[e.jsxs(Ct,{children:[e.jsx(N,{width:"100px",bold:!0,children:c.nickname}),e.jsxs(N,{bold:!0,children:["진행 중인 과제: ",c.ongoingAssignments,"개"]})]}),e.jsx(bt,{onClick:()=>l(!1),children:"닫기"}),e.jsx(Ie,{tasks:m.map(D=>({name:D.title,deadline:D.due_date}))})]})}),h&&e.jsx(mt,{friendId:c.friendId}),e.jsxs(vt,{children:[e.jsxs(kt,{children:[e.jsx(jt,{src:c.profileImageUrl||ge}),e.jsx(N,{width:"100px",children:c.nickname})]}),e.jsxs(N,{children:["진행 중인 과제: ",c.ongoingAssignments,"개"]}),e.jsxs(yt,{children:[s&&e.jsx(E,{status:"그룹에서 삭제하기",onClick:()=>F.mutate({groupId:s,friendshipId:c.friendshipId}),children:"그룹에서 삭제하기"}),e.jsx(Fe,{fill:r.selectedId===c.friendId?"rgba(74, 198, 226, 1)":"black",onClick:()=>he(c.friendId)})]})]}),r.isOpen&&r.selectedId===c.friendId&&e.jsxs(St,{onClick:D=>D.stopPropagation(),top:`${y*67+320}px`,children:[e.jsxs(O,{children:[e.jsxs("span",{children:["진행중인 과제: ",c.ongoingAssignments,"개"]}),e.jsx("div",{onClick:()=>l(!0),children:"일정확인"})]}),e.jsx(Z,{onClick:u,children:"과제공유"}),e.jsxs(O,{children:[e.jsx("div",{style:{display:"flex",transformOrigin:"left",alignItems:"center",transform:"scale(0.5)"},children:e.jsx(Me,{isOn:c.buddyStatus==="YES",onToggle:()=>{j.mutate({friendId:c.friendId,buddyStatus:c.buddyStatus==="YES"?"NO":"YES"})}})}),e.jsx("div",{children:"친한친구설정"})]}),e.jsx(O,{children:w?e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",onChange:D=>o(D.target.value),value:a,placeholder:"메모를 수정하세요"}),e.jsx("div",{onClick:pe,children:"수정완료"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:P}),e.jsx("div",{onClick:xe,children:"메모수정"})]})}),e.jsx(Z,{onClick:()=>I.mutate({friendId:c.friendId}),children:"친구삭제"})]})]},c.friendId))})},jt=t.div`
  width: 34px;
  height: 34px;
  border-radius: 300px;
  background-image: url(${i=>i.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #d9d9d9;
`,wt=t.div`
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
`,bt=t.button`
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
`,vt=t.div`
  display: flex;
  position: relative;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  height: 67px;
  background: white;
  border-radius: 20px;
  padding: 0px 30px;
  margin-bottom: 1px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  &:nth-child(7),
  &:nth-child(8) {
    margin-bottom: 1.5px;
  }
`,yt=t.div`
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
`,kt=t.div`
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,Ct=t.div`
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`,St=t.div`
  position: absolute;
  top: ${i=>i.top};
  right: 250px;
  width: 300px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #ccc;

  border-radius: 10px;

  flex-direction: column;
  z-index: 1;
`,O=t.div`
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
`,Z=t.p`
  text-align: right; /* 텍스트 오른쪽 정렬 */
  margin: 0px;
  padding: 8px 10px 8px 10px;
  height: 38px;
`,It=({expanded:i})=>{const d=i==="true"?"/api/friends":"/api/friends?limit=5",{data:s,isLoading:p}=k(d);return p?e.jsx(X,{children:e.jsx(Pe,{count:2})}):e.jsxs(X,{children:[e.jsx(ae,{data:s,queryKey:d})," "]})},X=t.div`
  width: 100%;

  padding: 20px;
`,Ft="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9643%2012.9695L15.0002%2019.9336L8.03613%2012.9695'%20stroke='black'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Mt="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9643%2017.0308L15.0002%2010.0667L8.03613%2017.0308'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",le=()=>{const i=z(),{closeModal:d}=M();return S({mutationFn:({groupId:s,friendshipIds:p})=>Ye({groupId:s,friendshipIds:p}),onSuccess:()=>{d(),i.invalidateQueries({queryKey:["/api/friend-groups"]}),b.fire({icon:"success",text:"그룹에 친구가 추가되었습니다",timer:2e3,showConfirmButton:!1})},onError:s=>{b.fire({icon:"error",text:"그룹에 친구 추가하기 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(s)}})},Dt=({groupId:i})=>{const{closeModal:d}=M(),{isFriendModalOpen:s,openFriendModal:p,nicknames:r,updateFriendsData:g,setFriendData:h,friendData:u,resetFriends:w,friendshipIds:x}=L(),a=le();f.useEffect(()=>{w()},[d]),f.useEffect(()=>{g()},[s]);const{data:o}=k(s?`/api/friend-groups/${i}/available-friends`:"");f.useEffect(()=>{JSON.stringify(o)!==JSON.stringify(u)&&h(o)},[o,p]);const n=()=>{if(r.length===0){b.fire({icon:"warning",text:"그룹에 추가할 친구를 선택하세요",timer:2e3,showConfirmButton:!1});return}const l=x.filter(j=>j!==null);a.mutate({groupId:i,friendshipIds:l})};return e.jsxs($t,{children:[e.jsx("h1",{children:"그룹에 추가하기"}),e.jsxs(Bt,{children:[" ",e.jsx("label",{children:"그룹에 넣을 친구"})]}),e.jsxs(Nt,{children:[e.jsxs(B,{onClick:p,children:[" ",e.jsx("img",{src:oe,alt:"Gray Plus Icon"}),"추가"]}),r.length>0&&e.jsx(Et,{children:r.map(l=>e.jsx(zt,{children:l},l))})]}),s&&e.jsx(de,{}),e.jsx(At,{children:e.jsx(B,{onClick:n,children:"완료"})})]})},At=t.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,$t=t.div`
  padding: 20px;
`,Bt=t.div`
  padding: 20px 0px 40px 0px;
  label {
    font-size: 16px;
    color: #666;
  }
`,Et=t.div`
  display: flex;
  align-items: center;
  gap: 8px;

  flex-wrap: wrap;
`,zt=t.span`
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
`,Nt=t.div`
  display: flex;
  gap: 8px;
`,Gt=()=>{const{closeModal:i}=M(),d=le(),{isFriendModalOpen:s,openFriendModal:p,nicknames:r,updateFriendsData:g,setFriendData:h,friendData:u,resetFriends:w,friendshipIds:x}=L();f.useEffect(()=>{w()},[i]);const[a,o]=f.useState(""),n=z(),l=S({mutationFn:v=>Oe(v),onSuccess:v=>{const C=x.filter(m=>m!==null);d.mutate({groupId:v.groupId,friendshipIds:C}),b.fire({icon:"success",text:"그룹이 생성되었습니다",timer:2e3,showConfirmButton:!1}),i(),n.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:v=>{b.fire({icon:"error",text:"그룹을 생성하는 데 실패했습니다.",confirmButtonText:"확인",showConfirmButton:!0}),console.error(v)}}),j=()=>{if(!a.trim()){b.fire({icon:"warning",text:"그룹 이름을 입력하세요",timer:2e3,showConfirmButton:!1});return}l.mutate(a)};f.useEffect(()=>{g()},[s]);const{data:I}=k(s?"/api/friends":"");return f.useEffect(()=>{JSON.stringify(I)!==JSON.stringify(u)&&h(I)},[I,p]),e.jsxs(Yt,{children:[e.jsx("h1",{children:"그룹 만들기"}),e.jsxs(Pt,{children:[e.jsxs("div",{children:[" ",e.jsx("label",{children:"그룹명"}),e.jsx(Tt,{placeholder:"그룹 이름을 입력하세요",value:a,onChange:v=>o(v.target.value)})]}),e.jsx("label",{children:"그룹에 넣을 친구"})]}),e.jsxs(Kt,{children:[e.jsxs(B,{onClick:p,children:[e.jsx("img",{src:oe,alt:"Gray Plus Icon"}),"추가"]}),r.length>0&&e.jsx(Ot,{children:r.map(v=>e.jsx(qt,{children:v},v))})]}),s&&e.jsx(de,{}),e.jsx(Lt,{children:e.jsx(B,{onClick:j,children:"완료"})})]})},Tt=t.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 200px;
  color: #9a9a9a;
`,Lt=t.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,Pt=t.div`
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
`,Yt=t.div`
  padding: 20px;
`,Ot=t.div`
  display: flex;
  align-items: center;
  gap: 8px;

  flex-wrap: wrap;
`,qt=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(102, 102, 102, 1);
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(186, 186, 186, 1);
  font-size: 14px;

  height: 31px;
`,Kt=t.div`
  display: flex;
  gap: 8px;
`,Rt="data:image/svg+xml,%3csvg%20width='19'%20height='3'%20viewBox='0%200%2019%203'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.16016%201.5H17.1602'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Qt=({expanded:i})=>{const{openModal:d}=M(),s=z(),p=n=>{d(e.jsx(Dt,{groupId:n}))},r=()=>{d(e.jsx(Gt,{}))},g=n=>{o(l=>{const j=[...l];return j[n]=!j[n],j})},{data:h,isLoading:u}=k("/api/friend-groups"),w=i==="true"?h:h.slice(0,4),x=S({mutationFn:n=>qe(n),onSuccess:()=>{s.invalidateQueries({queryKey:["/api/friend-groups"]}),b.fire({icon:"success",text:"그룹이 삭제되었습니다",timer:2e3,showConfirmButton:!1})},onError:n=>{b.fire({icon:"error",text:"그룹 삭제하는 데 실패했습니다",timer:2e3,showConfirmButton:!1}),console.error(n)}}),[a,o]=f.useState(new Array(h.length).fill(!1));return e.jsxs(_t,{children:[e.jsx(Ut,{children:e.jsxs(K,{onClick:r,children:["그룹 만들기",e.jsx(T,{})]})}),u&&e.jsx(Ke,{count:4}),w.map(n=>e.jsxs("div",{children:[e.jsxs(Ht,{status:a[n.groupId]!==void 0?a[n.groupId].toString():"false",children:[e.jsxs(G,{children:[n.groupName,e.jsx("img",{src:a[n.groupId]?Mt:Ft,alt:a[n.groupId]?"UpArrow Icon":"DownArrow Icon",onClick:()=>g(n.groupId)})]}),a[n.groupId]&&e.jsxs(G,{gap:"50px",children:[e.jsxs(G,{onClick:()=>x.mutate(n.groupId),children:["그룹 삭제하기",e.jsx("img",{src:Rt,alt:"MinusIcon"})]}),e.jsxs(G,{onClick:()=>p(n.groupId),children:["그룹에 추가하기 ",e.jsx(T,{fill:"white"})]})]})]}),a[n.groupId]&&e.jsx(Jt,{children:e.jsx(ae,{data:n.friends,queryKey:"/api/friend-groups",groupId:n.groupId})})]},n.groupId))]})},Ut=t.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  height: 67px;
`,_t=t.div`
  width: 100%;
  padding: 20px;
`,Ht=t.div`
  display: flex;
  justify-content: space-between;
  background-color: ${i=>i.status==="true"?"#666":"white"};
  color: ${i=>i.status==="true"?"white":"black"};
  font-size: 23px;

  height: 67px;
  border-radius: 20px;
  padding: 0px 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;

  &:nth-child(10),
  &:nth-child(11) {
    margin-bottom: 1.5px; /* 얼탱없네 얘네 */
  }
`,G=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${i=>i.gap};
`,Jt=t.div`
  display: flex;
  flex-direction: column;
`;re.locale("ko");const ce=({queryKey:i})=>{const[d,s]=f.useState(1),[p,r]=f.useState(null),[g,h]=f.useState(""),[u,w]=f.useState(""),[x,a]=f.useState(re()),{closeModal:o}=M(),{setAcademicYear:n}=q(),l=z(),{data:j}=k(`/api/major/lectures/list/${d}`),I=S({mutationFn:({lectureId:m,title:F,content:R,endDate:P})=>Re({lectureId:m,title:F,content:R,endDate:P}),onSuccess:()=>{b.fire({icon:"success",text:"학과 과제가 추가되었습니다",timer:2e3,showConfirmButton:!1}),n(d),o(),l.invalidateQueries({queryKey:[i]})},onError:m=>{b.fire({icon:"error",text:"학과 과제 추가하기에 실패했습니다.",confirmButtonText:"확인",showConfirmButton:!0}),console.error(m)}}),v=m=>{const F=Number(m.target.value);r(F)},C=()=>{if(p===null){b.fire({icon:"warning",text:"강좌를 선택해주세요"});return}if(!g.trim()){b.fire({icon:"warning",text:"과제명을 선택해주세요",timer:2e3,showConfirmButton:!1});return}if(!x){b.fire({icon:"warning",text:"마감일을 선택해주세요",timer:2e3,showConfirmButton:!1});return}const m=`${x.format("YYYY/MM/DD")}`,F={lectureId:p,title:g,content:u.trim()||"",endDate:m};I.mutate(F)};return e.jsxs(e.Fragment,{children:[e.jsx(Zt,{children:"학과 과제 추가하기"}),e.jsxs($,{children:[e.jsx(A,{children:"과제명"}),e.jsx(Xt,{placeholder:"과제 이름을 입력하세요",value:g,onChange:m=>h(m.target.value)})]}),e.jsxs($,{children:[e.jsx(A,{children:"학년"}),e.jsxs(ee,{value:d,onChange:m=>s(Number(m.target.value)),children:[e.jsx("option",{value:1,children:"1학년"}),e.jsx("option",{value:2,children:"2학년"}),e.jsx("option",{value:3,children:"3학년"}),e.jsx("option",{value:4,children:"4학년"})]})]}),e.jsxs($,{children:[e.jsx(A,{children:"강좌"}),e.jsxs(ee,{onChange:v,children:[e.jsx("option",{value:"",hidden:!0,children:"강좌를 선택하세요"}),j.map(m=>e.jsxs("option",{value:m.lectureId,children:[m.lectureName," - ",m.professor]},m.lectureId))]})]}),e.jsxs($,{children:[e.jsx(A,{children:"과제마감일"}),e.jsx(ve,{dateAdapter:ye,children:e.jsx(ke,{value:x,onChange:m=>a(m||x),format:"YYYY/MM/DD",slots:{textField:Vt}})})]}),e.jsxs($,{children:[e.jsx(A,{children:"메모"}),e.jsx(Wt,{value:u,onChange:m=>{w(m.target.value)}})]}),e.jsxs(en,{children:[" ",e.jsx(B,{onClick:C,children:"일정 추가하기"})]})]})},ee=t.select`
  width: 300px;
  background: white;
  border: none;
  outline: none;
  font-size: 19px;
`,Vt=we(be)({width:"auto",maxWidth:"200px",boxSizing:"border-box","& .MuiInputBase-root":{display:"flex",alignItems:"center",fontSize:"19px",padding:"8px",height:"47px"},"& .MuiOutlinedInput-root":{borderRadius:"5px",border:"0.5px solid #E8E8E8",backgroundColor:"white","&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#E8E8E8"}},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#E8E8E8"},"& .MuiSvgIcon-root":{fontSize:"1.2rem"}}),Wt=t.textarea`
  background-color: white;
  width: 400px;
  height: 200px;
  border: 1px solid rgba(213, 213, 213, 1);
  &:focus {
    outline: none;
  }
`,Zt=t.h1`
  padding-bottom: 40px;
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`,Xt=t.input`
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
`,A=t.label`
  width: 150px;
  font-family: Pretendard;
  font-size: 23px;
  font-weight: 600;
  line-height: 32.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`,$=t.div`
  display: flex;
  gap: 20px;
  padding: 5px;
`,en=t.label`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,tn=t.div`
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
`,nn=t.div`
  div {
    display: flex;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67px;
`,sn=t.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
`,te=t.select`
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: rgba(252, 246, 245, 1);
  border: none;
  outline: none;
  font-size: 19px;
  margin-left: 10px;
`,rn=t.label`
  width: 100px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  font-size: 19px;
  align-items: center;
`,on=t.td`
  background-color: transparent;
  padding: 0;
  width: 100%;
`,dn=({expanded:i})=>{const{openModal:d}=M(),{academicYear:s,setAcademicYear:p,sortKey:r,setSortKey:g}=q(),h=`/api/major/lectures/sort/${r}?sort=asc&academicYear=${s}&majorId=`,{data:u,isLoading:w}=k(h),x=i==="true"?u:u.slice(0,3),a=()=>{d(e.jsx(ce,{queryKey:h}))};return e.jsxs(tn,{children:[e.jsxs(nn,{children:[e.jsx(sn,{children:e.jsxs(K,{onClick:a,children:["과제 추가하기",e.jsx(T,{fill:"currentColor"})]})}),e.jsxs("div",{children:[e.jsxs(te,{value:s,onChange:o=>p(Number(o.target.value)),children:[e.jsx("option",{value:"1",children:"1학년"}),e.jsx("option",{value:"2",children:"2학년"}),e.jsx("option",{value:"3",children:"3학년"}),e.jsx("option",{value:"4",children:"4학년"}),e.jsx("option",{value:"5",children:"5학년"})]}),e.jsx(rn,{children:"정렬"}),e.jsxs(te,{onChange:o=>g(o.target.value),value:r,children:[e.jsx("option",{value:"professor",children:"교수명"}),e.jsx("option",{value:"registration",children:"강좌명"}),e.jsx("option",{value:"assignment",children:"과제명"}),e.jsx("option",{value:"due",children:"마감일"})]})]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"학년"}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"교수"}),e.jsx("th",{children:"강좌"}),e.jsx("th",{children:"과제명"}),e.jsx("th",{children:"마감일"}),e.jsx("th",{children:"과제등록"})]})}),e.jsx("tbody",{children:w?e.jsx("tr",{children:e.jsx(on,{colSpan:7,style:{backgroundColor:"transparent",padding:0,width:"100%"},children:e.jsx(Qe,{count:3})})}):x.map(o=>e.jsxs("tr",{children:[e.jsx("td",{children:o.academicYear.replace("YEAR_","")}),e.jsx("td",{children:o.created_date}),e.jsx("td",{children:o.professor}),e.jsx("td",{children:o.lectureName}),e.jsx("td",{children:o.title}),e.jsx("td",{children:o.due_date}),e.jsx("td",{children:o.check==="CHECK"?e.jsx(E,{status:"등록됨",children:"등록됨"}):e.jsx(E,{onClick:()=>d(e.jsx(Ce,{lectureAssignmentId:o.lectureAssignmentId,onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"})})]},o.lectureAssignmentId))})]})]})},ne=t.div`
  width: 100%;
  padding: 20px;
`,an=t.div`
  display: flex;
  justify-content: space-between;
  gap: 100px; /* 갭 조정 */
  width: 100%;
  font-size: 19px;
  height: 67px;
  background: white;
  border-radius: 20px;
  padding: 0px 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);yarn add react-spinners

  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  jsutify-content: center;
  align-items: center;
`,ie=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,ln=t.div`
  margin-left: auto; /* 오른쪽 끝에 배치 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`,cn=t.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`,xn=()=>{var x;const{data:i,isPending:d,isError:s,error:p,isFetching:r,hasNextPage:g,fetchNextPage:h}=_e("/api/major/lectures/news",4),{ref:u,inView:w}=He({threshold:0});return f.useEffect(()=>{w&&!r&&g&&h()},[r,g,h,w]),d?e.jsx(ne,{children:e.jsx(_,{count:5})}):s?e.jsx("h1",{children:p.message}):e.jsxs(ne,{children:[(x=i==null?void 0:i.pages)==null?void 0:x.map(a=>a.content.map(o=>e.jsxs(an,{children:[e.jsx(ie,{children:o.time}),e.jsxs(ie,{children:[o.nickname,"님이 ",o.title,"를 등록하였습니다"]}),e.jsx(ln,{children:o.check==="CHECK"?e.jsx(E,{status:"등록됨",children:"등록됨"}):e.jsx(E,{children:"내 일정에 등록"})})]},o.friendId))),r&&e.jsx(_,{count:5}),e.jsx(cn,{ref:u,className:"scroll",children:r&&e.jsx(Je,{color:"#fff"})})]})},pn=({expanded:i})=>{const{openModal:d}=M(),{academicYear:s,setAcademicYear:p}=q(),r=`/api/major/lectures/list/${s}`,{data:g,isLoading:h}=k(r),u=i==="true"?g:g.slice(0,3),w=()=>{d(e.jsx(ce,{queryKey:r}))},[x,a]=f.useState(new Array(g.length).fill(!1)),o=n=>{a(l=>{const j=[...l];return j[n]=!j[n],j})};return e.jsxs(gn,{children:[e.jsxs(un,{children:[e.jsx(fn,{children:e.jsxs(K,{onClick:w,children:["과제 추가하기",e.jsx(T,{fill:"currentColor"})]})}),e.jsxs(hn,{value:s,onChange:n=>p(Number(n.target.value)),children:[e.jsx("option",{value:1,children:"1학년"}),e.jsx("option",{value:2,children:"2학년"}),e.jsx("option",{value:3,children:"3학년"}),e.jsx("option",{value:4,children:"4학년"})]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"학년"}),e.jsx("th",{children:"교수"}),e.jsx("th",{children:"강좌"})]})}),e.jsx("tbody",{children:h?e.jsx("tr",{children:e.jsx("td",{colSpan:7,style:{backgroundColor:"transparent",padding:0,width:"100%"},children:e.jsx(Ue,{count:3})})}):u.map((n,l)=>e.jsxs(fe.Fragment,{children:[e.jsxs("tr",{onClick:()=>o(l),children:[e.jsx("td",{style:{backgroundColor:x[l]?"rgba(102, 102, 102, 1)":"white",color:x[l]?"white":"black",transition:"background-color 0.3s ease, color 0.3s ease"},children:n.academicYear.replace("YEAR_","")}),e.jsx("td",{style:{backgroundColor:x[l]?"rgba(102, 102, 102, 1)":"white",color:x[l]?"white":"black",transition:"background-color 0.3s ease, color 0.3s ease"},children:n.professor}),e.jsx("td",{style:{backgroundColor:x[l]?"rgba(102, 102, 102, 1)":"white",color:x[l]?"white":"black",transition:"background-color 0.3s ease, color 0.3s ease"},children:n.lectureName})]},l),x[l]&&e.jsx("tr",{children:e.jsx("td",{colSpan:7})})]},l))})]})]})},hn=t.select`
  margin-left: 130px;
  width: 100px;

  background: rgba(252, 246, 245, 1);
  border: none;
  outline: none;
  font-size: 19px;
`,un=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 67px;
`,gn=t.div`
  width: 100%;

  padding: 20px;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 2px;
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

  tr th:last-child,
  tr td:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`,fn=t.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  height: 67px;
`,mn=({menuState:i,expanded:d})=>{let s;switch(i){case"친구등록":s=e.jsx(H,{});break;case"친구목록":s=e.jsx(It,{expanded:d});break;case"친구소식":s=e.jsx(ot,{});break;case"친구관리":s=e.jsx(Qt,{expanded:d});break;case"학과소식":s=e.jsx(xn,{});break;case"과제목록":s=e.jsx(dn,{expanded:d});break;case"강좌목록":s=e.jsx(pn,{expanded:d});break;default:s=e.jsx(H,{})}return e.jsx(e.Fragment,{children:s})},se=({title:i,menuItems:d})=>{const[s,p]=f.useState({activeMenu:d[0],expanded:!1}),{selectedTheme:r}=me(),h=je[r][1],u=a=>p({activeMenu:a,expanded:!1}),w=()=>p(a=>({...a,expanded:!a.expanded})),x=f.useRef(null);return f.useEffect(()=>{x.current&&!s.expanded&&(x.current.scrollTop=0)},[s.expanded]),e.jsxs("div",{children:[e.jsx(yn,{children:i}),e.jsxs(kn,{children:[e.jsx(vn,{children:d.map(a=>e.jsx(bn,{isSelected:s.activeMenu===a,onClick:()=>u(a),children:a},a))}),e.jsxs(jn,{onClick:w,children:[s.expanded?"닫기":"더보기",e.jsx("img",{src:s.expanded?De:Ae,alt:s.expanded?"Up Arrow":"Down Arrow"})]})]}),e.jsx(wn,{background:h,ref:x,expanded:s.expanded.toString(),children:e.jsx(mn,{menuState:s.activeMenu,expanded:s.expanded.toString()})})]})},jn=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 16px;
  gap: 6px;
`,wn=t.div`
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
`,bn=t.button`
  background: ${i=>i.isSelected?"rgba(102, 102, 102, 1)":"rgba(243, 243, 243, 1)"};
  width: 135px;
  height: 38px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  color: ${i=>i.isSelected?"white":"rgba(102, 102, 102, 1)"};
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
`,vn=t.div`
  display: flex;
  gap: 8px;
`,yn=t.h2`
  margin: 0px 0px 30px 0px;
`,kn=t.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`,Cn=t.div`
  display: flex;
  flex-direction: column;
  margin: 68px 0px 136px 0px;
  width: 100%;
  gap: 59px;
  padding: 0 100px;
`,zn=()=>e.jsx(e.Fragment,{children:e.jsxs(Cn,{children:[e.jsx(se,{title:"친구",menuItems:["친구등록","친구목록","친구소식","친구관리"]}),e.jsx(se,{title:"학과",menuItems:["학과소식","과제목록","강좌목록"]})]})});export{zn as default};
