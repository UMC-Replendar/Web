# 📅 Replendar

> 할 일을 미루지 않게, 친구와 함께 해내는 과제·일정 관리 서비스

UMC 7th Replendar 팀 Web 레포지토리입니다.

<br>

## 주요 기능

| 기능 | 설명 |
|---|---|
| **진행 중인 과제** | 과제 등록 · 남은 시간 표시 · 완료 처리 |
| **중요 / 보관 과제** | 과제를 중요 표시하거나 보관함으로 분리 |
| **마감 알림** | 마감 1시간 전 알림, 완료 시간 기록 |
| **히스토리** | 지난 과제 기록 조회 |
| **커뮤니티** | 친구 소식(friend news) · 방명록 · 그룹 친구 추가 |
| **마이페이지** | 프로필 · 학과 정보 관리 |

<br>

## 기술 스택

| 구분 | 사용 기술 |
|---|---|
| Core | React 19, TypeScript, Vite |
| 상태 관리 | Zustand, TanStack Query v5 |
| 스타일링 | styled-components, Emotion, MUI v6 |
| 네트워크 | Axios (`apis/axios-instance.ts`) |
| 날짜 | dayjs, react-calendar, MUI X Date Pickers |
| 기타 | SweetAlert2, react-spinners, react-intersection-observer, EmailJS |
| 배포 | GitHub Pages (`gh-pages`) |

<br>

## 시작하기

```bash
cd Replendar
yarn install
yarn dev
```

| 명령 | 설명 |
|---|---|
| `yarn dev` | 개발 서버 실행 |
| `yarn build` | 타입 체크 후 프로덕션 빌드 |
| `yarn preview` | 빌드 결과 미리보기 |
| `yarn lint` | ESLint 검사 |
| `yarn deploy` | 빌드 후 GitHub Pages 배포 |

<br>

## 프로젝트 구조

```
Replendar/src/
├── apis/           axios 인스턴스 · 과제(taskApi) · 커뮤니티(commuApi)
├── components/     기능별 컴포넌트
│   ├── OngoingComponents/    진행 중인 과제
│   ├── CommuComponents/      커뮤니티 · 방명록
│   ├── LoginComponents/      로그인
│   ├── signupComponents/     회원가입
│   ├── infoComopnents/       내 정보
│   └── SettingsComponents/   설정
├── hooks/          useGetData · useGetInfiniteData · useDebounce · useNotification
├── layout/         root-layout
└── assets/         css · images
```

<br>

## 브랜치 전략

`develop` 브랜치를 기준으로 작업하며, 기능별 `feat/*` 브랜치에서 작업 후 PR을 올립니다.

<br>

## 팀

| GitHub |
|---|
| [@coldgeon](https://github.com/coldgeon) |
| [@seongwwww](https://github.com/seongwwww) |
| [@seonyeong1111](https://github.com/seonyeong1111) |
| [@ssarangkim](https://github.com/ssarangkim) |
