const quizMetadata = [
  {
    text:"[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    num:"1.",
    detail:"",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-01.webp",
    options:[
      {text:"안전모를 착용하고 있습니다."},
      {text:"안전모를 벗고 있습니다."},
      {text:"작업복을 세탁하고 있습니다."},
      {text:"보호 장갑을 정리하고 있습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    num:"2.",
    detail:"",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-02.webp",
    options:[
      {text:"지게차로 물건을 운반하고 있습니다."},
      {text:"제품을 손으로 포장하고 있습니다."},
      {text:"기계를 청소하고 있습니다."},
      {text:"창고 바닥을 닦고 있습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    num:"3.",
    detail:"",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-03.webp",
    options:[
      {text:"전기 작업을 하고 있습니다."},
      {text:"물을 마시고 있습니다."},
      {text:"출입문을 열고 있습니다."},
      {text:"휴게실에서 쉬고 있습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    num:"4.",
    detail:"",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-04.webp",
    options:[
      {text:"제품을 상자에 포장하고 있습니다."},
      {text:"제품의 무게를 재고 있습니다."},
      {text:"기계를 수리하고 있습니다."},
      {text:"원료를 창고에 보관하고 있습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
    num:"5.",
    detail:"",
    image:"",
    options:[
      {text:"일을 시작하기 <u>전에</u> 안전교육을 받았습니다."},
      {text:"어제 비가 많이 오<u>어서서</u> 집에 일찍 갔습니다."},
      {text:"기계가 고장 나<u>으면</u> 관리자에게 알려 주세요."},
      {text:"동료에게 작업 방법을 물어보<u>은</u> 후에 시작했습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
    num:"6.",
    detail:"",
    image:"",
    options:[
      {text:"시간이 없으<u>니까</u> 택시를 타고 가겠습니다."},
      {text:"작업이 끝나<u>어서</u> 주변을 정리했습니다."},
      {text:"한국에 온 지 일 년<u>를</u> 되었습니다."},
      {text:"비가 오<u>는데서</u> 우산을 썼습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num:"7. 작업자는 작업을 시작하기 전에 무엇을 확인해야 합니까?",
    detail:"작업을 시작하기 전에는 작업장 주변에 위험한 물건이 없는지 확인해야 합니다. 또한 기계의 상태와 안전장비가 제대로 준비되어 있는지도 점검해야 합니다.",
    image:"",
    options:[
      {text:"작업장의 위험 요소와 기계 상태"},
      {text:"동료의 퇴근 시간"},
      {text:"식당의 메뉴"},
      {text:"버스 운행 시간"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num:"8. 안전사고를 예방하기 위해 무엇을 해야 합니까?",
    detail:"작업 중에는 정해진 안전수칙을 지켜야 합니다. 특히 기계가 작동하는 동안에는 손이나 도구를 기계 안에 넣지 말고, 이상한 소리가 나면 즉시 작업을 멈춰야 합니다.",
    image:"",
    options:[
      {text:"기계가 작동할 때 손을 넣습니다."},
      {text:"이상한 소리가 나도 계속 작업합니다."},
      {text:"정해진 안전수칙을 지킵니다."},
      {text:"작업 속도를 최대한 높입니다."}
    ],
    correct:2,
    points:2.5
  },

  {
    text:"[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num:"9. 이 글의 내용과 같은 것은 무엇입니까?",
    detail:"회사에서는 직원들의 편의를 위해 이번 달부터 점심시간을 12시부터 1시까지로 변경했습니다. 직원들은 정해진 시간에 식사를 하고 1시까지 작업장으로 돌아와야 합니다.",
    image:"",
    options:[
      {text:"점심시간은 오전 11시부터입니다."},
      {text:"점심시간은 한 시간입니다."},
      {text:"직원들은 2시까지 쉬어도 됩니다."},
      {text:"점심시간에는 작업장을 떠날 수 없습니다."}
    ],
    correct:1,
    points:2.5
  },

  {
    text:"[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num:"10. 직원들은 언제 작업장으로 돌아와야 합니까?",
    detail:"회사에서는 직원들의 편의를 위해 이번 달부터 점심시간을 12시부터 1시까지로 변경했습니다. 직원들은 정해진 시간에 식사를 하고 1시까지 작업장으로 돌아와야 합니다.",
    image:"",
    options:[
      {text:"오전 11시"},
      {text:"오후 12시"},
      {text:"오후 1시"},
      {text:"오후 2시"}
    ],
    correct:2,
    points:2.5
  },

  {
    text:"[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"11.",
    detail:"작업 중 기계에서 이상한 소리가 나면 즉시 작업을 ______.",
    image:"",
    options:[
      {text:"중단해야 합니다"},
      {text:"예약해야 합니다"},
      {text:"출발해야 합니다"},
      {text:"계산해야 합니다"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"12.",
    detail:"새로운 작업을 시작하기 전에 작업 방법을 정확하게 ______.",
    image:"",
    options:[
      {text:"확인해야 합니다"},
      {text:"판매해야 합니다"},
      {text:"환불해야 합니다"},
      {text:"이동해야 합니다"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"13.",
    detail:"회사에서 필요한 물건을 주문하기 전에 재고를 먼저 ______.",
    image:"",
    options:[
      {text:"확인합니다"},
      {text:"입원합니다"},
      {text:"환전합니다"},
      {text:"출국합니다"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"14.",
    detail:"고객이 상품을 반품하려면 영수증을 ______ 해야 합니다.",
    image:"",
    options:[
      {text:"제시해야"},
      {text:"운반해야"},
      {text:"조립해야"},
      {text:"출근해야"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"15.",
    detail:"작업이 끝난 후 사용한 도구는 정해진 장소에 ______.",
    image:"",
    options:[
      {text:"보관해야 합니다"},
      {text:"입금해야 합니다"},
      {text:"신청해야 합니다"},
      {text:"예약해야 합니다"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"16.",
    detail:"외국인 근로자는 체류 기간이 끝나기 전에 필요한 서류를 준비하여 연장 신청을 ______.",
    image:"",
    options:[
      {text:"해야 합니다"},
      {text:"세탁해야 합니다"},
      {text:"포장해야 합니다"},
      {text:"운반해야 합니다"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[17~18] 다음 글을 읽고 물음에 답하십시오.",
    num:"17. 이 안내문에 따르면 신청할 때 무엇을 준비해야 합니까?",
    detail:"외국인 근로자 지원센터에서는 근로자들의 각종 상담과 행정 업무를 지원하고 있습니다. 상담을 신청할 때는 여권 또는 외국인등록증과 본인 명의의 연락처를 준비해야 합니다.",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-17-18.webp",
    options:[
      {text:"여권 또는 외국인등록증"},
      {text:"운전면허증과 자동차등록증"},
      {text:"건강진단서와 작업복"},
      {text:"은행 통장과 신용카드"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[17~18] 다음 글을 읽고 물음에 답하십시오.",
    num:"18. 이 안내문의 내용과 같은 것은 무엇입니까?",
    detail:"외국인 근로자 지원센터에서는 근로자들의 각종 상담과 행정 업무를 지원하고 있습니다. 상담을 신청할 때는 여권 또는 외국인등록증과 본인 명의의 연락처를 준비해야 합니다.",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-17-18.webp",
    options:[
      {text:"상담을 신청할 때 신분증을 준비해야 합니다."},
      {text:"상담을 받으려면 자동차가 있어야 합니다."},
      {text:"센터에서는 근로 상담을 하지 않습니다."},
      {text:"신청할 때 회사의 허가서가 반드시 필요합니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num:"19.",
    detail:"민수 씨는 회사 근처에 있는 은행에서 통장을 만들었습니다. 처음에는 필요한 서류를 잘 몰랐지만 은행 직원에게 문의한 후 신분증과 필요한 서류를 준비해서 다시 방문했습니다. 그래서 통장을 문제없이 만들 수 있었습니다.",
    image:"",
    options:[
      {text:"민수 씨는 은행에 문의한 후 필요한 서류를 준비했습니다."},
      {text:"민수 씨는 회사에서 통장을 만들었습니다."},
      {text:"민수 씨는 필요한 서류가 전혀 없었습니다."},
      {text:"민수 씨는 통장을 만들지 못했습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num:"20.",
    detail:"이번 달에는 공장 생산량이 많아 평소보다 주문이 많이 들어왔습니다. 회사에서는 납품 날짜를 맞추기 위해 일부 직원의 근무 시간을 조정했습니다. 직원들은 변경된 근무표를 확인하고 정해진 시간에 출근해야 합니다.",
    image:"",
    options:[
      {text:"이번 달에는 주문량이 평소보다 많았습니다."},
      {text:"직원들은 근무표를 확인할 필요가 없습니다."},
      {text:"회사는 납품 날짜를 변경했습니다."},
      {text:"모든 직원의 근무 시간이 그대로입니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[21~22] 들은 것을 고르십시오.",
    num:"21.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-21.mp3",
    options:[
      {text:"환율"},
      {text:"환불"},
      {text:"환전"},
      {text:"환급"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[21~22] 들은 것을 고르십시오.",
    num:"22.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-22.mp3",
    options:[
      {text:"입금"},
      {text:"입원"},
      {text:"입장"},
      {text:"입학"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
    num:"23.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-23.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-23-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-23-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-23-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-23-4.webp"}
    ],
    correct:1,
    points:2.5
  },

  {
    text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
    num:"24.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-24.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-24-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-24-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-24-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-24-4.webp"}
    ],
    correct:3,
    points:2.5
  },

  {
    text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
    num:"25.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-25.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-25-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-25-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-25-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-25-4.webp"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
    num:"26.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-26.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-26-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-26-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-26-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-26-4.webp"}
    ],
    correct:2,
    points:2.5
  },

  {
    text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
    num:"27.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-27.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-27-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-27-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-27-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-27-4.webp"}
    ],
    correct:3,
    points:2.5
  },

  {
    text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
    num:"28.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-28.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-28-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-28-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-28-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-28-4.webp"}
    ],
    correct:1,
    points:2.5
  },


  {
    text:"29~32 듣고 알맞은 대답을 고르십시오.",
    num:"29.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-29.mp3",
    options:[
      {text:"네, 확인해 보겠습니다."},
      {text:"아니요, 어제 출근했습니다."},
      {text:"오후 두 시에 먹었습니다."},
      {text:"회사 근처에 있습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"29~32 듣고 알맞은 대답을 고르십시오.",
    num:"30.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-30.mp3",
    options:[
      {text:"네, 다음 주 월요일입니다."},
      {text:"네, 지금 바로 가져오겠습니다."},
      {text:"아니요, 사무실에서 먹었습니다."},
      {text:"세 명이 함께 갔습니다."}
    ],
    correct:1,
    points:2.5
  },

  {
    text:"29~32 듣고 알맞은 대답을 고르십시오.",
    num:"31.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-31.mp3",
    options:[
      {text:"은행에서 환전했습니다."},
      {text:"네, 아직 신청하지 않았습니다."},
      {text:"오전 아홉 시에 시작합니다."},
      {text:"동료와 같이 점심을 먹었습니다."}
    ],
    correct:1,
    points:2.5
  },

  {
    text:"29~32 듣고 알맞은 대답을 고르십시오.",
    num:"32.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-32.mp3",
    options:[
      {text:"기계 옆에 놓았습니다."},
      {text:"지난주에 주문했습니다."},
      {text:"네, 작업을 끝내고 정리하겠습니다."},
      {text:"오후에 비가 올 것 같습니다."}
    ],
    correct:2,
    points:2.5
  },

  {
    text:"[33] 이어지는 말을 고르십시오.",
    num:"33.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-33.mp3",
    options:[
      {text:"네, 조심해서 다녀오세요."},
      {text:"아니요, 어제는 쉬었습니다."},
      {text:"오전 열 시에 시작합니다."},
      {text:"회사에서 두 명이 왔습니다."}
    ],
    correct:0,
    points:2.5
  },


  {
    text:"34~36 듣고 알맞은 그림을 고르십시오.",
    num:"34.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-34.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-34-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-34-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-34-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-34-4.webp"}
    ],
    correct:2,
    points:2.5
  },

  {
    text:"34~36 듣고 알맞은 그림을 고르십시오.",
    num:"35.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-35.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-35-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-35-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-35-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-35-4.webp"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"34~36 듣고 알맞은 그림을 고르십시오.",
    num:"36.",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-36.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-36-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-36-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-36-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-36-4.webp"}
    ],
    correct:3,
    points:2.5
  },

  {
    text:"37~40 긴 대화를 듣고 답하십시오.",
    num:"37. 남자는 왜 관리자에게 연락하려고 합니까?",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-37.mp3",
    options:[
      {text:"기계가 고장 났기 때문에"},
      {text:"점심시간이 끝났기 때문에"},
      {text:"은행에 가야 하기 때문에"},
      {text:"작업복을 사야 하기 때문에"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"37~40 긴 대화를 듣고 답하십시오.",
    num:"38. 여자는 무엇을 준비해야 합니까?",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-38.mp3",
    options:[
      {text:"여권과 사진"},
      {text:"안전모와 안전화"},
      {text:"신분증과 필요한 서류"},
      {text:"통장과 신용카드"}
    ],
    correct:2,
    points:2.5
  },

  {
    text:"37~40 긴 대화를 듣고 답하십시오.",
    num:"39. 두 사람은 언제 만나기로 했습니까?",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-39.mp3",
    options:[
      {text:"오늘 오전"},
      {text:"오늘 오후"},
      {text:"내일 오전"},
      {text:"내일 오후"}
    ],
    correct:3,
    points:2.5
  },

  {
    text:"37~40 긴 대화를 듣고 답하십시오.",
    num:"40. 남자는 다음에 무엇을 하려고 합니까?",
    detail:"",
    image:"",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-40.mp3",
    options:[
      {text:"은행에 가려고 합니다."},
      {text:"관리자에게 작업 방법을 확인하려고 합니다."},
      {text:"친구를 만나려고 합니다."},
      {text:"병원에 가려고 합니다."}
    ],
    correct:1,
    points:2.5
  }

];