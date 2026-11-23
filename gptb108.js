
const quizMetadata = [
  {
    text: "[1~4] 다음 그림을 보고 알맞은 문장을 고르십시오.",
    num: "1.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-01.webp",
    audio: "",
    options: [
      { text: "여자가 창문을 닦고 있습니다." },
      { text: "여자가 커튼을 달고 있습니다." },
      { text: "여자가 벽에 그림을 걸고 있습니다." },
      { text: "여자가 바닥을 쓸고 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[1~4] 다음 그림을 보고 알맞은 문장을 고르십시오.",
    num: "2.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-02.webp",
    audio: "",
    options: [
      { text: "남자가 사다리를 옮기고 있습니다." },
      { text: "남자가 전구를 교체하고 있습니다." },
      { text: "남자가 전선을 정리하고 있습니다." },
      { text: "남자가 벽을 칠하고 있습니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[1~4] 다음 그림을 보고 알맞은 문장을 고르십시오.",
    num: "3.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-03.webp",
    audio: "",
    options: [
      { text: "여자가 화분에 흙을 넣고 있습니다." },
      { text: "여자가 꽃을 포장하고 있습니다." },
      { text: "여자가 나뭇가지를 자르고 있습니다." },
      { text: "여자가 식물에 이름표를 붙이고 있습니다." }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[1~4] 다음 그림을 보고 알맞은 문장을 고르십시오.",
    num: "4.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-04.webp",
    audio: "",
    options: [
      { text: "남자가 서류에 도장을 찍고 있습니다." },
      { text: "남자가 서류를 복사하고 있습니다." },
      { text: "남자가 봉투를 봉하고 있습니다." },
      { text: "남자가 책을 정리하고 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
    num: "5.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "비가 오<u>면</u> 우산을 가지고 가세요." },
      { text: "비가 오<u>지만</u> 우산을 가지고 가세요." },
      { text: "비가 오<u>거나</u> 우산을 가지고 가세요." },
      { text: "비가 오<u>도록</u> 우산을 가지고 가세요." }
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
      { text: "회의가 끝나<u>기 때문에</u> 자료를 나누어 주었습니다." },
      { text: "회의가 끝나<u>기 전에</u> 자료를 나누어 주었습니다." },
      { text: "회의가 끝나<u>는 동안</u> 자료를 나누어 주었습니다." },
      { text: "회의가 끝나<u>자마자</u> 자료를 나누어 주었습니다." }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "7. 주민센터에서 복사기를 이용할 때 지켜야 할 것은 무엇입니까?",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-07.webp",
    audio: "",
    options: [
      { text: "한 번에 20장까지 무료로 복사할 수 있습니다." },
      { text: "주말에도 복사기를 이용할 수 있습니다." },
      { text: "복사한 종이는 복사기에 두고 가야 합니다." },
      { text: "오후 6시까지 이용할 수 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "8. 음식물 쓰레기를 버릴 때 어떻게 해야 합니까?",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-08.webp",
    audio: "",
    options: [
      { text: "음식물 쓰레기를 일반 쓰레기통에 버려야 합니다." },
      { text: "비닐봉지를 음식물 쓰레기와 함께 버려야 합니다." },
      { text: "전용 수거기를 이용해야 합니다." },
      { text: "밤 11시에도 수거기를 이용할 수 있습니다." }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "9. 미술관에서 사진을 찍으려면 어떻게 해야 합니까?",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-09.webp",
    audio: "",
    options: [
      { text: "모든 작품을 자유롭게 촬영할 수 있습니다." },
      { text: "사진 촬영이 허용된 작품만 찍을 수 있습니다." },
      { text: "전시 작품을 가까이에서 만져도 됩니다." },
      { text: "전시실에서 음식을 먹을 수 있습니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "10. 어린이를 데리러 갈 때 보호자는 무엇을 해야 합니까?",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-10.webp",
    audio: "",
    options: [
      { text: "어린이의 가방만 확인하면 됩니다." },
      { text: "어린이를 데리러 올 때마다 전화해야 합니다." },
      { text: "보호자 확인증을 제시해야 합니다." },
      { text: "등록되지 않은 사람도 연락 없이 데려갈 수 있습니다." }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "11.",
    detail: "기계를 사용하기 전에 설명서를 ______ 읽어 보십시오.",
    image: "",
    audio: "",
    options: [
      { text: "자세히" },
      { text: "갑자기" },
      { text: "아무리" },
      { text: "벌써" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "12.",
    detail: "이 제품은 사용한 후에 반드시 전원을 ______ 합니다.",
    image: "",
    audio: "",
    options: [
      { text: "끄어야" },
      { text: "켜야" },
      { text: "놓아야" },
      { text: "올려야" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "13.",
    detail: "두 상품의 가격과 성능을 ______ 구입하는 것이 좋습니다.",
    image: "",
    audio: "",
    options: [
      { text: "비교한 후에" },
      { text: "상관없이" },
      { text: "반대로" },
      { text: "무조건" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "14.",
    detail: "몸이 아프면 무리하지 말고 충분히 ______ 합니다.",
    image: "",
    audio: "",
    options: [
      { text: "쉬어야" },
      { text: "움직여야" },
      { text: "참아야" },
      { text: "서둘러야" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "15.",
    detail: "작업장에서는 위험한 물건을 ______ 다루어야 합니다.",
    image: "",
    audio: "",
    options: [
      { text: "안전하게" },
      { text: "간단하게" },
      { text: "느긋하게" },
      { text: "자유롭게" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "16.",
    detail: "약속 시간에 늦을 것 같으면 미리 담당자에게 ______ 것이 좋습니다.",
    image: "",
    audio: "",
    options: [
      { text: "연락하는" },
      { text: "기다리는" },
      { text: "출발하는" },
      { text: "도착하는" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[17~18] 다음 질문에 답하십시오.",
    num: "17. 다음 단어와 관계있는 것은 무엇입니까?",
    detail: "꽃, 불, 연기, 얼굴",
    image: "",
    audio: "",
    options: [
      { text: "피다" },
      { text: "켜다" },
      { text: "씻다" },
      { text: "끄다" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[17~18] 다음 질문에 답하십시오.",
    num: "18. 다음 단어와 비슷한 말은 무엇입니까?",
    detail: "치료비",
    image: "",
    audio: "",
    options: [
      { text: "요양비" },
      { text: "차비" },
      { text: "진단서" },
      { text: "내역서" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[19~20] 다음 글을 읽고 물음에 답하십시오.",
    num: "19. 이 글의 중심 내용은 무엇입니까?",
    detail: "요즘에는 고장 난 물건을 버리지 않고 수리해서 사용하는 사람이 많아지고 있습니다. 지역마다 운영하는 수리 모임에서는 전문가들이 주민들에게 간단한 수리 방법을 알려 줍니다. 물건을 오래 사용하면 쓰레기를 줄이고 자원도 절약할 수 있습니다.",
    image: "",
    audio: "",
    options: [
      { text: "새로운 물건을 구입하는 방법" },
      { text: "고장 난 물건을 수리해서 사용하는 것의 장점" },
      { text: "전문가가 되기 위해 공부하는 방법" },
      { text: "쓰레기를 한곳에 모아 버리는 방법" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[19~20] 다음 글을 읽고 물음에 답하십시오.",
    num: "20. 글의 내용과 같은 것은 무엇입니까?",
    detail: "일부 지역에서는 대중교통을 자주 이용하는 주민을 위해 정기 교통권을 판매하고 있습니다. 이 교통권을 구입하면 정해진 기간 동안 버스나 지하철을 여러 번 이용할 수 있습니다. 교통비를 줄일 수 있어서 출퇴근하는 사람들에게 인기가 있습니다.",
    image: "",
    audio: "",
    options: [
      { text: "정기 교통권은 한 번만 사용할 수 있습니다." },
      { text: "정기 교통권은 출퇴근하는 사람들에게 도움이 됩니다." },
      { text: "정기 교통권은 버스에서만 사용할 수 있습니다." },
      { text: "정기 교통권을 이용하면 교통비가 더 비쌉니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[21~24] 들은 것을 고르십시오.",
    num: "21.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-21.mp3",
    options: [
      { text: "분리" },
      { text: "불리" },
      { text: "물리" },
      { text: "거리" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[21~24] 들은 것을 고르십시오.",
    num: "22.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-22.mp3",
    options: [
      { text: "이번 주 금요일에 교육이 시작됩니다." },
      { text: "이번 주 월요일에 교육이 시작됩니다." },
      { text: "이번 주 금요일에 교역이 시작됩니다." },
      { text: "이번 주 금요일에 교육이 끝납니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[23~28] 다음을 듣고 내용과 같은 그림을 고르십시오.",
    num: "23.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-23.mp3",
    options: [
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt25-01.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-23-3.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-23-3.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-26-2.webp" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 내용과 같은 그림을 고르십시오.",
    num: "24.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-24.mp3",
    options: [
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-24-1.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-23-2.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-28-2.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt20-34-3.webp" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 내용과 같은 그림을 고르십시오.",
    num: "25.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-25.mp3",
    options: [
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-01.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-2.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-24-2.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-25-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 내용과 같은 그림을 고르십시오.",
    num: "26.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-26.mp3",
    options: [
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-36-1.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-26-2.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt25-27-1.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-25-4.webp" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 내용과 같은 그림을 고르십시오.",
    num: "27.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-27.mp3",
    options: [
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-04.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-27-3.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-27-3.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-28-4.webp" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 내용과 같은 그림을 고르십시오.",
    num: "28.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-28.mp3",
    options: [
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-28-1.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-23-3.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-28-4.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-02.webp" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "29.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-29.mp3",
    options: [
      { text: "네, 신청서를 작성해서 제출하겠습니다." },
      { text: "아니요, 아직 도착하지 않았습니다." },
      { text: "네, 오른쪽 문으로 들어가세요." },
      { text: "아니요, 다음 주에 시작합니다." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "30.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-30.mp3",
    options: [
      { text: "오후 세 시에 출발합니다." },
      { text: "모두 다섯 장 준비해 주세요." },
      { text: "회의실은 2층에 있습니다." },
      { text: "아직 결정하지 않았습니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "31.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-31.mp3",
    options: [
      { text: "내일 오전에 다시 확인하겠습니다." },
      { text: "창고 안쪽 선반에 보관하세요." },
      { text: "이 제품은 새로 구입했습니다." },
      { text: "담당자는 지금 외출했습니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "32.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-32.mp3",
    options: [
      { text: "신분증을 책상 위에 놓았습니다." },
      { text: "접수는 오후 다섯 시까지입니다." },
      { text: "네, 가방 안에 가지고 왔습니다." },
      { text: "그 서류는 우편으로 보냈습니다." }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[33] 다음을 듣고 이어지는 말로 가장 알맞은 것을 고르십시오.",
    num: "33.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-33.mp3",
    options: [
      { text: "네, 제가 다시 확인해 보겠습니다." },
      { text: "아니요, 아직 점심을 먹지 않았습니다." },
      { text: "네, 버스 정류장은 저쪽입니다." },
      { text: "그 물건은 어제 도착했습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[34~36] 다음 대화를 듣고 알맞은 그림을 고르십시오.",
    num: "34.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-34.mp3",
    options: [
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-28-2.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-34-2.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-26-1.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-34-2.webp" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[34~36] 다음 대화를 듣고 알맞은 그림을 고르십시오.",
    num: "35.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-35.mp3",
    options: [
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-10.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-28-2.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-10.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-35-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[34~36] 다음 대화를 듣고 알맞은 그림을 고르십시오.",
    num: "36.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-36.mp3",
    options: [
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-36-1.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-09.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-36-4.webp" },
      { text: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt24-35-4.webp" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[37~40] 다음 대화를 듣고 물음에 답하십시오.",
    num: "37. 남자는 무엇을 하려고 합니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-37.mp3",
    options: [
      { text: "은행에서 계좌를 개설하려고 합니다." },
      { text: "휴대전화를 수리하려고 합니다." },
      { text: "기차표를 취소하려고 합니다." },
      { text: "보험금을 신청하려고 합니다." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[37~40] 다음 대화를 듣고 물음에 답하십시오.",
    num: "38. 여자는 왜 약속 장소에 늦었습니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-38.mp3",
    options: [
      { text: "버스를 잘못 탔기 때문입니다." },
      { text: "길에서 지갑을 잃어버렸기 때문입니다." },
      { text: "갑자기 비가 많이 왔기 때문입니다." },
      { text: "병원에 들렀기 때문입니다." }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[37~40] 다음 대화를 듣고 물음에 답하십시오.",
    num: "39. 두 사람은 언제 만나기로 했습니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-39.mp3",
    options: [
      { text: "월요일 오후" },
      { text: "화요일 오전" },
      { text: "수요일 저녁" },
      { text: "목요일 오후" }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[37~40] 다음 대화를 듣고 물음에 답하십시오.",
    num: "40. 여자는 남자에게 무엇을 부탁했습니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-40.mp3",
    options: [
      { text: "회의실을 예약해 달라고 했습니다." },
      { text: "컴퓨터 파일을 이메일로 보내 달라고 했습니다." },
      { text: "물품을 창고로 옮겨 달라고 했습니다." },
      { text: "보고서를 인쇄해 달라고 했습니다." }
    ],
    correct: 1,
    points: 2.5
  }
];