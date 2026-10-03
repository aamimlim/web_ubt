const quizMetadata = [

   
    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-01.webp",
        options: [
            { text: "스패너입니다." },
            { text: "줄자입니다." },
            { text: "사다리입니다." },
            { text: "소화기입니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-02.webp",
        options: [
            { text: "못을 박고 있습니다." },
            { text: "바닥을 쓸고 있습니다." },
            { text: "용접을 하고 있습니다." },
            { text: "박스를 옮기고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-03.webp",
        options: [
            { text: "안전대입니다." },
            { text: "귀마개입니다." },
            { text: "보안경입니다." },
            { text: "안전화입니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-04.webp",
        options: [
            { text: "철재를 용접하고 있습니다." },
            { text: "페인트를 칠하고 있습니다." },
            { text: "나무를 자르고 있습니다." },
            { text: "유리를 닦고 있습니다." }
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
            { text: "작업할 때는 안전화를 <u>신어야</u> 합니다." },
            { text: "작업할 때는 안전화를 <u>입어야</u> 합니다." },
            { text: "작업할 때는 안전화를 <u>써야</u> 합니다." },
            { text: "작업할 때는 안전화를 <u>매야</u> 합니다." }
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
            { text: "손에 상처가 나서 밴드를 <u>붙였습니다</u>." },
            { text: "손에 상처가 나서 밴드를 <u>신었습니다</u>." },
            { text: "손에 상처가 나서 밴드를 <u>입었습니다</u>." },
            { text: "손에 상처가 나서 밴드를 <u>탔습니다</u>." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 쉬는 시간(브레이크 타임)은 몇 시부터 시작합니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-07.webp",
        options: [
            { text: "오전 10:00" },
            { text: "오후 12:00" },
            { text: "오후 15:00" },
            { text: "오후 18:00" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 총 구매 금액은 얼마입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-08.webp",
        options: [
            { text: "25,000원" },
            { text: "30,000원" },
            { text: "35,000원" },
            { text: "40,000원" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "9. 이 표지판은 무슨 뜻입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-09.webp",
        options: [
            { text: "화기 엄금(금연/라이터 금지)" },
            { text: "보안경 착용" },
            { text: "손잡이 주의" },
            { text: "소화기 보관" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 이 안내문의 내용과 다른 것은 무엇입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-10.webp",
        options: [
            { text: "기숙사 외부인 출입 금지 안내입니다." },
            { text: "밤 11시 이후에는 대문이 잠깁니다." },
            { text: "친구나 가족을 동반해 입실할 수 있습니다." },
            { text: "비상시 관리실로 연락해야 합니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "소음이 심한 작업장에서는 귀를 보호하기 위해 반드시 ______을/를 착용해야 합니다.",
        image: "",
        options: [
            { text: "귀마개" },
            { text: "안전화" },
            { text: "앞치마" },
            { text: "슬리퍼" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "작업장 통로에 물건이 흩어져 있으면 넘어질 위험이 있으니 항상 통로를 깔끔하게 ______해야 합니다.",
        image: "",
        options: [
            { text: "정리" },
            { text: "연장" },
            { text: "신청" },
            { text: "취소" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "병원 치료 후 약국에 가서 ______을/를 제출하면 약을 받을 수 있습니다.",
        image: "",
        options: [
            { text: "처방전" },
            { text: "출근부" },
            { text: "여권" },
            { text: "통장" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "기계가 유해 가스를 배출하므로 작업 전 환풍기를 ______ 창문을 엽니다.",
        image: "",
        options: [
            { text: "작동시키고" },
            { text: "잠그고" },
            { text: "덮고" },
            { text: "자르고" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "작업 중 손가락을 베였을 때 구급함에서 ______을/를 꺼내 상처 부위에 붙였습니다.",
        image: "",
        options: [
            { text: "반창고" },
            { text: "드라이버" },
            { text: "소화기" },
            { text: "환풍기" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "체류 자격을 변경하거나 연장할 때는 본인의 ______와 비자 관련 서류가 필요합니다.",
        image: "",
        options: [
            { text: "외국인등록증" },
            { text: "급여명세서" },
            { text: "안전모" },
            { text: "메모지" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "17. ",
        detail: "나무나 금속을 자를 때 사용하는 날카로운 톱날이 달린 도구입니다.",
        image: "",
        options: [
            { text: "톱" },
            { text: "망치" },
            { text: "줄자" },
            { text: "바늘" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        num: "18. ",
        detail: "일한 시간에 따라 계산되어 매월 지정된 날짜에 통장으로 입금되는 돈입니다.",
        image: "",
        options: [
            { text: "월급" },
            { text: "보험료" },
            { text: "세금" },
            { text: "벌금" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "19. ",
        detail: "무거운 물건을 올릴 때는 허리만 구부리지 말고 무릎을 굽혔다가 펼치면서 힘을 주어야 허리 부상을 예방할 수 있습니다.",
        image: "",
        options: [
            { text: "무릎을 굽혀서 물건을 들어 올려야 합니다." },
            { text: "허리만 구부려 물건을 들어 올리는 것이 좋습니다." },
            { text: "무거운 물건은 혼자서만 들어야 합니다." },
            { text: "허리 부상은 물리치료로만 예방할 수 있습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "20. ",
        detail: "직장을 변경하고자 할 때는 이전 사업장의 사업주로부터 이직확인서나 계약해지 통보서를 받아야 합니다.",
        image: "",
        options: [
            { text: "이직 시 관련 확인 서류가 필요합니다." },
            { text: "사업주 승인 없이 언제든 자유롭게 직장을 바꿉니다." },
            { text: "계약해지 통보서는 서류로 제출하지 않습니다." },
            { text: "직장 변경은 출입국에 신고하지 않아도 됩니다." }
        ],
        correct: 0,
        points: 2.5
    },


    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-21.mp3",
        options: [
            { text: "안전모" },
            { text: "안전대" },
            { text: "안전화" },
            { text: "보안경" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "22.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-22.mp3",
        options: [
            { text: "망치로 못을 박고 있습니다." },
            { text: "페인트 붓으로 벽에 페인트를 칠하고 있습니다." },
            { text: "손수레에 상자를 실르고 있습니다." },
            { text: "사다리를 오르고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "23.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-23.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-23-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-23-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-23-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-23-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-24.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-24-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-24-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-24-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-24-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-25.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-25-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-25-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-25-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-25-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "26.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-26.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-26-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-26-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-26-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-26-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-27.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-27-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-27-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-27-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-27-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-28.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-28-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-28-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-28-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-28-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-29.mp3",
        options: [
            { text: "네, 특별한 일 없어서 할 수 있습니다." },
            { text: "아니요, 버스를 탔습니다." },
            { text: "네, 음식이 맛있습니다." },
            { text: "아니요, 어제 출근했습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-30.mp3",
        options: [
            { text: "사무실 입구 캐비닛에 있어요." },
            { text: "네, 날씨가 무척 따뜻해요." },
            { text: "아니요, 식사를 마쳤습니다." },
            { text: "네, 비행기를 탈 예정입니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-31.mp3",
        options: [
            { text: "좋아요. 회사 앞 식당으로 가요." },
            { text: "아니요, 어제 약을 먹었어요." },
            { text: "네, 기계 수리가 끝났어요." },
            { text: "아니요, 옷을 정돈했습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-32.mp3",
        options: [
            { text: "네, 오늘 아침 출입국에 다녀왔어요." },
            { text: "아니요, 사다리를 가져왔어요." },
            { text: "네, 지게차를 운전했어요." },
            { text: "아니요, 우산을 잃어버렸어요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[33] 이어지는 말을 고르십시오.",
        num: "33.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-33.mp3",
        options: [
            { text: "네, 주말 잘 보내세요!" },
            { text: "죄송하지만 지갑이 없어요." },
            { text: "아니요, 안 가겠습니다." },
            { text: "네, 맛있게 드세요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "34.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-34.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-34-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-34-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-34-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-35.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-35-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-35-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-35-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-35-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-36.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-36-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-36-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-36-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-36-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "37. 남자는 어디에서 스패너를 가져올 예정입니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-37.mp3",
        options: [
            { text: "공구함 두 번째 서랍" },
            { text: "자재 창고 입구 탁자" },
            { text: "사무실 책상 위" },
            { text: "휴게실 의자 밑" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "38. 남자는 왜 휴게실에 가려고 합니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-38.mp3",
        options: [
            { text: "구급함에서 반창고를 찾기 위해" },
            { text: "커피를 마시기 위해" },
            { text: "청소를 하기 위해" },
            { text: "퇴근 준비를 하기 위해" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "39. 여자는 주말에 무엇을 사러 갈 예정입니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-39.mp3",
        options: [
            { text: "주방 세제와 샴푸" },
            { text: "안전모와 안전화" },
            { text: "작업복과 장갑" },
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
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-40.mp3",
        options: [
            { text: "소방안전 교육 일정" },
            { text: "신입사원 환영회" },
            { text: "기숙사 방 배정" },
            { text: "연차 휴가 신청" }
        ],
        correct: 0,
        points: 2.5
    }

];