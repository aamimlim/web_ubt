

const questions = [

  {
    text: "[1~4] 다음 그림을 보고 알맞은 문장을 고르십시오.",
    num: "1.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-01.webp",
    audio: "",
    options: [
      { text: "남자가 수도꼭지를 수리하고 있습니다." },
      { text: "남자가 물통을 옮기고 있습니다." },
      { text: "남자가 세면대를 청소하고 있습니다." },
      { text: "남자가 배수구를 막고 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[1~4] 다음 그림을 보고 알맞은 문장을 고르십시오.",
    num: "2.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-02.webp",
    audio: "",
    options: [
      { text: "여자가 우편물을 분류하고 있습니다." },
      { text: "여자가 상자에 주소를 쓰고 있습니다." },
      { text: "여자가 편지에 우표를 붙이고 있습니다." },
      { text: "여자가 택배 상자를 포장하고 있습니다." }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[1~4] 다음 그림을 보고 알맞은 문장을 고르십시오.",
    num: "3.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-03.webp",
    audio: "",
    options: [
      { text: "남자가 나무판을 자르고 있습니다." },
      { text: "남자가 의자 다리를 고정하고 있습니다." },
      { text: "남자가 책상을 옮기고 있습니다." },
      { text: "남자가 나무에 못을 박고 있습니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[1~4] 다음 그림을 보고 알맞은 문장을 고르십시오.",
    num: "4.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-04.webp",
    audio: "",
    options: [
      { text: "여자가 생선을 손질하고 있습니다." },
      { text: "여자가 그릇을 닦고 있습니다." },
      { text: "여자가 채소를 씻고 있습니다." },
      { text: "여자가 음식을 냉장고에 넣고 있습니다." }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
    num: "5.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "길을 건널 때 좌우를 살펴<u>야</u> 합니다." },
      { text: "길을 건널 때 좌우를 살펴<u>지만</u> 합니다." },
      { text: "길을 건널 때 좌우를 살펴<u>거나</u> 합니다." },
      { text: "길을 건널 때 좌우를 살펴<u>도록</u> 합니다." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
    num: "6.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "짐이 무거우<u>니까</u> 혼자 들지 마세요." },
      { text: "짐이 무거우<u>면서</u> 혼자 들지 마세요." },
      { text: "짐이 무거우<u>려고</u> 혼자 들지 마세요." },
      { text: "짐이 무거우<u>ㄴ데도</u> 혼자 들지 마세요." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "7. 공공 체육관에서 운동 기구를 사용한 후에는 어떻게 해야 합니까?",
    detail: "[체육관 이용 안내]\n운동 기구를 사용한 후에는 땀을 닦고 제자리에 놓아 주십시오. 운동 기구를 오래 사용하지 말고 다른 사람과 함께 이용해 주십시오. 실내에서는 운동화를 착용해야 합니다.",
    image: "",
    audio: "",
    options: [
      { text: "운동 기구를 사용한 후 제자리에 놓아야 합니다." },
      { text: "운동 기구를 한 사람이 계속 사용해도 됩니다." },
      { text: "실내에서 맨발로 운동해야 합니다." },
      { text: "운동 기구를 밖으로 가져가도 됩니다." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "8. 농산물 직거래 장터는 언제 이용할 수 있습니까?",
    detail: "[농산물 직거래 장터 안내]\n우리 동네 농산물 직거래 장터가 매주 토요일에 열립니다. 오전 8시부터 오후 1시까지 이용할 수 있습니다. 지역 농민들이 직접 재배한 채소와 과일을 판매합니다. 장바구니를 가져오시면 좋습니다.",
    image: "",
    audio: "",
    options: [
      { text: "매주 일요일 오후에 이용할 수 있습니다." },
      { text: "매주 토요일 오전부터 오후 1시까지 이용할 수 있습니다." },
      { text: "평일에만 이용할 수 있습니다." },
      { text: "매일 오전 8시부터 이용할 수 있습니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "9. 공항에서 수하물을 찾은 후 무엇을 확인해야 합니까?",
    detail: "[수하물 찾기 안내]\n수하물을 찾은 후에는 가방의 이름표와 번호표를 확인하십시오. 다른 사람의 가방을 가져가지 않도록 주의해 주십시오. 가방이 파손되었거나 나오지 않으면 가까운 안내 데스크에 문의하십시오.",
    image: "",
    audio: "",
    options: [
      { text: "가방의 무게를 다시 재야 합니다." },
      { text: "가방을 안내 데스크에 맡겨야 합니다." },
      { text: "가방의 이름표와 번호표를 확인해야 합니다." },
      { text: "가방을 열어서 물건을 모두 꺼내야 합니다." }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "10. 주민 강좌에 신청하려면 어떻게 해야 합니까?",
    detail: "[주민 강좌 신청 안내]\n주민 강좌는 선착순으로 신청을 받습니다. 신청 기간은 3월 2일부터 3월 10일까지입니다. 주민센터 방문 또는 홈페이지를 통해 신청할 수 있습니다. 강좌별 정원이 차면 신청이 마감됩니다.",
    image: "",
    audio: "",
    options: [
      { text: "강좌가 시작된 후에 신청해야 합니다." },
      { text: "전화로만 신청할 수 있습니다." },
      { text: "정원이 차도 계속 신청할 수 있습니다." },
      { text: "신청 기간 안에 방문하거나 홈페이지에서 신청해야 합니다." }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "11.",
    detail: "물건을 구입한 후에는 영수증을 잘 ______ 두십시오.",
    image: "",
    audio: "",
    options: [
      { text: "버려" },
      { text: "보관해" },
      { text: "빌려" },
      { text: "나누어" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "12.",
    detail: "기차를 타기 전에 승차권의 날짜와 시간을 ______ 보십시오.",
    image: "",
    audio: "",
    options: [
      { text: "확인해" },
      { text: "연결해" },
      { text: "신청해" },
      { text: "교환해" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "13.",
    detail: "이 기계는 사용 방법이 간단해서 누구나 쉽게 ______ 수 있습니다.",
    image: "",
    audio: "",
    options: [
      { text: "수리할" },
      { text: "운전할" },
      { text: "사용할" },
      { text: "운반할" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "14.",
    detail: "날씨가 추워졌으니 외출할 때 두꺼운 옷을 ______.",
    image: "",
    audio: "",
    options: [
      { text: "벗으십시오" },
      { text: "입으십시오" },
      { text: "말리십시오" },
      { text: "접으십시오" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "15.",
    detail: "기차역에 도착하면 전광판에서 출발 시간을 ______.",
    image: "",
    audio: "",
    options: [
      { text: "확인해야 합니다" },
      { text: "기다려야 합니다" },
      { text: "준비해야 합니다" },
      { text: "신청해야 합니다" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "16.",
    detail: "이 지역은 주차 공간이 부족해서 차를 세우기가 ______.",
    image: "",
    audio: "",
    options: [
      { text: "편리합니다" },
      { text: "간단합니다" },
      { text: "불편합니다" },
      { text: "익숙합니다" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[17~18] 다음 질문에 답하십시오.",
    num: "17. 다음 단어와 관계있는 것은 무엇입니까?",
    detail: "빨래, 설거지, 청소, 요리",
    image: "",
    audio: "",
    options: [
      { text: "교통수단" },
      { text: "집안일" },
      { text: "운동 경기" },
      { text: "사무 업무" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[17~18] 다음 질문에 답하십시오.",
    num: "18. 다음 단어와 비슷한 말은 무엇입니까?",
    detail: "충분하다",
    image: "",
    audio: "",
    options: [
      { text: "부족하다" },
      { text: "필요하다" },
      { text: "넉넉하다" },
      { text: "복잡하다" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[19~20] 다음 글을 읽고 물음에 답하십시오.",
    num: "19. 이 글의 중심 내용은 무엇입니까?",
    detail: "요즘에는 집에서 직접 음식을 만들어 먹는 사람들이 많아지고 있습니다. 음식을 직접 만들면 재료와 양을 조절할 수 있고, 가족의 입맛에 맞게 요리할 수도 있습니다. 처음에는 시간이 걸리지만 자주 만들다 보면 요리하는 방법도 익숙해집니다.",
    image: "",
    audio: "",
    options: [
      { text: "음식을 직접 만드는 것의 장점" },
      { text: "식당을 운영하는 방법" },
      { text: "음식 재료를 보관하는 장소" },
      { text: "요리 시간을 줄이는 기계" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[19~20] 다음 글을 읽고 물음에 답하십시오.",
    num: "20. 글의 내용과 같은 것은 무엇입니까?",
    detail: "일부 회사에서는 직원들이 출근 시간을 선택할 수 있는 유연 근무제를 운영합니다. 직원들은 회사에서 정한 시간 범위 안에서 출근 시간을 정할 수 있습니다. 이를 통해 교통이 혼잡한 시간을 피하거나 개인 일정에 맞게 일할 수 있습니다.",
    image: "",
    audio: "",
    options: [
      { text: "모든 직원은 같은 시간에 출근해야 합니다." },
      { text: "유연 근무제에서는 출근 시간을 선택할 수 있습니다." },
      { text: "유연 근무제를 이용하면 근무 시간이 없어집니다." },
      { text: "직원들은 회사에 출근하지 않아도 됩니다." }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[21~24] 들은 것을 고르십시오.",
    num: "21.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-21.mp3",
    options: [
      { text: "수량" },
      { text: "수령" },
      { text: "수리" },
      { text: "수영" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[21~24] 들은 것을 고르십시오.",
    num: "22.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-22.mp3",
    options: [
      { text: "작업은 다음 주 월요일부터 시작됩니다." },
      { text: "작업은 다음 주 목요일부터 시작됩니다." },
      { text: "작업은 다음 주 월요일에 끝납니다." },
      { text: "작업은 이번 주 월요일부터 시작됩니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[23~28] 다음을 듣고 내용과 같은 그림을 고르십시오.",
    num: "23.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-23.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-28-4.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-23-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-25-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-23-1.webp" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 내용과 같은 그림을 고르십시오.",
    num: "24.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-24.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-23-2.webp"},
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-04.webp"},
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-27-3.webp"},
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-24-4.webp"}
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 내용과 같은 그림을 고르십시오.",
    num: "25.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-25.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-25-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-01.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-26-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-02.webp" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 내용과 같은 그림을 고르십시오.",
    num: "26.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-26.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-28-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-27-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-03.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-26-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 내용과 같은 그림을 고르십시오.",
    num: "27.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-27.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-26-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-27-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-03.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt25-27-1.webp" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 내용과 같은 그림을 고르십시오.",
    num: "28.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-28.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt25-23-3.webp"},
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-04.webp"},
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-01.webp"},
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-28-4.webp"}
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "29.",
    detail: "",
    image: "",
    aaudio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-29.mp3",
    options: [
      { text: "네, 출발 시간은 오후 두 시입니다." },
      { text: "네, 창문을 열어 놓았습니다." },
      { text: "아니요, 아직 주문하지 않았습니다." },
      { text: "네, 왼쪽에 있는 건물입니다." }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "30.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-30.mp3",
    options: [
      { text: "오전 10시부터 오후 4시까지입니다." },
      { text: "3번 출구로 나가시면 됩니다." },
      { text: "지난주에 신청했습니다." },
      { text: "두 명이 함께 왔습니다." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "31.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-31.mp3",
    options: [
      { text: "네, 아직 사용하지 않았습니다." },
      { text: "창고 문 옆에 놓아 주세요." },
      { text: "이것은 어제 구입한 것입니다." },
      { text: "오후에는 사람이 많습니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "32.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-32.mp3",
    options: [
      { text: "아니요, 아직 출발하지 않았습니다." },
      { text: "네, 왼쪽으로 돌아가면 됩니다." },
      { text: "네, 오늘은 문을 닫습니다." },
      { text: "네, 카드로 결제하겠습니다." }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[33] 다음을 듣고 이어지는 말로 가장 알맞은 것을 고르십시오.",
    num: "33.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-33.mp3",
    options: [
      { text: "네, 제가 안내해 드리겠습니다." },
      { text: "아니요, 아직 아침을 먹지 않았습니다." },
      { text: "네, 어제 비가 많이 왔습니다." },
      { text: "그 가방은 제 것이 아닙니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[34~36] 다음 대화를 듣고 알맞은 그림을 고르십시오.",
    num: "34.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-34.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-27-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-03.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-34-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-35-4.webp" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[34~36] 다음 대화를 듣고 알맞은 그림을 고르십시오.",
    num: "35.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-35.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-35-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-35-4.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-23-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-28-2.webp" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[34~36] 다음 대화를 듣고 알맞은 그림을 고르십시오.",
    num: "36.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-36.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-35-4.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-35-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-36-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-36-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[37~40] 다음 대화를 듣고 물음에 답하십시오.",
    num: "37. 남자는 무엇을 하려고 합니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-37.mp3",
    options: [
      { text: "휴대전화 요금을 내려고 합니다." },
      { text: "안경을 새로 맞추려고 합니다." },
      { text: "자동차 보험에 가입하려고 합니다." },
      { text: "여행 가방을 사려고 합니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[37~40] 다음 대화를 듣고 물음에 답하십시오.",
    num: "38. 여자는 무엇을 잃어버렸습니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-38.mp3",
    options: [
      { text: "휴대전화" },
      { text: "우산" },
      { text: "열쇠" },
      { text: "지갑" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[37~40] 다음 대화를 듣고 물음에 답하십시오.",
    num: "39. 남자는 왜 일찍 퇴근해야 합니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-39.mp3",
    options: [
      { text: "가족을 병원에 데려가야 해서" },
      { text: "친구와 약속이 있어서" },
      { text: "은행에 가야 해서" },
      { text: "기차를 타야 해서" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[37~40] 다음 대화를 듣고 물음에 답하십시오.",
    num: "40. 두 사람은 무엇을 하기로 했습니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-40.mp3",
    options: [
      { text: "점심을 함께 먹기로 했습니다." },
      { text: "주말에 등산을 가기로 했습니다." },
      { text: "새로운 작업장을 방문하기로 했습니다." },
      { text: "다음 주에 다시 회의하기로 했습니다." }
    ],
    correct: 1,
    points: 2.5
  }
];