const quizMetadata = [
  {
    text: "[1~4] 다음 그림을 보고 알맞은 것을 고르십시오.",
    num: "1.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-01.webp",
    audio: "",
    options: [
      { text: "작업복의 단추를 잠그고 있습니다." },
      { text: "작업복을 세탁하고 있습니다." },
      { text: "작업복을 벗고 있습니다." },
      { text: "작업복을 다림질하고 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[1~4] 다음 그림을 보고 알맞은 것을 고르십시오.",
    num: "2.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-02.webp",
    audio: "",
    options: [
      { text: "서류를 복사하고 있습니다." },
      { text: "서류에 도장을 찍고 있습니다." },
      { text: "서류를 버리고 있습니다." },
      { text: "서류를 우편으로 보내고 있습니다." }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[1~4] 다음 그림을 보고 알맞은 것을 고르십시오.",
    num: "3.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-03.webp",
    audio: "",
    options: [
      { text: "전화를 받고 있습니다." },
      { text: "회의실을 청소하고 있습니다." },
      { text: "출입카드를 단말기에 대고 있습니다." },
      { text: "컴퓨터를 수리하고 있습니다." }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[1~4] 다음 그림을 보고 알맞은 것을 고르십시오.",
    num: "4.",
    detail: "",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-04.webp",
    audio: "",
    options: [
      { text: "상품에 가격표를 붙이고 있습니다." },
      { text: "상품을 계산하고 있습니다." },
      { text: "상품을 진열대에 정리하고 있습니다." },
      { text: "상품을 손님에게 배달하고 있습니다." }
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
      { text: "회의가 끝나<u>니까</u> 모두 자리에서 일어났습니다." },
      { text: "서류를 확인하<u>어서</u> 담당자에게 보냈습니다." },
      { text: "시간이 부족하<u>지만서</u> 끝까지 작업했습니다." },
      { text: "비가 많이 오<u>으면서</u> 길이 미끄러웠습니다." }
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
      { text: "제품을 검사하<u>기 전에</u> 포장했습니다." },
      { text: "회의가 끝난 <u>후에</u> 담당자에게 결과를 전달했습니다." },
      { text: "필요한 서류를 준비하<u>은 후에</u> 신청했습니다." },
      { text: "시간이 남<u>아서도</u> 바로 퇴근했습니다." }
    ],
    correct: 1,
    points: 2.5
  },


{
  text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
  num:"7. 출입카드는 언제 단말기에 대야 합니까?",
  detail:"",
  image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-07.webp",
  options:[
    { text:"출근할 때만" },
    { text:"퇴근할 때만" },
    { text:"출근할 때와 퇴근할 때" },
    { text:"점심시간에만" }
  ],
  correct:2,
  points:2.5
},

{
  text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
  num:"8. 작업복이 더러워졌거나 훼손되었을 때 어떻게 해야 합니까?",
  detail:"",
  image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-08.webp",
  options:[
    { text:"개인적으로 가져가서 사용합니다." },
    { text:"관리 담당자에게 알립니다." },
    { text:"사용한 작업복을 버립니다." },
    { text:"다른 직원의 작업복을 사용합니다." }
  ],
  correct:1,
  points:2.5
},

{
  text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
  num:"9. 이번 달부터 급여 명세서를 어떻게 확인할 수 있습니까?",
  detail:"",
  image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-09.webp",
  options:[
    { text:"종이로 받은 명세서를 확인합니다." },
    { text:"관리자에게 직접 문의합니다." },
    { text:"회사 홈페이지에 로그인하여 확인합니다." },
    { text:"은행에 방문하여 확인합니다." }
  ],
  correct:2,
  points:2.5
},

{
  text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
  num:"10. 자재를 가져간 후에 무엇을 해야 합니까?",
  detail:"",
  image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-10.webp",
  options:[
    { text:"사용한 자재를 다시 가져다 놓습니다." },
    { text:"사용한 수량을 기록합니다." },
    { text:"관리자에게 자재를 반납합니다." },
    { text:"자재를 다른 장소로 옮깁니다." }
  ],
  correct:1,
  points:2.5
},

  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "11.",
    detail: "회의에 참석하기 전에 필요한 자료를 미리 ______ 놓는 것이 좋습니다.",
    image: "",
    audio: "",
    options: [
      { text: "준비해" },
      { text: "준비하고" },
      { text: "준비하면" },
      { text: "준비하려고" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "12.",
    detail: "신청서를 작성한 다음 담당자에게 ______ 제출해야 합니다.",
    image: "",
    audio: "",
    options: [
      { text: "직접" },
      { text: "갑자기" },
      { text: "서로" },
      { text: "벌써" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "13.",
    detail: "이 서류는 중요한 내용이 포함되어 있으므로 다른 사람에게 ______ 안 됩니다.",
    image: "",
    audio: "",
    options: [
      { text: "보여 주면" },
      { text: "보여 주어도" },
      { text: "보여 주어서" },
      { text: "보여 주면 안" }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "14.",
    detail: "출장을 가기 전에 교통편과 숙소를 미리 ______ 두었습니다.",
    image: "",
    audio: "",
    options: [
      { text: "예약해" },
      { text: "예약하면" },
      { text: "예약하러" },
      { text: "예약하면서" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "15.",
    detail: "거래처에서 요청한 내용이 정확한지 확인한 ______ 답변을 보내야 합니다.",
    image: "",
    audio: "",
    options: [
      { text: "뒤에" },
      { text: "때문에" },
      { text: "동안" },
      { text: "마다" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "16.",
    detail: "업무가 예상보다 늦어질 경우에는 담당자에게 미리 ______ 것이 좋습니다.",
    image: "",
    audio: "",
    options: [
      { text: "알리는" },
      { text: "알리면" },
      { text: "알려서" },
      { text: "알리도록" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "17. 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num: "17.",
    detail: "외국인 근로자 상담 안내\n\n근무 중 발생한 임금이나 근로계약과 관련된 문제가 있을 경우 상담을 신청할 수 있습니다. 상담을 받을 때에는 근로계약서와 관련 서류를 함께 가져오시기 바랍니다.",
    image: "foreign_worker_counseling_set15.png",
    audio: "",
    options: [
      { text: "상담을 받을 때 관련 서류가 필요합니다." },
      { text: "임금 문제에 대해서는 상담할 수 없습니다." },
      { text: "근로계약서는 가져오지 않아도 됩니다." },
      { text: "상담은 회사 관리자만 신청할 수 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "18. 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num: "18.",
    detail: "택배 발송 안내\n\n회사에서 개인 물품을 택배로 보낼 경우에는 지정된 접수대에서 발송 신청서를 작성해야 합니다. 물품의 크기와 무게에 따라 요금이 달라질 수 있으며, 발송 비용은 본인이 부담합니다.",
    image: "company_delivery_notice_set15.png",
    audio: "",
    options: [
      { text: "발송 비용은 회사가 모두 부담합니다." },
      { text: "물품의 크기와 관계없이 요금은 같습니다." },
      { text: "개인 물품을 보낼 때 신청서를 작성해야 합니다." },
      { text: "택배는 지정된 접수대에서 신청할 수 없습니다." }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num: "19.",
    detail: "지영 씨는 회사에서 해외 거래처의 주문을 관리하는 일을 맡고 있습니다. 주문이 들어오면 먼저 제품의 종류와 수량을 확인하고, 출하 날짜를 정한 후 담당 부서에 전달합니다. 최근에는 주문량이 많아져서 업무를 처리하는 데 시간이 더 걸리고 있습니다.",
    image: "",
    audio: "",
    options: [
      { text: "지영 씨는 제품을 직접 생산합니다." },
      { text: "지영 씨는 해외 주문을 관리하는 일을 합니다." },
      { text: "최근에는 주문량이 줄어들었습니다." },
      { text: "지영 씨는 출하 날짜를 정하지 않습니다." }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num: "20.",
    detail: "회사에서는 직원들의 편의를 위해 이번 달부터 사내 셔틀버스를 운행합니다. 버스는 오전과 오후에 각각 두 번 운행하며, 이용하려는 직원은 하루 전에 신청해야 합니다. 신청하지 않은 경우에는 좌석이 없을 수 있습니다.",
    image: "",
    audio: "",
    options: [
      { text: "셔틀버스는 하루에 한 번만 운행합니다." },
      { text: "버스를 이용하려면 당일 신청해야 합니다." },
      { text: "신청하지 않아도 항상 좌석을 이용할 수 있습니다." },
      { text: "셔틀버스는 오전과 오후에 운행합니다." }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[21~22] 들은 것을 고르십시오.",
    num: "21.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-21.mp3",
    options: [
      { text: "납부" },
      { text: "납품" },
      { text: "납입" },
      { text: "남부" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[21~22] 들은 것을 고르십시오.",
    num: "22.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-22.mp3",
    options: [
      { text: "재고" },
      { text: "제고" },
      { text: "제공" },
      { text: "재고하다" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "23.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-23.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-23-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-23-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-23-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-23-4.webp" }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "24.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-24.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-24-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-24-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-24-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-24-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "25.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-25.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-25-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-25-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-25-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-25-4.webp" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "26.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-26.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-26-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-26-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-26-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-26-4.webp" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "27.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-27.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-27-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-27-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-27-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-27-4.webp" }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "28.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-28.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-28-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-28-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-28-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-28-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },


  {
    text: "[29~32] 듣고 알맞은 대답을 고르십시오.",
    num: "29.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-29.mp3",
    options: [
      {text:"네, 오늘 안에 제출하겠습니다."},
    {text:"아니요, 서류를 작성하고 있습니다."},
    {text:"네, 담당자가 서류를 확인했습니다."},
    {text:"아니요, 어제 회의에 참석했습니다."}
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[29~32] 듣고 알맞은 대답을 고르십시오.",
    num: "30.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-30.mp3",
    options: [
       {text:"오후 두 시에 준비합니다."},
    {text:"열 부 정도 준비하면 됩니다."},
    {text:"회의실에서 준비하고 있습니다."},
    {text:"내일까지 회의를 준비합니다."}
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[29~32] 듣고 알맞은 대답을 고르십시오.",
    num: "31.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-31.mp3",
    options: [
      {text:"창고 안쪽 선반에 보관하면 됩니다."},
    {text:"내일 오전에 물건을 확인합니다."},
    {text:"담당자에게 물건을 주문했습니다."},
    {text:"오후 네 시까지 작업합니다."}
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[29~32] 듣고 알맞은 대답을 고르십시오.",
    num: "32.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-32.mp3",
    options: [
      {text:"출입국사무소에서 발급받았습니다."},
    {text:"회사 담당자에게 제출했습니다."},
    {text:"이번 주 금요일까지 제출해야 합니다."},
    {text:"외국인등록증을 복사했습니다."}
    ],
    correct: 2,
    points: 2.5
  },


  {
    text: "[33] 듣고 이어지는 말을 고르십시오.",
    num: "33.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-33.mp3",
    options: [
      { text: "그럼 확인한 후에 다시 알려 드리겠습니다." },
      { text: "네, 저는 회사에서 일합니다." },
      { text: "아니요, 어제 집에 있었습니다." },
      { text: "오후 두 시에 점심을 먹었습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[34~36] 듣고 알맞은 그림을 고르십시오.",
    num: "34.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-34.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-34-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-34-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-34-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-34-4.webp" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[34~36] 듣고 알맞은 그림을 고르십시오.",
    num: "35.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-35.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-35-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-35-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-35-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-35-4.webp" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[34~36] 듣고 알맞은 그림을 고르십시오.",
    num: "36.",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-36.mp3",
    options: [
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-36-1.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-36-2.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-36-3.webp" },
      { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-36-4.webp" }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[37~40] 듣고 물음에 답하십시오.",
    num: "37. 남자는 무엇을 확인하려고 합니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-37.mp3",
    options: [
      { text: "출하 날짜" },
      { text: "식사 시간" },
      { text: "휴가 기간" },
      { text: "버스 운행 시간" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[37~40] 듣고 물음에 답하십시오.",
    num: "38. 여자는 왜 신청서를 다시 작성해야 합니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-38.mp3",
    options: [
      { text: "사진이 없어서" },
      { text: "주소가 잘못되어서" },
      { text: "서명이 빠져 있어서" },
      { text: "날짜가 지나서" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[37~40] 듣고 물음에 답하십시오.",
    num: "39. 남자는 무엇을 부탁하려고 합니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-39.mp3",
    options: [
      { text: "제품을 포장해 달라고" },
      { text: "회의실을 예약해 달라고" },
      { text: "택배를 보내 달라고" },
      { text: "근무표를 바꿔 달라고" }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[37~40] 듣고 물음에 답하십시오.",
    num: "40. 여자는 주말에 무엇을 할 예정입니까?",
    detail: "",
    image: "",
    audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt11-40.mp3",
    options: [
      { text: "친구의 이사를 도와줄 예정입니다." },
      { text: "회사에 출근할 예정입니다." },
      { text: "병원에서 진료를 받을 예정입니다." },
      { text: "가족과 여행을 갈 예정입니다." }
    ],
    correct: 0,
    points: 2.5
  }

];