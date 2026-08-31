const quizMetadata = [
  {
    text:"[1~4] 다음 그림을 보고 맞는 문장을 고르십시오.",
    num:"1.",
    detail:"",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-01.webp",
    options:[
      {text:"소화기의 상태를 점검하고 있습니다."},
      {text:"소화기를 사용해서 불을 끄고 있습니다."},
      {text:"소화기를 창고 밖으로 옮기고 있습니다."},
      {text:"소화기를 새 제품으로 교체하고 있습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[1~4] 다음 그림을 보고 맞는 문장을 고르십시오.",
    num:"2.",
    detail:"",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-02.webp",
    options:[
      {text:"재활용품을 종류별로 분류하고 있습니다."},
      {text:"쓰레기를 한꺼번에 버리고 있습니다."},
      {text:"물건을 포장해서 배송하고 있습니다."},
      {text:"창고에서 제품의 수량을 세고 있습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[1~4] 다음 그림을 보고 맞는 문장을 고르십시오.",
    num:"3.",
    detail:"",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-03.webp",
    options:[
      {text:"식판을 들고 음식을 배식받고 있습니다."},
      {text:"식당에서 음식을 주문하고 있습니다."},
      {text:"주방에서 음식을 조리하고 있습니다."},
      {text:"식사 후 식기를 설거지하고 있습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[1~4] 다음 그림을 보고 맞는 문장을 고르십시오.",
    num:"4.",
    detail:"",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-04.webp",
    options:[
      {text:"기계 사용 설명서를 확인하고 있습니다."},
      {text:"고장 난 기계를 폐기하고 있습니다."},
      {text:"기계를 다른 장소로 운반하고 있습니다."},
      {text:"기계의 전원을 끄고 청소하고 있습니다."}
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
      {text:"작업을 시작하기 전에 기계의 상태를 확인<u>하도록 하십시오</u>."},
      {text:"날씨가 추워<u>니까서</u> 따뜻한 옷을 입었습니다."},
      {text:"한국에서 일한<u> 지가</u> 벌써 3년이 되었습니다."},
      {text:"바쁘<u>더라도도</u> 약속을 지켜야 합니다."}
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
      {text:"제품의 수량을 확인한<u> 다음에</u> 거래처에 보내십시오."},
      {text:"시간이 없<u>으니까서</u> 먼저 출발합시다."},
      {text:"이 서류는 작성하<u>는 데도</u> 제출해야 합니다."},
      {text:"비가 많이 오<u>는 대신에</u> 우산을 가지고 왔습니다."}
    ],
    correct:0,
    points:2.5
  },


  {
    text:"[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num:"7. 이 안내문을 보고 알 수 있는 것은 무엇입니까?",
    detail:"",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-07.webp",
    options:[
      {text:"도서관에서는 음식물을 먹을 수 없습니다."},
      {text:"도서관은 밤늦게까지 항상 운영합니다."},
      {text:"모든 책은 한 번에 한 권만 빌릴 수 있습니다."},
      {text:"회원증이 없어도 책을 자유롭게 빌릴 수 있습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num:"8. 이 안내문에 따르면 무엇을 해야 합니까?",
    detail:"",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-08.webp",
    options:[
      {text:"수리를 원하는 세대는 미리 신청해야 합니다."},
      {text:"모든 세대가 반드시 수리를 받아야 합니다."},
      {text:"수리비는 현장에서 현금으로만 내야 합니다."},
      {text:"신청한 사람은 당일에 반드시 집을 비워야 합니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num:"9. 이 광고의 내용과 같은 것은 무엇입니까?",
    detail:"",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-09.webp",
    options:[
      {text:"휴대전화로 예매하면 할인받을 수 있습니다."},
      {text:"현장에서만 표를 구입할 수 있습니다."},
      {text:"모든 좌석의 가격이 서로 다릅니다."},
      {text:"예매한 표는 다른 사람에게 양도할 수 없습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num:"10. 이 서류는 어떤 목적으로 사용합니까?",
    detail:"",
    image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-10.webp",
    options:[
      {text:"물품을 전달받은 사실을 확인하기 위해"},
      {text:"근무 시간을 기록하기 위해"},
      {text:"은행 계좌를 개설하기 위해"},
      {text:"휴가 기간을 신청하기 위해"}
    ],
    correct:0,
    points:2.5
  },


  {
    text:"[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"11.",
    detail:"작업 중 이상한 소리가 나면 즉시 기계를 멈추고 관리자에게 ______.",
    image:"",
    options:[
      {text:"알려야 합니다"},
      {text:"알리고 있습니다"},
      {text:"알린 적이 없습니다"},
      {text:"알 수 있습니다"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"12.",
    detail:"제품의 유통기한이 얼마 남지 ______ 먼저 출고하는 것이 좋습니다.",
    image:"",
    options:[
      {text:"않았으므로"},
      {text:"않는 대신"},
      {text:"않기까지"},
      {text:"않은 채로만"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"13.",
    detail:"한국에서는 비가 많이 오는 날 우산을 빌릴 ______ 마련해 놓은 곳도 있습니다.",
    image:"",
    options:[
      {text:"수 있도록"},
      {text:"수 없도록"},
      {text:"수밖에"},
      {text:"수만큼"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"14.",
    detail:"수입한 물건은 세관의 검사를 ______ 국내로 들어올 수 있습니다.",
    image:"",
    options:[
      {text:"거친 후에야"},
      {text:"거치는 대신에"},
      {text:"거치지 않아서"},
      {text:"거칠수록"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"15.",
    detail:"회의에 늦지 않으려면 교통 상황을 ______ 출발하는 것이 좋습니다.",
    image:"",
    options:[
      {text:"고려해서"},
      {text:"고려하더라도"},
      {text:"고려한 적이"},
      {text:"고려하지 못하고"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"16.",
    detail:"고객의 요청이 무엇인지 정확히 ______ 적절한 방법을 찾아야 합니다.",
    image:"",
    options:[
      {text:"파악한 후"},
      {text:"파악하는 대신"},
      {text:"파악할수록"},
      {text:"파악하지 않으면도"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"17. 다음 설명에 알맞은 어휘를 고르십시오.",
    num:"17.",
    detail:"상품을 판매하기 전에 상품의 상태나 성능에 문제가 없는지 살펴보는 일입니다.",
    image:"",
    options:[
      {text:"검수"},
      {text:"보관"},
      {text:"예약"},
      {text:"환전"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"18. 다음 설명에 알맞은 어휘를 고르십시오.",
    num:"18.",
    detail:"필요한 물건을 미리 주문하여 일정한 장소로 보내 달라고 하는 일입니다.",
    image:"",
    options:[
      {text:"배송"},
      {text:"주문"},
      {text:"교환"},
      {text:"수리"}
    ],
    correct:1,
    points:2.5
  },

  {
    text:"[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num:"19.",
    detail:"한국에서는 비 오는 날 우산을 식당이나 가게 입구에 마련된 우산꽂이에 놓는 경우가 많습니다. 비슷한 우산이 많기 때문에 자신의 우산을 쉽게 찾을 수 있도록 손잡이에 표시를 해 두기도 합니다.",
    image:"",
    options:[
      {text:"비슷한 우산이 많으면 자신의 우산을 찾기 어려울 수 있습니다."},
      {text:"한국에서는 우산을 반드시 밖에 놓아야 합니다."},
      {text:"우산꽂이는 주로 공장에서 사용합니다."},
      {text:"사람들은 우산을 구별하기 위해 이름을 쓰지 않습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num:"20.",
    detail:"한국의 편의점에서는 간단한 식사뿐만 아니라 택배 접수, 공과금 납부, 교통카드 충전 등 다양한 서비스를 이용할 수 있습니다. 매장마다 이용할 수 있는 서비스에는 차이가 있을 수 있으므로 필요한 서비스가 있는지 미리 확인하는 것이 좋습니다.",
    image:"",
    options:[
      {text:"편의점에서는 물건을 사는 것 외에도 여러 서비스를 이용할 수 있습니다."},
      {text:"모든 편의점에서 제공하는 서비스는 완전히 같습니다."},
      {text:"편의점에서는 택배를 접수할 수 없습니다."},
      {text:"교통카드는 편의점에서 충전할 수 없습니다."}
    ],
    correct:0,
    points:2.5
  },


  {
    text:"[21~22] 들은 것을 고르십시오.",
    num:"21.",
    image:"",
    audio:"audio/set10/q21.mp3",
    options:[
      {text:"검수"},
      {text:"검사"},
      {text:"검진"},
      {text:"검색"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[21~22] 들은 것을 고르십시오.",
    num:"22.",
    image:"",
    audio:"audio/set10/q22.mp3",
    options:[
      {text:"납품하다"},
      {text:"납부하다"},
      {text:"납입하다"},
      {text:"나누다"}
    ],
    correct:0,
    points:2.5
  },


  {
    text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
    num:"23.",
    image:"",
    audio:"audio/set10/q23.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-23-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-23-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-23-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-23-4.webp"}
    ],
    correct:3,
    points:2.5
  },

  {
    text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
    num:"24.",
    image:"",
    audio:"audio/set10/q24.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-24-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-24-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-24-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-24-4.webp"}
    ],
    correct:1,
    points:2.5
  },

  {
    text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
    num:"25.",
    image:"",
    audio:"audio/set10/q25.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-25-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-25-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-25-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-25-4.webp"}
    ],
    correct:2,
    points:2.5
  },

  {
    text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
    num:"26.",
    image:"",
    audio:"audio/set10/q26.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-26-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-26-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-26-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-26-4.webp"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
    num:"27.",
    image:"",
    audio:"audio/set10/q27.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-27-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-27-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-27-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-27-4.webp"}
    ],
    correct:2,
    points:2.5
  },

  {
    text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
    num:"28.",
    image:"",
    audio:"audio/set10/q28.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-28-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-28-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-28-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-28-4.webp"}
    ],
    correct:1,
    points:2.5
  },


  {
    text:"29~32 듣고 알맞은 대답을 고르십시오.",
    num:"29.",
    image:"",
    audio:"audio/set10/q29.mp3",
    options:[
      {text:"네, 사용 방법을 다시 설명해 드리겠습니다."},
      {text:"네, 어제 기계를 청소했습니다."},
      {text:"오전 8시에 출근했습니다."},
      {text:"기계는 창고 옆에 있습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"29~32 듣고 알맞은 대답을 고르십시오.",
    num:"30.",
    image:"",
    audio:"audio/set10/q30.mp3",
    options:[
      {text:"네, 물건을 받은 후 수량을 확인하겠습니다."},
      {text:"네, 지난주에 물건을 주문했습니다."},
      {text:"배송지는 회사 뒤쪽입니다."},
      {text:"오후에는 작업이 없습니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"29~32 듣고 알맞은 대답을 고르십시오.",
    num:"31.",
    image:"",
    audio:"audio/set10/q31.mp3",
    options:[
      {text:"네, 행사 전에 미리 신청하겠습니다."},
      {text:"네, 어제 행사에 참석했습니다."},
      {text:"행사는 지하 1층에서 합니다."},
      {text:"저는 한국 음식을 좋아합니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"29~32 듣고 알맞은 대답을 고르십시오.",
    num:"32.",
    image:"",
    audio:"audio/set10/q32.mp3",
    options:[
      {text:"네, 담당 부서에 문의해 보겠습니다."},
      {text:"네, 어제 서류를 출력했습니다."},
      {text:"사무실은 3층에 있습니다."},
      {text:"다음 달에 휴가를 갈 예정입니다."}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"[33] 이어지는 말을 고르십시오.",
    num:"33.",
    image:"",
    audio:"audio/set10/q33.mp3",
    options:[
      {text:"그럼 먼저 담당 부서에 문의해 보는 것이 좋겠습니다."},
      {text:"네, 어제 저녁을 먹고 집에 갔습니다."},
      {text:"저는 주말에 운동을 했습니다."},
      {text:"오늘 아침에는 날씨가 맑았습니다."}
    ],
    correct:0,
    points:2.5
  },


  {
    text:"34~36 듣고 알맞은 그림을 고르십시오.",
    num:"34.",
    image:"",
    audio:"audio/set10/q34.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-34-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-34-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-34-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-34-4.webp"}
    ],
    correct:1,
    points:2.5
  },

  {
    text:"34~36 듣고 알맞은 그림을 고르십시오.",
    num:"35.",
    image:"",
    audio:"audio/set10/q35.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-35-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-35-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-35-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-35-4.webp"}
    ],
    correct:3,
    points:2.5
  },

  {
    text:"34~36 듣고 알맞은 그림을 고르십시오.",
    num:"36.",
    image:"",
    audio:"audio/set10/q36.mp3",
    options:[
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-36-1.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-36-2.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-36-3.webp"},
      {image:"https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-36-4.webp"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"37~40 짧은 대화를 듣고 알맞은 답을 고르십시오.",
    num:"37. 남자는 무엇을 확인하려고 합니까?",
    image:"",
    audio:"audio/set10/q37.mp3",
    options:[
      {text:"휴가 날짜"},
      {text:"제품 가격"},
      {text:"버스 시간"},
      {text:"병원 위치"}
    ],
    correct:1,
    points:2.5
  },

  {
    text:"37~40 짧은 대화를 듣고 알맞은 답을 고르십시오.",
    num:"38. 여자는 무엇을 가져오려고 합니까?",
    image:"",
    audio:"audio/set10/q38.mp3",
    options:[
      {text:"우산"},
      {text:"신분증"},
      {text:"작업복"},
      {text:"도시락"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"37~40 짧은 대화를 듣고 알맞은 답을 고르십시오.",
    num:"39. 남자는 왜 약속 시간을 바꾸려고 합니까?",
    image:"",
    audio:"audio/set10/q39.mp3",
    options:[
      {text:"회사에 일이 생겨서"},
      {text:"친구를 만나서"},
      {text:"병원에 가서"},
      {text:"영화를 봐야 해서"}
    ],
    correct:0,
    points:2.5
  },

  {
    text:"37~40 짧은 대화를 듣고 알맞은 답을 고르십시오.",
    num:"40. 여자는 무엇을 하기로 했습니까?",
    image:"",
    audio:"audio/set10/q40.mp3",
    options:[
      {text:"회의 자료를 준비하기로 했습니다."},
      {text:"은행에 가기로 했습니다."},
      {text:"영화를 예매하기로 했습니다."},
      {text:"친구에게 선물을 보내기로 했습니다."}
    ],
    correct:0,
    points:2.5
  }

];