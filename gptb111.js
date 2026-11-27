
const quizMetadata = [

  {
    text: "[1~4] 다음 그림을 보고 맞는 문장을 고르십시오.",
    num: "1.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-01.webp",
    audio: "",
    options: [
      { text: "남자가 나무판에 못을 박고 있습니다." },
      { text: "남자가 나무판을 자르고 있습니다." },
      { text: "남자가 나무판을 닦고 있습니다." },
      { text: "남자가 나무판에 구멍을 뚫고 있습니다." }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[1~4] 다음 그림을 보고 맞는 문장을 고르십시오.",
    num: "2.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-02.webp",
    audio: "",
    options: [
      { text: "여자가 우편물을 분류하고 있습니다." },
      { text: "여자가 편지를 봉투에 넣고 있습니다." },
      { text: "여자가 우편물에 주소를 쓰고 있습니다." },
      { text: "여자가 우편물의 무게를 재고 있습니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[1~4] 다음 그림을 보고 맞는 문장을 고르십시오.",
    num: "3.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-03.webp",
    audio: "",
    options: [
      { text: "남자가 화분에 흙을 넣고 있습니다." },
      { text: "남자가 나무에 물을 주고 있습니다." },
      { text: "남자가 꽃을 가위로 자르고 있습니다." },
      { text: "남자가 화분을 옮기고 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[1~4] 다음 그림을 보고 맞는 문장을 고르십시오.",
    num: "4.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-04.webp",
    audio: "",
    options: [
      { text: "여자가 가방의 지퍼를 고치고 있습니다." },
      { text: "여자가 가방에 물건을 넣고 있습니다." },
      { text: "여자가 가방의 손잡이를 닦고 있습니다." },
      { text: "여자가 가방을 저울에 올려놓고 있습니다." }
    ],
    correct: 1,
    points: 2.5
  },


  {
    text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
    num: "5.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "작업을 시작하기 전에 필요한 도구를 준비<u>해야</u> 합니다." },
      { text: "작업을 시작하기 전에 필요한 도구를 준비<u>하면</u> 합니다." },
      { text: "작업을 시작하기 전에 필요한 도구를 준비<u>해서</u> 합니다." },
      { text: "작업을 시작하기 전에 필요한 도구를 준비<u>지만</u> 합니다." }
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
      { text: "비가 많이 오<u>거나</u> 우산을 가져가세요." },
      { text: "비가 많이 오<u>니까</u> 우산을 가져가세요." },
      { text: "비가 많이 오<u>지만</u> 우산을 가져가세요." },
      { text: "비가 많이 오<u>면서</u> 우산을 가져가세요." }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "7. 이 안내문을 보고 알 수 있는 것은 무엇입니까?",
    detail: "[공공 자전거 이용 안내]\n자전거를 이용한 후에는 지정된 거치대에 반납해 주십시오.\n거치대에 제대로 잠그지 않으면 반납이 완료되지 않습니다.\n반납 후에는 앱에서 반납 상태를 확인해 주십시오.",
    image: "",
    audio: "",
    options: [
      { text: "자전거는 아무 곳에나 세워도 됩니다." },
      { text: "반납한 후에는 앱에서 상태를 확인해야 합니다." },
      { text: "자전거를 이용하려면 신분증을 맡겨야 합니다." },
      { text: "자전거는 하루에 한 번만 이용할 수 있습니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "8. 이 안내문에 따라 해야 하는 것은 무엇입니까?",
    detail: "[도서관 자료실 이용 안내]\n자료실 안에서는 음식을 먹거나 음료를 마실 수 없습니다.\n휴대전화는 진동으로 바꾸어 주십시오.\n읽은 책은 책상 위에 두시면 직원이 정리하겠습니다.",
    image: "",
    audio: "",
    options: [
      { text: "읽은 책을 직접 책장에 꽂아야 합니다." },
      { text: "자료실에서 간단한 음식을 먹을 수 있습니다." },
      { text: "휴대전화 소리가 나지 않도록 바꾸어야 합니다." },
      { text: "자료실에서는 친구와 큰 소리로 이야기해도 됩니다." }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "9. 이 공지의 내용과 같은 것은 무엇입니까?",
    detail: "[건물 소독 안내]\n이번 주 금요일 오전 9시부터 오후 1시까지 건물 전체를 소독합니다.\n소독하는 동안에는 출입을 삼가 주십시오.\n각 방의 창문을 미리 닫아 주시기 바랍니다.",
    image: "",
    audio: "",
    options: [
      { text: "소독은 금요일 오후에 시작합니다." },
      { text: "소독하는 동안 건물에 들어가면 안 됩니다." },
      { text: "소독이 끝난 후 창문을 모두 열어야 합니다." },
      { text: "소독은 건물의 일부 공간에서만 진행합니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "10. 이 안내문을 보고 알 수 있는 것은 무엇입니까?",
    detail: "[주민 체육관 이용 안내]\n체육관을 이용할 때는 운동화를 착용해 주십시오.\n실내에서는 음식물을 먹을 수 없습니다.\n사용한 운동 기구는 제자리에 정리해 주시기 바랍니다.",
    image: "",
    audio: "",
    options: [
      { text: "운동 기구는 사용한 곳에 그대로 두어야 합니다." },
      { text: "체육관에서는 실내화를 신으면 안 됩니다." },
      { text: "운동할 때 운동화를 착용해야 합니다." },
      { text: "체육관 안에서 물을 제외한 음료를 마셔도 됩니다." }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "11.",
    detail: "고객이 주문한 물건을 포장한 후 배송 주소를 다시 ______ 확인했습니다.",
    image: "",
    audio: "",
    options: [
      { text: "갑자기" },
      { text: "조용하게" },
      { text: "위험하게" },
      { text: "정확하게" }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "12.",
    detail: "기차가 출발하기 전에 승객들은 승강장에서 ______ 합니다.",
    image: "",
    audio: "",
    options: [
      { text: "기다리지만" },
      { text: "기다려야" },
      { text: "기다리거나" },
      { text: "기다리면서" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "13.",
    detail: "이 기계는 사용 방법이 복잡하므로 설명서를 먼저 ______ 좋습니다.",
    image: "",
    audio: "",
    options: [
      { text: "읽은 후에" },
      { text: "읽을 때마다" },
      { text: "읽는 것이" },
      { text: "읽었는데" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "14.",
    detail: "날씨가 추워졌으니 외출할 때 따뜻한 옷을 ______.",
    image: "",
    audio: "",
    options: [
      { text: "벗으십시오" },
      { text: "씻으십시오" },
      { text: "입으십시오" },
      { text: "말리십시오" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "15.",
    detail: "회의가 끝난 다음에는 중요한 내용을 정리해서 직원들에게 ______.",
    image: "",
    audio: "",
    options: [
      { text: "전달해야 합니다" },
      { text: "출발해야 합니다" },
      { text: "도착해야 합니다" },
      { text: "출근해야 합니다" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "16.",
    detail: "이 지역은 밤에 길이 어두우므로 혼자 다닐 때 ______ 조심해야 합니다.",
    image: "",
    audio: "",
    options: [
      { text: "아직" },
      { text: "벌써" },
      { text: "가끔" },
      { text: "특히" }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[17~18] 다음 질문에 답하십시오.",
    num: "17. 다음 단어와 관계있는 것은 무엇입니까?",
    detail: "망치",
    image: "",
    audio: "",
    options: [
      { text: "못" },
      { text: "접시" },
      { text: "수건" },
      { text: "우산" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[17~18] 다음 질문에 답하십시오.",
    num: "18. 다음 단어와 비슷한 말은 무엇입니까?",
    detail: "고장 나다",
    image: "",
    audio: "",
    options: [
      { text: "깨끗해지다" },
      { text: "작동하지 않다" },
      { text: "사용하기 편하다" },
      { text: "새것이 되다" }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[19~20] 다음 글을 읽고 물음에 답하십시오.",
    num: "19. 이 글의 중심 내용은 무엇입니까?",
    detail: "요즘은 필요한 물건을 직접 사기보다 이웃과 함께 빌려 쓰는 사람들이 많아졌습니다. 자주 사용하지 않는 물건을 서로 빌려 쓰면 돈을 아낄 수 있고 물건을 버리는 일도 줄일 수 있습니다. 그래서 여러 지역에서 물건을 빌려주는 공간을 운영하고 있습니다.",
    image: "",
    audio: "",
    options: [
      { text: "이웃과 물건을 함께 빌려 쓰는 것의 장점" },
      { text: "새로운 물건을 구입하는 방법" },
      { text: "사용하지 않는 물건을 판매하는 방법" },
      { text: "지역마다 다른 물건의 가격" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[19~20] 다음 글을 읽고 물음에 답하십시오.",
    num: "20. 이 글의 내용과 같은 것은 무엇입니까?",
    detail: "농촌에서는 계절에 따라 다양한 농산물을 수확합니다. 수확한 농산물은 바로 판매하기도 하지만, 오래 보관할 수 있도록 말리거나 냉장 시설에 넣기도 합니다. 농산물을 잘 보관하면 신선도를 유지하고 버리는 양을 줄일 수 있습니다.",
    image: "",
    audio: "",
    options: [
      { text: "모든 농산물은 수확한 날 바로 판매해야 합니다." },
      { text: "농산물을 잘 보관하면 버리는 양을 줄일 수 있습니다." },
      { text: "농산물은 계절과 관계없이 같은 시기에 수확합니다." },
      { text: "농촌에서는 냉장 시설을 사용하지 않습니다." }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[21~22] 들은 것을 고르십시오.",
    num: "21.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-21.mp3",
    options: [
      { text: "보관" },
      { text: "교환" },
      { text: "고장" },
      { text: "공장" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[21~22] 들은 것을 고르십시오.",
    num: "22.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-22.mp3",
    options: [
      { text: "작업이 끝나면 도구를 정리해 주세요." },
      { text: "작업이 끝나면 문을 닫아 주세요." },
      { text: "작업을 시작하면 도구를 가져오세요." },
      { text: "작업이 끝나기 전에 도구를 정리해 주세요." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[23~28] 다음을 듣고 알맞은 그림을 고르십시오.",
    num: "23.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-23.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b10-27-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b8-26-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-23-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-25-4.webp" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 알맞은 그림을 고르십시오.",
    num: "24.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-24.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-24-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-02.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b10-26-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b10-24-1.webp" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 알맞은 그림을 고르십시오.",
    num: "25.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-25.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-24-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-23-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-24-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-25-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 알맞은 그림을 고르십시오.",
    num: "26.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-26.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-28-4.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-26-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-35-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt25-28-4.webp" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 알맞은 그림을 고르십시오.",
    num: "27.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-27.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-02.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-02.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-27-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-28-4.webp" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[23~28] 다음을 듣고 알맞은 그림을 고르십시오.",
    num: "28.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-28.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-25-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b10-27-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-01.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gt-b11-28-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "29.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-29.mp3",
    options: [
      { text: "네, 안내 데스크에 맡겼습니다." },
      { text: "아니요, 아직 확인하지 않았습니다." },
      { text: "네, 어제보다 조금 늦었습니다." },
      { text: "아니요, 그곳은 문을 닫았습니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "30.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-30.mp3",
    options: [
      { text: "세 장 정도 필요합니다." },
      { text: "회의실은 이 층에 있습니다." },
      { text: "오후에 다시 연락하겠습니다." },
      { text: "지난주에 준비했습니다." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "31.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-31.mp3",
    options: [
      { text: "오른쪽 문으로 나가시면 됩니다." },
      { text: "다음 주에 다시 시작합니다." },
      { text: "한 시간 정도 걸립니다." },
      { text: "담당 직원에게 물어보세요." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "32.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-32.mp3",
    options: [
      { text: "네, 따뜻한 물로 씻었습니다." },
      { text: "아니요, 아직 예약하지 않았습니다." },
      { text: "네, 오늘 안에 보내겠습니다." },
      { text: "아니요, 이쪽으로 오시면 됩니다." }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[33] 다음을 듣고 이어지는 말을 고르십시오.",
    num: "33.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-33.mp3",
    options: [
      { text: "네, 제가 사용 방법을 알려 드리겠습니다." },
      { text: "아니요, 아직 점심을 먹지 않았습니다." },
      { text: "네, 어제 물건을 구입했습니다." },
      { text: "아니요, 버스 정류장은 저쪽에 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[34~36] 다음 대화를 듣고 알맞은 그림을 고르십시오.",
    num: "34.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-34.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt25-23-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-34-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b10-24-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b9-27-2.webp" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[34~36] 다음 대화를 듣고 알맞은 그림을 고르십시오.",
    num: "35.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-35.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b10-36-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-35-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt25-36-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-35-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[34~36] 다음 대화를 듣고 알맞은 그림을 고르십시오.",
    num: "36.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-36.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-36-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-35-4.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-07.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt25-26-2.webp" }
    ],
    correct: 0,
    points: 2.5
  },


  {
    text: "[37~40] 다음 대화를 듣고 물음에 답하십시오.",
    num: "37. 남자는 무엇을 하려고 합니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-37.mp3",
    options: [
      { text: "은행에서 통장을 만들려고 합니다." },
      { text: "은행에서 돈을 찾으려고 합니다." },
      { text: "은행에서 환전하려고 합니다." },
      { text: "은행에서 카드를 재발급받으려고 합니다." }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[37~40] 다음 대화를 듣고 물음에 답하십시오.",
    num: "38. 여자는 왜 일찍 퇴근하려고 합니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-38.mp3",
    options: [
      { text: "친구를 공항에 데려다주려고" },
      { text: "아이의 학교 행사에 참석하려고" },
      { text: "병원에서 진료를 받으려고" },
      { text: "가족과 저녁 식사를 하려고" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[37~40] 다음 대화를 듣고 물음에 답하십시오.",
    num: "39. 두 사람은 어디에서 만나기로 했습니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-39.mp3",
    options: [
      { text: "시청 정문 앞" },
      { text: "지하철역 개찰구 앞" },
      { text: "버스 터미널 매표소 앞" },
      { text: "병원 안내 데스크 앞" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[37~40] 다음 대화를 듣고 물음에 답하십시오.",
    num: "40. 남자는 무엇을 확인하고 있습니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b11-40.mp3",
    options: [
      { text: "물건의 배송 날짜" },
      { text: "제품의 수리 비용" },
      { text: "주문의 취소 여부" },
      { text: "가게의 영업시간" }
    ],
    correct: 0,
    points: 2.5
  }
];