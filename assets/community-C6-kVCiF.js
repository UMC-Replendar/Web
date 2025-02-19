import{d as t,r as g,S as v,j as e,g as ge,c as z,D as fe,b as A,h as re,i as q,R as je,a as me,t as we}from"./index-CFPyf70Z.js";import{b as S,a as I,c as L,C as Q,U,P as E,G as oe,S as de,s as be,T as ve,L as ye,d as ke,D as Ce,A as ae}from"./AddTaskModal-fGec3Mzu.js";import{P as Se,C as Ie,N as Fe,S as Me,A as K,a as T,U as Ae,D as De}from"./OngoingTasks-Bd-vThCu.js";import{s as $e,S as Be,a as Ee,d as ze,p as Ne,g as Ge,b as Te,c as Le,e as Ye,A as Oe}from"./commuApi-BHfzj9pn.js";import{F as Pe,a as qe,b as Ke,G as Re,T as Qe,N as _,L as Ue}from"./friendNewsRender-D1CVSCc3.js";import{B as M}from"./blueButton-BAhRILi5.js";import{u as _e,a as He,C as Je}from"./useGetInfiniteData-BfthvyBA.js";import"./useBaseQuery-D1s1blM3.js";import"./useDebounce-D8AwOdWy.js";const Ve="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2030%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0102%2024.4539C19.0542%2024.4539%2023.9538%2019.5544%2023.9538%2013.5104C23.9538%207.46647%2019.0542%202.56689%2013.0102%202.56689C6.96629%202.56689%202.06671%207.46647%202.06671%2013.5104C2.06671%2019.5544%206.96629%2024.4539%2013.0102%2024.4539Z'%20stroke='%23666666'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M27.9332%2028.4333L20.9692%2021.4692'%20stroke='%23666666'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",H=()=>{const[i,o]=g.useState(""),[s,a]=g.useState(""),{data:r,isLoading:j}=S(i?`/api/friends/search?nickname=${i}`:""),p=Array.isArray(r)&&r.length>0,h=p?r[0]:null,y=I({mutationFn:n=>$e(n),onSuccess:()=>{v.fire({icon:"success",text:`'${i}' 님에게 친구 요청을 보냈습니다.`,timer:2e3,showConfirmButton:!1})},onError:n=>{v.fire({icon:"error",text:"친구 요청을 보내는 데 실패했습니다.",confirmButtonText:"확인",showConfirmButton:!0}),console.error(n)}}),x=n=>{a(n.target.value)},l=n=>{n.key==="Enter"&&c()},c=()=>{const n=s.trim();!n||i===n||o(s)};return e.jsxs(Ze,{children:[e.jsxs(st,{children:[e.jsx(nt,{src:Ve,alt:"searchIcon"}),e.jsx(it,{value:s,onKeyDown:l,onChange:x,placeholder:"등록할 친구의 이름을 입력해주세요"}),e.jsx(W,{id:"searchBtn",onClick:c,children:"검색"})]}),e.jsxs(rt,{children:[!p&&!!i&&!j&&e.jsx(V,{width:"900px",children:e.jsxs(We,{children:["'",i,"' 검색 결과를 찾을 수 없습니다. 다시 시도해주세요."]})}),!!i&&j&&e.jsx(Pe,{}),p?e.jsxs(e.Fragment,{children:[e.jsxs(tt,{children:[e.jsx(Se,{}),e.jsxs(Xe,{children:[e.jsx(J,{children:h.nickname}),e.jsx(J,{children:h.name}),e.jsx(et,{children:h.statusMessage})]})]}),e.jsx(V,{children:e.jsx(W,{width:"134px",onClick:()=>y.mutate(h.friendId),children:"친구요청"})})]}):null]})]})},We=t.span`
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
`,ot=()=>e.jsx(dt,{children:e.jsx(qe,{})}),dt=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
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
`,O=t.div`
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
`,jt=({friendId:i})=>{const{closeFriendModal:o}=L(),{id:s}=ge(),[a,r]=g.useState([]),[j,p]=g.useState({}),{data:h}=S(`/api/assignment?userId=${s}`),y=I({mutationFn:({friendId:n,assignmentIds:f})=>Be({friendId:n,assignmentIds:f}),onSuccess:()=>{v.fire({icon:"success",text:"과제가 공유되었습니다",timer:2e3,showConfirmButton:!1})},onError:n=>{v.fire({icon:"error",text:"과제 공유에 실패했습니다",timer:2e3,showConfirmButton:!1}),console.error(n)}}),x=h.every(n=>j[n.assignmentId]),l=()=>{if(x)r([]),p({});else{const n=h.reduce((f,k)=>(f[k.assignmentId]=!0,f),{});r(h.map(f=>f.assignmentId)),p(n)}},c=n=>{const f=[...a];a.includes(n)?(r(f.filter(k=>k!==n)),p(k=>({...k,[n]:!1}))):(r([...f,n]),p(k=>({...k,[n]:!0})))};return e.jsx(ft,{onClick:o,children:e.jsxs(at,{onClick:n=>n.stopPropagation(),children:[e.jsx(lt,{children:"공유할 과제 선택"}),e.jsxs(ct,{children:["전체 선택",e.jsx("div",{style:{cursor:"pointer"},onClick:l,children:e.jsx("img",{src:x?Q:U,alt:"Checkbox Icon"})})]}),h.map(n=>e.jsxs(xt,{children:[e.jsxs(pt,{children:[e.jsx(ht,{children:n.title}),e.jsx(O,{})]}),e.jsxs(ut,{children:[e.jsx(O,{children:"마감일"}),e.jsx(O,{children:n.due_date}),e.jsx("div",{onClick:()=>c(n.assignmentId),style:{cursor:"pointer"},children:e.jsx("img",{src:j[n.assignmentId]?Q:U,alt:"Checkbox Icon"})})]})]},n.assignmentId)),e.jsx(gt,{onClick:()=>y.mutate({friendId:i,assignmentIds:a}),children:"공유하기"})]})})},le=({data:i,queryKey:o,groupId:s})=>{const a=z(),[r,j]=g.useState({isOpen:!1,selectedId:null,note:""}),{isFriendModalOpen:p,openFriendModal:h}=L(),[y,x]=g.useState(!1),[l,c]=g.useState(""),[n,f]=g.useState(!1),k=I({mutationFn:({friendId:d,buddyStatus:C})=>Ee({friendId:d,buddyStatus:C}),onSuccess:()=>{a.invalidateQueries({queryKey:[o]})},onError:d=>{v.fire({icon:"error",text:"친한 친구 설정하는 데 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(d)}}),w=I({mutationFn:({friendId:d})=>ze(d),onSuccess:()=>{a.invalidateQueries({queryKey:[o]})},onError:d=>{v.fire({icon:"error",text:"친구 삭제하는 데 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(d)}}),b=I({mutationFn:({friendId:d,note:C})=>Ne({friendId:d,note:C}),onSuccess:()=>{a.invalidateQueries({queryKey:[`/api/friends/note?friendId=${r.selectedId}`]}),x(!1)},onError:d=>{v.fire({icon:"error",text:"메모 업데이트에 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(d)}}),{data:m}=S(r.selectedId?`/api/friends/note?friendId=${r.selectedId}`:""),{data:u}=S(n?`/api/assignment/friend/${r.selectedId}/public-assignments`:""),F=I({mutationFn:({groupId:d,friendshipId:C})=>Ge({groupId:d,friendshipId:C}),onSuccess:()=>{v.fire({icon:"success",text:"친구가 삭제되었습니다",timer:2e3,showConfirmButton:!1}),a.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:d=>{v.fire({icon:"error",text:"그룹에 친구 삭제하기 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(d)}}),Y=Array.isArray(m)&&m.length>0?m[0].note:null,pe=()=>{x(!0),c((m==null?void 0:m.note)||"")},he=()=>{b.mutate({friendId:r.selectedId,note:l})},ue=d=>{f(!1),j(C=>({isOpen:C.selectedId!==d||!C.isOpen,selectedId:C.selectedId===d?null:d,note:C.selectedId===d?C.note:""}))};return e.jsx(e.Fragment,{children:i.map((d,C)=>e.jsxs("div",{children:[n&&r.selectedId&&e.jsx(e.Fragment,{children:e.jsxs(wt,{children:[e.jsxs(Ct,{children:[e.jsx(N,{width:"100px",bold:!0,children:d.nickname}),e.jsxs(N,{bold:!0,children:["진행 중인 과제: ",d.ongoingAssignments,"개"]})]}),e.jsx(bt,{onClick:()=>f(!1),children:"닫기"}),e.jsx(Ie,{tasks:u.map(D=>({name:D.title,deadline:D.due_date}))})]})}),p&&e.jsx(jt,{friendId:d.friendId}),e.jsxs(vt,{children:[e.jsxs(kt,{children:[e.jsx(mt,{src:d.profileImageUrl||fe}),e.jsx(N,{width:"100px",children:d.nickname})]}),e.jsxs(N,{children:["진행 중인 과제: ",d.ongoingAssignments,"개"]}),e.jsxs(yt,{children:[s&&e.jsx(M,{status:"그룹에서 삭제하기",onClick:()=>F.mutate({groupId:s,friendshipId:d.friendshipId}),children:"그룹에서 삭제하기"}),e.jsx(Fe,{fill:r.selectedId===d.friendId?"rgba(74, 198, 226, 1)":"black",onClick:()=>ue(d.friendId)})]})]}),r.isOpen&&r.selectedId===d.friendId&&e.jsxs(St,{onClick:D=>D.stopPropagation(),top:`${C*67+320}px`,children:[e.jsxs(P,{children:[e.jsxs("span",{children:["진행중인 과제: ",d.ongoingAssignments,"개"]}),e.jsx("div",{onClick:()=>f(!0),children:"일정확인"})]}),e.jsx(Z,{onClick:h,children:"과제공유"}),e.jsxs(P,{children:[e.jsx("div",{style:{display:"flex",transformOrigin:"left",alignItems:"center",transform:"scale(0.5)"},children:e.jsx(Me,{isOn:d.buddyStatus==="YES",onToggle:()=>{k.mutate({friendId:d.friendId,buddyStatus:d.buddyStatus==="YES"?"NO":"YES"})}})}),e.jsx("div",{children:"친한친구설정"})]}),e.jsx(P,{children:y?e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",onChange:D=>c(D.target.value),value:l,placeholder:"메모를 수정하세요"}),e.jsx("div",{onClick:he,children:"수정완료"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:Y}),e.jsx("div",{onClick:pe,children:"메모수정"})]})}),e.jsx(Z,{onClick:()=>w.mutate({friendId:d.friendId}),children:"친구삭제"})]})]},d.friendId))})},mt=t.div`
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
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
`,Z=t.p`
  text-align: right; /* 텍스트 오른쪽 정렬 */
  margin: 0px;
  padding: 8px 10px 8px 10px;
  height: 38px;
