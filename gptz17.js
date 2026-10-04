const quizMetadata = [

  
    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-01.webp",
        options: [
            { text: "지게차입니다." },
            { text: "손수레입니다." },
            { text: "크레인입니다." },
            { text: "소화기입니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-02.webp",
        options: [
            { text: "톱으로 나무를 자르고 있습니다." },
            { text: "빗자루로 바닥을 쓸고 있습니다." },
            { text: "드라이버로 나사를 조이고 있습니다." },
            { text: "페인트를 칠하고 있습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-03.webp",
        options: [
            { text: "귀마개입니다." },
            { text: "안전모입니다." },
            { text: "방진마스크입니다." },
            { text: "안전화입니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-04.webp",
        options: [
            { text: "벽에 페인트를 칠하고 있습니다." },
            { text: "사다리를 타고 올라가고 있습니다." },
            { text: "상자를 손수레에 싣고 있습니다." },
            { text: "대걸레로 바닥을 닦고 있습니다." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
        num: "5.",
        detail: "",
        image: "",
        options: [
            { text: "작업장에서는 항상 안전장갑을 <u>신어야</u> 합니다." },
            { text: "작업장에서는 항상 안전장갑을 <u>껴야</u> 합니다." },
            { text: "작업장에서는 항상 안전장갑을 <u>써야</u> 합니다." },
            { text: "작업장에서는 항상 안전장갑을 <u>입어야</u> 합니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
        num: "6.",
        detail: "",
        image: "",
        options: [
            { text: "공구를 사용한 후에는 정해진 위치에 <u>신어야</u> 합니다." },
            { text: "공구를 사용한 후에는 정해진 위치에 <u>마셔야</u> 합니다." },
            { text: "공구를 사용한 후에는 정해진 위치에 <u>입어야</u> 합니다." },
            { text: "공구를 사용한 후에는 정해진 위치에 <u>정리해야</u> 합니다." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 야간 근무 시간은 언제입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-07.webp",
        options: [
            { text: "08:00 ~ 17:00" },
            { text: "12:00 ~ 13:00" },
            { text: "22:00 ~ 06:00" },
            { text: "18:00 ~ 22:00" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 약은 식사 후 몇 분 뒤에 복용해야 합니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-08.webp",
        options: [
            { text: "식후 30분" },
            { text: "식후 10분" },
            { text: "식전 30분" },
            { text: "취침 전" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "9. 이 안전 표지판이 의미하는 것은 무엇입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-09.webp",
        options: [
            { text: "바닥 미끄러움 주의" },
            { text: "낙하물 주의 (위에서 물체가 떨어질 위험)" },
            { text: "고압 전기 경고" },
            { text: "비상구 안내" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 이 안내문의 내용과 일치하지 않는 것은 무엇입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-10.webp",
        options: [
            { text: "안전 교육은 이번 주 금요일에 진행됩니다." },
            { text: "교육 참가비는 10,000원입니다." },
            { text: "모든 생산팀 근로자가 참여해야 합니다." },
            { text: "교육 장소는 2층 대강당입니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "눈을 보호하기 위해 용접이나 절단 작업을 할 때에는 반드시 ______을/를 써야 합니다.",
        image: "",
        options: [
            { text: "안전화" },
            { text: "귀마개" },
            { text: "보안경" },
            { text: "앞치마" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "기계를 정비할 때는 전원 스위치를 끊고 ______ 표지판을 걸어 두어야 사고를 방지할 수 있습니다.",
        image: "",
        options: [
            { text: "사용 가능" },
            { text: "점검 중" },
            { text: "환영합니다" },
            { text: "외출 중" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "급여명세서를 보면 기본급 외에 연장 근로 수당과 ______이/가 포함되어 있습니다.",
        image: "",
        options: [
            { text: "여권 번호" },
            { text: "비상구" },
            { text: "진단서" },
            { text: "야간 근로 수당" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "작업 중에 다쳤을 때는 즉시 작업을 중단하고 관리자에게 ______해야 합니다.",
        image: "",
        options: [
            { text: "청소" },
            { text: "보고" },
            { text: "포장" },
            { text: "운전" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "공장 안에서 안전사고를 예방하려면 정해진 작업 ______을/를 반드시 준수해야 합니다.",
        image: "",
        options: [
            { text: "수칙" },
            { text: "영수증" },
            { text: "메뉴판" },
            { text: "기차표" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "체류 기간이 만료되기 전에 미리 출입국관서에 방문하여 기간 ______을/를 신청해야 합니다.",
        image: "",
        options: [
            { text: "파손" },
            { text: "연장" },
            { text: "폐기" },
            { text: "환불" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "17. ",
        detail: "불이 났을 때 연기를 감지하여 경보음을 울려주는 안전 장치입니다.",
        image: "",
        options: [
            { text: "체중계" },
            { text: "온도계" },
            { text: "화재 감지기" },
            { text: "계산기" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        num: "18. ",
        detail: "회사에서 근로자에게 식사나 숙소, 교통편 등을 제공하거나 이에 필요한 비용을 지원해 주는 복지 제도입니다.",
        image: "",
        options: [
            { text: "연체료" },
            { text: "복리후생" },
            { text: "벌금" },
            { text: "세금 신고" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "19. ",
        detail: "프레스 기계를 다룰 때는 장갑이 기계에 말려 들어갈 위험이 있으므로 목장갑을 끼지 않고 맨손으로 작업하거나 전용 고무장갑을 사용해야 합니다.",
        image: "",
        options: [
            { text: "프레스 기계 작업 시 항상 두꺼운 목장갑을 껴야 합니다." },
            { text: "프레스 작업은 아무나 혼자서 수행할 수 있습니다." },
            { text: "프레스 작업 시 일반 목장갑 착용은 위험합니다." },
            { text: "프레스 기계는 전원을 켜둔 채 청소해야 합니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "20. ",
        detail: "한국의 명절인 추석에는 온 가족이 모여 송편을 만들고 조상님께 차례를 지냅니다.",
        image: "",
        options: [
            { text: "추석은 겨울에 지내는 한국의 축제입니다." },
            { text: "추석에는 떡국을 먹는 것이 전통입니다." },
            { text: "추석에는 가족들이 만나지 않습니다." },
            { text: "추석에는 송편을 만들고 차례를 지냅니다." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-21.mp3",
        options: [
            { text: "안전모" },
            { text: "보안경" },
            { text: "안전대" },
            { text: "귀마개" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "22.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-22.mp3",
        options: [
            { text: "톱으로 나무를 잘라내고 있습니다." },
            { text: "손수레로 상자를 운반하고 있습니다." },
            { text: "드라이버로 나사못을 박고 있습니다." },
            { text: "바닥의 먼지를 쓸어내고 있습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "23.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-23.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-23-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-23-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-23-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-23-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-24.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-24-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-24-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-24-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-24-4.webp" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-25.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-25-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-25-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-25-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-25-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "26.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-26.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-26-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-26-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-26-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-26-4.webp" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-27.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-27-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-27-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-27-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-27-4.webp" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-28.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-28-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-28-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-28-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-28-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-29.mp3",
        options: [
            { text: "아니요, 비가 올 것 같아요." },
            { text: "네, 지갑을 집에 두고 왔어요." },
            { text: "네, 아까 반장님께 제출했어요." },
            { text: "아니요, 버스 표를 예매했어요." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-30.mp3",
        options: [
            { text: "아니요, 어제 점심에 먹었어요." },
            { text: "네, 서랍 두 번째 칸에 방진마스크가 있어요." },
            { text: "네, 운동화를 신어서 편해요." },
            { text: "아니요, 기차가 곧 출발해요." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-31.mp3",
        options: [
            { text: "아니요, 극장에서 영화를 봤어요." },
            { text: "네, 오늘 저녁 메뉴는 삼겹살이에요." },
            { text: "아니요, 내일 일찍 일어날 거예요." },
            { text: "네, 스패너만 넣으면 금방 끝나요." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-32.mp3",
        options: [
            { text: "소화기 사용법을 배우세요." },
            { text: "관리실에 연락하시면 됩니다." },
            { text: "안전화를 꼭 착용하세요." },
            { text: "비행기 표를 환불받으세요." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[33] 이어지는 말을 고르십시오.",
        num: "33.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-33.mp3",
        options: [
            { text: "아니요, 물건을 사지 않았습니다." },
            { text: "네, OO씨도 수고하셨습니다. 조심히 가세요!" },
            { text: "네, 약을 복용하겠습니다." },
            { text: "죄송하지만 전화번호가 없어요." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "34.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-34.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-34-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-34-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-34-4.webp" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-35.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-35-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-35-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-35-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-35-4.webp" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-36.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-36-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-36-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-36-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-36-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "37. 남자는 왜 방진마스크를 쓰려고 합니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-37.mp3",
        options: [
            { text: "날씨가 추워서" },
            { text: "작업 시 먼지가 많이 날려서" },
            { text: "귀가 아파서" },
            { text: "퇴근을 하기 위해서" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "38. 여자는 남자가 다쳤을 때 무엇을 건네주었습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-38.mp3",
        options: [
            { text: "보안경과 안전모" },
            { text: "소화기와 렌치" },
            { text: "작업복과 장갑" },
            { text: "소독약과 반창고" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "39. 남자는 내일 어디에 방문할 예정입니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-39.mp3",
        options: [
            { text: "우체국" },
            { text: "주민센터" },
            { text: "출입국관서" },
            { text: "은행" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "40. 두 사람은 무엇에 대해 이야기하고 있습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-40.mp3",
        options: [
            { text: "퇴근 시 절전 및 화재 예방 수칙" },
            { text: "새로 들어온 신입사원 소개" },
            { text: "기숙사 저녁 식사 메뉴" },
            { text: "주말 동호회 활동" }
        ],
        correct: 0,
        points: 2.5
    }

];