import{x as u,r as m,b as h,j as e,d as s,a as j}from"./index-BZGV8Fg6.js";const y=s.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 20px 0;
`,w=s.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`,U=s.label`
  width: ${t=>t.size}px;
  height: ${t=>t.size}px;
  margin-top: 10px;
  background: #e8e8e8;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  overflow: hidden;
`,b=s.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,I=s.div`
  font-size: 17px;
  font-weight: 500;
  color: #7e7f7f;
  text-align: center;
`,C=({profilePhoto:t,onPhotoChange:o,size:c=250,title:d="프로필 사진 설정"})=>{const{id:p}=u(),i=m.useRef(!1),{updateProfileImage:f}=h(),g=async r=>{if(!r.target.files||r.target.files.length===0)return;const a=r.target.files[0];o(a),await x(a)},x=async r=>{if(!p){alert("유저 ID를 가져오지 못했습니다.");return}if(i.current)return;i.current=!0;const a=new FormData;a.append("profileImage",r);try{const n=await j.post("/api/s3/update-profile",a,{headers:{"Content-Type":"multipart/form-data"}});if(n.data.result){const l=`${n.data.result}?t=${new Date().getTime()}`;alert("프로필 사진 업로드 성공!"),f(l),o(l)}}catch(n){console.error("업로드 실패",n)}finally{i.current=!1}};return e.jsxs(y,{children:[e.jsx(w,{children:d}),e.jsx(U,{htmlFor:"file-upload",size:c,children:t?e.jsx(b,{src:typeof t=="string"?t:URL.createObjectURL(t),alt:"프로필 사진 미리보기"}):e.jsxs(e.Fragment,{children:[e.jsx("img",{src:"./src/assets/images/Camera.svg",alt:"사진 업로드 아이콘"}),e.jsx(I,{children:"사진 업로드하기"})]})}),e.jsx("input",{id:"file-upload",type:"file",accept:"image/*",style:{display:"none"},onChange:g})]})};export{C as P};