`,It=({expanded:i})=>{const o=i==="true"?"/api/friends":"/api/friends?limit=5",{data:s,isLoading:a}=S(o);return a?e.jsx(X,{children:e.jsx(Ke,{count:2})}):e.jsxs(X,{children:[e.jsx(le,{data:s,queryKey:o})," "]})},X=t.div`
  width: 100%;

  padding: 20px;
`,Ft="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9643%2012.9695L15.0002%2019.9336L8.03613%2012.9695'%20stroke='black'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Mt="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9643%2017.0308L15.0002%2010.0667L8.03613%2017.0308'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ce=()=>{const i=z(),{closeModal:o}=A();return I({mutationFn:({groupId:s,friendshipIds:a})=>Te({groupId:s,friendshipIds:a}),onSuccess:()=>{o(),i.invalidateQueries({queryKey:["/api/friend-groups"]}),v.fire({icon:"success",text:"그룹에 친구가 추가되었습니다",timer:2e3,showConfirmButton:!1})},onError:s=>{v.fire({icon:"error",text:"그룹에 친구 추가하기 실패했습니다.",timer:2e3,showConfirmButton:!1}),console.error(s)}})},At=({groupId:i})=>{const{closeModal:o}=A(),{isFriendModalOpen:s,openFriendModal:a,nicknames:r,updateFriendsData:j,setFriendData:p,friendData:h,resetFriends:y,friendshipIds:x}=L(),l=ce();g.useEffect(()=>{y()},[o]),g.useEffect(()=>{j()},[s]);const{data:c}=S(s?`/api/friend-groups/${i}/available-friends`:"");g.useEffect(()=>{JSON.stringify(c)!==JSON.stringify(h)&&p(c)},[c,a]);const n=()=>{if(r.length===0){v.fire({icon:"warning",text:"그룹에 추가할 친구를 선택하세요",timer:2e3,showConfirmButton:!1});return}const f=x.filter(k=>k!==null);l.mutate({groupId:i,friendshipIds:f})};return e.jsxs($t,{children:[e.jsx("h1",{children:"그룹에 추가하기"}),e.jsxs(Bt,{children:[" ",e.jsx("label",{children:"그룹에 넣을 친구"})]}),e.jsxs(Nt,{children:[e.jsxs(E,{onClick:a,children:[" ",e.jsx("img",{src:oe,alt:"Gray Plus Icon"}),"추가"]}),r.length>0&&e.jsx(Et,{children:r.map(f=>e.jsx(zt,{children:f},f))})]}),s&&e.jsx(de,{}),e.jsx(Dt,{children:e.jsx(E,{onClick:n,children:"완료"})})]})},Dt=t.div`
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
`,Gt=()=>{const{closeModal:i}=A(),o=ce(),{isFriendModalOpen:s,openFriendModal:a,nicknames:r,updateFriendsData:j,setFriendData:p,friendData:h,resetFriends:y,friendshipIds:x}=L();g.useEffect(()=>{y()},[i]);const[l,c]=g.useState(""),n=z(),f=I({mutationFn:b=>Le(b),onSuccess:b=>{const m=x.filter(u=>u!==null);o.mutate({groupId:b.groupId,friendshipIds:m}),v.fire({icon:"success",text:"그룹이 생성되었습니다",timer:2e3,showConfirmButton:!1}),i(),n.invalidateQueries({queryKey:["/api/friend-groups"]})},onError:b=>{v.fire({icon:"error",text:"그룹을 생성하는 데 실패했습니다.",confirmButtonText:"확인",showConfirmButton:!0}),console.error(b)}}),k=()=>{if(!l.trim()){v.fire({icon:"warning",text:"그룹 이름을 입력하세요",timer:2e3,showConfirmButton:!1});return}f.mutate(l)};g.useEffect(()=>{j()},[s]);const{data:w}=S(s?"/api/friends":"");return g.useEffect(()=>{JSON.stringify(w)!==JSON.stringify(h)&&p(w)},[w,a]),e.jsxs(Ot,{children:[e.jsx("h1",{children:"그룹 만들기"}),e.jsxs(Yt,{children:[e.jsxs("div",{children:[" ",e.jsx("label",{children:"그룹명"}),e.jsx(Tt,{placeholder:"그룹 이름을 입력하세요",value:l,onChange:b=>c(b.target.value)})]}),e.jsx("label",{children:"그룹에 넣을 친구"})]}),e.jsxs(Kt,{children:[e.jsxs(E,{onClick:a,children:[e.jsx("img",{src:oe,alt:"Gray Plus Icon"}),"추가"]}),r.length>0&&e.jsx(Pt,{children:r.map(b=>e.jsx(qt,{children:b},b))})]}),s&&e.jsx(de,{}),e.jsx(Lt,{children:e.jsx(E,{onClick:k,children:"완료"})})]})},Tt=t.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 200px;
  color: #9a9a9a;
`,Lt=t.div`
  justify-content: flex-end;
  display: flex;
  padding: 5px;
`,Yt=t.div`
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
`,Ot=t.div`
  padding: 20px;
`,Pt=t.div`
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
`,Rt="data:image/svg+xml,%3csvg%20width='19'%20height='3'%20viewBox='0%200%2019%203'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.16016%201.5H17.1602'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Qt=({expanded:i})=>{const{openModal:o}=A(),s=z(),a=n=>{o(e.jsx(At,{groupId:n}))},r=()=>{o(e.jsx(Gt,{}))},j=n=>{c(f=>{const k=[...f];return k[n]=!k[n],k})},{data:p,isLoading:h}=S("/api/friend-groups"),y=i==="true"?p:p.slice(0,4),x=I({mutationFn:n=>Ye(n),onSuccess:()=>{s.invalidateQueries({queryKey:["/api/friend-groups"]}),v.fire({icon:"success",text:"그룹이 삭제되었습니다",timer:2e3,showConfirmButton:!1})},onError:n=>{v.fire({icon:"error",text:"그룹 삭제하는 데 실패했습니다",timer:2e3,showConfirmButton:!1}),console.error(n)}}),[l,c]=g.useState(new Array(p.length).fill(!1));return e.jsxs(_t,{children:[e.jsx(Ut,{children:e.jsxs(K,{onClick:r,children:["그룹 만들기",e.jsx(T,{})]})}),h&&e.jsx(Re,{count:4}),y.map(n=>e.jsxs("div",{children:[e.jsxs(Ht,{status:l[n.groupId]!==void 0?l[n.groupId].toString():"false",children:[e.jsxs(G,{children:[n.groupName,e.jsx("img",{src:l[n.groupId]?Mt:Ft,alt:l[n.groupId]?"UpArrow Icon":"DownArrow Icon",onClick:()=>j(n.groupId)})]}),l[n.groupId]&&e.jsxs(G,{gap:"50px",children:[e.jsxs(G,{onClick:()=>x.mutate(n.groupId),children:["그룹 삭제하기",e.jsx("img",{src:Rt,alt:"MinusIcon"})]}),e.jsxs(G,{onClick:()=>a(n.groupId),children:["그룹에 추가하기 ",e.jsx(T,{fill:"white"})]})]})]}),l[n.groupId]&&e.jsx(Jt,{children:e.jsx(le,{data:n.friends,queryKey:"/api/friend-groups",groupId:n.groupId})})]},n.groupId))]})},Ut=t.div`
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,G=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${i=>i.gap};
`,Jt=t.div`
  display: flex;
  flex-direction: column;
