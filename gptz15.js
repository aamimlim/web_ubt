const quizMetadata = [

    
    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-01.webp",
        options: [
            { text: "사다리입니다." },
            { text: "지게차입니다." },
            { text: "소화기입니다." },
            { text: "절단기입니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-02.webp",
        options: [
            { text: "못을 박고 있습니다." },
            { text: "톱으로 목재를 자르고 있습니다." },
            { text: "바닥을 쓸고 있습니다." },
            { text: "차를 운전하고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-03.webp",
        options: [
            { text: "방진마스크입니다." },
            { text: "안전대입니다." },
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
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-04.webp",
        options: [
            { text: "상자를 차곡차곡 쌓고 있습니다." },
            { text: "벽지 도배를 하고 있습니다." },
            { text: "용접 불꽃을 튀기고 있습니다." },
            { text: "기계를 수리하고 있습니다." }
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
            { text: "작업할 때는 안전모를 <u>써야</u> 합니다." },
            { text: "작업할 때는 안전모를 <u>신어야</u> 합니다." },
            { text: "작업할 때는 안전모를 <u>입어야</u> 합니다." },
            { text: "작업할 때는 안전모를 <u>먹어야</u> 합니다." }
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
            { text: "날씨가 추워서 외투를 <u>입었습니다</u>." },
            { text: "날씨가 추워서 외투를 <u>탔습니다</u>." },
            { text: "날씨가 추워서 외투를 <u>신었습니다</u>." },
            { text: "날씨가 추워서 외투를 <u>켰습니다</u>." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 점심시간은 언제부터 언제까지입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-07.webp",
        options: [
            { text: "11:00 ~ 12:00" },
            { text: "12:00 ~ 13:00" },
            { text: "13:00 ~ 14:00" },
            { text: "17:00 ~ 18:00" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 약은 하루에 몇 번 먹어야 합니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-08.webp",
        options: [
            { text: "하루 1번" },
            { text: "하루 2번" },
            { text: "하루 3번" },
            { text: "하루 4번" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "9. 이 표지판은 무슨 뜻입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-09.webp",
        options: [
            { text: "보안경 착용" },
            { text: "바닥 미끄러움 주의" },
            { text: "낙하물 경고" },
            { text: "화기 엄금" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 이 안내문의 내용과 다른 것은 무엇입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-10.webp",
        options: [
            { text: "근로자 건강검진 안내입니다." },
            { text: "검진 당일 아침은 금식해야 합니다." },
            { text: "검진 장소는 지정 병원입니다." },
            { text: "검진 비용은 본인이 전액 부담합니다." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "높은 곳에서 작업할 때는 떨어질 위험이 있으므로 반드시 ______을/를 착용하고 고리를 걸어야 합니다.",
        image: "",
        options: [
            { text: "안전대" },
            { text: "귀마개" },
            { text: "보안경" },
            { text: "슬리퍼" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "작업장 바닥에 기름이 떨어져 있으면 미끄러져 다칠 수 있으니 즉시 ______해야 합니다.",
        image: "",
        options: [
            { text: "닦아내야" },
            { text: "칠해야" },
            { text: "자켜야" },
            { text: "쌓아야" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "한국에서 일을 하려면 고용노동부에서 발급하는 ______을/를 작성해야 합니다.",
        image: "",
        options: [
            { text: "표준근로계약서" },
            { text: "영수증" },
            { text: "처방전" },
            { text: "비행기표" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "퇴근하기 전에는 전기 사고를 예방하기 위해 사용하지 않는 기계의 스위치를 ______ 플러그를 뽑습니다.",
        image: "",
        options: [
            { text: "내리고" },
            { text: "올리고" },
            { text: "켜고" },
            { text: "사고" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "기숙사는 여러 사람이 함께 사용하는 공간이므로 밤 10시 이후에는 큰 소리로 이야기하면 ______.",
        image: "",
        options: [
            { text: "안 됩니다" },
            { text: "됩니다" },
            { text: "좋습니다" },
            { text: "괜찮습니다" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "화재가 발생했을 때는 당황하지 말고 \"불이야\" 하고 외친 후 ______을/를 사용하여 초기 진화를 시도합니다.",
        image: "",
        options: [
            { text: "소화기" },
            { text: "환풍기" },
            { text: "체중계" },
            { text: "계산기" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "17. 물건의 무게를 측정할 때 사용하는 도구입니다.",
        detail: "",
        image: "",
        options: [
            { text: "저울" },
            { text: "줄자" },
            { text: "망치" },
            { text: "스패너" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        num: "18. 화재나 비상 상황 시 안전하게 건물 밖으로 대피할 수 있도록 설치된 전용 출입구입니다.",
        detail: "",
        image: "",
        options: [
            { text: "비상구" },
            { text: "매점" },
            { text: "탈의실" },
            { text: "세면장" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "19. 작업을 마친 후에는 사용한 공구를 정해진 공구함에 잘 정리해 두어야 다음 작업자가 안전하게 사용할 수 있습니다.",
        detail: "",
        image: "",
        options: [
            { text: "작업 후 공구 정리가 필요합니다." },
            { text: "공구는 아무 바닥에나 두면 됩니다." },
            { text: "다음 작업자는 공구를 쓸 수 없습니다." },
            { text: "작업 전에는 공구를 버려야 합니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "20. 외국인 등록증을 분실했을 때는 14일 이내에 출입국·외국인관서에 방문하여 재발급을 신청해야 합니다.",
        detail: "",
        image: "",
        options: [
            { text: "분실 후 14일 이내 재발급 신청을 해야 합니다." },
            { text: "등록증을 잃어버려도 신고할 필요가 없습니다." },
            { text: "재발급은 은행에서 신청합니다." },
            { text: "신청 기한은 1년 이내입니다." }
        ],
        correct: 0,
        points: 2.5
    },


    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-21.mp3",
        options: [
            { text: "안전대" },
            { text: "안전모" },
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
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-22.mp3",
        options: [
            { text: "망치로 못을 박고 있습니다." },
            { text: "스패너로 볼트를 조이고 있습니다." },
            { text: "빗자루로 바닥을 쓸고 있습니다." },
            { text: "가위로 종이를 자르고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "23.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-23.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-25-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-23-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-23-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-23-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-24.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-24-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-24-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-24-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-24-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-25.mp3",
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
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-26.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-26-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-26-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-26-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-26-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-27.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-27-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-27-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-27-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-27-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-28.mp3",
        options: [

            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-28-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-28-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-28-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-28-4.webp" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-29.mp3",
        options: [
            
            { text: "아니요, 내일 갈 거예요." },
            { text: "네, 선반 두 번째 칸에 있어요." },
            { text: "네, 밥을 맛있게 먹었어요." },
            { text: "아니요, 버스가 늦게 왔어요." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-30.mp3",
        options: [
            { text: "네, 특별한 일 없으니 갈게요." },
            { text: "아니요, 지갑을 잃어버렸어요." },
            { text: "네, 날씨가 아주 맑아요." },
            { text: "아니요, 어제 옷을 샀어요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-31.mp3",
        options: [
            
            { text: "아니요, 지하철을 탔어요." },
            { text: "네, 한국어 시험을 봐요." },
            { text: "아니요, 감기에 걸렸어요." },
            { text: "네, 바닥 쓸고 공구도 다 넣었어요." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-32.mp3",
        options: [
            { text: "매달 10일이에요." },
            { text: "사무실로 가세요." },
            { text: "안전모를 쓰세요." },
            { text: "기차표를 샀어요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[33] 이어지는 말을 고르십시오.",
        num: "33.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-33.mp3",
        options: [
            { text: "네, 조심히 가세요. 내일 봐요!" },
            { text: "아니요, 안 사겠습니다." },
            { text: "네, 맛있게 드세요." },
            { text: "죄송하지만 지갑이 없어요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "34.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-34.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-34-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-34-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-34-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-35.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-34-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-35-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-35-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-35-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-36.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-25-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-27-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-36-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-36-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "37. 남자는 왜 지게차를 운전하고 있습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-37.mp3",
        options: [
            { text: "팔레트를 옮기기 위해" },
            { text: "바닥을 청소하기 위해" },
            { text: "스위치를 켜기 위해" },
            { text: "외출을 하기 위해" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "38. 두 사람은 퇴근 후에 무엇을 하기로 했습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-38.mp3",
        options: [
            { text: "삼겹살 먹으러 가기" },
            { text: "영화 보러 가기" },
            { text: "야간 근무 하기" },
            { text: "병원에 방문하기" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "39. 여자는 내일 아침에 어디로 가야 합니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-39.mp3",
        options: [
            { text: "회사 지정 병원" },
            { text: "출입국 관서" },
            { text: "주민센터" },
            { text: "우체국" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "40. 두 사람은 무엇에 대해 이야기하고 있습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-40.mp3",
        options: [
            { text: "기숙사 금연 규칙" },
            { text: "안전화 착용 안내" },
            { text: "월급 인상 소식" },
            { text: "주말 휴무 일정" }
        ],
        correct: 0,
        points: 2.5
    }

];