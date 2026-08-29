const quizMetadata = [

  {
    text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    num: "1.",
    detail: "",
    image: "set07_fire_extinguisher_check.png",
    options: [
      { text: "소화기를 점검하고 있습니다." },
      { text: "창문을 닦고 있습니다." },
      { text: "제품을 포장하고 있습니다." },
      { text: "전등을 교체하고 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    num: "2.",
    detail: "",
    image: "set07_sorting_materials.png",
    options: [
      { text: "자재를 종류별로 분류하고 있습니다." },
      { text: "기계를 운반하고 있습니다." },
      { text: "작업복을 세탁하고 있습니다." },
      { text: "제품을 판매하고 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    num: "3.",
    detail: "",
    image: "set07_safety_helmet.png",
    options: [
      { text: "안전모를 제대로 착용하고 있습니다." },
      { text: "안전화를 벗고 있습니다." },
      { text: "보호장갑을 세탁하고 있습니다." },
      { text: "작업복을 갈아입고 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    num: "4.",
    detail: "",
    image: "set07_measuring_product.png",
    options: [
      { text: "제품의 크기를 측정하고 있습니다." },
      { text: "제품을 창고로 옮기고 있습니다." },
      { text: "제품의 포장을 뜯고 있습니다." },
      { text: "제품을 트럭에 싣고 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
    num: "5.",
    detail: "",
    image: "",
    options: [
      { text: "작업을 시작하기 전에 장비를 확인<u>해야 합니다</u>." },
      { text: "시간이 없<u>어서도</u> 안전수칙을 지켜야 합니다." },
      { text: "동료에게 작업 방법을 물어보<u>았어요</u>." },
      { text: "기계가 고장 나<u>면도</u> 계속 사용했습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
    num: "6.",
    detail: "",
    image: "",
    options: [
      { text: "오늘은 어제<u>보다</u> 작업량이 많습니다." },
      { text: "작업이 끝난 후에 관리자에게 보고하<u>는</u> 했습니다." },
      { text: "비가 많이 와<u>니까도</u> 작업을 계속했습니다." },
      { text: "안전교육을 받<u>으면서도</u> 작업을 시작했습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "7.",
    detail: "작업장에서는 화재 예방을 위해 전기 코드를 함부로 만지거나 여러 개의 전기제품을 한 콘센트에 연결해서는 안 됩니다. 이상이 발견되면 즉시 관리자에게 알려야 합니다.",
    image: "set07_electrical_safety_notice.png",
    options: [
      { text: "전기제품을 한 콘센트에 많이 연결해야 합니다." },
      { text: "전기 코드에 이상이 있으면 관리자에게 알려야 합니다." },
      { text: "전기 코드는 작업자가 직접 수리해야 합니다." },
      { text: "작업이 끝나면 전기제품을 계속 켜 두어야 합니다." }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "8.",
    detail: "이번 달 마지막 금요일에는 공장 청소가 실시됩니다. 오전 작업을 마친 후 오후 3시부터 모든 작업자가 각자 맡은 구역을 청소합니다.",
    image: "set07_factory_cleaning_notice.png",
    options: [
      { text: "청소는 오전 3시에 시작합니다." },
      { text: "일부 관리자만 청소에 참여합니다." },
      { text: "오후 3시부터 공장 청소를 합니다." },
      { text: "청소는 다음 달에 실시됩니다." }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "9.",
    detail: "보호안경은 눈에 들어갈 수 있는 먼지나 작은 물질로부터 눈을 보호합니다. 절단이나 연마 작업을 할 때에는 반드시 보호안경을 착용해야 합니다.",
    image: "set07_eye_protection_notice.png",
    options: [
      { text: "보호안경은 귀를 보호합니다." },
      { text: "절단 작업을 할 때 보호안경을 착용해야 합니다." },
      { text: "보호안경은 작업이 끝난 후에만 필요합니다." },
      { text: "연마 작업에서는 보호안경을 벗어야 합니다." }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
    num: "10.",
    detail: "기숙사에서 생활하는 직원은 밤 10시 이후에는 큰 소리로 음악을 듣거나 다른 사람의 휴식을 방해해서는 안 됩니다. 공동생활을 위해 서로 배려해 주십시오.",
    image: "set07_dormitory_notice.png",
    options: [
      { text: "밤 10시 이후에는 큰 소리를 내도 됩니다." },
      { text: "기숙사에서는 다른 사람을 배려해야 합니다." },
      { text: "기숙사에서는 음악을 항상 크게 들어야 합니다." },
      { text: "공동생활에서는 서로 배려할 필요가 없습니다." }
    ],
    correct: 1,
    points: 2.5
  },


  {
    text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "11.",
    detail: "작업을 시작하기 전에 필요한 도구가 모두 ______ 확인하십시오.",
    image: "",
    options: [
      { text: "있는지" },
      { text: "있어서" },
      { text: "있으면" },
      { text: "있지만" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "12.",
    detail: "이 제품은 깨지기 쉬우니까 운반할 때 ______ 조심해야 합니다.",
    image: "",
    options: [
      { text: "특히" },
      { text: "이미" },
      { text: "아직" },
      { text: "거의" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "13.",
    detail: "작업량이 예상보다 많아서 오늘은 평소보다 늦게 ______.",
    image: "",
    options: [
      { text: "끝날 것 같습니다" },
      { text: "끝났으면 합니다" },
      { text: "끝내지 않았습니다" },
      { text: "끝나지 않았습니다" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "14.",
    detail: "작업 중에는 휴대전화를 사용하지 ______ 안전사고를 예방할 수 있습니다.",
    image: "",
    options: [
      { text: "않아야" },
      { text: "않도록" },
      { text: "않으면서" },
      { text: "않더라도" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "15.",
    detail: "작업 방법을 잘 모르겠으면 혼자 결정하지 말고 관리자에게 ______.",
    image: "",
    options: [
      { text: "물어보세요" },
      { text: "물어봤어요" },
      { text: "물어보면서" },
      { text: "물어보니까" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num: "16.",
    detail: "사용한 공구는 다음 작업자가 사용할 수 있도록 제자리에 ______ 합니다.",
    image: "",
    options: [
      { text: "정리해 놓아야" },
      { text: "정리해 놓으면" },
      { text: "정리해 놓지만" },
      { text: "정리해 놓아서" }
    ],
    correct: 0,
    points: 2.5
  },


  {
    text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
    num: "17.",
    detail: "작업장에서 사용하는 공구나 장비 등을 필요할 때 꺼내 쓸 수 있도록 정리해 두는 장소입니다.",
    image: "",
    options: [
      { text: "공구함" },
      { text: "식당" },
      { text: "기숙사" },
      { text: "탈의실" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
    num: "18.",
    detail: "작업이 끝난 후에는 사용한 공구를 깨끗하게 닦고 정해진 장소에 보관해야 합니다. 공구가 고장났거나 이상이 있으면 다음 작업자에게 알려야 합니다.",
    image: "",
    options: [
      { text: "공구 관리 방법" },
      { text: "출근 시간" },
      { text: "식사 방법" },
      { text: "휴가 신청 방법" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num: "19.",
    detail: "영수 씨는 이번 주부터 새로운 작업을 맡게 되었습니다. 처음에는 작업 순서를 잘 몰랐지만 선배에게 설명을 듣고 여러 번 연습한 후 혼자서도 작업할 수 있게 되었습니다.",
    image: "",
    options: [
      { text: "영수 씨는 새로운 작업을 맡았습니다." },
      { text: "영수 씨는 작업을 한 번도 연습하지 않았습니다." },
      { text: "영수 씨는 선배에게 작업 방법을 알려 주었습니다." },
      { text: "영수 씨는 지금 일을 전혀 할 수 없습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num: "20.",
    detail: "회사에서는 직원들의 건강을 위해 매년 건강검진을 실시합니다. 올해 건강검진은 다음 달 첫째 주에 진행되며, 정확한 날짜와 시간은 개인별로 안내할 예정입니다.",
    image: "",
    options: [
      { text: "건강검진은 매년 실시합니다." },
      { text: "건강검진은 올해 실시하지 않습니다." },
      { text: "모든 직원의 날짜가 이미 정해졌습니다." },
      { text: "건강검진은 다음 달 마지막 주에 실시합니다." }
    ],
    correct: 0,
    points: 2.5
  },


  {
    text: "[21~22] 들은 것을 고르십시오.",
    num: "21.",
    image: "",
    audio: "audio/set07/q21.mp3",
    options: [
      { text: "공구함" },
      { text: "작업대" },
      { text: "안전망" },
      { text: "소화기" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[21~22] 들은 것을 고르십시오.",
    num: "22.",
    image: "",
    audio: "audio/set07/q22.mp3",
    options: [
      { text: "측정하다" },
      { text: "분류하다" },
      { text: "수리하다" },
      { text: "포장하다" }
    ],
    correct: 1,
    points: 2.5
  },


  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "23.",
    image: "",
    audio: "audio/set07/q23.mp3",
    options: [
      { image: "23-1.png" },
      { image: "23-2.png" },
      { image: "23-3.png" },
      { image: "23-4.png" }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "24.",
    image: "",
    audio: "audio/set07/q24.mp3",
    options: [
      { image: "24-1.png" },
      { image: "24-2.png" },
      { image: "24-3.png" },
      { image: "24-4.png" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "25.",
    image: "",
    audio: "audio/set07/q25.mp3",
    options: [
      { image: "25-1.png" },
      { image: "25-2.png" },
      { image: "25-3.png" },
      { image: "25-4.png" }
    ],
    correct: 3,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "26.",
    image: "",
    audio: "audio/set07/q26.mp3",
    options: [
      { image: "26-1.png" },
      { image: "26-2.png" },
      { image: "26-3.png" },
      { image: "26-4.png" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "27.",
    image: "",
    audio: "audio/set07/q27.mp3",
    options: [
      { image: "27-1.png" },
      { image: "27-2.png" },
      { image: "27-3.png" },
      { image: "27-4.png" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
    num: "28.",
    image: "",
    audio: "audio/set07/q28.mp3",
    options: [
      { image: "28-1.png" },
      { image: "28-2.png" },
      { image: "28-3.png" },
      { image: "28-4.png" }
    ],
    correct: 3,
    points: 2.5
  },


  {
    text: "29~32 듣고 알맞은 대답을 고르십시오.",
    num: "29.",
    image: "",
    audio: "audio/set07/q29.mp3",
    options: [
      { text: "네, 확인한 다음에 말씀드리겠습니다." },
      { text: "네, 어제 퇴근했습니다." },
      { text: "오후 네 시에 끝납니다." },
      { text: "창고 옆에 있습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "29~32 듣고 알맞은 대답을 고르십시오.",
    num: "30.",
    image: "",
    audio: "audio/set07/q30.mp3",
    options: [
      { text: "아니요, 아직 준비하지 못했습니다." },
      { text: "네, 지난주에 다녀왔습니다." },
      { text: "공장 뒤쪽에 있습니다." },
      { text: "오전 9시에 시작합니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "29~32 듣고 알맞은 대답을 고르십시오.",
    num: "31.",
    image: "",
    audio: "audio/set07/q31.mp3",
    options: [
      { text: "네, 오늘 안으로 제출하겠습니다." },
      { text: "네, 어제 비가 왔습니다." },
      { text: "회사에서 버스를 탑니다." },
      { text: "오후에 작업을 시작했습니다." }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "29~32 듣고 알맞은 대답을 고르십시오.",
    num: "32.",
    image: "",
    audio: "audio/set07/q32.mp3",
    options: [
      { text: "네, 그렇게 하는 것이 좋겠습니다." },
      { text: "아니요, 어제 먹었습니다." },
      { text: "오전 7시에 출근합니다." },
      { text: "사무실에서 근무합니다." }
    ],
    correct: 0,
    points: 2.5
  },


  {
    text: "[33] 이어지는 말을 고르십시오.",
    num: "33.",
    image: "",
    audio: "audio/set07/q33.mp3",
    options: [
      { text: "그럼 작업이 끝난 후에 다시 확인해 보세요." },
      { text: "네, 어제 저녁에 먹었습니다." },
      { text: "오전에는 회사에 있었습니다." },
      { text: "지난주에는 비가 많이 왔습니다." }
    ],
    correct: 0,
    points: 2.5
  },


  {
    text: "34~36 듣고 알맞은 그림을 고르십시오.",
    num: "34.",
    image: "",
    audio: "audio/set07/q34.mp3",
    options: [
      { image: "34-1.png" },
      { image: "34-2.png" },
      { image: "34-3.png" },
      { image: "34-4.png" }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "34~36 듣고 알맞은 그림을 고르십시오.",
    num: "35.",
    image: "",
    audio: "audio/set07/q35.mp3",
    options: [
      { image: "35-1.png" },
      { image: "35-2.png" },
      { image: "35-3.png" },
      { image: "35-4.png" }
    ],
    correct: 2,
    points: 2.5
  },

  {
    text: "34~36 듣고 알맞은 그림을 고르십시오.",
    num: "36.",
    image: "",
    audio: "audio/set07/q36.mp3",
    options: [
      { image: "36-1.png" },
      { image: "36-2.png" },
      { image: "36-3.png" },
      { image: "36-4.png" }
    ],
    correct: 0,
    points: 2.5
  },


  {
    text: "37~40 긴 대화를 듣고 답하십시오.",
    num: "37. 두 사람은 어디에 가려고 합니까?",
    image: "",
    audio: "audio/set07/q37.mp3",
    options: [
      { text: "회사 식당" },
      { text: "공구 보관실" },
      { text: "회의실" },
      { text: "주차장" }
    ],
    correct: 1,
    points: 2.5
  },

  {
    text: "37~40 긴 대화를 듣고 답하십시오.",
    num: "38. 여자는 왜 작업 순서를 확인하려고 합니까?",
    image: "",
    audio: "audio/set07/q38.mp3",
    options: [
      { text: "작업 순서를 확인하려고" },
      { text: "점심을 먹으려고" },
      { text: "퇴근 시간을 확인하려고" },
      { text: "병원에 가려고" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "37~40 긴 대화를 듣고 답하십시오.",
    num: "39. 여자는 무엇을 준비해야 합니까?",
    image: "",
    audio: "audio/set07/q39.mp3",
    options: [
      { text: "작업 도구" },
      { text: "식료품" },
      { text: "청소용품" },
      { text: "사무용품" }
    ],
    correct: 0,
    points: 2.5
  },

  {
    text: "37~40 긴 대화를 듣고 답하십시오.",
    num: "40. 여자는 왜 작업 방법을 다시 확인합니까?",
    image: "",
    audio: "audio/set07/q40.mp3",
    options: [
      { text: "작업 방법을 다시 확인하기 위해" },
      { text: "휴가를 신청하기 위해" },
      { text: "기숙사를 옮기기 위해" },
      { text: "건강검진을 받기 위해" }
    ],
    correct: 0,
    points: 2.5
  }

];