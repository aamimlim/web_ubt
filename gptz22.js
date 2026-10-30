const quizMetadata = [

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-35-2.webp",
        options: [
            { text: "안전모입니다." },
            { text: "안전화입니다." },
            { text: "보안경입니다." },
            { text: "귀마개입니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt04-23-1.webp",
        options: [
            { text: "벽에 페인트를 칠하고 있습니다." },
            { text: "지게차를 운전하고 있습니다." },
            { text: "빗자루로 바닥을 쓸고 있습니다." },
            { text: "상자를 포장하고 있습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt18-27-3.webp",
        options: [
            { text: "구급함입니다." },
            { text: "비상구입니다." },
            { text: "소화기입니다." },
            { text: "환풍기입니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt03-02.webp",
        options: [
            { text: "용접을 하고 있습니다." },
            { text: "못을 박고 있습니다." },
            { text: "나무를 자르고 있습니다." },
            { text: "길이를 재고 있습니다." }
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
            { text: "작업장에서는 안전모를 <u>신어야</u> 합니다." },
            { text: "작업장에서는 안전모를 <u>써야</u> 합니다." },
            { text: "작업장에서는 안전모를 <u>입어야</u> 합니다." },
            { text: "작업장에서는 안전모를 <u>먹어야</u> 합니다." }
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
            { text: "퇴근 후에 친구를 <u>만나서</u> 저녁을 먹었습니다." },
            { text: "퇴근 후에 친구를 <u>만나려고</u> 저녁을 먹었습니다." },
            { text: "퇴근 후에 친구를 <u>만나면</u> 저녁을 먹었습니다." },
            { text: "퇴근 후에 친구를 <u>만나지만</u> 저녁을 먹었습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 점심시간은 몇 시부터 시작합니까?",
        detail: "[식당 이용 안내]\n- 점심시간: 12:00 ~ 13:00\n- 저녁시간: 18:00 ~ 19:00\n※ 식사 후 식판은 퇴식구에 반납해 주세요.",
        image: "",
        options: [
            { text: "오전 11시" },
            { text: "오후 12시" },
            { text: "오후 1시" },
            { text: "오후 6시" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 약은 하루에 몇 번 먹어야 합니까?",
        detail: "[약 봉투 안내]\n- 용법: 1일 3회 (아침, 점심, 저녁)\n- 복용법: 식후 30분\n- 분량: 3일분",
        image: "",
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
        num: "9. 이 표지판은 무슨 뜻입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt18-28-1.webp",
        options: [
            { text: "보안경 착용" },
            { text: "담배를 피우지 마십시오 (금연)" },
            { text: "손을 씻으십시오" },
            { text: "신발을 벗으십시오" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 이 게시판의 내용과 다른 것은 무엇입니까?",
        detail: "[기숙사 청소 안내]\n- 일시: 매주 토요일 오전 10시\n- 내용: 기숙사 방 및 공용 거실 청소\n- 주의사항: 쓰레기는 분리수거하여 지정된 장소에 버려 주세요.",
        image: "",
        options: [
            { text: "매주 토요일에 청소를 합니다." },
            { text: "청소 시간은 오전 10시입니다." },
            { text: "쓰레기는 분리수거해서 버려야 합니다." },
            { text: "평일 저녁마다 청소를 해야 합니다." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "작업할 때 소음이 너무 심하면 귀를 보호하기 위해 ______을/를 써야 합니다.",
        image: "",
        options: [
            { text: "안전화" },
            { text: "귀마개" },
            { text: "앞치마" },
            { text: "장갑" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "기계가 고장 나면 혼자 고치지 말고 먼저 ______에게 알려야 합니다.",
        image: "",
        options: [
            { text: "관리자" },
            { text: "손님" },
            { text: "운전자" },
            { text: "의사" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "월급날이 되어서 은행에 가서 고향으로 돈을 ______.",
        image: "",
        options: [
            { text: "송금했습니다" },
            { text: "빌렸습니다" },
            { text: "청소했습니다" },
            { text: "요리했습니다" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "작업장에 먼지가 많아서 환풍기를 ______ 창문을 열었습니다.",
        image: "",
        options: [
            { text: "끄고" },
            { text: "켜고" },
            { text: "닫고" },
            { text: "버리고" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "퇴근하기 전에 사용했던 공구를 정리하여 공구함에 ______ 합니다.",
        image: "",
        options: [
            { text: "넣어야" },
            { text: "사야" },
            { text: "먹어야" },
            { text: "입어야" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "한국에서 더 일하고 싶으면 비자 만료일 전에 체류 기간 ______을/를 신청해야 합니다.",
        image: "",
        options: [
            { text: "연장" },
            { text: "취소" },
            { text: "고장" },
            { text: "청소" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "17. ",
        detail: "무거운 물건을 올리거나 옮길 때 사용하는 공장용 차량입니다.",
        image: "",
        options: [
            { text: "지게차" },
            { text: "사다리" },
            { text: "망치" },
            { text: "줄자" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        num: "18. ",
        detail: "작업 중 사고를 예방하기 위해 근로자가 지켜야 할 규칙입니다. 안전모 착용, 보호구 착용 등이 있습니다.",
        image: "",
        options: [
            { text: "안전 수칙" },
            { text: "급여 명세서" },
            { text: "휴가 신청서" },
            { text: "기획안" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "19.",
        detail: "민수 씨는 공장에서 일합니다. 매일 아침 8시까지 출근해서 작업복을 입고 안전모를 씁니다. 그리고 작업 전에 기계를 미리 점검합니다.",
        image: "",
        options: [
            { text: "민수 씨는 밤에 일합니다." },
            { text: "민수 씨는 작업 전에 기계를 점검합니다." },
            { text: "민수 씨는 안전모를 쓰지 않습니다." },
            { text: "민수 씨는 아침 9시에 출근합니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "20.",
        detail: "외국인 근로자는 일을 하다가 다쳤을 때 산재보험 치료를 받을 수 있습니다. 치료받는 동안 일을 하지 못해도 일정 수당을 받습니다.",
        image: "",
        options: [
            { text: "외국인 근로자는 치료를 받을 수 없습니다." },
            { text: "다쳐서 쉬는 동안 수당을 받을 수 있습니다." },
            { text: "산재보험은 사장님만 신청할 수 있습니다." },
            { text: "치료비는 본인이 전부 내야 합니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-21.mp3",
        options: [
            { text: "안전모" },
            { text: "안전화" },
            { text: "안전대" },
            { text: "보안경" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "22.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-22.mp3",
        options: [
            { text: "망치로 못을 박고 있습니다." },
            { text: "드라이버로 나사를 조이고 있습니다." },
            { text: "톱으로 나무를 자르고 있습니다." },
            { text: "바닥을 대걸레로 닦고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "23.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-23.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt18-23-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt18-23-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt18-04.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt18-23-3.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-24.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-04.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-36-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt14-04.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-36-3.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-25.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-28-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-28-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-28-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-26-1.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "26.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-26.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-26-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-28-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-27-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-26-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-27.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-27-1.jpg" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-26-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt02-01.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt03-26-3.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-28.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-23-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-34-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt08-27-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt07-23-3.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-29.mp3",
        options: [
            { text: "네, 할 수 있습니다." },
            { text: "아니요, 저녁을 먹었습니다." },
            { text: "네, 공장이 아주 큽니다." },
            { text: "아니요, 버스를 타고 왔습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-30.mp3",
        options: [
            { text: "바로 반장님께 알리세요." },
            { text: "퇴근하고 집에 가세요." },
            { text: "커피를 마시러 가세요." },
            { text: "음악을 들으세요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-31.mp3",
        options: [
            { text: "1년 되었습니다." },
            { text: "비행기로 왔습니다." },
            { text: "친구하고 왔습니다." },
            { text: "한국어가 재미있습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-32.mp3",
        options: [
            { text: "사무실 선반 위에 있습니다." },
            { text: "비가 많이 옵니다." },
            { text: "어제 영화를 봤습니다." },
            { text: "밥을 먹으러 갑니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[33] 이어지는 말을 고르십시오.",
        num: "33.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-33.mp3",
        options: [
            { text: "네, 조심히 가세요!" },
            { text: "아니요, 안 사겠습니다." },
            { text: "네, 맛있게 드세요." },
            { text: "죄송하지만 돈이 없어요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "34.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-34.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-24-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-34-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-34-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-24-2.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-35.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-01.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-35-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-35-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-35-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-36.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-25-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-25-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-25-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-25-1.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "37. 남자는 왜 망치를 찾고 있습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-37.mp3",
        options: [
            { text: "못을 박기 위해서" },
            { text: "바닥을 쓸기 위해서" },
            { text: "박스를 포장하기 위해서" },
            { text: "페인트를 칠하기 위해서" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "38. 여자는 손을 다쳐서 어디로 가려고 합니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-38.mp3",
        options: [
            { text: "휴게실 구급함" },
            { text: "기숙사 방" },
            { text: "자재 창고" },
            { text: "식당" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "39. 여자는 주말에 무엇을 사려고 합니까?",
        detail: "",
        image: "",
       audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-39.mp3",
        options: [
            { text: "세제와 휴지" },
            { text: "옷과 신발" },
            { text: "안전모와 장갑" },
            { text: "과일과 과자" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "40. 두 사람은 무엇에 대해 이야기하고 있습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-40.mp3",
        options: [
            { text: "작업장 청소 및 소독" },
            { text: "신입사원 환영회" },
            { text: "야간 근무 시간 변경" },
            { text: "기숙사 방 배정" }
        ],
        correct: 0,
        points: 2.5
    }

];