`;re.locale("ko");const xe=({queryKey:i})=>{const[o,s]=g.useState(1),[a,r]=g.useState(null),[j,p]=g.useState(""),[h,y]=g.useState(""),[x,l]=g.useState(re()),{closeModal:c}=A(),{setAcademicYear:n}=q(),f=z(),{data:k}=S(`/api/major/lectures/list/${o}`),w=I({mutationFn:({lectureId:u,title:F,content:R,endDate:Y})=>Oe({lectureId:u,title:F,content:R,endDate:Y}),onSuccess:()=>{v.fire({icon:"success",text:"학과 과제가 추가되었습니다",timer:2e3,showConfirmButton:!1}),n(o),c(),f.invalidateQueries({queryKey:[i]})},onError:u=>{v.fire({icon:"error",text:"학과 과제 추가하기에 실패했습니다.",confirmButtonText:"확인",showConfirmButton:!0}),console.error(u)}}),b=u=>{const F=Number(u.target.value);r(F)},m=()=>{if(a===null){v.fire({icon:"warning",text:"강좌를 선택해주세요"});return}if(!j.trim()){v.fire({icon:"warning",text:"과제명을 선택해주세요",timer:2e3,showConfirmButton:!1});return}if(!x){v.fire({icon:"warning",text:"마감일을 선택해주세요",timer:2e3,showConfirmButton:!1});return}const u=`${x.format("YYYY/MM/DD")}`,F={lectureId:a,title:j,content:h.trim()||"",endDate:u};w.mutate(F)};return e.jsxs(e.Fragment,{children:[e.jsx(Zt,{children:"학과 과제 추가하기"}),e.jsxs(B,{children:[e.jsx($,{children:"과제명"}),e.jsx(Xt,{placeholder:"과제 이름을 입력하세요",value:j,onChange:u=>p(u.target.value)})]}),e.jsxs(B,{children:[e.jsx($,{children:"학년"}),e.jsxs(ee,{value:o,onChange:u=>s(Number(u.target.value)),children:[e.jsx("option",{value:1,children:"1학년"}),e.jsx("option",{value:2,children:"2학년"}),e.jsx("option",{value:3,children:"3학년"}),e.jsx("option",{value:4,children:"4학년"})]})]}),e.jsxs(B,{children:[e.jsx($,{children:"강좌"}),e.jsxs(ee,{onChange:b,children:[e.jsx("option",{value:"",hidden:!0,children:"강좌를 선택하세요"}),k.map(u=>e.jsxs("option",{value:u.lectureId,children:[u.lectureName," - ",u.professor]},u.lectureId))]})]}),e.jsxs(B,{children:[e.jsx($,{children:"과제마감일"}),e.jsx(ye,{dateAdapter:ke,children:e.jsx(Ce,{value:x,onChange:u=>l(u||x),format:"YYYY/MM/DD",slots:{textField:Vt}})})]}),e.jsxs(B,{children:[e.jsx($,{children:"메모"}),e.jsx(Wt,{value:h,onChange:u=>{y(u.target.value)}})]}),e.jsxs(en,{children:[" ",e.jsx(E,{onClick:m,children:"일정 추가하기"})]})]})},ee=t.select`
  width: 300px;
  background: white;
  border: none;
  outline: none;
  font-size: 19px;
