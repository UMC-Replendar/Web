import{x as l,j as e,d as n}from"./index-B7gUGqRc.js";const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIESURBVHgBzVfRcYMwDH296389groBnaCMwAZlhGwAG6QbJBu0nQA2gA3CBmGD1i7yWRgTMOSufXc6g63oSbKsYOCP8IA4KC2kJeHRoNfSaWl5vCtSLZWWq5bvG3LRkgunNiNhQmnckJvoziw1v/s6BTbi4Bk7YYh8DoQh2gvGGSBEoBA/rhGfOuP0NZZckpYr9ImJSowJCC76RfIkkjTDtMDSGfLqliGrdMI6WP1aPDeejgnGpv0QMpIjnBZCOJUKLsoE42z5KOGqfYKGF49iLsP07L6JdbtWwR27S8C2EroZvKisYRLzMpVNwOsc0z3OEMY7AtuYCwIJmUqacY7YqJEU88glxyNPJjy2nnLLa8bLnuc6jHuyeQ4WjYeUx15O2v3xDYSOS4Z4yMLLzcSjp9B7759anllZ8XsdMKzYIUPw5K0RXLS2x48IZs/ZAgyZLcJbUrODv7AR98K7GBCGbVJs4yug0zFpHTJg/4lCbc0YLTBULXlrZ7izq7ABBJcS30Aj1nzHQv05GrayyxnjvmOEeWejkMN1JhVwKNQObRtMsRO2Oj/EnGKnDphGJvszYQdSuOiKFfqE8ZfGETtQbiCX5/hu5BXWpVF+HO4qthLxX5mriZduEoShSbyKOdOhWh57JpE3C7P2gjshZQeWbhI1VlZ37N3JOkEY3516Ju3w3/ED88LyczR2rdMAAAAASUVORK5CYII=",a="/assets/GreenTheme-eBUYeHSq.svg",A="/assets/BlueTheme-D2uobU2H.svg",x="/assets/PurpleTheme-Bz49xTFD.svg";function b(){const{theme:s,setTheme:t}=l();return console.log(s),e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx(g,{src:d}),e.jsx(E,{children:"테마설정"})]}),e.jsxs(i,{children:[e.jsx(o,{selected:s==="DEFAULT",onClick:()=>t("DEFAULT")}),e.jsx(r,{src:a,selected:s==="DEFAULT",children:e.jsx(c,{children:"기본 테마"})})]}),e.jsxs(i,{children:[e.jsx(o,{selected:s==="THEME1",onClick:()=>t("THEME1")}),e.jsx(r,{src:A,selected:s==="THEME1",children:e.jsx(c,{children:"파랑 테마"})})]}),e.jsxs(i,{children:[e.jsx(o,{selected:s==="THEME2",onClick:()=>t("THEME2")}),e.jsx(r,{src:x,selected:s==="THEME2",children:e.jsx(c,{children:"보라 테마"})})]})]})}const p=n.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
  padding: 20px;
  margin-top: 50px;
  margin-left: 79px;
`,h=n.div`
  display: flex;
  gap: 20px;
  align-items: center;
`,g=n.img`
  width: 30px;
  height: 30px;
`,E=n.span`
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`,i=n.div`
  display: flex;
  align-items: center;
  gap: 92px;
`,o=n.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${s=>s.selected?"#2bae66":"#E8E8E8"};
  background-color: ${s=>s.selected?"#2bae66":"#E8E8E8"};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #2bae66;
  }
`,r=n.div`
  padding: 20px;
  width: 355px;
  height: 199.476px;
  border-radius: 10px;
  background: #fcf6f5;
  background-image: url(${s=>s.src});
  background-position: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;

  ${s=>s.selected?"box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2)":null}
`,c=n.span`
  font-size: 18px;
  color: #333;
  text-align: center;
  display: block;
`;export{b as default};
