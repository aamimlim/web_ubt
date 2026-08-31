const quizMetadata = [


    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-01.webp",
        options: [
            { text: "온도를 조절하고 있습니다." },
            { text: "창고를 정리하고 있습니다." },
            { text: "제품을 운반하고 있습니다." },
            { text: "서류를 복사하고 있습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-02.webp",
        options: [
            { text: "전통시장에서 물건을 고르고 있습니다." },
            { text: "공장에서 기계를 조립하고 있습니다." },
            { text: "은행에서 통장을 만들고 있습니다." },
            { text: "우체국에서 소포를 찾고 있습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-03.webp",
        options: [
            { text: "휴대전화로 계좌를 확인하고 있습니다." },
            { text: "카드로 버스 요금을 지불하고 있습니다." },
            { text: "현금으로 물건을 구입하고 있습니다." },
            { text: "은행에서 대출 상담을 받고 있습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-04.webp",
        options: [
            { text: "제품의 품질을 검사하고 있습니다." },
            { text: "상품의 가격을 협상하고 있습니다." },
            { text: "화물을 선박에서 내리고 있습니다." },
            { text: "작업복을 세탁하고 있습니다." }
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
            { text: "계약서를 자세히 확인한<u> 뒤에</u> 서명했습니다." },
            { text: "시간이 없<u>으니까서</u> 택시를 탔습니다." },
            { text: "한국에 온<u> 지를</u> 벌써 2년이 되었습니다." },
            { text: "비가 오<u>더라도도</u> 행사는 진행됩니다." }
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
            { text: "모르는 내용은 반드시 담당자에게 확인<u>하도록 하십시오</u>." },
            { text: "제품이 도착하<u>는데도</u> 창고에 없습니다." },
            { text: "은행에 가<u>기 전에야</u> 필요한 서류를 준비했습니다." },
            { text: "일이 많<u>을수록도</u> 천천히 처리해야 합니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 이 안내문에 따르면 무엇을 해야 합니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-07.webp",
        options: [
            { text: "교통카드를 충전해야 합니다." },
            { text: "여권을 새로 발급받아야 합니다." },
            { text: "은행 계좌를 해지해야 합니다." },
            { text: "기차표를 환불해야 합니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 이 안내문의 내용과 같은 것은 무엇입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-08.webp",
        options: [
            { text: "공휴일에는 업무 시간이 변경될 수 있습니다." },
            { text: "공휴일에는 모든 상점이 문을 닫습니다." },
            { text: "공휴일에는 대중교통을 이용할 수 없습니다." },
            { text: "공휴일에는 회사가 반드시 정상 근무합니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "9. 이 광고에서 강조하는 것은 무엇입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-09.webp",
        options: [
            { text: "온라인 사전 예매 할인" },
            { text: "무료 식사 제공" },
            { text: "교통비 지원" },
            { text: "숙박비 할인" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 이 서류와 관련된 업무는 무엇입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-10.webp",
        options: [
            { text: "통관 신고" },
            { text: "근무 신청" },
            { text: "휴가 신청" },
            { text: "병원 예약" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "계약 내용을 충분히 이해하지 못했으면 서명하기 전에 담당자에게 ______.",
        image: "",
        options: [
            { text: "확인하는 것이 좋습니다" },
            { text: "확인할 수 없습니다" },
            { text: "확인한 적이 없습니다" },
            { text: "확인하지 않기로 했습니다" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "해외에서 물건을 주문할 때에는 배송비와 관세가 추가로 ______.",
        image: "",
        options: [
            { text: "부과될 수 있습니다" },
            { text: "부과하지 않습니다" },
            { text: "부과하고 있습니다" },
            { text: "부과한 적이 없습니다" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "한국에서는 추석에 가족들이 모여 조상에게 ______ 차례를 지내기도 합니다.",
        image: "",
        options: [
            { text: "예를 갖추어" },
            { text: "급하게" },
            { text: "조용하지 않게" },
            { text: "서둘러서만" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "제품에 문제가 발견되면 출고하기 ______ 다시 품질을 확인해야 합니다.",
        image: "",
        options: [
            { text: "전에" },
            { text: "때문에" },
            { text: "대신에" },
            { text: "동안에만" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "공연이 시작되기 ______ 휴대전화의 전원을 꺼 주십시오.",
        image: "",
        options: [
            { text: "직전에" },
            { text: "때문에" },
            { text: "대신에" },
            { text: "덕분에" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "물건의 수량이 주문서와 다르다면 담당자에게 즉시 ______.",
        image: "",
        options: [
            { text: "알려야 합니다" },
            { text: "알고 있습니다" },
            { text: "알게 됩니다" },
            { text: "알아본 적입니다" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "17.",
        detail: "외국에서 들어온 물건이 정해진 절차를 거쳐 국내에서 판매되거나 사용될 수 있도록 하는 과정입니다.",
        image: "",
        options: [
            { text: "통관" },
            { text: "환불" },
            { text: "예약" },
            { text: "보관" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "18. 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "18.",
        detail: "은행이나 금융기관에서 돈을 빌린 후 일정한 기간 동안 나누어 갚는 것입니다.",
        image: "",
        options: [
            { text: "대출" },
            { text: "입금" },
            { text: "환전" },
            { text: "송금" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "19.",
        detail: "한국에서는 결혼식이나 장례식 등 중요한 일이 있을 때 가까운 사람에게 마음을 전하기 위해 돈을 전달하는 경우가 있습니다. 이런 돈을 상황에 따라 축의금이나 조의금이라고 합니다.",
        image: "",
        options: [
            { text: "중요한 일이 있을 때 돈을 전달하는 문화가 있습니다." },
            { text: "축의금은 장례식에서만 사용합니다." },
            { text: "조의금은 결혼식에서만 전달합니다." },
            { text: "한국에서는 이런 방식으로 마음을 표현하지 않습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "20.",
        detail: "최근에는 스마트폰을 이용해 은행 업무를 처리하는 사람이 많아졌습니다. 계좌 잔액을 확인하거나 다른 사람에게 돈을 보내는 일뿐만 아니라 공과금을 납부하는 것도 가능합니다. 다만 중요한 금융 업무를 할 때에는 추가적인 본인 확인 절차가 필요할 수 있습니다.",
        image: "",
        options: [
            { text: "스마트폰으로 여러 가지 은행 업무를 처리할 수 있습니다." },
            { text: "스마트폰으로는 계좌 잔액을 확인할 수 없습니다." },
            { text: "모바일 금융 서비스에서는 본인 확인이 필요하지 않습니다." },
            { text: "공과금은 반드시 은행 창구에서만 납부해야 합니다." }
        ],
        correct: 0,
        points: 2.5
    },


    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-21.mp3",
        options: [
            { text: "송금" },
            { text: "소금" },
            { text: "세금" },
            { text: "수금" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "22.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-22.mp3",
        options: [
            { text: "납부하다" },
            { text: "납품하다" },
            { text: "남부하다" },
            { text: "납입하다" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "23.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-23.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-23-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-23-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-23-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-23-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-24.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-24-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-24-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-24-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-24-4.webp" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-25.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-25-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-25-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-25-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-25-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "26.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-26.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-26-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-26-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-26-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-26-4.webp" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-27.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-27-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-27-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-27-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-27-4.webp" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-28.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-28-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-28-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-28-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-28-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-29.mp3",
        options: [
            { text: "네, 신분증을 가지고 왔습니다." },
            { text: "네, 어제 송금했습니다." },
            { text: "오후 세 시에 끝납니다." },
            { text: "은행은 회사 근처에 있습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-30.mp3",
        options: [
            { text: "네, 수량을 다시 확인해 보겠습니다." },
            { text: "네, 어제 제품을 받았습니다." },
            { text: "창고는 건물 뒤에 있습니다." },
            { text: "다음 달에 출장을 갑니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-31.mp3",
        options: [
            { text: "네, 미리 예매하는 게 좋겠습니다." },
            { text: "아니요, 어제 집에서 쉬었습니다." },
            { text: "오전에는 기계를 점검했습니다." },
            { text: "영화관은 지하철역 옆에 있습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-32.mp3",
        options: [
            { text: "네, 담당자에게 확인해 보겠습니다." },
            { text: "네, 어제 김치찌개를 먹었습니다." },
            { text: "오후 6시에 퇴근합니다." },
            { text: "한국에서 왔습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[33] 이어지는 말을 고르십시오.",
        num: "33.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-33.mp3",
        options: [
            { text: "그럼 먼저 담당자에게 확인해 보는 게 좋겠습니다." },
            { text: "네, 지난 주말에 영화를 봤습니다." },
            { text: "오전에는 날씨가 흐렸습니다." },
            { text: "저는 회사에서 점심을 먹었습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "34.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-34.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-34-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-34-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-34-4.webp" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-35.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-35-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-35-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-35-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-35-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-36.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-36-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-36-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-36-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-36-4.webp" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "37~40 짧은 대화를 듣고 알맞은 답을 고르십시오.",
        num: "37. 여자는 무엇을 하려고 합니까?",
        image: "", 
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-37.mp3",
        options: [
            { text: "환전하려고 합니다." },
            { text: "송금하려고 합니다." },
            { text: "대출받으려고 합니다." },
            { text: "카드를 재발급받으려고 합니다." }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "37~40 짧은 대화를 듣고 알맞은 답을 고르십시오.",
        num: "38. 남자는 왜 출근 시간이 늦어졌습니까?",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-38.mp3",
        options: [
            { text: "버스가 늦게 와서" },
            { text: "비가 많이 와서" },
            { text: "차량이 고장 나서" },
            { text: "길을 잘못 찾아서" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "37~40 짧은 대화를 듣고 알맞은 답을 고르십시오.",
        num: "39. 여자는 무엇을 예약했습니까?",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-39.mp3",
        options: [
            { text: "기차표" },
            { text: "병원 진료" },
            { text: "영화표" },
            { text: "호텔 방" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "37~40 짧은 대화를 듣고 알맞은 답을 고르십시오.",
        num: "40. 두 사람은 무엇에 대해 이야기하고 있습니까?",
        image: "", 
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt06-40.mp3",
        options: [
            { text: "한국 음식" },
            { text: "전통 명절" },
            { text: "공연 일정" },
            { text: "작업 일정" }
        ],
        correct: 3,
        points: 2.5
    }

];