const quizMetadata = [
  {
    text: "[1-2] 다음 질문에 답하십시오.",
    num:"1.다음 단어와 관계있는 것은 무엇입니까? ",
    detail:"스위치, 선풍기, 텔레비전, 휴대 전화",
    image: "",
    options: [
      { text: "열다" },
      { text: "끄다" },
      { text: "잠그다" },
      { text: "돌리다" }
    ],
    correct: 1,
    points: 2.5
  },
 {
    text: "[1-2] 다음 질문에 답하십시오.",
    num:"2. 다음 단어와 비슷한 말은 무엇입니까? ",
    detail:"수확하다",
    image: "",
    options: [
      { text: "거두다" },
      { text: "재배하다 " },
      { text: "뿌리다 " },
      { text: "자라다" }
    ],
    correct: 0,
    points: 2.5
  },
 {
    text: "[3-6] 빈 칸에 들어갈 가장 알맞은 것을 고르십시오. ",
    num:"3.",
    detail:"가: __________은/는 언제예요?\n나: 8월 30일에 끝나요.",
    image: "",
    options: [
      { text: "수업" },
      { text: "일정" },
      { text: "개강" },
      { text: "종강" }
    ],
    correct: 3,
    points: 2.5
  },
 {
    text: "[3-6] 빈 칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"4.",
    detail:"우리 회사 직원 식당은 자율 배식입니다. 직원 각자가 자신이 먹고 싶은 만큼 식판에 밥을 푸고 국을 ________됩니다. ",
    image: "",
    options: [
      { text: "꼬면 " },
      { text: "뜨면 " },
      { text: "파면 " },
      { text: "밀면" }
    ],
    correct: 0,
    points: 2.5
  },
 {
    text: "[3-6] 빈 칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"5.",
    detail:"고구마를 _______괭이 어디에 있어요?  ",
    image: "",
    options: [
      { text: "뿌려야 하는데 " },
      { text: "캐야 하는데 " },
      { text: "쳐야 하는데 " },
      { text: "따야 하는데" }
    ],
    correct: 1,
    points: 2.5
  },
 {
    text: "[3-6] 빈 칸에 들어갈 가장 알맞은 것을 고르십시오.",
    num:"6.",
    detail:"보호복을 입지 않고 하면 위험 합니다. 조금 불편하더라도 꼭 입고 작업해야 ______ .",
    image: "",
    options: [
      { text: "복잡합니다" },
      { text: "안전합니다" },
      { text: "시원합니다" },
      { text: "편리합니다" }
    ],
    correct: 1,
    points: 2.5
  },
 {
    text: "[7-10] 다음 질문에 답하십시오.",
    num:"7. 이 표지는 무슨 뜻입니까? ",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_7.webp",
    options: [
      { text: "이곳에서 뛰지 마십시오." },
      { text: "이 문에 기대지 마십시오." },
      { text: "이것을 가져가지 마십시오." },
      { text: "여기에 가까이 오지 마십시오." }
    ],
    correct: 3,
    points: 2.5
  },
 {
    text: "[7-10] 다음 질문에 답하십시오.",
    num:"8. 이 사람은 어디에서 일을 하고 있습니까? ",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_8.webp",
    options: [
      { text: "출입증입니다. " },
      { text: "경기공업입니다." },
      { text: "김민구입니다. " },
      { text: "사원입니다." }
    ],
    correct: 1,
    points: 2.5
  },
 {
    text: "[7-10] 다음 질문에 답하십시오.",
    num:"9. 다음 안내문에 대한 설명으로 맞는 것은 무엇입니까? ",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_9.webp",
    options: [
      { text: "한국어 교육에 대한 안내문입니다. " },
      { text: "한국어로만 상담을 받을 수 있습니다. " },
      { text: "외국인과 결혼한 가정을 위한 지원 안내입니다. " },
      { text: "전화상담을 하려면 온라인으로 신청해야 합니다." }
    ],
    correct: 2,
    points: 2.5
  },
 {
    text: "[7-10] 다음 질문에 답하십시오.",
    num:"10. 다음 메뉴에 대한 설명으로 맞는 것은 무엇입니까? ",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_10.webp",
    options: [
      { text: "음료수 값은 천 원입니다." },
      { text: "밥은 무료로 먹을 수 있습니다." },
      { text: "라면을 넣고 싶으면 돈을 내야 합니다." },
      { text: "한 마리 겂은 반 마리보다 두 배 비쌉니다." }
    ],
    correct: 2,
    points: 2.5
  },
 {
    text: "[11-12] 빈칸에 들어갈 가장 알맞은 것을 고르십시오. ",
    num:"11.",
    detail:"외국에 나가려면 ________이/가 반드시 있어야 해요. 이것은 외국인의 신분증이거든요.",
    image: "",
    options: [
      { text: "도장" },
      { text: "명함" },
      { text: "여권" },
      { text: "신용카드" }
    ],
    correct: 2,
    points: 2.5
  },
 {
    text: "[11-12] 빈칸에 들어갈 가장 알맞은 것을 고르십시오. ",
    num:"12.",
    detail:"재단 작업을 _________이제 원목을 매끄럽게 하는 연마작업을 해야 합니다. 그 다음에는 도장 작업이 기다리고 있습니다.",
    image: "",
    options: [
      { text: "재었다고" },
      { text: "끝냈다고" },
      { text: "재었으니까" },
      { text: "끝냈으니까" }
    ],
    correct: 3,
    points: 2.5
  },
 {
    text: "[13-14] 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
    num:"13.",
    detail:"근로자들은 매월 다른 금액의 급여를 받게 됩니다. 그래서 매월 발생하 는 근로 소득에 대한 세금을 정확하게 계산하는 것은 굉장히 복잡합니 다. 따라서 급여를 지급할 때 간단한 세금 계산표로 세금을 공제하고, 다음해 2월에 실제 부담해야 할 세금을 정확하게 계산합니다. 이것을 세 금 공제라고 합니다.",
    image: "",
    options: [
      { text: "급여 지급 방법" },
      { text: "근로자들의 급여 액수" },
      { text: "세금 계산표의 사용 방법" },
      { text: "세금공제를 하는 이유" }
    ],
    correct: 3,
    points: 2.5
  },
 {
    text: "[13-14] 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
    num:"14.",
    detail:"한국은 1950년에 한국전쟁이 끝난 후 세계에서 가장 가난한 나라였습니다. 그렇지만 1960년대 경제를 개발했고 이후 경제가 크게 발전했습니다.",
    image: "",
    options: [
      { text: "무역" },
      { text: "수출품" },
      { text: "수입품" },
      { text: "경제 발전" }
    ],
    correct: 3,
    points: 2.5
  },
 {
    text: "[15-16] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num:"15.",
    detail:"작업을 하다가 못에 찔렸을 때는 상처가 가벼워도 바로 소독을 해야 합니다. 그 리고 병원에 가서 진료를 받고 주사를 맞는 것이 좋습니다. 그 이유는 못에 찔린 경우 증상이 보통 3일 후에 나타나므로 예방이 필요하기 때문입니다.",
    image: "",
    options: [
      { text: "못에 찔리면 바로 증상이 나타납니다." },
      { text: "못에 찔렸을 때 소독만 해도 잘 낫습니다." },
      { text: "못에 찔리기 전에 주사를 맞아야 합니다." },
      { text: "못에 찔리면 상처가 가벼워도 병원에 가야 합니다." }
    ],
    correct: 3,
    points: 2.5
  },
 {
    text: "[15-16] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
    num:"16.",
    detail:"삼강오륜은 유교에서 기본이 되는 도덕 지침으로 알려져 있습니다. 삼강오 륜과 같은 유교의 전통은 오늘날까지 한국에 이어져오고 있습니다. 오늘날 에서 웃어른 공경하기, 부모님께 효도하기, 조상 섬기기 등은 한국의 전통 으로 남아 있습니다. ",
    image: "",
    options: [
      { text: "삼강오륜은 불교의 도덕 지침입니다. " },
      { text: "어른을 공경하는 사람이 줄고 있습니다. " },
      { text: "유교의 전통이 오늘날까지 남아 있습니다. " },
      { text: "조상 섬기기는 외국에서 온 풍습입니다." }
    ],
    correct: 2,
    points: 2.5
  },
 {
    text: "[17-18] 다음 설명에 알맞은 어휘를 고르십시오.",
    num:"17.",
    detail:"콘크리트 속에 넣어서 건물의 강도를 보강하기 위해 사용하는 긴 쇠막 대입니다.",
    image: "",
    options: [
      { text: "시멘트 " },
      { text: "철사 " },
      { text: "쇠지레 " },
      { text: "철근" }
    ],
    correct: 3,
    points: 2.5
  },
 {
    text: "[17-18] 다음 설명에 알맞은 어휘를 고르십시오.",
    num:"18.",
    detail:"주문  받은 물품이나 생산된 농산물 등을 약속된 날짜에 거래처로 가져다주는 일입니다.",
    image: "",
    options: [
      { text: "포장" },
      { text: "납품" },
      { text: "분류" },
      { text: "적재" }
    ],
    correct: 1,
    points: 2.5
  },
 {
    text: "[19-20] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    num:"19.",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_19.webp",
    options: [
      { text: "계산기" },
      { text: "텔레비전" },
      { text: "휴대전화" },
      { text: "노트북 컴퓨터" }
    ],
    correct: 2,
    points: 2.5
  },
   {
    text: "[19-20] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
    num:"20.",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_20.webp",
    options: [
      { text: "면을 붓고 있습니다. " },
      { text: "면을 집고 있습니다. " },
      { text: "국을 붓고 있습니다. " },
      { text: "국을 집고 있습니다." }
    ],
    correct: 1,
    points: 2.5
  },
 {
    text: "[21-24] 들은 것을 고르십시오.",
    num:"21.",
    detail:"",
    image: "",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-21.mp3",
    options: [
      { text: "좋아요" },
      { text: "가봐요" },
      { text: "좁아요" },
      { text: "작아요" }
    ],
    correct: 3,
    points: 2.5
  },
 {
    text: "[21-24] 들은 것을 고르십시오.",
    num:"22.",
    detail:"",
    image: "",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-22.mp3",
    options: [
      { text: "공장 전화번호는 866-4009 이에요." },
      { text: "공장 전화번호는 866-3080이에요." },
      { text: "공장 전화번호는 876-3000 이에요." },
      { text: "공장 전화번호는 856-3999이에요." }
    ],
    correct: 2,
    points: 2.5
  },
 {
    text: "[21-24] 들은 것을 고르십시오.",
    num:"23.",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_23.webp",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-23.mp3",
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
    text: "[21-24] 들은 것을 고르십시오.",
    num:"24.",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_24.webp",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-24.mp3",
    options: [
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" }
    ],
    correct: 2,
    points: 2.5
  },
 {
    text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
    num:"25. 이것은 무엇입니까? ",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_25.webp",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-25.mp3",
    options: [
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" }
    ],
    correct: 4,
    points: 2.5
  },
 {
    text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
    num:"26. 여기는 어디입니까? ",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_26.webp",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-26.mp3",
    options: [
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" }
    ],
    correct: 1,
    points: 2.5
  },
 {
    text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
    num:"27.  이 사람은 무엇을 하고 있습니까? ",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_27.webp",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-27.mp3",
    options: [
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" }
    ],
    correct: 3,
    points: 2.5
  },
 {
    text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
    num:"28. 티셔츠가 얼마나 있습니까? ",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_28.webp",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-28.mp3",
    options: [
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" }
    ],
    correct: 2,
    points: 2.5
  },
 {
    text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
    num:"29. 사무실은 어디에 있습니다? ",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_29.webp",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-29.mp3",
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
    text: "[30-33] 다음을 듣고 질문에 알맞은 대답을 고르십시오.",
    num:"30.",
    detail:"",
    image: "",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g5_set6-30.mp3",
    options: [
      { text: "네, 알겠습니다. " },
      { text: "수업은 일요일입니다. " },
      { text: "태권도를 할 줄 몰라요. " },
      { text: "태권도를 배우고 싶은데요." }
    ],
    correct: 3,
    points: 2.5
  },
 {
    text: "[30-33] 다음을 듣고 질문에 알맞은 대답을 고르십시오.",
    num:"31.",
    detail:"",
    image: "",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-31.mp3",
    options: [
      { text: "이 약을 드세요. " },
      { text: "소독약으로 소독하세요. " },
      { text: "자기전에 바르면 됩니다. " },
      { text: "하루에 두 번 먹으면 돼요." }
    ],
    correct: 3,
    points: 2.5
  },
 {
    text: "[30-33] 다음을 듣고 질문에 알맞은 대답을 고르십시오.",
    num:"32.",
    detail:"",
    image: "",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-32.mp3",
    options: [
      { text: "네, 좋아해요. " },
      { text: "네, 매운 걸 잘 못 먹어요. " },
      { text: "아니요, 안 먹었어요. " },
      { text: "아니요, 안 매워요." }
    ],
    correct: 0,
    points: 2.5
  },
 {
    text: "[30-33] 다음을 듣고 질문에 알맞은 대답을 고르십시오.",
    num:"33.",
    detail:"",
    image: "",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/02/g5_set10-33.mp3",
    options: [
      { text: "구두를 신어요." },
      { text: "구보를 하고 있어요." },
      { text: "친구를 기다려요." },
      { text: "여기서 기다려요." }
    ],
    correct: 2,
    points: 2.5
  },
 {
    text: "[34-35] 다음을 듣고 이어지는 말을 고르십시오.",
    num:"34.",
    detail:"",
    image: "",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-34.mp3",
    options: [
      { text: "네, 가져 가세요." },
      { text: "네, 지금 오세요." },
      { text: "네, 쓰면 안 돼요." },
      { text: "네, 여기에 올려놓으세요." }
    ],
    correct: 0,
    points: 2.5
  },
 {
    text: "[34-35] 다음을 듣고 이어지는 말을 고르십시오.",
    num:"35.",
    detail:"",
    image: "",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-35.mp3",
    options: [
      { text: "네, 재활용 칸에 넣어주세요. " },
      { text: "아니요. 쓰레기봉투에 넣으세요. " },
      { text: "네, 빨리 치워야 겠어요. " },
      { text: "아니요, 폐수가 정말 많아요." }
    ],
    correct: 2,
    points: 2.5
  },
 {
    text: "[36-37] 다음을 듣고 들은 내용과 관계 있는 그림을 고르십시오.",
    num:"36.",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_36.webp",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-36.mp3",
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
    num:"37.",
    detail:"",
    image: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9_37.webp",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-37.mp3",
    options: [
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" }
    ],
    correct: 3,
    points: 2.5
  },
 {
    text: "[38-40] 다음 이야기를 듣고 질문에 알맞은 대답을 고르십시오.",
    num:"38. 들은 내용과 같은 것을 고르십시오. ",
    detail:"",
    image: "",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-38.mp3",
    options: [
      { text: "이 버스는 중앙공원에서 출발합니다." },
      { text: "버스를 다시 탈 때는 표를 사야 합니다." },
      { text: "사람들은 내려서 관광지를 구경할 수 있습니다." },
      { text: "사람들은 한 시간 동안 버스를 기다려야 합니다." }
    ],
    correct: 2,
    points: 2.5
  },
 {
    text: "[38-40] 다음 이야기를 듣고 질문에 알맞은 대답을 고르십시오.",
    num:"39. 다음 중 들은 내용과 같은 것은 무엇입니까? ",
    detail:"",
    image: "",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-39.mp3",
    options: [
      { text: "남자는 수술을 받습니다. " },
      { text: "남자는 다리가 좀 아픕니다. " },
      { text: "남자는 퇴직을 하려고 합니다. " },
      { text: "남자는 일주일간 병가를 씁니다." }
    ],
    correct: 0,
    points: 2.5
  },
 {
    text: "[38-40] 다음 이야기를 듣고 질문에 알맞은 대답을 고르십시오.",
    num:"40. 여자는 앞으로 무엇을 하려고 합니까? ",
    detail:"",
    image: "",
    audio:"https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set9-40.mp3",
    options: [
      { text: "건강에 더 신경을 쓰려고 합니다. " },
      { text: "바쁘더라도 쉬면서 일을 하려고 합니다. " },
      { text: "새로운 운동을 시작하려고 합니다. " },
      { text: "자주 야근을 하려고 합니다." }
    ],
    correct: 0,
    points: 2.5
  }
];