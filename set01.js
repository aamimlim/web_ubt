const quizMetadata = [
  {
    text: "[1-2] 다음질문에답하십시오.",
    num: "1. 다음단어와관계있는것은무엇입니까? ",
    detail: "꽃, 불, 연기, 얼굴",
    image: "",
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
    text: "[1-2] 다음질문에답하십시오.",
    num: "2. 다음 단어와 비슷한 말은 무엇입니까? ",
    detail: "치료비",
    image: "",
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
    text: "[3-6] 빈칸에들어갈가장알맞은것을고르십시오.",
    num: "3.",
    detail: "길에서는______무단횡단을하면안됩니다. 갑자기차가와서사 고가날수있습니다.",
    image: "신선하니까",
    options: [
      { text: "위험하니까" },
      { text: "신선하니까" },
      { text: "우울하니까" },
      { text: "지루하니까" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[3-6] 빈칸에들어갈가장알맞은것을고르십시오.",
    num: "4.",
    detail: "돌잔치에초대받아서아기를위한 ____을샀어요.",
    image: "",
    options: [
      { text: "선물" },
      { text: "축의금" },
      { text: "현금" },
      { text: "백일" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[3-6] 빈칸에들어갈가장알맞은것을고르십시오.",
    num: "5.",
    detail: "어재 아침에 계단에서 넘어졌습니다. 그 때는 많이________않은 것 같았습니다. 그런데 점점 더 아팠습니다",
    image: "",
    options: [
      { text: "낫지" },
      { text: "건강하지" },
      { text: "다치지" },
      { text: "안전하지" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[3-6] 빈칸에들어갈가장알맞은것을고르십시오.",
    num: "6.",
    detail: "_______________퇴근 시간입니다. 정말 빠른 것 같습니다. 요즘 일이 많아서 시간이 더 빨리 가는 것 같습니다.",
    image: "",
    options: [
      { text: "미리" },
      { text: "벌써" },
      { text: "아직" },
      { text: "늦게" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[7-10] 다음질문에답하십시오.",
    num: "7.",
    detail: "이표지는무슨뜻입니까? ",
    image: "",
    options: [
      { text: "이곳에서수저를살수있습니다." },
      { text: "이곳에서운동을할수있습니다." },
      { text: "이곳에서고장이날수있습니다" },
      { text: "이곳에서기름을넣을수있습니다." }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[7-10] 다음질문에답하십시오.",
    num: "8.",
    detail: "여기에서 파는 것은 무엇입니까? ",
    image: "",
    options: [
      { text: "배달입니다" },
      { text: "분점입니다" },
      { text: "열한입니다" },
      { text: "치킨입니다" }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[7-10] 다음질문에답하십시오.",
    num: "9.",
    detail: "시장에서 산 물건에 다음과 같은 표지가 붙어 있었습니다. 이표지가 나타내는 뜻은 무엇입니까? ",
    image: "",
    options: [
      { text: "이것은 깨지기 쉬운 물건입니다." },
      { text: "이것은 외국에서 수입한 물건입니다." },
      { text: "이것은 검사에서 합격한 품질이 좋은 물건입니다." },
      { text: "이것은 백화점에서만 살 수 있는 비싼 물건입니다." }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[7-10] 다음질문에답하십시오.",
    num: "10.",
    detail: "졸업후첫취업까지걸리는기간에대한설명으로맞는것은무엇입니까? ",
    image: "",
    options: [
      { text: "졸업후3개월안에취업을하는비율이절반이넘습니다." },
      { text: "졸업후첫취업까지2년이상걸리는사람의비율이가장적습니다." },
      { text: "졸업후1년안에취업하는사람이90%가넘습니다." },
      { text: "졸업후취업까지3개월에서6개월미만인사람이두번째로적습니다." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[11-12] 빈칸에들어갈가장알맞은것을고르십시오.",
    num: "11.",
    detail: "여기는금연이니까_____에나가서피우세요.",
    image: "",
    options: [
      { text: "밖" },
      { text: "구역" },
      { text: "안" },
      { text: "이곳" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[11-12] 빈칸에들어갈가장알맞은것을고르십시오.",
    num: "12.",
    detail: "저는 이번 달에 회사와 계약 을 _______ 사장님께 말씁드렸습니다. ",
    image: "",
    options: [
      { text: "연장하고 싶어서" },
      { text: "근무하기 때문에" },
      { text: "연장하기 때문에" },
      { text: "근무하고 싶어서" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[13-14] 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
    num: "13.",
    detail: "회전 기계를 사용할 때는 장갑을 착용한 채로 만져서는 안 됩니다. 장갑으로 인해 민첩성이 떨어질 뿐 아니라 장갑이 회전체에 감겨 부상을 입을 수 있기 때문입니다. 따라서 연마 작업과 같이 회전하는 기계를 다룰 때에는 맨손으로 작업해야 합니다.",
    image: "",
    options: [
      { text: "회전 기계 사용 시 주의점" },
      { text: "연마 기계의 작동법" },
      { text: "회전 기계의 성능" },
      { text: "회전 기계의 역할" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[13-14] 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
    num: "14.",
    detail: "고객님 알고 계셨습니까? 은행을 방문하지 않고 집에서 송금하는 것이 가능합니다. 인터넷 뱅킹 등을 이용하면 쉽고 빠르게 업무를 볼 수 있습니다.",
    image: "",
    options: [
      { text: "인터넷 뱅킹 서비스" },
      { text: "우편 업무" },
      { text: "방문 판매" },
      { text: "해외 여행 상품" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[15-16] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num: "15.",
    detail: "주택은 크게 단독 주택과 공동 주택이 있습니다. 단독 주택은 한 세대가 단독으로 사용하는 구조로 된 주택입니다. 공동 주택은 각 세대가 하나의 건축물 안에서 생활을 할 수 있는 구조로 된 주택입니다. 대표적인 공동 주택이 아파트인데 아파트는 한 건물 안에 여러 가구가 독립적으로 살 수 있도록 지은 빌딩형 공동 주택입니다.",
    image: "",
    options: [
      { text: "아파트는 단독 주택입니다." },
      { text: "단독 주택은 빌딩형입니다." },
      { text: "단독 주택은 두 세대가 사용합니다." },
      { text: "공동 주택은 여러 가구가 사용합니다." }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[15-16] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num: "16.",
    detail: "근로자 센터의 무료 진료소에서는 통역을 도와줄 봉사자를 모집합니다. 근로자 센터의 무료 진료소에서 매주 일요일 오전 10시부터 두 시간 동안 의 사와 환자의 말을 통역해 주면 됩니다. 통역 봉사는 누구나 신청할 수 있고 모집 인원은 모두 3명입니다. 더 궁금한 점이 있으시면 센터 사무실로 전화 주십시오.",
    image: "",
    options: [
      { text: "사무실로 전화하면 무료 진료를 받을 수 있습니다." },
      { text: "의사와 환자의 언어 소통을 돕는 사람이 필요합니다." },
      { text: "모집 인원은 제한이 없습니다." },
      { text: "무료 통역 봉사는 주말 오후에 합니다." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[17-18] 다음 설명에 알맞은 어휘를 고르십시오.",
    num: "17.",
    detail: "높은 건물을 지을 때 디디고 서도록 긴 나무 따위를 종횡으로 엮어 다리처럼 걸쳐 놓은 설치물",
    image: "",
    options: [
      { text: "계단" },
      { text: "안전대" },
      { text: "거푸집" },
      { text: "비계" }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[17-18] 다음 설명에 알맞은 어휘를 고르십시오.",
    num: "18.",
    detail: "근로자가 일한 대가를 시간당으로 계산하여 일한 시간 만큼 임금을 지급하는 방식입니다.",
    image: "",
    options: [
      { text: "연금" },
      { text: "세금" },
      { text: "시급" },
      { text: "월급" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[19-20] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    num: "19.",
    detail: "",
    image: "",
    options: [
      { text: "빗자루" },
      { text: "대걸래" },
      { text: "쓰레받기" },
      { text: "먼지떨이" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[19-20] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    num: "20.",
    detail: "",
    image: "",
    options: [
      { text: "이 사람은 지금 부소하고 있습니다" },
      { text: "이 사람은 개신하고 있습니다" },
      { text: "이 사람은 조치를 취하고 있습니다" },
      { text: "이 사람은 점검하고 있습니다" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[21-24] 들은 것을 고르십시오.",
    num: "21.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "오이" },
      { text: "우의" },
      { text: "오리" },
      { text: "우리" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[21-24] 들은 것을 고르십시오.",
    num: "22.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "재고" },
      { text: "줄고" },
      { text: "출고" },
      { text: "주고" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[21-24] 들은 것을 고르십시오.",
    num: "23.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { image: "" },
      { image: "" },
      { image: "" },
      { image: "" }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[21-24] 들은 것을 고르십시오.",
    num: "24.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { image: "" },
      { image: "" },
      { image: "" },
      { image: "" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
    num: "25. 이것은 무엇입니까? ",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "1" },
      { text: "2" },
      { text: "3" },
      { text: "4" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
    num: "26. 여기는 어디입니까? ",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "1" },
      { text: "2" },
      { text: "3" },
      { text: "4" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
    num: "27. 이 사람은 무엇을 하고 있습니까? ",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "1" },
      { text: "2" },
      { text: "3" },
      { text: "4" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
    num: "28. 몇월 몇칠 입니까? ",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "1" },
      { text: "2" },
      { text: "3" },
      { text: "4" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
    num: "29. 놀이터는 어디에 있습니까? ",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "1" },
      { text: "2" },
      { text: "3" },
      { text: "4" }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[30-33] 다음을 듣고 질문에 알맞은 대답을 고르십시오.",
    num: "30.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "서랍 안에 있어요." },
      { text: "회의실에 계세요." },
      { text: "5시에 회의하겠습니다." },
      { text: "한시간 밖에 안 남았어요." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[30-33] 다음을 듣고 질문에 알맞은 대답을 고르십시오.",
    num: "31.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "저는 회사원 입니다. " },
      { text: "저는 모니카 입니다. " },
      { text: "저는 불교 신자 입니다. " },
      { text: "저는 태국 사람 입니다." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[30-33] 다음을 듣고 질문에 알맞은 대답을 고르십시오.",
    num: "32.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "석유를 많이 수입해요." },
      { text: "저는 컴퓨터 게임을 많이 해요." },
      { text: "휴대폰하고 텔레비전이에요" },
      { text: "경제가 안 좋아진 것 같아요." }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[30-33] 다음을 듣고 질문에 알맞은 대답을 고르십시오.",
    num: "33.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "저녁이에요. " },
      { text: "회식이 있어요." },
      { text: "친구를 만났어요" },
      { text: "약속을 지켜야 해요." }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[34-35] 다음을 듣고 이어지는 말을 고르십시오.",
    num: "34.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "언제 보냈어요? " },
      { text: "어디로 보내실 거예요?" },
      { text: "어떻게 보냈어요? " },
      { text: "무엇을 보내실 거예요?" }
    ],
    correct: 1,
    points: 2.5
  },
  {
    text: "[34-35] 다음을 듣고 이어지는 말을 고르십시오.",
    num: "35.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "상처가 난 버섯은 다 버렸어요." },
      { text: "버섯 따는 것이 어려울 거예요." },
      { text: "비닐하우스에서 버섯을 담아요." },
      { text: "큰 것만 먼저 이 상자에 담아요." }
    ],
    correct: 3,
    points: 2.5
  },
  {
    text: "[36-37] 다음을 듣고 들은 내용과 관계 있는 그림을 고르십시오.",
    num: "36.",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[36-37] 다음을 듣고 들은 내용과 관계 있는 그림을 고르십시오.",
    num: "37",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[38-40] 다음 이야기를 듣고 질문에 알맞은 대답을 고르십시오.",
    num: "38. 남자는 무엇을 하고 있습니까? ",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "사과" },
      { text: "안부" },
      { text: "부탁" },
      { text: "화해" }
    ],
    correct: 2,
    points: 2.5
  },
  {
    text: "[38-40] 다음 이야기를 듣고 질문에 알맞은 대답을 고르십시오.",
    num: "39. 여자는 지금 어디에 있습니까? ",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "버스 안" },
      { text: "지하철 안" },
      { text: "백화점 앞" },
      { text: "지하철역 앞" }
    ],
    correct: 0,
    points: 2.5
  },
  {
    text: "[38-40] 다음 이야기를 듣고 질문에 알맞은 대답을 고르십시오.",
    num: "40. 여자는 왜 가게에 전화하려고 합니까? ",
    detail: "",
    image: "",
    audio: "",
    options: [
      { text: "구입한 카메라가 원하는 것이 아니어서." },
      { text: "새로 구입한 카메라가 성능이 안 좋아서." },
      { text: "상자 안에 사용 설명서가 들어 있지 않아서." },
      { text: "카메라 사용법을 읽었는데 도 이해할 수 없어서." }
    ],
    correct: 3,
    points: 2.5
  }
];