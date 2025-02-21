import{a as D,t as M,r as B,j as e,d as t}from"./index-HSlvYZEY.js";import{B as I}from"./blueButton-CEU8-eJw.js";import{u as P,a as E,C as _}from"./useGetInfiniteData-CpjWvf4I.js";import{t as S}from"./Task-C-RTHX55.js";import{C as g}from"./skeleton-B5_-emf1.js";import"./useBaseQuery-Dcs-aCZV.js";const z=t.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  margin-left: 79px;
  margin-top: 70px;
  gap: 20px;
`,A=t.img`
  width: 30px;
  height: 30px;
`,F=t.div`
  background-color: ${({background:o})=>o};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 34.5px 109px 30.5px 37px;
`,N=t.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,V=t.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1px;
`,W=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`,G=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`,L=t.div`
  font-weight: bold;
  font-size: 28px;
  font-family: Pretendard, sans-serif;
`,r=t.div`
  color: black;
  font-size: 19px;
  font-family: Pretendard, sans-serif;
  font-weight: 500;
  line-height: 26.6px;
  word-wrap: break-word;
  text-align: left;

  &:nth-child(1) {
    flex-basis: 10%;
    text-align: center;
  }
  &:nth-child(2) {
    flex-basis: 5%;
    text-align: center;
  }
  &:nth-child(3) {
    flex-basis: 70%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,R=t.div`
  width: 100%;
  text-align: right;
  color: ${({isEarly:o})=>o?"#4CAF50":"#EB8A8A"};
  font-size: 19px;
  font-weight: 500;
  margin-top: 5px;
`,q=t.div`
  width: 100vw;
  height: 50px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,Y=()=>{var x;const{selectedTheme:o}=D(),m=M[o][1],{data:a,isPending:u,isFetching:n,hasNextPage:c,fetchNextPage:l}=P("/api/assignment/complete",5),{ref:w,inView:d}=E({threshold:0});return B.useEffect(()=>{d&&c&&!n&&l()},[d,c,n,l]),u?e.jsx(g,{count:5}):e.jsxs(z,{children:[e.jsxs(N,{children:[e.jsx(A,{src:S,alt:"Task Icon"}),e.jsx(L,{children:"완료한 과제"})]}),e.jsxs(F,{background:m,children:[(x=a==null?void 0:a.pages)==null?void 0:x.flatMap(b=>b.content.map(s=>{console.log("과제 데이터:",s);const j=new Date(`${s.due_date} ${s.due_time}`),k=new Date(s.completion_time),p=j.getTime()-k.getTime(),h=p>0,i=Math.abs(p)/1e3,T=Math.floor(i/86400),y=Math.floor(i%86400/3600),v=Math.floor(i%3600/60),$=Math.floor(i%60),f=`${T}일 ${y}시간 ${v}분 ${$}초`,C=`과제 제출이 ${h?`${f} 빨랐습니다`:`${f} 늦었습니다`}`;return e.jsxs(V,{children:[e.jsxs(W,{children:[e.jsxs(G,{children:[e.jsx(r,{children:s.due_date||"미정"}),e.jsx(r,{children:s.due_time||"미정"}),e.jsx(r,{children:s.title||"과제 없음"})]}),e.jsx(I,{status:"완료",children:"완료"})]}),e.jsx(R,{isEarly:h,children:C})]},s.completionTime)})),n&&e.jsx(g,{count:5}),e.jsx(q,{ref:w,children:n&&e.jsx(_,{color:"black"})})]})]})};export{Y as default};
