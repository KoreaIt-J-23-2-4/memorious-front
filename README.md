Production: 서버 유지 비용 문제로 배포 중단(24.03 ~ )

[시연 영상 바로가기] (https://www.youtube.com/watch?v=sTtXckrJsCU)

# Memorious - 우리 가족만을 위한 플랫폼

코리아IT아카데미(부산)
AWS 기반 공공ㆍ빅데이터 활용 웹서비스 개발자 양성과정(2회차)
최종 프로젝트 : 4조

## 프로젝트 소개
### 프로젝트 개요
Memorious는 '왜 가족만을 위한 플랫폼은 없을까?' 라는 물음과 함께 시작된 프로젝트입니다.
'memory'와 'us'의 합성어로, 단어 그대로의 뜻과 함께 '특별히 기억할만한 우리의 추억'을 의미합니다.
Memorious에서는 멀리 떨어져 있는 가족들도 손쉽게 의사소통하고 추억을 기록 할 수 있도록 다양한 기능을 지원합니다.

캘린더 : 개인 및 가족 일정을 하나의 달력에 담아 시각적으료 보여주어 효과적인 일정 관리를 돕습니다.

메모 : 가족 간 간단한 메시지나 메모를 공유해 편리한 의사소통을 돕습니다.

게시판 : 다양한 주제로 게시글을 작성하고 공유함으로써 공지사항, 회의, 건의사항, 일상, 여행 등을 효과적으로 기록할 수 있습니다.

건강 차트 : 본인의 일일 걸음수/혈당/맥박을 기록하고 가족의 데이터를 그래프로 확인하여 건강을 관리할 수 있습니다.

간편한 카카오/네이버 소셜 로그인을 지원하며, 가족에게 초대 메일을 보내 손쉽게 가족 구성원을 초대할 수 있습니다.

### 개발 기간
2023.11.03 ~ 2023.11.29 (27일)

### 역할 분담
공동 작업
- 요구사항명세서 및 화면 정의서
- API 설계서 작성
- PPT 제작
- DB 설계 및 관리 등
주성광
- 가족 일정 공유 캘린더 구현
- 가족 구성원 초대 구현(e-mail)
- 서버 무중단 배포
- 프론트 엔드 배포
- CI/CD 파이프라인 구축
- ERD 다이어그램 작성

우주영
- 가족페이지 생성 기능 구현
- 게시판 기능 구현
- 전체 글 조회 및 검색
- 상세 글 조회
- 글 작성/수정/삭제
- JWT, Security 관리
한유정
- 네이버, 카카오 소셜 로그인 / 회원가입 기능 구현
- 공통 UI 설정 및 사이드바 구현
- 가족 차트 생성, 조회, 수정, 삭제
- 메모 생성, 조회, 수정, 삭제
- 프로필 사진 변경 구현
- 라우팅 설정
- ESLint, Prettier 설정

### 개발 환경
<b>Front-End</b>
React.js, Emotion, Recoil, React-query, Firebase

<b>Back-End & Database</b>
Java 11, Spring boot, MySQL, Amazon RDS

### Architect
![image](https://github.com/KoreaIt-J-23-2-4/memorious-front/assets/96562253/994cdc1b-e214-4d8c-8110-f88020fdfd4e)

### 기능 설명
- 소셜 로그인 / 회원가입
![image](https://github.com/KoreaIt-J-23-2-4/memorious-front/assets/96562253/98381652-93bb-4ac1-921d-ff5d626c0ad4)

사용자가 로그인이 되어있지 않을 시 표시되는 로그인 화면입니다.
네이버, 카카오를 통한 로그인을 지원합니다.
소셜 계정으로 로그인 시도했을 시 회원가입이 되어있지 않을 경우 추가 입력(회원가입) 화면으로 이동합니다.

- 가족 페이지 생성
![image](https://github.com/KoreaIt-J-23-2-4/memorious-front/assets/96562253/cc47879b-f67a-475a-be75-8c30fe89392c)

가족 구성원과의 추억과 일정 등을 기록할 우리 가족만의 페이지를 만드는 기능입니다.
로그인 후 소속된 가족이 없을 경우 다음 화면이 표시됩니다.

- 가족 초대
![image](https://github.com/KoreaIt-J-23-2-4/memorious-front/assets/96562253/f0f4475b-84ec-4e56-a45b-d885afcda6c4)

가족의 이메일을 입력하여 가족을 초대할 수 있으며, 입력한 이메일로 초대 메일이 전송됩니다.

초대를 받은 회원은 가족이 입력한 이메일을 사용하여 회원가입하면 초대가 완료됩니다.

- 캘린더
![image](https://github.com/KoreaIt-J-23-2-4/memorious-front/assets/96562253/543d73b8-591a-4cc7-acb4-02f9f41fa61d)

한 달 간의 가족 일정을 조회할 수 있으며 각각의 일정은 알고리즘이 정한 순서에 따라 보기좋게 배치됩니다.
'오늘' '다음 월' '이전 월' 버튼과 연도 드롭다운을 통해 편리하게 원하는 월로 이동할 수 있습니다.
해상도가 16:9 환경에서는 5행(6주인 월에는 6행), 16:10 환경에서는 6행의 캘린더를 보여주고, 셀의 height값에 맞게 일정이 표시됩니다.
한 날짜에 모든 일정을 보여주지 못할 경우 'n개 더보기'를 표시하고, 해당 날짜의 전체 일정을 확인할 수 있는 모달창을 띄어줍니다.
'일정 추가' 버튼 또는 일정 셀을 클릭해 클릭한 날짜에 일정을 추가할 수 있습니다.

- 메모
![image](https://github.com/KoreaIt-J-23-2-4/memorious-front/assets/96562253/b62cd125-e555-4530-aeec-9eed05aa3f46)

포스트잇과 비슷한 형태의 메모를 작성할 수 있습니다.
최신 일정순으로 정렬되며 무한스크롤을 지원합니다.
작성자 본인만이 메모를 수정하거나 삭제 할 수 있습니다.
내용에 포함된 키워드로 검색할 수 있으며 새로고침 버튼을 통해 새로운 메모를 조회할 수 있습니다.
- 게시판
![image](https://github.com/KoreaIt-J-23-2-4/memorious-front/assets/96562253/444030aa-3c87-4e3c-87f6-d5b57a97073d)

가족 구성원이 회의록, 식단, 건의사항 등 카테고리를 지정하고 사진과 글을 포스팅할 수 있는 기능입니다.
전체 글 목록이 게시판 형태로 표시됩니다.
카테고리별로 게시글을 조회할 수 있고, 또한 검색 범위와 입력한 검색어에 따른 검색이 가능합니다.
- 건강 차트
![image](https://github.com/KoreaIt-J-23-2-4/memorious-front/assets/96562253/512630f8-e29b-4777-a769-bd83e2cbc4eb)

혈당, 걸음수, 맥박 데이터를 그래프로 직관적으로 표시합니다.
사이드바에서 인원별, 기간별(1, 3, 6개월) 필터링을 지원합니다.
입력페이지에서 데이터를 손쉽게 추가 및 수정(모달)할 수 있습니다.
- 그 외
사이드바 하단에서 프로필 사진을 클릭해 변경할 수 있습니다.

