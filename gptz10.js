const quizMetadata = [

  {
    text: "[1~4] 다음 그림을 보고 알맞은 것을 고르십시오.",
    num: "1.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-01.webp",
    audio: "",
    options: [
      { text: "보호 안경을 착용하고 있습니다." },
      { text: "안전화를 신고 있습니다." },
      { text: "방진 마스크를 쓰고 있습니다." },
      { text: "보호 장갑을 벗고 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[1~4] 다음 그림을 보고 알맞은 것을 고르십시오.",
    num: "2.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-02.webp",
    audio: "",
    options: [
      { text: "제품을 검사하고 있습니다." },
      { text: "제품을 운반하고 있습니다." },
      { text: "제품을 포장하고 있습니다." },
      { text: "제품을 조립하고 있습니다." }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[1~4] 다음 그림을 보고 알맞은 것을 고르십시오.",
    num: "3.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-03.webp",
    audio: "",
    options: [
      { text: "출입문을 잠그고 있습니다." },
      { text: "소화기를 점검하고 있습니다." },
      { text: "전기 시설을 수리하고 있습니다." },
      { text: "비상구의 위치를 확인하고 있습니다." }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[1~4] 다음 그림을 보고 알맞은 것을 고르십시오.",
    num: "4.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-04.webp",
    audio: "",
    options: [
      { text: "물건을 선반에서 내리고 있습니다." },
      { text: "물건의 수량을 확인하고 있습니다." },
      { text: "물건을 트럭에 싣고 있습니다." },
      { text: "물건을 창고 안쪽으로 옮기고 있습니다." }
    ],
    correct: 1,
    points: 2.5
  },

{
  text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
  num:"5.",
  detail:"",
  image:"",
  options:[
    { text:"작업이 끝<u>면</u> 주변을 정리해야 합니다." },
    { text:"비가 오<u>아서</u> 안전화를 신었습니다." },
    { text:"관리자에게 물어보<u>은</u> 후에 작업했습니다." },
    { text:"기계가 고장 나<u>고</u> 작업을 중단했습니다." }
  ],
  correct:0,
  points:2.5
},

{
  text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
  num:"6.",
  detail:"",
  image:"",
  options:[
    { text:"기계에 이상이 생기<u>으면</u> 관리자에게 알려야 합니다." },
    { text:"작업을 시작하<u>는 후에</u> 안전교육을 받았습니다." },
    { text:"부품을 확인하<u>고서</u> 담당자에게 보고했습니다." },
    { text:"시간이 없<u>으니까서</u> 작업을 서둘렀습니다." }
  ],
  correct:0,
  points:2.5
},

{
  text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
  num:"7. 외국인 주민센터 상담은 언제 중단됩니까?",
  detail:"",
  image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-07.webp",
  options:[
    { text:"오전 9시부터" },
    { text:"오전 12시부터" },
    { text:"오후 1시부터" },
    { text:"오후 6시부터" }
  ],
  correct:1,
  points:2.5
},

{
  text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
  num:"8. 설비 교체 작업이 진행되는 동안 무엇을 해야 합니까?",
  detail:"",
  image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-08.webp",
  options:[
    { text:"작업을 중단해야 합니다." },
    { text:"관리자에게 허락을 받아야 합니다." },
    { text:"다른 통로를 이용해야 합니다." },
    { text:"설비를 직접 점검해야 합니다." }
  ],
  correct:2,
  points:2.5
},

{
  text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
  num:"9. 외국인 주민센터 상담을 받을 때 필요한 것은 무엇입니까?",
  detail:"",
  image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-09.webp",
  options:[
    { text:"근무표" },
    { text:"여권 또는 외국인등록증" },
    { text:"은행 통장" },
    { text:"건강진단서" }
  ],
  correct:1,
  points:2.5
},

{
  text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
  num:"10. 규격이 다른 부품은 어떻게 하기로 했습니까?",
  detail:"",
  image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-10.webp",
  options:[
    { text:"바로 작업에 사용하기로 했습니다." },
    { text:"모두 폐기하기로 했습니다." },
    { text:"별도로 보관한 뒤 교환을 요청하기로 했습니다." },
    { text:"다른 회사에 다시 주문하기로 했습니다." }
  ],
  correct:2,
  points:2.5
},


  {
    text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "11.",
    detail: "작업 중에는 사고가 발생하지 않도록 주변 상황을 항상 ______ 살펴야 합니다.",
    image: "",
    audio: "",
    options: [
      { text: "주의 깊게" },
      { text: "갑자기" },
      { text: "간단하게" },
      { text: "무조건" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "12.",
    detail: "부품의 수량이 맞지 않아서 담당자에게 다시 ______ 확인했습니다.",
    image: "",
    audio: "",
    options: [
      { text: "한 번" },
      { text: "한동안" },
      { text: "한꺼번에" },
      { text: "한편" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "13.",
    detail: "작업 지시를 정확하게 이해하지 못했으면 시작하기 전에 다시 ______ 하는 것이 좋습니다.",
    image: "",
    audio: "",
    options: [
      { text: "물어보는" },
      { text: "물어본" },
      { text: "물어보도록" },
      { text: "물어보게" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "14.",
    detail: "이 장비는 사용 방법이 복잡하므로 설명서를 충분히 읽은 ______ 사용해야 합니다.",
    image: "",
    audio: "",
    options: [
      { text: "후에" },
      { text: "동안" },
      { text: "대신" },
      { text: "마다" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "15.",
    detail: "오늘 처리해야 할 일이 많아서 평소보다 조금 ______ 퇴근할 것 같습니다.",
    image: "",
    audio: "",
    options: [
      { text: "늦게" },
      { text: "늦은" },
      { text: "늦도록" },
      { text: "늦더라도" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "16.",
    detail: "비가 많이 오는 날에는 바닥이 미끄러울 수 ______ 이동할 때 특히 조심해야 합니다.",
    image: "",
    audio: "",
    options: [
      { text: "있으므로" },
      { text: "있더라도" },
      { text: "있으면서" },
      { text: "있을까" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "17. 다음 안내문의 내용과 같은 것을 고르십시오.",
    num: "17.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-17.webp",
    audio: "",
    options: [
      { text: "예약자는 상담을 받을 수 없습니다." },
      { text: "상담할 때 신분증명 서류가 필요합니다." },
      { text: "여권이 없으면 반드시 예약해야 합니다." },
      { text: "예약하지 않은 사람은 상담을 받을 수 없습니다." }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "18. 다음 안내문의 내용과 같은 것을 고르십시오.",
    num: "18.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-18.webp",
    audio: "",
    options: [
      { text: "카드를 잃어버려도 신고할 필요가 없습니다." },
      { text: "분실 신고 전에 재발급을 신청해야 합니다." },
      { text: "분실 신고 후 본인 확인을 거쳐 재발급을 신청할 수 있습니다." },
      { text: "본인 확인 없이 카드를 바로 재발급받을 수 있습니다." }
    ],
    correct: 2,
    points: 2.5
  },


  {
    text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num: "19.",
    detail: "수진 씨는 최근 회사에서 담당 업무가 바뀌었습니다. 이전에는 제품 포장을 담당했지만, 이번 달부터는 완성된 제품의 수량과 상태를 확인하는 일을 맡게 되었습니다. 처음에는 업무가 익숙하지 않았지만 동료에게 여러 번 설명을 들은 후에는 혼자서도 검사할 수 있게 되었습니다.",
    image: "",
    audio: "",
    options: [
      { text: "수진 씨는 지금도 제품 포장만 담당하고 있습니다." },
      { text: "수진 씨는 이번 달부터 제품 검사를 담당하고 있습니다." },
      { text: "수진 씨는 동료에게 업무를 가르쳐 주고 있습니다." },
      { text: "수진 씨는 새로운 업무를 아직 시작하지 않았습니다." }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num: "20.",
    detail: "이번 달부터 회사 식당의 식사 시간이 변경됩니다. 오전 근무자는 11시 30분부터 12시 30분까지 식사하고, 오후 근무자는 12시 30분부터 1시 30분까지 식사합니다. 근무 시간에 따라 식사 시간이 다르므로 직원들은 자신의 근무조를 확인해야 합니다.",
    image: "",
    audio: "",
    options: [
      { text: "모든 직원의 식사 시간이 같습니다." },
      { text: "오후 근무자는 오전 11시 30분부터 식사합니다." },
      { text: "직원들은 자신의 근무조에 맞는 식사 시간을 확인해야 합니다." },
      { text: "식사 시간은 다음 달부터 변경될 예정입니다." }
    ],
    correct: 2,
    points: 2.5
  },


  {
    text: "[21~22] 들은 것을 고르십시오.",
    num: "21.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-21.mp3",
    options: [
      { text: "납부" },
      { text: "납품" },
      { text: "납입" },
      { text: "남품" }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[21~22] 들은 것을 고르십시오.",
    num: "22.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-22.mp3",
    options: [
      { text: "환급" },
      { text: "환불" },
      { text: "환전" },
      { text: "환율" }
    ],
    correct: 0,
    points: 2.5
  },


  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "23.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-23.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-23-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-23-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-23-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-23-4.webp" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "24.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-24.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-24-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-24-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-24-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-24-4.webp" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "25.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-25.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-25-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-25-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-25-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-25-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "26.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-26.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-26-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-26-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-26-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-26-4.webp" }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "27.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-27.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-27-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-27-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-27-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-27-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "28.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-28.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-28-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-28-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-28-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-28-4.webp" }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "29.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-29.mp3",
    options: [
      { text: "네, 담당자에게 확인해 보겠습니다." },
      { text: "아니요, 어제 이미 제출했습니다." },
      { text: "네, 사무실 옆에 있습니다." },
      { text: "오후 두 시부터 시작합니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "30.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-30.mp3",
    options: [
      { text: "네, 오늘 오후까지 정리해 놓겠습니다." },
      { text: "네, 작업장 안쪽 선반에 있습니다." },
      { text: "아니요, 어제 교체했습니다." },
      { text: "다음 주 월요일에 출근합니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "31.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-31.mp3",
    options: [
      { text: "네, 어제 담당자에게 연락했습니다." },
      { text: "신청서와 여권 사본을 준비하고 있습니다." },
      { text: "아니요, 아직 방문하지 않았습니다." },
      { text: "오전 10시에 문을 엽니다." }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
    num: "32.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-32.mp3",
    options: [
      { text: "네, 작업이 끝나면 전원을 차단하겠습니다." },
      { text: "네, 작업장 오른쪽에 있습니다." },
      { text: "아니요, 오늘은 출근하지 않습니다." },
      { text: "지난주 금요일에 점검했습니다." }
    ],
    correct: 0,
    points: 2.5
  },


  {
    text: "33. 이어지는 말을 고르십시오.",
    num: "33.",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-33.mp3",
    options: [
      { text: "그럼 작업이 끝난 후에 다시 말씀드리겠습니다." },
      { text: "네, 어제 병원에 다녀왔습니다." },
      { text: "오전 8시에 회사에 도착했습니다." },
      { text: "아니요, 주말에는 문을 닫습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[34~36] 듣고 알맞은 그림을 고르십시오.",
    num: "34.",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-34.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-34-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-34-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-34-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-34-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[34~36] 듣고 알맞은 그림을 고르십시오.",
    num: "35.",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-35.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-35-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-35-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-35-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-35-4.webp" }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[34~36] 듣고 알맞은 그림을 고르십시오.",
    num: "36.",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-36.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-36-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-36-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-36-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-36-4.webp" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[37~40] 듣고 물음에 답하십시오.",
    num: "37. 남자는 왜 작업을 중단했습니까?",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-37.mp3",
    options: [
      { text: "기계에서 이상한 소리가 나서" },
      { text: "관리자가 퇴근하라고 해서" },
      { text: "부품이 모두 준비되어서" },
      { text: "작업 시간이 끝나서" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[37~40] 듣고 물음에 답하십시오.",
    num: "38. 여자는 내일 무엇을 해야 합니까?",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-38.mp3",
    options: [
      { text: "은행에 방문해야 합니다." },
      { text: "거래처에 물건을 보내야 합니다." },
      { text: "병원에서 건강검진을 받아야 합니다." },
      { text: "회사에서 안전교육을 받아야 합니다." }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[37~40] 듣고 물음에 답하십시오.",
    num: "39. 남자는 왜 담당자에게 다시 연락하려고 합니까?",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-39.mp3",
    options: [
      { text: "납품 시간이 변경되어서" },
      { text: "제품 수량을 확인하지 못해서" },
      { text: "주소가 잘못 적혀 있어서" },
      { text: "주문을 취소해야 해서" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[37~40] 듣고 물음에 답하십시오.",
    num: "40. 여자는 주말에 무엇을 할 예정입니까?",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt10-40.mp3",
    options: [
      { text: "친구와 등산을 할 예정입니다." },
      { text: "집에서 이사를 준비할 예정입니다." },
      { text: "가족과 여행을 갈 예정입니다." },
      { text: "회사에 나가서 추가 근무를 할 예정입니다." }
    ],
    correct: 0,
    points: 2.5
  }

];