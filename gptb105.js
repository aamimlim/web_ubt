const quizMetadata = [
    {
        text: "[1~4] 다음 그림을 보고 맞는 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-01.webp",
        audio: "",
        options: [
            { text: "직원이 상품의 바코드를 확인하고 있습니다." },
            { text: "직원이 상품을 포장하고 있습니다." },
            { text: "직원이 계산대에서 돈을 세고 있습니다." },
            { text: "직원이 진열대에 상품을 정리하고 있습니다." }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[1~4] 다음 그림을 보고 맞는 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-02.webp",
        audio: "",
        options: [
            { text: "남자가 서류를 복사하고 있습니다." },
            { text: "남자가 서류에 도장을 찍고 있습니다." },
            { text: "남자가 서류를 찢고 있습니다." },
            { text: "남자가 서류를 봉투에 넣고 있습니다." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[1~4] 다음 그림을 보고 맞는 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-03.webp",
        audio: "",
        options: [
            { text: "직원이 상자를 열고 있습니다." },
            { text: "직원이 상품의 가격을 확인하고 있습니다." },
            { text: "직원이 물건을 트럭에 싣고 있습니다." },
            { text: "직원이 물건을 바닥에 내려놓고 있습니다." }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[1~4] 다음 그림을 보고 맞는 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-04.webp",
        audio: "",
        options: [
            { text: "여자가 화분에 물을 주고 있습니다." },
            { text: "여자가 꽃을 자르고 있습니다." },
            { text: "여자가 꽃을 포장하고 있습니다." },
            { text: "여자가 식물의 잎을 닦고 있습니다." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
        num: "5.",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "비가 오<u>니까</u> 우산을 가져가세요." },
            { text: "비가 오<u>지만</u> 우산을 가져가세요 때문에." },
            { text: "비가 오<u>려고</u> 우산을 가져가세요." },
            { text: "비가 오<u>면서</u> 우산을 가져가세요 때문에." }
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
            { text: "저는 한국에 오<u>기 전에</u> 한국어를 배웠습니다." },
            { text: "저는 한국에 오<u>는 동안에</u> 한국어를 배웠습니다 전에." },
            { text: "저는 한국에 오<u>고 나서</u> 한국어를 배웠습니다 전에." },
            { text: "저는 한국에 오<u>아도</u> 한국어를 배웠습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 공용 세탁실을 이용할 때 어떻게 해야 합니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-07.webp",
        audio: "",
        options: [
            { text: "세탁이 끝나도 세탁물을 그대로 둡니다." },
            { text: "세탁기를 하루 종일 사용합니다." },
            { text: "세탁물을 꺼내고 주변을 정리합니다." },
            { text: "세탁실에 개인 물건을 보관합니다." }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 마을 텃밭에서 지켜야 할 것은 무엇입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-08.webp",
        audio: "",
        options: [
            { text: "밤늦게 물을 사용해야 합니다." },
            { text: "물을 사용한 후 수도꼭지를 잠가야 합니다." },
            { text: "한 사람이 물을 모두 사용해도 됩니다." },
            { text: "텃밭에서 물을 사용할 수 없습니다." }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "9. 공공 자전거를 반납할 때 어디에 세워야 합니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-09.webp",
        audio: "",
        options: [
            { text: "가까운 건물 입구에 세웁니다." },
            { text: "자전거를 처음 빌린 곳에만 세웁니다." },
            { text: "길가에 편리한 곳을 골라 세웁니다." },
            { text: "안내된 지정 장소에 세웁니다." }
        ],
        correct: 3,
        points: 2.5
    },
    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 병원에서 진료 순서를 확인하려면 무엇을 해야 합니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-10.webp",
        audio: "",
        options: [
            { text: "대기표를 받고 번호가 표시될 때까지 기다립니다." },
            { text: "진료실에 먼저 들어가서 기다립니다." },
            { text: "접수하지 않고 의사에게 바로 갑니다." },
            { text: "다른 환자의 번호를 확인합니다." }
        ],
        correct: 0,
        points: 2.5
    },


    {
        text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "회의가 시작되기 전에 필요한 자료를 ______ 준비했습니다.",
        image: "",
        audio: "",
        options: [
            { text: "미리" },
            { text: "갑자기" },
            { text: "천천히" },
            { text: "서로" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "이 기계는 사용 방법이 간단해서 누구나 쉽게 ______ 수 있습니다.",
        image: "",
        audio: "",
        options: [
            { text: "버릴" },
            { text: "사용할" },
            { text: "잃어버릴" },
            { text: "고장 날" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "물건을 구입하기 전에 가격과 품질을 ______ 보는 것이 좋습니다.",
        image: "",
        audio: "",
        options: [
            { text: "숨겨" },
            { text: "나누어" },
            { text: "비교해" },
            { text: "옮겨" }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "몸이 아프면 무리하지 말고 충분히 ______ 합니다.",
        image: "",
        audio: "",
        options: [
            { text: "운전해야" },
            { text: "출근해야" },
            { text: "이사해야" },
            { text: "쉬어야" }
        ],
        correct: 3,
        points: 2.5
    },
    {
        text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "음식이 상하지 않도록 냉장고에 ______ 보관해야 합니다.",
        image: "",
        audio: "",
        options: [
            { text: "잘못" },
            { text: "안전하게" },
            { text: "급하게" },
            { text: "가볍게" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[11~16] 다음 문장의 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "약속 장소에 늦을 것 같으면 상대방에게 미리 ______ 것이 좋습니다.",
        image: "",
        audio: "",
        options: [
            { text: "연락하는" },
            { text: "청소하는" },
            { text: "계산하는" },
            { text: "출발하는" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[17~18] 다음 글을 읽고 물음에 답하십시오.",
        num: "17. 이 안내에 따르면 도서관에서 어떤 서비스를 받을 수 있습니까?",
        detail: "[도서관 문화 프로그램]\n우리 도서관에서는 매주 토요일 오후 2시에 어린이를 위한 책 읽기 프로그램을 운영합니다. 참가를 원하는 사람은 금요일까지 도서관 안내 데스크에서 신청해 주십시오. 참가비는 무료입니다.",
        image: "",
        audio: "",
        options: [
            { text: "책을 구입하는 할인 서비스" },
            { text: "외국어 시험 준비 수업" },
            { text: "어린이를 위한 책 읽기 활동" },
            { text: "성인을 위한 요리 교실" }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[17~18] 다음 글을 읽고 물음에 답하십시오.",
        num: "18. 주민들은 재활용품을 언제 내놓아야 합니까?",
        detail: "[재활용품 배출 안내]\n재활용품은 매주 수요일 저녁 6시부터 9시 사이에 배출해 주십시오. 종이, 플라스틱, 유리병은 종류별로 나누어 지정된 장소에 놓아야 합니다.",
        image: "",
        audio: "",
        options: [
            { text: "월요일 아침" },
            { text: "화요일 오후" },
            { text: "목요일 저녁" },
            { text: "수요일 저녁" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 물음에 답하십시오.",
        num: "19. 이 사람이 매일 하는 일은 무엇입니까?",
        detail: "저는 아침마다 출근하기 전에 집 근처 공원을 걷습니다. 처음에는 10분 정도만 걸었지만 요즘은 30분씩 걷습니다. 걷고 나면 몸이 가벼워지고 하루를 기분 좋게 시작할 수 있습니다.",
        image: "",
        audio: "",
        options: [
            { text: "아침마다 공원에서 걷습니다." },
            { text: "아침마다 수영을 합니다." },
            { text: "퇴근 후에 자전거를 탑니다." },
            { text: "주말마다 등산을 합니다." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[19~20] 다음 글을 읽고 물음에 답하십시오.",
        num: "20. 이 행사를 통해 사람들이 하려는 일은 무엇입니까?",
        detail: "우리 동네에서는 이번 주 토요일에 헌 옷 나눔 행사를 엽니다. 입지 않는 옷을 깨끗하게 세탁해서 행사장으로 가져오면 됩니다. 필요한 사람들은 옷을 무료로 가져갈 수 있습니다. 이 행사는 물건을 다시 사용하고 이웃을 돕기 위해 마련되었습니다.",
        image: "",
        audio: "",
        options: [
            { text: "새 옷을 저렴하게 판매합니다." },
            { text: "옷을 수선하는 방법을 가르칩니다." },
            { text: "헌 옷을 버리는 방법을 알려 줍니다." },
            { text: "옷을 나누어 사용하고 이웃을 돕습니다." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[21~22] 다음을 듣고 들은 단어와 같은 것을 고르십시오.",
        num: "21.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-21.mp3",
        options: [
            { text: "교환" },
            { text: "교육" },
            { text: "경험" },
            { text: "계획" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[21~22] 다음을 듣고 들은 단어와 같은 것을 고르십시오.",
        num: "22.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-22.mp3",
        options: [
            { text: "기록" },
            { text: "기계" },
            { text: "기회" },
            { text: "기본" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 다음을 듣고 내용과 관계있는 그림을 고르십시오.",
        num: "23.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-23.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-23-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-04.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-35-1.webp" }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[23~28] 다음을 듣고 내용과 관계있는 그림을 고르십시오.",
        num: "24.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-24.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-24-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-28-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-04.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-01.webp" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[23~28] 다음을 듣고 내용과 관계있는 그림을 고르십시오.",
        num: "25.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-25.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-36-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-27-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-28-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-25-4.webp" },
        ],
        correct: 3,
        points: 2.5
    },
    {
        text: "[23~28] 다음을 듣고 내용과 관계있는 그림을 고르십시오.",
        num: "26.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-26.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-04.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-26-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-36-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-24-2.webp" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[23~28] 다음을 듣고 내용과 관계있는 그림을 고르십시오.",
        num: "27.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-27.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-02.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-23-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-27-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-02.webp" }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[23~28] 다음을 듣고 내용과 관계있는 그림을 고르십시오.",
        num: "28.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-28.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-28-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt25-26-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-27-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-24-1.webp" }
        ],
        correct: 0,
        points: 2.5
    },


    {
        text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-29.mp3",
        options: [
            { text: "네, 신청서를 작성해서 제출하겠습니다." },
            { text: "아니요, 오늘은 날씨가 좋습니다." },
            { text: "저쪽에 있는 의자를 사용하세요." },
            { text: "지난주에 이미 다녀왔습니다." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-30.mp3",
        options: [
            { text: "저는 버스를 타고 출근합니다." },
            { text: "오후 세 시에 시작합니다." },
            { text: "두 장만 복사해 주세요." },
            { text: "이것은 제 동생의 가방입니다." }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-31.mp3",
        options: [
            { text: "어제 시장에서 샀습니다." },
            { text: "창고 안쪽 선반에 놓으면 됩니다." },
            { text: "저는 매일 운동합니다." },
            { text: "다음 주에 휴가를 갑니다." }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[29~32] 다음을 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-32.mp3",
        options: [
            { text: "네, 음식이 아주 맛있습니다." },
            { text: "저는 한국어를 공부하고 있습니다." },
            { text: "오른쪽 문으로 들어가세요." },
            { text: "죄송하지만 내일 다시 방문해도 될까요?" }
        ],
        correct: 3,
        points: 2.5
    },


    {
        text: "[33] 다음 대화를 듣고 이어지는 말을 고르십시오.",
        num: "33. 대화를 완성하세요.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-37.mp3",
        options: [
            { text: "네, 확인한 후에 다시 알려 드리겠습니다." },
            { text: "아니요, 아직 점심을 먹지 않았습니다." },
            { text: "저는 어제 그 영화를 봤습니다." },
            { text: "이 가방은 조금 무겁습니다." }
        ],
        correct: 0,
        points: 2.5
    },


    {
        text: "[34~36] 다음 대화를 듣고 내용과 관계있는 그림을 고르십시오.",
        num: "34.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-34.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-23-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt21-25-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-35-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[34~36] 다음 대화를 듣고 내용과 관계있는 그림을 고르십시오.",
        num: "35.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-35.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-04.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-35-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b1-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-35-4.webp" },
        ],
        correct: 3,
        points: 2.5
    },
    {
        text: "[34~36] 다음 대화를 듣고 내용과 관계있는 그림을 고르십시오.",
        num: "36.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-36.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-36-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-34-3.webp" }
        ],
        correct: 0,
        points: 2.5
    },


    {
        text: "[37~40] 다음을 듣고 물음에 답하십시오.",
        num: "37. 남자는 무엇을 하려고 합니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-37.mp3",
        options: [
            { text: "은행에서 돈을 찾으려고 합니다." },
            { text: "휴대전화를 수리하려고 합니다." },
            { text: "식당에서 음식을 주문하려고 합니다." },
            { text: "기차표를 취소하려고 합니다." }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[37~40] 다음을 듣고 물음에 답하십시오.",
        num: "38. 여자는 왜 약속 시간을 바꾸려고 합니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-38.mp3",
        options: [
            { text: "친구가 아프기 때문입니다." },
            { text: "교통비가 비싸기 때문입니다." },
            { text: "갑자기 일이 생겼기 때문입니다." },
            { text: "약속 장소를 모르기 때문입니다." }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[37~40] 다음을 듣고 물음에 답하십시오.",
        num: "39. 두 사람은 무엇을 확인하고 있습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-39.mp3",
        options: [
            { text: "물건의 크기와 색깔" },
            { text: "회의 장소와 시간" },
            { text: "버스 요금과 노선" },
            { text: "음식의 종류와 가격" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[37~40] 다음을 듣고 물음에 답하십시오.",
        num: "40. 남자는 여자에게 무엇을 부탁했습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-40.mp3",
        options: [
            { text: "고장 난 컴퓨터를 확인해 달라고 했습니다." },
            { text: "점심 식사를 준비해 달라고 했습니다." },
            { text: "집까지 데려다 달라고 했습니다." },
            { text: "서류를 대신 작성해 달라고 했습니다." }
        ],
        correct: 0,
        points: 2.5
    }

];

