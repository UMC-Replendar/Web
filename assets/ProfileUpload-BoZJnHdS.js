import{e as x,r as h,c as m,j as e,d as n,S as C,b as w}from"./index-DjNPCOSe.js";const j="data:image/svg+xml,%3csvg%20width='131'%20height='100'%20viewBox='0%200%20131%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='camera-1--photos-picture-camera-photography-photo-pictures'%3e%3cpath%20id='Vector'%20d='M128.011%2030.8986C128.011%2028.3656%20126.997%2025.9363%20125.194%2024.1452C123.391%2022.3542%20120.944%2021.3479%20118.394%2021.3479H101.151C99.897%2021.3479%2098.7153%2020.7595%2097.9593%2019.7585L85.9344%203.83583C85.1785%202.83486%2083.9967%202.24646%2082.7424%202.24646H48.2576C47.0033%202.24646%2045.8216%202.83486%2045.0656%203.83583L33.0407%2019.7585C32.2847%2020.7595%2031.103%2021.3479%2029.8487%2021.3479H12.6063C10.0557%2021.3479%207.60957%2022.3542%205.80602%2024.1452C4.00248%2025.9363%202.98926%2028.3656%202.98926%2030.8986V88.2029C2.98926%2090.7358%204.00248%2093.1655%205.80602%2094.9562C7.60957%2096.747%2010.0557%2097.7536%2012.6063%2097.7536H118.394C120.944%2097.7536%20123.391%2096.747%20125.194%2094.9562C126.997%2093.1655%20128.011%2090.7358%20128.011%2088.2029V30.8986Z'%20stroke='%23666666'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M65.4997%2076.2645C77.4502%2076.2645%2087.138%2066.6435%2087.138%2054.7754C87.138%2042.9073%2077.4502%2033.2863%2065.4997%2033.2863C53.5491%2033.2863%2043.8613%2042.9073%2043.8613%2054.7754C43.8613%2066.6435%2053.5491%2076.2645%2065.4997%2076.2645Z'%20stroke='%23666666'%20stroke-width='4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e",y=n.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 20px 0;
`,U=n.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`,k=n.label`
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
`,b=n.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`,v=n.div`
  font-size: 17px;
  font-weight: 500;
  color: #7e7f7f;
  text-align: center;
`,T=({profilePhoto:t,onPhotoChange:s,size:l=250,title:d="프로필 사진 설정"})=>{const{id:p}=x(),a=h.useRef(!1),{updateProfileImage:f}=m(),g=async r=>{if(!r.target.files||r.target.files.length===0)return;const o=r.target.files[0];s(o),await u(o)},u=async r=>{if(!p){C.fire({icon:"error",text:"유저 ID를 가져오지 못했습니다",showConfirmButton:!0,confirmButtonText:"확인"});return}if(a.current)return;a.current=!0;const o=new FormData;o.append("profileImage",r);try{const i=await w.post("/api/s3/update-profile",o,{headers:{"Content-Type":"multipart/form-data"}});if(i.data.result){const c=`${i.data.result}?t=${new Date().getTime()}`;f(c),s(c)}}catch(i){console.error("업로드 실패",i)}finally{a.current=!1}};return e.jsxs(y,{children:[e.jsx(U,{children:d}),e.jsx(k,{htmlFor:"file-upload",size:l,children:t?e.jsx(b,{src:typeof t=="string"?t:URL.createObjectURL(t),alt:"프로필 사진 미리보기"}):e.jsxs(e.Fragment,{children:[e.jsx("img",{src:j,alt:"사진 업로드 아이콘"}),e.jsx(v,{children:"사진 업로드하기"})]})}),e.jsx("input",{id:"file-upload",type:"file",accept:"image/*",style:{display:"none"},onChange:g})]})};export{T as P};