`,Vt=be(ve)({width:"auto",maxWidth:"200px",boxSizing:"border-box","& .MuiInputBase-root":{display:"flex",alignItems:"center",fontSize:"19px",padding:"8px",height:"47px"},"& .MuiOutlinedInput-root":{borderRadius:"5px",border:"0.5px solid #E8E8E8",backgroundColor:"white","&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#E8E8E8"}},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#E8E8E8"},"& .MuiSvgIcon-root":{fontSize:"1.2rem"}}),Wt=t.textarea`
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
`,dn=({expanded:i})=>{const{openModal:o}=A(),{academicYear:s,setAcademicYear:a,sortKey:r,setSortKey:j}=q(),p=`/api/major/lectures/sort/${r}?sort=asc&academicYear=${s}&majorId=`,{data:h,isLoading:y}=S(p),x=i==="true"?h:h.slice(0,3),l=()=>{o(e.jsx(xe,{queryKey:p}))};return e.jsxs(tn,{children:[e.jsxs(nn,{children:[e.jsx(sn,{children:e.jsxs(K,{onClick:l,children:["과제 추가하기",e.jsx(T,{fill:"currentColor"})]})}),e.jsxs("div",{children:[e.jsxs(te,{value:s,onChange:c=>a(Number(c.target.value)),children:[e.jsx("option",{value:"1",children:"1학년"}),e.jsx("option",{value:"2",children:"2학년"}),e.jsx("option",{value:"3",children:"3학년"}),e.jsx("option",{value:"4",children:"4학년"}),e.jsx("option",{value:"5",children:"5학년"})]}),e.jsx(rn,{children:"정렬"}),e.jsxs(te,{onChange:c=>j(c.target.value),value:r,children:[e.jsx("option",{value:"professor",children:"교수명"}),e.jsx("option",{value:"registration",children:"강좌명"}),e.jsx("option",{value:"assignment",children:"과제명"}),e.jsx("option",{value:"due",children:"마감일"})]})]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"학년"}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"교수"}),e.jsx("th",{children:"강좌"}),e.jsx("th",{children:"과제명"}),e.jsx("th",{children:"마감일"}),e.jsx("th",{children:"과제등록"})]})}),e.jsx("tbody",{children:y?e.jsx("tr",{children:e.jsx(on,{colSpan:7,style:{backgroundColor:"transparent",padding:0,width:"100%"},children:e.jsx(Qe,{count:3})})}):x.map(c=>e.jsxs("tr",{children:[e.jsx("td",{children:c.academicYear.replace("YEAR_","")}),e.jsx("td",{children:c.created_date}),e.jsx("td",{children:c.professor}),e.jsx("td",{children:c.lectureName}),e.jsx("td",{children:c.title}),e.jsx("td",{children:c.due_date}),e.jsx("td",{children:c.check==="CHECK"?e.jsx(M,{status:"등록됨",children:"등록됨"}):e.jsx(M,{onClick:()=>o(e.jsx(ae,{lectureAssignmentId:c.lectureAssignmentId,onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"})})]},c.lectureAssignmentId))})]})]})},ne=t.div`
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
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
`,xn=()=>{var h;const{data:i,isPending:o,isFetching:s,hasNextPage:a,fetchNextPage:r}=_e("/api/major/lectures/news",4),{ref:j,inView:p}=He({threshold:0});return g.useEffect(()=>{p&&!s&&a&&r()},[s,a,r,p]),o?e.jsx(ne,{children:e.jsx(_,{count:5})}):e.jsxs(ne,{children:[(h=i==null?void 0:i.pages)==null?void 0:h.map(y=>y.content.map(x=>e.jsxs(an,{children:[e.jsx(ie,{children:x.time}),e.jsxs(ie,{children:[x.nickname,"님이 ",x.title,"를 등록하였습니다"]}),e.jsx(ln,{children:x.check==="CHECK"?e.jsx(M,{status:"등록됨",children:"등록됨"}):e.jsx(M,{children:"내 일정에 등록"})})]},x.friendId))),s&&e.jsx(_,{count:5}),e.jsx(cn,{ref:j,className:"scroll",children:s&&e.jsx(Je,{color:"#fff"})})]})},pn=({expanded:i})=>{const{openModal:o}=A(),{academicYear:s,setAcademicYear:a}=q(),[r,j]=g.useState(null),p=`/api/major/lectures/list/${s}`,{data:h,isLoading:y}=S(p),x=i==="true"?h:h.slice(0,3),l=()=>{o(e.jsx(xe,{queryKey:p}))},[c,n]=g.useState({}),f=w=>{j(b=>b===w?null:w),n(b=>{const m={...b};return b[w]?m[w]=!1:(Object.keys(b).forEach(u=>{m[Number(u)]=!1}),m[w]=!0),m})},{data:k}=S(r?`/api/lecture-assignments/${r}`:"");return e.jsxs(gn,{children:[e.jsxs(un,{children:[e.jsx(fn,{children:e.jsxs(K,{onClick:l,children:["과제 추가하기",e.jsx(T,{fill:"currentColor"})]})}),e.jsxs(hn,{value:s,onChange:w=>a(Number(w.target.value)),children:[e.jsx("option",{value:1,children:"1학년"}),e.jsx("option",{value:2,children:"2학년"}),e.jsx("option",{value:3,children:"3학년"}),e.jsx("option",{value:4,children:"4학년"})]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"학년"}),e.jsx("th",{children:"교수"}),e.jsx("th",{children:"강좌"})]})}),e.jsx("tbody",{children:y?e.jsx("tr",{children:e.jsx("td",{colSpan:7,style:{backgroundColor:"transparent",padding:0,width:"100%"},children:e.jsx(Ue,{count:3})})}):x.map((w,b)=>e.jsxs(je.Fragment,{children:[e.jsxs("tr",{className:"hover",onClick:()=>f(w.lectureId),style:{backgroundColor:c[w.lectureId]?"rgba(102, 102, 102, 1)":"white",color:c[w.lectureId]?"white":"black",transition:"background-color 0.3s ease, color 0.3s ease"},children:[e.jsx("td",{children:w.academicYear.replace("YEAR_","")}),e.jsx("td",{children:w.professor}),e.jsx("td",{children:w.lectureName})]}),c[w.lectureId]&&e.jsx("tr",{style:{boxShadow:"none"},children:e.jsx("td",{colSpan:3,style:{padding:"0 15px"},children:e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"학년"}),e.jsx("th",{children:"과제 추가일"}),e.jsx("th",{children:"교수"}),e.jsx("th",{children:"강좌명"}),e.jsx("th",{children:"과제 제목"}),e.jsx("th",{children:"마감일"}),e.jsx("th",{children:"체크"})]})}),e.jsx("tbody",{children:k.map((m,u)=>e.jsxs("tr",{style:{backgroundColor:"white"},children:[e.jsx("td",{children:m.academicYear.replace("YEAR_","")}),e.jsx("td",{children:m.created_date}),e.jsx("td",{children:m.professor}),e.jsx("td",{children:m.lectureName}),e.jsx("td",{children:m.title}),e.jsx("td",{children:m.due_date}),e.jsx("td",{children:m.check==="CHECK"?e.jsx(M,{status:"등록됨",children:"등록됨"}):e.jsx(M,{onClick:()=>o(e.jsx(ae,{lectureAssignmentId:m.lectureAssignmentId,onTaskAdded:()=>console.log("과제가 추가되었습니다.")})),children:"내 일정에 등록"})})]},u))})]})})})]},b))})]})]})},hn=t.select`
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
`,fn=t.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  height: 67px;
`,jn=({menuState:i,expanded:o})=>{let s;switch(i){case"친구등록":s=e.jsx(H,{});break;case"친구목록":s=e.jsx(It,{expanded:o});break;case"친구소식":s=e.jsx(ot,{});break;case"친구관리":s=e.jsx(Qt,{expanded:o});break;case"학과소식":s=e.jsx(xn,{});break;case"과제목록":s=e.jsx(dn,{expanded:o});break;case"강좌목록":s=e.jsx(pn,{expanded:o});break;default:s=e.jsx(H,{})}return e.jsx(e.Fragment,{children:s})},se=({title:i,menuItems:o})=>{const[s,a]=g.useState({activeMenu:o[0],expanded:!1}),{selectedTheme:r}=me(),p=we[r][1],h=l=>a({activeMenu:l,expanded:!1}),y=()=>a(l=>({...l,expanded:!l.expanded})),x=g.useRef(null);return g.useEffect(()=>{x.current&&!s.expanded&&(x.current.scrollTop=0)},[s.expanded]),e.jsxs("div",{children:[e.jsx(yn,{children:i}),e.jsxs(kn,{children:[e.jsx(vn,{children:o.map(l=>e.jsx(bn,{$isSelected:s.activeMenu===l,onClick:()=>h(l),children:l},l))}),e.jsxs(mn,{onClick:y,children:[s.expanded?"닫기":"더보기",e.jsx("img",{src:s.expanded?Ae:De,alt:s.expanded?"Up Arrow":"Down Arrow"})]})]}),e.jsx(wn,{background:p,ref:x,expanded:s.expanded.toString(),children:e.jsx(jn,{menuState:s.activeMenu,expanded:s.expanded.toString()})})]})},mn=t.div`
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

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`,bn=t.button`
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
