const quizMetadata = [

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-01.webp",
        options: [
            { text: "안전화입니다." },
            { text: "안전모입니다." },
            { text: "보안경입니다." },
            { text: "귀마개입니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-02.webp",
        options: [
            { text: "페인트칠을 하고 있습니다." },
            { text: "용접을 하고 있습니다." },
            { text: "물건을 운반하고 있습니다." },
            { text: "상자를 포장하고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-03.webp",
        options: [
            { text: "구급함입니다." },
            { text: "소화기입니다." },
            { text: "비상구입니다." },
            { text: "쓰레기통입니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-04.webp",
        options: [
            { text: "식사를 하고 있습니다." },
            { text: "손을 씻고 있습니다." },
            { text: "청소를 하고 있습니다." },
            { text: "전화를 하고 있습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
        num: "5.",
        detail: "",
        image: "",
        options: [
            { text: "공장에<u>서</u> 일합니다." },
            { text: "공장<u>을</u> 갑니다." },
            { text: "공장<u>에서</u> 큽니다." },
            { text: "공장<u>과</u> 보았습니다." }
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
            { text: "날씨<u>가</u> 따뜻합니다." },
            { text: "날씨<u>를</u> 좋습니다." },
            { text: "날씨<u>에서</u> 춥습니다." },
            { text: "날씨<u>하고</u> 비가 옵니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 식당은 몇 시에 저녁 영업을 시작합니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-07.webp",
        options: [
            { text: "오전 11시" },
            { text: "오후 2시" },
            { text: "오후 5시" },
            { text: "오후 9시" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 무슨 안내문입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-08.webp",
        options: [
            { text: "안전 교육 안내" },
            { text: "회식 일정 안내" },
            { text: "휴가 신청 안내" },
            { text: "월급 지급 안내" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "9. 이 약은 하루에 몇 번 먹어야 합니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-09.webp",
        options: [
            { text: "한 번" },
            { text: "두 번" },
            { text: "세 번" },
            { text: "네 번" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 이용할 수 없는 행동은 무엇입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-10.webp",
        options: [
            { text: "방 청소하기" },
            { text: "기숙사 안에서 담배 피우기" },
            { text: "세탁기 사용하기" },
            { text: "밤 10시 이후 조용히 하기" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "작업이 끝난 후에는 반드시 기계의 전원을 ______.",
        image: "",
        options: [
            { text: "끄셔야 합니다" },
            { text: "켜야 합니다" },
            { text: "닦아야 합니다" },
            { text: "고쳐야 합니다" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "소음을 막기 위해 작업장에서는 ______을/를 착용하십시오.",
        image: "",
        options: [
            { text: "안전화" },
            { text: "귀마개" },
            { text: "마스크" },
            { text: "안전대" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "월급날이 되면 은행에 가서 고향으로 돈을 ______.",
        image: "",
        options: [
            { text: "송금합니다" },
            { text: "빌립니다" },
            { text: "계산합니다" },
            { text: "환전합니다" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "손가락을 베였을 때는 상처에 연고를 바르고 ______을/를 붙입니다.",
        image: "",
        options: [
            { text: "밴드" },
            { text: "파스" },
            { text: "안약" },
            { text: "비타민" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "오늘 밤에 연장 근로를 할 수 있냐는 반장님의 질문에 \"네, ______.\"라고 답했습니다.",
        image: "",
        options: [
            { text: "가능합니다" },
            { text: "불편합니다" },
            { text: "복잡합니다" },
            { text: "위험합니다" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "한국의 겨울은 날씨가 매우 ______ 패딩이나 두꺼운 옷을 입어야 합니다.",
        image: "",
        options: [
            { text: "추워서" },
            { text: "더워서" },
            { text: "맑아서" },
            { text: "시원해서" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "17.",
        detail: "물건을 묶거나 고정할 때 사용하는 끈 모양의 도구입니다.",
        image: "",
        options: [
            { text: "밧줄(로프)" },
            { text: "스패너" },
            { text: "줄자" },
            { text: "사다리" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        num: "18.",
        detail: "작업을 시작하기 전에는 손전등과 비상벨이 잘 작동하는지 확인해야 합니다. 정전이나 화재 시 신속하게 대피하기 위함입니다.",
        image: "",
        options: [
            { text: "비상시 점검 사항" },
            { text: "근무 시간 변경" },
            { text: "제품 포장 방법" },
            { text: "직원 채용 조건" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "19.",
        detail: "한국에서는 어른과 식사할 때 어른이 먼저 수저를 든 후에 식사를 시작해야 합니다.",
        image: "",
        options: [
            { text: "어른보다 먼저 식사를 시작해야 합니다." },
            { text: "어른이 먼저 수저를 든 후 식사합니다." },
            { text: "식사 중에는 수저를 사용할 수 없습니다." },
            { text: "어른과의 식사는 금지되어 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "20.",
        detail: "외국인 근로자가 체류 기간을 연장하려면 만료일 전에 출입국·외국인관서를 방문하여 신청해야 합니다.",
        image: "",
        options: [
            { text: "체류 연장은 대학교에서 신청합니다." },
            { text: "만료일이 지난 후에 신청해야 합니다." },
            { text: "만료일 전에 출입국관서에 신청해야 합니다." },
            { text: "외국인 근로자는 체류 연장을 할 수 없습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-21.mp3",
        options: [
            { text: "안전모" },
            { text: "보안경" },
            { text: "귀마개" },
            { text: "마스크" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "22.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-22.mp3",
        options: [
            { text: "못을 박고 있습니다." },
            { text: "스패너로 볼트를 조이고 있습니다." },
            { text: "톱으로 나무를 자르고 있습니다." },
            { text: "줄자로 길이를 재고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "23.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-23.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-23-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-23-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-23-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-23-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-24.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-24-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-24-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-24-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-24-4.webp" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-25.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-25-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-25-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-25-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-25-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "26.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-26.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-26-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-26-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-26-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-26-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-27.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-27-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-27-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-27-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-27-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-28.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-28-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-28-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-28-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-28-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-29.mp3",
        options: [
            { text: "네, 필요한 도구를 다 챙겼습니다." },
            { text: "아니요, 내일 출근하겠습니다." },
            { text: "네, 공장이 아주 큽니다." },
            { text: "아니요, 저녁을 맛있게 먹었습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-30.mp3",
        options: [
            { text: "즉시 작동을 멈추고 반장님께 알리세요." },
            { text: "기계를 더 빠르게 돌리세요." },
            { text: "퇴근하고 집에 가세요." },
            { text: "청소기를 가져오세요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-31.mp3",
        options: [
            { text: "1년쯤 되었습니다." },
            { text: "비행기로 왔습니다." },
            { text: "친구와 같이 왔습니다." },
            { text: "한국어를 배웁니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-32.mp3",
        options: [
            { text: "특별한 일 없으면 기숙사에서 쉬려고 해요." },
            { text: "지난주에 영화를 봤어요." },
            { text: "월요일 아침 9시입니다." },
            { text: "버스를 타고 갈 거예요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[33] 이어지는 말을 고르십시오.",
        num: "33.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-33.mp3",
        options: [
            { text: "수고하셨습니다. 조심히 가세요." },
            { text: "처음 뵙겠습니다." },
            { text: "죄송합니다. 다음부터 주의하겠습니다." },
            { text: "괜찮습니다. 다치지 않았습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "34.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-34.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-34-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-34-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-34-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-35.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-35-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-35-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-35-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-35-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-36.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-36-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-36-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-36-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-36-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "37~40 긴 대화를 듣고 답하십시오.",
        num: "37. 여자는 펜치를 어디에서 찾을 수 있습니까?",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-37.mp3",
        options: [
            { text: "공구함 안" },
            { text: "자재 창고 입구 탁자 위" },
            { text: "휴게실 의자 밑" },
            { text: "사무실 책상 서랍" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "37~40 긴 대화를 듣고 답하십시오.",
        num: "38. 남자는 왜 구급함을 찾고 있습니까?",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-38.mp3",
        options: [
            { text: "손가락을 다쳐서" },
            { text: "배가 아파서" },
            { text: "발목을 접질려서" },
            { text: "기계가 고장 나서" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "37~40 긴 대화를 듣고 답하십시오.",
        num: "39. 남자는 마트에서 무엇을 살 예정입니까?",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-39.mp3",
        options: [
            { text: "안전화와 장갑" },
            { text: "옷과 신발" },
            { text: "세제와 휴지" },
            { text: "과일과 과자" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "37~40 긴 대화를 듣고 답하십시오.",
        num: "40. 두 사람은 무엇에 대해 이야기하고 있습니까?",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-40.mp3",
        options: [
            { text: "작업장 전체 소독" },
            { text: "신입 사원 환영회" },
            { text: "야간 근무 조율" },
            { text: "안전 장비 교체" }
        ],
        correct: 0,
        points: 2.5
    }

];