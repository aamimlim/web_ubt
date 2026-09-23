const quizMetadata = [

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-01.webp",
        options: [
            { text: "줄자입니다." },
            { text: "스패너입니다." },
            { text: "손수레입니다." },
            { text: "망치입니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-02.webp",
        options: [
            { text: "나무를 자르고 있습니다." },
            { text: "박스를 포장하고 있습니다." },
            { text: "페인트칠을 하고 있습니다." },
            { text: "용접을 하고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-03.webp",
        options: [
            { text: "안전모입니다." },
            { text: "보안경입니다." },
            { text: "귀마개입니다." },
            { text: "마스크입니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-04.webp",
        options: [
            { text: "벽에 페인트를 칠하고 있습니다." },
            { text: "바닥을 쓸고 있습니다." },
            { text: "기계를 고치고 있습니다." },
            { text: "물건을 쌓고 있습니다." }
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
            { text: "버스를 <u>타고</u> 회사에 갑니다." },
            { text: "버스를 <u>입고</u> 회사에 갑니다." },
            { text: "버스를 <u>신고</u> 회사에 갑니다." },
            { text: "버스를 <u>쓰고</u> 회사에 갑니다." }
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
            { text: "밥을 <u>먹기 전에</u> 손을 씻습니다." },
            { text: "밥을 <u>먹어서</u> 손을 씻습니다." },
            { text: "밥을 <u>먹으면</u> 손을 씻었습니다." },
            { text: "밥을 <u>먹으러</u> 손을 씻습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 야간 근무는 몇 시부터 시작합니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-07.webp",
        options: [
            { text: "오전 8시" },
            { text: "오후 1시" },
            { text: "오후 6시" },
            { text: "오후 10시" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 손님이 지불해야 하는 금액은 얼마입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-08.webp",
        options: [
            { text: "12,000원" },
            { text: "15,000원" },
            { text: "18,000원" },
            { text: "20,000원" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "9. 이 표지판은 무슨 뜻입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-09.webp",
        options: [
            { text: "미끄러짐 주의" },
            { text: "감전 위험 주의" },
            { text: "낙하물 위험 주의" },
            { text: "고온 경고" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 이 게시판의 내용과 다른 것은 무엇입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-10.webp",
        options: [
            { text: "추석 연휴 동안 휴무입니다." },
            { text: "월요일부터 정상 근무합니다." },
            { text: "연휴 기간에는 공장이 가동됩니다." },
            { text: "비상 연락처가 적혀 있습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "용접 작업을 할 때는 강한 불꽃이 튀므로 반드시 ______을/를 착용해야 눈을 보호할 수 있습니다.",
        image: "",
        options: [
            { text: "보안경" },
            { text: "귀마개" },
            { text: "안전대" },
            { text: "방진마스크" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "작업장에 낙하물이 떨어질 위험이 있으니 머리를 보호하기 위해 ______을/를 쓰세요.",
        image: "",
        options: [
            { text: "안전화" },
            { text: "안전모" },
            { text: "장갑" },
            { text: "앞치마" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "일하다가 다쳐서 병원 치료를 받는 경우, 산재 보험을 통해 ______을/를 신청할 수 있습니다.",
        image: "",
        options: [
            { text: "보상금" },
            { text: "비자" },
            { text: "여권" },
            { text: "계약서" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "작업장의 페인트 냄새가 너무 심해서 환풍기를 ______ 창문을 모두 열었습니다.",
        image: "",
        options: [
            { text: "틀고" },
            { text: "끄고" },
            { text: "닫고" },
            { text: "버리고" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "내일은 회사 창립기념일이라서 출근을 ______ 됩니다.",
        image: "",
        options: [
            { text: "안 해도" },
            { text: "해야만" },
            { text: "하지 못하면" },
            { text: "하도록" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "소방훈련 시간에는 비상구의 위치를 확인하고 소화기 ______ 법을 배웁니다.",
        image: "",
        options: [
            { text: "사용하는" },
            { text: "요리하는" },
            { text: "운전하는" },
            { text: "신청하는" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "17. 높은 곳에 올라가서 작업할 때 발을 밟고 오르내릴 수 있도록 만든 도구입니다.",
        detail: "",
        image: "",
        options: [
            { text: "사다리" },
            { text: "대패" },
            { text: "송곳" },
            { text: "줄자" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        num: "18. 매월 25일에 지급되는 급여 내역에는 기본급, 연장근로수당, 세금 감면액 등이 상세히 적혀 있습니다.",
        detail: "",
        image: "",
        options: [
            { text: "급여 명세서" },
            { text: "안전 수칙" },
            { text: "출근부" },
            { text: "휴가 신청서" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "19. 작업 중 안전사고를 예방하려면 작업 전 점검과 개인 보호구 착용이 가장 중요합니다.",
        detail: "",
        image: "",
        options: [
            { text: "작업 중에는 보호구를 벗어야 합니다." },
            { text: "작업 시작 전 점검을 실시해야 합니다." },
            { text: "안전 점검은 사고 예방과 상관없습니다." },
            { text: "보호구는 사고가 난 후에 착용합니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "20. 체류 기간 연장을 신청할 때는 표준근로계약서와 사업자등록증 사본 등의 서류를 제출해야 합니다.",
        detail: "",
        image: "",
        options: [
            { text: "체류 연장 시 아무 서류도 필요 없습니다." },
            { text: "표준근로계약서 제출이 필요합니다." },
            { text: "사업자등록증은 절대 내면 안 됩니다." },
            { text: "체류 연장은 자동으로 이루어집니다." }
        ],
        correct: 1,
        points: 2.5
    },


    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-21.mp3",
        options: [
            { text: "비상구" },
            { text: "소화기" },
            { text: "구급함" },
            { text: "환풍기" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "22.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-22.mp3",
        options: [
            { text: "망치로 못을 박고 있습니다." },
            { text: "드라이버로 나사를 조이고 있습니다." },
            { text: "톱으로 목재를 자르고 있습니다." },
            { text: "스패너로 볼트를 푸르고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "23.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-23.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-23-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-23-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-23-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-23-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-24.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-24-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-24-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-24-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-24-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-25.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-25-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-25-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-25-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-25-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "26.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-26.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-26-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-26-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-26-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-26-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-27.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-27-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-27-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-27-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-27-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-28.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-28-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-28-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-28-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-28-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-29.mp3",
        options: [
            { text: "네, 스위치를 누르면 작동해요. 보여드릴게요." },
            { text: "아니요, 저녁을 먹으러 가요." },
            { text: "네, 기계가 아주 작아요." },
            { text: "아니요, 내일 퇴근할 거예요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-30.mp3",
        options: [
            { text: "죄송해요. 오늘은 병원 예약이 있어서 어려워요." },
            { text: "네, 어제 야근을 했습니다." },
            { text: "아니요, 버스를 타고 왔습니다." },
            { text: "네, 저녁 식사는 맛있었습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-31.mp3",
        options: [
            { text: "네, 마스크도 착용하고 환풍기를 켜 주세요." },
            { text: "아니요, 어제 출근했습니다." },
            { text: "네, 날씨가 아주 따뜻해요." },
            { text: "아니요, 공장이 닫혀 있어요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-32.mp3",
        options: [
            { text: "관할 출입국·외국인관서에서 하시면 됩니다." },
            { text: "우체국에 가서 편지를 보내세요." },
            { text: "편의점에서 신용카드로 만드세요." },
            { text: "지하철역에서 표를 구매하세요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[33] 이어지는 말을 고르십시오.",
        num: "33.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-33.mp3",
        options: [
            { text: "정말 고마워요. 잘 쓸게요!" },
            { text: "죄송합니다. 늦었습니다." },
            { text: "아니요, 안 가겠습니다." },
            { text: "네, 어제 만났습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "34.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-34.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-34-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-34-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-34-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-35.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-35-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-35-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-35-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-35-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-36.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-36-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-36-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-36-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-36-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "37. 남자는 왜 망치를 찾고 있습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-37.mp3",
        options: [
            { text: "못을 박기 위해서" },
            { text: "청소를 하기 위해서" },
            { text: "페인트를 칠하기 위해서" },
            { text: "길이를 재기 위해서" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "38. 두 사람은 이번 주말에 무엇을 하기로 했습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-38.mp3",
        options: [
            { text: "등산하기" },
            { text: "영화 보기" },
            { text: "쇼핑하기" },
            { text: "공장에서 일하기" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "39. 여자는 어디에 방문해야 합니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-39.mp3",
        options: [
            { text: "은행" },
            { text: "출입국·외국인관서" },
            { text: "우체국" },
            { text: "경찰서" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "40. 두 사람은 무엇에 대해 이야기하고 있습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-40.mp3",
        options: [
            { text: "월급 명세서 확인" },
            { text: "기숙사 청소 규칙" },
            { text: "외국인 등록증 발급" },
            { text: "안전 장구 구매" }
        ],
        correct: 0,
        points: 2.5
    }

];